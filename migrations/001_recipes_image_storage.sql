-- ============================================================
-- TomaChef: Recipe Image Support + Storage Setup
-- Run in Supabase SQL Editor
-- ============================================================

-- 1. Add image_url column to recipes table (if not exists)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'recipes' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE recipes ADD COLUMN image_url TEXT;
  END IF;
END $$;

-- 2. Create storage bucket for assets (if not exists)
-- Note: This must be done via Supabase Dashboard → Storage, or via API.
-- The bucket name should be: tomachef-assets
-- Set it to: Public bucket (files accessible without auth)

-- 3. Storage RLS: Allow public read
-- Run after creating the bucket via dashboard
-- (If using SQL to create policies, bucket must exist first)

-- 4. Storage RLS: Allow authenticated upload (for admin)
-- These policies are applied to the "tomachef-assets" bucket
-- CREATE POLICY "Public Read" ON storage.objects FOR SELECT USING (bucket_id = 'tomachef-assets');
-- CREATE POLICY "Auth Insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'tomachef-assets' AND auth.role() = 'authenticated');
-- CREATE POLICY "Auth Delete" ON storage.objects FOR DELETE USING (bucket_id = 'tomachef-assets' AND auth.role() = 'authenticated');

-- You can also set these via Supabase Dashboard:
-- Storage → tomachef-assets → Policies → Add policy
