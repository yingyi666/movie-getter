import{N as d,_ as p}from"./generalDataTable-cefab4f1.js";import{d as r,r as g,h as i,e as m,g as _,f as y,u as s,o as f}from"./index-05d69c29.js";import{b as h,g as v,u as x,c as k}from"./index-3297fa0a.js";import{e as S,f as b}from"./api-93c96997.js";import{N as C}from"./Switch-46d83932.js";import"./Button-48bb4fe6.js";import"./Checkbox-d55c81b8.js";const w=h(),c=r(()=>w.val),G=r(()=>{let e=[];e.push({label:"未分类",value:0});for(let t=0;t<c.value.length;t++){const a=c.value[t];e.push({label:a.name,value:a.id})}return e}),N=(e,t)=>i(C,{value:e.isGet,onUpdateValue:a=>{S(e.id,!e.isGet,()=>{e.isGet=!e.isGet})}}),K=(e,t)=>i(d,{value:e.categoryId,options:G.value,onUpdateValue:(a,l)=>{b(e.id,a,(n,o)=>{e.categoryId=a})}}),I=g([{title:"ID",key:"id",align:"center",width:"100px",ellipsis:!0},{title:"名称",key:"name",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>v(e.name)},{title:"是否采集",key:"isGet",align:"center",width:"100px",render:N},{title:"所属分类",key:"categoryId",align:"center",width:"200px",render:K}]),j=m({__name:"class",setup(e){const t=x(),a=_(),l=r(()=>t.getClasses(Number(a.params.id)).value),n=k(1,1,o=>{n.value.page=o});return(o,B)=>{const u=p;return f(),y(u,{title:"采集类",columns:s(I),data:s(l),page:s(n).page,pageCount:s(n).pageCount,update:s(n).update,isAdd:!1,keyword:s(t).classKeyword,updateKeyword:s(t).updateclassKeyword},null,8,["columns","data","page","pageCount","update","keyword","updateKeyword"])}}});export{j as default};
