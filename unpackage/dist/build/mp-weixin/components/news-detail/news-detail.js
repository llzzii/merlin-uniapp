(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news-detail/news-detail"],{"36c8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("33fb"),u=o(n("49b7"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){Promise.all([n.e("common/vendor"),n.e("components/u-parse/u-parse")]).then(function(){return resolve(n("75bf"))}.bind(null,n)).catch(n.oe)},c={components:{uParse:i},data:function(){return{id:"",type:"",title:"",detailData:{},article:null}},onLoad:function(t){this.id=t.id||"",this.type=t.type||"",this.title=t.title||"",this.getData()},methods:{getData:function(){var t=this;(0,a.detailJueJinData)(this.id).then((function(e){t.detailData=e,t.article=(0,u.default)(t.detailData.mark_content),console.log(t.article)}))}}};e.default=c},3847:function(t,e,n){"use strict";(function(t){n("9ec2");a(n("66fd"));var e=a(n("e2ec"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4ff2":function(t,e,n){},a70c:function(t,e,n){"use strict";var a=n("4ff2"),u=n.n(a);u.a},d779:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uParse:function(){return Promise.all([n.e("common/vendor"),n.e("components/u-parse/u-parse")]).then(n.bind(null,"75bf"))}},u=function(){var t=this,e=t.$createElement;t._self._c},o=[]},e2ec:function(t,e,n){"use strict";n.r(e);var a=n("d779"),u=n("ff03");for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);n("a70c");var i,c=n("f0c5"),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=r.exports},ff03:function(t,e,n){"use strict";n.r(e);var a=n("36c8"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=u.a}},[["3847","common/runtime","common/vendor"]]]);