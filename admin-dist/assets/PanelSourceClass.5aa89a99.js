import{d as h,by as y,r as c,q as x,bv as b,Q as N,Z as B,T as a,b7 as k,S as e,X as o,U as d,bm as i,h as s}from"./index.b94e391d.js";import{p as D}from"./path.cf256b5b.js";import{n as v,o as F,p as I}from"./api.88006f6a.js";import{C as S}from"./data.88ed09d0.js";import{F as w,A as z,R as V}from"./RefreshCircleOutline.854b4e33.js";import{N as A,_ as E}from"./DataTable.3c3b189b.js";import{u as O}from"./use-notification.32e91ece.js";import{N as R,_ as p}from"./Space.9e2e5205.js";import{N as U}from"./Switch.135f49e2.js";import{_ as P}from"./Input.89eea44c.js";import"./Checkbox.3e01bf1d.js";import"./Dropdown.9a3d1a57.js";import"./next-frame-once.da993024.js";const j={style:{display:"flex","align-items":"center",height:"100%"}},q={style:{display:"flex","align-items":"center",height:"100%"}},te=h({__name:"PanelSourceClass",setup(G){const _=y(),m=O();D.value=[{name:"\u91C7\u96C6\u6E90",params:null,to:""},{name:"\u91C7\u96C6\u7C7B",params:null,to:""}];const l=c([]);x(()=>{b(()=>{v(Number(_.params.id),l)})});const f=c([{title:"ID",key:"id",width:100,align:"center"},{title:"\u540D\u5B57",key:"name",align:"center"},{title:"\u662F\u5426\u91C7\u96C6",key:"get",width:200,align:"center",render(t,u){return s(U,{value:t.get,onUpdateValue:n=>{F(t.id,n).then(()=>{t.get=n})}})}},{title:"\u6240\u5C5E\u5206\u7C7B",key:"categoryId",width:200,align:"center",render(t,u){return s(A,{value:t.categoryId,options:S.value,onUpdateValue:(n,r)=>{I(t.id,n).then(()=>{t.categoryId=n,m.success({duration:1500,content:"\u5206\u914D\u91C7\u96C6\u7C7B",meta:"\u64CD\u4F5C\u6210\u529F"})})}})}},{title:"\u64CD\u4F5C",key:"action",width:"150px",align:"center",render(t,u){return s(p,{justify:"center"},()=>s(i,{secondary:!0,type:"error",size:"small",disabled:!0,onClick:()=>{}},()=>"\u5220\u9664"))}}]);return(t,u)=>{const n=R,r=P,C=E,g=k;return N(),B(g,{title:"\u5206\u7C7B\u7BA1\u7406",size:"small"},{"header-extra":a(()=>[e(o(p),null,{default:a(()=>[e(r,{placeholder:"\u641C\u7D22",round:"",disabled:""},{prefix:a(()=>[e(n,{component:o(w)},null,8,["component"])]),_:1}),d("div",j,[e(o(i),{text:"",type:"primary",style:{"font-size":"24px"},disabled:""},{default:a(()=>[e(n,null,{default:a(()=>[e(o(z))]),_:1})]),_:1})]),d("div",q,[e(o(i),{text:"",type:"info",style:{"font-size":"24px"}},{default:a(()=>[e(n,null,{default:a(()=>[e(o(V))]),_:1})]),_:1})])]),_:1})]),default:a(()=>[e(C,{columns:f.value,data:l.value,bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{te as default};
