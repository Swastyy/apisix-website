"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12852],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return c}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),o=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=o(t.components);return a.createElement(u.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=o(e),c=r,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return e?a.createElement(k,i(i({ref:n},d),{},{components:e})):a.createElement(k,i({ref:n},d))}));function c(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=e[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},45334:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return o},default:function(){return m}});var a=e(87462),r=e(63366),l=(e(67294),e(3905)),i={title:"authz-casbin"},p=void 0,u={unversionedId:"plugins/authz-casbin",id:"version-2.11/plugins/authz-casbin",isDocsHomePage:!1,title:"authz-casbin",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.11/plugins/authz-casbin.md",sourceDirName:"plugins",slug:"/plugins/authz-casbin",permalink:"/zh/docs/apisix/plugins/authz-casbin",editUrl:"https://github.com/apache/apisix/edit/release/2.11/docs/zh/latest/plugins/authz-casbin.md",tags:[],version:"2.11",frontMatter:{title:"authz-casbin"},sidebar:"version-2.11/docs",previous:{title:"hmac-auth",permalink:"/zh/docs/apisix/plugins/hmac-auth"},next:{title:"ldap-auth",permalink:"/zh/docs/apisix/plugins/ldap-auth"}},o=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[{value:"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u542f\u7528",id:"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u542f\u7528",children:[]},{value:"\u901a\u8fc7\u8def\u7531\u914d\u7f6e\u542f\u7528",id:"\u901a\u8fc7\u8def\u7531\u914d\u7f6e\u542f\u7528",children:[]},{value:"\u901a\u8fc7 plugin metadata \u914d\u7f6e\u6a21\u578b/\u7b56\u7565",id:"\u901a\u8fc7-plugin-metadata-\u914d\u7f6e\u6a21\u578b\u7b56\u7565",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],d={toc:o};function m(t){var n=t.components,e=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AE%80%E4%BB%8B"},(0,l.kt)("strong",{parentName:"a"},"\u7b80\u4ecb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},(0,l.kt)("strong",{parentName:"a"},"\u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%85%83%E6%95%B0%E6%8D%AE"},(0,l.kt)("strong",{parentName:"a"},"\u5143\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A4%BA%E4%BE%8B"},(0,l.kt)("strong",{parentName:"a"},"\u793a\u4f8b")))),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"authz-casbin")," \u662f\u4e00\u4e2a\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin")," \u7684\u8bbf\u95ee\u63a7\u5236\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u652f\u6301\u57fa\u4e8e\u5404\u79cd\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u7684\u6388\u6743\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u5982\u4f55\u521b\u5efa\u9274\u6743\u6a21\u578b\u548c\u9274\u6743\u7b56\u7565\u7684\u8be6\u7ec6\u6587\u6863, \u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://casbin.org/docs/en/supported-models"},"Casbin"),"\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u6a21\u578b\u914d\u7f6e\u6587\u4ef6\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u7b56\u7565\u914d\u7f6e\u6587\u4ef6\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u6a21\u578b\u7684\u6587\u672c\u5b9a\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u7b56\u7565\u7684\u6587\u672c\u5b9a\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u8bf7\u6c42\u4e2d\u6709\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u63a7\u5236\u7684\u7528\u6237\u540d")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"model_path"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"policy_path")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"username"),"\uff0c\u6216\u8005\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"model"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"policy")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," \u6765\u4f7f\u63d2\u4ef6\u751f\u6548\u3002\u5982\u679c\u60f3\u8981\u4f7f\u6240\u6709\u7684\u8def\u7531\u5171\u4eab Casbin \u914d\u7f6e\uff0c\u53ef\u4ee5\u5148\u5728\u63d2\u4ef6\u5143\u6570\u636e\u4e2d\u6307\u5b9a\u9274\u6743\u6a21\u578b\u548c\u9274\u6743\u7b56\u7565\uff0c\u7136\u540e\u5728\u6307\u5b9a\u8def\u7531\u7684\u63d2\u4ef6\u914d\u7f6e\u4e2d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"username"),"\u3002"),(0,l.kt)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u6a21\u578b\u7684\u6587\u672c\u5b9a\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Casbin \u9274\u6743\u7b56\u7565\u7684\u6587\u672c\u5b9a\u4e49")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5728\u4efb\u610f\u8def\u7531\u4e0a\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"\u9274\u6743\u6a21\u578b/\u9274\u6743\u7b56\u7565\u6587\u4ef6\u8def\u5f84")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u9274\u6743\u6a21\u578b/\u9274\u6743\u7b56\u7565\u6587\u672c")," \u6765\u542f\u7528\u3002"),(0,l.kt)("h3",{id:"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u542f\u7528"},"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u542f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model_path": "/path/to/model.conf",\n            "policy_path": "/path/to/policy.csv",\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u8bf7\u6c42\u4f1a\u6839\u636e\u9274\u6743\u6a21\u578b/\u9274\u6743\u7b56\u7565\u6587\u4ef6\u4e2d\u7684\u5b9a\u4e49\u521b\u5efa\u4e00\u4e2a Casbin enforcer\u3002"),(0,l.kt)("h3",{id:"\u901a\u8fc7\u8def\u7531\u914d\u7f6e\u542f\u7528"},"\u901a\u8fc7\u8def\u7531\u914d\u7f6e\u542f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "model": "[request_definition]\n            r = sub, obj, act\n\n            [policy_definition]\n            p = sub, obj, act\n\n            [role_definition]\n            g = _, _\n\n            [policy_effect]\n            e = some(where (p.eft == allow))\n\n            [matchers]\n            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n            "policy": "p, *, /, GET\n            p, admin, *, *\n            g, alice, admin",\n\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u8bf7\u6c42\u4f1a\u6839\u636e\u9274\u6743\u6a21\u578b\u548c\u9274\u6743\u7b56\u7565\u7684\u5b9a\u4e49\u521b\u5efa\u4e00\u4e2a Casbin enforcer\u3002"),(0,l.kt)("h3",{id:"\u901a\u8fc7-plugin-metadata-\u914d\u7f6e\u6a21\u578b\u7b56\u7565"},"\u901a\u8fc7 plugin metadata \u914d\u7f6e\u6a21\u578b/\u7b56\u7565"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528 Admin API \u53d1\u9001\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," \u8bf7\u6c42\uff0c\u5c06\u9274\u6743\u6a21\u578b\u548c\u9274\u6743\u7b56\u7565\u7684\u914d\u7f6e\u4fe1\u606f\u6dfb\u52a0\u5230\u63d2\u4ef6\u7684\u5143\u6570\u636e\u4e2d\u3002\u6240\u6709\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u521b\u5efa\u7684\u8def\u7531\u90fd\u4f1a\u5e26\u6709\u4e00\u4e2a\u5e26\u63d2\u4ef6\u5143\u6570\u636e\u914d\u7f6e\u7684 Casbin enforcer\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," \u8bf7\u6c42\u66f4\u65b0\u9274\u6743\u6a21\u578b\u548c\u9274\u6743\u7b56\u7565\u914d\u7f6e\u4fe1\u606f\uff0c\u8be5\u63d2\u4ef6\u5c06\u4f1a\u81ea\u52a8\u540c\u6b65\u6700\u65b0\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -i -X PUT -d \'\n{\n"model": "[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",\n\n"policy": "p, *, /, GET\np, admin, *, *\ng, alice, admin"\n}\'\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u53d1\u9001\u4ee5\u4e0b\u8bf7\u6c42\u53ef\u4ee5\u5c06\u8be5\u63d2\u4ef6\u6dfb\u52a0\u5230\u8def\u7531\u4e0a\u3002\u6ce8\u610f\uff0c\u6b64\u5904\u53ea\u9700\u8981\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"username"),"\uff0c\u4e0d\u9700\u8981\u518d\u589e\u52a0\u9274\u6743\u6a21\u578b/\u9274\u6743\u7b56\u7565\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "authz-casbin": {\n            "username": "user"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/*"\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u63d2\u4ef6\u8def\u7531\u914d\u7f6e\u6bd4\u63d2\u4ef6\u5143\u6570\u636e\u914d\u7f6e\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002\u56e0\u6b64\uff0c\u5982\u679c\u63d2\u4ef6\u8def\u7531\u914d\u7f6e\u4e2d\u5b58\u5728\u9274\u6743\u6a21\u578b/\u9274\u6743\u7b56\u7565\u914d\u7f6e\uff0c\u63d2\u4ef6\u5c06\u4f18\u5148\u4f7f\u7528\u63d2\u4ef6\u8def\u7531\u7684\u914d\u7f6e\u800c\u4e0d\u662f\u63d2\u4ef6\u5143\u6570\u636e\u4e2d\u7684\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u6d4b\u8bd5\u9274\u6743\u6a21\u578b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)\n")),(0,l.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u6d4b\u8bd5\u9274\u6743\u7b56\u7565:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"p, *, /, GET\np, admin, *, *\ng, alice, admin\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u6388\u6743\u7b56\u7565\u89c4\u5b9a\u4e86\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u8bf7\u6c42\u65b9\u6cd5\u8bbf\u95ee\u4e3b\u9875\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"/"),"\uff09\uff0c\u800c\u53ea\u6709\u5177\u6709\u7ba1\u7406\u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u5176\u4ed6\u9875\u9762\u548c\u4f7f\u7528\u5176\u4ed6\u8bf7\u6c42\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u8fd9\u91cc\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," \u8bf7\u6c42\u65b9\u6cd5\u8bbf\u95ee\u4e3b\u9875\uff0c\u8fd4\u56de\u6b63\u5e38\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/ -X GET\n")),(0,l.kt)("p",null,"\u672a\u7ecf\u6388\u6743\u7684\u7528\u6237\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," \u8bbf\u95ee\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," \u4ee5\u5916\u7684\u4efb\u4f55\u5176\u4ed6\u9875\u9762\u5c06\u5f97\u5230\u4e00\u4e2a 403 \u9519\u8bef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/res -H 'user: bob' -X GET\nHTTP/1.1 403 Forbidden\n")),(0,l.kt)("p",null,"\u62e5\u6709\u7ba1\u7406\u6743\u9650\u7684\u4eba ",(0,l.kt)("inlineCode",{parentName:"p"},"alice")," \u5219\u53ef\u4ee5\u8bbf\u95ee\u5176\u5b83\u9875\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/res -H 'user: alice' -X GET\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\uff0c\u4ee5\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"authz-casbin")," \u63d2\u4ef6\u3002\u7531\u4e8e Apache APISIX \u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8 Apache APISIX\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u66f4\u591a\u9274\u6743\u6a21\u578b\u548c\u9274\u6743\u7b56\u7565\u4f7f\u7528\u7684\u4f8b\u5b50\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casbin/lua-casbin/tree/master/examples"},"Casbin \u793a\u4f8b"),"\u3002"))}m.isMDXComponent=!0}}]);