"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4864],{158:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=a,d=c["".concat(o,".").concat(h)]||c[h]||m[h]||s;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=h;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=t(9122),a=t(2501),s=(t(6393),t(158)),i=["components"],l={title:"\u542f\u7528 CI"},o=void 0,p={unversionedId:"pages/maintainer/enabling_ci_builds",id:"pages/maintainer/enabling_ci_builds",title:"\u542f\u7528 CI",description:"\u6301\u7eed\u96c6\u6210\u8981\u6c42\u5728\u63d0\u4ea4 PR \u65f6\u8bbe\u5b9a\u4e00\u4e2a\u6784\u5efa\u884c\u4e3a\uff0c\u8fd9\u4e2a\u81ea\u52a8\u5316\u7684\u811a\u672c\u53ef\u4ee5\u4e00\u4e9b\u8fd0\u884c\u7c7b\u4f3c\u4e8e\u5f00\u53d1\u4eba\u5458\u624b\u52a8\u6267\u884c\u7684\u547d\u4ee4\u3002\u8fd9\u91cc\u4f1a\u5c55\u793a\u4e00\u4e9b\u6709\u7528\u7684\u989d\u5916\u914d\u7f6e\u9879\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/maintainer/enabling_ci_builds.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/enabling_ci_builds",permalink:"/zh-cn/pages/maintainer/enabling_ci_builds",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/enabling_ci_builds.md",tags:[],version:"current",frontMatter:{title:"\u542f\u7528 CI"},sidebar:"docsSidebar",previous:{title:"\u4ed3\u5e93\u4e2d\u6dfb\u52a0\u9879\u76ee",permalink:"/zh-cn/pages/maintainer/add_to_repo"},next:{title:"\u63a8\u8350\u8bbe\u5b9a",permalink:"/zh-cn/pages/maintainer/recommended_settings"}},u={},c=[{value:"install-run-rush.js \u6765\u542f\u52a8 Rush",id:"install-run-rushjs-\u6765\u542f\u52a8-rush",level:2},{value:"install-run.js \u6765\u6267\u884c\u5176\u4ed6\u547d\u4ee4",id:"install-runjs-\u6765\u6267\u884c\u5176\u4ed6\u547d\u4ee4",level:2},{value:"&quot;rush init&quot; \u4e2d\u7684 Travis \u793a\u4f8b",id:"rush-init-\u4e2d\u7684-travis-\u793a\u4f8b",level:2}],m={toc:c},h="wrapper";function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)(h,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u6301\u7eed\u96c6\u6210\u8981\u6c42\u5728\u63d0\u4ea4 PR \u65f6\u8bbe\u5b9a\u4e00\u4e2a\u6784\u5efa\u884c\u4e3a\uff0c\u8fd9\u4e2a\u81ea\u52a8\u5316\u7684\u811a\u672c\u53ef\u4ee5\u4e00\u4e9b\u8fd0\u884c\u7c7b\u4f3c\u4e8e\u5f00\u53d1\u4eba\u5458\u624b\u52a8\u6267\u884c\u7684\u547d\u4ee4\u3002\u8fd9\u91cc\u4f1a\u5c55\u793a\u4e00\u4e9b\u6709\u7528\u7684\u989d\u5916\u914d\u7f6e\u9879\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u624b\u52a8\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff0c\u5176\u6548\u679c\u7c7b\u4f3c\u4e8e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# \u83b7\u53d6\u4e3b\u5206\u652f\u4ee3\u7801\n$ git fetch origin main:refs/remotes/origin/main -a\n\n# \uff08\u53ef\u9009\uff09\u5982\u679c\u5f00\u53d1\u8005\u6ca1\u6709\u521b\u5efa\u66f4\u65b0\u65e5\u5fd7\u5219\u5931\u8d25\u3002\n# \u8fd9\u610f\u5473\u7740\u811a\u672c\u56e0\u4e3a Rush \u8fd4\u56de\u975e\u96f6\u72b6\u6001\u7801\u800c\u7ec8\u6b62\u3002\n$ rush change -v\n\n# \u5728\u516c\u5171\u6587\u4ef6\u5939\u4e0b\u5b89\u88c5 NPM \u5305\u5b89\u88c5 NPM \u5305\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u81ea\u52a8\u6267\u884c "rush link"\n$ rush install --no-link\n\n# \u5355\u72ec\u6267\u884c "rush link", \u8fd9\u6837 CI \u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u6b65\u9aa4\u6765\u8ba1\u7b97\u5f00\u9500\n$ rush link\n\n# \u5168\u91cf\u6784\u5efa\u5e76\u5b9e\u65f6\u8f93\u51fa\u7ec6\u8282\u65e5\u5fd7\n# \uff08\u5047\u5b9a "--ship" \u5df2\u5728 common/config/rush/command-line.json \u4e2d\u88ab\u5b9a\u4e49\uff09\n$ rush rebuild --ship --verbose\n')),(0,s.kt)("p",null,"\u8fd9\u91cc\u6709\u4e2a\u5c0f\u63d2\u66f2 \u2014\u2014 \u5982\u679c\u4f60\u7684 CI \u73af\u5883\u6ca1\u6709\u9884\u5148\u5b89\u88c5 Rush, \u5219\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u653e\u7f6e\u4e00\u4e2a ",(0,s.kt)("strong",{parentName:"p"},"package.json"),", \u7136\u540e\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"npm install")," \u6765\u5b89\u88c5 Rush. \u4f46\u8fd9\u6837\u4e5f\u4f1a\u5f15\u5165\u4e00\u4e2a ",(0,s.kt)("strong",{parentName:"p"},"node_modules")," \u76ee\u5f55, \u8fdb\u800c\u5bfc\u81f4 Rush \u7684\u9632\u6b62",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/pages/advanced/phantom_deps"},"\u5e7b\u5f71\u4f9d\u8d56"),"\u7684\u529f\u80fd\u5931\u6548\u3002"),(0,s.kt)("h2",{id:"install-run-rushjs-\u6765\u542f\u52a8-rush"},"install-run-rush.js \u6765\u542f\u52a8 Rush"),(0,s.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0c\u8fd9\u91cc\u6709\u66f4\u4f18\u96c5\u7684\u65b9\u5f0f\u6765\u5728 CI \u4e0a\u5b89\u88c5 Rush, \u6240\u6709\u7684 Rush \u4ed3\u5e93\u90fd\u4f1a\u6709\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"common/scripts/install-run-rush.js")," \u811a\u672c, \u5b83\u4f1a\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u5bfb\u627e ",(0,s.kt)("strong",{parentName:"p"},"rush.json")," \u6587\u4ef6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u8bfb\u53d6\u6307\u5b9a\u5728\u8be5\u6587\u4ef6\u5185\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"rushVersion"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u81ea\u52a8\u5728 ",(0,s.kt)("strong",{parentName:"p"},"common/temp/install-run")," \u76ee\u5f55\u4e0b\u5b89\u88c5\u8be5\u7248\u672c\u7684 Rush")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ed3\u5e93\u5185\u7684 .npmrc \u6587\u4ef6\u8fdb\u884c\u9002\u5f53\u7684\u8bbe\u7f6e")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4e4b\u540e\u8c03\u7528 Rush \u5de5\u5177\u94fe\uff0c\u5e76\u4f20\u9012\u7ed9\u5b83\u4efb\u4f55\u4f60\u63d0\u4f9b\u7684\u547d\u4ee4\u884c\u53c2\u6570"))),(0,s.kt)("p",null,"\u4e0a\u8ff0\u5b89\u88c5\u8fc7\u7a0b\u662f\u6709\u7f13\u5b58\u7684\uff0c\u6240\u4ee5\u4e0a\u8ff0\u64cd\u4f5c\u5e76\u4e0d\u4f1a\u6bd4\u76f4\u63a5\u8c03\u7528 Rush \u6162\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u5bf9\u4e8e\u4fdd\u5b58\u4e4b\u524d\u8fd0\u884c\u7ed3\u679c\u7684 CI \u7cfb\u7edf\u800c\u8a00\uff0c ",(0,s.kt)("strong",{parentName:"p"},"install-run-rush.js")," \u6bd4 ",(0,s.kt)("inlineCode",{parentName:"p"},"npm install")," \u66f4\u5feb\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u7f13\u5b58 Git \u5206\u652f\u4e0a\u6784\u5efa\u7684\u4e0d\u540c\u7248\u672c\u7684 Rush."),(0,s.kt)("p",null,"\u5c1d\u8bd5\u4ece\u4f60\u7684 shell \u4e2d\u6267\u884c\u811a\u672c:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"~$ cd my-repo\n~/my-repo$ node common/scripts/install-run-rush.js --help\n~/my-repo$ node common/scripts/install-run-rush.js install\n")),(0,s.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5c06\u8fd9\u4e2a\u811a\u672c\u5305\u542b\u5230 Travis \u6784\u5efa\u5b9a\u4e49\u4e2d\u3002"),(0,s.kt)("h2",{id:"install-runjs-\u6765\u6267\u884c\u5176\u4ed6\u547d\u4ee4"},"install-run.js \u6765\u6267\u884c\u5176\u4ed6\u547d\u4ee4"),(0,s.kt)("p",null,"\u6b64\u5916\uff0cRush \u4e5f\u63d0\u4f9b\u4e86\u7b2c\u4e8c\u4e2a\u811a\u672c ",(0,s.kt)("strong",{parentName:"p"},"install-run.js")," \u5141\u8bb8\u4f60\u501f\u6b64\u6765\u6267\u884c\u4efb\u610f\u7684 NPM \u5305\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u65f6\u4e00\u4e2a\u6253\u5370 Rush \u7ad9\u70b9\u4e8c\u7ef4\u7801\u7684\u6307\u4ee4\uff1a :-)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"~/my-repo$ node common/scripts/install-run.js qrcode@1.2.2 qrcode https://rushjs.io\n")),(0,s.kt)("p",null,"\u6ce8\u610f ",(0,s.kt)("strong",{parentName:"p"},"install-run.js")," \u6307\u4ee4\u6709\u4e00\u4e9b\u4e0d\u540c\uff1a\u5b83\u5fc5\u987b\u8981\u5305\u542b\u5305\u540d\u548c\u5176\u7248\u672c\uff08\u53ef\u4ee5\u662f\u8bed\u4e49\u5316\u7248\u672c\uff0c\u4f46\u6700\u597d\u5199\u786e\u5b9a\u7248\u672c\uff09\uff0c\u5b83\u8fd8\u9700\u8981\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6765\u6307\u4ee4\u53ef\u6267\u884c\u6587\u4ef6\u7684\u5177\u4f53\u540d\u79f0\uff08\u901a\u5e38\u800c\u8a00\uff0c\u53ef\u6267\u884c\u6587\u4ef6\u540d\u4e0e\u5305\u540d\u76f8\u540c\uff09\uff0c\u5728\u4e0a\u8ff0\u4e8b\u4f8b\u4e2d\uff0c\u6211\u4eec\u8c03\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"qrcode")," \u7684\u53ef\u6267\u884c\u6587\u4ef6\u5e76\u6307\u5b9a\u8d77\u53c2\u6570\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"https://rushjs.io"),"."),(0,s.kt)("p",null,"\u5f53\u7136\uff0c\u66f4\u76f4\u63a5\u7684\u65b9\u5f0f\u662f\u5c06 ",(0,s.kt)("strong",{parentName:"p"},"qrcode")," \u89c6\u4e3a\u67d0\u4e2a ",(0,s.kt)("strong",{parentName:"p"},"package.json")," \u5185\u7684\u4e00\u4e2a\u4f9d\u8d56\uff0c\u4f8b\u5982\u5c06\u5176 ",(0,s.kt)("strong",{parentName:"p"},"package.json")," \u653e\u5230 ",(0,s.kt)("strong",{parentName:"p"},"tools/repo-scripts")," \u9879\u76ee\u4e0b\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u88ab\u89c6\u4e3a\u65e5\u5e38\u5b89\u88c5\u7684\u4e00\u6b65\uff0c\u5e76\u88ab\u4ed3\u5e93\u7684 shrinkwrap \u6587\u4ef6\u8bb0\u5f55\u3002\u4f46\u662f\u5728\u8bf8\u5982\u4e0d\u9700\u8981 ",(0,s.kt)("inlineCode",{parentName:"p"},"rush install")," \u7684 CI \u4efb\u52a1\u6216\u8005\u5373\u4f7f ",(0,s.kt)("inlineCode",{parentName:"p"},"rush install")," \u51fa\u73b0\u6545\u969c\u65f6 Git hooks \u4f9d\u65e7\u53ef\u7528\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u4e0d\u53ef\u53d6\u7684\u3002"),(0,s.kt)("h2",{id:"rush-init-\u4e2d\u7684-travis-\u793a\u4f8b"},'"rush init" \u4e2d\u7684 Travis \u793a\u4f8b'),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://travis-ci.com/"},"Travis CI")," \u662f\u4e00\u4e2a\u6574\u5408\u4e86 Github \u7684\u6301\u7eed\u96c6\u6210\u5de5\u5177\uff0c\u5b83\u5f00\u6e90\u4e14\u514d\u8d39\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"rush init")," \u4f1a\u521b\u5efa\u4e00\u4e2a\u4fbf\u4e8e\u4f7f\u7528\u7684 ",(0,s.kt)("strong",{parentName:"p"},".travis.yml")," \u6587\u4ef6\u3002\u6ce8\u610f\uff0c\u5b83\u4f7f\u7528 ",(0,s.kt)("strong",{parentName:"p"},"install-run-rush.js")," \u6765\u8c03\u7528 Rush \u5de5\u5177\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"language: node_js\nnode_js:\n  - '8.9.4'\nscript:\n  - set -e\n\n  - echo 'Checking for missing change logs...' && echo -en 'travis_fold:start:change\\\\r'\n  - git fetch origin main:refs/remotes/origin/main -a\n  - node common/scripts/install-run-rush.js change -v\n  - echo -en 'travis_fold:end:change\\\\r'\n\n  - echo 'Installing...' && echo -en 'travis_fold:start:install\\\\r'\n  - node common/scripts/install-run-rush.js install\n  - echo -en 'travis_fold:end:install\\\\r'\n\n  - echo 'Building...' && echo -en 'travis_fold:start:build\\\\r'\n  - node common/scripts/install-run-rush.js rebuild --verbose\n  - echo -en 'travis_fold:end:build\\\\r'\n")),(0,s.kt)("p",null,"\u5173\u4e8e\u4f7f\u7528 Azure Devops \u6784\u5efa\u7684\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003\u7528\u4e8e\u90e8\u7f72 Rush \u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/common/config/azure-pipelines/templates/build.yaml"},"build.yaml \u6587\u4ef6"),"."))}d.isMDXComponent=!0}}]);