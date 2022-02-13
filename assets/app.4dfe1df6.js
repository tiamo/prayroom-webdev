var $=Object.defineProperty,U=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var h=(o,e,t)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))j.call(e,t)&&h(o,t,e[t]);if(v)for(var t of v(e))M.call(e,t)&&h(o,t,e[t]);return o},y=(o,e)=>U(o,V(e));import{N as P,r as m,d as C,u as q,a as G,b as A,c as u,o as l,e as f,f as i,n as B,g as E,h as k,w as b,i as R,j as L,k as O,l as F,V as K}from"./vendor.70fbe0f6.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}};Y();const z=({isClient:o,router:e})=>{o&&e.afterEach(t=>{document.body.className=t.name?`${String(t.name)}-page`:""})};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:z});const x=({isClient:o,router:e})=>{o&&(e.beforeEach(()=>{P.start()}),e.afterEach(()=>{P.done()}))};var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:x});const X="modulepreload",T={},J="/prayroom-webdev/",c=function(e,t){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=`${J}${r}`,r in T)return;T[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":X,s||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),s)return new Promise((d,p)=>{n.addEventListener("load",d),n.addEventListener("error",p)})})).then(()=>e())};function Q(){var r,s,a,n,d,p;const o=m(!0),e=m(!1),t=m(!1);{const _=new C().parse(navigator.userAgent);e.value=["Android"].includes((s=(r=_.os)==null?void 0:r.name)!=null?s:""),o.value=((a=_==null?void 0:_.device)==null?void 0:a.type)==="desktop",t.value=((n=_.device)==null?void 0:n.brand)=="Apple"||["Mac","Ios"].includes((p=(d=_.os)==null?void 0:d.name)!=null?p:"")}return{isAndroid:e,isDesktop:o,isIOS:t}}const Z=q();G(Z);const I="Prayroom",S="The world\u2019s first platform for simultaneous prayer",ee="prayroom://",D="1560421594",w="io.prayroom.app",oe=`https://apps.apple.com/app/prayroom/id${D}`,te=`https://play.google.com/store/apps/details?id=${w}`,se="https://facebook.com/prayroomapp",re="https://instagram.com/prayroom_app";var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",APP_NAME:I,APP_DESCRIPTION:S,APP_PREFIX:ee,APPSTORE_ID:D,PACKAGE_ID:w,APPSTORE_URL:oe,PLAYMARKET_URL:te,FB_URL:se,INSTAGRAM_URL:re}),ne="/prayroom-webdev/assets/qr-code.847d68d8.svg",ie="/prayroom-webdev/assets/icon.442d7241.svg",ce="/prayroom-webdev/assets/logo.c8cb015a.svg",_e="/prayroom-webdev/assets/appstore.86b8d43d.svg",le="/prayroom-webdev/assets/googleplay-colored.d38bfe4b.svg",de="/prayroom-webdev/assets/fb.09f41598.svg",pe="/prayroom-webdev/assets/ig.2186ee3e.svg",N=(o,e)=>{const t=o.__vccOpts||o;for(const[r,s]of e)t[r]=s;return t};const me=A({setup(){const{isIOS:o,isDesktop:e,isAndroid:t}=Q();return{cfg:ae,isIOS:o,isDesktop:e,isAndroid:t}}}),ue={class:"firstlook-main"},fe={class:"firstlook-wrapper"},ve={class:"firstlook-container"},he=R('<div class="qr"><div class="qr__title">Get Prayroom</div><div class="qr__img"><img src="'+ne+'" alt=""></div><div class="qr__scan">Scan to download the app</div></div>',1),ge=[he],ye={class:"firstlook-content"},Pe={class:"firstlook"},Ae=R('<div class="firstlook__icon"><img src="'+ie+'" alt="Prayroom icon"></div><div class="firstlook__logo"><img src="'+ce+'" alt="Prayroom"></div><div class="firstlook__slogan"> PEOPLE\xA0PRAY\xA0TOGETHER. <br> SIMULTANEOUSLY. <br> WORLDWIDE. </div>',3),Ee={class:"firstlook__links"},ke=["href"],be=i("img",{src:_e,alt:"Prayroom IOS"},null,-1),Re=[be],Le=["href"],Oe=i("img",{src:le,alt:"Prayroom Android"},null,-1),Te=[Oe],Ie={class:"firstlook-footer"},Se={class:"firstlook-footer__right"},De={class:"firstlook-footer__nav"},we=L("Terms of Use"),Ne=L("Privacy Policy"),$e={class:"firstlook-footer__social"},Ue=["href"],Ve=i("img",{src:de,alt:"Facebook"},null,-1),je=[Ve],Me=["href"],Ce=i("img",{src:pe,alt:"Instagram"},null,-1),qe=[Ce];function Ge(o,e,t,r,s,a){const n=u("router-link");return l(),f("div",ue,[i("div",fe,[i("div",ve,[i("div",{class:B(["firstlook-head",{desktop:o.isDesktop}])},ge,2),i("div",ye,[i("div",Pe,[Ae,i("div",Ee,[o.isDesktop||o.isIOS?(l(),f("a",{key:0,target:"_blank",href:o.cfg.APPSTORE_URL},Re,8,ke)):E("v-if",!0),o.isDesktop||o.isAndroid?(l(),f("a",{key:1,target:"_blank",href:o.cfg.PLAYMARKET_URL},Te,8,Le)):E("v-if",!0)])])])])]),i("div",Ie,[i("div",Se,[i("div",De,[k(n,{to:"terms",title:"Terms of Use"},{default:b(()=>[we]),_:1}),k(n,{to:"privacy",title:"Privacy Policy"},{default:b(()=>[Ne]),_:1})]),i("div",$e,[i("a",{target:"_blank",href:o.cfg.FB_URL},je,8,Ue),i("a",{target:"_blank",href:o.cfg.INSTAGRAM_URL},qe,8,Me)])])])])}var Be=N(me,[["render",Ge]]);const Fe=[{name:"all",path:"/:all(.*)*",component:()=>c(()=>import("./_...all_.3394cfda.js"),["assets/_...all_.3394cfda.js","assets/vendor.70fbe0f6.js"]),props:!0,meta:{layout:404}},{name:"about",path:"/about",component:()=>c(()=>import("./about.fd442865.js"),["assets/about.fd442865.js","assets/vendor.70fbe0f6.js"]),props:!0,meta:{layout:"markdown"}},{name:"app",path:"/app",component:()=>c(()=>import("./app.a7e7fe48.js"),["assets/app.a7e7fe48.js","assets/vendor.70fbe0f6.js"]),props:!0},{name:"index",path:"/",component:Be,props:!0},{name:"privacy",path:"/privacy",component:()=>c(()=>import("./privacy.22c6311c.js"),["assets/privacy.22c6311c.js","assets/vendor.70fbe0f6.js"]),props:!0,meta:{layout:"markdown"}},{name:"qr",path:"/qr",component:()=>c(()=>import("./qr.a363ae5a.js"),["assets/qr.a363ae5a.js","assets/vendor.70fbe0f6.js"]),props:!0},{name:"terms",path:"/terms",component:()=>c(()=>import("./terms.77dcc477.js"),["assets/terms.77dcc477.js","assets/vendor.70fbe0f6.js"]),props:!0,meta:{layout:"markdown"}}],Ke={};function Ye(o,e){const t=u("router-view");return l(),O(t)}var ze=N(Ke,[["render",Ye]]);const We={"404":()=>c(()=>import("./404.054039d1.js"),["assets/404.054039d1.js","assets/vendor.70fbe0f6.js"]),default:ze,markdown:()=>c(()=>import("./markdown.6218fd70.js"),["assets/markdown.6218fd70.js","assets/vendor.70fbe0f6.js"]),page:()=>c(()=>import("./page.49a1dd07.js"),["assets/page.49a1dd07.js","assets/vendor.70fbe0f6.js"])};function xe(o){return o.map(e=>{var t;return{path:e.path,component:We[((t=e.meta)==null?void 0:t.layout)||"default"],children:[y(g({},e),{path:""})]}})}const He=A({setup(o){return F({title:I,meta:[{name:"description",content:S}]}),(e,t)=>{const r=u("router-view");return l(),O(r)}}});const Xe=xe(Fe);K(He,{routes:Xe,base:"/prayroom-webdev/"},o=>{Object.values({"./plugins/body-class.ts":W,"./plugins/nprogress.ts":H}).forEach(e=>{var t;return(t=e.install)==null?void 0:t.call(e,o)})});export{oe as A,te as P,N as _,ne as a,ie as b,Q as u};