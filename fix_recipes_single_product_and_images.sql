-- ============================================================
-- TomaChef: force booklet recipes to one product + repair images
-- Purpose:
--   1. Only TC-AFO-001 should show the 10 booklet recipes.
--   2. Duplicate same-title recipes are disabled instead of deleted.
--   3. image_url is repaired to /images/recipes/*.jpg.
--
-- Run in Supabase SQL Editor after insert_pdf_recipes_v3.sql.
-- Safe to re-run.
-- ============================================================

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM products WHERE sku = 'TC-AFO-001') THEN
    RAISE EXCEPTION 'Target product TC-AFO-001 not found. Seed or create products first.';
  END IF;
END $$;

ALTER TABLE recipes ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE recipes ADD COLUMN IF NOT EXISTS product_id INTEGER REFERENCES products(id) ON DELETE SET NULL;

WITH target_product AS (
  SELECT id
  FROM products
  WHERE sku = 'TC-AFO-001'
  ORDER BY sort_order, id
  LIMIT 1
),
booklet(title_en, canonical_id, image_url, display_order) AS (
  VALUES
    ('Oven-Fried Buttermilk Chicken', 'a1b2c3d4-e5f6-4004-8004-000000000004'::uuid, '/images/recipes/oven-fried-buttermilk-chicken.jpg', 4),
    ('Garlic Bread (Bakery-Style)', 'a1b2c3d4-e5f6-4005-8005-000000000005'::uuid, '/images/recipes/garlic-bread-bakery-style.jpg', 5),
    ('Everything Bagel Salmon Melt', 'a1b2c3d4-e5f6-4006-8006-000000000006'::uuid, '/images/recipes/everything-bagel-salmon-melt.jpg', 6),
    ('New York-Style Pizza', 'a1b2c3d4-e5f6-4007-8007-000000000007'::uuid, '/images/recipes/new-york-style-pizza.jpg', 7),
    ('Chicken Pot Pie', 'a1b2c3d4-e5f6-4008-8008-000000000008'::uuid, '/images/recipes/chicken-pot-pie.jpg', 8),
    ('Roast Chicken with Root Vegetables', 'a1b2c3d4-e5f6-4009-8009-000000000009'::uuid, '/images/recipes/roast-chicken-with-root-vegetables.jpg', 9),
    ('Broiled Lobster Tail with Garlic Butter', 'a1b2c3d4-e5f6-4010-8010-000000000010'::uuid, '/images/recipes/broiled-lobster-tail-with-garlic-butter.jpg', 10),
    ('Classic Chocolate Chip Cookies', 'a1b2c3d4-e5f6-4011-8011-000000000011'::uuid, '/images/recipes/classic-chocolate-chip-cookies.jpg', 11),
    ('Apple Chips with Cinnamon', 'a1b2c3d4-e5f6-4012-8012-000000000012'::uuid, '/images/recipes/apple-chips-with-cinnamon.jpg', 12),
    ('Pizza Dough Proofing', 'a1b2c3d4-e5f6-4013-8013-000000000013'::uuid, '/images/recipes/pizza-dough-proofing.jpg', 13)
),
ranked AS (
  SELECT
    r.id,
    b.title_en,
    b.image_url,
    b.display_order,
    tp.id AS target_product_id,
    ROW_NUMBER() OVER (
      PARTITION BY b.title_en
      ORDER BY
        CASE WHEN r.id = b.canonical_id THEN 0 ELSE 1 END,
        CASE WHEN r.product_id = tp.id THEN 0 ELSE 1 END,
        r.updated_at DESC NULLS LAST,
        r.created_at DESC NULLS LAST,
        r.id::text
    ) AS keep_rank
  FROM recipes r
  JOIN booklet b ON r.translations->'en'->>'title' = b.title_en
  CROSS JOIN target_product tp
),
kept AS (
  UPDATE recipes r
  SET
    product_id = ranked.target_product_id,
    image_url = ranked.image_url,
    is_active = true,
    display_order = ranked.display_order,
    updated_at = NOW()
  FROM ranked
  WHERE r.id = ranked.id
    AND ranked.keep_rank = 1
  RETURNING r.id
),
disabled_duplicates AS (
  UPDATE recipes r
  SET
    product_id = NULL,
    is_active = false,
    updated_at = NOW()
  FROM ranked
  WHERE r.id = ranked.id
    AND ranked.keep_rank > 1
  RETURNING r.id
)
SELECT
  (SELECT COUNT(*) FROM kept) AS active_booklet_recipes,
  (SELECT COUNT(*) FROM disabled_duplicates) AS disabled_duplicate_recipes;

-- Verification: should show only one product row with 10 active recipes.
SELECT
  p.id AS product_id,
  p.sku,
  p.name,
  COUNT(r.id) AS active_recipe_count
FROM products p
JOIN recipes r ON r.product_id = p.id
WHERE r.is_active = true
  AND r.translations->'en'->>'title' IN (
    'Oven-Fried Buttermilk Chicken',
    'Garlic Bread (Bakery-Style)',
    'Everything Bagel Salmon Melt',
    'New York-Style Pizza',
    'Chicken Pot Pie',
    'Roast Chicken with Root Vegetables',
    'Broiled Lobster Tail with Garlic Butter',
    'Classic Chocolate Chip Cookies',
    'Apple Chips with Cinnamon',
    'Pizza Dough Proofing'
  )
GROUP BY p.id, p.sku, p.name
ORDER BY active_recipe_count DESC, p.sku;

-- Verification: all active booklet recipes should have image_url.
SELECT
  r.translations->'en'->>'title' AS title_en,
  p.sku,
  r.image_url,
  r.is_active
FROM recipes r
LEFT JOIN products p ON p.id = r.product_id
WHERE r.is_active = true
  AND r.translations->'en'->>'title' IN (
    'Oven-Fried Buttermilk Chicken',
    'Garlic Bread (Bakery-Style)',
    'Everything Bagel Salmon Melt',
    'New York-Style Pizza',
    'Chicken Pot Pie',
    'Roast Chicken with Root Vegetables',
    'Broiled Lobster Tail with Garlic Butter',
    'Classic Chocolate Chip Cookies',
    'Apple Chips with Cinnamon',
    'Pizza Dough Proofing'
  )
ORDER BY r.display_order;
