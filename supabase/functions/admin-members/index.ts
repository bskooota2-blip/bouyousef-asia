import { createClient } from 'npm:@supabase/supabase-js@2';

// Deploy as Supabase Edge Function "admin-members" with JWT verification enabled.
// Only the server may use SUPABASE_SERVICE_ROLE_KEY. Never include it in web pages.
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Cache-Control': 'private, no-store',
  'Content-Type': 'application/json; charset=utf-8',
};
function response(status: number, data: Record<string, unknown>) {
  return new Response(JSON.stringify(data), { status, headers });
}
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, {status: 204, headers});
  if (req.method !== 'GET') return response(405, {error:'method_not_allowed'});
  const token = /^Bearer\s+(.+)$/i.exec(req.headers.get('Authorization') || '')?.[1];
  if (!token) return response(401, {error:'unauthorized'});
  const url = Deno.env.get('SUPABASE_URL');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !serviceKey) return response(503, {error:'server_not_configured'});
  try {
    const admin = createClient(url, serviceKey, {auth:{autoRefreshToken:false,persistSession:false}});
    const {data:viewer,error:authError} = await admin.auth.getUser(token);
    if (authError || !viewer.user) return response(401, {error:'unauthorized'});
    const {data:permission,error:permissionError} = await admin.from('by3_admin_members')
      .select('user_id').eq('user_id',viewer.user.id).maybeSingle();
    if (permissionError) return response(503, {error:'admin_access_not_configured'});
    if (!permission) return response(403, {error:'forbidden'});
    const u = new URL(req.url);
    const page = Number(u.searchParams.get('page') || '1');
    const perPage = 50;
    if (!Number.isSafeInteger(page) || page < 1 || page > 10000) return response(400,{error:'invalid_page'});
    const {data,error} = await admin.auth.admin.listUsers({page,perPage});
    if (error) return response(502,{error:'members_unavailable'});
    const users = (data.users || []).map((x) => {
      const meta = x.user_metadata || {};
      const first = typeof meta.first_name === 'string' ? meta.first_name.trim() : '';
      const last = typeof meta.last_name === 'string' ? meta.last_name.trim() : '';
      const full = typeof meta.full_name === 'string' ? meta.full_name.trim() : '';
      return {
        id: x.id,
        name: [first,last].filter(Boolean).join(' ') || full || '',
        email: x.email || '',
        created_at: x.created_at || '',
        last_sign_in_at: x.last_sign_in_at || '',
        confirmed: Boolean(x.email_confirmed_at || x.confirmed_at),
      };
    });
    // No passwords, refresh tokens, provider info or full user_metadata exposed.
    return response(200,{users,page,per_page:perPage,has_more:users.length===perPage});
  } catch (e) {
    console.error('admin-members unexpected error',e);
    return response(500,{error:'unexpected_error'});
  }
});
