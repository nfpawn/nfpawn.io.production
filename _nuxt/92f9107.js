(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{601:function(e,t,r){"use strict";r.r(t);r(365);var n=r(4).a.extend({layout:"app",props:{total:Number,skip:Number,limit:Number},computed:{currentPage:function(){return this.limit?Math.floor(this.skip/this.limit):0},availablePages:function(){return this.limit?Math.ceil(this.total/this.limit):0}},methods:{loadPage:function(e){this.$emit("page",{skip:e*this.limit})},back:function(){this.currentPage-1>=0&&this.loadPage(this.currentPage-1)},next:function(){this.currentPage+1<=this.availablePages-1&&this.loadPage(this.currentPage+1)}}}),l=r(35),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},[r("div",{staticClass:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},[r("div",[r("p",{staticClass:"text-sm text-gray-700"},[e._v("\n        Showing page\n        "),r("span",{staticClass:"font-medium"},[e._v(e._s(e.currentPage+1))]),e._v("\n        of\n        "),r("span",{staticClass:"font-medium"},[e._v(e._s(e.availablePages))])])]),e._v(" "),r("div",[r("nav",{staticClass:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px rounded-l-md border border-gray-300 overflow-hidden",attrs:{"aria-label":"Pagination"}},[e.currentPage-1>=0?r("a",{staticClass:"cursor-pointer relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",on:{click:function(t){return t.preventDefault(),e.back()}}},[r("span",{staticClass:"sr-only"},[e._v("Previous")]),e._v(" "),r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]):e._e(),e._v(" "),e._l(e.availablePages,(function(t){return r("a",{key:t,staticClass:"cursor-pointer relative inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",class:t-1==e.currentPage?"text-purple-400 bg-gray-100":"",on:{click:function(r){return r.preventDefault(),e.loadPage(t-1)}}},[e._v("\n          "+e._s(t)+"\n        ")])})),e._v(" "),e.currentPage+1<=e.availablePages-1?r("a",{staticClass:"cursor-pointer relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",on:{click:function(t){return t.preventDefault(),e.next()}}},[r("span",{staticClass:"sr-only"},[e._v("Next")]),e._v(" "),r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):e._e()],2)])])])}),[],!1,null,null,null);t.default=component.exports}}]);