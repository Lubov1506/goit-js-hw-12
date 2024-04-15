import{a as y,i as g,S as b}from"./assets/vendor-8167ddc0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const q="43318381-7e1885a90dd63db156a286238";y.defaults.baseURL="https://pixabay.com";const f=async(t,r)=>{try{const o={params:{key:q,q:t,image_type:"photo",safesearch:!0,page:r,per_page:15}},{data:i}=await y.get("/api/",o);return i}catch(o){throw new Error(o)}},h=t=>t.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:s,comments:n,downloads:L})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img src="${r}" alt="${i}" />
          </a>
          <ul class="item-info">
            <li class="item-likes">
              <p class="title likes-title">Likes</p>
              <p class="value likes-value">${e}</p>
            </li>
            <li class="item-views">
              <p class="title views-title">Views</p>
              <p class="value views-value">${s}</p>
            </li>
            <li class="item-comments">
              <p class="title comments-title">Comments</p>
              <p class="value comments-value">${n}</p>
            </li>
            <li class="item-downloads">
              <p class="title downloads-title">Downloads</p>
              <p class="value downloads-value">${L}</p>
            </li>
            </ul>`).join(""),S="/goit-js-hw-12/assets/icon-error-5bd6dd9a.svg",E="/goit-js-hw-12/assets/icon-warn-8cea4238.svg",M={title:"Caution",message:"Type what you want to find!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",iconUrl:E,timeout:2e3},k={theme:"dark",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:" #ef4040",iconUrl:S,maxWidth:"432px",timeout:2e3},H=()=>{g.warning(M)},$=()=>{g.error(k)},v=document.querySelector(".gallery"),m=document.querySelector("form"),C=t=>{if(t.length===0)return $(),v.innerHTML="",!0},T=t=>{if(t.trim()==="")return H(),v.innerHTML="",m.elements.user_query.value="",m.elements.user_query.focus(),!0},P=t=>{const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})},a=document.querySelector(".gallery"),p=document.querySelector("form"),c=document.querySelector(".load-btn");let d=null,l=1,x=new b(".gallery a");const u=()=>c.classList.add("is-hidden"),A=async t=>{if(t.preventDefault(),d=p.elements.user_query.value,l=1,T(d)){u();return}a.innerHTML="";const r=document.querySelector(".loader");r.classList.add("is-visible");try{const{hits:o,total:i,totalHits:e}=await f(d,l);if(r.classList.remove("is-visible"),C(o)){u();return}const s=h(o);a.innerHTML="",a.insertAdjacentHTML("beforeend",s),i>e?(c.classList.remove("is-hidden"),c.addEventListener("click",w)):u(),x.refresh()}catch(o){throw r.classList.remove("is-visible"),new Error(o)}p.reset()},w=async()=>{l++;try{const{hits:t,totalHits:r}=await f(d,l),o=h(t);a.insertAdjacentHTML("beforeend",o),r===l&&(c.classList.add("is-hidden"),c.removeEventListener("click",w));const i=a.querySelector(".gallery-item");window.addEventListener("load",P(i))}catch(t){throw new Error(t)}},B=document.querySelector("form");B.addEventListener("submit",A);
//# sourceMappingURL=commonHelpers.js.map
