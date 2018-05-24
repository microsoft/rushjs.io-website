---
layout: page
title: Setting up a new repo
navigation_source: docs_nav
---

Let's suppose we have 3 project folders, like this:

- **~/demo/application**:  your application, which depends on **lib1** and **lib2**
- **~/demo/lib1**: a library which depends on **lib2**
- **~/demo/lib2**: another library

We'll assume that each of these libraries builds using [gulp](http://gulpjs.com/).  (In principle Rush can work with any build system, since it only looks at your package.json file, but we don't test that very thoroughly. Feel free to open a GitHub issue if you find any problems.)  Let's say that you build your application by invoking these commands:

```
$ cd ~/demo/application
$ npm install
$ gulp clean
$ gulp
```

## Step 1: Create rush.json
The first step is to create a config file "**~/demo/rush.json**".  It should conform to [rush.schema.json](https://github.com/Microsoft/web-build-tools/blob/master/apps/rush-lib/src/schemas/rush.schema.json).  Your config file would look like this:

```javascript
// Comments are allowed in all Rush config files :-)
{
  // Don't forget to update these versions periodically:
  "rushVersion": "4.0.0",
  "npmVersion": "5.5.1",
  "nodeSupportedVersionRange": ">=8.9.0 <9.0.0",

  "projects": [
    {
      "packageName": "application",
      "projectFolder": "application"
    },
    {
      "packageName": "lib1",
      "projectFolder": "lib1",
      "shouldPublish": true
    },
    {
      "packageName": "lib2",
      "projectFolder": "lib2"
    }
  ]
}
```

Notes about options:

| JSON Field                 | Notes                                                                 |
| :------------------------- | :-------------------------------------------------------------------- |
| rushVersion         | Set this to the current release of Rush.  As the repo maintainer, you will need to upgrade this periodically. (See below.) |
| npmVersion                 | Set this to the current release of [NPM](https://www.npmjs.com/package/npm).  Rush will install and use this specific version of the NPM tool inside your repo. This ensures deterministic build behavior, since NPM has unpredictable quirks depending on its version. |
| nodeSupportedVersionRange  | This field tells developers which versions of the NodeJS engine to use for your repo, to minimize the time you waste investigating bugs that turn out to be NodeJS regressions.  We suggest to disallow NodeJS releases that are not [LTS](https://nodejs.org/en/download/releases/), since they frequently seem to have problems. [(More details here.)](https://github.com/nodejs/Release) |
| packageName                | For informational purposes, this must match the "name" field in the **package.json** file for the project. |
| projectFolder              | The folder for the project, relative to the repo root.  Typically this is the same as packageName, but if you use scopes (e.g. "**\@microsoft**") you should omit the scope. |
| shouldPublish              | If true, then this package will be published when running "**rush publish**", and changes will be detected for it when running "**rush change**". |

## Step 2: Run the first "rush generate"

From anywhere under **~/demo**, run this command:

```
$ rush generate
```

The `rush generate` command is used to generate the common shrinkwrap file, which in this example will be "**~demo/common/config/rush/npm-shrinkwrap.json**".  Generally you need to add all files in this folder to Git.

## Step 3: Update your .gitignore file

The npm will be used to install the "common package", which is a fake project that is never built; it is merely used to install all the dependencies.  It will go in **~demo/common/temp/** folder.  This entire folder should be ignored.  You can safely delete this folder; it will be regenerated whenever you run `rush install`.

Make sure your [.gitignore](https://git-scm.com/docs/gitignore) file contains something equivalent to this:

```sh
# Ignore NPM package folders
node_modules

# Ignore Rush temporary files
/common/temp/**
```

Note: When using Rush, we recommend to avoid project-specific **.gitignore** files (e.g. don't create **~/demo/lib1/.gitignore**), except for certain rules that are very unique to a particular project.  When you are managing a large number of NPM packages, copying+pasting boilerplate into each project increases your maintenance costs whenever global changes are needed.

## Step 4: Verify that it builds

In order to build your projects, Rush will look for a `"build"` script in the `"scripts"` section of your **package.json** file. (Prior to Rush 4, it also looked for `"clean"` and `"test"` scripts, but that is no longer the case.)  For example:

```
{
  ...
  "scripts": {
    "build": "gulp --clean"
  }
   ...
}
```

There are a few things to keep in mind when creating these scripts:

* Rush will normally use your system PATH environment variable to find the script commands.  However, if you specify a single-word command like "gulp" or "make", Rush will first look for the program in the `common\temp\node_modules\.bin` folder.


* If the process returns a non-zero exit status, Rush will assume there was a failure and will block downstream builds.

* If the command writes anything to the `stderr` stream, Rush will interpret this to mean that at least one error or warning was reported.  This will break the build.  (This is by design -- if you allow people to merge PRs that "cry wolf", pretty soon you will find that so many warnings have accumulated that nobody even reads them any more.)  Some tooling libraries (e.g. Jest) write to `stderr` as part of their normal operation; you will need to [redirect their output](https://github.com/Microsoft/web-build-tools/blob/master/core-build/gulp-core-build/src/tasks/JestReporter.ts).

* If certain projects don't need to be processed by `rush build`, you still need a `build` entry.  Set the value to an empty string ("") and Rush will ignore it.

Now let's try building your project:

From anywhere under **~/demo**, run this command:

```
$ rush rebuild
```

If it worked, great! Proceed to Step 5.

If something failed, you may need to investigate.  Important points to keep in mind:
- **DO NOT USE NPM COMMANDS**.  While your **node_modules** folder is Rush-linked, you must NOT use commands like `npm link` or `npm install` inside a project folder.  (If you need to do that, first do `rush unlink`.)
- It is safe to run Gulp commands in any project folder (e.g. `gulp clean` or `gulp build`).  You don't need to do `rush rebuild` every time.
- If you edit any **package.json** files, you must run `rush install` afterwards.

Once you get a successful `rush rebuild`, proceed to the next step.

## Step 5: Committing the output from "rush generate"
Commit the generated files to Git.  Something like this:

```
$ cd ~/demo
$ git add ./common/config/...
$ git add ./.gitignore
$ git commit -m "Hello, Rush!"
```

(Recall that nothing under **/common/temp** should get committed.)

## Step 6: Enabling automated builds

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
