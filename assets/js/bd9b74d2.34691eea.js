"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65606],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(m,a(a({ref:t},h),{},{components:n})):o.createElement(m,a({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return l},toc:function(){return h},default:function(){return u}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a={title:"Chaos Mesh Helps Apache APISIX Improve Stability",author:"Shuyang Wu",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["APISIX","Apache APISIX","Chaos Mesh"],description:"This article describes how to use Chaos Mesh in a variety of scenarios to improve stability for Apache APISIX.",tags:["Practical Case"]},s=void 0,c={permalink:"/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability",source:"@site/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability.md",title:"Chaos Mesh Helps Apache APISIX Improve Stability",description:"This article describes how to use Chaos Mesh in a variety of scenarios to improve stability for Apache APISIX.",date:"2021-06-16T00:00:00.000Z",formattedDate:"June 16, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:5.255,truncated:!0,authors:[{name:"Shuyang Wu",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"Apache APISIX Dashboard Access Control Bypass Vulnerability Advisory (CVE-2021-33190)",permalink:"/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement"},nextItem:{title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",permalink:"/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison"}},l={authorsImageUrls:[void 0]},h=[{value:"How to Apply Chaos Engineering on APISIX",id:"how-to-apply-chaos-engineering-on-apisix",children:[]},{value:"Future plans",id:"future-plans",children:[]}],p={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article describes how to use Chaos Mesh in a variety of scenarios to improve stability for Apache APISIX.")),(0,i.kt)("p",null,"Apache APISIX is a top-level project under the Apache Foundation and has been tested in production environments with tens of billions of requests per day. As the community has grown, Apache APISIX has become more and more powerful, requiring more and more interactions with external components, and the uncertainty that comes with it has grown exponentially. We have received some feedback from users in the community, and here are two examples."),(0,i.kt)("h4",{id:"scenario-1"},"Scenario 1"),(0,i.kt)("p",null,"In the Apache APISIX configuration center, when there is unexpectedly high network latency between etcd and Apache APISIX, can Apache APISIX still operate normally for traffic filtering and forwarding?"),(0,i.kt)("h4",{id:"scenario-2"},"Scenario 2"),(0,i.kt)("p",null,"User feedback in an issue reports errors interacting with the Apache APISIX admin API when a node in the etcd cluster fails while the cluster is still operational."),(0,i.kt)("p",null,"While Apache APISIX covers most scenarios in CI with unit / e2e / fuzz testing, it does not yet cover interactions with external components. Can Apache APISIX give appropriate error messages when network fluctuations, hard disk failures, or unpredictable abnormal behavior such as process kill occurs, and can it maintain or restore itself to a normal state of operation? In order to test the coverage of the scenarios proposed by users and to proactively identify similar issues before putting it into production, the community decided to use Chaos Mesh, PingCAP's open source chaos engineering platform, for testing."),(0,i.kt)("p",null,"Chaos engineering is a method of experimenting on the system infrastructure to proactively identify vulnerabilities in the system, thus ensuring that the system is resilient to runaway environments in production. Chaos engineering was first proposed by Netflix to simulate and thus counteract the instability of early cloud services. As the technology has evolved, chaos engineering platforms now offer a wider variety of faults to inject and rely on Kubernetes to more easily control the fault radius. These are all important reasons why Apache APISIX chose Chaos Mesh, but as an open source community, Apache APISIX understands that only an active community can ensure stable use and rapid iteration of the software, and this is what makes Chaos Mesh even more appealing."),(0,i.kt)("h3",{id:"how-to-apply-chaos-engineering-on-apisix"},"How to Apply Chaos Engineering on APISIX"),(0,i.kt)("p",null,"Chaos Engineering has evolved into a complete methodology beyond the mere injection of faults. According to the recommendations of Principle of Chaos Engineering, deploying chaos engineering experiments requires five steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"define the steady state, i.e., find a quantifiable metric that proves proper operation."),(0,i.kt)("li",{parentName:"ol"},"make a hypothesis that the metric always remains in steady state in both the experimental and control groups."),(0,i.kt)("li",{parentName:"ol"},"design the experiment to introduce possible failures in operation."),(0,i.kt)("li",{parentName:"ol"},"test the hypothesis, i.e., falsify the hypothesis by comparing the results of the experimental and control groups."),(0,i.kt)("li",{parentName:"ol"},"fix the problem.")),(0,i.kt)("p",null,"The next two user feedback scenarios are used as examples to introduce the process of applying chaos engineering to Apache APISIX according to these five steps."),(0,i.kt)("h4",{id:"scenario-1-1"},"Scenario 1"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2021-06-16-1",src:n(97425).Z})),(0,i.kt)("p",null,"Describe this scenario in a diagram. Against the five steps above, you first need to find quantifiable metrics that measure the proper functioning of Apache APISIX. The primary method of testing is to use Grafana to monitor Apache APISIX performance metrics. Once measurable metrics are found, the data can be extracted separately from Prometheus in the CI for comparison. Another point is that the logs need to be analyzed. Another point is the need to analyze logs, which for Apache APISIX is to look at Nginx error.log to determine whether errors are reported and whether they are expected."),(0,i.kt)("p",null,"In the control group, before Chaos was introduced, we tested that set/get route was successful, etcd was connectable, and recorded the RPS at that time. There is no significant change in RPS compared to before. The experiment is as expected."),(0,i.kt)("h4",{id:"scenario-2-1"},"Scenario 2"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2021-06-16-2",src:n(13545).Z})),(0,i.kt)("p",null,'Introducing pod-kill chaos after performing the same control group experiment reproduces the expected error. In the case of randomly deleting a few etcd nodes in the cluster, etcd connectivity exhibited sporadic behavior, and the logs printed a large number of connection denied errors. More interestingly, the setup route returned normally when deleting the first or third node in the etcd endpoint list, and only when deleting the second node in the etcd endpoint list did the setup route report the error "connection refused".'),(0,i.kt)("p",null,"The reason for this is that the etcd lua API used by Apache APISIX does not select endpoints randomly, but sequentially, so the operation performed by the new etcd client is equivalent to binding to only one etcd endpoint, resulting in a persistent failure. After fixing this issue, a health check was added to the etcd lua API to ensure that it does not duplicate a lot on a disconnected etcd, and a fallback check was added for when an etcd cluster is completely disconnected to avoid blowing up the log with a lot of errors."),(0,i.kt)("h3",{id:"future-plans"},"Future plans"),(0,i.kt)("h4",{id:"1-chaos-testing-with-e2e-simulation-scenarios"},"1. Chaos testing with e2e simulation scenarios"),(0,i.kt)("p",null,"Currently in Apache APISIX, it still relies heavily on people to identify possible vulnerabilities in the system for testing fixes. For the open source community, unlike the previously mentioned Netflix application of chaos engineering in the enterprise, while testing in CI without worrying about the impact of the failure radius of chaos engineering on the production environment, it also does not cover the complex and comprehensive scenarios in the production environment."),(0,i.kt)("p",null,"In order to cover more scenarios, the future community plans to simulate more complete scenarios using the existing e2e tests for a larger and more randomized chaos testing."),(0,i.kt)("h4",{id:"2-adding-chaos-testing-to-more-apache-apisix-projects"},"2. Adding Chaos Testing to More Apache APISIX Projects"),(0,i.kt)("p",null,"In addition to finding more possible vulnerabilities for Apache APISIX, the community plans to add chaos testing to more projects such as Apache APISIX Dashboard and Apache APISIX Ingress Controller."),(0,i.kt)("h4",{id:"3-adding-features-to-chaos-mesh"},"3. Adding Features to Chaos Mesh"),(0,i.kt)("p",null,"When deploying Chaos Mesh, we have encountered some features that are not supported at the moment, including the target of network latency does not support the selection of service, network chaos can not specify the container port injection, etc. The Apache APISIX community will also help Chaos Mesh to add related features in the future. We hope that the open source community will get better and better."))}u.isMDXComponent=!0},97425:function(e,t,n){t.Z=n.p+"assets/images/2021-06-16-1-ffb5085607d040e39a26c48739c6d581.png"},13545:function(e,t,n){t.Z=n.p+"assets/images/2021-06-16-2-7da0a0b158ae1eef191c24b2d93afb9c.png"}}]);