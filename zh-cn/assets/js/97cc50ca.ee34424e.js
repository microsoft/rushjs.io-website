"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[5324],{158:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>k});var t=a(6393);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,p=function(e,n){if(null==e)return{};var a,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(p[a]=e[a]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},i=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=p,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?t.createElement(k,o(o({ref:n},i),{},{components:a})):t.createElement(k,o({ref:n},i))}));function k(e,n){var a=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:p,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},312:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var t=a(9122),p=a(2501),r=(a(6393),a(158)),o=["components"],s={title:"\u4fee\u6539 package.json"},l=void 0,c={unversionedId:"pages/developer/modifying_package_json",id:"pages/developer/modifying_package_json",title:"\u4fee\u6539 package.json",description:'\u5982\u679c\u4f60\u9700\u8981\u5728\u9879\u76ee\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a "example-lib" \u7684\u4f9d\u8d56\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528 Rush\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a',source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/developer/modifying_package_json.md",sourceDirName:"pages/developer",slug:"/pages/developer/modifying_package_json",permalink:"/zh-cn/pages/developer/modifying_package_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/developer/modifying_package_json.md",tags:[],version:"current",frontMatter:{title:"\u4fee\u6539 package.json"},sidebar:"docsSidebar",previous:{title:"\u65e5\u5e38\u7528\u5230\u7684\u6307\u4ee4",permalink:"/zh-cn/pages/developer/everyday_commands"},next:{title:"\u5176\u4ed6\u6709\u7528\u7684\u6307\u4ee4",permalink:"/zh-cn/pages/developer/other_commands"}},i={},m=[{value:"\u66f4\u65b0 NPM \u5305\u7684\u7248\u672c",id:"\u66f4\u65b0-npm-\u5305\u7684\u7248\u672c",level:2}],u={toc:m},d="wrapper";function k(e){var n=e.components,a=(0,p.Z)(e,o);return(0,r.kt)(d,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'\u5982\u679c\u4f60\u9700\u8981\u5728\u9879\u76ee\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a "',(0,r.kt)("strong",{parentName:"p"},"example-lib"),'" \u7684\u4f9d\u8d56\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528 Rush\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u8bf7\u4e0d\u8981\u5728 Rush \u4ed3\u5e93\u5185\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\n~/my-repo$ cd apps/my-app\n~/my-repo/apps/my-app$ npm install --save example-lib\n")),(0,r.kt)("p",null,"\u5728 Rush \u4ed3\u5e93\u5185\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/pages/commands/rush_add"},"rush add")," \u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'~/my-repo$ cd apps/my-app\n\n# \u5728 "my-app" \u9879\u76ee\u4e2d\u6dfb\u52a0 "example-lib" \u7684\u4f9d\u8d56\uff0c\u968f\u540e\u4f1a\u81ea\u52a8\u6267\u884c "rush update"\n~/my-repo/apps/my-app$ rush add --package example-lib\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rush add")," \u547d\u4ee4\u4e5f\u53ef\u4ee5\u7528\u6765\u66f4\u65b0\u67d0\u4e2a\u5df2\u6709\u4f9d\u8d56\u7684\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# \u5c06 "my-app" \u4e2d\u7684 "example-lib" \u7248\u672c\u66f4\u65b0\u4e3a "1.2.3"\n~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3\n\n# \u6216\u8005\u5c06 "example-lib" \u7248\u672c\u66f4\u65b0\u4e3a "^1.2.3"\n~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3 --caret\n\n\n# \u8fd9\u6709\u4e00\u4e2a\u66f4\u9ad8\u7ea7\u7684\u793a\u4f8b\uff1a\u901a\u8fc7 NPM \u6e90\u5904\u67e5\u8be2\u517c\u5bb9 "^1.2.0" \u7684\u6700\u65b0\u8bed\u4e49\u5316\u7248\u672c\uff0c\u7136\u540e\u5c06\u5176\u6dfb\u52a0\u4e3a "~1.5.3" \u7684\u4f9d\u8d56\u3002\n#\n# \u6ce8\u610f\uff1a\u5f53\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u7b26\u53f7\u5b57\u7b26\u65f6\uff0c\u8bf7\u4f7f\u7528\u5f15\u53f7\uff0c\u907f\u514d\u4e0e shell \u53d1\u751f\u51b2\u7a81\u3002\n~/my-repo/apps/my-app$ rush add --package "example-lib@^1.2.0"\n\n# \u5982\u679c\u4ed3\u5e93\u5185\u7684\u5176\u4ed6\u9879\u76ee\u6b63\u5728\u4f7f\u7528 "example-lib", \u53ef\u4ee5\u4e00\u6b21\u6027\u5c06\u5176\u66f4\u65b0\u4e3a "1.2.3" \u7248\u672c\n~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3 --make-consistent\n')),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/pages/commands/rush_add"},"rush add"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1aVS Code \u5185\u4e00\u4e2a\u6709\u8da3\u7684\u529f\u80fd")),(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 VSCode, \u4e5f\u53ef\u4ee5\u76f4\u63a5\u7f16\u8f91 ",(0,r.kt)("strong",{parentName:"p"},"package.json")," \u6587\u4ef6\uff0c\u5728 dependencies \u6216 depDependencies \u4e0b\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},'"example-lib":'),", VS Code \u5c06\u81ea\u52a8\u67e5\u8be2 NPM \u6e90\u7684\u7248\u672c\uff0c\u5e76\u63d0\u4f9b\u8865\u5168\u5efa\u8bae\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u65b9\u5f0f\u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"rush add")," \u66f4\u4fbf\u6377\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u7136\uff0c\u5982\u679c\u4f60\u624b\u52a8\u4fee\u6539\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"package.json"),", \u968f\u540e\u8bb0\u5f97\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"rush update"),".")),(0,r.kt)("h2",{id:"\u66f4\u65b0-npm-\u5305\u7684\u7248\u672c"},"\u66f4\u65b0 NPM \u5305\u7684\u7248\u672c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rush update --full")," \u6307\u4ee4\u53ef\u4ee5\u5b89\u88c5\u6ee1\u8db3 ",(0,r.kt)("strong",{parentName:"p"},"package.json")," \u7684\u6700\u65b0\u7248\u672c\u3002\u7136\u800c\uff0c\u5982\u679c\u4f60\u60f3\u66f4\u65b0 ",(0,r.kt)("strong",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u7684\u7248\u672c\u5230\u8f83\u65b0\u7684\u7248\u672c\uff0c\u76ee\u524d Rush \u8fd8\u65e0\u6cd5\u5728\u5168\u5c40\u8303\u56f4\u5185\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npm-check-updates"},"npm-check-update")," \u4f1a\u5347\u7ea7 Rush \u4ed3\u5e93\u4e2d\u7684\u5355\u4e2a\u9879\u76ee\u4e0b package.json \u5185\u7248\u672c\uff0c\u8bb0\u5f97\u968f\u540e\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"rush update"),"\uff08\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"),")"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1aPNPM workspace ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/microsoft/rushstack/pull/1938"},"\u5df2\u7ecf\u63a8\u51fa"),", \u542f\u7528\u6b64\u529f\u80fd\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"em",href:"https://pnpm.js.org/en/cli/update"},"pnpm update")," \u6307\u4ee4\u8fdb\u884c\u6279\u91cf\u66f4\u65b0\u3002")))}k.isMDXComponent=!0}}]);