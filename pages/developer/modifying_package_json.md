---
layout: page
title: Modifying package.json
navigation_source: docs_nav
---

Let's say you need to add a new dependency on a library "**example-lib**".  Without Rush, you would do something like this:  `npm install --save example-lib`.  Currently Rush doesn't have a handy command for this (it's in our backlog, PR's welcome!).

Fortunately there's a pretty great alternative if you use Visual Studio Code as your editor. Simply start typing `"example-lib":` into the **package.json** file, and VS Code will query the NPM registry and show autocomplete suggestions for the latest version number.  Easy!

After saving the file, then we need Rush to update your shrinkwrap file and perform the installation:

```sh
# Always run this command after editing package.json
$ rush update

# If there are changes to the shrinkwrap file, commit them to your branch
$ git commit -m "Ran 'rush update'"
```

## Upgrading to newer versions of your NPM packages

Today, Rush does not yet have an integrated equivalent of `npm update` or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).  So you if you want to update the SemVer patterns across all your package.json files, you'll need to use an external tool.

*NOTE: Bulk updating of package.json versions is an important feature.  We would love for someone to contribute a PR.  The only reason the Rush developers have not prioritized this is that it generally gets solved in various other ways for the monorepos that we manage.*

#### Next up: [Other helpful commands]({% link pages/developer/other_commands.md %})
