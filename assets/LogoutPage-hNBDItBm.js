import{N as l,r,m as u,q as c,s as i,d as f,u as p,E as m}from"./index-mF9vK2-Z.js";const _=()=>{const{isAlert:s}=l(r()),e=u();return c(["logoutUserQuery"],i.user.logoutUser,{enabled:!1,onSuccess:()=>{e.logout(),s.value=!1}})},y=f({__name:"LogoutPage",setup(s){const e=r();u();const a=p(),{refetch:n}=_();return e.setContent({type:"question",title:"로그아웃",message:"로그아웃 하시겠습니까?"}),m(()=>({isOkay:e.isOkay,isAlert:e.isAlert}),({isOkay:t,isAlert:o})=>{t&&n.value(),o||a.push("/main")}),(t,o)=>null}});export{y as default};
