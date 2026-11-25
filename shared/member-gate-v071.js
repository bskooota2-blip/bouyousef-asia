/* V071 — أعضاء بويوسف ٠: حراسة الوصول إلى البطاقات والصفحات من المتصفح.
   تنبيه: GitHub Pages استضافة ملفات عامة. هذا قفل واجهة وليس حماية خادمية للملفات. */
(function(){'use strict';
const AUTH='https://nzukdiswtjrxitehkkak.supabase.co';
const KEY='sb_publishable_ZgUs-S8xlCKC62GQFZXpnQ_XwxRqwcO';
const STORE='bouyousef_asia_auth_session';
const html=document.documentElement;
const portal=html.hasAttribute('data-by071-portal');
const base=new URL(document.currentScript?.src||'',location.href);
const login=new URL('../login.html',base);
const showStatus=(el,msg)=>{if(el)el.textContent=msg};
let authenticated=false,ready=false;
if(!portal){html.classList.add('by071-lock-pending');}
function chooseSession(){for(const k of [STORE,'bouyousef3_auth_session','bouyousef4_auth_session','bouyousef2_auth_session']){try{const s=JSON.parse(localStorage.getItem(k)||'null');if(s?.refresh_token && s?.access_token)return s;}catch(_){}}return null;}
function storeSession(s){for(const key of [STORE,'bouyousef3_auth_session','bouyousef4_auth_session'])try{localStorage.setItem(key,JSON.stringify(s))}catch(_){}}
async function api(path,method='GET',data=null,token=null){const headers={apikey:KEY};if(token)headers.Authorization='Bearer '+token;if(data)headers['Content-Type']='application/json';const r=await fetch(AUTH+path,{method,headers,cache:'no-store',body:data?JSON.stringify(data):undefined});if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}
async function validSession(){const s=chooseSession();if(!s)return false;
 try{const user=await api('/auth/v1/user','GET',null,s.access_token);if(user&&user.id){try{localStorage.setItem(STORE,JSON.stringify(s))}catch(_){}return true;}}catch(_){}
 try{const n=await api('/auth/v1/token?grant_type=refresh_token','POST',{refresh_token:s.refresh_token});if(n?.access_token&&n?.user){storeSession(n);return true;}}catch(_){}
 return false;
}
function targetLogin(url){const u=new URL(login.href);const dest=(url||location.href);if(dest&&dest.startsWith(location.origin))u.searchParams.set('next',dest);return u.href;}
function lockPopup(destination=location.href,isPortal=false){
 let overlay=document.querySelector('#by071-locked');
 if(overlay)overlay.remove();
 overlay=document.createElement('div');overlay.id='by071-locked';
 overlay.classList.toggle('by072-portal-popup',isPortal);
 overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');
 overlay.setAttribute('aria-labelledby','by072-modal-title');
 const box=document.createElement('div');box.className='by071-dialog';
 const icon=document.createElement('div');icon.className='by071-lock-icon';icon.textContent='🔒';
 const title=document.createElement('h2');title.id='by072-modal-title';title.textContent='سجّل الدخول لفتح البطاقة';
 const desc=document.createElement('p');desc.textContent='للاطلاع على أدلة الدول والمدن والأماكن، يرجى تسجيل الدخول إلى حسابك أو إنشاء حساب جديد.';
 const free=document.createElement('strong');free.className='by072-free';free.textContent='✨ التسجيل مجاني بالكامل';
 const actions=document.createElement('div');actions.className='by072-actions';
 const link=document.createElement('a');link.className='by071-login-button';link.href=targetLogin(destination);link.textContent='🔐 تسجيل الدخول';
 const signup=document.createElement('a');signup.className='by071-login-button by072-signup';
 const signupUrl=new URL(targetLogin(destination));signupUrl.searchParams.set('mode','signup');
 signup.href=signupUrl.href;signup.textContent='✨ إنشاء حساب مجاني';
 actions.append(link,signup);
 const back=document.createElement(isPortal?'button':'a');back.className='by071-home-link';
 if(isPortal){back.type='button';back.textContent='متابعة تصفح الرئيسية';back.addEventListener('click',()=>overlay.remove());}
 else {back.href=new URL('../index.html',base).href;back.textContent='العودة إلى دليل آسيا';}
 box.append(free,icon,title,desc,actions,back);overlay.append(box);document.body.append(overlay);
 if(isPortal){overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove();});}
}
function portalCards(){document.querySelectorAll('a.country,a.feature-card,.country-clickable').forEach(el=>{el.classList.add('by071-card');if(!el.querySelector('.by071-lock-mark')){const icon=document.createElement('span');icon.className='by071-lock-mark';icon.setAttribute('aria-label','الدخول مطلوب');icon.textContent='🔒';el.append(icon);}});}
function intercept(e){if(authenticated)return;
 const node=e.target instanceof Element?e.target:null;
 const card=node?.closest('a.country,a.feature-card,.country-clickable,.feature-card, a[href^="#store"]');
 if(!card)return;
 e.preventDefault();e.stopImmediatePropagation();
 const href=card.getAttribute('href');let dest=location.href;if(href && href!=='#'){try{dest=new URL(href,location.href).href}catch(_){}}
 lockPopup(dest,true);
}
if(portal){document.addEventListener('click',intercept,true);document.addEventListener('DOMContentLoaded',portalCards,{once:true});}
function complete(ok){authenticated=ok;ready=true;window.BY071_LOGGED_IN=ok;
 html.classList.toggle('by071-lock-pending',!ok&&!portal);html.classList.toggle('by071-lock-open',ok);
 if(!ok&&!portal){if(document.body)lockPopup(location.href,false);else document.addEventListener('DOMContentLoaded',()=>lockPopup(location.href,false),{once:true});}
 if(ok){document.querySelector('#by071-locked')?.remove();}
 document.dispatchEvent(new CustomEvent('by071-session-verified',{detail:{authenticated:ok}}));
}
validSession().then(complete,()=>complete(false));
})();