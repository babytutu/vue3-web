import{F as u,ax as d,o as f,d as _,R as p,X as g,S as h,e as v,aT as y,aU as E,aM as P,aV as I,aW as l,aX as L}from"./chunks-f6cc989b.js";import{x as O,y as V}from"./element-7a2a2e6d.js";import{_ as i,r as R}from"./views-eb95bead.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S=v("div",{id:"container"},null,-1),b="large",A=3e3,N=u({__name:"App",setup(t){return(n,r)=>{const s=d("RouterView"),e=O;return f(),_(h,null,[S,p(e,{size:b,"z-index":A},{default:g(()=>[p(s)]),_:1})],64)}}}),m=y({history:E("./"),routes:[{path:"/login",name:"login",component:()=>i(()=>import("./views-eb95bead.js").then(t=>t.l),["./views-eb95bead.js","./element-7a2a2e6d.js","./chunks-f6cc989b.js","./chunks-8b89e2e0.css","./element-4e66400e.css","./views-3fbcdbe6.css"],import.meta.url)},{path:"/",component:()=>i(()=>import("./views-eb95bead.js").then(t=>t.w),["./views-eb95bead.js","./element-7a2a2e6d.js","./chunks-f6cc989b.js","./chunks-8b89e2e0.css","./element-4e66400e.css","./views-3fbcdbe6.css"],import.meta.url),children:[{path:"/home",name:"home",component:()=>i(()=>import("./views-eb95bead.js").then(t=>t.h),["./views-eb95bead.js","./element-7a2a2e6d.js","./chunks-f6cc989b.js","./chunks-8b89e2e0.css","./element-4e66400e.css","./views-3fbcdbe6.css"],import.meta.url),meta:{title:"首页",closable:!1}},...R,{path:"/:pathMatch(.*)*",name:"404",component:()=>i(()=>import("./views-eb95bead.js").then(t=>t.a),["./views-eb95bead.js","./element-7a2a2e6d.js","./chunks-f6cc989b.js","./chunks-8b89e2e0.css","./element-4e66400e.css","./views-3fbcdbe6.css"],import.meta.url)}]}]}),a=P(N);for(const[t,n]of Object.entries(V))a.component(t,n);a.use(I());a.use(m);a.mount("#app");l.configure({easing:"ease",speed:500,showSpinner:!1,trickle:!0,trickleSpeed:200,minimum:.3,parent:"#container"});sessionStorage.setItem("reload","1");m.beforeEach((t,n,r)=>{l.start();const s=sessionStorage.getItem("login")==="1",e=sessionStorage.getItem("reload")==="1",o=t.fullPath==="/login";sessionStorage.removeItem("reload"),e&&s?r("/home"):s||o?r():r("/login")});m.afterEach((t,n,r)=>{l.done(),L(r)&&console.log("failed navigation",r)});
