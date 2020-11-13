---
layout: page
title: Everyday commands
navigation_source: docs_nav
---

# Tab completion for the Rush CLI

Inspired by [Tab completion for the .NET Core CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/enable-tab-autocomplete).

**NOTE**: the globally installed version of `Rush` will need to be at least `5.34.0`.

## PowerShell
To add tab completion to PowerShell for the Rush CLI, create or edit the profile stored in the variable `$PROFILE`. For more information, see [How to create your profile](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles#how-to-create-a-profile) and [Profiles and execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles#profiles-and-execution-policy).

Add the following code to your profile:

```powershell
# PowerShell parameter completion shim for the Rush CLI
Register-ArgumentCompleter -Native -CommandName rush -ScriptBlock {
     param($commandName, $wordToComplete, $cursorPosition)
         rush tab-complete --position $cursorPosition --word "$wordToComplete" | ForEach-Object {
            [System.Management.Automation.CompletionResult]::new($_, $_, 'ParameterValue', $_)
         }
 }
```

## Bash
To add tab completion to your bash shell for the Rush CLI, add the following code to your .bashrc file:
```bash
# bash parameter completion for the Rush CLI

_rush_bash_complete()
{
  local word=${COMP_WORDS[COMP_CWORD]}

  local completions
  completions="$(rush tab-complete --position "${COMP_POINT}" --word "${COMP_LINE}" 2>/dev/null)"
  if [ $? -ne 0 ]; then
    completions=""
  fi

  COMPREPLY=( $(compgen -W "$completions" -- "$word") )
}

complete -f -F _rush_bash_complete rush
```



#### Next up: [How to get help]({% link pages/help/support.md %})