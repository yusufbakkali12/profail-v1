/*! For license information please see 258.4c1678a9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkprofail=self.webpackChunkprofail||[]).push([[258],{903:function(t,e,n){var r,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(867),a=(r=s)&&r.__esModule?r:{default:r};function u(t){this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.getSettings(),this.element.style.boxShadow=this.getShadow(this.settings),this.reverse=this.settings.reverse?-1:1,this.addEventListeners()}u.prototype.getShadow=function(t,e){e||(e={percentageX:50,percentageY:50});var n=this.settings.shadow;return n.color+" "+(n.x.min+.01*e.percentageX*(n.x.max-n.x.min))+"px "+(n.y.min+.01*e.percentageY*(n.y.max-n.y.min))+"px "+n.spread+"px"},u.prototype.isSettingTrue=function(t){return""===t||!0===t||1===t},u.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind)},u.prototype.removeEventListeners=function(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind)},u.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},u.prototype.onMouseEnter=function(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},u.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},u.prototype.onMouseLeave=function(t){this.setTransition(),requestAnimationFrame(this.resetBind)},u.prototype.reset=function(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",this.element.style.boxShadow=this.getShadow(this.settings)},u.prototype.getValues=function(){var t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},u.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},u.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.element.style.boxShadow=this.getShadow(this.settings,t),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},u.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.transitionTimeout=setTimeout((function(){t.element.style.transition=""}),this.settings.speed)},u.prototype.getSettings=function(){return{reverse:!0,max:15,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,reset:!0,shadow:{color:"rgba(20, 26, 40, 0.2)",x:{min:-5,max:5},y:{min:3.5,max:10.5},spread:42}}},u.init=function(t,e){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach((function(t){"vanillaTilt"in t||(t.vanillaTilt=new u(t,e))}))};var h={width:"300px",padding:"30px",margin:"10px",background:"#fff",borderRadius:"4px",color:"#364962",fontSize:"16px",lineHeight:1.6},l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){u.init(document.querySelectorAll("[data-tilt]"))}},{key:"render",value:function(){var t=Object.assign({},h,this.props.style);return a.default.createElement("div",i({"data-tilt":!0,style:t},this.props))}}]),e}(a.default.Component);e.Z=l},861:function(t,e,n){function r(t,e,n,r,i,o,s){try{var a=t[o](s),u=a.value}catch(h){return void n(h)}a.done?e(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,u,"next",t)}function u(t){r(s,i,o,a,u,"throw",t)}a(void 0)}))}}n.d(e,{Z:function(){return i}})},165:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(2);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",h=s.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,s=Object.create(i.prototype),a=new j(r||[]);return o(s,"_invoke",{value:L(t,n,a)}),s}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=c;var p={};function d(){}function v(){}function m(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(T([])));w&&w!==e&&n.call(w,a)&&(y=w);var x=m.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function i(o,s,a,u){var h=f(t[o],t,s);if("throw"!==h.type){var l=h.arg,c=l.value;return c&&"object"==(0,r.Z)(c)&&n.call(c,"__await")?e.resolve(c.__await).then((function(t){i("next",t,a,u)}),(function(t){i("throw",t,a,u)})):e.resolve(c).then((function(t){l.value=t,a(l)}),(function(t){return i("throw",t,a,u)}))}u(h.arg)}var s;o(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return s=s?s.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=M(s,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function M(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,M(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=f(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=m,o(x,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,h,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,h,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new E(c(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},b(x),l(x,h,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;_(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=258.4c1678a9.chunk.js.map