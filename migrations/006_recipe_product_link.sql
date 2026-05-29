-- Migration 006: Add product_id to recipes table
-- Links each recipe to a specific product instead of just a category
-- Run this in Supabase SQL Editor

-- Add product_id column (nullable, so existing recipes without a product still work)
ALTER TABLE recipes 
ADD COLUMN IF NOT EXISTS product_id INTEGER REFERENCES products(id) ON DELETE SET NULL;

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_recipes_product_id ON recipes(product_id);

-- Comment on column
COMMENT ON COLUMN recipes.product_id IS 'Links recipe to a specific product. NULL means category-level recipe (legacy).';
