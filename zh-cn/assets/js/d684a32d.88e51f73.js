"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[2972],{158:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=t(9122),a=t(2501),o=(t(6393),t(158)),s=["components"],i={title:".pnpmfile.cjs"},c=void 0,p={unversionedId:"pages/configs/pnpmfile_cjs",id:"pages/configs/pnpmfile_cjs",title:".pnpmfile.cjs",description:"This is the template that rush init",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/pnpmfile_cjs.md",sourceDirName:"pages/configs",slug:"/pages/configs/pnpmfile_cjs",permalink:"/zh-cn/pages/configs/pnpmfile_cjs",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/pnpmfile_cjs.md",tags:[],version:"current",frontMatter:{title:".pnpmfile.cjs"},sidebar:"docsSidebar",previous:{title:".npmrc-publish",permalink:"/zh-cn/pages/configs/npmrc-publish"},next:{title:"artifactory.json\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/configs/artifactory_json"}},l={},u=[],f={toc:u},m="wrapper";function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the template that ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/commands/rush_init"},"rush init"),"\ngenerates for the monorepo ",(0,o.kt)("strong",{parentName:"p"},"pnpmfile.js")," file:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"common/config/rush/.pnpmfile.cjs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\n/**\n * When using the PNPM package manager, you can use pnpmfile.js to workaround\n * dependencies that have mistakes in their package.json file.  (This feature is\n * functionally similar to Yarn's \"resolutions\".)\n *\n * For details, see the PNPM documentation:\n * https://pnpm.js.org/docs/en/hooks.html\n *\n * IMPORTANT: SINCE THIS FILE CONTAINS EXECUTABLE CODE, MODIFYING IT IS LIKELY TO INVALIDATE\n * ANY CACHED DEPENDENCY ANALYSIS.  After any modification to pnpmfile.js, it's recommended to run\n * \"rush update --full\" so that PNPM will recalculate all version selections.\n */\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n};\n\n/**\n * This hook is invoked during installation before a package's dependencies\n * are selected.\n * The `packageJson` parameter is the deserialized package.json\n * contents for the package that is about to be installed.\n * The `context` parameter provides a log() function.\n * The return value is the updated object.\n */\nfunction readPackage(packageJson, context) {\n  // // The karma types have a missing dependency on typings from the log4js package.\n  // if (packageJson.name === '@types/karma') {\n  //  context.log('Fixed up dependencies for @types/karma');\n  //  packageJson.dependencies['log4js'] = '0.6.38';\n  // }\n\n  return packageJson;\n}\n")))}g.isMDXComponent=!0}}]);