(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{601:function(t,e,n){"use strict";n.r(e);n(365);var r=n(4).a.extend({layout:"app",props:{total:Number,skip:Number,limit:Number},computed:{currentPage:function(){return this.limit?Math.floor(this.skip/this.limit):0},availablePages:function(){return this.limit?Math.ceil(this.total/this.limit):0}},methods:{loadPage:function(t){this.$emit("page",{skip:t*this.limit})},back:function(){this.currentPage-1>=0&&this.loadPage(this.currentPage-1)},next:function(){this.currentPage+1<=this.availablePages-1&&this.loadPage(this.currentPage+1)}}}),l=n(35),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},[n("div",{staticClass:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},[n("div",[n("p",{staticClass:"text-sm text-gray-700"},[t._v("\n        Showing page\n        "),n("span",{staticClass:"font-medium"},[t._v(t._s(t.currentPage+1))]),t._v("\n        of\n        "),n("span",{staticClass:"font-medium"},[t._v(t._s(t.availablePages))])])]),t._v(" "),n("div",[n("nav",{staticClass:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px rounded-l-md border border-gray-300 overflow-hidden",attrs:{"aria-label":"Pagination"}},[t.currentPage-1>=0?n("a",{staticClass:"cursor-pointer relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",on:{click:function(e){return e.preventDefault(),t.back()}}},[n("span",{staticClass:"sr-only"},[t._v("Previous")]),t._v(" "),n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]):t._e(),t._v(" "),t._l(t.availablePages,(function(e){return n("a",{key:e,staticClass:"cursor-pointer relative inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",class:e-1==t.currentPage?"text-purple-400 bg-gray-100":"",on:{click:function(n){return n.preventDefault(),t.loadPage(e-1)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),t.currentPage+1<=t.availablePages-1?n("a",{staticClass:"cursor-pointer relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",on:{click:function(e){return e.preventDefault(),t.next()}}},[n("span",{staticClass:"sr-only"},[t._v("Next")]),t._v(" "),n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):t._e()],2)])])])}),[],!1,null,null,null);e.default=component.exports},619:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(64),n(31),n(86),n(87),n(43),n(4)),o=n(132),c=l.a.extend({layout:"app",data:function(){return{data:{id:"6060b13c5914990f8bfb8d0b",createdAt:new Date,name:"XXXX"},total:0,skip:0,limit:2,offers:[]}},filters:{formatDate:function(t){return Intl.DateTimeFormat("us-EN").format(new Date(parseInt("".concat(t,"000"))))},formatColleteral:function(t){return Object(o.a)(t)}},methods:{cancel:function(){console.log("To be canceled ...")},onPage:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.loadCommitOffers(t.skip));case 1:case"end":return n.stop()}}),n)})))()},loadCommitOffers:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.get("".concat("http://api.nfpawn.io","/commits/").concat(e.$route.params.id,"/offers?skip=").concat(t,"&limit=").concat(e.limit)).then((function(t){e.total=t.data.meta.totalCount,e.skip=t.data.meta.skip,e.limit=t.data.meta.limit,e.offers=t.data.data.map((function(t){return t.saleAmountReadable=Object(o.c)(t.saleAmount),t.buybackAmountReadable=Object(o.c)(t.buybackAmount),t}))}));case 2:e.$router.push("".concat(e.$route.path,"?skip=").concat(e.skip,"&limit=").concat(e.limit));case 3:case"end":return n.stop()}}),n)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.skip=parseInt((t.$route.query.skip||t.skip).toString()),t.limit=parseInt((t.$route.query.limit||t.limit).toString()),e.next=5,t.loadCommitOffers(t.skip);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}),d=n(35),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-screen"},[n("div",{staticClass:"text-black bg-white h-16 px-5 py-3 pl-12 text-right"},[n("div",{staticClass:"float-left pt-2 text-gray-400"},[n("button",{staticClass:"bg-purple-400 text-white font-semibold mb-4 rounded inline-block items-center px-4 py-2",on:{click:function(e){return t.$router.go(-1)}}},[n("span",[t._v("Back")])]),t._v("\n\n      Broker / Offer\n    ")]),t._v(" "),n("button",{staticClass:"bg-purple-400 text-white font-semibold mb-4 rounded inline-block items-center px-4 py-2",on:{click:t.cancel}},[n("span",[t._v("Cancel")])])]),t._v(" "),n("div",{staticClass:"flex-1 overflow-y-auto p-14"},[n("div",{staticClass:"py-10"},[n("h1",{staticClass:"text-4xl font-semibold text-gray-700 pb-2"},[t._v(t._s(t.data.name))])]),t._v(" "),n("div",{staticClass:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},[n("table",{staticClass:"min-w-full divide-y divide-gray-200"},[t._m(0),t._v(" "),n("tbody",{staticClass:"bg-white divide-y divide-gray-200"},t._l(t.offers,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"px-6 py-4 whitespace-nowrap text-base"},[n("div",{staticClass:"pt-2"},[n("span",[t._v("#"+t._s(e.nftId))]),n("br"),t._v(" "),n("span",[t._v(t._s(e.nftContract))])])]),t._v(" "),n("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[n("span",[t._v(t._s(e.saleAmountReadable))])]),t._v(" "),n("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[n("span",[t._v(t._s(e.buybackAmountReadable))])]),t._v(" "),n("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[n("span",[t._v(t._s(t._f("formatColleteral")(e.termUntilCollateralAtRisk)))])]),t._v(" "),n("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[t._v("\n            "+t._s(t._f("formatDate")(e.saleExpiration))+"\n          ")])])})),0)])])]),t._v(" "),n("div",{staticClass:"text-center text-black bg-white h-16"},[n("Pagination",{attrs:{total:t.total,skip:t.skip,limit:t.limit},on:{page:t.onPage}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"bg-gray-50"},[n("tr",[n("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n            Asset\n          ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n            Offer\n          ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n            Return\n          ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n            Return in\n          ")]),t._v(" "),n("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n            Expiration date\n          ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(601).default})}}]);