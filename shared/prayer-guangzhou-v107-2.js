/* V107.2 – visual headers only. Do not change coordinates or prayer calculations. */
(function(){'use strict';
const conf=window.BY051_PAGE||{};if(!['hong-kong','macau','thailand','malaysia'].includes(conf.country))return;
const regionInfo={
 'central':['سنترال','Central','assets/regions/central.jpg'],
 'causeway-bay':['كوزواي باي','Causeway Bay','assets/regions/causeway-bay.jpg'],
 'hong-kong-island':['جزيرة هونغ كونغ','Hong Kong Island','assets/regions/hong-kong-island-main.png'],
 'kowloon':['كولون','Kowloon','assets/regions/kowloon-main.png'],
 'new-territories':['الأقاليم الجديدة','New Territories','assets/regions/new-territories-main.png'],
 'lantau':['لانتاو','Lantau','assets/regions/lantau.jpg'],
 'mong-kok':['مونغ كوك','Mong Kok','assets/regions/mong-kok.jpg'],
 'sha-tin':['شا تين','Sha Tin','assets/regions/sha-tin.jpg'],
 'tsim-sha-tsui':['تسيم شا تسوي','Tsim Sha Tsui','assets/regions/tsim-sha-tsui.jpg'],
 'macau-peninsula':['شبه جزيرة مكاو','Macau Peninsula','assets/regions/macau-peninsula-main.png'],
 'taipa':['تايبا','Taipa','assets/regions/taipa-main.png'],
 'cotai':['كوتاي','Cotai','assets/regions/cotai-main.png'],
 'coloane':['كولوان','Coloane','assets/regions/coloane-main.png']
};
function img(src,alt){const el=document.createElement('img');el.className='by1072-city-image';el.src=src;el.alt=alt;el.loading='lazy';return el;}
function cityText(label,en){const el=document.createElement('div');el.className='by1072-city-text';const kicker=document.createElement('span');kicker.textContent='دليل المدينة';kicker.className='city-kicker';const title=document.createElement('strong');title.className='by1072-city-title';title.textContent=label;const sub=document.createElement('small');sub.lang='en';sub.textContent=en;el.append(kicker,title,sub);return el;}
function run(){
 if(['hong-kong','macau'].includes(conf.country)){
  if(conf.kind==='country'){
   const panel=document.querySelector('.hk-v032-city,.mc-v040-city');
   const times=document.querySelector('.hk-v032-times,.mc-v040-times');
   if(panel&&!panel.querySelector('.by1072-city-image')){
    const label=conf.country==='hong-kong'?'هونغ كونغ':'مكاو';
    const photo=conf.country==='hong-kong'?'assets/regions/hong-kong-island-main.png':'assets/regions/macau-peninsula-main.png';
    const en=conf.country==='hong-kong'?'Hong Kong':'Macau';
    const wrapper=cityText(label,en);panel.prepend(wrapper);panel.prepend(img(photo,label));
   }
   if(times&&!times.querySelector('.by1072-time-title')){const h=document.createElement('div');h.className='by1072-time-title';h.textContent='🕌 مواقيت الصلاة – '+(conf.country==='hong-kong'?'هونغ كونغ':'مكاو');times.prepend(h)}
  }else{
   const slug=conf.placeSlug||location.pathname.split('/').pop().replace('.html','');
   const info=regionInfo[slug];const panel=document.querySelector('.by052-live-widget .by088-region-city');
   const grid=document.querySelector('.by052-live-widget .by052-prayer-grid');
   if(info&&panel&&!panel.querySelector('.by1072-city-image')){
    const visual=cityText(info[0],info[1]);panel.prepend(visual);panel.prepend(img(info[2],info[0]));
   }
   const times=grid?.querySelector('.by052-times');
   if(times&&!times.querySelector('.by1072-time-title')){
    const h=document.createElement('div');h.className='by1072-time-title';h.textContent='🕌 مواقيت الصلاة – '+(info?info[0]:'المنطقة');times.prepend(h);
   }
   const compass=grid?.querySelector('.by052-qibla');
   if(compass&&!compass.querySelector('.by1072-direction-dial')){
     const degree=Number.parseFloat(compass.querySelector('strong')?.textContent||'0');
     const dial=document.createElement('div');dial.className='by1072-direction-dial';dial.setAttribute('aria-hidden','true');dial.style.setProperty('--by1072-bearing',(Number.isFinite(degree)?degree:0)+'deg');
     const needle=document.createElement('span');needle.className='by1072-direction-needle';needle.textContent='➤';dial.appendChild(needle);
     compass.prepend(dial);
   }
  }
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
