/* V113: polished unified navigation strip with richer icons and Snapchat handle. */
(function(){'use strict';
const parts=location.pathname.split('/').filter(Boolean);
const inChina=parts.includes('china')&&parts.includes('site');
const country=inChina?'china':parts.find(p=>['thailand','malaysia','hong-kong','macau'].includes(p))||'';
const isHome=!country && !inChina;
function icon(html){const i=document.createElement('span');i.className='by060-icon';i.setAttribute('aria-hidden','true');i.innerHTML=html;return i;}
function labelBlock(label,sub=''){const w=document.createElement('span');w.className='by060-text';const strong=document.createElement('strong');strong.textContent=label;w.append(strong);if(sub){const small=document.createElement('small');small.textContent=sub;w.append(small);}return w;}
function anchor(iconHtml,label,href,cls='',external=false,sub=''){const a=document.createElement('a');a.className=('by060-link '+cls).trim();a.href=href;if(external){a.target='_blank';a.rel='noopener noreferrer';}a.append(icon(iconHtml),labelBlock(label,sub));return a;}
function shareCurrentPage(){
 const url=window.location.href;
 const host=window.location.hostname;
 if(!/^https?:$/.test(window.location.protocol)||/^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(host)){
  window.alert('افتح النسخة المنشورة على GitHub Pages ثم اضغط مشاركة عبر واتساب؛ رابط الملف المحلي لا يصلح للمشاركة.');
  return;
 }
 const message='شاهد هذه الصفحة في دليل آسيا – بويوسف الصبر:\n'+url;
 const whatsappUrl='https://wa.me/?text='+encodeURIComponent(message);
 const popup=window.open(whatsappUrl,'_blank','noopener,noreferrer');
 if(!popup){window.location.href=whatsappUrl;}
}
function shareButton(){
 const button=document.createElement('button');button.type='button';
 button.className='by060-link by069-share';button.setAttribute('aria-label','إرسال رابط الصفحة عبر واتساب');
 button.append(
  icon('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.2M8.7 13.3l6.6 4.2"/></svg>'),
  labelBlock('مشاركة واتساب')
 );
 button.addEventListener('click',shareCurrentPage);
 return button;
}
/* Home language selector: immediately after the search field, RTL order. */
function homeLanguageControl(){
 const group=document.createElement('div');group.className='by115-language-control';
 group.setAttribute('role','group');group.setAttribute('aria-label','اختيار اللغة / Language / 语言');
 const langs=[['ar','ع','العربية'],['en','E','English'],['zh','中','中文']];
 const dictionary={
  'بحث':['Search','搜索'],
  'مشاركة واتساب':['Share WhatsApp','分享至 WhatsApp'],
  'واتساب':['WhatsApp','WhatsApp'],
  'سناب':['Snapchat','Snapchat'],
  'إنستغرام':['Instagram','Instagram'],
  'الصين':['China','中国'],
  'تايلند':['Thailand','泰国'],
  'ماليزيا':['Malaysia','马来西亚'],
  'هونغ كونغ':['Hong Kong','香港'],
  'مكاو':['Macau','澳门'],
  'خدمات الموقع':['Site services','网站服务'],
  '✨ جديد الموقع':['✨ Site updates','✨ 网站更新'],
  '💱 صرف العملات':['💱 Currency exchange','💱 货币兑换'],
  '🛍️ متجرنا':['🛍️ Our store','🛍️ 我们的商店'],
  'آخر إضافات الموقع في الدول والمدن':['Latest additions across countries and cities','国家和城市的最新更新'],
  'فتح سجل التحديثات':['View all updates','查看所有更新'],
  'فتح صفحة صرف العملات':['Open currency exchange','打开货币兑换'],
  'فتح متجرنا':['Open our store','打开商店'],
  'بويوسف الصبر – دليلك إلى آسيا':['BouYousef – Your guide to Asia','布优素福——您的亚洲指南'],
  'متاح':['Available','可用']
 };
 const placeholders=['ابحث هنا عن الصين، تايلند، ماليزيا، هونغ كونغ، مكاو...','Search China, Thailand, Malaysia, Hong Kong, Macau...','搜索中国、泰国、马来西亚、香港、澳门...'];
 let active='ar';
 function update(code){
  active=code;try{localStorage.setItem('by116-preferred-language',code)}catch(e){}document.documentElement.lang=code;document.documentElement.dir='rtl';
  const index=code==='en'?0:1;
  const main=document.querySelector('main#home');
  const nav=document.getElementById('by060-nav');
  for(const root of [main,nav]){
   if(!root)continue;
   const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
   const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
   for(const node of nodes){
    const original=node.__by115Original??node.nodeValue;
    if(node.__by115Original===undefined)node.__by115Original=original;
    const key=original.trim();const terms=dictionary[key];
    if(!terms)continue;
    node.nodeValue=original.replace(key,code==='ar'?key:terms[index]);
   }
  }
  const search=nav?.querySelector('.by068-search-input');if(search)search.placeholder=placeholders[code==='ar'?0:code==='en'?1:2];
  group.querySelectorAll('button').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.language===code))});
 }
 for(const [code,text,title] of langs){
  const b=document.createElement('button');b.type='button';b.dataset.language=code;b.textContent=text;
  b.setAttribute('aria-label',title);b.title=title;
  b.setAttribute('aria-pressed',String(code==='ar'));
  b.addEventListener('click',()=>update(code));group.append(b);
 }
 try{const saved=localStorage.getItem('by116-preferred-language');if(['ar','en','zh'].includes(saved))setTimeout(()=>update(saved),0)}catch(e){}
 return group;
}
function by145ActiveChinaCity(){
 if(!inChina)return null;
 try{
  if(typeof stateFromHash!=='function'||typeof cities==='undefined')return null;
  const route=stateFromHash();
  if((route.kind==='city'||route.kind==='section')&&Number.isInteger(route.city) && route.city>=0 && route.city<cities.length)
   return {index:route.city,name:cities[route.city].ar};
 }catch(_){/* no active city */}
 return null;
}
function create(){
 const n=document.createElement('nav');n.id='by060-nav';if(inChina)n.classList.add('by142-china-compact');n.dir='rtl';n.setAttribute('aria-label','شريط روابط دليل آسيا');
 const asia=inChina?'../../index.html':(country?'../index.html':'index.html');
 if(inChina){
  // China-only search: use the existing verified China-wide index (all China cities and places).
  const form=document.createElement('form');form.className='by068-search by126-china-search';form.setAttribute('role','search');form.setAttribute('aria-label','البحث داخل غوانزو فقط');
  const field=document.createElement('input');field.type='search';field.className='by068-search-input';field.placeholder='ابحث في أسواق ومطاعم وفنادق غوانزو فقط...';field.setAttribute('aria-label','البحث داخل غوانزو فقط');field.autocomplete='off';
  const go=document.createElement('button');go.type='submit';go.className='by068-search-btn';go.textContent='بحث';
  form.append(field,go);
  form.addEventListener('submit',e=>{
   e.preventDefault();
   const trigger=document.getElementById('by3GlobalSearchTrigger');
   const input=document.getElementById('by3GlobalSearchInput');
   if(!trigger||!input)return;
   const city=by145ActiveChinaCity();
   if(city){window.BY145_SEARCH_CITY_FROM_NAV=city.index;window.BY143_GUANGZHOU_ONLY_FROM_NAV=false;}
   else {window.BY145_SEARCH_CITY_FROM_NAV=null;window.BY143_GUANGZHOU_ONLY_FROM_NAV=true;}
   trigger.click();
   input.value=field.value.trim();
   input.dispatchEvent(new Event('input',{bubbles:true}));
  });
  n.append(form);
 }
 if(isHome){
  const form=document.createElement('form');form.className='by068-search';form.setAttribute('role','search');form.setAttribute('aria-label','البحث في دول ومدن آسيا');
  const text=document.createElement('input');text.type='search';text.className='by068-search-input';text.placeholder='ابحث هنا عن الصين، تايلند، ماليزيا، هونغ كونغ، مكاو...';text.setAttribute('aria-label','ابحث عن دولة أو مدينة أو منطقة');
  const submit=document.createElement('button');submit.type='submit';submit.className='by068-search-btn';submit.textContent='بحث';
  form.append(text,submit);
  form.addEventListener('submit',e=>{e.preventDefault();const q=text.value.trim();if(typeof openSearch==='function'){openSearch();const dialogInput=document.getElementById('searchInput');if(dialogInput){dialogInput.value=q;if(typeof renderSearch==='function')renderSearch();}}});
  n.append(form);
  n.append(homeLanguageControl());
 }
 if(!isHome && !inChina){n.append(anchor('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>','دليل آسيا',asia,'by060-asia'));}
 n.append(shareButton());
 if(country){const home=inChina?'index.html':'index.html';const here=parts.at(-1)||'index.html';if(inChina||here!=='index.html')n.append(anchor('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/></svg>','الرئيسية',home,'by060-home'));}
 if(inChina){const st=document.createElement('button');st.type='button';st.className='by060-link by060-store';st.append(icon('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h15l-1.5 9h-11z"/><path d="M6 7 5 4H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>'),labelBlock('متجرنا'));st.addEventListener('click',()=>{const action=document.querySelector('[data-by2-store-action]');if(action)action.click();else{const section=document.getElementById('by36StorePage');if(section)section.scrollIntoView({behavior:'smooth'});}});n.append(st);} else if(country==='thailand'||country==='malaysia'){n.append(anchor('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h15l-1.5 9h-11z"/><path d="M6 7 5 4H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>','متجرنا','store.html','by060-store'));}
 n.append(anchor('<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.75 13.96c.25.13 1.47.72 1.69.81.23.1.39.15.56-.1.17-.25.66-.81.81-.97.15-.17.29-.19.54-.06.25.13 1.07.39 2.03 1.24.75.67 1.26 1.5 1.41 1.75.14.25.01.38-.11.5-.11.11-.25.29-.37.44-.13.15-.17.25-.25.42-.08.17-.04.31.02.44.06.13.56 1.35.77 1.85.2.48.4.42.56.43l.48.01c.17 0 .44.06.67.31.23.25.88.86.88 2.09 0 1.23-.9 2.42-1.02 2.58-.13.17-.24.25-.49.39-.25.14-1.49.71-3.45.56-1.96-.15-3.98-1.14-6.52-3.64C8.94 16.85 8 14.88 7.85 12.92c-.15-1.96.42-3.2.56-3.45.14-.25.22-.36.39-.49.17-.13 1.35-1.02 2.58-1.02 1.23 0 1.83.65 2.09.88.25.23.31.5.31.67 0 .17.01.33.01.48.01.17-.05.36-.17.56-.11.2-.52 1.28-.72 1.75-.2.48-.4.42-.56.43l-.48.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.58.13.17.24.25.49.39.25.14.87.43 1.43.86z" transform="scale(.6) translate(-4 -4)"/></svg>','واتساب','https://wa.me/96596745446','by060-whatsapp',true));
 n.append(anchor('<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.52 2 2 5.99 2 10.91c0 2.91 1.56 5.5 4 7.13L5 22l4.34-2.23c.84.23 1.73.35 2.66.35 5.48 0 10-3.99 10-8.91S17.48 2 12 2Zm-3.05 9.97c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.33.74-.74.74Zm3.05 0c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.33.74-.74.74Zm3.05 0c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.33.74-.74.74Z"/></svg>','سناب','https://www.snapchat.com/add/bskooota2','by060-snap',true,'bskooota2'));
 n.append(anchor('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>','إنستغرام','https://www.instagram.com/bskooota2/','by060-instagram',true));
 if(!isHome){
 const b=document.createElement('button');b.type='button';b.className='by060-top';
 if(inChina){
  b.setAttribute('aria-label','العودة إلى قائمة مدن الصين');
  b.append(icon('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/></svg>'),labelBlock('مدن الصين'));
  b.addEventListener('click',()=>{
   if(typeof navigate==='function')navigate({kind:'home'});
   else location.hash='#home';
   requestAnimationFrame(()=>document.getElementById('citiesGrid')?.scrollIntoView({behavior:'smooth',block:'start'}));
  });
 }else{
  b.append(icon('<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15 6-6 6 6"/></svg>'),labelBlock('أعلى الصفحة'));
  b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
 }
 n.append(b);
}
 return n;
}
 function place(){let nav=document.getElementById('by060-nav');if(!nav)nav=create();
 if(inChina){
  const city=by145ActiveChinaCity();
  const field=nav.querySelector('.by126-china-search .by068-search-input');
  const form=nav.querySelector('.by126-china-search');
  if(field){
   field.placeholder=city?'ابحث في أسواق ومطاعم وفنادق '+city.name+' فقط...':'ابحث في أسواق ومطاعم وفنادق غوانزو فقط...';
   field.setAttribute('aria-label',city?'البحث داخل '+city.name+' فقط':'البحث داخل غوانزو فقط');
  }
  if(form)form.setAttribute('aria-label',city?'البحث داخل '+city.name+' فقط':'البحث داخل غوانزو فقط');
 }

 let target=null,method='after';
 if(inChina){
  const detail=document.getElementById('cityDetail');const visible=detail && !detail.hidden && getComputedStyle(detail).display!=='none';
  if(visible){target=detail.querySelector('#gzOverview,.gz-overview')||detail; method='after';}
  else {target=document.getElementById('by2WeatherHome')||document.getElementById('globalPrayer')||document.querySelector('.site-hero');method='after';}
 }else{
  const row=document.querySelector('.by051-live-row');
  const prayer=document.querySelector('.by4-prayer,.hk-v032-prayer,.mc-v040-prayer,.by052-live-widget');
  const overview=document.querySelector('.gz-overview');
  target= row && row.getClientRects().length?row:(overview||prayer);
  if(!target && isHome){target=document.querySelector('.hero');}
  if(!target){target=document.querySelector('#by051-chrome,.by051-chrome,.by4-header,.site-hero,header');}
  if(!target){target=document.querySelector('main,.content');method='prepend';}
 }
 if(inChina){
  const top=nav.querySelector('.by060-top');
  const cityDetail=document.getElementById('cityDetail');
  const cityVisible=!!(cityDetail && !cityDetail.hidden && getComputedStyle(cityDetail).display!=='none');
  if(top)top.hidden=!cityVisible;
  const homeLink=nav.querySelector('.by060-home');
  if(homeLink)homeLink.hidden=!cityVisible;
 }
 if(!target||target===nav||target.contains(nav))return;
 if(method==='prepend'){if(nav.parentNode!==target || nav!==target.firstElementChild) target.prepend(nav)}
 else if(nav.previousElementSibling!==target || nav.parentNode!==target.parentNode)target.insertAdjacentElement('afterend',nav);
}
function ready(){place();if(inChina){let scheduled=false;const watch=new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{scheduled=false;place();})}});const d=document.getElementById('cityDetail');if(d)watch.observe(d,{attributes:true,attributeFilter:['hidden','class','style']});const cityTitle=document.getElementById('selectedCityTitle');if(cityTitle)watch.observe(cityTitle,{childList:true,subtree:true,characterData:true});}}
 if(inChina){
  window.addEventListener('hashchange',()=>requestAnimationFrame(place));
  window.addEventListener('popstate',()=>requestAnimationFrame(place));
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();
