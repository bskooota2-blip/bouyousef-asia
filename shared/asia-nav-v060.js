/* V060: one navigation strip in the same slot as Guangzhou reference. */
(function(){'use strict';
const parts=location.pathname.split('/').filter(Boolean);
const inChina=parts.includes('china')&&parts.includes('site');
const country=inChina?'china':parts.find(p=>['thailand','malaysia','hong-kong','macau'].includes(p))||'';
const isChinaMain=inChina && (parts.at(-1)==='index.html'||!parts.at(-1)?.includes('.'));
function anchor(icon,label,href,cls='',external=false){const a=document.createElement('a');a.className='by060-link '+cls;a.href=href;if(external){a.target='_blank';a.rel='noopener noreferrer'};const i=document.createElement('span');i.className='by060-icon';i.textContent=icon;i.setAttribute('aria-hidden','true');const t=document.createElement('span');t.textContent=label;a.append(i,t);return a;}
// V070: Direct WhatsApp sharing for the current published URL, including hash routes.
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
 // A fallback link for browsers that block new tabs is opened only from the user click.
 if(!popup){window.location.href=whatsappUrl;}
}
function shareButton(){
 const button=document.createElement('button');button.type='button';
 button.className='by060-link by069-share';button.setAttribute('aria-label','إرسال رابط الصفحة عبر واتساب');
 const glyph=document.createElement('span');glyph.className='by060-icon by069-share-icon';
 glyph.setAttribute('aria-hidden','true');
 glyph.innerHTML='<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.2M8.7 13.3l6.6 4.2"/></svg>';
 const label=document.createElement('span');label.textContent='مشاركة واتساب';
 button.append(glyph,label);button.addEventListener('click',shareCurrentPage);
 return button;
}
function create(){const n=document.createElement('nav');n.id='by060-nav';n.dir='rtl';n.setAttribute('aria-label','شريط روابط دليل آسيا');
 const asia=inChina?'../../index.html':(country?'../index.html':'index.html');
 // V068: Home-only compact search in the SAME navbar row; keep the search dialog and its dataset.
 if(!country && !inChina){
  const form=document.createElement('form');form.className='by068-search';form.setAttribute('role','search');form.setAttribute('aria-label','البحث في دول ومدن آسيا');
  const text=document.createElement('input');text.type='search';text.className='by068-search-input';text.placeholder='🔍 ابحث هنا عن الصين، تايلند، ماليزيا، هونغ كونغ، مكاو...';text.setAttribute('aria-label','ابحث عن دولة أو مدينة أو منطقة');
  const submit=document.createElement('button');submit.type='submit';submit.className='by068-search-btn';submit.textContent='بحث';
  form.append(text,submit);
  form.addEventListener('submit',e=>{e.preventDefault();const q=text.value.trim();if(typeof openSearch==='function'){openSearch();const dialogInput=document.getElementById('searchInput');if(dialogInput){dialogInput.value=q;if(typeof renderSearch==='function')renderSearch();}}});
  n.append(form);
 }
 n.append(anchor('🌏','دليل آسيا',asia));
 n.append(shareButton());
 if(country){const home=inChina?'index.html': 'index.html';const here=parts.at(-1)||'index.html';if(inChina||here!=='index.html') n.append(anchor('🏠','الرئيسية',home));}
 // Store links are only created where a store page exists.
 if(inChina){const st=document.createElement('button');st.type='button';st.className='by060-link by060-store';st.innerHTML='<span class="by060-icon" aria-hidden="true">🛍️</span><span>متجرنا</span>';st.addEventListener('click',()=>{const action=document.querySelector('[data-by2-store-action]');if(action)action.click();else{const section=document.getElementById('by36StorePage');if(section)section.scrollIntoView({behavior:'smooth'});}});n.append(st);}
 else if(country==='thailand'||country==='malaysia'){n.append(anchor('🛍️','متجرنا','store.html','by060-store'));}
 n.append(anchor('🟢','واتساب','https://wa.me/96596745446','',true));
 n.append(anchor('👻','سناب','https://www.snapchat.com/add/bskooota2','',true));
 n.append(anchor('📷','إنستغرام','https://www.instagram.com/bskooota22/','',true));
 const b=document.createElement('button');b.type='button';b.className='by060-top';b.innerHTML='<span class="by060-icon" aria-hidden="true">↑</span><span>أعلى الصفحة</span>';b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));n.append(b);
 return n;
}
function place(){let nav=document.getElementById('by060-nav');if(!nav)nav=create();
 let target=null,method='after';
 if(inChina){
  const detail=document.getElementById('cityDetail');const visible=detail && !detail.hidden && getComputedStyle(detail).display!=='none';
  if(visible){target=detail.querySelector('#gzOverview,.gz-overview')||detail; method='after';}
  else {target=document.getElementById('globalPrayer')||document.querySelector('.site-hero');method='after';}
 }else{
  const row=document.querySelector('.by051-live-row');
  const prayer=document.querySelector('.by4-prayer,.hk-v032-prayer,.mc-v040-prayer,.by052-live-widget');
  const overview=document.querySelector('.gz-overview');
  target= row && row.getClientRects().length?row:(overview||prayer);
  if(!target){target=document.querySelector('#by051-chrome,.by051-chrome,.by4-header,.site-hero,header');}
  if(!target){target=document.querySelector('main,.content');method='prepend';}
 }
 if(!target||target===nav||target.contains(nav))return;
 if(method==='prepend'){if(nav.parentNode!==target || nav!==target.firstElementChild) target.prepend(nav)}
 else if(nav.previousElementSibling!==target || nav.parentNode!==target.parentNode)target.insertAdjacentElement('afterend',nav);
}
function ready(){place();if(inChina){let scheduled=false;const watch=new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{scheduled=false;place();})}});const d=document.getElementById('cityDetail');if(d)watch.observe(d,{attributes:true,attributeFilter:['hidden','class','style']});}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();