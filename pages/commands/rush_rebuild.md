---
layout: page
title: rush rebuild
navigation_source: docs_nav
---

```
usage: rush rebuild [-h] [-p COUNT] [-t PROJECT1]
                    [--from-version-policy VERSION_POLICY_NAME]
                    [--to-version-policy VERSION_POLICY_NAME] [-f PROJECT2]
                    [-v]


This command assumes that the package.json file for each project contains a
"scripts" entry for "npm run build" that performs a full clean build. Rush
invokes this script to build each project that is registered in rush.json.
Projects are built in parallel where possible, but always respecting the
dependency graph for locally linked projects. The number of simultaneous
processes will be based on the number of machine cores unless overridden by
the --parallelism flag. (For an incremental build, see "rush build" instead
of "rush rebuild".)

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
                        dependencies. "." can be used as shorthand to specify
                        the project in the current working directory.
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
                        indirectly depend on the specified project. "." can
                        be used as shorthand to specify the project in the
                        current working directory.
  -v, --verbose         Display the logs during the build, rather than just
                        displaying the build status summary
```
