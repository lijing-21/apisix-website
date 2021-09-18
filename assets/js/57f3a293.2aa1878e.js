"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53944],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50235:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},assets:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c={title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",author:"\u6731\u6b23\u6b23",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["APISIX","\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u548c\u7ec6\u8282\u4f7f\u7528\u3002",tags:["technology"]},u=void 0,i={permalink:"/blog/2021/09/07/how-to-use-apisix-auth",source:"@site/blog/2021-09-07-how-to-use-apisix-auth.md",title:"\u4f7f\u7528 Apache APISIX \u8fdb\u884c\u96c6\u4e2d\u5f0f\u8eab\u4efd\u8ba4\u8bc1\u53ca\u8fdb\u9636\u73a9\u6cd5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u548c\u7ec6\u8282\u4f7f\u7528\u3002",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:1.49,truncated:!0,authors:[{name:"\u6731\u6b23\u6b23",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",permalink:"/blog/2021/09/09/how-to-contribute-to-an-OpenSource-without-coding"},nextItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",permalink:"/blog/2021/09/07/iQIYI-usercase"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\uff0c\u4ece\u91cd\u8981\u6027\u548c\u73a9\u6cd5\u4f7f\u7528\u4e0a\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u3002")))}f.isMDXComponent=!0}}]);