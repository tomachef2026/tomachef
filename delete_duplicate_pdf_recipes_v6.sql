-- ============================================================
-- TomaChef: remove duplicate PDF/booklet recipes
-- Purpose:
--   Keep exactly one row for each of the 10 PDF recipes.
--   The kept row is active, linked to TC-AFO-001, and has the correct image.
--   All duplicate rows with the same English title are deleted.
--
-- Run in Supabase SQL Editor.
-- Safe to re-run.
-- ============================================================

BEGIN;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM products WHERE sku = 'TC-AFO-001') THEN
    RAISE EXCEPTION 'Target product TC-AFO-001 not found. Seed or create products first.';
  END IF;
END $$;

ALTER TABLE recipes ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE recipes ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE recipes ADD COLUMN IF NOT EXISTS product_id INTEGER REFERENCES products(id) ON DELETE SET NULL;

WITH target_product AS (
  SELECT id
  FROM products
  WHERE sku = 'TC-AFO-001'
  ORDER BY sort_order, id
  LIMIT 1
),
booklet(title_en, image_url, display_order) AS (
  VALUES
    ('Oven-Fried Buttermilk Chicken', '/images/recipes/oven-fried-buttermilk-chicken.jpg', 4),
    ('Garlic Bread (Bakery-Style)', '/images/recipes/garlic-bread-bakery-style.jpg', 5),
    ('Everything Bagel Salmon Melt', '/images/recipes/everything-bagel-salmon-melt.jpg', 6),
    ('New York-Style Pizza', '/images/recipes/new-york-style-pizza.jpg', 7),
    ('Chicken Pot Pie', '/images/recipes/chicken-pot-pie.jpg', 8),
    ('Roast Chicken with Root Vegetables', '/images/recipes/roast-chicken-with-root-vegetables.jpg', 9),
    ('Broiled Lobster Tail with Garlic Butter', '/images/recipes/broiled-lobster-tail-with-garlic-butter.jpg', 10),
    ('Classic Chocolate Chip Cookies', '/images/recipes/classic-chocolate-chip-cookies.jpg', 11),
    ('Apple Chips with Cinnamon', '/images/recipes/apple-chips-with-cinnamon.jpg', 12),
    ('Pizza Dough Proofing', '/images/recipes/pizza-dough-proofing.jpg', 13)
),
candidates AS (
  SELECT
    r.id,
    b.title_en,
    b.image_url,
    b.display_order,
    tp.id AS target_product_id,
    COALESCE(r.translations->'en'->>'title', r.title, '') AS current_title,
    ROW_NUMBER() OVER (
      PARTITION BY b.title_en
      ORDER BY
        CASE WHEN r.product_id = tp.id THEN 0 ELSE 1 END,
        CASE WHEN r.image_url IS NOT NULL AND r.image_url <> '' THEN 0 ELSE 1 END,
        CASE WHEN r.is_active = true THEN 0 ELSE 1 END,
        r.updated_at DESC NULLS LAST,
        r.created_at DESC NULLS LAST,
        r.id::text
    ) AS keep_rank
  FROM recipes r
  JOIN booklet b ON
    lower(
      replace(
        replace(
          replace(COALESCE(r.translations->'en'->>'title', r.title, ''), '–', '-'),
          '—', '-'
        ),
        '‑', '-'
      )
    ) = lower(b.title_en)
  CROSS JOIN target_product tp
),
kept AS (
  UPDATE recipes r
  SET
    title = c.title_en,
    product_id = c.target_product_id,
    image_url = c.image_url,
    is_active = true,
    display_order = c.display_order,
    updated_at = NOW()
  FROM candidates c
  WHERE r.id = c.id
    AND c.keep_rank = 1
  RETURNING r.id, c.title_en
),
deleted AS (
  DELETE FROM recipes r
  USING candidates c
  WHERE r.id = c.id
    AND c.keep_rank > 1
  RETURNING r.id, c.title_en
)
SELECT
  (SELECT COUNT(*) FROM kept) AS kept_active_rows,
  (SELECT COUNT(*) FROM deleted) AS deleted_duplicate_rows;

COMMIT;

-- Verification 1:
-- Every listed title should have row_count = 1, active_count = 1, product_skus = TC-AFO-001.
WITH booklet(title_en) AS (
  VALUES
    ('Oven-Fried Buttermilk Chicken'),
    ('Garlic Bread (Bakery-Style)'),
    ('Everything Bagel Salmon Melt'),
    ('New York-Style Pizza'),
    ('Chicken Pot Pie'),
    ('Roast Chicken with Root Vegetables'),
    ('Broiled Lobster Tail with Garlic Butter'),
    ('Classic Chocolate Chip Cookies'),
    ('Apple Chips with Cinnamon'),
    ('Pizza Dough Proofing')
)
SELECT
  b.title_en,
  COUNT(r.id) AS row_count,
  COUNT(r.id) FILTER (WHERE r.is_active = true) AS active_count,
  string_agg(DISTINCT COALESCE(p.sku, 'NO_PRODUCT'), ', ' ORDER BY COALESCE(p.sku, 'NO_PRODUCT')) AS product_skus
FROM booklet b
LEFT JOIN recipes r ON
  lower(
    replace(
      replace(
        replace(COALESCE(r.translations->'en'->>'title', r.title, ''), '–', '-'),
        '—', '-'
      ),
      '‑', '-'
    )
  ) = lower(b.title_en)
LEFT JOIN products p ON p.id = r.product_id
GROUP BY b.title_en
ORDER BY MIN(r.display_order) NULLS LAST, b.title_en;

-- Verification 2:
-- This should return exactly 10 rows.
SELECT
  r.display_order,
  r.translations->'en'->>'title' AS title_en,
  p.sku,
  r.image_url,
  r.is_active
FROM recipes r
JOIN products p ON p.id = r.product_id
WHERE p.sku = 'TC-AFO-001'
  AND r.is_active = true
  AND lower(
    replace(
      replace(
        replace(COALESCE(r.translations->'en'->>'title', r.title, ''), '–', '-'),
        '—', '-'
      ),
      '‑', '-'
    )
  ) IN (
    'oven-fried buttermilk chicken',
    'garlic bread (bakery-style)',
    'everything bagel salmon melt',
    'new york-style pizza',
    'chicken pot pie',
    'roast chicken with root vegetables',
    'broiled lobster tail with garlic butter',
    'classic chocolate chip cookies',
    'apple chips with cinnamon',
    'pizza dough proofing'
  )
ORDER BY r.display_order;
