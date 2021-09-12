"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14366],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=o,y=m["".concat(u,".").concat(s)]||m[s]||f[s]||a;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25779:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",author:"Serendipity96",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["\u5f00\u6e90\u9879\u76ee","\u8d21\u732e"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5f88\u591a\u4e0d\u5199\u4ee3\u7801\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5199\u6587\u7ae0\u3001\u505a\u89c6\u9891\u3001\u5bf9\u5916\u5206\u4eab\u3001\u5efa\u7acb\u672c\u5730\u793e\u533a\u3001\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba\u7b49\u65b9\u5f0f\u53c2\u4e0e\u5230\u5f00\u6e90\u9879\u76ee\u4e2d\u3002",tags:["community"]},i={permalink:"/blog/2021/09/09/how-to-contribute-to-an-OpenSource-without-coding",source:"@site/blog/2021-09-09-how-to-contribute-to-an-OpenSource-without-coding.md",title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5f88\u591a\u4e0d\u5199\u4ee3\u7801\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5199\u6587\u7ae0\u3001\u505a\u89c6\u9891\u3001\u5bf9\u5916\u5206\u4eab\u3001\u5efa\u7acb\u672c\u5730\u793e\u533a\u3001\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8ba8\u8bba\u7b49\u65b9\u5f0f\u53c2\u4e0e\u5230\u5f00\u6e90\u9879\u76ee\u4e2d\u3002",date:"2021-09-09T00:00:00.000Z",formattedDate:"September 9, 2021",tags:[{label:"community",permalink:"/blog/tags/community"}],readingTime:.75,truncated:!0,nextItem:{title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",permalink:"/blog/2021/09/07/how-to-use-apisix-auth"}},u=[],p={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Serendipity96"},"@Serendipity96")," \uff0cApache APISIX contributor\u3002")))}l.isMDXComponent=!0}}]);