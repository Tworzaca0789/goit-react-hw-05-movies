"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),c=n(311),u=n.n(c),i=n(791),o=n(689),s=n(753),p={ReviewList:"Reviews_ReviewList__efzYn",ReviewEmpty:"Reviews_ReviewEmpty__WhpVD"},f=n(184);function v(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,o.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ei)(v);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),(0,f.jsx)(f.Fragment,{children:n.length?(0,f.jsx)("ul",{className:p.ReviewList,children:n.map((function(e){var t=e.id,n=e.content;return(0,f.jsx)("li",{className:p.ReviewItem,children:(0,f.jsx)("p",{className:p.ReviewContent,children:n})},t)}))}):(0,f.jsx)("p",{className:p.ReviewEmpty,children:"There is no information about Reviews"})})}},753:function(e,t,n){n.d(t,{Uh:function(){return l},Lo:function(){return s},x1:function(){return _},ei:function(){return d},R8:function(){return f}});var r=n(861),a=n(311),c=n.n(a),u=n(294),i={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,o={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL;function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function _(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key =").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=168.03f160d1.chunk.js.map