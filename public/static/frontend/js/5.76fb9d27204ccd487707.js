webpackJsonp([5],{"5BYP":function(t,n,e){"use strict";function i(t){e("H4s2")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("qMLn"),r={data:function(){return{flag:{showCreatePanel:!1},article:{id:0,title:"",content:"",is_top:!1,is_online:!1}}},methods:{init:function(){this.article.id=this.$route.params.id,this.article.id&&this.get()},onSubmit:function(){var t=this;a.a.create(this.article).then(function(n){t.flag.showCreatePanel=!1,t.query()}).catch(function(t){})},get:function(){var t=this;a.a.get(this.article.id).then(function(n){t.article=n}).catch(function(t){})}},created:function(){this.init()}},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-row",{staticClass:"toolbar"},[e("router-link",{attrs:{to:{name:"article"}}},[e("el-button",{staticClass:"pull-right",attrs:{type:"primary"}},[t._v("返回列表")])],1)],1),t._v(" "),e("el-form",{ref:"form",attrs:{model:t.article,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"文章标题"}},[e("el-input",{model:{value:t.article.title,callback:function(n){t.$set(t.article,"title",n)},expression:"article.title"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"文章内容"}},[e("el-input",{attrs:{type:"textarea"},model:{value:t.article.content,callback:function(n){t.$set(t.article,"content",n)},expression:"article.content"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"是否置顶"}},[e("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.article.is_top,callback:function(n){t.$set(t.article,"is_top",n)},expression:"article.is_top"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"是否上线"}},[e("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.article.is_online,callback:function(n){t.$set(t.article,"is_online",n)},expression:"article.is_online"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),e("el-button",[t._v("取消")])],1)],1)],1)},o=[],c={render:l,staticRenderFns:o},s=c,u=e("VU/8"),f=i,m=u(r,s,!1,f,null,null);n.default=m.exports},H4s2:function(t,n,e){var i=e("LHnP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("d6b15090",i,!0)},LHnP:function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"edit.vue",sourceRoot:""}])},qMLn:function(t,n,e){"use strict";var i=e("vLgD"),a="//api.codehuang.com/v1/articles";n.a={query:function(t){return Object(i.a)({method:"get",url:a,params:t})},get:function(t){return Object(i.a)({method:"get",url:a+"/"+t,cache:!1})},create:function(t){return Object(i.a)({method:"post",url:a,data:t})}}}});
//# sourceMappingURL=5.76fb9d27204ccd487707.js.map