var X,a,Se,U,Ae,ne,V={},Te=[],$e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P(e,n){for(var t in n)e[t]=n[t];return e}function Me(e){var n=e.parentNode;n&&n.removeChild(e)}function m(e,n,t){var o,i,r,l={};for(r in n)r=="key"?o=n[r]:r=="ref"?i=n[r]:l[r]=n[r];if(arguments.length>2&&(l.children=arguments.length>3?X.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return L(e,l,o,i,null)}function L(e,n,t,o,i){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++Se:i};return i==null&&a.vnode!=null&&a.vnode(r),r}function R(e){return e.children}function T(e,n){this.props=e,this.context=n}function H(e,n){if(n==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?H(e):null}function Pe(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Pe(e)}}function te(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!z.__r++||ne!==a.debounceRendering)&&((ne=a.debounceRendering)||Ae)(z)}function z(){for(var e;z.__r=U.length;)e=U.sort(function(n,t){return n.__v.__b-t.__v.__b}),U=[],e.some(function(n){var t,o,i,r,l,s;n.__d&&(l=(r=(t=n).__v).__e,(s=t.__P)&&(o=[],(i=P({},r)).__v=r.__v+1,Y(s,r,i,t.__n,s.ownerSVGElement!==void 0,r.__h!=null?[l]:null,o,l==null?H(r):l,r.__h),Ee(o,r),r.__e!=l&&Pe(r)))})}function Ce(e,n,t,o,i,r,l,s,d,f){var _,h,c,u,p,k,v,b=o&&o.__k||Te,y=b.length;for(t.__k=[],_=0;_<n.length;_++)if((u=t.__k[_]=(u=n[_])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?L(null,u,null,null,u):Array.isArray(u)?L(R,{children:u},null,null,null):u.__b>0?L(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=t,u.__b=t.__b+1,(c=b[_])===null||c&&u.key==c.key&&u.type===c.type)b[_]=void 0;else for(h=0;h<y;h++){if((c=b[h])&&u.key==c.key&&u.type===c.type){b[h]=void 0;break}c=null}Y(e,u,c=c||V,i,r,l,s,d,f),p=u.__e,(h=u.ref)&&c.ref!=h&&(v||(v=[]),c.ref&&v.push(c.ref,null,u),v.push(h,u.__c||p,u)),p!=null?(k==null&&(k=p),typeof u.type=="function"&&u.__k===c.__k?u.__d=d=Re(u,d,e):d=Oe(e,u,c,b,p,d),typeof t.type=="function"&&(t.__d=d)):d&&c.__e==d&&d.parentNode!=e&&(d=H(c))}for(t.__e=k,_=y;_--;)b[_]!=null&&(typeof t.type=="function"&&b[_].__e!=null&&b[_].__e==t.__d&&(t.__d=H(o,_+1)),Ue(b[_],b[_]));if(v)for(_=0;_<v.length;_++)He(v[_],v[++_],v[++_])}function Re(e,n,t){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,n=typeof o.type=="function"?Re(o,n,t):Oe(t,o,o,i,o.__e,n));return n}function B(e,n){return n=n||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(t){B(t,n)}):n.push(e)),n}function Oe(e,n,t,o,i,r){var l,s,d;if(n.__d!==void 0)l=n.__d,n.__d=void 0;else if(t==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),l=null;else{for(s=r,d=0;(s=s.nextSibling)&&d<o.length;d+=2)if(s==i)break e;e.insertBefore(i,r),l=r}return l!==void 0?l:i.nextSibling}function Ve(e,n,t,o,i){var r;for(r in t)r==="children"||r==="key"||r in n||q(e,r,null,t[r],o);for(r in n)i&&typeof n[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||t[r]===n[r]||q(e,r,n[r],t[r],o)}function oe(e,n,t){n[0]==="-"?e.setProperty(n,t):e[n]=t==null?"":typeof t!="number"||$e.test(n)?t:t+"px"}function q(e,n,t,o,i){var r;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||oe(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||oe(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o||e.addEventListener(n,r?_e:re,r):e.removeEventListener(n,r?_e:re,r);else if(n!=="dangerouslySetInnerHTML"){if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n in e)try{e[n]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||n[0]==="a"&&n[1]==="r")?e.setAttribute(n,t):e.removeAttribute(n))}}function re(e){this.l[e.type+!1](a.event?a.event(e):e)}function _e(e){this.l[e.type+!0](a.event?a.event(e):e)}function Y(e,n,t,o,i,r,l,s,d){var f,_,h,c,u,p,k,v,b,y,x,g=n.type;if(n.constructor!==void 0)return null;t.__h!=null&&(d=t.__h,s=n.__e=t.__e,n.__h=null,r=[s]),(f=a.__b)&&f(n);try{e:if(typeof g=="function"){if(v=n.props,b=(f=g.contextType)&&o[f.__c],y=f?b?b.props.value:f.__:o,t.__c?k=(_=n.__c=t.__c).__=_.__E:("prototype"in g&&g.prototype.render?n.__c=_=new g(v,y):(n.__c=_=new T(v,y),_.constructor=g,_.render=Be),b&&b.sub(_),_.props=v,_.state||(_.state={}),_.context=y,_.__n=o,h=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=P({},_.__s)),P(_.__s,g.getDerivedStateFromProps(v,_.__s))),c=_.props,u=_.state,h)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,y),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,y)===!1||n.__v===t.__v){_.props=v,_.state=_.__s,n.__v!==t.__v&&(_.__d=!1),_.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(S){S&&(S.__=n)}),_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,y),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,u,p)})}_.context=y,_.props=v,_.state=_.__s,(f=a.__r)&&f(n),_.__d=!1,_.__v=n,_.__P=e,f=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(o=P(P({},o),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(c,u)),x=f!=null&&f.type===R&&f.key==null?f.props.children:f,Ce(e,Array.isArray(x)?x:[x],n,t,o,i,r,l,s,d),_.base=n.__e,n.__h=null,_.__h.length&&l.push(_),k&&(_.__E=_.__=null),_.__e=!1}else r==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=ze(t.__e,n,t,o,i,r,l,d);(f=a.diffed)&&f(n)}catch(S){n.__v=null,(d||r!=null)&&(n.__e=s,n.__h=!!d,r[r.indexOf(s)]=null),a.__e(S,n,t)}}function Ee(e,n){a.__c&&a.__c(n,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(o){o.call(t)})}catch(o){a.__e(o,t.__v)}})}function ze(e,n,t,o,i,r,l,s){var d,f,_,h=t.props,c=n.props,u=n.type,p=0;if(u==="svg"&&(i=!0),r!=null){for(;p<r.length;p++)if((d=r[p])&&"setAttribute"in d==!!u&&(u?d.localName===u:d.nodeType===3)){e=d,r[p]=null;break}}if(e==null){if(u===null)return document.createTextNode(c);e=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,c.is&&c),r=null,s=!1}if(u===null)h===c||s&&e.data===c||(e.data=c);else{if(r=r&&X.call(e.childNodes),f=(h=t.props||V).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!s){if(r!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(_||f)&&(_&&(f&&_.__html==f.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Ve(e,c,h,i,s),_)n.__k=[];else if(p=n.props.children,Ce(e,Array.isArray(p)?p:[p],n,t,o,i&&u!=="foreignObject",r,l,r?r[0]:t.__k&&H(t,0),s),r!=null)for(p=r.length;p--;)r[p]!=null&&Me(r[p]);s||("value"in c&&(p=c.value)!==void 0&&(p!==e.value||u==="progress"&&!p||u==="option"&&p!==h.value)&&q(e,"value",p,h.value,!1),"checked"in c&&(p=c.checked)!==void 0&&p!==e.checked&&q(e,"checked",p,h.checked,!1))}return e}function He(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(o){a.__e(o,t)}}function Ue(e,n,t){var o,i;if(a.unmount&&a.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||He(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){a.__e(r,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Ue(o[i],n,typeof e.type!="function");t||e.__e==null||Me(e.__e),e.__e=e.__d=void 0}function Be(e,n,t){return this.constructor(e,t)}function ie(e,n,t){var o,i,r;a.__&&a.__(e,n),i=(o=typeof t=="function")?null:t&&t.__k||n.__k,r=[],Y(n,e=(!o&&t||n).__k=m(R,null,[e]),i||V,V,n.ownerSVGElement!==void 0,!o&&t?[t]:i?null:n.firstChild?X.call(n.childNodes):null,r,!o&&t?t:i?i.__e:n.firstChild,o),Ee(r,e)}X=Te.slice,a={__e:function(e,n,t,o){for(var i,r,l;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),l=i.__d),l)return i.__E=i}catch(s){e=s}throw e}},Se=0,T.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},t),this.props)),e&&P(t,e),e!=null&&this.__v&&(n&&this.__h.push(n),te(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),te(this))},T.prototype.render=R,U=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z.__r=0;const qe=`.time-cell{display:flex;flex-flow:column nowrap;align-items:center;font-family:sans-serif;font-weight:700}.time-cell.disabled .time-cell-up:before,.time-cell.disabled .time-cell-down:after{border-top-color:#0000000d;border-bottom-color:#0000000d}.time-cell-up:before,.time-cell-down:after{content:"";display:block;width:0;height:0;margin:0 0 4px;border-top:0;border-left:12px solid transparent;border-right:12px solid transparent;border-bottom:12px solid #151515;transition:border-color .4s;cursor:pointer}.time-cell-down:after{margin:4px 0 0;border-top:12px solid #151515;border-bottom:0}.rotor{position:relative;width:36px;height:64px;border-radius:4px;font-size:48px;text-align:center;perspective:200px}.rotor-top,.rotor-bottom{overflow:hidden;position:absolute;width:36px;height:32px}.rotor-leaf{z-index:1;position:absolute;width:36px;height:64px;transform-style:preserve-3d;transition:transform 0s}.rotor-leaf.flipped{transform:rotateX(-180deg);transition:all .5s ease-in-out}.rotor-leaf-front,.rotor-leaf-rear{overflow:hidden;position:absolute;width:36px;height:32px;margin:0;transform:rotateX(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.rotor-leaf-front{line-height:64px;border-radius:4px 4px 0 0}.rotor-leaf-rear{line-height:0px;border-radius:0 0 4px 4px;transform:rotateX(-180deg)}.rotor-top{line-height:64px;border-radius:4px 4px 0 0}.rotor-bottom{bottom:0;line-height:0px;border-radius:0 0 4px 4px}.rotor:after{content:"";z-index:2;position:absolute;bottom:0px;left:0px;width:36px;height:32px;border-radius:0 0 4px 4px}.rotor,.rotor-top,.rotor-leaf-front{color:#fff;background-color:#151515}.rotor-bottom,.rotor-leaf-rear{color:#efefef;background-color:#202020}.rotor:after{border-top:solid 1px #151515}.telebox-color-scheme-dark .time-cell.disabled .time-cell-up:before,.telebox-color-scheme-dark .time-cell.disabled .time-cell-down:after{border-top-color:#ffffff14;border-bottom-color:#ffffff14}.telebox-color-scheme-dark .time-cell-up:before,.telebox-color-scheme-dark .time-cell-down:after{border-top-color:#d9d9df;border-bottom-color:#d9d9df}.telebox-color-scheme-dark .rotor,.telebox-color-scheme-dark .rotor-top,.telebox-color-scheme-dark .rotor-leaf-front{color:#383838;background-color:#efeff5}.telebox-color-scheme-dark .rotor-bottom,.telebox-color-scheme-dark .rotor-leaf-rear{color:#333;background-color:#eeecec}.telebox-color-scheme-dark .rotor:after{border-top:solid 1px #efeff5}.countdown-clock{display:flex;padding:5px}.countdown-clock>*{padding:0 5px}.countdown-clock-divider{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 1px}.countdown-clock-divider:before,.countdown-clock-divider:after{content:"";display:block;width:8px;height:8px;margin:6px 0;background-color:#000;border-radius:50%}.netless-app-countdown{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:background-color .4s}.netless-app-countdown-shrink{display:inline-block;transition:background-color .4s}.netless-app-countdown-btns{width:100%;margin-top:10px;display:flex;flex-wrap:nowrap}.netless-app-countdown-btns>button{flex:1;display:block;margin:0 10px 0 0;padding:5px 10px;text-align:center;border:0;border-radius:4px;color:#fff;background-color:#3380ff;transition:background-color .4s,color .4s;cursor:pointer}.netless-app-countdown-btns>button:last-of-type{margin:0}.netless-app-countdown-btns>button:disabled{color:#00000040;background:#f5f5f5;cursor:not-allowed}.telebox-color-scheme-dark .netless-app-countdown-btns>button:disabled{color:#ffffff4d;background:rgba(255,255,255,.08)}
`;var G,w,le,I=0,De=[],ue=a.__b,ce=a.__r,se=a.diffed,ae=a.__c,de=a.unmount;function ee(e,n){a.__h&&a.__h(w,e,I||n),I=0;var t=w.__H||(w.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function C(e){return I=1,Ie(Fe,e)}function Ie(e,n,t){var o=ee(G++,2);return o.t=e,o.__c||(o.__=[t?t(n):Fe(void 0,n),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=w),o.__}function E(e,n){var t=ee(G++,3);!a.__s&&We(t.__H,n)&&(t.__=e,t.__H=n,w.__H.__h.push(t))}function Ne(e,n){var t=ee(G++,7);return We(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function O(e,n){return I=8,Ne(function(){return e},n)}function Xe(){for(var e;e=De.shift();)if(e.__P)try{e.__H.__h.forEach($),e.__H.__h.forEach(K),e.__H.__h=[]}catch(n){e.__H.__h=[],a.__e(n,e.__v)}}a.__b=function(e){w=null,ue&&ue(e)},a.__r=function(e){ce&&ce(e),G=0;var n=(w=e.__c).__H;n&&(n.__h.forEach($),n.__h.forEach(K),n.__h=[])},a.diffed=function(e){se&&se(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(De.push(n)!==1&&le===a.requestAnimationFrame||((le=a.requestAnimationFrame)||function(t){var o,i=function(){clearTimeout(r),fe&&cancelAnimationFrame(o),setTimeout(t)},r=setTimeout(i,100);fe&&(o=requestAnimationFrame(i))})(Xe)),w=null},a.__c=function(e,n){n.some(function(t){try{t.__h.forEach($),t.__h=t.__h.filter(function(o){return!o.__||K(o)})}catch(o){n.some(function(i){i.__h&&(i.__h=[])}),n=[],a.__e(o,t.__v)}}),ae&&ae(e,n)},a.unmount=function(e){de&&de(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{$(o)}catch(i){n=i}}),n&&a.__e(n,t.__v))};var fe=typeof requestAnimationFrame=="function";function $(e){var n=w,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),w=n}function K(e){var n=w;e.__c=e.__(),w=n}function We(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function Fe(e,n){return typeof n=="function"?n(e):n}function Ge(e,n){for(var t in n)e[t]=n[t];return e}function Q(e,n){for(var t in e)if(t!=="__source"&&!(t in n))return!0;for(var o in n)if(o!=="__source"&&e[o]!==n[o])return!0;return!1}function pe(e){this.props=e}function Z(e,n){function t(i){var r=this.props.ref,l=r==i.ref;return!l&&r&&(r.call?r(null):r.current=null),n?!n(this.props,i)||!l:Q(this.props,i)}function o(i){return this.shouldComponentUpdate=t,m(e,i)}return o.displayName="Memo("+(e.displayName||e.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(pe.prototype=new T).isPureReactComponent=!0,pe.prototype.shouldComponentUpdate=function(e,n){return Q(this.props,e)||Q(this.state,n)};var he=a.__b;a.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),he&&he(e)};var Ze=a.__e;a.__e=function(e,n,t,o){if(e.then){for(var i,r=n;r=r.__;)if((i=r.__c)&&i.__c)return n.__e==null&&(n.__e=t.__e,n.__k=t.__k),i.__c(e,n)}Ze(e,n,t,o)};var me=a.unmount;function J(){this.__u=0,this.t=null,this.__b=null}function je(e){var n=e.__.__c;return n&&n.__e&&n.__e(e)}function F(){this.u=null,this.o=null}a.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&e.__h===!0&&(e.type=null),me&&me(e)},(J.prototype=new T).__c=function(e,n){var t=n.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var i=je(o.__v),r=!1,l=function(){r||(r=!0,t.__R=null,i?i(s):s())};t.__R=l;var s=function(){if(!--o.__u){if(o.state.__e){var f=o.state.__e;o.__v.__k[0]=function h(c,u,p){return c&&(c.__v=null,c.__k=c.__k&&c.__k.map(function(k){return h(k,u,p)}),c.__c&&c.__c.__P===u&&(c.__e&&p.insertBefore(c.__e,c.__d),c.__c.__e=!0,c.__c.__P=p)),c}(f,f.__c.__P,f.__c.__O)}var _;for(o.setState({__e:o.__b=null});_=o.t.pop();)_.forceUpdate()}},d=n.__h===!0;o.__u++||d||o.setState({__e:o.__b=o.__v.__k[0]}),e.then(l,l)},J.prototype.componentWillUnmount=function(){this.t=[]},J.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function r(l,s,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=Ge({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=s),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return r(f,s,d)})),l}(this.__b,t,o.__O=o.__P)}this.__b=null}var i=n.__e&&m(R,null,e.fallback);return i&&(i.__h=null),[m(R,null,n.__e?null:e.children),i]};var ve=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(F.prototype=new T).__e=function(e){var n=this,t=je(n.__v),o=n.o.get(e);return o[0]++,function(i){var r=function(){n.props.revealOrder?(o.push(i),ve(n,e,o)):i()};t?t(r):r()}},F.prototype.render=function(e){this.u=null,this.o=new Map;var n=B(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(n,t){ve(e,t,n)})};var Je=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ke=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Qe=typeof document<"u",Ye=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};T.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(T.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var be=a.event;function en(){}function nn(){return this.cancelBubble}function tn(){return this.defaultPrevented}a.event=function(e){return be&&(e=be(e)),e.persist=en,e.isPropagationStopped=nn,e.isDefaultPrevented=tn,e.nativeEvent=e};var ye={configurable:!0,get:function(){return this.class}},ge=a.vnode;a.vnode=function(e){var n=e.type,t=e.props,o=t;if(typeof n=="string"){var i=n.indexOf("-")===-1;for(var r in o={},t){var l=t[r];Qe&&r==="children"&&n==="noscript"||r==="value"&&"defaultValue"in t&&l==null||(r==="defaultValue"&&"value"in t&&t.value==null?r="value":r==="download"&&l===!0?l="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+n)&&!Ye(t.type)?r="oninput":/^onfocus$/i.test(r)?r="onfocusin":/^onblur$/i.test(r)?r="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(r)?r=r.toLowerCase():i&&Ke.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),o[r]=l)}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=B(t.children).forEach(function(s){s.props.selected=o.value.indexOf(s.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=B(t.children).forEach(function(s){s.props.selected=o.multiple?o.defaultValue.indexOf(s.props.value)!=-1:o.defaultValue==s.props.value})),e.props=o,t.class!=t.className&&(ye.enumerable="className"in t,t.className!=null&&(o.class=t.className),Object.defineProperty(o,"className",ye))}e.$$typeof=Je,ge&&ge(e)};var ke=a.__r;a.__r=function(e){ke&&ke(e),e.__c};var Le={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var o=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var l=typeof r;if(l==="string"||l==="number")o.push(r);else if(Array.isArray(r)){if(r.length){var s=t.apply(null,r);s&&o.push(s)}}else if(l==="object")if(r.toString===Object.prototype.toString)for(var d in r)n.call(r,d)&&r[d]&&o.push(d);else o.push(r.toString())}}return o.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Le);const xe=Le.exports,j=Z(({digit:e,disabled:n,onUp:t,onDown:o})=>{const[i,r]=C(0),[l,s]=C(!1);return E(()=>{if(n){s(!0);const d=window.setTimeout(()=>{s(!1),r(e)},500);return()=>window.clearTimeout(d)}else r(e)},[e]),m("div",{class:xe("time-cell",{disabled:n})},m("div",{class:"time-cell-up",onClick:n?void 0:t}),m("div",{class:"rotor"},m("div",{class:xe("rotor-leaf",{flipped:l})},m("figure",{class:"rotor-leaf-rear"},e),m("figure",{class:"rotor-leaf-front"},i)),m("div",{class:"rotor-top"},e),m("div",{class:"rotor-bottom"},i)),m("div",{class:"time-cell-down",onClick:n?void 0:o}))});var A=(e=>(e[e.AddTenMinutes=0]="AddTenMinutes",e[e.ReduceTenMinutes=1]="ReduceTenMinutes",e[e.AddOneMinute=2]="AddOneMinute",e[e.ReduceOneMinute=3]="ReduceOneMinute",e[e.AddTenSeconds=4]="AddTenSeconds",e[e.ReduceTenSeconds=5]="ReduceTenSeconds",e[e.AddOneSecond=6]="AddOneSecond",e[e.ReduceOneSecond=7]="ReduceOneSecond",e))(A||{});function we(e){return Ne(()=>(e=e%61,[Math.floor(e/10),e%10]),[e])}function M(e,n){return O(()=>e(n),[e])}const on=Z(({minutes:e,seconds:n,disabled:t,onAdjustTime:o})=>{const i=we(e),r=we(n),l=M(o,0),s=M(o,1),d=M(o,2),f=M(o,3),_=M(o,4),h=M(o,5),c=M(o,6),u=M(o,7);return m("div",{className:"countdown-clock"},m(j,{disabled:t,digit:i[0],onUp:l,onDown:s}),m(j,{digit:i[1],disabled:t,onUp:d,onDown:f}),m("div",{class:"countdown-clock-divider"}),m(j,{disabled:t,digit:r[0],onUp:_,onDown:h}),m(j,{digit:r[1],disabled:t,onUp:c,onDown:u}))}),rn=Z(({readonly:e,countdownSecs:n,startTime:t,paused:o,onAdjustTime:i,onStart:r,onPause:l,onResume:s,onReset:d})=>{const[f,_]=C(0),h=t>0&&f>=t,c=n-(h?f-t:0),u=Math.floor(c/60),p=c-u*60;return E(()=>{let k=NaN;if(n>0&&t>0&&!o){const v=()=>{_(Math.floor(Date.now()/1e3)),k=window.requestAnimationFrame(v)};return v(),()=>window.cancelAnimationFrame(k)}else window.cancelAnimationFrame(k)},[t,o,n]),E(()=>{t>0&&f-t>=n&&d()},[f,t,n,d]),m("div",{class:"netless-app-countdown"},m("div",{class:"netless-app-countdown-shrink"},m(on,{minutes:u,seconds:p,disabled:e||h,onAdjustTime:i}),m("div",{class:"netless-app-countdown-btns"},o?m(R,null,m("button",{onClick:d,disabled:e},"Reset"),m("button",{onClick:s,disabled:e},"Resume")):h?m("button",{onClick:l,disabled:e},"Pause"):m("button",{onClick:r,disabled:e||c<=0},"Start"))))}),_n=Z(({context:e,storage:n})=>{const[t,o]=C(()=>e.isWritable),[i,r]=C(n.state.countdownSecs),[l,s]=C(n.state.startTime),[d,f]=C(n.state.paused),_=l>0,h=O(()=>{e.isWritable&&(f(!1),s(Math.floor(Date.now()/1e3)))},[e]),c=O(()=>{e.isWritable&&f(!0)},[e]),u=O(()=>{e.isWritable&&f(!1)},[e]),p=O(()=>{e.isWritable&&(f(!1),r(0),s(0))},[e]),k=O(v=>{_||r(b=>{if(!e.isWritable)return b;const y=Math.floor(b/60),x=b-y*60,g=Math.floor(y/10),S=y%10,D=Math.floor(x/10),N=x%10;switch(v){case A.AddTenMinutes:{const W=S+x===0?7:6;return((g+1)%W*10+S)*60+x}case A.ReduceTenMinutes:{const W=S+x===0?7:6;return((g+W-1)%W*10+S)*60+x}case A.AddOneMinute:return(Math.min(5,g)*10+(S+1)%10)*60+x;case A.ReduceOneMinute:return(Math.min(5,g)*10+(S+10-1)%10)*60+x;case A.AddTenSeconds:return y*60+((D+1)%6*10+N);case A.ReduceTenSeconds:return y*60+((D+6-1)%6*10+N);case A.AddOneSecond:return y*60+(Math.min(5,D)*10+(N+1)%10);case A.ReduceOneSecond:return y*60+(Math.min(5,D)*10+(N+10-1)%10);default:return b}})},[_,e]);return E(()=>(o(e.isWritable),e.emitter.on("writableChange",o),()=>e.emitter.off("writableChange",o)),[e]),E(()=>{const v=b=>{b.countdownSecs&&r(n.state.countdownSecs),b.paused&&f(n.state.paused),b.startTime&&s(n.state.startTime)};return n.on("stateChanged",v)},[n]),E(()=>{e.isWritable&&n.setState({countdownSecs:i,paused:d,startTime:l})},[i,d,l,e]),m(rn,{readonly:!t,countdownSecs:i,startTime:l,paused:d,onAdjustTime:k,onStart:h,onPause:c,onResume:u,onReset:p})}),ln=208,un=216,cn={kind:"Countdown",config:{minwidth:ln,minheight:un},setup(e){const n=e.box;n.mountStyles(qe);const t=e.createStorage("state",{countdownSecs:0,startTime:0,paused:!1});ie(m(_n,{context:e,storage:t}),n.$content),e.emitter.on("destroy",()=>{ie(null,n.$content)})}};export{cn as default};
//# sourceMappingURL=main.e808671f.js.map
