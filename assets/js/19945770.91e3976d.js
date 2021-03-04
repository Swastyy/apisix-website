(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{235:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(235)),i={id:"integrate-with-project-docs",title:"Integrate with Project documentations"},c={unversionedId:"integrate-with-project-docs",id:"integrate-with-project-docs",isDocsHomePage:!1,title:"Integrate with Project documentations",description:"Directory Structure",source:"@site/docs/general/integrate-with-project-docs.md",slug:"/integrate-with-project-docs",permalink:"/docs/general/integrate-with-project-docs",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/integrate-with-project-docs.md",version:"current",lastUpdatedBy:"qier222",lastUpdatedAt:1614853493,sidebar:"docs",previous:{title:"Release Guide",permalink:"/docs/general/release-guide"}},s=[{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Markdown formatting restrictions",id:"markdown-formatting-restrictions",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"directory-structure"},"Directory Structure"),Object(a.b)("p",null,"Put all Markdown files into the latest directory"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/docs\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u251c\u2500\u2500 xxxxx.png\n\u2502   \u2514\u2500\u2500 other\n\u2502       \u2514\u2500\u2500 xxxxx.xxx\n\u251c\u2500\u2500 en\n\u2502   \u2514\u2500\u2500 latest\n\u2502       \u251c\u2500\u2500 doc1.md\n\u2502       \u251c\u2500\u2500 folder\n\u2502       \u2502   \u2514\u2500\u2500 doc2.md\n\u2502       \u2502       \u2514\u2500\u2500 folder2\n\u2502       \u2502           \u2514\u2500\u2500 doc3.md\n\u2502       \u2514\u2500\u2500 config.json\n\u251c\u2500\u2500 es\n\u2502   \u2514\u2500\u2500 latest\n\u2502       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 zh\n    \u2514\u2500\u2500 latest\n        \u2514\u2500\u2500 ...\n")),Object(a.b)("h2",{id:"configuration-file"},"Configuration file"),Object(a.b)("p",null,"This file is located in ",Object(a.b)("inlineCode",{parentName:"p"},"/docs/<locale>/latest/config.json"),", where locale is locale codes, please refer to ",Object(a.b)("a",{parentName:"p",href:"https://www.science.co.il/language/Locale-codes.php"},"https://www.science.co.il/language/Locale-codes.php"),", locale is all lowercase. Don't forget to remove the comment after copying JSON."),Object(a.b)("p",null,"More information about sidebar can be found at ",Object(a.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/next/sidebar"},"https://v2.docusaurus.io/docs/next/sidebar")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "version": 2.3,\n  "sidebar": [\n    // The left sidebar of the APISIX website\n    {\n      "type": "doc",\n      "id": "doc2" // id is the filename of the md file\n    },\n    {\n      "type": "category", // category is a collapsed column, nestable\n      "label": "folder",\n      "items": [\n        {\n          "type": "doc",\n          "id": "folder/doc2"\n        },\n        {\n          "type": "category",\n          "label": "folder2",\n          "items": [\n            "folder2/doc3"\n          ]\n        }\n      ]\n    },\n    {\n      "type": "link",\n      "label": "CHANGELOG",\n      "href": "https://github.com/apache/apisix/blob/master/CHANGELOG"\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"markdown-formatting-restrictions"},"Markdown formatting restrictions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Use relative paths within Markdown files ",Object(a.b)("inlineCode",{parentName:"p"},"../xxx/xxx"),", not absolute paths ",Object(a.b)("inlineCode",{parentName:"p"},"/docs/en/xxx/xxx"),". If you want to refer to files outside the docs directory, please use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-xxx/blob/master/xxx/xxx.xxx"},"https://github.com/apache/apisix-xxx/blob/master/xxx/xxx.xxx"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You need to use Markdown syntax when introducing images, i.e. ",Object(a.b)("inlineCode",{parentName:"p"},"![image name](./assets/xxxx.png)"),". Images cannot be introduced using HTML tags, i.e. ",Object(a.b)("inlineCode",{parentName:"p"},'<img src=". /assets/xxxx.png" />'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If the Markdown file contains HTML tags within it, be sure to make sure the tags are closed. For example ",Object(a.b)("inlineCode",{parentName:"p"},"<br>")," must be written as ",Object(a.b)("inlineCode",{parentName:"p"},"<br/>")))))}p.isMDXComponent=!0}}]);