---
layout: page
title: Everyday commands
navigation_source: docs_nav
---

## Typical pull -> install -> build

In a Rush repo, your basic daily workflow will look like this:

```sh
# Pull the latest changes from Git
$ git pull

# Check to see if the dependencies changed for any of your projects.
# If so, "rush install" will install them; otherwise, it skips.
$ rush install

# (Note that "rush install" automatically runs "rush link" to create
# your symlinks.)

# Do a clean rebuild of everything
$ rush rebuild

# After making some changes, rebuild just one project
$ cd ./my-project
$ gulp
```
