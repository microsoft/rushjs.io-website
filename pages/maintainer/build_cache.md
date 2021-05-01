---
layout: page
title: Enabling the build cache (experimental)
navigation_source: docs_nav
---

Rush has always supported an [incremental analyzer]({% link pages/advanced/incremental_builds.md %}) that
enables `rush build` to skip projects whose input files have not changed since the last build.  (This optimization
can also be used with custom commands by enabling the `incremental` flag in **custom-commands.json**.)  However,
the build output is not saved anywhere, so generally a full rebuild is still required when switching to another branch.

Rush's experimental new **build cache** improves on this by creating a tar archive of each project's build outputs.
The archive is cached so that later, if `rush build` can find a match in the cache, it can extract the archive
instead of building that project.  This can provide dramatic speedups, for example reducing a 30 minute build time
to 30 seconds.  The cache key is a hash of the source files and NPM dependencies, following the
[same basic rules]({% link pages/advanced/incremental_builds.md %}) as the incremental analyzer.

The build cache archives are stored in two places:

- **In a cache folder on your local disk.**  This way you can switch between different branches without
  losing your incremental build state.  You can even configure a centralized folder to be shared between
  multiple enlistments on your machine.  The default location is **common/temp/build-cache**.

- **In a cloud-hosted storage container. (Optional)**  In a typical setup, the CI system would be configured to write
  to cloud storage, and individual users are granted read-only access.  For example, each time a PR is merged into
  the `master` branch, the CI system builds that baseline and uploads it to cloud storage.  Even for a user who
  is doing `git clone` for the first time, their `rush build` will be very fast.


## Enabling the local disk cache

The build cache feature is enabled using the [build-cache.json]({% link pages/configs/build-cache_json.md %})
config file.  You can copy the template from the website or use `rush init` to create this file.

To enable the basic local disk cache, add these two settings:

**common/config/rush/build-cache.json**
```js
{
  . . .
  /**
   * (Required) EXPERIMENTAL - Set this to true to enable the build cache feature.
   *
   * See https://rushjs.io/pages/maintainer/build_cache/ for details about this experimental feature.
   */
  "buildCacheEnabled": true,

  /**
   * (Required) Choose where project build outputs will be cached.
   *
   * Possible values: "local-only", "azure-blob-storage", "amazon-s3"
   */
  "cacheProvider": "local-only",

  . . .
}
```

> **Upgrade note:** Early releases of this feature were enabled using the `"buildCache": true` setting
> in **experiments.json**. This has been superseded by `"buildCacheEnabled"` in **build-cache.json**.


## Configuring project output folders

With only this change, if you run `rush rebuild --verbose`, you will see this warning:

```
Project does not have a rush-project.json configuration file, or one provided by a rig,
so it does not support caching.
```

The build cache needs to know which folders should be stored in the tar archive.  Those details vary between
toolchains, and are thus configured separately for each project using the
[rush-project.json]({% link pages/configs/rush-project_json.md %}) config file.

For example:

**&lt;your-project&gt;/config/rush-project.json**

```js
{
  . . .

  /**
   * Specify the folders where your toolchain writes its output files.  If enabled, the Rush build cache will
   * restore these folders from the cache.
   *
   * The strings are folder names under the project root folder.  These folders should not be tracked by Git.
   * They must not contain symlinks.
   */
  "projectOutputFolderNames": ["lib", "dist"]
  . . .
}
```

It's recommended to use a [rig package](https://rushstack.io/pages/heft/rig_packages/) to avoid having
to copy this file into each project folder.


## Testing the build cache

Now you should see projects being cached as shown in this sample log output:

```shell
$ rush rebuild --verbose

. . .

==[ example-project ]==============================================[ 1 of 5 ]==

This project was not found in the build cache.

Invoking: heft test --clean

. . .

Caching build output folders: lib

Successfully set cache entry.

"example-project" completed successfully in 11.27 seconds.
```

When we run the same command a second time, Rush extracts the archive instead of invoking the build task:

```shell
$ rush rebuild --verbose

. . .

==[ example-project ]==============================================[ 1 of 5 ]==

Build cache hit.

Clearing cached folders: lib, dist

Successfully restored output from the build cache.

example-project was restored from the build cache.
```

Note that caching is applied even for `rush rebuild`.  To force rebuilding without the cache,
you need to add `--disable-build-cache` like this:

```
$ rush rebuild --verbose --disable-build-cache
```

By default, the cached tar archives are stored under your **common/temp/build-cache** folder
(and thus will be cleaned by `rush purge`).  It is safe to delete these files.
