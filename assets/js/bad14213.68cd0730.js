"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8791],{158:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(6393);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=s,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9102:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=t(9122),s=t(2501),o=(t(6393),t(158)),a=["components"],i={title:"rush link"},l=void 0,u={unversionedId:"pages/commands/rush_link",id:"pages/commands/rush_link",title:"rush link",description:"See also",source:"@site/docs/pages/commands/rush_link.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_link",permalink:"/pages/commands/rush_link",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_link.md",tags:[],version:"current",frontMatter:{title:"rush link"},sidebar:"docsSidebar",previous:{title:"rush install",permalink:"/pages/commands/rush_install"},next:{title:"rush list",permalink:"/pages/commands/rush_list"}},c={},p=[{value:"See also",id:"see-also",level:2}],m={toc:p},f="wrapper";function d(e){var r=e.components,t=(0,s.Z)(e,a);return(0,o.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'usage: rush link [-h] [-f]\n\nCreate node_modules symlinks for all projects. This operation is normally\nperformed automatically as part of "rush install" or "rush update". You\nshould only need to use "rush link" if you performed "rush unlink" for some\nreason, or if you specified the "--no-link" option for "rush install" or\n"rush update".\n\nOptional arguments:\n  -h, --help   Show this help message and exit.\n  -f, --force  Deletes and recreates all links, even if the filesystem state\n               seems to indicate that this is unnecessary.\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/commands/rush_unlink"},"rush unlink"))))}d.isMDXComponent=!0}}]);