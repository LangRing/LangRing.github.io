webpackJsonp([5],{BRgg:function(t,n,e){"use strict";n.b=function(){var t=s()({},a.b,{uin:0,needNewCode:1,platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,a.c)},n.a=function(t){var n=s()({},a.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,a.c)};var i=e("woOf"),s=e.n(i),o=e("Gak4"),a=e("T452")},s3x3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("kvay"),a=e("NYxO"),r=e("BRgg"),c=e("T452"),u=e("PvFA"),g={computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(a.c)(["topList"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getTopList()},methods:{_getTopList:function(){var t=this;this.topList.id?Object(r.a)(this.topList.id).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.songlist))}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albummid&&n.push(Object(u.a)(e))}),n}},components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.rank,title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var p=e("VU/8")(g,f,!1,function(t){e("zIer")},"data-v-330598a4",null);n.default=p.exports},zIer:function(t,n){}});
//# sourceMappingURL=5.ad9c8d9c1d521be283a0.js.map