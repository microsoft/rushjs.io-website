---
layout: page
title: rush rebuild
navigation_source: docs_nav
---

```
usage: rush rebuild [-h] [-p COUNT] [-t PROJECT1]
                    [--from-version-policy VERSION_POLICY_NAME]
                    [--to-version-policy VERSION_POLICY_NAME] [-f PROJECT2]
                    [-v] [--ignore-hooks]


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
                        Specifies the maximum number of concurrent processes
                        to launch during a build. The COUNT should be a
                        positive integer or else the word "max" to specify a
                        count that is equal to the number of CPU cores. If
                        this parameter is omitted, then the default value
                        depends on the operating system and number of CPU
                        cores. This parameter may alternatively be specified
                        via the RUSH_PARALLELISM environment variable.
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
                        Run command in the specified project and all projects
                        that directly or indirectly depend on the specified
                        project. "." can be used as shorthand to specify the
                        project in the current working directory.
  -v, --verbose         Display the logs during the build, rather than just
                        displaying the build status summary
  --ignore-hooks        Skips execution of the "eventHooks" scripts defined
                        in rush.json. Make sure you know what you are
                        skipping.
```

## See Also

- [Selecting subsets of projects]({% link pages/developer/selecting_subsets.md %})
- [rush build]({% link pages/commands/rush_build.md %})
