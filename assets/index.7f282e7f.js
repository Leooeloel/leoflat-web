import{c$ as W,bK as ee,d0 as Y,bQ as S,bM as E,d1 as oe,q as e,bb as P,a$ as $,bc as J,l as U,d2 as k,bN as ie,c7 as le,c5 as C,J as w,b5 as F,d3 as ae,cG as te,bp as ne,bd as re,bF as se,bJ as me,cH as ce,bH as ue,bI as de,bf as I}from"./index.ec641b5a.js";import{u as Ne,e as j}from"./routes.96a891de.js";import{S as fe}from"./SVGCircleInfoOutlined.8967081f.js";import{R as he}from"./index.a43711be.js";import{I as ve}from"./index.21e94715.js";import{R as be}from"./index.af7aa381.js";import{c as pe}from"./index.a44c3572.js";import{j as ge}from"./join-room-handler.09766337.js";import{u as Ue}from"./use-login-check.7d6be6b3.js";function ye(m){return W({},m)}var H=1e3*60,T=60*24,L=T*30,G=T*365;function De(m,o,i){var t,r,u;ee(2,arguments);var b=oe(),n=(t=(r=i==null?void 0:i.locale)!==null&&r!==void 0?r:b.locale)!==null&&t!==void 0?t:Y;if(!n.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var h=pe(m,o);if(isNaN(h))throw new RangeError("Invalid time value");var l=W(ye(i),{addSuffix:Boolean(i==null?void 0:i.addSuffix),comparison:h}),s,N;h>0?(s=S(o),N=S(m)):(s=S(m),N=S(o));var f=String((u=i==null?void 0:i.roundingMethod)!==null&&u!==void 0?u:"round"),v;if(f==="floor")v=Math.floor;else if(f==="ceil")v=Math.ceil;else if(f==="round")v=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var x=N.getTime()-s.getTime(),y=x/H,M=E(N)-E(s),c=(x-M)/H,p=i==null?void 0:i.unit,d;if(p?d=String(p):y<1?d="second":y<60?d="minute":y<T?d="hour":c<L?d="day":c<G?d="month":d="year",d==="second"){var _=v(x/1e3);return n.formatDistance("xSeconds",_,l)}else if(d==="minute"){var q=v(y);return n.formatDistance("xMinutes",q,l)}else if(d==="hour"){var K=v(y/60);return n.formatDistance("xHours",K,l)}else if(d==="day"){var Q=v(c/T);return n.formatDistance("xDays",Q,l)}else if(d==="month"){var A=v(c/L);return A===12&&p!=="month"?n.formatDistance("xYears",1,l):n.formatDistance("xMonths",A,l)}else if(d==="year"){var X=v(c/G);return n.formatDistance("xYears",X,l)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}var O="/Users/yl/github-repo/openflat/packages/flat-components/src/components/FlatIcons/icons/SVGModeLecture.tsx";const xe=({active:m,className:o="",...i})=>e("svg",{className:`${o} flat-icon ${m?"is-active":""}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...i,children:e("path",{className:"flat-icon-fill-color",d:"M4 6v-.625A.625.625 0 0 0 3.375 6H4Zm16 0h.625A.625.625 0 0 0 20 5.375V6Zm-8.625 8a.625.625 0 1 0 1.25 0h-1.25ZM9 5.375H4v1.25h5v-1.25ZM3.375 6v10h1.25V6h-1.25ZM5 17.625h5v-1.25H5v1.25Zm6 1h2v-1.25h-2v1.25Zm3-1h5v-1.25h-5v1.25ZM20.625 16V6h-1.25v10h1.25ZM20 5.375h-5v1.25h5v-1.25ZM11.375 9v5h1.25V9h-1.25Zm1.25 5V9h-1.25v5h1.25ZM15 5.375A3.625 3.625 0 0 0 11.375 9h1.25A2.375 2.375 0 0 1 15 6.625v-1.25ZM9.375 17c0 .898.727 1.625 1.625 1.625v-1.25a.375.375 0 0 1-.375-.375h-1.25Zm9.625.625c.898 0 1.625-.727 1.625-1.625h-1.25a.375.375 0 0 1-.375.375v1.25ZM3.375 16c0 .898.728 1.625 1.625 1.625v-1.25A.375.375 0 0 1 4.625 16h-1.25ZM13 18.625c.898 0 1.625-.727 1.625-1.625h-1.25a.375.375 0 0 1-.375.375v1.25Zm-4-12A2.375 2.375 0 0 1 11.375 9h1.25A3.625 3.625 0 0 0 9 5.375v1.25Z",fill:"#5D6066"},void 0,!1,{fileName:O,lineNumber:20,columnNumber:13},void 0)},void 0,!1,{fileName:O,lineNumber:11,columnNumber:9},void 0);var B="/Users/yl/github-repo/openflat/packages/flat-components/src/components/FlatIcons/icons/SVGRight.tsx";const Re=({active:m,className:o="",...i})=>e("svg",{className:`${o} flat-icon ${m?"is-active":""}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...i,children:e("path",{className:"flat-icon-stroke-color",d:"m10 8 2 2 2 2-2 2-2 2",stroke:"#5D6066",strokeLinejoin:"round",strokeWidth:"1.25"},void 0,!1,{fileName:B,lineNumber:16,columnNumber:13},void 0)},void 0,!1,{fileName:B,lineNumber:7,columnNumber:9},void 0);var V="/Users/yl/github-repo/openflat/packages/flat-components/src/components/FlatIcons/icons/SVGTime.tsx";const Me=({active:m,className:o="",...i})=>e("svg",{className:`${o} flat-icon ${m?"is-active":""}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...i,children:[e("circle",{className:"flat-icon-stroke-color",cx:"12",cy:"12",r:"8",stroke:"#5D6066",strokeLinejoin:"round",strokeWidth:"1.25"},void 0,!1,{fileName:V,lineNumber:16,columnNumber:13},void 0),e("path",{className:"flat-icon-stroke-color",d:"M12 6v6l4 4",stroke:"#5D6066",strokeLinejoin:"round",strokeWidth:"1.25"},void 0,!1,{fileName:V,lineNumber:25,columnNumber:13},void 0)]},void 0,!0,{fileName:V,lineNumber:7,columnNumber:9},void 0);var z="/Users/yl/github-repo/openflat/packages/flat-components/src/components/FlatIcons/icons/SVGUserGroup.tsx";const we=({active:m,className:o="",...i})=>e("svg",{className:`${o} flat-icon ${m?"is-active":""}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...i,children:e("path",{className:"flat-icon-fill-color",d:"m6.449 12.194-.294-.552.294.552Zm.051.681.243-.13-.588-1.103-.243.13.588 1.103Zm2.468-2.414.091-.181-1.118-.56-.09.182 1.117.559Zm-.593-2.272V6.25h-1.25v1.94h1.25ZM10 4.625h.25v-1.25H10v1.25ZM8.375 6.25c0-.897.728-1.625 1.625-1.625v-1.25A2.875 2.875 0 0 0 7.125 6.25h1.25Zm.567 3.308a1.936 1.936 0 0 1-.567-1.369h-1.25c0 .845.336 1.656.933 2.253l.884-.884Zm-2.199 3.187a5.25 5.25 0 0 0 2.225-2.284L7.85 9.9a4 4 0 0 1-1.695 1.741l.588 1.103Zm3.507-8.12c.76 0 1.375.616 1.375 1.375h1.25a2.625 2.625 0 0 0-2.625-2.625v1.25ZM4.625 16c0-1.308.72-2.51 1.875-3.125l-.588-1.103A4.792 4.792 0 0 0 3.375 16h1.25Zm13.169.323-.294.552.294-.552Zm-.243-.13-.294.552.294-.551Zm-7.102 0-.294-.55.294.55Zm.051.682.243-.13-.588-1.103-.243.13.588 1.103Zm2.469-2.414.09-.181-1.118-.56-.09.182 1.117.559Zm-.594-2.272V10.25h-1.25v1.94h1.25Zm3.25-1.939v1.94h1.25v-1.94h-1.25Zm-.684 4.03.09.18 1.119-.558-.091-.181-1.118.559Zm2.316 2.465.243.13.588-1.103-.243-.13-.588 1.103Zm.243.13A3.542 3.542 0 0 1 19.375 20h1.25a4.79 4.79 0 0 0-2.537-4.228l-.588 1.103Zm-2.469-2.414a5.251 5.251 0 0 0 2.226 2.284l.588-1.103a4 4 0 0 1-1.695-1.74l-1.118.559Zm.594-2.272a1.94 1.94 0 0 1-.567 1.37l.884.883a3.185 3.185 0 0 0 .933-2.253h-1.25Zm-3.25-1.939c0-.897.727-1.625 1.625-1.625v-1.25a2.875 2.875 0 0 0-2.875 2.875h1.25Zm.567 3.308a1.936 1.936 0 0 1-.567-1.369h-1.25c0 .845.336 1.655.933 2.253l.884-.884Zm-2.199 3.187a5.251 5.251 0 0 0 2.226-2.284l-1.119-.56a4 4 0 0 1-1.695 1.741l.588 1.103ZM14 8.625c.898 0 1.625.728 1.625 1.625h1.25A2.875 2.875 0 0 0 14 7.375v1.25ZM8.625 20c0-1.308.72-2.51 1.875-3.125l-.588-1.103A4.792 4.792 0 0 0 7.375 20h1.25Z",fill:"#5D6066"},void 0,!1,{fileName:z,lineNumber:16,columnNumber:13},void 0)},void 0,!1,{fileName:z,lineNumber:7,columnNumber:9},void 0);var a="/Users/yl/github-repo/openflat/packages/flat-components/src/components/RoomDetailPage/RoomDetailBody/index.tsx";const Ze=P(function({roomInfo:o}){const i=$(),t=J(),{beginTime:r,endTime:u,inviteCode:b,periodicUUID:n,roomUUID:h}=o,l=n||h,s=U.exports.useMemo(()=>r?k(r,t):null,[r,t]),N=U.exports.useMemo(()=>u?k(u,t):null,[u,t]);return e("div",{className:"room-detail-body",children:e("div",{className:"room-detail-body-content",children:e("table",{children:e("tbody",{children:[e("tr",{children:[e("td",{className:"room-detail-body-content-left",children:[e(fe,{},void 0,!1,{fileName:a,lineNumber:40,columnNumber:37},this),e("span",{children:i("status")},void 0,!1,{fileName:a,lineNumber:41,columnNumber:37},this)]},void 0,!0,{fileName:a,lineNumber:39,columnNumber:33},this),e("td",{className:"room-detail-body-content-right",children:e(he,{room:o},void 0,!1,{fileName:a,lineNumber:44,columnNumber:37},this)},void 0,!1,{fileName:a,lineNumber:43,columnNumber:33},this)]},void 0,!0,{fileName:a,lineNumber:38,columnNumber:29},this),e("tr",{children:[e("td",{className:"room-detail-body-content-left",children:[e(Me,{},void 0,!1,{fileName:a,lineNumber:49,columnNumber:37},this),e("span",{children:i("time")},void 0,!1,{fileName:a,lineNumber:50,columnNumber:37},this)]},void 0,!0,{fileName:a,lineNumber:48,columnNumber:33},this),e("td",{className:"room-detail-body-content-right",children:e("span",{children:[s==null?void 0:s.date," ",s==null?void 0:s.time," ~ ","",N==null?void 0:N.date," ",N==null?void 0:N.time]},void 0,!0,{fileName:a,lineNumber:53,columnNumber:37},this)},void 0,!1,{fileName:a,lineNumber:52,columnNumber:33},this)]},void 0,!0,{fileName:a,lineNumber:47,columnNumber:29},this),e("tr",{children:[e("td",{className:"room-detail-body-content-left",children:[e(xe,{},void 0,!1,{fileName:a,lineNumber:61,columnNumber:37},this),e("span",{children:i("room-uuid")},void 0,!1,{fileName:a,lineNumber:62,columnNumber:37},this)]},void 0,!0,{fileName:a,lineNumber:60,columnNumber:33},this),e("td",{className:"room-detail-body-content-right room-detail-body-selectable",children:ie(l,b)},void 0,!1,{fileName:a,lineNumber:64,columnNumber:33},this)]},void 0,!0,{fileName:a,lineNumber:59,columnNumber:29},this),e("tr",{children:[e("td",{className:"room-detail-body-content-left",children:[e(we,{},void 0,!1,{fileName:a,lineNumber:70,columnNumber:37},this),e("span",{children:i("room-type")},void 0,!1,{fileName:a,lineNumber:71,columnNumber:37},this)]},void 0,!0,{fileName:a,lineNumber:69,columnNumber:33},this),e("td",{className:"room-detail-body-content-right",children:i(`class-room-type.${o.roomType||le.BigClass}`)},void 0,!1,{fileName:a,lineNumber:73,columnNumber:33},this)]},void 0,!0,{fileName:a,lineNumber:68,columnNumber:29},this)]},void 0,!0,{fileName:a,lineNumber:37,columnNumber:25},this)},void 0,!1,{fileName:a,lineNumber:36,columnNumber:21},this)},void 0,!1,{fileName:a,lineNumber:35,columnNumber:17},this)},void 0,!1,{fileName:a,lineNumber:34,columnNumber:13},this)});var D="/Users/yl/github-repo/openflat/packages/flat-components/src/components/RoomDetailPage/RoomDetailFooter/index.tsx";const Se=P(function({room:o,userName:i,inviteBaseUrl:t,isCreator:r,isPeriodicDetailsPage:u,periodicWeeks:b,onJoinRoom:n,onReplayRoom:h,onModifyRoom:l,onCancelRoom:s,onCopyInvitation:N}){const f=$(),[v,x]=U.exports.useState(!1),[y,M]=U.exports.useState(!1),c=()=>M(!1);if(o.roomStatus===C.Stopped)return e("div",{className:"room-detail-footer-btn-container",children:e(w,{className:"room-detail-footer-btn",disabled:!o.hasRecord,onClick:h,children:f("view-replay")},void 0,!1,{fileName:D,lineNumber:48,columnNumber:21},this)},void 0,!1,{fileName:D,lineNumber:47,columnNumber:17},this);const p=!r||o.roomStatus===C.Idle,d=f(r?"cancel-room":"remove-room");return e("div",{className:"room-detail-footer-btn-container",children:[e(w,{danger:!0,className:"room-detail-footer-btn",disabled:!p,onClick:()=>x(!0),children:d},void 0,!1,{fileName:D,lineNumber:64,columnNumber:17},this),r&&e(w,{className:"room-detail-footer-btn",disabled:!p,onClick:l,children:f("modify-room")},void 0,!1,{fileName:D,lineNumber:73,columnNumber:21},this),e(w,{className:"room-detail-footer-btn",onClick:()=>M(!0),children:f("invitation")},void 0,!1,{fileName:D,lineNumber:81,columnNumber:17},this),e(w,{className:"room-detail-footer-btn",type:"primary",onClick:n,children:r&&o.roomStatus===C.Idle?f("begin"):f("join-room")},void 0,!1,{fileName:D,lineNumber:87,columnNumber:17},this),e(ve,{baseUrl:t,periodicWeeks:b,room:o,userName:i,visible:y,onCancel:c,onCopy:_=>{N(_),F.success(f("copy-success")),c()}},void 0,!1,{fileName:D,lineNumber:90,columnNumber:17},this),e(be,{cancelModalVisible:v,isCreator:r,isPeriodicDetailsPage:u,periodicUUID:o==null?void 0:o.periodicUUID,roomUUID:o==null?void 0:o.roomUUID,onCancel:()=>x(!1),onCancelRoom:s},void 0,!1,{fileName:D,lineNumber:103,columnNumber:17},this)]},void 0,!0,{fileName:D,lineNumber:63,columnNumber:13},this)});var g="/Users/yl/github-repo/openflat/packages/flat-components/src/components/RoomDetailPage/RoomDetailHeader/index.tsx";const Ie=P(function({roomInfo:o,showRoomCountVisible:i,jumpToPeriodicRoomDetailPage:t}){const r=$(),u=J(),{beginTime:b,endTime:n}=o,h=u,l=U.exports.useMemo(()=>b?k(b,u):null,[b,u]),s=U.exports.useMemo(()=>n?k(n,u):null,[n,u]);return e("div",{className:"room-detail-header-body",children:[e("div",{className:"room-detail-header-container",children:[e("div",{className:"room-detail-header-content-left",children:[e("div",{className:"room-detail-header-content-title",children:e("span",{children:o.title},void 0,!1,{fileName:g,lineNumber:41,columnNumber:29},this)},void 0,!1,{fileName:g,lineNumber:40,columnNumber:25},this),e("div",{className:"room-detail-header-content-title-cut-line"},void 0,!1,{fileName:g,lineNumber:43,columnNumber:25},this),e("span",{className:"room-detail-header-content-time",children:[" ",l==null?void 0:l.time," - ","",s==null?void 0:s.time]},void 0,!0,{fileName:g,lineNumber:44,columnNumber:25},this),o.endTime&&o.beginTime&&e("span",{className:"room-detail-header-content-time-during",children:"("+De(o.endTime,o.beginTime,{locale:h!=null&&h.startsWith("zh")?ae:Y})+")"},void 0,!1,{fileName:g,lineNumber:50,columnNumber:29},this)]},void 0,!0,{fileName:g,lineNumber:39,columnNumber:21},this),e("div",{className:"room-detail-header-content-right",children:i&&e("span",{className:"room-detail-header-content-room-count",onClick:t,children:[r("view-all-rooms-in-periodic-rooms",{count:o.count}),e(Re,{},void 0,!1,{fileName:g,lineNumber:66,columnNumber:33},this)]},void 0,!0,{fileName:g,lineNumber:61,columnNumber:29},this)},void 0,!1,{fileName:g,lineNumber:59,columnNumber:21},this)]},void 0,!0,{fileName:g,lineNumber:38,columnNumber:17},this),e("div",{className:"room-detail-header-content-bottom-cut-line"},void 0,!1,{fileName:g,lineNumber:71,columnNumber:17},this)]},void 0,!0,{fileName:g,lineNumber:37,columnNumber:13},this)});var R="/Users/yl/github-repo/openflat/packages/flat-components/src/components/RoomDetailPage/index.tsx";const ke=({roomInfo:m,showRoomCountVisible:o,jumpToPeriodicRoomDetailPage:i,...t})=>e("div",{className:"room-detail-panel-container",children:[e("div",{className:"room-detail-panel-header-container",children:e(Ie,{jumpToPeriodicRoomDetailPage:i,roomInfo:m,showRoomCountVisible:o},void 0,!1,{fileName:R,lineNumber:19,columnNumber:17},void 0)},void 0,!1,{fileName:R,lineNumber:18,columnNumber:13},void 0),e("div",{className:"room-detail-panel-body",children:e(Ze,{roomInfo:m},void 0,!1,{fileName:R,lineNumber:26,columnNumber:17},void 0)},void 0,!1,{fileName:R,lineNumber:25,columnNumber:13},void 0),e("div",{className:"room-detail-panel-footer",children:e(Se,{...t},void 0,!1,{fileName:R,lineNumber:29,columnNumber:17},void 0)},void 0,!1,{fileName:R,lineNumber:28,columnNumber:13},void 0)]},void 0,!0,{fileName:R,lineNumber:17,columnNumber:9},void 0);var Z="/Users/yl/github-repo/openflat/packages/flat-pages/src/RoomDetailPage/index.tsx";const Ee=P(function(){Ue();const o=$(),{roomUUID:i,periodicUUID:t}=te(),r=Ne(),u=ne(),b=U.exports.useContext(re),n=U.exports.useContext(se),h=U.exports.useContext(me),l=n.rooms.get(i),s=t?n.periodicRooms.get(t):void 0;if(U.exports.useEffect(()=>{t?n.syncPeriodicSubRoomInfo({roomUUID:i,periodicUUID:t}).catch(j):n.syncOrdinaryRoomInfo(i).catch(j)},[n,i,t]),U.exports.useEffect(()=>{l&&h.configure({title:e("h1",{className:"room-detail-page-header-title",children:l.title},void 0,!1,{fileName:Z,lineNumber:45,columnNumber:24},this),onBackPreviousPage:()=>u.goBack()})},[l==null?void 0:l.title]),!l)return e(ce,{timeMS:3*1e3},void 0,!1,{fileName:Z,lineNumber:55,columnNumber:16},this);const N=l.ownerUUID===b.userUUID;async function f(){if(l){const c=l.roomUUID;b.isTurnOffDeviceTest||window.isElectron?await ge(c,r):r(I.DevicesTestPage,{roomUUID:c})}}async function v(c){try{!N&&t?await n.cancelRoom({all:!0,periodicUUID:t}):await n.cancelRoom({all:c,roomUUID:i,periodicUUID:t})}catch(p){console.log(p),j(p)}F.success(o("the-room-has-been-cancelled")),u.goBack()}function x(){l!=null&&l.periodicUUID&&r(I.PeriodicRoomDetailPage,{periodicUUID:l.periodicUUID})}function y(){if(l){const{roomType:c,roomUUID:p,ownerUUID:d}=l;if(!c)return void F.error("Unknown roomType");window.isElectron?r(I.ReplayPage,{roomType:c,roomUUID:p,ownerUUID:d}):window.open(`/replay/${c}/${p}/${d}/`,"_blank")}}function M(){l&&r(I.ModifyOrdinaryRoomPage,{roomUUID:l.roomUUID,periodicUUID:l.periodicUUID})}return e("div",{className:"room-detail-page-container",children:e("div",{className:"room-detail-page-panel-container",children:e(ke,{inviteBaseUrl:ue,isCreator:N,isPeriodicDetailsPage:!1,jumpToPeriodicRoomDetailPage:x,periodicWeeks:s==null?void 0:s.periodic.weeks,room:l,roomInfo:l,showRoomCountVisible:t?l.roomStatus!==de.Stopped:!1,userName:l.ownerName||"",onCancelRoom:v,onCopyInvitation:c=>navigator.clipboard.writeText(c),onJoinRoom:f,onModifyRoom:M,onReplayRoom:y},void 0,!1,{fileName:Z,lineNumber:129,columnNumber:17},this)},void 0,!1,{fileName:Z,lineNumber:128,columnNumber:13},this)},void 0,!1,{fileName:Z,lineNumber:127,columnNumber:9},this)});export{Ee as RoomDetailPage,Ee as default};
//# sourceMappingURL=index.7f282e7f.js.map