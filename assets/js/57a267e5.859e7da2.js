"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8922],{158:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(6393);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(o),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return o?r.createElement(h,l(l({ref:t},c),{},{components:o})):r.createElement(h,l({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4660:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=o(216),n=o(2228),a=(o(6393),o(158)),l=["components"],i={title:"Configuring tab completion"},s=void 0,p={unversionedId:"pages/developer/tab_completion",id:"pages/developer/tab_completion",title:"Configuring tab completion",description:"As of version 5.34.0, Rush supports tab completion so that shell commands can be input more quickly",source:"@site/docs/pages/developer/tab_completion.md",sourceDirName:"pages/developer",slug:"/pages/developer/tab_completion",permalink:"/pages/developer/tab_completion",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/developer/tab_completion.md",tags:[],version:"current",frontMatter:{title:"Configuring tab completion"},sidebar:"docsSidebar",previous:{title:"Other helpful commands",permalink:"/pages/developer/other_commands"},next:{title:"Selecting subsets of projects",permalink:"/pages/developer/selecting_subsets"}},c={},u=[{value:"PowerShell",id:"powershell",level:2},{value:"Bash",id:"bash",level:2}],m={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As of version 5.34.0, Rush supports tab completion so that shell commands can be input more quickly\nby pressing the TAB key. The setup instructions below are based on the article\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/tools/enable-tab-autocomplete"},"Tab completion for the .NET Core CLI"),"\nwhich provides some additional tips."),(0,a.kt)("h2",{id:"powershell"},"PowerShell"),(0,a.kt)("p",null,"To enable tab completion for PowerShell, create or edit the profile stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PROFILE")," variable.\nFor more information, see\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles#how-to-create-a-profile"},"How to create your profile"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles#profiles-and-execution-policy"},"Profiles and execution policy"),"."),(0,a.kt)("p",null,"Add the following code to your profile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# PowerShell parameter completion shim for the Rush CLI\nRegister-ArgumentCompleter -Native -CommandName rush -ScriptBlock {\n  param($commandName, $commandAst, $cursorPosition)\n    [string]$value = $commandAst.ToString()\n    # Handle input like `rush install; rush bui` + Tab\n    [int]$position = [Math]::Min($cursorPosition, $value.Length)\n\n    rush tab-complete --position $position --word \"$value\" | ForEach-Object {\n      [System.Management.Automation.CompletionResult]::new($_, $_, 'ParameterValue', $_)\n    }\n }\n")),(0,a.kt)("h2",{id:"bash"},"Bash"),(0,a.kt)("p",null,"To enable tab completion for Bash, add the following code to your ",(0,a.kt)("strong",{parentName:"p"},".bashrc")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# bash parameter completion for the Rush CLI\n\n_rush_bash_complete()\n{\n  local word=${COMP_WORDS[COMP_CWORD]}\n\n  local completions\n  completions="$(rush tab-complete --position "${COMP_POINT}" --word "${COMP_LINE}" 2>/dev/null)"\n  if [ $? -ne 0 ]; then\n    completions=""\n  fi\n\n  COMPREPLY=( $(compgen -W "$completions" -- "$word") )\n}\n\ncomplete -f -F _rush_bash_complete rush\n')))}d.isMDXComponent=!0}}]);