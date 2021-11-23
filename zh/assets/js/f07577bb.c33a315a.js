"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1807],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),h=a,m=f["".concat(u,".").concat(h)]||f[h]||s[h]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52340:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c={title:"Apache APISIX Path traversal in request_uri variable(CVE-2021-43557)",author:"Marcin Niemiec",authorURL:"https://github.com/xvnpw",authorImageURL:"https://avatars.githubusercontent.com/u/17719543?v=4",keywords:["Apache APISIX","CVE","Request_uri","Security"],description:"Research report about Apache APISIX Path traversal in request_uri variable(CVE-2021-43557)",tags:["Technology"]},i=void 0,u={permalink:"/zh/blog/2021/11/23/cve-2021-43557-research-report",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/11/23/cve-2021-43557-research-report.md",title:"Apache APISIX Path traversal in request_uri variable(CVE-2021-43557)",description:"Research report about Apache APISIX Path traversal in request_uri variable(CVE-2021-43557)",date:"2021-11-23T00:00:00.000Z",formattedDate:"2021\u5e7411\u670823\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:3.845,truncated:!0,authors:[{name:"Marcin Niemiec",url:"https://github.com/xvnpw",imageURL:"https://avatars.githubusercontent.com/u/17719543?v=4"}],nextItem:{title:"\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u4f7f\u7528 Nocalhost \u5f00\u53d1 Apache APISIX Ingress Controller",permalink:"/zh/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Research report about Apache APISIX Path traversal in request_uri variable(CVE-2021-43557)")))}f.isMDXComponent=!0}}]);