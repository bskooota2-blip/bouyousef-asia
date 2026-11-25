(function(){'use strict';
const authUrl="https://nzukdiswtjrxitehkkak.supabase.co";
const publicKey="sb_publishable_ZgUs-S8xlCKC62GQFZXpnQ_XwxRqwcO";
const storeKey=document.body.dataset.authKey||'bouyousef_asia_auth_session';
const $=id=>document.getElementById(id);
let session=null;
let mode='login';
let refreshInProgress=false;
const message=(txt,isError=false)=>{const el=$('by33AuthStatus');el.textContent=txt;el.classList.toggle('error',isError)};
function readableError(e){const v=String(e?.message||e||'');if(/invalid login credentials|invalid_grant/i.test(v))return 'البريد الإلكتروني أو كلمة المرور غير صحيحة.';if(/email not confirmed/i.test(v))return 'يرجى تأكيد البريد الإلكتروني أولًا.';if(/too many|rate limit|429/i.test(v))return 'محاولات كثيرة، يرجى إعادة المحاولة لاحقًا.';if(/network|failed to fetch|abort/i.test(v))return 'تعذر الاتصال بخدمة الحسابات؛ تحقق من اتصال الإنترنت.';return 'تعذر إكمال العملية. '+v.slice(0,180)}
async function api(path,method='GET',payload=null,token=null){const headers={'apikey':publicKey,'Content-Type':'application/json'};if(token)headers.Authorization='Bearer '+token;const c=new AbortController();const timer=setTimeout(()=>c.abort(),12000);let r;try{r=await fetch(authUrl+path,{method,headers,cache:'no-store',body:payload===null?undefined:JSON.stringify(payload),signal:c.signal});}finally{clearTimeout(timer);}const text=await r.text();let data;try{data=text?JSON.parse(text):{}}catch(_){data={message:text}}if(!r.ok)throw Error(data?.msg||data?.error_description||data?.message||data?.error||('HTTP '+r.status));return data;}
function persist(s){try{if(s){localStorage.setItem(storeKey,JSON.stringify(s));localStorage.setItem('bouyousef_asia_auth_session',JSON.stringify(s));}else{for(const key of ['bouyousef_asia_auth_session','bouyousef2_auth_session','bouyousef3_auth_session','bouyousef4_auth_session'])localStorage.removeItem(key);}}catch(_){}}
function displaySession(s){session=s||null;window.BY41_IS_MEMBER=Boolean(session?.access_token && session?.user);document.dispatchEvent(new CustomEvent('by41-auth-changed',{detail:{authenticated:window.BY41_IS_MEMBER}}));const member=$('by33Member');member.hidden=!session;$('by33GuestContent').hidden=!!session;
const admin=$('by33Admin');if(admin)admin.hidden=true;
if(session){$('by33MemberEmail').textContent=session.user?.email||'عضو مسجّل';loadAdminStats();}
else{$('by33MemberEmail').textContent='';if($('by33AdminStats'))$('by33AdminStats').replaceChildren();} }
function selectMode(m){mode=m;$('by33LoginForm').hidden=m!=='login';$('by33SignupForm').hidden=m!=='signup';$('by33RecoverForm').hidden=m!=='recover';$('by33ShowLogin').classList.toggle('is-active',m==='login');$('by33ShowSignup').classList.toggle('is-active',m==='signup');$('by33ShowLogin').setAttribute('aria-pressed',String(m==='login'));$('by33ShowSignup').setAttribute('aria-pressed',String(m==='signup'));message('');}
async function restore(){let saved=null;try{saved=JSON.parse(localStorage.getItem('bouyousef_asia_auth_session')||localStorage.getItem(storeKey)||'null')}catch(_){}
if(!saved?.refresh_token){for(const otherKey of ['bouyousef2_auth_session','bouyousef4_auth_session','bouyousef3_auth_session']){
 try{const candidate=JSON.parse(localStorage.getItem(otherKey)||'null');if(candidate?.refresh_token){saved=candidate;break}}catch(_){}
}}if(!saved?.refresh_token){displaySession(null);return}if(refreshInProgress)return;refreshInProgress=true;try{if(saved.access_token){try{const user=await api('/auth/v1/user','GET',null,saved.access_token);if(user?.id){const active={...saved,user};persist(active);displaySession(active);return;}}catch(e){if(/network|failed to fetch|abort/i.test(String(e?.message||e)))throw e;}}const renewed=await api('/auth/v1/token?grant_type=refresh_token','POST',{refresh_token:saved.refresh_token});if(!renewed?.access_token)throw Error('Invalid refresh');persist(renewed);displaySession(renewed)}catch(e){displaySession(null);message('تعذر التحقق من جلسة الدخول الحالية. '+readableError(e),true);console.warn('BouYousef account refresh unavailable:',e.message)}finally{refreshInProgress=false}}

// Admin-only statistics: the Supabase RPC and Edge Function must enforce authorization server-side.
// Never infer administrator privileges from an email or local role flag.
async function loadAdminStats(){
  const panel=$('by33Admin'),target=$('by33AdminStats');
  if(!panel||!target)return;
  panel.hidden=true;target.replaceChildren();
  const token=session?.access_token;
  if(!token)return;
  try{
    const payload=await api('/rest/v1/rpc/get_visit_dashboard_v2','POST',{},token);
    if(session?.access_token!==token)return;
    const data=Array.isArray(payload)?payload[0]:payload;
    if(!data||!['today','week','month','total'].every(k=>Number.isFinite(data[k])))return;
    const grid=document.createElement('div');grid.className='by33-statgrid';
    for(const [label,key] of [['اليوم','today'],['الأسبوع','week'],['الشهر','month'],['الإجمالي','total']]){
      const card=document.createElement('div');card.className='by33-stat';
      const caption=document.createElement('span');caption.textContent=label;
      const value=document.createElement('strong');value.textContent=String(data[key]);
      card.append(caption,value);grid.append(card);
    }
    const members=document.createElement('div');members.className='by33-stat';
    const membersLabel=document.createElement('span');membersLabel.textContent='الأعضاء المسجلون';
    const membersValue=document.createElement('strong');membersValue.textContent='غير متاح';
    members.append(membersLabel,membersValue);grid.append(members);
    target.append(grid);panel.hidden=false;
    try{
      const m=await api('/functions/v1/member-count','GET',null,token);
      if(session?.access_token===token && Number.isSafeInteger(m?.count)&&m.count>=0)membersValue.textContent=String(m.count);
    }catch(e){console.info('Member-count unavailable; admin statistics remain available:',e.message)}
  }catch(e){if(session?.access_token===token){panel.hidden=true;target.replaceChildren()}
    console.info('Admin dashboard requires server-side access:',e.message)}
}
$('by33RefreshStats')?.addEventListener('click',loadAdminStats);

$('by33ShowLogin').addEventListener('click',()=>selectMode('login'));
$('by33ShowSignup').addEventListener('click',()=>selectMode('signup'));
$('by33ForgotPassword').addEventListener('click',()=>{selectMode('recover');$('by33RecoverForm').elements.email.value=$('by33LoginForm').elements.email.value||''});
$('by33RecoverBack').addEventListener('click',()=>selectMode('login'));
$('by33LoginForm').addEventListener('submit',async e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;const d=new FormData(f);message('جارٍ تسجيل الدخول...');try{const result=await api('/auth/v1/token?grant_type=password','POST',{email:String(d.get('email')).trim(),password:d.get('password')});if(!result.access_token)throw Error('لم تُنشأ جلسة');f.elements.password.value='';persist(result);displaySession(result);message('تم تسجيل الدخول بنجاح.')}catch(err){message(readableError(err),true)}});
$('by33SignupForm').addEventListener('submit',async e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;const d=new FormData(f);if(d.get('password')!==d.get('confirm')){message('كلمتا المرور غير متطابقتين.',true);return}message('جارٍ إنشاء الحساب...');try{const result=await api('/auth/v1/signup','POST',{email:String(d.get('email')).trim(),password:d.get('password'),data:{first_name:String(d.get('first')).trim(),last_name:String(d.get('last')).trim()}});f.elements.password.value='';f.elements.confirm.value='';if(result.access_token){persist(result);displaySession(result);message('تم إنشاء الحساب وتسجيل الدخول بنجاح.')}else{selectMode('login');message('تم إرسال طلب التسجيل. تحقق من بريدك الإلكتروني إذا كانت خدمة تأكيد البريد مفعلة.')}}catch(err){message(readableError(err),true)}});
$('by33RecoverForm').addEventListener('submit',async e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;message('جارٍ إرسال طلب الاستعادة...');const email=String(new FormData(f).get('email')).trim();const redirect=new URL('reset-password.html',document.baseURI).href;try{await api('/auth/v1/recover?redirect_to='+encodeURIComponent(redirect),'POST',{email});message('إذا كان البريد مسجّلًا وكانت إعدادات البريد ورابط العودة مفعّلة، ستصلك رسالة لاستعادة كلمة المرور.')}catch(err){message('تعذر طلب رابط الاستعادة: '+readableError(err),true)}});
$('by33Signout').addEventListener('click',async()=>{const old=session;session=null;persist(null);displaySession(null);message('تم تسجيل الخروج من هذه الصفحة.');if(old?.access_token){try{await api('/auth/v1/logout','POST',{},old.access_token)}catch(e){console.warn('Server logout unavailable; local session cleared',e.message)}}});

selectMode('login');displaySession(null);restore();
})();
