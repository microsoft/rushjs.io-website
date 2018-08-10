---
layout: page
title: rush scan
navigation_source: docs_nav
---

```
usage: rush scan [-h]

The NPM system allows a project to import dependencies without explicitly
listing them in its package.json file. This is a dangerous practice, because
there is no guarantee you will get a compatible version. The "rush scan"
command reports a list of packages that are imported by your code, which you
can compare against your package.json file to find mistakes. It searches the
"./src" and "./lib" folders for typical import syntaxes such as "import __
from '__'", "require('__')", "System.import('__'), etc. The results are only
approximate, but generally pretty accurate.

Optional arguments:
  -h, --help  Show this help message and exit.
```
