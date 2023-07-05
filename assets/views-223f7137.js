import{E as Se,a as W,b as xe,v as le,c as ce,d as ie,e as de,f as Le,g as Ve,h as Te,i as Ce,j as Ie,k as $e,l as Ee,m as ze,n as Re,o as Me,p as Fe,q as F,r as oe,s as Pe,t as pe,u as _e,w as Oe,x as Be,y as me,z as De,A as Ue,B as fe,C as qe,D as je,F as Ae,G as Ne,H as He}from"./element-e564f900.js";import{I as n,J as C,a4 as z,H as G,G as $,t as x,a9 as X,_ as g,Z as l,a3 as M,U as b,F as E,at as P,a1 as I,a2 as U,P as q,a0 as K,aL as Ge,o as ne,b2 as Je,b3 as Y,b4 as Ke,r as be,b5 as ve,u as se,l as We,D as Ze,n as Qe,$ as ae,aM as he,b6 as Xe,b7 as Ye,E as re,b8 as et}from"./chunks-233b8f97.js";const tt="modulepreload",ot=function(p,u){return new URL(p,u).href},ue={},Z=function(u,o,s){if(!o||o.length===0)return u();const t=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=ot(e,s),e in ue)return;ue[e]=!0;const c=e.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!s)for(let d=t.length-1;d>=0;d--){const w=t[d];if(w.href===e&&(!c||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":tt,c||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),c)return new Promise((d,w)=>{_.addEventListener("load",d),_.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>u())},Wt=[{path:"/singleList",name:"singleList",component:()=>Z(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url),meta:{title:"简单列表"}},{path:"/pageList",name:"pageList",component:()=>Z(()=>Promise.resolve().then(()=>vt),void 0,import.meta.url),meta:{title:"分页列表"}},{path:"/detailInfo/:id",name:"detailInfo",component:()=>Z(()=>Promise.resolve().then(()=>yt),void 0,import.meta.url),meta:{title:"详情"}},{path:"/addForm",name:"addForm",component:()=>Z(()=>Promise.resolve().then(()=>te),void 0,import.meta.url),meta:{title:"新增"}},{path:"/editForm/:id",name:"editForm",component:()=>Z(()=>Promise.resolve().then(()=>te),void 0,import.meta.url),meta:{title:"编辑"}},{path:"/copyForm/:copyId",name:"copyForm",component:()=>Z(()=>Promise.resolve().then(()=>te),void 0,import.meta.url),meta:{title:"复制"}}];const J=(p,u)=>{const o=p.__vccOpts||p;for(const[s,t]of u)o[s]=t;return o},at={},lt={class:"flex"},nt={class:"flex-header"},st={class:"flex-content"},rt={class:"flex-footer"};function ut(p,u){return n(),C("div",lt,[z("div",nt,[G(p.$slots,"header",{},void 0,!0)]),z("div",st,[G(p.$slots,"default",{},void 0,!0)]),z("div",rt,[G(p.$slots,"footer",{},void 0,!0)])])}const ye=J(at,[["render",ut],["__scopeId","data-v-091ae241"]]),ct=["innerHTML"],ge=$({__name:"tableModel",props:{data:Array,header:{type:Array,required:!0},selection:{type:Boolean}},emits:["selection-change"],setup(p,{expose:u,emit:o}){const s=x(!1),t=x();function e(a){s.value=a}function c(){var a;return(a=t.value)==null?void 0:a.getSelectionRows()}function f(a){o("selection-change",a)}return u({setLoading:e,getSelectionRows:c}),(a,_)=>{const d=Se,w=W,k=xe,m=le;return X((n(),g(k,{onSelectionChange:f,ref_key:"tableModelRef",ref:t,data:p.data,height:"100%",border:""},{default:l(()=>[p.selection?(n(),g(d,{key:0,type:"selection",width:"55"})):M("",!0),b(d,{type:"index",width:"50"}),(n(!0),C(E,null,P(p.header,v=>(n(),g(d,{key:v.prop,prop:v.prop,width:v.width,label:v.label,fixed:v.fixed,sortable:v.sortable},{default:l(({row:V})=>[G(a.$slots,v.prop,{row:V},()=>[v.prop==="action"?(n(!0),C(E,{key:0},P(v.options,L=>(n(),g(w,{key:L.type,link:"",type:"primary",onClick:i=>L.onClick(V)},{default:l(()=>[I(U(L.name),1)]),_:2},1032,["onClick"]))),128)):(n(),C("div",{key:1,innerHTML:V[v.prop]},null,8,ct))])]),_:2},1032,["prop","width","label","fixed","sortable"]))),128))]),_:3},8,["data"])),[[m,s.value]])}}}),it=$({__name:"formModel",props:{formData:{default:void 0},formItem:{default:void 0},itemStyle:{default:void 0},inline:{type:Boolean,default:!1},size:{default:""}},emits:["submit","close"],setup(p,{expose:u,emit:o}){const s=p,t=x(),e=q(s.formData),c=x(!1),f=async()=>{var v;let m=q({valid:!1,data:e,fields:null});return await((v=t.value)==null?void 0:v.validate((V,L)=>{V?m.valid=!0:(console.log("error submit!",L),m.fields=L)})),m},a=()=>{_(),o("submit")},_=()=>{var m;k(!1),(m=t.value)==null||m.resetFields()},d=m=>{var v;(v=t.value)==null||v.validateField(m)},w=(m,v)=>{e[m]=v},k=m=>{c.value=m};return u({submitForm:f,resetFields:_,validateField:d,changeValue:w,setLoading:k}),(m,v)=>{const V=de,L=Le,i=Ve,h=Te,T=Ce,B=Ie,H=$e,Q=Ee,y=ze,R=Re,j=Me,A=W,D=ie,N=ce;return n(),g(N,{class:"formModel",size:m.size,inline:m.inline,ref_key:"ruleFormRef",ref:t,model:e,"label-width":"120px"},{default:l(()=>[(n(!0),C(E,null,P(m.formItem,r=>(n(),g(D,{key:r.prop,label:r.label,prop:r.prop,rules:r.rules},{default:l(()=>[b(j,{wrap:""},{default:l(()=>[r.type==="input"?(n(),g(V,{key:0,style:K(r.style||m.itemStyle),maxlength:r.maxlength,"show-word-limit":"",modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S,clearable:""},null,8,["style","maxlength","modelValue","onUpdate:modelValue"])):M("",!0),r.type==="input-number"?(n(),g(L,{key:1,style:K(r.style||m.itemStyle),modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S,min:r.min,max:r.max},null,8,["style","modelValue","onUpdate:modelValue","min","max"])):M("",!0),r.type==="select"?(n(),g(h,{key:2,style:K(r.style||m.itemStyle),modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S,placeholder:"请选择",clearable:"",filterable:"",multiple:r.multiple,"collapse-tags":"","collapse-tags-tooltip":""},{default:l(()=>[(n(!0),C(E,null,P(r.options,S=>(n(),g(i,{label:S.label,value:S.value},null,8,["label","value"]))),256))]),_:2},1032,["style","modelValue","onUpdate:modelValue","multiple"])):M("",!0),["date","datetime","datetimerange","daterange"].includes(r.type)?(n(),g(T,{key:3,style:K(r.style||m.itemStyle),modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S,type:r.type,format:r.format,"value-format":r.format,"default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)],clearable:""},null,8,["style","modelValue","onUpdate:modelValue","type","format","value-format","default-time"])):M("",!0),r.type==="switch"?(n(),g(B,{key:4,modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S},null,8,["modelValue","onUpdate:modelValue"])):M("",!0),r.type==="checkbox"?(n(),g(Q,{key:5,style:K(r.style||m.itemStyle),modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S},{default:l(()=>[(n(!0),C(E,null,P(r.options,S=>(n(),g(H,{key:S.label,label:S.label,name:r.prop},{default:l(()=>[I(U(S.name||S.label),1)]),_:2},1032,["label","name"]))),128))]),_:2},1032,["style","modelValue","onUpdate:modelValue"])):M("",!0),r.type==="radio"?(n(),g(R,{key:6,style:K(r.style||m.itemStyle),modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S},{default:l(()=>[(n(!0),C(E,null,P(r.options,S=>(n(),g(y,{key:S.label,label:S.label},{default:l(()=>[I(U(S.name||S.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["style","modelValue","onUpdate:modelValue"])):M("",!0),r.type==="textarea"?(n(),g(V,{key:7,style:K(r.style||m.itemStyle),modelValue:e[r.prop],"onUpdate:modelValue":S=>e[r.prop]=S,type:"textarea",rows:r.row,maxlength:r.maxlength,"show-word-limit":""},null,8,["style","modelValue","onUpdate:modelValue","rows","maxlength"])):M("",!0),G(m.$slots,r.prop,{item:r},void 0,!0)]),_:2},1024),r.type==="searchBtn"?(n(),C(E,{key:0},[b(A,{type:"primary",onClick:v[0]||(v[0]=S=>o("submit")),disabled:c.value},{default:l(()=>[I("查询")]),_:1},8,["disabled"]),b(A,{disabled:c.value,onClick:a},{default:l(()=>[I("重置")]),_:1},8,["disabled"])],64)):M("",!0),r.type==="submitBtn"?(n(),C(E,{key:1},[b(A,{type:"primary",onClick:v[1]||(v[1]=S=>o("submit")),disabled:c.value},{default:l(()=>[I("提交")]),_:1},8,["disabled"]),b(A,{disabled:c.value,onClick:v[2]||(v[2]=S=>o("close"))},{default:l(()=>[I("关闭")]),_:1},8,["disabled"])],64)):M("",!0)]),_:2},1032,["label","prop","rules"]))),128)),b(D,null,{default:l(()=>[G(m.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["size","inline","model"])}}});const ee=J(it,[["__scopeId","data-v-cbcc7a1e"]]);async function O(p,u){return await fetch(p,{body:u&&JSON.stringify(u),method:"POST",headers:{"content-type":"application/json; charset=utf-8"}}).then(o=>o.json())}const dt=$({__name:"dialogModel",props:{modelValue:{type:Boolean,default:!1},title:{default:"标题"},width:{default:"600px"},showFooter:{type:Boolean,default:!1}},emits:["update:modelValue","close"],setup(p,{emit:u}){const o=()=>{u("update:modelValue",!1),u("close")};return(s,t)=>{const e=Fe;return n(),g(e,{"model-value":s.modelValue,title:s.title,width:s.width,onClosed:o,"close-on-click-modal":!1},Ge({default:l(()=>[G(s.$slots,"default")]),_:2},[s.showFooter?{name:"footer",fn:l(()=>[G(s.$slots,"footer")]),key:"0"}:void 0]),1032,["model-value","title","width"])}}}),pt=$({__name:"infoDialog",props:["modelValue","typeOptions"],emits:["update:modelValue","submit"],setup(p,{emit:u}){const o=p,s=x(),t=q({label:"",value:"",type:"type"}),e=q([{label:"类型",prop:"type",type:"select",options:o.typeOptions},{label:"名称",prop:"label",rules:[{required:!0,message:"请输入名称",trigger:"blur"}],type:"input"},{label:"值",prop:"value",rules:[{required:!0,message:"请输入值",trigger:"blur"}],type:"input"},{label:" ",type:"submitBtn"}]),c=async()=>{var d,w;const{valid:a,data:_}=await((d=s.value)==null?void 0:d.submitForm());a&&((w=s.value)==null||w.setLoading(!0),O("https://5ykenqzacs.hk.aircode.run/addOption",_).then(({success:k,result:m})=>{var v;k?(F.success("添加成功"),f(),u("submit")):(F.error(m||"添加失败"),(v=s.value)==null||v.setLoading(!1))}).catch(()=>{var k;F.error("添加失败"),(k=s.value)==null||k.setLoading(!1)}))},f=()=>{var a;(a=s.value)==null||a.resetFields(),u("update:modelValue",!1)};return(a,_)=>{const d=ee,w=dt;return n(),g(w,{draggable:"",title:"新增","model-value":p.modelValue,width:"400px",onClose:f},{default:l(()=>[b(d,{inline:"","label-width":"90px",ref_key:"ruleFormRef",ref:s,formData:t,formItem:e,onSubmit:c,onClose:f},null,8,["formData","formItem"])]),_:1},8,["model-value"])}}}),_t=$({__name:"singleList",setup(p){const u=x([]),o=x(),s=[{prop:"type",label:"类型"},{prop:"label",label:"名称"},{prop:"value",label:"值"},{prop:"createdAt",label:"创建时间",sortable:!0},{prop:"action",label:"操作",width:"90",options:[{name:"删除",onClick:w=>_(w)}]}],t=x(!1),e=x(),c=q({type:"",label:""}),f=[{label:"活动类型",value:"type"},{label:"活动地区",value:"region"},{label:"活动资源",value:"resource"}],a=q([{label:"类型",prop:"type",type:"select",options:f},{label:"名称",prop:"label",type:"input"},{type:"searchBtn"}]),_=w=>{oe.alert(`确定删除${w.label}`,"删除",{confirmButtonText:"OK",callback:k=>{k==="confirm"&&O("https://5ykenqzacs.hk.aircode.run/removeItem",{type:"options",id:w._id}).then(({success:m})=>{m?(F.success("删除成功"),d()):F.error("删除失败")})}})},d=async()=>{var k,m,v;const{data:w}=await((k=e.value)==null?void 0:k.submitForm());u.value=[],(m=o.value)==null||m.setLoading(!0),(v=e.value)==null||v.setLoading(!0),O("https://5ykenqzacs.hk.aircode.run/getAllList",{type:"options",search:w}).then(V=>{var L,i;u.value=V.result,(L=o.value)==null||L.setLoading(!1),(i=e.value)==null||i.setLoading(!1)}).catch(()=>{var V,L;(V=o.value)==null||V.setLoading(!1),(L=e.value)==null||L.setLoading(!1)})};return ne(()=>{d()}),(w,k)=>{const m=W,v=ee,V=ge,L=ye;return n(),g(L,null,{header:l(()=>[b(v,{inline:"","label-width":"60px",ref_key:"searchFormRef",ref:e,formData:c,formItem:a,onSubmit:d},{default:l(()=>[b(m,{type:"primary",onClick:k[0]||(k[0]=i=>t.value=!0)},{default:l(()=>[I("新增")]),_:1})]),_:1},8,["formData","formItem"])]),default:l(()=>[b(V,{data:u.value,ref_key:"tableRef",ref:o,header:s},null,8,["data"]),b(pt,{onSubmit:d,modelValue:t.value,"onUpdate:modelValue":k[1]||(k[1]=i=>t.value=i),typeOptions:f},null,8,["modelValue"])]),_:1})}}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),ft=$({__name:"pageModel",props:{pageSizes:{default:()=>[10,20,50,100]},layout:{default:"total, sizes, ->, prev, pager, next"},small:{type:Boolean,default:!0},background:{type:Boolean,default:!0},defaultPageSize:{default:10},total:{default:0}},emits:["size-change","current-change"],setup(p,{emit:u}){const o=p,s=x(1),t=x(o.defaultPageSize),e=f=>{s.value=1,u("size-change",f)},c=f=>u("current-change",f);return(f,a)=>{const _=Pe;return n(),g(_,{"current-page":s.value,"onUpdate:currentPage":a[0]||(a[0]=d=>s.value=d),"page-size":t.value,"onUpdate:pageSize":a[1]||(a[1]=d=>t.value=d),background:o.background,small:o.small,layout:o.layout,total:o.total,"page-sizes":o.pageSizes,"default-page-size":o.defaultPageSize,onSizeChange:e,onCurrentChange:c},null,8,["current-page","page-size","background","small","layout","total","page-sizes","default-page-size"])}}}),ke=Je("tab",()=>{const p=x([]);function u(t){p.value.includes(t)||p.value.push(t)}function o(t){p.value=p.value.filter(e=>e!==t)}function s(t,e){p.value.includes(t)&&(o(t),e&&e())}return{tabs:p,addTab:u,removeTab:o,checkPath:s}}),bt=$({__name:"pageList",setup(p){const u=ke(),o=Y(),s=x(1),t=x(0),e=x(10),c=x([]),f=x([]),a=x(),_=x(),d=q({type:"",name:""}),w=q([{label:"名称",prop:"name",type:"input"},{type:"searchBtn"}]),k=[{prop:"name",label:"名称"},{prop:"region",label:"地区"},{prop:"num",label:"数量"},{prop:"type",label:"类型"},{prop:"action",label:"操作",width:"220",options:[{name:"查看",onClick:y=>i(y)},{name:"编辑",onClick:y=>h(y)},{name:"复制",onClick:y=>T(y)},{name:"删除",onClick:y=>B(y)}]}],m=y=>{e.value=y,s.value=1,V()},v=y=>{s.value=y,V()},V=async()=>{var R,j,A;const{data:y}=await((R=_.value)==null?void 0:R.submitForm());(j=a.value)==null||j.setLoading(!0),(A=_.value)==null||A.setLoading(!0),O("https://5ykenqzacs.hk.aircode.run/getList",{type:"demoList",size:e.value,page:s.value,search:y}).then(D=>{var N,r;c.value=D.result||[],t.value=D.total||0,(N=a.value)==null||N.setLoading(!1),(r=_.value)==null||r.setLoading(!1)}).catch(()=>{var D,N;c.value=[],t.value=0,(D=a.value)==null||D.setLoading(!1),(N=_.value)==null||N.setLoading(!1)})},L=()=>{o.push("/addForm")},i=y=>{o.push(`/detailInfo/${y._id}`)},h=y=>{o.push(`/editForm/${y._id}`)},T=y=>{o.push(`/copyForm/${y._id}`)},B=y=>{oe.alert(`确定删除${y.name}`,"删除",{confirmButtonText:"OK",callback:R=>{R==="confirm"&&O("https://5ykenqzacs.hk.aircode.run/removeItem",{type:"demoList",id:y._id}).then(({success:j})=>{j?(F.success("删除成功"),V()):F.error("删除失败")})}})},H=y=>{f.value=y},Q=()=>{oe.alert(`确定删除${f.value.length}条记录`,"删除",{confirmButtonText:"OK",callback:y=>{y==="confirm"&&O("https://5ykenqzacs.hk.aircode.run/removeItems",{type:"demoList",ids:f.value.map(R=>R._id)}).then(({success:R})=>{R?(F.success("删除成功"),V()):F.error("删除失败")})}})};return ne(()=>{V()}),Ke(()=>{u.checkPath("pageList",()=>{V()})}),(y,R)=>{const j=W,A=ee,D=ge,N=ft,r=ye;return n(),g(r,null,{header:l(()=>[b(A,{inline:"","label-width":"60px",ref_key:"searchFormRef",ref:_,formData:d,formItem:w,onSubmit:V},{default:l(()=>[b(j,{type:"primary",onClick:L},{default:l(()=>[I("新增")]),_:1}),b(j,{type:"primary",disabled:!f.value.length,onClick:Q},{default:l(()=>[I("批量删除")]),_:1},8,["disabled"])]),_:1},8,["formData","formItem"])]),footer:l(()=>[b(N,{ref:"pageModel",total:t.value,"default-page-size":10,onSizeChange:m,onCurrentChange:v},null,8,["total"])]),default:l(()=>[b(D,{onSelectionChange:H,selection:"",data:c.value,ref_key:"tableRef",ref:a,header:k},null,8,["data"])]),_:1})}}}),vt=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),ht=$({__name:"detailInfo",setup(p){const u=be("removeTab"),s=ve().params.id,t=x({}),e=x(!0);return ne(()=>{O("https://5ykenqzacs.hk.aircode.run/getItem",{type:"demoList",id:s}).then(c=>{t.value=c.result,e.value=!1}).catch(()=>{e.value=!1})}),(c,f)=>{const a=W,_=_e,d=pe,w=le;return X((n(),g(d,{column:1,border:""},{extra:l(()=>[b(a,{onClick:f[0]||(f[0]=k=>se(u)(c.$route.path))},{default:l(()=>[I("关闭")]),_:1})]),default:l(()=>[(n(!0),C(E,null,P(Object.keys(t.value),k=>(n(),g(_,{key:k,label:k},{default:l(()=>[I(U(t.value[k]),1)]),_:2},1032,["label"]))),128))]),_:1})),[[w,e.value]])}}}),yt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"})),gt=$({__name:"formPage",setup(p){const u=be("removeTab"),o=ke(),s=ve(),t=s.params.id,e=s.params.copyId,c=x(!0),f=x(),a=q({name:"",num:1,region:["上海"],datetime:[],delivery:!1,type:[],resource:"实物",desc:"呵呵",test:"abc"}),_={width:"220px"},d=q({}),w=async()=>{const L=sessionStorage.getItem("options");if(L){Object.assign(d,JSON.parse(L));return}const{result:i}=await O("https://5ykenqzacs.hk.aircode.run/getAllList",{type:"options"});i.forEach(h=>{d[h.type]||(d[h.type]=[]),d[h.type].push(h)}),sessionStorage.setItem("options",JSON.stringify(d))},k=We(()=>[{label:"活动名称",prop:"name",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"}],type:"input"},{label:"数量(1-10)",prop:"num",rules:[{required:!0,message:"请输入数量",trigger:"blur"}],min:1,max:10,type:"input-number"},{label:"活动地区",prop:"region",rules:[{required:!0,message:"请选择地区",trigger:"change"}],type:"select",options:d.region,multiple:!0},{label:"活动时间",prop:"datetime",rules:[{required:!0,message:"请选择活动时间",trigger:"change"}],type:"datetimerange",style:{width:"500px"}},{label:"快递",prop:"delivery",type:"switch"},{label:"活动分类",prop:"type",type:"checkbox",rules:[{type:"array",required:!0,message:"请选择至少1个",trigger:"change"}],options:d.type},{label:"资源类型",prop:"resource",type:"radio",options:d.resource},{label:"说明",prop:"desc",type:"textarea",maxlength:50,rules:[{required:!0,message:"请输入说明",trigger:"blur"}],style:{width:"500px"},row:3},{label:"说明",prop:"test",type:"input"},{type:"submitBtn"}]),m=async()=>{var h;const{valid:L,data:i}=await((h=f.value)==null?void 0:h.submitForm());L&&(t?O("https://5ykenqzacs.hk.aircode.run/editItem",{data:i,id:t,type:"demoList"}).then(({success:T})=>{T?(F.success("修改成功"),o.addTab("pageList"),u(s.path)):F.error("修改失败")}):O("https://5ykenqzacs.hk.aircode.run/addItem",{data:i,type:"demoList"}).then(({success:T})=>{T?(F.success("提交成功"),o.addTab("pageList"),u(s.path)):F.error("提交失败")}))},v=(L,i)=>{var h;(h=f.value)==null||h.changeValue(L,i)},V=L=>{O("https://5ykenqzacs.hk.aircode.run/getItem",{type:"demoList",id:L}).then(({success:i,result:h})=>{i&&h&&Object.keys(h).forEach(T=>{["_id","updatedAt","createdAt"].includes(T)||(a[T]=h[T])})})};return Ze(async()=>{await w(),(t||e)&&await V(t||e),c.value=!1}),(L,i)=>{const h=W,T=ee,B=le;return X((n(),g(T,{ref_key:"ruleFormRef",ref:f,formData:a,formItem:k.value,itemStyle:_,onSubmit:m,submitTxt:"提交"},{name:l(()=>[b(h,{type:"primary",onClick:i[0]||(i[0]=H=>v("name","test"))},{default:l(()=>[I("修改活动名称")]),_:1})]),_:1},8,["formData","formItem"])),[[B,c.value]])}}}),te=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),kt={class:"flex"},wt=$({__name:"loginPage",setup(p){const u=Y(),o=x({username:"",password:""}),s=x(!1),t=()=>{s.value=!0,setTimeout(()=>{s.value=!1,sessionStorage.setItem("login","1"),sessionStorage.setItem("username",o.value.username),u.push("/home")},1e3)};return(e,c)=>{const f=de,a=ie,_=W,d=ce,w=Oe;return n(),C("div",kt,[b(w,{class:"box-card",header:"演示后台"},{default:l(()=>[b(d,{"label-width":"80px",model:o.value},{default:l(()=>[b(a,{label:"帐号"},{default:l(()=>[b(f,{modelValue:o.value.username,"onUpdate:modelValue":c[0]||(c[0]=k=>o.value.username=k),maxLength:"10"},null,8,["modelValue"])]),_:1}),b(a,{label:"密码"},{default:l(()=>[b(f,{modelValue:o.value.password,"onUpdate:modelValue":c[1]||(c[1]=k=>o.value.password=k),maxLength:"12",type:"password"},null,8,["modelValue"])]),_:1}),b(a,null,{default:l(()=>[b(_,{type:"primary",loading:s.value,disabled:!o.value.username||!o.value.password,onClick:t},{default:l(()=>[I("登陆")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model"])]),_:1})])}}});const St=J(wt,[["__scopeId","data-v-6430b46a"]]),Zt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"})),xt=["onContextmenu"],Lt=$({__name:"tabMenu",props:{homeTab:{default:()=>({title:"首页",path:"/home",closable:!1})}},setup(p,{expose:u}){const o=p,s=Y(),t=x([o.homeTab]),e=x(t.value[0].path),c=i=>{t.value.find(T=>T.path===i.path)||t.value.push(i),e.value=i.path},f=i=>{const h=t.value;if(e.value===i){const T=h.findIndex(H=>H.path===i),B=h[T+1]||h[T-1]||h[0];e.value=B.path}t.value=t.value.filter(T=>T.path!==i)},a=x(!1),_=x(""),d=x(),w={mounted(i,h){i.handler=function(T){i.contains(T.target)||h.value(T)},document.addEventListener("click",i.handler,!0)},unmounted(i){document.removeEventListener("click",i.handler)}},k=(i,h)=>{i.preventDefault(),d.value=i.currentTarget,a.value=!0,_.value=h},m=()=>{V(),t.value=t.value.filter(i=>i.closable===!1),e.value=t.value[0].path},v=()=>{V(),t.value=t.value.filter(i=>_.value===i.path||i.closable===!1),e.value=_.value},V=()=>{a.value=!1},L=i=>{let h=t.value.find(T=>T.path===i);h&&s.currentRoute.value.path!==h.path&&s.push(h.path)};return u({addTab:c,removeTab:f}),Qe(()=>s.currentRoute.value.path,i=>{const{title:h,closable:T=!0}=s.currentRoute.value.meta;c({title:h,closable:T,path:i})}),(i,h)=>{const T=Be,B=me,H=De,Q=Ue;return n(),g(Q,{modelValue:e.value,"onUpdate:modelValue":h[0]||(h[0]=y=>e.value=y),type:"card",class:"tabMenu",onTabRemove:f,onTabChange:L},{default:l(()=>[(n(!0),C(E,null,P(t.value,y=>(n(),g(T,{key:y.path,name:y.path,label:y.title,closable:y.closable!==!1},{label:l(()=>[X((n(),C("div",{onContextmenu:R=>k(R,y.path)},[I(U(y.title),1)],40,xt)),[[w,V]])]),_:2},1032,["name","label","closable"]))),128)),b(H,{ref:"tooltipRef","virtual-ref":d.value,"virtual-triggering":"","popper-class":"popperMenu",width:"120px",visible:a.value},{default:l(()=>[z("ul",null,[z("li",null,[b(B,{underline:!1,onClick:v},{default:l(()=>[I("关闭其他")]),_:1})]),z("li",null,[b(B,{underline:!1,onClick:m},{default:l(()=>[I("关闭所有")]),_:1})])])]),_:1},8,["virtual-ref","visible"])]),_:1},8,["modelValue"])}}});const Vt=J(Lt,[["__scopeId","data-v-303e67ff"]]),Tt=[{title:"首页",path:"/home",icon:"HomeFilled"},{title:"示例",icon:"List",children:[{title:"简单列表",path:"/singleList"},{title:"分页列表",path:"/pageList"}]}],Ct=$({__name:"sideBar",emits:["addTab"],setup(p,{emit:u}){return(o,s)=>{const t=fe,e=qe,c=je,f=Ae;return n(),g(f,{"default-active":"/home",class:"side-bar"},{default:l(()=>[(n(!0),C(E,null,P(se(Tt),a=>(n(),C(E,{key:a.title},[!a.children||!a.children.length?(n(),g(e,{key:0,index:a.title+a.path,onClick:_=>u("addTab",a)},{default:l(()=>[a.icon?(n(),g(t,{key:0},{default:l(()=>[(n(),g(ae(a.icon)))]),_:2},1024)):M("",!0),z("span",null,U(a.title),1)]),_:2},1032,["index","onClick"])):(n(),g(c,{key:1,index:a.title+a.path},{title:l(()=>[a.icon?(n(),g(t,{key:0},{default:l(()=>[(n(),g(ae(a.icon)))]),_:2},1024)):M("",!0),z("span",null,U(a.title),1)]),default:l(()=>[(n(!0),C(E,null,P(a.children,_=>(n(),g(e,{onClick:d=>u("addTab",_),key:_.path,index:_.path},{default:l(()=>[I(U(_.title),1)]),_:2},1032,["onClick","index"]))),128))]),_:2},1032,["index"]))],64))),128))]),_:1})}}});const It=J(Ct,[["__scopeId","data-v-b7aba755"]]),$t=""+new URL("../logo.svg",import.meta.url).href,we=p=>(Xe("data-v-0c6f20b0"),p=p(),Ye(),p),Et={class:"top-bar"},zt=we(()=>z("img",{src:$t,class:"top-bar-icon",alt:""},null,-1)),Rt=we(()=>z("span",{class:"top-bar-text"},"vue3+element-plus",-1)),Mt=$({__name:"topBar",setup(p){const u=Y(),o=sessionStorage.getItem("username"),s=()=>{sessionStorage.removeItem("login"),sessionStorage.removeItem("username"),u.push("/login")};return(t,e)=>{const c=Ne,f=he("SwitchButton"),a=fe,_=me,d=He;return n(),C("div",Et,[b(d,{gutter:20},{default:l(()=>[b(c,{span:12},{default:l(()=>[zt,Rt]),_:1}),b(c,{span:4,offset:8,class:"top-bar-right"},{default:l(()=>[b(_,{underline:!1,onClick:s},{default:l(()=>[I(U(se(o)),1),b(a,{class:"el-icon--right"},{default:l(()=>[b(f)]),_:1})]),_:1})]),_:1})]),_:1})])}}});const Ft=J(Mt,[["__scopeId","data-v-0c6f20b0"]]),Pt={class:"home-waper"},Ot={class:"home-waper-top"},Bt={class:"home-waper-body"},Dt={class:"home-waper-content"},Ut={class:"home-waper-view"},qt=$({__name:"waper",setup(p){const u=x();function o(t){var e;(e=u.value)==null||e.addTab(t)}function s(t){var e;(e=u.value)==null||e.removeTab(t)}return re("addTab",o),re("removeTab",s),(t,e)=>{const c=Ft,f=It,a=Vt,_=he("router-view");return n(),C("div",Pt,[z("div",Ot,[b(c)]),z("div",Bt,[b(f,{onAddTab:o}),z("div",Dt,[b(a,{ref_key:"tabMenuRef",ref:u},null,512),z("div",Ut,[b(_,null,{default:l(({Component:d,route:w})=>[(n(),g(et,{max:3},[(n(),g(ae(d),{key:w.path}))],1024))]),_:1})])])])])}}});const jt=J(qt,[["__scopeId","data-v-51248f07"]]),Qt=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"})),At=$({__name:"home",setup(p){const u=[{label:"全局样式",content:"src/assets/main.css"},{label:"示例",content:"src/views/demo"},{label:"组件",content:"src/components"},{label:"工具类",content:"src/utils"},{label:"Mock数据",content:"src/mock"},{label:"状态管理",content:"src/stores"}];return(o,s)=>{const t=_e,e=pe;return n(),g(e,{title:"文件说明",column:1,border:""},{default:l(()=>[(n(),C(E,null,P(u,c=>b(t,{key:c.label,label:c.label},{default:l(()=>[I(U(c.content),1)]),_:2},1032,["label"])),64))]),_:1})}}}),Xt=Object.freeze(Object.defineProperty({__proto__:null,default:At},Symbol.toStringTag,{value:"Module"})),Nt={};function Ht(p,u){return n(),C("div",null," 404 ")}const Gt=J(Nt,[["render",Ht]]),Yt=Object.freeze(Object.defineProperty({__proto__:null,default:Gt},Symbol.toStringTag,{value:"Module"}));export{Z as _,Yt as a,Xt as h,Zt as l,Wt as r,Qt as w};
