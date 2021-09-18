"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51736],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,y=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35606:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c={title:"\u652f\u6301 10 \u4ebf\u65e5\u6d41\u91cf\u7684\u57fa\u7840\u8bbe\u65bd\uff1a\u5f53 Apahce APISIX \u9047\u4e0a\u817e\u8baf",author:"\u5f90\u946b",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u817e\u8baf\u6e38\u620f","\u57fa\u7840\u8bbe\u65bd"],description:"\u672c\u6587\u6574\u7406\u81ea\u817e\u8baf\u6e38\u620f\u8d1f\u8d23\u5185\u90e8\u5bb9\u5668\u5e73\u53f0\u7684\u5de5\u7a0b\u5e08\u5f90\u946b\u5728 Apache APISIX Meetup - \u6df1\u5733\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e86\u89e3\u7f51\u5173\u662f\u4ec0\u4e48\u3001\u7f51\u5173\u6a21\u5f0f\u5bf9\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u7684\u6539\u8fdb\uff0c\u8fd8\u53ef\u4ee5\u4e86\u89e3\u817e\u8baf OTeam \u8bde\u751f\u7684\u539f\u56e0\uff0c\u4ee5\u53ca Apache APISIX \u662f\u5982\u4f55\u5728\u817e\u8baf\u5185\u90e8\u843d\u5730\u7684\u3002",tags:["technology","practical case"]},i=void 0,l={permalink:"/zh/blog/2021/05/24/Tencent-Games",source:"@site/blog/2021-05-24-Tencent-Games.md",title:"\u652f\u6301 10 \u4ebf\u65e5\u6d41\u91cf\u7684\u57fa\u7840\u8bbe\u65bd\uff1a\u5f53 Apahce APISIX \u9047\u4e0a\u817e\u8baf",description:"\u672c\u6587\u6574\u7406\u81ea\u817e\u8baf\u6e38\u620f\u8d1f\u8d23\u5185\u90e8\u5bb9\u5668\u5e73\u53f0\u7684\u5de5\u7a0b\u5e08\u5f90\u946b\u5728 Apache APISIX Meetup - \u6df1\u5733\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e86\u89e3\u7f51\u5173\u662f\u4ec0\u4e48\u3001\u7f51\u5173\u6a21\u5f0f\u5bf9\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u7684\u6539\u8fdb\uff0c\u8fd8\u53ef\u4ee5\u4e86\u89e3\u817e\u8baf OTeam \u8bde\u751f\u7684\u539f\u56e0\uff0c\u4ee5\u53ca Apache APISIX \u662f\u5982\u4f55\u5728\u817e\u8baf\u5185\u90e8\u843d\u5730\u7684\u3002",date:"2021-05-24T00:00:00.000Z",formattedDate:"2021\u5e745\u670824\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:1.76,truncated:!0,authors:[{name:"\u5f90\u946b"}],prevItem:{title:"Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2021/05/25/Apache APISIX 2.6.0-Release \u6b63\u5f0f\u53d1\u5e03"},nextItem:{title:"Traffic Split in Apache APISIX Ingress Controller",permalink:"/zh/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller"}},p={authorsImageUrls:[void 0]},u=[],s={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u6574\u7406\u81ea\u817e\u8baf\u6e38\u620f\u8d1f\u8d23\u5185\u90e8\u5bb9\u5668\u5e73\u53f0\u7684\u5de5\u7a0b\u5e08\u5f90\u946b\u5728 Apache APISIX Meetup - \u6df1\u5733\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u4e0d\u4ec5\u53ef\u4ee5\u4e86\u89e3\u7f51\u5173\u662f\u4ec0\u4e48\u3001\u7f51\u5173\u6a21\u5f0f\u5bf9\u4f20\u7edf\u670d\u52a1\u67b6\u6784\u7684\u6539\u8fdb\uff0c\u8fd8\u53ef\u4ee5\u4e86\u89e3\u817e\u8baf OTeam \u8bde\u751f\u7684\u539f\u56e0\uff0c\u4ee5\u53ca Apache APISIX \u662f\u5982\u4f55\u5728\u817e\u8baf\u5185\u90e8\u843d\u5730\u7684\u3002")))}f.isMDXComponent=!0}}]);