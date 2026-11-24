/* V147: Malaysia city-only Guangzhou-style nav adaptation; preserves original search engine/data. */
(function(){'use strict';
const cityNames={"kualalumpur": "كوالالمبور", "putrajaya": "بوتراجايا", "melaka": "ملقا", "ipoh": "إيبوه", "johorbahru": "جوهور باهرو"};
const slug=location.pathname.split('/').pop().replace(/\.html$/,'');
if(!Object.prototype.hasOwnProperty.call(cityNames,slug))return;
function init(){
 const nav=document.getElementById('by060-nav');const localForm=document.getElementById('by4-local-search');const localInput=document.getElementById('by4-local-query');
 if(!nav||!localForm||!localInput||nav.querySelector('.by147-search'))return;
 const form=document.createElement('form');form.className='by147-search';form.setAttribute('role','search');form.setAttribute('aria-label','البحث داخل '+cityNames[slug]+' فقط');
 const input=document.createElement('input');input.type='search';input.autocomplete='off';input.placeholder='ابحث في أماكن '+cityNames[slug]+' فقط...';input.setAttribute('aria-label',input.placeholder);
 const go=document.createElement('button');go.type='submit';go.textContent='بحث';form.append(input,go);
 function search(doScroll){localInput.value=input.value;localInput.dispatchEvent(new Event('input',{bubbles:true}));if(doScroll)localForm.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));}
 input.addEventListener('input',()=>search(false));form.addEventListener('submit',e=>{e.preventDefault();search(true)});
 nav.prepend(form);
 const top=nav.querySelector('.by060-top');if(top){
  const link=document.createElement('a');link.className='by060-link by147-cities';link.href='index.html#cities';link.textContent='📍 مدن ماليزيا';link.setAttribute('aria-label','العودة إلى قائمة مدن ماليزيا');top.replaceWith(link);
 }
 // This strip is for local Thailand city navigation; no separate Asia-back button.
 const asia=nav.querySelector('.by060-asia');if(asia)asia.remove();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
