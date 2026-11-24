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
const serviceMap=[['تسجيل الدخول','login.html'],['بطاقة الدخول',cfg.country==='malaysia'?'mdac-guide.html':'tdac-guide.html'],['تطبيقات مهمة','apps.html'],['متجرنا','store.html'],['صرف العملات','currency.html'],['معلومات السفر','travel-info.html'],['جديد التطبيق','index.html#updates']];
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

// V090: Keep each country's native menu labels, order and destinations.
// Only the China-style presentation is shared; original handlers remain active.
(function by090UnifiedSidebar(){
  const target=chrome.querySelector('#by051-sideNav');
  if(!target)return;
  const native=document.querySelector('aside#by4-sideNav, aside.side, aside.home-sidebar');
  const nav=native?.querySelector('.by4-nav-list > nav.nav, nav.nav');
  const nativeItems=nav ? [...nav.children].filter(n=>n.matches('details, a, button'))
     : native?.matches('.home-sidebar') ? [...native.children].filter(n=>n.matches('a.home-side-btn')) : [];
  // Pages without an existing native menu keep their existing China-derived list.
  if(nativeItems.length){
    const signout=target.querySelector('#by051-by38HomeSignout');
    const oldPicker=target.querySelector('.by417-city-picker');
    [...target.children].forEach(n=>{if(n.id!=='by051-mobileClose'&&n!==signout&&n!==oldPicker)n.remove()});
    if(oldPicker)oldPicker.remove();
    let pos=target.querySelector('#by051-mobileClose');
    const insert=(n)=>{pos.insertAdjacentElement('afterend',n);pos=n;};
    let pickerAdded=false;
    const iconSvg=(key)=>{
      const shapes={
        user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
        card:'<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M7 15h5m2-6h3m-3 4h3"/>',
        grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
        bag:'<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
        exchange:'<path d="M3 7h18m-4-4 4 4-4 4M21 17H3m4-4-4 4 4 4"/>',
        palace:'<path d="M3 10h18M12 3l9 7H3l9-7Zm-7 8v8m5-8v8m4-8v8m5-8v8M2 21h20"/>',
        spark:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/>',
        pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>',
        clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
        sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9 6.3 6.3m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1 6.3 17.7M17.7 6.3l1.4-1.4"/>',
        search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
        plane:'<path d="m2 16 20-8-7 14-3-8-10 2ZM12 14l10-6"/>',
        globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>'
      };
      return '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(shapes[key]||shapes.grid)+'</svg>';
    };
    function iconKey(label){
      if(/تسجيل|حساب/.test(label))return 'user';
      if(/بطاقة|دخول/.test(label))return 'card';
      if(/تطبيقات/.test(label))return 'grid';
      if(/متجر/.test(label))return 'bag';
      if(/صرف|عملات/.test(label))return 'exchange';
      if(/معارض/.test(label))return 'palace';
      if(/جديد|عروض/.test(label))return 'spark';
      if(/طقس/.test(label))return 'sun';
      if(/صلاة|قبلة/.test(label))return 'clock';
      if(/بحث/.test(label))return 'search';
      if(/سفر|مواصلات/.test(label))return 'plane';
      if(/آسيا/.test(label))return 'globe';
      if(/منطقة|مدينة|المناطق/.test(label))return 'pin';
      return 'grid';
    }
    function addPicker(item){
      const p=oldPicker?.cloneNode(true)||document.createElement('details');
      p.className='by417-city-picker';p.id='by090-city-picker';p.removeAttribute('open');
      p.innerHTML='';
      const sum=document.createElement('summary');sum.setAttribute('aria-label','فتح قائمة المدن أو المناطق');
      sum.innerHTML='<span class="by417-city-arrow" aria-hidden="true">▾</span><span class="by417-city-title"></span><span class="by417-city-symbol" aria-hidden="true">'+iconSvg('pin')+'</span>';
      sum.querySelector('.by417-city-title').textContent=(item?.querySelector('summary .by4-nav-label')?.textContent||item?.textContent||'اختر المدينة').trim().replace(/\s+/g,' ');
      const inner=document.createElement('nav');inner.className='by417-city-list';
      inner.setAttribute('aria-label','قائمة المدن والمناطق');
      const source=item?.querySelector('.by4-city-options')||item?.querySelector('.by417-city-list');
      if(source){for(const n of source.children){if(n.matches('a,span'))inner.append(n.cloneNode(true));}}
      else {for(const item of places){const a=document.createElement('a');a.href=item.href;a.textContent=item.label;inner.append(a)}}
      p.append(sum,inner);insert(p);pickerAdded=true;
    }
    for(const item of nativeItems){
      const text=(item.querySelector('.by4-nav-label')?.textContent||item.textContent||'').trim().replace(/\s+/g,' ');
      if(item.matches('details.by4-city-dropdown')){addPicker(item);continue;}
      // Country home menus sometimes use a normal link for the region picker.
      if(native.matches('.home-sidebar')&&/اختر المنطقة|اختر المدينة/.test(text)&&!pickerAdded){addPicker(null);continue;}
      const isLink=item.tagName==='A', n=document.createElement(isLink?'a':'button');
      n.className='nav-button by090-menu-link';
      n.setAttribute('dir','rtl');
      if(isLink){n.setAttribute('href',item.getAttribute('href')||'#');
        for(const k of ['target','rel','title','aria-label'])if(item.hasAttribute(k))n.setAttribute(k,item.getAttribute(k));
        // Preserve JavaScript interactions bound to the original page link.
        n.addEventListener('click',e=>{if(item.getAttribute('href')==='#'){e.preventDefault();item.click();}});
      } else {
        n.type='button';n.addEventListener('click',()=>item.click());
        if(item.disabled)n.disabled=true;
      }
      n.innerHTML='<span class="by090-arrow" aria-hidden="true">‹</span><span class="nav-label"></span><span class="nav-emoji" aria-hidden="true">'+iconSvg(iconKey(text))+'</span>';
      n.querySelector('.nav-label').textContent=text;
      insert(n);
    }
    if(!pickerAdded&&oldPicker){insert(oldPicker);}
    // Keep China-style logout only when the actual existing session controls manage it.
    if(signout)signout.remove();
  } else {
    // Area/city templates without a native aside already have the shared menu.
    target.classList.add('by090-china-style');
  }
  target.classList.add('by090-china-sidebar');
})();

// V091: Position existing native menu links only; never invent unavailable destinations.
(function by091OrderMenu(){
 const target=chrome.querySelector('#by051-sideNav');
 if(!target)return;
 const nodes=[...target.children].filter(n=>n.matches('.by417-city-picker,.nav-button,.by090-menu-link,.by41-updates-link'));
 const kind=(node)=>{
   if(node.matches('.by417-city-picker'))return 0;
   const t=(node.textContent||'').replace(/\s+/g,' ').trim();
   if(/تسجيل الدخول|دخول \/ حسابي|حسابي|تسجيل دخول/.test(t))return 1;
   if(/بطاقة.*دخول|بطاقة دخول|بطاقة الدخول/.test(t))return 2;
   if(/تطبيقات مهمة|تطبيقات مهم/.test(t))return 3;
   if(/متجرنا|المتجر/.test(t))return 4;
   if(/صرف العملات|تحويل العملات/.test(t))return 5;
   if(/معارض الصين|معارض/.test(t))return 6;
   if(/جديد الموقع/.test(t))return 7;
   if(/تسجيل الخروج|تسجيل خروج/.test(t))return 8;
   if(/جديد التطبيق/.test(t))return 10;
   return 9; // preserve other existing services, before the last item
 };
 // No cross-country China exhibitions, even if the fallback China template provided one.
 if(cfg.country!=='china'){
   nodes.filter(n=>kind(n)===6).forEach(n=>n.remove());
 }
 // Link the existing Thailand/Malaysia logout control, without implementing another auth flow.
 if(!nodes.some(n=>kind(n)===8)){
   const nativeLogout=document.querySelector('.by4-logout[data-by4-signout]');
   if(nativeLogout && cfg.country!=='china'){
     const b=document.createElement('button');b.type='button';b.className='nav-button by090-menu-link by091-logout';
     b.setAttribute('dir','rtl');b.innerHTML='<span class="by090-arrow" aria-hidden="true">‹</span><span class="nav-label">تسجيل خروج</span><span class="nav-emoji" aria-hidden="true">🚪</span>';
     b.addEventListener('click',()=>nativeLogout.click());
     // Match native logout's disabled/hidden state; no fake logout when no signed-in member.
     const sync=()=>{b.hidden=nativeLogout.hidden||nativeLogout.getAttribute('aria-hidden')==='true';b.disabled=nativeLogout.disabled;};
     sync();
     const ob=new MutationObserver(sync);ob.observe(nativeLogout,{attributes:true,attributeFilter:['hidden','aria-hidden','disabled']});
     target.append(b);nodes.push(b);
   }
 }
 const ordered=nodes.filter(n=>n.parentElement===target).map((n,i)=>({n,i,rank:kind(n)})).sort((a,b)=>a.rank-b.rank||a.i-b.i);
 for(const {n} of ordered)target.append(n);
 target.dataset.by091Order='1';
})();

// V096: enable Thailand What's New in the live unified sidebar only. No other country is modified.
if(cfg.country==='thailand'){
 const sidebar=chrome.querySelector('#by051-sideNav');
 if(sidebar){
   const links=[...sidebar.querySelectorAll('a,button')];
   let changeLink=links.find(n=>/(?:جديد التطبيق|What.s new|อัปเดต)/i.test((n.textContent||'').trim()));
   if(changeLink){
     let a=changeLink;
     if(a.tagName!=='A'){
       a=document.createElement('a');a.className=changeLink.className;
       a.innerHTML=changeLink.innerHTML;changeLink.replaceWith(a);
     }
     a.setAttribute('href','updates.html');
     a.removeAttribute('aria-disabled');a.removeAttribute('title');a.style.opacity='';a.style.cursor='';
   }else{
     const a=document.createElement('a');a.href='updates.html';a.className='nav-button by090-menu-link';a.dir='rtl';
     a.innerHTML='<span class="by090-arrow" aria-hidden="true">‹</span><span class="nav-label">جديد التطبيق</span><span class="nav-emoji" aria-hidden="true">✨</span>';
     sidebar.append(a);
   }
 }
}

// V100: Hong Kong has a login page and working region pages; no other local service pages
// currently exist. Keep approved V091 order, without dead links or old utility buttons.
if(cfg.country==='hong-kong'){
  const side=chrome.querySelector('#by051-sideNav');
  if(side){
    let picker=side.querySelector('.by417-city-picker');
    const close=side.querySelector('#by051-mobileClose');
    // Do not break the chrome's existing hamburger/overlay event handlers.
    if(!picker){
      picker=document.createElement('details');
      picker.className='by417-city-picker';
      const summary=document.createElement('summary');
      const label=document.createElement('span');
      label.className='by417-city-title';
      label.textContent='اختر المنطقة';
      summary.append(label);
      const list=document.createElement('nav');
      list.className='by417-city-list';
      picker.append(summary,list);
    }
    picker.removeAttribute('open');
    const title=picker.querySelector('.by417-city-title');
    if(title)title.textContent='اختر المنطقة';
    let list=picker.querySelector('.by417-city-list');
    if(!list){list=document.createElement('nav');list.className='by417-city-list';picker.append(list);}
    list.replaceChildren();
    for(const place of (cfg.places||[])){
      const a=document.createElement('a');a.href=place.href;a.textContent=place.label;list.append(a);
    }
    const login=document.createElement('a');
    login.className='nav-button by090-menu-link';
    login.href='login.html';login.dir='rtl';
    login.innerHTML='<span class="by090-arrow" aria-hidden="true">‹</span><span class="nav-label">تسجيل الدخول</span><span class="nav-emoji" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></svg></span>';
    side.replaceChildren(...(close?[close]:[]),picker,login);
    side.dataset.by091Order='1';
    side.dataset.by100HongKong='1';
  }
}


// V101: approved Hong Kong & Macau menu; every item has an implemented destination.
if(cfg.country==='hong-kong'||cfg.country==='macau'){
 const side=chrome.querySelector('#by051-sideNav');
 if(side){
  const p=side.querySelector('.by417-city-picker');
  const picker=p||document.createElement('details');picker.className='by417-city-picker';picker.removeAttribute('open');
  picker.innerHTML='<summary><span class="by417-city-arrow">▾</span><span class="by417-city-title">اختر المنطقة</span><span class="by417-city-symbol" aria-hidden="true">📍</span></summary><nav class="by417-city-list"></nav>';
  const list=picker.querySelector('nav');
  const places=cfg.country==='hong-kong'?[
   ['جزيرة هونغ كونغ','hong-kong-island.html'],['كولون','kowloon.html'],['الأقاليم الجديدة','new-territories.html'],['سنترال','central.html'],['كوزواي باي','causeway-bay.html'],['لانتاو','lantau.html'],['مونغ كوك','mong-kok.html'],['شا تين','sha-tin.html'],['تسيم شا تسوي','tsim-sha-tsui.html']
  ]:[['شبه جزيرة مكاو','macau-peninsula.html'],['تايبا','taipa.html'],['كوتاي','cotai.html'],['كولوان','coloane.html']];
  for(const [name,href] of places){const a=document.createElement('a');a.href=href;a.textContent=name;list.append(a);}
  const names=['تسجيل الدخول / حسابي','بطاقة دخول '+(cfg.country==='hong-kong'?'هونغ كونغ':'مكاو'),'تطبيقات مهمة','متجرنا','صرف العملات','تسجيل خروج','معلومات السفر','جديد التطبيق'];
  const hrefs=['login.html','arrival.html','apps.html','store.html','currency.html',null,'travel-info.html','updates.html'];
  const glyphs=['👤','🛂','▦','🛍️','⇄','🚪','✈️','✨'];
  const nodes=[side.querySelector('#by051-mobileClose'),picker].filter(Boolean);
  names.forEach((label,i)=>{
    const el=document.createElement(hrefs[i]?'a':'button');el.className='nav-button by090-menu-link';el.dir='rtl';
    if(hrefs[i])el.href=hrefs[i];else{el.type='button';el.setAttribute('data-by101-logout','1');}
    const arrow=document.createElement('span');arrow.className='by090-arrow';arrow.textContent='‹';arrow.setAttribute('aria-hidden','true');
    const text=document.createElement('span');text.className='nav-label';text.textContent=label;
    const icon=document.createElement('span');icon.className='nav-emoji';icon.textContent=glyphs[i];icon.setAttribute('aria-hidden','true');
    el.append(arrow,text,icon);nodes.push(el);
  });
  side.replaceChildren(...nodes);
  side.dataset.by101Approved='1';
  side.querySelector('[data-by101-logout]').addEventListener('click',async()=>{
    const key='bouyousef_asia_auth_session';let token='';
    try{const session=JSON.parse(localStorage.getItem(key)||'null');token=session?.access_token||session?.accessToken||'';}catch(_){}
    if(token){try{await fetch('https://nzukdiswtjrxitehkkak.supabase.co/auth/v1/logout',{method:'POST',headers:{apikey:'sb_publishable_ZgUs-S8xlCKC62GQFZXpnQ_XwxRqwcO',Authorization:'Bearer '+token}});}catch(_){}}
    localStorage.removeItem(key);sessionStorage.removeItem(key);location.assign('login.html');
  });
 }
}

// no duplicates; this layer deliberately does not alter datasets / search JavaScript.

// V111: Single live sidebar. Some V090/V096 pages contributed a second
// "جديد التطبيق" anchor. Deduplicate only rendered menu items, preserving
// the first functional destination and every native page's underlying content.
(function by111FixSidebar(){
 const menu=chrome.querySelector('#by051-sideNav');
 if(!menu)return;
 const candidates=[...menu.children].filter(el=>el.matches('a,button'));
 const normalized=el=>(el.querySelector('.nav-label')?.textContent||el.textContent||'').replace(/\s+/g,' ').trim();
 const groups=new Map();
 for(const el of candidates){
  const text=normalized(el);
  const key=/جديد التطبيق/.test(text)?'جديد التطبيق':null;
  if(!key)continue;
  const prior=groups.get(key);
  if(!prior){groups.set(key,el);continue;}
  const valid=e=>e.tagName==='A'&&!!e.getAttribute('href')&&!e.hasAttribute('aria-disabled');
  if(!valid(prior)&&valid(el)){prior.remove();groups.set(key,el)}else{el.remove()}
 }
 menu.setAttribute('data-by111-single-sidebar','true');
 const style=document.createElement('style');style.id='by111-sidebar-layout';
 style.textContent=`
 /* Reserve sidebar space ONCE for native body content, without changing cards. */
 @media(min-width:901px){
   body.by051-active{box-sizing:border-box!important;padding-right:220px!important;overflow-x:clip!important}
   body.by051-active>.shell,body.by051-active>.wrap,
   body.by051-active>main,body.by051-active>.home-shell,
   body.by051-active>.content{box-sizing:border-box!important;max-width:100%!important;min-width:0!important;margin-right:0!important}
   body.by051-active>.shell{display:block!important;grid-template-columns:none!important}
   body.by051-active>.shell>main{width:100%!important;max-width:100%!important;min-width:0!important;box-sizing:border-box!important;margin:0!important}
   body.by051-active .by051-chrome #by051-sideNav{position:fixed!important;right:0!important;left:auto!important;width:204px!important;max-width:204px!important;box-sizing:border-box!important}
 }
 @media(max-width:900px){body.by051-active{padding-right:0!important}}
 .by051-chrome #by051-sideNav .by417-city-picker>summary,
 .by051-chrome #by051-sideNav .nav-button,
 .by051-chrome #by051-sideNav .by090-menu-link{box-sizing:border-box!important;min-width:0!important}
 .by051-chrome #by051-sideNav .by417-city-picker .by417-city-title{min-width:0!important;white-space:normal!important}
 .by051-chrome #by051-sideNav .by417-city-picker .by417-city-arrow{flex-shrink:0!important}
 .by051-chrome #by051-sideNav .nav-label{min-width:0!important;overflow-wrap:break-word!important}
 `;
 document.head.append(style);
})();

document.body.insertBefore(chrome,document.body.firstChild);document.body.classList.add('by051-active');
})();


(function(){
 function applyChinaHomeCleanup(){
  var path=(location.pathname||'');
  var inChina=/\/china\/site\//.test(path)||/\bchina\b/.test(path);
  if(!inChina) return;
  var hash=(location.hash||'').trim();
  var isHome=!hash||hash==='#'||hash==='#home'||hash==='#/'||hash==='#top';
  document.body.classList.toggle('by118-china-home', isHome);
 }
 if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',applyChinaHomeCleanup,{once:true});}
 else{applyChinaHomeCleanup();}
 window.addEventListener('hashchange',applyChinaHomeCleanup);
 var style=document.createElement('style');
 style.id='by118-china-home-cleanup';
 style.textContent='body.by118-china-home #by046-actions,body.by118-china-home #gzTopbar{display:none !important;}';
 document.head.appendChild(style);
})();
