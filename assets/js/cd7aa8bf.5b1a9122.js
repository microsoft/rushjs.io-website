"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[607],{158:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(216),r=n(2228),i=(n(6393),n(158)),o=["components"],s={title:"Installation variants"},l=void 0,p={unversionedId:"pages/advanced/installation_variants",id:"pages/advanced/installation_variants",title:"Installation variants",description:"Sometimes you may want to build your entire monorepo using a modified set of dependencies. For example,",source:"@site/docs/pages/advanced/installation_variants.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/installation_variants",permalink:"/pages/advanced/installation_variants",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/installation_variants.md",tags:[],version:"current",frontMatter:{title:"Installation variants"},sidebar:"docsSidebar",previous:{title:"Using watch mode",permalink:"/pages/advanced/watch_mode"},next:{title:"Creating Rush plugins (experimental)",permalink:"/pages/extensibility/creating_plugins"}},u={},d=[{value:"Setting up a variant",id:"setting-up-a-variant",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes you may want to build your entire monorepo using a modified set of dependencies. For example,\nsuppose you just finished upgrading to a major new release of a framework, but you intend to maintain compatibility\nwith the previous release during a transition period. Your developers should use the new variant for their everyday\nwork, but for PR builds, you want your CI job to build the entire repo twice -- once with the old variant,\nand once with the new variant."),(0,i.kt)("p",null,"It seems like you could solve this by writing a simple script to search+replace the versions in your\n",(0,i.kt)("strong",{parentName:"p"},"package.json")," files, but you'll quickly encounter other files that are affected:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shrinkwrap file"),": builds won't be deterministic unless you maintain separate shrinkwrap files for\nthe two variants"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"common-versions.json"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"preferredVersions")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"allowedAlternativeVersions")," may need to be different\nfor the two variants"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pnpmfile.js"),": if you have workarounds for poorly behaved legacy packages, they may need to be different\nfor the two variants")),(0,i.kt)("p",null,"This problem seems to requires a separate, parallel set of configuration files. Starting with Rush 5.4.0,\nthere's now an out-of-box solution for this problem."),(0,i.kt)("h2",{id:"setting-up-a-variant"},"Setting up a variant"),(0,i.kt)("p",null,'Suppose "',(0,i.kt)("strong",{parentName:"p"},"widget-sdk"),"\" is a hypothetical library that just shipped a major new release 3, and we've upgraded to\nversion 3, but we want to maintain compatibility with version 2. We can indicate this using a loose SemVer\nrange our ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"libraries/my-controls/package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-controls",\n  "version": "1.0.0",\n  "description": "An example library project",\n  "license": "MIT",\n  "main": "lib/index.js",\n  "typings": "lib/index.d.ts",\n  "scripts": {\n    "build": "node_modules/.bin/my-build"\n  },\n  "dependencies": {\n    "widget-sdk": "^2.3.4 || ^3.0.2"\n  },\n  "devDependencies": {\n    "my-toolchain": "^1.0.0",\n    "typescript": "^3.0.3"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'"^2.3.4 || ^3.0.2"')," range indicates that our library will accept ",(0,i.kt)("strong",{parentName:"p"},"widget-sdk")," version 2.x (but not older\nthan 2.3.4) or version 3.x (but not older than 3.0.2). When you run ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update"),", you will normally get the latest\ncompatible version. How to build and test with the older version 2? Let's set up a variant!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1",". Define your variant.")," In the rush.json config file, we add a definition like this:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*","rush.json")," excerpt","*"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  "variants": [\n    // {\n    //   /**\n    //    * The folder name for this variant.\n    //    */\n    //   "variantName": "example-variant",\n    //\n    //   /**\n    //    * An informative description\n    //    */\n    //   "description": "Build this repo using the previous release of the SDK"\n    // }\n\n    {\n      "variantName": "old-widget-sdk",\n      "description": "Build this repo using version 2 of the widget-sdk"\n    }\n  ],\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2",". Copy the config files.")," To get your variant started, copy your existing config files from ",(0,i.kt)("strong",{parentName:"p"},"common/config/rush"),"\nto your variant folder ",(0,i.kt)("strong",{parentName:"p"},"common/config/rush/variants/old-widget-sdk"),". Three config files are currently supported\n(others may be added in the future):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shrinkwrap.yaml"),", ",(0,i.kt)("strong",{parentName:"li"},"npm-shrinkwrap.json"),", or ",(0,i.kt)("strong",{parentName:"li"},"yarn.lock")," depending on your package manager"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"common-versions.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pnpmfile.js")," if you are using PNPM as your package manager")),(0,i.kt)("p",null,"Be sure to add the copied files to Git:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Creating a new variant"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3",". Override the dependency versions for the variant.")," For this example, we will downgrade\n",(0,i.kt)("strong",{parentName:"p"},"widget-sdk")," to use version 2.x. This can be done by using Rush's\n",(0,i.kt)("a",{parentName:"p",href:"/pages/advanced/preferred_versions"},"preferred versions")," feature.\nWe'll use a wildcard so that ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update --full")," still picks up minor/patch releases:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*","common-versions.json")," excerpt","*"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  /**\n   * A table that specifies a "preferred version" for a dependency package. The "preferred version"\n   * is typically used to hold an indirect dependency back to a specific version, however generally\n   * it can be any SemVer range specifier (e.g. "~1.2.3"), and it will narrow any (compatible)\n   * SemVer range specifier.  See the Rush documentation for details about this feature.\n   */\n  "preferredVersions": {\n\n    /**\n     * When someone asks for "^1.0.0" make sure they get "1.2.3" when working in this repo,\n     * instead of the latest version.\n     */\n    // "some-library": "1.2.3"\n\n    "widget-sdk": "^2.3.9"\n  },\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"^2.3.9")," satisfies the SemVer range ",(0,i.kt)("inlineCode",{parentName:"p"},"^2.3.4 || ^3.0.2")," that we specified in ",(0,i.kt)("strong",{parentName:"p"},"package.json")," above.\n(If this was not true, then the preferred version would not have any effect!)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4",". Install your variant and test it.")," Let's start by running ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," to install the new set of\ndependency versions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rush update --full --variant old-widget-sdk\n")),(0,i.kt)("p",null,"This will update the file ",(0,i.kt)("strong",{parentName:"p"},"common/config/rush/old-widget-sdk/shrinkwrap.yaml"),", install those dependencies\nin ",(0,i.kt)("strong",{parentName:"p"},"common/temp/node_modules"),", and link each project to use those dependencies. The ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," command also\nsupports the ",(0,i.kt)("inlineCode",{parentName:"p"},"--variant")," option. Your CI job can use this when it builds with the old ",(0,i.kt)("strong",{parentName:"p"},"widget-sdk")," release."),(0,i.kt)("p",null,"Now you can build and test your variant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rush rebuild\n")),(0,i.kt)("p",null,"\ud83d\udc49 If you get tired of typing ",(0,i.kt)("inlineCode",{parentName:"p"},"--variant"),", you can also use the\n",(0,i.kt)("a",{parentName:"p",href:"/pages/configs/environment_vars"},"RUSH_VARIANT"),"\nenvironment variable to specify the variant name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5",". Restoring the original state.")," When you're done testing your variant, you can return to the original\nstate by running ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," without the ",(0,i.kt)("inlineCode",{parentName:"p"},"--variant"),' option. We call this the "',(0,i.kt)("strong",{parentName:"p"},"default variant"),"\", because\nit's the same default behavior as a repo that didn't define any variants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Restore the original state by omitting "--variant":\nrush install\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Tip:")," If you forget which variant is active, you can look in the ",(0,i.kt)("strong",{parentName:"p"},"common/temp/current-variant.json")," file.\nIf you open this file in a text editor, you should see a line like this:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},'{\n "variant": "old-widget-sdk"\n}\n'))))}m.isMDXComponent=!0}}]);