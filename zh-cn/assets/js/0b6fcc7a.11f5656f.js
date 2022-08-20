"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6995],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(216),r=n(2228),l=(n(6393),n(158)),p=["components"],i={title:"\u4f7f\u7528\u76d1\u542c\u6a21\u5f0f"},o=void 0,s={unversionedId:"pages/advanced/watch_mode",id:"pages/advanced/watch_mode",title:"\u4f7f\u7528\u76d1\u542c\u6a21\u5f0f",description:"\u8bf8\u5982 Webpack \u548c Jest \u7b49\u6d41\u884c\u5de5\u5177\u63d0\u4f9b\u4e86\u201c\u76d1\u542c\u6a21\u5f0f\u201d\u529f\u80fd\uff1a\u5f53\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5de5\u5177\u9009\u62e9\u6587\u4ef6\u7cfb\u7edf\u6765\u7b49\u5f85\u6e90\u4ee3\u7801\u53d1\u751f\u53d8\u52a8\uff0c\u4e00\u65e6\u76d1\u542c\u5230\u53d8\u52a8\uff0c\u4efb\u52a1\u961f\u5217\u4f1a\u66f4\u65b0\u5176\u8f93\u51fa\u3002\u8fd9\u52a0\u901f\u5f00\u53d1\uff0c\u56e0\u4e3a (1) \u4e00\u65e6\u4f60\u4fdd\u5b58\u6587\u4ef6\u5c31\u53ef\u4ee5\u91cd\u65b0\u6784\u5efa\uff1b(2) \u7531\u4e8e\u8fdb\u7a0b\u6ca1\u6709\u505c\u6b62\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u7f13\u5b58\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/advanced/watch_mode.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/watch_mode",permalink:"/zh-cn/pages/advanced/watch_mode",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/watch_mode.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u76d1\u542c\u6a21\u5f0f"},sidebar:"docsSidebar",previous:{title:"\u589e\u91cf\u6784\u5efa",permalink:"/zh-cn/pages/advanced/incremental_builds"},next:{title:"\u5b89\u88c5\u53d8\u79cd",permalink:"/zh-cn/pages/advanced/installation_variants"}},c={},m=[{value:"\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u60f3\u6cd5",id:"\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u60f3\u6cd5",level:2},{value:"\u8bbe\u7f6e &quot;watchForChanges&quot;\uff08\u5b9e\u9a8c\u6027\uff09",id:"\u8bbe\u7f6e-watchforchanges\u5b9e\u9a8c\u6027",level:2},{value:"\u793e\u533a\u89e3\u51b3\u65b9\u6cd5",id:"\u793e\u533a\u89e3\u51b3\u65b9\u6cd5",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8bf8\u5982 ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/watch/"},"Webpack")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/cli"},"Jest")," \u7b49\u6d41\u884c\u5de5\u5177\u63d0\u4f9b\u4e86\u201c\u76d1\u542c\u6a21\u5f0f\u201d\u529f\u80fd\uff1a\u5f53\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5de5\u5177\u9009\u62e9\u6587\u4ef6\u7cfb\u7edf\u6765\u7b49\u5f85\u6e90\u4ee3\u7801\u53d1\u751f\u53d8\u52a8\uff0c\u4e00\u65e6\u76d1\u542c\u5230\u53d8\u52a8\uff0c\u4efb\u52a1\u961f\u5217\u4f1a\u66f4\u65b0\u5176\u8f93\u51fa\u3002\u8fd9\u52a0\u901f\u5f00\u53d1\uff0c\u56e0\u4e3a (1) \u4e00\u65e6\u4f60\u4fdd\u5b58\u6587\u4ef6\u5c31\u53ef\u4ee5\u91cd\u65b0\u6784\u5efa\uff1b(2) \u7531\u4e8e\u8fdb\u7a0b\u6ca1\u6709\u505c\u6b62\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u8fd9\u4e9b\u529f\u80fd\u4ec5\u4ec5\u5bf9\u5355\u4e2a\u9879\u76ee\u6709\u6548\uff0c\u4e00\u65e6\u5728 monorepo \u4e2d\u5f00\u53d1\uff0c\u6211\u4eec\u9700\u8981\u80fd\u591f",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u4e00\u6b21\u6027\u76d1\u542c\u591a\u9879\u76ee")),"\u7684\u76d1\u542c\u6a21\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u60f3\u6cd5"},"\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u60f3\u6cd5"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684 monorepo \u6709\u5982\u4e0b\u9879\u76ee\uff1a"),(0,l.kt)("img",{src:"/images/docs/selection-intro.svg",alt:"a sample monorepo",style:{height:"150px"}}),(0,l.kt)("p",null,"\u4e0a\u8ff0\u56fe\u4f8b\u4e2d\uff0c\u5706\u5708\u8868\u793a\u672c\u5730\u9879\u76ee\uff0c\u6ca1\u6709\u5916\u90e8\u7684 NPM \u4f9d\u8d56\u3002\u7bad\u5934 ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," \u8868\u660e ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u4f9d\u8d56 ",(0,l.kt)("inlineCode",{parentName:"p"},"C"),", \u8fd9\u610f\u5473\u7740 ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," \u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u6784\u5efa\u524d\u6784\u5efa\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u4f60\u4fdd\u5b58\u4e86\u5bf9\u9879\u76ee ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," \u7684\u53d8\u52a8\uff1a"),(0,l.kt)("img",{src:"/images/docs/selection-impact.svg",alt:"rush build --impacted-by B",style:{height:"150px"}}),(0,l.kt)("p",null,"\u5bf9\u4e8e\u591a\u9879\u76ee\u7684\u201c\u76d1\u542c\u6a21\u5f0f\u201d\uff0c\u6211\u4eec\u9884\u671f\u4f1a\u53d1\u751f\u5982\u4e0b\u4e8b\u60c5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"B")," \u5e94\u8be5\u88ab\u91cd\u65b0\u6784\u5efa\uff0c\u56e0\u4e3a\u5b83\u7684\u6587\u4ef6\u88ab\u6539\u53d8\u4e86\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"C")," \u5e94\u8be5\u88ab\u91cd\u65b0\u6784\u5efa\uff0c\u56e0\u4e3a\u5b83\u4f9d\u8d56\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"B")),(0,l.kt)("li",{parentName:"ul"},"\u4e4b\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"D")," \u5e94\u8be5\u88ab\u91cd\u65b0\u6784\u5efa\uff0c\u56e0\u4e3a\u5b83\u4f9d\u8d56\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"C")),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0cWebpack dev server\uff08\u9884\u671f\u662f\u7531 ",(0,l.kt)("inlineCode",{parentName:"li"},"D")," \u5524\u8d77\u7684\uff09\u5237\u65b0\u4f60\u7684 web \u6d4f\u89c8\u5668\uff0c\u91cd\u65b0\u6784\u5efa\u7684 app")),(0,l.kt)("p",null,"\u5982\u679c\u901a\u8fc7 rush \u6765\u5b9e\u73b0\u8fd9\u4e2a\u65b9\u6848\uff1f\u5047\u8bbe\u9879\u76ee\u5185 ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"C")," \u90fd\u6709\u5982\u4e0b\u7684\u7b80\u5355\u811a\u672c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"package.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "rm -Rf lib/ && tsc && jest"\n  }\n  . . .\n')),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u5c1d\u8bd5\u5728\u4e00\u4e2a\u65e0\u9650\u5faa\u73af\u4e2d\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"rush build --to-except D"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa\u6240\u6709\u4f9d\u8d56\u4e8e D \u7684\u9879\u76ee\uff08\u4f46\u4e0d\u5305\u62ec D \u672c\u8eab\uff09\uff0c\u5e76\u5728\u65e0\u9650\u5faa\u73af\u4e2d\u91cd\u590d\u8fd9\u4e2a\u64cd\u4f5c\n$ while true; do rush build --to-except D; done\n")),(0,l.kt)("p",null,"\u4e4b\u540e\u8ba9\u5b83\u4e00\u76f4\u8fd0\u884c\uff0c\u6211\u4eec\u5728\u9879\u76ee ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," \u4e2d\u5524\u8d77 ",(0,l.kt)("inlineCode",{parentName:"p"},"heft start"),"\uff08\u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack serve"),"\uff09\uff1a"),(0,l.kt)("p",null,"\u4e4b\u540e\u4f60\u4f1a\u53d1\u73b0\u4e0a\u8ff0\u65b9\u6848\u6709\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"rm -Rf lib/")," \u5220\u9664\u4e86\u7b26\u53f7\u94fe\u63a5\u6587\u4ef6\uff1b\u7b26\u53f7\u94fe\u63a5\u4f1a\u8ff7\u60d1 Webpack \u7684\u6587\u4ef6\u76d1\u542c\uff0c\u6240\u4ee5\u4f60\u4f1a\u770b\u5230\u5f88\u591a\u62a5\u9519\u63d0\u793a\u8bf4\uff1a\u627e\u4e0d\u5230\u5bfc\u5165\u7684\u6587\u4ef6\u3002Webpack \u4e0d\u4f1a\u4ece\u4e2d\u6062\u590d\u5b83\u4eec\uff0c\u56e0\u4e3a\u5f53\u6587\u4ef6\u91cd\u65b0\u5199\u5165\u65f6\uff0c\u7b26\u53f7\u94fe\u63a5\u7684\u6587\u4ef6\u4e0d\u4f1a\u66f4\u65b0\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u76d1\u542c\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"jest")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"rm -Rf")," \u6b65\u9aa4\u4e00\u822c\u4e0d\u91cd\u8981\u3002\u5f00\u53d1\u8005\u7684\u5185\u90e8\u5faa\u73af ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u7f16\u8f91 -> \u91cd\u65b0\u6784\u5efa -> \u91cd\u65b0\u52a0\u8f7d"))," \u6bd4\u6587\u4ef6\u76d1\u542c\u6240\u9700\u65f6\u95f4\u6162\u591a\u4e86\u3002"))),(0,l.kt)("p",null,"\u8fd9\u4e9b\u95ee\u9898\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u7279\u6b8a\u7684\u7b80\u5316\u811a\u672c\u6765\u89e3\u51b3\uff0c\u6bd4\u5982\u8fd9\u6837\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"package.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "rm -Rf lib/ && tsc && jest",\n    "build:watch": "tsc"\n  }\n  . . .\n')),(0,l.kt)("h2",{id:"\u8bbe\u7f6e-watchforchanges\u5b9e\u9a8c\u6027"},'\u8bbe\u7f6e "watchForChanges"\uff08\u5b9e\u9a8c\u6027\uff09'),(0,l.kt)("p",null,"Rush \u7684\u201c\u6587\u4ef6\u76d1\u542c\u201d \u57fa\u672c\u601d\u60f3\u662f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chokidar"},"chokidar")," \u6765\u4f18\u5316\u5faa\u73af\u3002\u4e0b\u9762\u662f\u5176\u7528\u6cd5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"../../configs/command-line_json"},"command-line.json")," \u4e2d\u7684\u6dfb\u52a0\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"../../maintainer/custom_commands"},"\u81ea\u5b9a\u4e49\u6307\u4ee4"),"\u3002\u7ee7\u7eed\u4e0a\u9762\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u6307\u4ee4\u5c06\u88ab\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'"build:watch"'),"\u3002\u91cd\u8981\u7684\u8bbe\u7f6e\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},'"incremental"')," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},'"watchForChanges"'),":"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"common/config/rush/command-line.json")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "commands": [\n    {\n      "name": "build:watch",\n      "commandKind": "bulk",\n      "summary": "Build projects and watch for changes",\n      "description": "For details, see the article \\"Using watch mode\\" on the Rush website: https://rushjs.io/",\n\n      // \u4f7f\u7528\u589e\u91cf\u6784\u5efa\uff08\u91cd\u8981\uff09\n      "incremental": true,\n      "enableParallelism": true,\n      // \u542f\u7528\u201c\u76d1\u542c\u6a21\u5f0f\u201d\n      "watchForChanges": true\n    },\n  . . .\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u6bcf\u4e2a\u9879\u76ee\u7684 ",(0,l.kt)("strong",{parentName:"p"},"package.json")," \u4e0b\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},'"build:watch"')," \u811a\u672c\uff08",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/pull/2298"},"PR #2298")," \u7684\u76ee\u6807\u662f\u7b80\u5316\u8fd9\u4e00\u6b65\u9aa4\uff0c\u6765\u4f7f\u5f97\u9879\u76ee\u5185\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},'"build:watch"')," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},'"build"')," \u76f8\u7b49\uff0c\u6700\u7ec8\u53ef\u4ee5\u88ab\u5408\u5e76\u5230\u4e00\u4e2a\u5171\u4eab\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/rig_packages/"},"rig \u5305"),"\u4e2d\u3002"))),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/overview/"},"Heft"),", \u4f60\u7684\u811a\u672c\u5c06\u4f1a\u50cf\u8fd9\u6837\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"package.json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "heft build --clean",\n    "build:watch": "heft build"\n  }\n  . . .\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"../../developer/selecting_subsets"},"\u9009\u62e9\u90e8\u5206\u9879\u76ee"),"\u4e00\u6587\u9009\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"D")," \u7684\u6240\u6709\u4f9d\u8d56\uff0c\u4f46\u4e0d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"D")," \u672c\u8eab\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6784\u5efa\u6240\u6709\u4f9d\u8d56\u4e8e D \u7684\u9879\u76ee\uff08\u4f46\u4e0d\u5305\u62ec D \u672c\u8eab\uff09\uff0c\u5e76\u5728\u65e0\u9650\u5faa\u73af\u4e2d\u91cd\u590d\u8fd9\u4e2a\u64cd\u4f5c\n$ rush build:watch --to-except D\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u968f\u540e\uff0c\u5f00\u4e00\u4e2a\u9879\u76ee\u76ee\u5f55\u4e2d\u5f00\u542f\u5f00\u53d1\u670d\u52a1\u5668\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5728\u9879\u76ee D \u7684\u76ee\u5f55\u4e0b\u5f00\u542f Webpack \u7684\u5f00\u53d1\u670d\u52a1\u5668\n# \uff08\u8fd9\u662f\u793a\u4f8b\u4e2d\u7684 web \u5e94\u7528\uff09\n$ cd apps/D\n$ heft start # \u6216\u8005\u7528\u81ea\u5df1\u7684 "npm run start"\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e3a\u4e86\u5b9e\u73b0\u66f4\u5feb\u7684\u76d1\u542c\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"--changed-projects-only")," \u547d\u4ee4\u53ef\u4ee5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},'"watchForChanges"')," \u7ed3\u5408\u4f7f\u7528\u3002",(0,l.kt)("a",{parentName:"li",href:"../../advanced/incremental_builds#building-changed-projects-only-unsafe"},"\u589e\u91cf\u6784\u5efa"),"\u4e00\u6587\u8be6\u7ec6\u8bf4\u660e\u4e86\u4ed6\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u4ee5\u53ca\u5b83\u662f\u5426\u9002\u5408\u4f7f\u7528\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u201c\u5b9e\u9a8c\u6027\u201d")," ",(0,l.kt)("inlineCode",{parentName:"p"},'"watchForChanges"')," \u7684\u529f\u80fd\u8fd8\u5728\u5176\u521d\u671f\u9636\u6bb5\u3002\u6709\u610f\u89c1\u6216\u5efa\u8bae\u8bf7\u8054\u7cfb\u6211\u4eec\uff01\nGitHub issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/issues/1202"},"#1202"),"\n\u8ddf\u8e2a\u66f4\u591a\u5de5\u4f5c\u9879\uff0c\u4ee5\u53ca ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wbern"},"William Bernting")," \u7684\u5f00\u53d1\u8ba1\u5212\u3002")),(0,l.kt)("h2",{id:"\u793e\u533a\u89e3\u51b3\u65b9\u6cd5"},"\u793e\u533a\u89e3\u51b3\u65b9\u6cd5"),(0,l.kt)("p",null,"Rush \u7684\u793e\u533a\u5206\u4eab\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u66ff\u4ee3\u65b9\u6848\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@telia/rush-select"},"@telia/rush-select")," \u662f\u4e3a\u76d1\u542c RUsh \u9879\u76ee\u548c\u9009\u4e2d\u90e8\u5206\u6784\u5efa\u7684\u4ea4\u4e92\u5f0f\u5de5\u5177\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/dimfeld/rush-dev-watcher"},"rush-dev-watcher")," \u662f\u4e00\u4e2a\u7b80\u5355\u6709\u7528\u7684\u811a\u672c\uff0c\u5b83\u662f\u7531 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dimfeld"},"Daniel Imfeld")," \u5f00\u53d1\u7684\uff0c\u5b83\u4f1a\u6267\u884c\u4e00\u6b21\u521d\u59cb\u6784\u5efa\uff0c\u7136\u540e\u542f\u52a8\u591a\u4e2a\u76d1\u542c\u5668\u3002"))),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../developer/selecting_subsets"},"\u9009\u62e9\u90e8\u5206\u9879\u76ee")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../advanced/incremental_builds"},"\u589e\u91cf\u6784\u5efa"))))}d.isMDXComponent=!0}}]);