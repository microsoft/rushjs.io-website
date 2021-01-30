---
layout: page
title: Selecting subsets of projects
navigation_source: docs_nav
---

> **Coming soon:**  The CLI parameters documented on this page will be released with Rush 5.38.0, after PR [#2422](https://github.com/microsoft/rushstack/pull/2422) is merged.


[Bulk commands]({% link pages/maintainer/custom_commands.md %}) like `rush build` and `rush rebuild` operate on
all projects in the monorepo by default.  This becomes expensive as you accumulate more and more projects.
To speed things up, all bulk commands support a set of command-line parameters for selecting subsets of projects.

Suppose we're working with the following collection of Rush projects:

<img src="/images/docs/selection-intro.svg" alt="a sample monorepo" style="height: 150px;" />

In this illustration, the arrow from `C` to `D` indicates that `C` is a dependency of `D`.
The circles represent Rush projects (not external NPM dependencies.)  We'll use the `rush build` command as
our example, but these same parameters work for any bulk command.

## -<!---->-to

**Possible scenario:** Suppose that you have just cloned the monorepo, and now you want to start working
on project `B`.  You need to build all the things that `B` depends on, and also `B` itself.

Here's how to do that:

```shell
# Build everything up to (and including) project B
$ rush build --to B
```

The projects selected by this command are `A`, `B`, and `E`:

<img src="/images/docs/selection-to.svg" alt="rush build --to B" style="height: 150px;" />

## -<!---->-to-except

**Possible scenario:** In many cases we do not need `rush build` to process `B`, because our next step
will be to invoke Webpack or Jest in "watch mode" for `B`.  You can use `--to-except` instead
of `--to` to exclude B.

```shell
# Build everything up to project B, except for B itself
$ rush build --to-except B

# Invoke Jest watch mode to build B
$ heft test --watch
```

The projects selected by this command are `A` and `E`:

<img src="/images/docs/selection-to-except.svg" alt="rush build --to-except B" style="height: 150px;" />

## -<!---->-from

**Possible scenario:** Now that we've finished making our changes to `B`, we want to build the downstream
projects `C` and `D` to make sure their tests were not broken by our change.  In order to build `D`,
we also need to include its dependency `G`.  The `--from` command does this.  It will also include `A` and `E`
since they're required by `B`.  (Since `rush build` is incremental, `A` and `E` will get skipped assuming they
are still up to date.)


```shell
# Build everything downstream from B, including any implied dependencies
$ rush build --from B
```

This command selects everything except for `F`:

<img src="/images/docs/selection-from.svg" alt="rush build --from B" style="height: 150px;" />

## -<!---->-impacted-by

**Possible scenario:** Suppose that while working on `B` we made some changes to `E`.  The `rush build`
incremental analysis assumes that any change to `E` requires all its downstream dependents to be built,
including `F` for example.  That can be a big set.  Maybe you know better -- perhaps you later reverted your change
in `E`, or maybe you manually invoked the toolchain so `E` is in good shape, or maybe your change to `E` is
not relevant right now.

In these situation the `--impacted-by` parameter can be handy: It means *"Select only the projects
that might be broken by a change to B, and trust me that their dependencies are in a usable state."*

```shell
# Build B and everything downstream from B, but don't include dependencies
$ rush build --impacted-by B
```

The projects selected by this command are `B`, `C`, and `D`:

<img src="/images/docs/selection-impact.svg" alt="rush build --impacted-by B" style="height: 150px;" />

## -<!---->-impacted-by-except

**Possible scenario:** This is the same as `--impacted-by` except that it does not include `B` itself,
for example because you just finished building `B` manually while implementing the thing we now want to test.

```shell
# Build everything downstream from B, but don't include dependencies
$ rush build --impacted-by-except B
```

The projects selected by this command are `C` and `D`:

<img src="/images/docs/selection-impact-except.svg" alt="rush build --impacted-by-except B" style="height: 150px;" />

## -<!---->-only

**Possible scenario:** As its name implies, `--only` selects exactly one project.

```shell
# Build only B and nothing else
$ rush build --only B
```

<img src="/images/docs/selection-only.svg" alt="rush build --only B" style="height: 150px;" />

The `--only` parameter is most useful when combined with other parameters.  For example, in our narrative above
when we did `rush build --impacted-by B`, maybe we had not actually built `G` yet.  We can include it by
doing `rush build --impacted-by B --only G`.

> **Caveat:** The parameters `--only`, `--impacted-by`, and `--impacted-by-except` can all fail if the required
> dependencies are not built.  These three parameters save time by assuming that you know better than Rush
> about what really needs to be built.  If that assumption is incorrect, you can always do `rush build` to get back
> into a good state.


## Combining parameters

- You can combine any of the selection parameters on a single command line.  The result is always the union of each
  individual selection.
- Rush does not provide any parameter that would reduce the selection.  For example, `--only A --to-except A`
  is equivalent to `--to A`.  Despite the "except" and "only" terminology, nothing is being unselected.
  (This is an intentional design choice; in [#1241](https://github.com/microsoft/rushstack/issues/1241)
  we'll implement personal tags for more fine-grained selections.)
- The same parameter can be specified multiple times. For example: `rush add --only A --only B --only C`

Here's a sample combined command-line:

```shell
$ rush build --only A --impacted-by B --to F
```

The projects selected by this command are `A`, `C`, `D`, `E`, and `F`:

<img src="/images/docs/selection-multi.svg" alt="rush build --only A --impacted-by-except B --to F" style="height: 150px;" />
