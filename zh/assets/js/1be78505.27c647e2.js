"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29514,24608],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28408:function(e,t,n){n.d(t,{N:function(){return d},Z:function(){return m}});var r=n(63366),a=n(87462),l=n(67294),o=n(86010),c=n(24973),i=n(941),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},m=function(e){return"h1"===e?d:(t=e,function(e){var n,a=e.id,d=(0,r.Z)(e,["id"]),m=(0,i.LU)().navbar.hideOnScroll;return a?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor","anchor__"+t,(n={},n[u]=m,n[s]=!m,n)),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},82238:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),l=n(67294),o=n(99105),c=n(36742),i=n(16213),s=n(28408),u=n(86010),d=n(941),m="details_1VDD";function p(e){var t=Object.assign({},e);return l.createElement(d.PO,(0,r.Z)({},t,{className:(0,u.Z)("alert alert--info",m,t.className)}))}var f={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,a.Z)(r,["mdxType","originalType"]));return l.createElement(e.props.originalType,o)}return e}(e)}));return l.createElement(o.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(i.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(i.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(p,(0,r.Z)({},e,{summary:n}),a)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},24608:function(e,t,n){n.r(t);var r=n(67294),a=n(46254),l=n(24973);t.default=function(){return r.createElement(a.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},14789:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var r=n(67294),a=n(3905),l=n(46291),o=n(46254),c=n(86010),i=n(941),s=n(93783),u=n(77898),d=n(55537),m=n(87462),p=function(e){return r.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(24973),h=n(63366),b=n(36742),v=n(13919),E=n(18617),g="menuLinkText_1J2g",y=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},k=(0,r.memo)((function(e){var t=e.items,n=(0,h.Z)(e,["items"]);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(_,(0,m.Z)({key:t,item:e},n))})))}));function _(e){var t=e.item,n=(0,h.Z)(e,["item"]);switch(t.type){case"category":return 0===t.items.length?null:r.createElement(Z,(0,m.Z)({item:t},n));case"link":default:return r.createElement(S,(0,m.Z)({item:t},n))}}function Z(e){var t,n=e.item,a=e.onItemClick,l=e.activePath,o=(0,h.Z)(e,["item","onItemClick","activePath"]),s=n.items,u=n.label,d=n.collapsible,p=y(n,l),f=(0,i.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),b=f.collapsed,v=f.setCollapsed,E=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,l=(0,i.D9)(t);(0,r.useEffect)((function(){t&&!l&&n&&a(!1)}),[t,l,n])}({isActive:p,collapsed:b,setCollapsed:v}),r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},r.createElement("a",(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[g]=!d,t)),onClick:d?function(e){e.preventDefault(),E()}:void 0,href:d?"#":void 0},o),u),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},r.createElement(k,{items:s,tabIndex:b?-1:0,onItemClick:a,activePath:l})))}function S(e){var t=e.item,n=e.onItemClick,a=e.activePath,l=(0,h.Z)(e,["item","onItemClick","activePath"]),o=t.href,s=t.label,u=y(t,a);return r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},r.createElement(b.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:o},(0,v.Z)(o)&&{onClick:n},l),(0,v.Z)(o)?s:r.createElement("span",null,s,r.createElement(E.Z,null))))}var I=n(59308),C="sidebar_3jCp",T="sidebarWithHideableNavbar_Uxjr",N="sidebarHidden_22GT",P="sidebarLogo_8bKs",A="menu_1DcY",x="menuWithAnnouncementBar_3IKd",w="collapseSidebarButton_3okl",O="collapseSidebarButtonIcon_1LB5",M="sidebarVersionSwitch_m-Df";function j(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",w),onClick:t},r.createElement(p,{className:O}))}function D(e){var t,n,a=e.path,l=e.sidebar,o=e.onCollapse,s=e.isHidden,m=e.docsPluginId,p=function(){var e=(0,i.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),f=(0,i.LU)(),h=f.navbar.hideOnScroll,b=f.hideableSidebar,v=(0,i.nT)().isClosed;return r.createElement("div",{className:(0,c.Z)(C,(t={},t[T]=h,t[N]=s,t))},h&&r.createElement(d.Z,{tabIndex:-1,className:P}),r.createElement(q,{docsPluginId:m}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",A,(n={},n[x]=!v&&p,n))},r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(k,{items:l,activePath:a}))),b&&r.createElement(j,{onClick:o}))}var L=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path,l=e.docsPluginId;return r.createElement(r.Fragment,null,r.createElement(q,{docsPluginId:l}),r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(k,{items:n,activePath:a,onItemClick:function(){return t()}})))};function B(e){return r.createElement(i.Cv,{component:L,props:e})}function F(e){return r.createElement("div",{className:M},"Version:",r.createElement(I.Z,{docsPluginId:e.docsPluginId,dropdownItemsBefore:[],dropdownItemsAfter:[],items:[]}))}var H=r.memo(D),R=r.memo(B),q=r.memo(F);function W(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(H,e),a&&r.createElement(R,e))}var X=n(82238),V=n(24608),U=n(5977),z="backToTopButton_35hR",Y="backToTopButtonShow_18ls";function G(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var J=function(){var e,t=(0,U.TH)(),n=G(),a=n.smoothScrollTop,l=n.cancelScrollToTop,o=(0,r.useState)(!1),i=o[0],s=o[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var r=n<t.scrollY;if(r||l(),n<300)s(!1);else if(r){var a=document.documentElement.scrollHeight;n+window.innerHeight<a&&s(!0)}else s(!1)}}),[t]),r.createElement("button",{className:(0,c.Z)("clean-btn",z,(e={},e[Y]=i,e)),type:"button",onClick:function(){return a()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},K={docPage:"docPage_3AUJ",docMainContainer:"docMainContainer_2AUC",docSidebarContainer:"docSidebarContainer_2LAn",docMainContainerEnhanced:"docMainContainerEnhanced_27Ec",docSidebarContainerHidden:"docSidebarContainerHidden_2lve",collapsedDocSidebar:"collapsedDocSidebar_23gX",expandSidebarButtonIcon:"expandSidebarButtonIcon_11nM",docItemWrapperEnhanced:"docItemWrapperEnhanced_2WAn"},Q=n(99105);function $(e){var t,n,l,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,m=u.pluginId,h=u.version,b=s.sidebar,v=b?u.docsSidebars[b]:void 0,E=(0,r.useState)(!1),g=E[0],y=E[1],k=(0,r.useState)(!1),_=k[0],Z=k[1];(0,r.useEffect)((function(){switch(document.querySelector(".react-toggle").style.display="block",s.path.split("/")[2]||""){case"general":document.querySelectorAll(".navbar__link")[0].innerText="General";break;case"apisix":document.querySelectorAll(".navbar__link")[0].innerText="Apache APISIX\xae";break;case"dashboard":document.querySelectorAll(".navbar__link")[0].innerText="Apache APISIX\xae Dashboard";break;case"ingress-controller":document.querySelectorAll(".navbar__link")[0].innerText="Apache APISIX\xae Ingress Controller";break;case"helm-chart":document.querySelectorAll(".navbar__link")[0].innerText="Apache APISIX\xae Helm Chart";break;case"docker":document.querySelectorAll(".navbar__link")[0].innerText="Apache APISIX\xae Docker";break;case"java-plugin-runner":document.querySelectorAll(".navbar__link")[0].innerText="Apache APISIX\xae Java Plugin Runner";break;case"go-plugin-runner":document.querySelectorAll(".navbar__link")[0].innerText="Apache APISIX\xae Go Plugin Runner"}return function(){document.querySelector(".react-toggle").style.display="none"}}),[]);var S=(0,r.useCallback)((function(){_&&Z(!1),y(!g)}),[_]);return r.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(m,h)}},r.createElement("div",{className:K.docPage},r.createElement(J,null),v&&r.createElement("aside",{className:(0,c.Z)(K.docSidebarContainer,(t={},t[K.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(K.docSidebarContainer)&&g&&Z(!0)}},r.createElement(W,{key:b,sidebar:v,path:s.path,onCollapse:S,isHidden:_,docsPluginId:m}),_&&r.createElement("div",{className:K.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},r.createElement(p,{className:K.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(K.docMainContainer,(n={},n[K.docMainContainerEnhanced]=g||!v,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",K.docItemWrapper,(l={},l[K.docItemWrapperEnhanced]=g,l))},r.createElement(a.Zo,{components:X.Z},d)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,U.LX)(a.pathname,e)}));return o?r.createElement(r.Fragment,null,r.createElement(Q.Z,null,r.createElement("html",{className:n.className})),r.createElement($,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):r.createElement(V.default,e)}}}]);