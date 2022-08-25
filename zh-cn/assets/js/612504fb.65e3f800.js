"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9248],{158:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>g});var r=n(6393);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=m(t,["components","mdxType","originalType","parentName"]),u=p(n),g=i,k=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(k,a(a({ref:e},l),{},{components:n})):r.createElement(k,a({ref:e},l))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=u;var m={};for(var s in e)hasOwnProperty.call(e,s)&&(m[s]=e[s]);m.originalType=t,m.mdxType="string"==typeof t?t:i,a[1]=m;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8324:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>m,metadata:()=>p,toc:()=>c});var r=n(216),i=n(2228),o=(n(6393),n(158)),a=["components"],m={title:"\u5b89\u88c5 Git \u94a9\u5b50"},s=void 0,p={unversionedId:"pages/maintainer/git_hooks",id:"pages/maintainer/git_hooks",title:"\u5b89\u88c5 Git \u94a9\u5b50",description:"Git \u7248\u672c\u7ba1\u7406\u7cfb\u7edf\u5141\u8bb8\u914d\u7f6e\u4e00\u4e9b\u94a9\u5b50\u811a\u672c\uff0c\u8fd9\u4e9b\u811a\u672c\u5c06\u5728\u67d0\u4e2a\u884c\u4e3a\u6267\u884c\u524d\u5524\u8d77\uff08\u53c2\u8003 \u81ea\u5b9a\u4e49 Git\uff09\uff0c\u6700\u57fa\u672c\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u901a\u7528\u540d\u79f0\u7684 shell \u811a\u672c\uff0c\u4f8b\u5982 pre-commit\uff0cpost-update\uff0cprepare-commit-msg \u7b49\u7b49\u3002\u5982\u679c Git \u53d1\u73b0\u8fd9\u4e9b\u811a\u672c\u5728\u672c\u5730\u7684 .git/hooks \u76ee\u5f55\u4e2d\uff0c\u5b83\u5c06\u5728\u5bf9\u5e94\u7684\u64cd\u4f5c\u6267\u884c\u524d\u6267\u884c\u8fd9\u4e9b\u811a\u672c\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/maintainer/git_hooks.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/git_hooks",permalink:"/zh-cn/pages/maintainer/git_hooks",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/git_hooks.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5 Git \u94a9\u5b50"},sidebar:"docsSidebar",previous:{title:"\u542f\u7528\u4e00\u4e9b\u7b56\u7565",permalink:"/zh-cn/pages/maintainer/setup_policies"},next:{title:"\u542f\u7528 Prettier",permalink:"/zh-cn/pages/maintainer/enabling_prettier"}},l={},c=[{value:"\u914d\u7f6e Rush \u6765\u5b89\u88c5\u4e00\u4e2a Git \u94a9\u5b50\u811a\u672c",id:"\u914d\u7f6e-rush-\u6765\u5b89\u88c5\u4e00\u4e2a-git-\u94a9\u5b50\u811a\u672c",level:2},{value:"\u5728 &quot;git commit&quot; \u65f6\u8c03\u7528 Prettier",id:"\u5728-git-commit-\u65f6\u8c03\u7528-prettier",level:2}],u={toc:c};function g(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Git \u7248\u672c\u7ba1\u7406\u7cfb\u7edf\u5141\u8bb8\u914d\u7f6e\u4e00\u4e9b\u94a9\u5b50\u811a\u672c\uff0c\u8fd9\u4e9b\u811a\u672c\u5c06\u5728\u67d0\u4e2a\u884c\u4e3a\u6267\u884c\u524d\u5524\u8d77\uff08\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"},"\u81ea\u5b9a\u4e49 Git"),"\uff09\uff0c\u6700\u57fa\u672c\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u901a\u7528\u540d\u79f0\u7684 shell \u811a\u672c\uff0c\u4f8b\u5982 ",(0,o.kt)("strong",{parentName:"p"},"pre-commit"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"post-update"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"prepare-commit-msg")," \u7b49\u7b49\u3002\u5982\u679c Git \u53d1\u73b0\u8fd9\u4e9b\u811a\u672c\u5728\u672c\u5730\u7684 ",(0,o.kt)("strong",{parentName:"p"},".git/hooks")," \u76ee\u5f55\u4e2d\uff0c\u5b83\u5c06\u5728\u5bf9\u5e94\u7684\u64cd\u4f5c\u6267\u884c\u524d\u6267\u884c\u8fd9\u4e9b\u811a\u672c\u3002"),(0,o.kt)("p",null,"\u51fa\u4e8e\u5b89\u5168\u6027\u8003\u8651\uff0c\u5f53\u4f60\u514b\u9686\u4e00\u4e2a\u4ed3\u5e93\u65f6\u5019\uff0c\u8fd9\u4e9b\u811a\u672c\u4e0d\u4f1a\u88ab Git \u81ea\u52a8\u62f7\u8d1d\u4e0b\u6765\uff0c\u76f8\u53cd\uff0c\u6bcf\u4e2a\u5f00\u53d1\u8005\u5fc5\u987b\u624b\u52a8\u521b\u5efa\u8fd9\u4e9b\u6587\u4ef6\u5939\u5e76\u5c06\u5176\u6743\u9650\u8bbe\u5b9a\u4e3a\u53ef\u6267\u884c\uff0cRush \u53ef\u4ee5\u5e2e\u4f60\u81ea\u52a8\u5b8c\u6210\u8fd9\u4e2a\u5de5\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e-rush-\u6765\u5b89\u88c5\u4e00\u4e2a-git-\u94a9\u5b50\u811a\u672c"},"\u914d\u7f6e Rush \u6765\u5b89\u88c5\u4e00\u4e2a Git \u94a9\u5b50\u811a\u672c"),(0,o.kt)("p",null,"\u4f5c\u4e3a\u793a\u4f8b\uff0c\u5047\u8bbe\u6211\u4eec\u53d1\u73b0\u5f00\u53d1\u8005\u5199\u4e86\u4e00\u4e2a\u6ca1\u6709\u5f88\u597d\u63cf\u8ff0\u5176\u5de5\u4f5c\u7684 commit, \u8fd9\u4f1a\u5bfc\u81f4 Git \u8bb0\u5f55\u96be\u4ee5\u7406\u89e3\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"commit-msg")," \u94a9\u5b50\uff0c\u8be5\u94a9\u5b50\u8981\u6c42 commit \u9700\u8981\u6ee1\u8db3\u4e00\u5b9a\u8981\u6c42\uff0c\u4f8b\u5982\uff0c\u8fd9\u4e2a\u7b80\u5355\u7684 Bash \u811a\u672c\u8981\u6c42\u81f3\u5c11\u6709 3 \u4e2a\u5355\u8bcd\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"common/git-hooks/commit-msg")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n#\n# \u8fd9\u662f\u4e00\u4e2a Rush \u5185\u4f7f\u7528 Git \u793a\u4f8b\u7684\u793a\u4f8b\uff0c\u4e3a\u4e86\u5f00\u542f\u8fd9\u4e2a\u94a9\u5b50\uff0c\u9700\u8981\u5c06\u6587\u4ef6\u540d\u91cd\u547d\u540d\u4e3a "commit-msg"\n# \u4e4b\u540e\u6267\u884c `rush install`, \u5c06\u5b83\u4ece common/git-hooks \u62f7\u8d1d\u5230 .git/hooks \u76ee\u5f55\u4e0b\u3002\n#\n# \u4e86\u89e3\u66f4\u591a Git \u94a9\u5b50\n#\n# Git \u7684\u6587\u6863\u53ef\u4ee5\u53c2\u8003\uff1a https://git-scm.com/githooks\n# \u4e00\u4e9b\u6709\u7528\u7684\u8d44\u6e90\uff1a https://githooks.com\n#\n# \u5173\u4e8e\u8fd9\u4e2a\u793a\u4f8b\n#\n# \u8fd9\u4e2a commit-msg \u94a9\u5b50\u88ab "git commit" \u4f20\u5165\u4e00\u4e2a\u53c2\u6570\u540e\u5e76\u8c03\u7528\uff0c\u8be5\u53c2\u6570\u662f commit \u6d88\u606f\u6587\u4ef6\u7684\u540d\u79f0\u3002\n# \u5f53\u9047\u5230\u95ee\u9898\u540e\uff0c\u8be5\u94a9\u5b50\u4f1a\u4ee5\u975e\u96f6\u72b6\u6001\u7801\u9000\u51fa\u5e76\u663e\u793a\u51fa\u5408\u9002\u7684\u6d88\u606f\u3002\n# \u8be5\u94a9\u5b50\u88ab\u5141\u8bb8\u7f16\u8f91 commit \u6d88\u606f\u3002\n\n# \u8be5\u793a\u4f8b\u5f3a\u5236\u8981\u6c42 commit \u6d88\u606f\u4e2d\u81f3\u5c11\u5305\u542b\u4e00\u5b9a\u6570\u91cf\u7684\u5355\u8bcd\u3002\nif [ `cat $1 | wc -w` -lt 3 ]; then\n  echo ""\n  echo "Invalid commit message: The message must contain at least 3 words."\n    exit 1\nfi\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rush init")," \u540e\u751f\u6210\u7684\u793a\u4f8b\u6587\u4ef6\u4e2d\u542b\u6709\u4e0a\u8ff0\u4e8b\u4f8b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5c06 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rush-example/blob/main/common/git-hooks/commit-msg.sample"},"common/git-hooks/commit-msg.sample")," \u62f7\u8d1d\u5230\u81ea\u5df1\u7684\u4ed3\u5e93\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"common/git-hooks")," \u76ee\u5f55\u4e0b\u6dfb\u52a0\u8be5\u6587\u4ef6\uff0c\u5e76\u5728 Git \u4e0a\u63d0\u4ea4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5f53\u5f00\u53d1\u8005\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"rush install")," \u65f6\uff0cRush \u5c06\u4f1a\u62f7\u8d1d\u8be5\u6587\u4ef6\u5230 ",(0,o.kt)("strong",{parentName:"li"},".git/hooks/commit-msg")," \u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5f53\u4f60\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"git commit")," \u65f6\uff0cGit \u8bb2\u627e\u5230\u8be5\u811a\u672c\u5e76\u8c03\u7528\u5b83\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c commit \u6d88\u606f\u8fc7\u77ed\uff0c\u811a\u672c\u4f1a\u8fd4\u56de\u975e\u96f6\u72b6\u6001\u7801\uff0cGit \u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"li"},"Invalid commit message")," \u63d0\u793a\u5e76\u4e14\u62d2\u7edd\u64cd\u4f5c\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528 Rush \u6765\u5b89\u88c5\u8fd9\u4e2a\u94a9\u5b50\u811a\u672c\u9700\u8981\u907f\u514d\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/husky"},"Husky")," \u7b49\u72ec\u7acb\u89e3\u51b3\u65b9\u6848\u3002\u6ce8\u610f Husky \u9884\u671f\u4f60\u7684\u4ed3\u5e93\u5728\u6839\u76ee\u5f55\u4e0a\u6709\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"package.json")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"node_modules")," \u76ee\u5f55\uff0c\u5e76\u4e14 Husky \u5c06\u4f1a\u6267\u884c\u6bcf\u4e2a Git \u64cd\u4f5c\u7684 shell \u547d\u4ee4\uff08\u5373\u4f7f\u672a\u4f7f\u7528\u7684\u94a9\u5b50\uff09\uff1b\u4f7f\u7528 Rush \u6765\u5b89\u88c5\u94a9\u5b50\u53ef\u4ee5\u907f\u514d\u8fd9\u4e9b\u9650\u5236\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u5982\u679c\u4f60\u9700\u8981\u5378\u8f7d\u94a9\u5b50\uff0c\u53ef\u4ee5\u5220\u9664\u4f60\u7684 ",(0,o.kt)("strong",{parentName:"p"},".git/hooks/")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u3002")),(0,o.kt)("h2",{id:"\u5728-git-commit-\u65f6\u8c03\u7528-prettier"},'\u5728 "git commit" \u65f6\u8c03\u7528 Prettier'),(0,o.kt)("p",null,"Prettier \u5de5\u5177\u4fdd\u8bc1\u4ee3\u7801\u9075\u5b88\u7edf\u4e00\u7684\u7f29\u8fdb\u3001\u9017\u53f7\u7b49\u683c\u5f0f\u3002\u901a\u8fc7\u914d\u7f6e\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"git commit")," \u94a9\u5b50\u6765\u81ea\u52a8\u8c03\u7528 Prettier, \u4fbf\u53ef\u4ee5\u5728\u4e0d\u5f71\u54cd\u5176\u4ed6\u5f00\u53d1\u8005\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u4fee\u590d\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/maintainer/enabling_prettier"},"\u542f\u7528 Prettier")," \u4e00\u6587\u6709\u624b\u628a\u624b\u7684\u6559\u5b66\u3002"))}g.isMDXComponent=!0}}]);