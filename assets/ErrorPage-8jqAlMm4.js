import{d as _,u as i,c as d,a as o,b as r,t,e as s,w as l,B as u,o as m,f as a,g as h,_ as p}from"./index-KYsrKkvr.js";import{u as f}from"./useErrorStore-jX2c53e9.js";const g={class:"error-container layout__flexColumn"},v={class:"header"},B={class:"error-status"},x={class:"error-code"},E={class:"error-message"},w=_({__name:"ErrorPage",setup(C){const c=i(),e=f().getError(),n=()=>{c.push("/main")};return(R,b)=>(m(),d("div",g,[o("div",v,[r(a,{name:"error",class:"icon",weight:"700"}),o("div",B,t(s(e)?s(e).httpStatus:"")+" ERROR",1)]),o("div",x,t(s(e)?s(e).code:""),1),o("div",E,t(s(e)?s(e).message:"에러가 발생하였습니다."),1),r(u,{class:"button",color:"var(--red-500)",size:"large",onClick:n},{default:l(()=>[r(a,{name:"home",class:"btn-icon",weight:"700"}),h(" 메인으로 ")]),_:1})]))}}),S=p(w,[["__scopeId","data-v-098c5338"]]);export{S as default};
