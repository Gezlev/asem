!function(){"use strict";((e,t)=>{let s=document.querySelector(e),a=document.querySelector(t);s&&a&&s.addEventListener("click",(()=>{s.classList.toggle("active"),a.type=s.classList.contains("active")?"text":"password"}),{passive:!0})})(".loginpass__eye","#loginpass"),(()=>{let e=document.body;document.querySelectorAll(".has-child .menu__link").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),e.parentNode.classList.toggle("expanded")}))}),{passive:!0});let t=document.querySelector(".sidebar--expand");t&&t.addEventListener("click",(()=>document.querySelector(".site--wrapper").classList.toggle("collapsed")));let s=localStorage.getItem("theme"),a=document.querySelector("#themeSwitcher");a&&s&&"dark"===s&&(e.classList.add("darktheme"),a.checked=!0),a&&a.addEventListener("change",(()=>{a.checked?(e.classList.add("darktheme"),localStorage.setItem("theme","dark")):(e.classList.remove("darktheme"),localStorage.setItem("theme","light"))}),{passive:!0})})(),(()=>{let e=document.querySelector(".orglist--header__view"),t=document.querySelector(".orglist__container");if(!t||!e)return;let s=e.querySelector(".orglist--header__list"),a=e.querySelector(".orglist--header__grid"),c=localStorage.getItem("orglist");if(c&&"grid"===c){t.classList.add("gridview");let s=e.querySelector(".active");s&&s.classList.remove("active"),a.classList.add("active")}e.addEventListener("click",(c=>{let l=c.target,r=e.querySelector(".active");r&&r.classList.remove("active"),s.contains(l)?(t.classList.remove("gridview"),s.classList.add("active"),localStorage.setItem("orglist","list")):a.contains(l)&&(t.classList.add("gridview"),a.classList.add("active"),localStorage.setItem("orglist","grid"))}),{passive:!0})})()}();
