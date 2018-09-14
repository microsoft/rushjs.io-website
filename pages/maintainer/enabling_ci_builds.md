---
layout: page
title: Enabling CI builds
navigation_source: docs_nav
---

When you set up a PR build definition for continuous integration, the automated script can run essentially the same commands that a developer invokes manually.  But there are some additional options that you may find useful.  A typical script might be more like this sequence:

```sh
# Fetch the master branch
$ git fetch origin master:refs/remotes/origin/master -a

# (optional) Fail if the developer didn't create a required change log.
# By "fail", we mean that the script will stop because Rush returned
# a nonzero exit code.
$ rush change -v

# (optional) Fail if the developer introduced an inconsistent version
$ rush check

# Install NPM packages in the common folder, but don't automatically do "rush link"
$ rush install --no-link

# Run "rush link" explicitly, so your CI system can measure it as a separate step
$ rush link

# Do a full "ship" build, showing detailed logs in realtime
# (We assume "--ship" was defined in common/config/rush/command-line.json)
$ rush rebuild --ship --verbose
```

Your script will also need to install the right version of the Rush tool somehow.  We maintain a script [InstallRushOnlyIfNeeded.js](https://github.com/Microsoft/web-build-tools/blob/master/common/scripts/InstallRushOnlyIfNeeded.js) that you might find useful.

For a simple real world example, take a look at the [Travis script](https://github.com/Microsoft/web-build-tools/blob/master/.travis.yml) for **web-build-tools**.

#### Next up: [Configuring CI builds]({% link pages/maintainer/add_to_repo.md %})
