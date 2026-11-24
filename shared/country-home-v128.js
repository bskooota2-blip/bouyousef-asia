/* V128 - home-only enhancement. Reuses preexisting calculations and DOM IDs. */
(function(){'use strict';
const country=(location.pathname.match(/\/(thailand|malaysia|hong-kong|macau)\/index\.html$/)||[])[1];
if(!country)return;
function boot(){
 document.body.classList.add('by128-country-home');
 const prayer=document.querySelector(country==='thailand'||country==='malaysia'?'.by4-prayer':'#prayer-box');
 const weather=document.querySelector(country==='thailand'||country==='malaysia'?'#by4Weather':'#weather-box');
 if(!prayer||!weather)return;
 prayer.classList.add('by128-smart-prayer');
 const city=prayer.querySelector('.by4-prayer-city,.hk-v032-city,.mc-v040-city');
 const times=prayer.querySelector('.by4-times,.hk-v032-times,.mc-v040-times');
 const qibla=prayer.querySelector('.by4-compass,.hk-v032-compass,.mc-v040-compass');
 if(city){city.classList.add('by128-city');
   // V136: keep the country-home heading authored once in the real country page.
   // Do not prepend a duplicate heading to already populated selector panels.
   // V138: only the approved bold instruction; do not reinsert the old heading.
   if(!city.querySelector(':scope > .by128-help')){
     const sub=document.createElement('span');sub.className='by128-help';sub.textContent='اختر المدينة لعرض المواقيت واتجاه القبلة';
     city.prepend(sub);
   }
   const select=city.querySelector('select');
   // Keep the existing accessible selector label; do not insert a third visible line.
   if(select && !select.hasAttribute('aria-label'))select.setAttribute('aria-label','اختر المدينة لمواقيت الصلاة والقبلة');
 }
 if(times){times.classList.add('by128-times');for(const item of times.children)item.classList.add('by128-time');}
 if(qibla)qibla.classList.add('by128-qibla');
 const status=document.querySelector(country==='thailand'||country==='malaysia'?'#by4-prayer-note':country==='hong-kong'?'#hk-prayer-status':'#mc-prayer-status');
 // Move existing live components, not copies; original selectors and event handlers stay attached.
 if((country==='thailand'||country==='malaysia') && status && status.parentElement===prayer.parentElement && prayer.nextElementSibling!==status){prayer.after(status);}
 // Ensure the original weather section follows prayer/status and remains within the page content.
 if((country==='thailand'||country==='malaysia')&&weather.parentElement!==prayer.parentElement){prayer.parentElement.insertBefore(weather,status?status.nextSibling:prayer.nextSibling);}
 let navPlaced=false;
 function fixNav(){const nav=document.getElementById('by060-nav');if(!nav||!weather.isConnected)return;
  if(nav.previousElementSibling!==weather){weather.insertAdjacentElement('afterend',nav);}
  if(!nav.querySelector('.by128-country-search')){
    const form=document.createElement('form');form.className='by128-country-search';form.role='search';form.setAttribute('aria-label','البحث داخل هذه الدولة');
    const input=document.createElement('input');input.type='search';input.placeholder='ابحث في مدن وأماكن هذه الدولة فقط...';input.setAttribute('aria-label','بحث محلي');
    const btn=document.createElement('button');btn.type='submit';btn.textContent='بحث';form.append(input,btn);
    form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();
     if(country==='thailand'||country==='malaysia'){
       const match=[...document.querySelectorAll('#cities a[href]')].find(a=>{const name=(a.textContent||'').replace(/\s+/g,' ').trim();return q && name.includes(q)});if(match){location.href=match.getAttribute('href');return;}const fab=document.getElementById('by4-search-fab');if(fab)fab.click();const native=document.getElementById('by4-search-query');if(native){native.value=q;native.focus();}
     }else{const native=document.getElementById(country==='hong-kong'?'globalSearch':'q');if(native){native.value=q;native.dispatchEvent(new Event('input',{bubbles:true}));native.scrollIntoView({behavior:'smooth',block:'center'});native.focus();}}
    });
    nav.prepend(form);
  }
  navPlaced=true;
 }
 fixNav();
 if(!navPlaced){const watch=new MutationObserver(()=>{fixNav();if(navPlaced)watch.disconnect();});watch.observe(document.body,{childList:true,subtree:true});}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
