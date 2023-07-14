!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new P(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=O(c,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}n.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};l(v,c,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==r&&o.call(m,c)&&(v=m);var b=y.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,n){function r(i,c,a,u){var l=s(e[i],e,c);if("throw"!==l.type){var f=l.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):n.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=y,l(b,"constructor",y),l(y,"constructor",d),d.displayName=l(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,a,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new j(f(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},n}function n(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(l){return void n(l)}a.done?e(u):Promise.resolve(u).then(r,o)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.9c716ddc.js","./useUtil-legacy.896d2f8c.js","./api-legacy.64a04e32.js"],(function(t){"use strict";var o,i,c,a,u,l,f,s,h,p,d,y,v,g,m,b,w,j,O,x,E,P;return{setters:[function(t){o=t.cx,i=t.e,c=t.f,a=t.Z,u=t.aw,l=t.K,f=t.as,s=t.Y,h=t.bJ,p=t.t,d=t.u,y=t.d,v=t.a,g=t.b9,m=t.W,b=t.o,w=t.m,j=t.aI,O=t.B,x=t.n,E=t.bf},function(t){P=t.d},function(){}],execute:function(){function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function D(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}function F(t){return function e(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=t.length?t.apply(this,o):function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e.apply(n,[].concat(o,r))}}}function G(t){return{}.toString.call(t).includes("Object")}function N(t){return"function"==typeof t}var q=F((function(t,e){throw new Error(t[e]||t.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),M={changes:function(t,e){return G(e)||q("changeType"),Object.keys(e).some((function(e){return n=t,r=e,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&q("changeField"),e},selector:function(t){N(t)||q("selectorType")},handler:function(t){N(t)||G(t)||q("handlerType"),G(t)&&Object.values(t).some((function(t){return!N(t)}))&&q("handlersType")},initial:function(t){var e;t||q("initialIsRequired"),G(t)||q("initialType"),e=t,Object.keys(e).length||q("initialContent")}};function R(t,e){return N(e)?e(t.current):e}function z(t,e){return t.current=C(C({},t.current),e),e}function U(t,e,n){return N(e)?e(t.current):Object.keys(n).forEach((function(n){var r;return null===(r=e[n])||void 0===r?void 0:r.call(e,t.current[n])})),n}var $={create:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};M.initial(t),M.handler(e);var n={current:t},r=F(U)(n,e),o=F(z)(n),i=F(M.changes)(t),c=F(R)(n);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){return t};return M.selector(t),t(n.current)}function u(t){D(r,o,i,c)(t)}return[a,u]}};var Y,B={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},J=(Y=function(t,e){throw new Error(t[e]||t.default)},function t(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length>=Y.length?Y.apply(this,r):function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t.apply(e,[].concat(r,o))}})(B),K={config:function(t){var e;return t||J("configIsRequired"),e=t,{}.toString.call(e).includes("Object")||J("configType"),t.urls?(console.warn(B.deprecation),{paths:{vs:t.urls.monacoBase}}):t}};function V(t,e){return Object.keys(e).forEach((function(n){e[n]instanceof Object&&t[n]&&Object.assign(e[n],V(t[n],e[n]))})),k(k({},t),e)}var W={type:"cancelation",msg:"operation is manually canceled"};function Z(t){var e=!1,n=new Promise((function(n,r){t.then((function(t){return e?r(W):n(t)})),t.catch(r)}));return n.cancel=function(){return e=!0},n}var H,Q,X=$.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}),tt=(Q=2,function(t){if(Array.isArray(t))return t}(H=X)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(H,Q)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}(H,Q)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),et=tt[0],nt=tt[1];function rt(t){return document.body.appendChild(t)}function ot(t){var e,n,r=et((function(t){return{config:t.config,reject:t.reject}})),o=(e="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),e&&(n.src=e),n);return o.onload=function(){return t()},o.onerror=r.reject,o}function it(){var t=et((function(t){return{config:t.config,resolve:t.resolve,reject:t.reject}})),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],(function(e){ct(e),t.resolve(e)}),(function(e){t.reject(e)}))}function ct(t){et().monaco||nt({monaco:t})}var at,ut=new Promise((function(t,e){return nt({resolve:t,reject:e})})),lt={config:function(t){var e=K.config(t),n=e.monaco,r=I(e,["monaco"]);nt((function(t){return{config:V(t.config,r),monaco:n}}))},init:function(){var t=et((function(t){return{monaco:t.monaco,isInitialized:t.isInitialized,resolve:t.resolve}}));if(!t.isInitialized){if(nt({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),Z(ut);if(window.monaco&&window.monaco.editor)return ct(window.monaco),t.resolve(window.monaco),Z(ut);!function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}(rt,ot)(it)}return Z(ut)},__getMonacoInstance:function(){return et((function(t){return t.monaco}))}};lt.config({paths:{vs:o}});var ft=function(t){var e=r(i(!0),2),n=e[0],o=e[1];return lt.init().then((function(t){at=t,o(!1)})),c(a,{get loading(){return n()},get children(){return c(st,t)}})},st=function(t){var e,n,r;return u((function(){n=at.editor.create(e,{value:t.value,theme:t.theme}),r=at.editor.createModel(t.value,t.language,t.path?at.Uri.parse(t.path):void 0),n.setModel(r),n.onDidChangeModelContent((function(){var e;null===(e=t.onChange)||void 0===e||e.call(t,n.getValue())}))})),l((function(){at.editor.setTheme(t.theme)})),f((function(){r&&r.dispose(),n&&n.dispose()})),c(s,{w:"$full",h:"70vh",ref:function(t){"function"==typeof e?e(t):e=t}})};t("default",(function(){var t,o=r(P(),1)[0],u=h().colorMode,l=p((function(){return"light"===u()?"vs":"vs-dark"})),f=d().pathname,s=r(i(null===(t=o())||void 0===t?void 0:t.content),2),S=s[0],L=s[1],k=y(),I=r(v((function(){var t;return g.put("/fs/put",S(),{headers:{"File-Path":encodeURIComponent(f()),"Content-Type":(null===(t=o())||void 0===t?void 0:t.contentType)||"text/plain"}})})),2),T=I[0],A=I[1];return c(a,{get loading(){return o.loading},get children(){return c(m,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[c(ft,{get value(){var t,e;return null!==(t=null===(e=o())||void 0===e?void 0:e.content)&&void 0!==t?t:""},get theme(){return l()},get path(){return b.obj.name},onChange:function(t){L(t)}}),c(w,{get when(){return j("write")||b.write},get children(){return c(O,{get loading(){return T()},onClick:(t=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(S()){t.next=3;break}return x.success(k("global.save_success")),t.abrupt("return");case 3:return t.next=5,A();case 5:n=t.sent,E(n,(function(){x.success(k("global.save_success"))}));case 7:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return k("global.save")}});var t}})]}})}})}))}}}))}();
