/* V140: China-style weather panel, no new forecast API calls. Original country modules retain their data. */
(()=>{'use strict';
const host=document.querySelector('.by140-weather');if(!host)return;
const track=host.querySelector('.by2-w-track');
const prev=host.querySelector('[data-by140-prev]');
const next=host.querySelector('[data-by140-next]');
function scrollCards(sign){
 const card=track.querySelector('.by2-w-card');if(!card)return;
 const style=getComputedStyle(track);const gap=parseFloat(style.columnGap||style.gap)||8;
 const step=card.getBoundingClientRect().width+gap;
 track.scrollBy({left:sign*step*2,behavior:'smooth'});
}
// RTL: negative scrolling moves visually toward later cards.
next.addEventListener('click',()=>scrollCards(-1));
prev.addEventListener('click',()=>scrollCards(1));
const meanings={0:'صحو',1:'غالبًا مشمس',2:'غائم جزئيًا',3:'غائم',45:'ضباب',48:'ضباب',51:'رذاذ خفيف',53:'رذاذ',55:'رذاذ كثيف',61:'مطر خفيف',63:'مطر',65:'مطر غزير',71:'ثلج خفيف',73:'ثلج',75:'ثلج كثيف',80:'زخات خفيفة',81:'زخات مطر',82:'زخات غزيرة',95:'عواصف رعدية',96:'عواصف رعدية',99:'عواصف رعدية'};
function iconFor(code){if(!Number.isFinite(code))return null;return code>=95?'⛈️':code>=80?'🌦️':code>=71?'🌨️':code>=61?'🌧️':code>=51?'🌦️':code>=45?'🌫️':code>=3?'☁️':code>=2?'⛅':code===1?'🌤️':'☀️'}
function descFor(code){if(!Number.isFinite(code))return 'حالة الطقس';if(meanings[code])return meanings[code];return code>=95?'عواصف رعدية':code>=61?'أمطار محتملة':code>=45?'ضباب':'حالة الطقس'}
function refreshCard(card){
 const source=card.querySelector('[data-by140-source]');if(!source)return;
 const raw=source.textContent.trim();
 const numeric=raw.match(/(-?\d+(?:\.\d+)?)\s*°/);
 const temp=card.querySelector('.by2-w-temp');const icon=card.querySelector('.by2-w-icon');
 const codeValue=Number(source.dataset.weatherCode);
 const code=source.dataset.weatherCode!==undefined&&source.dataset.weatherCode!==''&&Number.isFinite(codeValue)?codeValue:NaN;
 const rawIcon=raw.match(/[☀️⛅⛈🌧🌦🌫🌤🌨☁]+/u);
 icon.textContent=iconFor(code)||rawIcon?.[0]||'⛅';
 temp.textContent=numeric?numeric[1]+'°C':'—';
 const desc=card.querySelector('[data-by140-desc]');if(desc){desc.textContent=numeric?descFor(code):'حالة الطقس غير متاحة';}
}
for(const card of track.querySelectorAll('.by2-w-card')){
 const source=card.querySelector('[data-by140-source]');
 const observer=new MutationObserver(()=>refreshCard(card));
 observer.observe(source,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['data-weather-code']});
 refreshCard(card);
}
})();
