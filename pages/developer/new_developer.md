---
layout: page
title: Getting started as a developer
navigation_source: docs_nav
---

## A couple caveats

Before we get started, a couple important points to keep in mind:

### 1. Avoid certain commands in a Rush repo

Rush installs all of your dependencies in a central folder, and then uses [symlinks](https://en.wikipedia.org/wiki/Symbolic_link) to recreate a "node_modules" folder for each of your projects.

**Do not use these NPM commands** because they will get confused by Rush's symlinks: `npm install`, `npm update`, `npm link`, `npm dedupe`, `npm prune`, etc.  (If you need to do that, first run `rush unlink` to delete the symlinks created by Rush.)

If you use `git clean -dfx` to clean up your folder, be aware that it handles symlinks poorly.  To avoid trouble, always run `rush unlink` before using `git clean -dfx`.


### 2. If you suspect your install is corrupted...

Rush's package management commands are "incremental", which means they save time by skipping steps that appear to be unnecessary.  Since Rush runs in automated environments, it has many safeguards to ensure these checks are accurate.  But when debugging and tinkering with packages, sometimes your NPM "node_modules" folder can get into a bad state, causing strange errors.

If you suspect your install is corrupted, try running `rush install --full-clean`.  It will clean out your folders, force a full reinstall of your packages, and usually get you back into a good state.

