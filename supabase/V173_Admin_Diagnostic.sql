-- V173: read-only diagnosis; run in existing Supabase project SQL Editor.
-- Does not grant any permissions or change accounts.
select to_regclass('public.by3_admin_members') as admin_allowlist,
       to_regprocedure('public.by172_is_admin()') as check_function,
       to_regclass('public.by172_place_editorial') as editorial_table;
-- If the allowlist exists, run the following SELECT separately:
-- select u.email, a.user_id from public.by3_admin_members a join auth.users u on u.id=a.user_id;
