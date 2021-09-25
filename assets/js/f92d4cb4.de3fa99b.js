"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90346],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return I}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(n),I=a,A=h["".concat(l,".").concat(I)]||h[I]||u[I]||o;return n?r.createElement(A,c(c({ref:t},s),{},{components:n})):r.createElement(A,c({ref:t},s))}));function I(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c={title:"Chaos Mesh \u52a9\u529b Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027",author:"\u5434\u8212\u65f8",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["APISIX","Apache APISIX","Chaos Mesh","\u7a33\u5b9a\u6027"],description:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u591a\u79cd\u573a\u666f\u4e0b\u4f7f\u7528 Chaos Mesh\uff0c\u4e3a Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027\u3002",tags:["Practical Case"]},i=void 0,l={permalink:"/blog/2021/06/16/Chaos-Mesh-helps-Apache-APISIX-improve-stability",source:"@site/blog/2021-06-16-Chaos-Mesh-helps-Apache-APISIX-improve-stability.md",title:"Chaos Mesh \u52a9\u529b Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u591a\u79cd\u573a\u666f\u4e0b\u4f7f\u7528 Chaos Mesh\uff0c\u4e3a Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027\u3002",date:"2021-06-16T00:00:00.000Z",formattedDate:"June 16, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:1.185,truncated:!0,authors:[{name:"\u5434\u8212\u65f8",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"Apache APISIX Dashboard \u8bbf\u95ee\u63a7\u5236\u7ed5\u8fc7\u6f0f\u6d1e\u516c\u544a\uff08CVE-2021-33190\uff09",permalink:"/blog/2021/06/17/Apache-APISIX-Dashboard-Access-Control-Bypass-Vulnerability-Announcement"},nextItem:{title:"Apache APISIX \u548c Envoy \u6027\u80fd\u5927\u6bd4\u62fc",permalink:"/blog/2021/06/10/Apache-APISIX-and-Envoy-performance-comparison"}},p={authorsImageUrls:[void 0]},s=[{value:"\u5982\u4f55\u5728 APISIX \u4e0a\u5e94\u7528\u6df7\u6c8c\u5de5\u7a0b",id:"\u5982\u4f55\u5728-apisix-\u4e0a\u5e94\u7528\u6df7\u6c8c\u5de5\u7a0b",children:[]},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",children:[]}],u={toc:s};function h(e){var t=e.components,c=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u5728\u591a\u79cd\u573a\u666f\u4e0b\u4f7f\u7528 Chaos Mesh\uff0c\u4e3a Apache APISIX \u63d0\u5347\u7a33\u5b9a\u6027\u3002")),(0,o.kt)("p",null,"Apache APISIX \u662f Apache \u57fa\u91d1\u4f1a\u4e0b\u7684\u9876\u7ea7\u9879\u76ee\uff0c\u76ee\u524d\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5df2\u7ecf\u901a\u8fc7\u6bcf\u65e5\u51e0\u767e\u4ebf\u6b21\u8bf7\u6c42\u91cf\u7684\u8003\u9a8c\u3002\u968f\u7740\u793e\u533a\u7684\u53d1\u5c55\uff0cApache APISIX \u7684\u529f\u80fd\u8d8a\u6765\u8d8a\u591a\uff0c\u9700\u8981\u4e0e\u5916\u90e8\u7ec4\u4ef6\u4ea7\u751f\u7684\u4ea4\u4e92\u4e5f\u8d8a\u6765\u8d8a\u591a\uff0c\u968f\u4e4b\u800c\u6765\u7684\u4e0d\u786e\u5b9a\u6027\u5448\u6307\u6570\u7ea7\u589e\u957f\u3002\u5728\u793e\u533a\u4e2d\uff0c\u6211\u4eec\u4e5f\u6536\u5230\u4e86\u7528\u6237\u53cd\u9988\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u8fd9\u91cc\u4e3e\u4e24\u4e2a\u4f8b\u5b50\u3002"),(0,o.kt)("h4",{id:"\u573a\u666f\u4e00"},"\u573a\u666f\u4e00"),(0,o.kt)("p",null,"\u5728 Apache APISIX \u7684\u914d\u7f6e\u4e2d\u5fc3\uff0c etcd \u4e0e Apache APISIX \u4e4b\u95f4\u51fa\u73b0\u610f\u5916\u7684\u9ad8\u7f51\u7edc\u5ef6\u8fdf\u65f6\uff0cApache APISIX \u80fd\u5426\u4ecd\u7136\u6b63\u5e38\u8fd0\u884c\u8fdb\u884c\u6d41\u91cf\u8fc7\u6ee4\u8f6c\u53d1\uff1f"),(0,o.kt)("h4",{id:"\u573a\u666f\u4e8c"},"\u573a\u666f\u4e8c"),(0,o.kt)("p",null,"\u7528\u6237\u5728 issue \u53cd\u9988\uff0c\u5f53 etcd \u96c6\u7fa4\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9\u5931\u6548\u800c\u96c6\u7fa4\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u65f6\uff0c\u4f1a\u51fa\u73b0\u4e0e Apache APISIX admin API \u4ea4\u4e92\u62a5\u9519\u7684\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u5c3d\u7ba1 Apache APISIX \u5728 CI \u4e2d\u901a\u8fc7\u5355\u5143 / e2e / fuzz \u6d4b\u8bd5\u8986\u76d6\u4e86\u5927\u90e8\u5206\u60c5\u666f\uff0c\u7136\u800c\u5c1a\u672a\u8986\u76d6\u5230\u4e0e\u5916\u90e8\u7ec4\u4ef6\u7684\u4ea4\u4e92\u3002\u5f53\u53d1\u751f\u7f51\u7edc\u6ce2\u52a8\u3001\u786c\u76d8\u6545\u969c\u3001\u6216\u662f\u8fdb\u7a0b\u88ab\u6740\u6389\u7b49\u96be\u4ee5\u9884\u6599\u7684\u5f02\u5e38\u884c\u4e3a\u65f6\uff0cApache APISIX \u80fd\u5426\u7ed9\u51fa\u5408\u9002\u7684\u9519\u8bef\u4fe1\u606f\u3001\u662f\u5426\u53ef\u4ee5\u4fdd\u6301\u6216\u81ea\u884c\u6062\u590d\u5230\u6b63\u5e38\u7684\u8fd0\u884c\u72b6\u6001\u5462\uff1f\u4e3a\u4e86\u6d4b\u8bd5\u8986\u76d6\u5230\u7528\u6237\u63d0\u51fa\u7684\u573a\u666f\uff0c\u4ee5\u53ca\u5728\u6295\u5165\u751f\u4ea7\u73af\u5883\u524d\u4e3b\u52a8\u53d1\u73b0\u7c7b\u4f3c\u7684\u95ee\u9898\uff0c\u7ecf\u8fc7\u793e\u533a\u8ba8\u8bba\u51b3\u5b9a\u4f7f\u7528 PingCAP \u5f00\u6e90\u7684\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0 Chaos Mesh \u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,o.kt)("p",null,"\u6df7\u6c8c\u5de5\u7a0b\u662f\u4e00\u79cd\u5728\u7cfb\u7edf\u57fa\u7840\u8bbe\u65bd\u4e0a\u8fdb\u884c\u8bd5\u9a8c\uff0c\u4e3b\u52a8\u627e\u51fa\u7cfb\u7edf\u4e2d\u7684\u8106\u5f31\u73af\u8282\u7684\u65b9\u6cd5\uff0c\u4ece\u800c\u786e\u4fdd\u7cfb\u7edf\u5177\u6709\u62b5\u5fa1\u751f\u4ea7\u73af\u5883\u4e2d\u5931\u63a7\u73af\u5883\u7684\u80fd\u529b\u3002\u6df7\u6c8c\u5de5\u7a0b\u6700\u65e9\u7531 Netflix \u63d0\u51fa\uff0c\u7528\u4ee5\u6a21\u62df\u4ece\u800c\u62b5\u5fa1\u65e9\u671f\u4e91\u670d\u52a1\u7684\u4e0d\u7a33\u5b9a\u6027\u3002\u968f\u7740\u6280\u672f\u7684\u6f14\u8fdb\uff0c\u73b0\u5728\u7684\u6df7\u6c8c\u5de5\u7a0b\u5e73\u53f0\u63d0\u4f9b\u4e86\u66f4\u591a\u79cd\u7c7b\u7684\u6545\u969c\u53ef\u4f9b\u6ce8\u5165\uff0c\u4f9d\u9760 Kubernetes \u4e5f\u53ef\u4ee5\u66f4\u65b9\u4fbf\u5730\u63a7\u5236\u6545\u969c\u534a\u5f84\u3002\u8fd9\u4e9b\u90fd\u662f Apache APISIX \u9009\u62e9 Chaos Mesh \u7684\u91cd\u8981\u539f\u56e0\uff0c\u4f46\u4f5c\u4e3a\u5f00\u6e90\u793e\u533a\uff0cApache APISIX \u6df1\u77e5\u53ea\u6709\u6d3b\u8dc3\u7684\u793e\u533a\u624d\u80fd\u786e\u4fdd\u8f6f\u4ef6\u7a33\u5b9a\u4f7f\u7528\u548c\u5feb\u901f\u8fed\u4ee3\uff0c\u800c\u8fd9\u4e5f\u662f Chaos Mesh \u66f4\u52a0\u5438\u5f15\u4eba\u7684\u7279\u70b9\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u5728-apisix-\u4e0a\u5e94\u7528\u6df7\u6c8c\u5de5\u7a0b"},"\u5982\u4f55\u5728 APISIX \u4e0a\u5e94\u7528\u6df7\u6c8c\u5de5\u7a0b"),(0,o.kt)("p",null,"\u6df7\u6c8c\u5de5\u7a0b\u5728\u5355\u7eaf\u7684\u6ce8\u5165\u6545\u969c\u4ee5\u5916\uff0c\u9010\u6e10\u5f62\u6210\u4e86\u4e00\u5957\u5b8c\u6574\u7684\u65b9\u6cd5\u8bba\u3002\u6839\u636e Principle of Chaos Engineering \u7684\u63a8\u8350\uff0c\u90e8\u7f72\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u9700\u8981\u4e94\u4e2a\u6b65\u9aa4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u7a33\u6001\uff0c\u5373\u627e\u5230\u4e00\u4e2a\u8bc1\u660e\u6b63\u5e38\u8fd0\u884c\u7684\u53ef\u91cf\u5316\u6307\u6807\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u505a\u51fa\u5047\u8bbe\uff0c\u5047\u8bbe\u6307\u6807\u5728\u5b9e\u9a8c\u7ec4\u548c\u5bf9\u7167\u7ec4\u90fd\u59cb\u7ec8\u4fdd\u6301\u7a33\u5b9a\u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u8ba1\u5b9e\u9a8c\uff0c\u5f15\u5165\u8fd0\u884c\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684\u6545\u969c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u5047\u8bbe\uff0c\u5373\u901a\u8fc7\u6bd4\u8f83\u5b9e\u9a8c\u7ec4\u548c\u5bf9\u7167\u7ec4\u7684\u7ed3\u679c\u8bc1\u4f2a\u5047\u8bbe\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4fee\u590d\u95ee\u9898\u3002")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u4ee5\u4e0a\u8ff0\u4e24\u4e2a\u7528\u6237\u53cd\u9988\u573a\u666f\u4e3a\u4f8b\uff0c\u4f9d\u7167\u8fd9\u4e94\u4e2a\u6b65\u9aa4\u4e3a\u5927\u5bb6\u4ecb\u7ecd Apache APISIX \u5e94\u7528\u6df7\u6c8c\u5de5\u7a0b\u7684\u6d41\u7a0b\u3002"),(0,o.kt)("h4",{id:"\u573a\u666f\u4e00-1"},"\u573a\u666f\u4e00"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2021-06-16-1",src:n(97425).Z})),(0,o.kt)("p",null,"\u7528\u4e00\u5e45\u56fe\u6765\u63cf\u8ff0\u8fd9\u4e2a\u573a\u666f\u3002\u5bf9\u7167\u4e0a\u9762\u7684\u4e94\u4e2a\u6b65\u9aa4\uff0c\u9996\u5148\u9700\u8981\u627e\u5230\u8861\u91cf Apache APISIX \u6b63\u5e38\u8fd0\u884c\u7684\u53ef\u91cf\u5316\u6307\u6807\u3002\u5728\u6d4b\u8bd5\u65f6\u6700\u4e3b\u8981\u7684\u65b9\u6cd5\u662f\u5229\u7528 Grafana \u5bf9 Apache APISIX \u8fd0\u884c\u6307\u6807\u8fdb\u884c\u76d1\u6d4b\uff0c\u627e\u5230\u53ef\u8861\u91cf\u7684\u6307\u6807\u540e\uff0c\u5728 CI \u4e2d\u5c31\u53ef\u4ee5\u4ece Prometheus \u4e2d\u5355\u72ec\u63d0\u53d6\u6570\u636e\u8fdb\u884c\u6bd4\u8f83\u5224\u65ad\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86\u8def\u7531\u8f6c\u53d1\u7684 Request per Second\uff08RPS\uff09\u548c etcd \u7684\u53ef\u8fde\u63a5\u6027 \u4f5c\u4e3a\u8bc4\u4ef7\u6307\u6807\u3002\u53e6\u4e00\u70b9\u5c31\u662f\u9700\u8981\u5bf9\u65e5\u5fd7\u8fdb\u884c\u5206\u6790\uff0c\u5bf9\u4e8e Apache APISIX \u5c31\u662f\u67e5\u770b Nginx \u7684 error.log \u5224\u65ad\u662f\u5426\u6709\u62a5\u9519\u4ee5\u53ca\u62a5\u9519\u662f\u5426\u7b26\u5408\u9884\u671f\u3002"),(0,o.kt)("p",null,"\u5728\u5bf9\u7167\u7ec4\u4e5f\u5c31\u662f\u5f15\u5165 Chaos \u524d\u8fdb\u884c\u5b9e\u9a8c\uff0c\u68c0\u6d4b set/get route \u5747\u80fd\u6210\u529f\uff0cetcd \u53ef\u8fde\u63a5\uff0c\u5e76\u8bb0\u5f55\u6b64\u65f6\u7684 RPS\u3002\u4e4b\u540e\uff0c\u4f7f\u7528 network chaos \u6dfb\u52a0 5s \u7684\u7f51\u7edc\u5ef6\u8fdf \uff0c\u518d\u6b21\u8fdb\u884c\u5b9e\u9a8c\uff0c\u6b64\u65f6 set route \u5931\u8d25\uff0cget route \u6210\u529f\uff0cetcd \u65e0\u6cd5\u8fde\u63a5\uff0cRPS \u4e0e\u4e4b\u524d\u76f8\u6bd4\u65e0\u660e\u663e\u53d8\u5316\u3002\u5b9e\u9a8c\u7b26\u5408\u9884\u671f\u3002"),(0,o.kt)("h4",{id:"\u573a\u666f\u4e8c-1"},"\u573a\u666f\u4e8c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2021-06-16-2",src:n(13545).Z})),(0,o.kt)("p",null,"\u8fdb\u884c\u540c\u6837\u7684\u5bf9\u7167\u7ec4\u5b9e\u9a8c\u4e4b\u540e\u5f15\u5165 pod-kill chaos\uff0c\u590d\u73b0\u4e86\u9884\u671f\u7684\u9519\u8bef\u3002\u5728\u968f\u673a\u5220\u9664\u96c6\u7fa4\u4e2d\u5c11\u6570 etcd \u8282\u70b9\u7684\u60c5\u51b5\u4e0b\uff0cetcd \u53ef\u8fde\u63a5\u6027\u8868\u73b0\u51fa\u65f6\u6709\u65f6\u65e0\uff0c\u65e5\u5fd7\u5219\u6253\u5370\u51fa\u4e86\u5927\u91cf\u8fde\u63a5\u62d2\u7edd\u7684\u62a5\u9519\u3002\u66f4\u52a0\u6709\u8da3\u7684\u662f\uff0c\u5728\u5220\u9664 etcd \u7aef\u70b9\u5217\u8868\u7684\u7b2c\u4e00\u4e2a\u6216\u7b2c\u4e09\u4e2a\u8282\u70b9\u65f6\uff0c\u8bbe\u7f6e\u8def\u7531\u6b63\u5e38\u8fd4\u56de\uff0c\u800c\u53ea\u6709\u5728\u5220\u9664 etcd \u7aef\u70b9\u5217\u8868\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u8282\u70b9\u65f6\uff0c\u8bbe\u7f6e\u8def\u7531\u4f1a\u62a5\u9519 \u201cconnection refused\u201d\u3002"),(0,o.kt)("p",null,"\u6392\u67e5\u53d1\u73b0\u539f\u56e0\u5728\u4e8e Apache APISIX \u4f7f\u7528\u7684 etcd lua API \u9009\u62e9\u7aef\u70b9\u65f6\u5e76\u4e0d\u662f\u968f\u673a\u800c\u662f\u987a\u5e8f\u9009\u62e9\uff0c\u56e0\u6b64\u65b0\u5efa etcd client \u8fdb\u884c\u7684\u64cd\u4f5c\u5c31\u76f8\u5f53\u4e8e\u53ea\u7ed1\u5b9a\u5728\u4e00\u4e2a etcd \u7aef\u70b9\u4e0a\u5bfc\u81f4\u6301\u7eed\u6027\u7684\u5931\u8d25\u3002\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u4e4b\u540e\uff0c\u8fd8\u4e3a etcd lua API \u6dfb\u52a0\u4e86\u5065\u5eb7\u68c0\u67e5\uff0c\u786e\u4fdd\u4e0d\u4f1a\u5728\u65ad\u5f00\u8fde\u63a5\u7684 etcd \u4e0a\u8fdb\u884c\u5927\u91cf\u7684\u91cd\u590d\uff1b\u4ee5\u53ca\u589e\u52a0\u4e86 etcd \u96c6\u7fa4\u5b8c\u5168\u65ad\u5f00\u8fde\u63a5\u65f6\u7684\u56de\u9000\u68c0\u67e5\uff0c\u907f\u514d\u5927\u91cf\u62a5\u9519\u51b2\u7206\u65e5\u5fd7\u3002"),(0,o.kt)("h3",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),(0,o.kt)("h4",{id:"1-\u501f\u52a9-e2e-\u6a21\u62df\u573a\u666f\u8fdb\u884c\u6df7\u6c8c\u6d4b\u8bd5"},"1. \u501f\u52a9 e2e \u6a21\u62df\u573a\u666f\u8fdb\u884c\u6df7\u6c8c\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u76ee\u524d\u5728 Apache APISIX \u4e2d\uff0c\u4ecd\u7136\u4e3b\u8981\u4f9d\u9760\u4eba\u6765\u8bc6\u522b\u7cfb\u7edf\u4e2d\u53ef\u80fd\u7684\u8106\u5f31\u70b9\u8fdb\u884c\u6d4b\u8bd5\u4fee\u590d\u3002\u5bf9\u4e8e\u5f00\u6e90\u793e\u533a\u6765\u8bf4\uff0c\u4e0e\u4e4b\u524d\u63d0\u5230\u7684 Netflix \u5728\u4f01\u4e1a\u4e2d\u5e94\u7528\u6df7\u6c8c\u5de5\u7a0b\u4e0d\u540c\uff0c\u5c3d\u7ba1\u5728 CI \u4e2d\u6d4b\u8bd5\uff0c\u65e0\u9700\u62c5\u5fc3\u6df7\u6c8c\u5de5\u7a0b\u7684\u6545\u969c\u534a\u5f84\u5bf9\u751f\u4ea7\u73af\u5883\u7684\u5f71\u54cd\uff0c\u4f46\u540c\u65f6\u4e5f\u65e0\u6cd5\u8986\u76d6\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u590d\u6742\u800c\u5168\u9762\u7684\u573a\u666f\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8986\u76d6\u66f4\u591a\u7684\u573a\u666f\uff0c\u672a\u6765\u793e\u533a\u8ba1\u5212\u5229\u7528\u73b0\u6709\u7684 e2e \u6d4b\u8bd5\u6a21\u62df\u66f4\u52a0\u5b8c\u6574\u7684\u573a\u666f\uff0c\u8fdb\u884c\u66f4\u5927\u8303\u56f4\u3001\u66f4\u5f3a\u968f\u673a\u6027\u7684\u6df7\u6c8c\u6d4b\u8bd5\u3002"),(0,o.kt)("h4",{id:"2-\u4e3a\u66f4\u591a-apache-apisix-\u9879\u76ee\u6dfb\u52a0\u6df7\u6c8c\u6d4b\u8bd5"},"2. \u4e3a\u66f4\u591a Apache APISIX \u9879\u76ee\u6dfb\u52a0\u6df7\u6c8c\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u9664\u4e86\u4e3a Apache APISIX \u627e\u5230\u66f4\u591a\u53ef\u80fd\u7684\u8106\u5f31\u70b9\u4e4b\u5916\uff0c\u793e\u533a\u8fd8\u8ba1\u5212\u4e3a Apache APISIX Dashboard \u548c Apache APISIX Ingress Controller \u7b49\u66f4\u591a\u9879\u76ee\u6dfb\u52a0\u6df7\u6c8c\u6d4b\u8bd5\u3002"),(0,o.kt)("h4",{id:"3-\u4e3a-chaos-mesh-\u6dfb\u52a0\u529f\u80fd"},"3. \u4e3a Chaos Mesh \u6dfb\u52a0\u529f\u80fd"),(0,o.kt)("p",null,"\u5728\u90e8\u7f72 Chaos Mesh \u65f6\u9047\u89c1\u4e00\u4e9b\u6682\u4e0d\u652f\u6301\u7684\u529f\u80fd\uff0c\u5305\u62ec\u7f51\u7edc\u5ef6\u8fdf\u7684\u76ee\u6807\u4e0d\u652f\u6301\u9009\u62e9 service\uff0c\u7f51\u7edc\u6df7\u6c8c\u65e0\u6cd5\u6307\u5b9a\u5bb9\u5668\u7aef\u53e3\u6ce8\u5165\u7b49\uff0cApache APISIX \u793e\u533a\u672a\u6765\u4e5f\u4f1a\u534f\u52a9 Chaos Mesh \u6dfb\u52a0\u76f8\u5173\u529f\u80fd\u3002\u5e0c\u671b\u5f00\u6e90\u793e\u533a\u90fd\u4f1a\u8d8a\u6765\u8d8a\u597d\u3002"))}h.isMDXComponent=!0},97425:function(e,t,n){t.Z=n.p+"assets/images/2021-06-16-1-ffb5085607d040e39a26c48739c6d581.png"},13545:function(e,t,n){t.Z=n.p+"assets/images/2021-06-16-2-7da0a0b158ae1eef191c24b2d93afb9c.png"}}]);