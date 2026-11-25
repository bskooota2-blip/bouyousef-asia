/* V167 – public place sharing. No recipient, no automatic send, no member data. */
(()=>{'use strict';
const GUIDE='https://bskooota2-blip.github.io/bouyousef/';
const clean=v=>typeof v==='string'?v.trim():'';
const unique=arr=>[...new Set(arr.map(clean).filter(Boolean))];
const escape=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon='<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.5 6.6-4M8.7 13.5l6.6 4"/></svg>';
function url(p){
 const names=unique([p.ar,p.en,p.local]);
 if(!names.length)return '';
 const addresses=unique([p.address,p.addressEn]);
 const query=unique([p.local||p.en||p.ar,...addresses,p.city,p.country]).join(' ');
 let map='';try{const u=new URL(p.map);if(u.protocol==='https:'&&['www.google.com','maps.google.com','maps.app.goo.gl','goo.gl','uri.amap.com','www.amap.com','ditu.amap.com'].includes(u.hostname))map=u.href}catch(_){}
 if(!map)map=(p.country==='China'?'https://uri.amap.com/search?keyword=':'https://www.google.com/maps/search/?api=1&query=')+encodeURIComponent(query);
 const lines=['📍 '+names[0],...names.slice(1)];
 if(p.city)lines.push('المدينة: '+clean(p.city));
 lines.push('','العنوان: '+(addresses.length?addresses.join('\n'):'العنوان التفصيلي غير متوفر؛ استخدم اسم المكان والخريطة.'),'','🗺️ الموقع على الخريطة:',map,'','━━━━━━━━━━━━━━━','🌏 ننصحك باستخدام دليل بويوسف الصبر','دليلك السياحي والتجاري إلى آسيا، لاكتشاف الأسواق والمجمعات والمطاعم والفنادق والأماكن السياحية.','🔗 '+GUIDE,'✈️ رفيقك في السفر والتسوق');
 return ((navigator.userAgentData?.mobile===true||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||'')||(/Mac/i.test(navigator.platform||navigator.userAgent||'')&&navigator.maxTouchPoints>1))?'whatsapp://send?text=':'https://wa.me/?text=')+encodeURIComponent(lines.join('\n'));
}
function markup(p){const href=url(p);return href?'<a class="by167-share" data-by167-share="1" href="'+escape(href)+'"'+(href.startsWith('whatsapp://')?'':' target="_blank" rel="noopener noreferrer"')+' title="مشاركة عبر واتساب" aria-label="مشاركة '+escape(clean(p.ar)||clean(p.en)||clean(p.local))+' عبر واتساب">'+icon+'</a>':'';}
function node(p){const t=document.createElement('template');t.innerHTML=markup(p);return t.content.firstElementChild;}
window.BY167_SHARE=Object.freeze({url,markup,node});
const style=document.createElement('style');style.id='by167-share-style';style.textContent=`
.by167-share{box-sizing:border-box!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;flex:0 0 auto!important;width:40px!important;height:40px!important;min-width:0!important;min-height:0!important;padding:0!important;margin:0!important;color:#15803d!important;background:#eafaf0!important;border:1px solid #86d3a1!important;border-radius:12px!important;text-decoration:none!important;line-height:1!important;cursor:pointer!important;box-shadow:none!important;vertical-align:middle!important}
.by167-share:hover{background:#d1fae5!important}.by167-share:focus-visible{outline:2px solid #15803d!important;outline-offset:2px}.by167-share svg{flex:none!important;pointer-events:none!important}
.place.by4-horizontal .by4-card-heading:has(>.by167-share){grid-template-columns:minmax(0,1fr) 40px 40px!important;gap:4px!important}
.place.by4-horizontal .by4-card-heading>.by167-share{grid-column:3!important;grid-row:1!important;align-self:start!important;width:40px!important;height:32px!important;border-radius:10px!important}
.by2-fav-title>.by167-share{flex:0 0 40px!important}
@media(max-width:720px){.place.by4-horizontal .by4-card-heading:has(>.by167-share){grid-template-columns:minmax(0,1fr) 36px 36px!important;gap:3px!important}.place.by4-horizontal .by4-card-heading>.by167-share{width:36px!important;height:32px!important}.place.by4-horizontal .by4-card-heading>.by4-fav{min-width:0!important;width:36px!important;padding:0!important}.by2-fav-title>.by167-share{flex-basis:36px!important;width:36px!important;height:36px!important}}
`;document.head.append(style);
})();
