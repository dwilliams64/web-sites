(()=>{var e={877:(e,t,o)=>{var n=o(570),r=o(171),a=r;a.v1=n,a.v4=r,e.exports=a},327:e=>{for(var t=[],o=0;o<256;++o)t[o]=(o+256).toString(16).substr(1);e.exports=function(e,o){var n=o||0,r=t;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},217:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var o=new Uint8Array(16);e.exports=function(){return t(o),o}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},570:(e,t,o)=>{var n,r,a=o(217),l=o(327),i=0,c=0;e.exports=function(e,t,o){var s=t&&o||0,u=t||[],d=(e=e||{}).node||n,v=void 0!==e.clockseq?e.clockseq:r;if(null==d||null==v){var m=a();null==d&&(d=n=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==v&&(v=r=16383&(m[6]<<8|m[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),y=void 0!==e.nsecs?e.nsecs:c+1,p=f-i+(y-c)/1e4;if(p<0&&void 0===e.clockseq&&(v=v+1&16383),(p<0||f>i)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=f,c=y,r=v;var g=(1e4*(268435455&(f+=122192928e5))+y)%4294967296;u[s++]=g>>>24&255,u[s++]=g>>>16&255,u[s++]=g>>>8&255,u[s++]=255&g;var b=f/4294967296*1e4&268435455;u[s++]=b>>>8&255,u[s++]=255&b,u[s++]=b>>>24&15|16,u[s++]=b>>>16&255,u[s++]=v>>>8|128,u[s++]=255&v;for(var h=0;h<6;++h)u[s+h]=d[h];return t||l(u)}},171:(e,t,o)=>{var n=o(217),r=o(327);e.exports=function(e,t,o){var a=t&&o||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var l=(e=e||{}).random||(e.rng||n)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t)for(var i=0;i<16;++i)t[a+i]=l[i];return t||r(l)}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}(()=>{"use strict";var e=o(877);function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}const n=function o(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,e.v4)(),l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"white";t(this,o),this.title=n,this.body=r,this.id=a,this.color=l};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o;return t=e,o=[{key:"getNotes",value:function(){var e=JSON.parse(localStorage.getItem("notes"));return null===e?[]:e}},{key:"addNote",value:function(e){var t,o=this.getNotes();o=[].concat(function(e){if(Array.isArray(e))return r(e)}(t=o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]),localStorage.setItem("notes",JSON.stringify(o))}},{key:"removeNote",value:function(e){var t=e.dataset.id,o=this.getNotes();o=o.filter((function(e){return e.id!==t})),localStorage.setItem("notes",JSON.stringify(o))}},{key:"updateNote",value:function(e){var t=this.getNotes(),o=document.querySelector(".modal #title").value,n=document.querySelector(".modal #body").value;t=t.reduce((function(t,r){return r.id===e?(r.title=o,r.body=n,t.push(r),t):(t.push(r),t)}),[]),localStorage.setItem("notes",JSON.stringify(t))}}],null&&a(t.prototype,null),o&&a(t,o),e}();function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o;return t=e,o=[{key:"renderNotes",value:function(){var e=l.getNotes();document.querySelector("#notes-area").innerHTML=e.map((function(e){return'<div class="card" data-color="'.concat(e.color,'" data-id="').concat(e.id,'">\n                <h3 class="card__title">').concat(e.title,'</h3>\n                <div class="card__body">').concat(e.body,'</div>\n                <div class="card__options">\n                    <div class="card__color">\n                        <img src="/img/chromatic.png" alt="color picker">\n                    </div>\n                    <button class="btn btn-delete">Delete</button>\n                </div>\n            </div>')})).join("")}},{key:"displayMsg",value:function(e,t){var o=document.querySelector("#message");switch(e){case"add":o.textContent="Note added.";break;case"delete":o.textContent="Note deleted";break;case"update":o.textContent="Note updated";break;case"validation":o.textContent="Please write a note."}"danger"===t?(o.classList.remove("theme-success"),o.classList.add("theme-danger")):(o.classList.remove("theme-danger"),o.classList.add("theme-success")),o.style.visibility="visible",setTimeout((function(){o.style.visibility="hidden"}),3e3)}},{key:"clearForm",value:function(e,t){e.value="",t.value=""}},{key:"openForm",value:function(){var e=document.querySelector("#form-main #title"),t=document.querySelector("#form-buttons-main");e.style.display="block",t.style.display="block"}},{key:"closeForm",value:function(){var e=document.querySelector("#form-main #title"),t=document.querySelector("#form-buttons-main");e.style.display="none",t.style.display="none"}},{key:"openCloseColor",value:function(e){var t=document.querySelector(".color-tooltip"),o=e.getBoundingClientRect();console.log(o);var n=o.left+window.scrollX,r=o.top+window.scrollY;t.style.transform="translate(".concat(n,"px, ").concat(r,"px)"),t.style.display="flex"}},{key:"openModal",value:function(e){var t=e.dataset.id,o=document.querySelector(".modal"),n=document.querySelector(".modal #title"),r=document.querySelector(".modal #body"),a=l.getNotes().find((function(e){return e.id===t})),i=a.title,c=a.body;o.dataset.id=t,n.value=i,r.value=c,o.classList.add("open-modal")}},{key:"closeModal",value:function(){document.querySelector(".modal").classList.remove("open-modal")}}],null&&i(t.prototype,null),o&&i(t,o),e}();var s=document.querySelector("#form-main #title"),u=document.querySelector("#form-main #body");document.addEventListener("DOMContentLoaded",(function(){c.renderNotes()})),document.querySelector("#form-main").addEventListener("click",(function(e){if("body"===e.target.id&&c.openForm(),"close-main"===e.target.id&&(e.preventDefault(),c.closeForm()),"submit-main"===e.target.id)if(e.preventDefault(),function(e){return""!==e.trim()}(u.value)){var t=new n(s.value,u.value);l.addNote(t),c.clearForm(s,u),c.displayMsg("add","success"),c.renderNotes()}else c.displayMsg("validation","danger")})),document.querySelector(".modal").addEventListener("click",(function(e){"close-modal"===e.target.id&&(e.preventDefault(),c.closeModal()),"submit-modal"===e.target.id&&(e.preventDefault(),l.updateNote(e.currentTarget.dataset.id),c.closeModal(),c.displayMsg("update","success"),c.renderNotes())})),document.querySelector("#notes-area").addEventListener("click",(function(e){var t=e.target;return t.matches(".btn-delete")?(l.removeNote(t.closest(".card")),c.displayMsg("delete","success"),void c.renderNotes()):t.matches(".card__color img")?(console.log("change color"),c.openCloseColor(t.closest(".card")),void c.renderNotes()):void c.openModal(t.closest(".card"))}))})()})();
//# sourceMappingURL=bundle.js.map