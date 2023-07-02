import{E as N,a as J,v as q,b as se,c as H,d as K,e as B,f as ue,g as re,h as ce,i as _e,j as ee,k as te,l as ie,m as de,n as pe,o as ne,p as me,q as fe,r as oe,s as ve,t as he,u as ge,w as be,x as ke}from"./element-9dd65fdd.js";import{F as $,aO as j,t as v,y as G,o as r,d as k,R as s,X as a,a8 as ae,e as x,a6 as D,Y as h,S as I,au as P,$ as E,r as ye,aP as Se,u as Q,a0 as z,q as xe,Z as A,a1 as X,ax as le,aQ as Te,aR as Ce,E as Y,aS as we}from"./chunks-f6cc989b.js";const Ee="modulepreload",$e=function(f,l){return new URL(f,l).href},Z={},U=function(l,o,c){if(!o||o.length===0)return l();const e=document.getElementsByTagName("link");return Promise.all(o.map(t=>{if(t=$e(t,c),t in Z)return;Z[t]=!0;const _=t.endsWith(".css"),i=_?'[rel="stylesheet"]':"";if(!!c)for(let m=e.length-1;m>=0;m--){const b=e[m];if(b.href===t&&(!_||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":Ee,_||(u.as="script",u.crossOrigin=""),u.href=t,document.head.appendChild(u),_)return new Promise((m,b)=>{u.addEventListener("load",m),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>l())},ft=[{path:"/singleList",name:"singleList",component:()=>U(()=>Promise.resolve().then(()=>ze),void 0,import.meta.url),meta:{title:"FakeStore"}},{path:"/pageList",name:"pageList",component:()=>U(()=>Promise.resolve().then(()=>je),void 0,import.meta.url),meta:{title:"Fakerapis"}},{path:"/detailInfo/:id",name:"detailInfo",component:()=>U(()=>Promise.resolve().then(()=>Fe),void 0,import.meta.url),meta:{title:"Info"}}];async function W(f){return await fetch(f,{method:"GET",headers:{"content-type":"application/json; charset=utf-8"}}).then(l=>l.json())}const Ie={class:"flex"},Le={class:"flex-content"},Pe=$({__name:"singleList",setup(f){const l=j(),o=v(!0),c=v([]),e=["electronics","jewelery","men's clothing","women's clothing"],t=v(e[0]),_=n=>{l.push(`/detailInfo/${n.id}`)},i=()=>{o.value=!0,c.value=[],W(`https://fakestoreapi.com/products/category/${t.value}`).then(n=>{c.value=n,o.value=!1}).catch(()=>{o.value=!1})};return G(()=>{i()}),(n,u)=>{const m=ue,b=se,y=H,L=N,S=K,C=B,M=J,d=q;return r(),k("div",Ie,[s(L,{inline:!0,onSubmit:u[1]||(u[1]=ae(()=>{},["prevent"]))},{default:a(()=>[s(y,null,{default:a(()=>[s(b,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=p=>t.value=p),onChange:i},{default:a(()=>[(r(),k(I,null,P(e,p=>s(m,{key:p,label:p},null,8,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),x("div",Le,[D((r(),h(M,{data:c.value,height:"100%"},{default:a(()=>[s(S,{label:"Title",prop:"title"}),s(S,{label:"Price",prop:"price",width:"120"}),s(S,{label:"Action",width:"80"},{default:a(p=>[s(C,{link:"",type:"primary",onClick:g=>_(p.row)},{default:a(()=>[E("Detail")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[d,o.value]])])])}}}),ze=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"})),Re=$({__name:"pageModel",props:{pageSizes:{default:()=>[10,20,50,100]},layout:{default:"total, sizes, ->, prev, pager, next"},small:{type:Boolean,default:!0},background:{type:Boolean,default:!0},defaultPageSize:{default:10},total:{default:0}},emits:["size-change","current-change"],setup(f,{emit:l}){const o=f,c=v(1),e=v(o.defaultPageSize),t=i=>{c.value=1,l("size-change",i)},_=i=>l("current-change",i);return(i,n)=>{const u=re;return r(),h(u,{"current-page":c.value,"onUpdate:currentPage":n[0]||(n[0]=m=>c.value=m),"page-size":e.value,"onUpdate:pageSize":n[1]||(n[1]=m=>e.value=m),background:o.background,small:o.small,layout:o.layout,total:o.total,"page-sizes":o.pageSizes,"default-page-size":o.defaultPageSize,onSizeChange:t,onCurrentChange:_},null,8,["current-page","page-size","background","small","layout","total","page-sizes","default-page-size"])}}}),Oe={class:"flex"},Me={class:"flex-content"},Ve={class:"flex-footer"},Be=$({__name:"pageList",setup(f){const l=v({key:"books"}),o=v(),c=v(!0),e=v([]),t=v(0),_=v(20),i=["books","addresses","users"],n={books:["isbn","title","author","publisher","published"],addresses:["country","city","streetName","street","zipcode"],users:["uuid","username","lastname","website"]},u=v(n.books),m=()=>{u.value=n[l.value.key],L()},b=S=>{_.value=S,o.value=1,L()},y=S=>{o.value=S,L()},L=()=>{c.value=!0,e.value=[],W(`https://fakerapi.it/api/v1/${l.value.key}?_quantity=${_.value}&_characters=50`).then(S=>{e.value=S.data||[],t.value=(S.total||0)*5,c.value=!1}).catch(()=>{c.value=!1,t.value=0})};return G(()=>{L()}),(S,C)=>{const M=_e,d=ce,p=H,g=N,R=K,V=J,F=Re,w=q;return r(),k("div",Oe,[s(g,{inline:!0,model:l.value,onSubmit:C[1]||(C[1]=ae(()=>{},["prevent"]))},{default:a(()=>[s(p,null,{default:a(()=>[s(d,{modelValue:l.value.key,"onUpdate:modelValue":C[0]||(C[0]=T=>l.value.key=T),onChange:m},{default:a(()=>[(r(),k(I,null,P(i,T=>s(M,{key:T,label:T,value:T},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),x("div",Me,[D((r(),h(V,{data:e.value,height:"100%"},{default:a(()=>[(r(!0),k(I,null,P(u.value,T=>(r(),h(R,{key:T,prop:T,label:T},null,8,["prop","label"]))),128))]),_:1},8,["data"])),[[w,c.value]])]),x("div",Ve,[s(F,{ref_key:"page",ref:o,total:t.value,"default-page-size":20,onSizeChange:b,onCurrentChange:y},null,8,["total"])])])}}}),je=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),De=$({__name:"detailInfo",setup(f){const l=ye("removeTab"),c=Se().params.id,e=v({}),t=v(!0);return G(()=>{W(`https://fakestoreapi.com/products/${c}`).then(_=>{e.value=_,t.value=!1}).catch(()=>{t.value=!1})}),(_,i)=>{const n=B,u=te,m=ee,b=q;return D((r(),h(m,{title:"Info",column:1,border:""},{extra:a(()=>[s(n,{onClick:i[0]||(i[0]=y=>Q(l)(_.$route.path))},{default:a(()=>[E("Close")]),_:1})]),default:a(()=>[(r(!0),k(I,null,P(Object.keys(e.value),y=>(r(),h(u,{key:y,label:y},{default:a(()=>[E(z(e.value[y]),1)]),_:2},1032,["label"]))),128))]),_:1})),[[b,t.value]])}}}),Fe=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"})),Ue={class:"flex"},Ae=$({__name:"loginPage",setup(f){const l=j(),o=v({username:"",password:""}),c=v(!1),e=()=>{c.value=!0,setTimeout(()=>{c.value=!1,sessionStorage.setItem("login","1"),sessionStorage.setItem("username",o.value.username),l.push("/home")},1e3)};return(t,_)=>{const i=de,n=H,u=B,m=N,b=ie;return r(),k("div",Ue,[s(b,{class:"box-card",header:"Login"},{default:a(()=>[s(m,{"label-width":"80px",model:o.value},{default:a(()=>[s(n,{label:"Username"},{default:a(()=>[s(i,{modelValue:o.value.username,"onUpdate:modelValue":_[0]||(_[0]=y=>o.value.username=y),maxLength:"10"},null,8,["modelValue"])]),_:1}),s(n,{label:"Password"},{default:a(()=>[s(i,{modelValue:o.value.password,"onUpdate:modelValue":_[1]||(_[1]=y=>o.value.password=y),maxLength:"12",type:"password"},null,8,["modelValue"])]),_:1}),s(n,null,{default:a(()=>[s(u,{type:"primary",loading:c.value,disabled:!o.value.username||!o.value.password,onClick:e},{default:a(()=>[E("Login")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model"])]),_:1})])}}});const O=(f,l)=>{const o=f.__vccOpts||f;for(const[c,e]of l)o[c]=e;return o},Ne=O(Ae,[["__scopeId","data-v-8744e0f9"]]),vt=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),qe=["onContextmenu"],He=$({__name:"tabMenu",props:{homeTab:{default:()=>({title:"Home",path:"/home",closable:!1})}},setup(f,{expose:l}){const o=f,c=j(),e=v([o.homeTab]),t=v(e.value[0].path),_=d=>{e.value.find(g=>g.path===d.path)||e.value.push(d),t.value=d.path},i=d=>{const p=e.value;if(t.value===d){const g=p.findIndex(V=>V.path===d),R=p[g+1]||p[g-1]||p[0];t.value=R.path}e.value=e.value.filter(g=>g.path!==d)},n=v(!1),u=v(""),m=v(),b={mounted(d,p){d.handler=function(g){d.contains(g.target)||p.value(g)},document.addEventListener("click",d.handler,!0)},unmounted(d){document.removeEventListener("click",d.handler)}},y=(d,p)=>{d.preventDefault(),m.value=d.currentTarget,n.value=!0,u.value=p},L=()=>{C(),e.value=e.value.filter(d=>d.closable===!1),t.value=e.value[0].path},S=()=>{C(),e.value=e.value.filter(d=>u.value===d.path||d.closable===!1),t.value=u.value},C=()=>{n.value=!1},M=d=>{let p=e.value.find(g=>g.path===d);p&&c.currentRoute.value.path!==p.path&&c.push(p.path)};return l({addTab:_,removeTab:i}),xe(()=>c.currentRoute.value.path,d=>{const{title:p,closable:g=!0}=c.currentRoute.value.meta;_({title:p,closable:g,path:d})}),(d,p)=>{const g=pe,R=ne,V=me,F=fe;return r(),h(F,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=w=>t.value=w),type:"card",class:"tabMenu",onTabRemove:i,onTabChange:M},{default:a(()=>[(r(!0),k(I,null,P(e.value,w=>(r(),h(g,{key:w.path,name:w.path,label:w.title,closable:w.closable!==!1},{label:a(()=>[D((r(),k("div",{onContextmenu:T=>y(T,w.path)},[E(z(w.title),1)],40,qe)),[[b,C]])]),_:2},1032,["name","label","closable"]))),128)),s(V,{ref:"tooltipRef","virtual-ref":m.value,"virtual-triggering":"","popper-class":"popperMenu",width:"120px",visible:n.value},{default:a(()=>[x("ul",null,[x("li",null,[s(R,{underline:!1,onClick:S},{default:a(()=>[E("Close Others")]),_:1})]),x("li",null,[s(R,{underline:!1,onClick:L},{default:a(()=>[E("Close All")]),_:1})])])]),_:1},8,["virtual-ref","visible"])]),_:1},8,["modelValue"])}}});const Ge=O(He,[["__scopeId","data-v-5c4b1d72"]]),Qe=[{title:"Home",path:"/home",icon:"HomeFilled"},{title:"API",icon:"List",children:[{title:"FakeStore",path:"/singleList"},{title:"Fakerapis",path:"/pageList"}]}],We=$({__name:"sideBar",emits:["addTab"],setup(f,{emit:l}){return(o,c)=>{const e=oe,t=ve,_=he,i=ge;return r(),h(i,{"default-active":"/home",class:"side-bar"},{default:a(()=>[(r(!0),k(I,null,P(Q(Qe),n=>(r(),k(I,{key:n.title},[!n.children||!n.children.length?(r(),h(t,{key:0,index:n.title+n.path,onClick:u=>l("addTab",n)},{default:a(()=>[n.icon?(r(),h(e,{key:0},{default:a(()=>[(r(),h(A(n.icon)))]),_:2},1024)):X("",!0),x("span",null,z(n.title),1)]),_:2},1032,["index","onClick"])):(r(),h(_,{key:1,index:n.title+n.path},{title:a(()=>[n.icon?(r(),h(e,{key:0},{default:a(()=>[(r(),h(A(n.icon)))]),_:2},1024)):X("",!0),x("span",null,z(n.title),1)]),default:a(()=>[(r(!0),k(I,null,P(n.children,u=>(r(),h(t,{onClick:m=>l("addTab",u),key:u.path,index:u.path},{default:a(()=>[E(z(u.title),1)]),_:2},1032,["onClick","index"]))),128))]),_:2},1032,["index"]))],64))),128))]),_:1})}}});const Xe=O(We,[["__scopeId","data-v-b7aba755"]]),Ye=""+new URL("../logo.png",import.meta.url).href,Ze=f=>(Te("data-v-ed5d43cf"),f=f(),Ce(),f),Je={class:"top-bar"},Ke=Ze(()=>x("img",{src:Ye,class:"top-bar-icon",alt:""},null,-1)),et=$({__name:"topBar",setup(f){const l=j(),o=sessionStorage.getItem("username"),c=()=>{sessionStorage.removeItem("login"),sessionStorage.removeItem("username"),l.push("/login")};return(e,t)=>{const _=be,i=le("SwitchButton"),n=oe,u=B,m=ke;return r(),k("div",Je,[s(m,{gutter:20},{default:a(()=>[s(_,{span:4},{default:a(()=>[Ke]),_:1}),s(_,{span:4,offset:16,class:"top-bar-right"},{default:a(()=>[s(u,{onClick:c},{default:a(()=>[E(z(Q(o)),1),s(n,{class:"el-icon--right"},{default:a(()=>[s(i)]),_:1})]),_:1})]),_:1})]),_:1})])}}});const tt=O(et,[["__scopeId","data-v-ed5d43cf"]]),nt={class:"home-waper"},ot={class:"home-waper-top"},at={class:"home-waper-body"},lt={class:"home-waper-content"},st={class:"home-waper-view"},ut=$({__name:"waper",setup(f){const l=v();function o(e){var t;(t=l.value)==null||t.addTab(e)}function c(e){var t;(t=l.value)==null||t.removeTab(e)}return Y("addTab",o),Y("removeTab",c),(e,t)=>{const _=tt,i=Xe,n=Ge,u=le("router-view");return r(),k("div",nt,[x("div",ot,[s(_)]),x("div",at,[s(i,{onAddTab:o}),x("div",lt,[s(n,{ref_key:"tabMenuRef",ref:l},null,512),x("div",st,[s(u,null,{default:a(({Component:m,route:b})=>[(r(),h(we,{max:3},[(r(),h(A(m),{key:b.path}))],1024))]),_:1})])])])])}}});const rt=O(ut,[["__scopeId","data-v-8d47e0e7"]]),ht=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),ct=$({__name:"home",setup(f){const l=[{label:"FakeStore",link:"https://fakestoreapi.com/docs"},{label:"Fakerapis",link:"https://fakerapi.it/en"}];return(o,c)=>{const e=ne,t=te,_=ee;return r(),h(_,{title:"API",column:1,border:""},{default:a(()=>[(r(),k(I,null,P(l,i=>s(t,{key:i.label,label:i.label},{default:a(()=>[s(e,{type:"primary",href:i.link,target:"_blank"},{default:a(()=>[E(z(i.link),1)]),_:2},1032,["href"])]),_:2},1032,["label"])),64))]),_:1})}}}),gt=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"})),_t={};function it(f,l){return r(),k("div",null," 404 ")}const dt=O(_t,[["render",it]]),bt=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"}));export{U as _,bt as a,gt as h,vt as l,ft as r,ht as w};
