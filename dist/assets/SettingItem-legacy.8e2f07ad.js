!function(){function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy.58d29978.js","./index-legacy.b09f8258.js","./item_type-legacy.d1f1c701.js","./index-legacy.1f91ab8b.js"],(function(r){"use strict";var n,t,u,l,i,c,a,o,g,d,f,h,v,b,y,s,p,m,O,w,k,j,x,C,D,T,E,A;return{setters:[function(e){n=e.d,t=e.f,u=e.m,l=e.a$,i=e.aj,c=e.ai,a=e.W,o=e.al,g=e.X,d=e.I,f=e.bT,h=e.T,v=e.bU,b=e.bV,y=e.bW,s=e.bX,p=e.bY,m=e.bZ,O=e.b_,w=e.x,k=e.b$,j=e.c0,x=e.c1,C=e.F,D=e.b1},function(e){T=e.F},function(e){E=e.T},function(e){A=e.n}],execute:function(){r("I",(function(r){var N=n();return t(D,{get w(){var e;return null!==(e=r.w)&&void 0!==e?e:"100%"},display:"flex",flexDirection:"column",get children(){return[t(u,{get when(){return!r.hideLabel},get children(){var n,a;return t(l,(n={},"for",(a={}).for=a.for||{},a.for.get=function(){return r.key},e(n,"display","flex"),e(n,"alignItems","center"),"children",a.children=a.children||{},a.children.get=function(){return[i((function(){return N("settings.".concat(r.key))})),t(u,{get when(){return r.flag===T.DEPRECATED},get children(){return t(c,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},function(e,r){for(var n in r)(l=r[n]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,n,l);if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(r),u=0;u<t.length;u++){var l,i=t[u];(l=r[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}}(n,a),n))}}),t(a,{get fallback(){return t(o,{get children(){return N("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[E.String,E.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===E.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===T.READONLY}})}}),t(g,{get when(){return r.type===E.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===T.READONLY}})}}),t(g,{get when(){return r.type===E.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===T.READONLY}})}}),t(g,{get when(){return r.type===E.Select},get children(){return t(v,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===T.READONLY},get children(){return[t(b,{get children(){return[t(y,{get children(){return N("global.choose")}}),t(s,{}),t(p,{})]}}),t(m,{get children(){return t(O,{get children(){return t(w,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(k,{value:e,get children(){return[t(j,{get children(){return N("settings.".concat(r.key,"s.").concat(e))}}),t(x,{})]}})}})}})}})]}})}})]}}),t(C,{get children(){return i((function(){return!!r.help}),!0)()?N("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();
