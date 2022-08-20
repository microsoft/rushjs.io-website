"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[805],{158:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var p=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,p,a=function(e,n){if(null==e)return{};var t,p,a={},l=Object.keys(e);for(p=0;p<l.length;p++)t=l[p],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(p=0;p<l.length;p++)t=l[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=p.createContext({}),m=function(e){var n=p.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return p.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},u=p.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),k=a,c=u["".concat(i,".").concat(k)]||u[k]||d[k]||l;return t?p.createElement(c,r(r({ref:n},s),{},{components:t})):p.createElement(c,r({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=t[m];return p.createElement.apply(null,r)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var p=t(216),a=t(2228),l=(t(6393),t(158)),r=["components"],o={title:"\u90e8\u7f72\u9879\u76ee"},i=void 0,m={unversionedId:"pages/maintainer/deploying",id:"pages/maintainer/deploying",title:"\u90e8\u7f72\u9879\u76ee",description:"\u5047\u5b9a\u4f60\u7684 monrepo \u9879\u76ee\u542b\u6709\u4e00\u4e2a web \u670d\u52a1\u5668\u7684 Node.js \u670d\u52a1\uff0c\u4e3e\u4f8b\u6765\u8bf4\uff0c\u672c\u5730 Rush \u4ed3\u5e93\u5185\u7684 Node.js \u670d\u52a1\u7684\u9879\u76ee\u540d\u4e3a app1, \u8be5\u4ed3\u5e93\u7684\u7ec4\u7ec7\u5982\u4e0b\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/maintainer/deploying.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/deploying",permalink:"/zh-cn/pages/maintainer/deploying",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/deploying.md",tags:[],version:"current",frontMatter:{title:"\u90e8\u7f72\u9879\u76ee"},sidebar:"docsSidebar",previous:{title:"\u53d1\u5e03\u5305",permalink:"/zh-cn/pages/maintainer/publishing"},next:{title:"\u542f\u7528\u6784\u5efa\u7f13\u5b58\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/maintainer/build_cache"}},s={},d=[{value:"\u914d\u7f6e &quot;rush deploy&quot;",id:"\u914d\u7f6e-rush-deploy",level:2},{value:"\u51c6\u5907\u6784\u5efa",id:"\u51c6\u5907\u6784\u5efa",level:2},{value:"\u5904\u7406\u94fe\u63a5",id:"\u5904\u7406\u94fe\u63a5",level:2},{value:"\u5f15\u5165\u53e6\u5916\u7684\u9879\u76ee",id:"\u5f15\u5165\u53e6\u5916\u7684\u9879\u76ee",level:2},{value:"\u4f7f\u7528\u540c\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72",id:"\u4f7f\u7528\u540c\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72",level:2},{value:"\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72",id:"\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:d};function k(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,p.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5047\u5b9a\u4f60\u7684 monrepo \u9879\u76ee\u542b\u6709\u4e00\u4e2a web \u670d\u52a1\u5668\u7684 Node.js \u670d\u52a1\uff0c\u4e3e\u4f8b\u6765\u8bf4\uff0c\u672c\u5730 Rush \u4ed3\u5e93\u5185\u7684 Node.js \u670d\u52a1\u7684\u9879\u76ee\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),", \u8be5\u4ed3\u5e93\u7684\u7ec4\u7ec7\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"apps/app1"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dependencies \u4e3a NPM \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"ext-lib7")," \u548c\u672c\u5730 ",(0,l.kt)("inlineCode",{parentName:"li"},"lib3")),(0,l.kt)("li",{parentName:"ul"},"devDependencies \u4e3a NPM \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"ext-tool8")," \u548c\u672c\u5730 ",(0,l.kt)("inlineCode",{parentName:"li"},"tool6")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"apps/app2"),": \u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"li"},"lib3")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"lib4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries/lib3"),": \u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"li"},"lib5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries/lib4"),": \u6ca1\u6709\u4f9d\u8d56"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries/lib5"),": \u540c\u7ea7\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"li"},"ext-lib7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tools/tool6"),": \u6ca1\u6709\u4f9d\u8d56")),(0,l.kt)("p",null,"\u4e00\u4e2a\u6784\u5efa\u65b9\u5f0f\u662f\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rush install")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"rush build"),", \u4f46\u662f\u8be5\u64cd\u4f5c\u4f1a\u5c06\u6574\u4e2a\u4ed3\u5e93\u4f20\u9012\u5230 Node \u670d\u52a1\u4e0a\uff0c\u7136\u800c\uff0c\u8fd9\u4e5f\u4f1a\u5f15\u5165\u5f88\u591a\u65e0\u5173\u7684\u6587\u4ef6\u548c NPM \u5305\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u53ef\u4ee5\u53ea\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u548c\u5176\u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"p"},"ext-lib7"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lib3"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lib5"),", \u6211\u4eec\u5e76\u4e0d\u60f3\u5f15\u5165\u8bf8\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"ext-tool8")," \u7b49\u5f00\u53d1\u4f9d\u8d56\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../../commands/rush_deploy"},"rush deploy")," \u6307\u4ee4\u53ef\u4ee5\u5c06\u8fd9\u7ec4\u6587\u4ef6\u4f20\u5165\u5230\u6307\u5b9a\u7684\u670d\u52a1\u5668\u4e0a\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e-rush-deploy"},'\u914d\u7f6e "rush deploy"'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy")," \u6307\u4ee4\u4ece ",(0,l.kt)("a",{parentName:"p",href:"../../configs/deploy_json"},"common/config/rush/deploy.json")," \u4e2d\u8bfb\u53d6\u914d\u7f6e\uff0c\u8be5\u6587\u4ef6\u5e76\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"rush init")," \u751f\u6210\u7684\uff0c\u800c\u662f\u9700\u8981\u6267\u884c ",(0,l.kt)("a",{parentName:"p",href:"../../commands/rush_init-deploy"},"rush init-deploy")," \u6765\u521b\u5efa\u3002"),(0,l.kt)("p",null,"\u7ee7\u7eed\u6211\u4eec\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u6307\u4ee4\u6765\u521b\u5efa\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u521b\u5efa\u7528\u4e8e "app1" \u7684\u914d\u7f6e\u6587\u4ef6\uff1acommon/config/rush/deploy.json\n$ rush init-deploy --project app1\n')),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("strong",{parentName:"p"},"deploy.json")," \u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u9700\u8981\u5bf9\u5176\u6267\u884c Git commit."),(0,l.kt)("h2",{id:"\u51c6\u5907\u6784\u5efa"},"\u51c6\u5907\u6784\u5efa"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5c06\u6587\u4ef6\u590d\u5236\u5230\u6784\u5efa\u76ee\u5f55\u4e2d\uff0c\u9700\u8981\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\u4f9d\u8d56\n$ rush install\n\n# \u6784\u5efa monorepo\n$ rush build\n\n# \u62f7\u8d1d app1 \u53ca\u5176\u4f9d\u8d56\u5230\u9ed8\u8ba4\u7684\u76ee\u5f55 common/deploy\n$ rush deploy\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u901a\u8fc7\u590d\u5236 ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u53ca\u5176\u4f9d\u8d56\u5230\u76ee\u6807\u76ee\u5f55\u4e0b\u6765\u51c6\u5907\u90e8\u7f72\u73af\u5883\uff0c\u590d\u5236\u540e\u7684\u76ee\u5f55\u7ed3\u6784\u4e0e monorepo \u7684\u6587\u4ef6\u7ed3\u6784\u7c7b\u4f3c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/apps/app1/...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/common/temp/node_modules/ext-lib7/...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/libraries/lib3/...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/deploy/libraries/lib4/..."))),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u6784\u5efa\u4ea7\u7269\u7684\u76ee\u5f55\u4e2d\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u6765\u9a8c\u8bc1\u662f\u5426\u6709\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5c06\u5de5\u4f5c\u76ee\u5f55\u5207\u6362\u5230\u4ea7\u7269\u4e0b\u7684 app1 \u8def\u5f84\n$ cd common/deploy/apps/app1\n\n# \u901a\u8fc7 package.json \u4e2d\u7684\u811a\u672c\u6765\u5524\u8d77\u7f51\u7edc\u670d\u52a1\n$ rushx start\n")),(0,l.kt)("p",null,"\u5982\u679c\u9879\u76ee\u8fd0\u884c\u5931\u8d25\uff08\u4f46\u662f\u539f\u672c ",(0,l.kt)("strong",{parentName:"p"},"apps/app1")," \u4e0b\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\uff09\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u914d\u7f6e\u4e0b ",(0,l.kt)("strong",{parentName:"p"},"deploy.json"),", \u4e00\u65e6\u53ef\u4ee5\u8fd0\u884c\uff0c\u4e0b\u4f9d\u65e7\u5c31\u662f\u5c06 ",(0,l.kt)("strong",{parentName:"p"},"common/deploy")," \u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\u3002"),(0,l.kt)("h2",{id:"\u5904\u7406\u94fe\u63a5"},"\u5904\u7406\u94fe\u63a5"),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rush install")," \u4f1a\u7ed9 ",(0,l.kt)("strong",{parentName:"p"},"common/deploy")," \u76ee\u5f55\u521b\u5efa\u7b26\u53f7\u94fe\u63a5\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528 PNPM, \u90a3\u4e48 ",(0,l.kt)("strong",{parentName:"p"},"common/deploy/apps/app1/node_modules/ext-lib7")," \u53ef\u80fd\u662f\u6307\u5411 ",(0,l.kt)("strong",{parentName:"p"},"common/deploy/common/temp/node_modules/.pnpm/...")," \u76ee\u4e0b\u7684\u4e00\u4e2a\u94fe\u63a5\uff0c\u4f7f\u7528\u8bf8\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"tar")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ftp")," \u7b49\u5de5\u5177\u4e0a\u4f20\u65f6\u53ef\u80fd\u51fa\u73b0\u95ee\u9898\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"deploy.json")," \u4e0b\u4e2d\u5b57\u6bb5 ",(0,l.kt)("inlineCode",{parentName:"p"},"linkCreation")," \u4e0b\u6709\u4e09\u4e2a\u5904\u7406\u94fe\u63a5\u7684\u9009\u9879\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"default"'),": \u62f7\u8d1d\u6587\u4ef6\u65f6\u521b\u5efa\u94fe\u63a5\uff0c\u8fd9\u662f\u9ed8\u8ba4\u9009\u9879\uff0c\u5982\u679c\u4f60\u7684\u4e0a\u4f20\u5de5\u5177\u53ef\u4ee5\u6b63\u786e\u5904\u7406\u8fd9\u4e9b\u94fe\u63a5\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u8be5\u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"scripts"'),": \u5c06\u4f1a\u5728\u76ee\u5f55\u4e0b\u5199\u5165\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("strong",{parentName:"li"},"create-links.js")," \u7684\u811a\u672c\uff0c\u8be5\u914d\u7f6e\u4f1a\u5728\u4e0a\u4f20\u540e\u7684\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u94fe\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"none"'),": \u4ec0\u4e48\u90fd\u4e0d\u4f1a\uff0c\u4e00\u4e9b\u5176\u4ed6\u57fa\u4e8e ",(0,l.kt)("strong",{parentName:"li"},"deploy-metadata.json")," \u7684\u811a\u672c\u53ef\u80fd\u5728\u968f\u540e\u521b\u5efa\u94fe\u63a5\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"deploy-metadata.json")," \u88ab\u5199\u5165\u90e8\u7f72\u6587\u4ef6\u4e2d\uff0c\u5b83\u5305\u542b\u4e00\u4e2a\u9700\u8981\u88ab\u521b\u5efa\u94fe\u63a5\u7684\u6e05\u5355\uff0c\u5176\u5b9e\u529b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "scenarioName": "deploy.json",\n  "mainProjectName": "app1",\n  "links": [\n    {\n      "kind": "folderLink",\n      "linkPath": "common/deploy/apps/app1/node_modules/ext-lib7",\n      "targetPath": "common/deploy/common/temp/node_modules/.pnpm/registry.npmjs.org/ext-lib7/1.0.0/node_modules/ext-lib7"\n    },\n    . . .\n  ]\n}\n')),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"')," \u4e4b\u540e\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy")," \u4f1a\u521b\u5efa\u6ca1\u6709\u94fe\u63a5\u7684 ",(0,l.kt)("strong",{parentName:"p"},"common/deploy")," \u7684\u76ee\u5f55\uff0c\u5f53\u4f60\u5c06\u8fd9\u4e9b\u6587\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u540e\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528\u4e0b\u9762\u811a\u672c\u6765\u521b\u5efa\u94fe\u63a5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5f53\u6587\u4ef6\u88ab\u4e0a\u4f20\u540e\u5728\u670d\u52a1\u5668\u4e0a\u6267\u884c\u4e0b\u9762\u547d\u4ee4\n$ node create-links.js create\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"')," \u65f6\uff0c\u76ee\u524d\u7684\u5b9e\u73b0\u8fd8\u6ca1\u5728 ",(0,l.kt)("strong",{parentName:"p"},"node_modules/.bin")," \u4e0b\u751f\u6210\u53ef\u6267\u884c\u547d\u4ee4\uff0c\u5982\u679c\u4f60\u5bf9\u8be5\u95ee\u9898\u6709\u5174\u8da3\uff0c\u8bf7\u53c2\u8003\u8be5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/pull/2010#issuecomment-656900649"},"PR"),".")),(0,l.kt)("h2",{id:"\u5f15\u5165\u53e6\u5916\u7684\u9879\u76ee"},"\u5f15\u5165\u53e6\u5916\u7684\u9879\u76ee"),(0,l.kt)("p",null,"\u7ee7\u7eed\u6211\u4eec\u7684\u793a\u4f8b\uff0c\u5047\u8bbe\u6211\u4eec\u60f3\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," \u5408\u5e76\u6210\u4e00\u4e2a\u90e8\u7f72\uff0c\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," \u5e76\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u7684\u4f9d\u8d56\uff0c\u56e0\u6b64\u4e0d\u4f1a\u88ab\u81ea\u52a8\u5305\u542b\u8fdb\u53bb\u3002\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u653e\u5230\u201c\u4e3b\u9879\u76ee\u201d\u4e2d\uff08\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"deploymentProjectNames")," \u5185\u914d\u7f6e\uff09\uff0c\u4e4b\u540e\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," \u4e3a\u201c\u989d\u5916\u7684\u9879\u76ee\u201d\uff0c\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"common/config/rush/deploy.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n  // \u4e3b\u9879\u76ee\n  "deploymentProjectNames": ["app1"],\n  . . .\n  "projectSettings": [\n    {\n      "projectName": "app1",\n\n      // \u5f53\u90e8\u7f72 "app1" \u65f6\u540c\u65f6\u90e8\u7f72 "app2",\n      // \u6211\u4eec\u9700\u8981\u660e\u786e\u6307\u660e\u5b83\uff0c\u56e0\u4e3a "app2" \u4e0d\u662f "app1" \u7684\u4f9d\u8d56\n      "additionalProjectsToInclude": [ "app2" ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528\u540c\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72"},"\u4f7f\u7528\u540c\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72"),(0,l.kt)("p",null,"\u7ee7\u7eed\u6211\u4eec\u7684\u793a\u4f8b\uff0c\u5047\u5b9a\u6211\u4eec\u60f3\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," \u5206\u522b\u90e8\u7f72\u5230\u4e24\u4e2a\u4e0d\u540c\u7684 web \u670d\u52a1\u5668\u4e0a\u3002\u5982\u679c\u8bbe\u7f6e\u76f8\u540c\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u5730\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"deploymentProjectNames")," \u6570\u7ec4\u4e2d\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"common/config/rush/deploy.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "deploymentProjectNames": [ "app1", "app2" ],\n  . . .\n')),(0,l.kt)("p",null,"\u90e8\u7f72\u65f6\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--project")," \u53c2\u6570\u9009\u62e9\u9700\u8981\u88ab\u90e8\u7f72\u7684\u9879\u76ee\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5c06 app1 \u548c\u5176\u4f9d\u8d56\u9879\u590d\u5236\u5230 /mnt/deploy/app1\n$ rush deploy --project app1 --target-folder /mnt/deploy/app1\n\n# \u5c06 app2 \u548c\u5176\u4f9d\u8d56\u9879\u590d\u5236\u5230 /mnt/deploy/app2\n$ rush deploy --project app2 --target-folder /mnt/deploy/app2\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--target-folder")," \u53c2\u6570\u7528\u4e8e\u5c06\u6587\u4ef6\u590d\u5236\u5230\u81ea\u5b9a\u4e49\u76ee\u5f55\u4e0b\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"common/deploy/"),"."),(0,l.kt)("h2",{id:"\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72"},"\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u591a\u90e8\u7f72"),(0,l.kt)("p",null,"\u7ee7\u7eed\u6211\u4eec\u7684\u793a\u4f8b\uff0c\u5047\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," \u5355\u72ec\u90e8\u7f72\uff0c\u540c\u65f6\u5b83\u7684\u8bbe\u7f6e\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u4e0d\u540c\u3002\u4f8b\u5982\uff0c\u5047\u8bbe ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "default"'),", \u4f46\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"'),". \u6211\u4eec\u521b\u5efa\u4e24\u4e2a\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/config/rush/deploy.json")," - \u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\uff0c\u5b83\u5c06\u88ab\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"app1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"common/config/rush/deploy-app2-example.json")," - \u9002\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"app2-example")," \u7684\u914d\u7f6e\u6587\u4ef6, \u5b83\u5c06\u88ab\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"app2"),".")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u6587\u4ef6\u90fd\u53ef\u4ee5\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"rush init-deploy")," \u521b\u5efa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa common/config/rush/deploy.json\n$ rush init-deploy --project app1\n\n# \u521b\u5efa common/config/rush/deploy-app2-example.json\n$ rush init-deploy --project app2 --scenario app2-example\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"deploy-app2-example.json")," \u4e2d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},'"linkCreation": "script"'),", \u7136\u540e\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--scenario")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u7528 common/config/rush/deploy.json \u5c06 app1 \u548c\u5176\u4f9d\u8d56\u590d\u5236\u5230 /mnt/deploy/app1\n$ rush deploy --target-folder /mnt/deploy/app1\n\n# \u4f7f\u7528 common/config/rush/deploy-app2-example.json \u5c06 app2 \u548c\u5176\u4f9d\u8d56\u590d\u5236\u5230 /mnt/deploy/app2\n$ rush deploy --target-folder /mnt/deploy/app2 --scenario app2-example\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"rush deploy")," \u4e0d\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"--project")," \u53c2\u6570\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ea\u6709\u4e00\u4e2a\u9879\u76ee\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},'"deploymentProjectNames"')," \u6570\u7ec4\u4e2d\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../configs/deploy_json"},"common/config/rush/deploy.json")," \u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../commands/rush_deploy"},"rush deploy")," \u547d\u4ee4\u884c\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../commands/rush_init-deploy"},"rush init-deploy")," \u547d\u4ee4\u884c\u53c2\u6570")))}k.isMDXComponent=!0}}]);