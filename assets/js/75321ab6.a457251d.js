"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4199],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||l[h]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(216),a=n(2228),s=(n(6393),n(158)),i=["components"],o={title:"rush add"},c=void 0,d={unversionedId:"pages/commands/rush_add",id:"pages/commands/rush_add",title:"rush add",description:"",source:"@site/docs/pages/commands/rush_add.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_add",permalink:"/pages/commands/rush_add",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_add.md",tags:[],version:"current",frontMatter:{title:"rush add"},sidebar:"docsSidebar",previous:{title:'The "rush-lib" API',permalink:"/pages/extensibility/api"},next:{title:"rush build",permalink:"/pages/commands/rush_build"}},p={},l=[],u={toc:l};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'usage: rush add [-h] -p PACKAGE [--exact] [--caret] [--dev] [-m] [-s] [--all]\n\nAdds specified package(s) to the dependencies of the current project (as\ndetermined by the current working directory) and then runs "rush update". If\nno version is specified, a version will be automatically detected (typically\neither the latest version or a version that won\'t break the\n"ensureConsistentVersions" policy). If a version range (or a workspace range)\nis specified, the latest version in the range will be used. The version will\nbe automatically prepended with a tilde, unless the "--exact" or "--caret"\nflags are used. The "--make-consistent" flag can be used to update all\npackages with the dependency.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -p PACKAGE, --package PACKAGE\n                        (Required) The name of the package which should be\n                        added as a dependency. A SemVer version specifier can\n                        be appended after an "@" sign. WARNING: Symbol\n                        characters are usually interpreted by your shell, so\n                        it\'s recommended to use quotes. For example, write\n                        "rush add --package "example@^1.2.3"" instead of\n                        "rush add --package example@^1.2.3". To add multiple\n                        packages, write "rush add --package foo --package\n                        bar".\n  --exact               If specified, the SemVer specifier added to the\n                        package.json will be an exact version (e.g. without\n                        tilde or caret).\n  --caret               If specified, the SemVer specifier added to the\n                        package.json will be a prepended with a "caret"\n                        specifier ("^").\n  --dev                 If specified, the package will be added to the\n                        "devDependencies" section of the package.json\n  -m, --make-consistent\n                        If specified, other packages with this dependency\n                        will have their package.json files updated to use the\n                        same version of the dependency.\n  -s, --skip-update     If specified, the "rush update" command will not be\n                        run after updating the package.json files.\n  --all                 If specified, the dependency will be added to all\n                        projects.\n')))}h.isMDXComponent=!0}}]);