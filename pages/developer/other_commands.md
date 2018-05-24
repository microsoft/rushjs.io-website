---
layout: page
title: Other helpful commands
navigation_source: docs_nav
---

## Faster ways to build

- **If you're only working on a few projects**: Let's say your Git repo contains 50 projects, but you really only work on the **widget** and and **widget-demo** projects.  You can ask Rush to build only those two projects, and the libraries they depend on:  `rush rebuild --to widget --to widget-demo`

- **If you changed a library**: Let's say your Git repo contains 50 projects, and you just fixed some bugs in the **widget** library.  You need to run unit tests for all the projects that use this library, and anything that depends on them, but it would be wasteful to rebuild everything.  To rebuild just the downstream projects:  `rush rebuild --from widget`

- **Incremental builds**: (Experimental) If you're using **gulp-core-build** in your Gulpfile, the `rush build` command can examine your local changes and quickly determine which projects are affected by your change, and rebuild them only.  This is a very handy tool, but be aware that its change detection logic is unfinished and will miss some cases.  (For example, if you used `rush install` to update some dependencies, it won't realize this.)  In cases where `rush build` misses something, you can fall back to `rush rebuild`.

## Getting back to a clean state

After working with Rush, maybe you want to get back to a clean state, e.g. so you can zip up a folder.  Here's a couple commands to do that:

```sh
# Remove all the symlinks created by Rush:
$ rush unlink

# Remove all the temporary files created by Rush, including deleting all
# the NPM packages that were installed in your common folder:
$ rm -Rf ./common/temp/
```
