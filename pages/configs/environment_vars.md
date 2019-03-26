---
layout: page
title: Environment variables
navigation_source: docs_nav
---

There are several shell environment variables that you can use to customize the Rush tool's behavior.

## RUSH_TEMP_FOLDER

This variable overrides the temporary folder used by Rush.  The default value is "common/temp" under the
repository root.

## RUSH_PREVIEW_VERSION

This variable overrides the version of Rush that will be installed by the version selector.  The default value
is determined by the `rushVersion` field from rush.json.

For example, if you want to try out a different release of Rush before upgrading your repo, you can assign
the variable like this:

```shell
$ set RUSH_PREVIEW_VERSION=5.0.0-dev.25
$ rush install
```

## RUSH_VARIANT

This variable selects an alternate installation variant for Rush to use when installing and linking
package dependencies.  For more information about this feature, see
[Installation Variants]({% link pages/advanced/installation_variants.md %}).

## RUSH_ABSOLUTE_SYMLINKS

If this variable is set to "true", Rush will create symlinks with absolute paths instead
of relative paths. This can be necessary when a repository is moved during a build or
if parts of a repository are moved into a sandbox.
