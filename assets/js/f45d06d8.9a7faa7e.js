(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(235)),s={title:"Getting Started"},i={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/getting-started.md",slug:"/getting-started",permalink:"/docs/ingress-controller/getting-started",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/getting-started.md",version:"current",sidebar:"docs",next:{title:"Ingress APISIX Use Examples",permalink:"/docs/ingress-controller/practices/index"}},l=[{value:"What is apisix-ingress-controller",id:"what-is-apisix-ingress-controller",children:[]},{value:"Features",id:"features",children:[]},{value:"Installation on Cloud",id:"installation-on-cloud",children:[]},{value:"Installation on Prem",id:"installation-on-prem",children:[]},{value:"Get Involved to Contribute",id:"get-involved-to-contribute",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-apisix-ingress-controller"},"What is apisix-ingress-controller"),Object(o.b)("p",null,"apisix-ingress-controller is yet another Ingress controller for Kubernetes using ",Object(o.b)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," as the high performance reverse proxy."),Object(o.b)("p",null,"It's configured by using the declarative configurations like ",Object(o.b)("a",{parentName:"p",href:"/docs/ingress-controller/concepts/apisix_route"},"ApisixRoute"),", ",Object(o.b)("a",{parentName:"p",href:"./concepts/apisix"},"ApisixUpstream"),", ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),".\nAll these resources are watched and converted to corresponding resources in Apache APISIX."),Object(o.b)("p",null,"Service Discovery are also supported through ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service"),",\nand will be reflected to nodes in APISIX Upstream."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/scene.png",alt:"scene"})),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Declarative configuration"),Object(o.b)("li",{parentName:"ul"},"Full dynamic capabilities to delivery configurations."),Object(o.b)("li",{parentName:"ul"},"Native Kubernetes Ingress (both v1 and v1beta1) support."),Object(o.b)("li",{parentName:"ul"},"Service Discovery based on Kubernetes Service."),Object(o.b)("li",{parentName:"ul"},"Out of box support for node health check."),Object(o.b)("li",{parentName:"ul"},"Support load balancing based on Pod (upstream nodes)."),Object(o.b)("li",{parentName:"ul"},"Rich plugins support."),Object(o.b)("li",{parentName:"ul"},"Easy to deploy and use.")),Object(o.b)("h2",{id:"installation-on-cloud"},"Installation on Cloud"),Object(o.b)("p",null,"apisix-ingress-controller supports to be installed on some clouds such as AWS, GCP."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./docs/en/latest/deployments/azure.md"},"Install Ingress APISIX on Azure AKS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./docs/en/latest/deployments/aws.md"},"Install Ingress APISIX on AWS EKS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./docs/en/latest/deployments/ack.md"},"Install Ingress APISIX on ACK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./docs/en/latest/deployments/gke.md"},"Install Ingress APISIX on Google Cloud GKE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./docs/en/latest/deployments/minikube.md"},"Install Ingress APISIX on Minikube")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./docs/en/latest/deployments/kubesphere.md"},"Install Ingress APISIX on KubeSphere")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./docs/en/latest/deployments/k3s-rke.md"},"Install Ingress APISIX on K3S and RKE"))),Object(o.b)("h2",{id:"installation-on-prem"},"Installation on Prem"),Object(o.b)("p",null,"If you want to deploy apisix-ingress-controller on Prem, we recommend you to use ",Object(o.b)("a",{parentName:"p",href:"https://helm.io"},"Helm"),". Just a few steps"),Object(o.b)("h2",{id:"get-involved-to-contribute"},"Get Involved to Contribute"),Object(o.b)("p",null,"First, your supports and cooperations to make this project better are appreciated.\nBut before you start, please read ",Object(o.b)("a",{parentName:"p",href:"/docs/ingress-controller/contribute"},"How to Contribute")," and ",Object(o.b)("a",{parentName:"p",href:"/docs/ingress-controller/development"},"How to Develop"),"."))}p.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);