webpackJsonp([7],{14:function(e,t){},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=(n.n(o),n(15)),s=(n.n(i),n(1)),r=n(5),l=n.n(r),a=n(272);s.default.config.productionTip=!1,new s.default({router:a.a,render:function(e){return e(l.a)}}).$mount("#app")},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(273),i=n.n(o),s=n(34),r=[{path:"",component:i.a},s.a];(function(e){var o=n(1),i=n(17);o.default.use(i.a),t.a=new i.a({mode:"history",base:e,scrollBehavior:function(){return{y:0}},routes:r})}).call(t,"/")},273:function(e,t,n){function o(e){n(274),n(275)}var i=n(0)(n(276),n(310),o,null,null);e.exports=i.exports},274:function(e,t){},275:function(e,t){},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(277),i=n.n(o),s=n(282),r=n.n(s),l=n(286),a=n.n(l),c=n(294),u=n.n(c);n(297);t.default={data:function(){return{crown:null,demo:null}},components:{Crown:i.a,Hero:r.a,Demo:a.a,Withlove:u.a},methods:{init:function(){this.sr(),window.addEventListener("scroll",this._throttle(this.scroll,300),!1)},sr:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e={viewFactor:.15,duration:800,distance:"0px",scale:.8};window.sr=window.ScrollReveal(e);var t={origin:"top",distance:"24px",duration:1500,scale:1.05},n={origin:"bottom",distance:"64px",duration:900,delay:1500,scale:1},o={reset:!0,viewOffset:{top:64}};sr.reveal(".demo .block",o),sr.reveal(".hero",t),sr.reveal(".intro",n),sr.reveal(".seq-1",o,200)}),_throttle:function(e,t){var n=null;return function(){var o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}},scroll:function(){return window.pageYOffset>=this.demo.offsetTop+64?this.crown.classList.add("visible"):this.crown.classList.contains("visible")?this.crown.classList.remove("visible"):void 0}},mounted:function(){this.crown=document.querySelector(".crown"),this.demo=document.querySelector(".demo"),this.init()}}},277:function(e,t,n){function o(e){n(278)}var i=n(0)(n(279),n(281),o,null,null);e.exports=i.exports},278:function(e,t){},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),i=n.n(o);t.default={components:{Logo:i.a}}},280:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"logo",attrs:{width:"96px",height:"64px",viewBox:"0 0 48 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("rect",{attrs:{fill:"#FFCB36",x:"3",y:"0",width:"6",height:"18",rx:"1.5"}}),e._v(" "),n("rect",{attrs:{fill:"#008597",x:"27",y:"0",width:"6",height:"32",rx:"1.5"}}),e._v(" "),n("rect",{attrs:{fill:"#2EAD6D",x:"15",y:"0",width:"6",height:"8",rx:"1.5"}}),e._v(" "),n("rect",{attrs:{fill:"#E31D65",x:"15",y:"14",width:"6",height:"18",rx:"1.5"}}),e._v(" "),n("rect",{attrs:{fill:"#E31D65",x:"39",y:"0",width:"6",height:"18",rx:"1.5"}}),e._v(" "),n("rect",{attrs:{fill:"#FF7C35",x:"3",y:"24",width:"6",height:"8",rx:"1.5"}}),e._v(" "),n("rect",{attrs:{fill:"#5943AA",x:"39",y:"24",width:"6",height:"8",rx:"1.5"}})])])},staticRenderFns:[]}},281:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"crown"},[n("Logo"),e._v(" "),n("div",{staticClass:"title"},[e._v("ScrollReveal")])],1)},staticRenderFns:[]}},282:function(e,t,n){function o(e){n(283)}var i=n(0)(n(284),n(285),o,null,null);e.exports=i.exports},283:function(e,t){},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(97),i=n.n(o);t.default={components:{Logo:i.a}}},285:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero"},[n("Logo"),e._v(" "),n("h1",{staticClass:"title"},[e._v(" ScrollReveal")]),e._v(" "),n("p",{staticClass:"intro"},[e._v("Easy scroll animations for web and mobile browsers.")])],1)},staticRenderFns:[]}},286:function(e,t,n){function o(e){n(287)}var i=n(0)(n(288),n(293),o,null,null);e.exports=i.exports},287:function(e,t){},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=[{total:4,columns:[{class:"red",style:"flex: 1.5 1 0%;"},{class:"orange",style:"flex: 1.7 1 0%;"},{class:"purple",style:"flex: 1.3 1 0%;"},{class:"blue",style:"flex: 1 0 0px;"}]},{total:4,columns:[{class:"orange",style:"flex: 1.3 1 0%;"},{class:"purple",style:"flex: 1 0 0px;"},{class:"red",style:"flex: 1.6 1 0%;"},{class:"green",style:"flex: 0.8 1 0%;"}]},{total:4,columns:[{class:"yellow",style:"flex: 1.5 1 0%;"},{class:"blue",style:"flex: 2 1 0%;"},{class:"green",style:"flex: 1 0 0px;"},{class:"yellow",style:"flex: 1.7 1 0%;"}]},{total:3,columns:[{class:"green",style:"flex: 1.1 1 0%;"},{class:"yellow",style:"flex: 1.2 1 0%;"},{class:"orange",style:"flex: 1.1 1 0%;"}]},{total:4,columns:[{class:"blue",style:"flex: 1.2 1 0%;"},{class:"red",style:"flex: 1.1 1 0%;"},{class:"purple",style:"flex: 1 0 0px;"},{class:"red",style:"flex: 2 1 0%;"}]},{total:4,columns:[{class:"purple",style:"flex: 1 0 0px;"},{class:"yellow",style:"flex: 1.1 1 0%;"},{class:"orange",style:"flex: 1 0 0px;"},{class:"purple",style:"flex: 1.25 1 0%;"}]}],i=o,s=n(289),r=n.n(s);t.default={data:function(){return{res:i}},components:{Column:r.a}}},289:function(e,t,n){function o(e){n(290)}var i=n(0)(n(291),n(292),o,null,null);e.exports=i.exports},290:function(e,t){},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["columns"]}},292:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column"},e._l(e.columns,function(e,t){return n("div",{key:t,staticClass:"block",class:[{"seq-1":!t},e.class],style:e.style})}))},staticRenderFns:[]}},293:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},e._l(e.res,function(e,t){return n("Column",{key:t,attrs:{columns:e.columns}})}))},staticRenderFns:[]}},294:function(e,t,n){function o(e){n(295)}var i=n(0)(null,n(296),o,null,null);e.exports=i.exports},295:function(e,t){},296:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"withlove"},[n("span",{staticClass:"alpha"},[e._v("From the")]),e._v(" "),n("svg",{staticClass:"heart",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"92px",height:"72px",viewBox:"0 0 92 72","enable-background":"new 0 0 92 72","xml:space":"preserve"}},[n("g",[n("path",{attrs:{fill:"#010101",d:"M82.32,7.888c-8.359-7.671-21.91-7.671-30.271,0l-5.676,5.21l-5.678-5.21c-8.357-7.671-21.91-7.671-30.27,0 c-9.404,8.631-9.404,22.624,0,31.255l35.947,32.991L82.32,39.144C91.724,30.512,91.724,16.52,82.32,7.888z"}})])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"omega"},[e._v("of "),n("a",{attrs:{href:"/"}},[e._v("@jlmakes")])])}]}},297:function(e,t,n){"use strict";(function(e){var t=n(67),o=n.n(t),i=n(70),s=n.n(i);!function(){function t(e){return void 0===this||s()(this)!==t.prototype?new t(e):(C=this,C.version="3.3.4",C.tools=new R,C.isSupported()?(C.tools.extend(C.defaults,e||{}),C.defaults.container=i(C.defaults),C.store={elements:{},containers:[]},C.sequences={},C.history=[],C.uid=0,C.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),C)}function i(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(C.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return C.defaults.container}function r(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):C.tools.isNode(e)?[e]:C.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function l(){return++C.uid}function a(e,t,n){t.container&&(t.container=n),e.config?e.config=C.tools.extendClone(e.config,t):e.config=C.tools.extendClone(C.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function c(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=u(e,0),e.styles.transition.delayed=u(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",f(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",f(e)}function u(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function f(e){var t,n=e.config,o=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(o.initial+=" translate"+n.axis+"("+t+")",o.target+=" translate"+n.axis+"(0)"),n.scale&&(o.initial+=" scale("+n.scale+")",o.target+=" scale(1)"),n.rotate.x&&(o.initial+=" rotateX("+n.rotate.x+"deg)",o.target+=" rotateX(0)"),n.rotate.y&&(o.initial+=" rotateY("+n.rotate.y+"deg)",o.target+=" rotateY(0)"),n.rotate.z&&(o.initial+=" rotateZ("+n.rotate.z+"deg)",o.target+=" rotateZ(0)"),o.initial+="; opacity: "+n.opacity+";",o.target+="; opacity: "+e.styles.computed.opacity+";"}function d(e){var t=e.config.container;t&&-1===C.store.containers.indexOf(t)&&C.store.containers.push(e.config.container),C.store.elements[e.id]=e}function p(e,t,n){var o={target:e,config:t,interval:n};C.history.push(o)}function v(){if(C.isSupported()){w();for(var e=0;e<C.store.containers.length;e++)C.store.containers[e].addEventListener("scroll",m),C.store.containers[e].addEventListener("resize",m);C.initialized||(window.addEventListener("scroll",m),window.addEventListener("resize",m),C.initialized=!0)}return C}function m(){S(w)}function y(){var e,t,n,o;C.tools.forOwn(C.sequences,function(i){o=C.sequences[i],e=!1;for(var s=0;s<o.elemIds.length;s++)n=o.elemIds[s],t=C.store.elements[n],q(t)&&!e&&(e=!0);o.active=e})}function w(){var e,t;y(),C.tools.forOwn(C.store.elements,function(n){t=C.store.elements[n],e=b(t),x(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),h("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&g(t,e)):_(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),h("reset",t),t.revealing=!1)})}function g(e,t){var n=0,o=0,i=C.sequences[e.sequence.id];i.blocked=!0,t&&"onload"===e.config.useDelay&&(o=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){i.blocked=!1,e.sequence.timer=null,m()},Math.abs(i.interval)+o-n)}function h(e,t,n){var o=0,i=0,s="after";switch(e){case"reveal":i=t.config.duration,n&&(i+=t.config.delay),s+="Reveal";break;case"reset":i=t.config.duration,s+="Reset"}t.timer&&(o=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[s](t.domEl),t.timer=null},i-o)}function x(e){if(e.sequence){var t=C.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return q(e)&&!e.revealing&&!e.disabled}function b(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!C.initialized||"once"===t&&!e.seen}function _(e){if(e.sequence){return!C.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled}return!q(e)&&e.config.reset&&e.revealing&&!e.disabled}function E(e){return{width:e.clientWidth,height:e.clientHeight}}function O(e){if(e&&e!==window.document.documentElement){var t=k(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function k(e){var t=0,n=0,o=e.offsetHeight,i=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:o,width:i}}function q(e){var t=k(e.domEl),n=E(e.config.container),o=O(e.config.container),i=e.config.viewFactor,s=t.height,r=t.width,l=t.top,a=t.left,c=l+s,u=a+r;return function(){var t=l+s*i,f=a+r*i,d=c-s*i,p=u-r*i,v=o.y+e.config.viewOffset.top,m=o.x+e.config.viewOffset.left,y=o.y-e.config.viewOffset.bottom+n.height,w=o.x-e.config.viewOffset.right+n.width;return t<y&&d>v&&f>m&&p<w}()||function(){return"fixed"===window.getComputedStyle(e.domEl).position}()}function R(){}var C,S;t.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},t.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},t.prototype.reveal=function(e,t,n,o){var s,u,f,m,y,w;if(void 0!==t&&"number"==typeof t?(n=t,t={}):void 0!==t&&null!==t||(t={}),s=i(t),u=r(e,s),!u.length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),C;n&&"number"==typeof n&&(w=l(),y=C.sequences[w]={id:w,interval:n,elemIds:[],active:!1});for(var g=0;g<u.length;g++)m=u[g].getAttribute("data-sr-id"),m?f=C.store.elements[m]:(f={id:l(),domEl:u[g],seen:!1,revealing:!1},f.domEl.setAttribute("data-sr-id",f.id)),y&&(f.sequence={id:y.id,index:y.elemIds.length},y.elemIds.push(f.id)),a(f,t,s),c(f),d(f),C.tools.isMobile()&&!f.config.mobile||!C.isSupported()?(f.domEl.setAttribute("style",f.styles.inline),f.disabled=!0):f.revealing||f.domEl.setAttribute("style",f.styles.inline+f.styles.transform.initial);return!o&&C.isSupported()&&(p(e,t,n),C.initTimeout&&window.clearTimeout(C.initTimeout),C.initTimeout=window.setTimeout(v,0)),C},t.prototype.sync=function(){if(C.history.length&&C.isSupported()){for(var e=0;e<C.history.length;e++){var t=C.history[e];C.reveal(t.target,t.config,t.interval,!0)}v()}else console.log("ScrollReveal: sync failed, no reveals found.");return C},R.prototype.isObject=function(e){return null!==e&&"object"===(void 0===e?"undefined":o()(e))&&e.constructor===Object},R.prototype.isNode=function(e){return"object"===o()(window.Node)?e instanceof window.Node:e&&"object"===(void 0===e?"undefined":o()(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},R.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"===o()(window.NodeList)?e instanceof window.NodeList:e&&"object"===(void 0===e?"undefined":o()(e))&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},R.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+(void 0===e?"undefined":o()(e))+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},R.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},R.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},R.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},S=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"===o()(n(35))&&n(35)?define(function(){return t}):void 0!==e&&e.exports?e.exports=t:window.ScrollReveal=t}()}).call(t,n(66)(e))},310:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Crown"),e._v(" "),n("Hero"),e._v(" "),n("Demo"),e._v(" "),n("Withlove")],1)},staticRenderFns:[]}},34:function(e,t,n){"use strict";t.a={path:"*",beforeEnter:function(e,t,n){if(!history.pushState){var o=/^\/([\w_\-]+)\/?/gi.exec(e.path);o&&(document.cookie="site="+o[1],window.location.href=e.path)}n()}}},5:function(e,t,n){var o=n(0)(null,n(6),null,null,null);e.exports=o.exports},6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},staticRenderFns:[]}},97:function(e,t,n){var o=n(0)(null,n(280),null,null,null);e.exports=o.exports}},[271]);