---
layout: page
title: NPM vs PNPM vs Yarn
navigation_source: docs_nav
---

There are three main package managers for the npm registry. The original one, written by NPM Inc was [NPM](https://docs.npmjs.com/getting-started/what-is-npm). It is the most widely used package manager, but more recently, other package managers have been gaining more and more adoption. One such package manager is Yarn, which was created by Facebook. Yarn is more-or-less "npm plus" some extra functionality. It is also more performant that NPM, but because it has important model differences, we haven't added support for it yet, as this would be a non-trivial amount of work. Another alternative package manager is [PNPM](https://pnpm.js.org/). PNPM is much more performant and wastes much less disk space due to its fundamentally better design. We have recently added support in Rush for using PNPM, as we think it's improved design is superior to both NPM and Yarn.

## Which one should I use?
### NPM
NPM was the original package manager used by Rush. While it is likely the most stable package manager, it is also by far the least performance in terms of speed and disk usage. Make sure to use NPM 4, as NPM 5 has had a large number of regressions and is not fully supported by Rush.

### PNPM
PNPM is the exciting new one that you may want to try, it has improved architecture. PNPM has several advantages over NPM, including performance, disk efficiency, rigor and simplicity. The primary idea behind PNPM is to install packages a single time, and construct your node_modules folder using only symlinks. By comparison, NPM imposes a tree of physical folders that often requires excessive duplication of the exact same contents.

PNPM has a few other benefits:
* PNPM eliminates the annoying [race condition issue](https://github.com/request/request/issues/2807) in NPM!
* **Disk efficiency** - unlike NPM, PNPM will install a specific version of a package only once on disk, saving many gigabytes (reducing node_modules folder size from 10-30%).
* **Performance** – since PNPM only install packages a single time, then constructs the dependency graph using much cheaper symlinks, it is also much faster than PNPM. This in turn makes rush install much faster.
* With PNPM, “rush generate” is much faster because we no longer have to delete the node_modules folder and do a full re-install.
* **Rigor** – PNPM creates links in the node_modules folder *only* for direct dependencies. This means you can’t accidentally `require()` things that aren’t in your package.json, which can lead to strange errors for consumers of your library.
* **Simpler structure** – this will enable to more easily implement Rush feature requests such as repo-to-repo linking.

## How to tell Rush which package manager to use
Switching between PNPM and NPM is fairly trivial. Simply open your `rush.json` file, and either set the `npmVersion` or `pnpmVersion` field to whichever version of the package manager you are interested in doing.

For example, this repository is using PNPM, and the `rush.json` file looks like [this](https://github.com/Microsoft/web-build-tools/blob/master/rush.json#L2):
```
{
  "pnpmVersion": "1.43.1",
  ...
}
```

