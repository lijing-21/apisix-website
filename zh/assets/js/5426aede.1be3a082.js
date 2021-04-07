(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(255)),o={title:"Traffic Split in Apache APISIX Ingress Controller",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?s=460&u=f48ef50c5621a1616a3ede50221547e34270e061&v=4"},s={permalink:"/zh/blog/2021/03/27/traffic-split-in-apache-apisix-ingress-controller",source:"@site/blog/2021-03-27-traffic-split-in-apache-apisix-ingress-controller.md",description:"Traffic Split is a feature that splits and deliveries traffic to multiple backend services. Solutions like API Gateway (e.g. Apache APISIX and Traefik), Service Mesh (e.g. Istio and Linkerd) are capable of doing traffic splitting and implement functionalities like Canary Release and Blue-Green Deployment.",date:"2021-03-27T00:00:00.000Z",tags:[],title:"Traffic Split in Apache APISIX Ingress Controller",readingTime:4.515,truncated:!1,nextItem:{title:"Get Front-End Test Coverage with Cypress",permalink:"/zh/blog/2021/03/02/get-front-end-test-coverage-with-cypress"}},c=[{value:"Ingress Nginx",id:"ingress-nginx",children:[]},{value:"Kong",id:"kong",children:[]},{value:"Apache APISIX",id:"apache-apisix",children:[{value:"Weight-Based",id:"weight-based",children:[]},{value:"Rules-Based",id:"rules-based",children:[]}]},{value:"Summary",id:"summary",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Traffic Split is a feature that splits and deliveries traffic to multiple backend services. Solutions like API Gateway (e.g. ",Object(i.b)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," and ",Object(i.b)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),"), Service Mesh (e.g. ",Object(i.b)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," and ",Object(i.b)("a",{parentName:"p",href:"https://linkerd.io/"},"Linkerd"),") are capable of doing traffic splitting and implement functionalities like ",Object(i.b)("a",{parentName:"p",href:"https://blog.getambassador.io/cloud-native-patterns-canary-release-1cb8f82d371a"},"Canary Release")," and ",Object(i.b)("a",{parentName:"p",href:"https://martinfowler.com/bliki/BlueGreenDeployment.html"},"Blue-Green Deployment"),"."),Object(i.b)("p",null,"Traffic split is also a key feature in ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Ingress Controller"),". As the ingress layer in the ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kuberentes")," cluster, it\u2019s desired to reduce the risk due to release a new version of the application by setting up some traffic split rules in the ingress controller, so only a controllable amount of traffic will be routed to newly released instances. In this article, we\u2019ll introduce the traffic split (also called canary release) in ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"Ingress Nginx")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Kong/kubernetes-ingress-controller"},"Kong Ingress Controller"),", and ultimately we explain the traffic split in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"Apache APISIX Ingress Controller"),"."),Object(i.b)("p",null,'(PS: For the sake of more concise descriptions, we use the term "canary app" to describe the backend service which routed after the canary rules hit, and the term "stable app" to describe the backend service which routed due to the canary rules miss, for instance, the canary and stable app are "foo-canary" and "foo" perspectively in the following diagram.)'),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/E_qq-RFIcVBbTFsI8-QTNH7Io5vOXapdQUaAzKE2mYlyvtXUlZEoSd8aVMHAppARmXx9_wgHsgP1CWK_R74MfPV58dLQ71kEcU57DooHKz2LuKb6D6TW9B2_C8rLsm8wHTk2_zZt",alt:"1.png"})),Object(i.b)("h2",{id:"ingress-nginx"},"Ingress Nginx"),Object(i.b)("p",null,'Ingress Nginx supports the canary release, it\u2019s controlled by an annotation "nginx.ingress.kubernetes.io/canary", and it supports several annotations to customize this feature.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nginx.ingress.kubernetes.io/canary-by-header")),Object(i.b)("p",null,'The destination is decided by whether the value of header (indicated by nginx.ingress.kubernetes.io/canary-by-header), the Canary app will be routed if the value is "always", the otherwise stable app will be routed (value of the header is "never").'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nginx.ingress.kubernetes.io/canary-by-header-value")),Object(i.b)("p",null,'This annotation extends nginx.ingress.kubernetes.io/canary-by-header, now the value of the header no longer needs to be "always" or "never".'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nginx.ingress.kubernetes.io/canary-by-header-pattern")),Object(i.b)("p",null,"Similar to nginx.ingress.kubernetes.io/canary-by-header, but the value is a ",Object(i.b)("a",{parentName:"p",href:"https://www.pcre.org/"},"PCRE")," compatible regular expression."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nginx.ingress.kubernetes.io/canary-by-cookie")),Object(i.b)("p",null,"Use data field in Cookie header to decide the backend service."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nginx.ingress.kubernetes.io/canary-weight")),Object(i.b)("p",null,"Assign weight value between 0 and 100, traffic will be delivered according to this weight, a 0 weight means all traffic will be routed to the canary app and 100 weight will route all traffic to the stable app."),Object(i.b)("p",null,'The following YAML snippet proxies requests whose URI path is led by "/get" and the User-Agent matches with the ".',Object(i.b)("em",{parentName:"p"},"Mozilla."),'" pattern to the canary app "foo-canary".'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n      kubernetes.io/ingress.class: nginx\n      nginx.ingress.kubernetes.io/canary: "true"\n      nginx.ingress.kubernetes.io/canary-by-header: "User-Agent"\n      nginx.ingress.kubernetes.io/canary-by-header-pattern:\n".*Mozilla.*"\n  name: ingress-v1beta1\n')),Object(i.b)("h2",{id:"kong"},"Kong"),Object(i.b)("p",null,"The Kong Gateway has a ",Object(i.b)("a",{parentName:"p",href:"https://docs.konghq.com/hub/kong-inc/canary/0.32-x.html"},"canary release plugin")," and exposes this plugin to its ingress controller by ",Object(i.b)("a",{parentName:"p",href:"https://docs.konghq.com/hub/"},"KongPlugin"),' resource. Administrators/Users need to create a KongPlugin object and fill the canary release rule, injecting an annotation "konghq.com/plugins" to the target ',Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kuberentes Service"),". Or you can create a ",Object(i.b)("a",{parentName:"p",href:"https://docs.konghq.com/kubernetes-ingress-controller/1.1.x/guides/using-kongclusterplugin-resource/"},"KongClusterPlugin")," object to let this canary rule effective in the whole cluster."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"apiVersion: configuration.konghq.com/v1\nkind: KongPlugin\nmetadata:\n  name: foo-canary\nconfig:\n  percentage: 30\n  upstream_host: foo.com\n  upstream_fallback: false\n  upstream_port: 80\nplugin: canary\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: foo-canary\n  labels:\n    app: foo\n  annotations:\n    konghq.com/plugins: foo-canary\nspec:\n  ports:\n  - port: 80\n    targetPort: 80\n    protocol: TCP\n    name: http\n  selector:\n      app: foo\n      canary: true\n")),Object(i.b)("p",null,'The above case marks the service "foo-canary" as "canary", and creates a canary release rule to proxy 30% traffic to this service.'),Object(i.b)("h2",{id:"apache-apisix"},"Apache APISIX"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," splits traffic with custom rules by its ",Object(i.b)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/traffic-split"},"traffic-split")," plugin, and Apache APISIX Ingress Controller implements the traffic split feature to ",Object(i.b)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/concepts/apisix_route"},"ApisixRoute")," (as the first-class support, without relying on annotations) by this plugin and the flexible route match abilities in ApisixRoute."),Object(i.b)("h3",{id:"weight-based"},"Weight-Based"),Object(i.b)("p",null,"By configuring multiple Kubernetes Services, the weight-based canary rule can be applied like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: foo-route\nspec:\n  http:\n  - name: rule1\n    match:\n      hosts:\n      - foo.org\n      paths:\n      - /get*\n    backends:\n    - serviceName: foo-canary\n      servicePort: 80\n      weight: 10\n    - serviceName: foo\n      servicePort: 80\n      weight: 5\n")),Object(i.b)("p",null,'The above case puts \u2154 requests whose Host is "foo.org" and with URI path prefix "/get" to "foo-canary" service and others to foo.'),Object(i.b)("p",null,"The weight for canary service can be tiny for the small scale verification, and enlarge the weight by modifying the ApisixRoute until all traffic routed to the canary service, finishing the release totally."),Object(i.b)("h3",{id:"rules-based"},"Rules-Based"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/docs/en/latest/concepts/apisix_route.md#advanced-route-features"},"Exprs")," field in ApisixRoute allows users to configure custom route match rules, on the other hand, multiple route rules can be grouped into a single ApisixRoute object, so there is a seamless way to implement the rules-based traffic split."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: foo-route\nspec:\n  http:\n  - name: rule1\n    priority: 1\n    match:\n      hosts:\n      - foo.org\n      paths:\n      - /get*\n    backends:\n    - serviceName: foo\n      servicePort: 80\n  - name: rule2\n    priority: 2\n    match:\n      hosts:\n      - foo.org\n      paths:\n      - /get*\n      exprs:\n      - subject:\n          scope: Query\n          name: id\n        op: In\n        set:\n        - "3"\n        - "13"\n        - "23"\n        - "33"\n    backends:\n    - serviceName: foo-canary\n      servicePort: 80\n')),Object(i.b)("p",null,'Requests whose Host is "foo.org", URI path prefix is "/get" will be separated into two parts:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The id parameter which value is 3, 13, 23 or 33 will hit rule2, and forward to foo-canary;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Others will hit rule1 and route to foo."))),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("p",null,"Traffic split (Canary release) in Ingress Nginx supports weight-based scheme and header rule-based one, but it relies on annotations, which semantic is weak; The Kong way only supports to configure canary release by weight, the scenarios are somewhat narrow, and the configuring is complicated (you need to configure several resources); In contrast, traffic split in Apache APISIX Ingress Controller is flexible and easy to configure, it works well for both the weight-based and rule-based traffic split scheme."))}p.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,g=u["".concat(o,".").concat(h)]||u[h]||b[h]||i;return n?r.a.createElement(g,s(s({ref:t},l),{},{components:n})):r.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);