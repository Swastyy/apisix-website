"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68237],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=i(n),m=r,h=g["".concat(p,".").concat(m)]||g[m]||s[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return i},toc:function(){return c},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o={title:"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\uff1f",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Lua","Nginx"],description:"\u672c\u6587\u7531\u6df1\u5733\u652f\u6d41\u79d1\u6280\u5de5\u7a0b\u5e08\u7f57\u6cfd\u8f69\u64b0\u5199\uff0c\u4ecb\u7ecd\u4e86 Apache APISIX \u9009\u7528 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\u7684\u5386\u53f2\u80cc\u666f\u548c\u8fd9\u4e2a\u6280\u672f\u6808\u4e3a APISIX \u5e26\u6765\u7684\u4f18\u52bf\u3002\u7f57\u6cfd\u8f69\u662f OpenResty \u5f00\u53d1\u8005\u4ee5\u53ca Apache APISIX PMC\u3002",tags:["Technology"]},u=void 0,p={permalink:"/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua",source:"@site/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua.md",title:"\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\uff1f",description:"\u672c\u6587\u7531\u6df1\u5733\u652f\u6d41\u79d1\u6280\u5de5\u7a0b\u5e08\u7f57\u6cfd\u8f69\u64b0\u5199\uff0c\u4ecb\u7ecd\u4e86 Apache APISIX \u9009\u7528 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\u7684\u5386\u53f2\u80cc\u666f\u548c\u8fd9\u4e2a\u6280\u672f\u6808\u4e3a APISIX \u5e26\u6765\u7684\u4f18\u52bf\u3002\u7f57\u6cfd\u8f69\u662f OpenResty \u5f00\u53d1\u8005\u4ee5\u53ca Apache APISIX PMC\u3002",date:"2021-08-25T00:00:00.000Z",formattedDate:"August 25, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:3.07,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"\u4f7f\u7528 Apache APISIX \u7684 OpenID Connect \u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u8eab\u4efd\u8ba4\u8bc1",permalink:"/blog/2021/08/25/Using-the-Apache-APISIX-OpenID-Connect-Plugin-for-Centralized-Authentication"},nextItem:{title:"Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u5168\u7a0b\u56de\u987e",permalink:"/blog/2021/08/24/shanghai-meetup-recap"}},i={authorsImageUrls:[void 0]},c=[{value:"LuaJIT VS Go",id:"luajit-vs-go",children:[]},{value:"Nginx + Lua \uff1a\u9ad8\u6027\u80fd + \u7075\u6d3b",id:"nginx--lua-\uff1a\u9ad8\u6027\u80fd--\u7075\u6d3b",children:[]}],s={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531\u6df1\u5733\u652f\u6d41\u79d1\u6280\u5de5\u7a0b\u5e08\u7f57\u6cfd\u8f69\u64b0\u5199\uff0c\u4ecb\u7ecd\u4e86 Apache APISIX \u9009\u7528 Nginx + Lua \u8fd9\u4e2a\u6280\u672f\u6808\u7684\u5386\u53f2\u80cc\u666f\u548c\u8fd9\u4e2a\u6280\u672f\u6808\u4e3a Apache APISIX \u5e26\u6765\u7684\u4f18\u52bf\u3002\u7f57\u6cfd\u8f69\u662f OpenResty \u5f00\u53d1\u8005\u4ee5\u53ca Apache APISIX PMC\u3002")),(0,l.kt)("p",null,"\u7b14\u8005\u5728\u4eca\u5e74\u7684 COSCUP \u5927\u4f1a\u505a\u5206\u4eab\u65f6\uff0c\u66fe\u6709\u89c2\u4f17\u95ee\u8fd9\u6837\u7684\u95ee\u9898\uff0c\u4e3a\u4ec0\u4e48 Apache APISIX\u3001Kong \u548c 3scale \u8fd9\u4e9b\u7f51\u5173\u90fd\u91c7\u7528 Lua \u6765\u7f16\u5199\u903b\u8f91\uff1f"),(0,l.kt)("p",null,'\u662f\u554a\uff0cLua \u5e76\u4e0d\u662f\u4e00\u95e8\u5e7f\u4e3a\u4eba\u77e5\u7684\u8bed\u8a00\uff0c\u79bb\u201c\u4e3b\u6d41\u7f16\u7a0b\u8bed\u8a00\u201d\u7684\u5708\u5b50\u5927\u6982\u8fd8\u5dee\u4e2a\u5341\u4e07\u516b\u5343\u91cc\u5427\u3002\u751a\u81f3\u6709\u4e00\u6b21\uff0c\u6211\u5728\u8ddf\u522b\u4eba\u4ea4\u6d41\u7684\u65f6\u5019\uff0c\u5bf9\u65b9\u5728\u8bf4\u5230 Lua \u4e4b\u524d\uff0c\u5148\u505c\u987f\u4e86\u7247\u523b\uff0c\u968f\u540e\u7ec8\u4e8e\u6253\u5b9a\u4e3b\u610f\uff0c\u4ee5"L U A"\u9010\u4e2a\u5b57\u6bcd\u53d1\u97f3\u7684\u65b9\u5f0f\u8868\u8fbe\u4e86\u5bf9\u8fd9\u4e00\u7f55\u89c1\u4e4b\u7269\u7684\u79f0\u547c\u3002'),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u4e3a\u4ec0\u4e48 Apache APISIX \u548c\u5176\u4ed6\u77e5\u540d\u7684\u7f51\u5173\u4f1a\u9009\u62e9\u7528 Lua \u5462\uff1f"),(0,l.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0cApache APISIX \u91c7\u7528\u7684\u6280\u672f\u6808\u5e76\u4e0d\u662f\u7eaf\u7cb9\u7684 Lua\uff0c\u51c6\u786e\u6765\u8bf4\uff0c\u5e94\u8be5\u662f Nginx + Lua\u3002Apache APISIX \u4ee5\u5e95\u4e0b\u7684 Nginx \u4e3a\u6839\u57fa\uff0c\u4ee5\u4e0a\u5c42\u7684 Lua \u4ee3\u7801\u4e3a\u679d\u53f6\u3002"),(0,l.kt)("h2",{id:"luajit-vs-go"},"LuaJIT VS Go"),(0,l.kt)("p",null,"\u4e25\u8c28\u8ba4\u771f\u7684\u8bfb\u8005\u5fc5\u7136\u4f1a\u6307\u51fa\uff0cApache APISIX \u5e76\u975e\u57fa\u4e8e Nginx + Lua \u7684\u6280\u672f\u6808\uff0c\u800c\u662f Nginx + LuaJIT \uff08\u53c8\u79f0 OpenResty\uff0c\u4ee5\u4e0b\u4e3a\u4e86\u907f\u514d\u6df7\u4e71\uff0c\u4f1a\u4ec5\u4ec5\u91c7\u7528 Nginx + Lua \u8fd9\u6837\u7684\u79f0\u547c\uff09\u3002"),(0,l.kt)("p",null,"LuaJIT \u662f Lua \u7684\u4e00\u4e2a JIT \u5b9e\u73b0\uff0c\u6027\u80fd\u6bd4 Lua \u597d\u5f88\u591a\uff0c\u800c\u4e14\u989d\u5916\u6dfb\u52a0\u4e86 FFI \u7684\u529f\u80fd\uff0c\u80fd\u65b9\u4fbf\u9ad8\u6548\u5730\u8c03\u7528 C \u4ee3\u7801\u3002\n\u7531\u4e8e\u73b0\u884c\u7684\u4e3b\u6d41 API \u7f51\u5173\uff0c\u5982\u679c\u4e0d\u662f\u57fa\u4e8e OpenResty \u5b9e\u73b0\uff0c\u5c31\u662f\u4f7f\u7528 Go \u7f16\u5199\uff0c\u6240\u4ee5\u65f6\u4e0d\u65f6\u4f1a\u770b\u5230\u5404\u79cd Go \u548c Lua \u8c01\u7684\u6027\u80fd\u66f4\u597d\u7684\u6bd4\u8f83\u3002  "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5c31\u6211\u4e2a\u4eba\u89c2\u70b9\u770b\uff0c\u8131\u79bb\u573a\u666f\u6bd4\u8f83\u8bed\u8a00\u7684\u6027\u80fd\uff0c\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002")),(0,l.kt)("p",null,"\u9996\u5148\u660e\u786e\u4e00\u70b9\uff0cApache APISIX \u662f\u57fa\u4e8e Nginx + Lua \u7684\u6280\u672f\u6808\uff0c\u53ea\u662f\u5916\u5c42\u4ee3\u7801\u7528\u7684\u662f Lua\u3002\u6240\u4ee5\u5982\u679c\u8981\u8bba\u8bc1\u54ea\u79cd\u7f51\u5173\u6027\u80fd\u66f4\u597d\uff0c\u6b63\u786e\u7684\u6bd4\u8f83\u5bf9\u8c61\u662f C + LuaJIT \u8ddf Go \u7684\u6bd4\u8f83\u3002\u7f51\u5173\u7684\u6027\u80fd\u7684\u5927\u5934\uff0c\u5728\u4e8e\u4ee3\u7406 HTTP \u8bf7\u6c42\u548c\u54cd\u5e94\uff0c\u8fd9\u4e00\u5757\u7684\u5de5\u4f5c\u4e3b\u8981\u662f Nginx \u5728\u505a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u5018\u82e5\u8981\u6bd4\u8bd5\u6bd4\u8bd5\u6027\u80fd\uff0c\u4e0d\u59a8\u6bd4\u8f83 Nginx \u548c Go \u6807\u51c6\u5e93\u7684 HTTP \u5b9e\u73b0\u3002")),(0,l.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0cNginx \u662f\u4e00\u4e2a bytes matter \u7684\u9ad8\u6027\u80fd\u670d\u52a1\u5668\u5b9e\u73b0\uff0c\u5bf9\u5185\u5b58\u4f7f\u7528\u975e\u5e38\u62a0\u95e8\u3002\u4e3e\u4e24\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Nginx \u91cc\u9762\u7684 request header \u5728\u5927\u591a\u6570\u65f6\u5019\u90fd\u53ea\u662f\u6307\u5411\u539f\u59cb\u7684 HTTP \u8bf7\u6c42\u6570\u636e\u7684\u4e00\u4e2a\u6307\u9488\uff0c\u53ea\u6709\u5728\u4fee\u6539\u7684\u65f6\u5019\u624d\u4f1a\u521b\u5efa\u526f\u672c\u3002"),(0,l.kt)("li",{parentName:"ol"},"Nginx \u4ee3\u7406\u4e0a\u6e38\u54cd\u5e94\u65f6\u5bf9 buffer \u7684\u590d\u7528\u903b\u8f91\u975e\u5e38\u590d\u6742\uff0c\u662f\u6211\u8bfb\u8fc7\u7684\u6700\u4e3a\u70e7\u8111\u7684\u4ee3\u7801\u4e4b\u4e00\u3002")),(0,l.kt)("p",null,"\u51ed\u501f\u8fd9\u79cd\u62a0\u95e8\uff0cNginx \u5f97\u4ee5\u5c79\u7acb\u5728\u9ad8\u6027\u80fd\u670d\u52a1\u5668\u4e4b\u5dc5\u3002"),(0,l.kt)("p",null,"\u76f8\u53cd\u7684\uff0cGo \u6807\u51c6\u5e93\u7684 HTTP \u5b9e\u73b0\uff0c\u662f\u4e00\u4e2a\u6ee5\u7528\u5185\u5b58\u7684\u5178\u578b\u53cd\u4f8b\u3002"),(0,l.kt)("p",null,"\u8fd9\u53ef\u4e0d\u662f\u6211\u7684\u4e00\u9762\u4e4b\u8f9e\uff0cFasthttp\uff0c\u4e00\u4e2a\u91cd\u65b0\u5b9e\u73b0 Go \u6807\u51c6\u5e93\u91cc\u9762\u7684 HTTP \u5305\u7684\u9879\u76ee\uff0c\u5c31\u4e3e\u4e86\u4e24\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6807\u51c6\u5e93\u7684 HTTP Request \u7ed3\u6784\u4f53\u6ca1\u6cd5\u590d\u7528"),(0,l.kt)("li",{parentName:"ol"},"headers \u603b\u662f\u88ab\u63d0\u524d\u89e3\u6790\u597d\uff0c\u5b58\u50a8\u6210 map","[string][]","string\uff0c\u5373\u4f7f\u6ca1\u6709\u7528\u5230\uff08\u539f\u6587\u89c1\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/valyala/fasthttp#faq"},"https://github.com/valyala/fasthttp#faq")," \uff09")),(0,l.kt)("p",null,"Fasthttp \u6587\u6863\u91cc\u9762\u8fd8\u63d0\u5230\u4e00\u4e9b bytes matter \u7684\u4f18\u5316\u6280\u5de7\uff0c\u5efa\u8bae\u5927\u5bb6\u53ef\u4ee5\u9605\u8bfb\u4e0b\u3002"),(0,l.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u5373\u4f7f\u4e0d\u53bb\u6bd4\u8f83\u4f5c\u4e3a\u7f51\u5173\u6838\u5fc3\u7684\u4ee3\u7406\u529f\u80fd\uff0c\u7528 LuaJIT \u5199\u7684\u4ee3\u7801\u4e0d\u4e00\u5b9a\u6bd4 Go \u5dee\u591a\u5c11\u3002\u539f\u56e0\u6709\u4e8c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5176\u4e00\uff0c\u62dc Lua \u8ddf C \u826f\u597d\u7684\u4eb2\u548c\u529b\u6240\u8d50\uff0c\u8bb8\u591a Lua \u7684\u5e93\u6838\u5fc3\u5176\u5b9e\u662f\u7528 C \u5199\u7684\u3002")),(0,l.kt)("p",null,"\u6bd4\u5982 lua-cjson \u7684 json \u7f16\u89e3\u7801\uff0clua-resty-core \u7684 base64 \u7f16\u89e3\u7801\uff0c\u5b9e\u9645\u4e0a\u5927\u5934\u662f\u7528 C \u5b9e\u73b0\u7684\u3002\n\u800c Go \u7684\u5e93\uff0c\u5f53\u7136\u662f\u5927\u90e8\u5206\u7528 Go \u5b9e\u73b0\u7684\u3002\u867d\u7136\u6709 CGO \u8fd9\u79cd\u4e1c\u897f\uff0c\u4f46\u662f\u53d7\u9650\u4e8e Go \u7684\u534f\u7a0b\u8c03\u5ea6\u548c\u5de5\u5177\u94fe\u7684\u9650\u5236\uff0c\u5b83\u5728 Go \u7684\u751f\u6001\u5708\u91cc\u9762\u53ea\u80fd\u5904\u4e8e\u4ece\u5c5e\u7684\u5730\u4f4d\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e LuaJIT \u548c Go \u5bf9\u4e8e C \u7684\u4eb2\u548c\u529b\u7684\u6bd4\u8f83\uff0c\u63a8\u8350 Hacker News \u4e0a\u7684\u8fd9\u7bc7\u6587\u7ae0\uff1a\u300aComparing the C FFI overhead in various programming languages\u300b\uff08\u94fe\u63a5 ",(0,l.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=17161168"},"https://news.ycombinator.com/item?id=17161168")," \uff09"),(0,l.kt)("p",null,"\u4e8e\u662f\u6211\u4eec\u6bd4\u8f83 Lua \u7684\u67d0\u4e9b\u529f\u80fd\uff0c\u5176\u5b9e\u8fd8\u662f\u4f1a\u56de\u5230 C \u548c Go \u7684\u6bd4\u8f83\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5176\u4e8c\uff0cLuaJIT \u7684 JIT \u4f18\u5316\u65e0\u51fa\u5176\u53f3\u3002")),(0,l.kt)("p",null,"\u8ba8\u8bba\u52a8\u6001\u8bed\u8a00\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u628a\u52a8\u6001\u8bed\u8a00\u5206\u6210\u4e24\u7c7b\uff0c\u5e26 JIT \u548c\u4e0d\u5e26 JIT \u7684\u3002JIT \u4f18\u5316\u80fd\u591f\u628a\u52a8\u6001\u8bed\u8a00\u7684\u4ee3\u7801\u5728\u8fd0\u884c\u65f6\u7f16\u8bd1\u6210\u673a\u5668\u7801\uff0c\u8fdb\u800c\u628a\u539f\u6765\u7684\u4ee3\u7801\u7684\u6027\u80fd\u63d0\u5347\u4e00\u4e2a\u6570\u91cf\u7ea7\u3002"),(0,l.kt)("p",null,"\u5e26 JIT \u7684\u8bed\u8a00\u8fd8\u53ef\u4ee5\u5206\u6210\u4e24\u7c7b\uff0c\u80fd\u5145\u5206 JIT \u7684\u548c\u53ea\u652f\u6301\u90e8\u5206 JIT \u7684\u3002\u800c LuaJIT \u5c5e\u4e8e\u524d\u8005\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4eba\u6240\u7686\u77e5\uff0cLua \u662f\u4e00\u95e8\u975e\u5e38\u7b80\u5355\u7684\u8bed\u8a00\u3002\u76f8\u5bf9\u9c9c\u4e3a\u4eba\u77e5\u7684\u662f\uff0cLuaJIT \u7684\u4f5c\u8005 Mike Pall \u662f\u4e00\u4e2a\u975e\u5e38\u5389\u5bb3\u7684\u7a0b\u5e8f\u5458\u3002\u8fd9\u4e24\u8005\u7684\u7ed3\u5408\uff0c\u8bde\u751f\u4e86 LuaJIT \u8fd9\u79cd\u80fd\u8ddf V8 \u6bd4\u80a9\u7684\u4f5c\u54c1\u3002")),(0,l.kt)("p",null,"\u5173\u4e8e LuaJIT \u548c V8 \u5230\u5e95\u8c01\u66f4\u5feb\uff0c\u4e00\u76f4\u662f\u957f\u76db\u4e0d\u8870\u7684\u4e89\u8bba\u8bdd\u9898\u3002\u5c55\u5f00\u8bb2 LuaJIT \u7684 JIT \u5df2\u7ecf\u8d85\u8fc7\u4e86\u672c\u6587\u60f3\u8981\u8ba8\u8bba\u7684\u8303\u7574\u3002\u7b80\u5355\u6765\u8bf4\uff0cJIT \u52a0\u6301\u7684 LuaJIT \u8ddf\u9884\u5148\u7f16\u8bd1\u597d\u7684 Go \u6027\u80fd\u5dee\u522b\u5e76\u4e0d\u5927\u3002"),(0,l.kt)("p",null,"\u81f3\u4e8e\u8c01\u6bd4\u8c01\u6162\uff0c\u6162\u591a\u5c11\uff0c\u90a3\u5c31\u662f\u4e2a\u89c1\u4ec1\u89c1\u667a\u7684\u95ee\u9898\u4e86\u3002\u8fd9\u91cc\u6211\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Lua"},'local text = {"The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog", "at", "a", "restaurant", "near", "the", "lake", "of", "a", "new", "era"}\nlocal map = {}\nlocal times = 1e8\nlocal n = #text\nfor i = 1, n do\n    map[text[i]] = 0\n    for _ = 1, times do\n        map[text[i]] = map[text[i]] + 1\n    end\nend\n\nfor i = 1, n do\n    io.write(text[i], " ", map[text[i]], "\\n")\nend\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Go"},'package main\nimport "fmt"\nfunc main() {\n    text := []string{"The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog", "at", "a", "restaurant", "near", "the", "lake", "of", "a", "new", "era"}\n    m := map[string]int{}\n    times := int(1e8)\n    for _, t := range text {\n        m[t] = 0\n        for i := 0; i < times; i++ {\n            m[t]++\n        }\n    }\n    for _, t := range text {\n        fmt.Println(t, " ", m[t])\n    }\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4e24\u6bb5\u4ee3\u7801\u662f\u7b49\u4ef7\u7684\u3002\u4f60\u731c\u662f\u7b2c\u4e00\u4e2a Lua \u7248\u672c\u7684\u5feb\uff0c\u8fd8\u662f\u7b2c\u4e8c\u4e2a Go \u7248\u672c\u7684\u5feb\uff1f"),(0,l.kt)("p",null,"\u5728\u6211\u7684\u673a\u5668\u4e0a\uff0c\u7b2c\u4e00\u4e2a\u7528\u65f6\u4e0d\u5230 1 \u79d2\uff0c\u7b2c\u4e8c\u4e2a\u82b1\u4e86 23 \u79d2\u591a\u3002"),(0,l.kt)("p",null,"\u4e3e\u8fd9\u4e2a\u4f8b\u5b50\u5e76\u4e0d\u662f\u60f3\u8bc1\u660e LuaJIT \u6bd4 Go \u5feb 20 \u500d\u3002\u6211\u53ea\u60f3\u8bf4\u660e\u7528 micro benchmark \u8bc1\u660e\u67d0\u4e2a\u8bed\u8a00\u6bd4\u53e6\u4e00\u4e2a\u8bed\u8a00\u5feb\u7684\u610f\u4e49\u4e0d\u5927\uff0c\u56e0\u4e3a\u5f71\u54cd\u6027\u80fd\u7684\u56e0\u7d20\u5f88\u591a\u3002\u4e00\u4e2a\u7b80\u5355\u7684 micro benchmark \u5f88\u6709\u53ef\u80fd\u8fc7\u5206\u5f3a\u8c03\u67d0\u4e00\u4e2a\u56e0\u7d20\uff0c\u5bfc\u81f4\u51fa\u4e4e\u610f\u6599\u7684\u7ed3\u679c\u3002"),(0,l.kt)("h2",{id:"nginx--lua-\uff1a\u9ad8\u6027\u80fd--\u7075\u6d3b"},"Nginx + Lua \uff1a\u9ad8\u6027\u80fd + \u7075\u6d3b"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u8f6c\u56de Apache APISIX \u7684 Nginx + Lua \u7684\u6280\u672f\u6808\u3002Nginx + Lua \u7684\u6280\u672f\u6808\u7ed9\u6211\u4eec\u5e26\u6765\u7684\uff0c\u4e0d\u4ec5\u4ec5\u662f\u9ad8\u6027\u80fd\u3002"),(0,l.kt)("p",null,"\u7ecf\u5e38\u6709\u4eba\u95ee\u6211\u4eec\uff0c\u65e2\u7136\u4f60\u4eec\u662f\u57fa\u4e8e Nginx \u5f00\u6e90\u7248\u672c\uff0c\u800c Nginx \u5e76\u4e0d\u652f\u6301\u52a8\u6001\u914d\u7f6e\uff0c\u4e3a\u4ec0\u4e48 Apache APISIX \u58f0\u79f0\u81ea\u5df1\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u914d\u7f6e\uff1f\u4f60\u4eec\u662f\u4e0d\u662f\u6539\u4e86\u70b9\u4e1c\u897f\uff1f"),(0,l.kt)("p",null,"\u662f\u7684\uff0c\u6211\u4eec\u786e\u5b9e\u6709\u5728\u7ef4\u62a4\u81ea\u5df1\u7684 Nginx \u53d1\u884c\u7248\uff0c\u4e0d\u8fc7 Apache APISIX \u7684\u5927\u90e8\u5206\u529f\u80fd\u5728\u5b98\u65b9\u7684 Nginx \u4e0a\u5c31\u80fd\u4f7f\u7528\u3002\u6211\u4eec\u4e4b\u6240\u4ee5\u80fd\u505a\u5230\u52a8\u6001\u914d\u7f6e\uff0c\u5168\u9760\u628a\u914d\u7f6e\u653e\u5230 Lua \u4ee3\u7801\u91cc\u9762\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u4e3e\u8def\u7531\u7cfb\u7edf\u4f5c\u4e3a\u4e00\u4e2a\u4f8b\u5b50\uff0cNginx \u7684\u8def\u7531\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u8fdb\u884c\u914d\u7f6e\uff0c\u6bcf\u6b21\u66f4\u6539\u8def\u7531\uff0c\u90fd\u9700\u8981 reload \u4e4b\u540e\u624d\u80fd\u751f\u6548\u3002\u8fd9\u662f\u56e0\u4e3a Nginx \u7684\u8def\u7531\u5206\u53d1\u53ea\u652f\u6301\u9759\u6001\u914d\u7f6e\uff0c\u4e0d\u80fd\u52a8\u6001\u589e\u51cf\u8def\u7531\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4e86\u5b9e\u73b0\u8def\u7531\u52a8\u6001\u914d\u7f6e\uff0cApache APISIX \u505a\u4e86\u4e24\u4ef6\u4e8b\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 Nginx \u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u914d\u7f6e\u5355\u4e2a server\uff0c\u8fd9\u4e2a server \u91cc\u9762\u53ea\u6709\u4e00\u4e2a location\u3002\u6211\u4eec\u628a\u8fd9\u4e2a location \u4f5c\u4e3a\u4e3b\u5165\u53e3\uff0c\u8fd9\u6837\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u4f1a\u8d70\u5230\u8fd9\u4e2a\u5730\u65b9\u4e0a\u6765\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6211\u4eec\u7528 Lua \u5b8c\u6210\u8def\u7531\u5206\u53d1\u7684\u5de5\u4f5c\u3002Apache APISIX \u7684\u8def\u7531\u5206\u53d1\u6a21\u5757\uff0c\u652f\u6301\u5728\u8fd0\u884c\u65f6\u589e\u51cf\u8def\u7531\uff0c\u8fd9\u6837\u5c31\u80fd\u52a8\u6001\u914d\u7f6e\u8def\u7531\u4e86\u3002")),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u95ee\uff0c\u5728 Lua \u91cc\u9762\u505a\u8def\u7531\u5206\u53d1\uff0c\u4f1a\u6bd4 Nginx \u7684\u5b9e\u73b0\u6162\u5417\uff1f"),(0,l.kt)("p",null,"\u5c31\u50cf\u524d\u9762\u63d0\u5230\u8fc7\u7684\u4e00\u6837\uff0c\u51e1\u662f\u5bf9\u6027\u80fd\u8981\u6c42\u6bd4\u8f83\u9ad8\u7684\uff0c\u6211\u4eec\u4f1a\u628a\u6838\u5fc3\u4ee3\u7801\u7528 C \u6539\u5199\u3002\u6211\u4eec\u7684\u8def\u7531\u5206\u53d1\u6a21\u5757\u5c31\u662f\u8fd9\u4e48\u5e72\u7684\u3002\u8def\u7531\u5206\u53d1\u6a21\u5757\u5728\u5339\u914d\u8def\u7531\u65f6\uff0c\u4f1a\u91c7\u7528\u4e00\u4e2a\u524d\u7f00\u6811\u6765\u5339\u914d\u3002\u800c\u8fd9\u4e2a\u524d\u7f00\u6811\u662f\u7528 C \u5b9e\u73b0\u7684\u3002\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u770b\u4e0b\u4ee3\u7801\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree/"},"https://github.com/api7/lua-resty-radixtree/")," \u3002"),(0,l.kt)("p",null,"\u5b8c\u6210\u4e86 C \u5c42\u9762\u4e0a\u7684\u524d\u7f00\u6811\u5339\u914d\uff0c\u63a5\u4e0b\u6765\u5c31\u8be5 Lua \u53d1\u6325\u7075\u6d3b\u6027\u7684\u65f6\u523b\u4e86\u3002\u5bf9\u4e8e\u5339\u914d\u540c\u4e00\u524d\u7f00\u7684\u5404\u4e2a\u8def\u7531\uff0c\u6211\u4eec\u652f\u6301\u901a\u8fc7\u8bb8\u591a\u522b\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u4e0b\u4e00\u7ea7\u7684\u5339\u914d\uff0c\u5176\u4e2d\u5c31\u5305\u542b\u901a\u8fc7\u4e00\u4e2a\u7279\u5b9a\u7684\u8868\u8fbe\u5f0f\u6765\u5339\u914d\u3002\u5c3d\u7ba1\u786c\u7740\u5934\u76ae\uff0c\u4e5f\u80fd\u5728 C \u5c42\u9762\u4e0a\u63a5\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f\u5f15\u64ce\uff0c\u4f46\u662f\u7eaf C \u5b9e\u73b0\u505a\u4e0d\u4e86\u975e\u5e38\u7075\u6d3b\u5730\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f\u91cc\u9762\u7684\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4e0b\u9762\u662f Apache APISIX \u7528\u6765\u5339\u914d GraphQL \u8bf7\u6c42\u7684 route \u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "methods": ["POST"],\n        "upstream": {\n            "nodes": {\n                "127.0.0.1:1980": 1\n            },\n            "type": "roundrobin"\n        },\n        "uri": "/hello",\n        "vars": [["graphql_name", "==", "repo"]]\n}\n')),(0,l.kt)("p",null,"\u5b83\u4f1a\u5339\u914d\u8fd9\u6837\u7684 GraphQL \u8bf7\u6c42\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Nginx"},"query repo {\n    owner {\n        name\n    }\n}\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684 graphql_name \u5e76\u975e Nginx \u5185\u7f6e\u53d8\u91cf\uff0c\u800c\u662f\u901a\u8fc7 Lua \u4ee3\u7801\u5b9a\u4e49\u7684\u3002Apache APISIX \u4e00\u5171\u5b9a\u4e49\u4e86\u4e09\u4e2a GraphQL \u76f8\u5173\u7684\u53d8\u91cf\uff0c\u8fde\u540c\u89e3\u6790 GraphQL body \u5728\u5185\u4e0d\u8fc7 62 \u884c Lua \u4ee3\u7801\u3002\u5982\u679c\u8981\u901a\u8fc7 Nginx C \u6a21\u5757\u6765\u5b9a\u4e49\u53d8\u91cf\uff0c62 \u884c\u53ef\u80fd\u53ea\u4e0d\u8fc7\u662f\u628a\u76f8\u5173\u65b9\u6cd5\u7684\u6837\u677f\u4ee3\u7801\u642d\u5efa\u8d77\u6765\uff0c\u90fd\u8fd8\u6ca1\u6709\u5230\u771f\u6b63\u7684\u89e3\u6790 GraphQL \u7684\u903b\u8f91\u5462\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u91c7\u7528 Lua \u4ee3\u7801\u6765\u505a\u8def\u7531\u8fd8\u6709\u4e00\u4e2a\u597d\u5904\uff1a\u5b83\u51cf\u4f4e\u4e86\u4e8c\u6b21\u5f00\u53d1\u7684\u95e8\u69db\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u5728\u8def\u7531\u8fc7\u7a0b\u4e2d\u9700\u8981\u6709\u7279\u6b8a\u7684\u903b\u8f91\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u73b0\u6210\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\u548c\u8fd0\u7b97\u7b26\uff0c\u6bd4\u5982\u901a\u8fc7 IP \u5e93\u5339\u914d\u5230\u7684\u5730\u7406\u4f4d\u7f6e\u6765\u51b3\u5b9a\u91c7\u7528\u54ea\u6761\u8def\u7531\u3002\u7528\u6237\u53ea\u9700\u8981\u5199\u4e00\u4e9b Lua \u4ee3\u7801\uff0c\u8fd9\u8981\u6bd4\u4fee\u6539 Nginx C module \u7684\u96be\u5ea6\u5c0f\u591a\u4e86\u3002"),(0,l.kt)("p",null,"\u5728 Apache APISIX \u91cc\u9762\uff0c\u4e0d\u4ec5\u4ec5\u8def\u7531\u662f\u52a8\u6001\u7684\uff0c\u6211\u4eec\u7684 TLS \u670d\u52a1\u7aef\u8bc1\u4e66\u548c\u4e0a\u6e38\u8282\u70b9\u914d\u7f6e\u90fd\u662f\u52a8\u6001\u7684\uff0c\u800c\u4e14\u65e0\u9700\u4fee\u6539 Nginx \u2014\u2014 \u4e0a\u8ff0\u529f\u80fd\u53ef\u4ee5\u8dd1\u5728\u5b98\u65b9\u7684 Nginx + Lua \u6280\u672f\u6808\u4e0a\u3002\u5f53\u7136\u901a\u8fc7\u4fee\u6539 Nginx\uff0c\u6211\u4eec\u8fd8\u5b9e\u73b0\u4e86\u66f4\u591a\u7684\u9ad8\u7ea7\u529f\u80fd\uff0c\u6bd4\u5982\u52a8\u6001\u7684 gzip \u914d\u7f6e\u548c\u52a8\u6001\u7684\u5ba2\u6237\u7aef\u8bf7\u6c42\u5927\u5c0f\u9650\u5236\u3002\u540e\u7eed\u6211\u4eec\u5c06\u63a8\u884c\u81ea\u5df1\u7684 Nginx \u53d1\u884c\u7248\uff0c\u8fd9\u6837\u5f00\u6e90\u7528\u6237\u4e5f\u80fd\u8f7b\u677e\u7528\u4e0a\u8fd9\u4e9b\u9ad8\u7ea7\u529f\u80fd\u3002"))}g.isMDXComponent=!0}}]);