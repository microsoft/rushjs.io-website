"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6557],{5242:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(3929);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),h=s,d=m["".concat(u,".").concat(h)]||m[h]||l[h]||o;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function h(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8646:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(394),s=t(1614),o=(t(3929),t(5242)),a=["components"],i={title:"rush purge"},u=void 0,c={unversionedId:"pages/commands/rush_purge",id:"pages/commands/rush_purge",title:"rush purge",description:"",source:"@site/docs/pages/commands/rush_purge.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_purge",permalink:"/pages/commands/rush_purge",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_purge.md",tags:[],version:"current",frontMatter:{title:"rush purge"},sidebar:"docsSidebar",previous:{title:"rush publish",permalink:"/pages/commands/rush_publish"},next:{title:"rush rebuild",permalink:"/pages/commands/rush_rebuild"}},p={},l=[],m={toc:l};function h(e){var r=e.components,t=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'usage: rush purge [-h] [--unsafe]\n\nThe "rush purge" command is used to delete temporary files created by Rush.\nThis is useful if you are having problems and suspect that cache files may be\ncorrupt.\n\nOptional arguments:\n  -h, --help  Show this help message and exit.\n  --unsafe    (UNSAFE!) Also delete shared files such as the package manager\n              instances stored in the ".rush" folder in the user\'s home\n              directory. This is a more aggressive fix that is NOT SAFE to\n              run in a live environment because it will cause other\n              concurrent Rush processes to fail.\n')))}h.isMDXComponent=!0}}]);