"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[1400],{158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),d=a,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(9122),a=r(2501),o=(r(6393),r(158)),s=["components"],i={title:"rush setup (experimental)"},p=void 0,c={unversionedId:"pages/commands/rush_setup",id:"pages/commands/rush_setup",title:"rush setup (experimental)",description:"",source:"@site/docs/pages/commands/rush_setup.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_setup",permalink:"/pages/commands/rush_setup",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_setup.md",tags:[],version:"current",frontMatter:{title:"rush setup (experimental)"},sidebar:"docsSidebar",previous:{title:"rush scan",permalink:"/pages/commands/rush_scan"},next:{title:"rush tab-complete",permalink:"/pages/commands/rush_tab-complete"}},u={},l=[],m={toc:l},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: rush setup [-h]\n\n(EXPERIMENTAL) Invoke this command before working in a new repo to ensure\nthat any required prerequisites are installed and permissions are configured.\nThe initial implementation configures the NPM registry credentials. More\nfeatures will be added later.\n\nOptional arguments:\n  -h, --help  Show this help message and exit.\n")))}f.isMDXComponent=!0}}]);