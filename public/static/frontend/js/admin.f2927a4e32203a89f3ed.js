webpackJsonp([16],{DyH8:function(t,e,n){"use strict";var a=n("mvHQ"),r=n.n(a),o=n("//Fk"),u=n.n(o),i={arrayToTree:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"parent_id";return new u.a(function(a,r){var o={},u=[];t.forEach(function(t){t.children=[],o[t[e]]=t}),t.forEach(function(t){o[t[n]]?(t.parent_title=o[t[n]].title,o[t[n]].children.push(t)):u.push(t)}),a(u)})},treeToArray:function(t,e,n){return new u.a(function(t,e){localStorage.setItem(key,r()(value)),LocalStorage.get(key).then(function(e){if(!e)throw new Error;t(e)}).catch(function(t){e(t)})})}};e.a=i},GpVj:function(t,e,n){"use strict";var a=n("Dd8w"),r=n.n(a),o=n("NYxO"),u={data:function(){return{}},methods:{toggleMenuCollapse:function(){this.$store.dispatch("TOGGLE_MENU_COLLAPSE")}},props:{data:Object}},i=n("XyMi");var s=function(t){n("rrHM")},c=Object(i.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-button",{attrs:{icon:"el-icon-d-arrow-left",size:"mini",plain:""},on:{click:t.toggleMenuCollapse}}),t._v(" "),n("div",{staticClass:"user"},[n("el-dropdown",[n("span",{staticClass:"user-name el-dropdown-link"},[t._v("\n        "+t._s(t.data.username)),n("img",{staticClass:"user-avatar",attrs:{src:t.data.avatar}})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("个人资料")]),t._v(" "),n("el-dropdown-item",[t._v("修改密码")]),t._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[t._v("退出登录")])],1)],1)],1)],1)},[],!1,s,"data-v-4a6220c1",null).exports,l={components:{MenuTreeItem:{name:"menu-tree-item",functional:!0,render:function(t,e){return e.props.data.map(function(e){return e.children.length?t("el-submenu",{attrs:{index:""+e.id}},[t("template",{slot:"title"},[t("i",{class:"el-icon-menu"}),t("span",{slot:"title"},[e.title])]),t("menu-tree-item",{attrs:{data:e.children}})]):t("el-menu-item",{attrs:{index:e.route}},[t("i",{class:"el-icon-menu"}),t("span",{slot:"title"},[e.title])])})}}},computed:r()({},Object(o.b)(["menu","activeIndex","defaultOpeneds"])),methods:{handleSelect:function(t,e){},handleOpen:function(){},handleClose:function(){}},created:function(){this.$store.dispatch("GET_MENU",{route:this.$route.path})}};var d=function(t){n("Nhk/")},h={components:{AdminHeader:c,AdminMenu:Object(i.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("el-menu",{staticClass:"menu",attrs:{"default-active":this.activeIndex,"default-openeds":this.defaultOpeneds,router:!0,collapse:this.menu.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:this.handleSelect,open:this.handleOpen,close:this.handleClose}},[e("menu-tree-item",{attrs:{data:this.menu.tree}})],1)},[],!1,d,"data-v-c718c928",null).exports},computed:r()({},Object(o.b)(["session"])),methods:{init:function(){}},created:function(){this.init()}};var f=function(t){n("Q3FE")},m=Object(i.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"menu-wrap"},[n("admin-menu")],1),t._v(" "),n("div",{staticClass:"main-wrap"},[n("admin-header",{attrs:{data:t.session}}),t._v(" "),n("div",{staticClass:"content-wrap"},[n("el-row",{staticClass:"breadcrumb-wrap"},[n("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),n("el-breadcrumb-item",[t._v("活动管理")]),t._v(" "),n("el-breadcrumb-item",[t._v("活动列表")]),t._v(" "),n("el-breadcrumb-item",[t._v("活动详情")])],1)],1),t._v(" "),n("el-row",{staticClass:"page-wrap"},[n("router-view")],1)],1)],1)])},[],!1,f,null,null).exports,p=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("dl",{staticClass:"about-info"},[n("dt",[t._v("关于项目")]),t._v(" "),n("dd",[t._v("该项目是基于Cnodejs的api，采用vue.js重写的webapp。")]),t._v(" "),n("dt",[t._v("源码地址")]),t._v(" "),n("dd",[n("a",{attrs:{href:"https://github.com/shinygang/Vue-cnodejs"}},[t._v("\n              https://github.com/shinygang/Vue-cnodejs")])]),t._v(" "),n("dt",[t._v("意见反馈")]),t._v(" "),n("dd",[n("a",{attrs:{href:"https://github.com/shinygang/Vue-cnodejs/issues"}},[t._v("\n              发表意见或者提需求")])]),t._v(" "),n("dt",[t._v("当前版本")]),t._v(" "),n("dd",[t._v("V1.0")])])])}],!1,null,null,null).exports,v=function(t){return n.e(5).then(function(){var e=[n("5BYP")];t.apply(null,e)}.bind(this)).catch(n.oe)};e.a=[{path:"/login",name:"login",component:function(t){return n.e(8).then(function(){var e=[n("M+Ji")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"",component:m,children:[{path:"/article",name:"article",component:function(t){return n.e(6).then(function(){var e=[n("xhwY")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/article/create",name:"articleCreate",component:v},{path:"/article/:id",name:"/articleEdit",component:v},{path:"/menu",name:"menu",component:function(t){return n.e(9).then(function(){var e=[n("6OxN")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/about",name:"about",component:p},{path:"*",name:"notFound",component:p}]}]},"Nhk/":function(t,e){},Q3FE:function(t,e){},QPgW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("uMhA"),n("MU8w"),n("rplX");var a=n("7+uW"),r=n("zL8q"),o=n.n(r),u=(n("tvR6"),n("YkRm")),i=n("arxu"),s=n("NYxO"),c=n("M4fF"),l=n.n(c),d=n("c2kk"),h=n("mvHQ"),f=n.n(h),m=n("//Fk"),p=n.n(m),v=n("Zrlr"),_=n.n(v),E=n("wxAW"),b=n.n(E),g=function(){function t(){_()(this,t)}return b()(t,null,[{key:"get",value:function(t){return new p.a(function(e,n){var a=void 0;try{a=JSON.parse(localStorage.getItem(t))}catch(t){n(t)}e(a)})}},{key:"set",value:function(e,n){return new p.a(function(a,r){localStorage.setItem(e,f()(n)),t.get(e).then(function(t){if(!t)throw new Error;a(t)}).catch(function(t){r(t)})})}}]),t}(),w=n("DyH8"),O={GET_MENU:function(t,e){var n=t.commit,a=(t.dispatch,t.state,e.route);n("SET_ROUTE",a),g.get("ADMIN:MENU").then(function(t){t?n("SET_MENU",t):d.a.query({no_root:!0,is_enabled:!0}).then(function(t){var e=l.a.keyBy(t,"route");n("SET_MENU_MAP",e),w.a.arrayToTree(t).then(function(t){n("SET_MENU",t)})})})},TOGGLE_MENU_COLLAPSE:function(t){var e=t.commit;t.dispatch;e("SET_MENU_COLLAPSE",!t.state.menu.isCollapse)},GET_SESSION:function(t){var e=t.commit,n=(t.dispatch,t.state);session.get(n.auth).then(function(t){e("SET_SESSION",t)})}};a.default.use(s.a);var y=new s.a.Store({state:{auth:null,menu:{tree:[],map:{},isCollapse:!1},route:"",session:{username:"老夫子",avatar:"http://static.codehuang.local:20081/upload/avatars/default.png"}},actions:O,getters:{menu:function(t,e){return t.menu},menuCollapse:function(t,e){return t.menu.isCollapse},defaultOpeneds:function(t,e){var n=t.menu.map[t.route];return n&&1!==n.parent_id?[""+n.parent_id]:[]},activeIndex:function(t,e){return t.route},session:function(t,e){return t.session}},mutations:{SET_SESSION:function(t,e){t.session=e},SET_MENU:function(t,e){t.menu.tree=e},SET_MENU_MAP:function(t,e){t.menu.map=e},SET_MENU_COLLAPSE:function(t,e){t.menu.isCollapse=e},SET_ROUTE:function(t,e){t.route=e}}});a.default.config.productionTip=!1,a.default.use(o.a),new a.default({router:i.a,store:y,render:function(t){return t(u.a)}}).$mount("#app")},YkRm:function(t,e,n){"use strict";var a=n("XyMi"),r=Object(a.a)(null,function(){var t=this.$createElement;return(this._self._c||t)("router-view")},[],!1,null,null,null);e.a=r.exports},arxu:function(t,e,n){"use strict";(function(t){var a=n("7+uW"),r=n("/ocq"),o=n("GpVj");a.default.use(r.a),e.a=new r.a({mode:"history",base:t,scrollBehavior:function(){return{y:0}},routes:o.a})}).call(e,"/")},c2kk:function(t,e,n){"use strict";var a=n("vLgD"),r="//api.codehuang.com/v1/menus";e.a={query:function(t){return Object(a.a)({method:"get",url:r,params:t,cache:!1})},create:function(t){return Object(a.a)({method:"post",url:r,data:t})},update:function(t,e){return Object(a.a)({method:"put",url:r+"/"+t,data:e})},remove:function(t){return Object(a.a)({method:"delete",url:r+"/"+t})}}},rrHM:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){},vLgD:function(t,e,n){"use strict";var a=n("//Fk"),r=n.n(a),o=n("mvHQ"),u=n.n(o),i=n("woOf"),s=n.n(i),c=n("fZjL"),l=n.n(c),d=n("Zrlr"),h=n.n(d),f=n("wxAW"),m=n.n(f),p=new(function(){function t(){var e=this;h()(this,t),this.defaults={method:"get",headers:{Accept:"application/json"}},this.defaultsMethodHeaders={},["delete","get","head"].forEach(function(t){e.defaultsMethodHeaders[t]={}}),["post","put","patch"].forEach(function(t){e.defaultsMethodHeaders[t]={"Content-Type":"application/json;charset=utf-8"}})}return m()(t,[{key:"_formatQueryString",value:function(t){return l()(t).filter(function(e){return void 0!==t[e]}).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}},{key:"get",value:function(t){return this.request({url:t})}},{key:"post",value:function(t,e){return this.request({url:t,data:e,method:"post"})}},{key:"request",value:function(t){(t=s()({},this.defaults,t)).method=t.method.toLowerCase(),!1===t.cache&&(t.params=t.params||{},t.params._=+new Date);var e=t.url+(t.params?(~t.url.indexOf("?")?"&":"?")+this._formatQueryString(t.params):""),n={method:t.method,headers:s()({},t.headers,this.defaultsMethodHeaders[t.method]),body:u()(t.data)};return new r.a(function(t,a){fetch(e,n).then(function(e){console.log(e),t(e.json())})})}}]),t}());e.a=p.request.bind(p)}},["QPgW"]);
//# sourceMappingURL=admin.f2927a4e32203a89f3ed.js.map