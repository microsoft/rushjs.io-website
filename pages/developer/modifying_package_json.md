---
layout: page
title: Modifying package.json
navigation_source: docs_nav
---

Let's say you need to add a new dependency on a library "**example-lib**".  Without Rush, you would do something like this:  `npm install --save example-lib`.  Currently Rush doesn't have a handy command for this (it's in our backlog).  So for now, you will need to edit package.json manually, which means you need to determine the latest version of **example-lib**.

A quick way to do that is to use a scratch NPM project:
```sh
# Create a scratch project for experimenting with NPM
$ md scratch
$ npm init
$ npm install --save example-lib
```

Okay, let's say we open up **scratch/package.json** and find that NPM installed **example-lib** version 1.2.3.  For our real Rush project, we open **my-project/package.json** and manually add the dependency (or devDependency).  It will look something like this:

**my-project/package.json**
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "some-other-lib": "^2.3.4",
    "example-lib": "^1.2.3"
  }
}

```

After saving the file, then we need Rush to update your folder:

```sh
# Run "rush install" install the new dependency in your common folder.
$ rush install

# (Note that "rush install" automatically runs "rush link" to update
# your symlinks.)
```

Let's say `rush install` fails because **example-lib** is a new package for this repo.  In that case, it will tell you to run `rush generate`:

```sh
# (ONLY DO THIS STEP IF "rush install" TELLS YOU TO.)
# Because "rush install" failed, we need to run a full "rush generate"
$ rush generate

# The "rush generate" command will update your npm-shrinkwrap.json
# with the new dependencies.  We need to commit this change to Git:
$ git commit -m "Ran 'rush generate'"

```

## Upgrading to newer versions of your NPM packages

Rush maintains a principle that "builds should be deterministic."  We would never want two different people to run `rush install` and get different results.  That leads to frustrating problems (_"I dunno man, works fine on my PC!"_ or even worse _"What? I swear that everything built fine when I merged my PR!"_)  Rush uses NPM's [shrinkwrap feature](https://docs.npmjs.com/cli/shrinkwrap) to ensure installs are deterministic, and with [NPM 4](https://github.com/nodejs/node/blob/master/deps/npm/CHANGELOG.md#no-more-partial-shrinkwraps-breaking) it's now very reliable.

When you run `rush generate`, it deletes all the packages from your common folder and does a clean NPM install.  If your package.json file contains [SemVer](http://semver.org/) patterns (e.g. `"some-library": "^1.2.3"` or `"another-lib": ">=1.2.3 <2.0.0"`), then `rush generate` will upgrade you to the latest SemVer-compatible version.  This will show up in your pull request as a big diff for the file **common/config/rush/npm-shrinkwrap.json**.  We recommend you review these diffs, because they often help you to spot mistakes.

Rush does not yet have an integrated equivalent of `npm update` or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates), so you if you want to update the SemVer patterns across all your package.json files, you'll need to use an external tool.  We do provide a command `rush check` that you can use to enforce consistent versions across all your projects, or just see a report of what's different.
