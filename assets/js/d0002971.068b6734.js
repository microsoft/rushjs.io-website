"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[554],{158:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(6393);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(216),i=a(2228),r=(a(6393),a(158)),s=["components"],l={title:"Autoinstallers"},o=void 0,p={unversionedId:"pages/maintainer/autoinstallers",id:"pages/maintainer/autoinstallers",title:"Autoinstallers",description:"A monorepo will often need to install NPM packages that provide tools such as shell commands. In most cases,",source:"@site/docs/pages/maintainer/autoinstallers.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/autoinstallers",permalink:"/pages/maintainer/autoinstallers",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/autoinstallers.md",tags:[],version:"current",frontMatter:{title:"Autoinstallers"},sidebar:"docsSidebar",previous:{title:"Custom commands",permalink:"/pages/maintainer/custom_commands"},next:{title:"Using Rush plugins (experimental)",permalink:"/pages/maintainer/using_rush_plugins"}},u={},m=[{value:"When to use autoinstallers",id:"when-to-use-autoinstallers",level:2},{value:"Creating an autoinstaller",id:"creating-an-autoinstaller",level:2},{value:"Maintaining an autoinstaller",id:"maintaining-an-autoinstaller",level:2},{value:"See also",id:"see-also",level:2}],c={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A monorepo will often need to install NPM packages that provide tools such as shell commands. In most cases,\nthese tooling dependencies can be declared as the ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," of some Rush project, and then they will be\ninstalled by ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," using its centralized shrinkwrap file (package manager lock file). However, sometimes\nsuch dependencies are needed in situations where ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," has not been invoked, or where ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," might\nfail if a person's unfinished work includes some ",(0,r.kt)("strong",{parentName:"p"},"package.json")," modifications. For these situations, Rush's\n",(0,r.kt)("strong",{parentName:"p"},"autoinstallers")," feature provides an isolated mechanism for installing tooling dependencies."),(0,r.kt)("p",null,"An autoinstaller is defined as folder under ",(0,r.kt)("strong",{parentName:"p"},"common/autoinstallers/")," with a ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file\nand its own private shrinkwrap file. This folder is added to Git, but it is not a normal Rush project:\nIt is not installed by ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install"),", nor does it contain any buildable source code for ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build"),".\nAn autoinstaller is purely a container for installing NPM dependencies. Autoinstallers can be associated\nwith Rush features such as ",(0,r.kt)("a",{parentName:"p",href:"/pages/maintainer/custom_commands"},"custom commands")," or ",(0,r.kt)("a",{parentName:"p",href:"/pages/extensibility/creating_plugins"},"Rush plugins"),";\nwhen the associated feature is invoked, Rush will automatically install the dependencies."),(0,r.kt)("h2",{id:"when-to-use-autoinstallers"},"When to use autoinstallers"),(0,r.kt)("p",null,"If you're enabling a Rush plugin, you must configure an autoinstaller."),(0,r.kt)("p",null,"If you are creating a ",(0,r.kt)("a",{parentName:"p",href:"/pages/maintainer/custom_commands"},"Rush custom command")," whose script needs NPM dependences,\nthere are several possible approaches to consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"rush install"),": Typically most dependencies in a Rush monorepo will get installed all together by\n",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," using the centralized shrinkwrap file. For most needs, this is the simplest approach\nand easiest to maintain. If some dependencies are irrelevant to a particular task, you can skip\ninstalling them by using\n",(0,r.kt)("a",{parentName:"p",href:"/pages/developer/selecting_subsets"},"project selection parameters")," such as\n",(0,r.kt)("inlineCode",{parentName:"p"},"rush install --to example-project"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"install-run.js"),": The ",(0,r.kt)("a",{parentName:"p",href:"/pages/maintainer/enabling_ci_builds#install-runjs-for-other-commands"},"install-run.js")," script enables\nyou to install NPM packages outside of ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install"),". This is useful for commands that run in contexts\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," is not invoked at all, or where ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," may be broken. For example, a Git commit\nhook script gets run on branches where ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," might fail: developers often commit work in progress,\nor a Git rebase may introduce broken commits that get fixed up by a later commit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"autoinstallers"),": A limitation of ",(0,r.kt)("strong",{parentName:"p"},"install-run.js")," is that it only installs one NPM package.\nFor example, if your custom command needs multiple packages (for example the ",(0,r.kt)("inlineCode",{parentName:"p"},"pretty-quick")," driver,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"prettier")," engine, and some Prettier plugins), you could add them to the ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file of\nan autoinstaller. Autoinstallers typically have a small dependency tree and thus install much faster\nthan ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install"),"."),(0,r.kt)("p",{parentName:"li"},"Some potential downsides of autoinstallers: In situations that require multiple autoinstallers and/or\n",(0,r.kt)("inlineCode",{parentName:"p"},"rush install"),", the package manager will be invoked multiple times and may need to install the same dependency\nfrom different shrinkwrap files. This can be significantly slower than if ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," could install\neverything together using the centralized shrinkwrap file. Also, autoinstallers are not validated or updated\nby ",(0,r.kt)("inlineCode",{parentName:"p"},"rush update"),", so they require extra maintenance for upgrades."))),(0,r.kt)("h2",{id:"creating-an-autoinstaller"},"Creating an autoinstaller"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/pages/commands/rush_init-autoinstaller"},"rush init-autoinstaller")," command to create the folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# This creates the common/autoinstallers/my-autoinstaller/package.json file\nrush init-autoinstaller --name my-autoinstaller\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the ",(0,r.kt)("strong",{parentName:"p"},"my-autoinstaller/package.json")," file to add your dependencies.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("a",{parentName:"p",href:"/pages/commands/rush_update-autoinstaller"},"rush update-autoinstaller")," to update the shrinkwrap file.\nYou should redo this step whenever you modify the ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create or update common/autoinstallers/my-autoinstaller/pnpm-lock.yaml\n# This file should be committed and tracked by Git.\nrush update-autoinstaller --name my-autoinstaller\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit the updated files to git"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add common/autoinstallers/my-autoinstaller/\n\ngit commit -m "Updated autoinstaller"\n')))),(0,r.kt)("p",null,"To associate an autoinstaller with a custom command, specify its name in the ",(0,r.kt)("inlineCode",{parentName:"p"},"autoinstallerName")," field\nin ",(0,r.kt)("a",{parentName:"p",href:"/pages/configs/command-line_json"},"command-line.json"),"."),(0,r.kt)("p",null,"To associate an autoinstaller with a Rush plugin, see the ",(0,r.kt)("a",{parentName:"p",href:"/pages/extensibility/creating_plugins"},"Creating Rush plugins"),"\ndocumentation."),(0,r.kt)("h2",{id:"maintaining-an-autoinstaller"},"Maintaining an autoinstaller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To modify an autoinstaller, edit its ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# This will also upgrade any indirect dependencies.\nrush update-autoinstaller --name my-autoinstaller\n\n# Commit the updated pnpm-lock.yaml\ngit commit -m "Updated autoinstaller"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To delete the autoinstaller, simply delete its folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# BE CAREFUL WHEN RECURSIVELY DELETING FOLDERS\nrm -Rf common/autoinstallers/my-autoinstaller\n\n# Commit the changes to Git\ngit add common/autoinstallers\n\ngit commit -m "Deleted autoinstaller"\n')))),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pages/commands/rush_init-autoinstaller"},"rush init-autoinstaller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pages/commands/rush_update-autoinstaller"},"rush update-autoinstaller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pages/maintainer/enabling_prettier"},"Enabling Prettier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pages/maintainer/custom_commands"},"Custom commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pages/extensibility/creating_plugins"},"Creating Rush plugins"))))}d.isMDXComponent=!0}}]);