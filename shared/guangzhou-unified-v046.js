/* V046 progressive country/city navigation. No changes to existing search, data, auth or filters. */
(()=>{'use strict';
document.documentElement.classList.add('by046');
const ready=()=>{
 const root=document.body;
 if(!root||document.getElementById('by046-actions'))return;
 const folder=location.pathname.split('/').filter(Boolean).slice(-2,-1)[0]||'';
 const country=['thailand','malaysia','hong-kong','macau'].includes(folder)?folder:'';
 const make=(label,href,klass,external)=>{
   let a=document.createElement('a');a.textContent=label;a.href=href;a.className=klass||'';
   if(external){a.target='_blank';a.rel='noopener noreferrer'}else a.target='_self';return a;
 };
 const bar=document.createElement('nav');bar.id='by046-actions';bar.className='by046-actions';bar.setAttribute('aria-label','روابط وتواصل بويوسف');
 const here=(location.pathname.split('/').pop()||'index.html');
 if(country){bar.appendChild(make('🌏 دليل آسيا','../index.html'));
   if(here!=='index.html')bar.appendChild(make('🏠 الرئيسية','index.html'));
   const storePath=country+'/store.html';
   if(country==='thailand'||country==='malaysia')bar.appendChild(make('🛍️ متجرنا','store.html','by046-store'));
 }
 bar.appendChild(make('🟢 واتساب','https://wa.me/96596745446','by046-social',true));
 bar.appendChild(make('👻 سناب','https://www.snapchat.com/add/bskooota2','by046-social',true));
 bar.appendChild(make('📷 إنستغرام','https://www.instagram.com/bskooota22/','by046-social',true));
 // WeChat remains available only through existing approved QR, never an invented URL.
 const top=document.createElement('button');top.type='button';top.className='by046-top';top.textContent='↑ أعلى الصفحة';top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));bar.appendChild(top);
 const nav=document.querySelector('.asia-v019-navrow,.navrow,.topbar,.top')||document.body.firstElementChild;
 if(nav&&nav.parentNode)nav.insertAdjacentElement('afterend',bar);else root.prepend(bar);
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();
