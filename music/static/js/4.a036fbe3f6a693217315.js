webpackJsonp([4],{"2TvL":function(t,n){},NSSj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),o=e("kvay"),a=e("NYxO"),r=e("m40h"),c=e("T452"),u=e("PvFA"),d={computed:i()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(a.c)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;this.disc.dissid?Object(r.c)(this.disc.dissid).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.cdlist[0].songlist))}):this.$router.push("/recommend")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albumid&&n.push(Object(u.a)(t))}),n}},components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,songs:this.songs,bgImage:this.bgImage}})],1)},staticRenderFns:[]};var m=e("VU/8")(d,f,!1,function(t){e("2TvL")},"data-v-30af9242",null);n.default=m.exports},m40h:function(t,n,e){"use strict";n.b=function(){var t=a()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(r.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},n.a=function(){var t=a()({},c.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return d.a.get("/api/getDiscList",{params:t}).then(function(t){return i.a.resolve(t.data)})},n.c=function(t){var n=a()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,g_tk:5381});return d.a.get("/api/getCdList",{params:n}).then(function(t){return i.a.resolve(t.data)})};var s=e("//Fk"),i=e.n(s),o=e("woOf"),a=e.n(o),r=e("Gak4"),c=e("T452"),u=e("mtWM"),d=e.n(u)}});
//# sourceMappingURL=4.a036fbe3f6a693217315.js.map