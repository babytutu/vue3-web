import{E as $e,a as K,b as ze,v as ne,c as se,d as Re,e as Me,f as Fe,g as Pe,h as Oe,i as Be,j as De,k as Ue,l as qe,m as me,n as fe,o as be,p as Ae,q as P,r as ae,s as je,t as Ne,u as ve,w as he,x as ge,y as Je,z as Ge,A as ye,B as He,C as Ke,D as re,F as ke,G as We,H as Ze,I as Qe,J as Xe}from"./element-a84f3580.js";import{I as a,J as T,a4 as R,H as G,G as z,t as L,a9 as Y,_ as v,Z as l,a3 as F,U as f,F as $,at as B,a1 as C,a2 as M,P as N,a0 as H,aL as Ye,o as we,b2 as et,b3 as ee,l as Se,D as xe,b4 as tt,r as Ve,b5 as Le,u as X,n as ot,aM as ue,$ as ce,b6 as lt,b7 as at,E as pe,b8 as nt}from"./chunks-3ca38582.js";const st="modulepreload",rt=function(s,r){return new URL(s,r).href},_e={},Q=function(r,n,t){if(!n||n.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=rt(e,t),e in _e)return;_e[e]=!0;const d=e.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!t)for(let b=o.length-1;b>=0;b--){const w=o[b];if(w.href===e&&(!d||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":st,d||(u.as="script",u.crossOrigin=""),u.href=e,document.head.appendChild(u),d)return new Promise((b,w)=>{u.addEventListener("load",b),u.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=e,window.dispatchEvent(d),!d.defaultPrevented)throw e})},oo=[{path:"/singleList",name:"singleList",component:()=>Q(()=>Promise.resolve().then(()=>gt),void 0,import.meta.url),meta:{title:"简单列表"}},{path:"/pageList",name:"pageList",component:()=>Q(()=>Promise.resolve().then(()=>St),void 0,import.meta.url),meta:{title:"分页列表"}},{path:"/detailInfo/:id",name:"detailInfo",component:()=>Q(()=>Promise.resolve().then(()=>Vt),void 0,import.meta.url),meta:{title:"详情"}},{path:"/addForm",name:"addForm",component:()=>Q(()=>Promise.resolve().then(()=>le),void 0,import.meta.url),meta:{title:"新增"}},{path:"/editForm/:id",name:"editForm",component:()=>Q(()=>Promise.resolve().then(()=>le),void 0,import.meta.url),meta:{title:"编辑"}},{path:"/copyForm/:copyId",name:"copyForm",component:()=>Q(()=>Promise.resolve().then(()=>le),void 0,import.meta.url),meta:{title:"复制"}}];const J=(s,r)=>{const n=s.__vccOpts||s;for(const[t,o]of r)n[t]=o;return n},ut={},ct={class:"flex"},it={class:"flex-header"},dt={class:"flex-content"},pt={class:"flex-footer"};function _t(s,r){return a(),T("div",ct,[R("div",it,[G(s.$slots,"header",{},void 0,!0)]),R("div",dt,[G(s.$slots,"default",{},void 0,!0)]),R("div",pt,[G(s.$slots,"footer",{},void 0,!0)])])}const ie=J(ut,[["render",_t],["__scopeId","data-v-f135e414"]]),mt=["textContent"],Te=z({__name:"tableModel",props:{data:Array,header:{type:Array,required:!0},selection:{type:Boolean}},emits:["selection-change"],setup(s,{expose:r,emit:n}){const t=L(!1),o=L();function e(m){t.value=m}function d(m){n("selection-change",m)}return r({setLoading:e}),(m,p)=>{const u=$e,b=K,w=ze,S=ne;return Y((a(),v(w,{onSelectionChange:d,ref_key:"tableModelRef",ref:o,data:s.data,height:"100%",border:""},{default:l(()=>[s.selection?(a(),v(u,{key:0,type:"selection",width:"55"})):F("",!0),f(u,{type:"index",width:"50"}),(a(!0),T($,null,B(s.header,i=>(a(),v(u,{key:i.prop,prop:i.prop,width:i.width,label:i.label,fixed:i.fixed,sortable:i.sortable},{default:l(({row:h})=>[G(m.$slots,i.prop,{row:h},()=>[i.prop==="action"?(a(!0),T($,{key:0},B(i.options,g=>(a(),v(b,{key:g.name,link:"",type:"primary",onClick:k=>g.onClick(h)},{default:l(()=>[C(M(g.name),1)]),_:2},1032,["onClick"]))),128)):(a(),T("div",{key:1,textContent:M(h[i.prop])},null,8,mt))])]),_:2},1032,["prop","width","label","fixed","sortable"]))),128))]),_:3},8,["data"])),[[S,t.value]])}}}),ft=z({__name:"formModel",props:{formData:{default:void 0},formItem:{default:void 0},itemStyle:{default:{width:"220px"}},inline:{type:Boolean,default:!1},size:{default:""},labelWidth:{default:""}},emits:["submit","close"],setup(s,{expose:r,emit:n}){const t=s,o=L(),e=N(t.formData),d=L(!1),m=async()=>{var h;let i=N({valid:!1,data:e,fields:null});return await((h=o.value)==null?void 0:h.validate((g,k)=>{g?i.valid=!0:(console.log("error submit!",k),i.fields=k)})),i},p=()=>{u(),n("submit")},u=()=>{var i;S(!1),(i=o.value)==null||i.resetFields()},b=i=>{var h;(h=o.value)==null||h.validateField(i)},w=(i,h)=>{e[i]=h},S=i=>{d.value=i};return r({submitForm:m,resetFields:u,validateField:b,changeValue:w,setLoading:S}),(i,h)=>{const g=se,k=Re,_=Me,V=Fe,I=Pe,q=Oe,j=Be,y=De,E=Ue,D=qe,W=me,O=K,A=fe,Z=be;return a(),v(Z,{class:"formModel",size:i.size,inline:i.inline,ref_key:"ruleFormRef",ref:o,model:e,"label-width":i.labelWidth},{default:l(()=>[(a(!0),T($,null,B(i.formItem,c=>(a(),v(A,{key:c.prop,label:c.label,prop:c.prop,rules:c.rules},{default:l(()=>[f(W,{wrap:""},{default:l(()=>[c.type==="input"?(a(),v(g,{key:0,style:H(c.style||i.itemStyle),maxlength:c.maxlength,"show-word-limit":"",modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x,clearable:""},null,8,["style","maxlength","modelValue","onUpdate:modelValue"])):F("",!0),c.type==="input-number"?(a(),v(k,{key:1,style:H(c.style||i.itemStyle),modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x,min:c.min,max:c.max},null,8,["style","modelValue","onUpdate:modelValue","min","max"])):F("",!0),c.type==="select"?(a(),v(V,{key:2,style:H(c.style||i.itemStyle),modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x,placeholder:"请选择",clearable:"",filterable:"",multiple:c.multiple,"collapse-tags":"","collapse-tags-tooltip":""},{default:l(()=>[(a(!0),T($,null,B(c.options,x=>(a(),v(_,{label:x.label,value:x.value},null,8,["label","value"]))),256))]),_:2},1032,["style","modelValue","onUpdate:modelValue","multiple"])):F("",!0),c.type&&["date","datetime","datetimerange","daterange"].includes(c.type)?(a(),v(I,{key:3,style:H(c.style||i.itemStyle),modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x,type:c.type,format:c.format,"value-format":c.format,"default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)],clearable:""},null,8,["style","modelValue","onUpdate:modelValue","type","format","value-format","default-time"])):F("",!0),c.type==="switch"?(a(),v(q,{key:4,modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x},null,8,["modelValue","onUpdate:modelValue"])):F("",!0),c.type==="checkbox"?(a(),v(y,{key:5,style:H(c.style||i.itemStyle),modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x},{default:l(()=>[(a(!0),T($,null,B(c.options,x=>(a(),v(j,{key:x.label,label:x.label,name:c.prop},{default:l(()=>[C(M(x.name||x.label),1)]),_:2},1032,["label","name"]))),128))]),_:2},1032,["style","modelValue","onUpdate:modelValue"])):F("",!0),c.type==="radio"?(a(),v(D,{key:6,style:H(c.style||i.itemStyle),modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x},{default:l(()=>[(a(!0),T($,null,B(c.options,x=>(a(),v(E,{key:x.label,label:x.label},{default:l(()=>[C(M(x.name||x.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["style","modelValue","onUpdate:modelValue"])):F("",!0),c.type==="textarea"?(a(),v(g,{key:7,style:H(c.style||i.itemStyle),modelValue:e[c.prop],"onUpdate:modelValue":x=>e[c.prop]=x,type:"textarea",rows:c.row,maxlength:c.maxlength,"show-word-limit":""},null,8,["style","modelValue","onUpdate:modelValue","rows","maxlength"])):F("",!0),G(i.$slots,c.prop,{item:c},void 0,!0)]),_:2},1024),c.prop==="searchBtn"?(a(),T($,{key:0},[f(O,{type:"primary",onClick:h[0]||(h[0]=x=>n("submit")),disabled:d.value},{default:l(()=>[C("查询")]),_:1},8,["disabled"]),f(O,{disabled:d.value,onClick:p},{default:l(()=>[C("重置")]),_:1},8,["disabled"])],64)):F("",!0),c.prop==="submitBtn"?(a(),T($,{key:1},[f(O,{type:"primary",onClick:h[1]||(h[1]=x=>n("submit")),disabled:d.value},{default:l(()=>[C("提交")]),_:1},8,["disabled"]),f(O,{disabled:d.value,onClick:h[2]||(h[2]=x=>n("close"))},{default:l(()=>[C("关闭")]),_:1},8,["disabled"])],64)):F("",!0)]),_:2},1032,["label","prop","rules"]))),128)),f(A,null,{default:l(()=>[G(i.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["size","inline","model","label-width"])}}});const te=J(ft,[["__scopeId","data-v-67bdd3df"]]);async function U(s,r){return await fetch(s,{body:r&&JSON.stringify(r),method:"POST",headers:{"content-type":"application/json; charset=utf-8"}}).then(n=>n.json())}const bt=z({__name:"dialogModel",props:{modelValue:{type:Boolean,default:!1},title:{default:"标题"},width:{default:"600px"},showFooter:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(s,{emit:r}){const n=()=>{r("update:modelValue",!1),r("close")};return(t,o)=>{const e=Ae;return a(),v(e,{"model-value":t.modelValue,title:t.title,width:t.width,draggable:t.draggable,onClosed:n,"close-on-click-modal":!1},Ye({default:l(()=>[G(t.$slots,"default")]),_:2},[t.showFooter?{name:"footer",fn:l(()=>[G(t.$slots,"footer")]),key:"0"}:void 0]),1032,["model-value","title","width","draggable"])}}}),vt=z({__name:"infoDialog",props:["modelValue","typeOptions"],emits:["update:modelValue","submit"],setup(s,{emit:r}){const n=s,t=L(),o=N({label:"",value:"",type:"type"}),e=N([{label:"类型",prop:"type",type:"select",options:n.typeOptions},{label:"名称",prop:"label",rules:[{required:!0,message:"请输入名称",trigger:"blur"}],type:"input"},{label:"值",prop:"value",rules:[{required:!0,message:"请输入值",trigger:"blur"}],type:"input"},{prop:"submitBtn"}]),d=async()=>{var b,w;const{valid:p,data:u}=await((b=t.value)==null?void 0:b.submitForm());p&&((w=t.value)==null||w.setLoading(!0),U("https://5ykenqzacs.hk.aircode.run/addOption",u).then(({success:S,result:i})=>{var h;S?(P.success("添加成功"),m(),r("submit")):(P.error(i||"添加失败"),(h=t.value)==null||h.setLoading(!1))}).catch(()=>{var S;P.error("添加失败"),(S=t.value)==null||S.setLoading(!1)}))},m=()=>{var p;(p=t.value)==null||p.resetFields(),r("update:modelValue",!1)};return(p,u)=>{const b=te,w=bt;return a(),v(w,{title:"新增","model-value":s.modelValue,width:"400px",onClose:m},{default:l(()=>[f(b,{"label-width":"90px",ref_key:"ruleFormRef",ref:t,formData:o,formItem:e,onSubmit:d,onClose:m},null,8,["formData","formItem"])]),_:1},8,["model-value"])}}}),ht=z({__name:"singleList",setup(s){const r=L([]),n=L(),t=[{prop:"type",label:"类型"},{prop:"label",label:"名称"},{prop:"value",label:"值"},{prop:"createdAt",label:"创建时间",sortable:!0},{prop:"action",label:"操作",width:"90",options:[{name:"删除",onClick:w=>u(w)}]}],o=L(!1),e=L(),d=N({type:"",label:""}),m=[{label:"活动类型",value:"type"},{label:"活动地区",value:"region"},{label:"活动资源",value:"resource"}],p=N([{label:"类型",prop:"type",type:"select",options:m},{label:"名称",prop:"label",type:"input"},{prop:"searchBtn"}]),u=w=>{ae.alert(`确定删除${w.label}`,"删除",{confirmButtonText:"OK",callback:S=>{S==="confirm"&&U("https://5ykenqzacs.hk.aircode.run/removeItem",{type:"options",id:w._id}).then(({success:i})=>{i?(P.success("删除成功"),b()):P.error("删除失败")})}})},b=async()=>{var S,i,h;const{data:w}=await((S=e.value)==null?void 0:S.submitForm());r.value=[],(i=n.value)==null||i.setLoading(!0),(h=e.value)==null||h.setLoading(!0),U("https://5ykenqzacs.hk.aircode.run/getAllList",{type:"options",search:w}).then(g=>{var k,_;r.value=g.result,(k=n.value)==null||k.setLoading(!1),(_=e.value)==null||_.setLoading(!1)}).catch(()=>{var g,k;(g=n.value)==null||g.setLoading(!1),(k=e.value)==null||k.setLoading(!1)})};return we(()=>{b()}),(w,S)=>{const i=K,h=te,g=Te,k=ie;return a(),v(k,null,{header:l(()=>[f(h,{inline:"",ref_key:"searchFormRef",ref:e,formData:d,formItem:p,onSubmit:b},{default:l(()=>[f(i,{type:"primary",onClick:S[0]||(S[0]=_=>o.value=!0)},{default:l(()=>[C("新增")]),_:1})]),_:1},8,["formData","formItem"])]),default:l(()=>[f(g,{data:r.value,ref_key:"tableRef",ref:n,header:t},null,8,["data"]),f(vt,{onSubmit:b,modelValue:o.value,"onUpdate:modelValue":S[1]||(S[1]=_=>o.value=_),typeOptions:m},null,8,["modelValue"])]),_:1})}}}),gt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"})),yt=z({__name:"pageModel",props:{total:{default:0},pageSizes:{default:()=>[10,20,50,100]},layout:{default:"total, sizes, ->, prev, pager, next"},small:{type:Boolean,default:!0},background:{type:Boolean,default:!0},defaultPageSize:{default:20}},emits:["size-change","current-change"],setup(s,{emit:r}){const n=s,t=L(1),o=L(n.defaultPageSize),e=m=>{t.value=1,r("size-change",m)},d=m=>r("current-change",m);return(m,p)=>{const u=je;return a(),v(u,{class:"pagination","current-page":t.value,"onUpdate:currentPage":p[0]||(p[0]=b=>t.value=b),"page-size":o.value,"onUpdate:pageSize":p[1]||(p[1]=b=>o.value=b),background:n.background,small:n.small,layout:n.layout,total:n.total,"page-sizes":n.pageSizes,"default-page-size":n.defaultPageSize,onSizeChange:e,onCurrentChange:d},null,8,["current-page","page-size","background","small","layout","total","page-sizes","default-page-size"])}}});const kt=J(yt,[["__scopeId","data-v-b2e93b00"]]),Ce=et("reloadTabs",()=>{const s=L([]);function r(o){s.value.includes(o)||s.value.push(o)}function n(o){s.value=s.value.filter(e=>e!==o)}function t(o,e){s.value.includes(o)&&(n(o),e&&e())}return{reloadList:s,addReloadTab:r,removeReloadTab:n,checkReload:t}}),Ie=async()=>{let s={};const r=sessionStorage.getItem("options");if(r)Object.assign(s,JSON.parse(r));else{const{result:n}=await U("https://5ykenqzacs.hk.aircode.run/getAllList",{type:"options"});n.forEach(t=>{s[t.type]||(s[t.type]=[]),s[t.type].push(t)}),sessionStorage.setItem("options",JSON.stringify(s))}return s},wt=z({__name:"pageList",setup(s){const r=Ce(),n=ee(),t=N({page:1,total:0,size:20}),o=L({}),e=L([]),d=L([]),m=L(),p=L(),u=N({type:"",name:""}),b=Se(()=>[{label:"名称",prop:"name",type:"input"},{label:"活动地区",prop:"region",type:"select",options:o.value.region},{label:"活动分类",prop:"type",type:"select",options:o.value.type},{prop:"searchBtn"}]),w=[{prop:"name",label:"活动名称"},{prop:"region",label:"活动地区"},{prop:"type",label:"活动分类"},{prop:"createdAt",label:"创建时间",sortable:!0,width:"240"},{prop:"updatedAt",label:"更新时间",sortable:!0,width:"240"},{prop:"action",label:"操作",width:"220",options:[{name:"查看",onClick:y=>k(y)},{name:"编辑",onClick:y=>_(y)},{name:"复制",onClick:y=>V(y)},{name:"删除",onClick:y=>I(y)}]}],S=y=>{t.size=y,t.page=1,h()},i=y=>{t.page=y,h()},h=async()=>{var E,D,W;const{data:y}=await((E=p.value)==null?void 0:E.submitForm());(D=m.value)==null||D.setLoading(!0),(W=p.value)==null||W.setLoading(!0),U("https://5ykenqzacs.hk.aircode.run/getList",{type:"demoList",size:t.size,page:t.page,search:y}).then(O=>{var A,Z;e.value=O.result||[],t.total=O.total||0,(A=m.value)==null||A.setLoading(!1),(Z=p.value)==null||Z.setLoading(!1)}).catch(()=>{var O,A;e.value=[],t.total=0,(O=m.value)==null||O.setLoading(!1),(A=p.value)==null||A.setLoading(!1)})},g=()=>{n.push("/addForm")},k=y=>{n.push(`/detailInfo/${y._id}`)},_=y=>{n.push(`/editForm/${y._id}`)},V=y=>{n.push(`/copyForm/${y._id}`)},I=y=>{ae.alert(`确定删除${y.name}`,"删除",{confirmButtonText:"OK",callback:E=>{E==="confirm"&&U("https://5ykenqzacs.hk.aircode.run/removeItem",{type:"demoList",id:y._id}).then(({success:D})=>{D?(P.success("删除成功"),h()):P.error("删除失败")})}})},q=y=>{d.value=y},j=()=>{ae.alert(`确定删除${d.value.length}条记录`,"删除",{confirmButtonText:"OK",callback:y=>{y==="confirm"&&U("https://5ykenqzacs.hk.aircode.run/removeItems",{type:"demoList",ids:d.value.map(E=>E._id)}).then(({success:E})=>{E?(P.success("删除成功"),h()):P.error("删除失败")})}})};return xe(async()=>{o.value=await Ie(),h()}),tt(()=>{r.checkReload("pageList",()=>{h()})}),(y,E)=>{const D=K,W=te,O=Ne,A=me,Z=Te,c=kt,x=ie;return a(),v(x,null,{header:l(()=>[f(W,{inline:"",ref_key:"searchFormRef",ref:p,formData:u,formItem:b.value,onSubmit:h},{default:l(()=>[f(D,{type:"primary",onClick:g},{default:l(()=>[C("新增")]),_:1}),f(D,{type:"primary",disabled:!d.value.length,onClick:j},{default:l(()=>[C("批量删除")]),_:1},8,["disabled"])]),_:1},8,["formData","formItem"])]),footer:l(()=>[f(c,{ref:"pageModel",total:t.total,"default-page-size":20,onSizeChange:S,onCurrentChange:i},null,8,["total"])]),default:l(()=>[f(Z,{onSelectionChange:q,selection:"",data:e.value,ref_key:"tableRef",ref:m,header:w},{region:l(({row:oe})=>[C(M(oe.region.join()),1)]),type:l(({row:oe})=>[f(A,{wrap:""},{default:l(()=>[(a(!0),T($,null,B(oe.type,de=>(a(),v(O,{key:de},{default:l(()=>[C(M(de),1)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["data"])]),_:1})}}}),St=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),xt=z({__name:"detailInfo",setup(s){const r=Ve("removeTab"),t=Le().params.id,o=L({}),e=L(!0);return we(()=>{U("https://5ykenqzacs.hk.aircode.run/getItem",{type:"demoList",id:t}).then(d=>{o.value=d.result,e.value=!1}).catch(()=>{e.value=!1})}),(d,m)=>{const p=K,u=he,b=ve,w=ne;return Y((a(),v(b,{column:1,border:""},{extra:l(()=>[f(p,{onClick:m[0]||(m[0]=S=>X(r)(d.$route.path))},{default:l(()=>[C("关闭")]),_:1})]),default:l(()=>[(a(!0),T($,null,B(Object.keys(o.value),S=>(a(),v(u,{key:S,label:S},{default:l(()=>[C(M(o.value[S]),1)]),_:2},1032,["label"]))),128))]),_:1})),[[w,e.value]])}}}),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"})),Lt=z({__name:"formPage",setup(s){const r=Ve("removeTab"),n=Ce(),t=Le(),o=t.params.id,e=t.params.copyId,d=L(!0),m=L(),p=N({name:"",num:1,region:["上海"],datetime:[],delivery:!1,type:[],resource:"实物",desc:"呵呵",test:"abc"}),u=L({}),b=Se(()=>[{label:"活动名称",prop:"name",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"}],type:"input"},{label:"数量(1-10)",prop:"num",rules:[{required:!0,message:"请输入数量",trigger:"blur"}],min:1,max:10,type:"input-number"},{label:"活动地区",prop:"region",rules:[{required:!0,message:"请选择地区",trigger:"change"}],type:"select",options:u.value.region,multiple:!0},{label:"活动时间",prop:"datetime",rules:[{required:!0,message:"请选择活动时间",trigger:"change"}],type:"datetimerange",style:{width:"500px"}},{label:"快递",prop:"delivery",type:"switch"},{label:"活动分类",prop:"type",type:"checkbox",rules:[{type:"array",required:!0,message:"请选择至少1个",trigger:"change"}],options:u.value.type},{label:"资源类型",prop:"resource",type:"radio",options:u.value.resource},{label:"说明",prop:"desc",type:"textarea",maxlength:50,rules:[{required:!0,message:"请输入说明",trigger:"blur"}],style:{width:"500px"},row:3},{label:"说明",prop:"test"},{prop:"submitBtn"}]),w=async()=>{var _;const{valid:g,data:k}=await((_=m.value)==null?void 0:_.submitForm());g&&(o?U("https://5ykenqzacs.hk.aircode.run/editItem",{data:k,id:o,type:"demoList"}).then(({success:V})=>{V?(P.success("修改成功"),S()):P.error("修改失败")}):U("https://5ykenqzacs.hk.aircode.run/addItem",{data:k,type:"demoList"}).then(({success:V})=>{V?(P.success("提交成功"),S()):P.error("提交失败")}))},S=()=>{n.addReloadTab("pageList"),r(t.path)},i=(g,k)=>{var _;(_=m.value)==null||_.changeValue(g,k)},h=g=>{U("https://5ykenqzacs.hk.aircode.run/getItem",{type:"demoList",id:g}).then(({success:k,result:_})=>{k&&_&&Object.keys(_).forEach(V=>{["_id","updatedAt","createdAt"].includes(V)||(p[V]=_[V])})})};return xe(async()=>{u.value=await Ie(),(o||e)&&await h(o||e),d.value=!1}),(g,k)=>{const _=K,V=se,I=te,q=ge,j=ne;return a(),v(q,null,{default:l(()=>[Y((a(),v(I,{ref_key:"ruleFormRef",ref:m,formData:p,formItem:b.value,"label-width":"120px",onSubmit:w,onClose:k[2]||(k[2]=y=>X(r)(g.$route.path))},{name:l(()=>[f(_,{type:"primary",onClick:k[0]||(k[0]=y=>i("name","test"))},{default:l(()=>[C("修改活动名称")]),_:1})]),test:l(()=>[f(V,{modelValue:p.test,"onUpdate:modelValue":k[1]||(k[1]=y=>p.test=y)},null,8,["modelValue"])]),_:1},8,["formData","formItem"])),[[j,d.value]])]),_:1})}}}),le=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"})),Tt={class:"version"},Ct=z({__name:"loginPage",setup(s){const r=ee(),n=L({username:"",password:""}),t=document.querySelector('meta[name="version"]'),o=document.querySelector('meta[name="buildTime"]'),e=L(!1),d=()=>{e.value=!0,setTimeout(()=>{e.value=!1,sessionStorage.setItem("login","1"),sessionStorage.setItem("username",n.value.username),r.push("/home")},1e3)};return(m,p)=>{const u=se,b=fe,w=K,S=be,i=Je,h=ie;return a(),v(h,null,{footer:l(()=>{var g,k;return[R("div",Tt," vue3-web-demo "+M((g=X(t))==null?void 0:g.content)+" "+M((k=X(o))==null?void 0:k.content),1)]}),default:l(()=>[f(i,{class:"box-card",header:"演示后台"},{default:l(()=>[f(S,{"label-width":"80px",model:n.value},{default:l(()=>[f(b,{label:"帐号"},{default:l(()=>[f(u,{modelValue:n.value.username,"onUpdate:modelValue":p[0]||(p[0]=g=>n.value.username=g),maxLength:"10"},null,8,["modelValue"])]),_:1}),f(b,{label:"密码"},{default:l(()=>[f(u,{modelValue:n.value.password,"onUpdate:modelValue":p[1]||(p[1]=g=>n.value.password=g),maxLength:"12",type:"password"},null,8,["modelValue"])]),_:1}),f(b,null,{default:l(()=>[f(w,{type:"primary",loading:e.value,disabled:!n.value.username||!n.value.password,onClick:d},{default:l(()=>[C("登陆")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})}}});const It=J(Ct,[["__scopeId","data-v-27c88525"]]),lo=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"})),Et=["onContextmenu"],$t=z({__name:"tabMenu",props:{homeTab:{default:()=>({title:"首页",path:"/home",closable:!1})}},setup(s,{expose:r}){const n=s,t=ee(),o=L([n.homeTab]),e=L(o.value[0].path),d=_=>{o.value.find(I=>I.path===_.path)||o.value.push(_),e.value=_.path},m=_=>{const V=o.value;if(e.value===_){const I=V.findIndex(j=>j.path===_),q=V[I+1]||V[I-1]||V[0];e.value=q.path}o.value=o.value.filter(I=>I.path!==_)},p=L(!1),u=L(""),b=L(),w={mounted(_,V){_.handler=function(I){_.contains(I.target)||V.value(I)},document.addEventListener("click",_.handler,!0)},unmounted(_){document.removeEventListener("click",_.handler)}},S=(_,V)=>{_.preventDefault(),b.value=_.currentTarget,p.value=!0,u.value=V},i=()=>{g(),o.value=o.value.filter(_=>_.closable===!1),e.value=o.value[0].path},h=()=>{g(),o.value=o.value.filter(_=>u.value===_.path||_.closable===!1),e.value=u.value},g=()=>{p.value=!1},k=_=>{let V=o.value.find(I=>I.path===_);V&&t.currentRoute.value.path!==V.path&&t.push(V.path)};return r({addTab:d,removeTab:m}),ot(()=>t.currentRoute.value.path,_=>{const{title:V,closable:I=!0}=t.currentRoute.value.meta;d({title:V,closable:I,path:_})}),(_,V)=>{const I=Ge,q=ye,j=He,y=Ke;return a(),v(y,{modelValue:e.value,"onUpdate:modelValue":V[0]||(V[0]=E=>e.value=E),type:"card",class:"tabMenu",onTabRemove:m,onTabChange:k},{default:l(()=>[(a(!0),T($,null,B(o.value,E=>(a(),v(I,{key:E.path,name:E.path,label:E.title,closable:E.closable!==!1},{label:l(()=>[Y((a(),T("div",{onContextmenu:D=>S(D,E.path)},[C(M(E.title),1)],40,Et)),[[w,g]])]),_:2},1032,["name","label","closable"]))),128)),f(j,{ref:"tooltipRef","virtual-ref":b.value,"virtual-triggering":"","popper-class":"popperMenu",width:"120px",visible:p.value},{default:l(()=>[R("ul",null,[R("li",null,[f(q,{underline:!1,onClick:h},{default:l(()=>[C("关闭其他")]),_:1})]),R("li",null,[f(q,{underline:!1,onClick:i},{default:l(()=>[C("关闭所有")]),_:1})])])]),_:1},8,["virtual-ref","visible"])]),_:1},8,["modelValue"])}}});const zt=J($t,[["__scopeId","data-v-303e67ff"]]),Rt=z({__name:"subMenu",props:["i"],emits:["addTab"],setup(s,{emit:r}){return(n,t)=>{const o=re,e=ke,d=ue("subMenu",!0),m=We;return a(),v(m,{index:s.i.title+s.i.path},{title:l(()=>[s.i.icon?(a(),v(o,{key:0},{default:l(()=>[(a(),v(ce(s.i.icon)))]),_:1})):F("",!0),R("span",null,M(s.i.title),1)]),default:l(()=>[(a(!0),T($,null,B(s.i.children,p=>(a(),T($,{key:p.path},[!p.children||!p.children.length?(a(),v(e,{key:0,onClick:u=>r("addTab",p),index:p.path},{default:l(()=>[C(M(p.title),1)]),_:2},1032,["onClick","index"])):(a(),v(d,{key:1,i:p,onAddTab:t[0]||(t[0]=u=>r("addTab",u))},null,8,["i"]))],64))),128))]),_:1},8,["index"])}}}),Mt=[{title:"首页",path:"/home",icon:"HomeFilled"},{title:"示例",icon:"List",children:[{title:"简单列表",path:"/singleList"},{title:"分页列表",children:[{title:"表单",path:"/addForm"},{title:"分页列表",path:"/pageList"}]}]}],Ft=z({__name:"sideBar",emits:["addTab"],setup(s,{emit:r}){return(n,t)=>{const o=re,e=ke,d=Rt,m=ge,p=Ze;return a(),v(p,{class:"side-bar"},{default:l(()=>[f(m,null,{default:l(()=>[(a(!0),T($,null,B(X(Mt),u=>(a(),T($,{key:u.title},[!u.children||!u.children.length?(a(),v(e,{key:0,index:u.title+u.path,onClick:b=>r("addTab",u)},{default:l(()=>[u.icon?(a(),v(o,{key:0},{default:l(()=>[(a(),v(ce(u.icon)))]),_:2},1024)):F("",!0),R("span",null,M(u.title),1)]),_:2},1032,["index","onClick"])):(a(),v(d,{key:1,i:u,onAddTab:t[0]||(t[0]=b=>r("addTab",b))},null,8,["i"]))],64))),128))]),_:1})]),_:1})}}});const Pt=J(Ft,[["__scopeId","data-v-9c62f71b"]]),Ot=""+new URL("../logo.svg",import.meta.url).href,Ee=s=>(lt("data-v-0c6f20b0"),s=s(),at(),s),Bt={class:"top-bar"},Dt=Ee(()=>R("img",{src:Ot,class:"top-bar-icon",alt:""},null,-1)),Ut=Ee(()=>R("span",{class:"top-bar-text"},"vue3+element-plus",-1)),qt=z({__name:"topBar",setup(s){const r=ee(),n=sessionStorage.getItem("username"),t=()=>{sessionStorage.removeItem("login"),sessionStorage.removeItem("username"),r.push("/login")};return(o,e)=>{const d=Qe,m=ue("SwitchButton"),p=re,u=ye,b=Xe;return a(),T("div",Bt,[f(b,{gutter:20},{default:l(()=>[f(d,{span:12},{default:l(()=>[Dt,Ut]),_:1}),f(d,{span:4,offset:8,class:"top-bar-right"},{default:l(()=>[f(u,{underline:!1,onClick:t},{default:l(()=>[C(M(X(n)),1),f(p,{class:"el-icon--right"},{default:l(()=>[f(m)]),_:1})]),_:1})]),_:1})]),_:1})])}}});const At=J(qt,[["__scopeId","data-v-0c6f20b0"]]),jt={class:"home-waper"},Nt={class:"home-waper-top"},Jt={class:"home-waper-body"},Gt={class:"home-waper-content"},Ht={class:"home-waper-view"},Kt=z({__name:"waper",setup(s){const r=L();function n(o){var e;(e=r.value)==null||e.addTab(o)}function t(o){var e;(e=r.value)==null||e.removeTab(o)}return pe("addTab",n),pe("removeTab",t),(o,e)=>{const d=At,m=Pt,p=zt,u=ue("router-view");return a(),T("div",jt,[R("div",Nt,[f(d)]),R("div",Jt,[f(m,{onAddTab:n}),R("div",Gt,[f(p,{ref_key:"tabMenuRef",ref:r},null,512),R("div",Ht,[f(u,null,{default:l(({Component:b,route:w})=>[(a(),v(nt,{max:3,include:/List/},[(a(),v(ce(b),{key:w.path}))],1024))]),_:1})])])])])}}});const Wt=J(Kt,[["__scopeId","data-v-76f1f9c8"]]),ao=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"})),Zt=z({__name:"home",setup(s){const r=[{label:"全局样式",content:"src/assets/main.css"},{label:"示例",content:"src/views/demo"},{label:"组件",content:"src/components"},{label:"工具类",content:"src/utils"},{label:"Mock数据",content:"src/mock"},{label:"状态管理",content:"src/stores"}];return(n,t)=>{const o=he,e=ve;return a(),v(e,{title:"文件说明",column:1,border:""},{default:l(()=>[(a(),T($,null,B(r,d=>f(o,{key:d.label,label:d.label},{default:l(()=>[C(M(d.content),1)]),_:2},1032,["label"])),64))]),_:1})}}}),no=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"})),Qt={};function Xt(s,r){return a(),T("div",null," 404 ")}const Yt=J(Qt,[["render",Xt]]),so=Object.freeze(Object.defineProperty({__proto__:null,default:Yt},Symbol.toStringTag,{value:"Module"}));export{Q as _,so as a,no as h,lo as l,oo as r,ao as w};
