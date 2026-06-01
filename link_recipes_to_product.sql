-- ===========================================================
-- Link 10 booklet recipes to 26QT 11-in-1 Air Fryer Oven
-- Run in Supabase SQL Editor
-- ===========================================================

-- Step 1: See which products are available (for reference)
SELECT id, sku, name, category FROM products WHERE category = 'airfryeroven' OR name ILIKE '%air fryer oven%' OR sku = 'TC-AFO-001'
ORDER BY sort_order;

-- Step 2: Update all 10 recipes — auto-finds the product by SKU or name
-- If multiple products match, picks the first one
UPDATE recipes 
SET product_id = (
    SELECT id FROM products 
    WHERE sku = 'TC-AFO-001' 
       OR name ILIKE '%26QT%' 
       OR name ILIKE '%Air Fryer Oven%'
    ORDER BY sort_order
    LIMIT 1
),
updated_at = NOW()
WHERE id IN (
    'a1b2c3d4-e5f6-4004-8004-000000000004',
    'a1b2c3d4-e5f6-4005-8005-000000000005',
    'a1b2c3d4-e5f6-4006-8006-000000000006',
    'a1b2c3d4-e5f6-4007-8007-000000000007',
    'a1b2c3d4-e5f6-4008-8008-000000000008',
    'a1b2c3d4-e5f6-4009-8009-000000000009',
    'a1b2c3d4-e5f6-4010-8010-000000000010',
    'a1b2c3d4-e5f6-4011-8011-000000000011',
    'a1b2c3d4-e5f6-4012-8012-000000000012',
    'a1b2c3d4-e5f6-4013-8013-000000000013'
);

-- Step 3: Verify the link worked
SELECT 
    r.id, 
    r.translations->'en'->>'title' as title_en, 
    r.mode, 
    r.temp, 
    r."time",
    p.sku as product_sku, 
    p.name as product_name
FROM recipes r
LEFT JOIN products p ON r.product_id = p.id
WHERE r.id IN (
    'a1b2c3d4-e5f6-4004-8004-000000000004',
    'a1b2c3d4-e5f6-4005-8005-000000000005',
    'a1b2c3d4-e5f6-4006-8006-000000000006',
    'a1b2c3d4-e5f6-4007-8007-000000000007',
    'a1b2c3d4-e5f6-4008-8008-000000000008',
    'a1b2c3d4-e5f6-4009-8009-000000000009',
    'a1b2c3d4-e5f6-4010-8010-000000000010',
    'a1b2c3d4-e5f6-4011-8011-000000000011',
    'a1b2c3d4-e5f6-4012-8012-000000000012',
    'a1b2c3d4-e5f6-4013-8013-000000000013'
)
ORDER BY r.display_order;
