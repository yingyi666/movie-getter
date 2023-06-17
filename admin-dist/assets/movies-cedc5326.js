import{_ as k}from"./generalDataTable-cefab4f1.js";import{b as v,_ as C}from"./base-dc71a3f3.js";import{d as p,r as S,h as _,e as K,g as M,i as b,j as V,k as W,f as N,w as R,u as a,o as j,a as z}from"./index-05d69c29.js";import{a as y,d as w,g as r}from"./index-3297fa0a.js";import{c as B}from"./api-93c96997.js";import{_ as g}from"./Button-48bb4fe6.js";import{_ as $}from"./generalModal.vue_vue_type_script_setup_true_lang-866e8e04.js";import"./Checkbox-d55c81b8.js";const A=y(),D=w(),l=p(()=>A.movieModal),E=(e,t)=>_($,{justify:"center"},()=>[_(g,{type:"primary",strong:!0,size:"small",secondary:!0,onClick:()=>{l.value.data=v(e),l.value.origin=e,l.value.new=!1,l.value.show=!0}},{default:()=>"修改"}),_(g,{type:"error",strong:!0,size:"small",secondary:!0,onClick:()=>{B(e.id,(u,o)=>{D.refresh()})}},{default:()=>"删除"})]),I=S([{title:"ID",key:"id",align:"center",width:"100px",ellipsis:!0},{title:"影片名",key:"name",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.name)},{title:"导演",key:"director",align:"center",width:"100px",ellipsis:!0,render:(e,t)=>r(e.director)},{title:"主演",key:"actor",align:"center",width:"100px",render:(e,t)=>r(e.actor)},{title:"时长",key:"duration",align:"center",width:"80px",ellipsis:!0,render:(e,t)=>r(e.duration)},{title:"影片描述",key:"description",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.description)},{title:"封面链接",key:"pic",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.pic)},{title:"影片直链",key:"url",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.url)},{title:"操作",key:"actions",align:"center",width:"200px",ellipsis:!0,render:(e,t)=>r(E(e))}]),Q=K({__name:"movies",setup(e){const t=M(),u=b(),o=w(),f=y(),h=p(()=>o.val),n=p(()=>f.movieModal),i=p(()=>o.pageRef);i.value.update=s=>{i.value.page=s,u.push({name:t.name,params:{id:t.params.id,page:i.value.page}})},V(()=>{const s=t.name,d=Number(t.params.page),c=Number(t.params.id),m=o.movieKeyword;i.value.page=d,o.bind(s,d,c,m)}),W(()=>o.movieKeyword,(s,d)=>{u.push({name:t.name,params:{id:t.params.id,page:1}})});const x=()=>{let s=v({id:-1,name:"",director:"",actor:"",duration:"",description:"",pic:"",url:""});n.value.data=s,n.value.new=!0,n.value.show=!0};return(s,d)=>{const c=C,m=k;return j(),N(m,{title:"影片管理",columns:a(I),data:a(h),page:a(i).page,pageCount:a(i).pageCount,update:a(i).update,add:x,isAdd:!0,keyword:a(o).movieKeyword,updateKeyword:a(o).updatemovieKeyword},{extra:R(()=>[z(c,{title:"影片测试",data:a(n).data,show:a(n).show,type:a(n).type,onClose:a(n).close,onSave:a(n).save},null,8,["data","show","type","onClose","onSave"])]),_:1},8,["columns","data","page","pageCount","update","keyword","updateKeyword"])}}});export{Q as default};
