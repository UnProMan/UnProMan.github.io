import{B as i}from"./BaseCard-I1nyKDSW.js";import{d as m,h as b,i as x,o as r,j as _,w as u,a as e,n as y,t as w,_ as p,k as B,p as k,l as N,g as $,c as I,b as n}from"./index-M4VHgF2I.js";const S={class:"message"},E=m({__name:"GoHomePage",props:{iconName:{},href:{},message:{},color:{},transparent:{type:Boolean}},setup(t){b(o=>({"2bfb5c9b":a.value}));const s=t,a=x(()=>s.color),c=()=>{window.open(s.href)},l=()=>s.transparent;return(o,d)=>(r(),_(i,{class:"youtube-container layout__flexColumn",onClick:c},{default:u(()=>[e("i",{class:y(["icon",{"icon-transparent":l(),[s.iconName]:s.iconName}])},null,2),e("div",S,w(s.message),1)]),_:1}))}}),g=p(E,[["__scopeId","data-v-cb37deb0"]]),v=t=>(k("data-v-db76f0ff"),t=t(),N(),t),D=v(()=>e("div",{class:"clock"},[e("div",{class:"hour"},[e("div",{id:"hr",class:"hr"})]),e("div",{class:"min"},[e("div",{id:"mn",class:"mn"})]),e("div",{class:"sec"},[e("div",{id:"sc",class:"sc"})])],-1)),P=v(()=>e("div",{class:"datetime-text"},null,-1)),h=6,T={__name:"Clock",setup(t){const s=document.getElementsByClassName("hr"),a=document.getElementsByClassName("mn"),c=document.getElementsByClassName("sc"),l=document.getElementsByClassName("datetime-text");return setInterval(()=>{const o=new Date,d=o.getHours()*30,f=o.getMinutes()*h,C=o.getSeconds()*h;s&&a&&c&&(s[0].style.transform=`rotateZ(${d+f/12}deg)`,a[0].style.transform=`rotateZ(${f}deg)`,c[0].style.transform=`rotateZ(${C}deg)`),l[0].innerText=B(new Date)},1e3),(o,d)=>(r(),_(i,{class:"layout__flexColumn"},{default:u(()=>[D,P]),_:1}))}},V=p(T,[["__scopeId","data-v-db76f0ff"]]),H=m({__name:"Welcome",setup(t){return(s,a)=>(r(),_(i,null,{default:u(()=>[$(" 대충 방송국 소개하는 내용 ")]),_:1}))}}),M={class:"mainpage-container"},Z={class:"left-container layout__flexColumn"},A={class:"homepage-container"},G=m({__name:"MainPage",setup(t){return(s,a)=>(r(),I("div",M,[e("div",Z,[e("div",A,[n(g,{iconName:"fa-brands fa-youtube",href:"https://www.youtube.com/@kcbs7444",message:"KCBS Youtube",color:"rgb(255, 0, 0)"}),n(g,{iconName:"fa-brands fa-instagram",href:"https://www.instagram.com/koreatech_kcbs",message:"KCBS Instagram",color:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",transparent:""})]),n(V,{class:"clock-view"})]),n(H)]))}}),z=p(G,[["__scopeId","data-v-57e8ad5e"]]);export{z as default};
