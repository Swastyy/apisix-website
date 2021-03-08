(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{178:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(235)),i={id:"contributor-guide",title:"Contributor Guide"},c={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"Contributor Guide",description:"Please fee free to report bugs, submit suggestions, or submit PRs according to this guide.",source:"@site/docs/general/contributor-guide.md",slug:"/contributor-guide",permalink:"/zh/docs/general/contributor-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/contributor-guide.md",version:"current",lastUpdatedBy:"Kishani Kandasamy",lastUpdatedAt:1615168141,sidebar:"docs",previous:{title:"Subscribe Guide",permalink:"/zh/docs/general/subscribe-guide"},next:{title:"Committer Guide",permalink:"/zh/docs/general/committer-guide"}},l=[{value:"Submit an issue",id:"submit-an-issue",children:[]},{value:"Developer Flow",id:"developer-flow",children:[{value:"Fork repo",id:"fork-repo",children:[]},{value:"Choose an issue",id:"choose-an-issue",children:[]},{value:"Create your branch",id:"create-your-branch",children:[]},{value:"Coding",id:"coding",children:[]},{value:"Submit PR",id:"submit-pr",children:[]},{value:"Delete branch",id:"delete-branch",children:[]},{value:"Notice",id:"notice",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Please fee free to report bugs, submit suggestions, or submit PRs according to this guide."),Object(a.b)("h2",{id:"submit-an-issue"},"Submit an issue"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Before submitting your issues, please go through a comprehensive search to make sure the problem cannot be solved just by searching.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Check the Issue List to make sure the problem is not repeated.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create a new issue and choose the type of issue.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Define the issue with a clear and descriptive title.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Fill in necessary information according to the template.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Choose a label after issue created.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Please pay attention to your issue, you may need provide more information during discussion."))),Object(a.b)("h2",{id:"developer-flow"},"Developer Flow"),Object(a.b)("h3",{id:"fork-repo"},"Fork repo"),Object(a.b)("p",null,"Fork the Apache APISIX repo to your own repo to work, then setting proper upstream."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/apache/apisix.git\n")),Object(a.b)("h3",{id:"choose-an-issue"},"Choose an issue"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Please choose your target issue. If it is a new issue discovered or a new function enhancement to offer, please create an issue and set the right label for it.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After choosing the relevant issue, please reply with a deadline to indicate that you are working on it.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Find a mentor from the Team page and your mentor will give you feedback about your PR or issue in time."))),Object(a.b)("h3",{id:"create-your-branch"},"Create your branch"),Object(a.b)("p",null,"Switch to your forked master branch, pull codes from upstream, then create a new branch."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git pull upstream master\n$ git checkout -b IssueNo\n")),Object(a.b)("p",null,"Notice: We will merge PR using squash, commit logs will be different form upstream if you use one older branch."),Object(a.b)("h3",{id:"coding"},"Coding"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Please obey the Code of Conduct during the process of development and finish the check before submitting the pull request.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Then push codes to your fork repo."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git add modified-file-names\n$ git commit -m 'commit message'\n$ git push origin issueNo\n")),Object(a.b)("h3",{id:"submit-pr"},"Submit PR"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Send a pull request to the master branch.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The mentor will do codes review before discussing some details (including the design, the implementation and the performance) with you.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Also make sure that the pull request title has a semantic prefix like ",Object(a.b)("inlineCode",{parentName:"p"},"fix:")," or ",Object(a.b)("inlineCode",{parentName:"p"},"feat:")," or any other ",Object(a.b)("a",{parentName:"p",href:"https://github.com/commitizen/conventional-commit-types/blob/master/index.json"},"conventional commit types"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Then congratulate to you to be an official contributor of Apache APISIX."))),Object(a.b)("h3",{id:"delete-branch"},"Delete branch"),Object(a.b)("p",null,"You can delete the remote branch (origin/IssueNo) and the local branch (IssueNo) associated with the remote branch (origin/IssueNo) after the mentor merged the PR into the master branch."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git branch -d IssueNo\n$ git push origin --delete issueNo\n")),Object(a.b)("h3",{id:"notice"},"Notice"),Object(a.b)("p",null,"Please note that in order to show your ID in the contributor list, please DO NOT forget to set the configurations below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'$ git config --global user.name "username"\n$ git config --global user.email "mail address"\n')))}b.isMDXComponent=!0},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);