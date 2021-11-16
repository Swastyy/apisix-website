"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5968],{3905:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return d}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(i),d=n,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return i?a.createElement(g,r(r({ref:t},h),{},{components:i})):a.createElement(g,r({ref:t},h))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},54841:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return h},default:function(){return u}});var a=i(87462),n=i(63366),o=(i(67294),i(3905)),r={title:"How to Improve the Observability of Nginx with Apache APISX",author:"Wei Jin",authorURL:"https://github.com/gxthrj",authorImageURL:"https://avatars.githubusercontent.com/u/4413028?v=4",keywords:["API Gateway","APISIX","Apache APISIX","Nginx","observability"],description:"Best Practices: This article shares solutions and practices for observability in the context of Nginx observability, the relationship between Apache APISIX and Nginx, Apache APISIX observability, and further enhancing observability with Apache SkyWalking.",tags:["Practical Case"]},s=void 0,l={permalink:"/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx",source:"@site/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx.md",title:"How to Improve the Observability of Nginx with Apache APISX",description:"Best Practices: This article shares solutions and practices for observability in the context of Nginx observability, the relationship between Apache APISIX and Nginx, Apache APISIX observability, and further enhancing observability with Apache SkyWalking.",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:13.03,truncated:!0,authors:[{name:"Wei Jin",url:"https://github.com/gxthrj",imageURL:"https://avatars.githubusercontent.com/u/4413028?v=4"}],prevItem:{title:"Abandoning Kong and Nginx, Hyperchain Technology implements on its BaaS platform",permalink:"/blog/2021/08/09/Apache-APISIX-in-Quliankeji"},nextItem:{title:"Kong-To-APISIX Migration Tool",permalink:"/blog/2021/08/05/Kong-to-APISIX"}},c={authorsImageUrls:[void 0]},h=[{value:"Overview",id:"overview",children:[]},{value:"Nginx Observability",id:"nginx-observability",children:[{value:"Common monitoring methods for Nginx",id:"common-monitoring-methods-for-nginx",children:[]},{value:"Nginx&#39;s pitfalls",id:"nginxs-pitfalls",children:[]},{value:"Nginx Observability Summary",id:"nginx-observability-summary",children:[]}]},{value:"Apache APISIX Overview",id:"apache-apisix-overview",children:[{value:"Apache APISIX in relation to Nginx",id:"apache-apisix-in-relation-to-nginx",children:[]},{value:"Apache APISIX Introduction",id:"apache-apisix-introduction",children:[]},{value:"Apache APISIX Solution",id:"apache-apisix-solution",children:[]}]},{value:"Apache APISIX Observability",id:"apache-apisix-observability",children:[{value:"Types of data Apache APISIX supports to collect",id:"types-of-data-apache-apisix-supports-to-collect",children:[]},{value:"Apache APISIX advantages in observability",id:"apache-apisix-advantages-in-observability",children:[]}]},{value:"Combining Apache SkyWalking for further improvements in observability",id:"combining-apache-skywalking-for-further-improvements-in-observability",children:[{value:"SkyWalking Satellite",id:"skywalking-satellite",children:[]},{value:"ALS Solution",id:"als-solution",children:[]},{value:"Integrating Events into SkyWalking",id:"integrating-events-into-skywalking",children:[]}]},{value:"Extended Reading",id:"extended-reading",children:[{value:"How the extension mechanism of Apache APISIX is implemented and its impact on stability",id:"how-the-extension-mechanism-of-apache-apisix-is-implemented-and-its-impact-on-stability",children:[]},{value:"How to confirm that rules are in effect",id:"how-to-confirm-that-rules-are-in-effect",children:[]}]},{value:"About the Author",id:"about-the-author",children:[]}],p={toc:h};function u(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article shares solutions and practices for observability in the context of Nginx observability, the relationship between Apache APISIX and Nginx, Apache APISIX observability, and further enhancing observability in conjunction with Apache SkyWalking.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,'"Observability" is a metric that allows you to keep track of how your infrastructure, system platform, or application is performing. Commonly, metrics, logging, and tracing and events data are collected to help developers and operations staff detect, investigate, alert, and correct system problems.'),(0,o.kt)("p",null,"In this article, we will share solutions and practices for observability in the context of Nginx observability, the relationship between Apache APISIX and Nginx, Apache APISIX observability, and further observability improvements in conjunction with Apache SkyWalking."),(0,o.kt)("h2",{id:"nginx-observability"},"Nginx Observability"),(0,o.kt)("h3",{id:"common-monitoring-methods-for-nginx"},"Common monitoring methods for Nginx"),(0,o.kt)("p",null,"Nginx is observable to some extent, and the following is a list of common monitoring methods for Nginx."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ngx_http_stub_status_module"),(0,o.kt)("li",{parentName:"ol"},"VTS module + exporter + prometheus + grafana (if you have a low version of Nginx, you need to introduce exporter)"),(0,o.kt)("li",{parentName:"ol"},"Nginx Amplify SaaS")),(0,o.kt)("h4",{id:"ngx_http_stub_status_module"},"ngx_http_stub_status_module"),(0,o.kt)("p",null,"The ngx_http_stub_status_module mainly collects instance-level statistics."),(0,o.kt)("h4",{id:"vts-module"},"VTS module"),(0,o.kt)("p",null,"The VTS module has 3 obvious drawbacks."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Complex installation"),": Although VTS module is able to collect metrics and collect more types of metrics, it is more complex to install. If you want to use the VTS module, you need to recompile Nginx, add the VTS moudle before compiling Nginx, and reinstall Nginx after completing the compilation before you can use VTS properly. 2.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Weak extensibility"),": VTS extensibility is divided into two parts: one is to add extensions to VTS before compilation; the other is to add extensions after compilation -- modifying the nginx.conf configuration file. Adding extensions by modifying the nginx.conf file will cause Nginx to reload, and a direct reload of the production environment may have some impact on the business.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Slow community updates"),": The last update to the VTS module was in 2018, and it has been down for 3 years."))),(0,o.kt)("h4",{id:"nginx-amplify-saas"},"Nginx Amplify SaaS"),(0,o.kt)("p",null,"Nginx Amplify is a SaaS service where Nginx Amplify provides services on the remote end and installs agents outside of the Nginx service.\nIf you install the collection module outside of Nginx, you are limited in the metrics you can collect, and you can only get the information exposed by Nginx, not the internal information that is not exposed."),(0,o.kt)("p",null,"In addition, because Nginx Amplify SaaS is a SaaS service, you need to transfer the collected data to the server through the public network, which can pose some security risks and keep some enterprise users out. Perhaps Nginx Amplify is targeted at enterprise users like Nginx plus, not open source users."),(0,o.kt)("p",null,"Also, the Nginx Amplify SaaS community is not active and has been down for 2 years."),(0,o.kt)("h3",{id:"nginxs-pitfalls"},"Nginx's pitfalls"),(0,o.kt)("p",null,"Nginx has its own flaws in Events collection, two of which are listed here."),(0,o.kt)("p",null,"Nginx is configured based on nginx.conf, which is reloaded after changes are made to the nginx.conf file. There are no Events available other than reload events, so we can't know what has changed each time we modify the file, e.g., if we start with one route and modify the file to add 10 routes, we won't know which 10 routes have been added with only reload events."),(0,o.kt)("p",null,"Nginx is a reverse proxy, and the real backend service may be restarted, upgraded, or abnormal, so without active health checks and relying on passive checks, we will only know that something is wrong with the service when the traffic is abnormal, which will throw away many Events and result in incomplete information about upstream Events. ."),(0,o.kt)("h3",{id:"nginx-observability-summary"},"Nginx Observability Summary"),(0,o.kt)("p",null,"The open source version of Nginx does not provide very good monitoring. Although Nginx provides some monitoring tools, they are very complex to install and configure and have little scalability. It is possible that these tools are not designed for observability, but simply to be able to see metrics or statistics to easily pinpoint problems. There are various observability setup products available, but they are difficult to integrate into Nginx."),(0,o.kt)("p",null,"In addition, the Nginx community is stagnant, resulting in slow iterations of Nginx."),(0,o.kt)("h2",{id:"apache-apisix-overview"},"Apache APISIX Overview"),(0,o.kt)("h3",{id:"apache-apisix-in-relation-to-nginx"},"Apache APISIX in relation to Nginx"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158638-aba4e627-d2d6-4bf5-b431-61eb3913a296.png",alt:"Relationship between Apache APISIX and Nginx"})),(0,o.kt)("p",null,"Apache APISIX is based on the Nginx implementation, but relies only on the Nginx network libraries. On top of Nginx, Apache APISIX implements its own core code, with extension mechanisms reserved."),(0,o.kt)("p",null,"The table shows a comparison of Apache APISIX and Nginx features. Apache APISIX can do both reverse proxy and implement some features that Nginx does not support, such as: active health checking, traffic management, horizontal scaling, etc., and these features are open source."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API Design"),": It is simpler to use Apache APISIX for API design."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Open Source Dashboard"),": The reverse proxy can be configured all in the interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Active Health Check"),"\uff1aApache APISIX supports active health checks, which can be combined with Events to improve observability."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Traffic Management"),": Suitable for monitoring data, or for use when a business release goes live."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Horizontal Scaling"),": Apache APISIX supports horizontal scaling, a feature that is made possible by the Apache APISIX architecture (see below)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Plug-in extension mechanism"),": Apache APISIX's plug-in extension mechanism makes it extremely powerful and scalable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Plugin orchestration"),": Multiple plugins are logically orchestrated and combined for use according to business requirements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Certificate Management"),": Apache APISIX supports dynamic certificate management.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158643-ecc67e12-2076-41e5-88d8-baa14144f35d.png",alt:"Apache APISIX Architecture Diagram"})),(0,o.kt)("h3",{id:"apache-apisix-introduction"},"Apache APISIX Introduction"),(0,o.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway that provides load balancing, dynamic upstream, grayscale publishing, service meltdown, authentication, observability, and other rich traffic management features. Apache APISIX is also the world's most active open source API gateway project, and is a production-ready, high-performance gateway. Hundreds of enterprises around the world have used Apache APISIX to handle business-critical traffic, covering finance, Internet, manufacturing, retail, carriers, and more, such as NASA, the EU's Digital Factory, Air China, China Mobile, Tencent, Huawei, Weibo, NetEase, Shell Finder, 360, Taikang, and more."),(0,o.kt)("h3",{id:"apache-apisix-solution"},"Apache APISIX Solution"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158645-83c22975-ebf1-4861-8b61-38639a28875a.png",alt:"Apache APISIX Full Traffic Solution"})),(0,o.kt)("p",null,"On the left side of the diagram above, the evolution from top to bottom is from monolithic services to SOA (Service Oriented Architecture) to microservices."),(0,o.kt)("p",null,"Under SOA, gateways typically use Nginx or HAProxy; under microservices architecture, gateways use Nginx for load balancing. There are two common solutions for microservices architecture: one is based on Java technology stack implementation, such as Spring Cloud series; the other is Service Mesh."),(0,o.kt)("p",null,"Where does Apache APISIX fit into this evolutionary process and what can it do?"),(0,o.kt)("p",null,"Simply put, the parts in red in the diagram on the left (Nginx / HAProxy / Kong / Spring Cloud Zuul / Spring Cloud Gateway / Traefik / Envoy / Ingress Nginx) can all be replaced with an Apache APISIX solution."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In SOA there is Apache APISIX SLB solution, in microservice architecture there is Apache APISIX Gateway, in Kubernetes deployment there is Apache APISIX Ingress, in Service Mesh deployment there is Apache APISIX mesh"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158648-dffd59dd-15c2-4f76-832e-5ed3763b18e5.png",alt:"Apache APISIX Full Traffic Data Surface"})),(0,o.kt)("p",null,"In terms of service request traffic, when a client initiates a request, it passes through the LB, passes through the Gateway, and the request is distributed to the back-end business service. The parts in red (LB / Gateway / Spring Cloud Gateway / K8s Ingress / Sidecar) can all choose Apache APISIX as the solution. Apache APISIX supports multi-language development plug-ins and can be written in Java under the Java architecture."),(0,o.kt)("p",null,"Apache APISIX is a full-flow data plane, and Apache APISIX has solutions for LB, Gateway, Ingress, and sidecar, and they are unified solutions in terms of observability. When the solution is unified, the management control chain is also easy to implement out."),(0,o.kt)("h2",{id:"apache-apisix-observability"},"Apache APISIX Observability"),(0,o.kt)("p",null,"After a brief look at Nginx and Apache APISIX, here are two questions: What can Apache APISIX do in terms of observability, and what are the advantages of Apache APISIX observability?"),(0,o.kt)("h3",{id:"types-of-data-apache-apisix-supports-to-collect"},"Types of data Apache APISIX supports to collect"),(0,o.kt)("p",null,"Apache APISIX supports the following types of data collection."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Tracing - integrated with SkyWalking"),(0,o.kt)("li",{parentName:"ol"},"Metrics - integrated with SkyWalking / Prometheus"),(0,o.kt)("li",{parentName:"ol"},"Logging - integration with SkyWalking / other logging platforms")),(0,o.kt)("p",null,"Apache APISIX is a gateway-type product that can replace Nginx or other gateways; in terms of observability Apache APISIX can integrate with multiple APM or observable systems, e.g. Tracing part can integrate with SkyWalking, Metrics can integrate with SkyWalking or Prometheus, Logging can integrate with SkyWalking and other logging systems."),(0,o.kt)("h3",{id:"apache-apisix-advantages-in-observability"},"Apache APISIX advantages in observability"),(0,o.kt)("h4",{id:"high-scalability"},"High Scalability"),(0,o.kt)("p",null,"Why does Apache APISIX have great extensibility? Because Apache APISIX supports writing plug-ins in multiple languages and can write plug-ins in programming languages such as Lua, Java, Golang, etc. Apache APISIX can extend its capabilities through plug-ins. The three data types mentioned above are implemented through the plug-in mechanism."),(0,o.kt)("h4",{id:"flexible-configuration-capabilities"},"Flexible Configuration Capabilities"),(0,o.kt)("p",null,"Three examples are given to illustrate the flexible configuration capabilities of Apache APISIX."),(0,o.kt)("p",null,"The first example is ",(0,o.kt)("strong",{parentName:"p"},"Apache APISIX can modify the configuration of logging at runtime"),", for example, by adding or modifying logging fields. Modifying logging fields is a relatively common requirement. For example, when a business first goes live, logging fields are configured, and after the system has been running for a while, several logging fields need to be modified or added. If you are using Nginx, you can do this by modifying the nginx.conf file and reloading the configuration to take effect. ",(0,o.kt)("strong",{parentName:"p"},"Apache APISIX just needs to script the fields to take effect dynamically"),"."),(0,o.kt)("p",null,"A second example of flexible configuration capabilities is the use of Prometheus. In Apache APISIX, if you want to create/delete a metric or extend metrics labels, just add a new metircs or fill in the relevant information in the Prometheus plugin, and Apache APISIX has a hot reload mechanism to take effect directly without restarting."),(0,o.kt)("p",null,"The third flexible configuration capability is in the Apache APISIX implementation, which manages all routing objects and has a set of object management mechanisms in memory. In Apache APISIX, you can add a plug-in to an API, and the level of effect can be refined to the API, and each API can be bound to the plug-in or the plug-in can be removed from the API. Apache APISIX can be fine-grained to control the observable data collection for each API in each service. In other words, you can collect only the data you care about most, and these configurations are dynamically in effect and can be adjusted at any time."),(0,o.kt)("h4",{id:"active-community"},"Active Community"),(0,o.kt)("p",null,"One of the most important advantages of Apache APISIX is that there is an active community, and an active community allows the product to iterate quickly, get better and better, and get everyone's needs met."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158650-2c4a287f-45a3-4c49-94d1-5be3914e5f69.png",alt:"Apache APISIX Community Activity Comparison Chart"})),(0,o.kt)("p",null,"The graph above shows the growth curves of Apache APISIX (green), Kong (light blue), mosn (yellow), and bfe (dark blue) contributors, with Apache APISX showing the fastest growth trend and the steepest curve. Apache APISIX community activity is the most active within its category."),(0,o.kt)("h2",{id:"combining-apache-skywalking-for-further-improvements-in-observability"},"Combining Apache SkyWalking for further improvements in observability"),(0,o.kt)("p",null,"What enhancements can be made by combining Apache APISIX with Apache SkyWalking? In addition to the SkyWalking tracing plugin, you can also aggregate tracing, metrics, logging, and events into SkyWalking, and use SkyWalking's aggregation capabilities to link data."),(0,o.kt)("h3",{id:"skywalking-satellite"},"SkyWalking Satellite"),(0,o.kt)("p",null,"SkyWalking Satellite is developed by the Apache APISIX community, the Apache SkyWalking community, and Baidu in deep cooperation."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158652-130e62e1-32dd-4705-9f24-ceffd039560a.png",alt:"Apache APISIX SkyWalking Satellite"})),(0,o.kt)("p",null,"SkyWalking Satellite follows the steps in the above diagram to collect data. SkyWalking Satellite can be deployed closer to the front-end where the data is generated, in the form of a sidecar."),(0,o.kt)("p",null,"In the diagram from top to bottom business requests go through Apache APISIX proxy to Upstream, Satellite is deployed next to Apache APISIX in the form of sidecar to collect data from Apache APISIX in three data types: tracing, metrics and logging, and send it to SkyWalking via GRPC protocol."),(0,o.kt)("p",null,"The most important point is that ",(0,o.kt)("strong",{parentName:"p"},"in this deployment method, Apache APISIX can integrate the three data types directly into SkyWalking without making any changes"),"."),(0,o.kt)("h3",{id:"als-solution"},"ALS Solution"),(0,o.kt)("p",null,"ALS (Access Log Service) sends out access logs from Apache APISIX, adding special fields to the normal access log, e.g., adding key fields to facilitate topology map generation and aggregating metrics."),(0,o.kt)("p",null,"The biggest advantage of ALS solution is that it can directly analyze and aggregate three types of data, such as topology, metrics, and logging, by means of access log.\nWhen using Prometheus, if you configure the statistics of metrics at the URI level, the whole metrics will be inflated dramatically. Because there may be dozens of services at the URI level, each metrics may be followed by many labels, which will slow down the performance of the gateway and make the metrics more difficult to obtain. ",(0,o.kt)("strong",{parentName:"p"},"Use ALS solution to send the data to SkyWalking by streaming, leaving the calculation to SkyWalking and making it easy to query later"),", without pulling very large data every few seconds."),(0,o.kt)("h3",{id:"integrating-events-into-skywalking"},"Integrating Events into SkyWalking"),(0,o.kt)("p",null,"Commonly used Events include: configuration distribution, cluster changes, and health checks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuration Distribution"),": When configuring API distribution, routes may be added, routes modified, routes removed, or plugins added."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cluster Changes"),": When the cluster changes, you need to know the number of services in the cluster. For example, IPs change during expansion, and the changes are reflected when the gateway receives the message. Each process is an event, and these events need to be exposed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Health Check"),": Proactive detection of health, e.g., business request failure rate suddenly becomes high, and events detect unhealthy business services, at which point the problem can be quickly located."),(0,o.kt)("h2",{id:"extended-reading"},"Extended Reading"),(0,o.kt)("h3",{id:"how-the-extension-mechanism-of-apache-apisix-is-implemented-and-its-impact-on-stability"},"How the extension mechanism of Apache APISIX is implemented and its impact on stability"),(0,o.kt)("p",null,"Question: How is the extension mechanism of Apache APISIX implemented? Does extending this feature have an impact on the stability of Apache APISIX itself?"),(0,o.kt)("p",null,"A: The Apache APISIX extension mechanism benefits from its architecture, which allows adding business logic to each phase (rewrite / access / header_filter / body_filter / preread_filter / log)."),(0,o.kt)("p",null,"As for stability, Apahce APISIX has open sourced nearly 50 plugins, each of which is tested end-to-end and is proven to be stable and available. However, custom plug-ins have to follow certain specifications, which are simple, but we should not be too casual. The stability of the custom plug-ins is guaranteed and needs to be guaranteed by the business side itself."),(0,o.kt)("h3",{id:"how-to-confirm-that-rules-are-in-effect"},"How to confirm that rules are in effect"),(0,o.kt)("p",null,"Q: Nginx may have a lot of rules configured in the nginx.conf file, and the later rules may be blocked by the earlier rules, so it is not clear if the later rules are in effect."),(0,o.kt)("p",null,"A: The more configuration you have in the nginx.conf file, and the more complex the configuration service, the more difficult it is to maintain this file. But in Apache APISIX, the configuration file is fixed, and the official Apache APISIX configuration is the optimal configuration for most scenarios, while other routing configurations are configured in the API, and the routing configuration is in memory."),(0,o.kt)("p",null,"In terms of management, you can manage your routes in a variety of organizational ways, for example, through the Dashboard."),(0,o.kt)("p",null,"For example, if you have a service called ABC, you can have various route definitions under this service, and the route definitions can be viewed in a list. Another way to view routes is to tag the API in the dashboard, which makes the management of routes more user-friendly and makes it easy to query the list of routes by tag filtering."),(0,o.kt)("h2",{id:"about-the-author"},"About the Author"),(0,o.kt)("p",null,"Wei Jin, Apache APISIX PMC and Apache SkyWalking committer."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630651158654-2e028970-9e09-4d52-bf72-ab53aa98706b.png",alt:"Jin Wei's profile"})))}u.isMDXComponent=!0}}]);