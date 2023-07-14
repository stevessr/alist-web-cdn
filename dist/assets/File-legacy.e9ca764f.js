!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(u.push(t.value),!n||u.length!==n);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.9c716ddc.js","./useUtil-legacy.896d2f8c.js","./icon-legacy.77749264.js","./index-legacy.cda90b6b.js","./Layout-legacy.730f598b.js"],(function(n,r){"use strict";var o,u,i,c,a,l,f,p,d,s,m,g,b,h,y,v,w,j,O,_,$,x,k,S,P,A,E,T,I,z,D,M,C,L,U,V,B,W,X,G,H;return{setters:[function(e){o=e.f,u=e.ae,i=e.ah,c=e.a7,a=e.o,l=e.W,f=e.bh,p=e.aP,d=e.ai,s=e.bA,m=e.bM,g=e.d,b=e.t,h=e.bN,y=e.ad,v=e.a5,w=e.B,j=e.a9,O=e.v,_=e.aa,$=e.bO,x=e.m,k=e.a0,S=e.bP,P=e.z,A=e.bQ,E=e.G,T=e.H,I=e.bK,z=e.bR,D=e.e,M=e.aS,C=e.P,L=e.Q,U=e.ab},function(e){V=e.a,B=e.b},function(e){W=e.g,X=e.O},function(e){G=e.n},function(e){H=e.T}],execute:function(){var Q=n("F",(function(e){return o(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(u,{boxSize:"$20",get fallback(){return o(i,{get color(){return c()},boxSize:"$20",get as(){return W(a.obj)}})},get src(){return a.obj.thumb}}),o(l,{spacing:"$2",get children(){return[o(f,{size:"lg",css:{wordBreak:"break-all"},get children(){return a.obj.name}}),o(p,{color:"$neutral10",size:"sm",get children(){return[d((function(){return s(a.obj.size)}))," · ",d((function(){return m(a.obj.modified)}))]}})]}}),o(l,{spacing:"$2",get children(){return e.children}})]}})})),R=function(){var e=g(),n=b((function(){return h(a.obj.name)})),r=V().currentObjLink;return o(x,{get when(){return n().length},get children(){return o(y,{get children(){return[o(v,{as:w,colorScheme:"success",get rightIcon(){return o(i,{as:G})},get children(){return e("home.preview.open_with")}}),o(j,{get children(){return o(O,{get each(){return n()},children:function(e){return o(_,{as:"a",target:"_blank",get href(){return $(e.value,{raw_url:a.raw_url,name:a.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},F=function(e){var n=g(),r=B().copyCurrentRawLink;return o(Q,{get children(){return[o(k,{spacing:"$2",get children(){return[o(w,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(w,{as:"a",get href(){return a.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(x,{get when(){return e.openWith},get children(){return o(R,{})}})]}})},K=Object.freeze(Object.defineProperty({__proto__:null,Download:F,default:F},Symbol.toStringTag,{value:"Module"})),N=function(e){var n=V().currentObjLink,r=b((function(){return $(e.scheme,{raw_url:a.raw_url,name:a.obj.name,d_url:n(!0)})}));return o(A,{w:"$full",h:"70vh",get children(){return[o(S.iframe,{w:"$full",h:"$full",get src(){return r()}}),o(i,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:H,onClick:function(){window.open(r(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return P()},p:"$1",boxSize:"$7"})]}})},q=[{name:"Aliyun Video Previewer",type:X.VIDEO,provider:/^Aliyundrive(Open)?$/,component:E((function(){return T((function(){return r.import("./aliyun_video-legacy.945b68d3.js")}),void 0)}))},{name:"Markdown",type:X.TEXT,component:E((function(){return T((function(){return r.import("./markdown-legacy.6799538c.js")}),void 0)}))},{name:"Markdown with word wrap",type:X.TEXT,component:E((function(){return T((function(){return r.import("./markdown_with_word_wrap-legacy.c1fbc2bc.js")}),void 0)}))},{name:"Url Open",exts:["url"],component:E((function(){return T((function(){return r.import("./url-legacy.ab42a4ef.js")}),void 0)}))},{name:"Text Editor",type:X.TEXT,exts:["url"],component:E((function(){return T((function(){return r.import("./text-editor-legacy.dffaa753.js")}),void 0)}))},{name:"HTML render",exts:["html"],component:E((function(){return T((function(){return r.import("./html-legacy.3420b7ca.js")}),void 0)}))},{name:"Image",type:X.IMAGE,component:E((function(){return T((function(){return r.import("./image-legacy.72110b64.js")}),void 0)}))},{name:"Video",type:X.VIDEO,component:E((function(){return T((function(){return r.import("./video-legacy.9d2492d0.js")}),void 0)}))},{name:"Audio",type:X.AUDIO,component:E((function(){return T((function(){return r.import("./audio-legacy.2e98b72a.js")}),void 0)}))},{name:"Ipa",exts:["ipa","tipa"],component:E((function(){return T((function(){return r.import("./ipa-legacy.12bf0730.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:E((function(){return T((function(){return r.import("./plist-legacy.1258219d.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:E((function(){return T((function(){return r.import("./aliyun_office-legacy.e0074539.js")}),void 0)}))}],J=function(e){var n=[];return q.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(I(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),z(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(N,{scheme:r})})})})),n.push({name:"Download",component:E((function(){return T((function(){return Promise.resolve().then((function(){return K}))}),void 0)}))}),n},Y=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=b((function(){return J(t(t({},a.obj),{},{provider:a.provider}))})),r=e(D(n()[0]),2),u=r[0],i=r[1];return o(x,{get when(){return n().length>1},get fallback(){return o(F,{openWith:!0})},get children(){return o(l,{w:"$full",spacing:"$2",get children(){return[o(k,{w:"$full",spacing:"$2",get children(){return[o(M,{alwaysShowBorder:!0,get value(){return u().name},onChange:function(e){i(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(R,{})]}}),o(C,{get fallback(){return o(L,{})},get children(){return o(U,{get component(){return u().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",Y)}}}))}();
