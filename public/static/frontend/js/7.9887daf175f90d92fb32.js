webpackJsonp([7],{"TxQ/":function(t,e){},qMLn:function(t,e,l){"use strict";var a=l("vLgD"),i="//api.codehuang.com/v1/articles";e.a={query:function(t){return Object(a.a)({method:"get",url:i,params:t})},get:function(t){return Object(a.a)({method:"get",url:i+"/"+t,cache:!1})},create:function(t){return Object(a.a)({method:"post",url:i,data:t})}}},xhwY:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("qMLn"),i={data:function(){return{multipleSelection:[],isLoading:!1,filter:{title:"",type:0,page:1,size:10},articles:{items:[],count:0}}},methods:{init:function(){this.query()},create:function(){var t=this;a.a.create(this.article).then(function(e){t.query()}).catch(function(t){})},query:function(){var t=this;this.isLoading=!0,a.a.query(this.filter).then(function(e){t.articles.items=e.items,t.articles.count=e.count,t.isLoading=!1}).catch(function(t){})},search:function(){this.filter.page=1,this.query()},handleSizeChange:function(t){this.filter.size=t,this.search()},handleCurrentChange:function(t){this.filter.page=t,this.query()},handleSelectionChange:function(t){this.multipleSelection=t},batchDelete:function(){}},created:function(){this.init()}},n={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}]},[l("el-row",{staticClass:"toolbar"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filter}},[l("el-form-item",{attrs:{label:"标题"}},[l("el-input",{attrs:{placeholder:"标题"},model:{value:t.filter.title,callback:function(e){t.$set(t.filter,"title",e)},expression:"filter.title"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"文章类型"}},[l("el-select",{attrs:{placeholder:"文章类型"},model:{value:t.filter.type,callback:function(e){t.$set(t.filter,"type",e)},expression:"filter.type"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("查询")])],1),t._v(" "),l("div",{staticClass:"pull-right"},[l("router-link",{attrs:{to:{name:"articleCreate"}}},[l("el-button",{attrs:{type:"primary",icon:"plus"}},[t._v("添加文章")])],1)],1)],1)],1),t._v(" "),l("el-row",{staticClass:"contentBar"},[l("el-table",{attrs:{data:t.articles.items,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection"}}),t._v(" "),l("el-table-column",{attrs:{prop:"id",label:"ID"}}),t._v(" "),l("el-table-column",{attrs:{prop:"title",label:"标题","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"is_top",label:"标题","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("router-link",{attrs:{to:"/article/"+e.row.id}},[l("el-button",{attrs:{plain:!0,type:"primary",size:"small"}},[t._v("编辑")])],1),t._v(" "),l("el-button",{attrs:{type:"danger",size:"small"}},[t._v("删除")])]}}])})],1)],1),t._v(" "),l("el-row",{staticClass:"toolbar"},[l("el-button",{attrs:{plain:!0,type:"danger",icon:"delete",disabled:!t.multipleSelection.length},on:{click:t.batchDelete}},[t._v("\n      批量删除\n    ")]),t._v(" "),l("el-pagination",{staticClass:"pull-right",attrs:{"current-page":t.filter.page,"page-sizes":[5,10,15,20],"page-size":t.filter.size,layout:"total, sizes, prev, pager, next, jumper",total:t.articles.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var r=l("VU/8")(i,n,!1,function(t){l("TxQ/")},null,null);e.default=r.exports}});
//# sourceMappingURL=7.9887daf175f90d92fb32.js.map