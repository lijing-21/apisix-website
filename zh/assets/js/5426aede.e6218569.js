"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21584],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91962:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o={title:"Traffic Split in Apache APISIX Ingress Controller",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?s=460&u=f48ef50c5621a1616a3ede50221547e34270e061&v=4",keywords:["API Gateway","APISIX","Apache APISIX","Traffic Split","Ingress Controller"],description:"Traffic Split is a feature that splits and deliveries traffic to multiple backend services. Solutions like API Gateway and Service Mesh are capable of doing traffic splitting and implement functionalities like Canary Release and Blue-Green Deployment.",tags:["technology","practical case"]},c=void 0,l={permalink:"/zh/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller",source:"@site/blog/2021-03-27-traffic-split-in-apache-apisix-ingress-controller.md",title:"Traffic Split in Apache APISIX Ingress Controller",description:"Traffic Split is a feature that splits and deliveries traffic to multiple backend services. Solutions like API Gateway and Service Mesh are capable of doing traffic splitting and implement functionalities like Canary Release and Blue-Green Deployment.",date:"2021-03-27T00:00:00.000Z",formattedDate:"2021\u5e743\u670827\u65e5",tags:[{label:"technology",permalink:"/zh/blog/tags/technology"},{label:"practical case",permalink:"/zh/blog/tags/practical-case"}],readingTime:4.725,truncated:!0,authors:[{name:"Chao Zhang",url:"https://github.com/tokers",imageURL:"https://avatars.githubusercontent.com/u/10428333?s=460&u=f48ef50c5621a1616a3ede50221547e34270e061&v=4"}],prevItem:{title:"\u652f\u6301 10 \u4ebf\u65e5\u6d41\u91cf\u7684\u57fa\u7840\u8bbe\u65bd\uff1a\u5f53 Apahce APISIX \u9047\u4e0a\u817e\u8baf",permalink:"/zh/blog/2021/05/24/Tencent-Games"},nextItem:{title:"Get Front-End Test Coverage with Cypress",permalink:"/zh/blog/2021/03/02/get-front-end-test-coverage-with-cypress"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Traffic Split is a feature that splits and deliveries traffic to multiple backend services. Solutions like API Gateway and Service Mesh are capable of doing traffic splitting and implement functionalities like Canary Release and Blue-Green Deployment.")))}f.isMDXComponent=!0}}]);