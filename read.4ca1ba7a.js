var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequired7c6=n);new class{addEventListener(){this._el.addEventListener("click",(e=>{const t=e.target.closest(".accordion__header");if(t){if(!this._config.alwaysOpen){const e=this._el.querySelector(".accordion__item_show");e&&e!==t.parentElement&&this.toggle(e)}this.toggle(t.parentElement)}}))}show(e){const t=e.querySelector(".accordion__body");if(t.classList.contains("collapsing")||e.classList.contains("accordion__item_show"))return;t.style.display="block";const s=t.offsetHeight;t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.add("collapsing"),e.classList.add("accordion__item_slidedown"),t.offsetHeight,t.style.height=`${s}px`,window.setTimeout((()=>{t.classList.remove("collapsing"),e.classList.remove("accordion__item_slidedown"),t.classList.add("collapse"),e.classList.add("accordion__item_show"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration)}hide(e){const t=e.querySelector(".accordion__body");!t.classList.contains("collapsing")&&e.classList.contains("accordion__item_show")&&(t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.display="block",t.style.height=0,t.style.overflow="hidden",t.style.transition=`height ${this._config.duration}ms ease`,t.classList.remove("collapse"),e.classList.remove("accordion__item_show"),t.classList.add("collapsing"),window.setTimeout((()=>{t.classList.remove("collapsing"),t.classList.add("collapse"),t.style.display="",t.style.height="",t.style.transition="",t.style.overflow=""}),this._config.duration))}toggle(e){e.classList.contains("accordion__item_show")?this.hide(e):this.show(e)}constructor(e,t){this._el="string"==typeof e?document.querySelector(e):e;this._config=Object.assign({alwaysOpen:!0,duration:350},t),this.addEventListener()}}(".accordion",{alwaysOpen:!1});const o=new class{getJsonFromLocalStorage(e){return localStorage.getItem(e)}dataFromLocalStorage(e){try{return JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}}findCheckedNew(e){let t;return this.newsArr.forEach((s=>{(s.hasOwnProperty("_id")&&s._id===e||s.hasOwnProperty("id")&&s.id===Number(e)||s.hasOwnProperty("slug_name")&&s.slug_name===e)&&(t=s)})),t}getCurrentDate(){const e=new Date;return`${this.addLeadingZero(String(e.getDate()))}/${this.addLeadingZero(String(e.getMonth()+1))}/${String(e.getFullYear())}`}saveToLocalStorage(){localStorage.setItem("alreadyReadNews",JSON.stringify(this.readNews))}leaveUniqueNews(){}addLeadingZero(e){return String(e).padStart(2,"0")}constructor(){this.jsonReadNews=localStorage.getItem("alreadyReadNews"),this.readNews=this.dataFromLocalStorage(this.jsonReadNews)||[],this.newsArr=[],this.checkedNew=null,this.currentItemID=null}};const i=o.getJsonFromLocalStorage("alreadyReadNews"),a=o.dataFromLocalStorage(i),r=document.querySelector(".accordion");null!==a&&function(e){const t=e.map((e=>`<div class="accordion__item">\n  <div class="accordion__header">${e.date}</div>\n  <div class="accordion__body">\n    <ul class="news__list accordion__list">\n    ${function(e){const t=e.map((e=>{let t,s,n;n=e.hasOwnProperty("url")?e.url:e.web_url,s=e.hasOwnProperty("pub_date")?e.pub_date:e.published_date,e.hasOwnProperty("multimedia")&&e.hasOwnProperty("kicker")?t=`${e.multimedia[3].url}`:e.hasOwnProperty("multimedia")?(t=`https://static01.nyt.com/${e.multimedia[3].url}`,s=e.pub_date):e.hasOwnProperty("media")&&(t=e.media[0]["media-metadata"][2].url,s=e.published_date);const o=new Date(s).toISOString().split("T")[0];return`<li class="news__item accordion__news accordion__read">\n        <div class="news__image-box">\n          <img\n            class="news__image"\n            src="${t}"\n            alt=""\n          />\n          <div class="div">\n            <button\n              class="news__favorite-btn"\n              data-value="4"\n              type="button"\n            >\n              Add to favorite\n            </button>\n            <svg class="favorite-btn__icon-add" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 1C2.82592 1 1.33325 2.47733 1.33325 4.3C1.33325 5.77133 1.91659 9.26333 7.65858 12.7933C7.76144 12.8559 7.87952 12.889 7.99992 12.889C8.12032 12.889 8.2384 12.8559 8.34125 12.7933C14.0833 9.26333 14.6666 5.77133 14.6666 4.3C14.6666 2.47733 13.1739 1 11.3333 1C9.49258 1 7.99992 3 7.99992 3C7.99992 3 6.50725 1 4.66659 1Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n              </svg>\n          </div>\n          <h3 class="news__image-heading">${e.section||e.section_name}</h3>\n        </div>\n        <h2 class="news__title">${e.title||e.abstract}\n        </h2>\n        <p class="news__text">${e.abstract}\n        </p>\n        <div class="news__lower-box">\n          <p class="news__date">${o}</p>\n          <a class="news__readmore-link" href="${n}">Read more</a>\n        </div>\n      </li>`})).join("");return t}(e.news)}\n    </ul>\n  </div>\n</div>`)).join("");r.innerHTML=t}(a),n("eg88A"),n("X4ZWf");
//# sourceMappingURL=read.4ca1ba7a.js.map