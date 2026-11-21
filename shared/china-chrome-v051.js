/* V051: reusable DOM cloned from actual BouYousef2 V041.25 China index. */
(function(){'use strict';
const cfg=window.BY051_PAGE||{};if(!cfg.kind)return;
const holder=document.createElement('div');holder.innerHTML="<div class=\"by051-chrome\" id=\"by051-chrome\"><div class=\"shade\" id=\"by051-shade\"></div><aside aria-label=\"الأقسام الأساسية\" class=\"sidebar\" id=\"by051-sideNav\"><button aria-label=\"إغلاق القائمة\" class=\"mobile-close\" data-i18n=\"menuClose\" id=\"by051-mobileClose\" type=\"button\">✕ إغلاق</button><details class=\"by417-city-picker\" dir=\"rtl\" id=\"by051-by417CityPicker\"><summary aria-label=\"فتح قائمة المدن\"><span aria-hidden=\"true\" class=\"by417-city-symbol\"><svg fill=\"none\" height=\"23\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\" viewbox=\"0 0 24 24\" width=\"23\"><path d=\"M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z\"></path><circle cx=\"12\" cy=\"10\" r=\"2.6\"></circle></svg></span><span class=\"by417-city-title\">اختر المدينة</span><span aria-hidden=\"true\" class=\"by417-city-arrow\">▾</span></summary><nav aria-label=\"مدن الصين\" class=\"by417-city-list\"></nav></details>\n<button class=\"nav-button\" type=\"button\"><span class=\"nav-emoji\"><svg aria-hidden=\"true\" fill=\"none\" height=\"22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" width=\"22\"><circle cx=\"12\" cy=\"8\" r=\"4\"></circle><path d=\"M4 21v-2a8 8 0 0 1 16 0v2\"></path></svg></span><span class=\"nav-label\" data-i18n=\"nav_login\" id=\"by051-by33SidebarLoginLabel\">تسجيل الدخول</span></button>\n<button class=\"nav-button\" type=\"button\"><span class=\"nav-emoji\"><svg aria-hidden=\"true\" fill=\"none\" height=\"22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" width=\"22\"><rect height=\"18\" rx=\"2\" width=\"16\" x=\"4\" y=\"3\"></rect><circle cx=\"9\" cy=\"10\" r=\"2\"></circle><path d=\"M7 15h5m2-6h3m-3 4h3m-3 4h3\"></path></svg></span><span class=\"nav-label\" data-i18n=\"nav_arrival\">بطاقة دخول الصين</span></button>\n<button class=\"nav-button\" type=\"button\"><span class=\"nav-emoji\"><svg aria-hidden=\"true\" fill=\"none\" height=\"22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" width=\"22\"><rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"3\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"3\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"14\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"14\"></rect></svg></span><span class=\"nav-label\" data-i18n=\"nav_apps\">تطبيقات مهمة</span></button>\n<button aria-controls=\"by051-by36StorePage\" class=\"nav-button\" title=\"متجرنا – فتح بوابة الخدمات الأربع\" type=\"button\"><span class=\"nav-emoji\"><svg aria-hidden=\"true\" fill=\"none\" height=\"22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" width=\"22\"><path d=\"M5 8h14l1 13H4L5 8Z\"></path><path d=\"M9 9V6a3 3 0 0 1 6 0v3\"></path></svg></span><span class=\"nav-label\" data-i18n=\"nav_store\">متجرنا</span></button>\n<button class=\"nav-button\" type=\"button\"><span class=\"nav-emoji\"><svg aria-hidden=\"true\" fill=\"none\" height=\"22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" width=\"22\"><path d=\"M3 7h18m-4-4 4 4-4 4M21 17H3m4-4-4 4 4 4\"></path></svg></span><span class=\"nav-label\" data-i18n=\"nav_exchange\">صرف العملات</span></button>\n<button class=\"nav-button\" type=\"button\"><span class=\"nav-emoji\"><svg aria-hidden=\"true\" fill=\"none\" height=\"22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" width=\"22\"><path d=\"M3 10h18M12 3l9 7H3l9-7Zm-7 8v8m5-8v8m4-8v8m5-8v8M2 21h20\"></path></svg></span><span class=\"nav-label\" data-i18n=\"nav_exhibitions\">معارض الصين</span></button>\n<a aria-label=\"فتح جديد التطبيق\" class=\"by41-updates-link\"><span aria-hidden=\"true\" class=\"nav-emoji\"><svg aria-hidden=\"true\" fill=\"none\" height=\"22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.8\" viewbox=\"0 0 24 24\" width=\"22\"><path d=\"m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z\"></path></svg></span><span class=\"nav-label\" data-i18n=\"nav_updates\">جديد التطبيق</span></a>\n<button aria-label=\"تسجيل الخروج من الحساب\" class=\"nav-button by41-sidebar-signout\" hidden=\"\" id=\"by051-by38HomeSignout\" type=\"button\"><span aria-hidden=\"true\" class=\"nav-emoji\">🚪</span><span class=\"nav-label\">تسجيل الخروج</span></button></aside><div class=\"page-shell by051-page-shell\"><header aria-label=\"ترويسة بويوسف الصبر\" class=\"site-hero\">\n<div aria-label=\"أدوات الموقع\" class=\"header-tools\" role=\"group\">\n<div class=\"header-actions\"><label class=\"lang-control\"><span data-i18n=\"language\">اللغة</span><select aria-label=\"اختيار لغة الموقع\"><option value=\"ar\">العربية</option><option value=\"en\">English</option><option value=\"zh\">简体中文</option></select></label></div>\n<button aria-controls=\"by051-sideNav\" aria-expanded=\"false\" class=\"mobile-menu\" data-i18n=\"menuOpen\" id=\"by051-mobileMenu\" type=\"button\">☰ القائمة</button>\n</div>\n<img alt=\"واجهة الدليل – تصميم الصين الموحد\" class=\"approved-header by41-compact-header\" height=\"424\" src=\"__BY051_BANNER__\" width=\"2452\"/>\n\n\n</header></div></div>";
const chrome=holder.firstElementChild;
const prefix=cfg.countryRoot||'./';
const img=chrome.querySelector('img.approved-header');if(img){img.src=prefix+(cfg.banner||'../assets/asia-banner.png');img.alt='دليل '+(cfg.title||'آسيا');}
const side=chrome.querySelector('#by051-sideNav'),list=chrome.querySelector('.by417-city-list'),picker=chrome.querySelector('.by417-city-picker');
const oldLinks=[...document.querySelectorAll('aside a[href], .side a[href]')].filter(a=>a.getAttribute('href')!=='#');
let places=(cfg.places||[]);
if(!places.length){places=oldLinks.filter(a=>!/تسجيل|تطبيقات|صرف|معلومات|متجر|عودة|آسيا|دخول|خروج|تحديث|الصلاة|الطقس/.test(a.textContent)).map(a=>({label:a.textContent.trim(),href:a.getAttribute('href')}))}
if(list){list.replaceChildren();for(const p of places){const a=document.createElement('a');a.href=p.href;a.textContent=p.label;list.append(a)}}
if(picker){const label=picker.querySelector('.by417-city-title');if(label)label.textContent=cfg.kind==='country'?'اختر المدينة / المنطقة':'اختر مدينة أخرى'}
// Preserve actual live existing service routes by composing native anchor links.
const serviceMap=[['تسجيل الدخول','login.html'],['بطاقة الدخول','tdac-guide.html'],['تطبيقات مهمة','apps.html'],['متجرنا','store.html'],['صرف العملات','currency.html'],['معلومات السفر','travel-info.html'],['جديد التطبيق','index.html#updates']];
const special=[...side.querySelectorAll('.nav-button, .by41-updates-link')];
for(let i=0;i<special.length;i++){
 const el=special[i];if(i>=serviceMap.length){el.remove();continue;}
 const [label,fallback]=serviceMap[i];let old=oldLinks.find(a=>a.textContent.includes(label.slice(0,5)));
 const href=old?.getAttribute('href')||(cfg.kind==='city'&&label==='جديد التطبيق'?'index.html#updates':fallback);
 const available=!!old || label==='تسجيل الدخول' || (cfg.availableServices||[]).includes(fallback);
 const a=document.createElement('a');a.className=el.className;if(available){a.href=href}else{a.setAttribute('aria-disabled','true');a.setAttribute('title','الخدمة غير متاحة في هذا الدليل');a.style.opacity='.55';a.style.cursor='not-allowed'}
 const icon=el.querySelector('.nav-emoji');if(icon)a.append(icon.cloneNode(true));
 const span=document.createElement('span');span.className='nav-label';span.textContent=label;a.append(span);el.replaceWith(a);
}
// Present country cards with the *actual* original China city-card structure without deleting existing content.
if(cfg.kind==='country'){
 const grid=document.querySelector('#cities .cities, #regions');
 if(grid){
  grid.classList.add('by051-country-cards');
  for(const a of grid.querySelectorAll(':scope > a[href]')){
   a.classList.add('by051-country-card','city-card');
   let text=a.querySelector('.city-text, .region-copy');
   if(!text){text=document.createElement('span');let title=a.querySelector('h2,strong'),sub=a.querySelector('small');if(title)text.append(title);if(sub)text.append(sub);a.append(text)}
   text.classList.add('by051-country-text','city-text');
  }
 }
}
const home=document.createElement('a');home.className='by051-header-home';home.href=cfg.kind==='country'?'../index.html':'index.html';home.textContent='⌂ العودة إلى الصفحة الرئيسية';
chrome.querySelector('.site-hero').append(home);
// Simplify dead China-only controls: active search remains the original page search, preserving data.
for(const e of chrome.querySelectorAll('.by41-wechat')){e.addEventListener('click',()=>{let el=document.querySelector('[data-by41-wechat], .wechat-link');if(el&&!chrome.contains(el))el.click();else alert('WeChat: abdullah alsaber')})}
const close=()=>{chrome.classList.remove('by051-open');chrome.querySelector('.sidebar')?.classList.remove('open')};
chrome.querySelector('#by051-mobileMenu')?.addEventListener('click',()=>chrome.classList.toggle('by051-open'));
chrome.querySelector('#by051-mobileClose')?.addEventListener('click',close);
chrome.querySelector('#by051-shade')?.addEventListener('click',close);
const lang=chrome.querySelector('.lang-control');if(lang)lang.remove();
// Keep original LIVE prayer and weather widgets, but use the precise China order: prayer then weather.
for(const holder of document.querySelectorAll('.by4-header')){
 const prayer=holder.querySelector(':scope > .by4-prayer');
 const weather=holder.querySelector(':scope > .by4-weather-strip');
 if(prayer&&weather&&prayer.compareDocumentPosition(weather)&Node.DOCUMENT_POSITION_PRECEDING){holder.insertBefore(prayer,weather)}
}
// no duplicates; this layer deliberately does not alter datasets / search JavaScript.
document.body.insertBefore(chrome,document.body.firstChild);document.body.classList.add('by051-active');
})();
