import{d as T,u as B,e as _,a3 as t,a as F,b9 as f,as as I,f as e,m as a,a2 as g,c2 as U,c3 as L,c4 as x,c5 as y,a0 as o,aP as w,bh as b,c6 as A,b3 as $,b1 as v,I as k,F as M,B as i,ai as R,ar as E,c7 as d,v as H,ao as W,W as z,bz as G,bf as V,n as j}from"./index.930a801e.js";import{o as q}from"./index.19544a51.js";import{L as D}from"./index.a4762de7.js";const J=r=>e(G,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),X=()=>{const r=T();q("manage.sidemenu.profile");const{to:c,searchParams:K}=B(),[u,C]=_(t().username),[h,S]=_(""),[m,P]=F(n=>f.post("/me/update",{username:n?t().username:u(),password:n?"":h(),sso_id:t().sso_id})),l=async n=>{const s=await P(n);V(s,()=>{d({...t(),username:u()}),n?c(""):(j.success(r("users.update_profile_success")),c(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})};function p(n){const s=n.data;s.sso_id&&(d({...t(),sso_id:s.sso_id}),l(!0))}return window.addEventListener("message",p),I(()=>{window.removeEventListener("message",p)}),e(z,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(a,{get when(){return!g.is_guest(t())},get fallback(){return[e(U,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(L,{mr:"$2_5"}),e(x,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(y,{get children(){return r("users.modify_nothing")}})]}}),e(o,{spacing:"$2",get children(){return[e(w,{get children(){return r("global.have_account")}}),e(w,{color:"$info9",as:D,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(b,{get children(){return r("users.update_profile")}}),e(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e($,{get children(){return[e(v,{for:"username",get children(){return r("users.change_username")}}),e(k,{id:"username",get value(){return u()},onInput:n=>{C(n.currentTarget.value)}})]}}),e($,{get children(){return[e(v,{for:"password",get children(){return r("users.change_password")}}),e(k,{id:"password",type:"password",placeholder:"********",get value(){return h()},onInput:n=>{S(n.currentTarget.value)}}),e(M,{get children(){return r("users.change_password-tips")}})]}})]}}),e(o,{spacing:"$2",get children(){return[e(i,{get loading(){return m()},onClick:[l,!1],get children(){return r("global.save")}}),e(a,{get when(){return!t().otp},get children(){return e(i,{colorScheme:"accent",onClick:()=>{c("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(a,{get when(){return R(()=>!!E("sso_login_enabled"),!0)()&&!g.is_guest(t())},get children(){return[e(b,{get children(){return r("users.sso_login")}}),e(o,{spacing:"$2",get children(){return e(a,{get when(){return t().sso_id},get fallback(){return e(i,{onClick:()=>{const n=f.getUri()+"/auth/sso?method=get_sso_id";window.open(n,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(i,{colorScheme:"danger",get loading(){return m()},onClick:()=>{d({...t(),sso_id:""}),l(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(o,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(H,{each:W,children:(n,s)=>e(J,{get can(){return g.can(t(),s())},get children(){return r(`users.permissions.${n}`)}})})}})]}})};export{X as default};
