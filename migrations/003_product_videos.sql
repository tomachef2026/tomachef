-- ============================================================
-- Migration 003: Product Videos Table
-- Purpose: Attach videos (YouTube/Vimeo) to products
-- Run this in Supabase SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS product_videos (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT '',
  video_url TEXT NOT NULL,
  platform TEXT NOT NULL DEFAULT 'youtube',
  thumbnail_url TEXT DEFAULT '',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE product_videos ENABLE ROW LEVEL SECURITY;

-- Public: anyone can read videos
CREATE POLICY "Public read videos" ON product_videos
  FOR SELECT USING (true);

-- Authenticated users: full CRUD
CREATE POLICY "Admin full access videos" ON product_videos
  FOR ALL USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Index for fast lookup by product
CREATE INDEX IF NOT EXISTS idx_product_videos_product_id ON product_videos(product_id);
