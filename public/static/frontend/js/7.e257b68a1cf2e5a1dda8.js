webpackJsonp([7],{FnLG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),u=a("NYxO"),c=a("vLgD"),s="/api/game",i={create:function(t){return Object(c.a)({method:"post",url:s,data:t})},query:function(t){return Object(c.a)({method:"get",url:s,params:t})},getUserGameData:function(t){return Object(c.a)({method:"get",url:s,params:t})}},o={data:function(){return{}},methods:{handleStartGame:function(){i.create(),this.$router.push("/seek/1")}},computed:r()({},Object(u.b)(["sideMenuEnable","sideMenuAction"]))},d=a("XyMi");var f=function(t){a("kvfk")},l=Object(d.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"btn-start",attrs:{href:"javascript:void(0)"},on:{click:this.handleStartGame}},[this._v("\n  开始\n")])},[],!1,f,"data-v-4bbd51fa",null);e.default=l.exports},kvfk:function(t,e){}});
//# sourceMappingURL=7.e257b68a1cf2e5a1dda8.js.map