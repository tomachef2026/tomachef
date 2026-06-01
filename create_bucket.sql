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

-- Allow public uploads via anon key
CREATE POLICY "allow_public_upload" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'tomachef-assets');

-- Allow public reads
CREATE POLICY "allow_public_read" ON storage.objects
FOR SELECT USING (bucket_id = 'tomachef-assets');

-- Allow public updates
CREATE POLICY "allow_public_update" ON storage.objects
FOR UPDATE USING (bucket_id = 'tomachef-assets')
WITH CHECK (bucket_id = 'tomachef-assets');
