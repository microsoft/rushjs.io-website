"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[1413],{158:(n,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var t=r(6393);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var c=t.createContext({}),l=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},p=function(n){var e=l(n.components);return t.createElement(c.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},h=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),u=l(r),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return r?t.createElement(d,s(s({ref:e},p),{},{components:r})):t.createElement(d,s({ref:e},p))}));function d(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[u]="string"==typeof n?n:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7674:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=r(9122),o=r(2501),a=(r(6393),r(158)),s=["components"],i={title:"rush install"},c=void 0,l={unversionedId:"pages/commands/rush_install",id:"pages/commands/rush_install",title:"rush install",description:"\u53c2\u8003",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_install.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_install",permalink:"/zh-cn/pages/commands/rush_install",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_install.md",tags:[],version:"current",frontMatter:{title:"rush install"},sidebar:"docsSidebar",previous:{title:"rush init-deploy",permalink:"/zh-cn/pages/commands/rush_init-deploy"},next:{title:"rush link",permalink:"/zh-cn/pages/commands/rush_link"}},p={},u=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:u},h="wrapper";function d(n){var e=n.components,r=(0,o.Z)(n,s);return(0,a.kt)(h,(0,t.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u7528\u6cd5\uff1a rush install [-h] [-p] [--bypass-policy] [--no-link]\n                    [--network-concurrency COUNT] [--debug-package-manager]\n                    [--max-install-attempts NUMBER] [--ignore-hooks]\n                    [--variant VARIANT] [-t PROJECT] [-T PROJECT] [-f PROJECT]\n                    [-o PROJECT] [-i PROJECT] [-I PROJECT]\n                    [--to-version-policy VERSION_POLICY_NAME]\n                    [--from-version-policy VERSION_POLICY_NAME]\n\n"rush install" \u547d\u4ee4\u4f1a\u57fa\u4e8e "rush update" \u521b\u5efa/\u66f4\u65b0\u7684 shrinkwrap \u6587\u4ef6\u6765\u7ed9\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\n\u76ee\u5b89\u88c5\u4f9d\u8d56\uff08"shrinkwrap" \u6587\u4ef6\u5b58\u50a8\u4e86\u4ed3\u5e93\u5185\u9879\u76ee\u7684\u6240\u6709\u4f9d\u8d56\u548c\u7248\u672c\u5173\u7cfb\uff09\u3002\u5982\u679c shrinkwrap \u6587\u4ef6\n\u7f3a\u5931\u6216\u8fc7\u65f6\u540e\uff08\u4f8b\u5982\uff0c\u7531\u4e8e\u9879\u76ee\u7684 package.json \u6587\u4ef6\u6539\u53d8\uff09\uff0c"rush install" \u547d\u4ee4\u4f1a\u6267\u884c\u5931\u8d25\uff0c\n\u5e76\u544a\u8bc9\u4f60\u9700\u8981\u6267\u884c "rush update" \u6765\u66ff\u4ee3\u3002\u5176\u4e3b\u8981\u7279\u6027\u662f\u53ea\u8bfb\uff1a\u6301\u7eed\u96c6\u6210\u4e2d\u5e94\u8be5\u4f7f\u7528 "rush install"\n\u800c\u4e0d\u662f "rush update" \u6765\u83b7\u53d6\u90a3\u4e9b\u5fd8\u8bb0\u5728 commit \u4e2d\u66f4\u65b0 shrinkwrap \u7684\u5f00\u53d1\u8005\u3002\u5982\u679c\u60f3\u8981\u907f\u514d\nshrinkwrap \u6587\u4ef6\u5076\u7136\u66f4\u65b0\uff0c\u90a3\u4e48\u8fd9\u4e9b\u8c28\u614e\u7684\u4eba\u53ef\u4ee5\u4f7f\u7528 "rush install"\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u63a8\u51fa\u3002\n  -p, --purge           \u5f00\u59cb\u6267\u884c\u4e4b\u524d\u6267\u884c "rush purge".\n  --bypass-policy       \u5f3a\u5236\u8986\u76d6 rush.json \u4e2d\u7ea6\u5b9a\u7684 "gitPolicy" \u89c4\u5b9a\u3002\n  --no-link             \u4e00\u65e6\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u90a3\u4e48\u5f53\u5b89\u88c5\u5b8c\u6210\u540e\u9879\u76ee\u4e0d\u4f1a\u6267\u884c\u7b26\u53f7\u8fde\u63a5\u3002\u4f60\u9700\u8981\u624b\u52a8\n                        \u6267\u884c "rush link", \u5f53\u60f3\u8981\u72ec\u7acb\u7684\u62a5\u544a\u6bcf\u4e2a\u9636\u6bb5\uff0c\u6216\u8005\u5728\u4e24\u4e2a\u9636\u6bb5\u4e4b\n                        \u95f4\u8fdb\u884c\u989d\u5916\u7684\u64cd\u4f5c\u65f6\uff0c\u8be5\u53c2\u6570\u5341\u5206\u6709\u7528\u3002\u5f53\u4f7f\u7528 workspaces \u65f6\uff0c\u4e0d\u652f\n                        \u6301\u8be5\u53c2\u6570\u3002\n  --network-concurrency COUNT\n                        \u4e00\u65e6\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5c06\u4f1a\u9650\u5236\u6700\u5927\u7684\u5e76\u53d1\u7f51\u7edc\u8bf7\u6c42\u6570\u3002\u5f53\u7f51\u7edc\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\n                        \u8be5\u53c2\u6570\u5341\u5206\u6709\u7528\u3002\n  --debug-package-manager\n                        \u5f00\u542f\u5305\u7ba1\u7406\u5668\u7684\u8be6\u7ec6\u65e5\u5fd7\u3002\u5f53\u4f7f\u7528\u8be5\u53c2\u6570\u65f6\uff0c\u4f60\u53ef\u80fd\u60f3\u8981 Rush \u8f93\u51fa\u5230\n                        \u4e00\u4e2a\u6587\u4ef6\u4e2d\u3002\n  --max-install-attempts NUMBER\n                        \u8986\u76d6\u9ed8\u8ba4\u7684\u5c1d\u8bd5\u5b89\u88c5\u7684\u6b21\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a 3.\n  --ignore-hooks        \u8df3\u8fc7\u6267\u884c\u5b9a\u4e49\u5728 rush.json \u4e2d\u7684 "eventHooks" \u811a\u672c\u3002\u4f60\u5e94\u8be5\u77e5\u9053\n                        \u81ea\u5df1\u8df3\u8fc7\u4e86\u4ec0\u4e48\u3002\n  --variant VARIANT     \u901a\u8fc7\u4e00\u4e2a\u5b89\u88c5\u914d\u7f6e\u53d8\u91cf\u6765\u6267\u884c Rush \u547d\u4ee4\u3002\u8be5\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\n                        RUSH_VARIANT \u6765\u6307\u5b9a\u3002\n  -t PROJECT, --to PROJECT\n                        \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5c06\u4f1a\u5904\u7406\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u53c2\u6570\u6765\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--to" \u53c2\u6570\u4f1a\u5305\u542b\u9879\u76ee\u548c\u5176\u4f9d\u8d56\u7684\u9879\u76ee\u3002"." \u662f\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\n                        \u7b80\u5199\u3002 \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -T PROJECT, --to-except PROJECT\n                        \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5c06\u4f1a\u5904\u7406\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u53c2\u6570\u6765\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--to-except" \u4f1a\u5305\u542b\u9879\u76ee\u7684\u4f9d\u8d56\uff0c\u800c\u4e0d\u5305\u62ec\u9879\u76ee\u672c\u8eab\u3002"." \u662f\n                        \u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u7b80\u5199\u3002 \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -f PROJECT, --from PROJECT\n                        \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5c06\u4f1a\u5904\u7406\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u53c2\u6570\u6765\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--from" \u53c2\u6570\u5c06\u4f1a\u5305\u542b\u8be5\u9879\u76ee\u548c\u6240\u6709\u4f9d\u8d56\u5b83\u7684\u9879\u76ee\uff0c\u518d\u52a0\u4e0a\u8fd9\u4e2a\n                        \u96c6\u5408\u7684\u4f9d\u8d56\u3002"." \u662f\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u7b80\u5199\u3002 \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\n                        \u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -o PROJECT, --only PROJECT\n                        \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5c06\u4f1a\u5904\u7406\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u53c2\u6570\u6765\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--only" \u53c2\u6570\u4f1a\u9009\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\uff0c\u800c\u5176\u4f9d\u8d56\u4e0d\u4f1a\u88ab\u6dfb\u52a0\u3002"." \u662f\n                        \u5f53\u524d\u76ee\u5f55\u7684\u7b80\u5199\u3002\u6ce8\u610f\u8fd9\u4e2a\u53c2\u6570\u662f\u201c\u4e0d\u5b89\u5168\u201d\u7684\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u5c06\u67d0\u4e9b\u4f9d\u8d56\u6392\u9664\n                        \u5728\u5916\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -i PROJECT, --impacted-by PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--impacted-by" \u53c2\u6570\u4f1a\u5305\u542b\u8be5\u9879\u76ee\u548c\u6240\u6709\u4f9d\u8d56\u8be5\u9879\u76ee\u7684\u9879\u76ee\n                        \uff08\u56e0\u6b64\u53ef\u80fd\u4f1a\u9020\u6210\u7834\u574f\u6027\u53d8\u52a8\uff09\u3002"." \u662f\u5f53\u524d\u76ee\u5f55\u7684\u7b80\u5199\u3002\u6ce8\u610f\u8be5\u53c2\u6570\u662f\n                        \u201c\u4e0d\u5b89\u5168\u7684\u201d, \u56e0\u4e3a\u5b83\u53ef\u80fd\u5c06\u67d0\u4e9b\u4f9d\u8d56\u6392\u9664\u5728\u5916\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\n                        \u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -I PROJECT, --impacted-by-except PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--impacted-by-expect" \u53c2\u6570\u4f1a\u5305\u542b\u6240\u6709\u4f9d\u8d56\u8be5\u9879\u76ee\u7684\u9879\u76ee\uff0c\n                        \u800c\u4e0d\u5305\u542b\u672c\u8eab\u3002"." \u662f\u5f53\u524d\u76ee\u5f55\u7684\u7b80\u5199\u3002\u6ce8\u610f\u8be5\u53c2\u6570\u662f\u201c\u4e0d\u5b89\u5168\u7684\u201d\uff0c\n                        \u56e0\u4e3a\u5b83\u53ef\u80fd\u5c06\u67d0\u4e9b\u4f9d\u8d56\u6392\u9664\u5728\u5916\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  --to-version-policy VERSION_POLICY_NAME\n                       \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        "--to-version-policy" \u53c2\u6570\u4f1a\u7ed9\u6bcf\u4e2a\u5c5e\u4e8e VERSION_POLICY_NAME\n                        \u7684\u9879\u76ee\u6307\u5b9a "--to", \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  --from-version-policy VERSION_POLICY_NAME\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        "--from-version-policy" \u53c2\u6570\u4f1a\u7ed9\u6bcf\u4e2a\u5c5e\u4e8e VERSION_POLICY_NAME\n                        \u7684\u9879\u76ee\u6307\u5b9a "--from", \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n')),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/pages/commands/rush_update"},"rush update"))))}d.isMDXComponent=!0}}]);