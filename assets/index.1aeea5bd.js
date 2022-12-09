import{bb as p,l as f,q as r,a_ as h,cG as x,dC as b}from"./index.ec641b5a.js";import{q as g}from"./courseware-converting.fa8cab40.js";import{u as w}from"./lifecycle.f56c70c9.js";var R="/Users/yl/github-repo/openflat/packages/flat-pages/src/ResourcePreviewPage/DynamicPreview.tsx";const y=p(function({taskUUID:a,taskToken:e,region:i,projector:s}){const n=f.exports.useRef(null),o=f.exports.useRef(null),c=w();return f.exports.useEffect(()=>{async function d(){var N;const u=await c(g({taskUUID:a,taskToken:e,dynamic:!0,region:i,projector:s}));o.current&&(n.current=h({container:o.current,taskId:u.uuid,url:u.prefix||S((N=u.progress)==null?void 0:N.convertedFileList[0].conversionFileUrl)}))}return d().catch(console.warn),()=>{n.current&&(n.current.destroy(),n.current=null)}},[]),r("div",{ref:o,className:"dynamic-preview-container"},void 0,!1,{fileName:R,lineNumber:63,columnNumber:12},this)});function S(t){if(!t||!t.startsWith("ppt"))return;const e=/^pptx?(?<prefix>:\/\/\S+?dynamicConvert)\/(?<taskId>\w+)\//.exec(t);if(!(!e||!e.groups))return"https"+e.groups.prefix}function P(t){return(/\.[a-z1-9]+$/i.exec(t)||[""])[0].toLowerCase()}var l="/Users/yl/github-repo/openflat/packages/flat-pages/src/ResourcePreviewPage/MediaPreview.tsx";const F=p(function({fileURL:a}){const e=decodeURIComponent(a),i=P(e);return r("div",{className:"media-preview-container",children:s()},void 0,!1,{fileName:l,lineNumber:16,columnNumber:12},this);function s(){switch(i){case".mp3":return r("div",{className:"audio-container",children:r("audio",{controls:!0,src:e},void 0,!1,{fileName:l,lineNumber:23,columnNumber:25},this)},void 0,!1,{fileName:l,lineNumber:22,columnNumber:21},this);case".jpg":case".jpeg":case".png":return r("div",{className:"img-container",children:r("img",{alt:"img resource",src:e},void 0,!1,{fileName:l,lineNumber:32,columnNumber:25},this)},void 0,!1,{fileName:l,lineNumber:31,columnNumber:21},this);default:return r("video",{controls:!0,src:e},void 0,!1,{fileName:l,lineNumber:38,columnNumber:24},this)}}});var v="/Users/yl/github-repo/openflat/packages/flat-pages/src/ResourcePreviewPage/StaticPreview.tsx";const U=p(function({taskUUID:a,taskToken:e,region:i}){const[s,n]=f.exports.useState([]),o=w();return f.exports.useEffect(()=>{async function c(){var u;const d=await o(g({taskUUID:a,taskToken:e,dynamic:!1,region:i,projector:!1}));n((u=d.progress)==null?void 0:u.convertedFileList)}c().catch(console.warn)},[]),r("div",{className:"static-preview-container",children:r("div",{className:"static-preview-list",children:s==null?void 0:s.map(c=>r("img",{className:"static-preview-item",src:c.conversionFileUrl},c.conversionFileUrl,!1,{fileName:v,lineNumber:56,columnNumber:25},this))},void 0,!1,{fileName:v,lineNumber:53,columnNumber:13},this)},void 0,!1,{fileName:v,lineNumber:52,columnNumber:9},this)});var m="/Users/yl/github-repo/openflat/packages/flat-pages/src/ResourcePreviewPage/index.tsx";const D=p(function(){const{fileURL:a,taskToken:e,taskUUID:i,region:s,projector:n}=x(),o=decodeURIComponent(a);return r("div",{className:"cloud-storage-preview-container",children:c()},void 0,!1,{fileName:m,lineNumber:20,columnNumber:16},this);function c(){switch(P(o)){case".pptx":return i&&e?r(y,{projector:n==="projector",region:s,taskToken:e,taskUUID:i},void 0,!1,{fileName:m,lineNumber:29,columnNumber:29},this):r(b,{},void 0,!1,{fileName:m,lineNumber:37,columnNumber:28},this);case".ppt":case".pdf":case".doc":case".docx":return i&&e?r(U,{region:s,taskToken:e,taskUUID:i},void 0,!1,{fileName:m,lineNumber:45,columnNumber:29},this):r(b,{},void 0,!1,{fileName:m,lineNumber:52,columnNumber:28},this);default:return r(F,{fileURL:a},void 0,!1,{fileName:m,lineNumber:56,columnNumber:28},this)}}});export{D as ResourcePreviewPage,D as default};
//# sourceMappingURL=index.1aeea5bd.js.map
