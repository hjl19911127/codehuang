webpackJsonp([3],{385:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(22),a=apiHost+"/v1/menus",r={create:function(e){return Object(n.a)({method:"post",url:a,data:e})},query:function(e){return Object(n.a)({method:"get",url:a,params:e})}};t.default={data:function(){return{menu:[],data2:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],defaultProps:{children:"children",label:"label"}}},methods:{init:function(){this.query()},formatTree:function(){},query:function(){var e=this;r.query().then(function(t){e.menu=t})},handleNodeClick:function(e,t,l){t.isLeaf||(t.expanded=!t.expanded)}},created:function(){this.init()}}},386:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",{staticClass:"toolbar"},[l("el-button",{staticClass:"pull-right",attrs:{type:"primary"}},[e._v("刷新菜单")])],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-tree",{attrs:{data:e.data2,"show-checkbox":"","highlight-current":!0,"node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),l("el-col",{attrs:{span:12}})],1)],1)},staticRenderFns:[]}},390:function(e,t,l){var n=l(0)(l(385),l(386),null,null,null);e.exports=n.exports}});