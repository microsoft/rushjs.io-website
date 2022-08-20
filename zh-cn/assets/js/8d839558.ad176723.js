"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[796],{158:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||p;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(216),a=n(2228),p=(n(6393),n(158)),o=["components"],l={title:"\u4ee5\u5f00\u53d1\u8005\u7684\u8eab\u4efd\u5f00\u59cb"},i=void 0,s={unversionedId:"pages/developer/new_developer",id:"pages/developer/new_developer",title:"\u4ee5\u5f00\u53d1\u8005\u7684\u8eab\u4efd\u5f00\u59cb",description:"\u524d\u63d0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/developer/new_developer.md",sourceDirName:"pages/developer",slug:"/pages/developer/new_developer",permalink:"/zh-cn/pages/developer/new_developer",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/developer/new_developer.md",tags:[],version:"current",frontMatter:{title:"\u4ee5\u5f00\u53d1\u8005\u7684\u8eab\u4efd\u5f00\u59cb"},sidebar:"docsSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-cn/pages/intro/get_started"},next:{title:"\u65e5\u5e38\u7528\u5230\u7684\u6307\u4ee4",permalink:"/zh-cn/pages/developer/everyday_commands"}},u={},d=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u4e00\u4e9b\u7ec6\u8282",id:"\u4e00\u4e9b\u7ec6\u8282",level:2},{value:"1. Rush \u4ed3\u5e93\u5185\u4e0d\u8981\u4f7f\u7528\u67d0\u4e9b\u6307\u4ee4",id:"1-rush-\u4ed3\u5e93\u5185\u4e0d\u8981\u4f7f\u7528\u67d0\u4e9b\u6307\u4ee4",level:4},{value:"2. \u5982\u679c\u4f60\u6000\u7591\u5b89\u88c5\u51fa\u73b0\u95ee\u9898",id:"2-\u5982\u679c\u4f60\u6000\u7591\u5b89\u88c5\u51fa\u73b0\u95ee\u9898",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,p.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528 Rush, \u9996\u5148\u9700\u8981 NodeJS, \u6211\u4eec\u63a8\u8350\u6700\u65b0\u7684",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/releases/"},"\u957f\u671f\u7ef4\u62a4\u7248\u672c"),"\uff0c\u56e0\u4e3a\u975e\u7a33\u5b9a\u7684 NodeJS \u65f6\u5e38\u6709\u4e00\u4e9b bugs, \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"nvm-windows")," \u548c ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm"},"nvm")," (Mac/Linux) \u5b89\u88c5\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u65b9\u4fbf\u5730\u5207\u6362\u5230\u4e0d\u540c\u7684 NodeJS \u7248\u672c\uff0c\u8fd9\u4e9b\u7248\u672c\u53ef\u80fd\u4f1a\u7528\u4e8e\u4e0d\u540c\u7684\u9879\u76ee\u3002"),(0,p.kt)("p",null,"\u4f60\u4e5f\u9700\u8981\u5b89\u88c5 Rush \u672c\u8eab\uff0c\u8fd9\u975e\u5e38\u7b80\u5355\uff0c\u4ece\u4f60\u7684 shell \u6216\u547d\u4ee4\u884c\u7a97\u53e3\u8f93\u5165\u8fd9\u4e2a\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install -g @microsoft/rush\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u5982\u679c\u4e0a\u8ff0\u547d\u4ee4\u7531\u4e8e\u4f60\u6ca1\u6709 NPM \u5168\u5c40\u6743\u9650\u5b89\u88c5\u5931\u8d25\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b",(0,p.kt)("a",{parentName:"em",href:"https://docs.npmjs.com/getting-started/fixing-npm-permissions"},"\u4fee\u590d\u4f60\u7684 NPM \u914d\u7f6e"),"\u3002")),(0,p.kt)("p",null,"\u4e3a\u4e86\u67e5\u770b Rush \u7684\u547d\u4ee4\u884c\u5e2e\u52a9\uff0c\u4f60\u53ef\u4ee5\u8f93\u5165\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"$ rush -h\n")),(0,p.kt)("p",null,"\u547d\u4ee4\u884c\u5e2e\u52a9\u4e5f\u88ab\u53d1\u5e03\u5230",(0,p.kt)("a",{parentName:"p",href:"../../commands/rush_add"},"\u547d\u4ee4\u53c2\u8003"),"\u5185\u3002"),(0,p.kt)("h2",{id:"\u4e00\u4e9b\u7ec6\u8282"},"\u4e00\u4e9b\u7ec6\u8282"),(0,p.kt)("p",null,"\u5728\u6211\u4eec\u5f00\u59cb\u4e4b\u524d\uff0c\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u63d0\u793a\uff1a"),(0,p.kt)("h4",{id:"1-rush-\u4ed3\u5e93\u5185\u4e0d\u8981\u4f7f\u7528\u67d0\u4e9b\u6307\u4ee4"},"1. Rush \u4ed3\u5e93\u5185\u4e0d\u8981\u4f7f\u7528\u67d0\u4e9b\u6307\u4ee4"),(0,p.kt)("p",null,"Rush \u4f1a\u5728\u67d0\u4e2a\u4e2d\u5fc3\u6587\u4ef6\u5939\u5b89\u88c5\u6240\u6709\u7684\u4f9d\u8d56\uff0c\u4e4b\u540e\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Symbolic_link"},"\u7b26\u53f7\u94fe\u63a5"),'\u7ed9\u6bcf\u4e2a\u9879\u76ee\u521b\u5efa "node_modules" \u6587\u4ef6\u5939\u3002'),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u4f7f\u7528\u5305\u7ba1\u7406\u5de5\u5177\u6765\u5b89\u88c5\u6216\u94fe\u63a5\u4f9d\u8d56\u3002"),"\u4f8b\u5982\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"npm run")," \u4f1a\u6b63\u5e38\u6267\u884c\uff0c\u4f46\u662f\u8bf8\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"npm install"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"npm update"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"npm link"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"npm dedupe")," \u7b49\u547d\u4ee4\u4f1a\u5e72\u6270 Rush \u7684\u7b26\u53f7\u94fe\u63a5\uff0c\u540c\u6837\uff0c\u5bf9\u4e8e\u5176\u4ed6\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u4e5f\u8981\u907f\u514d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u6216\u8005 ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn install")," \u7b49\u547d\u4ee4\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u8fd9\u4e9b\u547d\u4ee4\uff0c\u9996\u5148\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"rush unlink")," \u6765\u5220\u9664 Rush \u521b\u5efa\u7684\u7b26\u53f7\u94fe\u63a5\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"git clean -dfx")," \u6765\u6e05\u7406\u6587\u4ef6\u5939\uff0c\u6ce8\u610f\u5b83\u5bf9\u7b26\u53f7\u94fe\u63a5\u7684\u5904\u7406\u4e0d\u591f\u597d\u3002\u5728\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"git clean -dfx")," \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"rush unlink"),"."),(0,p.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"rush update")," \u91cd\u65b0\u751f\u6210\u7b26\u53f7\u8fde\u63a5\u3002(\u6709\u4e00\u4e2a\u5355\u72ec\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"rush link")," \u547d\u4ee4\uff0c\u4f46\u662f\u5f88\u5c11\u4f7f\u7528\u5b83\u3002)"),(0,p.kt)("h4",{id:"2-\u5982\u679c\u4f60\u6000\u7591\u5b89\u88c5\u51fa\u73b0\u95ee\u9898"},"2. \u5982\u679c\u4f60\u6000\u7591\u5b89\u88c5\u51fa\u73b0\u95ee\u9898"),(0,p.kt)("p",null,"Rush \u7684\u5305\u7ba1\u7406\u5de5\u5177\u547d\u4ee4\u662f\u201c\u589e\u91cf\u201d\u5f0f\u7684\uff0c\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u901a\u8fc7\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u5b89\u88c5\u6765\u8282\u7701\u65f6\u95f4\u3002\u56e0\u4e3a\u5f53 Rush \u8fd0\u884c\u5728\u81ea\u52a8\u6784\u5efa\u73af\u5883\u4e2d\u65f6\uff0c\u6709\u5f88\u591a\u4fdd\u969c\u63aa\u65bd\u6765\u786e\u4fdd\u68c0\u67e5\u7684\u51c6\u786e\u6027\u3002\u7136\u800c\uff0c\u5f53\u4f60\u5728\u672c\u5730\u8c03\u8bd5\u65f6\uff0c\u6709\u65f6\u4f1a\u5bfc\u81f4\u4f60\u7684 NPM \u201cnode_modules\u201d \u6587\u4ef6\u5939\u53d8\u5f97\u4e0d\u6b63\u786e\uff0c\u6700\u7ec8\u5bfc\u81f4\u5947\u602a\u7684\u9519\u8bef\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u6000\u7591\u4f60\u7684\u5b89\u88c5\u5df2\u7ecf\u51fa\u73b0\u95ee\u9898\uff0c\u5c1d\u8bd5\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"rush update --purge"),", \u8be5\u6307\u4ee4\u4f1a\u5f3a\u5236\u91cd\u65b0\u5b8c\u5168\u5b89\u88c5\u4f60\u7684\u5305\uff0c\u901a\u5e38\u5b83\u4f1a\u5e26\u4f60\u56de\u5230\u6b63\u5e38\u7684\u72b6\u6001\u3002"))}m.isMDXComponent=!0}}]);