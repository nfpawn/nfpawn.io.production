(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{609:function(e,t,n){"use strict";n.r(t);var r=n(8),c=(n(43),n(4)),o=n(170),l=c.a.extend({middleware:["require-unauth"],methods:{login:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$eth.provider.send("eth_requestAccounts");case 3:return t.next=5,e.$eth.getAccounts();case 5:return n=t.sent[0],"I accept NFpawn terms and conditions.",r=Object(o.hashMessage)("I accept NFpawn terms and conditions."),t.next=10,e.$eth.sign(n,r);case 10:c=t.sent,localStorage.setItem("auth/signature/".concat(n),c),e.$router.back(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log("Error: Unable to authenticate",t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}}),d=n(35),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"container mx-auto px-4 py-4",on:{click:function(t){return e.login()}}},[e._v("\n    LOGIN\n")])}),[],!1,null,null,null);t.default=component.exports}}]);