"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97296],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,P=g["".concat(i,".").concat(d)]||g[d]||s[d]||c;return n?r.createElement(P,l(l({ref:t},u),{},{components:n})):r.createElement(P,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58843:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return i},assets:function(){return p},toc:function(){return u},default:function(){return g}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),l={title:"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","etcd","HTTP","gRPC"],Description:"\u4ece\u53bb\u5e74 10 \u6708\u53d1\u5e03 Apache APISIX 2.0 \u7248\u672c\u4ee5\u6765\uff0c\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u4e86 8 \u4e2a\u6708\u3002\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86 etcd \u7684 HTTP API \u7684\u4e00\u4e9b\u8ddf gRPC API \u4ea4\u4e92\u7684\u95ee\u9898\u3002\u4e8b\u5b9e\u4e0a\uff0c\u62e5\u6709 gRPC-gateway \u5e76\u4e0d\u610f\u5473\u7740\u80fd\u591f\u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff0c\u8fd9\u91cc\u8fd8\u662f\u6709\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002",tags:["Technology"]},o=void 0,i={permalink:"/zh/blog/2021/06/30/etcd3-support-HTTP-access-perfectly",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-06-30-etcd3-support-HTTP-access-perfectly.md",title:"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f",description:"\u4ece\u53bb\u5e74 10 \u6708\u53d1\u5e03 Apache APISIX 2.0 \u7248\u672c\u4ee5\u6765\uff0c\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u4e86 8 \u4e2a\u6708\u3002\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86 etcd \u7684 HTTP API \u7684\u4e00\u4e9b\u8ddf gRPC API \u4ea4\u4e92\u7684\u95ee\u9898\u3002\u4e8b\u5b9e\u4e0a\uff0c\u62e5\u6709 gRPC-gateway \u5e76\u4e0d\u610f\u5473\u7740\u80fd\u591f\u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff0c\u8fd9\u91cc\u8fd8\u662f\u6709\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002",date:"2021-06-30T00:00:00.000Z",formattedDate:"2021\u5e746\u670830\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:1.785,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",permalink:"/zh/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX"},nextItem:{title:"Release Apache APISIX 2.7.0",permalink:"/zh/blog/2021/06/29/release-apache-apisix-2.7-en"}},p={authorsImageUrls:[void 0]},u=[{value:"\u6253\u7834 gRPC \u7684\u9ed8\u8ba4\u9650\u5236",id:"\u6253\u7834-grpc-\u7684\u9ed8\u8ba4\u9650\u5236",children:[]},{value:"\u5bf9\u670d\u52a1\u7aef\u8bc1\u4e66\u7684\u6709\u8da3\u7528\u6cd5",id:"\u5bf9\u670d\u52a1\u7aef\u8bc1\u4e66\u7684\u6709\u8da3\u7528\u6cd5",children:[]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[]}],s={toc:u};function g(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u4ece\u53bb\u5e74 10 \u6708\u53d1\u5e03 Apache APISIX 2.0 \u7248\u672c\u4ee5\u6765\uff0c\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u4e86 8 \u4e2a\u6708\u3002\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86 etcd \u7684 HTTP API \u7684\u4e00\u4e9b\u8ddf gRPC API \u4ea4\u4e92\u7684\u95ee\u9898\u3002\u4e8b\u5b9e\u4e0a\uff0c\u62e5\u6709 gRPC-gateway \u5e76\u4e0d\u610f\u5473\u7740\u80fd\u591f\u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff0c\u8fd9\u91cc\u8fd8\u662f\u6709\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002")),(0,c.kt)("p",null,"etcd \u5347\u7ea7\u5230 3.x \u7248\u672c\u540e\uff0c\u5176\u5bf9\u5916 API \u7684\u534f\u8bae\u4ece\u666e\u901a\u7684 HTTP1 \u5207\u6362\u5230\u4e86 gRPC\u3002\u4e3a\u4e86\u517c\u987e\u90a3\u4e9b\u4e0d\u80fd\u4f7f\u7528 gRPC \u7684\u7279\u6b8a\u7fa4\u4f53\uff0cetcd \u901a\u8fc7 gRPC-gateway \u7684\u65b9\u5f0f\u4ee3\u7406 HTTP1 \u8bf7\u6c42\uff0c\u4ee5 gRPC \u5f62\u5f0f\u53bb\u8bbf\u95ee\u65b0\u7684 gRPC API\u3002\uff08\u7531\u4e8e HTTP1 \u5ff5\u8d77\u6765\u592a\u8fc7\u62d7\u53e3\uff0c\u4ee5\u4e0b\u5c06\u4e4b\u7b80\u5316\u6210 HTTP\uff0c\u6b63\u597d\u548c gRPC \u80fd\u591f\u5bf9\u5e94\u3002\u8bf7\u4e0d\u8981\u7ea0\u7ed3 gRPC \u4e5f\u662f HTTP \u8bf7\u6c42\u7684\u8fd9\u79cd\u95ee\u9898\u3002\uff09"),(0,c.kt)("p",null,"Apache APISIX \u5f00\u59cb\u7528 etcd \u7684\u65f6\u5019\uff0c\u7528\u7684\u662f etcd v2 \u7684 API\u3002\u4ece Apache APISIX 2.0 \u7248\u672c\u8d77\uff0c\u6211\u4eec\u628a\u4f9d\u8d56\u7684 etcd \u7248\u672c\u5347\u7ea7\u5230 3.x\u3002\u7531\u4e8e Lua \u751f\u6001\u5708\u91cc\u9762\u6ca1\u6709 gRPC \u5e93\uff0c\u6240\u4ee5 etcd \u5bf9 HTTP \u7684\u517c\u5bb9\u5e2e\u4e86\u6211\u4eec\u5f88\u5927\u7684\u5fd9\uff0c\u8fd9\u6837\u5c31\u4e0d\u7528\u82b1\u5f88\u5927\u5fc3\u601d\u53bb\u8865\u8fd9\u4e2a\u77ed\u677f\u4e86\u3002"),(0,c.kt)("p",null,"\u4ece\u53bb\u5e74 10 \u6708\u53d1\u5e03 Apache APISIX 2.0 \u7248\u672c\u4ee5\u6765\uff0c\u73b0\u5728\u5df2\u7ecf\u8fc7\u53bb\u4e86 8 \u4e2a\u6708\u3002\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86 etcd \u7684 HTTP API \u7684\u4e00\u4e9b\u8ddf gRPC API \u4ea4\u4e92\u7684\u95ee\u9898\u3002\u4e8b\u5b9e\u4e0a\uff0c\u62e5\u6709 gRPC-gateway \u5e76\u4e0d\u610f\u5473\u7740\u80fd\u591f\u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff0c\u8fd9\u91cc\u8fd8\u662f\u6709\u4e9b\u7ec6\u5fae\u7684\u5dee\u522b\u3002"),(0,c.kt)("h3",{id:"\u6253\u7834-grpc-\u7684\u9ed8\u8ba4\u9650\u5236"},"\u6253\u7834 gRPC \u7684\u9ed8\u8ba4\u9650\u5236"),(0,c.kt)("p",null,"\u5c31\u5728\u51e0\u5929\u524d\uff0cetcd \u53d1\u5e03\u4e86 v3.5.0 \u7248\u672c\u3002\u8fd9\u4e2a\u7248\u672c\u7684\u53d1\u5e03\uff0c\u4e86\u5374\u56f0\u6270\u6211\u4eec\u5f88\u957f\u65f6\u95f4\u7684\u4e00\u4e2a\u95ee\u9898\u3002"),(0,c.kt)("p",null,"\u8ddf HTTP \u4e0d\u540c\u7684\u662f\uff0cgRPC \u9ed8\u8ba4\u9650\u5236\u4e86\u4e00\u6b21\u8bf7\u6c42\u53ef\u4ee5\u8bfb\u53d6\u7684\u6570\u636e\u5927\u5c0f\u3002\u8fd9\u4e2a\u9650\u5236\u53eb\u505a \u201cMaxCallRecvMsgSize\u201d\uff0c\u9ed8\u8ba4\u662f 4MiB\u3002\u5f53 Apache APISIX \u5168\u91cf\u540c\u6b65 etcd \u6570\u636e\u65f6\uff0c\u5047\u5982\u914d\u7f6e\u591f\u591a\uff0c\u5c31\u4f1a\u89e6\u53d1\u8fd9\u4e00\u4e0a\u9650\uff0c\u62a5\u9519 \u201cgrpc: received message larger than max\u201d\u3002"),(0,c.kt)("p",null,"\u795e\u5947\u7684\u662f\uff0c\u5982\u679c\u4f60\u7528 etcdctl \u53bb\u8bbf\u95ee\uff0c\u8fd9\u65f6\u5019\u5374\u4e0d\u4f1a\u6709\u4efb\u4f55\u95ee\u9898\u3002\u8fd9\u662f\u56e0\u4e3a\u8fd9\u4e2a\u9650\u5236\u662f\u53ef\u4ee5\u5728\u8ddf gRPC server \u5efa\u7acb\u8fde\u63a5\u65f6\u52a8\u6001\u8bbe\u7f6e\u7684\uff0cetcdctl \u7ed9\u8fd9\u4e2a\u9650\u5236\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u5f88\u5927\u7684\u6574\u6570\uff0c\u76f8\u5f53\u4e8e\u53bb\u6389\u4e86\u8fd9\u4e00\u9650\u5236\u3002"),(0,c.kt)("p",null,"\u7531\u4e8e\u4e0d\u5c11\u7528\u6237\u78b0\u5230\u8fc7\u540c\u6837\u7684\u95ee\u9898\uff0c\u6211\u4eec\u66fe\u7ecf\u8ba8\u8bba\u8fc7\u5bf9\u7b56\u3002"),(0,c.kt)("p",null,"\u4e00\u4e2a\u60f3\u6cd5\u662f\u7528\u589e\u91cf\u540c\u6b65\u6a21\u62df\u5168\u91cf\u540c\u6b65\uff0c\u8fd9\u4e48\u505a\u6709\u4e24\u4e2a\u5f0a\u7aef\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u8d77\u6765\u590d\u6742\uff0c\u8981\u6539\u4e0d\u5c11\u4ee3\u7801"),(0,c.kt)("li",{parentName:"ol"},"\u4f1a\u5ef6\u957f\u540c\u6b65\u6240\u9700\u7684\u65f6\u95f4")),(0,c.kt)("p",null,"\u53e6\u4e00\u4e2a\u60f3\u6cd5\u662f\u4fee\u6539 etcd\u3002\u65e2\u7136\u80fd\u591f\u5728 etcdctl \u91cc\u9762\u53bb\u9664\u9650\u5236\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u5bf9 gRPC-gateway \u4e00\u89c6\u540c\u4ec1\u5462\uff1f\u540c\u6837\u7684\u6539\u52a8\u53ef\u4ee5\u4f5c\u7528\u5728 gRPC-gateway \u4e0a\u3002"),(0,c.kt)("p",null,"\u6211\u4eec\u91c7\u7528\u4e86\u7b2c\u4e8c\u79cd\u65b9\u6848\uff0c\u7ed9 etcd \u63d0\u4e86\u4e2a PR\uff1a",(0,c.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd/pull/13077"},"https://github.com/etcd-io/etcd/pull/13077")),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"2021-06-30-1",src:n(1659).Z})),(0,c.kt)("p",null,"\u6700\u65b0\u53d1\u5e03\u7684 v3.5.0 \u7248\u672c\u5c31\u5305\u542b\u4e86\u6211\u4eec\u8d21\u732e\u7684\u8fd9\u4e2a\u6539\u52a8\u3002\u5982\u679c\u4f60\u9047\u5230 \u201cgrpc: received message larger than max\u201d\uff0c\u4e0d\u59a8\u8bd5\u4e00\u4e0b\u8fd9\u4e2a\u7248\u672c\u3002\u8fd9\u4e00\u6539\u52a8\u4e5f\u88ab etcd \u5f00\u53d1\u8005 backport \u5230 3.4 \u5206\u652f\u4e0a\u4e86\u30023.4 \u5206\u652f\u7684\u4e0b\u4e00\u4e2a\u53d1\u5e03\uff0c\u4e5f\u4f1a\u5e26\u4e0a\u8fd9\u4e2a\u6539\u52a8\u3002"),(0,c.kt)("p",null,"\u8fd9\u4ef6\u4e8b\u4e5f\u8bf4\u660e gRPC-gateway \u5e76\u975e\u767e\u8bd5\u767e\u7075\u3002\u5373\u4f7f\u7528\u4e86\u5b83\uff0c\u4e5f\u4e0d\u80fd\u4fdd\u8bc1 HTTP \u8bbf\u95ee\u80fd\u591f\u8ddf gRPC \u8bbf\u95ee\u6709\u4e00\u6837\u7684\u4f53\u9a8c\u3002"),(0,c.kt)("h3",{id:"\u5bf9\u670d\u52a1\u7aef\u8bc1\u4e66\u7684\u6709\u8da3\u7528\u6cd5"},"\u5bf9\u670d\u52a1\u7aef\u8bc1\u4e66\u7684\u6709\u8da3\u7528\u6cd5"),(0,c.kt)("p",null,"Apache APISIX \u589e\u52a0\u4e86\u5bf9 etcd mTLS \u7684\u652f\u6301\u540e\uff0c\u6709\u7528\u6237\u53cd\u9988\u4e00\u76f4\u6ca1\u6cd5\u5b8c\u6210\u6821\u9a8c\uff0c\u800c\u7528 etcdctl \u8bbf\u95ee\u5219\u662f\u6210\u529f\u7684\u3002\u5728\u8ddf\u7528\u6237\u4ea4\u6d41\u540e\uff0c\u6211\u51b3\u5b9a\u62ff\u4ed6\u7684\u8bc1\u4e66\u6765\u590d\u73b0\u4e0b\u3002"),(0,c.kt)("p",null,"\u5728\u590d\u73b0\u8fc7\u7a0b\u4e2d\uff0c\u6211\u6ce8\u610f\u5230 etcd \u65e5\u5fd7\u91cc\u9762\u6709\u8fd9\u6837\u7684\u62a5\u9519\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},'2021-06-09 11:10:13.022735 I | embed: rejected connection from "127.0.0.1:50898" (error "tls: failed to verify client\'s certificate: x509: certificate specifies an incompatible key usage", ServerName "")\nWARNING: 2021/06/09 11:10:13 grpc: addrConn.createTransport failed to connect to {127.0.0.1:12379 0 }. Err :connection error: desc = "transport: authentication handshake failed: remote error: tls: bad certificate". Reconnecting...\n')),(0,c.kt)("p",null,"\u201cbad certificate\u201d \u9519\u8bef\u4fe1\u606f\uff0c\u521d\u770b\u50cf\u662f\u56e0\u4e3a\u6211\u4eec\u53d1\u7ed9 etcd \u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u4e0d\u5bf9\u3002\u4f46\u4ed4\u7ec6\u77a7\u77a7\uff0c\u4f1a\u53d1\u73b0\u8fd9\u4e2a\u62a5\u9519\u662f\u5728 gRPC server \u91cc\u9762\u62a5\u7684\u3002"),(0,c.kt)("p",null,"gRPC-gateway \u5728 etcd \u91cc\u9762\u8d77\u5230\u4e00\u4e2a\u4ee3\u7406\u7684\u4f5c\u7528\uff0c\u628a\u5916\u9762\u7684 HTTP \u8bf7\u6c42\u53d8\u6210 gRPC server \u80fd\u5904\u7406\u7684 gRPC \u8bf7\u6c42\u3002"),(0,c.kt)("p",null,"\u5927\u4f53\u67b6\u6784\u5982\u4e0b\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"etcdctl ----\x3e gRPC server\nApache APISIX ---\x3e gRPC-gateway ---\x3e gRPC server\n")),(0,c.kt)("p",null,"\u4e3a\u4ec0\u4e48 etcdctl \u76f4\u8fde gRPC server \u80fd\u901a\uff0c\u800c\u4e2d\u95f4\u52a0\u4e00\u5c42 gRPC-gateway \u5c31\u4e0d\u884c\uff1f"),(0,c.kt)("p",null,"\u539f\u6765\u5f53 etcd \u542f\u7528\u4e86\u5ba2\u6237\u7aef\u8bc1\u4e66\u6821\u9a8c\u4e4b\u540e\uff0c\u7528 gRPC-gateway \u8fde\u63a5 gRPC server \u5c31\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002\u731c\u731c\u8fd9\u4e2a\u8bc1\u4e66\u4ece\u54ea\u6765\uff1f"),(0,c.kt)("p",null,"etcd \u628a\u914d\u7f6e\u7684\u670d\u52a1\u7aef\u8bc1\u4e66\u76f4\u63a5\u4f5c\u4e3a\u8fd9\u91cc\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u7528\u4e86\u3002"),(0,c.kt)("p",null,"\u4e00\u4e2a\u8bc1\u4e66\u65e2\u5728\u670d\u52a1\u7aef\u4e0a\u63d0\u4f9b\u9a8c\u8bc1\uff0c\u53c8\u5728\u5ba2\u6237\u7aef\u4e0a\u8868\u660e\u8eab\u4efd\uff0c\u770b\u4e0a\u53bb\u4e5f\u6ca1\u4ec0\u4e48\u95ee\u9898\u3002\u9664\u975e\u2026\u2026"),(0,c.kt)("p",null,"\u9664\u975e\u8bc1\u4e66\u4e0a\u542f\u7528\u4e86 server auth \u7684\u62d3\u5c55\uff0c\u4f46\u662f\u6ca1\u6709\u542f\u7528 client auth\u3002"),(0,c.kt)("p",null,"\u5bf9\u6709\u95ee\u9898\u7684\u8bc1\u4e66\u6267\u884c",(0,c.kt)("inlineCode",{parentName:"p"},"openssl x509 -text -noout -in /tmp/bad.crt")),(0,c.kt)("p",null,"\u4f1a\u770b\u5230\u8fd9\u6837\u7684\u8f93\u51fa\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"X509v3 extensions:\nX509v3 Key Usage: critical\nDigital Signature, Key Encipherment\nX509v3 Extended Key Usage:\nTLS Web Server Authentication\n")),(0,c.kt)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u7684 \u201cTLS Web Server Authentication\u201d\uff0c\u5982\u679c\u6211\u4eec\u628a\u5b83\u6539\u6210 \u201cTLS Web Server Authentication, TLS Web Client Authentication\u201d\uff0c\u6291\u6216\u4e0d\u52a0\u8fd9\u4e2a\u62d3\u5c55\uff0c\u5c31\u6ca1\u6709\u95ee\u9898\u4e86\u3002"),(0,c.kt)("p",null,"etcd \u4e0a\u4e5f\u6709\u5173\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684 issue\uff1a",(0,c.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd/issues/9785"},"https://github.com/etcd-io/etcd/issues/9785")),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"2021-06-30-2",src:n(52476).Z})),(0,c.kt)("h3",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,c.kt)("p",null,"\u867d\u7136\u6211\u4eec\u5728\u4e0a\u6587\u5217\u51fa\u4e86\u51e0\u70b9\u5c0f\u95ee\u9898\uff0c\u4f46\u662f\u7455\u4e0d\u63a9\u745c\uff0cetcd \u5bf9 HTTP \u8bbf\u95ee\u7684\u652f\u6301\u8fd8\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u7279\u6027\u3002"),(0,c.kt)("p",null,"\u611f\u8c22 Apache APISIX \u7684\u7528\u6237\u4eec\uff0c\u6b63\u662f\u56e0\u4e3a\u6211\u4eec\u6709\u7740\u5e7f\u9614\u7684\u7528\u6237\u7fa4\uff0c\u624d\u80fd\u53d1\u73b0 etcd \u7684\u8fd9\u4e9b\u7ec6\u8282\u4e0a\u7684\u95ee\u9898\u3002\u6211\u4eec\u4f5c\u4e3a etcd \u7684\u4e00\u5927\u7528\u6237\uff0c\u5728\u4e4b\u540e\u7684\u65e5\u5b50\u91cc\u4e5f\u5c06\u4e00\u5982\u65e2\u5f80\u5730\u8ddf etcd \u7684\u5f00\u53d1\u8005\u591a\u591a\u4ea4\u6d41\u3002"))}g.isMDXComponent=!0},1659:function(e,t,n){t.Z=n.p+"assets/images/2021-06-30-1-6eae65298ae03e3aafbcafffa6464321.png"},52476:function(e,t,n){t.Z=n.p+"assets/images/2021-06-30-2-4b6100e6ec8760dbc1d75da8fe87f8af.png"}}]);