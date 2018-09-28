---
layout: page
title: rush add
navigation_source: docs_nav
---

```
usage: rush add [-h] -p PACKAGE_NAME [--exact] [--caret] [--dev] [-m] [-s]

Adds a specified package as a dependency of the current project (as
determined by the current working directory) and then runs "rush update". If
no version is specified, a version will be automatically detected (typically
either the latest version or a version that won't break the
"ensureConsistentVersions" policy). If a version range is specified, the
latest version in the range will be used. The version will be automatically
prepended with a tilde, unless the "--exact" or "--caret" flags are used. The
"--make-consistent" flag can be used to update all packages with the
dependency.

Optional arguments:
  -h, --help            Show this help message and exit.
  -p PACKAGE_NAME, --package PACKAGE_NAME
                        (Required) The name of the package which should be
                        added as a dependency. Also, the version specifier
                        can be appended after an "@" sign (similar to NPM's
                        semantics).
  --exact               If specified, the SemVer specifier added to the
                        package.json will be an exact version (e.g. without
                        tilde or caret).
  --caret               If specified, the SemVer specifier added to the
                        package.json will be a prepended with a "caret"
                        specifier ("^").
  --dev                 If specified, the package will be added to the
                        "devDependencies" section of the package.json
  -m, --make-consistent
                        If specified, other packages with this dependency
                        will have their package.json files updated to use the
                        same version of the dependency.
  -s, --skip-update     If specified, the "rush update" command will not be
                        run after updating the package.json files.

```
