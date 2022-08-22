"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9361],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(6393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||s;return t?r.createElement(h,a(a({ref:n},c),{},{components:t})):r.createElement(h,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=t(216),o=t(2228),s=(t(6393),t(158)),a=["components"],i={title:"experiments.json"},l=void 0,p={unversionedId:"pages/configs/experiments_json",id:"pages/configs/experiments_json",title:"experiments.json",description:"This is the template that rush init",source:"@site/docs/pages/configs/experiments_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/experiments_json",permalink:"/pages/configs/experiments_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/experiments_json.md",tags:[],version:"current",frontMatter:{title:"experiments.json"},sidebar:"docsSidebar",previous:{title:"deploy.json",permalink:"/pages/configs/deploy_json"},next:{title:"rush.json",permalink:"/pages/configs/rush_json"}},c={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is the template that ",(0,s.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init"),"\ngenerates for ",(0,s.kt)("strong",{parentName:"p"},"experiments.json"),":"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"common/config/rush/experiments.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * This configuration file allows repo maintainers to enable and disable experimental\n * Rush features.  More documentation is available on the Rush website: https://rushjs.io\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/experiments.schema.json",\n\n  /**\n   * By default, \'rush install\' passes --no-prefer-frozen-lockfile to \'pnpm install\'.\n   * Set this option to true to pass \'--frozen-lockfile\' instead for faster installs.\n   */\n  // "usePnpmFrozenLockfileForRushInstall": true,\n\n  /**\n   * By default, \'rush update\' passes --no-prefer-frozen-lockfile to \'pnpm install\'.\n   * Set this option to true to pass \'--prefer-frozen-lockfile\' instead to minimize shrinkwrap changes.\n   */\n  // "usePnpmPreferFrozenLockfileForRushUpdate": true,\n\n  /**\n   * If using the \'preventManualShrinkwrapChanges\' option, restricts the hash to only include the layout of external dependencies.\n   * Used to allow links between workspace projects or the addition/removal of references to existing dependency versions to not\n   * cause hash changes.\n   */\n  // "omitImportersFromPreventManualShrinkwrapChanges": true,\n\n  /**\n   * If true, the chmod field in temporary project tar headers will not be normalized.\n   * This normalization can help ensure consistent tarball integrity across platforms.\n   */\n  // "noChmodFieldInTarHeaderNormalization": true,\n\n  /**\n   * If true, build caching will respect the allowWarningsInSuccessfulBuild flag and cache builds with warnings.\n   * This will not replay warnings from the cached build.\n   */\n  // "buildCacheWithAllowWarningsInSuccessfulBuild": true,\n\n  /**\n   * If true, the phased commands feature is enabled. To use this feature, create a "phased" command\n   * in common/config/rush/command-line.json.\n   */\n  // "phasedCommands": true\n}\n}\n')))}f.isMDXComponent=!0}}]);