"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[7411],{158:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(6393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(t),c=i,m=h["".concat(p,".").concat(c)]||h[c]||u[c]||s;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(216),i=t(2228),s=(t(6393),t(158)),r=["components"],o={title:"Enabling phased builds (experimental)"},p=void 0,l={unversionedId:"pages/maintainer/phased_builds",id:"pages/maintainer/phased_builds",title:"Enabling phased builds (experimental)",description:"By default, Rush builds each project by running a build script (similar to npm run build) separately in each project folder, processing projects in parallel when the dependency graph allows. From Rush's perspective, everything that happens inside that build",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/maintainer/phased_builds.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/phased_builds",permalink:"/zh-cn/pages/maintainer/phased_builds",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/phased_builds.md",tags:[],version:"current",frontMatter:{title:"Enabling phased builds (experimental)"},sidebar:"docsSidebar",previous:{title:"\u542f\u7528\u6784\u5efa\u7f13\u5b58\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/maintainer/build_cache"},next:{title:"NPM \u4ed3\u5e93\u8ba4\u8bc1",permalink:"/zh-cn/pages/maintainer/npm_registry_auth"}},d={},u=[{value:"Enable the experiment",id:"enable-the-experiment",level:2},{value:"Define phases",id:"define-phases",level:2},{value:"Redefine the build and test commands",id:"redefine-the-build-and-test-commands",level:2},{value:"Assign parameters to phases",id:"assign-parameters-to-phases",level:2},{value:"Add the phase scripts to your projects",id:"add-the-phase-scripts-to-your-projects",level:2},{value:"Define per-phase output folder names",id:"define-per-phase-output-folder-names",level:2}],h={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"By default, Rush builds each project by running a build script (similar to ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run build"),") separately in each project folder, processing projects in parallel when the dependency graph allows. From Rush's perspective, everything that happens inside that build\nscript is a single operation."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Phased builds")," are a way to increase parallelism, by defining individual operations as ",(0,s.kt)("em",{parentName:"p"},"phases")," that can be\nexecuted on a project. As an example, if project B depends on project A, we could first build project A, and then\nbegin building project B while running the unit tests for project A in parallel."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"NOTE: Phased builds are built on top of, and require, the build cache feature -- if you haven't already enabled the build cache for your monorepo, see ",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/pages/maintainer/build_cache"},"Enabling build cache (experimental)"),".")),(0,s.kt)("h2",{id:"enable-the-experiment"},"Enable the experiment"),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"common/config/rush/experiments.json"),", enable the ",(0,s.kt)("inlineCode",{parentName:"p"},'"phasedCommands"')," experiment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "phasedCommands": true\n}\n')),(0,s.kt)("h2",{id:"define-phases"},"Define phases"),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"common/config/rush/command-line.json"),", add a section ",(0,s.kt)("inlineCode",{parentName:"p"},'"phases"'),", as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "phases": [\n    {\n      /**\n       * The name of the phase. Note that this value must start with the \\"_phase:\\" prefix.\n       */\n      "name": "_phase:build",\n\n      /**\n       * The dependencies of this phase.\n       */\n      "dependencies": {\n        "upstream": ["_phase:build"]\n      },\n\n      /**\n       * Normally Rush requires that each project\'s package.json has a \\"scripts\\" entry matching the phase name. To disable this check, set \\"ignoreMissingScript\\" to true.\n       */\n      "ignoreMissingScript": true,\n\n      /**\n       * By default, Rush returns a nonzero exit code if errors or warnings occur during a command. If this option is set to \\"true\\", Rush will return a zero exit code if warnings occur during the execution of this phase.\n       */\n      "allowWarningsOnSuccess": false\n    },\n    {\n      "name": "_phase:test",\n      "dependencies": {\n        "self": ["_phase:build"]\n      },\n      "ignoreMissingScript": true,\n      "allowWarningsOnSuccess": false\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"In this example, we define two phases -- ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:build")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:test"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:build")," operation depends on the ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:build")," operation of its upstream projects (using the traditional Rush dependency graph). The ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:test")," operation does not depend on any upstream projects, but requires the ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:build")," operation of its ",(0,s.kt)("em",{parentName:"p"},"own")," project to be completed first. Note that phase names must start with ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:"),"."),(0,s.kt)("p",null,"Individual projects can choose not to implement a phase (if ",(0,s.kt)("inlineCode",{parentName:"p"},"ignoreMissingScript")," is enabled), but they cannot define their own phases, or change the dependencies of phases. This ensures that phases will behave consistently within your monorepo, regardless of what subset of projects you are building."),(0,s.kt)("h2",{id:"redefine-the-build-and-test-commands"},"Redefine the build and test commands"),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"common/config/rush/command-line.json"),", in the ",(0,s.kt)("inlineCode",{parentName:"p"},'"commands"')," section, redefine the ",(0,s.kt)("inlineCode",{parentName:"p"},'"build"')," command to be a ",(0,s.kt)("inlineCode",{parentName:"p"},"phased")," command instead of a ",(0,s.kt)("inlineCode",{parentName:"p"},"bulk")," command, and specify what phases you would like it to run. In the example below we also define a ",(0,s.kt)("inlineCode",{parentName:"p"},'"test"')," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "commands": [\n    {\n      "commandKind": "phased",\n      "name": "build",\n      "phases": ["_phase:build"],\n      "enableParallelism": true,\n      "incremental": true\n    },\n\n    // No need to define "rebuild", by default, it is the same as build\n    // but with incremental=false.\n\n    {\n      "commandKind": "phased",\n      "name": "test",\n      "summary": "Build and test all projects.",\n      "phases": ["_phase:build", "_phase:test"],\n      "enableParallelism": true,\n      "incremental": true\n    },\n\n    {\n      "commandKind": "phased",\n      "name": "retest",\n      "summary": "Build and test all projects.",\n      "phases": ["_phase:build", "_phase:test"],\n      "enableParallelism": true,\n      "incremental": true\n    }\n  ]\n}\n')),(0,s.kt)("p",null,'This command definition shows off another useful feature of phased builds: we can create our "phase" building blocks and then build commands out of them. Instead of ',(0,s.kt)("inlineCode",{parentName:"p"},"rush build")," running builds and tests for all projects, we can define ",(0,s.kt)("inlineCode",{parentName:"p"},"rush build"),' to mean "build everything without tests", and ',(0,s.kt)("inlineCode",{parentName:"p"},"rush test"),' to mean "build everything and run tests".'),(0,s.kt)("h2",{id:"assign-parameters-to-phases"},"Assign parameters to phases"),(0,s.kt)("p",null,"If you have defined any custom parameters for your build command in ",(0,s.kt)("inlineCode",{parentName:"p"},"command-line.json"),", you'll now need to associate them to phases, so Rush knows which phases can accept your parameter."),(0,s.kt)("p",null,"Here are some examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parameters": [\n    {\n      "longName": "--production",\n      "parameterKind": "flag",\n      "description": "Perform a production build, including minification and localization steps",\n      "associatedCommands": ["build", "rebuild", "test", "retest"],\n      "associatedPhases": ["_phase:build"]\n    },\n    {\n      "longName": "--update-snapshots",\n      "parameterKind": "flag",\n      "description": "Update unit test snapshots for all projects",\n      "associatedCommands": ["test", "retest"],\n      "associatedPhases": ["_phase:test"]\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Here, we've defined one flag (",(0,s.kt)("inlineCode",{parentName:"p"},"--production"),") that can be specified on all 4 variations of our build command, but it will only be passed to the ",(0,s.kt)("em",{parentName:"p"},"build")," phase. And, we've defined anothe flag (",(0,s.kt)("inlineCode",{parentName:"p"},"--update-snapshots"),") that can be specified only on the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"retest")," commands, and is only passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," phase."),(0,s.kt)("p",null,"So, if we were to execute this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rush test --production --update-snapshots\n")),(0,s.kt)("p",null,"Rush will pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"--production")," parameter to the ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:build")," script for each project, and then pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," parameter to the ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:test")," script for each project."),(0,s.kt)("h2",{id:"add-the-phase-scripts-to-your-projects"},"Add the phase scripts to your projects"),(0,s.kt)("p",null,"Within the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file for every project in your monorepo, add the new ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:")," scripts:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "_phase:build": "heft build --clean",\n    "_phase:test": "heft test --no-build",\n    "build": "heft build --clean",\n    "test": "heft test --clean"\n  }\n}\n')),(0,s.kt)("p",null,"The example above attempts to align developer expectations for the ",(0,s.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," commands:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Moving into the project folder and running ",(0,s.kt)("inlineCode",{parentName:"li"},"rushx build")," cleans and builds the project, without testing."),(0,s.kt)("li",{parentName:"ul"},"Moving into the project folder and running ",(0,s.kt)("inlineCode",{parentName:"li"},"rushx test")," cleans, builds, and tests the project."),(0,s.kt)("li",{parentName:"ul"},"Running ",(0,s.kt)("inlineCode",{parentName:"li"},"rush build --only <project>")," cleans and builds the project, without testing."),(0,s.kt)("li",{parentName:"ul"},"Running ",(0,s.kt)("inlineCode",{parentName:"li"},"rush test --only <project>")," cleans, builds, and tests the project.")),(0,s.kt)("p",null,"Where possible, for any custom phases you define, keep this pattern in mind -- what's important isn't that phases are implemented identically to rushx commands, but rather that ",(0,s.kt)("inlineCode",{parentName:"p"},"rush <something>")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"rushx <something>")," produce similar results, if applicable."),(0,s.kt)("p",null,"Some projects may not have any meaningful work to do for a phase, in which case you can define it as an empty operation (",(0,s.kt)("inlineCode",{parentName:"p"},'""'),"), or leave it off entirely, if ",(0,s.kt)("inlineCode",{parentName:"p"},"ignoreMissingScript")," was specified in the phase definition."),(0,s.kt)("h2",{id:"define-per-phase-output-folder-names"},"Define per-phase output folder names"),(0,s.kt)("p",null,"Within the ",(0,s.kt)("inlineCode",{parentName:"p"},"rush-project.json")," configuration file of each project (or, preferably, each rig profile), redefine your ",(0,s.kt)("inlineCode",{parentName:"p"},"operationSettings")," so that each folder is specified in only one phase. For exampe:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationSettings": [\n    // Old configuration (before phases)\n    {\n      "operationName": "build",\n      "outputFolderNames": ["lib", "lib-commonjs", "dist", "temp"]\n    },\n    // New configuration (after phases)\n    {\n      "operationName": "_phase:build",\n      "outputFolderNames": ["lib", "lib-commonjs", "dist"]\n    },\n    {\n      "operationName": "_phase:test",\n      "outputFolderNames": ["temp/coverage", "temp/jest-reports"]\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Note how there's no overlap between the output folders specified by ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:build")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:test")," -- this is an important new requirement for phased builds. In general, it's not possible for Rush to reliably cache the output of an operation if that output can be modified by a different operation, so you should structure your operations such that if ",(0,s.kt)("inlineCode",{parentName:"p"},"_phase:build")," produces a ",(0,s.kt)("inlineCode",{parentName:"p"},'"lib"')," folder, no other operation will put output in that folder."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The phased builds feature is still under development. Feedback is welcome!"),(0,s.kt)("p",{parentName:"blockquote"},"Some relevant GitHub issues to follow:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/2300"},'Design proposal: "phased" custom commands')))))}c.isMDXComponent=!0}}]);