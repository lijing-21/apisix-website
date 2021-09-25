"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83587],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64789:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",author:"\u4f55\u806a",keywords:["APISIX","\u7231\u5947\u827a","API \u7f51\u5173","\u670d\u52a1\u53d1\u73b0"],description:"\u672c\u6587\u6574\u7406\u81ea\u7231\u5947\u827a\u9ad8\u7ea7\u7814\u53d1\u5e08\u4f55\u806a\u5728 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u57fa\u4e8e Apache APISIX \u7f51\u5173\uff0c\u7231\u5947\u827a\u6280\u672f\u56e2\u961f\u662f\u5982\u4f55\u8fdb\u884c\u516c\u53f8\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u878d\u5408\uff0c\u6253\u9020\u51fa\u5168\u65b0\u7684\u7f51\u5173\u670d\u52a1\u3002",tags:["User Case"]},i=void 0,u={permalink:"/zh/blog/2021/09/07/iQIYI-usercase",source:"@site/blog/2021-09-07-iQIYI-usercase.md",title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",description:"\u672c\u6587\u6574\u7406\u81ea\u7231\u5947\u827a\u9ad8\u7ea7\u7814\u53d1\u5e08\u4f55\u806a\u5728 Apache APISIX Meetup \u4e0a\u6d77\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u57fa\u4e8e Apache APISIX \u7f51\u5173\uff0c\u7231\u5947\u827a\u6280\u672f\u56e2\u961f\u662f\u5982\u4f55\u8fdb\u884c\u516c\u53f8\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u878d\u5408\uff0c\u6253\u9020\u51fa\u5168\u65b0\u7684\u7f51\u5173\u670d\u52a1\u3002",date:"2021-09-07T00:00:00.000Z",formattedDate:"2021\u5e749\u67087\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:1.525,truncated:!0,authors:[{name:"\u4f55\u806a"}],prevItem:{title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",permalink:"/zh/blog/2021/09/07/how-to-use-apisix-auth"},nextItem:{title:"Python \u52a9\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX \u63d2\u4ef6\u5f00\u53d1",permalink:"/zh/blog/2021/09/06/python-helps-you-quickly-with-Apache-APISIX-development"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7231\u5947\u827a\u5728\u4e4b\u524d\u6709\u5f00\u53d1\u4e86\u4e00\u6b3e\u7f51\u5173\u2014\u2014Skywalker\uff0c\u5b83\u662f\u57fa\u4e8e Kong \u505a\u7684\u4e8c\u6b21\u5f00\u53d1\uff0c\u76ee\u524d\u6d41\u91cf\u4f7f\u7528\u4e5f\u662f\u6bd4\u8f83\u5927\u7684\uff0c\u7f51\u5173\u5b58\u91cf\u4e1a\u52a1\u65e5\u5e38\u5cf0\u503c\u4e3a\u767e\u4e07\u7ea7\u522b QPS\uff0cAPI \u8def\u7531\u6570\u91cf\u4e0a\u4e07\u3002\u4f46\u8fd9\u6b3e\u4ea7\u54c1\u7684\u4e0d\u8db3\u968f\u7740\u4f7f\u7528\u4e5f\u5f00\u59cb\u9010\u6b65\u4f53\u73b0\u3002\u4eca\u5e74\u5728\u4ea4\u63a5\u5230\u6b64\u9879\u76ee\u540e\uff0c\u6211\u4eec\u6839\u636e\u4e0a\u8ff0\u95ee\u9898\u548c\u56f0\u5883\uff0c\u5f00\u59cb\u5bf9\u76f8\u5173\u7f51\u5173\u7c7b\u4ea7\u54c1\u505a\u4e86\u4e00\u4e9b\u8c03\u7814\uff0c\u7136\u540e\u53d1\u73b0\u4e86 Apache APISIX\u3002\u5728\u9009\u62e9 Apache APISIX \u4e4b\u524d\uff0c\u7231\u5947\u827a\u5e73\u53f0\u5df2\u7ecf\u5728\u4f7f\u7528 Kong \u4e86\uff0c\u4f46\u662f\u540e\u6765 Kong \u88ab\u653e\u5f03\u4e86\u3002")))}f.isMDXComponent=!0}}]);