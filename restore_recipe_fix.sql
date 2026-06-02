-- ============================================================
-- RESTORE: 只保留 26QT Air Fryer Oven + 修复 recipes 关联
-- ============================================================

-- 1. 删除除 26QT (id=9) 以外的所有产品
DELETE FROM products WHERE id != 9;

-- 2. 所有食谱指向 26QT
UPDATE recipes SET product_id = 9 WHERE product_id IS NULL;

-- 验证
SELECT count(*) AS product_count FROM products;
SELECT id, sku, name FROM products;
SELECT count(*) AS recipe_count, count(*) FILTER (WHERE product_id = 9) AS linked FROM recipes;
