/* V147 local region/island navigation, never modifies source datasets or shared code. */
(function(){'use strict';
const country=document.body.dataset.by147Country;
if(!country)return;
const name=document.body.dataset.by147Name||document.querySelector('h1')?.textContent||'المدينة';
const isIsland=country==='malaysia';
function start(){
 const nav=document.getElementById('by060-nav');
 if(!nav){setTimeout(start,120);return;}
 if(nav.querySelector('.by147-search'))return;
 const original=isIsland?null:document.getElementById('q');
 const form=document.createElement('form');form.className='by147-search';form.setAttribute('role','search');form.setAttribute('aria-label','البحث داخل '+name+' فقط');
 const input=document.createElement('input');input.type='search';input.autocomplete='off';input.placeholder='ابحث في أماكن '+name+' فقط...';input.setAttribute('aria-label',input.placeholder);
 const go=document.createElement('button');go.type='submit';go.textContent='بحث';form.append(input,go);
 function sync(){
  if(original){original.value=input.value;original.dispatchEvent(new Event('input',{bubbles:true}));original.dispatchEvent(new Event('change',{bubbles:true}));original.dispatchEvent(new KeyboardEvent('keyup',{bubbles:true,key:'a'}));}
  else{
   const query=input.value.trim().toLocaleLowerCase();
   document.querySelectorAll('.directory-group').forEach(group=>{
    const candidates=group.querySelectorAll('.place,.place-card,.location-card,.directory-item,.place-item,.spot-card,.item-card,article');
    candidates.forEach(e=>{e.classList.toggle('by147-nomatch',Boolean(query)&&!e.textContent.toLocaleLowerCase().includes(query));});
    // If a filtered island section uses different markup, search its individual record cards as a fallback.
   });
  }
 }
 input.addEventListener('input',sync);
 form.addEventListener('submit',e=>{e.preventDefault();sync();(isIsland?document.querySelector('.directory-group'):original?.closest('section'))?.scrollIntoView({behavior:'smooth',block:'start'});});
 nav.prepend(form);
 const top=nav.querySelector('.by060-top');if(top){const link=document.createElement('a');link.className='by060-link by147-cities';link.href=isIsland?'islands.html':'index.html#cities';link.textContent=isIsland?'🏝️ جزر ماليزيا':(country==='hong-kong'?'📍 مناطق هونغ كونغ':'📍 مناطق مكاو');top.replaceWith(link);}
 const asia=nav.querySelector('.by060-asia');if(asia)asia.remove();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();