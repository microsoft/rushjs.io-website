"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[528],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=n(216),a=n(2228),r=(n(6393),n(158)),o=["components"],s={title:"PNPM Compatibility DB"},p=void 0,l={unversionedId:"pages/advanced/compatibility_db",id:"pages/advanced/compatibility_db",title:"PNPM Compatibility DB",description:"Both Yarn and PNPM support a feature called the Compatibility DB, which is a public database of package.json fixups. These fixups solve known issues that the official maintainer of an NPM package may be unwilling to solve. (The best practice would be to avoid such packages, but often that is impractical.) Compatibility DB fixups are similar to user-authored rules found in .pnpmfile.cjs. They are maintained with the @yarnpkg/extensions package.",source:"@site/docs/pages/advanced/compatibility_db.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/compatibility_db",permalink:"/pages/advanced/compatibility_db",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/compatibility_db.md",tags:[],version:"current",frontMatter:{title:"PNPM Compatibility DB"},sidebar:"docsSidebar",previous:{title:"NPM doppelgangers",permalink:"/pages/advanced/npm_doppelgangers"},next:{title:"Preferred versions",permalink:"/pages/advanced/preferred_versions"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Both Yarn and PNPM support a feature called the ",(0,r.kt)("strong",{parentName:"p"},"Compatibility DB"),", which is a public database of ",(0,r.kt)("strong",{parentName:"p"},"package.json")," fixups. These fixups solve known issues that the official maintainer of an NPM package may be unwilling to solve. (The best practice would be to avoid such packages, but often that is impractical.) Compatibility DB fixups are similar to user-authored rules found in ",(0,r.kt)("strong",{parentName:"p"},".pnpmfile.cjs"),". They are maintained with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/extensions"},"@yarnpkg/extensions")," package."),(0,r.kt)("p",null,"PNPM's feature protects small projects from common pitfalls, but the approach has some downsides for a large monorepo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hidden magic: The fixups are bundled into the PNPM binary. When trying to coordinate complex cross-project version dependencies, it is awkward for key inputs to be in a file with no Git diff, not even viewable in the GitHub website."),(0,r.kt)("li",{parentName:"ul"},"Unnecessary coupling: Different versions of the ",(0,r.kt)("inlineCode",{parentName:"li"},"@yarnpkg/extensions")," rules are bundled into different PNPM releases. This may cause churn the lockfile when upgrading or downgrading the package manager."),(0,r.kt)("li",{parentName:"ul"},"Applied last: The fixups are applied after ",(0,r.kt)("strong",{parentName:"li"},".pnpmfile.cjs"),". This means the fixed up versions aren't visible to the user's own transformations or logging, and ",(0,r.kt)("strong",{parentName:"li"},".pnpmfile.cjs")," is no longer the final authority about version choices.")),(0,r.kt)("p",null,"To avoid these issues, ",(0,r.kt)("inlineCode",{parentName:"p"},"rush install")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rush update")," always disable the Compatibility DB feature when invoking PNPM."),(0,r.kt)("p",null,"Details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility DB is implemented by PNPM versions ",(0,r.kt)("inlineCode",{parentName:"li"},">= 6.32.12"),", ",(0,r.kt)("inlineCode",{parentName:"li"},">= 7.0.1")," (but not ",(0,r.kt)("inlineCode",{parentName:"li"},"7.0.0"),")"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ignore-compatibility-db")," switch is implemented in newer PNPM releases: ",(0,r.kt)("inlineCode",{parentName:"li"},">= 6.34.0 <7.0.01")," and ",(0,r.kt)("inlineCode",{parentName:"li"},">= 7.9.0")),(0,r.kt)("li",{parentName:"ul"},"Compatibility DB is disabled by Rush versions ",(0,r.kt)("inlineCode",{parentName:"li"},">= 5.76.0")," if possible..."),(0,r.kt)("li",{parentName:"ul"},"..otherwise, if the switch is missing, Rush prints a warning recommending to upgrade PNPM")),(0,r.kt)("p",null,"The Compatibility DB fixes are useful. To apply them in your Rush repo, it's recommended to copy these settings into a proper Git-tracked file such as ",(0,r.kt)("strong",{parentName:"p"},".pnpmfile.cjs"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Feature idea: Propose an automated mechanism for syncing ",(0,r.kt)("inlineCode",{parentName:"p"},"@yarnpkg/extensions")," into a Git-tracked file under ",(0,r.kt)("inlineCode",{parentName:"p"},"common/config/rush"),".")))}m.isMDXComponent=!0}}]);