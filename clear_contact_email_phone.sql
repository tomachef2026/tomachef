-- Clear public email and phone displayed on the website.
-- Run in Supabase SQL Editor if the old email/phone must disappear immediately.

INSERT INTO contact_info (key, value)
VALUES
  ('email', ''),
  ('phone', '')
ON CONFLICT (key) DO UPDATE
SET value = EXCLUDED.value,
    updated_at = NOW();
