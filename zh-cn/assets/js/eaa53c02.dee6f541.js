"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[7865],{158:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(6393);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||l[d]||s;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5884:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var t=n(216),a=n(2228),s=(n(6393),n(158)),o=["components"],c={title:"rush scan"},i=void 0,u={unversionedId:"pages/commands/rush_scan",id:"pages/commands/rush_scan",title:"rush scan",description:"\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_scan.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_scan",permalink:"/zh-cn/pages/commands/rush_scan",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_scan.md",tags:[],version:"current",frontMatter:{title:"rush scan"},sidebar:"docsSidebar",previous:{title:"rush rebuild",permalink:"/zh-cn/pages/commands/rush_rebuild"},next:{title:"rush setup (experimental)",permalink:"/zh-cn/pages/commands/rush_setup"}},p={},l=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:l};function d(e){var r=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u7528\u6cd5\uff1a rush scan [-h]\n\nNode.js \u7684\u6a21\u5757\u7cfb\u7edf\u5141\u8bb8\u9879\u76ee\u5f15\u5165\u4e00\u4e2a\u6ca1\u6709\u5728 package.json \u6587\u4ef6\u4e2d\u58f0\u660e\u7684 NPM \u5305\u3002\u50cf\u8fd9\u79cd\n\u201c\u5e7b\u5f71\u4f9d\u8d56\u201d \u4fbf\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002Rush \u548c PNPM \u4f7f\u7528\u7b26\u53f7\u94fe\u63a5\u6765\u9632\u6b62\u5e7b\u5f71\u4f9d\u8d56\uff0c\u5f53\u5f00\u53d1\u8005\u5c1d\u8bd5\u5c06\u5df2\u6709\n\u9879\u76ee\u8fc1\u79fb\u5230 Rush \u65f6\uff0c\u8fd9\u4e9b\u4fdd\u62a4\u6027\u63aa\u65bd\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fd0\u884c\u65f6\u9519\u8bef\u3002"rush scan" \u6307\u4ee4\u5c31\u662f\u4fee\u590d\u8fd9\u4e9b\n\u9519\u8bef\u7684\u5de5\u5177\uff0c\u5b83\u4f1a\u626b\u63cf "./src" \u548c "./lib" \u76ee\u5f55\u4e0b\u7684 import \u8bed\u6cd5\uff0c\u8bf8\u5982 "import __\nfrom \'__\'", "require(\'__\')", and "System.import(\'__\'). \u8fd9\u79cd\u65b9\u6cd5\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u4f46\u662f\n\u5728\u8fc1\u79fb\u9879\u76ee\u7684\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u8282\u7701\u65f6\u95f4\u3002\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help  \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\n')),(0,s.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh-cn/pages/advanced/phantom_deps"},"\u5e7b\u5f71\u4f9d\u8d56"))))}d.isMDXComponent=!0}}]);