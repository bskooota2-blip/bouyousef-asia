/* V062: consistent vector filter icons without changing filter behavior. */
(()=>{
const paths={
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 store:'<path d="M3 10h18l-2-6H5l-2 6Z"/><path d="M5 10v11h14V10M9 21v-7h6v7"/>',
 building:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 21v-3h4v3"/>',
 utensils:'<path d="M4 3v7a3 3 0 0 0 6 0V3M7 3v18M16 3c-3 4-3 8 0 10h3V3h-3ZM19 13v8"/>',
 coffee:'<path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8ZM17 9h2a3 3 0 0 1 0 6h-2M7 3v2M12 3v2"/>',
 bed:'<path d="M3 21V7m18 14V7M3 17h18M5 11h14a2 2 0 0 1 2 2v4H3v-4a2 2 0 0 1 2-2ZM7 8h4v3H7z"/>',
 train:'<rect x="5" y="3" width="14" height="16" rx="4"/><path d="M8 7h8M8 13h3m2 0h3M8 19l-2 3m10-3 2 3"/>',
 mosque:'<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6M2 11V6m20 5V6M10 4l2-2 2 2"/>',
 landmark:'<path d="m3 9 9-6 9 6M4 9h16M6 9v9m4-9v9m4-9v9m4-9v9M3 21h18M4 18h16"/>',
 star:'<path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3Z"/>',
 heart:'<path d="M20.8 5.2a5.4 5.4 0 0 0-7.6 0L12 6.4l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.2a5.4 5.4 0 0 0 0-7.6Z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15"/>'
};
function pick(cat){
 if(!cat || cat==='all'||cat==='الكل')return 'grid';
 if(/المفضل/.test(cat))return 'heart';
 if(/العروض|الإضاءة|فعاليات/.test(cat))return 'star';
 if(/أسواق|شوارع/.test(cat))return 'store';
 if(/مجمعات|تجارية/.test(cat))return 'building';
 if(/مطاعم/.test(cat))return 'utensils';
 if(/كافيهات|مقاهي/.test(cat))return 'coffee';
 if(/فنادق/.test(cat))return 'bed';
 if(/مواصلات|مترو/.test(cat))return 'train';
 if(/مساجد/.test(cat))return 'mosque';
 if(/إطلالات/.test(cat))return 'sun';
 if(/سياحة|معالم/.test(cat))return 'landmark';
 return 'map';
}
function setup(){
 document.querySelectorAll('body.by061-region .by061-region-main .filters button').forEach(btn=>{
   if(btn.querySelector('.by062-filter-icon'))return;
   const t=Array.from(btn.childNodes).find(n=>n.nodeType===3 && n.textContent.trim());
   if(!t)return;
   const cat=btn.getAttribute('data-cat')||t.textContent;
   // Remove only the leading pictogram; keep the Arabic label, counts, and all event bindings.
   t.textContent=t.textContent.replace(/^[\s\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D]+/u,'').trimStart();
   const icon=document.createElement('span');icon.className='by062-filter-icon';icon.setAttribute('aria-hidden','true');
   icon.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+paths[pick(cat)]+'</svg>';
   btn.insertBefore(icon,btn.firstChild);
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();
