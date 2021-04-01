---
layout: page
title: NPM registry authentication
navigation_source: docs_nav
---

A **private NPM registry** enables your monorepo to publish NPM packages for internal usage.  It works the same as
the public [https://www.npmjs.com/](https://www.npmjs.com/) registry, except that access the private registry
requires authorization.  Each user will need to obtain an access token that typically gets stored in the
[~/.npmrc file](https://docs.npmjs.com/cli/v6/configuring-npm/npmrc)
on their computer.

## Registry mappings

The mappings for your private registry are specified in
[the monorepo .npmrc file]({% link pages/configs/npmrc.md %}).

Below is an example configuration that installs company packages from the private
registry, but gets all other packages from the public registry.  The company packages are
identified by their `@example` NPM scope.

**common/config/rush/.npmrc**
```shell
# Map your company's NPM scope ("@example") to the private registry URL:
@example:registry=https://my-registry.example.com/npm-private/

# Otherwise, all other packages come from the public NPM registry:
registry=https://registry.npmjs.org/
always-auth=false

# Here we specify how the package manager should authenticate to the private registry.
# For security reasons, CI jobs should obtain their tokens from environment variables.
# The exact syntax depends on your registry provider.  If a line references an environment
# variable that is undefined, Rush will ignore that line.  This avoids producing an invalid
# string that might interfere with a developer who obtains their credentials from ~/.npmrc.
//my-registry.example.com/npm-private/:_password=${MY_CI_TOKEN}
//my-registry.example.com/npm-private/:username=${MY_CI_USER}
//my-registry.example.com/npm-private/:always-auth=true
```

More commonly, your private registry will act as a **caching proxy** so that it can provide
packages from the public NPM registry as well.  In this case, NPM scopes don't need to be mapped.
Your setup might look like this:

**common/config/rush/.npmrc**
```shell
# Map everything to the private registry URL
registry=https://my-registry.example.com/npm-private/
always-auth=true

# Here we specify how the package manager should authenticate to the private registry.
# For security reasons, CI jobs should obtain their tokens from environment variables.
# The exact syntax depends on your registry provider.  If a line references an environment
# variable that is undefined, Rush will ignore that line.  This avoids producing an invalid
# string that might interfere with a developer who obtains their credentials from ~/.npmrc.
//my-registry.example.com/npm-private/:_password=${MY_CI_TOKEN}
//my-registry.example.com/npm-private/:username=${MY_CI_USER}
```

## .npmrc file precedence

Regular Rush operations perform the following lookup:

1. For unusual situations, NPM config environment variables take precedence over any **.npmrc** settings.
   These environment variable name is prefixed by `npm_config_`.  For example, `npm_config_registry` overrides
   the `registry` setting in **.npmrc**.  Nonstandard name patterns like `npm_config_@example:registry` are
   also accepted by NPM's design.
2. Typically settings come from a temporary **.npmrc** file that Rush copies into the working directory
   for the operation.  The file is copied from **common/config/rush/.npmrc**, but omitting any lines that
   reference undefined environment variables (see above).  For most operations, the working directory
   will be **common/temp**.
3. If the package manager cannot find a setting via 1 or 2, then the user's **~/.npmrc** is
   consulted.  Individual users typically store their authentication tokens in this file.

The above rules also apply for helpers scripts such as **install-run.js**.

The `rush publish` command uses a different file **.npmrc-publish** with its own rules.
See [this documentation]({% link pages/configs/npmrc-publish.md %}) for details.

