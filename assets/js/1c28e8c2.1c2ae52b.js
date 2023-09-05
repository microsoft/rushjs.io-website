"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[5418],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(6393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,d=u["".concat(c,".").concat(h)]||u[h]||f[h]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(9122),o=n(2501),s=(n(6393),n(158)),i=["components"],a={title:"rush-project.json"},c=void 0,l={unversionedId:"pages/configs/rush-project_json",id:"pages/configs/rush-project_json",title:"rush-project.json",description:"This is the template for the optional rush-project.json config file. This file may be provided",source:"@site/docs/pages/configs/rush-project_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/rush-project_json",permalink:"/pages/configs/rush-project_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/rush-project_json.md",tags:[],version:"current",frontMatter:{title:"rush-project.json"},sidebar:"docsSidebar",previous:{title:"rush-plugins.json (experimental)",permalink:"/pages/configs/rush-plugins_json"},next:{title:"version-policies.json",permalink:"/pages/configs/version-policies_json"}},p={},u=[{value:"See also",id:"see-also",level:2}],f={toc:u},h="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is the template for the optional ",(0,s.kt)("strong",{parentName:"p"},"rush-project.json")," config file. This file may be provided\nby a ",(0,s.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/rig_packages/"},"rig package"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"<","your project",">","/config/rush-project.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * The "config/rush-project.json" file configures Rush-specific settings for an individual project\n * in a Rush monorepo.  More documentation is available on the Rush website: https://rushjs.io\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/rush-project.schema.json",\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "my-rig/profiles/default/config/rush-project.json",\n\n  /**\n   * The incremental analyzer can skip Rush commands for projects whose input files have not changed since\n   * the last build.  Normally, every Git-tracked file under the project folder is assumed to be an input.\n   * Use "incrementalBuildIgnoredGlobs" to ignore specific files, specified as globs relative to\n   * the project folder.  The glob syntax is based on the .gitignore file format.\n   */\n  "incrementalBuildIgnoredGlobs": [\n    // "etc/api-report/*.md"\n  ],\n\n  /**\n   * Disable caching for this project. The project will never be restored from cache. This may be useful\n   * if this project affects state outside of its folder.\n   *\n   * Default value: false\n   */\n  // "disableBuildCacheForProject": true,\n\n  /**\n   * Options for individual commands and phases.\n   */\n  "operationSettings": [\n    // {\n    //   /**\n    //    * (Required) The name of the operation.\n    //    * This should be a key in the "package.json" file\'s "scripts" section.\n    //    */\n    //   "operationName": "build",\n    //\n    //   /**\n    //    * Specify the folders where this operation writes its output files.  If enabled, the Rush build cache\n    //    * will restore these folders from the cache.  The strings are folder names under the project root folder.\n    //    * These folders should not be tracked by Git.  They must not contain symlinks.\n    //    */\n    //   "outputFolderNames": [\n    //     "lib", "dist"\n    //   ],\n    //\n    //   /**\n    //    * Disable caching for this operation.  The operation will never be restored from cache.\n    //    * This may be useful if this operation affects state outside of its folder.\n    //    */\n    //   // "disableBuildCacheForOperation": true\n    // }\n  ]\n}\n')),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages/maintainer/build_cache"},"Enabling the build cache"))))}d.isMDXComponent=!0}}]);