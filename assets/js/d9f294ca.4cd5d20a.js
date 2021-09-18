"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40506],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,h=g["".concat(o,".").concat(d)]||g[d]||s[d]||i;return t?a.createElement(h,p(p({ref:n},c),{},{components:t})):a.createElement(h,p({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},27769:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},assets:function(){return u},toc:function(){return c},default:function(){return g}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),p={title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",author:"\u5c60\u6b63\u677e",authorURL:"https://github.com/tzssangglass",authorImageURL:"https://avatars.githubusercontent.com/u/30819887?v=4",keywords:["APISIX","Apache APISIX","Java","\u63d2\u4ef6"],description:"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\u3002",tags:["technology"]},l=void 0,o={permalink:"/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins",source:"@site/blog/2021-06-21-use-Java-to-write-Apache-APISIX-plugins.md",title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",description:"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\u3002",date:"2021-06-21T00:00:00.000Z",formattedDate:"June 21, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:2.72,truncated:!0,authors:[{name:"\u5c60\u6b63\u677e",url:"https://github.com/tzssangglass",imageURL:"https://avatars.githubusercontent.com/u/30819887?v=4"}],prevItem:{title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"},nextItem:{title:"Apache APISIX Ingress Controller \u9996\u4e2a GA \u7248\u672c v1.0 \u6b63\u5f0f\u53d1\u5e03\uff01",permalink:"/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released"}},u={authorsImageUrls:[void 0]},c=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",children:[{value:"1.1 \u4e3a\u4ec0\u4e48 Apache APISIX \u8981\u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6",id:"11-\u4e3a\u4ec0\u4e48-apache-apisix-\u8981\u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6",children:[]},{value:"1.2 Apache APISIX \u591a\u8bed\u8a00\u652f\u6301\u67b6\u6784\u56fe",id:"12-apache-apisix-\u591a\u8bed\u8a00\u652f\u6301\u67b6\u6784\u56fe",children:[]}]},{value:"2. \u642d\u5efa\u5f00\u53d1\u73af\u5883",id:"2-\u642d\u5efa\u5f00\u53d1\u73af\u5883",children:[]},{value:"3. \u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f",id:"3-\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f",children:[{value:"3.1 \u8bbe\u7f6e Apache APISIX \u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f",id:"31-\u8bbe\u7f6e-apache-apisix-\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f",children:[]},{value:"3.2 \u8bbe\u7f6e apisix-java-plugin-runner \u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f",id:"32-\u8bbe\u7f6e-apisix-java-plugin-runner-\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f",children:[]}]},{value:"4. \u5f00\u53d1",id:"4-\u5f00\u53d1",children:[{value:"4.1 \u573a\u666f",id:"41-\u573a\u666f",children:[]},{value:"4.2 \u914d\u7f6e Apache APISIX",id:"42-\u914d\u7f6e-apache-apisix",children:[]},{value:"4.3 \u5f00\u53d1 Java \u63d2\u4ef6",id:"43-\u5f00\u53d1-java-\u63d2\u4ef6",children:[]},{value:"4.4 \u6d4b\u8bd5",id:"44-\u6d4b\u8bd5",children:[]}]},{value:"5. \u90e8\u7f72",id:"5-\u90e8\u7f72",children:[]},{value:"6. \u89c6\u9891\u6559\u7a0b",id:"6-\u89c6\u9891\u6559\u7a0b",children:[]}],s={toc:c};function g(e){var n=e.components,p=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\u3002")),(0,i.kt)("p",null,"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709",(0,i.kt)("strong",{parentName:"p"},"\u89c6\u9891\u6559\u7a0b"),"\u3002"),(0,i.kt)("h2",{id:"1-\u7b80\u4ecb"},"1. \u7b80\u4ecb"),(0,i.kt)("h3",{id:"11-\u4e3a\u4ec0\u4e48-apache-apisix-\u8981\u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6"},"1.1 \u4e3a\u4ec0\u4e48 Apache APISIX \u8981\u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5728\u652f\u6301\u591a\u8bed\u8a00\u7f16\u7a0b\u63d2\u4ef6\u524d\uff0cApache APISIX \u53ea\u652f\u6301\u4f7f\u7528 Lua \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u9700\u8981\u5f00\u53d1\u8005\u638c\u63e1 Lua \u548c OpenResty \u76f8\u5173\u7684\u5f00\u53d1\u80fd\u529b\u3002\u7136\u800c\u76f8\u5bf9\u4e8e\u4e3b\u6d41\u5f00\u53d1\u8bed\u8a00 Java\u3001Go \u6765\u8bf4\uff0cLua \u548c OpenResty \u5c5e\u4e8e\u76f8\u5bf9\u5c0f\u4f17\u7684\u6280\u672f\uff0c\u5f00\u53d1\u8005\u5f88\u5c11\u3002\u5982\u679c\u4ece\u5934\u5f00\u59cb\u5b66\u4e60 Lua \u548c OpenResty\uff0c\u9700\u8981\u4ed8\u51fa\u76f8\u5f53\u591a\u7684\u65f6\u95f4\u548c\u7cbe\u529b\u3002"),(0,i.kt)("p",null,"\u5f00\u53d1\u56e2\u961f\u5728\u8fdb\u884c\u6280\u672f\u9009\u578b\u7684\u65f6\u5019\uff0c\u6700\u91cd\u8981\u7684\u8003\u91cf\u5c31\u662f\u6240\u9009\u6280\u672f\u662f\u5426\u4e0e\u672c\u56e2\u961f\u6280\u672f\u6808\u76f8\u5339\u914d\uff0c\u7136\u800c\u5c0f\u4f17\u7684\u6280\u672f\u6808\u5c31\u9650\u5236\u4e86 Apache APISIX \u5728\u66f4\u5e7f\u9614\u7684\u573a\u666f\u4e0b\u8fdb\u884c\u6280\u672f\u843d\u5730\u3002"),(0,i.kt)("p",null,"\u73b0\u5728 Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u5f00\u53d1\u63d2\u4ef6\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u66f4\u91cd\u8981\u7684\u662f\u652f\u6301\u8bed\u8a00\u6240\u5728\u7684\u5f00\u53d1\u751f\u6001\u5708\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u719f\u6089\u7684\u6280\u672f\u6808\u6765\u5f00\u53d1 Apache APISIX"),"\u3002\u4ee5\u652f\u6301 Java \u4e3a\u4f8b\uff0c\u4f7f\u7528\u8005\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528 Java \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u878d\u5165 Spring Cloud \u751f\u6001\u5708\uff0c\u5e7f\u6cdb\u4f7f\u7528\u751f\u6001\u5708\u5185\u7684\u5404\u79cd\u6280\u672f\u7ec4\u4ef6\u3002"),(0,i.kt)("h3",{id:"12-apache-apisix-\u591a\u8bed\u8a00\u652f\u6301\u67b6\u6784\u56fe"},"1.2 Apache APISIX \u591a\u8bed\u8a00\u652f\u6301\u67b6\u6784\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2021-06-21-1",src:t(55998).Z})),(0,i.kt)("p",null,"\u4e0a\u56fe\u5de6\u8fb9\u662f Apache APISIX \u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u53f3\u8fb9\u7684 plugin runner \u662f\u6307\u63d2\u4ef6\u8fd0\u884c\u5668\uff0c\u6cdb\u6307\u591a\u8bed\u8a00\u652f\u6301\u7684\u9879\u76ee\u3002\u672c\u6587\u6863\u4e0b\u9762\u63d0\u5230\u7684 apisix-java-plugin-runner \u9879\u76ee\u5c31\u662f\u652f\u6301 Java \u8bed\u8a00\u7684 plugin runner\u3002"),(0,i.kt)("p",null,"\u5f53\u4f60\u5728 Apache APISIX \u4e2d\u914d\u7f6e\u4e00\u4e2a plugin runner \u65f6\uff0cApache APISIX \u4f1a\u542f\u52a8\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u8fd0\u884c plugin runner\uff0c\u8be5\u5b50\u8fdb\u7a0b\u4e0e Apache APISIX \u8fdb\u7a0b\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7528\u6237\u3002\u5f53\u6211\u4eec\u91cd\u542f\u6216\u91cd\u65b0\u52a0\u8f7d Apache APISIX \u65f6\uff0cplugin runner \u4e5f\u5c06\u88ab\u91cd\u542f\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4e3a\u4e00\u4e2a\u7ed9\u5b9a\u7684\u8def\u7531\u914d\u7f6e\u4e86 ext-plugin-* \u63d2\u4ef6\uff0c\u547d\u4e2d\u8be5\u8def\u7531\u7684\u8bf7\u6c42\u5c06\u89e6\u53d1  Apache APISIX\uff0c\u901a\u8fc7 unix socket \u5411 plugin runner \u6267\u884c RPC \u8c03\u7528\u3002\u8c03\u7528\u7ec6\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ext-plugin-pre-req: \u5728\u6267\u884c Apache APISIX \u5185\u7f6e\u63d2\u4ef6(Lua \u8bed\u8a00\u63d2\u4ef6)\u4e4b\u524d"),(0,i.kt)("li",{parentName:"ul"},"ext-plugin-post-req: \u5728\u6267\u884c Apache APISIX \u5185\u7f6e\u63d2\u4ef6(Lua \u8bed\u8a00\u63d2\u4ef6)\u4e4b\u540e")),(0,i.kt)("p",null,"\u6839\u636e\u9700\u8981\u914d\u7f6e plugin runner \u7684\u6267\u884c\u65f6\u673a\u3002"),(0,i.kt)("p",null,"plugin runner \u4f1a\u5904\u7406 RPC \u8c03\u7528\uff0c\u5728\u5176\u5185\u90e8\u521b\u5efa\u4e00\u4e2a\u6a21\u62df\u8bf7\u6c42\uff0c\u7136\u540e\u8fd0\u884c\u591a\u8bed\u8a00\u7f16\u5199\u7684\u63d2\u4ef6\uff0c\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9 Apache APISIX\u3002"),(0,i.kt)("p",null,"\u591a\u8bed\u8a00\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u662f\u5728 ext-plugin-* \u63d2\u4ef6\u914d\u7f6e\u9879\u4e2d\u5b9a\u4e49\u7684\u3002\u50cf\u5176\u4ed6\u63d2\u4ef6\u4e00\u6837\uff0c\u5b83\u4eec\u53ef\u4ee5\u88ab\u542f\u7528\u5e76\u5728\u8fd0\u884c\u4e2d\u91cd\u65b0\u5b9a\u4e49\u3002"),(0,i.kt)("h2",{id:"2-\u642d\u5efa\u5f00\u53d1\u73af\u5883"},"2. \u642d\u5efa\u5f00\u53d1\u73af\u5883"),(0,i.kt)("p",null,"\u9996\u5148\u9700\u8981\u642d\u5efa Apache APISIX \u7684\u8fd0\u884c\u73af\u5883\u6216\u8005\u5f00\u53d1\u73af\u5883\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/zh/latest/how-to-build.md"},"\u6784\u5efa Apache APISIX"),"\uff0c\u4ee5\u53ca Java \u9879\u76ee\u7684\u5f00\u53d1\u73af\u5883\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner/blob/main/docs/development.md"},"\u6784\u5efa apisix-java-plugin-runner"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aApache APISIX \u548c apisix-java-plugin-runner \u9700\u8981\u4f4d\u4e8e\u540c\u4e00\u5b9e\u4f8b\u4e0a\u3002"),(0,i.kt)("h2",{id:"3-\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f"},"3. \u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f"),(0,i.kt)("h3",{id:"31-\u8bbe\u7f6e-apache-apisix-\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f"},"3.1 \u8bbe\u7f6e Apache APISIX \u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f"),(0,i.kt)("p",null,"\u8fd9\u91cc\u662f\u6307\u8ba9 Apache APISIX \u4ee5\u8c03\u8bd5\u7684\u65b9\u5f0f\u8fd0\u884c\u5916\u90e8\u63d2\u4ef6\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ext-plugin:\n  path_for_test: /tmp/runner.sock\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u7684\u610f\u601d\u662f\uff0cApache APISIX  \u76f8\u5f53\u4e8e client \u7aef\uff0c\u4f1a\u76d1\u542c\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/runner.sock")," \u4f4d\u7f6e\u4e0a\u7684 Unxi Domain Socket \u94fe\u63a5\u3002"),(0,i.kt)("h3",{id:"32-\u8bbe\u7f6e-apisix-java-plugin-runner-\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f"},"3.2 \u8bbe\u7f6e apisix-java-plugin-runner \u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5728\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Main class(org.apache.apisix.plugin.runner.PluginRunnerApplication)"),"\u4e4b\u524d\uff0c\u9700\u8981\u914d\u7f6e\u7528\u6237\u7ea7\u7684\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_CONF_EXPIRE_TIME=3600"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u662f\u4f7f\u7528 IDEA \u8fdb\u884c\u5f00\u53d1\uff0c\u90a3\u4e48\u914d\u7f6e\u597d\u7684\u73af\u5883\u53d8\u91cf\u793a\u610f\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2021-06-21-2",src:t(86094).Z})),(0,i.kt)("p",null,"apisix-java-plugin-runner \u76f8\u5f53\u4e8e server \u7aef\uff0c\u5728\u542f\u52a8\u65f6\u4f1a\u4e3b\u52a8\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/runner.sock")," \u6587\u4ef6\uff0c\u5e76\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e0a\u4e0e Apache APISIX \u8fdb\u884c Unix Domain Socket \u901a\u4fe1\u3002"),(0,i.kt)("h2",{id:"4-\u5f00\u53d1"},"4. \u5f00\u53d1"),(0,i.kt)("h3",{id:"41-\u573a\u666f"},"4.1 \u573a\u666f"),(0,i.kt)("p",null,"\u6211\u4eec\u4ee5\u4e00\u4e2a\u573a\u666f\u6765\u4ee3\u5165\u5f00\u53d1\u8fc7\u7a0b\uff1a\u9700\u8981\u9a8c\u8bc1\u8bf7\u6c42 header \u4e2d token \u7684\u6709\u6548\u6027\uff0c\u9a8c\u8bc1 token \u7684\u65b9\u5f0f\u662f\u7528\u8bf7\u6c42\u4e2d\u643a\u5e26 token \u4f5c\u4e3a\u53c2\u6570\uff0c\u8bbf\u95ee SSO \u56fa\u5b9a\u7684\u63a5\u53e3\uff0c\u5982\u679c token \u9a8c\u8bc1\u901a\u8fc7\u5219\u653e\u884c\u8bf7\u6c42\uff0c\u9a8c\u8bc1\u5931\u8d25\u5219\u963b\u6b62\u8bf7\u6c42\u3002"),(0,i.kt)("h3",{id:"42-\u914d\u7f6e-apache-apisix"},"4.2 \u914d\u7f6e Apache APISIX"),(0,i.kt)("p",null,"\u5148\u7ed9\u63d2\u4ef6\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenValidator"),"\uff0c\u7136\u540e\u8bbe\u8ba1\u5c5e\u6027\uff0c\u4e3a\u4e86\u5c3d\u53ef\u80fd\u505a\u5230\u52a8\u6001\u914d\u7f6e\uff0c\u5c5e\u6027\u8bbe\u8ba1\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "validate_header": "token",\n  "validate_url": "https://www.sso.foo.com/token/validate",\n  "rejected_code": "403"\n}\n')),(0,i.kt)("p",null,"\u542f\u52a8 Apache APISIX\uff0c\u7136\u540e\u65b0\u589e\u4e00\u6761\u8def\u7531\u914d\u7f6e\uff0c\u6307\u5b9a\u8be5\u8def\u7531\u9700\u8981\u8c03\u7528 apisix-java-plugin-runner \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenValidator")," \u63d2\u4ef6\uff0c\u793a\u4f8b\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/get",\n    "plugins":{\n        "ext-plugin-pre-req":{\n            "conf":[\n                {\n                    "name":"TokenValidator",\n                    "value":"{\\"validate_header\\":\\"token\\",\\"validate_url\\":\\"https://www.sso.foo.com/token/validate\\",\\"rejected_code\\":\\"403\\"}"\n                }\n            ]\n        }\n    },\n    "upstream":{\n        "nodes":{\n            "httpbin.org:80":1\n        },\n        "type":"roundrobin"\n    }\n}\n')),(0,i.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"TokenValidator")," \u7684\u5c5e\u6027\u9700\u8981\u7ecf\u8fc7 json \u8f6c\u4e49\uff0c\u4f5c\u4e3a string \u7c7b\u578b\u8fdb\u884c\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\uff08\u8fd9\u91cc\u4e0a\u6e38\u5730\u5740\u914d\u7f6e\u4e3a httpbin.org\uff0c\u65b9\u4fbf\u8c03\u8bd5\uff09"),(0,i.kt)("h3",{id:"43-\u5f00\u53d1-java-\u63d2\u4ef6"},"4.3 \u5f00\u53d1 Java \u63d2\u4ef6"),(0,i.kt)("p",null,"\u5728 runner-plugin/src/main/java/org/apache/apisix/plugin/runner/filter \u76ee\u5f55\u4e0b\uff0c\u65b0\u589e ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenValidatr.java"),"\uff0c\u4ee3\u7801\u521d\u59cb\u9aa8\u67b6\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'package org.apache.apisix.plugin.runner.filter;\n\nimport org.apache.apisix.plugin.runner.HttpRequest;\nimport org.apache.apisix.plugin.runner.HttpResponse;\nimport org.springframework.stereotype.Component;\nimport reactor.core.publisher.Mono;\n\n\n@Component\npublic class TokenValidator implements PluginFilter {\n\n    @Override\n    public String name() {\n        return "TokenValidator";\n    }\n\n    @Override\n    public Mono<Void> filter(HttpRequest request, HttpResponse response, PluginFilterChain chain) {\n        return chain.filter(request, response);\n    }\n}\n')),(0,i.kt)("p",null,"\u9700\u8981\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginFilter"),"\u63a5\u53e3\uff0c\u91cd\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),"\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u91cd\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),' \u7684\u8fd4\u56de\u503c\uff0c\u548c\u524d\u9762\u914d\u7f6e APISIX \u7684\u8def\u7531\u5c5e\u6027\u4e2d "name" \u4fdd\u6301\u4e00\u81f4\u3002'),(0,i.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'package org.apache.apisix.plugin.runner.filter;\n\nimport com.google.gson.Gson;\nimport org.apache.apisix.plugin.runner.HttpRequest;\nimport org.apache.apisix.plugin.runner.HttpResponse;\nimport org.springframework.stereotype.Component;\nimport reactor.core.publisher.Mono;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n@Component\npublic class TokenValidator implements PluginFilter {\n\n    @Override\n    public String name() {\n        return "TokenValidator";\n    }\n\n    @Override\n    public Mono<Void> filter(HttpRequest request, HttpResponse response, PluginFilterChain chain) {\n        // parse `conf` to json\n        String configStr = request.getConfig(this);\n        Gson gson = new Gson();\n        Map<String, Object> conf = new HashMap<>();\n        conf = gson.fromJson(configStr, conf.getClass());\n\n        // get configuration parameters\n        String token = request.getHeader((String) conf.get("validate_header"));\n        String validate_url = (String) conf.get("validate_url");\n        boolean flag = validate(token, validate_url);\n\n        // token verification results\n        if (!flag) {\n            String rejected_code = (String) conf.get("rejected_code");\n            response.setStatusCode(Integer.parseInt(rejected_code));\n            return chain.filter(request, response);\n        }\n\n        return chain.filter(request, response);\n    }\n\n    private Boolean validate(String token, String validate_url) {\n        //TODO: improve the validation process\n        return true;\n    }\n}\n')),(0,i.kt)("h3",{id:"44-\u6d4b\u8bd5"},"4.4 \u6d4b\u8bd5"),(0,i.kt)("p",null,"\u5728 Apache APISIX \u4e0a\u914d\u7f6e\u7684\u4e0a\u6e38\u670d\u52a1\u662f httpbin.org\uff0c\u53ef\u4ee5\u8bbf\u95ee Apache APISIX\uff0c\u89e6\u53d1\u8def\u7531\uff0c\u8ba9 Apache APISIX \u8c03\u7528 apisix-java-plugin-runner \u53bb\u6267\u884c TokenValidator \u63d2\u4ef6\uff0c\u6d4b\u8bd5\u4e00\u4e0b Java \u63d2\u4ef6\u6548\u679c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl -H \'token: 123456\' 127.0.0.1:9080/get\n{\n "args": {},\n "headers": {\n "Accept": "/",\n "Host": "127.0.0.1",\n "Token": "123456",\n "User-Agent": "curl/7.71.1",\n "X-Amzn-Trace-Id": "Root=1-60cb0424-02b5bf804cfeab5252392f96",\n "X-Forwarded-Host": "127.0.0.1"\n },\n "origin": "127.0.0.1",\n "url": "http://127.0.0.1/get"\n}\n')),(0,i.kt)("h2",{id:"5-\u90e8\u7f72"},"5. \u90e8\u7f72"),(0,i.kt)("p",null,"\u63d2\u4ef6\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u90e8\u7f72\u64cd\u4f5c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner/blob/main/docs/how-it-works.md#run"},"\u90e8\u7f72 apisix-java-plugin-runner"),"\u3002"),(0,i.kt)("h2",{id:"6-\u89c6\u9891\u6559\u7a0b"},"6. \u89c6\u9891\u6559\u7a0b"),(0,i.kt)("iframe",{height:"350",width:"600",src:"https://api7-website-1301662268.file.myqcloud.com/2021-06-21-use-Java-to-write-Apache-APISIX-plugins.mp4",frameborder:"0"}))}g.isMDXComponent=!0},55998:function(e,n,t){n.Z=t.p+"assets/images/2021-06-21-1-525ff9910f08736d1e3777a630df9ae3.png"},86094:function(e,n,t){n.Z=t.p+"assets/images/2021-06-21-2-c01289c552c1b22596213a57c003252d.png"}}]);