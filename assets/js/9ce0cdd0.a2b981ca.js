"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46060],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s={title:"Chaos Mesh Helps Apache APISIX Improve System Stability",author:"Shuyang Wu",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["API gateway","APISIX","Apache APISIX","Chaos Mesh","System Stability"],description:"This article explains how system stability create some pain points in different scenarios. Then it tells the stories of why the author chose Chaos Mesh as the ultimate solution,and how to use Chaos Mesh in Apache APISIX. In the end, there is also future plans for this solution, including run a chaos test in E2E simulation scenarios, add chaos tests to more Apache APISIX projects, and add features to Chaos Mesh.",tags:["technology"]},i=void 0,c={permalink:"/blog/2021/08/12/Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability",source:"@site/blog/2021-08-12-Chaos-Mesh-Helps-Apache-APISIX-Improve-System-Stability.md",title:"Chaos Mesh Helps Apache APISIX Improve System Stability",description:"This article explains how system stability create some pain points in different scenarios. Then it tells the stories of why the author chose Chaos Mesh as the ultimate solution,and how to use Chaos Mesh in Apache APISIX. In the end, there is also future plans for this solution, including run a chaos test in E2E simulation scenarios, add chaos tests to more Apache APISIX projects, and add features to Chaos Mesh.",date:"2021-08-12T00:00:00.000Z",formattedDate:"August 12, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:5.71,truncated:!0,authors:[{name:"Shuyang Wu",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807",permalink:"/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects"},nextItem:{title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",permalink:"/blog/2021/08/11/interview-TuZhengsong"}},u={authorsImageUrls:[void 0]},l=[],h={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article explains how system stability create some pain points in different scenarios. Then it tells the stories of why the author chose Chaos Mesh as the ultimate solution,and how to use Chaos Mesh in Apache APISIX. In the end, there is also future plans for this solution, including run a chaos test in E2E simulation scenarios, add chaos tests to more Apache APISIX projects, and add features to Chaos Mesh.")))}p.isMDXComponent=!0}}]);