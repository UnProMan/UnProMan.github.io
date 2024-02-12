import{B as V}from"./BaseCard-Pb5-_-X4.js";import{u as P,x as A,r as w,s as J,d as b,v as l,i as M,o as h,c as N,b as s,w as B,g as j,B as E,y as _,z as F,_ as S,j as z,p as T,l as Z,a as R}from"./index-IYAVY74D.js";import{B as i}from"./BaseText-60yWwE0B.js";import{u as O}from"./useErrorStore-9STUoks5.js";const G=()=>{const o=P();return A(async a=>{console.log(a),await J.user.joinUser(a)},{onSuccess:()=>{w().setContent({type:"info",title:"회원가입",message:"회원가입 신청이 완료되었습니다."}),o.push("/main")},onError:a=>{var u;const n=(u=a.response)==null?void 0:u.data;n.httpStatus==400||n.httpStatus==409?w().setContent({type:"error",title:"회원가입",message:n.message}):(O().setError(n),o.push("/error"))}})},H={class:"input-container layout__flexColumn scrollbar"},K=b({__name:"JoinInputPanel",setup(o){const a=l(""),n=l(""),u=l(""),v=l(""),c=l(""),d=l(""),p=l(""),m=l(30+(new Date().getFullYear()-2022)),g=M(()=>({studentId:a.value,name:n.value,email:u.value,password:v.value,birthday:_(d.value),phone_number:F(p.value),kisu:Number(m.value)})),y=()=>!(a.value.trim()||n.value.trim()||u.value.trim()||v.value.trim()||c.value.trim()||d.value.trim()||p.value.trim()||m.value),U=()=>/^\d{10}$/.test(a.value.toString()),D=()=>/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(u.value.toString()),x=()=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(v.value.toString()),I=()=>/^\d{8}$/.test(d.value.toString()),C=()=>_(d.value)>=new Date,Y=()=>/^010\d{8}$/.test(p.value.toString()),$=()=>{if(y()){r("공백이 존재합니다.");return}if(!U()){r("학번은 10자리 숫자로 입력해주세요.");return}if(!D()){r("이메일 형식이 잘못되었습니다.");return}if(!x()){r("비밀번호 형식이 잘못되었습니다.");return}if(v.value!=c.value){r("비밀번호가 일치하지 않습니다.");return}if(!I()){r("생년월일 형식(YYYYMMDD)이 잘못되었습니다.");return}if(C()){r("생년월일은 현재일보다 과거어야 합니다.");return}if(!Y()){r("전화번호 형식이 잘못되었습니다.");return}k(g.value)},r=f=>{w().setContent({type:"error",title:"회원가입",message:f})},{mutate:k}=G();return(f,e)=>(h(),N("div",H,[s(i,{width:"100%",caption:"학번",numberFilter:"1",value:a.value,"onUpdate:value":e[0]||(e[0]=t=>a.value=t)},null,8,["value"]),s(i,{width:"100%",caption:"이름",value:n.value,"onUpdate:value":e[1]||(e[1]=t=>n.value=t)},null,8,["value"]),s(i,{width:"100%",caption:"이메일",value:u.value,"onUpdate:value":e[2]||(e[2]=t=>u.value=t)},null,8,["value"]),s(i,{width:"100%",caption:"비밀번호 (문자, 숫자, 특수문자 포함 8~20자)",type:"password",value:v.value,"onUpdate:value":e[3]||(e[3]=t=>v.value=t)},null,8,["value"]),s(i,{width:"100%",caption:"비밀번호 확인",type:"password",value:c.value,"onUpdate:value":e[4]||(e[4]=t=>c.value=t)},null,8,["value"]),s(i,{width:"100%",caption:"생년월일 (YYYYMMDD)",numberFilter:"1",value:d.value,"onUpdate:value":e[5]||(e[5]=t=>d.value=t)},null,8,["value"]),s(i,{width:"100%",caption:"전화번호 ('-' 제외 11자리 입력)",numberFilter:"1",value:p.value,"onUpdate:value":e[6]||(e[6]=t=>p.value=t)},null,8,["value"]),s(i,{width:"100%",caption:"기수",numberFilter:"1",value:m.value,"onUpdate:value":e[7]||(e[7]=t=>m.value=t)},null,8,["value"]),s(E,{width:"100%",onClick:$},{default:B(()=>[j("회원가입")]),_:1})]))}}),L=S(K,[["__scopeId","data-v-f1e32e00"]]),Q=o=>(T("data-v-01bacfb5"),o=o(),Z(),o),W=Q(()=>R("div",{class:"title"},"회원가입",-1)),X=b({__name:"JoinUserPage",setup(o){return(a,n)=>(h(),z(V,{class:"join-container layout__flexColumn"},{default:B(()=>[W,s(L)]),_:1}))}}),ne=S(X,[["__scopeId","data-v-01bacfb5"]]);export{ne as default};
