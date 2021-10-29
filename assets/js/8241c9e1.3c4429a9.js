"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8974],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=s,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14456:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return l},toc:function(){return h},default:function(){return p}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i={title:"From 0 to 1, How APISIX Ingress Has Grown and Gained Since Joining The Community",author:"Wei Jin",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["Apache APISIX","APISIX Ingress Controller","Kubernetes","Apache"],description:"This article describes the growth of APISIX Ingress and the details of the enhancements and community help that APISIX Ingress has received since joining the community.",tags:["technology"]},o=void 0,c={permalink:"/blog/2021/10/27/APISIX-Ingress",source:"@site/blog/2021/10/27/APISIX-Ingress.md",title:"From 0 to 1, How APISIX Ingress Has Grown and Gained Since Joining The Community",description:"This article describes the growth of APISIX Ingress and the details of the enhancements and community help that APISIX Ingress has received since joining the community.",date:"2021-10-27T00:00:00.000Z",formattedDate:"October 27, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:9.13,truncated:!0,authors:[{name:"Wei Jin",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],prevItem:{title:"Apache APISIX Extensions Guide",permalink:"/blog/2021/10/29/Extension-guide"},nextItem:{title:"Tutorial: How to use Cert Manager to manage certificates in Apache APISIX Ingress Controller",permalink:"/blog/2021/10/22/cert-manager-in-ingress"}},l={authorsImageUrls:[void 0]},h=[{value:"Concepts",id:"concepts",children:[{value:"What is APISIX Ingress",id:"what-is-apisix-ingress",children:[]},{value:"What is Apache APISIX",id:"what-is-apache-apisix",children:[]}]},{value:"Growth of APISIX Ingress",id:"growth-of-apisix-ingress",children:[{value:"Joining in the Apache Community",id:"joining-in-the-apache-community",children:[]},{value:"Growing in the Apache Community",id:"growing-in-the-apache-community",children:[]}]},{value:"Benefits of Joining the Apache Community",id:"benefits-of-joining-the-apache-community",children:[{value:"Features Improvements",id:"features-improvements",children:[]},{value:"Enriched library of usage scenarios",id:"enriched-library-of-usage-scenarios",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]},{value:"Future Plan",id:"future-plan",children:[{value:"Support Kubernetes gateway API",id:"support-kubernetes-gateway-api",children:[]},{value:"Support Ingress Controller Monolithic Architecture",id:"support-ingress-controller-monolithic-architecture",children:[]}]}],u={toc:h};function p(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article describes the growth of APISIX Ingress and the details of the enhancements and community help that APISIX Ingress has received since joining the community.")),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"what-is-apisix-ingress"},"What is APISIX Ingress"),(0,a.kt)("p",null,"In the K8s ecosystem, Ingress is a resource that represents the entry point for K8s traffic. To make it effective, an Ingress Controller is needed to listen to the Ingress resources in K8s, and to resolve the corresponding rules and actually carry the traffic."),(0,a.kt)("p",null,"APISIX Ingress is based on the Apache APISIX Ingress Controller implementation, which extends Kubernetes and also supports the native resource definition of Ingress resource."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156040-50b7a2ae-ed0c-42ac-8517-edd0715e0082.png",alt:"APISIX Ingress Architechture"})),(0,a.kt)("p",null,"As you can see in the figure above, APISIX Ingress is deployed in a Kubernetes cluster and proxies requests from a Kubernetes external cluster. These requests are then reverse proxied to the Kubernetes cluster Service, which also supports pushing services directly to the Service Pod."),(0,a.kt)("h3",{id:"what-is-apache-apisix"},"What is Apache APISIX"),(0,a.kt)("p",null,"We mentioned earlier that APISIX Ingress uses Apache APISIX as the actual data plane to carry business traffic, so what is Apache APISIX?"),(0,a.kt)("p",null,"Apache APISIX is the top open source project of the Apache Foundation and the most active open source gateway project, and is currently certified as a trusted open source project by the China Academy of Information and Communications Technology. As a dynamic, real-time, high-performance open source API gateway, Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, grayscale publishing, service meltdown, authentication, observability, and more."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156053-68751f2e-40e7-4932-99a4-5b9cc8f60628.png",alt:"Apache APISIX Architechture"})),(0,a.kt)("p",null,"As you can see from the figure above, Apache APISIX is divided into two parts, data plane on the left side is used to handle the reverse proxy of traffic, and control plane on the right side is responsible for the distribution of configuration."),(0,a.kt)("p",null,"The Apache APISIX Ingress Controller uses declarative configuration, and after internal processing, the data is finally synchronized to etcd and transferred to Apache APISIX through the Admin API on the control plane to achieve configuration synchronization of the Apache APISIX cluster."),(0,a.kt)("p",null,"More information about Apache APISIX Ingress Controller features can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"here"),"."),(0,a.kt)("h2",{id:"growth-of-apisix-ingress"},"Growth of APISIX Ingress"),(0,a.kt)("p",null,"Most of the previous sessions have mentioned a lot about the usage scenarios or comparative advantages of Apache APISIX Ingress. This time, let's take a different perspective and analyze the birth and development of Apache APISIX Ingress."),(0,a.kt)("h3",{id:"joining-in-the-apache-community"},"Joining in the Apache Community"),(0,a.kt)("p",null,"I provided the first lines of code for the APISIX Ingress Controller project in 2019 and the project was officially added to the Apache community in December 2020. In terms of product updates, we released the first GA version in June this year, as well as 1.3 this past October, and expect to release 1.4 in November this year to keep the project up to date."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156111-d0b82a61-b304-42ce-8d3a-2b959d3cb271.png",alt:"Contributors Growth"})),(0,a.kt)("p",null,"The graph above shows the contributor growth curve for Apache APISIX Ingress Controller. Combined with the timeline, we can see that the number of contributors has been increasing at a high and steady rate since we joined the Apache community in December 2020. This reflects that Apache APISIX Ingress is gaining more and more attention from partners and is gradually being used in enterprise production environments."),(0,a.kt)("h3",{id:"growing-in-the-apache-community"},"Growing in the Apache Community"),(0,a.kt)("p",null,"Starting with a personal project or a project incubated within a company and joining the community, the change of environment before and after inevitably leads to a change in the way the project works. By joining the community, Apache APISIX Ingress has received more support and assistance in terms of functionality and project integrity."),(0,a.kt)("h4",{id:"start-asynchronous-discussions"},"Start asynchronous discussions"),(0,a.kt)("p",null,"After becoming an Apache Software Foundation project, the Apache APISIX Ingress Controller project became more open. For example, every feature added or modified to the product has to be discussed publicly, usually through a mailing list and a GitHub Issue."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156102-8877f3da-a43d-4b94-9a84-a95743546112.png",alt:"Mail List"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156096-c0eeb189-54f8-4ebe-b019-f41001869186.png",alt:"GitHub Issue"})),(0,a.kt)("p",null,"At present, the two discussions are initiated at the same time, so that as many people as possible can judge the reasonableness of the features from their own use scenarios and use perspectives. This is no longer a personal project, but a community project, a collaborative effort involving multiple people."),(0,a.kt)("p",null,"At the same time, the asynchronous discussion of the mailing list and GitHub Issue allowed for a more comprehensive collection of feedback from the community (both questions and answers), and facilitated the search and organization of subsequent questions on a public basis."),(0,a.kt)("h4",{id:"arrange-bi-weekly-meetings"},"Arrange Bi-weekly Meetings"),(0,a.kt)("p",null,"In terms of interaction, Apache APISIX Ingress has taken the experience of some other communities and opened up a regular bi-weekly community meeting event."),(0,a.kt)("p",null,"This is a new channel that we hope to make the project transparent while also providing a more life-like channel for community members to discuss issues together."),(0,a.kt)("p",null,"Through this bi-weekly meeting, we will give you a detailed overview of what has happened in the last two weeks, what new issues have been raised and what PRs are waiting to be merged. Of course, we will also discuss any issues or suggestions for the current project."),(0,a.kt)("p",null,"We hope this will not only be an immediate discussion, but also an interaction to share and exchange observations from multiple perspectives."),(0,a.kt)("p",null,"For details on the bi-weekly meetings ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/614"},"click here"),", you can also view the ",(0,a.kt)("a",{parentName:"p",href:"https://space.bilibili.com/551921247"},"replay of previous meetings"),"."),(0,a.kt)("h4",{id:"become-more-disciplined-with-project-details"},"Become More Disciplined with Project Details"),(0,a.kt)("p",null,"Another big change since entering the Apache community is that project planning has become more standardized, whether it's code, testing, or version releases."),(0,a.kt)("p",null,"At the code level, the community is currently using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber-go/guide"},"Golang Code Specification"),", with some automated checks via Action CI."),(0,a.kt)("p",null,"In order to ensure that the project features can be merged quickly and no new bugs are introduced, we also have requirements on the test specification. For example, during the feature development process, unit tests or e2e tests must be included. e2e tests integrate gruntwork-io/terratest and kubernetes-sigs/kind to build Kubernetes test environment."),(0,a.kt)("p",null,"The test framework is Ginkgo, which is widely accepted by the community. The perfect test cases greatly ensure the stability of the project and reduce the maintenance cost of the project."),(0,a.kt)("p",null,"In terms of release, we are also strictly following the Apache community release specification. Since APISIX Ingress Controller is also an extension of Kubernetes, the iterations involving CRD also follow the Kubernetes release rules."),(0,a.kt)("h2",{id:"benefits-of-joining-the-apache-community"},"Benefits of Joining the Apache Community"),(0,a.kt)("p",null,'In addition to the above mentioned specifications on the project system, we have also received a lot of "technical feedbacks" from our partners during the process of going to the community.'),(0,a.kt)("h3",{id:"features-improvements"},"Features Improvements"),(0,a.kt)("p",null,"Most of these contributions come from community members using APISIX Ingress to solve problems or refine scenarios, such as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Admission Hook"),(0,a.kt)("li",{parentName:"ul"},"Ingress' own Prometheus Metrics"),(0,a.kt)("li",{parentName:"ul"},"mTLs"),(0,a.kt)("li",{parentName:"ul"},"Improvements to the grayscale function"),(0,a.kt)("li",{parentName:"ul"},"Additional product documentation")),(0,a.kt)("p",null,"More features ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/#readme"},"click here to view"),"."),(0,a.kt)("p",null,"Also with feedback from the community, we have supported ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md#installation"},"multi-platform integration features")," in response to popular demand."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156088-035cb0b0-8138-4e93-af5c-8e6ee8371f81.png",alt:"multi-platform integration"})),(0,a.kt)("h3",{id:"enriched-library-of-usage-scenarios"},"Enriched library of usage scenarios"),(0,a.kt)("p",null,"While the community was enriched with features, it was also enriched with scenarios on the use of Apache APISIX Ingress."),(0,a.kt)("h4",{id:"scenario-1-deploying-apache-apisix-ingress-inside-a-kubernetes-cluster"},"Scenario 1: Deploying Apache APISIX Ingress inside a Kubernetes cluster"),(0,a.kt)("p",null,"One of the most typical ways is to deploy within a Kubernetes cluster, and the following diagram illustrates a typical usage scenario."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156077-ced688eb-9dbf-4895-b7a2-acb2f4a288b2.png",alt:"Deploying Apache APISIX Ingress inside a Kubernetes cluster"})),(0,a.kt)("p",null,"After the client passes through the external LB, it is processed by Apache APISIX, which acts as a gateway and a reverse proxy and can also be deployed inside and outside the Kubernetes cluster."),(0,a.kt)("p",null,"The above deployment scenario is to integrate APISIX Ingress Controller inside Kubernetes and synchronize the declarative configuration of Kubernetes to Apache APISIX through APISIX Ingress Controller. cluster data plane to directly proxy the subsequent Upstream business services."),(0,a.kt)("h4",{id:"scenario-2-deploying-apache-apisix-ingress-across-clusters"},"Scenario 2: Deploying Apache APISIX Ingress Across Clusters"),(0,a.kt)("p",null,"Speech.ai, a company based in Suzhou, have provided us with a cross-cluster usage scenario, and the general flow is shown below.\n",(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156072-ae9a3943-e686-4629-a5b7-0b5c38301139.png",alt:"Deploying Apache APISIX Ingress Across Clusters"})),(0,a.kt)("p",null,"There are two clusters in the above architecture, the formal cloud host cluster and the physical machine cluster. Apache APISIX Ingress Controller is deployed within each cluster, interacting with the Kubernetes API server while synchronizing the configuration to the Apache APISIX Admin API. APISIX clusters."),(0,a.kt)("p",null,"In cross-cluster scenarios, access between clusters is mainly through Apache APISIX. Usually, the access between clusters is divided into private line and public network. With the health check function of Apache APISIX, the traffic can be automatically switched to other normal channels when the private line or public network transmission fails, which ensures the stability and high availability of business."),(0,a.kt)("h4",{id:"scenario-3-manage-mutiple-kubernetes-clusters-with-one-apache-apisix-cluster"},"Scenario 3: Manage Mutiple Kubernetes Clusters with one Apache APISIX Cluster"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1635304156063-c7d879c6-8dfb-4ead-a88d-b5bdc9e453d6.png",alt:"Manage Mutiple Kubernetes Clusters with one Apache APISIX Cluster"})),(0,a.kt)("p",null,"This usage scenario deploys the APISIX Ingress Controller inside a Kubernetes cluster, unlike Scenario 1 where there are multiple Kubernetes clusters. However, the corresponding Apache APISIX is actually deployed outside of all the Kubernetes clusters, and the configuration of each cluster is then synchronized to the overall Apache APISIX cluster via the Apache APISIX Ingress Controller."),(0,a.kt)("p",null,"The advantage of this is that you can fully control each Kubernetes cluster through a set of SLB Cluster, which can satisfy some enterprise architecture scenarios of multiple clusters or cross-room usage and reduce the number of forwarding on business traffic."),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Thanks to the above harvest, Apache APISIX Ingress has gained more and more attention, and more and more enterprises have started to apply APISIX Ingress Controller to their own products, such as China Mobile, Youzan, Guanwei Intelligence, and many other enterprises. We expect more enterprises to choose Apache APISIX Ingress in the future."),(0,a.kt)("h2",{id:"future-plan"},"Future Plan"),(0,a.kt)("p",null,"Apache APISIX Ingress has also received some suggestions from many community partners in the process of continuous iteration, such as some feature planning for future products."),(0,a.kt)("h3",{id:"support-kubernetes-gateway-api"},"Support Kubernetes gateway API"),(0,a.kt)("p",null,"The Kubernetes community has given a gateway API implementation standard to unify the design of Ingress. Once this standard is implemented, subsequent users can use the same configuration in different Ingress when using APISIX Ingress, perfectly adapting to multiple deployments."),(0,a.kt)("h3",{id:"support-ingress-controller-monolithic-architecture"},"Support Ingress Controller Monolithic Architecture"),(0,a.kt)("p",null,"There are some voices in the community who believe that etcd, on which Apache APISIX relies, is actually a stateful service, and once stateful services are involved, additional attention needs to be paid to storage and migration related work."),(0,a.kt)("p",null,"We hope to make Apache APISIX seamlessly scalable in a containerized cloud-native scenario, so we will follow up with deployment planning for the Ingress Controller monolithic architecture. In this scenario, Apache APISIX can be deployed separately from etcd, and declarative configurations can be listened to by the Apache APISIX Ingress Controller and synchronized to Apache APISIX."),(0,a.kt)("p",null,"More future plans and feature-related content ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/milestones"},"click here"),"."),(0,a.kt)("p",null,"The development of the community is never-ending, and we appreciate your support of Apache APISIX Ingress Controller along the way. We hope that you will actively participate and give us feedback on any issues regarding the Apache APISIX Ingress Controller project to make the product even better."))}p.isMDXComponent=!0}}]);