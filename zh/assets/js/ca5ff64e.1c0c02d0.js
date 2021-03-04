(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),s=(n(0),n(235)),a={title:"Proxy the httpbin service with Ingress"},c={unversionedId:"practices/proxy-the-httpbin-service-with-ingress",id:"practices/proxy-the-httpbin-service-with-ingress",isDocsHomePage:!1,title:"Proxy the httpbin service with Ingress",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/practices/proxy-the-httpbin-service-with-ingress.md",slug:"/practices/proxy-the-httpbin-service-with-ingress",permalink:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service-with-ingress",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/practices/proxy-the-httpbin-service-with-ingress.md",version:"current",sidebar:"docs",previous:{title:"Ingress APISIX Use Examples",permalink:"/zh/docs/ingress-controller/practices/index"},next:{title:"Proxy the httpbin service",permalink:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy httpbin service",id:"deploy-httpbin-service",children:[]},{value:"Resource Delivery",id:"resource-delivery",children:[]},{value:"Test",id:"test",children:[]}],p={toc:o};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This document explains how apisix-ingress-controller guides Apache APISIX routes traffic to httpbin service correctly by the ",Object(s.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress"),"."),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",Object(s.b)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube"},"Minikube"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Install Apache APISIX in Kubernetes by Helm Chart"),"."),Object(s.b)("li",{parentName:"ul"},"Install ",Object(s.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/install.md"},"apisix-ingress-controller"),".")),Object(s.b)("h2",{id:"deploy-httpbin-service"},"Deploy httpbin service"),Object(s.b)("p",null,"We use ",Object(s.b)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image, See its overview page for details."),Object(s.b)("p",null,"Now, try to deploy it to your Kubernetes cluster:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),Object(s.b)("h2",{id:"resource-delivery"},"Resource Delivery"),Object(s.b)("p",null,"Here we create an Ingress resource."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"# httpbin-ingress.yaml\n# Note use apiVersion is networking.k8s.io/v1, so please make sure your\n# Kubernetes cluster version is v1.19.0 or higher.\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\nspec:\n  # apisix-ingress-controller is only interested in Ingress\n  # resources with the matched ingressClass name, in our case,\n  # it's apisix.\n  ingressClassName: apisix\n  rules:\n  - host: local.httpbin.org\n    http:\n      paths:\n      - backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n        path: /\n        pathType: Prefix\n\n# Use ingress.networking.k8s.io/v1beta1 if your Kubernetes cluster\n# version is older than v1.19.0.\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: httpserver-ingress\n  # Note for ingress.networking.k8s.io/v1beta1,\n  # you have to carry annotation kubernetes.io/ingress.class,\n  # and its value must be matched with the one configured in\n  # apisix-ingress-controller, in our case, it's apisix.\n  annotations:\n    kubernetes.io/ingress.class: apisix\nspec:\n  rules:\n    - host: local.httpbin.org\n      http:\n        paths:\n          - backend:\n              serviceName: httpbin\n              servicePort: 80\n            path: /\n            pathType: Prefix\n")),Object(s.b)("p",null,"The YAML snippet shows a simple Ingress configuration, which tells Apache APISIX to route all requests with Host ",Object(s.b)("inlineCode",{parentName:"p"},"local.httpbin.org")," to the ",Object(s.b)("inlineCode",{parentName:"p"},"httpbin")," service.\nNow try to create it."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f httpbin-ingress.yaml\n")),Object(s.b)("h2",{id:"test"},"Test"),Object(s.b)("p",null,"Run curl call in one of Apache APISIX Pods to check whether the resource was delivered to it. Note you should replace the value of ",Object(s.b)("inlineCode",{parentName:"p"},"--apisix-admin-key")," to the real ",Object(s.b)("inlineCode",{parentName:"p"},"admin_key")," value in your Apache APISIX cluster."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9180/apisix/admin/routes -H 'X-API-Key: edd1c9f034335f136f87ad84b625c8f1'\n")),Object(s.b)("p",null,"And request to Apache APISIX to verify the route."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9080/headers -H 'Host: local.httpbin.org'\n")),Object(s.b)("p",null,"In case of success, you'll see a JSON string which contains all requests headers carried by ",Object(s.b)("inlineCode",{parentName:"p"},"curl")," like:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-5ffc3273-2928e0844e19c9810d1bbd8a"\n  }\n}\n')))}l.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=l(n),h=r,d=b["".concat(a,".").concat(h)]||b[h]||u[h]||s;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);