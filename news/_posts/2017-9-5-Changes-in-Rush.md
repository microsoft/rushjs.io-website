---
layout: post
title: Changes requiring action in Rush 3.0.15
author: Pete Gonzalez del Solar
authorLink: https://github.com/pgonzal
---

Rush 3.0.15 changes some behavior in the temp modules folder to be compatible with [NPM 5](https://github.com/npm/npm/pull/15900) and [PNPM](https://github.com/pnpm/pnpm/issues/772). You will likely see the following error during installation:
```
ERROR: Failed to parse package.json for : Invalid version: "file:projects/.tgz"
```

This is due to your shrinkwrap file needing a small update for Rush 3.0.15. **To fix the issue, run `rush generate` and checkin the changes to the shrinkwrap file.** (Alternately, you could change all the "file:projects/{PROJECT_NAME}" references in the shrinkwrap to "file:/{PROJECT_NAME}.tgz".)