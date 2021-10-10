"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21377],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},I=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),I=u(r),f=o,m=I["".concat(i,".").concat(f)]||I[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=I;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}I.displayName="MDXCreateElement"},48273:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},assets:function(){return u},toc:function(){return p},default:function(){return I}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",author:"\u5f20\u664b\u6d9b",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://avatars.githubusercontent.com/u/3264292?v=4",keywords:["APISIX","Rancher","Helm Chart","API \u7f51\u5173"],description:"\u4f60\u53ef\u4ee5\u5728 Rancher \u4e2d\u4f7f\u7528 Apache APISIX \u7684\u5b98\u65b9 Helm \u4ed3\u5e93\u76f4\u63a5\u90e8\u7f72 Apache APISIX \u548c APISIX Ingress controller\u3002\u5e76\u4e14 Apache APISIX \u53ef\u901a\u8fc7\u4f5c\u4e3a\u7f51\u5173\uff0c\u6216\u8005 APISIX Ingress controller \u7684\u6570\u636e\u9762\u6765\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u3002",tags:["Practical Case"]},l=void 0,i={permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast",source:"@site/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast.md",title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",description:"\u4f60\u53ef\u4ee5\u5728 Rancher \u4e2d\u4f7f\u7528 Apache APISIX \u7684\u5b98\u65b9 Helm \u4ed3\u5e93\u76f4\u63a5\u90e8\u7f72 Apache APISIX \u548c APISIX Ingress controller\u3002\u5e76\u4e14 Apache APISIX \u53ef\u901a\u8fc7\u4f5c\u4e3a\u7f51\u5173\uff0c\u6216\u8005 APISIX Ingress controller \u7684\u6570\u636e\u9762\u6765\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u3002",date:"2021-06-23T00:00:00.000Z",formattedDate:"June 23, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:2.21,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",url:"https://github.com/tao12345666333",imageURL:"https://avatars.githubusercontent.com/u/3264292?v=4"}],prevItem:{title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX",permalink:"/blog/2021/06/28/why-we-need-Apache-APISIX"},nextItem:{title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",permalink:"/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins"}},u={authorsImageUrls:[void 0]},p=[],s={toc:p};function I(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f60\u53ef\u4ee5\u5728 Rancher \u4e2d\u4f7f\u7528 Apache APISIX \u7684\u5b98\u65b9 Helm \u4ed3\u5e93\u76f4\u63a5\u90e8\u7f72 Apache APISIX \u548c APISIX Ingress controller\u3002\u5e76\u4e14 Apache APISIX \u53ef\u901a\u8fc7\u4f5c\u4e3a\u7f51\u5173\uff0c\u6216\u8005 APISIX Ingress controller \u7684\u6570\u636e\u9762\u6765\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u3002")))}I.isMDXComponent=!0}}]);