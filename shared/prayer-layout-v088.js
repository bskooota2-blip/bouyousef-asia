/* V088 – apply a consistent city selector; preserve existing prayer/compass scripts. */
(function(){'use strict';
  const conf=window.BY051_PAGE||{};
  if(!conf.kind)return;
  const pages=['thailand','malaysia','hong-kong','macau'];
  if(!pages.includes(conf.country))return;
  function addPicker(target, label){
    if(!target||target.querySelector('.by088-select'))return;
    const dropdown=document.createElement('select');
    dropdown.className='by088-select';dropdown.setAttribute('aria-label','اختيار المدينة أو المنطقة');
    const current=location.pathname.split('/').pop()||'index.html';
    const add=(name,href)=>{let op=document.createElement('option');op.textContent=name;op.value=href;
      if(href===current)op.selected=true;dropdown.appendChild(op)};
    const mainName=conf.country==='hong-kong'?'هونغ كونغ':conf.country==='macau'?'مكاو':conf.country==='malaysia'?'ماليزيا':'تايلند';
    add(mainName,'index.html');
    (conf.places||[]).forEach(p=>{if(p&&p.label&&p.href&&!dropdown.querySelector('option[value="'+CSS.escape(p.href)+'"]'))add(p.label,p.href)});
    if(current!=='index.html'&&!Array.from(dropdown.options).some(x=>x.value===current)){
      const selected=document.querySelector('#selectedCityTitle')?.textContent?.trim()||label||'المدينة الحالية';
      add(selected,current);
    }
    dropdown.value=current;
    dropdown.addEventListener('change',()=>{if(dropdown.value&&dropdown.value!==current)location.href=dropdown.value});
    const caption=document.createElement('label');caption.className='by088-select-label';caption.textContent='📍 اختيار المدينة / المنطقة';
    target.append(caption,dropdown);
  }
  function apply(){
    // Thailand / Malaysia city overviews already contain the live city, compass and six prayer times.
    const city=document.querySelector('.gz-overview.by4-prayer>.city-banner');
    if(city){
      const title=city.querySelector('h1')?.textContent?.trim()||'';
      addPicker(city,title);
    }
    // Hong Kong / Macau region pages create the prayer section using the common v052 script.
    const region=document.querySelector('.by052-live-widget .by052-prayer-grid');
    if(region&&!region.querySelector('.by088-region-city')){
      const panel=document.createElement('div');panel.className='by088-region-city';
      region.appendChild(panel);addPicker(panel,'');
      const compass=region.querySelector('.by052-qibla');
      if(compass)compass.setAttribute('aria-label','البوصلة واتجاه القبلة');
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
