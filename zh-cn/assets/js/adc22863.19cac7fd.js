"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4141],{158:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>d});var t=n(6393);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?t.createElement(v,s(s({ref:r},l),{},{components:n})):t.createElement(v,s({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5546:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var t=n(216),o=n(2228),i=(n(6393),n(158)),s=["components"],a={title:"rush version"},c=void 0,p={unversionedId:"pages/commands/rush_version",id:"pages/commands/rush_version",title:"rush version",description:"\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_version.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_version",permalink:"/zh-cn/pages/commands/rush_version",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_version.md",tags:[],version:"current",frontMatter:{title:"rush version"},sidebar:"docsSidebar",previous:{title:"rush update-cloud-credentials (experimental)",permalink:"/zh-cn/pages/commands/rush_update-cloud-credentials"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/zh-cn/pages/configs/environment_vars"}},l={},u=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\u7528\u6cd5\uff1a rush version [-h] [-b BRANCH] [--ensure-version-policy]\n                    [--override-version NEW_VERSION] [--bump]\n                    [--bypass-policy] [--version-policy POLICY]\n                    [--override-bump BUMPTYPE] [--override-prerelease-id ID]\n\n\u4f7f\u7528 "rush version" \u6307\u4ee4\u6765\u786e\u4fdd\u7248\u672c\u7b56\u7565\u548c\u53d8\u66f4\u7248\u672c\u3002\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\u3002\n  -b BRANCH, --target-branch BRANCH\n                        \u4e00\u65e6\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5c06\u4f1a\u628a\u53d8\u66f4\u548c\u5220\u9664\u53d8\u66f4\u7684\u884c\u4e3a\u63d0\u4ea4\u5e76\u5408\u5e76\u5230\u6307\u5b9a\u5206\n                        \u652f\u4e0a\u3002\n  --ensure-version-policy\n                        \u5982\u679c\u9700\u8981\u6ee1\u8db3\u7248\u672c\u7b56\u7565\uff0c\u5219\u66f4\u65b0\u5305\u7248\u672c\u3002\n  --override-version NEW_VERSION\n                        \u4f7f\u7528\u6307\u5b9a\u7684 --version-policy \u8986\u76d6\u7248\u672c\u3002\u53ea\u6709\u5f53\u6307\u5b9a\n                        --ensure-version-policy \u65f6\uff0c\u8be5\u8bbe\u7f6e\u624d\u4f1a\u5bf9 lock-step\n                        \u7248\u672c\u7b56\u7565\u8d77\u4f5c\u7528\u3002\n  --bump                \u57fa\u4e8e\u7248\u672c\u7b56\u7565\u8fdb\u884c\u7248\u672c\u53d8\u66f4\u3002policies.\n  --bypass-policy       \u5f3a\u5236\u8986\u76d6 rush.json \u4e2d\u7ea6\u5b9a\u7684 "gitPolicy" \u89c4\u5b9a\u3002\n  --version-policy POLICY\n                        \u7248\u672c\u653f\u7b56\u7684\u540d\u5b57\n  --override-bump BUMPTYPE\n                        \u5728 version-policy.json \u4e2d\u8986\u76d6\u53d8\u66f4\u7c7b\u578b\u3002\u6709\u6548\u7684\u7248\u672c\u53d8\u66f4\u7c7b\u578b\n                        \u5305\u62ec\uff1aprerelease, patch, preminor, minor,\n                        major. \u8be5\u8bbe\u5b9a\u53ea\u5bf9 lock-step \u7248\u672c\u7b56\u7565\u6709\u6548\u3002\n  --override-prerelease-id ID\n                        \u8986\u76d6 version-policy.json \u4e2d\u7684\u9884\u53d1\u5e03 id. \u8be5\u8bbe\u5b9a\u53ea\u5bf9\n                        lock-step \u7248\u672c\u7b56\u7565\u6709\u6548\u3002\u5f53\u5e26\u6709 "--bump" \u53c2\u6570\u65f6\uff0c\u8be5\u914d\u7f6e\n                        \u4f1a\u589e\u52a0\u9884\u53d1\u5e03 id; \u5f53\u5e26\u6709 "--ensure-version-policy"\n                        \u65f6\uff0c\u8be5\u914d\u7f6e\u4f1a\u66ff\u6362\u9884\u53d1\u5e03\u540d\u79f0\u3002\n')),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../maintainer/publishing"},"\u53d1\u5305")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../commands/rush_change"},"rush change")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../commands/rush_publish"},"rush publish"))))}d.isMDXComponent=!0}}]);