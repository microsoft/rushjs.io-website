"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[7357],{158:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(6393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),h=n,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(216),n=a(2228),o=(a(6393),a(158)),s=["components"],i={title:"Welcome to Rush!"},p=void 0,l={unversionedId:"pages/intro/welcome",id:"pages/intro/welcome",title:"Welcome to Rush!",description:"Rush makes life easier for JavaScript developers who build and publish many NPM packages at once. If you're looking to consolidate all your projects into a single repo, you came to the right place! Rush is a fast, professional solution for managing this scenario. It gives you:",source:"@site/docs/pages/intro/welcome.md",sourceDirName:"pages/intro",slug:"/pages/intro/welcome",permalink:"/pages/intro/welcome",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/intro/welcome.md",tags:[],version:"current",frontMatter:{title:"Welcome to Rush!"},sidebar:"docsSidebar",next:{title:"Why one big repo\u2048",permalink:"/pages/intro/why_mono"}},c={},u=[],m={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/images/rush.svg",alt:"Rush",title:"Rush",style:{width:"12rem",paddingBottom:"1rem"}}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rush")," makes life easier for JavaScript developers who build and publish many NPM packages at once. If you're looking to consolidate all your projects into a single repo, you came to the right place! Rush is a fast, professional solution for managing this scenario. It gives you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A single NPM install:"),' In one step, Rush installs all the dependencies for all your projects into a common folder. This is not just a "package.json" file at the root of your repo (which might set you up to accidentally ',(0,o.kt)("inlineCode",{parentName:"p"},"require()"),' a sibling\'s dependencies). Instead, Rush uses symlinks to reconstruct an accurate "node_modules" folder for each project, without any of the limitations or glitches that seem to plague other approaches.'),(0,o.kt)("p",{parentName:"li"},"\u23f5 ",(0,o.kt)("strong",{parentName:"p"},"This algorithm supports the ",(0,o.kt)("a",{parentName:"strong",href:"../../maintainer/package_managers"},"PNPM, NPM, and Yarn")," package managers."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic local linking:")," Inside a Rush repo, all your projects are automatically symlinked to each other. When you make a change, you can see the downstream effects without publishing anything, and without any ",(0,o.kt)("inlineCode",{parentName:"p"},"npm link")," headaches. If you don't want certain projects to get linked, that's supported, too.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fast builds:")," Rush detects your dependency graph and builds your projects in the right order. If two packages don't directly depend on each other, Rush parallelizes their build as separate NodeJS processes (and shows live console output in a ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/stream-collator"},"readable order"),"). In practice this multi-process approach can yield more significant speedups than all those async functions in your single-threaded Gulpfile.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Subset and incremental builds:")," If you only plan to work with a few projects from your repo, ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild --to <project>")," does a clean build of just your upstream dependencies. After you make changes, ",(0,o.kt)("inlineCode",{parentName:"p"},"rush rebuild --from <project>")," does a clean build of only the affected downstream projects. And if your toolchain is ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/package-deps-hash"},"package-deps-hash")," enabled, ",(0,o.kt)("inlineCode",{parentName:"p"},"rush build")," delivers a powerful cross-project incremental build (that also supports subset builds).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cyclic dependencies:")," If you have hammers that build hammer-factory-factories, Rush has you covered! When a package indirectly depends on an older version of itself, projects in the cycle use the last published version, whereas other projects still get the latest bits.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bulk publishing:")," When it's time to do a release, Rush can detect which packages have changes, automatically bump all the appropriate version numbers, and run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm publish")," in each folder. If you like, configure your server to automatically run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush publish")," every hour.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Changelog tracking:")," Whenever a PR is created, you can require developers to provide a major/minor/patch log entry for the affected projects. During publishing, these changes will be automatically aggregated into a nicely formatted ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/libraries/node-core-library/CHANGELOG.md"},"CHANGELOG.md")," file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Enterprise policies:")," Want to review new libraries before developers add them to package.json, but avoid hassling people about already approved cases? Want to enforce that all your projects depend on the same library version numbers? Are unprofessional personal e-mail addresses accidentally showing up in your company's Git history? Rush can help maintain a consistent ecosystem when you've got many developers and many projects in the mix.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Lots more!")," Rush was created by the platform team for ",(0,o.kt)("a",{parentName:"p",href:"http://aka.ms/spfx"},"Microsoft SharePoint"),". We build hundreds of production NPM packages every day, from internal and public Git repositories, for third party SDKs and live services with millions of users. If there's an important package management problem that needs solvin', it's likely to end up as a feature for Rush."))))}h.isMDXComponent=!0}}]);