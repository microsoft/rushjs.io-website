---
layout: page
title: Custom commands
navigation_source: docs_nav
---

Starting with Rush 4, if your toolchain has special modes or features, you can expose these as custom options or commands for the Rush tool.

## Defining custom commands and options

These are defined in the config file here **common/config/rush/command-line.json** file.  Your config file should conform to the [command-line.schema.json](https://github.com/Microsoft/web-build-tools/blob/master/apps/rush-lib/src/schemas/command-line.schema.json) schema.  Consider this sample:

```json
{
  "$schema": "https://dev.office.com/json-schemas/rush/command-line.schema.json",
  "customCommands": [
    {
      "name": "import-strings",
      "summary": "Imports translated strings into each project.",
      "documentation": "Requests translated strings from the translation service and imports them into each project.",
      "parallelized": true
    }
  ],

  "customOptions": {
    "--locale": {
      "optionType": "enum",
      "description": "Selects a single instead of the default locale (en-us) for non-ship builds or all locales for ship builds.",
      "associatedCommands": [ "build", "rebuild", "import-strings" ],
      "enumValues": [
        {
          "name": "en-us",
          "description": "US English"
        },
        {
          "name": "fr-fr",
          "description": "French (France)"
        },
        {
          "name": "es-es",
          "description": "Spanish (Spain)"
        },
        {
          "name": "zh-cn",
          "description": "Chinese (China)"
        }
      ]
    },

    "--ship": {
      "optionType": "flag",
      "description": "Perform a production build, including minification and localization steps",
      "associatedCommands": [ "build", "rebuild", "import-strings" ],
      "shortName": "-s"
    },

    "--minimal": {
      "optionType": "flag",
      "description": "Perform a fast build, which disables certain tasks such as unit tests and linting",
      "associatedCommands": [ "build", "rebuild" ],
      "shortName": "-m"
    }
  }
}
```

You can define your own "commands" that are similar to Rush's built-in command verbs (e.g. `rush build`, `rush check`, etc).  By default, your commands are not parallelized -- they run one at a time.  You can set `"parallelized": true` to change this.  Custom commands normally run for every project in your **rush.json** file, however the `--to` and `--from` command-line parameters can be used to select subsets of projects similar to how `rush rebuild` works.

You can also define your own command-line "options".  An option can be associated with one or more commands via the `associatedCommands` list.  You can even add your options to Rush's own built-in commands.  Above we add the `--ship` option to `rush build` and `rush rebuild` in addition to `rush import-strings`.

Currently two kinds of `optionType` are supported:  A "flag" is a simple switch such as `--ship`.  An "enum" requires an additional value which must come from a list of supported values, for example `--locale fr-fr`.  In the future, more options types may be introduced.

## Using custom commands and options

Your custom definitions will appear in Rush's command-line help for `rush import-strings -h`:

```
Rush Multi-Package Build Tool 4.0.0 - http://aka.ms/rush

usage: rush import-strings [-h] [-p COUNT] [-t PROJECT1] [-f PROJECT2] [-v]
                           [--locale {en-us,fr-fr,es-es,zh-cn}] [-s]


Requests translated strings from the translation service and imports them
into each project.

Optional arguments:
  -h, --help            Show this help message and exit.
  -p COUNT, --parallelism COUNT
                        Limit the number of simultaneous executions. This
                        value defaults to the number of CPU cores.
  -t PROJECT1, --to PROJECT1
                        Run command in the specified project and all of its
                        dependencies
  -f PROJECT2, --from PROJECT2
                        Run command in all projects that directly or
                        indirectly depend on the specified project
  -v, --verbose         Display the logs during the build, rather than just
                        displaying the build status summary
  --locale {en-us,fr-fr,es-es,zh-cn}
                        Selects a single instead of the default locale
                        (en-us) for non-ship builds or all locales for ship
                        builds.
  -s, --ship            Perform a production build, including minification
                        and localization steps
```

But how to implement them?  The commands correspond to script names in your **package.json** file.  Suppose it looks like this:

**example/package.json**
```json
{
  "name": "example",
  "version": "1.0.0",
  "main": "lib/index.js",
  "typings": "lib/index.d.ts",
  "scripts": {
    "import-strings": "./node_modules/.bin/loc-importer",
    "build": "./node_modules/.bin/gulp"
  }
}
```

If we run `rush import-strings --locale fr-fr`, then Rush will read the "import-strings" script body and execute it like this:

```
./node_modules/.bin/loc-importer --locale fr-fr
```

(Rush directly executes it using your shell; it does not rely on `npm run`.)  Since this enum has a default value, if we run `rush import-strings`, then **loc-importer** is executed like this:

```
./node_modules/.bin/loc-importer --locale en-us
```

In other words, Rush's custom options are simply appended to the **package.json** script body.  This means you will run into trouble if you try to use script bodies such as `rimraf ./lib && rimraf ./temp` which don't support these options, or need them to be inserted inside the string.  This is by design:  If you want to provide command-line options for your developers, the NPM tool is inherently going to be a poor experience, because it has no way to check for mistakes or display command-line help.  In the future, we intend for Rush to act as a drop-in replacement for `npm run`, leveraging Rush's command-line validation and documentation model to provide a better experience.  In any case, you need to move your `rimraf` commands into a script that understands Rush's options.  For a large repo with many projects, this is a good practice in general.
