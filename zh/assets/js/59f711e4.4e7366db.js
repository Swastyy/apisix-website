"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91581],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return k}});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=r.createContext({}),u=function(t){var n=r.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},s=function(t){var n=u(t.components);return r.createElement(o.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=u(e),k=a,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||i;return e?r.createElement(m,l(l({ref:n},s),{},{components:e})):r.createElement(m,l({ref:n},s))}));function k(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,l=new Array(i);l[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var u=2;u<i;u++)l[u]=e[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},6878:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var r=e(87462),a=e(63366),i=(e(67294),e(3905)),l={title:"zipkin"},p=void 0,o={unversionedId:"plugins/zipkin",id:"version-2.10/plugins/zipkin",isDocsHomePage:!1,title:"zipkin",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.10/plugins/zipkin.md",sourceDirName:"plugins",slug:"/plugins/zipkin",permalink:"/zh/docs/apisix/plugins/zipkin",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/zipkin.md",tags:[],version:"2.10",frontMatter:{title:"zipkin"},sidebar:"version-2.10/docs",previous:{title:"prometheus",permalink:"/zh/docs/apisix/plugins/prometheus"},next:{title:"skywalking",permalink:"/zh/docs/apisix/plugins/skywalking"}},u=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u8fd0\u884c Zipkin \u5b9e\u4f8b",id:"\u8fd0\u884c-zipkin-\u5b9e\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u4e0a\u6e38\u670d\u52a1\u662fGolang\u7684\u793a\u4f8b\u4ee3\u7801",id:"\u4e0a\u6e38\u670d\u52a1\u662fgolang\u7684\u793a\u4f8b\u4ee3\u7801",children:[]}],s={toc:u};function d(t){var n=t.components,e=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},(0,i.kt)("strong",{parentName:"a"},"\u540d\u5b57"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},(0,i.kt)("strong",{parentName:"a"},"\u5c5e\u6027"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},(0,i.kt)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},(0,i.kt)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},(0,i.kt)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),(0,i.kt)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"zipkin"),"(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openzipkin/zipkin"},"https://github.com/openzipkin/zipkin"),") \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u670d\u52a1\u8ddf\u8e2a\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u5b83\u8fd8\u53ef\u4ee5\u5728 \u201cApache SkyWalking\u201d \u4e0a\u8fd0\u884c\uff0c\u652f\u6301 Zipkin v1/v2 \u683c\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Zipkin \u7684 http \u8282\u70b9\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:9411/api/v2/spans"),"\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,i.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7684\u6bd4\u4f8b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,i.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u6807\u8bb0\u5f53\u524d\u670d\u52a1\u7684\u540d\u79f0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"server_addr"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u6807\u8bb0\u5f53\u524d APISIX \u5b9e\u4f8b\u7684IP\u5730\u5740\uff0c\u9ed8\u8ba4\u503c\u662f nginx \u7684\u5185\u7f6e\u53d8\u91cf",(0,i.kt)("inlineCode",{parentName:"td"},"server_addr"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"span_version"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"[1, 2]"),(0,i.kt)("td",{parentName:"tr",align:null},"span \u7c7b\u578b\u7248\u672c")))),(0,i.kt)("p",null,"\u76ee\u524d\u6bcf\u4e2a\u88ab\u8ddf\u8e2a\u7684\u8bf7\u6c42\u4f1a\u521b\u5efa\u4e0b\u9762\u7684 span\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 proxy: from the beginning of the request to the beginning of header filter\n\u2514\u2500\u2500 response: from the beginning of header filter to the beginning of log\n")),(0,i.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u521b\u5efa\u7684 span \u662f\u8fd9\u6837\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 rewrite\n\u251c\u2500\u2500 access\n\u2514\u2500\u2500 proxy\n    \u2514\u2500\u2500 body_filter\n")),(0,i.kt)("p",null,"\u6ce8\u610f\u4e0a\u8ff0\u7684 span \u7684\u540d\u79f0\u8ddf\u540c\u540d\u7684 Nginx phase \u6ca1\u6709\u5173\u7cfb\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u517c\u5bb9\u8fc7\u53bb\u7684 span \u7c7b\u578b\uff0c\u53ef\u4ee5\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"span_version")," \u8bbe\u7f6e\u6210 1\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 zipkin \u63d2\u4ef6:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff0c\u7136\u540e\u5728\u63d2\u4ef6\u9875\u9762\u4e2d\u6dfb\u52a0 zipkin \u63d2\u4ef6\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/zipkin-1.png",alt:null})),(0,i.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,i.kt)("h3",{id:"\u8fd0\u884c-zipkin-\u5b9e\u4f8b"},"\u8fd0\u884c Zipkin \u5b9e\u4f8b"),(0,i.kt)("p",null,"e.g. \u7528docker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo docker run -d -p 9411:9411 openzipkin/zipkin\n")),(0,i.kt)("p",null,"\u6d4b\u8bd5\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n...\n")),(0,i.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee Zipkin \u7684 web \u9875\u9762\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://127.0.0.1:9411/zipkin\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/zipkin-1.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@master/docs/assets/images/plugin/zipkin-2.jpg",alt:null})),(0,i.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 Zipkin \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"\u4e0a\u6e38\u670d\u52a1\u662fgolang\u7684\u793a\u4f8b\u4ee3\u7801"},"\u4e0a\u6e38\u670d\u52a1\u662fGolang\u7684\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'func GetTracer(serviceName string, port int, enpoitUrl string, rate float64) *zipkin.Tracer {\n    // create a reporter to be used by the tracer\n    reporter := httpreporter.NewReporter(enpoitUrl)\n    // set-up the local endpoint for our service host is  ip:host\n\n    thisip, _ := GetLocalIP()\n\n    host := fmt.Sprintf("%s:%d", thisip, port)\n    endpoint, _ := zipkin.NewEndpoint(serviceName, host)\n    // set-up our sampling strategy\n    sampler, _ := zipkin.NewCountingSampler(rate)\n    // initialize the tracer\n    tracer, _ := zipkin.NewTracer(\n        reporter,\n        zipkin.WithLocalEndpoint(endpoint),\n        zipkin.WithSampler(sampler),\n    )\n    return tracer\n}\n\nfunc main(){\n    r := gin.Default()\n\n    tracer := GetTracer(...)\n\n    // use middleware to extract parentID from http header that injected by APISIX\n    r.Use(func(c *gin.Context) {\n        span := this.Tracer.Extract(b3.ExtractHTTP(c.Request))\n        childSpan := this.Tracer.StartSpan(spanName, zipkin.Parent(span))\n        defer childSpan.Finish()\n        c.Next()\n    })\n\n}\n')))}d.isMDXComponent=!0}}]);