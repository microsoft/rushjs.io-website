---
layout: page
title: Enabling Prettier
navigation_source: docs_nav
---

The Rush Stack [linting guidance](https://rushstack.io/pages/heft_tasks/eslint/) recommends the
[Prettier](https://prettier.io/) tool for ensuring consistent syntax across all source files.  With this
approach, ESLint and Prettier act as complementary tools.

**ESLint**:
- ESLint enforces a set of rules for coding conventions.  Example rule: _"The name of a class should be capitalized using PascalCase."_
- Fixing these issues can break tests or API contracts.
- Rules are highly customizable -- different projects may require different rules.
- Thus, we recommend to invoke ESLint separately for each project folder, as part of building that project.
- ESLint can cause build errors.

**Prettier**:
- Prettier normalizes syntax formatting, for example indentation and comma placement.
- Fixing these issues should never affect the meaning of the code.
- Prettier discourages customization -- one convention is good enough for the entire repo, if not the entire world.
- Thus, we recommend to invoke Prettier automatically during `git commit`.  Additionally, the [Prettier extension for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) can automatically format files whenever you save them.
- Code formatting should never cause build errors; Prettier does all the work transparently behind the scenes.


## Preparing for Prettier

Before enabling the Git hook, we first need to configure Prettier and get the existing source files prettified.
This fixup may produce a very large diff, so it's a good idea to do in its own PR.





## Git hook requirements

Let's set up a [Git hook]({% link pages/maintainer/git_hooks.md %}) that will invoke Prettier automatically
whenever changes are committed.

The `git commit` command is a core operation that must always be quick and reliable:  For example, developers may
want to make commits to their branch without running `rush install` first.  Perhaps `rush install` cannot be run,
because the branch is in a partially working state.  Thus, our Git hook should not depend on the normal monorepo
installation.

We could solve this by using Rush's [install-run.js]({% link pages/maintainer/enabling_ci_builds.md %}) script
to install the Prettier package on demand, however actually we need to install several dependencies together:

- `pretty-quick`: To speed up the operation, we'll use [pretty-quick](https://www.npmjs.com/package/pretty-quick)
  to calculate the subset of files that are staged for commit.  Only those files need to processed.
  Prettier itself lacks this filtering, because it has no awareness of the Git system.
- `prettier`: The `pretty-quick` package has a peer dependency on Prettier.
- optional plugins:  If you use any plugins for Prettier, they need to be resolvable by the `prettier` package.

For this situation, Rush's "autoinstaller" feature provides an alternative to **install-run.js**.


## Git hook setup

1. First, use the [rush init-autoinstaller]({% link pages/commands/rush_init-autoinstaller.md %}) command to
    create an autoinstaller:

    ```shell
    # This creates the common/autoinstallers/rush-prettier/package.json file:
    $ rush init-autoinstaller --name rush-prettier
    ```

2. Install the dependencies and create the **pnpm-lock.yaml** file:

    ````shell
    $ cd common/installers/rush-prettier

    $ pnpm install prettier
    $ pnpm install pretty-quick

    # (If you need plugins, install them as well)
    ````

3. You should now have two files **package.json** and **pnpm-lock.yaml** in your
    **common/autoinstallers/rush-prettier** folder.  Add them to Git and commit them.

    ````shell
    $ git add package.json
    $ git add pnpm-lock.yaml
    $ git commit -m "Create rush-prettier autoinstaller"
    ````

4. Next, we will create a `rush prettier` custom command that invokes the `pretty-quick` tool.
   Add this to the `"commands"` section of your **command-line.json** file:

    **common/config/rush/command-line.json**
    ```js
      . . .
      "commands": [
        {
          "name": "prettier",
          "commandKind": "global",
          "summary": "Used by the pre-commit Git hook. This command invokes Prettier to reformat staged changes.",

          "autoinstallerName": "rush-prettier",

          // This will invoke common/autoinstallers/rush-prettier/node_modules/.bin/pretty-quick
          "shellCommand": "pretty-quick --staged"
        }
        . . .
    ```

    Note that we specify to first install our `rush-prettier` autoinstaller before invoking the command.
    The shell command `pretty-quick --staged` will be invoked in the **common/autoinstallers/rush-prettier**
    folder.

5. After saving these changes, let's test our custom command by running `rush prettier`.  The first time you should
    see Rush automatically performing a number of steps:  (1) install the correct version of the Rush engine,
    (2) install the correct version of the PNPM package manager, (3) installing **rush-prettier/package.json**
    and its dependencies, (4) invoking `pretty-quick --staged`.  However the second time you invoke it, the first
    3 steps are up to date, so step (4) runs right away.

6. The last step is to add a Git hook that invokes `rush prettier` automatically whenever `git commit` is performed.
    To do this, create a file called **pre-commit** in the **common/git-hooks** folder:

    **common/git-hooks/pre-commit**
    ```
    #!/bin/sh
    # Called by "git commit" with no arguments.  The hook should
    # exit with non-zero status after issuing an appropriate message if
    # it wants to stop the commit.

    # Invoke the "rush prettier" custom command to reformat files whenever they
    # are committed. The command is defined in common/config/rush/command-line.json
    # and uses the "rush-prettier" autoinstaller.
    node common/scripts/install-run-rush.js prettier || exit $?
    ```

7. Lastly, to actually install the hook, run `rush install`

That's all.  Whenever changes are committed to Git, Prettier will be automatically invoked on the staged files.

