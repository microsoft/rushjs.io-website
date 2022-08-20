"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[7262],{158:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(6393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,O=m["".concat(c,".").concat(f)]||m[f]||u[f]||s;return t?r.createElement(O,i(i({ref:n},l),{},{components:t})):r.createElement(O,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(216),o=t(2228),s=(t(6393),t(158)),i=["components"],a={title:"rush list"},c=void 0,p={unversionedId:"pages/commands/rush_list",id:"pages/commands/rush_list",title:"rush list",description:"",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_list.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_list",permalink:"/zh-cn/pages/commands/rush_list",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_list.md",tags:[],version:"current",frontMatter:{title:"rush list"},sidebar:"docsSidebar",previous:{title:"rush link",permalink:"/zh-cn/pages/commands/rush_link"},next:{title:"rush publish",permalink:"/zh-cn/pages/commands/rush_publish"}},l={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u7528\u6cd5\uff1a rush list [-h] [-v] [-p] [--full-path] [--json] [-t PROJECT]\n                 [-T PROJECT] [-f PROJECT] [-o PROJECT] [-i PROJECT]\n                 [-I PROJECT] [--to-version-policy VERSION_POLICY_NAME]\n                 [--from-version-policy VERSION_POLICY_NAME]\n\n\u5bf9\u4e8e\u8bb0\u5f55\u5728 rush \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u9879\u76ee\uff0c\u8be5\u547d\u4ee4\u53ef\u4ee5\u5217\u4e3e\u5305\u540d\uff0c\u53ef\u9009\u5217\u51fa\u7248\u672c(--version)\u548c\u8def\u5f84(--path)\u6216\u8005\u5b8c\u6574\u8def\u5f84(--full-path).\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u9000\u51fa\n  -v, --version         \u4e00\u65e6\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9879\u76ee\u7248\u672c\u4f1a\u5728\u9879\u76ee\u540d\u7684\u53e6\u5916\u4e00\u5217\u5185\u5c55\u793a\u3002\n  -p, --path            \u4e00\u65e6\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9879\u76ee\u8def\u5f84\u4f1a\u5728\u9879\u76ee\u540d\u7684\u53e6\u5916\u4e00\u5217\u5185\u5c55\u793a\u3002\n  --full-path           \u4e00\u65e6\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9879\u76ee\u7684\u5b8c\u6574\u8def\u5f84\u4f1a\u5728\u9879\u76ee\u540d\u7684\u53e6\u5916\u4e00\u5217\u5185\u5c55\u793a\u3002\n  --json                \u4e00\u65e6\u6307\u5b9a\u6539\u53c2\u6570\uff0c\u5219\u4ee5 JSON \u7684\u683c\u5f0f\u8f93\u51fa\u3002\n  -t PROJECT, --to PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--to" \u53c2\u6570\u4f1a\u5305\u542b\u9879\u76ee\u548c\u5176\u4f9d\u8d56\u7684\u9879\u76ee\u3002"." \u662f\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\n                        \u7684\u7b80\u5199\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -T PROJECT, --to-except PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--to-except" \u53c2\u6570\u4f1a\u5305\u542b\u9879\u76ee\u7684\u4f9d\u8d56\u9879\u76ee\uff0c\u800c\u4e0d\u5305\u62ec\u9879\u76ee\n                        \u672c\u8eab\u3002"." \u662f\u5f53\u524d\u5de5\u7a0b\u76ee\u5f55\u7684\u7b80\u5199\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\n                        \u4e00\u6587\u3002\n  -f PROJECT, --from PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--from" \u53c2\u6570\u4f1a\u5305\u542b\u9879\u76ee\u548c\u6240\u6709\u4f9d\u8d56\u5b83\u7684\u9879\u76ee\uff0c\u518d\u52a0\u4e0a\u8fd9\u4e2a\u96c6\n                        \u5408\u7684\u4f9d\u8d56\u3002"." \u662f\u5f53\u524d\u5de5\u7a0b\u76ee\u5f55\u7684\u7b80\u5199\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\n                        \u9879\u76ee\u201d\u4e00\u6587\u3002\n  -o PROJECT, --only PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--only" \u53c2\u6570\u4f1a\u9009\u4e2d\u6307\u5b9a\u7684\u9879\u76ee\uff0c\u800c\u5176\u4f9d\u8d56\u4e0d\u4f1a\u88ab\u6dfb\u52a0\u3002"." \u662f\n                        \u5f53\u524d\u76ee\u5f55\u7684\u7b80\u5199\u3002\u6ce8\u610f\u8fd9\u4e2a\u53c2\u6570\u662f\u201c\u4e0d\u5b89\u5168\u201d\u7684\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u5c06\u67d0\u4e9b\u4f9d\u8d56\u6392\u9664\n                        \u5728\u5916\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -i PROJECT, --impacted-by PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--impacted-by" \u53c2\u6570\u4f1a\u5305\u542b\u8be5\u9879\u76ee\u548c\u6240\u6709\u4f9d\u8d56\u8be5\u9879\u76ee\u7684\u9879\u76ee\n                        \uff08\u56e0\u6b64\u53ef\u80fd\u4f1a\u9020\u6210\u7834\u574f\u6027\u53d8\u52a8\uff09\u3002"." \u662f\u5f53\u524d\u76ee\u5f55\u7684\u7b80\u5199\u3002\u6ce8\u610f\u8be5\u53c2\u6570\u662f\n                        \u201c\u4e0d\u5b89\u5168\u7684\u201d, \u56e0\u4e3a\u5b83\u53ef\u80fd\u5c06\u67d0\u4e9b\u4f9d\u8d56\u6392\u9664\u5728\u5916\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\n                        \u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  -I PROJECT, --impacted-by-except PROJECT\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        \u6bcf\u4e2a "--impacted-by-expect" \u53c2\u6570\u4f1a\u5305\u542b\u6240\u6709\u4f9d\u8d56\u8be5\u9879\u76ee\u7684\u9879\u76ee\uff0c\n                        \u800c\u4e0d\u5305\u542b\u672c\u8eab\u3002"." \u662f\u5f53\u524d\u76ee\u5f55\u7684\u7b80\u5199\u3002\u6ce8\u610f\u8be5\u53c2\u6570\u662f\u201c\u4e0d\u5b89\u5168\u7684\u201d\uff0c\n                        \u56e0\u4e3a\u5b83\u53ef\u80fd\u5c06\u67d0\u4e9b\u4f9d\u8d56\u6392\u9664\u5728\u5916\u3002\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  --to-version-policy VERSION_POLICY_NAME\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        "--to-version-policy" \u53c2\u6570\u4f1a\u7ed9\u6bcf\u4e2a\u5c5e\u4e8e VERSION_POLICY_NAME\n                        \u7684\u9879\u76ee\u6307\u5b9a "--to", \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n  --from-version-policy VERSION_POLICY_NAME\n                        \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u4ed3\u5e93\u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u901a\u8fc7\u8be5\u53c2\u6570\u53ef\u4ee5\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u3002\n                        "--from-version-policy" \u53c2\u6570\u4f1a\u7ed9\u6bcf\u4e2a\u5c5e\u4e8e VERSION_POLICY_NAME\n                        \u7684\u9879\u76ee\u6307\u5b9a "--from", \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u201c\u9009\u4e2d\u90e8\u5206\u9879\u76ee\u201d\u4e00\u6587\u3002\n')))}f.isMDXComponent=!0}}]);