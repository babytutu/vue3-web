import{E as Re,a as H,b as Me,v as ne,c as se,d as Pe,e as Oe,f as De,g as Fe,h as Be,i as Ue,j as Ae,k as je,l as fe,m as be,n as ve,o as he,p as qe,q as O,r as le,s as Ne,t as We,u as ge,w as ye,x as ke,y as Je,z as Ke,A as Ge,B as we,C as He,D as Qe,F as re,G as Se,H as Xe,I as Ye,J as Ze,K as et}from"./element-ad357893.js";import{bx as n,by as $,bU as R,bw as K,bv as I,bm as x,bZ as Z,bO as v,bN as a,bT as P,bI as m,bc as z,ch as F,bR as L,bS as M,bD as W,bQ as J,cz as tt,bi as ue,cS as ot,cT as ee,be as xe,bt as Ve,cU as at,bl as Te,cV as $e,bh as Y,bq as lt,bB as nt,bg as Le,cA as ce,bP as ie,cW as st,cX as rt,bu as _e,cY as ut}from"./chunks-08648efb.js";import{u as ct,e as it,i as dt,a as pt,b as _t,c as mt,d as ft,f as bt,g as vt,h as ht,j as gt,k as yt,l as kt}from"./echarts-33b6a4c5.js";const wt="modulepreload",St=function(s,u){return new URL(s,u).href},me={},G=function(u,l,o){if(!l||l.length===0)return u();const t=document.getElementsByTagName("link");return Promise.all(l.map(e=>{if(e=St(e,o),e in me)return;me[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!o)for(let b=t.length-1;b>=0;b--){const k=t[b];if(k.href===e&&(!r||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":wt,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((b,k)=>{i.addEventListener("load",b),i.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>u()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},Vo=[{path:"/singleList",name:"singleList",component:()=>G(()=>Promise.resolve().then(()=>Pt),void 0,import.meta.url),meta:{title:"简单列表"}},{path:"/pageList",name:"pageList",component:()=>G(()=>Promise.resolve().then(()=>Bt),void 0,import.meta.url),meta:{title:"分页列表"}},{path:"/detailInfo/:id",name:"detailInfo",component:()=>G(()=>Promise.resolve().then(()=>At),void 0,import.meta.url),meta:{title:"详情"}},{path:"/addForm",name:"addForm",component:()=>G(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url),meta:{title:"新增"}},{path:"/editForm/:id",name:"editForm",component:()=>G(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url),meta:{title:"编辑"}},{path:"/copyForm/:copyId",name:"copyForm",component:()=>G(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url),meta:{title:"复制"}},{path:"/echartPage",name:"echartPage",component:()=>G(()=>Promise.resolve().then(()=>Kt),void 0,import.meta.url),meta:{title:"echart"}}];const q=(s,u)=>{const l=s.__vccOpts||s;for(const[o,t]of u)l[o]=t;return l},xt={},Vt={class:"flex"},Tt={class:"flex-header"},$t={class:"flex-content"},Lt={class:"flex-footer"};function Ct(s,u){return n(),$("div",Vt,[R("div",Tt,[K(s.$slots,"header",{},void 0,!0)]),R("div",$t,[K(s.$slots,"default",{},void 0,!0)]),R("div",Lt,[K(s.$slots,"footer",{},void 0,!0)])])}const de=q(xt,[["render",Ct],["__scopeId","data-v-f135e414"]]),Et=["textContent"],Ce=I({__name:"tableModel",props:{data:Array,header:{type:Array,required:!0},selection:{type:Boolean}},emits:["selection-change"],setup(s,{expose:u,emit:l}){const o=x(!1),t=x();function e(d){o.value=d}function r(d){l("selection-change",d)}return u({setLoading:e}),(d,c)=>{const i=Re,b=H,k=Me,g=ne;return Z((n(),v(k,{onSelectionChange:r,ref_key:"tableModelRef",ref:t,data:s.data,height:"100%",border:""},{default:a(()=>[s.selection?(n(),v(i,{key:0,type:"selection",width:"55"})):P("",!0),m(i,{type:"index",width:"50"}),(n(!0),$(z,null,F(s.header,_=>(n(),v(i,{key:_.prop,prop:_.prop,width:_.width,label:_.label,fixed:_.fixed,sortable:_.sortable},{default:a(({row:h})=>[K(d.$slots,_.prop,{row:h},()=>[_.prop==="action"?(n(!0),$(z,{key:0},F(_.options,y=>(n(),v(b,{key:y.name,link:"",type:"primary",onClick:S=>y.onClick(h)},{default:a(()=>[L(M(y.name),1)]),_:2},1032,["onClick"]))),128)):(n(),$("div",{key:1,textContent:M(h[_.prop])},null,8,Et))])]),_:2},1032,["prop","width","label","fixed","sortable"]))),128))]),_:3},8,["data"])),[[g,o.value]])}}}),It=I({__name:"formModel",props:{formData:{default:void 0},formItem:{default:void 0},itemStyle:{default:{width:"220px"}},inline:{type:Boolean,default:!1},size:{default:""},labelWidth:{default:""}},emits:["submit","close"],setup(s,{expose:u,emit:l}){const o=s,t=x(),e=W(o.formData),r=x(!1),d=async()=>{var h;let _=W({valid:!1,data:e,fields:null});return await((h=t.value)==null?void 0:h.validate((y,S)=>{y?_.valid=!0:(console.log("error submit!",S),_.fields=S)})),_},c=()=>{i(),l("submit")},i=()=>{var _;g(!1),(_=t.value)==null||_.resetFields()},b=_=>{var h;(h=t.value)==null||h.validateField(_)},k=(_,h)=>{e[_]=h},g=_=>{r.value=_};return u({submitForm:d,resetFields:i,validateField:b,changeValue:k,setLoading:g}),(_,h)=>{const y=se,S=Pe,f=Oe,T=De,C=Fe,A=Be,N=Ue,w=Ae,E=je,B=fe,Q=be,D=H,j=ve,X=he;return n(),v(X,{class:"formModel",size:_.size,inline:_.inline,ref_key:"ruleFormRef",ref:t,model:e,"label-width":_.labelWidth},{default:a(()=>[(n(!0),$(z,null,F(_.formItem,p=>(n(),v(j,{key:p.prop,label:p.label,prop:p.prop,rules:p.rules},{default:a(()=>[m(Q,{wrap:""},{default:a(()=>[p.type==="input"?(n(),v(y,{key:0,style:J(p.style||_.itemStyle),maxlength:p.maxlength,"show-word-limit":"",modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V,clearable:""},null,8,["style","maxlength","modelValue","onUpdate:modelValue"])):P("",!0),p.type==="input-number"?(n(),v(S,{key:1,style:J(p.style||_.itemStyle),modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V,min:p.min,max:p.max},null,8,["style","modelValue","onUpdate:modelValue","min","max"])):P("",!0),p.type==="select"?(n(),v(T,{key:2,style:J(p.style||_.itemStyle),modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V,placeholder:"请选择",clearable:"",filterable:"",multiple:p.multiple,"collapse-tags":"","collapse-tags-tooltip":""},{default:a(()=>[(n(!0),$(z,null,F(p.options,V=>(n(),v(f,{label:V.label,value:V.value},null,8,["label","value"]))),256))]),_:2},1032,["style","modelValue","onUpdate:modelValue","multiple"])):P("",!0),p.type&&["date","datetime","datetimerange","daterange"].includes(p.type)?(n(),v(C,{key:3,style:J(p.style||_.itemStyle),modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V,type:p.type,format:p.format,"value-format":p.format,"default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)],clearable:""},null,8,["style","modelValue","onUpdate:modelValue","type","format","value-format","default-time"])):P("",!0),p.type==="switch"?(n(),v(A,{key:4,modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V},null,8,["modelValue","onUpdate:modelValue"])):P("",!0),p.type==="checkbox"?(n(),v(w,{key:5,style:J(p.style||_.itemStyle),modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V},{default:a(()=>[(n(!0),$(z,null,F(p.options,V=>(n(),v(N,{key:V.label,label:V.label,name:p.prop},{default:a(()=>[L(M(V.name||V.label),1)]),_:2},1032,["label","name"]))),128))]),_:2},1032,["style","modelValue","onUpdate:modelValue"])):P("",!0),p.type==="radio"?(n(),v(B,{key:6,style:J(p.style||_.itemStyle),modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V},{default:a(()=>[(n(!0),$(z,null,F(p.options,V=>(n(),v(E,{key:V.label,label:V.label},{default:a(()=>[L(M(V.name||V.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["style","modelValue","onUpdate:modelValue"])):P("",!0),p.type==="textarea"?(n(),v(y,{key:7,style:J(p.style||_.itemStyle),modelValue:e[p.prop],"onUpdate:modelValue":V=>e[p.prop]=V,type:"textarea",rows:p.row,maxlength:p.maxlength,"show-word-limit":""},null,8,["style","modelValue","onUpdate:modelValue","rows","maxlength"])):P("",!0),K(_.$slots,p.prop,{item:p},void 0,!0)]),_:2},1024),p.prop==="searchBtn"?(n(),$(z,{key:0},[m(D,{type:"primary",onClick:h[0]||(h[0]=V=>l("submit")),disabled:r.value},{default:a(()=>[L("查询")]),_:1},8,["disabled"]),m(D,{disabled:r.value,onClick:c},{default:a(()=>[L("重置")]),_:1},8,["disabled"])],64)):P("",!0),p.prop==="submitBtn"?(n(),$(z,{key:1},[m(D,{type:"primary",onClick:h[1]||(h[1]=V=>l("submit")),disabled:r.value},{default:a(()=>[L("提交")]),_:1},8,["disabled"]),m(D,{disabled:r.value,onClick:h[2]||(h[2]=V=>l("close"))},{default:a(()=>[L("关闭")]),_:1},8,["disabled"])],64)):P("",!0)]),_:2},1032,["label","prop","rules"]))),128)),m(j,null,{default:a(()=>[K(_.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["size","inline","model","label-width"])}}});const te=q(It,[["__scopeId","data-v-67bdd3df"]]);async function U(s,u){return await fetch(s,{body:u&&JSON.stringify(u),method:"POST",headers:{"content-type":"application/json; charset=utf-8"}}).then(l=>l.json())}const zt=I({__name:"dialogModel",props:{modelValue:{type:Boolean,default:!1},title:{default:"标题"},width:{default:"600px"},showFooter:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(s,{emit:u}){const l=()=>{u("update:modelValue",!1),u("close")};return(o,t)=>{const e=qe;return n(),v(e,{"model-value":o.modelValue,title:o.title,width:o.width,draggable:o.draggable,onClosed:l,"close-on-click-modal":!1},tt({default:a(()=>[K(o.$slots,"default")]),_:2},[o.showFooter?{name:"footer",fn:a(()=>[K(o.$slots,"footer")]),key:"0"}:void 0]),1032,["model-value","title","width","draggable"])}}}),Rt=I({__name:"infoDialog",props:["modelValue","typeOptions"],emits:["update:modelValue","submit"],setup(s,{emit:u}){const l=s,o=x(),t=W({label:"",value:"",type:"type"}),e=W([{label:"类型",prop:"type",type:"select",options:l.typeOptions},{label:"名称",prop:"label",rules:[{required:!0,message:"请输入名称",trigger:"blur"}],type:"input"},{label:"值",prop:"value",rules:[{required:!0,message:"请输入值",trigger:"blur"}],type:"input"},{prop:"submitBtn"}]),r=async()=>{var b,k;const{valid:c,data:i}=await((b=o.value)==null?void 0:b.submitForm());c&&((k=o.value)==null||k.setLoading(!0),U("https://5ykenqzacs.hk.aircode.run/addOption",i).then(({success:g,result:_})=>{var h;g?(O.success("添加成功"),d(),u("submit")):(O.error(_||"添加失败"),(h=o.value)==null||h.setLoading(!1))}).catch(()=>{var g;O.error("添加失败"),(g=o.value)==null||g.setLoading(!1)}))},d=()=>{var c;(c=o.value)==null||c.resetFields(),u("update:modelValue",!1)};return(c,i)=>{const b=te,k=zt;return n(),v(k,{title:"新增","model-value":s.modelValue,width:"400px",onClose:d},{default:a(()=>[m(b,{"label-width":"90px",ref_key:"ruleFormRef",ref:o,formData:t,formItem:e,onSubmit:r,onClose:d},null,8,["formData","formItem"])]),_:1},8,["model-value"])}}}),Mt=I({__name:"singleList",setup(s){const u=x([]),l=x(),o=[{prop:"type",label:"类型"},{prop:"label",label:"名称"},{prop:"value",label:"值"},{prop:"createdAt",label:"创建时间",sortable:!0},{prop:"action",label:"操作",width:"90",options:[{name:"删除",onClick:k=>i(k)}]}],t=x(!1),e=x(),r=W({type:"",label:""}),d=[{label:"活动类型",value:"type"},{label:"活动地区",value:"region"},{label:"活动资源",value:"resource"}],c=W([{label:"类型",prop:"type",type:"select",options:d},{label:"名称",prop:"label",type:"input"},{prop:"searchBtn"}]),i=k=>{le.alert(`确定删除${k.label}`,"删除",{confirmButtonText:"OK",callback:g=>{g==="confirm"&&U("https://5ykenqzacs.hk.aircode.run/removeItem",{type:"options",id:k._id}).then(({success:_})=>{_?(O.success("删除成功"),b()):O.error("删除失败")})}})},b=async()=>{var g,_,h;const{data:k}=await((g=e.value)==null?void 0:g.submitForm());u.value=[],(_=l.value)==null||_.setLoading(!0),(h=e.value)==null||h.setLoading(!0),U("https://5ykenqzacs.hk.aircode.run/getAllList",{type:"options",search:k}).then(y=>{var S,f;u.value=y.result,(S=l.value)==null||S.setLoading(!1),(f=e.value)==null||f.setLoading(!1)}).catch(()=>{var y,S;(y=l.value)==null||y.setLoading(!1),(S=e.value)==null||S.setLoading(!1)})};return ue(()=>{b()}),(k,g)=>{const _=H,h=te,y=Ce,S=de;return n(),v(S,null,{header:a(()=>[m(h,{inline:"",ref_key:"searchFormRef",ref:e,formData:r,formItem:c,onSubmit:b},{default:a(()=>[m(_,{type:"primary",onClick:g[0]||(g[0]=f=>t.value=!0)},{default:a(()=>[L("新增")]),_:1})]),_:1},8,["formData","formItem"])]),default:a(()=>[m(y,{data:u.value,ref_key:"tableRef",ref:l,header:o},null,8,["data"]),m(Rt,{onSubmit:b,modelValue:t.value,"onUpdate:modelValue":g[1]||(g[1]=f=>t.value=f),typeOptions:d},null,8,["modelValue"])]),_:1})}}}),Pt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"})),Ot=I({__name:"pageModel",props:{total:{default:0},pageSizes:{default:()=>[10,20,50,100]},layout:{default:"total, sizes, ->, prev, pager, next"},small:{type:Boolean,default:!0},background:{type:Boolean,default:!0},defaultPageSize:{default:20}},emits:["size-change","current-change"],setup(s,{emit:u}){const l=s,o=x(1),t=x(l.defaultPageSize),e=d=>{o.value=1,u("size-change",d)},r=d=>u("current-change",d);return(d,c)=>{const i=Ne;return n(),v(i,{class:"pagination","current-page":o.value,"onUpdate:currentPage":c[0]||(c[0]=b=>o.value=b),"page-size":t.value,"onUpdate:pageSize":c[1]||(c[1]=b=>t.value=b),background:l.background,small:l.small,layout:l.layout,total:l.total,"page-sizes":l.pageSizes,"default-page-size":l.defaultPageSize,onSizeChange:e,onCurrentChange:r},null,8,["current-page","page-size","background","small","layout","total","page-sizes","default-page-size"])}}});const Dt=q(Ot,[["__scopeId","data-v-b2e93b00"]]),Ee=ot("reloadTabs",()=>{const s=x([]);function u(t){s.value.includes(t)||s.value.push(t)}function l(t){s.value=s.value.filter(e=>e!==t)}function o(t,e){s.value.includes(t)&&(l(t),e&&e())}return{reloadList:s,addReloadTab:u,removeReloadTab:l,checkReload:o}}),Ie=async()=>{let s={};const u=sessionStorage.getItem("options");if(u)Object.assign(s,JSON.parse(u));else{const{result:l}=await U("https://5ykenqzacs.hk.aircode.run/getAllList",{type:"options"});l.forEach(o=>{s[o.type]||(s[o.type]=[]),s[o.type].push(o)}),sessionStorage.setItem("options",JSON.stringify(s))}return s},Ft=I({__name:"pageList",setup(s){const u=Ee(),l=ee(),o=W({page:1,total:0,size:20}),t=x({}),e=x([]),r=x([]),d=x(),c=x(),i=W({type:"",name:""}),b=xe(()=>[{label:"名称",prop:"name",type:"input"},{label:"活动地区",prop:"region",type:"select",options:t.value.region},{label:"活动分类",prop:"type",type:"select",options:t.value.type},{prop:"searchBtn"}]),k=[{prop:"name",label:"活动名称"},{prop:"region",label:"活动地区"},{prop:"type",label:"活动分类"},{prop:"createdAt",label:"创建时间",sortable:!0,width:"240"},{prop:"updatedAt",label:"更新时间",sortable:!0,width:"240"},{prop:"action",label:"操作",width:"220",options:[{name:"查看",onClick:w=>S(w)},{name:"编辑",onClick:w=>f(w)},{name:"复制",onClick:w=>T(w)},{name:"删除",onClick:w=>C(w)}]}],g=w=>{o.size=w,o.page=1,h()},_=w=>{o.page=w,h()},h=async()=>{var E,B,Q;const{data:w}=await((E=c.value)==null?void 0:E.submitForm());(B=d.value)==null||B.setLoading(!0),(Q=c.value)==null||Q.setLoading(!0),U("https://5ykenqzacs.hk.aircode.run/getList",{type:"demoList",size:o.size,page:o.page,search:w}).then(D=>{var j,X;e.value=D.result||[],o.total=D.total||0,(j=d.value)==null||j.setLoading(!1),(X=c.value)==null||X.setLoading(!1)}).catch(()=>{var D,j;e.value=[],o.total=0,(D=d.value)==null||D.setLoading(!1),(j=c.value)==null||j.setLoading(!1)})},y=()=>{l.push("/addForm")},S=w=>{l.push(`/detailInfo/${w._id}`)},f=w=>{l.push(`/editForm/${w._id}`)},T=w=>{l.push(`/copyForm/${w._id}`)},C=w=>{le.alert(`确定删除${w.name}`,"删除",{confirmButtonText:"OK",callback:E=>{E==="confirm"&&U("https://5ykenqzacs.hk.aircode.run/removeItem",{type:"demoList",id:w._id}).then(({success:B})=>{B?(O.success("删除成功"),h()):O.error("删除失败")})}})},A=w=>{r.value=w},N=()=>{le.alert(`确定删除${r.value.length}条记录`,"删除",{confirmButtonText:"OK",callback:w=>{w==="confirm"&&U("https://5ykenqzacs.hk.aircode.run/removeItems",{type:"demoList",ids:r.value.map(E=>E._id)}).then(({success:E})=>{E?(O.success("删除成功"),h()):O.error("删除失败")})}})};return Ve(async()=>{t.value=await Ie(),h()}),at(()=>{u.checkReload("pageList",()=>{h()})}),(w,E)=>{const B=H,Q=te,D=We,j=be,X=Ce,p=Dt,V=de;return n(),v(V,null,{header:a(()=>[m(Q,{inline:"",ref_key:"searchFormRef",ref:c,formData:i,formItem:b.value,onSubmit:h},{default:a(()=>[m(B,{type:"primary",onClick:y},{default:a(()=>[L("新增")]),_:1}),m(B,{type:"primary",disabled:!r.value.length,onClick:N},{default:a(()=>[L("批量删除")]),_:1},8,["disabled"])]),_:1},8,["formData","formItem"])]),footer:a(()=>[m(p,{ref:"pageModel",total:o.total,"default-page-size":20,onSizeChange:g,onCurrentChange:_},null,8,["total"])]),default:a(()=>[m(X,{onSelectionChange:A,selection:"",data:e.value,ref_key:"tableRef",ref:d,header:k},{region:a(({row:oe})=>[L(M(oe.region.join()),1)]),type:a(({row:oe})=>[m(j,{wrap:""},{default:a(()=>[(n(!0),$(z,null,F(oe.type,pe=>(n(),v(D,{key:pe},{default:a(()=>[L(M(pe),1)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["data"])]),_:1})}}}),Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"})),Ut=I({__name:"detailInfo",setup(s){const u=Te("removeTab"),o=$e().params.id,t=x({}),e=x(!0);return ue(()=>{U("https://5ykenqzacs.hk.aircode.run/getItem",{type:"demoList",id:o}).then(r=>{t.value=r.result,e.value=!1}).catch(()=>{e.value=!1})}),(r,d)=>{const c=H,i=ye,b=ge,k=ne;return Z((n(),v(b,{column:1,border:""},{extra:a(()=>[m(c,{onClick:d[0]||(d[0]=g=>Y(u)(r.$route.path))},{default:a(()=>[L("关闭")]),_:1})]),default:a(()=>[(n(!0),$(z,null,F(Object.keys(t.value),g=>(n(),v(i,{key:g,label:g},{default:a(()=>[L(M(t.value[g]),1)]),_:2},1032,["label"]))),128))]),_:1})),[[k,e.value]])}}}),At=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"})),jt=I({__name:"formPage",setup(s){const u=Te("removeTab"),l=Ee(),o=$e(),t=o.params.id,e=o.params.copyId,r=x(!0),d=x(),c=W({name:"",num:1,region:["上海"],datetime:[],delivery:!1,type:[],resource:"实物",desc:"呵呵",test:"abc"}),i=x({}),b=xe(()=>[{label:"活动名称",prop:"name",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"}],type:"input"},{label:"数量(1-10)",prop:"num",rules:[{required:!0,message:"请输入数量",trigger:"blur"}],min:1,max:10,type:"input-number"},{label:"活动地区",prop:"region",rules:[{required:!0,message:"请选择地区",trigger:"change"}],type:"select",options:i.value.region,multiple:!0},{label:"活动时间",prop:"datetime",rules:[{required:!0,message:"请选择活动时间",trigger:"change"}],type:"datetimerange",style:{width:"500px"}},{label:"快递",prop:"delivery",type:"switch"},{label:"活动分类",prop:"type",type:"checkbox",rules:[{type:"array",required:!0,message:"请选择至少1个",trigger:"change"}],options:i.value.type},{label:"资源类型",prop:"resource",type:"radio",options:i.value.resource},{label:"说明",prop:"desc",type:"textarea",maxlength:50,rules:[{required:!0,message:"请输入说明",trigger:"blur"}],style:{width:"500px"},row:3},{label:"说明",prop:"test"},{prop:"submitBtn"}]),k=async()=>{var f;const{valid:y,data:S}=await((f=d.value)==null?void 0:f.submitForm());y&&(t?U("https://5ykenqzacs.hk.aircode.run/editItem",{data:S,id:t,type:"demoList"}).then(({success:T})=>{T?(O.success("修改成功"),g()):O.error("修改失败")}):U("https://5ykenqzacs.hk.aircode.run/addItem",{data:S,type:"demoList"}).then(({success:T})=>{T?(O.success("提交成功"),g()):O.error("提交失败")}))},g=()=>{l.addReloadTab("pageList"),u(o.path)},_=(y,S)=>{var f;(f=d.value)==null||f.changeValue(y,S)},h=y=>{U("https://5ykenqzacs.hk.aircode.run/getItem",{type:"demoList",id:y}).then(({success:S,result:f})=>{S&&f&&Object.keys(f).forEach(T=>{["_id","updatedAt","createdAt"].includes(T)||(c[T]=f[T])})})};return Ve(async()=>{i.value=await Ie(),(t||e)&&await h(t||e),r.value=!1}),(y,S)=>{const f=H,T=se,C=te,A=ke,N=ne;return n(),v(A,null,{default:a(()=>[Z((n(),v(C,{ref_key:"ruleFormRef",ref:d,formData:c,formItem:b.value,"label-width":"120px",onSubmit:k,onClose:S[2]||(S[2]=w=>Y(u)(y.$route.path))},{name:a(()=>[m(f,{type:"primary",onClick:S[0]||(S[0]=w=>_("name","test"))},{default:a(()=>[L("修改活动名称")]),_:1})]),test:a(()=>[m(T,{modelValue:c.test,"onUpdate:modelValue":S[1]||(S[1]=w=>c.test=w)},null,8,["modelValue"])]),_:1},8,["formData","formItem"])),[[N,r.value]])]),_:1})}}}),ae=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"}));ct([dt,pt,_t,mt,ft,bt,vt,ht,gt,yt,kt]);const qt={echarts:it},Nt=I({__name:"echartModel",props:{options:{}},setup(s,{expose:u}){const l=s,o=x(null),t=lt(),e=r=>{var d;(d=t.value)==null||d.resize(r)};return ue(()=>{var r;t.value=qt.echarts.init(o.value),(r=t.value)==null||r.setOption(l.options),window.addEventListener("resize",e)}),nt(()=>{window.removeEventListener("resize",e)}),Le(()=>l.options,r=>{var d;(d=t.value)==null||d.setOption(r)},{deep:!0}),u({resize:e}),(r,d)=>(n(),$("div",{class:"chartDomStyle",ref_key:"chartDom",ref:o},null,512))}});const Wt=q(Nt,[["__scopeId","data-v-21c86e60"]]),Jt=I({__name:"echartPage",setup(s){const u=d=>({xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:d}]}),l=x("300px"),o=x(),t=x("bar");function e(d){var c;(c=o.value)==null||c.resize({height:d})}function r(d){t.value=d}return(d,c)=>{const i=Je,b=fe,k=Wt;return n(),$(z,null,[m(b,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=g=>l.value=g),onChange:e},{default:a(()=>[m(i,{label:"300px"}),m(i,{label:"500px"})]),_:1},8,["modelValue"]),m(b,{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=g=>t.value=g),onChange:r},{default:a(()=>[m(i,{label:"bar"}),m(i,{label:"line"})]),_:1},8,["modelValue"]),R("div",{class:"chartDom",style:J({height:l.value})},[m(k,{ref_key:"chartDom",ref:o,options:u(t.value)},null,8,["options"])],4)],64)}}});const Kt=Object.freeze(Object.defineProperty({__proto__:null,default:Jt},Symbol.toStringTag,{value:"Module"})),Gt={class:"version"},Ht=I({__name:"loginPage",setup(s){const u=ee(),l=x({username:"",password:""}),o=document.querySelector('meta[name="version"]'),t=document.querySelector('meta[name="buildTime"]'),e=x(!1),r=()=>{e.value=!0,setTimeout(()=>{e.value=!1,sessionStorage.setItem("login","1"),sessionStorage.setItem("username",l.value.username),u.push("/home")},1e3)};return(d,c)=>{const i=se,b=ve,k=H,g=he,_=Ke,h=de;return n(),v(h,null,{footer:a(()=>{var y,S;return[R("div",Gt," vue3-web-demo "+M((y=Y(o))==null?void 0:y.content)+" "+M((S=Y(t))==null?void 0:S.content),1)]}),default:a(()=>[m(_,{class:"box-card",header:"演示后台"},{default:a(()=>[m(g,{"label-width":"80px",model:l.value},{default:a(()=>[m(b,{label:"帐号"},{default:a(()=>[m(i,{modelValue:l.value.username,"onUpdate:modelValue":c[0]||(c[0]=y=>l.value.username=y),maxLength:"10"},null,8,["modelValue"])]),_:1}),m(b,{label:"密码"},{default:a(()=>[m(i,{modelValue:l.value.password,"onUpdate:modelValue":c[1]||(c[1]=y=>l.value.password=y),maxLength:"12",type:"password"},null,8,["modelValue"])]),_:1}),m(b,null,{default:a(()=>[m(k,{type:"primary",loading:e.value,disabled:!l.value.username||!l.value.password,onClick:r},{default:a(()=>[L("登陆")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})}}});const Qt=q(Ht,[["__scopeId","data-v-27c88525"]]),To=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"})),Xt=["onContextmenu"],Yt=I({__name:"tabMenu",props:{homeTab:{default:()=>({title:"首页",path:"/home",closable:!1})}},setup(s,{expose:u}){const l=s,o=ee(),t=x([l.homeTab]),e=x(t.value[0].path),r=f=>{t.value.find(C=>C.path===f.path)||t.value.push(f),e.value=f.path},d=f=>{const T=t.value;if(e.value===f){const C=T.findIndex(N=>N.path===f),A=T[C+1]||T[C-1]||T[0];e.value=A.path}t.value=t.value.filter(C=>C.path!==f)},c=x(!1),i=x(""),b=x(),k={mounted(f,T){f.handler=function(C){f.contains(C.target)||T.value(C)},document.addEventListener("click",f.handler,!0)},unmounted(f){document.removeEventListener("click",f.handler)}},g=(f,T)=>{f.preventDefault(),b.value=f.currentTarget,c.value=!0,i.value=T},_=()=>{y(),t.value=t.value.filter(f=>f.closable===!1),e.value=t.value[0].path},h=()=>{y(),t.value=t.value.filter(f=>i.value===f.path||f.closable===!1),e.value=i.value},y=()=>{c.value=!1},S=f=>{let T=t.value.find(C=>C.path===f);T&&o.currentRoute.value.path!==T.path&&o.push(T.path)};return u({addTab:r,removeTab:d}),Le(()=>o.currentRoute.value.path,f=>{const{title:T,closable:C=!0}=o.currentRoute.value.meta;r({title:T,closable:C,path:f})}),(f,T)=>{const C=Ge,A=we,N=He,w=Qe;return n(),v(w,{modelValue:e.value,"onUpdate:modelValue":T[0]||(T[0]=E=>e.value=E),type:"card",class:"tabMenu",onTabRemove:d,onTabChange:S},{default:a(()=>[(n(!0),$(z,null,F(t.value,E=>(n(),v(C,{key:E.path,name:E.path,label:E.title,closable:E.closable!==!1},{label:a(()=>[Z((n(),$("div",{onContextmenu:B=>g(B,E.path)},[L(M(E.title),1)],40,Xt)),[[k,y]])]),_:2},1032,["name","label","closable"]))),128)),m(N,{ref:"tooltipRef","virtual-ref":b.value,"virtual-triggering":"","popper-class":"popperMenu",width:"120px",visible:c.value},{default:a(()=>[R("ul",null,[R("li",null,[m(A,{underline:!1,onClick:h},{default:a(()=>[L("关闭其他")]),_:1})]),R("li",null,[m(A,{underline:!1,onClick:_},{default:a(()=>[L("关闭所有")]),_:1})])])]),_:1},8,["virtual-ref","visible"])]),_:1},8,["modelValue"])}}});const Zt=q(Yt,[["__scopeId","data-v-303e67ff"]]),eo=I({__name:"subMenu",props:["i"],emits:["addTab"],setup(s,{emit:u}){return(l,o)=>{const t=re,e=Se,r=ce("subMenu",!0),d=Xe;return n(),v(d,{index:s.i.title+s.i.path},{title:a(()=>[s.i.icon?(n(),v(t,{key:0},{default:a(()=>[(n(),v(ie(s.i.icon)))]),_:1})):P("",!0),R("span",null,M(s.i.title),1)]),default:a(()=>[(n(!0),$(z,null,F(s.i.children,c=>(n(),$(z,{key:c.path},[!c.children||!c.children.length?(n(),v(e,{key:0,onClick:i=>u("addTab",c),index:c.path},{default:a(()=>[L(M(c.title),1)]),_:2},1032,["onClick","index"])):(n(),v(r,{key:1,i:c,onAddTab:o[0]||(o[0]=i=>u("addTab",i))},null,8,["i"]))],64))),128))]),_:1},8,["index"])}}}),to=[{title:"首页",path:"/home",icon:"HomeFilled"},{title:"示例",icon:"List",children:[{title:"简单列表",path:"/singleList"},{title:"分页列表",children:[{title:"表单",path:"/addForm"},{title:"分页列表",path:"/pageList"}]},{title:"echart",path:"/echartPage"}]}],oo=I({__name:"sideBar",emits:["addTab"],setup(s,{emit:u}){return(l,o)=>{const t=re,e=Se,r=eo,d=ke,c=Ye;return n(),v(c,{class:"side-bar"},{default:a(()=>[m(d,null,{default:a(()=>[(n(!0),$(z,null,F(Y(to),i=>(n(),$(z,{key:i.title},[!i.children||!i.children.length?(n(),v(e,{key:0,index:i.title+i.path,onClick:b=>u("addTab",i)},{default:a(()=>[i.icon?(n(),v(t,{key:0},{default:a(()=>[(n(),v(ie(i.icon)))]),_:2},1024)):P("",!0),R("span",null,M(i.title),1)]),_:2},1032,["index","onClick"])):(n(),v(r,{key:1,i,onAddTab:o[0]||(o[0]=b=>u("addTab",b))},null,8,["i"]))],64))),128))]),_:1})]),_:1})}}});const ao=q(oo,[["__scopeId","data-v-9c62f71b"]]),lo=""+new URL("../logo.svg",import.meta.url).href,ze=s=>(st("data-v-0c6f20b0"),s=s(),rt(),s),no={class:"top-bar"},so=ze(()=>R("img",{src:lo,class:"top-bar-icon",alt:""},null,-1)),ro=ze(()=>R("span",{class:"top-bar-text"},"vue3+element-plus",-1)),uo=I({__name:"topBar",setup(s){const u=ee(),l=sessionStorage.getItem("username"),o=()=>{sessionStorage.removeItem("login"),sessionStorage.removeItem("username"),u.push("/login")};return(t,e)=>{const r=Ze,d=ce("SwitchButton"),c=re,i=we,b=et;return n(),$("div",no,[m(b,{gutter:20},{default:a(()=>[m(r,{span:12},{default:a(()=>[so,ro]),_:1}),m(r,{span:4,offset:8,class:"top-bar-right"},{default:a(()=>[m(i,{underline:!1,onClick:o},{default:a(()=>[L(M(Y(l)),1),m(c,{class:"el-icon--right"},{default:a(()=>[m(d)]),_:1})]),_:1})]),_:1})]),_:1})])}}});const co=q(uo,[["__scopeId","data-v-0c6f20b0"]]),io={class:"home-waper"},po={class:"home-waper-top"},_o={class:"home-waper-body"},mo={class:"home-waper-content"},fo={class:"home-waper-view"},bo=I({__name:"waper",setup(s){const u=x();function l(t){var e;(e=u.value)==null||e.addTab(t)}function o(t){var e;(e=u.value)==null||e.removeTab(t)}return _e("addTab",l),_e("removeTab",o),(t,e)=>{const r=co,d=ao,c=Zt,i=ce("router-view");return n(),$("div",io,[R("div",po,[m(r)]),R("div",_o,[m(d,{onAddTab:l}),R("div",mo,[m(c,{ref_key:"tabMenuRef",ref:u},null,512),R("div",fo,[m(i,null,{default:a(({Component:b,route:k})=>[(n(),v(ut,{max:3,include:/List/},[(n(),v(ie(b),{key:k.path}))],1024))]),_:1})])])])])}}});const vo=q(bo,[["__scopeId","data-v-76f1f9c8"]]),$o=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),ho=I({__name:"home",setup(s){const u=[{label:"全局样式",content:"src/assets/main.css"},{label:"示例",content:"src/views/demo"},{label:"组件",content:"src/components"},{label:"工具类",content:"src/utils"},{label:"Mock数据",content:"src/mock"},{label:"状态管理",content:"src/stores"}];return(l,o)=>{const t=ye,e=ge;return n(),v(e,{title:"文件说明",column:1,border:""},{default:a(()=>[(n(),$(z,null,F(u,r=>m(t,{key:r.label,label:r.label},{default:a(()=>[L(M(r.content),1)]),_:2},1032,["label"])),64))]),_:1})}}}),Lo=Object.freeze(Object.defineProperty({__proto__:null,default:ho},Symbol.toStringTag,{value:"Module"})),go={};function yo(s,u){return n(),$("div",null," 404 ")}const ko=q(go,[["render",yo]]),Co=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"}));export{G as _,Co as a,Lo as h,To as l,Vo as r,$o as w};