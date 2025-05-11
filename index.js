import{i as c}from"./assets/vendor-17o45ynk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(a){const s="https://pixabay.com/api/",i=new URLSearchParams({q:a,key:"50197903-e6a4a4a15a8ec114cd3a19b67",image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}?${i}`;return fetch(r).then(e=>{if(e.ok)return e.json();throw new Error("Error!")})}function m(a){return a.map(({webformatURL:s,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:l})=>`
      <li class="gallery-item">
        <a href="${i}" class="gallery-link">
          <img src="${s}" alt="${r}" />
        </a>
        <div class="image-descr">
          <div class="image-descr-box">
            <p class="image-subtitle">likes</p>
            <span class="image-subtitle-quantity">${e}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">views</p>
            <span class="image-subtitle-quantity">${t}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">comments</p>
            <span class="image-subtitle-quantity">${n}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">downloads</p>
            <span class="image-subtitle-quantity">${l}</span>
          </div>
        </div>
      </li>
        `).join("")}const o=document.querySelector(".form"),p=o.querySelector('input[name="search-text"]'),d=document.querySelector(".gallery");o.addEventListener("submit",g);function g(a){a.preventDefault();const s=p.value.trim().toLowerCase();if(!s){c.warning({message:"The input field is empty, try again.",position:"center"}),o.reset();return}u(s).then(i=>{if(i.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),o.reset();return}const r=i.hits;console.log(r),d.innerHTML=m(r),o.reset()})}
//# sourceMappingURL=index.js.map
