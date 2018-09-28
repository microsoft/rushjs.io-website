---
layout: page
title: Modifying package.json
navigation_source: docs_nav
---

Let's say you need to add a new dependency on a library "**example-lib**".  Without Rush, you would do something like this:

```sh
# DON'T DO THIS IN A RUSH REPO:
~/my-repo$ cd apps/my-app
~/my-repo/apps/my-app$ npm install --save example-lib
```

In a Rush repo, you should instead use the [rush add]({% link pages/commands/rush_add.md %}) command:

```sh
~/my-repo$ cd apps/my-app

# Add "example-lib" as a dependency of "my-app", and then automatically run "rush update":
~/my-repo/apps/my-app$ rush add --package example-lib
```

The `rush add` command can also be used to update the version of an existing dependency:

```sh
# Update "my-app" to use "example-lib" version "~1.2.3":
~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3

# Or if you want the version specifier "^1.2.3":
~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3 --caret

# A more advanced example, where we query the NPM registry to find latest version that is
# compatible with the SemVer specifier "^1.2.0" and then add it as a tilde dependency
# such as "~1.5.3".
#
# IMPORTANT: When specifying symbol characters on the command line, use quotes so they
# don't get misinterpreted by your shell.
~/my-repo/apps/my-app$ rush add --package "example-lib@^1.2.0"

# If any other projects in the repo are using "example-lib", you can update them all
# to "1.2.3" in bulk:
~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3 --make-consistent

```

The [command-line help]({% link pages/commands/rush_add.md %}) for `rush add` describes other options that you can use to customize the behavior.


> **Tip: A cool VS Code feature**
>
> By the way, if you use Visual Studio Code as your editor, another option is to simply edit the **package.json** file directly. If you start typing `"example-lib":`, VS Code will automatically query the NPM registry and show autocomplete suggestions for the latest published version.  For simple additions, this can be even quicker than `rush add`.
>
> If you modify **package.json** manually, don't forget to run `rush update` afterwards.


## Upgrading to newer versions of your NPM packages

Today, Rush does not yet have an integrated equivalent of `npm update` or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).  So you if you want to update the SemVer patterns across all your package.json files, you'll need to use an external tool.

*NOTE: Bulk updating of package.json versions is an important feature.  We would love for someone to contribute a PR.  The only reason the Rush developers have not prioritized this is that it generally gets solved in various other ways for the monorepos that we manage.*

#### Next up: [Other helpful commands]({% link pages/developer/other_commands.md %})
