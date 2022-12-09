import{bb as T,a$ as U,l as d,be as x,q as i,s as f,b5 as k}from"./index.ec641b5a.js";import{w as S,u as w,S as O,a as I,W as B,E as D,R as W,b as P,N as y,T as E,c as A,d as o,e as M,C as V,f as L,I as G,g as j,h as F,i as Q,j as $,k as q,l as z,m as b}from"./ExtraPadding.01770bc1.js";import{T as c,a as h}from"./constants.3556e8ac.js";import{u as J}from"./use-login-check.7d6be6b3.js";import"./index.a44c3572.js";import"./index.21e94715.js";import"./index.a792be8b.js";import"./routes.96a891de.js";import"./style.2fbf8d03.js";import"./Skeleton.1ecba237.js";import"./Table.395efdc7.js";import"./index.81013a66.js";import"./CSSTransition.2eb23181.js";import"./isEqual.5ca85d66.js";import"./lifecycle.f56c70c9.js";import"./agora.f9cd284f.js";import"./courseware-converting.fa8cab40.js";import"./debounce.3c601f71.js";import"./constants.1a2b4361.js";var n="/Users/yl/github-repo/openflat/packages/flat-pages/src/OneToOnePage/index.tsx";const be=S(T(function({classroomStore:e}){J();const a=U(),m=e.whiteboardStore,t=d.exports.useContext(x),{confirm:v,...g}=w(e),[r,p]=d.exports.useState(!0);return i("div",{className:"one-to-one-class-page-container",children:i("div",{className:"one-to-one-realtime-container",children:i("div",{className:"one-to-one-realtime-box",children:[t?i(c,{left:u(),right:s(),showWindowsSystemBtn:t.showWindowsBtn,onClickWindowsSystemBtn:t.onClickWindowsSystemBtn,onDoubleClick:t.clickWindowMaximize},void 0,!1,{fileName:n,lineNumber:60,columnNumber:29},this):i(c,{left:u(),right:s()},void 0,!1,{fileName:n,lineNumber:68,columnNumber:29},this),i("div",{className:"one-to-one-realtime-content",children:[i("div",{className:"one-to-one-realtime-content-container",children:[i(O,{classroomStore:e},void 0,!1,{fileName:n,lineNumber:72,columnNumber:33},this),i(I,{classroomStore:e,handleOk:()=>e.toggleShareScreen(!0)},void 0,!1,{fileName:n,lineNumber:73,columnNumber:33},this),i(B,{classRoomStore:e,whiteboardStore:m},void 0,!1,{fileName:n,lineNumber:77,columnNumber:33},this)]},void 0,!0,{fileName:n,lineNumber:71,columnNumber:29},this),C()]},void 0,!0,{fileName:n,lineNumber:70,columnNumber:25},this),i(D,{isCreator:e.isCreator,...g},void 0,!1,{fileName:n,lineNumber:84,columnNumber:25},this),i(W,{isCreator:e.isCreator,isRemoteLogin:e.isRemoteLogin,roomStatus:e.roomStatus},void 0,!1,{fileName:n,lineNumber:88,columnNumber:25},this)]},void 0,!0,{fileName:n,lineNumber:58,columnNumber:21},this)},void 0,!1,{fileName:n,lineNumber:57,columnNumber:17},this)},void 0,!1,{fileName:n,lineNumber:56,columnNumber:13},this);function u(){var l,N;return i(f,{children:[i(P,{},void 0,!1,{fileName:n,lineNumber:101,columnNumber:21},this),i(y,{networkQuality:e.networkQuality},void 0,!1,{fileName:n,lineNumber:102,columnNumber:21},this),e.isCreator?((l=e.roomInfo)==null?void 0:l.beginTime)&&i(E,{beginTime:e.roomInfo.beginTime,roomStatus:e.roomStatus},void 0,!1,{fileName:n,lineNumber:105,columnNumber:29},this):i(A,{roomStatus:e.roomStatus,roomType:(N=e.roomInfo)==null?void 0:N.roomType},void 0,!1,{fileName:n,lineNumber:111,columnNumber:25},this)]},void 0,!0)}function s(){return i(f,{children:[m.isWritable&&!e.isRemoteScreenSharing&&i(o,{icon:i(M,{active:e.isScreenSharing},void 0,!1,{fileName:n,lineNumber:125,columnNumber:35},this),title:a("share-screen.self"),onClick:()=>{window.isElectron?e.isScreenSharing?e.toggleShareScreen(!1):e.toggleShareScreenPicker(!0):e.toggleShareScreen()}},void 0,!1,{fileName:n,lineNumber:124,columnNumber:25},this),e.isCreator&&i(V,{isRecording:e.isRecording,loading:e.isRecordingLoading,onClick:()=>{e.toggleRecording({onStop(){k.success(a("recording-completed-tips"))}})}},void 0,!1,{fileName:n,lineNumber:142,columnNumber:25},this),i(L,{classroom:e},void 0,!1,{fileName:n,lineNumber:155,columnNumber:21},this),i(G,{roomInfo:e.roomInfo},void 0,!1,{fileName:n,lineNumber:156,columnNumber:21},this),!(t!=null&&t.showWindowsBtn)&&i(o,{icon:i(j,{},void 0,!1,{fileName:n,lineNumber:159,columnNumber:35},this),title:a("exit"),onClick:()=>v(F.ExitButton)},void 0,!1,{fileName:n,lineNumber:158,columnNumber:25},this),t!=null&&t.showWindowsBtn?null:i(h,{},void 0,!1,{fileName:n,lineNumber:164,columnNumber:58},this),i(o,{icon:r?i(Q,{},void 0,!1,{fileName:n,lineNumber:166,columnNumber:52},this):i($,{},void 0,!1,{fileName:n,lineNumber:166,columnNumber:72},this),title:a(r?"side-panel.hide":"side-panel.show"),onClick:R},void 0,!1,{fileName:n,lineNumber:165,columnNumber:21},this),(t==null?void 0:t.showWindowsBtn)&&i(h,{},void 0,!1,{fileName:n,lineNumber:170,columnNumber:52},this)]},void 0,!0)}function C(){return i(q,{chatSlot:i(z,{classRoomStore:e,disableEndSpeaking:!1,maxSpeakingUsers:1},void 0,!1,{fileName:n,lineNumber:179,columnNumber:25},this),isShow:r,isVideoOn:e.isJoinedRTC,videoSlot:i("div",{className:"one-to-one-rtc-avatar-container",children:[i(b,{avatarUser:e.users.creator,isAvatarUserCreator:!0,isCreator:e.isCreator,rtcAvatar:e.users.creator&&e.rtc.getAvatar(e.users.creator.rtcUID),updateDeviceState:e.updateDeviceState,userUUID:e.userUUID},void 0,!1,{fileName:n,lineNumber:189,columnNumber:29},this),e.firstOnStageUser&&i(b,{avatarUser:e.firstOnStageUser,isAvatarUserCreator:!1,isCreator:e.isCreator,rtcAvatar:e.firstOnStageUser&&e.rtc.getAvatar(e.firstOnStageUser.rtcUID),updateDeviceState:e.updateDeviceState,userUUID:e.userUUID},void 0,!1,{fileName:n,lineNumber:203,columnNumber:33},this)]},void 0,!0,{fileName:n,lineNumber:188,columnNumber:25},this)},void 0,!1,{fileName:n,lineNumber:177,columnNumber:17},this)}function R(){p(l=>!l),m.setRightSideClose(r)}}));export{be as OneToOnePage,be as default};
//# sourceMappingURL=index.031e621e.js.map