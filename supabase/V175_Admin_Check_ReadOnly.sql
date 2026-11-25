-- Read-only: run in the existing Supabase project SQL Editor. No permissions or accounts changed.
select to_regclass('public.by3_admin_members') as admin_allowlist,
       to_regprocedure('public.by172_is_admin()') as editorial_admin_check,
       to_regclass('public.by172_place_editorial') as editorial_table;
-- If admin_allowlist exists, run separately and check YOUR existing account only:
-- select exists(select 1 from public.by3_admin_members where user_id = 'YOUR-EXISTING-USER-UUID'::uuid) as is_admin;
