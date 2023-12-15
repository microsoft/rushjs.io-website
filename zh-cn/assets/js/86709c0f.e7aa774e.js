"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6718],{158:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(6393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),h=i,g=m["".concat(l,".").concat(h)]||m[h]||c[h]||s;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=t(9122),i=t(2501),s=(t(6393),t(158)),r=["components"],o={title:"Creating Rush plugins (experimental)"},l=void 0,p={unversionedId:"pages/extensibility/creating_plugins",id:"pages/extensibility/creating_plugins",title:"Creating Rush plugins (experimental)",description:"Rush plugins enable repository maintainers to:",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/extensibility/creating_plugins.md",sourceDirName:"pages/extensibility",slug:"/pages/extensibility/creating_plugins",permalink:"/zh-cn/pages/extensibility/creating_plugins",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/extensibility/creating_plugins.md",tags:[],version:"current",frontMatter:{title:"Creating Rush plugins (experimental)"},sidebar:"docsSidebar",previous:{title:"Using Mergify with Rush",permalink:"/zh-cn/pages/integrations/mergify"},next:{title:'The "rush-lib" API',permalink:"/zh-cn/pages/extensibility/api"}},u={},m=[{value:"Creating a plugin package",id:"creating-a-plugin-package",level:2},{value:"Common extensibility scenarios",id:"common-extensibility-scenarios",level:2},{value:"Defining a Rush custom command",id:"defining-a-rush-custom-command",level:3},{value:"Loading a code module",id:"loading-a-code-module",level:3},{value:"Defining a config file for your plugin",id:"defining-a-config-file-for-your-plugin",level:3},{value:"See also",id:"see-also",level:2}],c={toc:m},h="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.kt)(h,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Rush plugins enable repository maintainers to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Share common Rush configuration across multiple monorepos"),(0,s.kt)("li",{parentName:"ul"},"Extend Rush's base functionality with custom features"),(0,s.kt)("li",{parentName:"ul"},"Prototype new feature ideas before officially contributing them to Rush")),(0,s.kt)("h2",{id:"creating-a-plugin-package"},"Creating a plugin package"),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"plugin package")," is an NPM package that provides one or more ",(0,s.kt)("strong",{parentName:"p"},"Rush plugins"),".\nThe plugins are described by a ",(0,s.kt)("strong",{parentName:"p"},"plugin manifest")," file. This file is always named\n",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/pages/configs/rush-plugin-manifest_json"},"rush-plugin-manifest.json"),"\nand found in same folder as the ",(0,s.kt)("strong",{parentName:"p"},"package.json")," file."),(0,s.kt)("h2",{id:"common-extensibility-scenarios"},"Common extensibility scenarios"),(0,s.kt)("h3",{id:"defining-a-rush-custom-command"},"Defining a Rush custom command"),(0,s.kt)("p",null,"A plugin can define new commands and parameters that extend Rush's command-line,\nusing the same ",(0,s.kt)("strong",{parentName:"p"},"command-line.json")," file format that is used to implement\n",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/pages/maintainer/custom_commands"},"Rush custom commands"),"."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"rush-example-plugin/rush-plugin-manifest.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/rush-plugin-manifest.schema.json",\n  "plugins": [\n    {\n      "pluginName": "check-readme",\n\n      "description": "Adds a custom command \\"rush check-readme\\" that validates each project\'s README.md",\n\n      /**\n       * (Optional) A path to a "command-line.json" file that defines Rush command line actions\n       * and parameters contributed by this plugin.  This config file has the same JSON schema\n       * as Rush\'s "common/config/rush/command-line.json" file.\n       */\n      "commandLineJsonFilePath": "./command-line.json"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"rush-example-plugin/command-line.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/command-line.schema.json",\n  "commands": [\n    {\n      "name": "check-readme",\n      "commandKind": "bulk",\n      "summary": "Validates a project\'s README.md to make sure it conforms to company policy",\n      "shellCommand": "node <packageFolder>/lib/start.js",\n      "safeForSimultaneousRushProcesses": true\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Example project for this scenario:\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bytesfriends/rush-plugins/tree/main/rush-plugins/rush-sort-package-json"},"rush-sort-package-json")," from ",(0,s.kt)("strong",{parentName:"p"},"bytesfriends")),(0,s.kt)("h3",{id:"loading-a-code-module"},"Loading a code module"),(0,s.kt)("p",null,"A plugin can use the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/rush-sdk"},"@rushstack/rush-sdk")," APIs\nto register handlers for Rush events and services. This is specified using the ",(0,s.kt)("inlineCode",{parentName:"p"},"entryPoint")," setting\nin the plugin manifest:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"rush-example-plugin/rush-plugin-manifest.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/rush-plugin-manifest.schema.json",\n  "plugins": [\n    {\n      "pluginName": "check-readme",\n      "description": "Adds a custom command \\"rush check-readme\\" that validates each project\'s README.md",\n\n      /**\n       * (Optional) A path to a JavaScript code module that implements the "IRushPlugin" interface.\n       * This module can use the "@rushstack/rush-sdk" API to register handlers for Rush events\n       * and services.  The module path is relative to the folder containing the "package.json" file.\n       */\n      "entryPoint": "lib/RushExamplePlugin.js"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"The plugin module should have a ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," export that is an implementation of the\n",(0,s.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/rush-lib.irushplugin/"},"IRushPlugin")," interface."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"rush-example-plugin/src/RushExamplePlugin.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import type { IRushPlugin, RushSession, RushConfiguration } from '@rushstack/rush-sdk';\n\nexport interface IRushExamplePluginOptions {}\n\nexport class RushExamplePlugin implements IRushPlugin {\n  public readonly pluginName: string = 'RushExamplePlugin';\n\n  public constructor(options: IRushExamplePluginOptions) {\n    // Add your initialization here\n  }\n\n  public apply(rushSession: RushSession, rushConfiguration: RushConfiguration): void {\n    rushSession.hooks.initialize.tap(this.pluginName, () => {\n      const logger: ILogger = rushSession.getLogger(this.pluginName);\n      logger.terminal.writeLine('Add your custom logic here');\n    });\n  }\n}\n\nexport default { RushExamplePlugin };\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/rush-lib.rushsession/"},"RushSession.hooks")," API exposes various\n",(0,s.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/rush-lib.rushlifecyclehooks/"},"lifecycle hooks")," that your plugin can\nuse to register its handlers. The hook system is based on the popular\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tapable"},"tapable")," framework familiar from Webpack."),(0,s.kt)("p",null,"Example project for this scenario:\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/rush-plugins/rush-amazon-s3-build-cache-plugin"},"@rushstack/rush-amazon-s3-build-cache-plugin")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," If your code module is only used with certain Rush commands,\nuse the ",(0,s.kt)("inlineCode",{parentName:"p"},'"associatedCommands"')," setting to improve performance by\navoiding loading the module when it is not needed.")),(0,s.kt)("h3",{id:"defining-a-config-file-for-your-plugin"},"Defining a config file for your plugin"),(0,s.kt)("p",null,"Often a plugin will need to be configured using its own custom settings. Rush's convention\nis that the plugin's config file should be stored in the folder ",(0,s.kt)("strong",{parentName:"p"},"common/config/rush-plugins"),"\nwith the same filename as the ",(0,s.kt)("inlineCode",{parentName:"p"},'"pluginName"')," field from the manifest."),(0,s.kt)("p",null,"Here's a complete example of this naming pattern:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Plugin component"),(0,s.kt)("th",{parentName:"tr",align:null},"Example naming pattern"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"NPM package name:"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"@your-company/rush-policy-plugins"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'"pluginName"')," in ",(0,s.kt)("strong",{parentName:"td"},"rush-plugin-manifest.json"),":"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'"email-policy"'))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"end user config file:"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"<","repo",">","/common/config/rush-plugins/email-policy.json"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"config file JSON schema:"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"src/schemas/email-policy.schema.json"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"code module:"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"src/RushEmailPolicyPlugin.ts"))))),(0,s.kt)("p",null,"To enable Rush's automatic validation of your plugin's config file, specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"optionsSchema"),"\nsetting in your plugin manifest:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"rush-policy-plugins/rush-plugin-manifest.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'    . . .\n    /**\n     * (Optional) A path to a JSON schema for validating the config file that end users can\n     * create to customize this plugin\'s behavior.  Plugin config files are stored in the folder\n     * "common/config/rush-plugins/" with a filename corresponding to the "pluginName" field\n     * from the manifest.  For example: "common/config/rush-plugins/business-policy.json"\n     * whose schema is "business-policy.schema.json".\n     */\n    "optionsSchema": "lib/schemas/email-policy.schema.json",\n    . . .\n')),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh-cn/pages/maintainer/using_rush_plugins"},"Using Rush plugins")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh-cn/pages/configs/rush-plugin-manifest_json"},"rush-plugin-manifest.json")," config file documentation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh-cn/pages/configs/command-line_json"},"command-line.json")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh-cn/pages/maintainer/custom_commands"},"Rush custom commands"))))}g.isMDXComponent=!0}}]);