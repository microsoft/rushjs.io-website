"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[2728],{158:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),i=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=i(t),h=a,d=c["".concat(o,".").concat(h)]||c[h]||m[h]||p;return t?r.createElement(d,s(s({ref:n},l),{},{components:t})):r.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,s=new Array(p);s[0]=h;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[c]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<p;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=t(9122),a=t(2501),p=(t(6393),t(158)),s=["components"],u={title:"rushx"},o=void 0,i={unversionedId:"pages/commands/rushx",id:"pages/commands/rushx",title:"rushx",description:'rushx \u547d\u4ee4\u4e0e npm run \u6216\u8005 pnpm run \u7c7b\u4f3c\uff0c\u5b83\u4f1a\u8c03\u7528 package.json \u6587\u4ef6\u4e2d "scripts" \u5b57\u6bb5\u4e2d\u5b9a\u4e49\u7684 shell \u811a\u672c\u3002\u4efb\u4f55\u989d\u5916\u7684\u547d\u4ee4\u884c\u53c2\u6570\u90fd\u4f1a\u4f20\u9012\u7ed9\u8be5 shell \u811a\u672c\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e0d\u4f1a\u7ecf\u8fc7\u4efb\u4f55\u9a8c\u8bc1\u3002',source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rushx.md",sourceDirName:"pages/commands",slug:"/pages/commands/rushx",permalink:"/zh-cn/pages/commands/rushx",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rushx.md",tags:[],version:"current",frontMatter:{title:"rushx"},sidebar:"docsSidebar",previous:{title:'The "rush-lib" API',permalink:"/zh-cn/pages/extensibility/api"},next:{title:"rush-pnpm",permalink:"/zh-cn/pages/commands/rush-pnpm"}},l={},c=[{value:"\u4f7f\u7528 &quot;rush&quot; \u8fd8\u662f &quot;rushx&quot;\uff1f",id:"\u4f7f\u7528-rush-\u8fd8\u662f-rushx",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 &quot;rushx&quot; \u800c\u4e0d\u662f &quot;pnpm run&quot; \u6216\u8005 &quot;npx&quot;\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-rushx-\u800c\u4e0d\u662f-pnpm-run-\u6216\u8005-npx",level:2}],m={toc:c},h="wrapper";function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,p.kt)(h,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"rushx")," \u547d\u4ee4\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u7c7b\u4f3c\uff0c\u5b83\u4f1a\u8c03\u7528 ",(0,p.kt)("strong",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},'"scripts"')," \u5b57\u6bb5\u4e2d\u5b9a\u4e49\u7684 shell \u811a\u672c\u3002\u4efb\u4f55\u989d\u5916\u7684\u547d\u4ee4\u884c\u53c2\u6570\u90fd\u4f1a\u4f20\u9012\u7ed9\u8be5 shell \u811a\u672c\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e0d\u4f1a\u7ecf\u8fc7\u4efb\u4f55\u9a8c\u8bc1\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\u5728\u4f60\u7684\u9879\u76ee\u4e2d\uff1a"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"<","my project",">","/package.json")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "name": "my-project",\n  "version": "0.0.0",\n  "scripts": {\n    "build": "rm -Rf lib && tsc",\n    "test": "jest"\n  }\n}\n')),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u5355\u72ec\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"rushx"),"\uff0c\u5b83\u5c06\u4f1a\u663e\u793a\u53ef\u7528\u7684\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'\u7528\u6cd5\uff1arushx [-h]\n      rushx [-q/--quiet] <\u547d\u4ee4> ...\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\u3002\n  -q, --quiet           \u9690\u85cf Rush \u542f\u52a8\u4fe1\u606f\u3002\n\nmy-project \u9879\u76ee\u4e2d\u53ef\u7528\u7684\u547d\u4ee4\uff1a\n  build: "rm -Rf lib && tsc"\n  test:  "jest"\n')),(0,p.kt)("p",null,"\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"rushx build")," \u7b49\u540c\u4e8e\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"rm -Rf lib && tsc"),"\u3002\u6dfb\u52a0\u7684\u53c2\u6570\u5c06\u4f1a\u88ab\u76f4\u63a5\u6dfb\u52a0\u5230\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"rushx build --verbose")," \u7b49\u540c\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"rm -Rf lib && tsc --verbose"),"\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528-rush-\u8fd8\u662f-rushx"},'\u4f7f\u7528 "rush" \u8fd8\u662f "rushx"\uff1f'),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"rushx")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"rush")," \u8fd9\u4e24\u4e2a\u547d\u4ee4\u5f88\u5bb9\u6613\u6df7\u6dc6\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"rush")," \u8c03\u7528\u4e00\u4e2a\u901a\u7528\u7684\u64cd\u4f5c\uff0c\u5b83\u4f1a\u5f71\u54cd\u6574\u4e2a\u4ed3\u5e93\uff08\u201c\u5168\u5c40\u547d\u4ee4\u201d\uff09\u6216\u8005\u591a\u4e2a\u9879\u76ee\uff08\u201c\u6279\u91cf\u547d\u4ee4\u201d\uff09\u3002\u8fd9\u4e9b\u547d\u4ee4",(0,p.kt)("a",{parentName:"li",href:"/zh-cn/pages/maintainer/custom_commands"},"\u5e94\u8be5\u88ab\u4ed4\u7ec6\u8bbe\u8ba1"),"\u3002Rush \u4f1a\u5f3a\u5236\u5bf9\u5b83\u4eec\u7684\u53c2\u6570\u8fdb\u884c\u9a8c\u8bc1\u548c\u6587\u6863\u5316\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"rushx")," \u4e3a\u5355\u4e2a\u9879\u76ee\u6267\u884c\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002\u5c3d\u7ba1\u4e00\u4e9b\u547d\u4ee4\u7528\u4e8e\u5b9e\u73b0\u6279\u91cf\u547d\u4ee4\uff0c\u4f46\u662f\u8bb8\u591a\u547d\u4ee4\u90fd\u662f\u8be5\u9879\u76ee\u5f00\u53d1\u4eba\u5458\u72ec\u6709\u7684\u8f85\u52a9\u811a\u672c\u3002Rush \u5e76\u4e0d\u4e25\u683c\u9a8c\u8bc1\u8fd9\u4e9b\u547d\u4ee4\u3002")),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-rushx-\u800c\u4e0d\u662f-pnpm-run-\u6216\u8005-npx"},'\u4e3a\u4ec0\u4e48\u4f7f\u7528 "rushx" \u800c\u4e0d\u662f "pnpm run" \u6216\u8005 "npx"\uff1f'),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"rushx")," \u547d\u4ee4\u5177\u6709\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"npx")," \u76f8\u4f3c\u7684\u529f\u80fd\uff0c\u4f46\u662f\u8fd8\u6709\u4e00\u4e9b\u989d\u5916\u7684\u597d\u5904\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"li",href:"/zh-cn/pages/contributing"},"Rush \u7248\u672c\u9009\u62e9\u5668")," \u6765\u786e\u5b9a\u9700\u8981\u4f7f\u7528\u7684\u5de5\u5177\u94fe"),(0,p.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Rush \u7684\u914d\u7f6e\u6765\u51c6\u5907 shell \u73af\u5883"),(0,p.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u989d\u5916\u7684\u9a8c\u8bc1")))}d.isMDXComponent=!0}}]);