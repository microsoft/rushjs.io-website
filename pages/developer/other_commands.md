---
layout: page
title: Other helpful commands
navigation_source: docs_nav
---

## Installing the latest SemVer-compatible version of everything

Normally `rush update` only makes the minimal incremental changes necessary to satisfy the the project **package.json** files.  If you want to update everything to the latest version, you would do this:

```sh
# This effectively deletes the old shrinkwrap file and re-solves everything
# using the latest compatible versions as specified in package.json files.
# Note that the package.json files themselves are not modified.
$ rush update --full
```

For everyday work, `--full` can introduce unrelated breaks in your PR branch, for example if one of the dependencies didn't perfectly follow the SemVer rules.  This isn't too much of a concern for small repos. For a large monorepo, we recommended to use `rush update` for everyday work, and then run `rush update --full` periodically as a separate workflow by a CI job or designated person.

## Faster ways to build

- **If you're only working on a few projects**: Let's say your Git repo contains 50 projects, but you really only work on the **widget** and **widget-demo** projects.  You can ask Rush to build only those two projects, plus the libraries that they depend on:  `rush rebuild --to widget --to widget-demo`

- **If you changed a library**: Let's say your Git repo contains 50 projects, and you just fixed some bugs in the **widget** library.  You need to run unit tests for all the projects that use this library, and anything that depends on them, but it would be wasteful to rebuild everything else.  To rebuild just the downstream projects:  `rush rebuild --from widget`

## Getting back to a clean state

After working with Rush, maybe you want to get back to a clean state, e.g. so you can zip up a folder.  Here's a couple commands to do that:

```sh
# Remove all the symlinks created by Rush:
$ rush unlink

# Remove all the temporary files created by Rush, including deleting all
# the NPM packages that were installed in your common folder:
$ rush purge
```

#### Next up: [Configuring tab completion]({% link pages/developer/tab_completion.md %})

