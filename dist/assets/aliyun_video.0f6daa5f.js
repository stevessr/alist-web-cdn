import{u as f,o as n,as as b,cs as m,bI as w,a as v,b7 as k,_ as x,aw as _,bd as F,n as j,at as L,f as c,$ as O}from"./index.02b57428.js";import{a as W}from"./useUtil.803c43ac.js";import{O as I}from"./icon.0e6d08a4.js";import{H as P,a as S,A as z,V as B}from"./video_box.863ea802.js";import"./api.0496e199.js";import"./index.e6211851.js";import"./index.c44c8fa4.js";import"./Layout.13f9ce1d.js";import"./Markdown.a3adeea8.js";import"./index.f2e6719e.js";import"./FolderTree.a6e25d66.js";const G=()=>{const{replace:y}=f(),{proxyLink:u}=W();let s=n.objs.filter(e=>e.type===I.VIDEO);s.length===0&&(s=[n.obj]);let o,i={id:"player",container:"#video-player",title:n.obj.name,volume:.5,autoplay:b("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const r=new P;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(m().toLowerCase())?m().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const l=n.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),d=n.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});l&&(i.subtitle={url:u(l,!0),type:w(l.name)}),d&&(i.plugins=[S({danmuku:u(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const{pathname:h}=f(),[C,g]=v(()=>k.post("/fs/other",{path:h(),password:x(),method:"video_preview"}));return _(async()=>{const e=await g();F(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){j.error("No transcoding video found");return}i.url=r[r.length-1].url,i.quality=r.map((a,p)=>({html:a.template_id,url:a.url,default:p===r.length-1})),o=new z(i),o.on("video:ended",()=>{const a=s.findIndex(p=>p.name===n.obj.name);a<s.length-1&&y(s[a+1].name)}),l&&o.on("video:play",a=>{o.subtitle.url=u(l,!0)})})}),L(()=>{o==null||o.destroy()}),c(B,{get children(){return c(O,{w:"$full",h:"60vh",id:"video-player"})}})};export{G as default};
