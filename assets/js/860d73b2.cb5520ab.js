"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32610],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6440:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=a(87462),i=a(63366),l=(a(67294),a(3905)),r={title:"How to build Apache APISIX"},o=void 0,p={unversionedId:"how-to-build",id:"how-to-build",isDocsHomePage:!1,title:"How to build Apache APISIX",description:"\x3c!--",source:"@site/docs/apisix/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/docs/apisix/next/how-to-build",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/how-to-build.md",tags:[],version:"current",frontMatter:{title:"How to build Apache APISIX"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/apisix/next/getting-started"},next:{title:"batch-requests",permalink:"/docs/apisix/next/plugins/batch-requests"}},s=[{value:"Step 1: Install dependencies",id:"step-1-install-dependencies",children:[]},{value:"Step 2: Install Apache APISIX",id:"step-2-install-apache-apisix",children:[{value:"Installation via RPM Package(CentOS 7)",id:"installation-via-rpm-packagecentos-7",children:[]},{value:"Installation via Docker",id:"installation-via-docker",children:[]},{value:"Installation via Helm Chart",id:"installation-via-helm-chart",children:[]},{value:"Installation via Source Release Package",id:"installation-via-source-release-package",children:[]}]},{value:"Step 3: Manage Apache APISIX Server",id:"step-3-manage-apache-apisix-server",children:[{value:"Initializing Dependencies",id:"initializing-dependencies",children:[]},{value:"Test configuration file",id:"test-configuration-file",children:[]},{value:"Start Apache APISIX",id:"start-apache-apisix",children:[]},{value:"Stop Apache APISIX",id:"stop-apache-apisix",children:[]},{value:"View Other Operations",id:"view-other-operations",children:[]}]},{value:"Step 4: Run Test Cases",id:"step-4-run-test-cases",children:[{value:"Troubleshoot Testing",id:"troubleshoot-testing",children:[]}]},{value:"Step 5: Update Admin API token to Protect Apache APISIX",id:"step-5-update-admin-api-token-to-protect-apache-apisix",children:[]},{value:"Step 6: Build OpenResty for Apache APISIX",id:"step-6-build-openresty-for-apache-apisix",children:[]},{value:"Step 7: Add Systemd Unit File for Apache APISIX",id:"step-7-add-systemd-unit-file-for-apache-apisix",children:[]}],c={toc:s};function d(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"step-1-install-dependencies"},"Step 1: Install dependencies"),(0,l.kt)("p",null,"The Apache APISIX runtime environment requires dependencies on NGINX and etcd."),(0,l.kt)("p",null,"Before installing Apache APISIX, please install dependencies according to the operating system you are using. We provide the dependencies installation instructions for ",(0,l.kt)("strong",{parentName:"p"},"CentOS7"),", ",(0,l.kt)("strong",{parentName:"p"},"Fedora 31 & 32"),", ",(0,l.kt)("strong",{parentName:"p"},"Ubuntu 16.04 & 18.04"),", ",(0,l.kt)("strong",{parentName:"p"},"Debian 9 & 10"),", and ",(0,l.kt)("strong",{parentName:"p"},"MacOS"),", please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/next/install-dependencies"},"Install Dependencies")," for more details."),(0,l.kt)("h2",{id:"step-2-install-apache-apisix"},"Step 2: Install Apache APISIX"),(0,l.kt)("p",null,"You can install Apache APISIX via RPM package, Docker, Helm Chart, and source release package. Please choose one from the following options."),(0,l.kt)("h3",{id:"installation-via-rpm-packagecentos-7"},"Installation via RPM Package(CentOS 7)"),(0,l.kt)("p",null,"This installation method is suitable for CentOS 7, please run the following command to install Apache APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://github.com/apache/apisix/releases/download/2.10.0/apisix-2.10.0-0.el7.x86_64.rpm\n")),(0,l.kt)("h3",{id:"installation-via-docker"},"Installation via Docker"),(0,l.kt)("p",null,"Please refer to: ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix"},"Installing Apache APISIX with Docker"),"."),(0,l.kt)("h3",{id:"installation-via-helm-chart"},"Installation via Helm Chart"),(0,l.kt)("p",null,"Please refer to: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"Installing Apache APISIX with Helm Chart"),"."),(0,l.kt)("h3",{id:"installation-via-source-release-package"},"Installation via Source Release Package"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a directory named ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix-2.10.0"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir apisix-2.10.0\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download Apache APISIX Release source package."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/2.10.0/apache-apisix-2.10.0-src.tgz\n")),(0,l.kt)("p",{parentName:"li"},"You can also download the Apache APISIX Release source package from the Apache APISIX website. The ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX Official Website - Download Page")," also provides source packages for Apache APISIX, APISIX Dashboard and APISIX Ingress Controller.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Unzip the Apache APISIX Release source package."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-2.10.0-src.tgz -C apisix-2.10.0\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the runtime dependent Lua libraries."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Switch to the apisix-2.10.0 directory\ncd apisix-2.10.0\n# Create dependencies\nmake deps\n# Install apisix command\nmake install\n")))),(0,l.kt)("h2",{id:"step-3-manage-apache-apisix-server"},"Step 3: Manage Apache APISIX Server"),(0,l.kt)("p",null,"We can initialize dependencies, start service, and stop service with commands in the Apache APISIX directory, we can also view all commands and their corresponding functions with the ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix help")," command."),(0,l.kt)("h3",{id:"initializing-dependencies"},"Initializing Dependencies"),(0,l.kt)("p",null,"Run the following command to initialize the NGINX configuration file and etcd."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize NGINX config file and etcd\napisix init\n")),(0,l.kt)("h3",{id:"test-configuration-file"},"Test configuration file"),(0,l.kt)("p",null,"Run the following command to test the configuration file. APISIX will generate ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx.conf")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," and check whether the syntax of ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx.conf")," is correct."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# generate `nginx.conf` from `config.yaml` and test it\napisix test\n")),(0,l.kt)("h3",{id:"start-apache-apisix"},"Start Apache APISIX"),(0,l.kt)("p",null,"Run the following command to start Apache APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# start Apache APISIX server\napisix start\n")),(0,l.kt)("h3",{id:"stop-apache-apisix"},"Stop Apache APISIX"),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," can stop Apache APISIX. The main difference is that ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," stops Apache APISIX gracefully, while ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," stops Apache APISIX immediately."),(0,l.kt)("p",null,"It is recommended to use gracefully stop command ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," because it ensures that Apache APISIX will complete all the requests it has received before stopping down. In contrast, ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," will trigger a forced shutdown, it stops Apache APISIX immediately, in which case the incoming requests will not be processed before the shutdown."),(0,l.kt)("p",null,"The command to perform a graceful shutdown is shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# stop Apache APISIX server gracefully\napisix quit\n")),(0,l.kt)("p",null,"The command to perform a forced shutdown is shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# stop Apache APISIX server immediately\napisix stop\n")),(0,l.kt)("h3",{id:"view-other-operations"},"View Other Operations"),(0,l.kt)("p",null,"Run the ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix help")," command to see the returned results and get commands and descriptions of other operations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# more actions find by `help`\napisix help\n")),(0,l.kt)("h2",{id:"step-4-run-test-cases"},"Step 4: Run Test Cases"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"cpanminus"),", the package manager for ",(0,l.kt)("inlineCode",{parentName:"p"},"perl"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Then install the test-nginx dependencies via ",(0,l.kt)("inlineCode",{parentName:"p"},"cpanm"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cpanm --notest Test::Nginx IPC::Run > build.log 2>&1 || (cat build.log && exit 1)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the ",(0,l.kt)("inlineCode",{parentName:"p"},"git clone")," command to clone the latest source code locally, please use the version we forked out\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iresty/test-nginx.git\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Load the test-nginx library with the ",(0,l.kt)("inlineCode",{parentName:"p"},"prove")," command in ",(0,l.kt)("inlineCode",{parentName:"p"},"perl")," and run the test case set in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/t")," directory."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Append the current directory to the perl module directory: ",(0,l.kt)("inlineCode",{parentName:"p"},"export PERL5LIB=.:$PERL5LIB"),", then run ",(0,l.kt)("inlineCode",{parentName:"p"},"make test")," command.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Or you can specify the NGINX binary path by running this command: ",(0,l.kt)("inlineCode",{parentName:"p"},"TEST_NGINX_BINARY=/usr/local/bin/openresty prove -Itest-nginx/lib -r t"),"."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Some of the tests rely on external services and system configuration modification. For a complete test environment build, you can refer to ",(0,l.kt)("inlineCode",{parentName:"p"},"ci/linux_openresty_common_runner.sh"),"."))))),(0,l.kt)("h3",{id:"troubleshoot-testing"},"Troubleshoot Testing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Configuring NGINX Path")),(0,l.kt)("p",null,"The solution to the ",(0,l.kt)("inlineCode",{parentName:"p"},'Error unknown directive "lua_package_path" in /API_ASPIX/apisix/t/servroot/conf/nginx.conf')," error is as shown below."),(0,l.kt)("p",null,"Ensure that Openresty is set to the default NGINX, and export the path as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux default installation path:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH")))),(0,l.kt)("li",{parentName:"ul"},"MacOS default installation path via homebrew:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/opt/openresty/nginx/sbin:$PATH"))))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Run a Single Test Case")),(0,l.kt)("p",null,"Run the specified test case using the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"prove -Itest-nginx/lib -r t/plugin/openid-connect.t\n")),(0,l.kt)("h2",{id:"step-5-update-admin-api-token-to-protect-apache-apisix"},"Step 5: Update Admin API token to Protect Apache APISIX"),(0,l.kt)("p",null,"You need to modify the Admin API key to protect Apache APISIX."),(0,l.kt)("p",null,"Please modify ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," and restart the service as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  # ... ...\n  admin_key\n    -\n      name: "admin"\n      key: abcdefghabcdefgh # Modify the original key to abcdefghabcdefgh\n      role: admin\n')),(0,l.kt)("p",null,"When we need to access the Admin API, we can use the key above, as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/routes?api_key=abcdefghabcdefgh -i\n")),(0,l.kt)("p",null,"The status code 200 in the returned result indicates that the access was successful, as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Fri, 28 Feb 2020 07:48:04 GMT\nContent-Type: text/plain\n... ...\n{"node":{...},"action":"get"}\n')),(0,l.kt)("p",null,"At this point, if the key you enter does not match the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example, we know that the correct key is ",(0,l.kt)("inlineCode",{parentName:"p"},"abcdefghabcdefgh"),", but we enter an incorrect key, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"wrong-key"),", as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/routes?api_key=wrong-key -i\n")),(0,l.kt)("p",null,"The status code ",(0,l.kt)("inlineCode",{parentName:"p"},"401")," in the returned result indicates that the access failed because the ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," entered was incorrect and did not pass authentication, triggering an ",(0,l.kt)("inlineCode",{parentName:"p"},"Unauthorized")," error, as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\nDate: Fri, 28 Feb 2020 08:17:58 GMT\nContent-Type: text/html\n... ...\n{"node":{...},"action":"get"}\n')),(0,l.kt)("h2",{id:"step-6-build-openresty-for-apache-apisix"},"Step 6: Build OpenResty for Apache APISIX"),(0,l.kt)("p",null,"Some features require additional NGINX modules to be introduced into OpenResty.\nIf you need these features, you can build the APISIX OpenResty.\nYou can refer to the source of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"api7/apisix-build-tools")," for how to set up the build environment and build the APISIX OpenResty."),(0,l.kt)("h2",{id:"step-7-add-systemd-unit-file-for-apache-apisix"},"Step 7: Add Systemd Unit File for Apache APISIX"),(0,l.kt)("p",null,"If you are using CentOS 7 and you installed Apache APISIX via the RPM package in step 2, the configuration file is already in place automatically and you can run the following command directly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start apisix\nsystemctl stop apisix\n")),(0,l.kt)("p",null,"If you installed Apache APISIX by other methods, you can refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools/blob/master/usr/lib/systemd/system/apisix.service"},"configuration file template")," for modification and put it in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/apisix.service")," path."))}d.isMDXComponent=!0}}]);