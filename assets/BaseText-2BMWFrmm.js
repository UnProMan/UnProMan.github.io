import{d as v,h as f,v as u,i as m,o as _,c as h,a as s,n as i,t as b,_ as x}from"./index-KYsrKkvr.js";const B={class:"input-container"},y=["type","value","disabled"],g={class:"pseudo-placeholder-text"},w={for:"fname",id:"placeholder-fname",class:"placeholder-text"},F=v({__name:"BaseText",props:{width:{},height:{},caption:{},disable:{type:Boolean},value:{default:""},numberFilter:{type:Boolean},type:{default:"text"}},emits:["update:value"],setup(c,{emit:d}){f(t=>({"24133c16":t.width,"91f23a50":t.height}));const e=c,a=u(e.value),r=d,o=u(!1),n=m(()=>a.value!==""&&a.value!==null||o.value),p=t=>{a.value=t.target.value,e.numberFilter&&(a.value=a.value.replace(/[^0-9]/g,"")),r("update:value",a.value)};return(t,l)=>(_(),h("div",{class:i(["input-row",{"input-row--active":n.value}])},[s("div",B,[s("input",{type:e.type,id:"fname",name:"fname",autocomplete:"off",value:a.value,disabled:e==null?void 0:e.disable,"aria-labelledby":"placeholder-fname",onInput:p,onFocus:l[0]||(l[0]=()=>o.value=!0),onBlur:l[1]||(l[1]=()=>o.value=!1)},null,40,y),s("div",g,[s("label",w,[s("div",{class:i(["text",{"text--active":n.value}])},b(e.caption),3)])])])],2))}}),k=x(F,[["__scopeId","data-v-4daf1c1e"]]);export{k as B};
