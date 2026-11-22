/* V106 unified navigation, preserves existing links/order and country stores */
(function(){"use strict";
const REGION="thailand", MENU="<details class=\"by4-city-dropdown\"><summary><span class=\"by4-nav-icon\">📍</span><span class=\"by4-nav-label\">اختر المدينة</span><span class=\"by4-city-arrow\">⌄</span></summary><div class=\"by4-city-options\"><a href=\"bangkok.html\">🇹🇭 بانكوك</a><a href=\"chiangmai.html\">🇹🇭 شيانغ ماي</a><span aria-disabled=\"true\" class=\"by4-city-locked\">🇹🇭 بوكيت<small>قريبًا</small></span><span aria-disabled=\"true\" class=\"by4-city-locked\">🇹🇭 باتايا<small>قريبًا</small></span><span aria-disabled=\"true\" class=\"by4-city-locked\">🇹🇭 كرابي<small>قريبًا</small></span><span aria-disabled=\"true\" class=\"by4-city-locked\">🇹🇭 هوا هين<small>قريبًا</small></span><a href=\"kohsamui.html\">🇹🇭 كوه ساموي</a></div></details><a class=\"nav-button\" href=\"login.html\"><span class=\"by4-nav-icon\">👤</span><span class=\"by4-nav-label\" data-by4-label=\"1\">تسجيل الدخول / حسابي</span></a><a aria-label=\"جديد التطبيق – تحديثات تايلند\" class=\"nav-button\" href=\"updates.html\"><span class=\"by4-nav-icon\">✨</span><span class=\"by4-nav-label\" data-by4-label=\"7\">جديد التطبيق</span></a><a class=\"nav-button\" href=\"tdac-guide.html\"><span class=\"by4-nav-icon\">🛂</span><span class=\"by4-nav-label\" data-by4-label=\"2\">بطاقة دخول تايلند</span></a><a class=\"nav-button\" href=\"apps.html\"><span class=\"by4-nav-icon\">▦</span><span class=\"by4-nav-label\" data-by4-label=\"3\">تطبيقات مهمة</span></a><a class=\"nav-button\" href=\"currency.html\"><span class=\"by4-nav-icon\">⇄</span><span class=\"by4-nav-label\" data-by4-label=\"5\">صرف العملات</span></a><a class=\"nav-button\" href=\"travel-info.html\"><span class=\"by4-nav-icon\">✈️</span><span class=\"by4-nav-label\" data-by4-label=\"6\">معلومات السفر</span></a><a aria-label=\"فتح متجرنا وخدماتنا\" class=\"nav-button\" href=\"store.html\"><span class=\"by4-nav-icon\">🛍️</span><span class=\"by4-nav-label\" data-by4-label=\"4\">متجرنا</span></a>", LABEL="تايلند";
function init(){
 if(document.body.classList.contains('by106-internal'))return;
 document.body.classList.add('by106-internal');
 let side=document.querySelector('#service-nav, .shell > aside.side, aside.side');
 if(side){side.classList.add('by106-sidebar');document.body.appendChild(side);}
 else {
  side=document.createElement('aside');side.className='by106-sidebar';side.setAttribute('aria-label','القائمة الجانبية - '+LABEL);
  side.innerHTML=MENU;document.body.appendChild(side);
 }
 // Existing country nav can contain a close control; keep its event handlers intact.
 let closer=side.querySelector('.by106-menu-close, .by4-menu-close, .mobile-close, .side-close');
 if(closer)closer.classList.add('by106-menu-close');
 if(!closer){closer=document.createElement('button');closer.className='by106-menu-close';closer.type='button';closer.textContent='✕ إغلاق القائمة';side.prepend(closer);}
 closer.addEventListener('click',()=>open(false));
 const toggle=document.createElement('button');toggle.type='button';toggle.className='by106-menu-toggle';toggle.textContent='☰ القائمة';toggle.setAttribute('aria-label','فتح القائمة الجانبية');toggle.setAttribute('aria-expanded','false');document.body.appendChild(toggle);
 function open(yes){document.body.classList.toggle('by106-open',yes);toggle.setAttribute('aria-expanded',String(yes));}
 toggle.addEventListener('click',()=>open(!document.body.classList.contains('by106-open')));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')open(false)});
 side.addEventListener('click',e=>{let a=e.target.closest('a');if(a){let url=new URL(a.href,location.href);if(url.pathname!==location.pathname || (url.hash!==location.hash && url.hash))open(false)}});
 // Existing mobile-menu's handlers are kept, but V106 uses its own menu toggle.
 const current=location.pathname.split('/').pop() || 'index.html';
 side.querySelectorAll('a[href]').forEach(a=>{if(a.getAttribute('href').split('#')[0].split('?')[0]===current)a.setAttribute('aria-current','page')});
 const links=[['🏠 الرئيسية - '+LABEL,'index.html'],['🌏 بوابة آسيا','../index.html']];
 function nav(position){const n=document.createElement('nav');n.className='by106-return by106-'+position;n.setAttribute('aria-label','أزرار العودة');links.forEach(([t,h])=>{let a=document.createElement('a');a.href=h;a.textContent=t;n.appendChild(a)});return n;}
 const top=nav('top');const bottom=nav('bottom');
 const first=document.querySelector('.layout, .shell, #by36StorePage, main, .page-wrap, .wrap, section, header');
 if(first && first.parentNode && first.parentNode!==document.head)first.parentNode.insertBefore(top,first);else document.body.prepend(top);
 document.body.appendChild(bottom);
 // Only textual breadcrumb markers, never brand headers or banners.
 document.querySelectorAll('.breadcrumb, .breadcrumbs, [aria-label="مسار التنقل"]').forEach(el=>{
  if(el.querySelector('a,button'))return;
  el.childNodes.forEach(node=>{if(node.nodeType===3)node.textContent=node.textContent.replace(/^\s*بويوسف\s*[←›>\-–|]\s*/,'دليل '+LABEL+' ← ')});
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
