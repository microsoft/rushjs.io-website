---
layout: page
title: Getting Started
navigation_source: docs_nav
---

## 3 minute demo

Want to see Rush in action?  The only prerequisite you need is NodeJS.  (We recommend the latest [LTS version](https://nodejs.org/en/download/releases/), and you might consider installing via [nvm-windows](https://github.com/coreybutler/nvm-windows) or [nvm](https://github.com/creationix/nvm) (Mac/Linux) so you can easily switch between NodeJS versions.)

**From your shell, install Rush like this:**
```
$ npm install -g @microsoft/rush
```

**For command-line help, do this:**
```
$ rush -h
```

**To see Rush build some real projects, try running these commands:**
```
$ git clone https://github.com/Microsoft/web-build-tools
$ cd web-build-tools
$ rush install
$ rush install  # <-- instantaneous!
$ rush rebuild
$ rush build    # <-- instantaneous!
```

_(If you don't have a GitHub account set up, you can use `rush install --bypass-policy`.)_

## Let's get started!

Choose your tutorial scenario...

- [I'm a developer.]({% link pages/developer/new_developer.md %}) Learn how to work in a repo that already uses Rush.
- [I'm a repo maintainer.]({% link pages/maintainer/setup_new_repo.md %})  Learn how to convert your repo to use the Rush system.

