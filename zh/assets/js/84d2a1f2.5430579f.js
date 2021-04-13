(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(267)),i={title:"Development Guide"},c={unversionedId:"develop",id:"develop",isDocsHomePage:!1,title:"Development Guide",description:"\x3c!--",source:"@site/docs/apisix-dashboard/develop.md",slug:"/develop",permalink:"/zh/docs/dashboard/develop",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/zh/latest/develop.md",version:"current",sidebar:"docs",previous:{title:"Deploy with RPM",permalink:"/zh/docs/dashboard/deploy-with-rpm"},next:{title:"i18n User Guide",permalink:"/zh/docs/dashboard/I18N_USER_GUIDE"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Clone the project",id:"clone-the-project",children:[]},{value:"Start developing",id:"start-developing",children:[{value:"manager-api",id:"manager-api",children:[]},{value:"web",id:"web",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Dashboard contains both ",Object(o.b)("inlineCode",{parentName:"p"},"manager-api")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web")," parts, so you need to start the development environment separately."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before development, refer to this ",Object(o.b)("a",{parentName:"p",href:"/zh/docs/dashboard/deploy"},"guide")," to install dependencies."),Object(o.b)("h2",{id:"clone-the-project"},"Clone the project"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ git clone -b release/2.5 https://github.com/apache/apisix-dashboard.git\n")),Object(o.b)("h2",{id:"start-developing"},"Start developing"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix-dashboard\n")),Object(o.b)("h3",{id:"manager-api"},"manager-api"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Please change the configuration in ",Object(o.b)("inlineCode",{parentName:"p"},"api/conf/conf.yaml"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the root directory, launch development mode."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ make api-run\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"In the root directory, stop development mode.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ make api-stop\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Please refer to the ",Object(o.b)("a",{parentName:"p",href:"/zh/docs/dashboard/FAQ"},"FAQ")," about the problem of displaying exception in the dashboard after adding custom plugins or modifying plugin's schema.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If writing an back end E2E test, please refer to the ",Object(o.b)("a",{parentName:"p",href:"/zh/docs/dashboard/back-end-tests"},"Back End E2E Writing Guide")))),Object(o.b)("h3",{id:"web"},"web"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to the ",Object(o.b)("inlineCode",{parentName:"li"},"web")," directory.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ cd ./web\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Please change the ",Object(o.b)("inlineCode",{parentName:"p"},"manager-api")," address in the ",Object(o.b)("inlineCode",{parentName:"p"},"config/defaultSettings.ts")," file if needed.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launch development mode"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ yarn install\n\n$ yarn start\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"If writing an front end E2E test, please refer to the ",Object(o.b)("a",{parentName:"li",href:"/zh/docs/dashboard/front-end-e2e"},"Front End E2E Writing Guide"))))}b.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);