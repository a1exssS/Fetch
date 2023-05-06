(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c="https://api.thecatapi.com/v1/images/search",l="https://jsonplaceholder.typicode.com/posts",a=fetch(c).then(o=>o.json()),u=fetch(l).then(o=>o.json());Promise.all([a,u]).then(([o,r])=>{let i="",s=0;document.querySelector("#show").addEventListener("click",()=>{s+=10,document.querySelector("#show").textContent="show more";for(let e=s-10;e<s;e++){if(r.length<=e){alert(`Sorry but we only had ${r.length} users`);return}i=`
					<li class="show__item">
						<div>
							<img class="show__img" src="${o[0].url}"/>
								<span class="show__item-title">${r[e].title.charAt(0).toUpperCase()+r[e].title.slice(1)+" ID: "+r[e].id}</span>
						</div>
						<span class="show__item-body">${r[e].body}</span>
					</li>
					`,document.querySelector(".show__items").insertAdjacentHTML("beforebegin",i)}})}).catch(o=>console.error(o));
