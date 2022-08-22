"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[2583],{158:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>d});var i=t(6393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?i.createElement(m,s(s({ref:n},h),{},{components:t})):i.createElement(m,s({ref:n},h))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=t(216),a=t(2228),o=(t(6393),t(158)),s=["components"],r={title:"Publishing packages"},l="How to use Rush in your build flow to automate publishing of updated packages",p={unversionedId:"pages/maintainer/publishing",id:"pages/maintainer/publishing",title:"Publishing packages",description:"There are two stages in a Rush publishing flow. The first stage is during development. Developers are asked to provide change files to track changes that deserve a space in change log. The second stage is at publishing time. Rush can be used to gather all change files to increase version, update change log, and publish new packages to a npm registry.",source:"@site/docs/pages/maintainer/publishing.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/publishing",permalink:"/pages/maintainer/publishing",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/publishing.md",tags:[],version:"current",frontMatter:{title:"Publishing packages"},sidebar:"docsSidebar",previous:{title:"Using Rush plugins (experimental)",permalink:"/pages/maintainer/using_rush_plugins"},next:{title:"Deploying projects",permalink:"/pages/maintainer/deploying"}},h={},c=[{value:"1. Track Changes",id:"1-track-changes",level:2},{value:"How to enforce developers to provide change files",id:"how-to-enforce-developers-to-provide-change-files",level:3},{value:"How a developer generates change files",id:"how-a-developer-generates-change-files",level:3},{value:"2. Publish packages",id:"2-publish-packages",level:2},{value:"Dry run mode",id:"dry-run-mode",level:3},{value:"Publish mode",id:"publish-mode",level:3},{value:"Pack mode",id:"pack-mode",level:3},{value:"3. Version Policy",id:"3-version-policy",level:2},{value:"What is a version policy?",id:"what-is-a-version-policy",level:3},{value:"Two types of version policies",id:"two-types-of-version-policies",level:3},{value:"Publishing process when version policies are used",id:"publishing-process-when-version-policies-are-used",level:3},{value:"Command to increase version",id:"command-to-increase-version",level:4},{value:"Command to publish packages",id:"command-to-publish-packages",level:4},{value:"4. Summary",id:"4-summary",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-rush-in-your-build-flow-to-automate-publishing-of-updated-packages"},"How to use Rush in your build flow to automate publishing of updated packages"),(0,o.kt)("p",null,"There are two stages in a Rush publishing flow. The first stage is during development. Developers are asked to provide change files to track changes that deserve a space in change log. The second stage is at publishing time. Rush can be used to gather all change files to increase version, update change log, and publish new packages to a npm registry."),(0,o.kt)("h2",{id:"1-track-changes"},"1. Track Changes"),(0,o.kt)("p",null,"Only changes to public packages need to be tracked. People can control which package should get published and which package should not get published in rush.json by specifying field ",(0,o.kt)("a",{parentName:"p",href:"../../maintainer/setup_new_repo"},"shouldPublish"),". Once public packages have been defined, repo admins can enforce developers to provide change files if they have modified any public packages. Developers can use a tool to generate change files after answering a few questions."),(0,o.kt)("h3",{id:"how-to-enforce-developers-to-provide-change-files"},"How to enforce developers to provide change files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush change --verify\n")),(0,o.kt)("p",null,"This command fails if a developer modifies a public package without providing related change files. It is recommended to add this command as a step of CI builds so that build fails when change files are missing."),(0,o.kt)("h3",{id:"how-a-developer-generates-change-files"},"How a developer generates change files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush change\n")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"rush change")," will prompt a developer with a few questions and generate appropriate change files after questions have been answered. A change file contains what type of version increase this change needs and a description of the change. The change file should be committed with related changes into the repo."),(0,o.kt)("h2",{id:"2-publish-packages"},"2. Publish packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish\n")),(0,o.kt)("p",null,"When it is time to publish updated packages, ",(0,o.kt)("inlineCode",{parentName:"p"},"rush publish")," is the command that increases package version and publish updated packages. It does quite a few things internally to make it happen: gather all change files to figure out what kind of version increase is needed, what packages need to have version increase, increase the versions of dependencies, clean up change files, and so on."),(0,o.kt)("p",null,"This command should have its own build definition. So people can just trigger it to run when it is time to publish packages."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rush publish")," is configurable to serve difference purposes. For example, it supports a dry run mode so that the changes can be verified and tested before real publishing. More usage cases are listed here:"),(0,o.kt)("h3",{id:"dry-run-mode"},"Dry run mode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rush publish")," has several flavors of dry runs that allow you to execute intermediate steps of the publish process without actually publishing to an npm registry. This can be useful for testing as well as for creating version bumps and changelogs in situations where this is no external package repository in use for publishing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish\n")),(0,o.kt)("p",null,"When run without any parameters, this does the whole process in a read-only mode, which means the changes are not saved to disk, not committed to the source repository, and packages are not really published. It is useful if you want to check if the version increases and change log updates look right for you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish --apply\n")),(0,o.kt)("p",null,"In this mode the changes are added to the changelog files and the package.json files are updated with new version numbers and written to disk, but nothing is actually committed to the source repository or published. This is useful if you want to review or edit any of these files before committing to the source repository or publishing to the package repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish --apply --target-branch targetBranch\n")),(0,o.kt)("p",null,"In this mode, the changes above are actually committed to a new git branch (prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"publish-"),") that is based off of ",(0,o.kt)("inlineCode",{parentName:"p"},"targetBranch"),". Running this command with ",(0,o.kt)("inlineCode",{parentName:"p"},"targetBranch")," set to the branch specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"repository.defaultBranch"),' will effectively do everything that a "live" publish would do (including commits to git source), short of actually publishing to an npm repository.'),(0,o.kt)("h3",{id:"publish-mode"},"Publish mode"),(0,o.kt)("p",null,"There are extra parameters for configuring the publishing process: which registry to publish to, what token to use, and whether to include commit details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish --apply --target-branch targetBranch --publish\n")),(0,o.kt)("p",null,"This command increases versions, commit changes to targetBranch, and publish packages to a registry based on environmental npm registry value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish --apply --target-branch targetBranch --publish --registry registryUrl --npm-auth-token npmToken\n")),(0,o.kt)("p",null,"In addition to what previous command can do, this command allows packages to be published to the specified registry with a specified npm token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish --apply --target-branch targetBranch --publish --registry registryUrl --npm-auth-token npmToken --add-commit-details\n")),(0,o.kt)("p",null,"In addition to what previous command can do, This command will include commit details in the change logs."),(0,o.kt)("h3",{id:"pack-mode"},"Pack mode"),(0,o.kt)("p",null,"Instead of publishing, you also have the option to pack the outputs locally into ",(0,o.kt)("inlineCode",{parentName:"p"},".tgz")," files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rush publish --pack --include-all --publish\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Any command that uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"--publish")," flag will disable dry mode, which allows writing the file contents to the disk."),(0,o.kt)("p",{parentName:"blockquote"},"You can also use this command in combination with ",(0,o.kt)("inlineCode",{parentName:"p"},"--release-folder")," to hint where the files should be outputted.")),(0,o.kt)("h2",{id:"3-version-policy"},"3. Version Policy"),(0,o.kt)("p",null,"Version policy is a new concept introduced into Rush to solve the problem of how to notify packages to do different types of version increase when the number of packages is large. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"@microsoft/rush")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@microsoft/rush-lib")," are always published together and use the same version. Those two versions should always be increased together. Another example is that developers can create different branches to service different major versions. People should not be able to modify the major version in that branch. Version policy solves this kind of problems by defining different policies, one enforcing that ",(0,o.kt)("inlineCode",{parentName:"p"},"rush")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rush-lib")," always have the same version and the other locking the major version in a branch."),(0,o.kt)("h3",{id:"what-is-a-version-policy"},"What is a version policy?"),(0,o.kt)("p",null,"A version policy is set of rules that define how the version should be increased. It is defined in ",(0,o.kt)("strong",{parentName:"p"},"common/config/rush/version-policies.json"),". An example can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/master/common/config/rush/version-policies.json"},"here"),". A public package specifies what version policy it is associated with by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"versionPolicyName")," in ",(0,o.kt)("strong",{parentName:"p"},"rush.json"),". An example can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/master/rush.json#L46"},"Rush and Rush-lib configuration"),". Multiple packages can use one version policy if they all follow the same rules. When a package is associated with a version policy, it becomes public and can be published when ",(0,o.kt)("inlineCode",{parentName:"p"},"rush publish")," runs."),(0,o.kt)("p",null,"The schema of ",(0,o.kt)("strong",{parentName:"p"},"version-policies.json")," is defined ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/libraries/rush-lib/src/schemas/version-policies.schema.json"},"here"),"."),(0,o.kt)("h3",{id:"two-types-of-version-policies"},"Two types of version policies"),(0,o.kt)("p",null,"There are currently two types of version policies supported: lockstep version policy and individual version policy. Projects using one lockstep version policy all have the same version. Projects using an individual version policy get version increased according to their change files and the restrictions of the policy. For example, if an individual version policy has a locked major version, all packages using this policy will have their major version locked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n  {\n    "policyName": "myPublic",\n    "definitionName": "lockStepVersion",\n    "version": "1.0.0-dev.6",\n    "nextBump": "prerelease"\n  },\n  {\n    "policyName": "myInternal",\n    "definitionName": "individualVersion",\n    "lockedMajor": 3\n  }\n]\n')),(0,o.kt)("h3",{id:"publishing-process-when-version-policies-are-used"},"Publishing process when version policies are used"),(0,o.kt)("p",null,"You need two steps to publish your packages when version policies are used. The first step is to increase the package versions. And the second step is to publish the packages. The reason to break up publishing into two steps is that it is very often that you need to test the packages after version increase and before package publishing."),(0,o.kt)("h4",{id:"command-to-increase-version"},"Command to increase version"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rush version --bump")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"rush version --bump")," will increase package versions based on their associated version policies."),(0,o.kt)("h4",{id:"command-to-publish-packages"},"Command to publish packages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rush publish --include-all")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"rush publish --include-all")," will publish all the public packages that have version increased."),(0,o.kt)("h2",{id:"4-summary"},"4. Summary"),(0,o.kt)("p",null,"In summary, you can use Rush to automate the whole publishing flow for your repo."))}d.isMDXComponent=!0}}]);