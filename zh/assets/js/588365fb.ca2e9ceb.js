(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(8),i=(r(0),r(267)),l={title:"Release Apache APISIX Ingress Controller 0.5"},o={permalink:"/zh/events/2021/04/13/release-apisix-ingress-controller-0.5",source:"@site/events/2021-04-13-release-apisix-ingress-controller-0.5.md",description:"A lot of important features are supported in this release, it makes apisix-ingress-controller more powerful and flexible.",date:"2021-04-13T00:00:00.000Z",tags:[],title:"Release Apache APISIX Ingress Controller 0.5",readingTime:1.05,truncated:!0,nextItem:{title:"Release Apache APISIX 2.5",permalink:"/zh/events/2021/04/05/release-apache-apisix-2.5"}},s=[{value:"Core",id:"core",children:[]},{value:"Fix",id:"fix",children:[]},{value:"Test",id:"test",children:[]}],p={toc:s};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A lot of important features are supported in this release, it makes apisix-ingress-controller more powerful and flexible.\nAlso, several bugs are fixed so the robustness is also enhanced."),Object(i.b)("p",null,"We recommend you to use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.5"},"Apache APISIX 2.5")," with this release. Note since CRDs are updated, when\nyou upgrade your old release, ",Object(i.b)("strong",{parentName:"p"},"manual steps are required to apply the new ApisixRoute"),". Please see the instruction ",Object(i.b)("inlineCode",{parentName:"p"},"7")," in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/en/latest/FAQ.md"},"FAQ")," for more details."),Object(i.b)("h2",{id:"core"},"Core"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Support traffic split feature (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/308"},"#308"),")"),Object(i.b)("li",{parentName:"ul"},"Support route match exprs (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/304"},"#304"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/306"},"#306"),")"),Object(i.b)("li",{parentName:"ul"},"Support to configure ",Object(i.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resources in version ",Object(i.b)("inlineCode",{parentName:"li"},"extensions/v1beta1")," (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/296"},"#296"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/315"},"#315"),")"),Object(i.b)("li",{parentName:"ul"},"Add name fields when generating APISIX Routes and Upstreams (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/333"},"#333"),")"),Object(i.b)("li",{parentName:"ul"},"Support to use remote addrs as route match conditions (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/347"},"#347"),")"),Object(i.b)("li",{parentName:"ul"},"Schema for ApisixRoute CRD (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/345"},"#345"),")")),Object(i.b)("h2",{id:"fix"},"Fix"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sometimes ApisixRoute update is ineffective (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/319"},"#319"),")"),Object(i.b)("li",{parentName:"ul"},"Priority field is not passed to APISIX (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/329"},"#329"),")"),Object(i.b)("li",{parentName:"ul"},"Route rule name in ApisixRoute can be duplicated (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/330"},"#330"),")"),Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"PUT")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"PATCH")," method when updating resources (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/353"},"#353"),")"),Object(i.b)("li",{parentName:"ul"},"Secrets controller doesn't push the newest cert and priv key to APISIX (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/337"},"#337"),")")),Object(i.b)("h2",{id:"test"},"Test"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")," to run e2e suites (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/331"},"#331"),")"),Object(i.b)("li",{parentName:"ul"},"Add e2e test cases for plugins redirect, uri-blocker, fault-injection, request-id, limit-count, echo, cors, response-rewrite, proxy-rewrite (",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/320"},"#320"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/327"},"#327"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/328"},"#328"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/334"},"#334"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/336"},"#336"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/342"},"#342"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/341"},"#341"),")")))}c.isMDXComponent=!0},267:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),c=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||b[h]||i;return r?n.a.createElement(m,o(o({ref:t},p),{},{components:r})):n.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);