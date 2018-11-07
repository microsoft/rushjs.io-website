---
layout: page
title: Installing Git hooks
navigation_source: docs_nav
---

The Git version control system allows you to configure hook scripts that will be invoked when certain actions are
performed.  (See Git's [Customizing Git](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) chapter
for complete documentation.)  The basic idea is that you create shell scripts under your `.git/hooks` folder with
well-known names such as **pre-commit**, **post-update**, **prepare-commit-msg**, and so forth.
If the Git client sees these scripts, it will invoke them whenever the corresponding operations are performed.

For security reasons, Git does not automatically install these scripts when you clone a repo.  Instead, you must
invoke a command that creates them and chmods them to be executable.  Rush can automate this for you!

## Configuring Rush to install a Git hook script

As an example, suppose that we want to keep our source code tidy by automatically invoking the
[Prettier](https://prettier.io/) code formatter whenever someone commits a change to Git.

Here's how to set that up:

**1<!---->. Check your Rush version.**  Make sure your **rush.json** file installs Rush 5.5.1 or newer, which
introduced support for Git hooks.

**2<!---->. Write the hook script.**  In your repo folder, create a **pre-commit** shell script under the
"common" folder where Rush stores its configuration files.  For this example, we'll use the popular
[pretty-quick](https://github.com/azz/pretty-quick) helper that invokes Prettier on a Git change set.
(This avoids reformatting the entire code base every time someone makes a change.)

**common/git-hooks/pre-commit**
```sh
#!/bin/sh
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.

COMMAND=common/temp/node_modules/.bin/pretty-quick

echo --------------------------------------------
echo Starting Git hook: pre-commit

if [ -f $COMMAND ]; then
  echo Invoking $COMMAND
  $COMMAND
else
  echo Command not installed: $COMMAND
fi

echo Finished Git hook: pre-commit
echo --------------------------------------------

```

**3<!---->. Configure any required dependencies.**  The script above requires the **pretty-quick** NPM package,
which in turn has a peer dependency on **prettier**.  Since we're not setting up a full tooling project with its own
**package.json** file, we can simply add **prettier** and **pretty-quick** as Rush "preferred versions".  This will
ensure that they get installed in the **common/temp/node_modules** folder root whenever `rush install` runs.

**common/config/rush/common-versions.json**
```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/common-versions.schema.json",

  "preferredVersions": {
    "prettier": "~1.15.1",
    "pretty-quick": "~1.8.0"
  }
}

```

**4<!---->. Confirm that the hooks were installed.**  Run `rush update`, and verify that Rush copied your
**pre-commit** script into into the **.git/hooks** folder of your local working folder.

Now we can try committing a change to Git.  You should see our `Starting Git hook: pre-commit` message included
in Git's log output:

```sh
$ git commit -m "This is a test"
--------------------------------------------
Starting Git hook: pre-commit
Invoking common/temp/node_modules/.bin/pretty-quick
🔍  Finding changed files since git revision ac03c77b6.
🎯  Found 1 changed files.
✍️  Fixing up projects/test/src/TestClass.ts.
✅  Everything is awesome!
Finished Git hook: pre-commit
--------------------------------------------
[my-branch 0d4550305] test
 1 file changed, 3 insertions(+), 1 deletions(-)
```
