"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var r=e(861),a=e(439),c=e(311),s=e.n(c),o=e(791),u=e(689),i=e(753),p={CastList:"Cast_CastList__2oQ+0",CastImg:"Cast_CastImg__QYB7V",NoPhoto:"Cast_NoPhoto__B19ZH",CastCharacter:"Cast_CastCharacter__u5VIV",NoInfo:"Cast_NoInfo__-ZrwN"},f=e(184),_=function(){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],_=(0,u.UO)().movieId;return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.x1)(_);case 3:n=t.sent,c(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[_]),(0,f.jsx)(f.Fragment,{children:e.length?(0,f.jsx)("ul",{className:p.CastList,children:e.map((function(t){var n=t.profile_path,e=t.id,r=t.name,a=t.character;return(0,f.jsxs)("li",{className:p.CastActor,children:[n?(0,f.jsx)("img",{className:p.CastImg,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(n),alt:r}):(0,f.jsx)("img",{className:p.NoPhoto,src:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",alt:"no found img"}),(0,f.jsxs)("p",{className:p.CastName,children:[" ",r]}),(0,f.jsxs)("p",{className:p.CastCharacter,children:["Character: ",a]})]},e)}))}):(0,f.jsx)("p",{className:p.NoInfo,children:"There is no information about Cast"})})}},753:function(t,n,e){e.d(n,{Uh:function(){return l},Lo:function(){return i},x1:function(){return h},ei:function(){return d},R8:function(){return f}});var r=e(861),a=e(311),c=e.n(a),s=e(294),o={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,u={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL;function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function h(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(n,"/reviews?api_key =").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=76.24bdf6a3.chunk.js.map