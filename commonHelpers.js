import{a as f,i as y,S as b}from"./assets/vendor-8167ddc0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const q="43318381-7e1885a90dd63db156a286238";f.defaults.baseURL="https://pixabay.com";const g=async(r,o)=>{try{const s={params:{key:q,q:r,image_type:"photo",safesearch:!0,page:o,per_page:15}},{data:i}=await f.get("/api/",s);return i}catch(s){throw new Error(s)}},h=r=>r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:w})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img src="${o}" alt="${i}" />
          </a>
          <ul class="item-info">
            <li class="item-likes">
              <p class="title likes-title">Likes</p>
              <p class="value likes-value">${e}</p>
            </li>
            <li class="item-views">
              <p class="title views-title">Views</p>
              <p class="value views-value">${t}</p>
            </li>
            <li class="item-comments">
              <p class="title comments-title">Comments</p>
              <p class="value comments-value">${n}</p>
            </li>
            <li class="item-downloads">
              <p class="title downloads-title">Downloads</p>
              <p class="value downloads-value">${w}</p>
            </li>
            </ul>`).join(""),E="/goit-js-hw-12/assets/icon-error-5bd6dd9a.svg",M="/goit-js-hw-12/assets/icon-warn-8cea4238.svg",S={title:"Caution",message:"Type what you want to find!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",iconUrl:M,timeout:2e3},k={theme:"dark",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:" #ef4040",iconUrl:E,maxWidth:"432px",timeout:2e3},$=()=>{y.warning(S)},H=()=>{y.error(k)},L=document.querySelector(".gallery"),m=document.querySelector("form"),T=r=>{if(r.length===0)return H(),L.innerHTML="",!0},P=r=>{if(r.trim()==="")return $(),L.innerHTML="",m.elements.user_query.value="",m.elements.user_query.focus(),!0},c=document.querySelector(".gallery"),p=document.querySelector("form"),l=document.querySelector(".load-btn");let u=null,a=1,x=new b(".gallery a");const d=()=>l.classList.add("is-hidden"),A=async r=>{if(r.preventDefault(),u=p.elements.user_query.value,a=1,P(u)){d();return}c.innerHTML="";const o=document.querySelector(".loader");o.classList.add("isVisible");try{const{hits:s,total:i,totalHits:e}=await g(u,a);if(o.classList.remove("isVisible"),T(s)){d();return}const t=h(s);c.innerHTML="",c.insertAdjacentHTML("beforeend",t),i>e?(l.classList.remove("is-hidden"),l.addEventListener("click",v)):d(),x.refresh()}catch(s){throw o.classList.remove("isVisible"),new Error(s)}p.reset()},v=async()=>{a++;try{const{hits:r,totalHits:o}=await g(u,a),s=h(r);c.insertAdjacentHTML("beforeend",s),o===a&&(l.classList.add("is-hidden"),l.removeEventListener("click",v))}catch(r){throw new Error(r)}},C=document.querySelector("form");C.addEventListener("submit",A);
//# sourceMappingURL=commonHelpers.js.map
