---
layout: page
title: Phantom dependencies
navigation_source: docs_nav
---

Rush's documentation occasionally mentions "phantoms" and "doppelgangers".
Want to learn more about how JavaScript package managers work?


## Some history and some theory

First, a little background:  Everyone knows that software **packages** can depend on other
**packages** according to a [dependency graph](https://en.wikipedia.org/wiki/Dependency_graph),
which is a kind of [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
in computer science.  (Right?  If not, go read those articles!)  For example, library **A**
might import definitions from libraries **B** and **C**, but then **B** and **C** can both
import from **D**, which creates "**diamond dependency**" between these four packages.
Conventionally the programming language's **module resolver** looks up imported packages by
traversing edges of this graph, although the packages themselves are normally installed in
a central store that's shared by different projects.

For historical reasons, NodeJS and NPM took a different approach of representing
this graph physically on disk, where graph nodes are package folder copies, and edges are subfolder
relationships, but with a [special rule](https://nodejs.org/api/modules.html#modules_all_together)
that effectively adds a graph edge pointing to the immediate children of every (recursive) parent.
In computer science this rule generalizes the
[tree data structure](https://en.wikipedia.org/wiki/Tree_(data_structure)) such that
(1) it can now represent some but not all directed acyclic graphs, and (2) it picks up some
extra ("phantom") edges that do not correspond to any declared dependency.

NPM's design has many unique characteristics that differ from traditional package managers:

- Each (root-level) project gets its own **node_modules** tree containing all of its dependencies,
  at least one copy of every package's contents.  Even a very small NodeJS project is
  likely to have more than 10,000 files copied under its folder.

- In NPM version 2, the **node_modules** folder tree was very deep and extensively duplicated,
  in order to minimize extra ("phantom") graph edges.  NPM version 3 improved the installation
  algorithm to flatten the tree, based on the realization that duplicate folders are a much worse
  problem than extra graph edges.  In some cases the algorithm will also select a slightly older
  version of a package (respecting SemVer) to further reduce duplication of package folders.

- The installed **node_modules** tree is not unique -- there are many possible ways to arrange
  package folders into a tree to approximate the directed acyclic graph, and there is no
  unique "normalized" arrangement.  The tree you get depends on whatever heuristics your
  package manager algorithm chose to follow.  NPM's own heuristics are even sensitive to
  [the order in which you add packages](http://npm.github.io/how-npm-works-docs/npm3/non-determinism.html).


The **node_modules** tree is an unusual and mathematically rich data structure.
But let's focus on three consequences that cause real life trouble, and can be particularly
difficult to diagnose in a large and very active monorepo.  We'll also show how Rush improves
things.


## Phantom dependencies

A "phantom dependency" occurs when a project requires a package that is not defined
in its **package.json** file.  Consider this example:

**my-library/package.json**
```json
{
  "name": "my-library",
  "version": "1.0.0",
  "main": "lib/index.js",
  "dependencies": {
    "minimatch": "^3.0.4"
  },
  "devDependencies": {
    "rimraf": "^2.6.2"
  }
}
```

But suppose that the code looks like this:

**my-library/lib/index.js**
```javascript
var expand = require("brace-expansion");
var glob = require("glob")
var minimatch = require("minimatch")

// (more code here that uses those libraries)
```

Wait a sec -- two of these libraries are not declared as dependencies
in the **package.json** file.  How is this working at all!?  It turns out that
**brace-expansion** is a dependency of **minimatch**, and **glob** is a dependency
of **rimraf**, and during installation NPM has flattened their folders to be under
**my-library/node_modules**.  The NodeJS `require()` function finds them there,
because it probes for folders without considering the **package.json** files at all.
This is perhaps counterintuitive, but it seems to work just fine.  Maybe it's a
convenient shorthand?

Unfortunately it creates a risk of future failures:

- **Breaking API changes:**  Although our library's **package.json** declared that
  it needs **minimatch** version 3, we don't have any say about the version
  of **brace-expansion** that we'll get.  The [SemVer rules](https://semver.org/) make
  it perfectly legal for a PATCH release of **minimatch** to incorporate a MAJOR upgrade of
  the **brace-expansion** library, as long as it doesn't affect the API signature
  for **minimatch**.  In practice we'll probably never encounter this as developers of
  **my-library** -- instead, it will be found by a poor victim who installs our published
  library later in some very different **node_modules** arrangement that has newer (or older)
  version constraints that what we regularly test.

- **Missing dependencies:**  The **glob** is coming from our `devDependencies`, which
  means it only gets installed for developers working on the **my-library** project.
  For other consumers, `require("glob")` should fail with an error because **glob**
  won't get installed at all for them.  We should hear about it as soon as we publish
  the **my-library** package, right?  But no, in practice it's likely that most consumers
  will also depend on some version of **rimraf** themselves, so it may appear to work.
  Only a small percentage of victims will encounter the error, making it harder to
  repro and report.

**How Rush helps:** Rush's symlinking strategy ensures that each project's **node_modules**
contains only its immediate declared dependencies.  This catches undeclared dependencies
immediately at build time.  If you're using the PNPM package manager, the same protections
are applied to all indirect dependencies (with the ability to workaround any "bad" packages
by using **pnpmfile.js**).


## Phantom node_modules folders

Suppose we have a monorepo, and someone put a root-level **package.json** there
like this:

**my-monorepo/package.json**:
```json
{
  "name": "my-monorepo",
  "version": "0.0.0",
  "scripts": {
    "deploy-app": "node ./deploy-app.js"
  },
  "devDependencies": {
    "colors": "~1.3.2"
  }
}
```

The idea is that we can tell people to run `npm run deploy-app`, and our script will
automatically deploy all the monorepo projects.  (Don't do that with Rush! It provides
[Custom commands]({% link pages/maintainer/custom_commands.md %} for this purpose.)
But this hypothetical script needs to print colored text, so we also ask people to run
`npm install` which will install the **colors** library.

The resulting folder tree will look like this:

```
- my-monorepo/
  - package.json
  - node_modules/
    - colors/
    - ...
  - my-library/
    - package.json
    - lib/
      - index.js
    - node_modules/
      - brace-expansion
      - minimatch
      - ...
```

But recall that NodeJS's module resolver can also find dependencies in a parent folder.
This means that our **lib/index.js** will be able to call `require("colors")` and find
this dependency, even if it doesn't appear anywhere under its own **node_modules** subtree.
This is an even insidious way to pick up accidental phantom dependencies!

**How Rush helps:** Rush's got you covered!  The `rush install` command scans all
potential parent folders and issues a warning if any phantom **node_modules** folders
are found.


#### Next up: [NPM doppelgangers]({% link pages/advanced/npm_doppelgangers.md %})
