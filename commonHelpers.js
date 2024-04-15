import{a as c,i as u,S as d}from"./assets/vendor-8167ddc0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="43318381-7e1885a90dd63db156a286238";c.defaults.baseURL="https://pixabay.com";const f=async r=>{try{return(await c("/api/",{params:{key:p,q:r,image_type:"photo",safesearch:!0}})).data}catch(s){throw new Error(s)}},y=r=>r.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:a,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img src="${s}" alt="${o}" />
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
              <p class="value comments-value">${a}</p>
            </li>
            <li class="item-downloads">
              <p class="title downloads-title">Downloads</p>
              <p class="value downloads-value">${m}</p>
            </li>
            </ul>`).join(""),g="/goit-js-hw-12/assets/icon-error-5bd6dd9a.svg",h="/goit-js-hw-12/assets/icon-warn-8cea4238.svg",w={title:"Caution",message:"Type what you want to find!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",iconUrl:h,timeout:2e3},v={theme:"dark",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:" #ef4040",iconUrl:g,maxWidth:"432px",timeout:2e3},L=()=>{u.warning(w)},b=()=>{u.error(v)},q=document.querySelector(".gallery"),S=document.querySelector("form"),$=r=>{if(r.hits.length===0)return b(),q.innerHTML="",!0},E=r=>{if(r.trim()==="")return L(),S.elements.user_query.focus(),!0},n=document.querySelector(".gallery"),l=document.querySelector("form");let k=new d(".gallery a");const x=r=>{r.preventDefault();const s=l.elements.user_query.value;if(E(s))return;n.innerHTML="";const i=document.querySelector(".loader");i.classList.add("isVisible"),f(s).finally(()=>{i.classList.remove("isVisible")}).then(o=>{if($(o))return;const e=y(o.hits);n.innerHTML="",n.insertAdjacentHTML("beforeend",e),k.refresh()}).catch(o=>o),l.reset()},M=document.querySelector("form");M.addEventListener("submit",x);
//# sourceMappingURL=commonHelpers.js.map
