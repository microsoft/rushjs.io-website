---
layout: page
title: Phantom dependencies
navigation_source: docs_nav
---

Rush's documentation occasionally mentions "phantoms" and "doppelgangers".
Want to learn more about how JavaScript package managers work?


## Some history and some theory

Everyone knows that software **packages** can depend on other **packages**, and the resulting
[dependency graph](https://en.wikipedia.org/wiki/Dependency_graph) is a kind of
[directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
in computer science.  Unlike a tree data structure, a directed acyclic graph can have
diamond-shaped branches that rejoin.  For example, library **A** might import definitions from
libraries **B** and **C**, but then **B** and **C** can both import from **D**, which creates
a "**diamond dependency**" between these four packages.  Conventionally the programming language's
**module resolver** looks up imported packages by traversing edges of this graph, although
(in other systems) the packages themselves are normally installed in a central store
so they can be shared by many projects.

For historical reasons, NodeJS and NPM took a different approach of representing
the graph physically on disk:  With this approach, the graph's vertexes are actual package folder copies,
and its edges are subfolder relationships.  But a folder tree's branches cannot rejoin to make diamonds,
so NodeJS added a [special resolution rule](https://nodejs.org/api/modules.html#modules_all_together)
whose effect is to introduce extra graph edges (pointing to the immediate children of all parent folders).
From a computer science perspective, this rule relaxes the file system's
[tree data structure](https://en.wikipedia.org/wiki/Tree_(data_structure)) so that
(1) it can now represent some (but not all) directed acyclic graphs, and (2) we pick up some
extra ("phantom") edges that do not correspond to any declared package dependency.

NPM's approach has many unique characteristics that differ from traditional package managers:

- Each (root-level) project gets its own **node_modules** tree containing all the dependencies --
  at least one copy of every package's contents.  Even a very small NodeJS project is
  likely to have more than 10,000 files copied under its folder.

- In NPM 2.x, the **node_modules** folder tree was very deep and duplicated,
  in order to minimize extra ("phantom") graph edges.  NPM 3.x improved the installation
  algorithm to flatten the tree, based on the realization that duplicate folders are a much worse
  problem than extra graph edges.  In some cases the new algorithm will also choose a slightly older
  version of a package (while still satisfying SemVer) to further reduce duplication of package folders.

- The installed **node_modules** tree is not unique.  There are many possible ways to arrange
  package folders into a tree to approximate the directed acyclic graph, and there is no
  unique "normalized" arrangement.  The tree you get depends on whatever heuristics the
  package manager chose to follow.  NPM's own heuristics are even sensitive to
  [the order in which you add packages](http://npm.github.io/how-npm-works-docs/npm3/non-determinism.html).


The **node_modules** tree is an unusual and mathematically rich data structure.
But let's focus on three consequences that can cause real trouble, and can be particularly
difficult to diagnose in a large and very active monorepo.  We'll also show how Rush improves
things -- mitigating these problems was one of the original motivations for creating the Rush tool!


## Phantom dependencies

A "phantom dependency" occurs when a project uses a package that is not defined
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
var expand = require("brace-expansion");  // ???
var glob = require("glob")  // ???
var minimatch = require("minimatch")

// (more code here that uses those libraries)
```

Wait a sec -- two of these libraries are not declared as dependencies
in the **package.json** file.  How is this working at all!?  It turns out that
**brace-expansion** is a dependency of **minimatch**, and **glob** is a dependency
of **rimraf**.  During installation, NPM has flattened their folders to be under
**my-library/node_modules**.  The NodeJS `require()` function finds them there,
because it probes for folders without considering the **package.json** files at all.
This is perhaps counterintuitive, but it seems to work just fine.  Maybe it's a
feature and not a bug?

Unfortunately this project's missing declarations are best considered a bug.
It can lead to unexpected malfunctions or errors:

- **Incompatible versions:**  Although our library's **package.json** declared that
  it needs **minimatch** version 3, we don't have any say about the version
  of **brace-expansion** that we'll get.  The [SemVer system](https://semver.org/) makes
  it perfectly legal for a PATCH release of **minimatch** to incorporate a MAJOR upgrade of
  the **brace-expansion** library, as long as it doesn't affect the API signature
  for **minimatch**.  In practice we'll probably never encounter this as developers of
  **my-library** -- instead, it will be found by a poor victim who installs our published
  library later in some very different **node_modules** arrangement that has newer (or older)
  version constraints than what we regularly test.

- **Missing dependencies:**  The **glob** package is coming from our `devDependencies`, which
  means it only gets installed for developers who work on the **my-library** project.
  For other consumers, `require("glob")` should fail immediately with an error because **glob**
  won't get installed at all for them.  We should hear about it as soon as we publish
  the **my-library** package, right?  Not exactly.  In practice it's likely that most consumers
  will also have **glob** for some reason (e.g. using **rimraf** themselves),
  so it may appear to work.  Only a small percentage of our consumers will encounter the
  failed import error, making it seem like they're reporting a weird issue that's difficult to repro.

**How Rush helps:** Rush's symlinking strategy ensures that each project's **node_modules**
contains only its declared direct dependencies.  This catches phantom dependencies
immediately at build time.  If you're using the PNPM package manager, the same protections
are also applied to all indirect dependencies (with the ability to workaround any "bad" packages
by using **pnpmfile.js**).


## Phantom node_modules folders

Suppose we have a monorepo, and someone adds a root-level **package.json** file
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

The intent is that we'll tell people to run `npm run deploy-app`, and our script will
automatically deploy all the projects in the monorepo.  That's why it's in the repo
root folder.  (Don't do that with Rush! Instead define a
[custom command]({% link pages/maintainer/custom_commands.md %}).)
Since this hypothetical script needs to print colored text, let's say we first ask people to run
`npm install` in the repo root folder, which will install the **colors** library
from the `devDependencies` above.

The resulting folder tree would look like this:

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

But recall that NodeJS's module resolver also looks for dependencies in parent folders.
This means that our **my-library/lib/index.js** can call `require("colors")` and find
the **colors** package, even if it doesn't appear anywhere under **my-library/node_modules**.
This is an even more insidious way to pick up accidental phantom dependencies -- it can
sometimes find **node_modules** folders that aren't even under your Git working directory!

**How Rush helps:** Rush's got you covered.  The `rush install` command scans all
potential parent folders and issues a warning if any phantom **node_modules** folders
are found.


#### Next up: [NPM doppelgangers]({% link pages/advanced/npm_doppelgangers.md %})
