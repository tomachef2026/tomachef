-- ===========================================================
-- 1. CREATE STORAGE BUCKET + POLICY
-- Run in Supabase SQL Editor (needs admin privileges)
-- ===========================================================

-- Create the bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'tomachef-assets',
    'tomachef-assets',
    true,
    5242880,  -- 5MB max per file
    ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;

-- Admin helper used by storage policies
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT (nullif(current_setting('request.jwt.claims', true)::jsonb -> 'app_metadata' ->> 'role', '')) = 'admin';
$$;

-- Allow public reads only. Upload/update/delete must be limited to admins.
DROP POLICY IF EXISTS "allow_public_upload" ON storage.objects;
DROP POLICY IF EXISTS "allow_public_update" ON storage.objects;
DROP POLICY IF EXISTS "allow_public_read" ON storage.objects;
DROP POLICY IF EXISTS "allow_admin_upload" ON storage.objects;
DROP POLICY IF EXISTS "allow_admin_update" ON storage.objects;
DROP POLICY IF EXISTS "allow_admin_delete" ON storage.objects;

-- Allow public reads
CREATE POLICY "allow_public_read" ON storage.objects
FOR SELECT USING (bucket_id = 'tomachef-assets');

-- Allow only admins to write files
CREATE POLICY "allow_admin_upload" ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'tomachef-assets' AND public.is_admin());

CREATE POLICY "allow_admin_update" ON storage.objects
FOR UPDATE
USING (bucket_id = 'tomachef-assets' AND public.is_admin())
WITH CHECK (bucket_id = 'tomachef-assets' AND public.is_admin());

CREATE POLICY "allow_admin_delete" ON storage.objects
FOR DELETE
USING (bucket_id = 'tomachef-assets' AND public.is_admin());
