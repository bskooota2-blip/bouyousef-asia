(()=>{'use strict';
const URL='https://nzukdiswtjrxitehkkak.supabase.co';
const KEY='sb_publishable_ZgUs-S8xlCKC62GQFZXpnQ_XwxRqwcO';
const keys=['bouyousef_asia_auth_session','bouyousef2_auth_session','bouyousef4_auth_session','bouyousef3_auth_session'];
const el=id=>document.getElementById(id);
const loginHref='login.html?next='+encodeURIComponent(new URL('admin-members.html',location.href).href);
const loginLink=el('loginCurrent');if(loginLink)loginLink.href=loginHref;
let page=1,hasMore=false,all=[],token=null,busy=false;
const say=(s,kind='')=>{el('status').textContent=s;el('status').dataset.kind=kind};
function readSessions(){const arr=[];for(const k of keys){try{const s=JSON.parse(localStorage.getItem(k)||'null');if(s?.access_token||s?.refresh_token)arr.push({key:k,session:s})}catch(_){}}return arr}
async function refresh(candidate){
 // First use the active access token, to avoid consuming a refresh token unnecessarily.
 if(candidate.session.access_token){
  try{const r=await fetch(URL+'/auth/v1/user',{headers:{apikey:KEY,Authorization:'Bearer '+candidate.session.access_token},cache:'no-store'});
    if(r.ok){const u=await r.json();if(u?.id){el('currentAccount').textContent='الحساب المسجّل: '+(u.email||'حساب Supabase');return candidate.session.access_token}}}catch(_){}
 }
 if(!candidate.session.refresh_token)return null;
 const resp=await fetch(URL+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{'apikey':KEY,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:candidate.session.refresh_token}),cache:'no-store'});
 if(!resp.ok)return null;const obj=await resp.json();if(!obj.access_token)return null;
 try{localStorage.setItem(candidate.key,JSON.stringify(obj))}catch(_){}
 el('currentAccount').textContent='الحساب المسجّل: '+(obj.user?.email||'حساب Supabase');
 return obj.access_token;
}
async function request(candidateToken,p){
 const r=await fetch(URL+'/functions/v1/admin-members?page='+p,{headers:{apikey:KEY,Authorization:'Bearer '+candidateToken},cache:'no-store'});
 if(!r.ok){let code='HTTP '+r.status;try{code=(await r.json()).error||code}catch(_){}const err=new Error(code);err.status=r.status;throw err}
 return r.json();
}
function render(){
 const filter=el('search').value.trim().toLocaleLowerCase('ar');
 const current=all.filter(u=>[u.name,u.email].some(t=>String(t||'').toLocaleLowerCase('ar').includes(filter)));
 const body=el('rows');body.replaceChildren();
 for(const u of current){const tr=document.createElement('tr');
 const values=[u.name||'لم يُدخل الاسم',u.email||'—',date(u.created_at),date(u.last_sign_in_at),u.confirmed?'مؤكد':'غير مؤكد'];
 values.forEach(v=>{const td=document.createElement('td');td.textContent=v;tr.append(td)});body.append(tr)}
 el('shown').textContent='المعروض: '+current.length+' من '+all.length+' عضو تم تحميله';
 el('empty').hidden=current.length>0;
 el('next').disabled=!hasMore||busy;
}
function date(v){if(!v)return '—';const d=new Date(v);return Number.isNaN(d.getTime())?'—':new Intl.DateTimeFormat('ar-KW',{dateStyle:'medium'}).format(d)}
async function load(p=1){
 if(busy)return;busy=true;el('next').disabled=true;el('refresh').disabled=true;
 say('جارٍ تحميل بيانات الأعضاء…');
 try{
  let data;
  if(!token){let forbidden=false,notReady=false;
   for(const candidate of readSessions()){
    const t=await refresh(candidate).catch(()=>null);if(!t)continue;
    try{data=await request(t,p);token=t;break}
    catch(e){if(e.status===403)forbidden=true;else if(e.status===404||e.status===503)notReady=true;}}
   if(!data)throw Error(notReady?'وظيفة admin-members غير منشورة أو غير مهيأة في Supabase؛ لا تحتاج إلى إنشاء حساب جديد.':forbidden?'تم التعرف على حسابك، لكن صلاحية إدارة الأعضاء غير مفعّلة له في جدول by3_admin_members. لا تسجّل حسابًا جديدًا؛ فعّل صلاحية حسابك الحالي في Supabase.':'لم يُعثر على جلسة دخول صالحة. سجّل دخولك بحسابك الحالي، وليس بحساب مدير جديد.');
  }else data=await request(token,p);
  const users=Array.isArray(data.users)?data.users:[];
  if(p===1)all=[];
  for(const u of users)if(!all.some(x=>x.id===u.id))all.push(u);
  page=p;hasMore=Boolean(data.has_more);render();
  say('تم جلب بيانات '+all.length+' عضو. يمكنك البحث في الأعضاء الذين تم تحميلهم.','ok');
 }catch(e){if(e.status===401){token=null;say('انتهت جلسة تسجيل الدخول. سجّل الدخول مجددًا بنفس حسابك الحالي.','error')}else if(e.status===403){say('حسابك مسجّل لكن صلاحية إدارة الأعضاء غير مفعّلة في Supabase. لا تنشئ حسابًا جديدًا.','error')}else if(e.status===404||e.status===503){say('وظيفة admin-members تحتاج إلى نشر أو ضبط في Supabase. حسابك الحالي لا يحتاج إلى إعادة تسجيل.','error')}else{say(String(e.message||e),'error')}}
 finally{busy=false;el('refresh').disabled=false;el('next').disabled=!hasMore;}
}
el('refresh').addEventListener('click',()=>{token=null;load(1)});
el('next').addEventListener('click',()=>load(page+1));
el('search').addEventListener('input',render);
load(1);
})();
