"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[2140],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(6393);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,u=d["".concat(i,".").concat(g)]||d[g]||m[g]||o;return t?a.createElement(u,s(s({ref:n},c),{},{components:t})):a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[d]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var a=t(9122),r=t(2501),o=(t(6393),t(158)),s=["components"],p={title:"NPM doppelgangers"},i=void 0,l={unversionedId:"pages/advanced/npm_doppelgangers",id:"pages/advanced/npm_doppelgangers",title:"NPM doppelgangers",description:'This article continues the discussion from the "Phantom dependencies" section. It\'s recommended to read that first._',source:"@site/docs/pages/advanced/npm_doppelgangers.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/npm_doppelgangers",permalink:"/pages/advanced/npm_doppelgangers",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/npm_doppelgangers.md",tags:[],version:"current",frontMatter:{title:"NPM doppelgangers"},sidebar:"docsSidebar",previous:{title:"Phantom dependencies",permalink:"/pages/advanced/phantom_deps"},next:{title:"PNPM Compatibility DB",permalink:"/pages/advanced/compatibility_db"}},c={},d=[{value:"How NPM doppelgangers arise",id:"how-npm-doppelgangers-arise",level:2},{value:"Consequences of doppelgangers",id:"consequences-of-doppelgangers",level:2}],m={toc:d},g="wrapper";function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)(g,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'This article continues the discussion from the "',(0,o.kt)("a",{parentName:"em",href:"/pages/advanced/phantom_deps"},"Phantom dependencies"),"\" section. It's recommended to read that first.")),(0,o.kt)("h2",{id:"how-npm-doppelgangers-arise"},"How NPM doppelgangers arise"),(0,o.kt)("img",{src:"/images/home/card-doppel.svg",style:{float:"right",paddingLeft:"30px"},alt:"NPM doppelganger"}),(0,o.kt)("p",null,"Sometimes the ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," data structure is forced to install two copies\nof ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"the same version of"))," the same package. Really? How can that happen?"),(0,o.kt)("p",null,"Suppose we have a main project ",(0,o.kt)("strong",{parentName:"p"},"A")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "library-a",\n  "version": "1.0.0",\n  "dependencies": {\n    "library-b": "^1.0.0",\n    "library-c": "^1.0.0",\n    "library-d": "^1.0.0",\n    "library-e": "^1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"And then ",(0,o.kt)("strong",{parentName:"p"},"B")," and ",(0,o.kt)("strong",{parentName:"p"},"C")," both depend on ",(0,o.kt)("strong",{parentName:"p"},"F1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "library-b",\n  "version": "1.0.0",\n  "dependencies": {\n    "library-f": "^1.0.0"\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "library-c",\n  "version": "1.0.0",\n  "dependencies": {\n    "library-f": "^1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"But ",(0,o.kt)("strong",{parentName:"p"},"D")," and ",(0,o.kt)("strong",{parentName:"p"},"E")," depend on ",(0,o.kt)("strong",{parentName:"p"},"F2"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "library-d",\n  "version": "1.0.0",\n  "dependencies": {\n    "library-f": "^2.0.0"\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "library-e",\n  "version": "1.0.0",\n  "dependencies": {\n    "library-f": "^2.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," tree can share ",(0,o.kt)("strong",{parentName:"p"},"F1")," by putting it at the top of the tree,\nbut then ",(0,o.kt)("strong",{parentName:"p"},"F2")," has to be duplicated in subfolders:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- library-a/\n  - package.json\n  - node_modules/\n    - library-b/\n      - package.json\n    - library-c/\n      - package.json\n    - library-d/\n      - package.json\n      - node_modules/\n        - library-f/\n          - package.json  <-- library-f@2.0.0\n    - library-e/\n      - package.json\n      - node_modules/\n        - library-f/\n          - package.json  <-- library-f@2.0.0\n    - library-f/\n      - package.json  <-- library-f@1.0.0\n")),(0,o.kt)("p",null,"Alternatively, the package manager could choose to put ",(0,o.kt)("strong",{parentName:"p"},"F2")," at the top,\nbut then ",(0,o.kt)("strong",{parentName:"p"},"F1")," gets duplicated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- library-a/\n  - package.json\n  - node_modules/\n    - library-b/\n      - package.json\n      - node_modules/\n        - library-f/\n          - package.json  <-- library-f@1.0.0\n    - library-c/\n      - package.json\n      - node_modules/\n        - library-f/\n          - package.json  <-- library-f@1.0.0\n    - library-d/\n      - package.json\n    - library-e/\n      - package.json\n    - library-f/\n      - package.json  <-- library-f@2.0.0\n")),(0,o.kt)("p",null,"Either way, we cannot arrange the tree without having two copies of the same version\nof ",(0,o.kt)("strong",{parentName:"p"},"library-f"),". We call these \"doppelgangers\". Traditional package managers from\nother programming languages don't encounter this issue; it's a peculiar aspect of\nNPM's ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," tree. It is inherent in the design and unavoidable."),(0,o.kt)("h2",{id:"consequences-of-doppelgangers"},"Consequences of doppelgangers"),(0,o.kt)("p",null,"Small projects rarely encounter doppelgangers, but they are fairly common in a large\nscale monorepo. Here's some potential problems that can result:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Slower installs:")," Disk space isn't too expensive these days, but imagine\nyou have 20 libraries that depend on ",(0,o.kt)("strong",{parentName:"p"},"F1"),", leading to 20 duplicated copies.\nOr suppose there's a post-install script that downloads and unzips large archive\n(e.g. PhantomJS) and this happens separately for each doppelganger. That could\nimpact your install time significantly.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Exploding bundle sizes:")," Web projects commonly use a bundler such as\n",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," that statically analyzes ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," statements\nand collects code into a single bundle file for deployment. This file should be kept as small as\npossible, because it directly affects the load time for your web application.\nWhen a doppelganger appears unexpectedly (e.g. due to an ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," operation that\nrebalances the ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," tree), this can cause two copies of a library to be embedded\nin a bundle, greatly increasing its size.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non-single singletons:")," Suppose ",(0,o.kt)("strong",{parentName:"p"},"library-f")," has an API which exposes a cache object\nthat is intended to be a singleton instance shared by all consumers of the library.\nWhen two different components call ",(0,o.kt)("inlineCode",{parentName:"p"},'require("library-f")'),' they may get two different\nlibrary instantiations, which means there will suddenly be two instances of the singleton\n(i.e. the underlying "global" variable gets allocated in two different closures).\nThis can lead to very strange behavior that is difficult to debug.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Duplicate types:")," Suppose ",(0,o.kt)("strong",{parentName:"p"},"library-f")," is a TypeScript library. The compiler will\nencounter duplicate copies of all the ","*",".d.ts files for that library. For example,\neach class will have two copies of its declaration, which cannot be deduplicated by\nfollowing symlink targets, since they are separate physical files. In general identical\nclass declarations are not considered interchangeable by TypeScript and will cause\ncompile errors when mixed. Typescript 2.x introduced a heuristic for detecting and\nequating these duplicates, but it involves additional complexity and processing.\nOther build tasks may not be so sophisticated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Semantically different doppelgangers:")," Suppose ",(0,o.kt)("strong",{parentName:"p"},"F")," has a dependency ",(0,o.kt)("strong",{parentName:"p"},"G")," that\nis also consumed by other packages in the tree. In the tree, the first copy of ",(0,o.kt)("strong",{parentName:"p"},"F1"),"\nstarts its search for ",(0,o.kt)("strong",{parentName:"p"},"G")," under ",(0,o.kt)("strong",{parentName:"p"},"B"),", whereas the second copy of ",(0,o.kt)("strong",{parentName:"p"},"F1"),"\nstarts under ",(0,o.kt)("strong",{parentName:"p"},"C"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," algorithm can find different versions of ",(0,o.kt)("strong",{parentName:"p"},"G"),"\nfrom these two starting points. This means the runtime behavior of the two ",(0,o.kt)("strong",{parentName:"p"},"F1"),"\ninstances may be different. Or at compile time, if ",(0,o.kt)("strong",{parentName:"p"},"F")," exports a TypeScript class\nthat inherits from a base class defined in ",(0,o.kt)("strong",{parentName:"p"},"G"),", we can end up with differing type\nsignatures ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"for the same class from the same version of the same package")),". This can\nlead to highly confusing compiler errors."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How Rush helps:")," Rush's symlinking strategy eliminates doppelgangers only for dependencies\nthat are local projects in the monorepo. If you're using NPM or Yarn as your package manager,\nunfortunately doppelgangers are still possible for any indirect dependencies. Whereas if you\nuse PNPM with Rush, the doppelganger problem is fully solved (because PNPM's installation model\naccurately simulates a true directed acyclic graph)."))}u.isMDXComponent=!0}}]);