(()=>{'use strict';
const BY163_THAI_CITY_INFO=Object.fromEntries([[window.BY164_DATA.key,window.BY164_DATA.cityInfo]]);
const script=document.currentScript;const key=window.BY164_DATA.key;const info=document.getElementById('by107-information');const btn=document.getElementById('by107-tile');if(!key||!info||!btn)return;
const country=key.split('/')[0];const config={thailand:['تايلند','THB – البات التايلندي','التايلندية','UTC+7','السياحة التايلندية','https://www.tourismthailand.org/Destinations','معلومات الرحلات قابلة للتغير.'],malaysia:['ماليزيا','MYR – الرينغيت الماليزي','الماليزية، والإنجليزية شائعة','UTC+8','السياحة الماليزية','https://www.malaysia.travel/about-malaysia/getting-around','قد تتغير رحلات الجزر في موسم الرياح.'],'hong-kong':['هونغ كونغ','HKD – دولار هونغ كونغ','الصينية والإنجليزية','UTC+8','هيئة السياحة في هونغ كونغ','https://www.discoverhongkong.com/eng/travel-guide/traveller-essentials/getting-around.html','تحقق من متطلبات العبور الحدودي منفصلة عن التنقل المحلي.'],macau:['مكاو','MOP – باتاكا مكاو','الصينية والبرتغالية','UTC+8','مكتب سياحة مكاو','https://www.macaotourism.gov.mo/en/travelessential/before-you-travel/local-transportation','راجع محطات النقل والعبارات قبل الانتقال بين المناطق.']}[country];
const el=(tag,cl,txt)=>{let e=document.createElement(tag);if(cl)e.className=cl;if(txt!==undefined)e.textContent=txt;return e};
const b=(p,tag,cl,txt)=>{let e=el(tag,cl,txt);p.append(e);return e};
const p=(parent,title)=>{let s=b(parent,'section','by107-panel');b(s,'h3','',title);return s};
function nav(root){const n=b(root,'div','by107-return');const home=b(n,'a','','🏠 العودة إلى الرئيسية المحلية');home.href='index.html';const asia=b(n,'a','','🌏 العودة إلى بوابة آسيا');asia.href='../index.html'}
function render(c){info.replaceChildren();info.dir='rtl';info.lang='ar';b(info,'h2','','ℹ️ معلومات المدينة – '+c.ar);nav(info);b(info,'p','by107-intro',c.intro+' الاسم المحلي: '+c.local+' ('+c.en+').');const layout=b(info,'div','by107-layout'),left=b(layout,'div','by107-column'),right=b(layout,'div','by107-column');let s=p(left,'⭐ أولاً: أهم ما تشتهر به '+c.ar);for(const [ic,title,desc] of c.features){let x=b(s,'article','by107-feature');b(x,'span','by107-feature-icon',ic);let y=b(x,'div');b(y,'h4','',title);b(y,'p','',desc)}
s=p(right,'🚄 ثانيًا: المدن والمناطق المحيطة ووسائل الوصول');let scroll=b(s,'div','by107-scroll'),table=b(scroll,'table');let tr=b(b(table,'thead'),'tr');for(const h of ['المدينة','بماذا تشتهر؟','المواصلات','نقطة الانطلاق','المدة التقريبية'])b(tr,'th','',h);let tb=b(table,'tbody'),mobile=b(s,'div','by107-mobile-cards');for(const [ar,en,known,mode,from,time] of c.nearby){let row=b(tb,'tr');let first=b(row,'td','',ar);b(first,'small','',en);for(const x of [known,mode,from,time])b(row,'td','',x);let card=b(mobile,'article','by107-near-card');b(card,'h4','',ar+' – '+en);let dl=b(card,'dl');for(const [k,v] of [['تشتهر بـ: ',known],['المواصلات: ',mode],['نقطة الانطلاق: ',from],['المدة: ',time]]){let line=b(dl,'div');b(line,'dt','',k);b(line,'dd','',v)}}
s=p(right,'💡 ثالثًا: نصائح سريعة للتنقل');let tips=b(s,'div','by107-tips');for(const [ic,title,desc] of c.tips){let x=b(tips,'article','by107-tip');b(x,'span','by107-tip-icon',ic);b(x,'h4','',title);b(x,'p','',desc)}
s=p(left,'🧳 رابعًا: معلومات عملية للمسافر');let facts=b(s,'div','by107-facts');for(const [k,v] of [['الدولة / المنطقة',config[0]],['العملة',config[1]],['اللغة',config[2]],['التوقيت',config[3]],['الاسم المحلي',c.local],['الهواتف والإنترنت','راجع باقات الاتصالات المحلية لدى المشغل']]){let x=b(facts,'div','by107-fact');b(x,'b','',k);b(x,'span','',v)}
if(Array.isArray(c.stay)){
 s=p(left,'🏨 خامسًا: أين تسكن؟');let stays=b(s,'div','by107-tips');for(const [name,desc] of c.stay){let x=b(stays,'article','by107-tip');b(x,'h4','',name);b(x,'p','',desc)}
}
if(Array.isArray(c.plan)){
 s=p(right,'🗓️ سادسًا: برنامج يوم مقترح');let plan=b(s,'div','by107-tips');for(const [part,desc] of c.plan){let x=b(plan,'article','by107-tip');b(x,'h4','',part);b(x,'p','',desc)}
}
if(c.season){s=p(info,'🌤️ الطقس والموسم المناسب');b(s,'p','by107-intro',c.season+' ينصح بمراجعة تنبؤات الطقس قبل حجز الرحلات البحرية والأنشطة الخارجية.');}
s=p(info,'📌 مصادر وتنبيهات');b(s,'p','by107-warning','هذه معلومات عامة وليست مواعيد نقل أو تعليمات تأشيرة. مدد السفر تختلف حسب الخدمة والازدحام والطقس؛ تحقق قبل المغادرة. '+config[6]);let source=b(s,'a','by107-source','المصدر الرسمي: '+config[4]);source.href=config[5];source.target='_blank';source.rel='noopener noreferrer';if(c.source){let citySource=b(s,'a','by107-source','معلومات الوجهة من المصدر – '+c.ar);citySource.href=c.source;citySource.target='_blank';citySource.rel='noopener noreferrer';}nav(info)}
let directory=document.getElementById('directory');let active=false;function toggle(show){active=show;info.hidden=!show;btn.setAttribute('aria-pressed',String(show));if(directory&&btn.closest('.section-cards'))directory.hidden=show;if(show){info.scrollIntoView({block:'start',behavior:'smooth'})}}
btn.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();toggle(info.hidden)},true);
const cards=btn.closest('.section-cards');if(cards)cards.querySelectorAll('.section-card:not(#by107-tile)').forEach(x=>x.addEventListener('click',()=>toggle(false),true));
/* V163: city records are bundled for offline Windows HTML opening. */
const localData=BY163_THAI_CITY_INFO;
if(localData[key]){render(localData[key]);}
else {b(info,'p','', 'تعذر العثور على بيانات هذه المدينة.');}

})();