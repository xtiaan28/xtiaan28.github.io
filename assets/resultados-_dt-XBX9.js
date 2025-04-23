import"./modulepreload-polyfill-B5Qt9EMX.js";function c(t){let e="";const r=document.getElementById("tables-container");switch(r.innerHTML=`
        <div class="w-full h-96 flex items-center justify-center">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-soccer-primary"></div>
        </div>
    `,t){case"honor":e="https://copafacil-web.web.app/-lkhr3@4h0m/embedded/embedded/match";break;case"reserva":e="https://copafacil-web.web.app/-lkhr3@ls8qd/embedded/embedded/match";break;case"2da-adulto":e="https://copafacil-web.web.app/-lkhr3@v6s2x/embedded/embedded/match";break;case"senior":e="https://copafacil-web.web.app/-lkhr3@61llc/embedded/embedded/match";break;case"super-seniors":e="https://copafacil-web.web.app/-lkhr3@4ecpf/embedded/embedded/match";break;case"femenino":e="https://copafacil-web.web.app/-lkhr3@ad8v/embedded/embedded/match";break}const d=document.getElementById("categorySelect");d&&(d.value=t),n(t),setTimeout(()=>{r.innerHTML=`
            <div class="w-full h-[80vh] relative">
                <iframe 
                    id="classification-iframe"
                    src="${e}" 
                    class="w-full h-full border-0"
                    loading="lazy"
                ></iframe>
            </div>
        `;const a=document.getElementById("classification-iframe");a.onload=function(){try{new ResizeObserver(s=>{const i=s[0].contentRect.height;a.style.height=Math.max(600,i+50)+"px"}).observe(a.contentWindow.document.body)}catch(o){console.error("Error al observar el iframe:",o)}}},100)}function n(t){document.querySelectorAll(".category-tab").forEach(e=>{e.dataset.category===t?(e.classList.add("active-tab","bg-gray-700","text-white","font-bold","border-b-2","border-soccer-primary"),e.classList.remove("text-gray-300","hover:bg-gray-600")):(e.classList.remove("active-tab","bg-gray-700","text-white","font-bold","border-b-2","border-soccer-primary"),e.classList.add("text-gray-300","hover:bg-gray-600"))})}function l(){document.querySelectorAll(".category-tab").forEach(e=>{e.addEventListener("click",function(){const r=this.dataset.category;c(r)})});const t=document.getElementById("categorySelect");t&&t.addEventListener("change",function(){const e=this.value;c(e)})}document.addEventListener("DOMContentLoaded",()=>{l(),c("honor")});
