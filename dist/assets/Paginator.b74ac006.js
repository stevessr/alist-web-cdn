import{aq as z,bw as p,w as h,f as t,a2 as w,m as g,B as l,a7 as s,x as m}from"./index.d35f9728.js";import{k as C,l as $}from"./index.37946fd8.js";const _=S=>{const r=z({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},S),[n,d]=p({pageSize:r.defaultPageSize,current:r.defaultCurrent}),a=h(()=>Math.ceil(r.total/n.pageSize)),P=h(()=>{const e=n.current,c=Math.max(2,e-Math.floor(r.maxShowPage/2));return Array.from({length:e-c},(x,u)=>c+u)}),f=h(()=>{const e=n.current,c=Math.min(a()-1,e+Math.floor(r.maxShowPage/2));return Array.from({length:c-e},(x,u)=>e+1+u)}),o={"@initial":"sm","@md":"md"},i=e=>{var c;d("current",e),(c=r.onChange)==null||c.call(r,e)};return t(g,{get when(){return!r.hideOnSinglePage||a()>1},get children(){return t(w,{spacing:"$1",get children(){return[t(g,{get when(){return n.current!==1},get children(){return[t(l,{size:o,get colorScheme(){return r.colorScheme},onClick:()=>{i(1)},px:"$3",children:"1"}),t(s,{size:o,get icon(){return t(C,{})},"aria-label":"Previous",get colorScheme(){return r.colorScheme},onClick:()=>{i(n.current-1)},w:"2rem !important"})]}}),t(m,{get each(){return P()},children:e=>t(l,{size:o,get colorScheme(){return r.colorScheme},onClick:()=>{i(e)},px:e>10?"$2_5":"$3",children:e})}),t(l,{size:o,get colorScheme(){return r.colorScheme},variant:"solid",get px(){return n.current>10?"$2_5":"$3"},get children(){return n.current}}),t(m,{get each(){return f()},children:e=>t(l,{size:o,get colorScheme(){return r.colorScheme},onClick:()=>{i(e)},px:e>10?"$2_5":"$3",children:e})}),t(g,{get when(){return n.current!==a()},get children(){return[t(s,{size:o,get icon(){return t($,{})},"aria-label":"Next",get colorScheme(){return r.colorScheme},onClick:()=>{i(n.current+1)},w:"2rem !important"}),t(l,{size:o,get colorScheme(){return r.colorScheme},onClick:()=>{i(a())},get px(){return a()>10?"$2_5":"$3"},get children(){return a()}})]}})]}})}})};export{_ as P};
