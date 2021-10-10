"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54566],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},I=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),I=i(n),g=a,k=I["".concat(c,".").concat(g)]||I[g]||u[g]||p;return n?r.createElement(k,l(l({ref:t},o),{},{components:n})):r.createElement(k,l({ref:t},o))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=I;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}I.displayName="MDXCreateElement"},77808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return i},toc:function(){return o},default:function(){return I}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),l={title:"Apache APISIX Ingress \u4e3a\u4f55\u6210\u4e3a\u53c8\u62cd\u4e91\u6253\u9020\u5bb9\u5668\u7f51\u5173\u7684\u65b0\u9009\u62e9\uff1f",author:"\u9648\u5353",keywords:["Apache APISIX","Apache APISIX Ingress","\u53c8\u62cd\u4e91","\u5bb9\u5668\u7f51\u5173"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u53c8\u62cd\u4e91\u9009\u62e9 Apache APISIX Ingress \u540e\u6240\u5e26\u6765\u516c\u53f8\u5185\u90e8\u7f51\u5173\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u8c03\u6574\uff0c\u540c\u65f6\u5206\u4eab\u4e86\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5b9e\u8df5\u573a\u666f\u4ecb\u7ecd\u3002",tags:["User Case"]},s=void 0,c={permalink:"/blog/2021/09/24/youpaicloud-usercase",source:"@site/blog/2021/09/24/youpaicloud-usercase.md",title:"Apache APISIX Ingress \u4e3a\u4f55\u6210\u4e3a\u53c8\u62cd\u4e91\u6253\u9020\u5bb9\u5668\u7f51\u5173\u7684\u65b0\u9009\u62e9\uff1f",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u53c8\u62cd\u4e91\u9009\u62e9 Apache APISIX Ingress \u540e\u6240\u5e26\u6765\u516c\u53f8\u5185\u90e8\u7f51\u5173\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u8c03\u6574\uff0c\u540c\u65f6\u5206\u4eab\u4e86\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5b9e\u8df5\u573a\u666f\u4ecb\u7ecd\u3002",date:"2021-09-24T00:00:00.000Z",formattedDate:"September 24, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:2.355,truncated:!0,authors:[{name:"\u9648\u5353"}],prevItem:{title:"\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\u65b0\u5ba0\uff0c\u91d1\u5c71\u529e\u516c\u643a\u624b Apache APISIX \u6253\u9020\u7f51\u5173\u5b9e\u8df5\u65b0\u4f53\u9a8c",permalink:"/blog/2021/09/28/WPS-usercase"},nextItem:{title:"Apache APISIX \u52a9\u529b\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u5c0f\u7535\uff0c\u5b9e\u73b0\u4e91\u539f\u751f\u65b9\u6848",permalink:"/blog/2021/09/18/xiaodian-usercase"}},i={authorsImageUrls:[void 0]},o=[{value:"\u9879\u76ee\u80cc\u666f\u4ecb\u7ecd",id:"\u9879\u76ee\u80cc\u666f\u4ecb\u7ecd",children:[]},{value:"\u8c03\u7814\u9636\u6bb5",id:"\u8c03\u7814\u9636\u6bb5",children:[]},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX Ingress",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-apache-apisix-ingress",children:[{value:"\u5185\u90e8\u539f\u56e0",id:"\u5185\u90e8\u539f\u56e0",children:[]},{value:"\u6548\u7387\u7ef4\u62a4\u5c42\u9762",id:"\u6548\u7387\u7ef4\u62a4\u5c42\u9762",children:[]}]},{value:"\u57fa\u4e8e Apache APISIX Ingress \u7684\u8c03\u6574\u66f4\u65b0",id:"\u57fa\u4e8e-apache-apisix-ingress-\u7684\u8c03\u6574\u66f4\u65b0",children:[{value:"\u67b6\u6784\u8c03\u6574",id:"\u67b6\u6784\u8c03\u6574",children:[]},{value:"Apache APISIX Ingress Controller",id:"apache-apisix-ingress-controller",children:[]},{value:"\u529f\u80fd\u63d0\u5347",id:"\u529f\u80fd\u63d0\u5347",children:[]}]},{value:"\u4f7f\u7528 Apache APISIX Ingress \u5b9e\u8df5\u89e3\u51b3\u65b9\u6848",id:"\u4f7f\u7528-apache-apisix-ingress-\u5b9e\u8df5\u89e3\u51b3\u65b9\u6848",children:[{value:"\u573a\u666f\u4e00\uff1ak8s \u5e94\u7528\u53d8\u66f4",id:"\u573a\u666f\u4e00\uff1ak8s-\u5e94\u7528\u53d8\u66f4",children:[]},{value:"\u573a\u666f\u4e8c\uff1a\u4e0a\u6e38\u5065\u5eb7\u68c0\u67e5\u95ee\u9898",id:"\u573a\u666f\u4e8c\uff1a\u4e0a\u6e38\u5065\u5eb7\u68c0\u67e5\u95ee\u9898",children:[]},{value:"\u573a\u666f\u4e09\uff1amTLS \u8fde\u63a5 etcd",id:"\u573a\u666f\u4e09\uff1amtls-\u8fde\u63a5-etcd",children:[]}]},{value:"\u672a\u6765\u671f\u671b",id:"\u672a\u6765\u671f\u671b",children:[]}],u={toc:o};function I(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86\u53c8\u62cd\u4e91\u9009\u62e9 Apache APISIX Ingress \u540e\u6240\u5e26\u6765\u516c\u53f8\u5185\u90e8\u7f51\u5173\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u8c03\u6574\uff0c\u540c\u65f6\u5206\u4eab\u4e86\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5b9e\u8df5\u573a\u666f\u4ecb\u7ecd\u3002\n\u4f5c\u8005\u9648\u5353\uff0c\u53c8\u62cd\u4e91\u5f00\u53d1\u5de5\u7a0b\u5e08\uff0c\u8d1f\u8d23\u4e91\u5b58\u50a8\u3001\u4e91\u5904\u7406\u548c\u7f51\u5173\u5e94\u7528\u5f00\u53d1\u3002")),(0,p.kt)("h2",{id:"\u9879\u76ee\u80cc\u666f\u4ecb\u7ecd"},"\u9879\u76ee\u80cc\u666f\u4ecb\u7ecd"),(0,p.kt)("p",null,"\u76ee\u524d\u5e02\u9762\u4e0a\u53ef\u6267\u884c Ingress \u7684\u4ea7\u54c1\u9879\u76ee\u9010\u6e10\u4e30\u5bcc\u4e86\u8d77\u6765\uff0c\u53ef\u9009\u62e9\u7684\u8303\u56f4\u4e5f\u6269\u5927\u4e86\u5f88\u591a\u3002\u8fd9\u4e9b\u4ea7\u54c1\u6309\u7167\u67b6\u6784\u5927\u6982\u53ef\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e00\u7c7b\u50cf k8s Ingress\u3001Apache APISIX Ingress\uff0c\u4ed6\u4eec\u662f\u57fa\u4e8e Nginx\u3001OpenResty \u7b49\u4f20\u7edf\u4ee3\u7406\u5668\uff0c\u4f7f\u7528 k8s-Client \u548c Golang \u53bb\u505a Controller\u3002\u8fd8\u6709\u4e00\u7c7b\u65b0\u5174\u7684\u7528 Golang \u8bed\u8a00\u53bb\u5b9e\u73b0\u4ee3\u7406\u548c\u63a7\u5236\u5668\u529f\u80fd\uff0c\u6bd4\u5982 Traefik\u3002"),(0,p.kt)("p",null,"\u53c8\u62cd\u4e91\u6700\u5f00\u59cb\u5305\u62ec\u73b0\u5728\u7684\u5927\u90e8\u5206\u4e1a\u52a1\u4ecd\u5728\u4f7f\u7528 Ingress-Nginx\uff0c\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469775377-8303128c-e8a6-4594-a87b-ac6942f4895e.png",alt:"Ingress-Nginx \u67b6\u6784"})),(0,p.kt)("p",null,"\u4e0b\u5c42\u4e3a\u6570\u636e\u9762 OpenResty\u3002\u4e0a\u5c42 Controller \u4e3b\u8981\u662f\u76d1\u542c APIServer \u7684\u8d44\u6e90\u53d8\u5316\uff0c\u5e76\u751f\u6210 nginx.conf \u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e Reload OpenResty\u3002\u5982\u679c POD IP \u53d1\u751f\u53d8\u5316\uff0c\u53ef\u76f4\u63a5\u901a\u8fc7 HTTP \u63a5\u53e3\u4f20\u8f93\u7ed9 OpenResty Lua \u4ee3\u7801\u53bb\u5b9e\u73b0\u4e0a\u6e38 Upstream node \u66ff\u6362\u3002"),(0,p.kt)("p",null,"Ingress-Nginx \u7684\u6269\u5c55\u80fd\u529b\u4e3b\u8981\u901a\u8fc7 Annotations \u53bb\u5b9e\u73b0\uff0c\u914d\u7f6e\u6587\u4ef6\u672c\u8eab\u7684\u8bed\u6cd5\u548c\u8def\u7531\u89c4\u5219\u90fd\u6bd4\u8f83\u7b80\u5355\u3002\u53ef\u4ee5\u6309\u7167\u9700\u6c42\u8fdb\u884c\u76f8\u5173\u6307\u4ee4\u914d\u7f6e\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u53ef\u62d3\u5c55 Lua \u63d2\u4ef6\uff0c\u63d0\u9ad8\u4e86\u5b9a\u5236\u5316\u529f\u80fd\u7684\u53ef\u64cd\u4f5c\u6027\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469835090-20c409f6-0416-4b2f-9ad7-4c836638f892.png",alt:"Ingress-Nginx \u6269\u5c55\u80fd\u529b\u5b9e\u73b0"})),(0,p.kt)("p",null,"\u4f46 Ingress-Nginx \u5b83\u4e5f\u6709\u4e00\u4e9b\u7f3a\u70b9\uff0c\u6bd4\u5982\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u63d2\u4ef6\u65f6\u7ec4\u4ef6\u4f9d\u8d56\u590d\u6742\uff0c\u79fb\u690d\u6027\u5dee"),(0,p.kt)("li",{parentName:"ul"},"\u8bed\u4e49\u80fd\u529b\u5f31"),(0,p.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u4e00\u6761 Ingress \u7684\u4fee\u6539\u90fd\u9700\u8981 Reload\uff0c\u5bf9\u957f\u94fe\u63a5\u4e0d\u53cb\u597d")),(0,p.kt)("p",null,"\u5728\u7ef4\u62a4\u73b0\u6709\u903b\u8f91\u65f6\uff0c\u4e0a\u8ff0\u95ee\u9898\u9020\u6210\u4e86\u4e00\u5b9a\u7a0b\u5ea6\u7684\u56f0\u6270\uff0c\u6240\u4ee5\u6211\u4eec\u5f00\u59cb\u5bfb\u627e\u76f8\u5173\u5bb9\u5668\u7f51\u5173\u66ff\u4ee3\u54c1\u3002"),(0,p.kt)("h2",{id:"\u8c03\u7814\u9636\u6bb5"},"\u8c03\u7814\u9636\u6bb5"),(0,p.kt)("p",null,"\u5728\u66ff\u4ee3 Ingress-Nginx \u7684\u9009\u62e9\u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u8003\u91cf\u4e86 Traefik \u548c Apache APISIX Ingress\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469875567-61dd6fbd-757f-419f-a769-99e6aaf46f0c.png",alt:"Traefik"})),(0,p.kt)("p",null,"Traefik \u662f\u4e91\u539f\u751f\u6a21\u5f0f\uff0c\u914d\u7f6e\u6587\u4ef6\u6781\u5176\u7b80\u5355\uff0c\u91c7\u7528\u5206\u5e03\u5f0f\u914d\u7f6e\uff0c\u540c\u65f6\u652f\u6301\u591a\u79cd\u81ea\u52a8\u914d\u7f6e\u53d1\u73b0\u3002\u4e0d\u4ec5\u652f\u6301 k8s\u3001etcd\uff0cGolang \u7684\u751f\u6001\u8bed\u8a00\u652f\u6301\u6bd4\u8f83\u597d\uff0c\u4e14\u5f00\u53d1\u6210\u672c\u8f83\u4f4e\uff0c\u8fed\u4ee3\u548c\u6d4b\u8bd5\u80fd\u529b\u8f83\u597d\u3002\u4f46\u662f\u5728\u5176\u4ed6\u5c42\u9762\u7565\u663e\u4e0d\u8db3\uff0c\u6bd4\u5982\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u6269\u5c55\u80fd\u529b\u5f31"),(0,p.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Reload"),(0,p.kt)("li",{parentName:"ul"},"\u6027\u80fd\u548c\u529f\u80fd\u4e0a\u4e0d\u5982 Nginx\uff08\u867d\u7136\u6d88\u8017\u4e5f\u8f83\u4f4e\uff09")),(0,p.kt)("p",null,"\u5b83\u4e0d\u50cf Nginx \u6709\u4e30\u5bcc\u7684\u63d2\u4ef6\u548c\u6307\u4ee4\uff0c\u901a\u8fc7\u589e\u52a0\u4e00\u6761\u6307\u4ee4\u5373\u53ef\u89e3\u51b3\u4e00\u4e2a\u95ee\u9898\uff0c\u5728\u7ebf\u4e0a\u90e8\u7f72\u65f6\uff0c\u53ef\u80fd\u8fd8\u9700\u5728 Traefik \u524d\u642d\u914d\u4e00\u4e2a Nginx\u3002"),(0,p.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u867d\u7136\u5728\u64cd\u4f5c\u6027\u4e0a Traefik \u4f18\u52bf\u5c3d\u663e\uff0c\u4f46\u5728\u6269\u5c55\u80fd\u529b\u548c\u8fd0\u7ef4\u6548\u7387\u4e0a\u6709\u6240\u987e\u8651\uff0c\u6700\u7ec8\u6ca1\u6709\u9009\u62e9 Traefik\u3002"),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-apache-apisix-ingress"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX Ingress"),(0,p.kt)("h3",{id:"\u5185\u90e8\u539f\u56e0"},"\u5185\u90e8\u539f\u56e0"),(0,p.kt)("p",null,"\u5728\u516c\u53f8\u5185\u90e8\u7684\u591a\u4e2a\u6570\u636e\u4e2d\u5fc3\u4e0a\u76ee\u524d\u90fd\u5b58\u6709 Apache APISIX \u7684\u7f51\u5173\u96c6\u7fa4\uff0c\u8fd9\u4e9b\u662f\u4e4b\u524d\u4ece Kong \u4e0a\u66ff\u6362\u8fc7\u6765\u7684\u3002\u540e\u6765\u57fa\u4e8e Apache APISIX \u7684\u63d2\u4ef6\u7cfb\u7edf\u6211\u4eec\u5f00\u53d1\u4e86\u4e00\u4e9b\u5185\u90e8\u63d2\u4ef6\uff0c\u6bd4\u5982\u5185\u90e8\u6743\u9650\u7cfb\u7edf\u6821\u9a8c\u3001\u7cbe\u51c6\u901f\u7387\u9650\u5236\u7b49\u3002"),(0,p.kt)("h3",{id:"\u6548\u7387\u7ef4\u62a4\u5c42\u9762"},"\u6548\u7387\u7ef4\u62a4\u5c42\u9762"),(0,p.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u4e5f\u6709\u4e00\u4e9b k8s \u96c6\u7fa4\uff0c\u8fd9\u4e9b\u5bb9\u5668\u5185\u7684\u96c6\u7fa4\u7f51\u5173\u4f7f\u7528\u7684\u662f Ingress Nginx\u3002\u5728\u4e4b\u524d\u4e0d\u652f\u6301\u63d2\u4ef6\u7cfb\u7edf\u65f6\uff0c\u6211\u4eec\u5c31\u5728 Ingress Nginx \u4e0a\u5b9a\u5236\u4e86\u4e00\u4e9b\u63d2\u4ef6\u3002\u6240\u4ee5\u5728\u5185\u90e8\u6570\u636e\u4e2d\u5fc3\u548c\u5bb9\u5668\u7684\u7f51\u5173\u4e0a\uff0cApache APISIX \u548c Nginx \u7684\u529f\u80fd\u5176\u5b9e\u6709\u4e00\u5927\u90e8\u5206\u90fd\u662f\u91cd\u5408\u7684\u3002"),(0,p.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u540e\u7eed\u7684\u91cd\u590d\u5f00\u53d1\u548c\u8fd0\u7ef4\uff0c\u6211\u4eec\u60f3\u628a\u4e4b\u524d\u4f7f\u7528\u7684 Ingress Nginx \u5bb9\u5668\u5185\u7f51\u5173\u5168\u90e8\u66ff\u6362\u4e3a Apache APISIX Ingress\uff0c\u5b9e\u73b0\u7f51\u5173\u5c42\u9762\u7684\u7ec4\u4ef6\u7edf\u4e00\u3002"),(0,p.kt)("h2",{id:"\u57fa\u4e8e-apache-apisix-ingress-\u7684\u8c03\u6574\u66f4\u65b0"},"\u57fa\u4e8e Apache APISIX Ingress \u7684\u8c03\u6574\u66f4\u65b0"),(0,p.kt)("p",null,"\u76ee\u524d Apache APISIX Ingress \u5728\u53c8\u62cd\u4e91\u662f\u5904\u4e8e\u521d\u671f\uff08\u7ebf\u4e0a\u6d4b\u8bd5\uff09\u9636\u6bb5\u3002\u56e0\u4e3a Apache APISIX Ingress \u7684\u5feb\u901f\u8fed\u4ee3\uff0c\u6211\u4eec\u76ee\u524d\u8fd8\u6ca1\u6709\u5c06\u5176\u8fd0\u7528\u5230\u4e00\u4e9b\u91cd\u8981\u4e1a\u52a1\u4e0a\uff0c\u53ea\u662f\u5728\u65b0\u96c6\u7fa4\u4e2d\u5c1d\u8bd5\u4f7f\u7528\u3002"),(0,p.kt)("h3",{id:"\u67b6\u6784\u8c03\u6574"},"\u67b6\u6784\u8c03\u6574"),(0,p.kt)("p",null,"\u4f7f\u7528 Apache APISIX Ingress \u4e4b\u540e\uff0c\u5185\u90e8\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469909488-3685d104-e458-4145-8ccb-6cecbd383161.png",alt:"\u5e94\u7528 APISIX Ingress \u67b6\u6784"})),(0,p.kt)("p",null,"\u8ddf\u524d\u9762\u63d0\u5230\u7684 Ingress-Nginx \u67b6\u6784\u4e0d\u4e00\u6837\uff0c\u5e95\u5c42\u6570\u636e\u9762\u66ff\u6362\u6210\u4e86 Apache APISIX \u96c6\u7fa4\u3002\u4e0a\u5c42 Controller \u76d1\u542c APIServer \u53d8\u5316\uff0c\u7136\u540e\u518d\u901a\u8fc7 etcd \u5c06\u914d\u7f6e\u8d44\u6e90\u5206\u53d1\u5230\u6574\u4e2a Apache APISIX \u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469956257-b9cb6a91-a082-437c-9395-d62ffb75280f.png",alt:"\u914d\u7f6e\u6587\u4ef6\u5bf9\u6bd4"})),(0,p.kt)("p",null,"\u7531\u4e8e Apache APISIX \u662f\u652f\u6301\u52a8\u6001\u8def\u7531\u4fee\u6539\uff0c\u4e0e\u53f3\u8fb9\u7684 Ingress-Nginx \u4e0d\u540c\u3002\u5728 Apache APISIX \u4e2d\uff0c\u5f53\u6709\u4e1a\u52a1\u6d41\u91cf\u8fdb\u5165\u65f6\u8d70\u7684\u90fd\u662f\u540c\u4e00\u4e2a Location\uff0c\u7136\u540e\u5728 Lua \u4ee3\u7801\u4e2d\u5b9e\u73b0\u8def\u7531\u9009\u62e9\uff0c\u4ee3\u7801\u90e8\u7f72\u7b80\u6d01\u6613\u64cd\u4f5c\u3002\u800c\u53f3\u4fa7 Ingress-Nginx \u76f8\u6bd4\uff0c\u5176 nginx.conf \u914d\u7f6e\u6587\u4ef6\u590d\u6742\uff0c\u6bcf\u6b21 Ingress \u53d8\u66f4\u90fd\u9700\u8981 Reload\u3002"),(0,p.kt)("h3",{id:"apache-apisix-ingress-controller"},"Apache APISIX Ingress Controller"),(0,p.kt)("p",null,"Apache APISIX Ingress Controller \u4f9d\u8d56\u4e8e Apache APISIX \u7684\u52a8\u6001\u8def\u7531\u80fd\u529b\u8fdb\u884c\u529f\u80fd\u5b9e\u73b0\u3002\u5b83\u4e3b\u8981\u76d1\u63a7 APIServer \u7684\u8d44\u6e90\u53d8\u5316\uff0c\u8fdb\u884c\u6570\u636e\u7ed3\u6784\u8f6c\u6362\u3001\u6570\u636e\u6821\u9a8c\u548c\u8ba1\u7b97 DIFF\uff0c\u6700\u540e\u5e94\u7528\u5230 Apache APISIX Admin API \u4e2d\u3002"),(0,p.kt)("p",null,"\u540c\u65f6 Apache APISIX Ingress Controller \u4e5f\u6709\u9ad8\u53ef\u7528\u65b9\u6848\uff0c\u76f4\u63a5\u901a\u8fc7 k8s \u7684 leader-election \u673a\u5236\u5b9e\u73b0\uff0c\u4e0d\u9700\u8981\u518d\u5f15\u5165\u5916\u90e8\u5176\u4ed6\u7ec4\u4ef6\u3002"),(0,p.kt)("h4",{id:"\u58f0\u660e\u5f0f\u914d\u7f6e"},"\u58f0\u660e\u5f0f\u914d\u7f6e"),(0,p.kt)("p",null,"\u76ee\u524d Apache APISIX Ingress Controller \u652f\u6301\u4e24\u79cd\u58f0\u660e\u5f0f\u914d\u7f6e\uff0cIngress Resource \u548c CRD Resource\u3002\u524d\u8005\u6bd4\u8f83\u9002\u5408\u4ece Ingress-Nginx \u66ff\u6362\u8fc7\u6765\u7684\u7f51\u5173\u63a7\u4ef6\uff0c\u5728\u8f6c\u6362\u6210\u672c\u4e0a\u662f\u6700\u5177\u6027\u4ef7\u6bd4\u7684\u3002\u4f46\u662f\u5b83\u7684\u7f3a\u70b9\u4e5f\u6bd4\u8f83\u660e\u663e\uff0c\u6bd4\u5982\u8bed\u4e49\u5316\u80fd\u529b\u592a\u5f31\u3001\u6ca1\u6709\u7279\u522b\u7ec6\u81f4\u7684\u89c4\u8303\u7b49\uff0c\u540c\u65f6\u80fd\u529b\u62d3\u5c55\u4e5f\u53ea\u80fd\u901a\u8fc7 Annotation \u53bb\u5b9e\u73b0\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632469994485-209d3a21-d761-4b2c-a974-c913b443b0d2.png",alt:"Ingress Resource"})),(0,p.kt)("p",null,"\u53c8\u62cd\u4e91\u5185\u90e8\u9009\u62e9\u7684\u662f\u7b2c\u4e8c\u79cd\u58f0\u660e\u914d\u7f6e\u2014\u2014\u8bed\u4e49\u5316\u66f4\u5f3a\u7684 CRD Resource\u3002\u7ed3\u6784\u5316\u6570\u636e\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u914d\u7f6e\u7684\u8bdd\uff0c\u53ea\u8981 Apache APISIX \u652f\u6301\u7684\u80fd\u529b\uff0c\u90fd\u53ef\u4ee5\u8fdb\u884c\u5b9e\u73b0\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470033850-b619da2f-5926-44ca-95bb-69ee1cdaf209.png",alt:"CRD Resource"})),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Apache APISIX Ingress Controller \u7684\u7ec6\u8282\u5e72\u8d27\uff0c\u53ef\u4ee5\u53c2\u8003 Apache APISIX PMC \u5f20\u8d85\u5728 Meetup \u4e0a\u7684",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1eB4y1u7i1?spm_id_from=333.999.0.0"},"\u5206\u4eab\u89c6\u9891"),"\u3002"),(0,p.kt)("h3",{id:"\u529f\u80fd\u63d0\u5347"},"\u529f\u80fd\u63d0\u5347"),(0,p.kt)("h4",{id:"\u6548\u679c\u4e00\uff1a\u65e5\u5fd7\u5c42\u9762\u6548\u7387\u63d0\u9ad8"},"\u6548\u679c\u4e00\uff1a\u65e5\u5fd7\u5c42\u9762\u6548\u7387\u63d0\u9ad8"),(0,p.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u5185\u90e8\u6709\u591a\u4e2a Apache APISIX \u96c6\u7fa4\uff0c\u5305\u62ec\u6570\u636e\u4e2d\u5fc3\u7f51\u5173\u548c\u5bb9\u5668\u7f51\u5173\u90fd\u7edf\u4e00\u5f00\u59cb\u4f7f\u7528\u4e86 Apache APISIX\uff0c\u8fd9\u6837\u5728\u540e\u7eed\u76f8\u5173\u65e5\u5fd7\u7684\u5904\u7406/\u6d88\u8d39\u7a0b\u5e8f\u65f6\u53ef\u4ee5\u7edf\u4e00\u5230\u4e00\u5957\u903b\u8f91\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470075980-46d13ac7-babb-40a5-b105-73f1105d16e7.png",alt:"\u65e5\u5fd7\u5c42\u9762"})),(0,p.kt)("p",null,"\u5f53\u7136 Apache APISIX \u7684\u65e5\u5fd7\u63d2\u4ef6\u652f\u6301\u529f\u80fd\u4e5f\u975e\u5e38\u4e30\u5bcc\u3002\u6211\u4eec\u5185\u90e8\u4f7f\u7528\u7684\u662f Kafka-Logger\uff0c\u5b83\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f\u3002\u50cf\u4e0b\u56fe\u4e2d\u5176\u4ed6\u7684\u65e5\u5fd7\u63d2\u4ef6\u53ef\u80fd\u6709\u4e9b\u56e0\u4e3a\u4f7f\u7528\u4eba\u6570\u7684\u539f\u56e0\uff0c\u8fd8\u5c1a\u672a\u652f\u6301\u81ea\u5b9a\u4e49\u5316\u683c\u5f0f\uff0c\u6b22\u8fce\u6709\u76f8\u5173\u9700\u6c42\u7684\u5c0f\u4f19\u4f34\u8fdb\u884c\u4f7f\u7528\u5e76\u63d0\u4ea4 PR \u6765\u6269\u5c55\u5f53\u524d\u7684\u65e5\u5fd7\u63d2\u4ef6\u529f\u80fd\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470099306-ffc74dfb-384b-4014-a0b4-14267dcf7bce.png",alt:"\u63d2\u4ef6\u4e00\u89c8"})),(0,p.kt)("h4",{id:"\u6548\u679c\u4e8c\uff1a\u5b8c\u5584\u76d1\u63a7\u4e0e\u5065\u5eb7\u68c0\u67e5"},"\u6548\u679c\u4e8c\uff1a\u5b8c\u5584\u76d1\u63a7\u4e0e\u5065\u5eb7\u68c0\u67e5"),(0,p.kt)("p",null,"\u5728\u76d1\u63a7\u5c42\u9762\uff0cApache APISIX \u4e5f\u652f\u6301 Prometheus\u3001SkyWalking \u7b49\uff0c\u6211\u4eec\u5185\u90e8\u4f7f\u7528\u7684\u662f Prometheus\u3002"),(0,p.kt)("p",null,"Apache APISIX \u4f5c\u4e3a\u4e00\u4e2a\u57fa\u672c\u4ee3\u7406\u5668\uff0c\u53ef\u4ee5\u5b9e\u73b0 APP \u72b6\u6001\u7801\u7684\u76d1\u63a7\u548c\u8bf7\u6c42\u7b49\u9700\u6c42\u3002\u4f46 Apache APISIX \u7684\u81ea\u8eab\u5065\u5eb7\u68c0\u67e5\u529b\u5ea6\u4e0d\u662f\u5f88\u597d\u63a7\u5236\u3002\u76ee\u524d\u6211\u4eec\u91c7\u7528\u7684\u662f\u5728 k8s \u91cc\u9762\u90e8\u7f72\u4e00\u4e2a\u670d\u52a1\u5e76\u751f\u6210\u591a\u4e2a POD\uff0c\u5c06\u8fd9\u4e2a\u670d\u52a1\u540c\u65f6\u5e94\u7528\u4e8e Apache APISIX Ingress\uff0c\u7136\u540e\u901a\u8fc7\u68c0\u67e5\u6574\u4e2a\u94fe\u8def\u6765\u786e\u5b9a Apache APISIX \u662f\u5426\u5065\u5eb7\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470120106-3e577e2e-ea43-4f50-8e3c-066b5f1e7238.png",alt:"\u5065\u5eb7\u68c0\u67e5"})),(0,p.kt)("h2",{id:"\u4f7f\u7528-apache-apisix-ingress-\u5b9e\u8df5\u89e3\u51b3\u65b9\u6848"},"\u4f7f\u7528 Apache APISIX Ingress \u5b9e\u8df5\u89e3\u51b3\u65b9\u6848"),(0,p.kt)("h3",{id:"\u573a\u666f\u4e00\uff1ak8s-\u5e94\u7528\u53d8\u66f4"},"\u573a\u666f\u4e00\uff1ak8s \u5e94\u7528\u53d8\u66f4"),(0,p.kt)("p",null,"\u5728\u4f7f\u7528 k8s \u642d\u914d Apache APISIX Ingress \u7684\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u505a\u5230\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u7b56\u7565\u7684\u9009\u7528\u5efa\u8bae\u4f7f\u7528\u6eda\u52a8\u66f4\u65b0\uff0c\u4fdd\u8bc1\u5927\u90e8\u5206 POD \u53ef\u7528\uff0c\u540c\u65f6\u8fd8\u9700\u8981\u8003\u8651\u7a33\u5b9a\u8d1f\u8f7d\u7684\u95ee\u9898"),(0,p.kt)("li",{parentName:"ul"},"\u5e94\u5bf9 POD \u542f\u52a8 k8s \u5185\u90e8\u5065\u5eb7\u68c0\u67e5\uff0c\u4fdd\u8bc1 POD \u7684\u4e1a\u52a1\u53ef\u7528\u6027\uff0c\u907f\u514d\u8bf7\u6c42\u8fc7\u6765\u540e POD \u4ecd\u5904\u4e8e\u4e0d\u80fd\u63d0\u4f9b\u6b63\u5e38\u670d\u52a1\u7684\u72b6\u6001"),(0,p.kt)("li",{parentName:"ul"},"\u4fdd\u8bc1 Apache APISIX Upstream \u91cc\u7684\u5927\u90e8\u5206 Endpoint \u53ef\u7528")),(0,p.kt)("p",null,"\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u9047\u5230\u4e86\u4f20\u8f93\u5ef6\u65f6\u7684\u95ee\u9898\u3002POD \u66f4\u65b0\u8def\u5f84\u5982\u4e0b\u6240\u793a\uff0cPOD Ready \u540e\u901a\u8fc7\u5c42\u5c42\u6b65\u9aa4\u4f9d\u6b21\u8fdb\u884c\u4fe1\u606f\u4f20\u9012\uff0c\u4e2d\u95f4\u67d0\u4e9b\u94fe\u8def\u5c31\u53ef\u80fd\u4f1a\u51fa\u73b0\u5ef6\u65f6\u95ee\u9898\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b\u4e00\u822c\u662f 1 \u79d2\u5185\u540c\u6b65\u5b8c\u6210\uff0c\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\u90e8\u5206\u94fe\u8def\u65f6\u95f4\u53ef\u80fd\u4f1a\u589e\u52a0\u51e0\u79d2\u8fdb\u800c\u51fa\u73b0 Endpoint \u66f4\u65b0\u4e0d\u53ca\u65f6\u7684\u95ee\u9898\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470165257-cb16e489-b546-4451-917a-6c72648769d8.png",alt:"\u94fe\u8def\u95ee\u9898"})),(0,p.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7684\u89e3\u51b3\u65b9\u6848\u662f\uff0c\u5f53\u66f4\u65b0\u65f6\u524d\u4e00\u6279 POD \u53d8\u6210 Ready \u72b6\u6001\u540e\uff0c\u7b49\u5f85\u51e0\u79d2\u949f\u518d\u7ee7\u7eed\u66f4\u65b0\u4e0b\u4e00\u6279\u3002\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u4fdd\u8bc1 Apache APISIX Upstream \u91cc\u7684\u5927\u90e8\u5206 Endpoint \u662f\u53ef\u7528\u7684\u3002"),(0,p.kt)("h3",{id:"\u573a\u666f\u4e8c\uff1a\u4e0a\u6e38\u5065\u5eb7\u68c0\u67e5\u95ee\u9898"},"\u573a\u666f\u4e8c\uff1a\u4e0a\u6e38\u5065\u5eb7\u68c0\u67e5\u95ee\u9898"),(0,p.kt)("p",null,"\u7531\u4e8e APIServer \u9762\u5411\u72b6\u6001\u7684\u8bbe\u8ba1\uff0c\u5728\u4e0e Apache APISIX \u8fdb\u884c\u540c\u6b65\u65f6\u4e5f\u4f1a\u51fa\u73b0\u5ef6\u65f6\u95ee\u9898\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u300c502 \u9519\u8bef\u72b6\u6001\u8b66\u544a\u300d\u3002\u50cf\u8fd9\u7c7b\u95ee\u9898\uff0c\u5c31\u9700\u8981\u5728\u7f51\u5173\u5c42\u9762\u5bf9 Upstream Endpoint \u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\u6765\u89e3\u51b3\u3002"),(0,p.kt)("p",null,"\u9996\u5148 Upstream Endpoint \u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\u4e0d\u592a\u73b0\u5b9e\uff0c\u56e0\u4e3a Endpoint \u592a\u8017\u65f6\u8d39\u529b\u3002\u800c HTTP \u5c42\u7684\u76d1\u63a7\u68c0\u67e5\u7531\u4e8e\u4e0d\u80fd\u786e\u5b9a\u72b6\u6001\u7801\u6240\u4ee5\u4e5f\u4e0d\u9002\u5408\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,"\u6700\u5408\u9002\u7684\u65b9\u6cd5\u5c31\u662f\u5728\u7f51\u5173\u5c42\u9762\u57fa\u4e8e TCP \u505a\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\uff0c\u6bd4\u5982\u4f60\u7684\u7f51\u7edc\u8fde\u63a5\u8d85\u65f6\u4e0d\u53ef\u8fbe\uff0c\u5c31\u53ef\u4ee5\u8ba4\u4e3a POD \u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u9700\u8981\u505a\u964d\u7ea7\u5904\u7406\u3002\u8fd9\u6837\u53ea\u9700\u5728 TCP \u5c42\u9762\u8fdb\u884c\u68c0\u67e5\uff0c\u4e0d\u9700\u8981\u89e6\u53ca\u5176\u4ed6\u4e1a\u52a1\u90e8\u5206\uff0c\u53ef\u8fbe\u5230\u72ec\u7acb\u64cd\u63a7\u3002"),(0,p.kt)("h3",{id:"\u573a\u666f\u4e09\uff1amtls-\u8fde\u63a5-etcd"},"\u573a\u666f\u4e09\uff1amTLS \u8fde\u63a5 etcd"),(0,p.kt)("p",null,"\u7531\u4e8e Apache APISIX \u96c6\u7fa4\u9ed8\u8ba4\u4f7f\u7528\u5355\u5411\u9a8c\u8bc1\u7684\u673a\u5236\uff0c\u4f5c\u4e3a\u5bb9\u5668\u7f51\u5173\u4f7f\u7528 Apache APISIX \u65f6\uff0c\u53ef\u80fd\u4f1a\u5728\u4e0e k8s \u8fde\u63a5\u540c\u4e00\u4e2a etcd \u96c6\u7fa4\uff08k8s etcd \u4e2d\u4f7f\u7528\u53cc\u5411\u9a8c\u8bc1\uff09\u65f6\u9ed8\u8ba4\u5f00\u542f\u53cc\u5411\u8ba4\u8bc1\uff0c\u8fdb\u800c\u5bfc\u81f4\u51fa\u73b0\u5982\u4e0b\u8bc1\u4e66\u95ee\u9898\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632470191228-5c2a3666-8d21-4b19-a5be-e09e7db4d488.png",alt:"\u8bc1\u4e66\u95ee\u9898"})),(0,p.kt)("p",null,"Apache APISIX \u4e0d\u662f\u901a\u8fc7 gRPC \u76f4\u63a5\u8fde\u63a5 etcd\uff0c\u800c\u662f\u901a\u8fc7 HTTP \u534f\u8bae\u5148\u8fde\u63a5\u5230 etcd \u5185\u90e8\u7684 gRPC-gateway\uff0c\u518d\u53bb\u8fde\u63a5\u771f\u6b63\u7684 gRPC Server\u3002\u8fd9\u4e2d\u95f4\u591a\u4e86\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u6240\u4ee5\u5c31\u4f1a\u591a\u4e00\u6b21\u53cc\u5411\u9a8c\u8bc1\u3002"),(0,p.kt)("p",null,"gRPC-gateway \u53bb\u8fde\u63a5 gRPC Server \u7684\u65f6\u5019\u9700\u8981\u4e00\u4e2a\u5ba2\u6237\u7aef\u8bc1\u4e66\uff0cetcd \u6ca1\u6709\u63d0\u4f9b\u8fd9\u4e2a\u8bc1\u4e66\u7684\u914d\u7f6e\u9879\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528 gRPC server \u7684\u670d\u52a1\u7aef\u8bc1\u4e66\u3002\u76f8\u5f53\u4e8e\u4e00\u4e2a\u8bc1\u4e66\u540c\u65f6\u4f5c\u4e3a\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u6821\u9a8c\u3002\u5982\u679c\u4f60\u7684 gRPC server \u670d\u52a1\u7aef\u8bc1\u4e66\u5f00\u542f\u4e86\u6269\u5c55\uff08\u8868\u660e\u8fd9\u4e2a\u8bc1\u4e66\u53ea\u80fd\u7528\u4e8e\u670d\u52a1\u7aef\u6821\u9a8c\uff09\uff0c\u90a3\u4e48\u9700\u8981\u53bb\u6389\u8fd9\u4e2a\u6269\u5c55\uff0c\u6216\u8005\u518d\u52a0\u4e0a\u4e5f\u53ef\u7528\u4e8e\u5ba2\u6237\u7aef\u6821\u9a8c\u7684\u6269\u5c55\u3002"),(0,p.kt)("p",null,"\u540c\u65f6 OpenResty \u5e95\u5c42\u662f\u4e0d\u652f\u6301 mTLS \u7684\uff0c\u5f53\u4f60\u9700\u8981\u901a\u8fc7 mTLS \u8fde\u63a5\u4e0a\u6e38\u670d\u52a1\u6216 etcd \u65f6\uff0c\u9700\u8981\u4f7f\u7528\u57fa\u4e8e apisix-nginx-module \u53bb\u6784\u5efa\u6253\u8fc7 patch \u7684 Openresty\u3002apisix-build-tools \u53ef\u4ee5\u627e\u5230\u76f8\u5173\u6784\u5efa\u811a\u672c\u3002"),(0,p.kt)("h2",{id:"\u672a\u6765\u671f\u671b"},"\u672a\u6765\u671f\u671b"),(0,p.kt)("p",null,"\u867d\u7136\u76ee\u524d\u6211\u4eec\u8fd8\u53ea\u662f\u5728\u6d4b\u8bd5\u9636\u6bb5\u5e94\u7528 Apache APISIX Ingress\uff0c\u4f46\u76f8\u4fe1\u5728\u4e0d\u4e45\u4e4b\u540e\uff0c\u7ecf\u8fc7\u5e94\u7528\u7684\u8fed\u4ee3\u529f\u80fd\u66f4\u65b0\u548c\u5185\u90e8\u67b6\u6784\u8fc1\u79fb\u8c03\u6574\uff0cApache APISIX Ingress \u4f1a\u7edf\u4e00\u5e94\u7528\u5230\u53c8\u62cd\u4e91\u7684\u6240\u6709\u5bb9\u5668\u7f51\u5173\u5185\u3002"))}I.isMDXComponent=!0}}]);