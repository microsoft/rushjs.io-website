"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[73],{158:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(6393);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),k=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=k(t.components);return r.createElement(m.Provider,{value:e},t.children)},N="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),N=k(n),o=a,g=N["".concat(m,".").concat(o)]||N[o]||c[o]||p;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,l=new Array(p);l[0]=o;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[N]="string"==typeof t?t:a,l[1]=i;for(var k=2;k<p;k++)l[k]=n[k];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},2625:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>k,toc:()=>N});var r=n(9122),a=n(2501),p=(n(6393),n(158)),l=["components"],i={title:"\u542f\u7528\u5408\u5e76\u961f\u5217"},m=void 0,k={unversionedId:"pages/best_practices/merge_queue",id:"pages/best_practices/merge_queue",title:"\u542f\u7528\u5408\u5e76\u961f\u5217",description:"\u5408\u5e76\u961f\u5217\uff08merge queue\uff09\uff0c\u4e5f\u79f0\u4e3a\u63d0\u4ea4\u961f\u5217\uff08commit queue\uff09\u6216\u5408\u5e76\u5217\u8f66\uff08merge train\uff09\uff0c\u901a\u8fc7\u63d0\u4f9b\u4e24\u4e2a\u5173\u952e\u529f\u80fd\uff0c\u6539\u5584\u4e86\u6301\u7eed\u96c6\u6210\uff08CI\uff09\u7cfb\u7edf\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/best_practices/merge_queue.md",sourceDirName:"pages/best_practices",slug:"/pages/best_practices/merge_queue",permalink:"/zh-cn/pages/best_practices/merge_queue",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/best_practices/merge_queue.md",tags:[],version:"current",frontMatter:{title:"\u542f\u7528\u5408\u5e76\u961f\u5217"},sidebar:"docsSidebar",previous:{title:"\u7f16\u5199\u53d8\u66f4\u65e5\u5fd7",permalink:"/zh-cn/pages/best_practices/change_logs"},next:{title:"Rush files and folders",permalink:"/zh-cn/pages/advanced/rush_files_and_folders"}},d={},N=[{value:"\u52a8\u673a\u793a\u4f8b",id:"\u52a8\u673a\u793a\u4f8b",level:2},{value:"\u5408\u5e76\u961f\u5217\u5982\u4f55\u5e2e\u52a9",id:"\u5408\u5e76\u961f\u5217\u5982\u4f55\u5e2e\u52a9",level:2},{value:"\u5229\u7528 Rush \u5de5\u4f5c\u533a\u4f9d\u8d56",id:"\u5229\u7528-rush-\u5de5\u4f5c\u533a\u4f9d\u8d56",level:2},{value:"\u6d41\u884c\u7684\u5408\u5e76\u961f\u5217",id:"\u6d41\u884c\u7684\u5408\u5e76\u961f\u5217",level:2}],c={toc:N},o="wrapper";function g(t){var e=t.components,n=(0,a.Z)(t,l);return(0,p.kt)(o,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5408\u5e76\u961f\u5217"),"\uff08merge queue\uff09\uff0c\u4e5f\u79f0\u4e3a",(0,p.kt)("strong",{parentName:"p"},"\u63d0\u4ea4\u961f\u5217"),"\uff08commit queue\uff09\u6216",(0,p.kt)("strong",{parentName:"p"},"\u5408\u5e76\u5217\u8f66"),"\uff08merge train\uff09\uff0c\u901a\u8fc7\u63d0\u4f9b\u4e24\u4e2a\u5173\u952e\u529f\u80fd\uff0c\u6539\u5584\u4e86\u6301\u7eed\u96c6\u6210\uff08CI\uff09\u7cfb\u7edf\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u589e\u52a0\u5b89\u5168\u6027"),"\uff0c\u901a\u8fc7\u5728\u5408\u5e76 Git \u5206\u652f\u4e4b\u524d\u800c\u975e\u4e4b\u540e\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\uff0c\u907f\u514d\u6784\u5efa\u4e2d\u65ad"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"\u63d0\u9ad8\u541e\u5410\u91cf"),"\uff0c\u901a\u8fc7\u667a\u80fd\u5730\u7ed3\u5408\u5de5\u4f5c\u6216\u5e76\u884c\u5316\u4efb\u52a1")),(0,p.kt)("p",null,"\u5408\u5e76\u961f\u5217\u53ef\u4ee5\u662f\u6d41\u884c\u7684 CI \u7cfb\u7edf\uff08\u5982 GitHub \u6216 GitLab\uff09\u7684\u5185\u7f6e\u529f\u80fd\uff0c\n\u6216\u8005\u53ef\u80fd\u662f\u4e00\u4e2a\u9644\u52a0\u670d\u52a1\u3002"),(0,p.kt)("h2",{id:"\u52a8\u673a\u793a\u4f8b"},"\u52a8\u673a\u793a\u4f8b"),(0,p.kt)("p",null,"\u5047\u8bbe\u62c9\u53d6\u8bf7\u6c42 1 \u548c 2 \u6b63\u7b49\u5f85\u5408\u5e76\u5230\u60a8\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u5206\u652f\uff0c\u5b83\u4eec\u7684\u5206\u652f\u5206\u522b\u547d\u540d\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"pr1"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"pr2"),"\u3002\u4f20\u7edf\u4e0a\u6709\u51e0\u79cd\u57fa\u672c\u7684\u9a8c\u8bc1\u65b9\u6cd5\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u7f13\u6162\u4f46\u5b89\u5168"),"\uff1a\u6211\u4eec\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"start"),"\u6765\u6307\u4ee3",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\u3002\nCI \u7cfb\u7edf\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u5206\u652f",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1"),"\uff08\u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"start"),"\u4e0e",(0,p.kt)("inlineCode",{parentName:"p"},"pr1"),"\u5408\u5e76\uff09\u3002\n\u6211\u4eec\u6784\u5efa\u8fd9\u4e2a\u201c\u70ed\u5408\u5e76\u201d\uff0c\u5982\u679c\u6210\u529f\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5c06 PR 1 \u5408\u5e76\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u3002\n\u5982\u679c PR 2 \u6709\u6b63\u5728\u8fdb\u884c\u7684\u6784\u5efa\uff0c\u5b83\u5e94\u8be5\u88ab\u4e2d\u6b62\uff0c\u56e0\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u5df2\u7ecf\u6539\u53d8\u3002\u5b83\u7684\u70ed\u5408\u5e76\u9700\u8981\n\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u91cd\u505a\uff0c\u56e0\u4e3a\u8fd9\u662f PR 2 \u5408\u5e76\u540e\u5c06\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u4e2d\u7684\u5185\u5bb9\u3002\n\u8fd9\u79cd\u65b9\u6cd5\u786e\u4fdd\u4e86",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u4e2d\u6bcf\u4e2a\u63d0\u4ea4\u7684\u6b63\u786e\u6027\u3002\u7136\u800c\uff0c\u5728\u4e00\u4e2a\u6d3b\u8dc3\u7684 monorepo \u4e2d\uff0c\n\u5f88\u5feb\u5c31\u4f1a\u79ef\u7d2f\u5f88\u591a\u4e34\u65f6\u5206\u652f\uff0c\u56e0\u4e3a\u6700\u7ec8\u5408\u5e76\u7684\u6784\u5efa\u6839\u672c\u6ca1\u6709\u88ab\u5e76\u884c\u5316\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u4e50\u89c2"),"\uff1a\u4e0d\u90a3\u4e48\u4e25\u683c\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u5141\u8bb8 PR 2 \u4ec5\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr2"),"\u6784\u5efa\u6210\u529f\u7684\u60c5\u51b5\u4e0b\u5408\u5e76\uff0c\n\u5373\u4f7f\u6700\u7ec8\u63d0\u4ea4\u5c06\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u3002\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u5e0c\u671b\u5982\u679c\n",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr2"),"\u6784\u5efa\u6210\u529f\uff0c\u90a3\u4e48",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u4e5f\u4f1a\u6210\u529f\u3002\u8fd9\u901a\u5e38\u662f\u6b63\u786e\u7684\uff0c\n\u4f46\u4f8b\u5982\uff0c\u5982\u679c PR 1 \u91cd\u547d\u540d\u4e86\u4e00\u4e2a API\uff0c\u800c PR 2 \u5f15\u5165\u4e86\u5bf9\u8be5 API \u7684\u65b0\u8c03\u7528\uff0c\u90a3\u4e48\u5b83\u4eec\u7684\n\u7ec4\u5408\u5c06\u5931\u8d25\uff0c\u5c3d\u7ba1\u5b83\u4eec\u5355\u72ec\u6210\u529f\u3002"),(0,p.kt)("p",{parentName:"li"},"\u4e50\u89c2\u65b9\u6cd5\u660e\u663e\u66f4\u5feb\uff0c\u56e0\u4e3a PR 1 \u548c PR 2 \u53ef\u4ee5\u5e76\u884c\u6784\u5efa\n\u5e76\u4e14\u4ee5\u4efb\u4f55\u987a\u5e8f\u5408\u5e76\u3002\u7136\u800c\uff0c\u6bcf\u5f53",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u5206\u652f\u88ab\u7834\u574f\u65f6\uff0c\u90fd\u662f\u4e00\u4e2a\u4e0d\u5e78\u7684\u4e8b\u4ef6\uff0c\n\u9700\u8981\u64a4\u9500 PR \u6216\u5408\u5e76\u4fee\u590d\u4ee5\u6062\u590d\u5230\u826f\u597d\u72b6\u6001\u3002\u6839\u636e\u652f\u6301\u4eba\u5458\u7684\u4e0d\u540c\uff0c\n\u8fd9\u53ef\u80fd\u9700\u8981\u51e0\u5c0f\u65f6\u751a\u81f3\u51e0\u5929\uff0c\u5728\u6b64\u671f\u95f4\u6bcf\u4e2a\u4eba\u7684\u5de5\u4f5c\u90fd\u88ab\u6253\u65ad\u3002\n\u5728\u4e00\u4e2a\u7e41\u5fd9\u7684 monorpeo \u4e2d\uff0c\u8fd9\u4e9b\u6545\u969c\u7684\u4ee3\u4ef7\u4f1a\u5341\u5206\u9ad8\u6602")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u76f2\u76ee\u4e50\u89c2"),"\uff1a\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u65e9\u671f\u7cfb\u7edf\u751a\u81f3\u6ca1\u6709\u6267\u884c\u70ed\u5408\u5e76\u3002\n\u5b83\u4eec\u4f7f\u7528\u4e86\u4e50\u89c2\u7b56\u7565\uff0c\u4f46\u57fa\u4e8e\u4e00\u4e2a\u53ef\u80fd\u975e\u5e38\u8fc7\u65f6\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u57fa\u7840\u3002\n\u53ef\u80fd\u4f1a\u4f7f\u7528\u7b56\u7565\u6765\u9650\u5236\u57fa\u7840\u53ef\u4ee5\u6709\u591a\u8001\uff0c\u4ee5\u5c0f\u65f6\u6216 Git \u63d0\u4ea4\u4e3a\u5ea6\u91cf\u3002"))),(0,p.kt)("h2",{id:"\u5408\u5e76\u961f\u5217\u5982\u4f55\u5e2e\u52a9"},"\u5408\u5e76\u961f\u5217\u5982\u4f55\u5e2e\u52a9"),(0,p.kt)("p",null,"\u6211\u4eec\u9996\u5148\u505a\u51fa\u4e00\u4e2a\u51b3\u5b9a\uff0c\u5b89\u5168\u662f\u6bcb\u5eb8\u7f6e\u7591\u7684\uff1a\u5728 PR 1 \u5408\u5e76\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"main"),"\u4e4b\u540e\uff0c\n\u6211\u4eec\u4e0d\u4f1a\u63a5\u53d7\u57fa\u4e8e",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr2"),"\u6210\u529f\u6784\u5efa\u7684 PR 2\u3002\u4e3a\u4e86\u5b89\u5168\u8d77\u89c1\uff0c\u6211\u4eec\u575a\u6301\u8981\u6c42\n",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u7684\u6210\u529f\u6784\u5efa\u3002"),(0,p.kt)("p",null,"\u5408\u5e76\u961f\u5217\u7684\u4e00\u4e2a\u91cd\u8981\u7b56\u7565\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u53ef\u4ee5\u66f4\u65e9\u5f00\u59cb\u3002\n\u8fd9\u91cc\u662f\u4e00\u4e2a"),(0,p.kt)("p",null,"\u5047\u8bbe\u7684\u65f6\u95f4\u8868\uff1a"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4"),(0,p.kt)("th",{parentName:"tr",align:"center"},"PR 1"),(0,p.kt)("th",{parentName:"tr",align:"center"},"PR 2"),(0,p.kt)("th",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"th"},"start+pr1")," \u6784\u5efa"),(0,p.kt)("th",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"th"},"start+pr2")," \u6784\u5efa"),(0,p.kt)("th",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"th"},"start+pr1+pr2")," \u6784\u5efa"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"1:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521b\u5efa"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"1:01"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"2:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521b\u5efa"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"2:01"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"4:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"5:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u6210\u529f"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"5:01"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5408\u5e76"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"5:02"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u53d6\u6d88"),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"6:00"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"7:00"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u6210\u529f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"7:01"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5408\u5e76"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})))),(0,p.kt)("p",null,"\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u6784\u5efa",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr2"),"\uff0c\u53ea\u662f\u4e3a\u4e86\u7a0d\u540e\u53d6\u6d88\u5b83\u5417\uff1f\u5982\u679c\u662f PR 2 \u7684\u6784\u5efa\u63d0\u524d\u5b8c\u6210\uff0c\u90a3\u4e48\u5b9e\u9645\u7684\u5de5\u4f5c\u6d41\u7a0b\n\u53ef\u80fd\u770b\u8d77\u6765\u662f\u8fd9\u6837\u7684\uff1a"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u65f6\u95f4"),(0,p.kt)("th",{parentName:"tr",align:"center"},"PR 1"),(0,p.kt)("th",{parentName:"tr",align:"center"},"PR 2"),(0,p.kt)("th",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"th"},"start+pr1")," \u6784\u5efa"),(0,p.kt)("th",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"th"},"start+pr2")," \u6784\u5efa"),(0,p.kt)("th",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"th"},"start+pr1+pr2")," \u6784\u5efa"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"1:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521b\u5efa"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"1:01"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"2:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521b\u5efa"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"2:01"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"4:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"5:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u6210\u529f"),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"5:01"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5408\u5e76"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"5:02"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u53d6\u6d88"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"6:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},".")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"7:00"),(0,p.kt)("td",{parentName:"tr",align:"center"},"."),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u6210\u529f")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"7:01"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5408\u5e76"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})))),(0,p.kt)("p",null,"\u65e2\u7136\u6700\u7ec8\u4f1a\u5408\u5e76\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\uff0c\u90a3\u4e48\u662f\u5426\u5e94\u8be5\u6709\u4e00\u4e2a\u989d\u5916\u7684\u5217\u7528\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr2+pr1")," \u5462\uff1f\u4e0d\uff0c\u68c0\u51fa\u7684\u6587\u4ef6\u4e0e ",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2")," \u662f\u76f8\u540c\u7684\u3002\u6784\u5efa\u9a8c\u8bc1\u53ea\u5173\u5fc3\u6e90\u6587\u4ef6\u5185\u5bb9\uff0c\u800c\u4e0d\u5173\u5fc3\u5176 Git \u5386\u53f2\u3002"),(0,p.kt)("p",null,"\u6ce8\u610f\uff0c\u968f\u7740\u6d3b\u8dc3 PR \u7684\u6570\u91cf\u589e\u52a0\uff0c\u5206\u652f\u7ec4\u5408\u7684\u6570\u91cf\u4e5f\u4f1a\u5448\u6307\u6570\u7ea7\u589e\u957f\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u6709\u4e09\u4e2a\u540c\u65f6\u8fdb\u884c\u7684 PR\uff0c\u53ef\u80fd\u9700\u8981\u516d\u4e2a\u4efb\u52a1\u6765\u5904\u7406\n",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr2"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr3"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr2+pr3")," \u4ee5\u53ca ",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2+pr3"),"\u3002\n\u6784\u5efa\u6240\u6709\u7ec4\u5408\u53ef\u80fd\u4f1a\u8fc5\u901f\u8017\u5c3d\u6211\u4eec\u7684\u673a\u5668\u8d44\u6e90\u3002"),(0,p.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u8d44\u6e90\u6210\u672c\u6fc0\u589e\uff0c\u6211\u4eec\u53ef\u4ee5\u8df3\u8fc7\u90a3\u4e9b\u770b\u8d77\u6765\u76f8\u5bf9\u4e0d\u592a\u53ef\u80fd\u7684\u7ec4\u5408\uff0c\u5e76\u4e14\u5e73\u5747\u800c\u8a00\u4ecd\u7136\u53ef\u4ee5\u4ece\u5e76\u884c\u6027\u4e2d\u53d7\u76ca\u3002\u6781\u7aef\u7684\u4f8b\u5b50\u662f\uff0c\u5982\u679c\u6211\u4eec\u5bf9 PR 1\u3001PR 2 \u548c PR 3 \u6210\u529f\u6709\u9ad8\u5ea6\u4fe1\u5fc3\uff0c\u53ef\u80fd\u6211\u4eec\u53ea\u9700\u8981\u4e00\u4e2a\u4efb\u52a1 ",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2+pr3"),"\uff1b\u5176\u4ed6\u7ec4\u5408\u53ea\u6709\u5728\u5b83\u5931\u8d25\u65f6\u624d\u5c1d\u8bd5\u3002\u663e\u7136\uff0c\u8fd9\u79cd\u7cbe\u7ec6\u5316\u5b9e\u73b0\u7684\u961f\u5217\u6709\u66f4\u591a\u7684\u673a\u4f1a\u53ef\u4ee5\u4f7f\u5408\u5e76\u6548\u7387\u663e\u8457\u9ad8\u4e8e\u57fa\u7840\u7684\u5408\u5e76\u961f\u5217\u3002"),(0,p.kt)("h2",{id:"\u5229\u7528-rush-\u5de5\u4f5c\u533a\u4f9d\u8d56"},"\u5229\u7528 Rush \u5de5\u4f5c\u533a\u4f9d\u8d56"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 \u5373\u5c06\u63a8\u51fa\uff1a\u6b64\u529f\u80fd\u5c1a\u672a\u51c6\u5907\u597d\u3002")),(0,p.kt)("p",null,"\u7ee7\u7eed\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5047\u8bbe PR 1 \u662f\u5bf9 ",(0,p.kt)("inlineCode",{parentName:"p"},"project-a")," \u7684\u4fee\u590d\uff0c\u800c PR 2 \u662f\u5bf9 ",(0,p.kt)("inlineCode",{parentName:"p"},"project-b")," \u7684\u4fee\u590d\uff1b\n\u4e5f\u5c31\u662f\u8bf4\uff0c\u6bcf\u4e2a PR \u7684 Git \u5dee\u5f02\u53ea\u5f71\u54cd\u4e00\u4e2a\u9879\u76ee\u6587\u4ef6\u5939\u4e0b\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5047\u8bbe\u5728 Rush \u5de5\u4f5c\u533a\u5185\uff0c\u6ca1\u6709\u5176\u4ed6\u9879\u76ee\u4f9d\u8d56\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"project-a")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"project-b"),"\u3002\u8fd9\u610f\u5473\u7740\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"li"},"rush build --from project-a")," \u6784\u5efa\u7684\u6e90\u4ee3\u7801\uff0c\u5bf9\u4e8e\u5206\u652f ",(0,p.kt)("inlineCode",{parentName:"li"},"start+pr1")," \u548c ",(0,p.kt)("inlineCode",{parentName:"li"},"start+pr1+pr2")," \u662f\u76f8\u540c\u7684\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"li"},"rush build --from project-b")," \u6784\u5efa\u7684\u6e90\u4ee3\u7801\uff0c\u5bf9\u4e8e\u5206\u652f ",(0,p.kt)("inlineCode",{parentName:"li"},"start+pr2")," \u548c ",(0,p.kt)("inlineCode",{parentName:"li"},"start+pr1+pr2")," \u662f\u76f8\u540c\u7684\u3002")),(0,p.kt)("p",null,"\u8fd9\u4e9b\u5047\u8bbe\u4fdd\u8bc1\u4e86 PR 1 \u548c PR 2 \u662f\u5b8c\u5168\u72ec\u7acb\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u72ec\u7acb\u5730\u6784\u5efa\u5b83\u4eec\uff0c\u5e76\u5b89\u5168\u5730\u4ee5\u4efb\u4f55\u987a\u5e8f\u5408\u5e76\u5b83\u4eec\u7684\u5206\u652f\u3002\u5408\u5e76\u961f\u5217\u6839\u672c\u4e0d\u9700\u8981\u6784\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u3002"),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5047\u8bbe ",(0,p.kt)("inlineCode",{parentName:"p"},"project-b")," \u7684 ",(0,p.kt)("strong",{parentName:"p"},"package.json")," \u6587\u4ef6\u6307\u5b9a\u4e86\u5bf9 ",(0,p.kt)("inlineCode",{parentName:"p"},"project-a")," \u7684\u4f9d\u8d56\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cPR \u5c31\u4e0d\u518d\u72ec\u7acb\uff1a\u5728 PR 1 \u5408\u5e76\u540e\uff0cPR 2 \u53ea\u6709\u5148\u9a8c\u8bc1",(0,p.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"\u540e\u624d\u80fd\u5b89\u5168\u5408\u5e76\u3002"),(0,p.kt)("p",null,"\u8fd9\u79cd\u5206\u6790\u4f9d\u8d56\u4e8e\u5bf9\u6587\u4ef6\u5939\u4e4b\u95f4\u4f9d\u8d56\u5173\u7cfb\u7684\u4e86\u89e3\uff0c\u8fd9\u5728\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\u548c\u6784\u5efa\u7cfb\u7edf\u4e4b\u95f4\u5dee\u5f02\u5f88\u5927\u3002\u5373\u4f7f\u5728 JavaScript \u7684\u751f\u6001\u7cfb\u7edf\u5185\uff0c\u5bf9 ",(0,p.kt)("strong",{parentName:"p"},"package.json")," \u6587\u4ef6\u7684\u89e3\u91ca\u4e5f\u9700\u8981\u5bf9 PNPM\u3001Rush+PNPM\u3001Yarn \u7b49\u8fdb\u884c\u7279\u522b\u8003\u8651\u3002"),(0,p.kt)("p",null,"\u5408\u5e76\u961f\u5217\u901a\u5e38\u63d0\u4f9b\u4e86\u4e00\u79cd\u57fa\u672c\u8bbe\u65bd\u6765\u63cf\u8ff0\u6587\u4ef6\u5939\u4f9d\u8d56\u5173\u7cfb\uff0c\u53ef\u80fd\u4f7f\u7528\u4e00\u4e2a glob \u6a21\u5f0f\u6765\u63cf\u8ff0\u5982\u4e0b\u7684\u9759\u6001\u5173\u7cfb\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("em",{parentName:"li"},'"\u8fd9\u4e2a\u6587\u4ef6\u5939\u5305\u542b JavaScript \u4ee3\u7801\uff0c\u800c\u90a3\u4e2a\u6587\u4ef6\u5939\u5305\u542b Golang \u4ee3\u7801\uff0c\n\u6240\u4ee5\u5b83\u4eec\u4e4b\u95f4\u4e0d\u53ef\u80fd\u6709\u4efb\u4f55\u4f9d\u8d56\u3002"')," \u6216"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("em",{parentName:"li"},'"\u8fd9\u4e2a\u6587\u4ef6\u5939\u53ea\u5305\u542b\u975e\u53ef\u6784\u5efa\u6587\u4ef6\uff0c\u4f8b\u5982\u6587\u6863\uff0c\u56e0\u6b64\u5ffd\u7565\u90a3\u91cc\u7684\u4efb\u4f55\u5dee\u5f02\u3002"'))),(0,p.kt)("p",null,"\u7136\u800c\uff0c\u5728\u4e00\u4e2a\u7e41\u5fd9\u7684 monorepo \u4e2d\uff0c\u6709\u6210\u767e\u4e0a\u5343\u4e2a\u9879\u76ee\uff0c\u4f18\u5316\u5408\u5e76\u961f\u5217\u9700\u8981\n\u51c6\u786e\u5730\u6a21\u62df\u9879\u76ee\u6587\u4ef6\u5939\u4e4b\u95f4\u7684\u7ec6\u7c92\u5ea6\u4f9d\u8d56\u5173\u7cfb\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u6b63\u5728\u534f\u4f5c\n\u4e00\u79cd\u4e0e\u8bed\u8a00\u65e0\u5173\u7684\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tiktok/project-impact-graph"},"project-impact-graph.yaml")," \u89c4\u8303\uff0c\n\u5bf9\u4e8e\u5408\u5e76\u961f\u5217\u8fd9\u6837\u7684\u670d\u52a1\u800c\u8a00\uff0c\u53ef\u4ee5\u7528\u6765\u67e5\u8be2\u4efb\u4f55 monorepo \u4e2d\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u7684\u9879\u76ee\u4f9d\u8d56\u3002\n\u4f7f\u7528 Rush \u63d2\u4ef6\uff0c\u8fd9\u4e2a YAML \u6587\u4ef6\u5c06\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush update")," \u751f\u6210\u5e76\u63d0\u4ea4\u5230 Git\uff0c\u8fd9\u4f7f\u5f97\n\u5408\u5e76\u961f\u5217\u670d\u52a1\u80fd\u591f\u9ad8\u6548\u5730\u67e5\u8be2\u4efb\u4f55\u5206\u652f\u7684\u6587\u4ef6\u5939\u4f9d\u8d56\u5173\u7cfb\uff0c\u800c\u65e0\u9700\u8fdb\u884c Git \u68c0\u51fa\u3002"),(0,p.kt)("h2",{id:"\u6d41\u884c\u7684\u5408\u5e76\u961f\u5217"},"\u6d41\u884c\u7684\u5408\u5e76\u961f\u5217"),(0,p.kt)("p",null,"\u5efa\u8bae\u5728\u60a8\u7684 monorepo \u4e2d\u4f7f\u7528\u5408\u5e76\u961f\u5217\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u80fd\u7684\u9009\u9879\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"GitHub \u5305\u62ec\u4e00\u4e2a\u5185\u7f6e\u7684\n",(0,p.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue"},"\u5408\u5e76\u961f\u5217"),"\n\u53ef\u4ee5\u4e0e GitHub Actions \u4e00\u8d77\u4f7f\u7528\u6216\u5355\u72ec\u4f7f\u7528"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://mergify.com/"},"Mergify")," \u4e3a GitHub \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9644\u52a0\u670d\u52a1\uff0c\u5177\u6709\u9ad8\u7ea7\u4f18\u5316\u529f\u80fd\u3002\n\u6709\u5173\u8bbe\u7f6e\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605 ",(0,p.kt)("a",{parentName:"li",href:"/zh-cn/pages/integrations/mergify"},"\u96c6\u6210\uff1a\u5c06 Mergify \u4e0e Rush \u4e00\u8d77\u4f7f\u7528"),"\u3002"),(0,p.kt)("li",{parentName:"ul"},"GitLab \u5305\u62ec\u4e00\u4e2a\u5185\u7f6e\u7684 ",(0,p.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html"},"\u5408\u5e76\u5217\u8f66")," \u529f\u80fd")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u5982\u679c\u60a8\u7684\u7ec4\u7ec7\u4f7f\u7528\u7684 Rush \u76f8\u5173\u5408\u5e76\u961f\u5217\u672a\u5728\u4e0a\u9762\u5217\u51fa\uff0c\u8bf7\u6dfb\u52a0\u5b83\u3002")))}g.isMDXComponent=!0}}]);