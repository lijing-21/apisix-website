"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22471],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(i,".").concat(f)]||s[f]||h[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17843:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},assets:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c={title:"Python \u52a9\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX \u63d2\u4ef6\u5f00\u53d1",author:"\u5e05\u8fdb\u8d85",authorURL:"https://github.com/shuaijinchao",authorImageURL:"https://avatars.githubusercontent.com/u/8529452?v=4",keywords:["Python","APISIX","APISIX Python \u63d2\u4ef6","APISIX Python plugin","apisix-python-plugin-runner","APISIX Python Plugin Runner"],tags:["technology"]},u=void 0,i={permalink:"/blog/2021/09/06/python-helps-you-quickly-with-Apache-APISIX-development",source:"@site/blog/2021-09-06-python-helps-you-quickly-with-Apache-APISIX-development.md",title:"Python \u52a9\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX \u63d2\u4ef6\u5f00\u53d1",description:"\u5728 Apache APISIX Python Runner \u4e4b\u524d\u793e\u533a\u4e2d\u5df2\u7ecf\u652f\u6301\u4e86 Java",date:"2021-09-06T00:00:00.000Z",formattedDate:"September 6, 2021",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:3.19,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",url:"https://github.com/shuaijinchao",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"}],prevItem:{title:"\u57fa\u4e8e Apache APISIX\uff0c\u7231\u5947\u827a API \u7f51\u5173\u7684\u66f4\u65b0\u4e0e\u843d\u5730\u5b9e\u8df5",permalink:"/blog/2021/09/07/iQIYI-usercase"},nextItem:{title:"Apache APISIX \xd7 KubeSphere\uff1a\u63d0\u4f9b\u66f4\u597d\u7528\u7684\u7f51\u5173\u53ca K8S Ingress Controller",permalink:"/blog/2021/08/31/Apache APISIX \xd7 KubeSphere-a-better-gateway-and-K8S-Ingress-Controller"}},p={authorsImageUrls:[void 0]},l=[],h={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 Apache APISIX Python Runner \u4e4b\u524d\u793e\u533a\u4e2d\u5df2\u7ecf\u652f\u6301\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner"},"Java"),"\n\u548c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner"},"Go")," \u8bed\u8a00\u7684 Runner\uff0c\u4eca\u5929 Python Runner\n\u4e5f\u6765\u4e86\uff0c\u793e\u533a\u4e2d\u7684\u5c0f\u4f19\u4f34\u4eec\u5728\u5f00\u53d1 Apache APISIX \u7684\u63d2\u4ef6\u65f6\u53c8\u591a\u4e86\u4e00\u79cd\u65b0\u9009\u62e9\u3002")))}s.isMDXComponent=!0}}]);