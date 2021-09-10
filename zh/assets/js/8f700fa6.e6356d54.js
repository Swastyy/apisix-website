"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53963],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,d=m["".concat(l,".").concat(s)]||m[s]||f[s]||c;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40436:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o={title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8 EOS \u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",keywords:["API \u7f51\u5173","APISIX","\u79fb\u52a8\u4e91","\u5bf9\u8c61\u5b58\u50a8","EOS"],description:"\u8be5\u6f14\u8bb2\u4e3b\u9898\u4e3b\u8981\u662f\u8bb2\u8ff0 Apache APISIX \u5728\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5bf9\u8c61\u5b58\u50a8 EOS \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\u7ecf\u9a8c\u5206\u4eab\u3002\u9996\u5148\u4ecb\u7ecd\u4e86\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u89c4\u5212\u53ca\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u7136\u540e\u9610\u8ff0\u4e86\u6211\u4eec\u4e3a\u4ec0\u4e48\u9009\u62e9 APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u5bf9 EOS \u6d41\u91cf\u6cbb\u7406\u67b6\u6784\u6f14\u8fdb\u4e09\u4e2a\u9636\u6bb5\u8fdb\u884c\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u3002\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u5206\u4eab\u4e86\u57fa\u4e8e APISIX \u6211\u4eec\u89e3\u51b3\u4e86\u54ea\u4e9b\u5b9e\u9645\u751f\u4ea7\u95ee\u9898\uff0c\u505a\u4e86\u54ea\u4e9b\u65b9\u6848\u53ca\u5f00\u53d1\u5de5\u4f5c\uff0c\u6700\u540e\u5bf9\u6211\u4eec\u672a\u6765\u7684\u6f14\u8fdb\u505a\u4e86\u4e00\u4e9b\u89c4\u5212\u8bf4\u660e\u3002"},i={permalink:"/zh/articles/Apache-APISIX-in-China-Mobile-Cloud",source:"@site/articles/Apache-APISIX-in-China-Mobile-Cloud.md",title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8 EOS \u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"\u8be5\u6f14\u8bb2\u4e3b\u9898\u4e3b\u8981\u662f\u8bb2\u8ff0 Apache APISIX \u5728\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5bf9\u8c61\u5b58\u50a8 EOS \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\u7ecf\u9a8c\u5206\u4eab\u3002\u9996\u5148\u4ecb\u7ecd\u4e86\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u89c4\u5212\u53ca\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u7136\u540e\u9610\u8ff0\u4e86\u6211\u4eec\u4e3a\u4ec0\u4e48\u9009\u62e9 APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u5bf9 EOS \u6d41\u91cf\u6cbb\u7406\u67b6\u6784\u6f14\u8fdb\u4e09\u4e2a\u9636\u6bb5\u8fdb\u884c\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u3002\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u5206\u4eab\u4e86\u57fa\u4e8e APISIX \u6211\u4eec\u89e3\u51b3\u4e86\u54ea\u4e9b\u5b9e\u9645\u751f\u4ea7\u95ee\u9898\uff0c\u505a\u4e86\u54ea\u4e9b\u65b9\u6848\u53ca\u5f00\u53d1\u5de5\u4f5c\uff0c\u6700\u540e\u5bf9\u6211\u4eec\u672a\u6765\u7684\u6f14\u8fdb\u505a\u4e86\u4e00\u4e9b\u89c4\u5212\u8bf4\u660e\u3002",date:"2021-09-10T08:21:39.450Z",formattedDate:"2021\u5e749\u670810\u65e5",tags:[],readingTime:.28,truncated:!1,nextItem:{title:"Apache APISIX \u4ece\u5f00\u6e90\u9879\u76ee\u5230\u5546\u4e1a\u5316\u4e4b\u8def",permalink:"/zh/articles/Apache-APISIX-From-OpenSource-Commercialization"}},l=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=717552749&bvid=BV1FQ4y117N9&cid=394700211&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,c.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,c.kt)("p",null,"\u9648\u7131\u5c71\uff0c\u6bd5\u4e1a\u540e\u4e00\u76f4\u4ece\u4e8b\u5206\u5e03\u5f0f\u5b58\u50a8\u8f6f\u4ef6\u5f00\u53d1\u53ca\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\u5de5\u4f5c\uff0c\u6df1\u5ea6\u53c2\u4e0e\u4e86\u79fb\u52a8\u4e91\u5efa\u8bbe\u8fc7\u7a0b\uff0c\u91cd\u70b9\u5b8c\u6210\u4e86\u5bf9\u8c61\u5b58\u50a8\u76f8\u5173\u7684\u4e3b\u8981\u6280\u672f\u65b9\u6848\u9009\u578b\u53ca\u843d\u5730\u5f00\u53d1\u5efa\u8bbe\u5de5\u4f5c\u3002\u540c\u65f6\u5728\u5206\u5e03\u5f0f\u5bf9\u8c61\u5b58\u50a8\u9886\u57df\u62e5\u6709\u4e30\u5bcc\u7684\u5b9e\u6218\u7ecf\u9a8c\uff0c\u76ee\u524d\u6b63\u5728\u601d\u8003\u57fa\u4e8e APISIX \u4e03\u5c42\u7f51\u5173\u5b9e\u73b0\u5bf9\u8c61\u5b58\u50a8\u6d41\u91cf\u6cbb\u7406\u5de5\u4f5c\uff0c\u5b9e\u73b0\u67b6\u6784\u8fdb\u4e00\u6b65\u5347\u7ea7\u3002"),(0,c.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,c.kt)("p",null,"\u8be5\u6f14\u8bb2\u4e3b\u9898\u4e3b\u8981\u662f\u8bb2\u8ff0 Apache APISIX \u5728\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5bf9\u8c61\u5b58\u50a8 EOS \u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\u7ecf\u9a8c\u5206\u4eab\u3002\u9996\u5148\u4ecb\u7ecd\u4e86\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u89c4\u5212\u53ca\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u7136\u540e\u9610\u8ff0\u4e86\u6211\u4eec\u4e3a\u4ec0\u4e48\u9009\u62e9 APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u5bf9 EOS \u6d41\u91cf\u6cbb\u7406\u67b6\u6784\u6f14\u8fdb\u4e09\u4e2a\u9636\u6bb5\u8fdb\u884c\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u3002\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u5206\u4eab\u4e86\u57fa\u4e8e APISIX \u6211\u4eec\u89e3\u51b3\u4e86\u54ea\u4e9b\u5b9e\u9645\u751f\u4ea7\u95ee\u9898\uff0c\u505a\u4e86\u54ea\u4e9b\u65b9\u6848\u53ca\u5f00\u53d1\u5de5\u4f5c\uff0c\u6700\u540e\u5bf9\u6211\u4eec\u672a\u6765\u7684\u6f14\u8fdb\u505a\u4e86\u4e00\u4e9b\u89c4\u5212\u8bf4\u660e\u3002"),(0,c.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,c.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,c.kt)("img",{src:"../img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}u.isMDXComponent=!0}}]);