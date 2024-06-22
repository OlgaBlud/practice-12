import{a as n}from"./assets/vendor-bdb8a163.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();n.defaults.baseURL="https://dummyjson.com/recipes";async function d(){const{data:r}=await n();return r}const a={recipeList:document.querySelector(".recipes-list")};function u(r){const i=r.map(({image:c,name:s,id:e,cuisine:t,difficulty:o})=>`
         <li class="recipes-item" data-id="${e}">
        <img src="${c}" alt="${s}">
        <div>
          <p>${s}</p>
          <p>Cuisine: ${t} </p>
          <p>Difficulty: ${o}</p>
        </div>
      </li>
    `).join("");a.recipeList.insertAdjacentHTML("beforeend",i)}document.addEventListener("DOMContentLoaded",async()=>{const{recipes:r}=await d();u(r)});
//# sourceMappingURL=commonHelpers.js.map
