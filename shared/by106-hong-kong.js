/* V106 unified navigation, preserves existing links/order and country stores */
(function(){"use strict";
const REGION="hong-kong", MENU="<details><summary><span class=\"ico\">📍</span>اختر المنطقة<span class=\"arr\">▾</span></summary><nav><a href=\"hong-kong-island.html\">جزيرة هونغ كونغ</a><a href=\"kowloon.html\">كولون</a><a href=\"new-territories.html\">الأقاليم الجديدة</a><a href=\"central.html\">سنترال</a><a href=\"causeway-bay.html\">كوزواي باي</a><a href=\"lantau.html\">لانتاو</a><a href=\"mong-kok.html\">مونغ كوك</a><a href=\"sha-tin.html\">شا تين</a><a href=\"tsim-sha-tsui.html\">تسيم شا تسوي</a></nav></details><a href=\"login.html\"><span aria-hidden=\"true\" class=\"ico\">👤</span><span>تسجيل الدخول / حسابي</span><span aria-hidden=\"true\" class=\"arr\">‹</span></a><a href=\"arrival.html\"><span aria-hidden=\"true\" class=\"ico\">🛂</span><span>بطاقة دخول هونغ كونغ</span><span aria-hidden=\"true\" class=\"arr\">‹</span></a><a href=\"apps.html\"><span aria-hidden=\"true\" class=\"ico\">▦</span><span>تطبيقات مهمة</span><span aria-hidden=\"true\" class=\"arr\">‹</span></a><a href=\"store.html\"><span aria-hidden=\"true\" class=\"ico\">🛍️</span><span>متجرنا</span><span aria-hidden=\"true\" class=\"arr\">‹</span></a><a href=\"currency.html\"><span aria-hidden=\"true\" class=\"ico\">⇄</span><span>صرف العملات</span><span aria-hidden=\"true\" class=\"arr\">‹</span></a><button class=\"is-logout\" data-logout=\"1\" type=\"button\"><span aria-hidden=\"true\" class=\"ico\">🚪</span><span>تسجيل خروج</span><span aria-hidden=\"true\" class=\"arr\">‹</span></button><a href=\"travel-info.html\"><span aria-hidden=\"true\" class=\"ico\">✈️</span><span>معلومات السفر</span><span aria-hidden=\"true\" class=\"arr\">‹</span></a><a href=\"updates.html\"><span aria-hidden=\"true\" class=\"ico\">✨</span><span>جديد التطبيق</span><span aria-hidden=\"true\" class=\"arr\">‹</span></a>", LABEL="هونغ كونغ";
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
