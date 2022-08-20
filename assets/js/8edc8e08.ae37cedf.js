"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6557],{158:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(6393);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),h=s,d=m["".concat(u,".").concat(h)]||m[h]||l[h]||a;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function h(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3797:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(216),s=t(2228),a=(t(6393),t(158)),o=["components"],i={title:"rush purge"},u=void 0,c={unversionedId:"pages/commands/rush_purge",id:"pages/commands/rush_purge",title:"rush purge",description:"",source:"@site/docs/pages/commands/rush_purge.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_purge",permalink:"/pages/commands/rush_purge",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_purge.md",tags:[],version:"current",frontMatter:{title:"rush purge"},sidebar:"docsSidebar",previous:{title:"rush publish",permalink:"/pages/commands/rush_publish"},next:{title:"rush rebuild",permalink:"/pages/commands/rush_rebuild"}},p={},l=[],m={toc:l};function h(e){var r=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'usage: rush purge [-h] [--unsafe]\n\nThe "rush purge" command is used to delete temporary files created by Rush.\nThis is useful if you are having problems and suspect that cache files may be\ncorrupt.\n\nOptional arguments:\n  -h, --help  Show this help message and exit.\n  --unsafe    (UNSAFE!) Also delete shared files such as the package manager\n              instances stored in the ".rush" folder in the user\'s home\n              directory. This is a more aggressive fix that is NOT SAFE to\n              run in a live environment because it will cause other\n              concurrent Rush processes to fail.\n')))}h.isMDXComponent=!0}}]);