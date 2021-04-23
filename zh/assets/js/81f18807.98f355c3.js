(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(270)),i={title:"Deploy with Docker"},c={unversionedId:"deploy-with-docker",id:"deploy-with-docker",isDocsHomePage:!1,title:"Deploy with Docker",description:"\x3c!--",source:"@site/docs/apisix-dashboard/deploy-with-docker.md",slug:"/deploy-with-docker",permalink:"/zh/docs/dashboard/deploy-with-docker",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/zh/latest/deploy-with-docker.md",version:"current",sidebar:"docs",previous:{title:"Deploy with Source Codes",permalink:"/zh/docs/dashboard/deploy"},next:{title:"Deploy with RPM",permalink:"/zh/docs/dashboard/deploy-with-rpm"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[]},{value:"Other",id:"other",children:[]}],d={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," We support Docker Image, please visit ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix-dashboard"},"DockerHub")," for more information. The following steps are for building Docker Image manually."),Object(o.b)("p",null,"To build the Dashboard with Docker, you simply download the ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," file from the ",Object(o.b)("strong",{parentName:"p"},"root directory")," to your device (no need to download all source codes) then follow this guide."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"manager-api")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before using Docker to build images and start containers, make sure that the following dependencies are installed and running in your environment."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# Execute the build command in the directory where the Dockerfile is located (by default, the project root), specifying the tag manually.\n$ docker build -t apisix-dashboard:$tag .\n\n# For users in mainland China, the `ENABLE_PROXY` parameter can be provided to speed up module downloads.\n$ docker build -t apisix-dashboard:$tag . --build-arg ENABLE_PROXY=true\n\n# If you want to use the latest codes to build, you can specify the `APISIX_DASHBOARD_VERSION` parameter to `master`.\n# This parameter can also be specified as branch name of a specific version, such as `v2.1.1`.\n$ docker build -t apisix-dashboard:$tag . --build-arg APISIX_DASHBOARD_VERSION=master\n")),Object(o.b)("h2",{id:"launch"},"Launch"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Preparing configuration files")),Object(o.b)("p",null,"Before starting the container, the configuration file ",Object(o.b)("inlineCode",{parentName:"p"},"conf.yaml")," needs to be prepared inside the ",Object(o.b)("strong",{parentName:"p"},"host")," to override the default ",Object(o.b)("a",{parentName:"p",href:"../api/conf/conf.yaml"},"configuration file")," inside the container."),Object(o.b)("p",null,"Kindly note:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Only when ",Object(o.b)("inlineCode",{parentName:"li"},"conf.listen.host")," is ",Object(o.b)("inlineCode",{parentName:"li"},"0.0.0.0")," can the external network access the services within the container."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"conf.etcd.endpoints")," must be able to access the ",Object(o.b)("inlineCode",{parentName:"li"},"etcd")," service within the container. For example: use ",Object(o.b)("inlineCode",{parentName:"li"},"host.docker.internal:2379")," so that the container can access ",Object(o.b)("inlineCode",{parentName:"li"},"etcd")," on the host network.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Launch the Dashboard")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"# /path/to/conf.yaml Requires an absolute path pointing to the configuration file mentioned above.\n$ docker run -d -p 9000:9000 -v /path/to/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml --name apisix-dashboard apisix-dashboard:$tag\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Check if the container started successfully")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ docker ps -a\n")),Object(o.b)("p",null,"If the container ",Object(o.b)("inlineCode",{parentName:"p"},"apisix-dashboard")," is ok, visit ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),"."),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Stop the Dashboard")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ docker stop apisix-dashboard\n")),Object(o.b)("h2",{id:"other"},"Other"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Caching is not recommended when building a image multiple times.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ docker build -t apisix-dashboard:$tag . --no-cache=true\n")))}s.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?r.a.createElement(h,c(c({ref:t},d),{},{components:n})):r.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);