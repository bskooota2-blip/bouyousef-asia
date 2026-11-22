(function(){'use strict';
function reorder(){
  const side=document.getElementById('sideNav');if(!side)return;
  const nodes=[...side.children].filter(n=>n.matches('.by417-city-picker,.nav-button,.by41-updates-link'));
  function rank(n){
    if(n.matches('.by417-city-picker'))return 0;
    const s=(n.textContent||'').replace(/\s+/g,' ').trim();
    if(/تسجيل الدخول/.test(s))return 1;
    if(/بطاقة دخول/.test(s))return 2;
    if(/تطبيقات مهم/.test(s))return 3;
    if(/متجرنا/.test(s))return 4;
    if(/صرف العملات/.test(s))return 5;
    if(/معارض الصين/.test(s))return 6;
    if(/جديد الموقع/.test(s))return 7;
    if(/تسجيل الخروج|تسجيل خروج/.test(s))return 8;
    if(/جديد التطبيق/.test(s))return 10;
    return 9;
  }
  nodes.map((n,i)=>({n,i,r:rank(n)})).sort((a,b)=>a.r-b.r||a.i-b.i).forEach(x=>side.appendChild(x.n));
  side.dataset.by091Order='1';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',reorder,{once:true});else reorder();
})();