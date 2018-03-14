---
layout: post
title: Rush 4 released!
author: pete
---

We’re excited to announce Rush version 4!  First things first...

### What repo maintainers need to do:

- To upgrade, repo maintainers should delete `rushMinimumVersion` from **rush.json**, and replace it with `"rushVersion": "4.0.0"`
- Or, if you’re not ready to migrate yet, make sure your `rushMinimumVersion` specifies the version you want developers using, because Rush 4’s version selector will install that for them
- If you rely on Rush command-line options that are being removed (`--vso`, `--npm`, `--ship`, `--minimal`, `--production`, `--colors`), you’ll need to update your build scripts
- If you rely on Rush invoking the `test` and `clean` scripts in your **package.json**, you’ll need to update your build scripts

Regular developers don’t need to do anything.  These changes should be transparent to the everyday developer experience.  And here's what's new under the hood...

### Simplified build model

Prior to Rush 4, when you ran "**rush rebuild**", it would do the following for each project:

#### Old Rush 3 Behavior
1. Execute the `"clean"` script from **package.json**
2. Execute the `"test"` script from **package.json** (or if `"test"` is not found, use the `"build"` script instead); the `--color` option was always appended to the script

   If the Rush command line included the options `--vso`, `--npm`, `--ship`, or `--minimal`, they were also appended to the `"test"` (or `"build"`) script.

#### New Rush 4 Behavior

1. Execute the “build” script from package.json.  By default NO options are appended.

   The options `--vso`, `--npm`, `--ship`, and `--minimal` are no longer built-in to Rush.  However, we have a new feature that allows repo maintainers to define their own options.  This is much more flexible!  ([See here](https://github.com/Microsoft/web-build-tools/wiki/Rush-~-Custom-commands) for detailed documentation.)

To minimize the migration pain, we’ve provided a [legacy-command-line.json](https://github.com/Microsoft/web-build-tools/blob/master/apps/rush-lib/etc/examples/legacy-command-line.json) sample that shows how to restore these options.  However, if you had `"clean"` or `"test"` scripts in your **package.json** files, you will still need to merge their implementation into your `"build"` script (e.g. by defining a `--no-clean` or `--no-test` option).

Note that the `--color` option is no longer appended.  This was a workaround for a problem where the **colors** and **chalk** libraries don't show colors when Rush executes your scripts in parallel and [collates](https://www.npmjs.com/package/@microsoft/stream-collator) their output.  With Rush 4, we recommend for your build scripts to show colors by default, and then use a `--no-color` option for cases such as Travis logs.  Since **colors** and **chalk** look at the `argv` variable, you can just add something like this to the top of your Gulpfile:

```javascript
if (process.argv.indexOf('--no-color') === -1) {
  process.argv.push('--color');
}
```

For a complete migration example, here’s the [PR](https://github.com/Microsoft/web-build-tools/pull/396) we used for upgrading **web-build-tools** to Rush 4.

### Improvements for “rush change”
 
Rush 4 includes some improvements to make change tracking more pleasant:
 
-	In the past, if you committed more fixes to your branch after running `rush change`, you couldn’t run it again without first deleting the JSON files it created.  That has been fixed!
-	`rush change` now allows you to enter multiple changes for the same project (e.g. for a PR that fixed several bugs)
-	We also fixed a usability issue where `rush change` would prompt for irrelevant release types (e.g. “major” when the major is supposed to be locked)
-	In the change logs, the message “Changes not tracked” now says “Version update only” to clarify that changes *are* being tracked

### The Rush version selector
 
In the past, developers could install any version of Rush that satisfies the `rushMinimumVersion` field.  This led to several problems:

- When a bug or compatibility issue occurred, people would have trouble reproducing it
- If the latest Rush release contained a bug, there was no easy way to downgrade everyone while waiting for a fix
- A certain class of bugs (e.g. shrinkwrap file format changes) arise only when your Rush version is different from the person who ran `rush generate`
 
Rush 4 solves all these problems by replacing `rushMinimumVersion` with an explicit `rushVersion`.  When you invoke Rush 4 from the command line, the “version selector” feature will examine this setting and automatically install that version of the engine (i.e. **rush-lib** package).  Regardless of which version of Rush a developer installed globally, inside a given repo the Rush tool will behave like the release specified in **rush.json**.  Even the `rush –h` command line help will be from this version.  (It even works for previous Rush versions -- Rush 4 will simply install the rushMinimumVersion.)
 
The version selector helps repo maintainers by ensuring deterministic build behavior for all users.  It helps developers by allowing them to work in different repos without worrying about which version of Rush they have installed.  (Unless the selector itself has a bug, you may never need to upgrade Rush again!)  Lastly, it helps the people who work on Rush by making regressions easier to diagnose and avoiding a fire drill when an issue is found.

> NOTE: Don’t forget to edit **rush.json** periodically to upgrade your `rushVersion`.  Otherwise, you’ll be stuck on the old version indefinitely.  :-)
 
### API cleanup for rush-lib
 
Moving all the Rush code into **rush-lib** enabled us to remove a bunch of internal utilities that were cluttering up the API.  The leaner, meaner **rush-lib** package is now documented in our [API reference](https://microsoft.github.io/web-build-tools/api/rush-lib.html).

### NPM 5 workaround
 
So far NPM 5 has been a...  rather rough ride.  As of version 5.5.1 it still has [regressions](https://github.com/npm/npm/issues/19006) that are causing trouble for people.  Rush 4 includes some workarounds that should eliminate the [recent issue](https://github.com/Microsoft/web-build-tools/issues/394) that was blocking people from using NPM 5.  (Our long term strategy is still to move to [PNPM](https://github.com/Microsoft/web-build-tools/wiki/Rush-~-FAQ#have-you-heard-of-yarn-or-pnpm), which should be available soon as an “opt-in” feature.  The [PR](https://github.com/Microsoft/web-build-tools/pull/427) is here.)
