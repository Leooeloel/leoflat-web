var G=Object.defineProperty,x=(i,n,e)=>n in i?G(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,d=(i,n,e)=>(x(i,typeof n!="symbol"?n+"":n,e),e);const T="!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",V=T.length,M=Array(20),N=()=>{for(let i=0;i<20;i++)M[i]=T.charAt(Math.random()*V);return M.join("")};function O(i){try{return i()}catch(n){console.error(n)}}class X{constructor(){this.disposers=new Map}addDisposer(n,e=this.genUID()){return this.flush(e),this.disposers.set(e,Array.isArray(n)?()=>n.forEach(O):n),e}add(n,e=this.genUID()){const s=n();return s?this.addDisposer(s,e):e}addEventListener(n,e,s,r,t=this.genUID()){return n.addEventListener(e,s,r),this.addDisposer(()=>n.removeEventListener(e,s,r),t),t}setTimeout(n,e,s=this.genUID()){const r=window.setTimeout(()=>{this.remove(s),n()},e);return this.addDisposer(()=>window.clearTimeout(r),s)}setInterval(n,e,s=this.genUID()){const r=window.setInterval(n,e);return this.addDisposer(()=>window.clearInterval(r),s)}remove(n){const e=this.disposers.get(n);return this.disposers.delete(n),e}flush(n){const e=this.remove(n);if(e)try{e()}catch(s){console.error(s)}}flushAll(){this.disposers.forEach(O),this.disposers.clear()}genUID(){let n;do n=N();while(this.disposers.has(n));return n}}function D(i){return i!=null&&typeof i=="object"&&!Array.isArray(i)}function R(i,n){let e=i.getAttributes();if(e||(i.setAttributes(n),e=i.getAttributes()),!e)throw new Error("[NetlessAppMonaco] No attributes");return D(n)&&Object.keys(n).forEach(s=>{Object.prototype.hasOwnProperty.call(e,s)||i.updateAttributes([s],n[s])}),e}let w;function B(i){if(window.GGBApplet)return Promise.resolve(window.GGBApplet);if(w)return w;{const n=document.createElement("script");if(w=new Promise((e,s)=>{n.onload=()=>e(window.GGBApplet),n.onerror=()=>{w=void 0,s()}}),i){const e=i.lastIndexOf("GeoGebra")+8;n.src=i.slice(0,e)+"/deployggb.js"}else n.src="https://www.geogebra.org/apps/deployggb.js";return document.head.appendChild(n),w}}const P={appName:"classic",showMenuBar:!0,showAlgebraInput:!0,showToolBar:!0,customToolBar:"0 39 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",showToolBarHelp:!1,showResetIcon:!1,enableFileFeatures:!1,enableLabelDrags:!1,enableShiftDragZoom:!0,enableRightClick:!0,errorDialogsActive:!1,allowStyleBar:!1,preventFocus:!1,useBrowserForJS:!0,language:"en",borderColor:"transparent"},S=class{constructor(i){d(this,"clientId"),d(this,"nickName"),d(this,"api"),d(this,"context"),d(this,"delay"),d(this,"currentAnimations",[]),d(this,"embeds",{}),d(this,"storageCallback",0),d(this,"initAllEmbeds",()=>{for(const e of this.api.getAllObjectNames("embed"))this.initEmbed(e)}),d(this,"objectsInWaiting",[]),d(this,"updateCallback",0),d(this,"dispatchUpdates",()=>{this.updateCallback||(this.updateCallback=setTimeout(this._dispatchUpdates,this.delay))}),d(this,"_dispatchUpdates",()=>{const{objectsInWaiting:e}=this;this.objectsInWaiting=[];for(const s of e){const r=this.api.getEmbeddedCalculators(!0),t=r==null?void 0:r[s];t!=null&&t.controller&&this.sendEvent("evalGMContent",t.toJSON(),s);const a=this.api.getCommandString(s,!1);if(a){this.sendEvent("evalCommand",`${s} := ${a}`,s);const l=this.api.getObjectsOfItsGroup(s);l!=null&&l.length&&this.sendEvent("addToGroup",s,l)}if(!a||this.api.isMoveable(s)){const l=this.api.getXML(s);this.sendEvent("evalXML",l,s)}this.sendEvent("select",s,!0)}this.updateCallback=0}),d(this,"updateListener",e=>{(this.api.hasUnlabeledPredecessors(e)||this.api.isMoveable(e))&&!this.currentAnimations.includes(e)&&(this.objectsInWaiting.includes(e)||(this.objectsInWaiting.push(e),this.dispatchUpdates()))}),d(this,"addListener",e=>{const s=this.api.getImageFileName(e);if(s){const a=this.api.getFileJSON();for(const l of a.archive)l.fileName.includes(s)&&this.sendEvent("addImage",JSON.stringify(l))}const r=this.api.getXML(e),t=this.api.getCommandString(e)&&this.api.getAlgorithmXML(e);this.sendEvent("addObject",t||r,e),this.sendEvent("deselect"),this.sendEvent("select",e,!0),setTimeout(()=>this.initEmbed(e),500)}),d(this,"removeListener",e=>{this.sendEvent("deleteObject",e),delete this.embeds[e]}),d(this,"renameListener",(e,s)=>{this.sendEvent("renameObject",e,s)}),d(this,"lastEditingLabel"),d(this,"isSyncingViewState",0),d(this,"stopSyncViewState",()=>{this.isSyncingViewState=0}),d(this,"_flushViewState",()=>{const{invXscale:e,invYscale:s,xMin:r,yMin:t}=JSON.parse(this.api.getViewProperties(0)),a=1/e,l=-r/e,o=-t/s;return this.viewState={scale:a,x:l,y:o},this.viewSyncCallback=0,this.viewState}),d(this,"clientListener",e=>{let s,r;const t=e.type;switch(t){case"updateStyle":s=e.target,r=this.api.getXML(s),this.sendEvent("evalXML",r);break;case"editorStart":this.lastEditingLabel=e.target;break;case"editorKeyTyped":r=this.api.getEditorState(),this.sendEvent("setEditorState",r,this.lastEditingLabel);break;case"editorStop":this.lastEditingLabel=void 0,this.sendEvent("setEditorState",JSON.stringify({content:""}));break;case"deselect":this.sendEvent("deselect",e.target);break;case"select":this.sendEvent("select",e.target);break;case"embeddedContentChanged":s=e[1],r=e[2],this.sendEvent("embeddedContentChanged",r,s);break;case"undo":case"redo":case"addPolygonComplete":r=this.api.getXML(),this.sendEvent("setXML",r);break;case"addSlide":this.sendEvent(t);break;case"removeSlide":case"moveSlide":case"selectSlide":case"clearSlide":case"orderingChange":r=e[2],this.sendEvent(t,r);break;case"pasteSlide":({cardIdx:r,ggbFile:s}=e),this.sendEvent(t,r,s);break;case"startAnimation":s=e[1],this.currentAnimations.push(s),this.sendEvent(t,s,s);break;case"stopAnimation":s=e[1],this.currentAnimations.splice(this.currentAnimations.indexOf(s),1),this.sendEvent(t,s,s);break;case"groupObjects":case"ungroupObjects":r=e.targets,this.sendEvent(t,r);break;case"pasteElmsComplete":r=e.targets.map(a=>this.api.getXML(a)).join(""),this.sendEvent("evalXML",r);break;case"addGeoToTV":case"removeGeoFromTV":r=e[1],this.sendEvent(t,r);break;case"setValuesOfTV":r=e[2],this.sendEvent(t,r);break;case"showPointsTV":({column:r,show:s}=e),this.sendEvent(t,r,s);break;case"lockTextElement":case"unlockTextElement":r=e[1],this.sendEvent(t,r);break;case"viewChanged2D":this.viewSyncCallback||(this.isSyncingViewState||this.viewState.scale===0?this.viewSyncCallback=setTimeout(this._flushViewState,this.delay):this.viewSyncCallback=setTimeout(this._sendViewSyncEvent,this.delay));break;case"mouseDown":case"deleteGeos":case"dragEnd":break;default:console.debug("[GeoGebra] unhandled event ",e.type,e)}}),d(this,"viewSyncCallback",0),d(this,"viewState",{scale:0,x:0,y:0}),d(this,"_sendViewSyncEvent",()=>{this._flushViewState(),this.sendEvent("viewChanged2D",JSON.stringify(this.viewState)),this.viewSyncCallback=0}),d(this,"_delayedRegisterListeners",()=>{this.registerListeners(),this.viewSyncCallback=0}),d(this,"conflictedObjects",[]),d(this,"dispatch",e=>{var s,r;if(this.conflictedObjects.includes(e.label)&&e.type!=="conflictResolution")return;const t=e.embedLabel?this.embeds[e.embedLabel]:this,a=e.type,l=e.label,o=e.content;if(console.debug("[GeoGebra] receive:",a,l,o),a==="addObject")if(t.api.exists(l))if(this.context.isDecider)if(this.context.isDecider(this.clientId)){let c=1,p;do p=`${l}_${c}`,c++;while(t.api.exists(p));this.unregisterListeners(),t.api.renameObject(l,p),this.registerListeners();const h=t.api.getAlgorithmXML(p)||t.api.getXML(p);this.sendEvent("conflictResolution",h,l)}else this.conflictedObjects.push(l);else t.evalXML(o),t.api.previewRefresh();else t.evalXML(o),t.api.previewRefresh();else if(a==="conflictResolution"){const c=this.conflictedObjects.indexOf(l);c!==-1&&this.conflictedObjects.splice(c,1),t.evalXML(o),t.api.previewRefresh()}else if(a==="evalXML")t.evalXML(o),t.api.previewRefresh();else if(a==="setXML")t.setXML(o);else if(a==="evalCommand")t.evalCommand(o),t.api.previewRefresh();else if(a==="deleteObject")t.unregisterListeners(),t===this&&delete this.embeds[o],t.api.deleteObject(o),t.registerListeners();else if(a==="setEditorState")t.unregisterListeners(),t.api.setEditorState(o,l),t.registerListeners();else if(a==="addImage"){const c=JSON.parse(o);t.api.addImage(c.fileName,c.fileContent)}else if(["addSlide","removeSlide","moveSlide","clearSlide"].includes(a))t.api.handleSlideAction(a,o);else if(a==="selectSlide")t.unregisterListeners(),t.api.selectSlide(o),t.registerListeners();else if(a==="renameObject")t.unregisterListeners(),t.api.renameObject(o,l),t.registerListeners();else if(a==="pasteSlide")t.api.handleSlideAction(a,o,l);else if(a==="evalGMContent"){const c=(t.api.getEmbeddedCalculators(!0)||{})[l];c&&c.loadFromJSON(o)}else if(a==="startAnimation")t.api.setAnimating(l,!0),t.api.startAnimation();else if(a==="stopAnimation")t.api.setAnimating(l,!1);else if(a==="select"){if(o){const c=((r=(s=this.context).getColor)==null?void 0:r.call(s,e.clientId))||"#80808080";t.api.addMultiuserSelection(String(e.nickName),c,o,!!l)}}else if(a==="deselect")t.api.removeMultiuserSelections(String(e.nickName));else if(a==="orderingChange")t.api.updateOrdering(o);else if(a==="groupObjects")t.api.groupObjects(o);else if(a==="ungroupObjects")t.api.ungroupObjects(o);else if(a==="addToGroup")t.api.addToGroup(o,l);else if(a==="embeddedContentChanged")t.api.setEmbedContent(l,o);else if(a==="addGeoToTV")t.api.addGeoToTV(o);else if(a==="setValuesOfTV")t.api.setValuesOfTV(o);else if(a==="removeGeoFromTV")t.api.removeGeoFromTV(o);else if(a==="showPointsTV")t.api.showPointsTV(o,l);else if(a==="lockTextElement")t.api.lockTextElement(o);else if(a==="unlockTextElement")t.api.unlockTextElement(o);else if(a==="viewChanged2D")if(t.viewState.scale===0)t.api.evalCommand("Pan(0,0)"),t.startSyncViewState();else{const{scale:c,x:p,y:h}=JSON.parse(o),u=t._flushViewState();t.startSyncViewState(),t.api.evalCommand(`Pan(${p-u.x},${h-u.y})`),t.api.evalCommand(`ZoomIn(${c/u.scale})`)}else console.debug("[GeoGebra] unknown event",a,o,l)});var n;this.api=i.api,this.clientId=i.clientId,this.nickName=i.nickName,this.delay=(n=i.delay)!=null?n:200,this.context=i,setTimeout(()=>{this.api.evalCommand("Pan(0,0)")},this.delay)}createEvent(i,n,e){const s={type:i,content:n,clientId:this.clientId,nickName:this.nickName};return this.context.embedLabel&&(s.embedLabel=this.context.embedLabel),e&&(s.label=e),s}sendEvent(i,n,e){console.log("[GeoGebra] send:",i,e,n),this.context.postMessage(this.createEvent(i,n,e)),this.storageCallback||(this.storageCallback=setTimeout(()=>{this.context.save(this.api.getBase64()),this.storageCallback=0},this.delay))}evalCommand(i){this.unregisterListeners(),this.api.evalCommand(i),this.registerListeners()}evalXML(i){this.unregisterListeners(),this.api.evalXML(i),this.api.updateConstruction(),this.registerListeners(),setTimeout(this.initAllEmbeds,500)}setXML(i){this.unregisterListeners(),this.api.setXML(i),this.api.updateConstruction(),this.registerListeners()}initEmbed(i){if(this.embeds[i])return;const n=this.api.getEmbeddedCalculators();if(!n)return;const e=n[i];if(e&&"registerClientListener"in e){const s=new S({...this.context,clientId:this.clientId,nickName:this.nickName,api:e,embedLabel:i});s.registerListeners(),this.embeds[i]=s}}startSyncViewState(){clearTimeout(this.isSyncingViewState),this.isSyncingViewState=setTimeout(this.stopSyncViewState,1e3)}shouldSyncView(i,n,e,s){return Math.abs(n-i.scale)>S.Threshold/10||Math.abs(e-i.x)>S.Threshold||Math.abs(s-i.y)>S.Threshold}registerListeners(){this.api.registerUpdateListener(this.updateListener),this.api.registerRemoveListener(this.removeListener),this.api.registerAddListener(this.addListener),this.api.registerClientListener(this.clientListener),this.api.registerRenameListener(this.renameListener)}unregisterListeners(){this.api.unregisterUpdateListener(this.updateListener),this.api.unregisterRemoveListener(this.removeListener),this.api.unregisterAddListener(this.addListener),this.api.unregisterClientListener(this.clientListener),this.api.unregisterRenameListener(this.renameListener)}};let I=S;d(I,"Threshold",20);const U=`.netless-app-geogebra{width:100%!important;height:100%!important;overflow:hidden}.netless-app-geogebra.loading{background-color:#fff}.netless-app-geogebra.readonly{user-select:none;pointer-events:none}
`;function F(i,n){const e=new ResizeObserver(()=>n(i));return e.observe(i),()=>e.disconnect()}function J(i,n,e){const s=i.displayer,r=i.room;let t=[];const a=o=>{o.authorId!==s.observerId&&t.forEach(c=>c(o.payload))},l="sync--"+i.appId;return s.addMagixEventListener(l,a),{service:{addListener(o){t.push(o)},postMessage(o){r==null||r.dispatchMagixEvent(l,o)},load(){return n[e]},save(o){i.updateAttributes([e],o)}},disposer:()=>{t=[],s.removeMagixEventListener(l)}}}const _={kind:"GeoGebra",config:{enableShadowDOM:!1},async setup(i){var n,e;const s=i.displayer,r=s.observerId,t=(n=s.state.roomMembers.find(m=>m.memberId===r))==null?void 0:n.payload,a=(t==null?void 0:t.uid)||"",l=(t==null?void 0:t.nickName)||a,o=(e=i.getAppOptions())==null?void 0:e.HTML5Codebase,c=R(i,{uid:"",ggbBase64:""}),p=i.box;p.mountStyles(U);const h=document.createElement("div");h.classList.add("netless-app-geogebra","loading"),a!==c.uid&&c.uid&&h.classList.add("netless-app-geogebra","readonly"),p.mountContent(h);const u=new X,b={...P};b.language=navigator.language.startsWith("zh")?"zh":"en",c.ggbBase64&&(b.ggbBase64=c.ggbBase64),b.id="ggb_"+i.appId;let g;const y=J(i,c,"ggbBase64");function E(){const{width:m,height:v}=h.getBoundingClientRect();g==null||g.setWidth(m),g==null||g.setHeight(v)}b.appletOnLoad=m=>{console.log(`[GeoGebra]: loaded ${JSON.stringify(b.id)}`),g=m,E(),h.classList.remove("loading");const v=i.displayer,k=new I({clientId:v.observerId,nickName:l,api:m,isDecider:f=>v.state.roomMembers.map(L=>L.memberId).every(L=>f<=L),getColor:f=>{const L=v.memberState(f).strokeColor;return"#"+L.map(j=>j.toString(16).padStart(2,"0")).join("")+"80"},...y.service});k.registerListeners(),y.service.addListener(f=>{k.dispatch(f),g==null||g.setUndoPoint()})},u.add(()=>F(h,E)),i.emitter.on("destroy",()=>{console.log("[GeoGebra]: destroy"),u.flushAll(),y.disposer(),g==null||g.remove()});const A=await B(o),C=new A(b);o&&C.setHTML5Codebase(o),C.inject(h)}};export{_ as default};
//# sourceMappingURL=main.a2e4604e.js.map