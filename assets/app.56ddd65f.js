import{b as f,m as l,d as u}from"./vendor.d6532e09.js";import{A as p,P as m}from"./app.87882642.js";var s={};const v=f({setup(_){const n=l(),{query:e}=n.currentRoute.value;{let d=function(){var t,r,i,a,c;if(((t=o.device)==null?void 0:t.brand)=="Apple"||["Mac","Ios"].includes((i=(r=o.os)==null?void 0:r.name)!=null?i:"")){window.location.href=p;return}if(["Android"].includes((c=(a=o.os)==null?void 0:a.name)!=null?c:"")){window.location.href=m;return}if(e==null?void 0:e.fallback_url){window.location.href=String(e==null?void 0:e.fallback_url);return}n.replace("/")};const o=new u().parse(navigator.userAgent);d()}return()=>{}}});typeof s=="function"&&s(v);export{v as default};
