---
layout: page
title: Enabling CI builds
navigation_source: docs_nav
---

When you set up a PR build definition for continuous integration, the automated script can run essentially the same commands that a developer invokes manually.  But there are some additional options that you may find useful.

If we were invoking these commands manually, it might look something like this:

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

# Do a full "ship" build, showing detailed logs in real time
# (We assume "--ship" was defined in common/config/rush/command-line.json)
$ rush rebuild --ship --verbose
```

## Bootstrapping commands

But there's one hitch -- what if your CI environment doesn't come with Rush preinstalled?
You might consider sticking a **package.json** at the root of your repo, and installing Rush
using `npm install`.  Unfortunately this would introduce a phantom **node_modules** folder
which defeats Rush's protection against phantom dependencies.

Fortunately there's a more elegant solution:  If your script can instead invoke
`node common/scripts/install-run-rush.js`, which will:

- find your **rush.json** file
- read the `rushVersion` that's specified there
- install that version of Rush under the **common/temp/install-run** folder
- ...and then invoke the Rush tool with any command-line parameters that you provided.

The installation is cached, so it's not any slower than invoking Rush normally.  In fact,
for CI systems that preserve files from previous runs, **install-run-rush.js** faster than
`npm install` because it can cache different versions of Rush depending on the Git branch
being build.

```
~$ cd my-repo
~/my-repo$ node common/scripts/install-run-rush.js --help
```

The **install-run.js** script allows you to use this same technology for arbitrary NPM
packages.  For example, this command prints a QR code for the Rush web site:  :-)

```
~/my-repo$ node common/scripts/install-run.js qrcode@1.2.2 qrcode https://rushjs.io
```

Note that with **install-run.js**, your command-line includes the package name and version
(which can be a SemVer range, although its best to avoid nondeterminism).  It also has a
second parameter that specifies the name of the executable binary (even though it's often
the same as the package name).  In the above example, we're invoking the `qrcode` binary
and its command-line parameter is `https://rushjs.io`.  The **install-run.js** command is
mainly useful for commands cannot get installed by `rush install`, for example because
they're part of a lightweight CI job that doesn't need a full install.


## Travis example from "rush init"

[Travis CI](https://travis-ci.com/) is a continuous integration build service that integrates
with GitHub and is free for open source projects.  The `rush init` command creates a **.travis.yml**
that's a good starting point if you use this service.  Note how it uses **install-run-rush.js**
to invoke the Rush tool:

```yaml
language: node_js
node_js:
  - '8.9.4'
script:
  - set -e

  - echo 'Checking for missing change logs...' && echo -en 'travis_fold:start:change\\r'
  - git fetch origin master:refs/remotes/origin/master -a
  - node common/scripts/install-run-rush.js change -v
  - echo -en 'travis_fold:end:change\\r'

  - echo 'Checking for inconsistent dependency versions' && echo -en 'travis_fold:start:check\\r'
  - node common/scripts/install-run-rush.js check
  - echo -en 'travis_fold:end:check\\r'

  - echo 'Installing...' && echo -en 'travis_fold:start:install\\r'
  - node common/scripts/install-run-rush.js install
  - echo -en 'travis_fold:end:install\\r'

  - echo 'Building...' && echo -en 'travis_fold:start:build\\r'
  - node common/scripts/install-run-rush.js rebuild --verbose
  - echo -en 'travis_fold:end:build\\r'
```

For a real world example, take a look at the
[Travis script for web-build-tools](https://github.com/Microsoft/web-build-tools/blob/master/.travis.yml),
the monorepo where Rush is developed.
