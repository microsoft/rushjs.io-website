"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6790],{158:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(6393);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=p,f=m["".concat(i,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:p,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=t(9122),p=t(2501),a=(t(6393),t(158)),o=["components"],s={title:"rush-pnpm"},i=void 0,c={unversionedId:"pages/commands/rush-pnpm",id:"pages/commands/rush-pnpm",title:"rush-pnpm",description:"\u5f53\u4f7f\u7528 PNPM \u5305\u7ba1\u7406\u5668\u65f6\uff0cRush \u4f1a\u5c06 PNPM \u5de5\u4f5c\u533a\u91cd\u5b9a\u4f4d\u5230 common/temp/ \u8def\u5f84\u4e0b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush-pnpm.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush-pnpm",permalink:"/zh-cn/pages/commands/rush-pnpm",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush-pnpm.md",tags:[],version:"current",frontMatter:{title:"rush-pnpm"},sidebar:"docsSidebar",previous:{title:"rushx",permalink:"/zh-cn/pages/commands/rushx"},next:{title:"rush add",permalink:"/zh-cn/pages/commands/rush_add"}},u={},m=[],l={toc:m},d="wrapper";function f(e){var n=e.components,t=(0,p.Z)(e,o);return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 PNPM \u5305\u7ba1\u7406\u5668\u65f6\uff0cRush \u4f1a\u5c06 PNPM \u5de5\u4f5c\u533a\u91cd\u5b9a\u4f4d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"common/temp/")," \u8def\u5f84\u4e0b\u3002\n\u5b83\u8fd8\u4f1a\u6ce8\u5165\u4e00\u4e9b\u914d\u7f6e\u94a9\u5b50\u6765\u652f\u6301 Rush \u7279\u5b9a\u7684\u589e\u5f3a\u529f\u80fd\uff0c\u4f8b\u5982\n",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/advanced/preferred_versions"},"\u4f18\u5148\u7248\u672c")," \u548c\u66f4\u5feb\u7684\u589e\u91cf\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u5728 Rush \u4ed3\u5e93\u4e2d\u76f4\u63a5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," \u547d\u4ee4\uff0c\u5b83\u53ef\u80fd\u4f1a\u56e0\u4e3a\u627e\u4e0d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," \u6587\u4ef6\u5931\u8d25\u3002\n\u4e00\u4e9b\u64cd\u4f5c\u53ef\u80fd\u4f1a\u7531\u4e8e\u4e0e Rush \u7684\u589e\u5f3a\u529f\u80fd\u4e0d\u517c\u5bb9\u800c\u53d1\u751f\u6545\u969c\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u8fd9\u4e9b\u95ee\u9898\uff0c\u5728\u4f60\u7684 Rush \u4ed3\u5e93\u4e2d\uff0c\u65e0\u8bba\u4f55\u65f6\u90fd\u5e94\u8be5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rush-pnpm")," \u6765\u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," \u547d\u4ee4\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"@microsoft/rush")," \u9644\u5e26\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"rush-pnpm")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u7528\u4e8e\u66ff\u4ee3\u54c1 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," \u547d\u4ee4\u3002\u5b83\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6b63\u786e\u7684\u4e0a\u4e0b\u6587/\u73af\u5883\uff0c\u4ee5\u4fbf PNPM \u547d\u4ee4\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u62a5\u544a\u5df2\u77e5\u4e0d\u517c\u5bb9\u64cd\u4f5c\u7684\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"\u62a5\u544a\u6f5c\u5728\u4e0d\u517c\u5bb9\u64cd\u4f5c\u7684\u8b66\u544a")))}f.isMDXComponent=!0}}]);