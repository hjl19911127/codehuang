webpackJsonp([0],{373:function(e,t,i){"use strict";var l=i(23),a="/api/v1/articles",n={create:function(e){return Object(l.a)({method:"post",url:a,data:e})},query:function(e){return Object(l.a)({method:"get",url:a,params:e})}};t.a=n},378:function(e,t,i){var l=i(379);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);i(372)("60b8ffd8",l,!0)},379:function(e,t,i){t=e.exports=i(371)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},380:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(373);t.default={data:function(){return{multipleSelection:[],loading:!1,filter:{title:"",type:0,page:1,size:10},articles:{items:[],count:0}}},methods:{init:function(){this.query()},create:function(){var e=this;l.a.create(this.article).then(function(t){e.flag.showCreatePanel=!1,e.query()}).catch(function(e){})},query:function(){var e=this;this.loading=!0,l.a.query(this.filter).then(function(t){e.articles.items=t.items,e.articles.count=t.count,e.loading=!1}).catch(function(e){})},showCreatePanel:function(){this.flag.showCreatePanel=!0},handleSizeChange:function(e){this.filter.size=e,this.filter.page=1,this.query()},handleCurrentChange:function(e){this.filter.page=e,this.query()},handleSelectionChange:function(e){this.multipleSelection=e},batchDelete:function(){}},created:function(){this.init()}}},381:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-row",{staticClass:"toolbar"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.filter}},[i("el-form-item",{attrs:{label:"标题"}},[i("el-input",{attrs:{placeholder:"标题"},model:{value:e.filter.title,callback:function(t){e.filter.title=t},expression:"filter.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"文章类型"}},[i("el-select",{attrs:{placeholder:"文章类型"},model:{value:e.filter.type,callback:function(t){e.filter.type=t},expression:"filter.type"}},[i("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),i("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.onSubmit}},[e._v("查询")])],1),e._v(" "),i("router-link",{attrs:{to:{name:"articleCreate"}}},[i("el-button",{staticClass:"pull-right",attrs:{type:"primary",icon:"plus"}},[e._v("添加文章")])],1)],1)],1),e._v(" "),i("el-row",{staticClass:"contentBar"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],attrs:{data:e.articles.items,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection"}}),e._v(" "),i("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),i("el-table-column",{attrs:{prop:"title",label:"标题","show-overflow-tooltip":""}})],1)],1),e._v(" "),i("el-row",{staticClass:"toolbar"},[i("el-button",{attrs:{plain:!0,type:"danger",icon:"delete",disabled:!e.multipleSelection.length},on:{click:e.batchDelete}},[e._v("\n      批量删除\n    ")]),e._v(" "),i("el-pagination",{staticClass:"pull-right",attrs:{"current-page":e.filter.page,"page-sizes":[5,10,15,20],"page-size":e.filter.size,layout:"total, sizes, prev, pager, next, jumper",total:e.articles.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},389:function(e,t,i){function l(e){i(378)}var a=i(0)(i(380),i(381),l,null,null);e.exports=a.exports}});
//# sourceMappingURL=0.62cd07722b4f4c49dce3.js.map