"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4024],{158:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(6393);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),a=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=a(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=a(r),f=o,h=m["".concat(s,".").concat(f)]||m[f]||u[f]||p;return r?t.createElement(h,i(i({ref:n},l),{},{components:r})):t.createElement(h,i({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var a=2;a<p;a++)i[a]=r[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2399:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var t=r(216),o=r(2228),p=(r(6393),r(158)),i=["components"],c={title:".npmrc-publish"},s=void 0,a={unversionedId:"pages/configs/npmrc-publish",id:"pages/configs/npmrc-publish",title:".npmrc-publish",description:"\u8fd9\u662f rush init \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 .npmrc-publish \u6587\u4ef6\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/npmrc-publish.md",sourceDirName:"pages/configs",slug:"/pages/configs/npmrc-publish",permalink:"/zh-cn/pages/configs/npmrc-publish",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/npmrc-publish.md",tags:[],version:"current",frontMatter:{title:".npmrc-publish"},sidebar:"docsSidebar",previous:{title:".npmrc",permalink:"/zh-cn/pages/configs/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/zh-cn/pages/configs/pnpmfile_cjs"}},l={},u=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:u};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u8fd9\u662f ",(0,p.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init")," \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 ",(0,p.kt)("strong",{parentName:"p"},".npmrc-publish")," \u6587\u4ef6\uff1a"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"common/config/rush/.npmrc-publish")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'# \u8be5\u914d\u7f6e\u6587\u4ef6\u4e0e common/config/rush/.npmrc, \u9664\u4e86 .npmrc-publish \u6587\u4ef6\u9002\u7528\u4e8e "rush publish" \u6307\u4ee4\uff0c\u56e0\u4e3a\n# \u53d1\u5e03\u65f6\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u4e8e\u5176\u4ed6\u64cd\u4f5c\u7684\u51ed\u636e\u548c\u6e90\u3002\n#\n# this avoids problems that would otherwise result due to a missing variable being replaced by\n# an empty string.\n# \u5728\u8c03\u7528\u5305\u7ba1\u7406\u5668\u4e4b\u524d\uff0cRush \u5c06\u590d\u5236\u6b64\u6587\u4ef6\u5230 "common/temp/publish-home/.npmrc"\uff0c\u7136\u540e\u6682\u65f6\u67b6\u5c06\u8be5\u6587\u4ef6\u5939\u6620\u5c04\u4e3a\u7528\u6237\u7684\n# \u201c\u4e3b\u76ee\u5f55\u201d\u3002\u8fd9\u4f7f\u5f97\u5728\u6bcf\u4e2a\u53d1\u5e03\u7684\u9879\u76ee\u4e2d\u5e94\u7528\u76f8\u540c\u7684\u8bbe\u7f6e\u3002\u590d\u5236\u7684\u6587\u4ef6\u5c06\u5ffd\u7565\u5728\u4f1a\u8bdd\u4e2d\u6ca1\u6709\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u662f\u4e3a\u4e86\u907f\u514d\u7531\u4e8e\u7a7a\u5b57\u7b26\n# \u4e32\u800c\u5bfc\u81f4\u7684\u53d8\u91cf\u7f3a\u5931\u7684\u95ee\u9898\u3002\n#\n#\n# * * * \u5b89\u5168\u8b66\u544a * * *\n#\n# \u4e0d\u5efa\u8bae\u5728\u673a\u5668\u4e0a\u5b58\u50a8\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\uff0c\u56e0\u4e3a\u5176\u4ed6\u65e0\u5173\u8fdb\u7a0b\u53ef\u80fd\u4f1a\u8bfb\u53d6\u6587\u4ef6\u3002\u540c\u6837\uff0c\u8be5\u6587\u4ef6\u4e5f\u53ef\u80fd\u6c38\u4e45\u5b58\u50a8\uff0c\u4f8b\u5982\u5982\u679c\u673a\u5668\u65ad\u7535\u3002\n# \u66f4\u5b89\u5168\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6765\u4f20\u9012\u53e3\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7 ${} \u6269\u5c55\u5f15\u7528\u5230 .npmrc \u4e2d\u3002\u4f8b\u5982\uff1a\n#\n#   //registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}\n#\n')),(0,p.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"../../configs/npmrc"},".npmrc")," \u914d\u7f6e\u6587\u4ef6")))}f.isMDXComponent=!0}}]);