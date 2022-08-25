"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[7029],{158:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(6393);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(o),h=n,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||a;return o?r.createElement(d,i(i({ref:t},u),{},{components:o})):r.createElement(d,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5882:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=o(216),n=o(2228),a=(o(6393),o(158)),i=["components"],s={title:"Why one big repo\u2048"},p=void 0,l={unversionedId:"pages/intro/why_mono",id:"pages/intro/why_mono",title:"Why one big repo\u2048",description:"Open source NPM packages seem to be developed in lots of small GitHub repos. Shouldn't I do that?",source:"@site/docs/pages/intro/why_mono.md",sourceDirName:"pages/intro",slug:"/pages/intro/why_mono",permalink:"/pages/intro/why_mono",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/intro/why_mono.md",tags:[],version:"current",frontMatter:{title:"Why one big repo\u2048"},sidebar:"docsSidebar",previous:{title:"Welcome to Rush!",permalink:"/pages/intro/welcome"},next:{title:"Getting started",permalink:"/pages/intro/get_started"}},u={},m=[],c={toc:m};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Open source NPM packages seem to be developed in lots of small GitHub repos. Shouldn't I do that?")),(0,a.kt)("p",null,"Sure, if you're building isolated components, and it's not too important how they fit together. But business software doesn't seem to work that way. It's more like this:"),(0,a.kt)("p",null,"Most people start out by building a single web application, not a bunch of libraries. After your application ships, it keeps growing in size. Then one day you need to share some code with a different project, and you realize you've got a big rat's nest. Time to refactor!"),(0,a.kt)("p",null,'Clearly you must split this thing up into manageable components. NPM packages are the way to do that in JavaScript. Looking around, the convention seems to be "',(0,a.kt)("strong",{parentName:"p"},"one GitHub repo for each NPM package."),'" During a heroic week or two, you create 10 Git repos, split up your code, and give it a try...'),(0,a.kt)("p",null,"...but working with 10 Git repos turns out to be a big pain! There are just so many headaches:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Tunnel vision"),": If a colleague mostly does their work in repos #5 and #6, they seem to completely ignore pull requests from the other 8 repos. New repos spring into existence every day without you even knowing about it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cascading publishing"),": Propagating a fix from ",(0,a.kt)("strong",{parentName:"p"},"lib3")," down to your application project requires updating/building/publishing many Git repos in the right order: ",(0,a.kt)("strong",{parentName:"p"},"lib3")," --\x3e ",(0,a.kt)("strong",{parentName:"p"},"lib2")," --\x3e ",(0,a.kt)("strong",{parentName:"p"},"lib1")," --\x3e ",(0,a.kt)("strong",{parentName:"p"},"application"),". When ",(0,a.kt)("strong",{parentName:"p"},"lib3")," has frequent churn, this becomes really tedious. How will people even remember the right order to publish? The internet has lots of bodies to throw at this problem, but you have limited people, and they're very busy.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Downstream victims"),": When Bob publishes a change to ",(0,a.kt)("strong",{parentName:"p"},"lib3"),', it can take a while before all downstream projects get upgraded to use it. If there\'s a regression, it might be a week before Alice tries to run "npm update" in ',(0,a.kt)("strong",{parentName:"p"},"lib1")," and discovers the problem. By then, maybe Bob has left for his backpacking trip across Europe. Why should Alice shoulder the burden of fixing someone else's regression? Seems like every time she upgrades, something is broken!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Linking madness"),": The workaround is to use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/link"},"npm link")," to symlink your ",(0,a.kt)("strong",{parentName:"p"},"application")," directly to ",(0,a.kt)("strong",{parentName:"p"},"lib3")," for testing. But NPM creates symlinks via a global folder, which causes trouble if you need to work with multiple branches of ",(0,a.kt)("strong",{parentName:"p"},"lib3")," on the same laptop. And with 10+ libraries, it's hard to remember what is symlinked to what."))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},'"one repo per package"'),' model makes sense for isolated projects that are maintained by uncoordinated strangers. (Also, most of those libraries get updated fairly infrequently, which makes the problem easier.) Whereas in our example, everyone works at the same company, and the "libraries" act more like components of an integrated architecture. Code gets churned a lot, and a change in one place can easily break another part of the system. Building multiple projects together lets you run all the unit tests for every change, which moves responsibility for fixes where it belongs: To the person who originally introduced the change.'),(0,a.kt)("p",null,"The emergent principle becomes ",(0,a.kt)("strong",{parentName:"p"},'"one Git repo per team"'),", or even better ",(0,a.kt)("strong",{parentName:"p"},'"as few Git repos as possible to get the job done"'),"."),(0,a.kt)("div",null,(0,a.kt)("img",{src:"/images/home/mono-concept-h.svg",alt:"monorepo block diagram",style:{width:"50rem"}}),(0,a.kt)("p",null)),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://danluu.com/monorepo/"},"Lots")," ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@bebraw/the-case-for-monorepos-907c1361708a"},"of")," ",(0,a.kt)("a",{parentName:"p",href:"http://blog.shippable.com/our-journey-to-microservices-and-a-mono-repository"},"people"),' who build large scale business software seem to end up with all their code in one big "monorepo". JavaScript is just the last guy to join the party.'),(0,a.kt)("p",null,"The big concern with this strategy is obviously ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"build times")),". JavaScript tools are slower than compiled languages. If one project takes 1 minute to build, and you have 75 projects, in theory you could be looking at a ridiculous 75 minute build time. It seems intimidating, but with an industrial strength toolchain you can scale very far before build times become an issue. Most of our roadmap for Rush and ",(0,a.kt)("strong",{parentName:"p"},"gulp-core-build")," is focused on build times, and we're optimistic that there's still plenty of room for optimizations. With subset/incremental builds, you can in theory avoid rebuilding everything unless a change really does affect everything -- and for that kind of change, it's hard to argue that finding breaks early isn't worth the price of waiting for a longer build."))}h.isMDXComponent=!0}}]);