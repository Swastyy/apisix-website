"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31410],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=i,g=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59408:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o={title:"Release Apache APISIX 2.9",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["APISIX","Apache APISIX","Release Notes"],description:"Apache APISIX version 2.9 is released!",tags:["Release"]},l=void 0,s={permalink:"/zh/blog/2021/08/27/release-apache-apisix-2.9-en",source:"@site/blog/2021-08-27-release-apache-apisix-2.9-en.md",title:"Release Apache APISIX 2.9",description:"Apache APISIX version 2.9 is released!",date:"2021-08-27T00:00:00.000Z",formattedDate:"2021\u5e748\u670827\u65e5",tags:[{label:"Release",permalink:"/zh/blog/tags/release"}],readingTime:2.675,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021 8.23-8.29",permalink:"/zh/blog/2021/08/30/weekly-report"},nextItem:{title:"Apache APISIX 2.9 \u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u66f4\u591a\u65b0\u529f\u80fd\uff01",permalink:"/zh/blog/2021/08/27/release-apache-apisix-2.9"}},u={authorsImageUrls:[void 0]},p=[{value:"New Plugin: authz-casbin",id:"new-plugin-authz-casbin",children:[]},{value:"New Feature: Dynamic Configuration of real-ip at Route Level",id:"new-feature-dynamic-configuration-of-real-ip-at-route-level",children:[]},{value:"Improvement: External Plug-in Mechanism",id:"improvement-external-plug-in-mechanism",children:[]},{value:"Improvement: Existing Plug-ins Enhancement",id:"improvement-existing-plug-ins-enhancement",children:[]},{value:"Download",id:"download",children:[]}],c={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Apache APISIX version 2.9 is released!")),(0,r.kt)("p",null,"Apache APISIX version 2.9 is officially released! \ud83c\udf89 This release has 30+ developers, 100+ PR submissions, 2 new features, and further improved support for plugins, come and learn about the new features in Apache APISIX 2.9!"),(0,r.kt)("h2",{id:"new-plugin-authz-casbin"},"New Plugin: authz-casbin"),(0,r.kt)("p",null,"The Casbin community has contributed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/d9b928321fcdd12eef024df8c7c410424c1e0c8b/docs/en/latest/"},"authz-casbin")," to APISIX plugins/authz-casbin.md) plugin to APISIX, and in the new APISIX 2.9 release, APISIX can combine Casbin to do granular permission management at the route level."),(0,r.kt)("p",null,"Casbin is an open source access control framework that supports configuration to decide whether to allow a certain access operation. With the authz-casbin plugin, we can do multiple roles of access control in one route at the same time."),(0,r.kt)("p",null,"This control can be set either through a configuration file or through the APISIX Control Plane; it can take effect for a given route or set global defaults. It is very flexible."),(0,r.kt)("p",null,"If you are interested in this plugin, you are welcome to read ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/25/Auth-with-Casbin-in-Apache-APISIX"},"Authorization with Casbin in Apache APISIX"),"."),(0,r.kt)("h2",{id:"new-feature-dynamic-configuration-of-real-ip-at-route-level"},"New Feature: Dynamic Configuration of real-ip at Route Level"),(0,r.kt)("p",null,"Apache APISIX version 2.9 now supports dynamic configuration of real-ip at the route level!"),(0,r.kt)("p",null,"The new version adds the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/real-ip/"},"real-ip")," plugin, which dynamically changes the IP and port of the client seen by APISIX."),(0,r.kt)("p",null,"We can use this plugin to dynamically set real-ip parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "plugins": {\n        "real-ip": {\n            "source": "http_x_forwarded_for",\n            "trusted_addresses": ["127.0.0.0/24"]\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"improvement-external-plug-in-mechanism"},"Improvement: External Plug-in Mechanism"),(0,r.kt)("p",null,"Apache APISIX version 2.9 further improves the support for external plugins with two major changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When sending a plugin configuration to Plugin Runner, a unique key is sent. because APISIX is a multi-process architecture, in the past, a plugin configuration was sent several times, causing Plugin Runner to update the plugin configuration repeatedly. Now, with this unique key, Plugin Runner can identify duplicate configurations. This makes it possible to implement a plug-in inside Plugin Runner that limits flow!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a mechanism to get APISIX information from Plugin Runner in the reverse direction. In addition to the request header and request path information sent from APISIX to Plugin Runner, Plugin Runner can also query information from APISIX in the reverse direction. The Var API has been implemented in the Go Plugin Runner implementation to use this mechanism to get information about Nginx variables such as the request_time of the request."))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner/tree/6f249010b83a124bc30e940635db7fa0838e2c4a"},"Go Plugin Runner"),", which includes this change, will be released next week Version 0.2.0 will be released next week, so stay tuned!"),(0,r.kt)("h2",{id:"improvement-existing-plug-ins-enhancement"},"Improvement: Existing Plug-ins Enhancement"),(0,r.kt)("p",null,"APISIX version 2.9 improves the functionality of existing plugins with two major changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/request-id/"},"request-id")," plugin supports ID generation via the snowflake algorithm. the snowflake ID generation algorithm is a distributed ID generation mechanism, which generates The snowflake ID generation algorithm is a distributed ID generation mechanism that combines machine IDs, timestamps, and generation sequences. We use etcd to ensure that each worker is assigned a unique machine ID.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/error-log-logger/"},"error-log-logger")," plugin supports reporting error logs to skywalking, adding to the observability of APISIX. This adds to the observability of APISIX."))),(0,r.kt)("h2",{id:"download"},"Download"),(0,r.kt)("p",null,"Download Apache APISIX 2.9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source code: please visit ",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads/"},"download page")),(0,r.kt)("li",{parentName:"ul"},"Binary installation package: please visit ",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/how-to-build/"},"Installation Guide"))))}h.isMDXComponent=!0}}]);