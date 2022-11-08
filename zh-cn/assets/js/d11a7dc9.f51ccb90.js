"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4738],{158:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(6393);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||p;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,r=new Array(p);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<p;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(216),l=n(2228),p=(n(6393),n(158)),r=["components"],i={title:"\u9009\u62e9\u90e8\u5206\u9879\u76ee"},o=void 0,s={unversionedId:"pages/developer/selecting_subsets",id:"pages/developer/selecting_subsets",title:"\u9009\u62e9\u90e8\u5206\u9879\u76ee",description:"\u8bf8\u5982 rush build \u548c rush rebuild \u7b49 Bulk \u6307\u4ee4 \u9ed8\u8ba4\u4f1a\u64cd\u4f5c\u8be5 monorepo \u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u5f53\u4f60\u7684\u9879\u76ee\u8d8a\u6765\u8d8a\u591a\u65f6\uff0c\u8fd9\u79cd\u64cd\u4f5c\u53d8\u5f97\u5341\u5206\u8017\u65f6\uff0c\u4e3a\u4e86\u52a0\u901f\u8fd9\u4e00\u8fc7\u7a0b\uff0cRush \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\u884c\u53c2\u6570\u6765\u9009\u62e9\u90e8\u5206\u9879\u76ee\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/developer/selecting_subsets.md",sourceDirName:"pages/developer",slug:"/pages/developer/selecting_subsets",permalink:"/zh-cn/pages/developer/selecting_subsets",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/developer/selecting_subsets.md",tags:[],version:"current",frontMatter:{title:"\u9009\u62e9\u90e8\u5206\u9879\u76ee"},sidebar:"docsSidebar",previous:{title:"\u914d\u7f6e tab \u8865\u5168",permalink:"/zh-cn/pages/developer/tab_completion"},next:{title:"\u4f7f\u7528\u9879\u76ee\u6807\u7b7e",permalink:"/zh-cn/pages/developer/project_tags"}},m={},u=[{value:"--to",id:"--to",level:2},{value:"--to-except",id:"--to-except",level:2},{value:"--from",id:"--from",level:2},{value:"--impacted-by \uff08\u4e0d\u5b89\u5168\uff09",id:"--impacted-by-\u4e0d\u5b89\u5168",level:2},{value:"--impacted-by-expect \uff08\u4e0d\u5b89\u5168\uff09",id:"--impacted-by-expect-\u4e0d\u5b89\u5168",level:2},{value:"--only \uff08\u4e0d\u5b89\u5168\uff09",id:"--only-\u4e0d\u5b89\u5168",level:2},{value:"\u9009\u62e9\u5668\u683c\u5f0f",id:"\u9009\u62e9\u5668\u683c\u5f0f",level:2},{value:"\u9879\u76ee\u540d",id:"\u9879\u76ee\u540d",level:3},{value:"\u5728\u5f53\u524d\u9879\u76ee\u4e0b\u4f7f\u7528 <code>.</code>",id:"\u5728\u5f53\u524d\u9879\u76ee\u4e0b\u4f7f\u7528-",level:3},{value:"commit \u4e4b\u540e\u53d1\u751f\u53d8\u52a8\u7684\u9879\u76ee",id:"commit-\u4e4b\u540e\u53d1\u751f\u53d8\u52a8\u7684\u9879\u76ee",level:3},{value:"\u7ec4\u5408\u53c2\u6570",id:"\u7ec4\u5408\u53c2\u6570",level:2},{value:"\u66f4\u591a",id:"\u66f4\u591a",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u8bf8\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"rush rebuild")," \u7b49 ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/maintainer/custom_commands"},"Bulk \u6307\u4ee4")," \u9ed8\u8ba4\u4f1a\u64cd\u4f5c\u8be5 monorepo \u5185\u7684\u6240\u6709\u9879\u76ee\u3002\u5f53\u4f60\u7684\u9879\u76ee\u8d8a\u6765\u8d8a\u591a\u65f6\uff0c\u8fd9\u79cd\u64cd\u4f5c\u53d8\u5f97\u5341\u5206\u8017\u65f6\uff0c\u4e3a\u4e86\u52a0\u901f\u8fd9\u4e00\u8fc7\u7a0b\uff0cRush \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u547d\u4ee4\u884c\u53c2\u6570\u6765\u9009\u62e9\u90e8\u5206\u9879\u76ee\u3002"),(0,p.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684 Rush \u5de5\u7a0b\u5f62\u5f0f\u5982\u4e0b\u56fe\uff1a"),(0,p.kt)("img",{src:"/images/docs/selection-intro.svg",alt:"a sample monorepo",style:{height:"150px"}}),(0,p.kt)("p",null,"\u4e0a\u56fe\u4e2d\u5706\u5708\u8868\u793a\u672c\u5730\u9879\u76ee\uff0c\u5e76\u6ca1\u6709 NPM \u4f9d\u8d56\uff0c\u4ece ",(0,p.kt)("inlineCode",{parentName:"p"},"D")," \u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"C")," \u7684\u7bad\u5934\u8868\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},"D")," \u4f9d\u8d56 ",(0,p.kt)("inlineCode",{parentName:"p"},"C"),", \u8fd9\u610f\u5473\u7740\u5982\u679c\u60f3\u8981\u6784\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"D"),", \u5219 ",(0,p.kt)("inlineCode",{parentName:"p"},"C")," \u8981\u9996\u5148\u88ab\u6784\u5efa\u3002\u6211\u4eec\u4f1a\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build")," \u547d\u4ee4\uff0c\u4f46\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u7528\u4e8e\u4efb\u4f55 Bulk \u6307\u4ee4\u3002"),(0,p.kt)("h2",{id:"--to"},"--to"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u573a\u666f\uff1a"),"\u5047\u8bbe\u6211\u4eec\u521a\u521a\u514b\u9686\u4e86 monorepo \u4ed3\u5e93\uff0c\u73b0\u5728\u60f3\u5728\u9879\u76ee ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u4e2d\u8fdb\u884c\u5f00\u53d1\uff0c\u5219\u9700\u8981\u6784\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u4f9d\u8d56\u7684\u6240\u6709\u9879\u76ee\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa\u9879\u76ee B \u4ee5\u53ca B \u4f9d\u8d56\u7684\u6240\u6709\u9879\u76ee\n$ rush build --to B\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u9009\u62e9\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u4e09\u4e2a\u9879\u76ee\uff1a"),(0,p.kt)("img",{src:"/images/docs/selection-to.svg",alt:"rush build --to B",style:{height:"150px"}}),(0,p.kt)("h2",{id:"--to-except"},"--to-except"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u573a\u666f\uff1a"),"\u5f88\u591a\u65f6\u5019\u6211\u4eec\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build")," \u6765\u5904\u7406\u9879\u76ee ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),', \u56e0\u4e3a\u6211\u4eec\u7684\u4e0b\u4e00\u6b65\u5c06\u4f1a\u662f\u5728\u8c03\u7528 Webpack \u6216\u8005 Jest \u7684 "watch mode" \u6a21\u5f0f\u6765\u5904\u7406\u9879\u76ee ',(0,p.kt)("inlineCode",{parentName:"p"},"B"),". \u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"--to-except")," \u6765\u4ee3\u66ff ",(0,p.kt)("inlineCode",{parentName:"p"},"--to"),", \u8be5\u53c2\u6570\u4f1a\u4ec5\u6784\u5efa\u9879\u76ee ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u7684\u4f9d\u8d56\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa B \u4f9d\u8d56\u7684\u6240\u6709\u9879\u76ee\uff0c\u4f46\u4e0d\u5305\u62ec\u9879\u76ee `B`\n$ rush build --to-except B\n\n# \u5728\u9879\u76ee `B` \u4e2d\u8c03\u7528 Jest \u7684 watch \u6a21\u5f0f\u6765\u6784\u5efa\n$ heft test --watch\n")),(0,p.kt)("p",null,"\u8be5\u6307\u4ee4\u9009\u62e9\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"A")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u4e24\u4e2a\u9879\u76ee\uff1a"),(0,p.kt)("img",{src:"/images/docs/selection-to-except.svg",alt:"rush build --to-except B",style:{height:"150px"}}),(0,p.kt)("h2",{id:"--from"},"--from"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u573a\u666f\uff1a"),"\u5047\u8bbe\u73b0\u5728\u6211\u4eec\u5b8c\u6210\u4e86\u5bf9\u9879\u76ee ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u7684\u4fee\u6539\uff0c\u6211\u4eec\u60f3\u8981\u6784\u5efa\u4e0b\u6e38\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"C")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"D")," \u9879\u76ee\u6765\u4fdd\u8bc1\u6ca1\u6709\u7834\u574f\u6027\u7684\u53d8\u52a8\u3002\u4e3a\u4e86\u6784\u5efa\u9879\u76ee ",(0,p.kt)("inlineCode",{parentName:"p"},"D"),", \u6211\u4eec\u540c\u6837\u9700\u8981\u6784\u5efa\u5176\u4f9d\u8d56 ",(0,p.kt)("inlineCode",{parentName:"p"},"G"),". ",(0,p.kt)("inlineCode",{parentName:"p"},"--from")," \u7684\u4f5c\u7528\u5c31\u662f\u8fd9\u6837\uff0c\u5b83\u4e5f\u4f1a\u5305\u62ec ",(0,p.kt)("inlineCode",{parentName:"p"},"A")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"E"),"\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u7684\u4f9d\u8d56\u3002(\u56e0\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build")," \u662f\u589e\u91cf\u6784\u5efa\uff0c\u6240\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"A")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u53ef\u80fd\u4f1a\u88ab\u8df3\u8fc7\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ef\u80fd\u8fd8\u6ca1\u6709\u53d8\u5316)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa B \u4e0b\u6e38\u7684\u6240\u6709\u9879\u76ee\uff0c\u5305\u62ec\u4efb\u4f55\u6f5c\u5728\u7684\u4f9d\u8d56\n$ rush build --from B\n")),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u9009\u4e2d\u4e86\u9664 ",(0,p.kt)("inlineCode",{parentName:"p"},"F")," \u7684\u6240\u6709\u9879\u76ee\u3002"),(0,p.kt)("img",{src:"/images/docs/selection-from.svg",alt:"rush build --from B",style:{height:"150px"}}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"\u517c\u5bb9\u6027\u63d0\u793a\uff1a")," \u5982\u4f55\u5728 ",(0,p.kt)("strong",{parentName:"p"},"rush.json")," \u4e2d\u8bbe\u5b9a\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"rushVersion")," \u5c0f\u4e8e 5.38.0, \u5219 ",(0,p.kt)("inlineCode",{parentName:"p"},"--from")," \u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"--impacted-by"),",\n\u5728 Rush 5.38.0 \u7248\u672c\u4e2d\uff0c\u8be5\u547d\u4ee4\u7684\u542b\u4e49\u6709\u4e9b\u53d8\u5316\uff0c\u56e0\u4e3a\u8bb8\u591a\u7528\u6237\u9884\u671f ",(0,p.kt)("inlineCode",{parentName:"p"},"--from")," \u5305\u542b\u5b83\u7684\u4f9d\u8d56\u3002")),(0,p.kt)("h2",{id:"--impacted-by-\u4e0d\u5b89\u5168"},"--impacted-by \uff08\u4e0d\u5b89\u5168\uff09"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u573a\u666f\uff1a"),"\u5047\u5982\u4e3a\u5b8c\u6210 ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u5185\u6240\u9700\u7684\u5de5\u4f5c\u9700\u8981\u6539\u52a8\u5bf9\u9879\u76ee ",(0,p.kt)("inlineCode",{parentName:"p"},"E"),", \u90a3\u4e48 Rush \u7684\u589e\u91cf\u6784\u5efa\u4f1a\u5047\u8bbe ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u5185\u7684\u6240\u6709\u4e0b\u6e38\u9879\u76ee\u90fd\u9700\u8981\u88ab\u91cd\u65b0\u6784\u5efa\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"F"),". \u8fd9\u5f71\u54cd\u9762\u53ef\u80fd\u4f1a\u5f88\u5927\u3002\u4e5f\u8bb8\u4f60\u81ea\u5df1\u5bf9\u4ed6\u4eec\u4e86\u89e3\u66f4\u591a\u2014\u2014\u4e5f\u8bb8\u4f60\u7a0d\u540e\u4f1a\u64a4\u56de\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u4e0a\u7684\u4fee\u6539\uff0c\u4e5f\u6216\u8005\u4f60\u4f1a\u624b\u52a8\u8c03\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u7684\u5de5\u5177\u94fe\uff0c\u4e5f\u8bb8\u4f60\u5bf9 ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u7684\u53d8\u52a8\u4e0e\u73b0\u9636\u6bb5\u6240\u9700\u65e0\u5173\u3002"),(0,p.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"--impacted-by")," \u4fbf\u53ef\u53d1\u6325\u4f5c\u7528\uff1a\u5b83\u610f\u5473\u7740 ",(0,p.kt)("em",{parentName:"p"},"\u201c\u53ea\u9009\u62e9\u90a3\u4e9b\u53ef\u80fd\u5e26\u7ed9 B \u7834\u574f\u6027\u53d8\u52a8\u7684\u9879\u76ee\uff0c\u4fe1\u4efb\u90a3\u4e9b\u4f9d\u8d56\u5904\u4e8e\u53ef\u7528\u72b6\u6001\u4e0b\u7684\u4f9d\u8d56\u3002\u201d")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa B \u4ee5\u53ca B \u4e0b\u6e38\u7684\u9879\u76ee\uff0c\u4f46\u4e0d\u5305\u62ec\u8fd9\u4e9b\u9879\u76ee\u7684\u4f9d\u8d56\n$ rush build --impacted-by B\n")),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u9009\u4e2d\u7684\u9879\u76ee\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"C")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"D"),"."),(0,p.kt)("img",{src:"/images/docs/selection-impact.svg",alt:"rush build --impacted-by B",style:{height:"150px"}}),(0,p.kt)("h2",{id:"--impacted-by-expect-\u4e0d\u5b89\u5168"},"--impacted-by-expect \uff08\u4e0d\u5b89\u5168\uff09"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u573a\u666f\uff1a"),"\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"--impacted-by")," \u76f8\u540c\uff0c\u4f46\u662f\u4e0d\u5305\u62ec ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," \u672c\u8eab\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa B \u4e0b\u6e38\u7684\u9879\u76ee\uff0c\u4f46\u4e0d\u5305\u62ec\u8fd9\u4e9b\u9879\u76ee\u7684\u4f9d\u8d56\n$ rush build --impacted-by-except B\n")),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u9009\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"C")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"D")," \u4e24\u4e2a\u9879\u76ee\u3002"),(0,p.kt)("img",{src:"/images/docs/selection-impact-except.svg",alt:"rush build --impacted-by-except B",style:{height:"150px"}}),(0,p.kt)("h2",{id:"--only-\u4e0d\u5b89\u5168"},"--only \uff08\u4e0d\u5b89\u5168\uff09"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u573a\u666f\uff1a"),"\u6b63\u5982\u8be5\u53c2\u6570\u540d\u6240\u793a\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"--only")," \u53c2\u6570\u53ea\u4f1a\u9009\u62e9\u6307\u5b9a\u7684\u4e00\u4e2a\u9879\u76ee\uff0c\u5ffd\u7565\u4f9d\u8d56\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u53ea\u6784\u5efa B\n$ rush build --only B\n")),(0,p.kt)("img",{src:"/images/docs/selection-only.svg",alt:"rush build --only B",style:{height:"150px"}}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"--only")," \u53ef\u4ee5\u4e0e\u5176\u4ed6\u53c2\u6570\u4e00\u8d77\u4f7f\u7528\u3002\u4f8b\u5982\u5728\u4e0a\u6587\u4e2d\uff0c\u5f53\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build --impacted-by B")," \u65f6\uff0c\u53ef\u80fd\u8fd8\u6ca1\u6709\u6784\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"G"),", \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build --impacted-by B --only G")," \u6765\u5305\u542b\u5b83\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"\u201c\u4e0d\u5b89\u5168\u201d\u53c2\u6570\uff1a")," \u5982\u679c\u6240\u9700\u7684\u4f9d\u8d56\u6ca1\u6709\u88ab\u6784\u5efa\uff0c\u90a3\u4e48\u8bf8\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"--only"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"--impacted-by")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"--impacted-by-except ")," \u7b49\u547d\u4ee4\u53ef\u80fd\u6267\u884c\u5931\u8d25\n\u5f53\u4f60\u6bd4 Rush \u66f4\u4e86\u89e3\u54ea\u4e9b\u9879\u76ee\u9700\u8981\u6784\u5efa\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0a\u8ff0\u4e09\u4e2a\u53c2\u6570\u6765\u8282\u7701\u65f6\u95f4\u3002\u5982\u679c\u8be5\u524d\u63d0\u4e0d\u5b58\u5728\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build"),".")),(0,p.kt)("h2",{id:"\u9009\u62e9\u5668\u683c\u5f0f"},"\u9009\u62e9\u5668\u683c\u5f0f"),(0,p.kt)("p",null,"\u5f53\u4f60\u6307\u5b9a\u4e0a\u8ff0\u53c2\u6570\u4e4b\u4e00\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u4e0d\u540c\u7684\u683c\u5f0f\u6765\u6307\u5b9a\u4f60\u9700\u8981\u7684\u9879\u76ee\u3002"),(0,p.kt)("h3",{id:"\u9879\u76ee\u540d"},"\u9879\u76ee\u540d"),(0,p.kt)("p",null,"\u6700\u76f4\u63a5\u7684\u65b9\u5f0f\u662f\u4f7f\u7528\u9879\u76ee\u540d\uff08\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush.json")," \u6587\u4ef6\u4e2d\u6240\u5217\uff09\u3002"),(0,p.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console"},"rush build --to my-project-name\n\nrush build --from my-project-name\n\nrush list --impacted-by my-project-name\n")),(0,p.kt)("h3",{id:"\u5728\u5f53\u524d\u9879\u76ee\u4e0b\u4f7f\u7528-"},"\u5728\u5f53\u524d\u9879\u76ee\u4e0b\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"h3"},".")),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7684\u7ec8\u7aef\u4f4d\u4e8e\u67d0\u4e2a\u9879\u76ee\u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"."),"\u6765\u8868\u793a\u5f53\u524d\u9879\u76ee\u3002"),(0,p.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console"},"rush build --to .\n\nrush list --to-except .\n")),(0,p.kt)("h3",{id:"commit-\u4e4b\u540e\u53d1\u751f\u53d8\u52a8\u7684\u9879\u76ee"},"commit \u4e4b\u540e\u53d1\u751f\u53d8\u52a8\u7684\u9879\u76ee"),(0,p.kt)("p",null,"\u4f60\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a git \uff08\u5206\u652f\u3001\u6807\u7b7e\u6216 commit \u54c8\u5e0c\uff09\u6765\u6307\u5b9a\u8be5\u8282\u70b9\u4ee5\u6765\u6240\u6709\u4fee\u6539\u8fc7\u7684\u9879\u76ee\u3002\u8fd9\u79cd\u67e5\u8be2\u7684\u7c7b\u578b\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"rush change")," \u4f7f\u7528\u4e86\u76f8\u540c\u7684\u903b\u8f91\u6765\u8bb0\u5f55\u53d8\u5316\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console"},"rush build --to git:origin/main\n\nrush list --impacted-by git:release/v3.0.0\n")),(0,p.kt)("h2",{id:"\u7ec4\u5408\u53c2\u6570"},"\u7ec4\u5408\u53c2\u6570"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u5728\u6307\u4ee4\u4e2d\u7ec4\u5408\u4efb\u4f55\u53c2\u6570\uff0c\u5176\u7ed3\u679c\u662f\u6240\u6709\u53c2\u6570\u7684\u5e76\u96c6\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u76f8\u540c\u7684\u53c2\u6570\u53ef\u4ee5\u91cd\u590d\u591a\u6b21\uff0c\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush build --only A --only B --only C")," \u4f1a\u9009\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"C"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6ce8\u610f Rush \u4e0d\u4f1a\u63d0\u4f9b\u4efb\u4f55\u53ef\u80fd\u4f1a\u51cf\u5c11\u9009\u4e2d\u9879\u76ee\u7684\u53c2\u6570\u3002\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/issues/1241"},"#1241")," \u4e2d\u6211\u4eec\u4f1a\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u9009\u62e9\u3002"))),(0,p.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e9b\u590d\u6742\u7684\u7ec4\u5408\u6307\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ rush build --only A --impacted-by-except B --to F\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ rush build --only A --impacted-by-except B --to F\n")),(0,p.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u9009\u4e2d\u7684\u9879\u76ee\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"D"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," \u4ee5\u53ca ",(0,p.kt)("inlineCode",{parentName:"p"},"F"),":"),(0,p.kt)("img",{src:"/images/docs/selection-multi.svg",alt:"rush build --only A --impacted-by-except B --to F",style:{height:"150px"}}),(0,p.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/advanced/incremental_builds"},"\u589e\u91cf\u6784\u5efa"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/advanced/incremental_builds"},"watch \u6a21\u5f0f"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/commands/rush_build"},"rush build"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/commands/rush_rebuild"},"rush rebuild")))))}c.isMDXComponent=!0}}]);