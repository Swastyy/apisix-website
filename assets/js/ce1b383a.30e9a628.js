"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87339],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),g=o,m=f["".concat(u,".").concat(g)]||f[g]||s[g]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"Kong-To-APISIX \u8fc1\u79fb\u5de5\u5177",author:"\u5434\u8212\u65f8",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["APISIX","Kong","\u8fc1\u79fb\u5de5\u5177","API \u7f51\u5173"],description:"Apache APISIX \u662f\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684\u5f00\u6e90\u4e03\u5c42\u5168\u6d41\u91cf\u5904\u7406\u5e73\u53f0\uff0c\u53ef\u4f5c\u4e3a API \u7f51\u5173\u5904\u7406\u4e1a\u52a1\u5165\u53e3\u6d41\u91cf\uff0c\u5177\u6709\u6781\u9ad8\u6027\u80fd\u3001\u8d85\u4f4e\u5ef6\u8fdf\uff0c\u5b98\u65b9\u652f\u6301 dashboard \u4ee5\u53ca\u8d85\u8fc7\u4e94\u5341\u79cd\u63d2\u4ef6\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Kong\uff0c\u5bf9 APISIX \u611f\u5174\u8da3\u53c8\u82e6\u4e8e\u96be\u4ee5\u4e0a\u624b\uff0c\u4e0d\u59a8\u8bd5\u8bd5\u6211\u4eec\u521a\u5f00\u6e90\u7684\u8fc1\u79fb\u5de5\u5177 Kong-To-APISIX\uff0c\u52a9\u4f60\u4e00\u952e\u5e73\u6ed1\u8fc1\u79fb\u3002",tags:["Technology"]},c=void 0,u={permalink:"/blog/2021/08/05/Kong-to-APISIX",source:"@site/blog/2021/08/05/Kong-to-APISIX.md",title:"Kong-To-APISIX \u8fc1\u79fb\u5de5\u5177",description:"Apache APISIX \u662f\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684\u5f00\u6e90\u4e03\u5c42\u5168\u6d41\u91cf\u5904\u7406\u5e73\u53f0\uff0c\u53ef\u4f5c\u4e3a API \u7f51\u5173\u5904\u7406\u4e1a\u52a1\u5165\u53e3\u6d41\u91cf\uff0c\u5177\u6709\u6781\u9ad8\u6027\u80fd\u3001\u8d85\u4f4e\u5ef6\u8fdf\uff0c\u5b98\u65b9\u652f\u6301 dashboard \u4ee5\u53ca\u8d85\u8fc7\u4e94\u5341\u79cd\u63d2\u4ef6\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Kong\uff0c\u5bf9 APISIX \u611f\u5174\u8da3\u53c8\u82e6\u4e8e\u96be\u4ee5\u4e0a\u624b\uff0c\u4e0d\u59a8\u8bd5\u8bd5\u6211\u4eec\u521a\u5f00\u6e90\u7684\u8fc1\u79fb\u5de5\u5177 Kong-To-APISIX\uff0c\u52a9\u4f60\u4e00\u952e\u5e73\u6ed1\u8fc1\u79fb\u3002",date:"2021-08-05T00:00:00.000Z",formattedDate:"August 5, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:1.83,truncated:!0,authors:[{name:"\u5434\u8212\u65f8",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 Nginx \u7684\u53ef\u89c2\u6d4b\u6027",permalink:"/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx"},nextItem:{title:"Release Apache APISIX 2.8.0",permalink:"/blog/2021/07/28/release-apache-apisix-2.8"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u662f\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684\u5f00\u6e90\u4e03\u5c42\u5168\u6d41\u91cf\u5904\u7406\u5e73\u53f0\uff0c\u53ef\u4f5c\u4e3a API \u7f51\u5173\u5904\u7406\u4e1a\u52a1\u5165\u53e3\u6d41\u91cf\uff0c\u5177\u6709\u6781\u9ad8\u6027\u80fd\u3001\u8d85\u4f4e\u5ef6\u8fdf\uff0c\u5b98\u65b9\u652f\u6301 dashboard \u4ee5\u53ca\u8d85\u8fc7\u4e94\u5341\u79cd\u63d2\u4ef6\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Kong\uff0c\u5bf9 APISIX \u611f\u5174\u8da3\u53c8\u82e6\u4e8e\u96be\u4ee5\u4e0a\u624b\uff0c\u4e0d\u59a8\u8bd5\u8bd5\u6211\u4eec\u521a\u5f00\u6e90\u7684\u8fc1\u79fb\u5de5\u5177 Kong-To-APISIX\uff0c\u52a9\u4f60\u4e00\u952e\u5e73\u6ed1\u8fc1\u79fb\u3002")))}f.isMDXComponent=!0}}]);