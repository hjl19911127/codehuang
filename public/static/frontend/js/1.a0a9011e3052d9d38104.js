webpackJsonp([1],{281:function(t,e,i){"use strict";var a=i(21),l="//api.codehuang.com/v1/articles";e.a={query:function(t){return Object(a.a)({method:"get",url:l,params:t})},get:function(t){return Object(a.a)({method:"get",url:l+"/"+t,cache:!1})},create:function(t){return Object(a.a)({method:"post",url:l,data:t})}}},286:function(t,e,i){var a=i(287);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(280)("ef633114",a,!0)},287:function(t,e,i){e=t.exports=i(279)(!1),e.push([t.i,"",""])},292:function(t,e,i){"use strict";function a(t){i(286)}Object.defineProperty(e,"__esModule",{value:!0});var l=i(281),n={data:function(){return{flag:{showCreatePanel:!1},article:{id:0,title:"",content:"",is_top:!1,is_online:!1}}},methods:{init:function(){this.article.id=this.$route.params.id,this.article.id&&this.get()},onSubmit:function(){var t=this;l.a.create(this.article).then(function(e){t.flag.showCreatePanel=!1,t.query()}).catch(function(t){})},get:function(){var t=this;l.a.get(this.article.id).then(function(e){t.article=e}).catch(function(t){})}},created:function(){this.init()}},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{staticClass:"toolbar"},[i("router-link",{attrs:{to:{name:"article"}}},[i("el-button",{staticClass:"pull-right",attrs:{type:"primary"}},[t._v("返回列表")])],1)],1),t._v(" "),i("el-form",{ref:"form",attrs:{model:t.article,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"文章标题"}},[i("el-input",{model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"文章内容"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"是否置顶"}},[i("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.article.is_top,callback:function(e){t.$set(t.article,"is_top",e)},expression:"article.is_top"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"是否上线"}},[i("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.article.is_online,callback:function(e){t.$set(t.article,"is_online",e)},expression:"article.is_online"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),i("el-button",[t._v("取消")])],1)],1)],1)},c=[],o={render:r,staticRenderFns:c},s=o,u=i(0),f=a,m=u(n,s,!1,f,null,null);e.default=m.exports}});