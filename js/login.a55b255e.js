"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[535],{6709:function(e,s,t){t.r(s),t.d(s,{default:function(){return P}});var a=t(3396),r=t(7139),o=t(9242);const n=e=>((0,a.dD)("data-v-7ea6d2e5"),e=e(),(0,a.Cn)(),e),l={class:"CreateVibbz maxWidthAndCenter"},d=n((()=>(0,a._)("div",{class:"spaceDivider"},null,-1))),i=n((()=>(0,a._)("h1",null,"Create Vibbz",-1))),u={class:"error",id:"error"},p={key:0},h=n((()=>(0,a._)("h3",null,"Post a Vibbz",-1))),m=(0,a.uE)('<option value="glad" data-v-7ea6d2e5>Glad</option><option value="love" data-v-7ea6d2e5>Love</option><option value="mad" data-v-7ea6d2e5>Mad</option><option value="neutral" data-v-7ea6d2e5>Neutral</option><option value="sad" data-v-7ea6d2e5>Sad</option><option value="surprised" data-v-7ea6d2e5>Surprised</option><option value="tired" data-v-7ea6d2e5>Tired</option>',7),c=[m],g=n((()=>(0,a._)("input",{type:"submit",value:"Post Vibbz"},null,-1)));function w(e,s,t,n,m,w){const v=(0,a.up)("Header");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(v),d,i,(0,a._)("div",u,[m.errorArr?((0,a.wg)(),(0,a.iD)("p",p,(0,r.zw)(m.errorArr),1)):(0,a.kq)("",!0)]),(0,a._)("form",{onSubmit:s[2]||(s[2]=(0,o.iM)((e=>w.handleSubmit()),["prevent"]))},[h,(0,a.wy)((0,a._)("textarea",{id:"post",name:"post","onUpdate:modelValue":s[0]||(s[0]=e=>m.postText=e),required:""},null,512),[[o.nr,m.postText]]),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>m.mood=e)},c,512),[[o.bM,m.mood]]),g],32)])}t(6699);var v=t(3994),_=t(4837),y={name:"CreateVibbz",data(){return{postText:"",mood:"glad",hashtag:"",hashtagsArr:[],errorArr:""}},components:{Header:v.Z,Footer:_.Z},methods:{addHashtag(e){this.hashtag&&(this.hashtagsArr.includes(this.hashtag)?document.getElementById("error").innerHTML="Hashtag already typed":this.hashtagsArr.push(this.hashtag),this.hashtag="")},deleteHashtag(e){this.hashtagsArr=this.hashtagsArr.filter((s=>e!==s))},handleSubmit(){console.log("form submit"),this.errorArr=this.postText.length<244?"":"Post to many characters";let e={userID:sessionStorage.getItem("userID"),username:sessionStorage.getItem("username"),text:this.postText,emotion:this.mood,hashtags:this.hashtagsArr};fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json().then((s=>{console.log(s),e.ok?window.location.replace("/#/Profile"):console.log(s.message)}))}))}}},f=t(89);const b=(0,f.Z)(y,[["render",w],["__scopeId","data-v-7ea6d2e5"]]);var P=b},5329:function(e,s,t){t.r(s),t.d(s,{default:function(){return A}});var a=t(3396),r=t(7139),o=t(9242);const n=e=>((0,a.dD)("data-v-36e7ddc6"),e=e(),(0,a.Cn)(),e),l={class:"createAccount maxWidthAndCenter"},d=n((()=>(0,a._)("div",{class:"spaceDivider"},null,-1))),i=n((()=>(0,a._)("h1",null,"Create Account",-1))),u={class:"error"},p=n((()=>(0,a._)("p",{id:"errorMessage"},null,-1))),h=n((()=>(0,a._)("label",null,"E-mail",-1))),m=n((()=>(0,a._)("label",null,"Username",-1))),c=n((()=>(0,a._)("label",null,"Password",-1))),g=n((()=>(0,a._)("label",null,"Repeat password",-1))),w={class:"terms"},v=n((()=>(0,a._)("label",{for:""},"Accept terms and conditions",-1))),_=n((()=>(0,a._)("input",{type:"submit",value:"Create Account"},null,-1)));function y(e,s,t,n,y,f){const b=(0,a.up)("Header");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(b),d,i,(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.errorArr,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e},(0,r.zw)(e),1)))),128)),p]),(0,a._)("form",{onSubmit:s[5]||(s[5]=(0,o.iM)((e=>f.createAccount()),["prevent"]))},[h,(0,a.wy)((0,a._)("input",{type:"email",required:"","onUpdate:modelValue":s[0]||(s[0]=e=>y.email=e)},null,512),[[o.nr,y.email]]),m,(0,a.wy)((0,a._)("input",{type:"username",required:"","onUpdate:modelValue":s[1]||(s[1]=e=>y.username=e)},null,512),[[o.nr,y.username]]),c,(0,a.wy)((0,a._)("input",{type:"password",required:"","onUpdate:modelValue":s[2]||(s[2]=e=>y.password=e)},null,512),[[o.nr,y.password]]),g,(0,a.wy)((0,a._)("input",{type:"password",required:"","onUpdate:modelValue":s[3]||(s[3]=e=>y.repeatedPassword=e)},null,512),[[o.nr,y.repeatedPassword]]),(0,a._)("div",w,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":s[4]||(s[4]=e=>y.terms=e)},null,512),[[o.e8,y.terms]]),v]),_],32)])}var f=t(3994),b=t(4837),P={name:"createAccount",data(){return{email:"",username:"",password:"",repeatedPassword:"",terms:!1,errorArr:[]}},components:{Header:f.Z,Footer:b.Z},methods:{createAccount(){if(this.errorArr=[],this.password!==this.repeatedPassword&&this.errorArr.push("Password dont match"),this.password.length<5&&this.errorArr.push("Password need to be atleast 5 characters"),!0!==this.terms&&this.errorArr.push("U need to accept terms"),this.errorArr.length<=0){console.log("u got here");let e={email:this.email,username:this.username,password:this.password};console.log(e),fetch("http://localhost:3000/registera",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json().then((s=>{console.log(s),e.ok?window.location.replace("/#/Profile"):(console.log(s.message),document.getElementById("errorMessage").innerHTML=s.message)}))}))}}}},S=t(89);const C=(0,S.Z)(P,[["render",y],["__scopeId","data-v-36e7ddc6"]]);var A=C},5585:function(e,s,t){t.r(s),t.d(s,{default:function(){return b}});var a=t(3396),r=t(9242),o=t(7139);const n=e=>((0,a.dD)("data-v-a02ea450"),e=e(),(0,a.Cn)(),e),l={class:"Login maxWidthAndCenter"},d=n((()=>(0,a._)("div",{class:"spaceDivider"},null,-1))),i=n((()=>(0,a._)("h1",null,"Log in",-1))),u={class:"error"},p={key:0},h=n((()=>(0,a._)("label",null,"Username or email",-1))),m=n((()=>(0,a._)("label",null,"Password",-1))),c=n((()=>(0,a._)("input",{type:"submit",value:"Log in"},null,-1)));function g(e,s,t,n,g,w){const v=(0,a.up)("Header");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(v),d,i,(0,a._)("form",{onSubmit:s[2]||(s[2]=(0,r.iM)((e=>w.handleSubmit()),["prevent"]))},[(0,a._)("div",u,[e.errorMessage?((0,a.wg)(),(0,a.iD)("p",p,(0,o.zw)(e.errorMessage),1)):(0,a.kq)("",!0)]),h,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>g.username=e)},null,512),[[r.nr,g.username]]),m,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>g.password=e)},null,512),[[r.nr,g.password]]),c],32)])}var w=t(3994),v=t(4837),_={name:"Login",components:{Header:w.Z,Footer:v.Z},data(){return{username:"",password:""}},methods:{handleSubmit(){let e={user:this.username,password:this.password};""!=this.username&&""!=this.password&&fetch("http://localhost:3000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json().then((s=>{e.ok?(sessionStorage.setItem("userID",s.userID),sessionStorage.setItem("username",s.username),sessionStorage.setItem("isAuthenticated",!0),window.location.replace("/#/Profile")):this.errorMessage=s.message}))}))}}},y=t(89);const f=(0,y.Z)(_,[["render",g],["__scopeId","data-v-a02ea450"]]);var b=f},9246:function(e,s,t){t.r(s),t.d(s,{default:function(){return z}});var a=t(3396),r=t(7139),o=t(9242),n=t(8501),l=t(6769);const d=e=>((0,a.dD)("data-v-5515f63e"),e=e(),(0,a.Cn)(),e),i={class:"Profile maxWidthAndCenter"},u=d((()=>(0,a._)("div",{class:"spaceDivider"},null,-1))),p={class:"headerFlex"},h=d((()=>(0,a._)("img",{src:n,alt:"",id:"btnOpen",title:"Edit password"},null,-1))),m=d((()=>(0,a._)("img",{src:l,alt:"",id:"btnClose",class:"hide",title:"Close edit mode"},null,-1))),c=[h,m],g={class:"passwordBox hide",id:"passwordBox"},w={class:"profileBox"},v=d((()=>(0,a._)("h2",null,"Info:",-1))),_=d((()=>(0,a._)("dt",null,"Username:",-1))),y=d((()=>(0,a._)("dt",null,"E-mail:",-1))),f=d((()=>(0,a._)("p",{class:"error",id:"error"},null,-1))),b=d((()=>(0,a._)("label",null,"Old password: ",-1))),P=d((()=>(0,a._)("label",null,"New password: ",-1))),S=d((()=>(0,a._)("label",null,"Repeat new password: ",-1))),C=d((()=>(0,a._)("input",{type:"submit",value:"Update"},null,-1))),A=d((()=>(0,a._)("br",null,null,-1))),I=d((()=>(0,a._)("hr",null,null,-1))),M=d((()=>(0,a._)("h2",null,"My vibbz",-1)));function D(e,s,t,n,l,d){const h=(0,a.up)("Header"),m=(0,a.up)("PostLayout"),D=(0,a.up)("Message");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(h),u,(0,a._)("div",p,[(0,a._)("h1",null,"Hey, "+(0,r.zw)(l.username)+"!",1),(0,a._)("button",{onClick:s[0]||(s[0]=e=>d.editUser())},c)]),(0,a._)("section",g,[(0,a._)("section",w,[v,(0,a._)("dl",null,[_,(0,a._)("dd",null,(0,r.zw)(l.username),1)]),(0,a._)("dl",null,[y,(0,a._)("dd",null,(0,r.zw)(l.email),1)])]),f,(0,a._)("form",{onSubmit:s[4]||(s[4]=(0,o.iM)((e=>d.updatePassword()),["prevent"]))},[b,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>l.oldPassword=e)},null,512),[[o.nr,l.oldPassword]]),P,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=e=>l.newPassword=e)},null,512),[[o.nr,l.newPassword]]),S,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":s[3]||(s[3]=e=>l.repeatPassword=e)},null,512),[[o.nr,l.repeatPassword]]),C],32),A,I]),(0,a._)("section",null,[M,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.postsArr,(e=>((0,a.wg)(),(0,a.j4)(m,{key:e,class:"deleteBtnStyle",postID:e._id,textEl:e.text,usernameEl:e.username,emotionEl:e.emotion,hashtagsEl:e.hashtags,timestampEL:e.timestamp,showDeleteBtn:!0},null,8,["postID","textEl","usernameEl","emotionEl","hashtagsEl","timestampEL"])))),128))]),(0,a.Wm)(D,{theMessage:l.resultMessage,color:l.messageColor,reveal:l.revealStatus},null,8,["theMessage","color","reveal"])])}var x=t(3994),E=t(4837);function T(e,s,t,o,n,l){return(0,a.wg)(),(0,a.iD)("div",{class:"messageBox",id:"messageBox",style:(0,r.j5)({background:t.color,display:t.reveal})},[(0,a._)("p",null,(0,r.zw)(t.theMessage),1)],4)}var U={name:"Message",props:{theMessage:{type:String,default:"No message send"},color:{type:String,default:"white"},reveal:{type:String,default:"none"}}},k=t(89);const H=(0,k.Z)(U,[["render",T],["__scopeId","data-v-3c8a79f6"]]);var V=H,B=t(7124),L={name:"Profile",components:{Header:x.Z,Footer:E.Z,PostLayout:B.Z,Message:V},data(){return{username:"",email:"",postsArr:{},oldPassword:"",newPassword:"",repeatPassword:"",resultMessage:"",messageColor:"",revealStatus:"none",errorColor:"#f36a6a"}},methods:{getUserInfo(){const e=sessionStorage.getItem("userID");fetch(`http://localhost:3000/user/${e}`,{method:"GET"}).then((e=>{e.json().then((e=>{this.username=e.username,this.email=e.email}))})),fetch(`http://localhost:3000/posts/${e}`,{method:"GET"}).then((e=>{e.json().then((e=>{this.postsArr=e}))}))},getImgUrl(e){var s=t(9861);return s("./"+e+".png")},editUser(){var e=document.getElementById("passwordBox");e.classList.toggle("hide");e=document.getElementById("btnClose");e.classList.toggle("hide");e=document.getElementById("btnOpen");e.classList.toggle("hide"),this.oldPassword="",this.newPassword="",this.repeatPassword=""},updatePassword(){document.getElementById("error").innerHTML="";const e=sessionStorage.getItem("userID");if(this.newPassword===this.repeatPassword){const s={oldPassword:this.oldPassword,newPassword:this.newPassword};fetch(`http://localhost:3000/user/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((e=>{e.json().then((s=>{if(e.ok){console.log(s.message),this.resultMessage="Password is updated",this.messageColor="#c6ddc4",this.revealStatus="block",setTimeout((()=>{this.resultMessage="",this.messageColor="white",this.revealStatus="none"}),3e3);var t=document.getElementById("passwordBox");t.classList.toggle("hide")}else this.resultMessage=s.message,this.messageColor=this.errorColor,this.revealStatus="block",setTimeout((()=>{this.resultMessage="",this.messageColor="white",this.revealStatus="none"}),3e3)}))}))}else this.resultMessage="New password dont match",this.messageColor=this.errorColor,this.revealStatus="block",setTimeout((()=>{this.resultMessage="",this.messageColor="white",this.revealStatus="none"}),3e3)}},beforeMount(){this.getUserInfo()}};const Z=(0,k.Z)(L,[["render",D],["__scopeId","data-v-5515f63e"]]);var z=Z}}]);
//# sourceMappingURL=login.a55b255e.js.map