!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.58d29978.js","./Folder-legacy.751780ff.js","./Layout-legacy.f58a713c.js","./useUtil-legacy.5623e051.js","./index-legacy.1f91ab8b.js","./ImageWithError-legacy.4bef8f14.js","./icon-legacy.b925b8fc.js","./Paginator-legacy.40e841f0.js","./index-legacy.65baa840.js","./api-legacy.36411837.js","./Markdown-legacy.0a03847a.js","./index-legacy.ced2714b.js","./FolderTree-legacy.1dae204a.js"],(function(t){"use strict";var n,r,o,a,i,l,u,c,f,s,g,d,b,y,h,m,p,j,w,x,v,$,A,S,k,M,C,E;return{setters:[function(e){n=e.f,r=e.a8,o=e.ai,a=e.e,i=e.w,l=e.aF,u=e.V,c=e.C,f=e.aE,s=e.aH,g=e.co,d=e.al,b=e.ah,y=e.m,h=e.bv,m=e.ag,p=e.aP,j=e.x,w=e.o,x=e.c2},function(e){v=e.b},function(e){$=e.a,A=e.M},function(e){S=e.c},function(e){k=e.o},function(e){M=e.I},function(e){C=e.g,E=e.O},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var I=function(t){if((0,S().isHide)(t.obj))return null;var j=$().setPathAs,w=n(o,{get color(){return r()},boxSize:"$12",get as(){return C(t.obj)}}),x=e(a(!1),2),I=x[0],P=x[1],z=i((function(){return l()&&(I()||t.obj.selected)})),O=v({id:1}).show;return n(A.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:k,get href(){return t.obj.name},onMouseEnter:function(){P(!0),j(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){P(!1)},onContextMenu:function(e){f((function(){s(!1),g(t.index,!0,!0)})),O(e,{props:t.obj})},get children(){return[n(d,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===E.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(y,{get when(){return z()},get children(){return n(h,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(y,{get when(){return t.obj.thumb},fallback:w,get children(){return n(M,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(m,{size:"lg"})},fallbackErr:w,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})};t("default",(function(){return n(x,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return n(j,{get each(){return w.objs},children:function(e,t){return n(I,{obj:e,get index(){return t()}})}})}})}))}}}))}();
