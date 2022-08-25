"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[7603],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,h=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(216),a=t(2228),i=(t(6393),t(158)),s=["components"],o={title:".npmrc"},p=void 0,l={unversionedId:"pages/configs/npmrc",id:"pages/configs/npmrc",title:".npmrc",description:"This is the template that rush init",source:"@site/docs/pages/configs/npmrc.md",sourceDirName:"pages/configs",slug:"/pages/configs/npmrc",permalink:"/pages/configs/npmrc",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/npmrc.md",tags:[],version:"current",frontMatter:{title:".npmrc"},sidebar:"docsSidebar",previous:{title:"Environment variables",permalink:"/pages/configs/environment_vars"},next:{title:".npmrc-publish",permalink:"/pages/configs/npmrc-publish"}},c={},m=[{value:".npmrc file precedence",id:"npmrc-file-precedence",level:2},{value:"See also",id:"see-also",level:2}],u={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the template that ",(0,i.kt)("a",{parentName:"p",href:"/pages/commands/rush_init"},"rush init"),"\ngenerates for the monorepo ",(0,i.kt)("strong",{parentName:"p"},".npmrc")," file:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"common/config/rush/.npmrc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Rush uses this file to configure the NPM package registry during installation.  It is applicable\n# to PNPM, NPM, and Yarn package managers.  It is used by operations such as "rush install",\n# "rush update", and the "install-run.js" scripts.\n#\n# NOTE: The "rush publish" command uses .npmrc-publish instead.\n#\n# Before invoking the package manager, Rush will copy this file to the folder where installation\n# is performed.  The copied file will omit any config lines that reference environment variables\n# that are undefined in that session; this avoids problems that would otherwise result due to\n# a missing variable being replaced by an empty string.\n#\n# * * * SECURITY WARNING * * *\n#\n# It is NOT recommended to store authentication tokens in a text file on a lab machine, because\n# other unrelated processes may be able to read the file.  Also, the file may persist indefinitely,\n# for example if the machine loses power.  A safer practice is to pass the token via an\n# environment variable, which can be referenced from .npmrc using ${} expansion.  For example:\n#\n#   //registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}\n#\nregistry=https://registry.npmjs.org/\nalways-auth=false\n')),(0,i.kt)("h2",{id:"npmrc-file-precedence"},".npmrc file precedence"),(0,i.kt)("p",null,"Regular Rush operations perform the following lookup:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To support unusual situations, NPM config environment variables take precedence over any ",(0,i.kt)("strong",{parentName:"li"},".npmrc")," settings.\nThe environment variable name is prefixed by ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_"),". For example, setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_registry"),"\nvariable will override the ",(0,i.kt)("inlineCode",{parentName:"li"},"registry")," setting in ",(0,i.kt)("strong",{parentName:"li"},".npmrc"),". Nonstandard name patterns like\n",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_@example:registry")," are also accepted by NPM's design."),(0,i.kt)("li",{parentName:"ol"},"Typically settings come from a temporary ",(0,i.kt)("strong",{parentName:"li"},".npmrc")," file that Rush copies into the working directory\nfor the operation. The file is copied from ",(0,i.kt)("strong",{parentName:"li"},"common/config/rush/.npmrc"),", but omitting any lines that\nreference undefined environment variables (as explained above). For most operations, the working directory\nwill be ",(0,i.kt)("strong",{parentName:"li"},"common/temp"),"."),(0,i.kt)("li",{parentName:"ol"},"If the package manager cannot find a setting via 1 or 2, then the user's ",(0,i.kt)("strong",{parentName:"li"},"~/.npmrc")," is\nconsulted. Individual users typically store their authentication tokens in this file.")),(0,i.kt)("p",null,"The above rules also apply for helpers scripts such as ",(0,i.kt)("strong",{parentName:"p"},"install-run.js"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rush publish")," command uses a different file ",(0,i.kt)("strong",{parentName:"p"},".npmrc-publish")," with its own rules.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/pages/configs/npmrc-publish"},"this documentation")," for details."),(0,i.kt)("p",null,"The above rules do not apply if the package manager is invoked directly (instead of via Rush).\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"npm publish")," is invoked from the shell, then the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/config#npmrc-files"},"package manager's usual precedence")," will\napply instead. Generally this practice is discouraged in a Rush repo, but if used, you may need to create\nadditional ",(0,i.kt)("strong",{parentName:"p"},".npmrc")," files."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/maintainer/npm_registry_auth"},"NPM registry authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/configs/npmrc-publish"},".npmrc-publish")," config file")))}f.isMDXComponent=!0}}]);