---
layout: post
title: Rush now has preliminary support for PNPM
author: Nick Pape
authorLink: https://github.com/nickpape-msft
---

We have added support in Rush for the [PNPM package manager](https://github.com/pnpm/pnpm). PNPM has several advantages over NPM, including performance, disk efficiency, rigor and simplicity. The primary idea behind PNPM is to install packages a single time, and construct your node_modules folder using only symlinks. By comparison, NPM imposes a tree of physical folders that often requires excessive duplication of the exact same contents.

We just enabled PNPM for use by people who work in the web-build-tools repository!

Testing locally, in web-build-tools, PNPM appears to greatly improve rush generate speeds!

![performance comparison](https://raw.githubusercontent.com/Microsoft/web-build-tools/master/common/wiki-images/performance_pnpm.png)

|                             | PNPM         | NPM          |
|-----------------------------|--------------|--------------|
| install (clean) performance | 231 s        | 304 s        |
| install (clean) disk usage  | 175 mb       | 200 mb       |
| rush link (clean)           | <1 s         | 60 s         |
| generate (not clean)        | 48 s         | 271 s        |

### Benefits

* PNPM eliminates the annoying [race condition issue](https://github.com/request/request/issues/2807) in NPM!
* **Disk efficiency** - unlike NPM, PNPM will install a specific version of a package only once on disk, saving many gigabytes (reducing node_modules folder size from 10-30%).
* **Performance** – since PNPM only install packages a single time, then constructs the dependency graph using much cheaper symlinks, it is also much faster than PNPM. This in turn makes rush install much faster.
* With PNPM, “rush generate” is much faster because we no longer have to delete the node_modules folder and do a full re-install.
* **Rigor** – PNPM creates links in the node_modules folder *only* for direct dependencies. This means you can’t accidentally `require()` things that aren’t in your package.json, which can lead to strange errors for consumers of your library.
* **Simpler structure** – this will enable to more easily implement Rush feature requests such as repo-to-repo linking.

### How to use PNPM
Simply change the `npmVersion` field in your `package.json` to `pnpmVersion`, as documented in the "How to tell Rush which package manager to use" section of [this page](https://github.com/Microsoft/web-build-tools/wiki/Rush-~-NPM-vs-PNPM-vs-Yarn#how-to-tell-rush-which-package-manager-to-use).