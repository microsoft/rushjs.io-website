"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[6073],{5242:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(3929);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=t(394),o=t(1614),a=(t(3929),t(5242)),i=["components"],s={title:"build-cache.json (experimental)"},c=void 0,l={unversionedId:"pages/configs/build-cache_json",id:"pages/configs/build-cache_json",title:"build-cache.json (experimental)",description:"This is the template that rush init",source:"@site/docs/pages/configs/build-cache_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/build-cache_json",permalink:"/pages/configs/build-cache_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/build-cache_json.md",tags:[],version:"current",frontMatter:{title:"build-cache.json (experimental)"},sidebar:"docsSidebar",previous:{title:"artifactory.json (experimental)",permalink:"/pages/configs/artifactory_json"},next:{title:"command-line.json",permalink:"/pages/configs/command-line_json"}},u={},h=[{value:"See also",id:"see-also",level:2}],p={toc:h};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the template that ",(0,a.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init"),"\ngenerates for ",(0,a.kt)("strong",{parentName:"p"},"build-cache.json"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"common/config/rush/build-cache.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * This configuration file manages Rush\'s build cache feature.\n * More documentation is available on the Rush website: https://rushjs.io\n */\n {\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/build-cache.schema.json",\n\n  /**\n   * (Required) EXPERIMENTAL - Set this to true to enable the build cache feature.\n   *\n   * See https://rushjs.io/pages/maintainer/build_cache/ for details about this experimental feature.\n   */\n  "buildCacheEnabled": false,\n\n  /**\n   * (Required) Choose where project build outputs will be cached.\n   *\n   * Possible values: "local-only", "azure-blob-storage", "amazon-s3"\n   */\n  "cacheProvider": "local-only",\n\n  /**\n   * Setting this property overrides the cache entry ID.  If this property is set, it must contain\n   * a [hash] token. It may also contain a [projectName] or a [projectName:normalized] token.\n   */\n  // "cacheEntryNamePattern": "[projectName:normalized]-[hash]"\n\n  /**\n   * Use this configuration with "cacheProvider"="azure-blob-storage"\n   */\n  "azureBlobStorageConfiguration": {\n    /**\n     * (Required) The name of the the Azure storage account to use for build cache.\n     */\n    // "storageAccountName": "my-account",\n\n    /**\n     * (Required) The name of the container in the Azure storage account to use for build cache.\n     */\n    // "storageContainerName": "my-container",\n\n    /**\n     * The Azure environment the storage account exists in. Defaults to AzurePublicCloud.\n     *\n     * Possible values: "AzurePublicCloud", "AzureChina", "AzureGermany", "AzureGovernment"\n     */\n    // "azureEnvironment": "AzurePublicCloud",\n\n    /**\n     * An optional prefix for cache item blob names.\n     */\n    // "blobPrefix": "my-prefix",\n\n    /**\n     * If set to true, allow writing to the cache. Defaults to false.\n     */\n    // "isCacheWriteAllowed": true\n  },\n\n  /**\n   * Use this configuration with "cacheProvider"="amazon-s3"\n   */\n  "amazonS3Configuration": {\n    /**\n     * (Required) The Amazon S3 region of the bucket to use for build cache (e.g. "us-east-1").\n     */\n    // "s3Region": "us-east-1",\n\n    /**\n     * The name of the bucket in Amazon S3 to use for build cache.\n     */\n    // (Required) "s3Bucket": "my-bucket",\n\n    /**\n     * An optional prefix ("folder") for cache items.\n     */\n    // "s3Prefix": "my-prefix",\n\n    /**\n     * If set to true, allow writing to the cache. Defaults to false.\n     */\n    // "isCacheWriteAllowed": true\n  }\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../maintainer/build_cache"},"Enabling the build cache"))))}m.isMDXComponent=!0}}]);