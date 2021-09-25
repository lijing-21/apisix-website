"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36667],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=o(a),k=l,m=h["".concat(i,".").concat(k)]||h[k]||s[k]||p;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,r=new Array(p);r[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var o=2;o<p;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26490:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return i},assets:function(){return o},toc:function(){return u},default:function(){return h}});var n=a(87462),l=a(63366),p=(a(67294),a(3905)),r={title:"Apache APISIX \u52a9\u529b\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\uff0c\u5b9e\u73b0\u5168\u9762\u5fae\u670d\u52a1\u6cbb\u7406",author:"\u6234\u8bfa\u749f",keywords:["Apache APISIX","\u6709\u8d5e","\u5fae\u670d\u52a1\u6cbb\u7406","\u4e91\u539f\u751f"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u5b9e\u4f8b\u3002",tags:["User Case"]},c=void 0,i={permalink:"/blog/2021/09/14/youzan",source:"@site/blog/2021-09-14-youzan.md",title:"Apache APISIX \u52a9\u529b\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\uff0c\u5b9e\u73b0\u5168\u9762\u5fae\u670d\u52a1\u6cbb\u7406",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u5b9e\u4f8b\u3002",date:"2021-09-14T00:00:00.000Z",formattedDate:"September 14, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:1.515,truncated:!0,authors:[{name:"\u6234\u8bfa\u749f"}],prevItem:{title:"\u793e\u533a\u5468\u62a5\uff5c\u65b0\u664b committer \u4e24\u4f4d\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/blog/2021/09/15/weekly-report"},nextItem:{title:"\u7eb5\u89c2\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u53d1\u5c55\u5386\u7a0b\uff0c\u4e5f\u5c11\u4e0d\u4e86 Apache APISIX \u7684\u80fd\u529b\u52a0\u6301",permalink:"/blog/2021/09/13/china-mobile-cloud-usercase"}},o={authorsImageUrls:[void 0]},u=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6d41\u91cf\u7f51\u5173",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6d41\u91cf\u7f51\u5173",children:[{value:"\u6709\u8d5e OPS \u5e73\u53f0",id:"\u6709\u8d5e-ops-\u5e73\u53f0",children:[]},{value:"\u6ca1\u6709\u7f51\u5173\u5c42\u6cbb\u7406\u51fa\u73b0\u7684\u95ee\u9898",id:"\u6ca1\u6709\u7f51\u5173\u5c42\u6cbb\u7406\u51fa\u73b0\u7684\u95ee\u9898",children:[]}]},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86 Apache APISIX",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86-apache-apisix",children:[]},{value:"\u4f7f\u7528 Apache APISIX \u540e\u7684\u4ea7\u54c1\u65b0\u8c8c",id:"\u4f7f\u7528-apache-apisix-\u540e\u7684\u4ea7\u54c1\u65b0\u8c8c",children:[{value:"\u6548\u679c\u4e00\uff1a\u4f18\u5316\u4e86\u67b6\u6784\u6027\u80fd",id:"\u6548\u679c\u4e00\uff1a\u4f18\u5316\u4e86\u67b6\u6784\u6027\u80fd",children:[]},{value:"\u6548\u679c\u4e8c\uff1a\u5185\u90e8\u670d\u52a1\u63a5\u5165\u6807\u51c6\u5316",id:"\u6548\u679c\u4e8c\uff1a\u5185\u90e8\u670d\u52a1\u63a5\u5165\u6807\u51c6\u5316",children:[]}]},{value:"\u66f4\u591a\u73a9\u6cd5\u5f85\u5f00\u53d1",id:"\u66f4\u591a\u73a9\u6cd5\u5f85\u5f00\u53d1",children:[{value:"\u5347\u7ea7\u8fd0\u7ef4\u81ea\u52a8\u5316",id:"\u5347\u7ea7\u8fd0\u7ef4\u81ea\u52a8\u5316",children:[]},{value:"traffic split \u63d2\u4ef6\u4f7f\u7528",id:"traffic-split-\u63d2\u4ef6\u4f7f\u7528",children:[]},{value:"\u4e1c\u897f\u5411\u6d41\u91cf\u7ba1\u7406",id:"\u4e1c\u897f\u5411\u6d41\u91cf\u7ba1\u7406",children:[]},{value:"\u5185\u90e8\u6743\u9650\u7cfb\u7edf\u5bf9\u63a5",id:"\u5185\u90e8\u6743\u9650\u7cfb\u7edf\u5bf9\u63a5",children:[]},{value:"Go Plugin \u5f00\u53d1",id:"go-plugin-\u5f00\u53d1",children:[]}]}],s={toc:u};function h(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u5b9e\u4f8b\u3002")),(0,p.kt)("p",null,"\u4f5c\u8005\u6234\u8bfa\u749f\uff0c\u6765\u81ea\u6709\u8d5e\u6280\u672f\u4e2d\u53f0\uff0c\u8fd0\u7ef4\u5e73\u53f0\u5f00\u53d1\u5de5\u7a0b\u5e08"),(0,p.kt)("p",null,"\u6709\u8d5e\u662f\u4e00\u5bb6\u4e3b\u8981\u4ece\u4e8b\u96f6\u552e\u79d1\u6280 SaaS \u670d\u52a1\u7684\u4f01\u4e1a\uff0c\u5e2e\u52a9\u5546\u5bb6\u8fdb\u884c\u7f51\u4e0a\u5f00\u5e97\u3001\u793e\u4ea4\u8425\u9500\u3001\u63d0\u9ad8\u7559\u5b58\u590d\u8d2d\uff0c\u62d3\u5c55\u5168\u6e20\u9053\u65b0\u96f6\u552e\u4e1a\u52a1\u3002\u5728\u4eca\u5e74\uff0c\u6709\u8d5e\u6280\u672f\u4e2d\u53f0\u5f00\u59cb\u8bbe\u8ba1\u5b9e\u73b0\u65b0\u7684\u4e91\u539f\u751f PaaS \u5e73\u53f0\uff0c\u5e0c\u671b\u901a\u8fc7\u4e00\u5957\u901a\u7528\u6a21\u578b\u6765\u8fdb\u884c\u5404\u79cd\u5e94\u7528\u7684\u53d1\u5e03\u7ba1\u7406\u548c\u5fae\u670d\u52a1\u76f8\u5173\u6cbb\u7406\u3002\u800c Apache APISIX \u5728\u5176\u4e2d\u8d77\u5230\u4e86\u975e\u5e38\u5173\u952e\u7684\u4f5c\u7528\u3002"),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6d41\u91cf\u7f51\u5173"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u6d41\u91cf\u7f51\u5173"),(0,p.kt)("h3",{id:"\u6709\u8d5e-ops-\u5e73\u53f0"},"\u6709\u8d5e OPS \u5e73\u53f0"),(0,p.kt)("p",null,"\u6709\u8d5e OPS \u5e73\u53f0\u662f\u524d\u671f\u57fa\u4e8e FLASK \u7684\u5355\u4f53\u5e94\u7528\uff0c\u4e3b\u8981\u4ee5\u652f\u6301\u4e1a\u52a1\u4e3a\u4e3b\u3002\u540e\u6765\u9010\u6e10\u4e0a\u7ebf\u4e86\u5f88\u591a\u4e1a\u52a1\uff0c\u90e8\u7f72\u4e86\u5f88\u591a\u4e1a\u52a1\u7aef\u4ee3\u7801\uff0c\u8fdb\u5165\u5bb9\u5668\u5316\u9636\u6bb5\u3002\u7f51\u5173\u5728\u5f53\u65f6\u53ea\u662f\u5185\u90e8 FLASK \u5e94\u7528\u7684\u4e00\u90e8\u5206\u529f\u80fd\uff0c\u4e14\u6ca1\u6709\u4e00\u4e2a\u660e\u786e\u7684\u7f51\u5173\u6982\u5ff5\uff0c\u4ec5\u4f5c\u4e3a\u4e1a\u52a1\u5e94\u7528\u7684\u6d41\u91cf\u8f6c\u53d1\u529f\u80fd\u4f7f\u7528\u3002\u4e0b\u56fe\u5c55\u793a\u7684\u5c31\u662f\u5f53\u65f6\u7684\u7f51\u5173 1.0 \u4e1a\u52a1\u7ed3\u6784\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607246260-65fa3794-befc-4e84-beee-e5526085c719.png",alt:"1.0 \u4e1a\u52a1\u7ed3\u6784"})),(0,p.kt)("p",null,"\u7531\u4e8e\u524d\u671f\u6574\u4e2a\u4f53\u7cfb\u4e3b\u8981\u7740\u91cd\u4e8e\u4e1a\u52a1\u65b9\u5411\uff0c\u6240\u4ee5\u6ca1\u6709\u4ea7\u751f\u592a\u591a\u7684\u52a8\u529b\u53bb\u8fdb\u884c\u6539\u9020\u3002\u4ece 2018 \u5e74\u5f00\u59cb\uff0c\u901a\u8fc7\u5185\u90e8\u4ea4\u6d41\u6211\u4eec\u53d1\u73b0\uff0c\u5982\u679c\u6ca1\u6709\u4e00\u4e2a\u5f88\u597d\u7684\u7f51\u5173\u5c42\u6cbb\u7406\uff0c\u5bf9\u540e\u7eed\u4ea7\u54c1\u529f\u80fd\u7684\u5b9e\u73b0\u548c\u4e1a\u52a1\u63a5\u5165\u5ea6\u4e0a\u4f1a\u5e26\u6765\u8d8a\u6765\u8d8a\u660e\u663e\u7684\u74f6\u9888\u3002"),(0,p.kt)("h3",{id:"\u6ca1\u6709\u7f51\u5173\u5c42\u6cbb\u7406\u51fa\u73b0\u7684\u95ee\u9898"},"\u6ca1\u6709\u7f51\u5173\u5c42\u6cbb\u7406\u51fa\u73b0\u7684\u95ee\u9898"),(0,p.kt)("h4",{id:"\u95ee\u9898\u4e00\uff1a\u6027\u80fd\u65b9\u9762"},"\u95ee\u9898\u4e00\uff1a\u6027\u80fd\u65b9\u9762"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u65b0\u589e\u540e\u7aef\u670d\u52a1\uff0c\u90fd\u9700\u8981\u8fdb\u884c\u7f16\u7801\u53d8\u66f4"),(0,p.kt)("li",{parentName:"ol"},"\u6d41\u91cf\u8f6c\u53d1\u7684\u4ee3\u7801\u7528 Python \u7b80\u5355\u5b9e\u73b0\uff0c\u672a\u6309\u201c\u7f51\u5173\u201d\u8981\u6c42\u8fdb\u884c\u8bbe\u8ba1"),(0,p.kt)("li",{parentName:"ol"},"Flask \u6846\u67b6\u7684\u6027\u80fd\u9650\u5236\uff0c\u5355\u673a QPS \u8303\u56f4\u5c40\u9650\u5728 120-150"),(0,p.kt)("li",{parentName:"ol"},"\u91cd\u590d\u9020\u8f6e\u5b50\uff1a\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\u90fd\u751f\u4ea7\u4e00\u5957\u5bf9\u5e94\u5165\u53e3"),(0,p.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u9ebb\u70e6\uff0c\u8fd0\u7ef4\u590d\u6742")),(0,p.kt)("p",null,"\u57fa\u4e8e\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u7684\u884c\u52a8\u65b9\u5411\u662f\uff1a\u4e13\u4e1a\u7684\u5de5\u4f5c\u4ea4\u7ed9\u4e13\u4e1a\u7684\u7cfb\u7edf\u53bb\u505a\u3002"),(0,p.kt)("h4",{id:"\u95ee\u9898\u4e8c\uff1a\u5185\u90e8\u4e1a\u52a1\u65b9\u9762"},"\u95ee\u9898\u4e8c\uff1a\u5185\u90e8\u4e1a\u52a1\u65b9\u9762"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607280492-f3e9abbe-5017-497a-a8b8-80dd079f5a98.png",alt:"\u5185\u90e8\u4e1a\u52a1\u95ee\u9898"})),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u9700\u8981\u7ba1\u7406\u7684\u5185\u90e8\u670d\u52a1\u6570\u91cf\u975e\u5e38\u591a\uff08\u4e0a\u767e\uff09"),(0,p.kt)("li",{parentName:"ol"},"\u90e8\u5206\u670d\u52a1\u672a\u5bf9\u63a5 CAS \u5b9e\u73b0\u9274\u6743"),(0,p.kt)("li",{parentName:"ol"},"\u65b0\u7684\u670d\u52a1\u5bf9\u63a5 CAS \u5b58\u5728\u5bf9\u63a5\u6210\u672c\uff0c\u91cd\u590d\u5f00\u53d1\u8017\u65f6\u8017\u529b"),(0,p.kt)("li",{parentName:"ol"},"\u6240\u6709\u670d\u52a1\u76f4\u63a5\u914d\u7f6e\u5728\u63a5\u5165\u5c42\uff0c\u6ca1\u6709\u5185\u90e8\u670d\u52a1\u7684\u89c4\u8303\u53ca\u6700\u4f73\u5b9e\u8df5")),(0,p.kt)("p",null,"\u5e26\u7740\u4ee5\u4e0a\u8fd9\u4e24\u65b9\u9762\u95ee\u9898\uff0c\u6211\u4eec\u5c31\u5f00\u59cb\u5bf9\u7f51\u5173\u7c7b\u4ea7\u54c1\u8fdb\u884c\u4e86\u76f8\u5173\u7684\u8c03\u7814\u3002"),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86-apache-apisix"},"\u4e3a\u4ec0\u4e48\u9009\u62e9\u4e86 Apache APISIX"),(0,p.kt)("p",null,"\u6700\u65e9\u6211\u4eec\u4e5f\u8c03\u7814\u4e86\u5f88\u591a\u7684\u7f51\u5173\u7cfb\u7edf\uff0c\u6bd4\u5982 Apache APISIX\u3001Kong\u3001traefik \u548c MOSN\uff0c\u8fd8\u6709\u6211\u4eec\u516c\u53f8\u5185\u90e8\u7684\u4e24\u4e2a\u76f8\u5173\u9879\u76ee YZ7 \u548c Tether\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607308093-b2135819-6d17-41d4-b2fb-10cbefa3c27b.png",alt:"\u7f51\u5173\u7cfb\u7edf\u9884\u9009"})),(0,p.kt)("p",null,"\u8003\u8651\u5230\u4ea7\u54c1\u6210\u719f\u5ea6\u548c\u53ef\u62d3\u5c55\u6027\uff0c\u6700\u7ec8\u6211\u4eec\u5728 Kong \u548c Apache APISIX \u4e2d\u8fdb\u884c\u5bf9\u6bd4\u9009\u62e9\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607325400-45aba773-ef63-4168-8c01-5cfa69bb4021.png",alt:"\u591a\u7ef4\u5ea6\u5bf9\u6bd4"})),(0,p.kt)("p",null,"\u4ece\u4e0a\u56fe\u5bf9\u6bd4\u4e2d\u53ef\u4ee5\u53d1\u73b0\uff0c\u4e24\u8005\u5728\u5f88\u591a\u65b9\u9762\u57fa\u672c\u4e0d\u76f8\u4e0a\u4e0b\uff0c\u6240\u4ee5\u5b58\u50a8\u7aef\u6210\u4e3a\u6211\u4eec\u91cd\u70b9\u8003\u8651\u7684\u4e00\u70b9\u3002\u56e0\u4e3a etcd \u5728\u6211\u4eec\u516c\u53f8\u5185\u90e8\u7684\u8fd0\u7ef4\u4f53\u7cfb\u4e0a\u5df2\u7ecf\u6bd4\u8f83\u6210\u719f\uff0c\u6240\u4ee5 Apache APISIX \u76f8\u8f83 Kong \u5219\u7565\u80dc\u4e00\u7b79\u3002"),(0,p.kt)("p",null,"\u540c\u65f6\u8003\u8651\u5230\u5728\u5f00\u6e90\u9879\u76ee\u5c42\u9762\uff0cApache APISIX \u7684\u56fd\u5185\u4ea4\u6d41\u4e0e\u8ddf\u8fdb\u5904\u7406\u901f\u5ea6\u4e0a\u90fd\u975e\u5e38\u4f18\u79c0\uff0c\u9879\u76ee\u7684\u63d2\u4ef6\u4f53\u7cfb\u6bd4\u8f83\u4e30\u5bcc\u5168\u9762\uff0c\u5bf9\u5404\u4e2a\u9636\u6bb5\u7684\u4f7f\u7528\u7c7b\u578b\u90fd\u6bd4\u8f83\u5951\u5408\u3002"),(0,p.kt)("p",null,"\u6240\u4ee5\u5728 2020 \u5e74\u8c03\u7814\u4e4b\u540e\uff0c\u6700\u7ec8\u9009\u62e9\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u4f5c\u4e3a\u6709\u8d5e\u5373\u5c06\u63a8\u51fa\u4e91\u539f\u751f PaaS \u5e73\u53f0\u7684\u6d41\u91cf\u7f51\u5173\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528-apache-apisix-\u540e\u7684\u4ea7\u54c1\u65b0\u8c8c"},"\u4f7f\u7528 Apache APISIX \u540e\u7684\u4ea7\u54c1\u65b0\u8c8c"),(0,p.kt)("p",null,"\u5f53\u6211\u4eec\u5f00\u59cb\u63a5\u5165 Apache APISIX \u540e\uff0c\u524d\u6587\u63d0\u5230\u7684\u4e24\u65b9\u9762\u95ee\u9898\u9010\u4e00\u5f97\u5230\u4e86\u89e3\u51b3\u3002"),(0,p.kt)("h3",{id:"\u6548\u679c\u4e00\uff1a\u4f18\u5316\u4e86\u67b6\u6784\u6027\u80fd"},"\u6548\u679c\u4e00\uff1a\u4f18\u5316\u4e86\u67b6\u6784\u6027\u80fd"),(0,p.kt)("p",null,"Apache APISIX \u4f5c\u4e3a\u5165\u53e3\u7f51\u5173\u90e8\u7f72\u5728\u5185\u90e8\u670d\u52a1\u533a\u57df\u8fb9\u7f18\uff0c\u524d\u7aef\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u4f1a\u7ecf\u8fc7\u5b83\u3002\u540c\u65f6\u6211\u4eec\u901a\u8fc7 Apache APISIX \u7684\u63d2\u4ef6\u529f\u80fd\u5b9e\u73b0\u4e86\u4e0e\u516c\u53f8\u5185\u90e8 CAS \u5355\u70b9\u767b\u5f55\u7cfb\u7edf\u7684\u5bf9\u63a5\uff0c\u4e4b\u524d\u8d1f\u8d23\u6d41\u91cf\u8f6c\u53d1\u7684\u8d26\u53f7\u53d8\u4e3a\u7eaf\u4e1a\u52a1\u7cfb\u7edf\u3002\u540c\u65f6\u5728\u524d\u7aef\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8d1f\u8d23\u9274\u6743\u7684 SDK \u4e0e Apache APISIX \u9274\u6743\u63a5\u53e3\u8fdb\u884c\u5bf9\u63a5\uff0c\u8fbe\u6210\u4e00\u5957\u5b8c\u6574\u53c8\u81ea\u52a8\u5316\u7684\u6d41\u7a0b\u4f53\u7cfb\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607354934-f951c4f5-8d45-458e-83a6-de20fd206540.png",alt:"\u4f18\u5316\u67b6\u6784"})),(0,p.kt)("p",null,"\u4e8e\u662f\u95ee\u9898\u5f97\u5230\u4e86\u89e3\u51b3\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u589e\u52a0\u65b0\u7684\u540e\u7aef\u670d\u52a1\uff0c\u53ea\u9700\u8c03\u7528 Apache APISIX \u63a5\u53e3\uff0c\u5c06\u65b0\u7684\u670d\u52a1\u914d\u7f6e\u5199\u5165"),(0,p.kt)("li",{parentName:"ol"},"\u6d41\u91cf\u8f6c\u53d1\u901a\u8fc7 Apache APISIX \u5b8c\u6210\uff0c\u5728\u7f51\u5173\u8be5\u505a\u7684\u4e8b\u60c5\u4e0a\uff0c\u5b83\u5b8c\u6210\u5f97\u5341\u5206\u4f18\u79c0"),(0,p.kt)("li",{parentName:"ol"},"\u7f51\u5173\u4e0d\u518d\u662f\u67b6\u6784\u4e2d\u7684\u6027\u80fd\u74f6\u9888"),(0,p.kt)("li",{parentName:"ol"},"\u5bf9\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u53ef\u4ee5\u7edf\u4e00\u4f7f\u7528\u540c\u4e00\u4e2a\u7f51\u5173\u6765\u5b9e\u73b0\uff1b\u4e1a\u52a1\u7ec6\u8282\u6709\u5dee\u5f02\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u5b9e\u73b0")),(0,p.kt)("h3",{id:"\u6548\u679c\u4e8c\uff1a\u5185\u90e8\u670d\u52a1\u63a5\u5165\u6807\u51c6\u5316"},"\u6548\u679c\u4e8c\uff1a\u5185\u90e8\u670d\u52a1\u63a5\u5165\u6807\u51c6\u5316"),(0,p.kt)("p",null,"\u63a5\u5165 Apache APISIX \u540e\uff0c\u516c\u53f8\u65b0\u7684\u5185\u90e8\u670d\u52a1\u63a5\u5165\u65f6\u5c06\u81ea\u5e26\u9274\u6743\u529f\u80fd\uff0c\u63a5\u5165\u6210\u672c\u6781\u4f4e\uff0c\u4e1a\u52a1\u65b9\u53ef\u4ee5\u76f4\u63a5\u5f00\u59cb\u5f00\u53d1\u4e1a\u52a1\u4ee3\u7801\u3002\u540c\u65f6\u5728\u65b0\u670d\u52a1\u63a5\u5165\u65f6\uff0c\u6309\u5185\u90e8\u670d\u52a1\u7684\u89c4\u8303\u8fdb\u884c\u76f8\u5173\u8def\u7531\u914d\u7f6e\uff0c\u540e\u7aef\u670d\u52a1\u53ef\u4ee5\u7edf\u4e00\u62ff\u5230\u9274\u6743\u540e\u7684\u7528\u6237\u8eab\u4efd\uff0c\u7701\u65f6\u7701\u529b\u3002"),(0,p.kt)("p",null,"\u5177\u4f53\u5173\u4e8e\u5185\u90e8\u670d\u52a1\u7684\u4e00\u4e9b\u8c03\u6574\u7ec6\u8282\u8fd9\u91cc\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u3002"),(0,p.kt)("h4",{id:"\u9274\u6743\u63d2\u4ef6-ops-jwt-auth"},"\u9274\u6743\u63d2\u4ef6 OPS-JWT-Auth"),(0,p.kt)("p",null,"\u9274\u6743\u63d2\u4ef6\u662f\u57fa\u4e8e JWT-Auth \u534f\u8bae\u53bb\u5f00\u53d1\u7684\uff0c\u7528\u6237\u8bbf\u95ee\u524d\u7aef\u65f6\uff0c\u524d\u7aef\u4f1a\u5148\u53bb\u8c03\u7528 SDK\uff0c\u53bb\u524d\u7aef\u672c\u5730\u83b7\u53d6\u53ef\u7528\u7684 JWT-Token\u3002\u7136\u540e\u901a\u8fc7\u4e0b\u56fe\u7684\u8def\u5f84\u83b7\u5f97\u7528\u6237\u6709\u6548\u4fe1\u606f\uff0c\u653e\u5728\u524d\u7aef\u7684\u67d0\u4e2a\u5b58\u50a8\u91cc\uff0c\u5b8c\u6210\u767b\u5f55\u9274\u6743\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607385027-4cf6381d-d0ea-4e5e-a8c9-ffc599e6e69c.png",alt:"\u767b\u5f55\u9274\u6743"})),(0,p.kt)("h4",{id:"\u90e8\u7f72\u914d\u7f6e\u5347\u7ea7"},"\u90e8\u7f72\u914d\u7f6e\u5347\u7ea7"),(0,p.kt)("p",null,"\u5728\u90e8\u7f72\u5c42\u9762\uff0c\u6211\u4eec\u4ece\u7b80\u5355\u7248\u672c\u7ecf\u5386\u4e09\u6b21\u8fed\u4ee3\u540e\u5b9e\u73b0\u4e86\u76ee\u524d\u7684\u591a\u96c6\u7fa4\u914d\u7f6e\u90e8\u7f72\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7248\u672c\u4e00\uff1a\u53cc\u673a\u623f 4 \u4e2a\u72ec\u7acb\u8282\u70b9\uff0c\u7ba1\u7406\u7a0b\u5e8f\u5206\u522b\u5199\u5165\u6bcf\u4e2a\u8282\u70b9\u7684 etcd"),(0,p.kt)("li",{parentName:"ul"},"\u7248\u672c\u4e8c: \u53cc\u673a\u623f 4 \u4e2a\u72ec\u7acb\u8282\u70b9\uff0c\u4e3b\u673a\u623f\u4e09\u8282\u70b9 etcd \u96c6\u7fa4"),(0,p.kt)("li",{parentName:"ul"},"\u7248\u672c\u4e09: \u4e09\u673a\u623f 6 \u4e2a\u72ec\u7acb\u8282\u70b9\uff0c\u4e09\u673a\u623f etcd \u96c6\u7fa4")),(0,p.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u8fd8\u662f\u8ba1\u7b97\u4e0e\u5b58\u50a8\u6df7\u5408\u90e8\u7f72\u5728\u4e00\u8d77\uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u53bb\u90e8\u7f72\u4e00\u4e2a\u771f\u6b63\u9ad8\u53ef\u7528\u7684 etcd \u96c6\u7fa4\uff0c\u8fd9\u6837\u5728\u7ba1\u63a7\u5e73\u9762 Apache APISIX \u8fd0\u884c\u65f6\u5c31\u53ef\u4ee5\u5206\u79bb\u51fa\u6765\uff0c\u4ee5\u65e0\u72b6\u6001\u6a21\u5f0f\u90e8\u7f72\u3002"),(0,p.kt)("h4",{id:"\u65b0\u589e\u9274\u6743\u63d2\u4ef6-pat-auth"},"\u65b0\u589e\u9274\u6743\u63d2\u4ef6 PAT-Auth"),(0,p.kt)("p",null,"\u5728\u4eca\u5e74\u6211\u4eec\u53c8\u65b0\u589e\u4e86 Person Access Token\uff08PAT\uff09\u7684\u9274\u6743\u63d2\u4ef6\uff0c\u8fd9\u4e2a\u529f\u80fd\u7c7b\u4f3c\u4e8e\u5728 GitHub \u4e0a\u53bb\u8c03\u7528 Open API \u4e00\u6837\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u4e2a\u4eba Token\uff0c\u53ef\u4ee5\u4ee5\u4e2a\u4eba\u8eab\u4efd\u53bb\u8c03\u7528 Open API\u3002"),(0,p.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u81ea\u5df1\u7684\u8fd0\u7ef4\u5e73\u53f0\u4e5f\u6709\u4e00\u4e9b\u8fd9\u6837\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u672c\u5730\u7684\u4e00\u4e9b\u5f00\u53d1\u63d2\u4ef6\u9700\u8981\u4ee5\u4e2a\u4eba\u8eab\u4efd\u53bb\u8bbf\u95ee\u4e91\u5e73\u53f0\u4e0a\u7684\u63a5\u53e3\u65f6\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e2a\u4eba Token \u65b9\u5f0f\u5c31\u6bd4\u8f83\u65b9\u4fbf\uff0c\u5141\u8bb8\u5f00\u53d1\u81ea\u5df1\u7ed9\u81ea\u5df1\u6388\u6743\u3002"),(0,p.kt)("p",null,"\u76ee\u524d Apache APISIX 2.2 \u7248\u672c\u540e\u5df2\u652f\u6301\u591a\u4e2a Auth \u63d2\u4ef6\u4f7f\u7528\uff0c\u73b0\u5728\u53ef\u4ee5\u652f\u6301\u4e00\u4e2a Consumer \u8fd0\u884c\u591a\u4e2a Auth \u63d2\u4ef6\u7684\u573a\u666f\u5b9e\u73b0\u3002"),(0,p.kt)("h2",{id:"\u66f4\u591a\u73a9\u6cd5\u5f85\u5f00\u53d1"},"\u66f4\u591a\u73a9\u6cd5\u5f85\u5f00\u53d1"),(0,p.kt)("h3",{id:"\u5347\u7ea7\u8fd0\u7ef4\u81ea\u52a8\u5316"},"\u5347\u7ea7\u8fd0\u7ef4\u81ea\u52a8\u5316"),(0,p.kt)("p",null,"\u5728\u4f7f\u7528 Apache APISIX \u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u7ecf\u5386\u4e86\u51e0\u6b21\u7248\u672c\u53d8\u52a8\u3002\u4f46\u6bcf\u6b21\u5347\u7ea7\uff0c\u90fd\u6216\u591a\u6216\u5c11\u51fa\u73b0\u56e0\u4e3a\u517c\u5bb9\u6027\u800c\u5bfc\u81f4\u6539\u9020\u5f00\u53d1\uff0c\u5b8c\u6210\u540e\u8fdb\u884c\u7ebf\u4e0a\u53d8\u66f4\uff0c\u8fd0\u7ef4\u6548\u7387\u8f83\u4f4e\u3002\u6240\u4ee5\u540e\u7eed\u6211\u4eec\u4f1a\u5c1d\u8bd5\u5728\u5b58\u50a8\u9762\u90e8\u7f72\u4e09\u673a\u623f etcd \u96c6\u7fa4\u7684\u540c\u65f6\uff0c\u5c06 Apache APISIX \u8fd0\u884c\u9762\u5bb9\u5668\u5316\u5b9e\u73b0\u81ea\u52a8\u53d1\u5e03\u3002"),(0,p.kt)("h3",{id:"traffic-split-\u63d2\u4ef6\u4f7f\u7528"},"traffic split \u63d2\u4ef6\u4f7f\u7528"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/traffic-split.md"},"traffic split")," \u662f Apache APISIX \u5728\u6700\u8fd1\u51e0\u4e2a\u7248\u672c\u4e2d\u5f15\u5165\u7684\u63d2\u4ef6\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u8fdb\u884c\u6d41\u91cf\u5206\u79bb\u3002\u6709\u4e86\u8fd9\u4e2a\u63d2\u4ef6\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4e00\u4e9b\u6d41\u91cf\u5934\u4e0a\u7684\u7279\u5f81\uff0c\u5229\u7528\u5b83\u53bb\u81ea\u52a8\u5b8c\u6210\u76f8\u5173\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607412159-bc84d447-ef28-4726-8ee1-b960415ac5ce.png",alt:"traffic split"})),(0,p.kt)("p",null,"\u5982\u4e0a\u56fe\u5728\u8def\u7531\u914d\u7f6e\u4e0a\u5f15\u5165 traffic split \u63d2\u4ef6\uff0c\u5982\u679c\u5f53\u6709 Region=Region1 \u7684\u60c5\u51b5\uff0c\u4fbf\u5c06\u5176\u8def\u7531\u5230 Upstream1\u3002\u901a\u8fc7\u8fd9\u6837\u7684\u89c4\u5219\u914d\u7f6e\uff0c\u5b8c\u6210\u6d41\u91cf\u7ba1\u63a7\u7684\u64cd\u4f5c\u3002"),(0,p.kt)("h3",{id:"\u4e1c\u897f\u5411\u6d41\u91cf\u7ba1\u7406"},"\u4e1c\u897f\u5411\u6d41\u91cf\u7ba1\u7406"),(0,p.kt)("p",null,"\u6211\u4eec\u7684\u4f7f\u7528\u573a\u666f\u4e2d\u66f4\u591a\u662f\u6d89\u53ca\u5230\u5728\u5185\u7f51\u591a\u4e2a\u670d\u52a1\u4e4b\u95f4\u53bb\u505a\u670d\u52a1\uff0c\u8c03\u7528\u9274\u6743\u65f6\u53ef\u4ee5\u4f9d\u9760 Apache APISIX \u505a\u6d41\u91cf\u7ba1\u7406\u3002\u670d\u52a1 A\u3001\u670d\u52a1 B \u90fd\u53ef\u4ee5\u901a\u8fc7\u5b83\u53bb\u8c03\u7528\u670d\u52a1 C\uff0c\u4e2d\u95f4\u8fd8\u53ef\u4ee5\u52a0\u5165\u9274\u6743\u7684\u63d2\u4ef6\uff0c\u8bbe\u5b9a\u5176\u8c03\u7528\u5bf9\u8c61\u8303\u56f4\u3001\u73af\u5883\u8303\u56f4\u6216\u8005\u901f\u7387\u548c\u7194\u65ad\u9650\u6d41\u7b49\uff0c\u505a\u51fa\u7c7b\u4f3c\u8fd9\u6837\u7684\u6d41\u91cf\u7ba1\u63a7\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607435661-c22c61c4-396b-4412-9643-b6ccb16cfb1c.png",alt:"\u6d41\u91cf\u7ba1\u7406"})),(0,p.kt)("h3",{id:"\u5185\u90e8\u6743\u9650\u7cfb\u7edf\u5bf9\u63a5"},"\u5185\u90e8\u6743\u9650\u7cfb\u7edf\u5bf9\u63a5"),(0,p.kt)("p",null,"\u4e4b\u540e\u6211\u4eec\u4e5f\u6253\u7b97\u5c06\u516c\u53f8\u7684\u6743\u9650\u7cfb\u7edf\u4e0e Apache APISIX \u8fdb\u884c\u5bf9\u63a5\uff0c\u9274\u6743\u901a\u8fc7\u540e\uff0c\u5224\u5b9a\u7528\u6237\u662f\u5426\u6709\u6743\u9650\u53bb\u8bbf\u95ee\u540e\u7aef\u7684\u67d0\u4e2a\u8d44\u6e90\uff0c\u6743\u9650\u7684\u7ba1\u7406\u5458\u53ea\u9700\u5728\u7ba1\u63a7\u5e73\u9762\u4e0a\u505a\u7edf\u4e00\u914d\u7f6e\u5373\u53ef\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631607457290-e1f379c5-a23e-46a6-9cea-93cb6f5916ba.png",alt:"\u7cfb\u7edf\u5bf9\u63a5"})),(0,p.kt)("p",null,"\u8fd9\u6837\u5e26\u6765\u7684\u4e00\u4e2a\u597d\u5904\u5c31\u662f\u540e\u7aef\u7684\u6240\u6709\u670d\u52a1\u4e0d\u9700\u8981\u5404\u81ea\u53bb\u5b9e\u73b0\u6743\u9650\u7ba1\u63a7\uff0c\u56e0\u4e3a\u5f53\u4e0b\u6240\u6709\u6d41\u91cf\u90fd\u662f\u7ecf\u8fc7\u7f51\u5173\u5c42\u5904\u7406\u3002"),(0,p.kt)("h3",{id:"go-plugin-\u5f00\u53d1"},"Go Plugin \u5f00\u53d1"),(0,p.kt)("p",null,"\u76ee\u524d Apache APISIX \u5728\u8ba1\u7b97\u8bed\u8a00\u5c42\u9762\u5df2\u652f\u6301\u591a\u8ba1\u7b97\u8bed\u8a00\uff0c\u6bd4\u5982 Java\u3001Go \u4ee5\u53ca Python\u3002\u521a\u597d\u6211\u4eec\u6700\u8fd1\u5b9e\u73b0\u7684\u4e91\u539f\u751f PaaS \u5e73\u53f0\uff0c\u4e5f\u5f00\u59cb\u628a\u6280\u672f\u6808\u4ece Python \u5f80 Go \u4e0a\u8f6c\u79fb\u3002"),(0,p.kt)("p",null,"\u5e0c\u671b\u540e\u7eed\u5728\u4f7f\u7528 Apache APISIX \u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u7528 Go \u53bb\u66f4\u65b0\u4e00\u4e9b\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u4e86\u7684\u63d2\u4ef6\uff0c\u671f\u5f85\u5728\u540e\u7eed\u7684\u8fed\u4ee3\u4e2d\u7ed9\u6709\u8d5e\u4ea7\u54c1\u5e26\u6765\u66f4\u591a\u7684\u597d\u5904\u3002"))}h.isMDXComponent=!0}}]);