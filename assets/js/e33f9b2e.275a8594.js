"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6165],{158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(9122),a=r(2501),o=(r(6393),r(158)),s=["components"],l={title:"Other helpful commands"},i=void 0,p={unversionedId:"pages/developer/other_commands",id:"pages/developer/other_commands",title:"Other helpful commands",description:"Installing the latest SemVer-compatible version of everything",source:"@site/docs/pages/developer/other_commands.md",sourceDirName:"pages/developer",slug:"/pages/developer/other_commands",permalink:"/pages/developer/other_commands",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/developer/other_commands.md",tags:[],version:"current",frontMatter:{title:"Other helpful commands"},sidebar:"docsSidebar",previous:{title:"Modifying package.json",permalink:"/pages/developer/modifying_package_json"},next:{title:"Configuring tab completion",permalink:"/pages/developer/tab_completion"}},u={},c=[{value:"Installing the latest SemVer-compatible version of everything",id:"installing-the-latest-semver-compatible-version-of-everything",level:2},{value:"Faster ways to build",id:"faster-ways-to-build",level:2},{value:"A faster way to install",id:"a-faster-way-to-install",level:2},{value:"Getting back to a clean state",id:"getting-back-to-a-clean-state",level:2}],d={toc:c},m="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-the-latest-semver-compatible-version-of-everything"},"Installing the latest SemVer-compatible version of everything"),(0,o.kt)("p",null,"Normally ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update")," only makes the minimal incremental changes necessary to satisfy the project ",(0,o.kt)("strong",{parentName:"p"},"package.json")," files. If you want to update everything to the latest version, you would do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# This effectively deletes the old shrinkwrap file and re-solves everything\n# using the latest compatible versions as specified in package.json files.\n# Note that the package.json files themselves are not modified.\nrush update --full\n")),(0,o.kt)("p",null,"For everyday work, ",(0,o.kt)("inlineCode",{parentName:"p"},"--full")," can introduce unrelated breaks in your PR branch, for example if one of the dependencies didn't perfectly follow the SemVer rules. This isn't too much of a concern for small repos. For a large monorepo, we recommended to use ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update")," for everyday work, and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update --full")," periodically as a separate workflow by a CI job or designated person."),(0,o.kt)("h2",{id:"faster-ways-to-build"},"Faster ways to build"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If you're only working on a few projects"),": Let's say your Git repo contains 50 projects, but you really only work on the ",(0,o.kt)("strong",{parentName:"p"},"widget")," and ",(0,o.kt)("strong",{parentName:"p"},"widget-demo")," projects. You can ask Rush to build only those two projects, plus the libraries that they depend on: ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild --to widget --to widget-demo"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If you changed a library"),": Let's say your Git repo contains 50 projects, and you just fixed some bugs in the ",(0,o.kt)("strong",{parentName:"p"},"widget")," library. You need to run unit tests for all the projects that use this library, and anything that depends on them, but it would be wasteful to rebuild everything else. To rebuild just the downstream projects: ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild --from widget")))),(0,o.kt)("p",null,"The full set of project selection parameters are described in the article ",(0,o.kt)("a",{parentName:"p",href:"/pages/developer/selecting_subsets"},"Selecting subsets of projects"),"."),(0,o.kt)("h2",{id:"a-faster-way-to-install"},"A faster way to install"),(0,o.kt)("p",null,"If your repo is using PNPM with the new ",(0,o.kt)("inlineCode",{parentName:"p"},"useWorkspaces=true")," mode enabled in your ",(0,o.kt)("a",{parentName:"p",href:"/pages/configs/rush_json"},"rush.json"),' file, you can use a feature called "filtered installs". This feature reduces installation times by only installing the subset of NPM packages required to build a specific project.'),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Only install the NPM packages needed to build "my-project" and the other\n# Rush projects that it depends on:\nrush install --to my-project\n\n# Like with "rush build", you can use "." to refer to the project from your\n# shell\'s current working directory:\ncd my-project\nrush install --to .\n\n# Here\'s how to install dependencies required to do "rush build --from my-project"\nrush install --from my-project\n')),(0,o.kt)("h2",{id:"getting-back-to-a-clean-state"},"Getting back to a clean state"),(0,o.kt)("p",null,"After working with Rush, maybe you want to get back to a clean state, e.g. so you can zip up a folder. Here's a couple commands to do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Remove all the symlinks created by Rush:\nrush unlink\n\n# Remove all the temporary files created by Rush, including deleting all\n# the NPM packages that were installed in your common folder:\nrush purge\n")))}h.isMDXComponent=!0}}]);