"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[124],{9417:function(e,r,t){t.r(r),t.d(r,{default:function(){return P}});var s=t(3396),a=t(7139),n=t(9242);const o=e=>((0,s.dD)("data-v-cfce58e4"),e=e(),(0,s.Cn)(),e),l={class:"createAccount maxWidthAndCenter"},d=o((()=>(0,s._)("div",{class:"spaceDivider"},null,-1))),i=o((()=>(0,s._)("h1",null,"Create Account",-1))),u={key:0,class:"error",id:"error"},p=o((()=>(0,s._)("label",null,"E-mail",-1))),c=o((()=>(0,s._)("label",null,"Username",-1))),m=o((()=>(0,s._)("label",null,"Password",-1))),h=o((()=>(0,s._)("label",null,"Repeat password",-1))),w={class:"terms"},A=o((()=>(0,s._)("label",{for:""},"Accept terms and conditions",-1))),_=o((()=>(0,s._)("input",{type:"submit",value:"Create Account"},null,-1)));function y(e,r,t,o,y,f){const b=(0,s.up)("Header");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(b),d,i,0!=y.errorArr.length?((0,s.wg)(),(0,s.iD)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(y.errorArr,(e=>((0,s.wg)(),(0,s.iD)("p",{key:e},(0,a.zw)(e),1)))),128))])):(0,s.kq)("",!0),(0,s._)("form",{onSubmit:r[5]||(r[5]=(0,n.iM)((e=>f.createAccount()),["prevent"]))},[p,(0,s.wy)((0,s._)("input",{type:"email",required:"","onUpdate:modelValue":r[0]||(r[0]=e=>y.email=e)},null,512),[[n.nr,y.email]]),c,(0,s.wy)((0,s._)("input",{type:"username",required:"","onUpdate:modelValue":r[1]||(r[1]=e=>y.username=e)},null,512),[[n.nr,y.username]]),m,(0,s.wy)((0,s._)("input",{type:"password",required:"","onUpdate:modelValue":r[2]||(r[2]=e=>y.password=e)},null,512),[[n.nr,y.password]]),h,(0,s.wy)((0,s._)("input",{type:"password",required:"","onUpdate:modelValue":r[3]||(r[3]=e=>y.repeatedPassword=e)},null,512),[[n.nr,y.repeatedPassword]]),(0,s._)("div",w,[(0,s.wy)((0,s._)("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=e=>y.terms=e)},null,512),[[n.e8,y.terms]]),A]),_],32)])}var f=t(7471),b=t(65),v={name:"createAccount",data(){return{email:"",username:"",password:"",repeatedPassword:"",terms:!1,errorArr:[],errorMessage:""}},components:{Header:f.Z,Footer:b.Z},methods:{createAccount(){if(this.errorArr=[],this.password!==this.repeatedPassword&&this.errorArr.push("Password dont match"),this.password.length<5&&this.errorArr.push("Password need to be atleast 5 characters"),!0!==this.terms&&this.errorArr.push("U need to accept terms"),this.errorArr.length<=0){let e={email:this.email,username:this.username,password:this.password};fetch("http://localhost:3000/registera",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json().then((r=>{e.ok?window.location.replace("/#/Profile"):this.errorArr.push(r.message)}))}))}}}},g=t(89);const k=(0,g.Z)(v,[["render",y],["__scopeId","data-v-cfce58e4"]]);var P=k}}]);
//# sourceMappingURL=createAccount.a75fc3f4.js.map