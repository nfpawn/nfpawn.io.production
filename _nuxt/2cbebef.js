(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{616:function(e,t,r){"use strict";r.r(t);var n=r(8),o=(r(43),r(4).a.extend({methods:{selectFile:function(){this.$refs.input.click()},onFileDrag:function(e){this.processFile(e.dataTransfer.files[0])},onFileClick:function(e){this.processFile(e.target.files[0])},processFile:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("offers-new/parseFile",{file:e});case 3:return r.next=5,t.$store.dispatch("offers-new/loadSaleContracts");case 5:return r.next=7,t.$store.dispatch("offers-new/updateSaleContractsApproval");case 7:t.$router.push({path:"/offers/new/approve"}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}})),l=r(35),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"py-10"},[r("h1",{staticClass:"text-4xl font-semibold text-gray-700 pb-2"},[e._v("Create new offer")]),e._v(" "),r("div",{staticClass:"text-xl text-gray-400 max-w-xl"},[e._v("\n      All offers are limited time offers made by independent brokers not endorsed or reviewed by NF Pawn.\n    ")]),e._v(" "),r("div",{staticClass:"mt-5 p-14 border-2 border-dashed border-gray-400 text-center text-gray-600 cursor-pointer",on:{click:function(t){return e.selectFile()},drop:function(t){return t.preventDefault(),e.onFileDrag(t)},dragover:function(e){e.preventDefault()}}},[r("svg",{staticClass:"h-5 inline-block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clip-rule":"evenodd"}})]),e._v(" "),r("span",[e._v("Select a CSV file with offers.")]),e._v(" "),r("input",{ref:"input",staticClass:"border-2 hidden",attrs:{type:"file"},on:{change:e.onFileClick}})])])])}),[],!1,null,null,null);t.default=component.exports}}]);