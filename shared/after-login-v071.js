/* V071: redirect to originally requested internal page after a real Supabase login. */
(function(){'use strict';const q=new URLSearchParams(location.search),dest=q.get('next');if(!dest)return;
let url;try{url=new URL(dest,location.href)}catch(_){return}
const root=new URL('./',location.href).pathname;
if(url.origin!==location.origin || !url.pathname.startsWith(root) || url.pathname===location.pathname)return;
let navigating=false;
document.addEventListener('by41-auth-changed',e=>{if(!navigating&&e?.detail?.authenticated){navigating=true;location.replace(url.href)} });
})();