-- ============================================================
-- Migration 002: Add multi-language columns for products table
-- Adds name/description for ZH, ES, FR, JA, PT
-- All use IF NOT EXISTS — safe to run even if some exist
-- ============================================================

ALTER TABLE products 
ADD COLUMN IF NOT EXISTS name_zh TEXT,
ADD COLUMN IF NOT EXISTS description_zh TEXT,
ADD COLUMN IF NOT EXISTS name_es TEXT,
ADD COLUMN IF NOT EXISTS description_es TEXT,
ADD COLUMN IF NOT EXISTS name_fr TEXT,
ADD COLUMN IF NOT EXISTS description_fr TEXT,
ADD COLUMN IF NOT EXISTS name_ja TEXT,
ADD COLUMN IF NOT EXISTS description_ja TEXT,
ADD COLUMN IF NOT EXISTS name_pt TEXT,
ADD COLUMN IF NOT EXISTS description_pt TEXT;
