(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var i=r(3),a=r(8),n=(r(0),r(268)),o={id:"contributor-guide",title:"Contributor Guide"},s={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"Contributor Guide",description:"Please fee free to report bugs, submit suggestions, or submit PRs according to this guide.",source:"@site/docs/general/contributor-guide.md",slug:"/contributor-guide",permalink:"/zh/docs/general/contributor-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/contributor-guide.md",version:"current",lastUpdatedBy:"Kishani Kandasamy",lastUpdatedAt:1619089117,sidebar:"docs",previous:{title:"Subscribe Guide",permalink:"/zh/docs/general/subscribe-guide"},next:{title:"Committer Guide",permalink:"/zh/docs/general/committer-guide"}},c=[{value:"Submit an issue",id:"submit-an-issue",children:[]},{value:"Developer Flow",id:"developer-flow",children:[{value:"Fork repo",id:"fork-repo",children:[]},{value:"Choose an issue",id:"choose-an-issue",children:[]},{value:"Create your branch",id:"create-your-branch",children:[]},{value:"Coding",id:"coding",children:[]},{value:"Submit PR",id:"submit-pr",children:[]},{value:"Delete branch",id:"delete-branch",children:[]},{value:"Notice",id:"notice",children:[]}]}],l={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Please fee free to report bugs, submit suggestions, or submit PRs according to this guide."),Object(n.b)("h2",{id:"submit-an-issue"},"Submit an issue"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Before submitting your issues, please go through a comprehensive search to make sure the problem cannot be solved just by searching.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Check the Issue List to make sure the problem is not repeated.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a new issue and choose the type of issue.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Define the issue with a clear and descriptive title.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Fill in necessary information according to the template.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Choose a label after issue created.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Please pay attention to your issue, you may need provide more information during discussion."))),Object(n.b)("h2",{id:"developer-flow"},"Developer Flow"),Object(n.b)("h3",{id:"fork-repo"},"Fork repo"),Object(n.b)("p",null,"Fork the Apache APISIX repo to your own repo to work, then setting proper upstream."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/apache/apisix.git\n")),Object(n.b)("h3",{id:"choose-an-issue"},"Choose an issue"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Please choose your target issue. If it is a new issue discovered or a new function enhancement to offer, please create an issue and set the right label for it.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"After choosing the relevant issue, please reply with a deadline to indicate that you are working on it.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Find a mentor from the Team page and your mentor will give you feedback about your PR or issue in time."))),Object(n.b)("h4",{id:"good-first-issues"},Object(n.b)("strong",{parentName:"h4"},"Good First Issues"),":"),Object(n.b)("p",null,"Good First Issue curates easy pickings from this project, and helps you make your first contribution to Apache APISIX\u2122."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX Ingress Controller")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX dashboard")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX Helm Chart")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-docker/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Docker distribution for APISIX")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-website/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Apache APISIX Website")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-control-plane/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"The Control-Plane for APISIX"))),Object(n.b)("h3",{id:"create-your-branch"},"Create your branch"),Object(n.b)("p",null,"Switch to your forked master branch, pull codes from upstream, then create a new branch."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git pull upstream master\n$ git checkout -b IssueNo\n")),Object(n.b)("p",null,"Notice: We will merge PR using squash, commit logs will be different form upstream if you use one older branch."),Object(n.b)("h3",{id:"coding"},"Coding"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Please obey the Code of Conduct during the process of development and finish the check before submitting the pull request.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Then push codes to your fork repo."))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"$ git add modified-file-names\n$ git commit -m 'commit message'\n$ git push origin issueNo\n")),Object(n.b)("h3",{id:"submit-pr"},"Submit PR"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Send a pull request to the master branch.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The mentor will do codes review before discussing some details (including the design, the implementation and the performance) with you.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Also make sure that the pull request title has a semantic prefix like ",Object(n.b)("inlineCode",{parentName:"p"},"fix:")," or ",Object(n.b)("inlineCode",{parentName:"p"},"feat:")," or any other ",Object(n.b)("a",{parentName:"p",href:"https://github.com/commitizen/conventional-commit-types/blob/master/index.json"},"conventional commit types"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Then congratulate to you to be an official contributor of Apache APISIX."))),Object(n.b)("h3",{id:"delete-branch"},"Delete branch"),Object(n.b)("p",null,"You can delete the remote branch (origin/IssueNo) and the local branch (IssueNo) associated with the remote branch (origin/IssueNo) after the mentor merged the PR into the master branch."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git branch -d IssueNo\n$ git push origin --delete issueNo\n")),Object(n.b)("h3",{id:"notice"},"Notice"),Object(n.b)("p",null,"Please note that in order to show your ID in the contributor list, please DO NOT forget to set the configurations below:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},'$ git config --global user.name "username"\n$ git config --global user.email "mail address"\n')))}b.isMDXComponent=!0},268:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=i,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||n;return r?a.a.createElement(h,s(s({ref:t},l),{},{components:r})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);