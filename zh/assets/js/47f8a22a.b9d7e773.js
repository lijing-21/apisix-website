(window.webpackJsonp=window.webpackJsonp||[]).push([[20,34],{137:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(l){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),i};e.exports=r,e.exports.default=r},138:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},139:function(e,t,n){"use strict";var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createElement("path",{fill:"currentColor",d:"M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416z"});t.a=function(e){var t=e.title,n=e.titleId,l=o(e,["title","titleId"]);return r.createElement("svg",a({"aria-hidden":"true","data-prefix":"fas","data-icon":"triangle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"triangle_svg__svg-inline--fa triangle_svg__fa-triangle triangle_svg__fa-w-18 triangle_svg__fa-7x","aria-labelledby":n},l),t?r.createElement("title",{id:n},t):null,i)}},140:function(e,t,n){"use strict";var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"});t.a=function(e){var t=e.title,n=e.titleId,l=o(e,["title","titleId"]);return r.createElement("svg",a({"aria-hidden":"true","data-prefix":"fas","data-icon":"square",className:"square_svg__svg-inline--fa square_svg__fa-square square_svg__fa-w-14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","aria-labelledby":n},l),t?r.createElement("title",{id:n},t):null,i)}},141:function(e,t,n){"use strict";var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createElement("path",{fill:"currentColor",d:"M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192z"});t.a=function(e){var t=e.title,n=e.titleId,l=o(e,["title","titleId"]);return r.createElement("svg",a({"aria-hidden":"true","data-prefix":"fas","data-icon":"hexagon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"hexagon_svg__svg-inline--fa hexagon_svg__fa-hexagon hexagon_svg__fa-w-18 hexagon_svg__fa-7x","aria-labelledby":n},l),t?r.createElement("title",{id:n},t):null,i)}},142:function(e,t,n){"use strict";var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"});t.a=function(e){var t=e.title,n=e.titleId,l=o(e,["title","titleId"]);return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-labelledby":n},l),t?r.createElement("title",{id:n},t):null,i)}},143:function(e,t,n){"use strict";var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"});t.a=function(e){var t=e.title,n=e.titleId,l=o(e,["title","titleId"]);return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-labelledby":n},l),t?r.createElement("title",{id:n},t):null,i)}},144:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),i=n(127),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?p({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=p({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?p({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,l=[],s=[l];i>-1;){for(;(o=r[i]++)<a[i];){var c=void 0,p=t[i],g=n[i][o];if("string"==typeof g?(p=i>0?p:["plain"],c=g):(p=m(p,g.type),g.alias&&(p=m(p,g.alias)),c=g.content),"string"==typeof c){var f=c.split(u),h=f.length;l.push({types:p,content:f[0]});for(var y=1;y<h;y++)d(l),s.push(l=[]),l.push({types:p,content:f[y]})}else i++,t.push(p),n.push(c),r.push(0),a.push(c.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return d(l),s}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),y=n(137),v=n.n(y),b=n(138),w=n.n(b),x={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(135),O=n(126),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||x,r=e.darkTheme||n;return t?r:n},E=n(55),_=n.n(E),P=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},I=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,c=Object(O.useThemeConfig)().prism,p=Object(a.useState)(!1),u=p[0],d=p[1],m=Object(a.useState)(!1),g=m[0],f=m[1];Object(a.useEffect)((function(){f(!0)}),[]);var y=Object(a.useRef)(null),b=[],x="",j=k(),E=Array.isArray(t)?t.join(""):t;if(l&&P.test(l)){var S=l.match(P)[1];b=w()(S).filter((function(e){return e>0}))}l&&I.test(l)&&(x=l.match(I)[1]);var N=n&&n.replace(/language-/,"");!N&&c.defaultLanguage&&(N=c.defaultLanguage);var L=E.replace(/\n$/,"");if(0===b.length&&void 0!==N){for(var T,D="",z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(N),B=E.replace(/\n$/,"").split("\n"),A=0;A<B.length;){var G=A+1,H=B[A].match(z);if(null!==H){switch(H.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=G+",";break;case"highlight-start":T=G;break;case"highlight-end":D+=T+"-"+(G-1)+","}B.splice(A,1)}else A+=1}b=w()(D),L=B.join("\n")}var R=function(){v()(L),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(h,Object(r.a)({},s,{key:String(g),theme:j,code:L,language:N}),(function(e){var t,n=e.className,a=e.style,l=e.tokens,s=e.getLineProps,c=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,x&&o.a.createElement("div",{style:a,className:_.a.codeBlockTitle},x),o.a.createElement("div",{className:_.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,_.a.codeBlock,"thin-scrollbar",(t={},t[_.a.codeBlockWithTitle]=x,t))},o.a.createElement("div",{className:_.a.codeBlockLines,style:a},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},c({token:e,key:t})))})))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(_.a.copyButton),onClick:R},u?"Copied":"Copy")))}))}},56:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(134),i=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(r.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))};function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"});var p=function(e){var t=e.title,n=e.titleId,a=s(e,["title","titleId"]);return r.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,c)},u=n(142),d=n(143);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"});var h=function(e){var t=e.title,n=e.titleId,a=g(e,["title","titleId"]);return r.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,f)},y=n(139),v=n(140),b=n(141),w=function(e){var t=Object(r.useRef)(),n=e.isDropdownOpen,o=e.setIsDropdownOpen;return i(t,(function(){n&&o(!1)})),a.a.createElement(N,{ref:t,open:n},e.children)},x=function(e){return fetch("https://api.github.com/repos/"+e,{headers:{"content-type":"application/json",Accept:"application / vnd.github.v3 + json"}}).then((function(e){return e.json()}))},j=o.a.div.withConfig({displayName:"ProjectCard__Card",componentId:"sc-12v8c3p-0"})(["border-radius:0.75rem;border:1px solid #eee;box-shadow:0 1px 2px 0 rgba(0,0,0,0.03);padding:2rem;display:flex;justify-content:space-between;margin-bottom:3rem;@media (max-width:600px){flex-direction:column;padding:1rem;}"]),O=o.a.div.withConfig({displayName:"ProjectCard__LeftSide",componentId:"sc-12v8c3p-1"})(["flex-shrink:2;padding-left:0.6rem;"]),k=o.a.a.withConfig({displayName:"ProjectCard__Title",componentId:"sc-12v8c3p-2"})(["font-size:2.4rem;line-height:2.4rem;margin-bottom:1rem;font-weight:bold;display:block;cursor:pointer;@media (max-width:600px){margin-top:0px;font-size:1.6rem;}svg{transition:all 0.6s;}&:hover{color:inherit;text-decoration:none;svg{transform:rotate(360deg);}}"]),E=o.a.div.withConfig({displayName:"ProjectCard__Description",componentId:"sc-12v8c3p-3"})(["color:#374151;font-size:1.2rem;margin-top:0px;@media (max-width:600px){margin-top:6px;}"]),_=o.a.span.withConfig({displayName:"ProjectCard__ShapeBeforeTitle",componentId:"sc-12v8c3p-4"})(["margin-right:12px;& svg{height:1.75rem;color:",";}@media (max-width:600px){margin-right:8px;& svg{height:1.3rem;}}"],(function(e){return e.color||"var(--ifm-color-primary)"})),P=o.a.div.withConfig({displayName:"ProjectCard__LeftSideLinks",componentId:"sc-12v8c3p-5"})(["display:inline-flex;font-size:1rem;color:#4b5563;margin-top:24px;& svg{height:1rem;margin-right:4px;}"]),C=o.a.a.withConfig({displayName:"ProjectCard__LeftSideLink",componentId:"sc-12v8c3p-6"})(["display:flex;align-items:center;margin-right:18px;border-radius:6px;cursor:pointer;transition:all 0.3s;color:inherit;&:hover{color:#111827;text-decoration:none;}"]),I=o.a.div.withConfig({displayName:"ProjectCard__RightSide",componentId:"sc-12v8c3p-7"})(["padding-left:2rem;display:flex;flex-direction:column;justify-content:space-between;position:relative;flex-shrink:0;@media (max-width:600px){margin-top:1rem;padding-top:1rem;border-top:1px solid #eee;padding-left:0;}"]),S=o.a.button.withConfig({displayName:"ProjectCard__Button",componentId:"sc-12v8c3p-8"})(["padding:12px 18px;font-size:18px;font-weight:600;border-radius:0.5rem;transition:all 0.3s;background:",";color:white;border:none;box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:center;cursor:pointer;&:hover{filter:brightness(105%);}svg{height:22px;margin-right:4px;padding-bottom:2px;}"],(function(e){return e.background||"var(--ifm-color-primary)"})),N=o.a.div.withConfig({displayName:"ProjectCard__StyledDropdown",componentId:"sc-12v8c3p-9"})(["right:0;position:absolute;margin-top:0.25rem;background:#fff;border-radius:0.5rem;border:1px solid #eee;z-index:100;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);visibility:",";"],(function(e){return e.open?"visitable":"hidden"})),L=o.a.a.withConfig({displayName:"ProjectCard__DropdownItem",componentId:"sc-12v8c3p-10"})(["margin:0.4rem;padding:0.2rem 1rem 0.2rem 0.5rem;border-radius:5px;cursor:pointer;font-weight:500;display:block;color:inherit;&:hover{color:inherit;background:var(--color-secondary-bg);text-decoration:none;}"]),T=o.a.div.withConfig({displayName:"ProjectCard__VersionInfo",componentId:"sc-12v8c3p-11"})(["color:#6b7280;text-align:right;font-size:0.9rem;span{color:#374151;font-weight:500;}@media (max-width:600px){margin-bottom:1rem;text-align:left;}"]);t.default=function(e){var t=Object(r.useState)(!1),n=t[0],o=t[1],i=Object(r.useState)({stars:0,issues:0}),l=i[0],s=i[1],c=e.name,m=e.nameInParamCase,g=e.description,f=e.shape,N=e.color,D=e.version,z=e.releaseDate,B=e.githubRepo,A="triangle"===f?a.a.createElement(y.a,null):"square"===f?a.a.createElement(v.a,null):a.a.createElement(b.a,null),G="apisix"+("apisix"!==m?"/"+m:"")+"/"+D+"/apache-"+("apisix"!==m?"apisix-"+m:"apisix")+"-"+D+"-src";return Object(r.useEffect)((function(){x(B).then((function(e){s({stars:e.stargazers_count,issues:e.open_issues_count})}))}),[]),a.a.createElement(j,null,a.a.createElement(O,null,a.a.createElement(k,{href:"https://github.com/"+B,target:"_blank"},a.a.createElement(_,{color:N},A),c),a.a.createElement(E,null,g),a.a.createElement(P,null,a.a.createElement(C,{href:"https://github.com/"+B,target:"_blank",title:"Stars"},a.a.createElement(u.a,null)," ",l.stars),a.a.createElement(C,{href:"https://github.com/"+B+"/issues",target:"_blank",title:"Issues"},a.a.createElement(p,null)," ",l.issues),a.a.createElement(C,{href:"https://github.com/"+B+"/blob/master/CHANGELOG.md",target:"_blank"},a.a.createElement(d.a,null)," CHANGELOG"))),a.a.createElement(I,null,a.a.createElement(T,null,"Latest Version \xb7 ",a.a.createElement("span",null,D),a.a.createElement("br",null),"Release Date \xb7 ",a.a.createElement("span",null,z)),a.a.createElement("div",null,a.a.createElement(S,{onClick:function(){return o(!n)},background:N},a.a.createElement(h,null)," Download"),a.a.createElement(w,{isDropdownOpen:n,setIsDropdownOpen:o},a.a.createElement(L,{href:"https://www.apache.org/dyn/closer.cgi/"+G+".tgz",target:"_blank"},"Source"),a.a.createElement(L,{href:"https://downloads.apache.org/"+G+".tgz.asc",target:"_blank"},"ASC"),a.a.createElement(L,{href:"https://downloads.apache.org/"+G+".tgz.sha512",target:"_blank"},"SHA512")))))}},87:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),o=n.n(a),i=n(134),l=n(129),s=n(144),c=n(56),p=n(17),u=i.a.div.withConfig({displayName:"downloads__DownloadsPage",componentId:"hda3kd-0"})(["max-width:var(--ifm-container-width);margin:0 auto;padding:2rem var(--ifm-spacing-horizontal);width:100%;"]),d=i.a.h1.withConfig({displayName:"downloads__PageTitle",componentId:"hda3kd-1"})(["margin-top:2rem;font-size:3rem;font-weight:800;text-transform:uppercase;"]),m=i.a.div.withConfig({displayName:"downloads__PageSubtitle",componentId:"hda3kd-2"})(["margin-bottom:4rem;"]),g=i.a.div.withConfig({displayName:"downloads__Description",componentId:"hda3kd-3"})(["margin-top:6rem;h2{margin-top:4rem;margin-bottom:0.8rem;}"]),f=Object(i.a)(s.a).withConfig({displayName:"downloads__StyledCodeBlock",componentId:"hda3kd-4"})(["margin-top:1rem;"]);t.default=function(e){var t=Object(p.default)().siteConfig;if(!(t.customFields.downloads||[]).length)return null;var n=t.customFields.downloads.map((function(e){return o.a.createElement(c.default,Object(r.a)({key:e.name},e))}));return o.a.createElement(l.a,null,o.a.createElement(u,null,o.a.createElement(d,null,"Downloads"),o.a.createElement(m,null,"We love open source."),n,o.a.createElement(g,null,o.a.createElement("h2",null,"History Versions"),o.a.createElement("div",{className:"markdown"},"Find all APISIX releases in the\xa0",o.a.createElement("a",{href:"https://archive.apache.org/dist/apisix/",target:"_blank"},"Archive repository"),".",o.a.createElement("br",null),o.a.createElement("a",{href:"https://archive.apache.org/dist/incubator/apisix/",target:"_blank"},"Incubating Archive repository"),"\xa0hosts older releases when APISIX was an incubator project."),o.a.createElement("h2",null,"Verify the releases"),o.a.createElement("div",{className:"markdown"},o.a.createElement("a",{href:"https://downloads.apache.org/apisix/KEYS",target:"_blank"},"Get PGP signatures KEYS"),o.a.createElement("br",null),"It is essential that you verify the integrity of the downloaded files using the PGP or SHA signatures. The PGP signatures can be verified using GPG or PGP. Please download the KEYS as well as the asc signature files for relevant distribution. It is recommended to get these files from the main distribution directory and not from the mirrors.",o.a.createElement("br",null),o.a.createElement(f,null,"gpg -i KEYS\n          \n# or\npgpk -a KEYS\n\n# or\npgp -ka KEYS"),o.a.createElement("br",null),"To verify the binaries/sources you can download the relevant asc files for it from main distribution directory and follow the below guide.",o.a.createElement(f,null,"gpg --verify apache-apisix-********.asc apache-apisix-********\n\n# or\npgpv apache-apisix-********.asc\n\n# or\npgp apache-apisix-********.asc")))))}}}]);