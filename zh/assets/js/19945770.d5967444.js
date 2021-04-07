(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{255:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(255)),i={id:"integrate-with-project-docs",title:"Integrate with Project documentations"},c={unversionedId:"integrate-with-project-docs",id:"integrate-with-project-docs",isDocsHomePage:!1,title:"Integrate with Project documentations",description:"Directory Structure",source:"@site/docs/general/integrate-with-project-docs.md",slug:"/integrate-with-project-docs",permalink:"/zh/docs/general/integrate-with-project-docs",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/integrate-with-project-docs.md",version:"current",lastUpdatedBy:"Ayush das",lastUpdatedAt:1617761513,sidebar:"docs",previous:{title:"Release Guide",permalink:"/zh/docs/general/release-guide"}},s=[{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Configuration file",id:"configuration-file",children:[]},{value:"Markdown formatting restrictions",id:"markdown-formatting-restrictions",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"directory-structure"},"Directory Structure"),Object(o.b)("p",null,"Put all Markdown files into the latest directory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/docs\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u251c\u2500\u2500 xxxxx.png\n\u2502   \u2514\u2500\u2500 other\n\u2502       \u2514\u2500\u2500 xxxxx.xxx\n\u251c\u2500\u2500 en\n\u2502   \u2514\u2500\u2500 latest\n\u2502       \u251c\u2500\u2500 doc1.md\n\u2502       \u251c\u2500\u2500 folder\n\u2502       \u2502   \u2514\u2500\u2500 doc2.md\n\u2502       \u2502       \u2514\u2500\u2500 folder2\n\u2502       \u2502           \u2514\u2500\u2500 doc3.md\n\u2502       \u2514\u2500\u2500 config.json\n\u251c\u2500\u2500 es\n\u2502   \u2514\u2500\u2500 latest\n\u2502       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 zh\n    \u2514\u2500\u2500 latest\n        \u2514\u2500\u2500 ...\n")),Object(o.b)("h2",{id:"configuration-file"},"Configuration file"),Object(o.b)("p",null,"This file is located in ",Object(o.b)("inlineCode",{parentName:"p"},"/docs/<locale>/latest/config.json"),", where locale is locale codes, please refer to ",Object(o.b)("a",{parentName:"p",href:"https://www.science.co.il/language/Locale-codes.php"},"https://www.science.co.il/language/Locale-codes.php"),", locale is all lowercase. Don't forget to remove the comment after copying JSON."),Object(o.b)("p",null,"More information about sidebar can be found at ",Object(o.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/next/sidebar"},"https://v2.docusaurus.io/docs/next/sidebar")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "version": 2.3,\n  "sidebar": [\n    // The left sidebar of the APISIX website\n    {\n      "type": "doc",\n      "id": "doc2" // id is the filename of the md file\n    },\n    {\n      "type": "category", // category is a collapsed column, nestable\n      "label": "folder",\n      "items": [\n        {\n          "type": "doc",\n          "id": "folder/doc2"\n        },\n        {\n          "type": "category",\n          "label": "folder2",\n          "items": [\n            "folder2/doc3"\n          ]\n        }\n      ]\n    },\n    {\n      "type": "link",\n      "label": "CHANGELOG",\n      "href": "https://github.com/apache/apisix/blob/master/CHANGELOG"\n    }\n  ]\n}\n')),Object(o.b)("h2",{id:"markdown-formatting-restrictions"},"Markdown formatting restrictions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use relative paths within Markdown files ",Object(o.b)("inlineCode",{parentName:"p"},"../xxx/xxx"),", not absolute paths ",Object(o.b)("inlineCode",{parentName:"p"},"/docs/en/xxx/xxx"),". If you want to refer to files outside the docs directory, please use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-xxx/blob/master/xxx/xxx.xxx"},"https://github.com/apache/apisix-xxx/blob/master/xxx/xxx.xxx"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You need to use Markdown syntax when introducing images, i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"![image name](./assets/xxxx.png)"),". Images cannot be introduced using HTML tags, i.e. ",Object(o.b)("inlineCode",{parentName:"p"},'<img src=". /assets/xxxx.png" />'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If the Markdown file contains HTML tags within it, be sure to make sure the tags are closed. For example ",Object(o.b)("inlineCode",{parentName:"p"},"<br>")," must be written as ",Object(o.b)("inlineCode",{parentName:"p"},"<br/>")))))}p.isMDXComponent=!0}}]);