(function(e){function t(t){for(var s,o,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)o=i[d],n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},n={app:0},a=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4678:function(e,t,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=a(e);return r(t)}function a(e){var t=s[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(s)},n.resolve=a,e.exports=n,n.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{currentRoute:this.$router.currentRoute.name}}),r("router-view")],1)},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"container"},[s("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),e.$store.state.isUserLoggedIn?s("button",{staticClass:"btn btn-danger float-right ml-5 mt-2",on:{click:function(t){return e.logout()}}},[e._v("Logout")]):e._e(),e._m(0),s("span",{staticClass:"clearfix"})]),"LoginComponent"!==e.currentRoute?s("div",{staticClass:"sub-header"},[s("h2",[e._v(e._s(this.$store.state.isUserLoggedIn?"Hallo, "+this.$store.state.user.name+"!":"404"))])]):e._e()])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("\n\t\t\t\tTimeCollector\n\t\t\t\t"),r("span",{staticClass:"small"},[e._v("by Lorenz Hohmann")])])}],c={name:"Header",props:["userID","currentRoute"],methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push("login")}}},u=c,l=r("2877"),d=Object(l["a"])(u,o,i,!1,null,null,null),m=d.exports,f={name:"app",components:{Header:m}},p=f,h=Object(l["a"])(p,n,a,!1,null,null,null),b=h.exports,v=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"container"},[r("div",{staticClass:"setting-container pb-3 mt-5"},[r("h3",[e._v("Arbeitszeiten anzeigen")]),e.insertArea?e._e():r("span",{staticClass:"add-entry",attrs:{title:"Eintrag hinzufügen"},on:{click:function(t){return e.openInsertModel()}}},[e._v("+")]),e.insertArea?r("div",{staticClass:"mb-5 jumbotron"},[r("h4",[e._v("Eintrag hinzufügen")]),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-4"},[r("label",[e._v("Datum")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.insertDate,expression:"insertDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Datum",value:""},domProps:{value:e.insertDate},on:{input:function(t){t.target.composing||(e.insertDate=t.target.value)}}})]),r("div",{staticClass:"form-group col-md-4"},[r("label",[e._v("von")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.insertFrom,expression:"insertFrom"}],staticClass:"form-control",attrs:{type:"time",placeholder:"von"},domProps:{value:e.insertFrom},on:{input:function(t){t.target.composing||(e.insertFrom=t.target.value)}}})]),r("div",{staticClass:"form-group col-md-4"},[r("label",[e._v("bis")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.insertTo,expression:"insertTo"}],staticClass:"form-control",attrs:{type:"time",placeholder:"bis"},domProps:{value:e.insertTo},on:{input:function(t){t.target.composing||(e.insertTo=t.target.value)}}})])]),r("div",{staticClass:"form-row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",[e._v("Pause (von)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.insertBreakFrom,expression:"insertBreakFrom"}],staticClass:"form-control",attrs:{type:"time",placeholder:"Pause (von)"},domProps:{value:e.insertBreakFrom},on:{input:function(t){t.target.composing||(e.insertBreakFrom=t.target.value)}}})]),r("div",{staticClass:"form-group col-md-6"},[r("label",[e._v("Pause (bis)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.insertBreakTo,expression:"insertBreakTo"}],staticClass:"form-control",attrs:{type:"time",placeholder:"Pause (bis)"},domProps:{value:e.insertBreakTo},on:{input:function(t){t.target.composing||(e.insertBreakTo=t.target.value)}}})])]),r("div",{staticClass:"form-row mt-3 float-right"},[r("div",{staticClass:"col"},[r("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"button"},on:{click:function(t){return e.saveInsert()}}},[e._v("\n              Speichern\n            ")]),r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){e.insertArea=!1}}},[e._v("\n              abbrechen\n            ")])])]),r("span",{staticClass:"clearfix"})]):e._e(),r("div",{staticClass:"input-group"},[e._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.showFrom,expression:"showFrom"}],staticClass:"form-control",attrs:{type:"date",placeholder:"von"},domProps:{value:e.showFrom},on:{change:function(t){return e.updateFrom()},input:function(t){t.target.composing||(e.showFrom=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.showTo,expression:"showTo"}],staticClass:"form-control",attrs:{type:"date",placeholder:"bis"},domProps:{value:e.showTo},on:{change:function(t){return e.getTimes()},input:function(t){t.target.composing||(e.showTo=t.target.value)}}})])]),r("WorktimeResult",{attrs:{loading:e.loading,times:e.times},on:{"get-times":function(t){return e.getTimes()}}})],1)])},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text",attrs:{id:"mobile-hidden"}},[e._v("Zeitraum auswählen")])])}],w=r("795b"),_=r.n(w),k=(r("96cf"),r("3b8d")),y=r("bc3a"),C=r.n(y),T="api/",x={login:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new _.a(function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(r,s){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post(T+"user/login",t);case 3:n=e.sent,r(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),s(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getTimes:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,r,s){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new _.a(function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(n,a){var o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,o="".concat(T,"time/").concat(t,"/").concat(r,"/").concat(s),e.next=4,C.a.get(o);case 4:i=e.sent,n(i.data.times),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),a(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e)}));function t(t,r,s){return e.apply(this,arguments)}return t}(),deleteTime:function(e,t){return new _.a(function(){var r=Object(k["a"])(regeneratorRuntime.mark(function r(s,n){return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C.a.delete(T+"time/"+e+"/"+t);case 3:s(),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),n(r.t0);case 9:case"end":return r.stop()}},r,null,[[0,6]])}));return function(e,t){return r.apply(this,arguments)}}())},saveInsert:function(e,t,r,s,n,a){return new _.a(function(){var o=Object(k["a"])(regeneratorRuntime.mark(function o(i,c){return regeneratorRuntime.wrap(function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,C.a.post(T+"time/"+e,{date:t,from:r,to:s,break_from:n,break_to:a});case 3:i(),o.next=9;break;case 6:o.prev=6,o.t0=o["catch"](0),c(o.t0);case 9:case"end":return o.stop()}},o,null,[[0,6]])}));return function(e,t){return o.apply(this,arguments)}}())}},O=r("c1df"),z=r.n(O),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"result-container"},[e.error?r("div",{staticClass:"alert alert-danger mt-3",attrs:{role:"alert"}},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e(),0==e.times.length?r("div",{staticClass:"alert alert-warning mt-3",attrs:{role:"alert"}},[e._v("\n    Für den gewählten Zeitraum stehen keine Daten zur Verfügung.\n  ")]):e._e(),e.loading?r("div",{staticClass:"spinner-border",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e(),0==e.times.length||e.loading?e._e():r("table",{staticClass:"table table-striped"},[e._m(0),r("tbody",[e._l(e.times,function(t){return r("tr",{key:t.id},[r("th",{attrs:{scope:"row"}},[e._v(e._s(t.date))]),r("td",[e._v(e._s(t.worked_from))]),r("td",[e._v(e._s(t.worked_to))]),r("td",[e._v(e._s(t.break_from))]),r("td",[e._v(e._s(t.break_to))]),r("td",[e._v("\n          "+e._s(e.calculateWorktime(t.worked_from,t.worked_to,t.break_from,t.break_to))+"\n        ")]),r("td",[r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close",title:"Eintrag löschen"},on:{click:function(r){return e.deleteTime(t.id)}}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])])}),r("tr",{staticClass:"result-row"},[r("th",{attrs:{scope:"row"}},[e._v("Arbeitszeit gesamt")]),r("td",{attrs:{colspan:"4"}}),r("td",[e._v(e._s(e.getWorkTime()))]),r("td",{attrs:{colspan:"1"}})])],2)])])},F=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("Datum")]),r("th",{attrs:{scope:"col"}},[e._v("von")]),r("th",{attrs:{scope:"col"}},[e._v("bis")]),r("th",{attrs:{scope:"col"}},[e._v("Pause (von)")]),r("th",{attrs:{scope:"col"}},[e._v("Pause (bis)")]),r("th",{attrs:{scope:"col"}},[e._v("Gesamt")]),r("th",{attrs:{scope:"col"}})])])}],H=(r("28a5"),r("ac6a"),r("e814")),P=r.n(H),D={name:"WorktimeResult",props:["loading","times"],data:function(){return{error:""}},methods:{deleteTime:function(e){var t=this;confirm("Soll dieser Eintrag wirklich gelöscht werden?")&&x.deleteTime(this.$store.state.user.id,e).then(function(){t.$emit("get-times")}).catch(function(e){t.error=e})},calculateWorktime:function(e,t,r,s){var n=0,a=0,o=z()(e,"HH:mm"),i=z()(t,"HH:mm"),c=z.a.duration(i.diff(o));if(n=P()(c.asMinutes()),"-"!=r&&"-"!=s){var u=z()(r,"HH:mm"),l=z()(s,"HH:mm"),d=z.a.duration(l.diff(u));n-=P()(d.asMinutes())}while(n>59)n-=60,a++;return a<10&&(a="0"+a),n<10&&(n="0"+n),a+":"+n},getWorkTime:function(){var e=this,t=0,r=0;this.times.forEach(function(s){var n=e.calculateWorktime(s.worked_from,s.worked_to,s.break_from,s.break_to),a=n.split(":");r+=P()(a[0]),t+=P()(a[1])});while(t>59)t-=60,r++;return r<10&&(r="0"+r),t<10&&(t="0"+t),r+":"+t}}},R=D,M=Object(l["a"])(R,$,F,!1,null,null,null),Y=M.exports,E={name:"MainComponent",components:{WorktimeResult:Y},data:function(){return{showFrom:"",showTo:"",insertArea:!1,loading:!1,times:[]}},mounted:function(){this.$store.state.isUserLoggedIn||this.$router.push("login")},created:function(){this.showFrom=z()().startOf("month").format("YYYY-MM-DD"),this.showTo=z()().endOf("month").format("YYYY-MM-DD"),this.getTimes()},methods:{getTimes:function(){var e=this;this.loading=!0,x.getTimes(this.$store.state.user.id,this.showFrom,this.showTo).then(function(t){e.times=t,e.loading=!1}).catch(function(t){e.error=t,e.loading=!1,e.times=[]})},updateFrom:function(){this.showTo=z()(this.showFrom).add(1,"month").format("YYYY-MM-DD"),this.getTimes()},updateTo:function(){this.getTimes()},openInsertModel:function(){this.insertArea=!0,this.insertDate=z()().format("YYYY-MM-DD"),this.insertFrom=z()().startOf("day").add(8,"hours").format("HH:mm"),this.insertTo=z()().startOf("day").add(17,"hours").format("HH:mm"),this.insertBreakFrom=z()().startOf("day").add(13,"hours").format("HH:mm"),this.insertBreakTo=z()().startOf("day").add(13.5,"hours").format("HH:mm")},saveInsert:function(){var e=this;x.saveInsert(this.$store.state.user.id,this.insertDate,this.insertFrom,this.insertTo,this.insertBreakFrom,this.insertBreakTo).then(function(){e.insertArea=!1,e.getTimes()})}}},I=E,L=Object(l["a"])(I,g,j,!1,null,null,null),U=L.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container jumbotron mt-5"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Passwort"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.login()}}},[e._v("Anmelden")]),e.error?r("div",{staticClass:"alert alert-danger mt-3"},[e._v(e._s(e.error))]):e._e()])},N=[],S=(r("7f7f"),{name:"LoginComponent",data:function(){return{name:"",password:"",error:""}},mounted:function(){this.$store.state.isUserLoggedIn&&this.$router.push("dashboard")},methods:{login:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.login({name:this.name,password:this.password});case 3:t=e.sent,this.$store.dispatch("setToken",t.token),this.$store.dispatch("setUser",t.user),this.$router.push("dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}()}}),A=S,W=Object(l["a"])(A,B,N,!1,null,null,null),G=W.exports;s["a"].use(v["a"]);var q=new v["a"]({routes:[{path:"/login",name:"LoginComponent",component:G},{path:"/dashboard",name:"MainComponent",component:U},{path:"*",redirect:"login"}]}),J=r("31bd"),V=r("2f62"),Z=r("0e44");s["a"].use(V["a"]);var K=new V["a"].Store({strict:!0,plugins:[Object(Z["a"])()],state:{token:null,user:null,isUserLoggedIn:!1,welcomeText:"404 - Benutzer nicht angemeldet"},mutations:{setToken:function(e,t){e.token=t,t?(e.isUserLoggedIn=!0,e.welcomeText="Hallo, "+e["user"]+"!"):e.isUserLoggedIn=!1},setUser:function(e,t){e.user=t}},actions:{setToken:function(e,t){var r=e.commit;r("setToken",t)},setUser:function(e,t){var r=e.commit;r("setUser",t)}}});s["a"].config.productionTip=!1,Object(J["sync"])(K,q),new s["a"]({render:function(e){return e(b)},router:q,store:K}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.babcf30a.png"}});
//# sourceMappingURL=app.c5ce0b3f.js.map