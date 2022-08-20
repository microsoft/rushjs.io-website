"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8649],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(216),r=n(2228),o=(n(6393),n(158)),i=["components"],s={title:"NPM vs PNPM vs Yarn"},p=void 0,l={unversionedId:"pages/maintainer/package_managers",id:"pages/maintainer/package_managers",title:"NPM vs PNPM vs Yarn",description:"Before you can start installing a JavaScript library, you need to choose which package manager you will use. (Our community loves flexibility and choices, so of course there's not just one!) Rush supports the three most popular package managers. In chronological order:",source:"@site/docs/pages/maintainer/package_managers.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/package_managers",permalink:"/pages/maintainer/package_managers",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/package_managers.md",tags:[],version:"current",frontMatter:{title:"NPM vs PNPM vs Yarn"},sidebar:"docsSidebar",previous:{title:"Recommended settings",permalink:"/pages/maintainer/recommended_settings"},next:{title:"Enabling policies",permalink:"/pages/maintainer/setup_policies"}},c={},u=[{value:"Which one should I use with Rush?",id:"which-one-should-i-use-with-rush",level:2},{value:"Considerations for NPM",id:"considerations-for-npm",level:4},{value:"Considerations for PNPM",id:"considerations-for-pnpm",level:4},{value:"Considerations for Yarn",id:"considerations-for-yarn",level:4},{value:"Specifying your package manager",id:"specifying-your-package-manager",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before you can start installing a JavaScript library, you need to choose which package manager you will use. (Our community loves flexibility and choices, so of course there's not just one!) Rush supports the three most popular package managers. In chronological order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/getting-started/what-is-npm"},"NPM"),": the tool that pioneered the packaging standard and registry protocol used by most JavaScript package managers today. The tool's developers also maintain the npmjs.com registry, which is currently the most popular place to distribute open source JavaScript libraries.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"Yarn"),": a complete rewrite of the NPM tool that preserves the same installation model, but promises faster installations, better reliability, and some cool new features (e.g. Yarn workspaces) that facilitate large scale development.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://pnpm.js.org/"},"PNPM"),": A fundamentally new installation model that solves the ",(0,o.kt)("a",{parentName:"p",href:"../../advanced/phantom_deps"},'"phantom dependency" and "NPM doppelganger"'),'" problems, while cleverly making use of ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Symbolic_link"},"symlinks")," to remain 100% compatible with the NodeJS module resolution standard."))),(0,o.kt)("h2",{id:"which-one-should-i-use-with-rush"},"Which one should I use with Rush?"),(0,o.kt)("p",null,"The answer depends on your needs. The Rush developers don't endorse a particular package manager, but here are some observations based on our experience from managing our own monorepos:"),(0,o.kt)("h4",{id:"considerations-for-npm"},"Considerations for NPM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'NPM is the most compatible choice, and the most forgiving for dealing with "bad" packages.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you choose NPM, you may need to use an older release. NPM 5.x and 6.x are both known to have unresolved regressions that cause trouble in Rush repos. NPM ",(0,o.kt)("strong",{parentName:"p"},"4.5.0")," is the most recent version that's known to work very reliably, but unfortunately it's pretty old. (We'd greatly appreciate community help improving this situation. We're using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/issues/886"},"GitHub issue #886")," to track this effort.)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Before reporting a Rush bug involving the NPM package manager, first try downgrading to ",(0,o.kt)("inlineCode",{parentName:"em"},'"npmVersion": "4.5.0"'),". If that eliminates the repro, then your issue is likely an NPM regression and may not be fixable in the Rush code base. We still accept these issues, but we track them differently.")))),(0,o.kt)("h4",{id:"considerations-for-pnpm"},"Considerations for PNPM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PNPM is the only option that solves the ",(0,o.kt)("a",{parentName:"p",href:"../../advanced/npm_doppelgangers"},"NPM doppelgangers")," problem. In a complex monorepo, doppelgangers sometimes cause a lot of trouble, so PNPM has an important advantage in this regard.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Although PNPM\'s symlinking strategy correctly follows the modern NodeJS module resolution standard, many legacy packages do not, which causes compatibility problems. Teams who migrate existing projects from Yarn/NPM to PNPM often encounter "bad packages" that need workarounds or fixes. The incompatibilities generally reflect real problems with those packages: (1) forgetting to list dependencies in the ',(0,o.kt)("strong",{parentName:"p"},"package.json"),' file, or (2) implementing homebrew module resolution without handling symlinks according to the standard. Most "bad" packages have straightforward fixes, but it may seem daunting for a small team. (The ',(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/mThkzAT"},"PNPM Discord chat room")," is a great resource for help, though.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PNPM is newer and less widely used than NPM or Yarn, but it's a solid piece of software. Microsoft uses PNPM in Rush repos with hundreds of projects and hundreds of PRs per day, and we've found it to be very fast and reliable.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PNPM is currently the only option that supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"--strict-peer-dependencies")," protection (see ",(0,o.kt)("inlineCode",{parentName:"p"},'"strictPeerDependencies"')," in ",(0,o.kt)("strong",{parentName:"p"},"rush.json"),")."))),(0,o.kt)("h4",{id:"considerations-for-yarn"},"Considerations for Yarn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rush's support for Yarn is relatively new and unproven, so we're eager to hear about issues and get them fixed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Yarn installs faster than NPM (although somewhat slower than PNPM).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Yarn's \"workspaces\" are not used in a Rush repo, since they rely on an installation model that doesn't protect against phantom dependencies. Rush's linking strategy is mostly equivalent to workspaces, however."))),(0,o.kt)("h2",{id:"specifying-your-package-manager"},"Specifying your package manager"),(0,o.kt)("p",null,"To change your package manager, edit the ",(0,o.kt)("strong",{parentName:"p"},"rush.json")," file and uncomment one of the three fields (",(0,o.kt)("inlineCode",{parentName:"p"},"npmVersion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmVersion"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarnVersion"),"):"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rush.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/**\n  * The next field selects which package manager should be installed and determines its version.\n  * Rush installs its own local copy of the package manager to ensure that your build process\n  * is fully isolated from whatever tools are present in the local environment.\n  *\n  * Specify one of: "pnpmVersion", "npmVersion", or "yarnVersion".  See the Rush documentation\n  * for details about these alternatives.\n  */\n"pnpmVersion": "2.15.1",\n\n// "npmVersion": "4.5.0",\n// "yarnVersion": "1.9.4",\n')),(0,o.kt)("p",null,"After changing the setting, delete your old shrinkwrap file and other package manager specific files from the ",(0,o.kt)("strong",{parentName:"p"},"common/config/rush")," folder. (Otherwise Rush will complain about unsupported config files.) Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update --full --purge"),". That's it!"))}h.isMDXComponent=!0}}]);