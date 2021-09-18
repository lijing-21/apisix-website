"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49453],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),g=o,m=f["".concat(i,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43384:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},assets:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",author:"\u5c60\u6b63\u677e",authorURL:"https://github.com/tzssangglass",authorImageURL:"https://avatars.githubusercontent.com/u/30819887?v=4",keywords:["APISIX","Apache APISIX","Java","\u63d2\u4ef6"],description:"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\u3002",tags:["technology"]},u=void 0,i={permalink:"/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins",source:"@site/blog/2021-06-21-use-Java-to-write-Apache-APISIX-plugins.md",title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",description:"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\u3002",date:"2021-06-21T00:00:00.000Z",formattedDate:"June 21, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:2.72,truncated:!0,authors:[{name:"\u5c60\u6b63\u677e",url:"https://github.com/tzssangglass",imageURL:"https://avatars.githubusercontent.com/u/30819887?v=4"}],prevItem:{title:"Rancher \xd7 Apache APISIX: \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress Controller",permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"},nextItem:{title:"Apache APISIX Ingress Controller \u9996\u4e2a GA \u7248\u672c v1.0 \u6b63\u5f0f\u53d1\u5e03\uff01",permalink:"/blog/2021/06/18/first-GA-version-v1.0-of-Apache-APISIX-Ingress-Controller-released"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\u3002")))}f.isMDXComponent=!0}}]);