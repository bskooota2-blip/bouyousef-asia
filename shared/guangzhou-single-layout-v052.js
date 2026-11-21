/* V052: repair giant chrome spacer; single, reusable prayer-weather placement; no dataset deletion. */
(function(){'use strict';
const config=window.BY051_PAGE||{};if(!config.kind)return;
const chrome=document.getElementById('by051-chrome');if(!chrome)return;
const city=config.placeSlug||location.pathname.split('/').pop().replace('.html','');
// Restore correct hierarchy: country title in sidebar and city-specific label in city views.
const picker=chrome.querySelector('.by417-city-title');
if(picker)picker.textContent=config.kind==='country'?'اختر المدينة / المنطقة':'اختر مدينة أخرى';
if(config.country==='hong-kong'&&config.kind==='country'){
 const notice=document.querySelector('.hk-v038-show-notice'),cards=document.getElementById('regions');
 if(notice&&cards){
   const more=document.createElement('details');more.className='by052-local-highlights';
   const title=document.createElement('summary');title.textContent='✨ الفعاليات والعروض المحلية';more.appendChild(title);more.appendChild(notice);
   cards.insertAdjacentElement('afterend',more);
 }
}
const node=document.createElement('section');node.className='by051-live-row';node.setAttribute('aria-label','مواقيت الصلاة والقبلة والطقس');
chrome.insertAdjacentElement('afterend',node);
// Existing interactive widgets are MOVED, not cloned. Their runtime selectors and event handlers remain attached.
let prayer,weather,status;
if(config.country==='hong-kong'||config.country==='macau'){
 if(config.kind==='country'){
   prayer=document.querySelector('.hk-v032-prayer,.mc-v040-prayer');
   weather=document.querySelector('.hk-v032-weather,.mc-v040-weather');
   status=document.querySelector('.hk-v032-status,.mc-v040-status');
 }
}else{
 prayer=document.querySelector('.by4-header .by4-prayer');
 weather=document.querySelector('.by4-header .by4-weather-strip');
}
if(prayer)node.appendChild(prayer);
if(status)node.appendChild(status);
if(weather)node.appendChild(weather);
// City and area pages in Hong Kong and Macau previously lacked both widgets.
const known={
 'hong-kong-island':[22.2819,114.1582,'جزيرة هونغ كونغ'],kowloon:[22.3167,114.1833,'كولون'], 'new-territories':[22.3964,114.1095,'الأقاليم الجديدة'],central:[22.282,114.158,'سنترال'], 'causeway-bay':[22.2802,114.1859,'كوزواي باي'],lantau:[22.2667,113.95,'لانتاو'], 'mong-kok':[22.3193,114.1694,'مونغ كوك'], 'sha-tin':[22.3836,114.1883,'شا تين'], 'tsim-sha-tsui':[22.2988,114.1722,'تسيم شا تسوي'], 'macau-peninsula':[22.1987,113.5439,'شبه جزيرة مكاو'],taipa:[22.1569,113.5610,'تايبا'],cotai:[22.1444,113.563,'كوتاي'],coloane:[22.1176,113.5578,'كولوان']
};
function qibla(lat,lon){const rad=Math.PI/180,d=39.8262*rad-lat*rad,L=(21.4225-lon)*rad;return(Math.atan2(Math.sin(L),Math.cos(lat*rad)*Math.tan(21.4225*rad)-Math.sin(lat*rad)*Math.cos(L))/rad+360)%360}
if(config.kind==='city'&&!prayer&&known[city]){
 const [lat,lon,label]=known[city];
 const wrap=document.createElement('section');wrap.className='by052-live-widget';wrap.dir='rtl';
 const bearing=qibla(lat,lon).toFixed(1);
 wrap.innerHTML=`<div class="by052-prayer-heading">🕌 مواقيت الصلاة – ${label}</div><div class="by052-prayer-grid"><div class="by052-times" aria-live="polite"><span>الفجر<br><b data-t="Fajr">—</b></span><span>الشروق<br><b data-t="Sunrise">—</b></span><span>الظهر<br><b data-t="Dhuhr">—</b></span><span>العصر<br><b data-t="Asr">—</b></span><span>المغرب<br><b data-t="Maghrib">—</b></span><span>العشاء<br><b data-t="Isha">—</b></span></div><div class="by052-qibla">🧭 القبلة<br><strong>${bearing}°</strong><small>من الشمال الجغرافي</small></div></div><div class="by052-weather">🌤️ الطقس – ${label}: <strong>جاري التحديث…</strong> <button type="button">↻ تحديث</button></div><p class="by052-service-note" role="status">جاري تحميل بيانات الصلاة والطقس الفعلية…</p>`;
 node.appendChild(wrap);
 const note=wrap.querySelector('.by052-service-note'),weatherText=wrap.querySelector('.by052-weather strong');
 const live=async()=>{const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),12000);
  try{
   const [r,w]=await Promise.allSettled([
    fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`,{signal:ctrl.signal}).then(r=>{if(!r.ok)throw Error('prayer');return r.json()}),
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`,{signal:ctrl.signal}).then(r=>{if(!r.ok)throw Error('weather');return r.json()})
   ]);
   if(r.status==='fulfilled'&&r.value?.data?.timings){const times=r.value.data.timings;for(const el of wrap.querySelectorAll('[data-t]'))el.textContent=String(times[el.dataset.t]||'—').split(' ')[0];note.textContent='مواقيت الصلاة محسوبة بحسب إحداثيات المنطقة؛ راجع تقويم المسجد المحلي.'}
   else note.textContent='تعذر تحميل مواقيت الصلاة؛ حاول التحديث عند توفر الاتصال.';
   if(w.status==='fulfilled'&&typeof w.value?.current?.temperature_2m==='number')weatherText.textContent=w.value.current.temperature_2m+'°C';else weatherText.textContent='غير متاح حاليًا';
  }catch(e){note.textContent='تعذر الاتصال بخدمة الصلاة والطقس';weatherText.textContent='غير متاح حاليًا';}finally{clearTimeout(timer)}
 };
 wrap.querySelector('button').addEventListener('click',live);live();
}
// Avoid empty regions or huge inherited heights if an asset is missing.
for(const x of chrome.querySelectorAll('.page-shell,.site-hero')){x.style.setProperty('min-height','0','important');x.style.setProperty('height','auto','important')}
})();
