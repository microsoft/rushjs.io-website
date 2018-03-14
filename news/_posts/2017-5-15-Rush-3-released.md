---
layout: post
title: Rush 3 released!
author: Pete Gonzalez del Solar
authorLink: https://github.com/pgonzal
---

_**This is a breaking change.  In order to upgrade, you must migrate your repo.**_  In the past, Rush upgrades have always been backwards compatible, but this time we made some structural changes that would be expensive to support.  (We're planning a future feature that will allow Rush to emulate old versions of itself, but it's not ready yet.)

_NOTE: If your repo hasn't been upgraded yet, you can use `npm install -g @microsoft/rush@2.5.0` to install the old version._

### What's new in Rush 3

- **Streamlined workflow:**  Hurray!  You no longer need to run `rush generate` every time you modify a **package.json** file. Just run a simple `rush install`, and in most cases Rush will find what it needs in your existing shrinkwrap file.  You can even add new projects.  Under this new model, _**you never need to run `rush generate` unless `rush install` explicitly tells you to**_.  This is a big change that eliminates a lot of hassle from your everyday Rush experience.

- **Simplified .gitignore**:  When setting a new repo, you no longer need to guess about which files to commit.  Every temporary file for Rush has been moved under **./common/temp**, so now a single .gitignore rule is all you need.

- **Simplified configuration**: We eliminated some obscure and deprecated settings, and consolidated Rush's config files in a single folder **./common/config/rush**.  (**rush.json** still goes at your repo root.)

- **Improved package approval**: The old "packageReviewFile" setting has been replace by two separate config files **browser-approved-packages.json** and **nonbrowser-approved-packages.json**.  (When the list was combined in a single file, people didn't realize there were two sections, so this solves that problem.)

- **Shorter command line**: We renamed some Rush command-line verbs:  `rush check` is now `rush scan`, and `rush check-versions` is now just `rush check`.

- **Infrastructure improvements**:  The `rush link` command now skips if nothing has changed.  The change log data files were redesigned to support subset publishing (coming soon!).  More operations use the AsyncRecycleBin optimization.  Better unit test coverage.

### Migration checklist

When upgrading a repo to use Rush 3:
1. Delete "common/package.json" and "common/temp_modules/..." and remove them from Git
2. Move your "npm-shrinkwrap.json" and (if needed) ".npmrc" files into the "common/config/rush" folder.
3. If you have a "pinnedVersions.json" file, rename it to "pinned-versions.json" and move under "common/config/rush" as well.
4. Delete the "commonFolder" and "useLocalNpmCache" settings from your **rush.json** file.
5. **If you use the "packageReviewFile" feature:** Split the review file into "browser-approved-packages.json" and "nonbrowser-approved-packages.json" files, and move them to "common/config/rush".  In rush.json, delete the "packageReviewFile" setting, and move your "reviewCategories" into an "approvedPackagesPolicy" block like this:
```json
  "approvedPackagesPolicy": {
    "reviewCategories": [ "first-party", "third-party", "prototype" ],
    "ignoredNpmScopes": [ "@types" ]
  },
```
6. Delete extraneous .gitignore rules from the old Rush; see [[Setting up your repo|Rush ~ Setting up your repo]] for a .gitignore example.
7. Rush "rush generate" again
8. If you have any tools that use **@microsoft/rush-lib**, you may need to update their code.