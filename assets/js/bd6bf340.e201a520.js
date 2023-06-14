"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[5659],{158:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(6393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=t(9122),o=t(2501),s=(t(6393),t(158)),i=["components"],a={title:"common-versions.json"},c=void 0,l={unversionedId:"pages/configs/common-versions_json",id:"pages/configs/common-versions_json",title:"common-versions.json",description:"This is the template that rush init",source:"@site/docs/pages/configs/common-versions_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/common-versions_json",permalink:"/pages/configs/common-versions_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/common-versions_json.md",tags:[],version:"current",frontMatter:{title:"common-versions.json"},sidebar:"docsSidebar",previous:{title:"command-line.json",permalink:"/pages/configs/command-line_json"},next:{title:"deploy.json",permalink:"/pages/configs/deploy_json"}},p={},m=[],d={toc:m},u="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is the template that ",(0,s.kt)("a",{parentName:"p",href:"/pages/commands/rush_init"},"rush init"),"\ngenerates for ",(0,s.kt)("strong",{parentName:"p"},"common-versions.json"),":"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"common/config/rush/common-versions.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * This configuration file specifies NPM dependency version selections that affect all projects\n * in a Rush repo.  More documentation is available on the Rush website: https://rushjs.io\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/common-versions.schema.json",\n\n  /**\n   * A table that specifies a "preferred version" for a given NPM package.  This feature is typically used\n   * to hold back an indirect dependency to a specific older version, or to reduce duplication of indirect dependencies.\n   *\n   * The "preferredVersions" value can be any SemVer range specifier (e.g. "~1.2.3").  Rush injects these values into\n   * the "dependencies" field of the top-level common/temp/package.json, which influences how the package manager\n   * will calculate versions.  The specific effect depends on your package manager.  Generally it will have no\n   * effect on an incompatible or already constrained SemVer range.  If you are using PNPM, similar effects can be\n   * achieved using the pnpmfile.js hook.  See the Rush documentation for more details.\n   *\n   * After modifying this field, it\'s recommended to run "rush update --full" so that the package manager\n   * will recalculate all version selections.\n   */\n  "preferredVersions": {\n    /**\n     * When someone asks for "^1.0.0" make sure they get "1.2.3" when working in this repo,\n     * instead of the latest version.\n     */\n    // "some-library": "1.2.3"\n  },\n\n  /**\n   * When set to true, for all projects in the repo, all dependencies will be automatically added as preferredVersions,\n   * except in cases where different projects specify different version ranges for a given dependency.  For older\n   * package managers, this tended to reduce duplication of indirect dependencies.  However, it can sometimes cause\n   * trouble for indirect dependencies with incompatible peerDependencies ranges.\n   *\n   * The default value is true.  If you\'re encountering installation errors related to peer dependencies,\n   * it\'s recommended to set this to false.\n   *\n   * After modifying this field, it\'s recommended to run "rush update --full" so that the package manager\n   * will recalculate all version selections.\n   */\n  // "implicitlyPreferredVersions": false,\n\n  /**\n   * The "rush check" command can be used to enforce that every project in the repo must specify\n   * the same SemVer range for a given dependency.  However, sometimes exceptions are needed.\n   * The allowedAlternativeVersions table allows you to list other SemVer ranges that will be\n   * accepted by "rush check" for a given dependency.\n   *\n   * IMPORTANT: THIS TABLE IS FOR *ADDITIONAL* VERSION RANGES THAT ARE ALTERNATIVES TO THE\n   * USUAL VERSION (WHICH IS INFERRED BY LOOKING AT ALL PROJECTS IN THE REPO).\n   * This design avoids unnecessary churn in this file.\n   */\n  "allowedAlternativeVersions": {\n    /**\n     * For example, allow some projects to use an older TypeScript compiler\n     * (in addition to whatever "usual" version is being used by other projects in the repo):\n     */\n    // "typescript": [\n    //   "~2.4.0"\n    // ]\n  }\n}\n')))}f.isMDXComponent=!0}}]);