
/* V107.3 – visual city/qibla/prayer cards modeled after Guangzhou. */
(function(){
  'use strict';
  const conf = window.BY051_PAGE || {};
  const regionInfo = {
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
  function makeVisual(ar,en,src){
    const wrap=document.createElement('div');wrap.className='by1073-city-visual';
    const img=document.createElement('img');img.className='by1073-city-image';img.src=src;img.alt=ar;img.loading='lazy';
    const copy=document.createElement('div');copy.className='by1073-city-copy';
    const kicker=document.createElement('span');kicker.className='by1073-city-kicker';kicker.textContent='دليل المدينة';
    const title=document.createElement('strong');title.className='by1073-city-title';title.textContent=ar;
    const sub=document.createElement('small');sub.lang='en';sub.textContent=en;
    copy.append(kicker,title,sub);wrap.append(img,copy);return wrap;
  }
  function ensureTimeTitle(container, text){
    if(container && !container.querySelector('.by1073-time-title')){
      const h=document.createElement('div');h.className='by1073-time-title';h.textContent='🕌 مواقيت الصلاة – '+text;container.prepend(h);
    }
  }
  function countryOverview(){
    if(conf.country==='hong-kong'){
      const panel=document.querySelector('.hk-v032-city');
      if(panel && !panel.querySelector('.by1073-city-visual')) panel.prepend(makeVisual('هونغ كونغ','Hong Kong','assets/regions/hong-kong-island-main.png'));
    }
    if(conf.country==='macau'){
      const panel=document.querySelector('.mc-v040-city');
      if(panel && !panel.querySelector('.by1073-city-visual')) panel.prepend(makeVisual('مكاو','Macau','assets/regions/macau-peninsula-main.png'));
    }
  }
  function ensureRegionQibla(compass){
    if(!compass || compass.querySelector('.by1073-direction-dial')) return;
    const title=document.createElement('div');title.className='by1073-qibla-title';title.textContent='القبلة';
    const degreeEl=compass.querySelector('strong');
    const deg=Number.parseFloat((degreeEl?.textContent||'').replace(/[^0-9.\-]/g,''));
    const dial=document.createElement('div');dial.className='by1073-direction-dial';dial.style.setProperty('--by1073-bearing', (Number.isFinite(deg)?deg:0)+'deg');
    const needle=document.createElement('span');needle.className='by1073-direction-needle';needle.textContent='➤';dial.appendChild(needle);
    compass.prepend(title);compass.prepend(dial);
    if(!compass.querySelector('small')){const s=document.createElement('small');s.textContent='اتجاه جغرافي محسوب من الشمال';compass.append(s);}
  }
  function regionPage(){
    const slug = conf.placeSlug || location.pathname.split('/').pop().replace('.html','');
    const info = regionInfo[slug];
    if(!info) return;
    const apply=()=>{
      const panel=document.querySelector('.by052-live-widget .by088-region-city');
      const grid=document.querySelector('.by052-live-widget .by052-prayer-grid');
      if(panel && !panel.querySelector('.by1073-city-visual')) panel.prepend(makeVisual(info[0],info[1],info[2]));
      const times=grid?.querySelector('.by052-times');
      ensureTimeTitle(times, info[0]);
      ensureRegionQibla(grid?.querySelector('.by052-qibla'));
    };
    apply();
    const mo=new MutationObserver(()=>apply());
    mo.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(()=>mo.disconnect(),8000);
  }
  function run(){
    if(['hong-kong','macau'].includes(conf.country)){
      if(conf.kind==='country') countryOverview();
      else regionPage();
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();
