"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80795],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=o(a),m=n,k=h["".concat(c,".").concat(m)]||h[m]||u[m]||p;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},75097:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return o},toc:function(){return s},default:function(){return h}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),i={title:"\u793e\u533a\u5468\u62a5\uff5c\u65b0\u664b committer \u4e00\u4f4d\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",keywords:["Apache APISIX","\u793e\u533a\u5468\u62a5","APISIX","API Gateway","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Events"]},l=void 0,c={permalink:"/zh/blog/2021/09/30/weekly-report",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-09-30-weekly-report.md",title:"\u793e\u533a\u5468\u62a5\uff5c\u65b0\u664b committer \u4e00\u4f4d\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2021-09-30T00:00:00.000Z",formattedDate:"2021\u5e749\u670830\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:.95,truncated:!0,authors:[],prevItem:{title:"Apache APISIX \u793e\u533a\u6210\u5458\u52a9\u529b openEuler \u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u521b\u65b0\u7248",permalink:"/zh/blog/2021/10/01/openEuler"},nextItem:{title:"Release Apache APISIX 2.10.0",permalink:"/zh/blog/2021/09/29/release-apache-apisix-2.10-en"}},o={authorsImageUrls:[]},s=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[]},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #5080",id:"issue-5080",children:[]},{value:"Issue #5108",id:"issue-5108",children:[]}]},{value:"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[]},{value:"\u672c\u5468\u535a\u6587\u63a8\u8350",id:"\u672c\u5468\u535a\u6587\u63a8\u8350",children:[]}],u={toc:s};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4ece 9.13 \u5230 9.30, \u6709 32 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 93 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,p.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,p.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,p.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u6bcf\u5468\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,p.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632907894918-c455f40e-a175-4944-8fac-11c590d43786.jpg",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632908362102-b0b665e2-f37f-4a82-b8a3-68914925b565.jpg",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,p.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,p.kt)("h3",{id:"issue-5080"},"Issue #5080"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5080"},"https://github.com/apache/apisix/issues/5080")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u4e4b\u524d\u4e0a\u6e38\u670d\u52a1\u4f7f\u7528 IP \u8ba4\u8bc1\uff0c\u5b9e\u9645\u7684\u5ba2\u6237\u7aef IP \u662f\u4ece x-forwarded-for \u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u7684\u3002\u73b0\u5728\u9700\u8981\u6539\u6210\u7f51\u5173 HMAC \u8ba4\u8bc1\uff0c\u6240\u4ee5\u9700\u8981\u901a\u8fc7\u7f51\u5173\u5c4f\u853d\u4e0a\u6e38 IP \u8ba4\u8bc1\u3002\u5c1d\u8bd5\u901a\u8fc7\u4ee3\u7406\u91cd\u5199\u63d2\u4ef6\u4fee\u6539 x-forwarded-for\uff0c\u4f46\u662f\u6ca1\u6709\u751f\u6548\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1632799650125-14edb988-f2ad-434d-8d13-04ff3016eb5a.png",alt:"\u95ee\u9898\u63cf\u8ff0\u622a\u56fe"})),(0,p.kt)("h3",{id:"issue-5108"},"Issue #5108"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5108"},"https://github.com/apache/apisix/issues/5108")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),'\uff1a\u5982\u4e0b\uff0c\u5f53\u5728\u8def\u7531\u4e0a\u542f\u7528\u8bf7\u6c42\u9a8c\u8bc1\u63d2\u4ef6:" delete "'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/35 -H \'X-API-KEY: xxxxxxxxxxxxxxxxxxx\' -X PUT -d \'\n{\n    "uri":"/products/create",\n    "plugins":{\n        "request-validation":{\n            "body_schema":{\n                "type":"object",\n                "required":[\n                    "productName",\n                    "price"\n                ],\n                "properties":{\n                    "productName":{\n                        "type":"string"\n                    },\n                    "price":{\n                        "type":"number"\n                    }\n                }\n            }\n        }\n    },\n    "upstream":{\n        "service_name":"PRODUCTSSERVICE",\n        "type":"roundrobin",\n        "discovery_type":"eureka"\n    }\n}\'\n')),(0,p.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bf9\u5176\u8fdb\u884c\u6d4b\u8bd5\u65f6\uff0c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/products/create -X POST -d \'{"product-Name":"Laptop","pri-ce":12345.00}\'\n')),(0,p.kt)("p",null,"\u5f97\u5230\u4ee5\u4e0b\u9ed8\u8ba4\u4fe1\u606f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'property "price" is required\n')),(0,p.kt)("h2",{id:"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u672c\u5468\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5012"},"debug-mode \u652f\u6301\u52a8\u6001\u8bf7\u6c42\u8fc7\u6ee4"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tzssangglass"},"tzssangglass"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5068"},"\u652f\u6301\u6ce8\u5165\u903b\u8f91\u5230 APISIX \u65b9\u6cd5\u4e2d"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4980"},"stream_route \u652f\u6301\u5728 IP \u5339\u914d\u4e2d\u4f7f\u7528 CIDR"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Zheaoli"},"Zheaoli"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5038"},"hmac-auth \u652f\u6301\u6821\u9a8c\u8bf7\u6c42\u4f53"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/arthur-zhang"},"arthur-zhang"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/685"},"APISIX Ingress controller \u96c6\u6210\u4e86 cert-manager \uff0c\u7528\u6237\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u7ba1\u7406TLS\u8bc1\u4e66\uff0c\u5e76\u4e0e APISIX Ingress \u914d\u5408\u4f7f\u7528"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/lingsamuel"},"lingsamuel"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/pull/1946"},"- APISIX Dashboard \u652f\u6301\u591a\u79cd\u914d\u7f6e\u6587\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),"\uff09"))),(0,p.kt)("h2",{id:"\u672c\u5468\u535a\u6587\u63a8\u8350"},"\u672c\u5468\u535a\u6587\u63a8\u8350"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"http://apisix.apache.org/blog/2021/09/16/tencent-cloud"},"Apache APISIX \u5728\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u4f8b\u5b50\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"http://apisix.apache.org/blog/2021/09/07/how-to-use-apisix-auth"},"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5")),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u548c\u7ec6\u8282\u4f7f\u7528\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"http://apisix.apache.org/blog/2021/09/07/iQIYI-usercase"},"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5")),(0,p.kt)("p",{parentName:"li"},"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u57fa\u4e8e Apache APISIX \u7f51\u5173\uff0c\u7231\u5947\u827a\u6280\u672f\u56e2\u961f\u662f\u5982\u4f55\u8fdb\u884c\u516c\u53f8\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u878d\u5408\uff0c\u6253\u9020\u51fa\u5168\u65b0\u7684\u7f51\u5173\u670d\u52a1\u3002"))))}h.isMDXComponent=!0}}]);