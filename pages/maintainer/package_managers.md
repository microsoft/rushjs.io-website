---
layout: page
title: NPM vs PNPM vs Yarn
navigation_source: docs_nav
---

In order to install a JavaScript library, you need to choose one of several different package manager tools, that all do the same thing, but in slightly different ways.  (Our community loves flexibility and choices!)  Rush supports the three most popular package managers.  In chronological order:

- [NPM](https://docs.npmjs.com/getting-started/what-is-npm): The tool that pioneered the packaging standard and registry protocol used by most JavaScript package managers today.  The tool's developers also maintain the NPM package registry, which is currently the most popular place to distribute open source JavaScript libraries.

- [Yarn](https://yarnpkg.com/en/): A complete rewrite of the NPM tool that preserves the same installation model, but promises faster installations, fewer bugs, and some cool new features (e.g. Yarn workspaces) that facilitate large scale development.

- [PNPM](https://pnpm.js.org/): A fundamentally new installation model that eliminates the "NPM doppelganger" and "phantom dependency" problems, while cleverly making use of [symlinks](https://en.wikipedia.org/wiki/Symbolic_link) to remain 100% compatible with the NodeJS module resolution standard.


## Which one should I use with Rush?

The answer depends on your needs.  The Rush developers don't endorse a particular package manager, but here are some observations based on our experience with managing very large monorepos.

#### NPM pros and cons

- NPM is the most compatible choice, and is most likely to work with legacy packages.

- If you choose NPM, you will need to do trial+error to find a version number that works correctly with Rush.  NPM 5.x and 6.x are both known to have unfixed regressions that cause trouble in Rush repos.  Unfortunately **4.5.0** is the most recent version that is known to be very reliable.  (We'd greatly appreciate community help fixing the NPM issues that were reported but remain unfixed.)

> Before reporting a Rush bug involving the NPM package manager, first try downgrading to `"npmVersion": "4.5.0"`.  If that eliminates the repro, then your issue is likely an NPM regression and may not be fixable in the Rush code base.  We still accept these issues, but we track them differently.

#### PNPM pros and cons

- NPM doppelgangers are not merely a performance issue. They lead to actual semantic problems (e.g. build tools have a hard time dealing with two copies of the same version of the same library).  In a large monorepo, these problems are more likely to occur and more difficult to diagnose.  PNPM is the only supported package manager that eliminates these problems.

- Although PNPM adheres to the modern NodeJS module resolution standard, many legacy packages do not, which causes compatibility problems that only affect PNPM.  Thus, most teams that migrate existing projects to PNPM encounter various "bad packages" that need fixes.  The typical symptoms are (1) importing packages not listed in their **package.json** file, or (2) implementing their own module resolution that doesn't handle symlinks according to the standard.  This can often seem daunting for a small team.  (The [PNPM Gitter chat room](https://gitter.im/pnpm/pnpm) can be helpful, though.)

- PNPM is newer and less widely used than NPM or Yarn, but it's an industrial strength tool.  At Microsoft, we use PNPM in repos with hundreds of projects and hundreds of PRs per day, and have found it to be very fast and reliable.

#### Yarn pros and cons

- Rush recently implemented Yarn support.  It's not yet heavily tested, so we will happily try to fix any issues that are reported.  If you can't use PNPM, this is your best bet for support from the Rush developers.

- Yarn's "resolutions" feature is not yet compatible with Rush.  (See [Rush issue #831](https://github.com/Microsoft/web-build-tools/issues/831).)

- Yarn's "workspaces" are not supported because they rely on an installation model that does not protect against phantom dependencies.  Rush's linking strategy is mostly equivalent to workspaces.

## Specifying your package manager

To change your package manager, edit the **rush.json** file and uncomment one of the three fields (`npmVersion`, `pnpmVersion`, or `yarnVersion`):

**rush.json**
```
/**
  * The next field selects which package manager should be installed and determines its version.
  * Rush installs its own local copy of the package manager to ensure that your build process
  * is fully isolated from whatever tools are present in the local environment.
  *
  * Specify one of: "pnpmVersion", "npmVersion", or "yarnVersion".  See the Rush documentation
  * for details about these alternatives.
  */
"pnpmVersion": "2.15.1",

// "npmVersion": "4.5.0",
// "yarnVersion": "1.9.4",
```

After changing the setting, delete your old shrinkwrap file and other package manager specific files from the **common/config/rush** folder.  Then run `rush update --full`.
