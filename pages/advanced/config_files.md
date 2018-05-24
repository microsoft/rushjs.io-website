---
layout: page
title: Config file reference
navigation_source: docs_nav
---



## Configuration files

| File(s)                                  | What it does                    |
| :--------------------------------------- | :------------------------------ |
| rush.json                                | The main configuration file for Rush |
| common/changes/...                       | Storage for the `rush change` command |
| common/config/rush/.npmrc                | If you need custom settings for "npm install" (e.g. NPM registry mappings), put them in this file.  Rush will copy this file into the **common/temp/** folder. |
| common/config/rush/npm-shrinkwrap.json   | The NPM "[shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)" file. This ensures that if two developers pull the same checkpoint from Git, they will get the same results when they run "rush install." (This is crucial to avoiding maddening issues with "I dunno -- it builds for me!").  Rush will copy this file into the **common/temp/** folder. |
| common/config/rush/command-line.json  | Used to define [Custom commands]({% link pages/maintainer/custom_commands.md %}) |
| common/config/rush/browser-approved-packages.json   | Used by the **approvedPackagesPolicy** setting from rush.json |
| common/config/rush/nonbrowser-approved-packages.json   | Used by the **approvedPackagesPolicy** setting from rush.json |
| common/config/rush/pinned-versions.json  | Used to control versions for indirect dependencies. |
| common/config/rush/version-policies.json  | Controls how `rush publish` works. |


## Temporary files created by Rush

| File(s)                                  | What it does                    |
| :--------------------------------------- | :------------------------------ |
| common/temp/node_modules/...             | The installed packages.  This is a plain old `npm install` output, with no symlinks in this tree. |
| common/temp/npm-cache/...                | A local NPM cache will be created here.  Rush does not use the global NPM cache due to its concurrency problems. |
| common/temp/npm-local/...                | Based on the **npmVersion** setting, Rush will install NPM in your home directory and create a symlink to it for each repo that requests it. |
| common/temp/npm-tmp/...                  | Temporary files created by NPM during installation. |
| common/temp/projects/...                 | Synthetic projects referenced by **common/temp/package.json**. |
| common/temp/rush-recycler/...            | Used to speed up recursive deletes. |
| common/temp/last-install.flag            | Don't worry about this file.  It tracks the timestampe of the last successful `rush install`. |
| common/temp/package.json                      | The common package definition. |
| common/temp/rush-link.json               | Don't worry about this file.  It is created whenever you run `rush link`, and read by later commands such as "rush build". |

