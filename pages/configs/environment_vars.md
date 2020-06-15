---
layout: page
title: Environment variables
navigation_source: docs_nav
---

The Rush tool's behavior can be customized using the shell environment variables described below:

## RUSH_ABSOLUTE_SYMLINKS

If this variable is set to `true`, Rush will create symlinks with absolute paths instead
of relative paths. This can be necessary when a repository is moved during a build or
if parts of a repository are moved into a sandbox.

## RUSH_ALLOW_UNSUPPORTED_NODEJS

If this variable is set to `true`, Rush will not fail the build when running a version
of Node that does not match the criteria specified in the `nodeSupportedVersionRange`
field from **rush.json**.

## RUSH_DEPLOY_TARGET_FOLDER

This environment variable can be used to specify the `--target-folder` parameter
for the [rush deploy]({% link pages/commands/rush_deploy.md %}) command.

## RUSH_PARALLELISM

Specifies the maximum number of concurrent processes to launch during a build.
For more information, see the command-line help for the `--parallelism` parameter for
[rush build]({% link pages/commands/rush_build.md %}).

## RUSH_PNPM_STORE_PATH

When using PNPM as the package manager, this variable can be used to configure the path that
PNPM will use as the store directory.

If a relative path is used, then the store path will be resolved relative to the process's
current working directory. An absolute path is recommended.

## RUSH_PREVIEW_VERSION

This variable overrides the version of Rush that will be installed by
the version selector. The default value is determined by the `rushVersion`
field from rush.json.

For example, if you want to try out a different release of Rush before upgrading your repo, you can assign
the variable like this:

```shell
$ set RUSH_PREVIEW_VERSION=5.0.0-dev.25
$ rush install
```

## RUSH_TEMP_FOLDER

This variable overrides the temporary folder used by Rush.
The default value is **common/temp** under the repository root.

## RUSH_VARIANT

This variable selects a specific installation variant for Rush to use when installing
and linking package dependencies.

For more information about this feature, see
[Installation Variants]({% link pages/advanced/installation_variants.md %}).
