"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[527],{527:function(t,n,e){e.r(n),e.d(n,{default:function(){return un}});var r=e(9439),o=e(2791),a=e(9434),i="NOT_FOUND";var s=function(t,n){return t===n};function c(t,n){var e="object"===typeof n?n:{equalityCheck:n},r=e.equalityCheck,o=void 0===r?s:r,a=e.maxSize,c=void 0===a?1:a,u=e.resultEqualityCheck,l=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!t(n[o],e[o]))return!1;return!0}}(o),d=1===c?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:i},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(t,n){var e=[];function r(t){var r=e.findIndex((function(e){return n(t,e.key)}));if(r>-1){var o=e[r];return r>0&&(e.splice(r,1),e.unshift(o)),o.value}return i}return{get:r,put:function(n,o){r(n)===i&&(e.unshift({key:n,value:o}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(c,l);function f(){var n=d.get(arguments);if(n===i){if(n=t.apply(null,arguments),u){var e=d.getEntries(),r=e.find((function(t){return u(t.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function u(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function l(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,d=l.memoizeOptions,f=void 0===d?e:d,p=Array.isArray(f)?f:[f],m=u(r),v=t.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),h=t((function(){for(var t=[],n=m.length,e=0;e<n;e++)t.push(m[e].apply(null,arguments));return a=v.apply(null,t)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var d,f,p=l(c),m=function(t){return t.filter},v=function(t){return t.contacts.items},h=function(t){return t.contacts.error},g=function(t){return t.contacts.isLoading},y=p([v,m],(function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))})),x=e(6052),b=e(168),Z=e(6487),E=Z.ZP.div(d||(d=(0,b.Z)(["\n  margin: 0 auto;\n  text-align: center;\n  max-width: 800px;\n"]))),T=Z.ZP.form(f||(f=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  \n  padding: 20px;\n  border-radius: 4px;\n  width: 450px;\n  margin: 0 auto;\n  text-align: left;\n"]))),C=e(4942),w=e(1413),j=e(3366);function O(t,n){if(null==t)return{};var e,r,o=(0,j.Z)(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var k=e(3433),I=e(8182),L=["theme","type"],_=["delay","staleId"],N=function(t){return"number"==typeof t&&!isNaN(t)},P=function(t){return"string"==typeof t},z=function(t){return"function"==typeof t},R=function(t){return P(t)||z(t)?t:null},A=function(t){return(0,o.isValidElement)(t)||P(t)||z(t)||N(t)};function D(t){var n=t.enter,e=t.exit,r=t.appendPosition,a=void 0!==r&&r,i=t.collapse,s=void 0===i||i,c=t.collapseDuration,u=void 0===c?300:c;return function(t){var r=t.children,i=t.position,c=t.preventExitTransition,l=t.done,d=t.nodeRef,f=t.isIn,p=a?"".concat(n,"--").concat(i):n,m=a?"".concat(e,"--").concat(i):e,v=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var t,n=d.current,e=p.split(" "),r=function t(r){var o;r.target===d.current&&(n.dispatchEvent(new Event("d")),n.removeEventListener("animationend",t),n.removeEventListener("animationcancel",t),0===v.current&&"animationcancel"!==r.type&&(o=n.classList).remove.apply(o,(0,k.Z)(e)))};(t=n.classList).add.apply(t,(0,k.Z)(e)),n.addEventListener("animationend",r),n.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var t=d.current,n=function n(){t.removeEventListener("animationend",n),s?function(t,n,e){void 0===e&&(e=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(e,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(n,e)}))}))}(t,l,u):l()};f||(c?n():(v.current=1,t.className+=" ".concat(m),t.addEventListener("animationend",n)))}),[f]),o.createElement(o.Fragment,null,r)}}function S(t,n){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:n}:{}}var M={list:new Map,emitQueue:new Map,on:function(t,n){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(n),this},off:function(t,n){if(n){var e=this.list.get(t).filter((function(t){return t!==n}));return this.list.set(t,e),this}return this.list.delete(t),this},cancelEmit:function(t){var n=this.emitQueue.get(t);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var n=arguments,e=this;this.list.has(t)&&this.list.get(t).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,k.Z)([].slice.call(n,1)))}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(o)}))}},B=function(t){var n=t.theme,e=t.type,r=O(t,L);return o.createElement("svg",(0,w.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r))},F={info:function(t){return o.createElement(B,(0,w.Z)({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return o.createElement(B,(0,w.Z)({},t),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return o.createElement(B,(0,w.Z)({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return o.createElement(B,(0,w.Z)({},t),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function q(t){var n=(0,o.useReducer)((function(t){return t+1}),0),e=(0,r.Z)(n,2)[1],a=(0,o.useState)([]),i=(0,r.Z)(a,2),s=i[0],c=i[1],u=(0,o.useRef)(null),l=(0,o.useRef)(new Map).current,d=function(t){return-1!==s.indexOf(t)},f=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:d,getToast:function(t){return l.get(t)}}).current;function p(t){var n=t.containerId;!f.props.limit||n&&f.containerId!==n||(f.count-=f.queue.length,f.queue=[])}function m(t){c((function(n){return null==t?[]:n.filter((function(n){return n!==t}))}))}function v(){var t=f.queue.shift();g(t.toastContent,t.toastProps,t.staleId)}function h(t,n){var a=n.delay,i=n.staleId,s=O(n,_);if(A(t)&&!function(t){return!u.current||f.props.enableMultiContainer&&t.containerId!==f.props.containerId||l.has(t.toastId)&&null==t.updateId}(s)){var c=s.toastId,d=s.updateId,p=s.data,h=f.props,y=function(){return m(c)},x=null==d;x&&f.count++;var b,Z,E=(0,w.Z)((0,w.Z)((0,w.Z)({},h),{},{style:h.toastStyle,key:f.toastKey++},Object.fromEntries(Object.entries(s).filter((function(t){var n=(0,r.Z)(t,2);n[0];return null!=n[1]})))),{},{toastId:c,updateId:d,data:p,closeToast:y,isIn:!1,className:R(s.className||h.toastClassName),bodyClassName:R(s.bodyClassName||h.bodyClassName),progressClassName:R(s.progressClassName||h.progressClassName),autoClose:!s.isLoading&&(b=s.autoClose,Z=h.autoClose,!1===b||N(b)&&b>0?b:Z),deleteToast:function(){var t=S(l.get(c),"removed");l.delete(c),M.emit(4,t);var n=f.queue.length;if(f.count=null==c?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),n>0){var r=null==c?f.props.limit:1;if(1===n||1===r)f.displayedToast++,v();else{var o=r>n?n:r;f.displayedToast=o;for(var a=0;a<o;a++)v()}}else e()}});E.iconOut=function(t){var n=t.theme,e=t.type,r=t.isLoading,a=t.icon,i=null,s={theme:n,type:e};return!1===a||(z(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):P(a)||N(a)?i=a:r?i=F.spinner():function(t){return t in F}(e)&&(i=F[e](s))),i}(E),z(s.onOpen)&&(E.onOpen=s.onOpen),z(s.onClose)&&(E.onClose=s.onClose),E.closeButton=h.closeButton,!1===s.closeButton||A(s.closeButton)?E.closeButton=s.closeButton:!0===s.closeButton&&(E.closeButton=!A(h.closeButton)||h.closeButton);var T=t;(0,o.isValidElement)(t)&&!P(t.type)?T=(0,o.cloneElement)(t,{closeToast:y,toastProps:E,data:p}):z(t)&&(T=t({closeToast:y,toastProps:E,data:p})),h.limit&&h.limit>0&&f.count>h.limit&&x?f.queue.push({toastContent:T,toastProps:E,staleId:i}):N(a)?setTimeout((function(){g(T,E,i)}),a):g(T,E,i)}}function g(t,n,e){var r=n.toastId;e&&l.delete(e);var o={content:t,props:n};l.set(r,o),c((function(t){return[].concat((0,k.Z)(t),[r]).filter((function(t){return t!==e}))})),M.emit(4,S(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return f.containerId=t.containerId,M.cancelEmit(3).on(0,h).on(1,(function(t){return u.current&&m(t)})).on(5,p).emit(2,f),function(){l.clear(),M.emit(3,f)}}),[]),(0,o.useEffect)((function(){f.props=t,f.isToastActive=d,f.displayedToast=s.length})),{getToastToRender:function(n){var e=new Map,r=Array.from(l.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var n=t.props.position;e.has(n)||e.set(n,[]),e.get(n).push(t)})),Array.from(e,(function(t){return n(t[0],t[1])}))},containerRef:u,isToastActive:d}}function H(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function U(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Q(t){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),a=e[0],i=e[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(t),m=t.autoClose,v=t.pauseOnHover,h=t.closeToast,g=t.onClick,y=t.closeOnClick;function x(n){if(t.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",C),document.addEventListener("touchmove",T),document.addEventListener("touchend",C);var e=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=e.getBoundingClientRect(),e.style.transition="",f.x=H(n.nativeEvent),f.y=U(n.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=e.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=e.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(n){if(f.boundingRect){var e=f.boundingRect,r=e.top,o=e.bottom,a=e.left,i=e.right;"touchend"!==n.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?E():Z()}}function Z(){i(!0)}function E(){i(!1)}function T(n){var e=d.current;f.canDrag&&e&&(f.didMove=!0,a&&E(),f.x=H(n),f.y=U(n),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),e.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),e.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",C);var n=d.current;if(f.canDrag&&f.didMove&&n){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform="translate".concat(t.draggableDirection,"(0)"),n.style.opacity="1"}}(0,o.useEffect)((function(){p.current=t})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",Z,{once:!0}),z(t.onOpen)&&t.onOpen((0,o.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;z(t.onClose)&&t.onClose((0,o.isValidElement)(t.children)&&t.children.props)}}),[]),(0,o.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",Z),window.addEventListener("blur",E)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",E))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:x,onTouchStart:x,onMouseUp:b,onTouchEnd:b};return m&&v&&(w.onMouseEnter=E,w.onMouseLeave=Z),y&&(w.onClick=function(t){g&&g(t),f.canCloseOnClick&&h()}),{playToast:Z,pauseToast:E,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:w}}function V(t){var n=t.closeToast,e=t.theme,r=t.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(e),type:"button",onClick:function(t){t.stopPropagation(),n(t)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Y(t){var n=t.delay,e=t.isRunning,r=t.closeToast,a=t.type,i=void 0===a?"default":a,s=t.hide,c=t.className,u=t.style,l=t.controlledProgress,d=t.progress,f=t.rtl,p=t.isIn,m=t.theme,v=s||l&&0===d,h=(0,w.Z)((0,w.Z)({},u),{},{animationDuration:"".concat(n,"ms"),animationPlayState:e?"running":"paused",opacity:v?0:1});l&&(h.transform="scaleX(".concat(d,")"));var g=(0,I.Z)("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":f}),y=z(c)?c({rtl:f,type:i,defaultClassName:g}):(0,I.Z)(g,c);return o.createElement("div",(0,C.Z)({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:y,style:h},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){p&&r()}))}var G=function(t){var n=Q(t),e=n.isRunning,r=n.preventExitTransition,a=n.toastRef,i=n.eventHandlers,s=t.closeButton,c=t.children,u=t.autoClose,l=t.onClick,d=t.type,f=t.hideProgressBar,p=t.closeToast,m=t.transition,v=t.position,h=t.className,g=t.style,y=t.bodyClassName,x=t.bodyStyle,b=t.progressClassName,Z=t.progressStyle,E=t.updateId,T=t.role,C=t.progress,j=t.rtl,O=t.toastId,k=t.deleteToast,L=t.isIn,_=t.isLoading,N=t.iconOut,P=t.closeOnClick,R=t.theme,A=(0,I.Z)("Toastify__toast","Toastify__toast-theme--".concat(R),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":P}),D=z(h)?h({rtl:j,position:v,type:d,defaultClassName:A}):(0,I.Z)(A,h),S=!!C||!u,M={closeToast:p,type:d,theme:R},B=null;return!1===s||(B=z(s)?s(M):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,M):V(M)),o.createElement(m,{isIn:L,done:k,position:v,preventExitTransition:r,nodeRef:a},o.createElement("div",(0,w.Z)((0,w.Z)({id:O,onClick:l,className:D},i),{},{style:g,ref:a}),o.createElement("div",(0,w.Z)((0,w.Z)({},L&&{role:T}),{},{className:z(y)?y({type:d}):(0,I.Z)("Toastify__toast-body",y),style:x}),null!=N&&o.createElement("div",{className:(0,I.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_})},N),o.createElement("div",null,c)),B,o.createElement(Y,(0,w.Z)((0,w.Z)({},E&&!S?{key:"pb-".concat(E)}:{}),{},{rtl:j,theme:R,delay:u,isRunning:e,isIn:L,closeToast:p,hide:f,type:d,style:Z,className:b,controlledProgress:S,progress:C||0}))))},K=function(t,n){return void 0===n&&(n=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:n}},W=D(K("bounce",!0)),X=(D(K("slide",!0)),D(K("zoom")),D(K("flip")),(0,o.forwardRef)((function(t,n){var e=q(t),r=e.getToastToRender,a=e.containerRef,i=e.isToastActive,s=t.className,c=t.style,u=t.rtl,l=t.containerId;function d(t){var n=(0,I.Z)("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":u});return z(s)?s({position:t,rtl:u,defaultClassName:n}):(0,I.Z)(n,R(s))}return(0,o.useEffect)((function(){n&&(n.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:l},r((function(t,n){var e=n.length?(0,w.Z)({},c):(0,w.Z)((0,w.Z)({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:d(t),style:e,key:"container-".concat(t)},n.map((function(t,e){var r=t.content,a=t.props;return o.createElement(G,(0,w.Z)((0,w.Z)({},a),{},{isIn:i(a.toastId),style:(0,w.Z)((0,w.Z)({},a.style),{},{"--nth":e+1,"--len":n.length}),key:"toast-".concat(a.key)}),r)})))})))})));X.displayName="ToastContainer",X.defaultProps={position:"top-right",transition:W,autoClose:5e3,closeButton:V,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var $,J=new Map,tt=[],nt=1;function et(){return""+nt++}function rt(t){return t&&(P(t.toastId)||N(t.toastId))?t.toastId:et()}function ot(t,n){return J.size>0?M.emit(0,t,n):tt.push({content:t,options:n}),n.toastId}function at(t,n){return(0,w.Z)((0,w.Z)({},n),{},{type:n&&n.type||t,toastId:rt(n)})}function it(t){return function(n,e){return ot(n,at(t,e))}}function st(t,n){return ot(t,at("default",n))}st.loading=function(t,n){return ot(t,at("default",(0,w.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},n)))},st.promise=function(t,n,e){var r,o=n.pending,a=n.error,i=n.success;o&&(r=P(o)?st.loading(o,e):st.loading(o.render,(0,w.Z)((0,w.Z)({},e),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(t,n,o){if(null!=n){var a=(0,w.Z)((0,w.Z)((0,w.Z)({type:t},s),e),{},{data:o}),i=P(n)?{render:n}:n;return r?st.update(r,(0,w.Z)((0,w.Z)({},a),i)):st(i.render,(0,w.Z)((0,w.Z)({},a),i)),o}st.dismiss(r)},u=z(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},st.success=it("success"),st.info=it("info"),st.error=it("error"),st.warning=it("warning"),st.warn=st.warning,st.dark=function(t,n){return ot(t,at("default",(0,w.Z)({theme:"dark"},n)))},st.dismiss=function(t){J.size>0?M.emit(1,t):tt=tt.filter((function(n){return null!=t&&n.options.toastId!==t}))},st.clearWaitingQueue=function(t){return void 0===t&&(t={}),M.emit(5,t)},st.isActive=function(t){var n=!1;return J.forEach((function(e){e.isToastActive&&e.isToastActive(t)&&(n=!0)})),n},st.update=function(t,n){void 0===n&&(n={}),setTimeout((function(){var e=function(t,n){var e=n.containerId,r=J.get(e||$);return r&&r.getToast(t)}(t,n);if(e){var r=e.props,o=e.content,a=(0,w.Z)((0,w.Z)((0,w.Z)({delay:100},r),n),{},{toastId:n.toastId||t,updateId:et()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,ot(i,a)}}),0)},st.done=function(t){st.update(t,{progress:1})},st.onChange=function(t){return M.on(4,t),function(){M.off(4,t)}},st.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},st.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},M.on(2,(function(t){$=t.containerId||t,J.set($,t),tt.forEach((function(t){M.emit(0,t.content,t.options)})),tt=[]})).on(3,(function(t){J.delete(t.containerId||t),0===J.size&&M.off(0).off(1).off(5)}));var ct,ut,lt,dt,ft,pt,mt,vt,ht,gt,yt,xt,bt,Zt,Et,Tt,Ct,wt=e(4281),jt=e(941),Ot=e(3329),kt=function(){var t=(0,o.useState)(""),n=(0,r.Z)(t,2),e=n[0],i=n[1],s=(0,o.useState)(""),c=(0,r.Z)(s,2),u=c[0],l=c[1],d=(0,a.I0)(),f=(0,a.v9)(v),p=function(t){var n=t.target,e=n.name,r=n.value;switch(e){case"name":i(r);break;case"number":l(r)}},m=function(){i(""),l("")},h=function(){return st("Contact aleady exist")};return(0,Ot.jsxs)(E,{children:[(0,Ot.jsxs)(T,{onSubmit:function(t){if(t.preventDefault(),f.some((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return h(),void m();d((0,x.uK)({name:e,number:u})),m()},children:[(0,Ot.jsx)(jt.Z,{sx:{mb:2},id:"filled-basic",label:"Name",variant:"filled",type:"text",name:"name",onChange:p,value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0}),(0,Ot.jsx)(jt.Z,{sx:{mb:2},id:"filled-basic",label:"Number",variant:"filled",type:"text",name:"number",onChange:p,value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,Ot.jsx)(wt.Z,{type:"submit",variant:"contained",color:"primary",children:"Add contact"})]}),(0,Ot.jsx)(X,{})]})},It=Z.ZP.ul(ct||(ct=(0,b.Z)(["\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n  width: 450px;\n"]))),Lt=Z.ZP.li(ut||(ut=(0,b.Z)(["\n  margin: 10px;\n  display: flex;  \n  justify-content: start;\n  border-bottom: .5px solid #ADD8E6;\n"]))),_t=Z.ZP.p(lt||(lt=(0,b.Z)(["\n  margin: 0;\n  width: 100%;\n  \n"]))),Nt=(Z.ZP.button(dt||(dt=(0,b.Z)(["\n  font-size: 11px;\n  font-weight: 200;\n  padding: 8px 20px;\n  border-radius: 4px;\n  border: 0.5px solid lightgrey;\n  color: grey;\n  &:hover {\n    border: 0.5px solid grey;\n    color: #000;\n    background-color: #c4c3c3;\n    font-weight: 400;\n  }\n"]))),e(4062)),Pt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zt=o.createContext&&o.createContext(Pt),Rt=function(){return Rt=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Rt.apply(this,arguments)},At=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e};function Dt(t){return t&&t.map((function(t,n){return o.createElement(t.tag,Rt({key:n},t.attr),Dt(t.child))}))}function St(t){return function(n){return o.createElement(Mt,Rt({attr:Rt({},t.attr)},n),Dt(t.child))}}function Mt(t){var n=function(n){var e,r=t.attr,a=t.size,i=t.title,s=At(t,["attr","size","title"]),c=a||n.size||"1em";return n.className&&(e=n.className),t.className&&(e=(e?e+" ":"")+t.className),o.createElement("svg",Rt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:e,style:Rt(Rt({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&o.createElement("title",null,i),t.children)};return void 0!==zt?o.createElement(zt.Consumer,null,(function(t){return n(t)})):n(Pt)}function Bt(t){return St({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"}}]})(t)}var Ft,qt=Z.ZP.div(ft||(ft=(0,b.Z)(["\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100vw;\n  height: 100vh;\n  z-index: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n"]))),Ht=Z.ZP.div(pt||(pt=(0,b.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),Ut=Z.ZP.div(mt||(mt=(0,b.Z)(["\n  width: 250px;\n  height: 170px;\n  background: white;\n  color: white;\n  z-index: 10;\n  border-radius: 16px;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);\n"]))),Qt=Z.ZP.div(vt||(vt=(0,b.Z)(["\n  width: 300px;\n  height: 230px;\n  background: white;\n  color: white;\n  z-index: 10;\n  border-radius: 16px;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);\n"]))),Vt=Z.ZP.div(ht||(ht=(0,b.Z)(["\n  height: 50px;\n  background: white;\n  overflow: hidden;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n"]))),Yt=Z.ZP.h5(gt||(gt=(0,b.Z)(["\n  margin: 0;\n  padding: 10px;\n  color: #2c3e50;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n"]))),Gt=Z.ZP.div(yt||(yt=(0,b.Z)(["\n  padding: 10px;\n  font-size: 14px;\n  color: #2c3e50;\n  text-align: center;\n"]))),Kt=Z.ZP.div(xt||(xt=(0,b.Z)(["\n  position: absolute;\n  bottom: 2px;\n  margin-bottom: 10px;\n  width: 100%;\n"]))),Wt=Z.ZP.div(bt||(bt=(0,b.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),Xt=Z.ZP.button(Zt||(Zt=(0,b.Z)(["\n  cursor: pointer;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 8px;\n  border: none;\n  font-size: 18px;\n  color: #2c3e50;\n  background: white;\n  transition: all 0.25s ease;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-self: flex-end;\n  margin-top: -7px;\n  margin-right: -7px;\n&:hover {\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);\n  transform: translate(-4px, 4px);\n}"]))),$t=Z.ZP.button(Et||(Et=(0,b.Z)(["\n  margin-top: 10px;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 11px 28px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  border: none;\n  color: #fff;\n  background: #ff3e4e;\n  transition: all 0.25s ease;\n&:hover {\n  box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);\n  transform: translateY(-5px);\n  background: #ff3e4e;\n}"]))),Jt=Z.ZP.button(Tt||(Tt=(0,b.Z)(["\n  margin-top: 10px;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 11px 28px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  border: none;\n  color: #fff;\n  background: #0667e6;\n  transition: all 0.25s ease;\n&:hover {\n  box-shadow: 0 10px 20px -10px rgba(25, 29, 240, 0.6);\n  transform: translateY(-5px);\n  background: #192ff0;\n}"]))),tn=Z.ZP.button(Ct||(Ct=(0,b.Z)(["\n  margin-top: 10px;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 11px 28px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  border: none;\n  color: #2c3e50;\n  background: #fcfcfc;\n  transition: all 0.25s ease;\n&:hover {\n  box-shadow: none;\n  transform: none;\n  background: whitesmoke;\n  }\n"]))),nn=function(t){var n=t.isDeleteOpen,e=t.onDelete,r=t.contactId;return(0,Ot.jsxs)(Ot.Fragment,{children:[(0,Ot.jsx)(qt,{onClick:function(){return n(!1)}}),(0,Ot.jsx)(Ht,{children:(0,Ot.jsxs)(Ut,{children:[(0,Ot.jsx)(Vt,{children:(0,Ot.jsx)(Yt,{children:"Dialog"})}),(0,Ot.jsx)(Xt,{onClick:function(){return n(!1)},children:(0,Ot.jsx)(Bt,{style:{marginBottom:"-3px"}})}),(0,Ot.jsx)(Gt,{children:"Are you sure you want to delete the contact?"}),(0,Ot.jsx)(Kt,{children:(0,Ot.jsxs)(Wt,{children:[(0,Ot.jsx)($t,{onClick:function(){e(r),n(!0)},children:"Delete"}),(0,Ot.jsx)(tn,{onClick:function(){return n(!1)},children:"Cancel"})]})})]})})]})},en=e(4554),rn=function(t){var n=t.isEditOpen,e=t.contactData,r=e.contactId,o=e.contactName,a=e.contactNumber,i=t.setContactName,s=t.setContactNumber,c=t.onUpdate;return(0,Ot.jsxs)(Ot.Fragment,{children:[(0,Ot.jsx)(qt,{onClick:function(){return n(!1)}}),(0,Ot.jsx)(Ht,{children:(0,Ot.jsxs)(Qt,{children:[(0,Ot.jsx)(Vt,{children:(0,Ot.jsx)(Yt,{children:"Update Contact"})}),(0,Ot.jsx)(Xt,{onClick:function(){return n(!1)},children:(0,Ot.jsx)(Bt,{style:{marginBottom:"-3px"}})}),(0,Ot.jsx)(Gt,{children:(0,Ot.jsxs)(en.Z,{children:[(0,Ot.jsx)(jt.Z,{sx:{mb:3},id:"standard-basic",variant:"standard",type:"text",name:"name",value:o,onChange:function(t){return i(t.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}),(0,Ot.jsx)(jt.Z,{id:"standard-basic",variant:"standard",type:"text",name:"number",value:a,onChange:function(t){return s(t.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0})]})}),(0,Ot.jsx)(Kt,{children:(0,Ot.jsxs)(Wt,{children:[(0,Ot.jsx)(Jt,{onClick:function(){c(r,o,a),n(!0)},children:"Update"}),(0,Ot.jsx)(tn,{onClick:function(){return n(!1)},children:"Cancel"})]})})]})})]})},on=function(){var t=(0,a.I0)(),n=(0,a.v9)(y),e=(0,a.v9)(g),i=(0,a.v9)(h),s=(0,a.v9)(m),c=(0,o.useState)(!1),u=(0,r.Z)(c,2),l=u[0],d=u[1],f=(0,o.useState)(!1),p=(0,r.Z)(f,2),v=p[0],b=p[1],Z=(0,o.useState)(null),E=(0,r.Z)(Z,2),T=E[0],C=E[1],w=(0,o.useState)(null),j=(0,r.Z)(w,2),O=j[0],k=j[1],I=(0,o.useState)(null),L=(0,r.Z)(I,2),_=L[0],N=L[1];(0,o.useEffect)((function(){t((0,x.yF)())}),[t]);var P={textAlign:"center"};return(0,Ot.jsxs)(Ot.Fragment,{children:[e&&(0,Ot.jsx)(Nt.Z,{}),!e&&0===n.length&&!s&&!i&&(0,Ot.jsx)("h5",{style:P,children:"Phonebook is empty"}),s&&0===n.length&&(0,Ot.jsx)("h5",{style:P,children:"No matches found"}),(0,Ot.jsxs)(It,{children:[n.map((function(t){var n=t.id,e=t.name,r=t.number;return(0,Ot.jsxs)(Lt,{children:[(0,Ot.jsx)(_t,{children:e}),(0,Ot.jsx)(_t,{children:r}),(0,Ot.jsx)(wt.Z,{style:{fontSize:"10px"},variant:"text",type:"submit",onClick:function(){C(n),k(e),N(r),b(!0)},children:"Edit"}),(0,Ot.jsx)(wt.Z,{style:{fontSize:"10px"},variant:"text",type:"submit",onClick:function(){d(!0),C(n)},children:"Delete"})]},n)})),l&&(0,Ot.jsx)(nn,{isDeleteOpen:function(){d(!1)},onDelete:function(n){t((0,x.GK)(n))},contactId:T}),v&&(0,Ot.jsx)(rn,{isEditOpen:function(){b(!1)},contactData:{contactId:T,contactName:O,contactNumber:_},setContactName:k,setContactNumber:N,onUpdate:function(n,e,r){t((0,x.Tk)({id:n,name:e,number:r}))}})]})]})},an=Z.ZP.div(Ft||(Ft=(0,b.Z)(["\n  text-align: center;\n  margin-bottom: 30px;;\n"]))),sn=e(1634),cn=function(){var t=(0,a.v9)(m),n=(0,a.I0)();return(0,Ot.jsx)(an,{children:(0,Ot.jsx)(jt.Z,{id:"standard-basic",label:"Filter",variant:"standard",type:"text",value:t,onChange:function(t){var e=t.target.value;n((0,sn.T)(e.trim()))}})})},un=function(){return(0,Ot.jsxs)(Ot.Fragment,{children:[(0,Ot.jsx)(kt,{}),(0,Ot.jsx)(cn,{}),(0,Ot.jsx)(on,{})]})}}}]);
//# sourceMappingURL=527.6bcbf954.chunk.js.map