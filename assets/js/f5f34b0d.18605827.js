"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[2468],{158:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(9122),r=n(2501),i=(n(6393),n(158)),l=["components"],p={title:"Enabling a merge queue"},o=void 0,s={unversionedId:"pages/best_practices/merge_queue",id:"pages/best_practices/merge_queue",title:"Enabling a merge queue",description:"A merge queue (also called commit queue or merge train) improves continuous integration",source:"@site/docs/pages/best_practices/merge_queue.md",sourceDirName:"pages/best_practices",slug:"/pages/best_practices/merge_queue",permalink:"/pages/best_practices/merge_queue",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/best_practices/merge_queue.md",tags:[],version:"current",frontMatter:{title:"Enabling a merge queue"},sidebar:"docsSidebar",previous:{title:"Authoring change logs",permalink:"/pages/best_practices/change_logs"},next:{title:"Rush files and folders",permalink:"/pages/advanced/rush_files_and_folders"}},m={},d=[{value:"Motivating example",id:"motivating-example",level:2},{value:"How a merge queue helps",id:"how-a-merge-queue-helps",level:2},{value:"Leveraging Rush workspace dependencies",id:"leveraging-rush-workspace-dependencies",level:2},{value:"Popular merge queues",id:"popular-merge-queues",level:2}],c={toc:d},u="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"merge queue")," (also called ",(0,i.kt)("strong",{parentName:"p"},"commit queue")," or ",(0,i.kt)("strong",{parentName:"p"},"merge train"),") improves continuous integration\n(CI) systems\nby providing two key features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"increased safety")," by avoiding build breaks that may occur if Git branches are validated\n",(0,i.kt)("em",{parentName:"li"},"before")," they are merged rather than ",(0,i.kt)("em",{parentName:"li"},"after")," they are merged"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"higher throughput")," by intelligently combining work or parallelizing jobs")),(0,i.kt)("p",null,"The merge queue can be a built-in feature for popular CI systems such as GitHub or GitLab,\nor it may be an add-on service."),(0,i.kt)("h2",{id:"motivating-example"},"Motivating example"),(0,i.kt)("p",null,"Suppose pull requests 1 and 2 are waiting to get merged into your ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch, and their branches are\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"pr1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pr2"),". Traditionally there were a few basic approaches to validation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Slow but safe:")," Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," to refer to the latest commit of the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch.\nThe CI system creates a temporary branch ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1")," (merging ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"pr1"),').\nWe build this "hot merge" and, if successful, now we can merge PR 1 into ',(0,i.kt)("inlineCode",{parentName:"p"},"main"),".\nIf PR 2 had an an going build, it should be aborted, because ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," has changed. Its hot merge needs\nto be redone using ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),", because that is what will be in ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," after PR 2 merges.\nThis approach ensures correctness of every commit in ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". However in an active monorepo,\na backlog will quickly pile up, because the builds that ultimately get merged are not being parallelized at all.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optimistic:")," Being less strict, we could choose to allow PR 2 to get merged with only a successful build\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr2"),", even though the final commit will be ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),". In effect, we are hoping that if\n",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr2")," built successfully, then so would ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),". This is usually true,\nbut for example if PR 1 renames an API, whereas PR 2 introduces a new call to that API, then their\ncombination would fail even though they succeeded individually."),(0,i.kt)("p",{parentName:"li"},"The optimistic approach is significantly faster, since PR 1 and PR 2 can build in parallel\nand merge in any order. However, whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch gets broken, it's an unfortunate incident\nthat requires reverting PR's or merging fixes to get back to a good state. Depending on support staff,\nthis could take hours or even days, during which everyone's work is interrupted.\nIn a high traffic monorepo, these incidents become prohibitively costly.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Naively optimistic:")," It's worth mentioning that early systems didn't even perform the hot merge.\nThey used the optimistic strategy but with a potentially very outdated base from ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),".\nA policy might be used to restrict how old the base could be, measured in hours or Git commits."))),(0,i.kt)("h2",{id:"how-a-merge-queue-helps"},"How a merge queue helps"),(0,i.kt)("p",null,"Let's start with a decision that safety is non-negotiable: after PR 1 has merged into ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),",\nwe will NOT accept PR 2 based on a successful build of ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr2"),". To be safe, we insist on having\na successful build of ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"."),(0,i.kt)("p",null,"The big insight of a merge queue is that ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2")," could be started earlier.\nHere's a hypothetical timeline:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"time"),(0,i.kt)("th",{parentName:"tr",align:"center"},"PR 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"PR 2"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"start+pr1")," build"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"start+pr2")," build"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"start+pr1+pr2")," build"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"created"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1:01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"start"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"created"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2:01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"start"),(0,i.kt)("td",{parentName:"tr",align:"center"},"start")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"success"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5:01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"merged"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5:02"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"cancelled"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6:00"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7:00"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"success")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7:01"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"merged"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("p",null,"Why did we build ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr2"),", only to cancel it later? That job is needed if PR 2 happens to finish first,\nwhich might look like this:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"time"),(0,i.kt)("th",{parentName:"tr",align:"center"},"PR 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"PR 2"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"start+pr1")," build"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"start+pr2")," build"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"start+pr1+pr2")," build"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"created"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1:01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"start"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"created"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2:01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"start"),(0,i.kt)("td",{parentName:"tr",align:"center"},"start")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"success"),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5:01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"merged"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5:02"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"cancelled"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7:00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"success")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7:01"),(0,i.kt)("td",{parentName:"tr",align:"center"},"merged"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("p",null,"Shouldn't there be an extra column for ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr2+pr1"),", since that is what will end up in ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"? No,\nthe checked out files are the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),". The build validation only cares about the source\nfile content, not its Git history."),(0,i.kt)("p",null,"Note that as the number of active PR's increases, the number of branch combinations explodes.\nFor example if we have three concurrent PRs, we might need six jobs for\n",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr3"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr2+pr3"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2+pr3"),".\nBuilding all combinations could quickly exhaust our pool of machines."),(0,i.kt)("p",null,"To avoid exploding resource costs, we can skip combinations that seem relatively unlikely, and\nstill benefit from parallelism on average. As an extreme example, if we have high confidence that\nPR 1, PR 2, and PR 3 will succeed, maybe we only need one job ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2+pr3"),"; other combinations\ncan be tried only if it fails. Clearly there are many opportunities for a sophisticated implementation\nto significantly outperform a more rudimentary merge queue."),(0,i.kt)("h2",{id:"leveraging-rush-workspace-dependencies"},"Leveraging Rush workspace dependencies"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 Coming soon: This feature is not yet ready.")),(0,i.kt)("p",null,"Continuing the above example, suppose that PR 1 is a fix under ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a"),", and PR 2 is a fix under ",(0,i.kt)("inlineCode",{parentName:"p"},"project-b"),";\nthat is, the Git diff for each PR only affects file paths under one project folder. Also let's assume that within\nthe Rush workspace, no other projects depend on ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"project-b"),". This implies that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The source code built by ",(0,i.kt)("inlineCode",{parentName:"li"},"rush build --from project-a")," is identical for branches ",(0,i.kt)("inlineCode",{parentName:"li"},"start+pr1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"start+pr1+pr2"),"."),(0,i.kt)("li",{parentName:"ul"},"The source code built by ",(0,i.kt)("inlineCode",{parentName:"li"},"rush build --from project-b")," is identical for branches ",(0,i.kt)("inlineCode",{parentName:"li"},"start+pr2")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"start+pr1+pr2"),".")),(0,i.kt)("p",null,"These assumptions guarantee that PR 1 and PR 2 are completely independent. We can build them independently\nand safely merge their branches in any order. The merge queue does not need to build ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2")," at all."),(0,i.kt)("p",null,"Next, suppose instead that the ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file for ",(0,i.kt)("inlineCode",{parentName:"p"},"project-b")," specified a dependency on ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a"),".\nIn that case, the PR's are no longer independent: After PR 1 has merged, PR 2 cannot be safely merged\nwithout first verifying ",(0,i.kt)("inlineCode",{parentName:"p"},"start+pr1+pr2"),"."),(0,i.kt)("p",null,"This analysis relies on knowledge about dependencies between folders, which varies greatly between\nprogramming languages and build systems. Even within the ecosystem of JavaScript, the interpretation of\n",(0,i.kt)("strong",{parentName:"p"},"package.json")," files requires special considerations for PNPM, Rush+PNPM, Yarn, etc."),(0,i.kt)("p",null,"Merge queues often provide a basic facility for describing folder dependencies, maybe a glob that can\ndescribe static relationships such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},'"This folder has JavaScript code, and that folder has Golang code,\nso there cannot be any dependencies between them."')," OR"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},'"This folder only contains non-buildable files such as documentation, so ignore any diffs there."'))),(0,i.kt)("p",null,"However, in a busy monorepo with hundreds or thousands of projects, optimizing the merge queue requires\naccurately modeling fine-grained dependencies between project folders. To this end, we're collaborating on\na language-agnostic\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tiktok/project-impact-graph"},"project-impact-graph.yaml")," specification that services\nsuch as a merge queue can use to query project dependencies in any monorepo for any programming language.\nUsing a Rush plugin, this YAML file will get generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," and committed to Git, which enables\nthe merge queue service to efficiently query folder dependencies for any branch without requiring a Git checkout."),(0,i.kt)("h2",{id:"popular-merge-queues"},"Popular merge queues"),(0,i.kt)("p",null,"It's recommended to use a merge queue in your monorepo. Here's some possible options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub includes a built-in\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue"},"merge queue"),"\nthat can be used with or without GitHub Actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mergify.com/"},"Mergify")," provides an add-on service for GitHub with advanced optimizations.\nSee ",(0,i.kt)("a",{parentName:"li",href:"/pages/integrations/mergify"},"Integrations: Using Mergify with Rush")," for setup details."),(0,i.kt)("li",{parentName:"ul"},"GitLab includes a built-in ",(0,i.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html"},"merge trains")," feature")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If your organization is using a merge queue with Rush that isn't listed above, please add it.")))}g.isMDXComponent=!0}}]);