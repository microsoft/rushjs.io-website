"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6199],{5242:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(3929);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?t.createElement(d,c(c({ref:n},l),{},{components:r})):t.createElement(d,c({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},720:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=r(394),o=r(1614),a=(r(3929),r(5242)),c=["components"],i={title:"build-cache.json\uff08\u5b9e\u9a8c\u6027\uff09"},s=void 0,u={unversionedId:"pages/configs/build-cache_json",id:"pages/configs/build-cache_json",title:"build-cache.json\uff08\u5b9e\u9a8c\u6027\uff09",description:"\u8fd9\u662f rush init \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 build-cache.json \u6587\u4ef6\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/build-cache_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/build-cache_json",permalink:"/zh-cn/pages/configs/build-cache_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/build-cache_json.md",tags:[],version:"current",frontMatter:{title:"build-cache.json\uff08\u5b9e\u9a8c\u6027\uff09"},sidebar:"docsSidebar",previous:{title:"artifactory.json\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/configs/artifactory_json"},next:{title:"command-line.json",permalink:"/zh-cn/pages/configs/command-line_json"}},l={},p=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u662f ",(0,a.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init")," \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"build-cache.json")," \u6587\u4ef6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"common/config/rush/build-cache.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u8be5\u914d\u7f6e\u9879\u7528\u4e8e\u7ba1\u7406 Rush \u7684\u6784\u5efa\u7f13\u5b58\u529f\u80fd\u3002\n * \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 Rush \u5b98\u7f51\uff1a https://rushjs.io\n */\n {\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/build-cache.schema.json",\n\n  /**\n   * \uff08\u5fc5\u987b\uff09\u5b9e\u9a8c\u6027 - \u8bbe\u5b9a\u8be5\u503c\u4e3a true \u6765\u5f00\u542f\u6784\u5efa\u7f13\u5b58\u529f\u80fd\u3002\n   *\n   * \u53c2\u8003 https://rushjs.io/pages/maintainer/build_cache/ \u6765\u83b7\u53d6\u8be5\u5b9e\u9a8c\u6027\u529f\u80fd\u7684\u66f4\u591a\u7ec6\u8282\u3002\n   */\n  "buildCacheEnabled": false,\n\n  /**\n   * \uff08\u5fc5\u987b\uff09\u9009\u62e9\u628a\u6784\u5efa\u7f13\u5b58\u653e\u5230\u54ea\u91cc\u3002\n   *\n   * \u53ef\u9009\u7684\u503c\uff1a "local-only", "azure-blob-storage", "amazon-s3"\n   */\n  "cacheProvider": "local-only",\n\n  /**\n   * \u8bbe\u5b9a\u8be5\u503c\u8986\u76d6\u7f13\u5b58\u5165\u53e3 ID.\n   * \u5982\u679c\u8bbe\u5b9a\u8be5\u503c\uff0c\u90a3\u4e48\u5b83\u5fc5\u987b\u5305\u542b\u4e00\u4e2a [hash] \u5360\u4f4d\u7b26\uff0c\n   * \u5b83\u4e5f\u53ef\u4ee5\u5305\u542b [projectName], [projectName:normalized]\n   */\n  // "cacheEntryNamePattern": "[projectName:normalized]-[hash]"\n\n  /**\n   * \u8be5\u914d\u7f6e\u9879\u7528\u4e8e\u914d\u7f6e "cacheProvider"="azure-blob-storage"\n   */\n  "azureBlobStorageConfiguration": {\n    /**\n     * \uff08\u5fc5\u987b\uff09\u7528\u4e8e\u6784\u5efa\u7f13\u5b58\u7684 Azure storage \u8d26\u6237\u3002\n     */\n    // "storageAccountName": "my-account",\n\n    /**\n     * \uff08\u5fc5\u987b\uff09\u7528\u4e8e\u6784\u5efa\u7f13\u5b58\u7684\u5bb9\u5668\u540d\u3002\n     */\n    // "storageContainerName": "my-container",\n\n    /**\n     * Azure \u73af\u5883\u5185\u7684\u8d26\u6237\u3002\u9ed8\u8ba4\u4e3a AzurePublicCloud.\n     *\n     * \u53ef\u9009\u7684\u503c\uff1a "AzurePublicCloud", "AzureChina", "AzureGermany", "AzureGovernment"\n     */\n    // "azureEnvironment": "AzurePublicCloud",\n\n    /**\n     * \u7f13\u5b58\u9879\u76ee\u7684\u524d\u7f00\u540d\u3002\n     */\n    // "blobPrefix": "my-prefix",\n\n    /**\n     * \u5982\u679c\u8bbe\u5b9a\u4e3a true, \u5141\u8bb8\u5199\u5165\u5230\u7f13\u5b58\u4e2d\u3002\n     * \u9ed8\u8ba4\u4e3a false.\n     */\n    // "isCacheWriteAllowed": true\n  },\n\n  /**\n   * \u8be5\u914d\u7f6e\u9879\u7528\u4e8e\u914d\u7f6e "cacheProvider"="amazon-s3"\n   */\n  "amazonS3Configuration": {\n    /**\n     * \uff08\u5fc5\u5907\uff09 \u7528\u4e8e\u5efa\u7acb\u7f13\u5b58\u7684\u4e9a\u9a6c\u900a S3 \u7684\u6876\uff08\u4f8b\u5982 "us-east-1"\uff09\u3002\n     */\n    // "s3Region": "us-east-1",\n\n    /**\n     * \u7528\u4e8e\u5efa\u7acb\u7f13\u5b58\u7684Amazon S3\u4e2d\u7684\u6876\u7684\u540d\u79f0\u3002\n     */\n    // (Required) "s3Bucket": "my-bucket",\n\n    /**\n     * \u7f13\u5b58\u9879\u76ee\u7684\u53ef\u9009\u524d\u7f00\uff08"\u6587\u4ef6\u5939"\uff09\u3002\n     */\n    // "s3Prefix": "my-prefix",\n\n    /**\n     * \u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u5141\u8bb8\u5199\u5165\u7f13\u5b58\u3002\n     * \u9ed8\u8ba4\u4e3afalse\u3002\n     */\n    // "isCacheWriteAllowed": true\n  }\n}\n')),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../maintainer/build_cache"},"\u5f00\u542f\u6784\u5efa\u7f13\u5b58"))))}f.isMDXComponent=!0}}]);