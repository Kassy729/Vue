(function(t){function e(e){for(var o,c,u=e[0],i=e[1],s=e[2],p=0,f=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var o={},n={app:0},a=[];function c(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(r,o,function(e){return t[e]}.bind(null,o));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("h1",[t._v("Books")]),r("v-spacer")],1),r("v-main",[r("router-view")],1)],1)},a=[],c={name:"App"},u=c,i=r("2877"),s=r("6544"),l=r.n(s),p=r("7496"),f=r("40dc"),v=r("f6c4"),d=r("2fa4"),b=Object(i["a"])(u,n,a,!1,null,null,null),_=b.exports;l()(b,{VApp:p["a"],VAppBar:f["a"],VMain:v["a"],VSpacer:d["a"]});var m=r("8c4f"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v(t._s(t.err_msg))]),r("v-container",{attrs:{fluid:""}},[r("v-data-iterator",{attrs:{items:t.books,"hide-default-footer":"","hide-default-header":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("v-row",t._l(e.items,(function(e){return r("v-col",{key:e.bookId,attrs:{cols:"4"}},[r("v-card",[r("v-img",{attrs:{"max-height":"150",contain:"",src:e.cover}}),r("v-divider"),t._v(" "),r("v-card-title",[r("router-link",{attrs:{to:"/books/"+e.bookId}},[t._v(t._s(e.title))])],1),r("v-card-subtitle",[t._v(t._s(e.author))])],1)],1)})),1)]}}])})],1)],1)},k=[],g=r("bc3a"),y=r.n(g),w={name:"Home",data:function(){return{books:[],err_msg:""}},mounted:function(){var t=this;y.a.get("/api/books").then((function(e){console.log(e.data),t.books=e.data})).catch((function(e){t.err_msg=e.err_msg}))}},V=w,O=r("b0af"),j=r("99d9"),x=r("62ad"),S=r("a523"),I=r("c377"),A=r("ce7e"),C=r("adda"),P=r("0fd9"),B=Object(i["a"])(V,h,k,!1,null,null,null),M=B.exports;l()(B,{VCard:O["a"],VCardSubtitle:j["a"],VCardTitle:j["b"],VCol:x["a"],VContainer:S["a"],VDataIterator:I["a"],VDivider:A["a"],VImg:C["a"],VRow:P["a"]});var $=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("h1",[t._v(t._s(t.book.title)+" "),r("span",{staticStyle:{color:"#AAAAAA"}},[t._v(" "+t._s(t.book.subtitle))])])])],1),r("v-row",[r("v-col",[r("v-img",{attrs:{contain:"","max-height":"250",src:t.book.cover}})],1)],1),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("h3",[t._v("작가: "+t._s(t.book.author)+" "),t.book.translator?r("span",[t._v(", 번역: "+t._s(t.book.translator))]):t._e(),t._v(" ,"+t._s(t.book.publisher))]),r("p",[t._v("페이지: "+t._s(t.book.page)+", 가격: "+t._s(t.currency(t.book.price))+", ISBN: "+t._s(t.book.ISBN))]),r("p",[t._v(t._s(t.book.info))])])],1)],1)},E=[],N=(r("a9e3"),{name:"Book",data:function(){return{err_msg:"Error!",book:{}}},mounted:function(){var t=this,e=this.$route.params.bookId;y.a.get("/api/books/".concat(e)).then((function(e){t.book=e.data})).catch((function(e){t.err_msg=e.err_msg}))},methods:{currency:function(t){var e=new Number(t),r=new Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW"}).format(e);return r}}}),R=N,T=Object(i["a"])(R,$,E,!1,null,null,null),D=T.exports;l()(T,{VCol:x["a"],VContainer:S["a"],VImg:C["a"],VRow:P["a"]}),o["a"].use(m["a"]);var H=[{path:"/",name:"Home",component:M},{path:"/books/:bookId",name:"Book",component:D}],J=new m["a"]({mode:"history",base:"/",routes:H}),K=J,F=r("f309");o["a"].use(F["a"]);var W=new F["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:K,vuetify:W,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.e646ac08.js.map