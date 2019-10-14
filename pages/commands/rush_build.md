---
layout: page
title: rush build
navigation_source: docs_nav
---

```
usage: rush build [-h] [-p COUNT] [-t PROJECT1]
                  [--from-version-policy VERSION_POLICY_NAME]
                  [--to-version-policy VERSION_POLICY_NAME] [-f PROJECT2] [-v]
                  [-o] [--no-color] [--production]


This command is similar to "rush rebuild", except that "rush build" performs
an incremental build. In other words, it only builds projects whose source
files have changed since the last successful build. The analysis requires a
Git working tree, and only considers source files that are tracked by Git and
whose path is under the project folder. (For more details about this
algorithm, see the documentation for the "package-deps-hash" NPM package.)
The incremental build state is tracked in a per-project folder called ".
rush/temp" which should NOT be added to Git. The build command is tracked by
the "arguments" field in the "package-deps_build.json" file contained
therein; a full rebuild is forced whenever the command has changed (e.g.
"--production" or not).

Optional arguments:
  -h, --help            Show this help message and exit.
  -p COUNT, --parallelism COUNT
                        Specify the number of concurrent build processes The
                        value "max" can be specified to indicate the number
                        of CPU cores. If this parameter omitted, the default
                        value depends on the operating system and number of
                        CPU cores.
  -t PROJECT1, --to PROJECT1
                        Run command in the specified project and all of its
                        dependencies
  --from-version-policy VERSION_POLICY_NAME
                        Run command in all projects with the specified
                        version policy and all projects that directly or
                        indirectly depend on projects with the specified
                        version policy
  --to-version-policy VERSION_POLICY_NAME
                        Run command in all projects with the specified
                        version policy and all of their dependencies
  -f PROJECT2, --from PROJECT2
                        Run command in all projects that directly or
                        indirectly depend on the specified project
  -v, --verbose         Display the logs during the build, rather than just
                        displaying the build status summary
  -o, --changed-projects-only
                        If specified, the incremental build will only rebuild
                        projects that have changed, but not any projects that
                        directly or indirectly depend on the changed package.
  --no-color            disable colors in the build log, defaults to 'true'
  --production          Perform a production build, including minification
                        and localization steps
```
