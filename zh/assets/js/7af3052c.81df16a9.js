(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),i=t(8),r=(t(0),t(268)),s={id:"release-guide",title:"Release Guide"},o={unversionedId:"release-guide",id:"release-guide",isDocsHomePage:!1,title:"Release Guide",description:"Release Flow",source:"@site/docs/general/release-guide.md",slug:"/release-guide",permalink:"/zh/docs/general/release-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/release-guide.md",version:"current",lastUpdatedBy:"Kishani Kandasamy",lastUpdatedAt:1619089117,sidebar:"docs",previous:{title:"2FA",permalink:"/zh/docs/general/2fa"},next:{title:"Integrate with Project documentations",permalink:"/zh/docs/general/integrate-with-project-docs"}},l=[{value:"Release Flow",id:"release-flow",children:[{value:"Planning Phase",id:"planning-phase",children:[]},{value:"Development Phase",id:"development-phase",children:[]},{value:"Release Phase",id:"release-phase",children:[]},{value:"Maintenance Phase",id:"maintenance-phase",children:[]}]},{value:"GPG Settings",id:"gpg-settings",children:[{value:"Install GPG",id:"install-gpg",children:[]},{value:"Create Key",id:"create-key",children:[]},{value:"View the generated key:",id:"view-the-generated-key",children:[]},{value:"Synchronizing the public key to the server",id:"synchronizing-the-public-key-to-the-server",children:[]},{value:"Add <code>Key Fingerprint</code> to id.apache.org",id:"add-key-fingerprint-to-idapacheorg",children:[]},{value:"Login id.apache.org and submit Key Fingerprint",id:"login-idapacheorg-and-submit-key-fingerprint",children:[]},{value:"Add your GPG key to Apache svn",id:"add-your-gpg-key-to-apache-svn",children:[]},{value:"Make source code package and upload to Apache SVN",id:"make-source-code-package-and-upload-to-apache-svn",children:[]},{value:"Send VOTE thread to the dev mailing list",id:"send-vote-thread-to-the-dev-mailing-list",children:[]},{value:"Send VOTE RESULT thread to the dev mailing list",id:"send-vote-result-thread-to-the-dev-mailing-list",children:[]},{value:"Move package from dev to dist",id:"move-package-from-dev-to-dist",children:[]},{value:"Update Download page",id:"update-download-page",children:[]},{value:"Send ANNOUNCE",id:"send-announce",children:[]}]}],c={toc:l};function p(e){var a=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,s,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"release-flow"},"Release Flow"),Object(r.b)("p",null,"The release flow of Apache APISIX follows ",Object(r.b)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html"},"GitLab flow"),", instead of Git flow or Github flow. Furthermore, ",Object(r.b)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html#release-branches-with-gitlab-flow"},"Release branches with GitLab flow")," is the preferred way. The chart below will take the release ",Object(r.b)("inlineCode",{parentName:"p"},"v2.3")," of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"apache/apisix-dashboard")," as an example to illustrate the details."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Release Flow",src:t(348).default})),Object(r.b)("p",null,"The entire flow is comprised of the following four phases."),Object(r.b)("h3",{id:"planning-phase"},"Planning Phase"),Object(r.b)("p",null,"This phase will decide if a feature is ready to be released as well as the release time."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A new target milestone will be created in Github. (e.g. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/milestone/6"},Object(r.b)("inlineCode",{parentName:"a"},"2.3")),")."),Object(r.b)("li",{parentName:"ul"},"A discussion will be started on dev mailing list ",Object(r.b)("a",{parentName:"li",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org")," for gathering ideas for the next release."),Object(r.b)("li",{parentName:"ul"},"Maintainer team will then mark the issues and pull requests with the target milestone.")),Object(r.b)("h3",{id:"development-phase"},"Development Phase"),Object(r.b)("p",null,"This phase is for developing new features and fixing bugs."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Maintainer team and contributors will work on the issues targeted to release milestone."),Object(r.b)("li",{parentName:"ul"},"Every single new issue is required to be recognized if it should be included in the next release. If yes, the milestone needs to be set for the issue.")),Object(r.b)("h3",{id:"release-phase"},"Release Phase"),Object(r.b)("p",null,"This phase will be throughout the entire Release Time Window."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A new branch (e.g. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard/tree/v2.3"},Object(r.b)("inlineCode",{parentName:"a"},"v2.3")),") for release is created from the ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch, which is also considered as the start of the Release Time Window."),Object(r.b)("li",{parentName:"ul"},"Set corresponding configurations for the new release branch, please see the chart above for details."),Object(r.b)("li",{parentName:"ul"},"As complying with ",Object(r.b)("strong",{parentName:"li"},"Upstream first"),", each commit needs to be merged into the ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch first. Afterward, it will be backported to the new release branch if the relevant pull request is with the ",Object(r.b)("inlineCode",{parentName:"li"},"need backport")," label attached."),Object(r.b)("li",{parentName:"ul"},"At the end of the Release Time Window, the ",Object(r.b)("inlineCode",{parentName:"li"},"CHANGELOG")," for the new release will be added."),Object(r.b)("li",{parentName:"ul"},"Tag the last commit and release the assets via the following section ",Object(r.b)("a",{parentName:"li",href:"#gpg-settings"},"GPG Settings"),".")),Object(r.b)("h3",{id:"maintenance-phase"},"Maintenance Phase"),Object(r.b)("p",null,"Once a version is released, it will enter the maintenance mode and will only accept the security and critical bug patches backported from the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch. A new version will be released soon after significant bugs got fixed, with patch version increment (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"2.3.1"),"). In this case, all users are recommended to upgrade to the latest release to avoid potential risk to the stability."),Object(r.b)("h2",{id:"gpg-settings"},"GPG Settings"),Object(r.b)("h3",{id:"install-gpg"},"Install GPG"),Object(r.b)("p",null,"Download GnuPG from ",Object(r.b)("a",{parentName:"p",href:"https://gnupg.org/download/index.html"},"https://gnupg.org/download/index.html"),". There are differences between the 1.x and 2.x versions of the GnuPG commands, and the following descriptions are based on the GnuPG 2.x versions."),Object(r.b)("p",null,"After the installation is complete, execute the following command to check the version."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ gpg --version\n")),Object(r.b)("h3",{id:"create-key"},"Create Key"),Object(r.b)("p",null,"Execute the following command to create the key:"),Object(r.b)("h4",{id:"gnupg-2x\uff1a"},"GnuPG-2.x\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ gpg --full-gen-key\n")),Object(r.b)("h4",{id:"gnupg-1x\uff1a"},"GnuPG-1.x\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"gpg --gen-key\n")),Object(r.b)("p",null,"Follow the instructions to generate key\uff1a"),Object(r.b)("p",null,"Note: Please use the Apache email address to generate the GPG Key."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'gpg (GnuPG) 2.0.12; Copyright (C) 2009 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n(1) RSA and RSA (default)\n(2) DSA and Elgamal\n(3) DSA (sign only)\n(4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n0 = key does not expire\n<n> = key expires in n days\n<n>w = key expires in n weeks\n<n>m = key expires in n months\n<n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: ${Enter your username}\nEmail address: ${Enter your email address}\nComment: ${Enter comments}\nYou selected this USER-ID:\n  "${Entered username} (${Entered comments}) &lt;${Entered email address}>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. # Enter passphrase\n')),Object(r.b)("h3",{id:"view-the-generated-key"},"View the generated key:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"gpg --list-keys\n")),Object(r.b)("p",null,"The example result\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ gpg --list-keys\n\n/home/resty/.gnupg/pubring.gpg\n------------------------------\npub 4096R/30B5FD72 2020-01-02\nuid Yuansheng Wang <membphis@apache.org>\nsub 4096R/3D2F913D 2020-01-02\n")),Object(r.b)("p",null,"And ",Object(r.b)("inlineCode",{parentName:"p"},"30B5FD72")," is the ID of pub key"),Object(r.b)("h3",{id:"synchronizing-the-public-key-to-the-server"},"Synchronizing the public key to the server"),Object(r.b)("p",null,"The steps are as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# The last parameter is the public key ID generated above\n$ gpg --keyserver hkp://pool.sks-keyservers.net --send-key 30B5FD72\n\ngpg: sending key 30B5FD72 to hkp server pool.sks-keyservers.net\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pool.sks-keyservers.net")," is one of the pub key servers, the pub key will be automatically synchronized between each server, just choose anyone."),Object(r.b)("h3",{id:"add-key-fingerprint-to-idapacheorg"},"Add ",Object(r.b)("inlineCode",{parentName:"h3"},"Key Fingerprint")," to id.apache.org"),Object(r.b)("p",null,"get Key Fingerprint"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# Note the `Key fingerprint` section below.\n$ gpg --list-keys --fingerprint\n\n/home/resty/.gnupg/pubring.gpg\n------------------------------\npub 4096R/30B5FD72 2020-01-02\nKey fingerprint = 0F91 BE0A 55A7 B22F DE1A CEEC 3352 48FD 30B5 FD72\nuid Yuansheng Wang <membphis@apache.org>\nsub 4096R/3D2F913D 2020-01-02\n")),Object(r.b)("h3",{id:"login-idapacheorg-and-submit-key-fingerprint"},"Login id.apache.org and submit Key Fingerprint"),Object(r.b)("h3",{id:"add-your-gpg-key-to-apache-svn"},"Add your GPG key to Apache svn"),Object(r.b)("p",null,"download APISIX svn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ svn --username=${Apache username} co https://dist.apache.org/repos/dist/dev/apisix\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix\n\n$ ls\n\nKEYS\n")),Object(r.b)("p",null,"Export the public key and append it to the KEYS file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ gpg -a --export ${GPG username} >> KEYS\n")),Object(r.b)("p",null,"Commit the modified KEYS file, saving the public key to the svn server."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ svn --username=${Apache username} commit -m \"added \\${Apache email} gpg pub key\"\nAuthentication realm: <https://dist.apache.org:443> ASF Committers\nPassword for 'membphis': # input password\nStore password unencrypted (yes/no)? yes\nSending KEYS\nTransmitting file data.\nCommitted revision 37434.\n")),Object(r.b)("h3",{id:"make-source-code-package-and-upload-to-apache-svn"},"Make source code package and upload to Apache SVN"),Object(r.b)("p",null,"Here's an example of preparing a 1.0 version. Before you make the package, make sure you have branch v1.0 ready on GitHub."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# Create a new version number directory and enter, for example: 1.0\n$ export APISIX_VERSION=1.0\n$ mkdir $APISIX_VERSION && cd $APISIX_VERSION\n\n# download repo\ngit clone -b v$APISIX_VERSION git@github.com:apache/apisix.git apache-apisix-$APISIX_VERSION\n\n# check version\n$ cd apache-apisix-$APISIX_VERSION && ./utils/check-version.sh $APISIX_VERSION && cd ..\n\n# make tar package / asc / sha512\n$ cd apache-apisix-$APISIX_VERSION && make release-src VERSION=$APISIX_VERSION\n$ mv ./release/* ../ && cd ..\n\n# remove apache-apisix-1.0\n$ rm -rf apache-apisix-$APISIX_VERSION\n\n# check files\n$ cd .. && tree\n.\n\u251c\u2500\u2500 1.0\n\u2502   \u251c\u2500\u2500 apache-apisix-1.0-src.tar.gz\n\u2502   \u251c\u2500\u2500 apache-apisix-1.0-src.tar.gz.asc\n\u2502   \u2514\u2500\u2500 apache-apisix-1.0-src.tar.gz.sha512\n\u2514\u2500\u2500 KEYS\n\n1 directory, 4 files\n\n# add files to SVN\n$ svn add *\nA         1.0\nA  (bin)  1.0/apache-apisix-1.0-src.tar.gz.asc\nA  (bin)  1.0/apache-apisix-1.0-src.tar.gz\nA         1.0/apache-apisix-1.0-src.tar.gz.sha512\nsvn: warning: W150002: '/home/resty/git/apache_svn/apisix/KEYS' is already under version control\nsvn: E200009: Could not add all targets because some targets are already versioned\nsvn: E200009: Illegal target for the requested operation\n\n# commit to Apache SVN\n$ svn --username=${Apache username} commit -m \"release 1.0\"\nAdding         1.0\nAdding  (bin)  1.0/apache-apisix-1.0-src.tar.gz\nAdding  (bin)  1.0/apache-apisix-1.0-src.tar.gz.asc\nAdding         1.0/apache-apisix-1.0-src.tar.gz.sha512\nTransmitting file data ...\nCommitted revision 37435.\n")),Object(r.b)("h3",{id:"send-vote-thread-to-the-dev-mailing-list"},"Send VOTE thread to the dev mailing list"),Object(r.b)("p",null,"There is a minimum wait of 72 hours before statistical voting results. If you get -1 vote, you need to solve the problem before you can continue. An email example is as shown below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Hello, Community,\nThis is a call for the vote to release Apache APISIX version 2.0.\n\nRelease notes:\n\nhttps://github.com/apache/apisix/blob/2.4/CHANGELOG.md#240\n\nThe release candidates:\n\nhttps://dist.apache.org/repos/dist/dev/apisix/2.4/\n\nGit tag for the release:\n\nhttps://github.com/apache/apisix/tree/2.4\n\nRelease Commit ID:\n\nhttps://github.com/apache/apisix/commit/b94d3fc3b298df593ba6fe5c7b285768b567991e\n\nKeys to verify the Release Candidate:\n\nhttps://dist.apache.org/repos/dist/dev/apisix/KEYS\n\nSteps to validating the release:\n\n1. Download the release\n\nwget https://dist.apache.org/repos/dist/dev/apisix/2.4/apache-apisix-2.4-src.tgz\n\n\n2. Checksums and signatures\n\nwget https://dist.apache.org/repos/dist/dev/apisix/KEYS\n\nwget https://dist.apache.org/repos/dist/dev/apisix/2.4/apache-apisix-2.4-src.tgz.asc\n\nwget https://dist.apache.org/repos/dist/dev/apisix/2.4/apache-apisix-2.4-src.tgz.sha512\n\ngpg --import KEYS\n\nshasum -c apache-apisix-2.4-src.tgz.sha512\n\ngpg --verify apache-apisix-2.4-src.tgz.asc apache-apisix-2.4-src.tgz\n\n3. Unzip and Check files\n\ntar zxvf apache-apisix-2.4-src.tgz\n\n4. Build Apache APISIX:\n\nhttps://github.com/apache/apisix/blob/release/2.4/docs/en/latest/how-to-build.md#installation-via-source-release\n\nThe vote will be open for at least 72 hours or until necessary number of\nvotes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\n")),Object(r.b)("h3",{id:"send-vote-result-thread-to-the-dev-mailing-list"},"Send VOTE RESULT thread to the dev mailing list"),Object(r.b)("p",null,"Click ",Object(r.b)("a",{parentName:"p",href:"https://lists.apache.org/thread.html/r9153da737a4590dbbba7272acc004cf4bc7abefa488069810d790643%40%3Cdev.apisix.apache.org%3E"},"here")," to view the reference email at least 3 ",Object(r.b)("inlineCode",{parentName:"p"},"+1")," ",Object(r.b)("a",{parentName:"p",href:"https://www.apache.org/foundation/voting.html#binding-votes"},"binding votes")," is required, then send the vote result to ",Object(r.b)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org"),"."),Object(r.b)("h3",{id:"move-package-from-dev-to-dist"},"Move package from dev to dist"),Object(r.b)("p",null,"Invite ",Object(r.b)("a",{parentName:"p",href:"https://apisix.apache.org/team/"},"PMCs")," to move KEYS and package under the ",Object(r.b)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/apisix/"},Object(r.b)("inlineCode",{parentName:"a"},"release"))," directory."),Object(r.b)("h3",{id:"update-download-page"},"Update Download page"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-website"},"Download")," page contains links for Apache APISIX, Apache APISIX Dashboard, and other sources, and we need to update its contents ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/blob/master/website/docusaurus.config.js"},"here"),"."),Object(r.b)("h3",{id:"send-announce"},"Send ANNOUNCE"),Object(r.b)("p",null,"Click ",Object(r.b)("a",{parentName:"p",href:"https://lists.apache.org/thread.html/r6e90ffb7964314605c082ac3ae204303ad94f0f71087542c33fcd7bf%40%3Cdev.apisix.apache.org%3E"},"here")," to view the reference email send announce email to ",Object(r.b)("a",{parentName:"p",href:"mailto:dev@apisix.apache.org"},"dev@apisix.apache.org")," and ",Object(r.b)("a",{parentName:"p",href:"mailto:announce@apache.org"},"announce@apache.org")))}p.isMDXComponent=!0},268:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var a=i.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return i.a.createElement(c.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=n,u=d["".concat(s,".").concat(b)]||d[b]||h[b]||r;return t?i.a.createElement(u,o(o({ref:a},c),{},{components:t})):i.a.createElement(u,o({ref:a},c))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=b;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},348:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/release_flow-7cedd869bc884c40bf9f9f1ce8dded9e.png"}}]);