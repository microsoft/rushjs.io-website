"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[5711],{158:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(6393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(216),r=a(2228),i=(a(6393),a(158)),o=["components"],s={title:"Authoring change logs"},l=void 0,p={unversionedId:"pages/best_practices/change_logs",id:"pages/best_practices/change_logs",title:"Authoring change logs",description:"When publishing an NPM package, it is common practice to include a CHANGELOG.md file to inform your consumers about bug fixes, new features, and changed or removed functionality. Rush automates this using the rush change command. This command should be run once you are ready to merge your PR, after all your changes have been committed to the branch. It analyzes the changes in your branch and (when necessary) prompts you to write human-readable descriptions of your changes.",source:"@site/docs/pages/best_practices/change_logs.md",sourceDirName:"pages/best_practices",slug:"/pages/best_practices/change_logs",permalink:"/pages/best_practices/change_logs",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/best_practices/change_logs.md",tags:[],version:"current",frontMatter:{title:"Authoring change logs"},sidebar:"docsSidebar",previous:{title:"NPM registry authentication",permalink:"/pages/maintainer/npm_registry_auth"},next:{title:"Config file reference",permalink:"/pages/advanced/config_files"}},m={},c=[{value:"Recommended Practices",id:"recommended-practices",level:2},{value:"Example Change Log Messages",id:"example-change-log-messages",level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When publishing an NPM package, it is common practice to include a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/libraries/node-core-library/CHANGELOG.md"},"CHANGELOG.md")," file to inform your consumers about bug fixes, new features, and changed or removed functionality. Rush automates this using the ",(0,i.kt)("a",{parentName:"p",href:"/pages/commands/rush_change"},"rush change")," command. This command should be run once you are ready to merge your PR, after all your changes have been committed to the branch. It analyzes the changes in your branch and (when necessary) prompts you to write human-readable descriptions of your changes."),(0,i.kt)("p",null,"The way in which you phrase your description is important. You don't want to be overly concise or specific, you don't want to reveal private information, and you want the description to be as helpful as possible. We recommend to err on the side of readability. Ask yourself:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"How is my change relevant to a third-party developer?"'),(0,i.kt)("li",{parentName:"ul"},'"Could it break them?"'),(0,i.kt)("li",{parentName:"ul"},'"Does it fix a bug that\'s been annoying them?"'),(0,i.kt)("li",{parentName:"ul"},'"Is it a new feature for them to try?"')),(0,i.kt)("p",null,"In some workflows, a human editor will review the change logs before they are published, however everyone should do their best to ensure that the content is clear and professional."),(0,i.kt)("h2",{id:"recommended-practices"},"Recommended Practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("a",{parentName:"p",href:"http://www.englishtenses.com/tenses/present_simple"},"present simple tense")," using the ",(0,i.kt)("a",{parentName:"p",href:"http://grammarist.com/grammar/english-moods/"},'imperative ("command") mood'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Write from the perspective of an external audience who may be unfamiliar with implementation details of your package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Focus on scenario outcomes ("Searching now supports wildcards") instead of code changes ("Added regular expression support to SearchHelper class")')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start with a verb. These verbs are recommended:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add")," - when you introduce or expose a new feature, property, class, UI, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Remove")," - when you fully removed something and it can no longer be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deprecate")," - when you plan on removing something, but it is still accessible."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fix an issue with/where...")," - when you fixed a bug."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Improve")," - when you made an existing thing better."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update")," - when you refresh something, but don't necessarily make it better."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Upgrade")," - when upgrading the version of a dependency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Initial/Beta release of ...")," - when releasing a brand-new feature."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Don't use the word ",(0,i.kt)("strong",{parentName:"p"},"bug"),". Use ",(0,i.kt)("strong",{parentName:"p"},"issue")," instead.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Don\'t use shorthand words or acronyms, unless they are widely recognized (e.g. "HTTP")')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use correct spelling and grammar. The CHANGELOG.md is part of your package's published documentation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When referring to public API changes, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," suffix to indicate a function name, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"setSomethingOnWebpart()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When referring to public API changes, use backticks (",(0,i.kt)("inlineCode",{parentName:"p"},"` `"),") around class and property names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'When documenting an upgrade, indicate the old and new version. For example: "Upgraded ',(0,i.kt)("inlineCode",{parentName:"p"},"widget-library")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.2")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.1"),'"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If fixing a GitHub issue, consider adding the issue URL in parentheses.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Don't add a trailing period unless you have two or more sentences."))),(0,i.kt)("h2",{id:"example-change-log-messages"},"Example Change Log Messages"),(0,i.kt)("p",null,"Here are some hypothetical change log messages that might be provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"rush change"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},'Add "buttonColor" to the button manifest schema')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Remove support for older mobile web browsers as described in the README.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Deprecate the ",(0,i.kt)("inlineCode",{parentName:"em"},"doSomething()")," API function. Use ",(0,i.kt)("inlineCode",{parentName:"em"},"doSomethingBetter()")," instead.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},'Fix an issue where "ExampleWidget" API did not handle dates correctly')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Improve the diagnostic logging when running in advanced mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Upgrade from React 15 to React 16")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Initial release of the flexible panels feature"))))}d.isMDXComponent=!0}}]);