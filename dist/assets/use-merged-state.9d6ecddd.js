import{g as s,i as f}from"./index.8b05d2db.js";const m=/^(\d|\.)+$/,n=/(\d|\.)+/;function a(r,{c:u=1,offset:i=0,attachPx:t=!0}={}){if(typeof r=="number"){const e=(r+i)*u;return e===0?"0":`${e}px`}else if(typeof r=="string")if(m.test(r)){const e=(Number(r)+i)*u;return t?e===0?"0":`${e}px`:`${e}`}else{const e=n.exec(r);return e?r.replace(n,String((Number(e[0])+i)*u)):r}return r}function c(r,u){return s(r,i=>{i!==void 0&&(u.value=i)}),f(()=>r.value===void 0?u.value:r.value)}export{a as f,c as u};
