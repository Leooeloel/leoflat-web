import{b2 as i,ad as C,b0 as R,P as N,b1 as A,q as _,m as M}from"./index.ec641b5a.js";function U(a,p){return a.classList?!!p&&a.classList.contains(p):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+p+" ")!==-1}function I(a,p){a.classList?a.classList.add(p):U(a,p)||(typeof a.className=="string"?a.className=a.className+" "+p:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+p))}function O(a,p){return a.replace(new RegExp("(^|\\s)"+p+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function y(a,p){a.classList?a.classList.remove(p):typeof a.className=="string"?a.className=O(a.className,p):a.setAttribute("class",O(a.className&&a.className.baseVal||"",p))}const D={disabled:!1};var P=i.exports.oneOfType([i.exports.number,i.exports.shape({enter:i.exports.number,exit:i.exports.number,appear:i.exports.number}).isRequired]),j=i.exports.oneOfType([i.exports.string,i.exports.shape({enter:i.exports.string,exit:i.exports.string,active:i.exports.string}),i.exports.shape({enter:i.exports.string,enterDone:i.exports.string,enterActive:i.exports.string,exit:i.exports.string,exitDone:i.exports.string,exitActive:i.exports.string})]);const L=C.createContext(null);var $=function(p){return p.scrollTop},q="/Users/yl/github-repo/openflat/node_modules/.pnpm/react-transition-group@4.4.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-transition-group/esm/Transition.js",g="unmounted",E="exited",v="entering",m="entered",T="exiting",d=function(a){R(p,a);function p(e,n){var t;t=a.call(this,e,n)||this;var r=n,s=r&&!r.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?s?(o=E,t.appearStatus=v):o=m:e.unmountOnExit||e.mountOnEnter?o=g:o=E,t.state={status:o},t.nextCallback=null,t}p.getDerivedStateFromProps=function(n,t){var r=n.in;return r&&t.status===g?{status:E}:null};var l=p.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var t=null;if(n!==this.props){var r=this.state.status;this.props.in?r!==v&&r!==m&&(t=v):(r===v||r===m)&&(t=T)}this.updateStatus(!1,t)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n=this.props.timeout,t,r,s;return t=r=s=n,n!=null&&typeof n!="number"&&(t=n.exit,r=n.enter,s=n.appear!==void 0?n.appear:r),{exit:t,enter:r,appear:s}},l.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this);r&&$(r)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:g})},l.performEnter=function(n){var t=this,r=this.props.enter,s=this.context?this.context.isMounting:n,o=this.props.nodeRef?[s]:[N.findDOMNode(this),s],u=o[0],f=o[1],c=this.getTimeouts(),x=s?c.appear:c.enter;if(!n&&!r||D.disabled){this.safeSetState({status:m},function(){t.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:v},function(){t.props.onEntering(u,f),t.onTransitionEnd(x,function(){t.safeSetState({status:m},function(){t.props.onEntered(u,f)})})})},l.performExit=function(){var n=this,t=this.props.exit,r=this.getTimeouts(),s=this.props.nodeRef?void 0:N.findDOMNode(this);if(!t||D.disabled){this.safeSetState({status:E},function(){n.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:T},function(){n.props.onExiting(s),n.onTransitionEnd(r.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(s)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},l.setNextCallback=function(n){var t=this,r=!0;return this.nextCallback=function(s){r&&(r=!1,t.nextCallback=null,n(s))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},l.onTransitionEnd=function(n,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:N.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!r||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],u=o[0],f=o[1];this.props.addEndListener(u,f)}n!=null&&setTimeout(this.nextCallback,n)},l.render=function(){var n=this.state.status;if(n===g)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=A(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return _(L.Provider,{value:null,children:typeof r=="function"?r(n,s):C.cloneElement(C.Children.only(r),s)},void 0,!1,{fileName:q,lineNumber:406,columnNumber:7},this)},p}(C.Component);d.contextType=L;d.propTypes={nodeRef:i.exports.shape({current:typeof Element>"u"?i.exports.any:function(a,p,l,e,n,t){var r=a[p];return i.exports.instanceOf(r&&"ownerDocument"in r?r.ownerDocument.defaultView.Element:Element)(a,p,l,e,n,t)}}),children:i.exports.oneOfType([i.exports.func.isRequired,i.exports.element.isRequired]).isRequired,in:i.exports.bool,mountOnEnter:i.exports.bool,unmountOnExit:i.exports.bool,appear:i.exports.bool,enter:i.exports.bool,exit:i.exports.bool,timeout:function(p){var l=P;p.addEndListener||(l=l.isRequired);for(var e=arguments.length,n=new Array(e>1?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];return l.apply(void 0,[p].concat(n))},addEndListener:i.exports.func,onEnter:i.exports.func,onEntering:i.exports.func,onEntered:i.exports.func,onExit:i.exports.func,onExiting:i.exports.func,onExited:i.exports.func};function h(){}d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h};d.UNMOUNTED=g;d.EXITED=E;d.ENTERING=v;d.ENTERED=m;d.EXITING=T;const k=d;var G="/Users/yl/github-repo/openflat/node_modules/.pnpm/react-transition-group@4.4.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-transition-group/esm/CSSTransition.js",F=function(p,l){return p&&l&&l.split(" ").forEach(function(e){return I(p,e)})},b=function(p,l){return p&&l&&l.split(" ").forEach(function(e){return y(p,e)})},S=function(a){R(p,a);function p(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=a.call.apply(a,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(s,o){var u=e.resolveArguments(s,o),f=u[0],c=u[1];e.removeClasses(f,"exit"),e.addClass(f,c?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(s,o)},e.onEntering=function(s,o){var u=e.resolveArguments(s,o),f=u[0],c=u[1],x=c?"appear":"enter";e.addClass(f,x,"active"),e.props.onEntering&&e.props.onEntering(s,o)},e.onEntered=function(s,o){var u=e.resolveArguments(s,o),f=u[0],c=u[1],x=c?"appear":"enter";e.removeClasses(f,x),e.addClass(f,x,"done"),e.props.onEntered&&e.props.onEntered(s,o)},e.onExit=function(s){var o=e.resolveArguments(s),u=o[0];e.removeClasses(u,"appear"),e.removeClasses(u,"enter"),e.addClass(u,"exit","base"),e.props.onExit&&e.props.onExit(s)},e.onExiting=function(s){var o=e.resolveArguments(s),u=o[0];e.addClass(u,"exit","active"),e.props.onExiting&&e.props.onExiting(s)},e.onExited=function(s){var o=e.resolveArguments(s),u=o[0];e.removeClasses(u,"exit"),e.addClass(u,"exit","done"),e.props.onExited&&e.props.onExited(s)},e.resolveArguments=function(s,o){return e.props.nodeRef?[e.props.nodeRef.current,s]:[s,o]},e.getClassNames=function(s){var o=e.props.classNames,u=typeof o=="string",f=u&&o?o+"-":"",c=u?""+f+s:o[s],x=u?c+"-active":o[s+"Active"],w=u?c+"-done":o[s+"Done"];return{baseClassName:c,activeClassName:x,doneClassName:w}},e}var l=p.prototype;return l.addClass=function(n,t,r){var s=this.getClassNames(t)[r+"ClassName"],o=this.getClassNames("enter"),u=o.doneClassName;t==="appear"&&r==="done"&&u&&(s+=" "+u),r==="active"&&n&&$(n),s&&(this.appliedClasses[t][r]=s,F(n,s))},l.removeClasses=function(n,t){var r=this.appliedClasses[t],s=r.base,o=r.active,u=r.done;this.appliedClasses[t]={},s&&b(n,s),o&&b(n,o),u&&b(n,u)},l.render=function(){var n=this.props;n.classNames;var t=A(n,["classNames"]);return _(k,{...t,onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited},void 0,!1,{fileName:G,lineNumber:266,columnNumber:25},this)},p}(C.Component);S.defaultProps={classNames:""};S.propTypes=M({},k.propTypes,{classNames:j,onEnter:i.exports.func,onEntering:i.exports.func,onEntered:i.exports.func,onExit:i.exports.func,onExiting:i.exports.func,onExited:i.exports.func});const X=S;export{X as C,L as T};
//# sourceMappingURL=CSSTransition.2eb23181.js.map
