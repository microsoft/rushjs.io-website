"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8063],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(9122),r=n(2501),i=(n(6393),n(158)),o=["components"],s={title:"Using Mergify with Rush"},l=void 0,p={unversionedId:"pages/integrations/mergify",id:"pages/integrations/mergify",title:"Using Mergify with Rush",description:"Mergify provides an add-on service for GitHub offering expanded merge queue capabilities.",source:"@site/docs/pages/integrations/mergify.md",sourceDirName:"pages/integrations",slug:"/pages/integrations/mergify",permalink:"/pages/integrations/mergify",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/integrations/mergify.md",tags:[],version:"current",frontMatter:{title:"Using Mergify with Rush"},sidebar:"docsSidebar",previous:{title:"Installation variants",permalink:"/pages/advanced/installation_variants"},next:{title:"Creating Rush plugins (experimental)",permalink:"/pages/extensibility/creating_plugins"}},c={},u=[{value:"A basic example",id:"a-basic-example",level:2},{value:"Using partitions to increase parallelism",id:"using-partitions-to-increase-parallelism",level:2},{value:"Automated actions",id:"automated-actions",level:2},{value:"See also",id:"see-also",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mergify.com/"},"Mergify")," provides an add-on service for GitHub offering expanded ",(0,i.kt)("strong",{parentName:"p"},"merge queue")," capabilities.\nIf you're new to merge queues, start with ",(0,i.kt)("a",{parentName:"p",href:"/pages/best_practices/merge_queue"},"Best Practices: Enabling a merge queue"),"\nfrom the Rush docs and ",(0,i.kt)("a",{parentName:"p",href:"https://blog.mergify.com/whats-a-merge-queue-and-why-use-it/"},"What's a Merge Queue and Why Use it?"),"\nfrom Mergify."),(0,i.kt)("p",null,"The general problem of optimizing queues involves many tradeoffs and heuristics for choosing\nwhich work to parallelize or combine. This creates many opportunities for optimization and differentiation\nbetween implementors. Mergify's service targets large scale, high velocity monorepos. Their\n",(0,i.kt)("a",{parentName:"p",href:"https://mergify.com/alternative/merge-queue-benchmark"},"Merge Queue Benchmark"),"\npresents a feature matrix highlighting differences between various systems."),(0,i.kt)("h2",{id:"a-basic-example"},"A basic example"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mergify.com/configuration/file-format"},"Mergify configuration file")," is typically called\n",(0,i.kt)("inlineCode",{parentName:"p"},".mergify.yml")," and defines most of the behavior. Let's summarize the basic lifecycle of a pull request:\nOnce a PR is created in your repository, Mergify will detect it and check it against the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.mergify.com/configuration/file-format/#pull-request-rules"},(0,i.kt)("inlineCode",{parentName:"a"},"pull-request-rules")),". This ruleset\nallows you to automate and adapt a wide variety of workflows."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pull-request-rules")," contain conditions and actions, specifically the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.mergify.com/workflow/actions/queue/"},(0,i.kt)("inlineCode",{parentName:"a"},"queue"))," action. Once a PR validates the\nconditions of a pull request rule, it will trigger its action causing the PR to be queued.\nHere's an example config file:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},".mergify.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"queue_rules:\n  - name: default\n    merge_conditions:\n      - '#approved-reviews-by>=2'\n      - check-success=Travis CI - Pull Request\n\npull_request_rules:\n  - name: merge using the merge queue\n    conditions:\n      - base=main\n      - label=queue\n    actions:\n      queue:\n")),(0,i.kt)("p",null,"Above we have defined one unique merge queue named ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," with its own set of conditions. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"merge_conditions")," will need to be validated before the PR can be merged."),(0,i.kt)("h2",{id:"using-partitions-to-increase-parallelism"},"Using partitions to increase parallelism"),(0,i.kt)("p",null,'The key to optimizing a merge queue is identifying jobs that can be performed in parallel because\ntheir Git diffs are independent. Two PR\'s are "independent" if (1) their diffs do not involve the same files\nand (2) the files "impacted" by the two diffs do not overlap, according to the dependency graph.\nRush\'s dependency analysis operates at the granularity of Rush projects, not individual files.\nIn terms of ',(0,i.kt)("a",{parentName:"p",href:"/pages/developer/selecting_subsets"},"Rush project selectors")," it means that\n",(0,i.kt)("inlineCode",{parentName:"p"},"rush list --impacted-by git:origin/main")," must not have any overlap between the two PR's."),(0,i.kt)("p",null,"Mergify's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mergify.com/merge-queue/partitions/"},"partitions")," are analogous to Rush projects\nin this analysis; each partition defines a collection of a files, with the ability to declare dependency\nrelationships between partitions, which can then determine whether jobs build in parallel or not."),(0,i.kt)("p",null,"As an example, suppose your Rush workspace contains three projects called ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"project-b"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"project-c"),".\nHere's a sample hard-wired configuration:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},".mergify.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"partition_rules:\n  - name: project-a\n    conditions:\n      - files~=^apps/project-a\n\n  - name: project-a\n    conditions:\n      - files~=^apps/project-a\n\n  - name: project-a\n    conditions:\n      - files~=^apps/project-c\n\nqueue_rules:\n  - name: default\n    merge_conditions:\n      - and:\n          - or:\n              - queue-partition-name!=project-a\n              - check-success=ciA\n          - or:\n              - queue-partition-name!=project-a\n              - check-success=ciB\n          - or:\n              - queue-partition-name!=project-a\n              - check-success=ciC\n\npull_request_rules:\n  - name: merge using the merge queue\n    conditions:\n      - base=main\n      - label=queue\n    actions:\n      queue:\n")),(0,i.kt)("p",null,"In this example, if a PR modifies files under the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a"),", the partition and merge queue\nthat will be used to check and merge the PR automatically will be the one of ",(0,i.kt)("inlineCode",{parentName:"p"},"project-a"),"."),(0,i.kt)("p",null,"If a PR modifies files from two or more projects at the same time, the PR will be checked\nin every corresponding partition."),(0,i.kt)("p",null,"In a large monorepo, hand-coding the ",(0,i.kt)("inlineCode",{parentName:"p"},"files~=")," condition is impractical; it will need to be generated\nusing a script."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1",(0,i.kt)("strong",{parentName:"p"},"Coming soon")),(0,i.kt)("p",{parentName:"blockquote"},"We're collaborating on a vendor-agnostic\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tiktok/project-impact-graph"},"project-impact-graph.yaml")," specification\nand accompanying Rush plugin that will enable services such as Mergify to query the ",(0,i.kt)("strong",{parentName:"p"},"rush.json"),"\ndependency graph directly.")),(0,i.kt)("h2",{id:"automated-actions"},"Automated actions"),(0,i.kt)("p",null,"Mergify also includes a workflow automation feature that can automate tasks such as adding comments,\nassigning reviewers, or adding labels. For example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},".mergify.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pull_request_rules:\n  - name: comment on project-a pull request\n    conditions:\n      - files~=^apps/project-a\n    actions:\n      comment:\n        message: This pull request modifies a file in project-a\n\n  - name: assign review to a project-b reviewer\n    conditions:\n      - files~=^apps/project-b\n    actions:\n      assign:\n        add_users:\n          - projectb_reviewer\n\n  - name: add label on project-c pull request\n    conditions:\n      - files~=^apps/projectC\n    actions:\n      label:\n        toggle:\n          - project-c\n")),(0,i.kt)("p",null,"Some other useful actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mergify.com/workflow/actions/backport/"},"Backport"),": Copy a pull request to another branch once it is merged."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mergify.com/workflow/actions/update/"},"Update"),": Update the pull request branch with its base branch.")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/best_practices/merge_queue"},"Best Practices: Enabling a merge queue")," from the Rush docs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mergify.com/"},"Mergify Documentation"))))}f.isMDXComponent=!0}}]);