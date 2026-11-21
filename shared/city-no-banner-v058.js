/* V058: identical Guangzhou city hierarchy: compact tool row, city identity in prayer row, NO separate city banner. */
(function(){'use strict';
const cfg=window.BY051_PAGE || {};
if(cfg.kind!=='city' || !['thailand','malaysia','hong-kong','macau'].includes(cfg.country))return;
document.body.classList.add('by058-city-no-banner');
const chrome=document.getElementById('by051-chrome');
if(chrome){
 const big=chrome.querySelector('.site-hero img.approved-header');
 if(big)big.remove(); // Remove, not merely hide, the city-only hero artwork.
 const home=chrome.querySelector('.by051-header-home');
 if(home)home.setAttribute('aria-label','العودة إلى الصفحة الرئيسية');
}
// The original Thailand/Malaysia city widgets already include the exact city identity.
// Their hidden legacy header must not reserve a hero-sized block.
if(cfg.country==='thailand'||cfg.country==='malaysia'){
 document.querySelectorAll('.by4-header .by4-banner').forEach(e=>e.remove());
}
// Malaysia islands have their own full-width island photo hero; turn it into a compact identity
// card while keeping its text and original image (never drop location information).
if(cfg.country==='malaysia'){
 document.querySelectorAll('main.wrap>.hero').forEach(e=>e.classList.add('by058-island-identity'));
}
// Remove the unrelated HUGE Hong Kong area image header entirely from the top,
// while preserving its informational text in a collapsible local details section.
if(cfg.country==='hong-kong'){
 const old=document.querySelector('main.wrap>header.head');
 if(old){
  const main=old.parentElement;
  const disclosure=document.createElement('details');disclosure.className='by058-region-details';
  const summary=document.createElement('summary');summary.textContent='معلومات عن المنطقة';
  old.querySelectorAll('img').forEach(img=>img.remove());
  disclosure.append(summary,old);main.append(disclosure);
 }
}
// HK/Macau regions formerly had only prayer/times and an unrelated independent hero.
// Give them a real city identity within the same prayer row, as Guangzhou does.
if(cfg.country==='hong-kong'||cfg.country==='macau'){
 const display={
 'hong-kong-island':['جزيرة هونغ كونغ','Hong Kong Island'],
 'kowloon':['كولون','Kowloon'],
 'new-territories':['الأقاليم الجديدة','New Territories'],
 'central':['سنترال','Central'],
 'causeway-bay':['كوزواي باي','Causeway Bay'],
 'tsim-sha-tsui':['تسيم شا تسوي','Tsim Sha Tsui'],
 'mong-kok':['مونغ كوك','Mong Kok'],
 'sha-tin':['شا تين','Sha Tin'],
 'lantau':['جزيرة لانتاو','Lantau Island'],
 'macau-peninsula':['شبه جزيرة مكاو','Macau Peninsula'],
 'taipa':['تايبا','Taipa'],
 'cotai':['كوتاي','Cotai'],
 'coloane':['كولوان','Coloane']};
 const slug=cfg.placeSlug || location.pathname.split('/').pop().replace(/\.html$/,'');
 const [ar,en]=display[slug] || [cfg.title||'المنطقة',''];
 const wrap=document.querySelector('.by051-live-row .by052-live-widget');
 if(wrap && !wrap.querySelector('.by058-region-identity')){
   const identity=document.createElement('div');identity.className='by058-region-identity';
   const photo=document.createElement('img');photo.src=cfg.banner||'';photo.alt=ar;photo.loading='eager';
   const info=document.createElement('div');
   const sub=document.createElement('small');sub.textContent='دليل المنطقة';
   const title=document.createElement('strong');title.textContent=ar;
   const english=document.createElement('span');english.textContent=en;english.lang='en';
   info.append(sub,title,english);identity.append(photo,info);wrap.insertBefore(identity,wrap.firstChild);
 }
}
})();
