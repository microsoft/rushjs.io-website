"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[647],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(6393);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(216),s=n(2228),o=(n(6393),n(158)),a=["components"],i={title:"rush install"},l=void 0,c={unversionedId:"pages/commands/rush_install",id:"pages/commands/rush_install",title:"rush install",description:"See also",source:"@site/docs/pages/commands/rush_install.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_install",permalink:"/pages/commands/rush_install",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_install.md",tags:[],version:"current",frontMatter:{title:"rush install"},sidebar:"docsSidebar",previous:{title:"rush init-deploy",permalink:"/pages/commands/rush_init-deploy"},next:{title:"rush link",permalink:"/pages/commands/rush_link"}},p={},u=[{value:"See also",id:"see-also",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'usage: rush install [-h] [-p] [--bypass-policy] [--no-link]\n                    [--network-concurrency COUNT] [--debug-package-manager]\n                    [--max-install-attempts NUMBER] [--ignore-hooks]\n                    [--variant VARIANT] [-t PROJECT] [-T PROJECT] [-f PROJECT]\n                    [-o PROJECT] [-i PROJECT] [-I PROJECT]\n                    [--to-version-policy VERSION_POLICY_NAME]\n                    [--from-version-policy VERSION_POLICY_NAME] [--check-only]\n\n\nThe "rush install" command installs package dependencies for all your\nprojects, based on the shrinkwrap file that is created/updated using "rush\nupdate". (This "shrinkwrap" file stores a central inventory of all\ndependencies and versions for projects in your repo. It is found in the\n"common/config/rush" folder.) If the shrinkwrap file is missing or outdated\n(e.g. because project package.json files have changed), "rush install" will\nfail and tell you to run "rush update" instead. This read-only nature is the\nmain feature: Continuous integration builds should use "rush install" instead\nof "rush update" to catch developers who forgot to commit their shrinkwrap\nchanges. Cautious people can also use "rush install" if they want to avoid\naccidentally updating their shrinkwrap file.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -p, --purge           Perform "rush purge" before starting the installation\n  --bypass-policy       Overrides enforcement of the "gitPolicy" rules from\n                        rush.json (use honorably!)\n  --no-link             If "--no-link" is specified, then project symlinks\n                        will NOT be created after the installation completes.\n                        You will need to run "rush link" manually. This flag\n                        is useful for automated builds that want to report\n                        stages individually or perform extra operations in\n                        between the two stages. This flag is not supported\n                        when using workspaces.\n  --network-concurrency COUNT\n                        If specified, limits the maximum number of concurrent\n                        network requests. This is useful when troubleshooting\n                        network failures.\n  --debug-package-manager\n                        Activates verbose logging for the package manager.\n                        You will probably want to pipe the output of Rush to\n                        a file when using this command.\n  --max-install-attempts NUMBER\n                        Overrides the default maximum number of install\n                        attempts. The default value is 1.\n  --ignore-hooks        Skips execution of the "eventHooks" scripts defined\n                        in rush.json. Make sure you know what you are\n                        skipping.\n  --variant VARIANT     Run command using a variant installation\n                        configuration. This parameter may alternatively be\n                        specified via the RUSH_VARIANT environment variable.\n  -t PROJECT, --to PROJECT\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. Each "--to" parameter expands\n                        this selection to include PROJECT and all its\n                        dependencies. "." can be used as shorthand for the\n                        project in the current working directory. For details,\n                         refer to the website article "Selecting subsets of\n                        projects".\n  -T PROJECT, --to-except PROJECT\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. Each "--to-except" parameter\n                        expands this selection to include all dependencies of\n                        PROJECT, but not PROJECT itself. "." can be used as\n                        shorthand for the project in the current working\n                        directory. For details, refer to the website article\n                        "Selecting subsets of projects".\n  -f PROJECT, --from PROJECT\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. Each "--from" parameter expands\n                        this selection to include PROJECT and all projects\n                        that depend on it, plus all dependencies of this set.\n                        "." can be used as shorthand for the project in the\n                        current working directory. For details, refer to the\n                        website article "Selecting subsets of projects".\n  -o PROJECT, --only PROJECT\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. Each "--only" parameter expands\n                        this selection to include PROJECT; its dependencies\n                        are not added. "." can be used as shorthand for the\n                        project in the current working directory. Note that\n                        this parameter is "unsafe" as it may produce a\n                        selection that excludes some dependencies. For\n                        details, refer to the website article "Selecting\n                        subsets of projects".\n  -i PROJECT, --impacted-by PROJECT\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. Each "--impacted-by" parameter\n                        expands this selection to include PROJECT and any\n                        projects that depend on PROJECT (and thus might be\n                        broken by changes to PROJECT). "." can be used as\n                        shorthand for the project in the current working\n                        directory. Note that this parameter is "unsafe" as it\n                        may produce a selection that excludes some\n                        dependencies. For details, refer to the website\n                        article "Selecting subsets of projects".\n  -I PROJECT, --impacted-by-except PROJECT\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. Each "--impacted-by-except"\n                        parameter works the same as "--impacted-by" except\n                        that PROJECT itself is not added to the selection. ".\n                        " can be used as shorthand for the project in the\n                        current working directory. Note that this parameter\n                        is "unsafe" as it may produce a selection that\n                        excludes some dependencies. For details, refer to the\n                        website article "Selecting subsets of projects".\n  --to-version-policy VERSION_POLICY_NAME\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. The "--to-version-policy"\n                        parameter is equivalent to specifying "--to" for each\n                        of the projects belonging to VERSION_POLICY_NAME. For\n                        details, refer to the website article "Selecting\n                        subsets of projects".\n  --from-version-policy VERSION_POLICY_NAME\n                        Normally all projects in the monorepo will be\n                        processed; adding this parameter will instead select\n                        a subset of projects. The "--from-version-policy"\n                        parameter is equivalent to specifying "--from" for\n                        each of the projects belonging to VERSION_POLICY_NAME.\n                         For details, refer to the website article "Selecting\n                        subsets of projects".\n  --check-only          Only check the validity of the shrinkwrap file\n                        without performing an install.\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../commands/rush_update"},"rush update"))))}h.isMDXComponent=!0}}]);