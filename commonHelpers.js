import{i as c,S as m}from"./assets/vendor-96ed78f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="43318381-7e1885a90dd63db156a286238",p="https://pixabay.com/api/",f=r=>{const s=new URLSearchParams({key:d,q:r,image_type:"photo",safesearch:!0});return fetch(`${p}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},y=r=>r.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img src="${s}" alt="${i}" />
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
              <p class="value downloads-value">${u}</p>
            </li>
            </ul>`).join(""),g="/goit-js-hw-12/assets/icon-error-5bd6dd9a.svg",h="/goit-js-hw-12/assets/icon-warn-8cea4238.svg",w={title:"Caution",message:"Type what you want to find!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",iconUrl:h,timeout:2e3},v={theme:"dark",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:" #ef4040",iconUrl:g,maxWidth:"432px",timeout:2e3},L=()=>{c.warning(w)},b=()=>{c.error(v)},S=document.querySelector(".gallery"),$=document.querySelector("form"),q=r=>{if(r.hits.length===0)return b(),S.innerHTML="",!0},E=r=>{if(r.trim()==="")return L(),$.elements.user_query.focus(),!0},l=document.querySelector(".gallery"),a=document.querySelector("form");let k=new m(".gallery a");const M=r=>{r.preventDefault();const s=a.elements.user_query.value;if(E(s))return;l.innerHTML="";const o=document.querySelector(".loader");o.classList.add("isVisible"),f(s).finally(()=>{o.classList.remove("isVisible")}).then(i=>{if(q(i))return;const e=y(i.hits);l.innerHTML="",l.insertAdjacentHTML("beforeend",e),k.refresh()}).catch(i=>i),a.reset()},P=document.querySelector("form");P.addEventListener("submit",M);
//# sourceMappingURL=commonHelpers.js.map
