webpackJsonp([9],{"6OxN":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("//Fk"),r=n.n(i),l=n("woOf"),a=n.n(l),s=n("DyH8"),o=n("c2kk"),u={data:function(){return{menus:[],menuProps:{children:"children",label:"title"},menu:{id:0,title:"",parent_id:0,parent_title:"",route:"",is_enabled:!0,children:[]},rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{max:10,message:"长度在10个字符以内",trigger:"blur"}],route:[{required:!0,message:"请输入菜单地址",trigger:"blur"}]},isEdit:!1,isLoading:!1}},methods:{init:function(){this.query()},refreshMenu:function(){},query:function(){var e=this;this.isLoading=!0,o.a.query().then(function(t){s.a.arrayToTree(t).then(function(t){e.menus=t,e.isLoading=!1})})},resetForm:function(){this.$refs.menuForm.resetFields()},handleSubmit:function(){var e=this;this.$refs.menuForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;var n=a()({},e.menu),i=n.id;n.id=void 0,n.parent_title=void 0,n.children=void 0,r.a.resolve(i?o.a.update(i,n):o.a.create(n)).then(function(t){e.handleCancel(),e.query()})})},handleCancel:function(){this.isEdit=!1},append:function(e){a()(this.menu,{id:0,title:"",parent_id:e.id,parent_title:e.title,route:"",is_enabled:!0}),this.isEdit=!0},edit:function(e){a()(this.menu,e),this.isEdit=!0},remove:function(e){var t=this;this.$confirm("此操作将永久删除该菜单及其子菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.a.remove(e.id).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.query()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},renderContent:function(e,t){var n=this,i=t.node,r=t.data;t.store;return e("span",{class:"tree-content"},[e("span",null,[e("span",null,[i.label,e("span",{class:"tree-label",style:""},[r.route?"路由："+r.route:""])])]),e("span",{class:"option-button-group"},[i.level<4&&e("el-button",{attrs:{type:"success",icon:"el-icon-plus",size:"mini"},on:{click:function(){return n.append(r)}}}),!!r.parent_id&&e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(){return n.edit(r)}}}),!!r.parent_id&&!r.children.length&&e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(){return n.remove(r)}}})])])}},created:function(){this.init()}},c=n("XyMi");var d=function(e){n("Rd7e")},m=Object(c.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}]},[n("el-row",{staticClass:"toolbar"},[n("div",{staticClass:"pull-right"},[n("el-button",{attrs:{type:"danger"},on:{click:e.refreshMenu}},[e._v("批量删除")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:!0},on:{click:e.refreshMenu}},[e._v("刷新菜单")])],1)]),e._v(" "),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-tree",{attrs:{data:e.menus,"show-checkbox":"","default-expand-all":!0,"expand-on-click-node":!1,"node-key":"id","render-content":e.renderContent,props:e.menuProps}})],1),e._v(" "),n("el-col",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{span:16}},[n("el-form",{ref:"menuForm",attrs:{model:e.menu,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"父节点名称"}},[n("span",[e._v(e._s(e.menu.parent_title))])]),e._v(" "),n("el-form-item",{attrs:{label:"菜单名称",prop:"title"}},[n("el-input",{attrs:{placeholder:"请选择菜单名称"},model:{value:e.menu.title,callback:function(t){e.$set(e.menu,"title",t)},expression:"menu.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"菜单地址",prop:"route"}},[n("el-input",{attrs:{placeholder:"请选择菜单地址"},model:{value:e.menu.route,callback:function(t){e.$set(e.menu,"route",t)},expression:"menu.route"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否启用"}},[n("el-switch",{model:{value:e.menu.is_enabled,callback:function(t){e.$set(e.menu,"is_enabled",t)},expression:"menu.is_enabled"}})],1),e._v(" "),n("el-form-item",{attrs:{"label-width":"120px"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.menu.id?"更新":"新增"))]),e._v(" "),n("el-button",{on:{click:e.handleCancel}},[e._v("取消")])],1)],1)],1)],1)],1)},[],!1,d,null,null);t.default=m.exports},Rd7e:function(e,t){}});
//# sourceMappingURL=9.5f8e34a0f54828b3fc68.js.map