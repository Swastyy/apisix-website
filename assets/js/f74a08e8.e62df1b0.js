"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29628],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=s(a),h=p,m=k["".concat(i,".").concat(h)]||k[h]||o[h]||l;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=a.length,r=new Array(l);r[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:p,r[1]=c;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34337:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return s},toc:function(){return u},default:function(){return k}});var n=a(87462),p=a(63366),l=(a(67294),a(3905)),r={title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",author:"\u76db\u5a01\u950b",keywords:["APISIX","Kong","Nginx","API \u7f51\u5173","BaaS"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002",tags:["User Case"]},c=void 0,i={permalink:"/blog/2021/08/09/Apache-APISIX-in-Quliankeji",source:"@site/blog/2021/08/09/Apache-APISIX-in-Quliankeji.md",title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002",date:"2021-08-09T00:00:00.000Z",formattedDate:"August 9, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:2.215,truncated:!0,authors:[{name:"\u76db\u5a01\u950b"}],prevItem:{title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",permalink:"/blog/2021/08/09/Apache-APISIX-in-China-Mobile-Cloud"},nextItem:{title:"How to Improve the Observability of Nginx with Apache APISX",permalink:"/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx"}},s={authorsImageUrls:[void 0]},u=[{value:"\u4e1a\u52a1\u80cc\u666f",id:"\u4e1a\u52a1\u80cc\u666f",children:[]},{value:"Apache APISIX \u7684\u4f7f\u7528\u573a\u666f",id:"apache-apisix-\u7684\u4f7f\u7528\u573a\u666f",children:[{value:"\u573a\u666f 1\uff1a\u5728 BaaS \u7cfb\u7edf\u4e0a\u7684\u843d\u5730\u5b9e\u8df5",id:"\u573a\u666f-1\uff1a\u5728-baas-\u7cfb\u7edf\u4e0a\u7684\u843d\u5730\u5b9e\u8df5",children:[]},{value:"\u573a\u666f 2\uff1a\u5728\u533a\u5757\u94fe\u8282\u70b9\u4e0a\u7684\u843d\u5730\u5b9e\u8df5",id:"\u573a\u666f-2\uff1a\u5728\u533a\u5757\u94fe\u8282\u70b9\u4e0a\u7684\u843d\u5730\u5b9e\u8df5",children:[]}]},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-apache-apisix",children:[]},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",children:[{value:"1.\u8fd0\u7528 Apache APISIX \u63d0\u4f9b\u6216\u81ea\u7814\u7684\u65e5\u5fd7\u63d2\u4ef6",id:"1\u8fd0\u7528-apache-apisix-\u63d0\u4f9b\u6216\u81ea\u7814\u7684\u65e5\u5fd7\u63d2\u4ef6",children:[]},{value:"2.\u5f00\u53d1\u76d1\u7ba1\u63d2\u4ef6\uff0c\u5b9e\u73b0\u64cd\u4f5c\u7559\u75d5\u53ca\u6eaf\u6e90",id:"2\u5f00\u53d1\u76d1\u7ba1\u63d2\u4ef6\uff0c\u5b9e\u73b0\u64cd\u4f5c\u7559\u75d5\u53ca\u6eaf\u6e90",children:[]},{value:"3.\u4f7f\u7528 APISIX Ingress Controller\uff0c\u4ee3\u66ff Kubernetes \u9ed8\u8ba4\u7684 Nginx-Ingress",id:"3\u4f7f\u7528-apisix-ingress-controller\uff0c\u4ee3\u66ff-kubernetes-\u9ed8\u8ba4\u7684-nginx-ingress",children:[]},{value:"4.\u63a2\u7d22 Service Mesh",id:"4\u63a2\u7d22-service-mesh",children:[]}]}],o={toc:u};function k(e){var t=e.components,a=(0,p.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002")),(0,l.kt)("h2",{id:"\u4e1a\u52a1\u80cc\u666f"},"\u4e1a\u52a1\u80cc\u666f"),(0,l.kt)("p",null,"BaaS\uff08Blockchain as a Service\uff09\uff0c\u4e2d\u6587\u4e3a\u201c\u533a\u5757\u94fe\u5373\u670d\u52a1\u201d\uff0c\u662f\u6307\u5c06\u533a\u5757\u94fe\u6846\u67b6\u5d4c\u5165\u4e91\u8ba1\u7b97\u5e73\u53f0\uff0c\u5229\u7528\u4e91\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u4f18\u52bf\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4fbf\u6377\u3001\u9ad8\u6027\u80fd\u7684\u533a\u5757\u94fe\u751f\u6001\u73af\u5883\u548c\u751f\u6001\u914d\u5957\u670d\u52a1\uff0c\u652f\u6301\u5f00\u53d1\u8005\u7684\u4e1a\u52a1\u62d3\u5c55\u53ca\u8fd0\u8425\u652f\u6301\u7684\u533a\u5757\u94fe\u5f00\u653e\u5e73\u53f0\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u5957\u5b8c\u6574\u7684 BaaS \u89e3\u51b3\u65b9\u6848\u5305\u62ec\u8bbe\u5907\u63a5\u5165\u3001\u8bbf\u95ee\u63a7\u5236\u3001\u670d\u52a1\u76d1\u63a7\u548c\u533a\u5757\u94fe\u5e73\u53f0\u56db\u4e2a\u4e3b\u8981\u73af\u8282\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647228757-9e5f730c-dde0-46b6-b5f3-81a15ff40e39.png",alt:"BaaS introduction"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7 BaaS \u53ef\u4ee5\u5feb\u901f\u7075\u6d3b\u5730\u642d\u5efa\u533a\u5757\u94fe\u7f51\u7edc\uff0c\u5bf9\u4e8e\u4f01\u4e1a\u6765\u8bf4\uff0c\u6709\u4e86 BaaS \u5e73\u53f0\u5c31\u80fd\u591f\u5bf9\u533a\u5757\u94fe\u4e1a\u52a1\u8fdb\u884c\u7edf\u4e00\u7684\u7ba1\u7406\u3002")),(0,l.kt)("p",null,"\u76f8\u4fe1\u6709\u4e0d\u5c11\u670b\u53cb\u63a5\u89e6\u8fc7\u4ee5\u592a\u574a\u4e0a\u9762\u7684\u5408\u7ea6\u4ee3\u7801\uff0c\u901a\u8fc7 BaaS \u5e73\u53f0\uff0c\u6211\u4eec\u80fd\u591f\u5f88\u8f7b\u677e\u5730\u5728 IDE \u4e0a\u7f16\u5199\u667a\u80fd\u5408\u7ea6\uff0c\u7136\u540e\u628a\u5b83\u90e8\u7f72\u5230\u6211\u4eec\u7684\u521b\u5efa\u51fa\u6765\u7684\u533a\u5757\u94fe\u7f51\u7edc\u4e0a\uff0c\u6700\u540e\u4f9b\u4e0a\u5c42\u7684\u670d\u52a1\u8c03\u7528\u533a\u5757\u94fe\u76f8\u5173\u7684\u5408\u7ea6\u6765\u8fdb\u884c\u4e1a\u52a1\u7684\u6d41\u8f6c\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u94fe\u7684\u8282\u70b9\u975e\u5e38\u591a\uff0c\u5c11\u5219\u51e0\u5341\u4e2a\uff0c\u591a\u5219\u4e0a\u5343\u4e2a\uff0c\u5982\u679c\u6ca1\u6709 BaaS \u5e73\u53f0\u7684\u652f\u6301\uff0c\u6211\u4eec\u5f88\u96be\u76d1\u63a7\u548c\u7ef4\u62a4\u94fe\u7684\u8fd0\u884c\u3002\u901a\u8fc7\u4f7f\u7528 BaaS \u5e73\u53f0\uff0c\u7528\u6237\u4e0d\u4ec5\u80fd\u591f\u8282\u7ea6\u6210\u672c\uff0c\u800c\u4e14\u53ef\u4ee5\u66f4\u52a0\u4fbf\u6377\u5730\u7ba1\u7406\u533a\u5757\u94fe\uff0c\u63d0\u5347\u6574\u4e2a\u7cfb\u7edf\u7684\u5b89\u5168\u7cfb\u6570\u3002"),(0,l.kt)("p",null,"\u8da3\u94fe\u79d1\u6280 BaaS \u4ea7\u54c1\u7684\u67b6\u6784\u603b\u5171\u5206\u4e3a\u56db\u5c42\uff0c\u5206\u522b\u4e3a\u8d44\u6e90\u5c42\u3001\u533a\u5757\u94fe\u5e95\u5c42\u3001\u533a\u5757\u94fe\u670d\u52a1\u5c42\u548c\u5e94\u7528\u5c42\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647274805-f2b960c4-57af-4257-99b4-9185dd5db255.png",alt:"\u8da3\u94fe\u79d1\u6280 BaaS \u4ea7\u54c1\u7684\u67b6\u6784"})),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5bf9 Baas \u5e73\u53f0\u6709\u4e86\u521d\u6b65\u7684\u4e86\u89e3\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770b Apache APISIX \u5728 BaaS \u7cfb\u7edf\u4e0a\u7684\u4f7f\u7528\u573a\u666f\u4e0e\u6536\u83b7\u3002"),(0,l.kt)("h2",{id:"apache-apisix-\u7684\u4f7f\u7528\u573a\u666f"},"Apache APISIX \u7684\u4f7f\u7528\u573a\u666f"),(0,l.kt)("h3",{id:"\u573a\u666f-1\uff1a\u5728-baas-\u7cfb\u7edf\u4e0a\u7684\u843d\u5730\u5b9e\u8df5"},"\u573a\u666f 1\uff1a\u5728 BaaS \u7cfb\u7edf\u4e0a\u7684\u843d\u5730\u5b9e\u8df5"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647327105-2943faa6-518f-4076-9223-b474600fd9d6.png",alt:"Apache APISIX \u5728 BaaS \u7cfb\u7edf\u4e0a\u7684\u5e94\u7528"})),(0,l.kt)("p",null,"\u4ece\u8fd9\u5f20\u56fe\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u67b6\u6784\u4e0d\u4ec5\u662f\u5fae\u670d\u52a1\u5316\u7684\uff0c\u800c\u4e14\u5206\u4e3a\u4e24\u5c42\uff0c\u5206\u522b\u662f\u4e1a\u52a1\u63a5\u5165\u5c42\u548c\u6838\u5fc3\u670d\u52a1\u5c42\u3002"),(0,l.kt)("p",null,"BFF\uff08Backend For Frontend\uff09 \u4e00\u822c\u5bf9\u7740\u524d\u7aef\uff0c\u901a\u8fc7 HTTP \u63a5\u5165\u3002\u6838\u5fc3\u670d\u52a1\u4e00\u822c\u662f\u901a\u8fc7\u7c7b\u4f3c Dubbo\u3001ETCD \u7b49\u670d\u52a1\u6ce8\u518c\uff0c\u6700\u540e\u4f7f\u7528 gRPC \u6765\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u8da3\u94fe\u79d1\u6280\u7684 BaaS \u5e73\u53f0\u524d\u7aef\u8fde\u63a5\u7684\u90fd\u662f BFF \u6a21\u5757\uff0c\u7136\u540e BFF \u6a21\u5757\u518d\u53bb\u8fde\u63a5\u540e\u9762\u7684\u5fae\u670d\u52a1\u6a21\u5757\u3002BFF \u7684\u4f5c\u7528\u4e3b\u8981\u5c31\u662f\u505a\u4e1a\u52a1\u805a\u5408\u3001\u683c\u5f0f\u9002\u914d\uff0c\u5e76\u628a\u6700\u7ec8\u7684\u7ed3\u679c\u6570\u636e\u7ed9\u5230\u524d\u7aef\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u4e1a\u52a1\u6a21\u5757\u9700\u8981\u628a\u76f8\u5173\u4fe1\u606f\u5b58\u5230\u6ce8\u518c\u4e2d\u5fc3\uff08ETCD\uff09\uff0c\u5f53\u8981\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u518d\u901a\u8fc7\u7f51\u5173\u6a21\u5757\u628a\u4fe1\u606f\u8bfb\u53d6\u51fa\u6765\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647395095-39602805-0d56-4838-add1-b8b0f6a5d716.png",alt:"\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e1a\u52a1\u6d41\u7a0b"})),(0,l.kt)("p",null,"\u5728\u6574\u4e2a\u6d41\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u7528\u5230\u4e86 Apache APISIX \u7684\u56db\u4e2a\u7279\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u8f6c\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5168\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u52a0\u8f7d")),(0,l.kt)("p",null,"\u6211\u4eec\u4e0b\u9762\u518d\u6765\u4e86\u89e3\u4e0b\u8fd9\u4e9b\u7279\u6027\u5728\u8da3\u94fe BaaS \u7cfb\u7edf\u4e0a\u662f\u5982\u4f55\u4f7f\u7528\u7684\u3002"),(0,l.kt)("h4",{id:"\u8def\u7531\u8f6c\u53d1"},"\u8def\u7531\u8f6c\u53d1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647494816-d78b6ea1-b291-446c-be36-fc2aae57ca7e.png",alt:"Apache APISIX Proxy-rewrite \u8def\u7531\u8f6c\u53d1"})),(0,l.kt)("p",null,"\u8da3\u94fe\u79d1\u6280\u4f7f\u7528 Apache APISIX \u5b98\u65b9\u63d0\u4f9b\u7684 Proxy-rewrite \u63d2\u4ef6\u6267\u884c\u8def\u7531\u8f6c\u53d1\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2a\u8bf7\u6c42\u8bbf\u95ee 8080 \u7aef\u53e3\uff0c\u901a\u8fc7 Proxy-rewrite \u63d2\u4ef6\uff0c\u8bf7\u6c42\u4f1a\u88ab\u8f6c\u53d1\u5230\u5bf9\u5e94\u670d\u52a1\u7684 API \u4e0a\u53bb\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647560207-1f931523-c9e7-4e58-95e1-c1c56cb1af3a.png",alt:"Apache APISIX Proxy-rewrite \u8def\u7531\u8f6c\u53d1"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u4e3a Proxy-rewrite \u7684\u64cd\u4f5c\u754c\u9762\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u53ef\u4ee5\u901a\u8fc7\u6b63\u5219\u5339\u914d\u6765\u5339\u914d\u81ea\u5df1\u7684\u8f6c\u53d1\u89c4\u5219\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5199 HOST \u6216\u8005\u901a\u8fc7 URL \u6765\u5339\u914d\u3002"),(0,l.kt)("h4",{id:"\u9650\u6d41\u7ba1\u7406"},"\u9650\u6d41\u7ba1\u7406"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647608569-086d3303-027b-4e11-ac09-3a9cca9405bd.png",alt:"Apache APISIX \u9650\u6d41\u7ba1\u7406"})),(0,l.kt)("p",null,"\u5728\u8da3\u94fe BaaS \u5e73\u53f0\u4e2d\uff0c\u5ba2\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u6784\u5efa\u4efb\u4f55\u94fe\u3002\u6b64\u65f6\uff0cBaaS \u5e73\u53f0\u9700\u8981\u5feb\u901f\u5730\u652f\u6301\u521b\u5efa\u8fd9\u4e9b\u94fe\uff0c\u5e76\u5bf9\u5b83\u4eec\u8fdb\u884c\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u8054\u76df\u94fe\u7684\u521b\u5efa\uff0c\u5e76\u4e0d\u662f\u901a\u8fc7\u786c\u4ee3\u7801\u76f4\u63a5\u5199\u5728\u4ee3\u7801\u4e0a\uff0c\u800c\u662f\u901a\u8fc7\u9a71\u52a8\u7ec4\u4ef6\u6765\u89e3\u51b3\u7684\u3002\u5728\u79c1\u6709\u5316\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u6709\u8fd9\u6837\u9a71\u52a8\u7ec4\u4ef6\u6765\u5feb\u901f\u5730\u63d0\u4f9b\u652f\u6301\uff0c\u5e76\u9700\u8981\u63a7\u5236\u9a71\u52a8\u8fdb\u7a0b\u7684\u8bbf\u95ee\u9891\u7387\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647661769-3e026b06-35c6-4b1f-9de9-054c69415e2c.png",alt:"Apache APISIX \u9650\u6d41\u7ba1\u7406"})),(0,l.kt)("p",null,"\u5728\u6ca1\u6709 Apache APISIX \u4e4b\u524d\uff0c\u5e73\u53f0\u9700\u8981\u81ea\u5df1\u5199\u903b\u8f91\u4ee3\u7801\uff0c\u6709 Apache APISIX \u4ee5\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684 Limit-req \u63d2\u4ef6\u6765\u9650\u5236\u8f93\u5165\u8f93\u51fa\uff0c\u4ee5\u8fbe\u5230\u4fdd\u62a4\u7cfb\u7edf\u7684\u76ee\u7684\u3002\u901a\u8fc7 Limit-req \u63d2\u4ef6\u7684\u64cd\u4f5c\u754c\u9762\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u914d\u7f6e\u901f\u5ea6\u3001\u6876\u9ad8\u7b49\u53c2\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647699093-f071ccc1-c122-4463-928e-0eb46d5aa1aa.png",alt:"Apache APISIX \u9650\u6d41\u7ba1\u7406"})),(0,l.kt)("h4",{id:"\u5b89\u5168\u63a7\u5236\u3001\u6743\u9650\u7ba1\u7406"},"\u5b89\u5168\u63a7\u5236\u3001\u6743\u9650\u7ba1\u7406"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630647753459-a693194d-369a-47fb-b9c3-a01fb97853b7.png",alt:"Apache APISIX \u5b89\u5168\u63a7\u5236"})),(0,l.kt)("p",null,"\u5728\u8da3\u94fe\u79d1\u6280\u7684\u79c1\u6709\u5316\u573a\u666f\uff0c\u6709\u4e0d\u5c11\u7528\u6237\u4e0d\u559c\u6b22\u7528\u5e73\u53f0\u6240\u63d0\u4f9b\u7684\u8d26\u53f7\u4f53\u7cfb\uff0c\u8981\u6c42\u5e73\u53f0\u5bf9\u63a5\u4ed6\u4eec\u73b0\u6709\u7684\u8d26\u6237\u7cfb\u7edf\uff0c\u6240\u4ee5\u8da3\u94fe\u79d1\u6280\u4f7f\u7528\u4e86 Apache APISIX \u7684 Access-Auth \u63d2\u4ef6\u6765\u9002\u914d\u7b2c\u4e09\u65b9\u7684\u9274\u6743\u670d\u52a1\u5730\u5740\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648022609-85bbfa93-ab67-4c58-9cbf-8d360115ea4f.png",alt:"Apache APISIX \u5b89\u5168\u63a7\u5236"})),(0,l.kt)("p",null,"\u5728\u8da3\u94fe\u79d1\u6280\u7684 Baas \u5e73\u53f0\u4e2d\uff0c\u6240\u6709\u7684 Web \u8bf7\u6c42\u90fd\u4f1a\u7ecf\u8fc7 Apache APISIX \u7684 Access-Auth \u63d2\u4ef6\uff0c\u5b8c\u6210 cookie \u89e3\u6790\u548c\u9274\u6743\uff0c\u7136\u540e\u5728 HEAD \u5934\u4e2d\u643a\u5e26\u7528\u6237\u4fe1\u606f\uff0c\u4f20\u7ed9\u540e\u7aef\u7684\u5fae\u670d\u52a1\u6765\u5904\u7406\u4e1a\u52a1\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\uff0c\u5fae\u670d\u52a1\u7684\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u53bb\u89e3\u6790 Cookie\uff0c\u800c\u662f\u53ef\u4ee5\u76f4\u63a5\u628a\u7528\u6237\u4fe1\u606f\u53d1\u9001\u5230\u5fae\u670d\u52a1\u6a21\u5757\uff0c\u975e\u5e38\u65b9\u4fbf\u3002"),(0,l.kt)("h4",{id:"\u52a8\u6001\u52a0\u8f7d"},"\u52a8\u6001\u52a0\u8f7d"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648314372-43fcba14-2822-46ca-bc97-916a89871715.png",alt:"Apache APISIX \u52a8\u6001\u52a0\u8f7d"})),(0,l.kt)("p",null,"\u4e0a\u56fe\u5de6\u8fb9\u662f\u8da3\u94fe\u79d1\u6280 Baas \u5e73\u53f0\u7684\u5ba2\u6237\u7aef\u754c\u9762\uff0c\u4e0a\u9762\u6ca1\u6709 \u201c\u5546\u5e97\u201d \u7684\u6309\u94ae\uff1b\u4f46\u5728\u4e0a\u56fe\u7684\u53f3\u8fb9\uff0c\u8da3\u94fe\u79d1\u6280\u7684 Baas \u516c\u5171\u5e73\u53f0\u4e0a\u5374\u6709\u4e00\u4e2a \u201c\u5546\u5e97\u201d \u7684\u6309\u94ae\u3002\u5728\u67d0\u4e9b\u79c1\u6709\u5316\u573a\u666f\u4e2d\u4e0d\u9700\u8981 \u201c\u5546\u5e97\u201d \u6309\u94ae\uff0c\u4f46\u4e8c\u8005\u7684\u540e\u53f0\u670d\u52a1\u662f\u5171\u4eab\u7684\uff0c\u53ea\u8981\u540e\u7aef\u670d\u52a1\u4e00\u542f\u52a8\uff0c\u5e73\u53f0\u754c\u9762\u5c31\u4f1a\u6839\u636e\u9700\u6c42\u8fdb\u884c\u4e0d\u540c\u7684\u663e\u793a\u3002"),(0,l.kt)("p",null,"\u8da3\u94fe\u79d1\u6280\u5229\u7528 Apache APISIX \u4e0e\u670d\u52a1\u4e2d\u5fc3\u534f\u540c\u8fd0\u4f5c\uff0c\u4fdd\u8bc1\u524d\u7aef\u5fae\u670d\u52a1\u4e1a\u52a1\u6a21\u5757\u7684\u65b0\u589e\u548c\u8c03\u6574\uff0c\u8fd9\u8ba9\u8da3\u94fe\u79d1\u6280 Baas \u5e73\u53f0\u7684\u7ebf\u4e0a\u53d1\u5e03\u6d41\u7a0b\u53d8\u5f97\u975e\u5e38\u7b80\u5355\u3002"),(0,l.kt)("h3",{id:"\u573a\u666f-2\uff1a\u5728\u533a\u5757\u94fe\u8282\u70b9\u4e0a\u7684\u843d\u5730\u5b9e\u8df5"},"\u573a\u666f 2\uff1a\u5728\u533a\u5757\u94fe\u8282\u70b9\u4e0a\u7684\u843d\u5730\u5b9e\u8df5"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648472228-b61451ca-4e4d-4410-877c-395c8770c85e.png",alt:"\u533a\u5757\u94fe\u8282\u70b9"})),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u56fe\u53ef\u4ee5\u770b\u5230\u6709 A\u3001B\u3001C \u4e09\u6761\u94fe\uff0c\u8fd9\u4e09\u6761\u94fe\u662f\u600e\u4e48\u521b\u5efa\u51fa\u6765\u7684\u5462\uff1f"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u901a\u8fc7 BaaS \u5e73\u53f0\u8d2d\u4e70\u4e86\u4e00\u6761\u94fe\uff0c\u5b83\u7684\u4e0a\u5c42\u4e1a\u52a1\u6216\u5f00\u53d1\u8005\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u76f4\u8fde\u8282\u70b9\uff0c\u6bd4\u5982\u67d0\u94f6\u884c\u8fde\u5de6\u4e09\u4e2a\uff0c\u67d0\u4fdd\u9669\u8fde\u53f3\u4e09\u4e2a\uff0c\u6216\u8005\u6709\u7684\u7528\u6237\u5c31\u8bbf\u95ee\u4e00\u6574\u6761\u94fe\u3002\u8fd9\u6837\u4f1a\u5e26\u6765\u4e00\u4e2a\u5f88\u5927\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u57fa\u672c\u4e0a\u6bcf\u4e2a\u8282\u70b9\u90fd\u4f1a\u88ab\u8bbf\u95ee\u5230\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5728\u516c\u7f51\u73af\u5883\u4e0a\u628a\u6240\u6709\u7684\u533a\u5757\u94fe\u4e0a\u7684\u8282\u70b9\u5168\u90e8\u90fd\u66b4\u9732\u51fa\u6765\u3002"),(0,l.kt)("h4",{id:"\u8282\u7ea6\u516c\u7f51\u7aef\u53e3"},"\u8282\u7ea6\u516c\u7f51\u7aef\u53e3"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648545755-fd385832-3375-4ac9-89f6-4c2bb10780be.png",alt:"\u516c\u7f51\u7aef\u53e3"})),(0,l.kt)("p",null,"\u4ee5\u8fd9\u5f20\u56fe\u4e3a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 6 \u4e2a\u8282\u70b9\uff0c\u90a3\u8fd9\u6761\u94fe\u5c31\u81f3\u5c11\u9700\u8981\u6709 6 \u4e2a\u516c\u7f51 IP \u548c 6 \u4e2a\u7aef\u53e3\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u5bf9\u79c1\u6709\u5316\u7684\u7528\u6237\u6765\u8bf4\u53ef\u80fd\u8fd8\u53ef\u4ee5\u63a5\u53d7\uff0c\u4f46\u662f\u5bf9\u4e8e\u50cf\u8da3\u94fe\u8fd9\u6837\u5168\u90e8\u5bf9\u4e92\u8054\u7f51\u7528\u6237\u5f00\u653e\u7684 BaaS \u5e73\u53f0\uff0c\u5c11\u5219\u9700\u8981\u51e0\u5341\u4e2a\uff0c\u591a\u5219\u9700\u8981\u4e0a\u767e\u4e2a\u3001\u4e0a\u5343\u4e2a\u516c\u7f51 IP\u3002\u8fd9\u6837\u4e0d\u4ec5\u6210\u672c\u975e\u5e38\u9ad8\uff0c\u4e5f\u5bf9\u516c\u7f51 IP \u8d44\u6e90\u9020\u6210\u4e86\u6d6a\u8d39\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8da3\u94fe\u79d1\u6280\u7684 Baas \u5e73\u53f0\u4f7f\u7528\u4e86 Apache APISIX \u7edf\u4e00\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u65e0\u9700\u8054\u76df\u94fe\u5168\u91cf\u8282\u70b9\u66b4\u9732\u5916\u7f51\u8bbf\u95ee\u7aef\u53e3\uff0c\u53ef\u4ee5\u6709\u6548\u8282\u7ea6\u6210\u672c\u3002"),(0,l.kt)("h4",{id:"\u8bbf\u95ee\u6743\u9650\u63a7\u5236"},"\u8bbf\u95ee\u6743\u9650\u63a7\u5236"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648599393-f4e6a152-f6d6-47a4-b42a-a9a644be37f8.png",alt:"\u8bbf\u95ee\u6743\u9650\u63a7\u5236"})),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f20\u7edf\u8f6f\u4ef6\u6765\u8bf4\uff0c\u56e0\u4e3a\u4e0d\u540c\u7684\u5f02\u6784\u94fe\u8bbf\u95ee\u90fd\u6709\u81ea\u5df1\u975e\u5e38\u590d\u6742\u7684 RBAC \u6743\u9650\u63a7\u5236\uff0c\u6240\u4ee5\u7528\u6237\u9700\u8981\u5728\u5ba2\u6237\u7aef\u52a0\u5f88\u591a\u8bc1\u4e66\uff0c\u975e\u5e38\u4ee4\u4eba\u5934\u75bc\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u75db\u70b9\uff0c\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u901a\u8fc7 Apache APISIX \u7684 Key-auth \u63d2\u4ef6\u8ba9\u6709\u6743\u9650\u7684\u7528\u6237\u76f4\u63a5\u80fd\u591f\u8bbf\u95ee\uff0c\u5e76\u4e14\u7edf\u4e00\u6240\u6709\u94fe\u7684\u6743\u9650\u63a7\u5236\u3002"),(0,l.kt)("h4",{id:"\u96c6\u7fa4\u5316\u63d0\u5347\u8282\u70b9\u7a33\u5b9a\u6027"},"\u96c6\u7fa4\u5316\u63d0\u5347\u8282\u70b9\u7a33\u5b9a\u6027"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648704337-6e02ca0e-3e51-4251-8455-5b3bb7668912.png",alt:"\u533a\u5757\u94fe\u8282\u70b9"})),(0,l.kt)("p",null,"\u533a\u5757\u94fe\u7684\u4e00\u4e2a\u7279\u6027\u662f\uff1a\u672c\u8d28\u4e0a\uff0c\u8bbf\u95ee\u4efb\u4f55\u4e00\u4e2a\u8282\u70b9\u90fd\u662f\u4e00\u6837\u7684\u3002\u5c31\u50cf\u6bd4\u7279\u5e01\u4e00\u6837\uff0c\u6211\u4eec\u8bbf\u95ee\u4efb\u4f55\u4e00\u4e2a\u8282\u70b9\u90fd\u80fd\u62ff\u5230\u6570\u636e\uff0c\u6240\u4ee5\u5f88\u591a\u7528\u6237\u76f4\u63a5\u5bf9\u7740\u67d0\u4e2a\u8282\u70b9\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648773610-b56cb8aa-f690-4b30-9933-78f429fd20bc.png",alt:"\u63d0\u5347\u8282\u70b9\u7a33\u5b9a\u6027"})),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u76f4\u63a5\u8bbf\u95ee\u5355\u8282\u70b9\u7684\u6a21\u5f0f\u5f88\u5bb9\u6613\u53d7\u5230\u653b\u51fb\u3002\u6bd4\u5982\u8bf4\uff0c\u94f6\u884c\u7684\u5e76\u53d1\u91cf\u975e\u5e38\u9ad8\uff0cTPS \u53ef\u4ee5\u8fbe\u5230 4-5W/\u79d2\uff0c\u6bcf\u4e00\u6b21\u4ea4\u6613\u90fd\u4f1a\u51b2\u51fb\u8fd9\u4e2a\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u8fbe\u5230\u5feb\u901f\u52a8\u6001\u6269\u5bb9\u7684\u6548\u679c\uff0c\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u5229\u7528 Apache APISIX \u5728 Kubernetes \u4e0a\u7684 HPA \u90e8\u7f72\u6a21\u5f0f\uff0c\u6839\u636e\u6d41\u91cf\u52a8\u6001\u5730\u6269\u5c55\uff0c\u6709\u6548\u89e3\u51b3\u4e86\u5355\u70b9\u6d41\u91cf\u51b2\u51fb\u95ee\u9898\u3002"),(0,l.kt)("h4",{id:"\u591a\u534f\u8bae\u652f\u6301"},"\u591a\u534f\u8bae\u652f\u6301"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648817779-0c1ae8f9-0b40-403a-a759-e55f4423a6cf.png",alt:"\u591a\u534f\u8bae"})),(0,l.kt)("p",null,"\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4f7f\u7528\u4e86\u5f88\u591a\u7684\u5f02\u6784\u94fe\uff0c\u8fd9\u5bfc\u81f4\u4f7f\u7528\u5230\u7684\u534f\u8bae\u975e\u5e38\u591a\u6837\uff0c\u5982 HTTP\u3001RPC\u3001WebSocket \u7b49\u3002\u800c Apache APISIX \u80fd\u5f88\u597d\u5730\u652f\u6301\u591a\u534f\u8bae\uff0c\u5b8c\u5168\u80fd\u6ee1\u8db3\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u5728\u76f8\u5173\u573a\u666f\u4e2d\u7684\u4f7f\u7528\uff0c\u80fd\u663e\u8457\u51cf\u5c11\u5f00\u53d1\u7684\u6210\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648857753-05f65dc5-0ea6-4e9d-b9d4-b97089f97d59.png",alt:"\u591a\u534f\u8bae"}),"\nng)"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-apache-apisix"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX"),(0,l.kt)("p",null,"\u5728 Apache APISIX \u4e4b\u524d\uff0c\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u5df2\u7ecf\u5728\u4f7f\u7528 Kong \u4e86\uff0c\u4f46\u662f\u540e\u6765 Kong \u88ab\u653e\u5f03\u4e86\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u653e\u5f03 Kong\uff1f")),(0,l.kt)("p",null,"Kong \u4f7f\u7528 PostgreSQL \u6765\u5b58\u50a8\u5b83\u7684\u4fe1\u606f\uff0c\u8fd9\u663e\u7136\u4e0d\u662f\u4e00\u4e2a\u597d\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648907559-71716f82-6740-468c-afe0-49daa426d93a.png",alt:"Kong"})),(0,l.kt)("p",null,"\u5728\u8f6f\u4ef6\u884c\u4e1a\uff0c\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528\u914d\u7f6e\u975e\u5e38\u590d\u6742\u3002\u4e0d\u4ec5\u9700\u8981\u914d\u5907\u4e13\u95e8\u7684 DBA\uff0c\u5b9e\u65bd\u96be\u5ea6\u4e5f\u975e\u5e38\u5927\u3002"),(0,l.kt)("p",null,"\u8da3\u94fe\u79d1\u6280 BaaS \u7cfb\u7edf\u672c\u8eab\u5df2\u7ecf\u5728\u4f7f\u7528 MySQL\uff0c\u5982\u679c\u8fd9\u91cc\u8fd8\u9700\u8981\u642d\u5efa\u4e00\u4e2a PostgreSQL \u6570\u636e\u5e93\u7684\u8bdd\uff0c\u610f\u5473\u7740\u8da3\u94fe\u79d1\u6280\u7684 BaaS \u7cfb\u7edf\u9700\u8981\u6709\u4e24\u5957\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3002\u8fd9\u4f1a\u7ed9\u5b9e\u65bd\u96be\u5ea6\u3001\u8fd0\u7ef4\u6210\u672c\u5e26\u6765\u66f4\u591a\u9ebb\u70e6\uff0c\u5f15\u5165\u66f4\u591a\u98ce\u9669\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u56e0\u4e3a\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e5f\u6709\u4e0d\u5c11\u5730\u65b9\u7528\u5230\u4e86 etcd\uff0c\u6240\u4ee5\u6700\u540e\u8da3\u94fe\u79d1\u6280\u9009\u62e9\u653e\u5f03 Kong\uff0c\u5168\u9762\u6295\u5411\u4e86\u57fa\u4e8e etcd \u7684 Apache APISIX\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528 Nginx\uff1f")),(0,l.kt)("p",null,"\u53ef\u80fd\u4f1a\u6709\u670b\u53cb\u4f1a\u60f3\uff0c\u90a3\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528 Nginx\uff1f"),(0,l.kt)("p",null,"\u5176\u5b9e\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4ee5\u524d\u7528\u7684\u5c31\u662f Nginx\uff0c\u4f46\u662f\u540e\u6765\u53d1\u73b0\uff0cNginx \u4e0e Apache APISIX \u76f8\u6bd4\u8fd8\u662f\u6709\u5f88\u591a\u4e0d\u5b8c\u5584\u7684\u5730\u65b9\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648946732-532ee7ac-478e-4f6c-aaa6-1f7f6be60693.png",alt:"Nginx"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u70ed\u542f\u52a8\u3001\u70ed\u63d2\u4ef6\u95ee\u9898"))),(0,l.kt)("p",null,"\u5728\u8da3\u94fe BaaS \u5e73\u53f0\u4e2d\uff0c\u6211\u4eec\u4e0d\u4ec5\u9700\u8981\u5bf9\u8054\u76df\u94fe\u8fdb\u884c\u7ba1\u7406\uff0c\u800c\u4e14\u8981\u80fd\u591f\u968f\u65f6\u5bf9\u8282\u70b9\u8fdb\u884c\u65b0\u589e\u3001\u5220\u9664\u3002\u5982\u679c\u4f7f\u7528 Nginx\uff0c\u4e0d\u4ec5\u5b58\u5728\u6269\u5c55\u6027\u95ee\u9898\uff0c\u8c03\u6574\u914d\u7f6e\u540e\u8fd8\u9700\u8981\u91cd\u542f\u3002\u800c\u4e14\u5728\u63d2\u4ef6\u7684\u7f16\u5199\u4e0a\uff0cNginx \u4e0a\u9700\u8981\u914d\u7f6e\u975e\u5e38\u590d\u6742\u7684\u89c4\u5219\u4ee3\u7801\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u5316\u56f0\u96be"))),(0,l.kt)("p",null,"Nginx \u7684\u96c6\u7fa4\u5316\u975e\u5e38\u56f0\u96be\uff0c\u800c Apache APISIX \u53ef\u4ee5\u901a\u8fc7 etcd \u96c6\u7fa4\u7684\u589e\u5f3a\u529f\u80fd\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u65e0\u6cd5\u76f4\u63a5\u4ee3\u7406 TCP\u3001UDP"))),(0,l.kt)("p",null,"Nginx \u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ea\u80fd\u5b9e\u73b0\u4e03\u5c42\u7f51\u7edc\u7684\u4ee3\u7406\uff0c\u5982\u679c\u8981\u652f\u6301\u56db\u5c42\u7f51\u7edc\uff0c\u9700\u8981\u628a Stream \u6a21\u5757\u91cd\u65b0\u7f16\u8bd1\uff0c\u800c Apache APISIX \u80fd\u540c\u65f6\u652f\u6301\u56db / \u4e03\u5c42\u7684\u4ee3\u7406\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u826f\u597d\u7684 Dashboard"))),(0,l.kt)("p",null,"Nginx \u6ca1\u6709 Dashboard\uff0c\u800c Apache APISIX Dashboard \u80fd\u8ba9\u5f00\u53d1\u3001\u8fd0\u7ef4\u4eba\u5458\u5bf9\u4e8e\u7ba1\u7406\u8282\u70b9\u7684\u96be\u5ea6\u53d8\u5c0f\u3002"),(0,l.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630648997393-b5e6dd0e-3a2f-4dc7-94c1-cc892054ad09.png",alt:"\u672a\u6765\u89c4\u5212"})),(0,l.kt)("h3",{id:"1\u8fd0\u7528-apache-apisix-\u63d0\u4f9b\u6216\u81ea\u7814\u7684\u65e5\u5fd7\u63d2\u4ef6"},"1.\u8fd0\u7528 Apache APISIX \u63d0\u4f9b\u6216\u81ea\u7814\u7684\u65e5\u5fd7\u63d2\u4ef6"),(0,l.kt)("p",null,"Apache APISIX \u5b98\u7f51\u5df2\u63d0\u4f9b\u4e86\u4e0d\u5c11\u65e5\u5fd7\u63d2\u4ef6\uff0c\u6bd4\u5982\u5bf9 HTTP\u3001UDP \u7684\u652f\u6301\uff0c\u5305\u62ec Kafka \u7b49\uff0c\u4f46\u50cf\u8da3\u94fe BaaS \u8fd9\u6837\u9700\u8981\u7ba1\u63a7\u6210\u5343\u4e0a\u4e07\u533a\u5757\u94fe\u7f51\u7edc\u7684\u5e73\u53f0\uff0c\u5f53\u6bcf\u6b21\u95ee\u9898\u53d1\u751f\u7684\u65f6\u5019\uff0c\u5728\u65e5\u5fd7\u4e2d\u7ffb\u627e\u6545\u969c\u75d5\u8ff9\u90fd\u662f\u4e00\u4ef6\u975e\u5e38\u5934\u75db\u7684\u4e8b\u60c5\u3002"),(0,l.kt)("p",null,"\u5728\u4e0d\u4e45\u7684\u5c06\u6765\uff0c\u8da3\u94fe\u79d1\u6280\u4f1a\u5728 BaaS \u7cfb\u7edf\u548c\u533a\u5757\u94fe\u7cfb\u7edf\u4e4b\u95f4\uff0c\u57fa\u4e8e Apache APISIX \u589e\u52a0\u4e00\u4e9b APM \u529f\u80fd\uff0c\u63d0\u5347\u591a\u94fe\u573a\u666f\u4e0b\u7684\u8fd0\u7ef4\u7ba1\u7406\u6548\u7387\u3002"),(0,l.kt)("h3",{id:"2\u5f00\u53d1\u76d1\u7ba1\u63d2\u4ef6\uff0c\u5b9e\u73b0\u64cd\u4f5c\u7559\u75d5\u53ca\u6eaf\u6e90"},"2.\u5f00\u53d1\u76d1\u7ba1\u63d2\u4ef6\uff0c\u5b9e\u73b0\u64cd\u4f5c\u7559\u75d5\u53ca\u6eaf\u6e90"),(0,l.kt)("p",null,"\u56fd\u5185\u5bf9\u4e8e\u533a\u5757\u94fe\u7684\u76d1\u7ba1\u975e\u5e38\u4e25\u683c\uff0c\u4e00\u5207\u64cd\u4f5c\u90fd\u9700\u8981\u7559\u75d5\u548c\u6eaf\u6e90\u3002\u672a\u6765\uff0c\u8da3\u94fe\u79d1\u6280\u4f1a\u57fa\u4e8e Apache APISIX \u5f00\u53d1\u76d1\u7ba1\u63d2\u4ef6\u6765\u63d0\u5347\u76d1\u7ba1\u80fd\u529b\uff0c\u589e\u52a0 VIP\u3001\u767d\u540d\u5355\u3001\u56de\u653e\u7b49\u529f\u80fd\u3002"),(0,l.kt)("h3",{id:"3\u4f7f\u7528-apisix-ingress-controller\uff0c\u4ee3\u66ff-kubernetes-\u9ed8\u8ba4\u7684-nginx-ingress"},"3.\u4f7f\u7528 APISIX Ingress Controller\uff0c\u4ee3\u66ff Kubernetes \u9ed8\u8ba4\u7684 Nginx-Ingress"),(0,l.kt)("p",null,"\u5728\u90e8\u7f72 Kubernetes \u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e00\u822c\u90fd\u4f1a\u9009\u62e9 Nginx-Ingress \u6765\u5904\u7406\u5916\u7f51\u8bf7\u6c42\uff0c\u4f46\u56e0\u4e3a\u4e0a\u9762\u63d0\u5230\u7684\u4e00\u4e9b Nginx \u7684\u95ee\u9898\uff0c\u8da3\u94fe\u79d1\u6280\u6b63\u5728\u8c03\u7814\u4f7f\u7528 APISIX Ingress Controller\u3002"),(0,l.kt)("h3",{id:"4\u63a2\u7d22-service-mesh"},"4.\u63a2\u7d22 Service Mesh"),(0,l.kt)("p",null,"\u8da3\u94fe\u79d1\u6280\u4e4b\u524d\u5c1d\u8bd5\u8fc7 traffic-mesh\uff0c\u672a\u6765\u4f1a\u5c1d\u8bd5\u4f7f\u7528 APISIX Mesh\u3002"))}k.isMDXComponent=!0}}]);