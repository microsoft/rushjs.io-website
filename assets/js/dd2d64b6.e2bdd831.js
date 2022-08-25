"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4668],{158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(216),a=r(2228),o=(r(6393),r(158)),i=["components"],s={title:'The "rush-lib" API'},l=void 0,c={unversionedId:"pages/extensibility/api",id:"pages/extensibility/api",title:'The "rush-lib" API',description:"Rush provides an API for use by automation scripts. It is documented in the integrated API reference for all Rush Stack projects:",source:"@site/docs/pages/extensibility/api.md",sourceDirName:"pages/extensibility",slug:"/pages/extensibility/api",permalink:"/pages/extensibility/api",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/extensibility/api.md",tags:[],version:"current",frontMatter:{title:'The "rush-lib" API'},sidebar:"docsSidebar",previous:{title:"Creating Rush plugins (experimental)",permalink:"/pages/extensibility/creating_plugins"},next:{title:"rush add",permalink:"/pages/commands/rush_add"}},p={},u=[{value:"Reading the rush.json configuration",id:"reading-the-rushjson-configuration",level:2},{value:"Modifying package.json files",id:"modifying-packagejson-files",level:2},{value:"Generating a README.md summary",id:"generating-a-readmemd-summary",level:2}],d={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rush provides an API for use by automation scripts. It is documented in the integrated API reference for all Rush Stack projects:"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0"," ",(0,o.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/rush-lib/"},"API Reference: @microsoft/rush-lib package")),(0,o.kt)("p",null,"Below are some usage examples."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Although these code samples are presented as plain JavaScript, we strongly recommend to use TypeScript and model your scripts as regular Rush projects. It is more work to set up initially, but it generally saves time and simplifies maintenance in the long run.")),(0,o.kt)("h2",{id:"reading-the-rushjson-configuration"},"Reading the rush.json configuration"),(0,o.kt)("p",null,"Rather than trying to load ",(0,o.kt)("strong",{parentName:"p"},"rush.json")," as a JSON file, it is recommended to use the ",(0,o.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/rush-lib.rushconfiguration/"},"RushConfiguration")," class which provides a richer set of data views."),(0,o.kt)("p",null,"For example, this script will show all the Rush projects and their folders:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const rushLib = require('@microsoft/rush-lib');\n\n// loadFromDefaultLocation() will search parent folders to find \"rush.json\" and then\n// take care of parsing it and loading related config files.\nconst rushConfiguration = rushLib.RushConfiguration.loadFromDefaultLocation({\n  startingFolder: process.cwd()\n});\n\nfor (const project of rushConfiguration.projects) {\n  console.log(project.packageName + ':');\n  console.log('  ' + project.projectRelativeFolder);\n}\n")),(0,o.kt)("h2",{id:"modifying-packagejson-files"},"Modifying package.json files"),(0,o.kt)("p",null,"If you want to modify a ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file, the ",(0,o.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/rush-lib.packagejsoneditor/"},"PackageJsonEditor")," class provides helpful validation and normalization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const rushLib = require('@microsoft/rush-lib');\n\nconst rushConfiguration = rushLib.RushConfiguration.loadFromDefaultLocation({\n  startingFolder: process.cwd()\n});\n\n// This will find \"@rushstack/ts-command-line\" in rush.json, without needing to specify the NPM scope\nconst project = rushConfiguration.findProjectByShorthandName('ts-command-line');\n\n// Add lodash as an optional dependency\nproject.packageJsonEditor.addOrUpdateDependency('lodash', '4.17.15', 'optionalDependencies');\n\n// Save the modified package.json file\nproject.packageJsonEditor.saveIfModified();\n")),(0,o.kt)("h2",{id:"generating-a-readmemd-summary"},"Generating a README.md summary"),(0,o.kt)("p",null,"For a more realistic example, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/repo-scripts/repo-toolbox/src/ReadmeAction.ts"},"repo-toolbox/src/ReadmeAction.ts")," tool uses these APIs to generate the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/README.md#published-packages"},"README.md")," inventory for the Rush Stack monorepo."))}h.isMDXComponent=!0}}]);