(self.webpackChunk=self.webpackChunk||[]).push([[82680],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(r),h=a,m=f["".concat(p,".").concat(h)]||f[h]||s[h]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28589:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),c=(r(67294),r(3905)),i={title:"\u5f00\u6e90\u7684\u9b45\u529b",date:new Date("2021-08-07T14:10:00.000Z"),keywords:["APISIX","\u5f00\u6e90","\u8d21\u732e\u8005","\u793e\u533a","\u751f\u6001"],description:"Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u9876\u7ea7\u9879\u76ee Apache APISIX \u4ee5\u53ca\u5b50\u9879\u76ee\uff0c\u5728\u8fc7\u53bb 30 \u5929\u4e2d\u5171\u5408\u5e76\u4e86 250+ PRs\uff0c\u8d21\u732e\u8005\u8d8b\u52bf\u4e5f\u5341\u5206\u4e50\u89c2\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u9ad8\u8d28\u91cf\u7684\u90ae\u4ef6\u5217\u8868\u3001\u6d3b\u8dc3\u7684\u3001QQ \u7fa4 \u4e0e GitHub \u4e5f\u5438\u5f15\u4f17\u591a\u793e\u533a\u7684\u5173\u6ce8\u3002\u4f5c\u4e3a Apache APISIX PMC\uff0c\u4ece\u6211\u7684\u89c6\u89d2\u6765\u5206\u4eab Apache APISIX \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\uff0c\u50ac\u5316\u51fa\u6d3b\u8dc3\u7684\u793e\u533a\u3002"},o={permalink:"/articles/The-Appeal-of-OpenSource",source:"@site/articles/The-Appeal-of-OpenSource.md",title:"\u5f00\u6e90\u7684\u9b45\u529b",description:"Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u9876\u7ea7\u9879\u76ee Apache APISIX \u4ee5\u53ca\u5b50\u9879\u76ee\uff0c\u5728\u8fc7\u53bb 30 \u5929\u4e2d\u5171\u5408\u5e76\u4e86 250+ PRs\uff0c\u8d21\u732e\u8005\u8d8b\u52bf\u4e5f\u5341\u5206\u4e50\u89c2\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u9ad8\u8d28\u91cf\u7684\u90ae\u4ef6\u5217\u8868\u3001\u6d3b\u8dc3\u7684\u3001QQ \u7fa4 \u4e0e GitHub \u4e5f\u5438\u5f15\u4f17\u591a\u793e\u533a\u7684\u5173\u6ce8\u3002\u4f5c\u4e3a Apache APISIX PMC\uff0c\u4ece\u6211\u7684\u89c6\u89d2\u6765\u5206\u4eab Apache APISIX \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\uff0c\u50ac\u5316\u51fa\u6d3b\u8dc3\u7684\u793e\u533a\u3002",date:"2021-08-07T14:10:00.000Z",formattedDate:"August 7, 2021",tags:[],readingTime:.355,truncated:!1,prevItem:{title:"\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u5b9e\u73b0",permalink:"/articles/Apache-APISIX-Kubernetes-Ingress"},nextItem:{title:"Apache APISIX \u7684\u6f14\u53d8",permalink:"/articles/The-Evolution-of-Apache-APISIX"}},p=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=504930956&bvid=BV1tg41157TB&cid=392831471&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,c.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,c.kt)("p",null,"\u741a\u81f4\u8fdc\uff0c\u6765\u81ea\u6df1\u5733\u652f\u6d41\u79d1\u6280\uff08api7.ai\uff09\uff0c\u8d1f\u8d23\u56e2\u961f\u5927\u524d\u7aef\u4e0e\u4f01\u4e1a\u4ea7\u54c1\uff0c\u5e76\u4f5c\u4e3a Apache APISIX PMC \u5728\u79ef\u6781\u7ef4\u62a4 Apache \u9879\u76ee\u5efa\u8bbe\u4e0e\u793e\u533a\u751f\u6001\u3002\u6b64\u5916\uff0c\u4ed6\u4e5f\u5728\u575a\u6301\u5f15\u5bfc\u3001\u9f13\u52b1\u66f4\u591a\u4eba\u5b66\u4e60 Web \u6280\u672f\uff0c\u662f freeCodeCamp \u4e2d\u56fd\u6838\u5fc3\u7ec4\u7ec7\u8005\u4e4b\u4e00\u3002"),(0,c.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,c.kt)("p",null,"Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u9876\u7ea7\u9879\u76ee Apache APISIX \u4ee5\u53ca\u5b50\u9879\u76ee\uff0c\u5728\u8fc7\u53bb 30 \u5929\u4e2d\u5171\u5408\u5e76\u4e86 250+ PRs\uff0c\u8d21\u732e\u8005\u8d8b\u52bf\u4e5f\u5341\u5206\u4e50\u89c2\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u9ad8\u8d28\u91cf\u7684\u90ae\u4ef6\u5217\u8868\u3001\u6d3b\u8dc3\u7684\u3001QQ \u7fa4 \u4e0e GitHub \u4e5f\u5438\u5f15\u4f17\u591a\u793e\u533a\u7684\u5173\u6ce8\u3002\u4f5c\u4e3a Apache APISIX PMC\uff0c\u4ece\u6211\u7684\u89c6\u89d2\u6765\u5206\u4eab Apache APISIX \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5\uff0c\u50ac\u5316\u51fa\u6d3b\u8dc3\u7684\u793e\u533a\uff1f"),(0,c.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,c.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,c.kt)("img",{src:"../static/img/blog_img/APISIX-wechat.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}u.isMDXComponent=!0}}]);