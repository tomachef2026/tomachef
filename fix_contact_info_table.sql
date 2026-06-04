-- Fix contact_info storage for the admin Contact Info page.
-- Run this once in Supabase SQL Editor if contact info cannot be saved.

CREATE TABLE IF NOT EXISTS contact_info (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_info
  ADD COLUMN IF NOT EXISTS key TEXT;

ALTER TABLE contact_info
  ADD COLUMN IF NOT EXISTS value TEXT NOT NULL DEFAULT '';

ALTER TABLE contact_info
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

CREATE UNIQUE INDEX IF NOT EXISTS contact_info_key_unique
  ON contact_info (key);

INSERT INTO contact_info (key, value)
VALUES
  ('email', ''),
  ('phone', ''),
  ('address', ''),
  ('business_hours', '')
ON CONFLICT (key) DO NOTHING;

ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read contact_info" ON contact_info;
DROP POLICY IF EXISTS "Authenticated users can update contact_info" ON contact_info;
DROP POLICY IF EXISTS "Authenticated users can insert contact_info" ON contact_info;
DROP POLICY IF EXISTS "Admin update contact_info" ON contact_info;
DROP POLICY IF EXISTS "Admin insert contact_info" ON contact_info;

CREATE POLICY "Anyone can read contact_info"
  ON contact_info FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can update contact_info"
  ON contact_info FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert contact_info"
  ON contact_info FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
