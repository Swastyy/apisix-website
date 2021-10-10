"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81885],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return h}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),i=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=i(e.components);return l.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),k=i(n),h=a,m=k["".concat(c,".").concat(h)]||k[h]||s[h]||r;return n?l.createElement(m,p(p({ref:t},o),{},{components:n})):l.createElement(m,p({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=k;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var i=2;i<r;i++)p[i]=n[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},48736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return i},toc:function(){return o},default:function(){return k}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),p={title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",author:"Apache APISIX \u793e\u533a",authorURL:"https://github.com/Yangxiamao",authorImageURL:"https://avatars.githubusercontent.com/u/47442074?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u5f00\u6e90\u793e\u533a","\u5f00\u6e90\u9879\u76ee"],description:"\u8fd9\u7bc7\u91c7\u8bbf\u7a3f\u8bb2\u8ff0\u4e86\u5c60\u6b63\u677e\u4ece\u5f00\u6e90\u793e\u533a\u5c0f\u767d\u6210\u957f\u4e3a Apache \u9876\u7ea7\u5f00\u6e90\u9879\u76ee APISIX committer \u7684\u5386\u7a0b\u3002\u5c60\u6b63\u677e\uff08GitHub ID\uff1atzssangglass\uff09\u56e0\u6df1\u5ea6\u53c2\u4e0e Apache APISIX \u7684\u5f00\u53d1\uff0c\u5728\u793e\u533a\u4e2d\u8d21\u732e\u5f88\u591a\uff0c2021 \u5e74 7 \u6708 22 \u65e5\u88ab\u63a8\u9009\u4e3a Apache APISIX committer\u3002",tags:["Interview"]},u=void 0,c={permalink:"/blog/2021/08/11/interview-TuZhengsong",source:"@site/blog/2021/08/11/interview-TuZhengsong.md",title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",description:"\u8fd9\u7bc7\u91c7\u8bbf\u7a3f\u8bb2\u8ff0\u4e86\u5c60\u6b63\u677e\u4ece\u5f00\u6e90\u793e\u533a\u5c0f\u767d\u6210\u957f\u4e3a Apache \u9876\u7ea7\u5f00\u6e90\u9879\u76ee APISIX committer \u7684\u5386\u7a0b\u3002\u5c60\u6b63\u677e\uff08GitHub ID\uff1atzssangglass\uff09\u56e0\u6df1\u5ea6\u53c2\u4e0e Apache APISIX \u7684\u5f00\u53d1\uff0c\u5728\u793e\u533a\u4e2d\u8d21\u732e\u5f88\u591a\uff0c2021 \u5e74 7 \u6708 22 \u65e5\u88ab\u63a8\u9009\u4e3a Apache APISIX committer\u3002",date:"2021-08-11T00:00:00.000Z",formattedDate:"August 11, 2021",tags:[{label:"Interview",permalink:"/blog/tags/interview"}],readingTime:1.33,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a",url:"https://github.com/Yangxiamao",imageURL:"https://avatars.githubusercontent.com/u/47442074?v=4"}],prevItem:{title:"Chaos Mesh Helps Apache APISIX Improve System Stability",permalink:"/blog/2021/08/12/Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability"},nextItem:{title:"Apache APISIX \u67b6\u6784\u5206\u6790\uff1a\u5982\u4f55\u52a8\u6001\u7ba1\u7406 Nginx \u96c6\u7fa4\uff1f",permalink:"/blog/2021/08/10/apisix-nginx"}},i={authorsImageUrls:[void 0]},o=[{value:"\u5927\u5b66\uff0c\u6211\u7684\u5927\u5b66",id:"\u5927\u5b66\uff0c\u6211\u7684\u5927\u5b66",children:[]},{value:"\u51fa\u8c61\u7259\u5854\u8bb0",id:"\u51fa\u8c61\u7259\u5854\u8bb0",children:[]},{value:"\u51fa\u65b0\u624b\u6751",id:"\u51fa\u65b0\u624b\u6751",children:[]},{value:"\u5728\u793e\u533a\u5370\u8c61\u6df1\u523b\u7684\u4e8b",id:"\u5728\u793e\u533a\u5370\u8c61\u6df1\u523b\u7684\u4e8b",children:[]},{value:"Sir, this way",id:"sir-this-way",children:[]},{value:"\u793e\u533a\u6b22\u8fce\u6240\u6709\u4eba",id:"\u793e\u533a\u6b22\u8fce\u6240\u6709\u4eba",children:[]},{value:"\u5173\u4e8e Apache Way",id:"\u5173\u4e8e-apache-way",children:[]},{value:"\u6700\u540e",id:"\u6700\u540e",children:[]}],s={toc:o};function k(e){var t=e.components,p=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u91c7\u8bbf\u7a3f\u8bb2\u8ff0\u4e86\u5c60\u6b63\u677e\u4ece\u5f00\u6e90\u793e\u533a\u5c0f\u767d\u6210\u957f\u4e3a Apache \u9876\u7ea7\u5f00\u6e90\u9879\u76ee APISIX committer \u7684\u5386\u7a0b\u3002\u5c60\u6b63\u677e\uff08GitHub ID\uff1atzssangglass\uff09\u56e0\u6df1\u5ea6\u53c2\u4e0e Apache APISIX \u7684\u5f00\u53d1\uff0c\u5728\u793e\u533a\u4e2d\u8d21\u732e\u5f88\u591a\uff0c2021 \u5e74 7 \u6708 22 \u65e5\u88ab\u63a8\u9009\u4e3a Apache APISIX committer\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u6211\u770b\u5230\u90a3\u4e2a issue \u540e\uff0c\u5c31\u6709\u79cd\u5f3a\u70c8\u7684\u60f3\u8981\u53c2\u4e0e\u5230\u793e\u533a\u7684\u51b2\u52a8\u3002\u770b\u4e86\u793e\u533a\u7684\u65b0\u624b\u6307\u5357\u540e\uff0c\u6211\u50cf\u4ece\u65b0\u624b\u6751\u51fa\u6765\u7684\u52c7\u8005\uff0c\u51c6\u5907\u6253\u602a\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u2014\u2014 Apache APISIX committer \u5c60\u6b63\u677e")),(0,r.kt)("p",null,"\u5386\u65f6 282 \u5929\uff0c\u5c60\u6b63\u677e\uff08GitHub ID\uff1atzssangglass\uff09\u4ece\u5f00\u6e90\u793e\u533a\u7684\u5c0f\u767d\u6210\u957f\u4e3a\u4e86 Apache APISIX \u7684 committer\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Apache APISIX committer tzssangglass github",src:n(97431).Z})),(0,r.kt)("p",null,"\u5c60\u6b63\u677e\u56e0\u6df1\u5ea6\u53c2\u4e0e Apache APISIX \u7684\u5f00\u53d1\uff0c\u5728\u793e\u533a\u4e2d\u8d21\u732e\u5f88\u591a\uff0c2021 \u5e74 7 \u6708 22 \u65e5\u88ab\u63a8\u9009\u4e3a Apache APISIX committer\u3002"),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u5e73\u6de1\u7684\u4e0b\u5348\uff0c\u6211\u4eec\u548c\u6b63\u677e\u8fde\u7ebf\u804a\u4e86\u804a\u3002\u56e0\u4e3a\u75ab\u60c5\u5173\u7cfb\uff0c\u5c45\u4f4f\u5728\u5357\u4eac\u7684\u4ed6\u5df2\u7ecf\u591a\u65e5\u672a\u5916\u51fa\u3002\u5728\u6ca1\u6709\u548c\u4ed6\u804a\u5929\u4e4b\u524d\uff0c\u6211\u6ca1\u6709\u60f3\u5230\uff0c\u80e1\u5b50\u62c9\u78b4\u7684\u4ed6\uff0c\u7adf\u7136\u8d70\u8fc7\u4e86\u8fd9\u4e48\u66f2\u6298\u7684\u8def\u3002"),(0,r.kt)("h2",{id:"\u5927\u5b66\uff0c\u6211\u7684\u5927\u5b66"},"\u5927\u5b66\uff0c\u6211\u7684\u5927\u5b66"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u5927\u5b66\u7684\u65f6\u5019\u5b66\u7684\u662f\u901a\u4fe1\u5de5\u7a0b\uff0c\u6bcf\u5929\u6700\u5f00\u5fc3\u7684\u4e8b\u5c31\u662f\u8e22\u7403\u3002\u73b0\u5728\u6709\u65f6\u5019\u4f1a\u60f3\uff0c\u5982\u679c\u80fd\u5e26\u7740\u73b0\u5728\u7684\u8bb0\u5fc6\u56de\u5230\u5927\u5b66\u65f6\u5149\u5c31\u597d\u4e86\u3002")),(0,r.kt)("p",null,"\u6b63\u677e\u5728\u5927\u5b66\u671f\u95f4\u91cc\u9762\u5176\u5b9e\u6ca1\u600e\u4e48\u63a5\u89e6\u8fc7\u7f16\u7a0b\uff0c\u4ed6\u5f53\u5e74\u5176\u5b9e\u6709 C \u8bed\u8a00\u7684\u7f16\u7a0b\u8bfe\uff0c\u4f46\u662f\u56e0\u4e3a\u5fd9\u7740\u8e22\u7403\uff0c\u6302\u79d1\u4e86\u3002\u53ef\u662f\uff0c\u4ed6\u6302\u79d1\u4e4b\u540e\u7684\u8865\u8003\u4e5f\u6ca1\u8fc7\uff0c\u5bfc\u81f4\u91cd\u4fee\u3002\u6700\u5c34\u5c2c\u7684\u662f\uff0c\u4ed6\u91cd\u4fee\u4e5f\u6ca1\u8fc7\uff0c\u540e\u6765\u600e\u4e48\u529e\u5462\uff1f\u6bd5\u4e1a\u4e4b\u524d\u8fd8\u6709\u6bd5\u4e1a\u6e05\u8003\u3002\u8fd9\u53ef\u4e0d\u80fd\u518d\u6302\u4e86\uff0c\u4e8e\u662f\u6b63\u677e\u5c31\u53bb\u56fe\u4e66\u9986\u53bb\u501f\u4e86\u4e00\u672c C \u8bed\u8a00\u7684\u4e66\u6765\u770b\u3002"),(0,r.kt)("p",null,"\u201c\u6211\u5f53\u65f6\u5fc3\u60f3\uff0cC \u8bed\u8a00\u771f\u7684\u8fd9\u4e48\u96be\u5417\uff1f\u201d\u6b63\u677e\u8bf4\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u4ed6\u5c31\u4e00\u76f4\u770b\u4e00\u76f4\u770b\uff0c\u770b\u7740\u770b\u7740\u5c31\u7a81\u7136\u53d1\u73b0\u7f16\u7a0b\u597d\u50cf\u6709\u90a3\u4e48\u70b9\u610f\u601d\uff0c\u4ed6\u770b\u61c2\u4e86\uff01\u6700\u540e\u4ed6\u5728\u6bd5\u4e1a\u524d\u987a\u5229\u901a\u8fc7\u4e86\u8003\u8bd5\u3002\u5728\u6bd5\u4e1a\u4e4b\u540e\uff0c\u627e\u5230\u4e86\u4e00\u4efd\u505a\u7a0b\u5e8f\u5458\u7684\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u201c\u6211\u672c\u6765\u90fd\u51c6\u5907\u6bd5\u4e1a\u56de\u5bb6\u627e\u4e2a\u5382\u4e0a\u73ed\u4e86\u3002\u201d\uff0c\u4ed6\u534a\u5f00\u73a9\u7b11\u5730\u8bf4\u3002"),(0,r.kt)("p",null,"\u5f7c\u65f6\uff0c\u4ed6\u53ef\u80fd\u4e0d\u4f1a\u60f3\u5230\u5982\u4eca\u7684\u4ed6\u4f1a\u6210\u4e3a\u6570\u4e2a\u77e5\u540d\u5f00\u6e90\u9879\u76ee\u7684 developer\uff0c\u53c2\u4e0e\u4e00\u4e9b\u652f\u6491\u7740\u5343\u4e07\u7ea7\u5e76\u53d1\u6d41\u91cf\u7684\u57fa\u7840\u8bbe\u65bd\u7684\u5f00\u53d1\u3002"),(0,r.kt)("h2",{id:"\u51fa\u8c61\u7259\u5854\u8bb0"},"\u51fa\u8c61\u7259\u5854\u8bb0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u5de5\u4e1a\u754c\uff0c\u771f\u5b9e\u7684\u4e1a\u52a1\u573a\u666f\u548c\u5b66\u6821\u91cc\u5b66\u7684\u5f88\u4e0d\u4e00\u6837\u7684")),(0,r.kt)("p",null,"\u6b63\u677e\u7684\u7b2c\u4e00\u4efd\u5de5\u4f5c\u5c31\u804c\u4e8e\u4e00\u5bb6\u505a\u7a7f\u6234\u8bbe\u5907\u7684\u521b\u4e1a\u516c\u53f8\uff0c\u4ece\u4e8b\u667a\u80fd\u624b\u73af\u7684\u7814\u53d1\u5de5\u4f5c\u3002\u6b63\u677e\u548c\u4ed6\u7684\u524d\u540c\u4e8b\u4eec\u9700\u8981\u901a\u8fc7\u5904\u7406\u4ece\u667a\u80fd\u624b\u73af\u4e0a\u7684\u83b7\u53d6\u7684\u5404\u79cd\u4f20\u611f\u5668\u6570\u636e\uff0c\u6765\u5b8c\u6210\u5bf9\u7528\u6237\u7684\u5fc3\u7387\u3001\u8fd0\u52a8\u91cf\u3001\u8840\u538b\u7b49\u7684\u76d1\u6d4b\u3002"),(0,r.kt)("p",null,"\u201c\u5de5\u4f5c\u86ee\u597d\u73a9\u7684\uff0c\u56e0\u4e3a\u5728\u5de5\u4e1a\u754c\uff0c\u771f\u5b9e\u7684\u4e1a\u52a1\u573a\u666f\u548c\u5b66\u6821\u91cc\u5b66\u7684\u5f88\u4e0d\u4e00\u6837\u7684\uff0c\u5f88\u591a\u4e1c\u897f\u90fd\u5f97\u4ece\u5934\u5f00\u59cb\u5b66\u201d\uff0c\u6b63\u677e\u8bf4\u3002"),(0,r.kt)("p",null,"\u6709\u4e00\u5929\u4e0b\u73ed\u4e4b\u540e\uff0c\u8fd9\u5bb6\u516c\u53f8\u7684\u8001\u677f\u5a18\u7a81\u7136\u53d1\u4e86\u4e00\u6761\u4fe1\u606f\uff0c\u8bf4\u516c\u53f8\u7684\u5458\u5de5\u6682\u65f6\u4f11\u5047\uff0c\u4ec0\u4e48\u65f6\u5019\u4e0a\u73ed\u7b49\u901a\u77e5\u3002"),(0,r.kt)("p",null,"\u6b63\u677e\u5f53\u65f6\u5c31\u89c9\u5f97\u4e0d\u5bf9\u52b2\uff0c\u600e\u4e48\u597d\u597d\u7684\u4e0a\u7740\u73ed\uff0c\u7a81\u7136\u5c31\u4f11\u5047\u4e86\uff1f\u7136\u540e\u4ed6\u7acb\u9a6c\u6253\u5f00\u62db\u8058\u8f6f\u4ef6\uff0c\u5f00\u59cb\u627e\u65b0\u7684\u5de5\u4f5c\u3002\u540e\u6765\u624d\u77e5\u9053\uff0c\u516c\u53f8\u7684\u8001\u677f\u8ddf\u4f9b\u5e94\u5546\u6709\u5408\u540c\u7ea0\u7eb7\uff0c\u516c\u53f8\u77ed\u6682\u505c\u6446\u4e86\u3002"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u6b63\u677e\u4fbf\u5230\u53e6\u5916\u4e00\u5bb6\u516c\u53f8\u4ece\u4e8b\u540e\u7aef\u4e1a\u52a1\u5f00\u53d1\u7684\u5de5\u4f5c\uff0c\u5b66\u4e60\u4e1a\u754c\u89c4\u8303\u3001\u8fdb\u4e00\u6b65\u589e\u8fdb\u6280\u672f\u3002\u8fc7\u4e86\u5feb\u4e00\u5e74\uff0c\u56e0\u4e3a\u6b63\u677e\u6bd4\u8f83\u559c\u6b22 Nginx\u3001OpenResty\u3001Netty \u8fd9\u7c7b\u7b80\u6d01\u548c\u9ad8\u6027\u80fd\u7684\u6280\u672f\uff0c\u4ed6\u8fdb\u5165\u4e00\u5bb6\u5927\u516c\u53f8\u7684\u5f00\u53d1\u56e2\u961f\uff0c\u4ece\u4e8b\u4e2d\u95f4\u4ef6\u76f8\u5173\u5f00\u53d1\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u201c\u5728\u8fd9\u5bb6\u5927\u516c\u53f8\uff0c\u6211\u505a\u7684\u79bb\u4e1a\u52a1\u7a0d\u5fae\u8fdc\u90a3\u4e48\u4e00\u70b9\u70b9\uff0c\u66f4\u504f\u5411\u6280\u672f\u4e00\u4e9b\u3002\u201c\u6b63\u677e\u8bf4\u3002"),(0,r.kt)("p",null,"\u6b63\u677e\u63a5\u89e6 Apache APISIX \u7684\u65f6\u95f4\u662f 2020 \u5e74 9 \u6708\u4efd\uff0c\u90a3\u65f6\u5019\uff0c\u4ed6\u6240\u5728\u7684\u56e2\u961f\u4f7f\u7528\u7684\u662f Kong\uff0c\u4f46\u662f\u5f53\u65f6 Kong \u65e0\u6cd5\u5b8c\u5168\u6ee1\u8db3\u4ed6\u4eec\u7684\u9700\u6c42\uff0c\u4e8e\u662f\u4ed6\u4eec\u4fbf\u91cd\u65b0\u505a\u7f51\u5173\u7684\u6280\u672f\u9009\u578b\uff0c\u8bd5\u56fe\u5bfb\u627e\u66f4\u597d\u7684\u65b9\u6848\u3002\u6b63\u677e\u62c5\u4efb\u672c\u6b21\u6280\u672f\u9009\u578b\u7684\u8d1f\u8d23\u4eba\uff0c\u4e8e\u662f\u4ed6\u5173\u6ce8\u5230\u4e86 Apache \u57fa\u91d1\u4f1a\u7684\u9876\u7ea7\u9879\u76ee Apache APISIX\uff0c\u8fdb\u800c\u63a5\u89e6\u4e86 Apache APISIX \u7684\u793e\u533a\u3002"),(0,r.kt)("p",null,"\u5f7c\u65f6\u7684\u4ed6\uff0c\u5df2\u7ecf\u6bd5\u4e1a\u4e09\u5e74\u591a\u4e86\u3002"),(0,r.kt)("h2",{id:"\u51fa\u65b0\u624b\u6751"},"\u51fa\u65b0\u624b\u6751"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u53ef\u4ee5\u7ed9 Apache \u57fa\u91d1\u4f1a\u7684\u9876\u7ea7\u9879\u76ee\u63d0\u4ea4\u4ee3\u7801\u4e86\uff01\u4f5c\u4e3a\u4e00\u4e2a\u6280\u672f\u5de5\u4f5c\u8005\uff0c\u8fd9\u662f\u4e00\u79cd\u6280\u672f\u4e0a\u7684\u81ea\u4fe1\u3002")),(0,r.kt)("p",null,"\u6b63\u677e\u5728\u5f00\u6e90\u793e\u533a\u7684\u7b2c\u4e00\u4e2a PR \u662f\u4e00\u4e2a enhancement\uff08\u529f\u80fd\u589e\u5f3a\uff09\u7c7b\u578b\u7684 PR\uff0c\u8fd9\u4e2a PR \u8ba9 Apache APISIX \u652f\u6301\u4e86\u591a\u7aef\u53e3\u76d1\u542c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"issue\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/issues/1195"},"https://github.com/apache/apisix/issues/1195")),(0,r.kt)("li",{parentName:"ul"},"PR\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2409"},"https://github.com/apache/apisix/pull/2409"))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u662f\u6b63\u677e\u516c\u53f8\u9700\u8981\u7684\uff0c\u5728 issue \u533a\u4e5f\u65e9\u6709\u4eba\u63d0\u5230\uff0c\u4f46\u662f\u4e0d\u77e5\u4e3a\u4f55\u4e00\u76f4\u65e0\u4eba\u8ba4\u9886\u3002\u4e4b\u524d\uff0c\u6b63\u677e\u6b63\u597d\u5bf9\u8fd9\u65b9\u9762\u7684\u77e5\u8bc6\u6709\u6240\u4e86\u89e3\uff0c\u4e8e\u662f\u4ed6\u60f3\uff1a\u201d\u6211\u53ef\u4ee5\u7ed9 Apache APISIX \u63d0\u4e2a PR \u6765 fix \u8fd9\u4e2a\u95ee\u9898\u3002\u201c\u6240\u4ee5\u4ed6\u5728 issue \u91cc\u4e3b\u52a8\u8981\u6c42\u628a\u8fd9\u4e2a\u95ee\u9898\u6307\u6d3e\u7ed9\u4ed6\u3002"),(0,r.kt)("p",null,"\u4ed6\u8bf4\uff1a\u201c\u5f53\u65f6\u6211\u6709\u4e00\u79cd\u5f3a\u70c8\u7684\u53c2\u4e0e\u793e\u533a\u7684\u51b2\u52a8\uff0c\u7136\u540e\u6211\u770b\u4e86\u4e00\u4e0b Apache APISIX \u793e\u533a\u7684\u65b0\u624b\u6307\u5357\uff0c\u7136\u540e\u5c31\u50cf\u62ff\u7740\u6b66\u5668\u4ece\u65b0\u624b\u6751\u51fa\u6765\u4e00\u6837\uff0c\u5174\u81f4\u51b2\u51b2\u7684\u51c6\u5907\u53c2\u4e0e\u3002\u201d"),(0,r.kt)("p",null,"\u9009\u62e9\u4e86\u8fd9\u4e2a issue \u4e4b\u540e\uff0c\u6b63\u677e\u5f00\u59cb\u5728 GitHub \u4e0a\u9762\u5f00\u59cb\u8ddf\u793e\u533a\u7684\u4f19\u4f34\u8ba8\u8bba\u7ec6\u8282\u4e0a\u7684\u95ee\u9898\uff0c\u50cf\u662f\u914d\u7f6e\u7aef\u53e3\u7684 style\u3001\u5b9e\u73b0\u7684\u601d\u8def\u7b49\u3002\u5728\u8ba8\u8bba\u5b8c\u4e4b\u540e\uff0c\u4ed6\u5f00\u59cb\u52a8\u624b\u5b9e\u73b0\u3002\u6bcf\u5929\u665a\u4e0a\u4e0b\u73ed\u4e4b\u540e\u53bb\u7ffb\u770b Apache APISIX \u7684\u4ee3\u7801\uff0c\u6d4b\u8bd5\u76f8\u5173\u7528\u4f8b\u3002\u5728\u7ecf\u5386\u4e86\u4e09\u56db\u4e2a\u665a\u4e0a\u7684\u594b\u6597\u540e\uff0c\u6d4b\u8bd5\u7b2c\u4e00\u6b21\u8dd1\u901a\u4e86\uff01"),(0,r.kt)("p",null,"\u5f53\u65f6\u6b63\u677e\u5185\u5fc3\u975e\u5e38\u7684\u5174\u594b\uff0c\u9a6c\u4e0a\u6309\u7167\u90a3\u4e2a\u65b0\u624b\u6307\u5357\u7684\u5f15\u5bfc\u628a PR \u63d0\u4e0a\u53bb\u4e86\u3002\u7136\u540e\u63a5\u53d7 Code Review \u7684\u610f\u89c1\uff0c\u8fdb\u4e00\u6b65\u4fee\u6539\u4ee3\u7801\u3002\u7ec8\u4e8e\uff0c\u5728 10 \u6708 18 \u53f7\uff0cPR \u987a\u5229\u5730 merge \u8fdb\u4e86\u4ed3\u5e93\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Apache APISIX committer tzssangglass pr",src:n(35768).Z})),(0,r.kt)("p",null,"\u201c\u5f53\u65f6\u6211\u975e\u5e38\u7684\u6fc0\u52a8\uff0c\u611f\u89c9\u81ea\u5df1\u7ec8\u4e8e\u5b9e\u8d28\u6027\u5730\u53c2\u4e0e\u5230\u5f00\u6e90\u793e\u533a\u91cc\u9762\u53bb\u4e86\u3002\u6211\u53ef\u4ee5\u7ed9 Apache \u57fa\u91d1\u4f1a\u7684\u9876\u7ea7\u9879\u76ee\u63d0\u4ea4\u4ee3\u7801\u4e86\uff01\u4f5c\u4e3a\u4e00\u4e2a\u6280\u672f\u5de5\u4f5c\u8005\uff0c\u8fd9\u662f\u4e00\u79cd\u6280\u672f\u4e0a\u7684\u81ea\u4fe1\u3002\u201d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u6b63\u677e\u5728\u5f00\u6e90\u4e16\u754c\u7684\u7b2c\u4e00\u4e2a PR\u3002")),(0,r.kt)("h2",{id:"\u5728\u793e\u533a\u5370\u8c61\u6df1\u523b\u7684\u4e8b"},"\u5728\u793e\u533a\u5370\u8c61\u6df1\u523b\u7684\u4e8b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a etcd \u6709 MaxCallRecvMsgSize \u7684\u9650\u5236\uff0c\u5c31\u4ece etcd \u7684\u6e90\u5934\u53bb\u89e3\u51b3\uff0c\u8fd9\u662f\u6700\u4f18\u96c5\uff0c\u4e5f\u662f\u6700\u9002\u5408\u7684\u3002")),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u95ee\u5230\uff0c\u6b63\u677e\u5728\u793e\u533a\u5370\u8c61\u6700\u6df1\u523b\u7684\u4e8b\u60c5\u662f\u4ec0\u4e48\u7684\u65f6\u5019\uff0c\u6b63\u677e\u60f3\u4e86\u60f3\u8bf4\uff0c\u53ef\u80fd\u662f\u4e00\u4e2a\u548c bug \u6709\u5173\u7684\u95ee\u9898\uff1aetcd \u7684 MaxCallRecvMsgSize \u9650\u5236\u3002"),(0,r.kt)("p",null,"\u6b63\u677e\u66fe\u7ecf\u88ab etcd \u9650\u5236\u8fd4\u56de\u4f53\u5927\u5c0f\u7684\u95ee\u9898\u6298\u78e8\u8fc7\uff0c\u793e\u533a\u5185\u4e5f\u591a\u6b21\u53cd\u6620\u3001\u8ba8\u8bba\u8fc7\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u5728 Apache APISIX \u4e0a\u65e0\u8bba\u600e\u4e48\u5904\u7406\u90fd\u4e0d\u662f\u5f88\u4f18\u96c5\u3002"),(0,r.kt)("p",null,"\u76f4\u5230\u4eca\u5e74 4 \u6708\u4efd\uff0c\u652f\u6d41\u79d1\u6280\u7684\u4e00\u4f4d\u5c0f\u4f19\u4f34\u7ed9 etcd \u63d0\u4ea4\u4e86 PR\uff0c\u6700\u7ec8\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\u6b63\u677e\u542c\u8bf4\u8fd9\u4e2a\u6d88\u606f\u65f6\uff0c\u611f\u5230\u975e\u5e38\u7684\u9707\u64bc\uff0c\u5f53\u65f6\u4ed6\u6ca1\u6709\u60f3\u8fc7\u8fd9\u4e2a\u4e8b\u60c5\u4f1a\u4ee5\u8fd9\u6837\u7684\u65b9\u5f0f\u53bb\u89e3\u51b3\u3002\u4f46\u662f\u73b0\u5728\u6765\u770b\u7684\u8bdd\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u786e\u5b9e\u662f\u6700\u9002\u5408\u7684\u3002"),(0,r.kt)("p",null,"\u201c\u56e0\u4e3a etcd \u6709 MaxCallRecvMsgSize \u7684\u9650\u5236\uff0c\u5c31\u4ece etcd \u7684\u6e90\u5934\u53bb\u89e3\u51b3\uff0c\u8fd9\u662f\u6700\u4f18\u96c5\uff0c\u4e5f\u662f\u6700\u9002\u5408\u7684\u3002\u8fd9\u662f\u5f88\u68d2\u7684\u8de8\u793e\u533a\u5408\u4f5c\u7684\u793a\u4f8b\u201d\uff0c\u6b63\u677e\u8bf4\u3002"),(0,r.kt)("h2",{id:"sir-this-way"},"Sir, this way"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5927\u5bb6\u5206\u5de5\u5408\u4f5c\u4e0d\u540c\uff0c\u4f46\u662f\u90fd\u662f\u5728\u4e3a\u5f00\u6e90\u505a\u8d21\u732e\u3002")),(0,r.kt)("p",null,"\u6b63\u677e\u8bf4\uff0c\u4ed6\u521a\u5f00\u59cb\u53c2\u4e0e\u793e\u533a\u7684\u65f6\u5019\uff0c\u628a\u5f53\u65f6\u80fd\u770b\u5230\u7684 APISIX \u6587\u6863\u5927\u90e8\u5206\u90fd\u8fc7\u4e86\u4e00\u904d\u3002\u6240\u4ee5\u5f53\u65f6\u5728\u6240\u5728\u516c\u53f8\u5de5\u4f5c\u7684\u65f6\u5019\uff0c\u540c\u4e8b\u95ee\u4ed6\u95ee\u9898\uff0c\u4ed6\u867d\u7136\u5e76\u4e0d\u662f\u5f88\u6e05\u695a\uff0c\u4f46\u662f\u4ed6\u6e05\u695a\u9879\u76ee\u7684\u6587\u6863\u5206\u5e03\u60c5\u51b5\uff0c\u76f4\u63a5\u628a\u6587\u6863\u627e\u51fa\u6765\u770b\u4e00\u4e0b\uff0c\u5c31\u5927\u6982\u77e5\u9053\u662f\u4ec0\u4e48\u95ee\u9898\u4e86\u3002\u4ed6\u8ba4\u4e3a\u770b\u6587\u6863\u662f\u719f\u6089\u9879\u76ee\u7684\u4e00\u4e2a\u5408\u9002\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u4e0a\uff0c\u6709\u5b8c\u5584\u7684\u5305\u62ec\u5982\u4f55\u63d0 PR \u7684\u65b0\u624b\u6307\u5357\u3002\u5982\u679c\u60f3\u53c2\u4e0e\u793e\u533a\u7684\u8bdd\uff0c\u53ef\u4ee5\u5148\u628a\u5b98\u7f51\u548c Github \u4e0a\u7684\u4e3b\u8981\u7684\u6587\u6863\u90fd\u770b\u4e00\u4e0b\uff0c\u5bf9\u9879\u76ee\u6709\u57fa\u672c\u7684\u4e86\u89e3\uff0c\u4e5f\u6e05\u695a\u9879\u76ee\u7684\u6587\u6863\u5206\u5e03\u60c5\u51b5\uff0c\u540e\u9762\u518d\u6309\u9700\u7d22\u5f15\u6587\u6863\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u5728\u4ee3\u7801\u65b9\u9762\u505a\u8d21\u732e\uff0c\u6216\u8005\u53c2\u4e0e\u8bbe\u8ba1\u7684\u8bdd\uff0c\u4e00\u4e9b Ngnix \u6216\u8005 OpenResty \u65b9\u9762\u7684\u77e5\u8bc6\u7684\u50a8\u5907\u662f\u5fc5\u8981\u7684\u3002\u5305\u62ec\u770b\u4ed6\u4eec\u5b98\u65b9\u7684\u6587\u6863\u53ca\u548c\u4ee3\u7801\uff0c\u5b66\u4e60\u4ed6\u4eec\u5bf9\u4e8e\u76f8\u5173 feature \u7684\u5b9e\u73b0\u7b49\u3002"),(0,r.kt)("p",null,"\u6b63\u677e\u8bf4\uff1a\u201c\u6211\u89c9\u5f97\u8fd9\u4e00\u6b65\u662f\u65e0\u6cd5\u8df3\u8fc7\u7684\u3002\u201d"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u4ee5\u4f7f\u7528\u8005\u7684\u8eab\u4efd\uff0c\u53bb\u53c2\u4e0e\u5230\u793e\u533a\u91cc\u3002\u6bd4\u5982\u8bf4\u4f60\u89c9\u5f97\u6587\u6863\u6709\u95ee\u9898\uff0c\u6216\u8005\u8bf4\u4f60\u6309\u7167\u6587\u6863\u53bb\u5b9e\u8df5\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u5e76\u4e0d\u662f\u90a3\u6837\uff0c\u4f60\u4e5f\u53ef\u4ee5\u53bb\u63d0\u4e00\u4e9b issue \u6307\u51fa\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5927\u5bb6\u5206\u5de5\u5408\u4f5c\u4e0d\u540c\uff0c\u4f46\u662f\u90fd\u662f\u5728\u4e3a\u5f00\u6e90\u505a\u8d21\u732e\u3002"),(0,r.kt)("h2",{id:"\u793e\u533a\u6b22\u8fce\u6240\u6709\u4eba"},"\u793e\u533a\u6b22\u8fce\u6240\u6709\u4eba"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f46\u8fd9\u6837\u505a\u66f4\u597d")),(0,r.kt)("p",null,"\u6b63\u677e\u8bf4\uff0c\u5927\u5bb6\u90fd\u5728\u5f00\u6e90\u793e\u533a\uff0c\u9996\u5148\u8981\u6ce8\u610f\u7684\u5c31\u662f\u8981\u9075\u5b88\u793e\u533a\u7684\u4e00\u4e9b\u89c4\u77e9\uff0c\u548c\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u5e73\u7b49\u4ea4\u6d41\u3002"),(0,r.kt)("p",null,"\u4ea4\u6d41\u65f6\u8981\u6ce8\u610f\u7684\u70b9\u53ef\u4ee5\u5206\u6210\u4e24\u79cd\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u79cd\u662f\uff0c\u5047\u5982\u4f60\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u90a3\u4f60\u5e94\u8be5\u5c3d\u91cf\u51c6\u786e\u5730\u63cf\u8ff0\u95ee\u9898\uff0c\u63d0\u4f9b\u53ef\u590d\u73b0\u7684\u7528\u4f8b\u3002\u8fd9\u4e2a\u5176\u5b9e\u662f\u6700\u53d7\u6b22\u8fce\u7684\uff0c\u6216\u8005\u8bf4\u6700\u80fd\u63d0\u9ad8\u6c9f\u901a\u6548\u7387\u7684\u4e00\u4e2a\u65b9\u5f0f\u3002\u5982\u679c\u4f60\u80fd\u628a\u4e00\u4e2a\u95ee\u9898\u63cf\u8ff0\u7684\u5f88\u6e05\u6670\uff0c\u90a3\u5927\u5bb6\u56de\u7b54\u95ee\u9898\u7684\u6548\u7387\u81ea\u7136\u4f1a\u975e\u5e38\u9ad8\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u79cd\u662f\uff0c\u5982\u679c\u662f\u63d0\u51fa\u60f3\u6cd5\uff0c\u89e3\u51b3\u95ee\u9898\u7b49\uff0c\u5728\u52a8\u624b\u505a\u4e4b\u524d\uff0c\u5bf9\u4e8e\u6709\u6b67\u4e49\u7684\u70b9\uff0c\u9700\u8981\u5728\u516c\u5f00\u7684\u573a\u5408\uff0c\u6bd4\u5982 issue \uff0c\u90ae\u4ef6\u5217\u8868\u7b49\u4e0a\u9762\u8ba8\u8bba\uff0c\u5728\u793e\u533a\u5185\u8fbe\u6210\u4e00\u81f4\uff0c\u53d6\u5f97\u5171\u8bc6\u4e4b\u540e\uff0c\u518d\u5f00\u59cb\u505a\u3002"),(0,r.kt)("h2",{id:"\u5173\u4e8e-apache-way"},"\u5173\u4e8e Apache Way"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5171\u8bc6\u4e5f\u4f1a\u66f4\u65b0\uff0c\u5b83\u662f\u793e\u533a\u63a8\u52a8\u9879\u76ee\u524d\u8fdb\u7684\u4e00\u79cd\u529b\u91cf\u3002")),(0,r.kt)("p",null,"\u6b63\u677e\u7406\u89e3\u7684 Apache Way\uff0c\u662f\u793e\u533a\u5927\u4e8e\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u4ed6\u8ba4\u4e3a\uff0c\u793e\u533a\u672c\u8d28\u4e0a\u662f\u4eba\u4e0e\u4eba\u4e4b\u95f4\u7684\u5408\u4f5c\uff0c\u5927\u5bb6\u5206\u5de5\u5408\u4f5c\uff0c\u5404\u53f8\u5176\u804c\u3002\u4f46\u662f\u5728\u5408\u4f5c\u548c\u5404\u53f8\u5176\u804c\u4e4b\u524d\uff0c\u5927\u5bb6\u662f\u9700\u8981\u5f62\u6210\u4e00\u4e9b\u5171\u8bc6\u3002"),(0,r.kt)("p",null,"\u5171\u8bc6\u662f\u4e00\u70b9\u70b9\u79ef\u7d2f\u8d77\u6765\u7684\u3002\u793e\u533a\u53c2\u4e0e\u8005\u4eec\u629b\u51fa\u4e00\u4e2a\u4e2a\u95ee\u9898\uff0c\u793e\u533a\u5185\u4f1a\u8ba8\u8bba\uff0c\u8fa9\u9a73\uff0c\u9a8c\u8bc1\uff0c\u76f4\u81f3\u6700\u540e\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u5171\u8bc6\u5728\u793e\u533a\u5185\u6162\u6162\u5f62\u6210\uff0c\u5171\u8bc6\u53ef\u80fd\u662f\u89c4\u8303\uff0c\u4e5f\u53ef\u80fd\u662f\u8fb9\u754c\uff0c\u6216\u8005\u5176\u4ed6\u7684\u5f62\u5f0f\u3002\u5171\u8bc6\u4e5f\u4f1a\u66f4\u65b0\uff0c\u5b83\u662f\u793e\u533a\u63a8\u52a8\u9879\u76ee\u524d\u8fdb\u7684\u4e00\u79cd\u529b\u91cf\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u5e26\u6709\u4e00\u4e9b\u7406\u60f3\u4e3b\u4e49\u8272\u5f69\u3002"),(0,r.kt)("p",null,"\u793e\u533a\u7684\u5171\u8bc6\u5176\u5b9e\u6bd4\u4f60\u505a\u4ee3\u7801\u8d21\u732e\u66f4\u91cd\u8981\uff0c\u56e0\u4e3a\u6709\u4e86\u5171\u8bc6\u4e4b\u540e\uff0c\u540e\u9762\u53bb\u56de\u6eaf\u67d0\u4e00\u4e2a\u6539\u52a8\u7684\u70b9\u7684\u65f6\u5019\uff0c\u4f1a\u66f4\u52a0\u6e05\u6670\uff0c\u77e5\u9053\u8fd9\u4e2a\u6539\u52a8\u7684\u8d77\u6e90\u548c\u5f53\u65f6\u7684\u89c6\u89d2\u3002"),(0,r.kt)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,r.kt)("p",null,"\u6700\u540e\u5728\u5173\u9ea6\u4e4b\u524d\uff0c\u6211\u4eec\u8bf7\u6b63\u677e\u7ed9\u6211\u4eec\u63a8\u8350\u4e00\u4e9b\u4e1c\u897f\u3002\u6b63\u677e\u60f3\u4e86\u60f3\uff0c\u8bf4\uff1a\u201c\u6211\u63a8\u8350\u4e86\u4e00\u90e8\u5fb7\u56fd\u7535\u5f71\uff0c\u8ddf\u793e\u4f1a\u5de5\u7a0b\u5b66\u76f8\u5173\u7684\u300a\u6211\u662f\u8c01\uff1a\u6ca1\u6709\u7edd\u5bf9\u5b89\u5168\u7684\u7cfb\u7edf\u300b\uff0c\u548c\u4e00\u672c\u4e66\uff0c\u5b54\u98de\u529b\u8001\u5e08\u7684\u300a\u53eb\u9b42\uff1a1768 \u5e74\u4e2d\u56fd\u5996\u672f\u5927\u6050\u614c\u300b\u3002\u5e0c\u671b\u5927\u5bb6\u5728\u5fd9\u788c\u7684\u5de5\u4f5c\u4e2d\uff0c\u4e5f\u4e0d\u8981\u5fd8\u4e86\u5145\u5b9e\u81ea\u5df1\u7684\u7cbe\u795e\u751f\u6d3b\u3002\u201c"),(0,r.kt)("p",null,"\u8fd9\u5c31\u662f\u8fd9\u6b21\u7684\u91c7\u8bbf\u5566\uff01\u4e0b\u56de\uff0c\u6211\u4eec\u4f1a\u91c7\u8bbf\u54ea\u4f4d\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u5462\uff1f\u5feb\u6765 Apache APISIX \u793e\u533a\u77a7\u4e00\u77a7\u5427\uff01\u6ca1\u51c6\uff0c\u4e0b\u4e00\u4f4d committer \u5c31\u662f\u4f60\uff01"))}k.isMDXComponent=!0},97431:function(e,t,n){t.Z=n.p+"assets/images/2021-08-11-1-deac99af23c064e1f970d6f31d16d624.webp"},35768:function(e,t,n){t.Z=n.p+"assets/images/2021-08-11-2-e0dc6b70588033c25005231a21fad8d3.webp"}}]);