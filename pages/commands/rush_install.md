---
layout: page
title: rush install
navigation_source: docs_nav
---

```
usage: rush install [-h] [-p] [--bypass-policy] [--no-link]
                    [--network-concurrency COUNT] [--debug-package-manager]


The "rush install" command installs package dependencies for all your
projects, based on the shrinkwrap file that is created/updated using "rush
update". (This "shrinkwrap" file stores a central inventory of all
dependencies and versions for projects in your repo. It is found in the
"common/config/rush" folder.) If the shrinkwrap file is missing or outdated
(e.g. because project package.json files have changed), "rush install" will
fail and tell you to run "rush update" instead. This read-only nature is the
main feature: Continuous integration builds should use "rush install" instead
of "rush update" to catch developers who forgot to commit their shrinkwrap
changes. Cautious people can also use "rush install" if they want to avoid
accidentally updating their shrinkwrap file.

Optional arguments:
  -h, --help            Show this help message and exit.
  -p, --purge           Perform "rush purge" before starting the installation
  --bypass-policy       Overrides enforcement of the "gitPolicy" rules from
                        rush.json (use honorably!)
  --no-link             If "--no-link" is specified, then project symlinks
                        will NOT be created after the installation completes.
                        You will need to run "rush link" manually. This flag
                        is useful for automated builds that want to report
                        stages individually or perform extra operations in
                        between the two stages.
  --network-concurrency COUNT
                        If specified, limits the maximum number of concurrent
                        network requests. This is useful when troubleshooting
                        network failures.
  --debug-package-manager
                        Activates verbose logging for the package manager.
                        You will probably want to pipe the output of Rush to
                        a file when using this command.
```
