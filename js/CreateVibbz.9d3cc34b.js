"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[359],{4167:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var o=a(3396),r=a(7139),s=a(9242);const n=t=>((0,o.dD)("data-v-2b329f01"),t=t(),(0,o.Cn)(),t),i={class:"CreateVibbz maxWidthAndCenter"},h=n((()=>(0,o._)("div",{class:"spaceDivider"},null,-1))),d=n((()=>(0,o._)("h1",null,"Create Vibbz",-1))),l={class:"error",id:"error"},p={key:0},u=n((()=>(0,o._)("h3",null,"Post a Vibbz",-1))),g=(0,o.uE)('<option value="glad" data-v-2b329f01>Glad</option><option value="love" data-v-2b329f01>Love</option><option value="mad" data-v-2b329f01>Mad</option><option value="neutral" data-v-2b329f01>Neutral</option><option value="sad" data-v-2b329f01>Sad</option><option value="surprised" data-v-2b329f01>Surprised</option><option value="tired" data-v-2b329f01>Tired</option>',7),m=[g],b=n((()=>(0,o._)("input",{type:"submit",value:"Post Vibbz"},null,-1)));function c(t,e,a,n,g,c){const v=(0,o.up)("Header");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(v),h,d,(0,o._)("div",l,[g.errorArr?((0,o.wg)(),(0,o.iD)("p",p,(0,r.zw)(g.errorArr),1)):(0,o.kq)("",!0)]),(0,o._)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((t=>c.handleSubmit()),["prevent"]))},[u,(0,o.wy)((0,o._)("textarea",{id:"post",name:"post","onUpdate:modelValue":e[0]||(e[0]=t=>g.postText=t),required:""},null,512),[[s.nr,g.postText]]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>g.mood=t)},m,512),[[s.bM,g.mood]]),b],32)])}a(6699);var v=a(7471),f=a(65),y={name:"CreateVibbz",data(){return{postText:"",mood:"glad",hashtag:"",hashtagsArr:[],errorArr:""}},components:{Header:v.Z,Footer:f.Z},methods:{addHashtag(t){this.hashtag&&(this.hashtagsArr.includes(this.hashtag)?document.getElementById("error").innerHTML="Hashtag already typed":this.hashtagsArr.push(this.hashtag),this.hashtag="")},deleteHashtag(t){this.hashtagsArr=this.hashtagsArr.filter((e=>t!==e))},handleSubmit(){if(this.errorArr=this.postText.length<244?"":"Post to many characters",null!=sessionStorage.getItem("userID")){let t={userID:sessionStorage.getItem("userID"),username:sessionStorage.getItem("username"),text:this.postText,emotion:this.mood,hashtags:this.hashtagsArr};fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>{t.json().then((e=>{console.log(e),t.ok?window.location.replace("/#/Profile"):console.log(e.message)}))}))}else this.errorArr="Something went wrong, try again later"}}},A=a(89);const w=(0,A.Z)(y,[["render",c],["__scopeId","data-v-2b329f01"]]);var S=w}}]);
//# sourceMappingURL=CreateVibbz.9d3cc34b.js.map