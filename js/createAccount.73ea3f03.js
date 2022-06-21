"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[124],{5329:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var s=t(3396),a=t(7139),o=t(9242);const n=e=>((0,s.dD)("data-v-36e7ddc6"),e=e(),(0,s.Cn)(),e),l={class:"createAccount maxWidthAndCenter"},d=n((()=>(0,s._)("div",{class:"spaceDivider"},null,-1))),u=n((()=>(0,s._)("h1",null,"Create Account",-1))),i={class:"error"},p=n((()=>(0,s._)("p",{id:"errorMessage"},null,-1))),c=n((()=>(0,s._)("label",null,"E-mail",-1))),m=n((()=>(0,s._)("label",null,"Username",-1))),h=n((()=>(0,s._)("label",null,"Password",-1))),w=n((()=>(0,s._)("label",null,"Repeat password",-1))),_={class:"terms"},g=n((()=>(0,s._)("label",{for:""},"Accept terms and conditions",-1))),y=n((()=>(0,s._)("input",{type:"submit",value:"Create Account"},null,-1)));function A(e,r,t,n,A,b){const f=(0,s.up)("Header");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(f),d,u,(0,s._)("div",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(A.errorArr,(e=>((0,s.wg)(),(0,s.iD)("p",{key:e},(0,a.zw)(e),1)))),128)),p]),(0,s._)("form",{onSubmit:r[5]||(r[5]=(0,o.iM)((e=>b.createAccount()),["prevent"]))},[c,(0,s.wy)((0,s._)("input",{type:"email",required:"","onUpdate:modelValue":r[0]||(r[0]=e=>A.email=e)},null,512),[[o.nr,A.email]]),m,(0,s.wy)((0,s._)("input",{type:"username",required:"","onUpdate:modelValue":r[1]||(r[1]=e=>A.username=e)},null,512),[[o.nr,A.username]]),h,(0,s.wy)((0,s._)("input",{type:"password",required:"","onUpdate:modelValue":r[2]||(r[2]=e=>A.password=e)},null,512),[[o.nr,A.password]]),w,(0,s.wy)((0,s._)("input",{type:"password",required:"","onUpdate:modelValue":r[3]||(r[3]=e=>A.repeatedPassword=e)},null,512),[[o.nr,A.repeatedPassword]]),(0,s._)("div",_,[(0,s.wy)((0,s._)("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=e=>A.terms=e)},null,512),[[o.e8,A.terms]]),g]),y],32)])}var b=t(7471),f=t(65),v={name:"createAccount",data(){return{email:"",username:"",password:"",repeatedPassword:"",terms:!1,errorArr:[]}},components:{Header:b.Z,Footer:f.Z},methods:{createAccount(){if(this.errorArr=[],this.password!==this.repeatedPassword&&this.errorArr.push("Password dont match"),this.password.length<5&&this.errorArr.push("Password need to be atleast 5 characters"),!0!==this.terms&&this.errorArr.push("U need to accept terms"),this.errorArr.length<=0){console.log("u got here");let e={email:this.email,username:this.username,password:this.password};console.log(e),fetch("http://localhost:3000/registera",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json().then((r=>{console.log(r),e.ok?window.location.replace("/#/Profile"):(console.log(r.message),document.getElementById("errorMessage").innerHTML=r.message)}))}))}}}},P=t(89);const k=(0,P.Z)(v,[["render",A],["__scopeId","data-v-36e7ddc6"]]);var C=k}}]);
//# sourceMappingURL=createAccount.73ea3f03.js.map