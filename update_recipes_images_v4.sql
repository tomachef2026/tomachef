-- ============================================================
-- TomaChef: Repair recipe image_url values
-- Default path prefix: /images/recipes/
-- Change .jpg paths below if you upload PNG/WebP or use a CDN.
-- ============================================================

ALTER TABLE recipes ADD COLUMN IF NOT EXISTS image_url TEXT;

UPDATE recipes
SET image_url = CASE
  WHEN translations->'en'->>'title' = 'Oven-Fried Buttermilk Chicken' THEN '/images/recipes/oven-fried-buttermilk-chicken.jpg'
  WHEN translations->'en'->>'title' = 'Garlic Bread (Bakery-Style)' THEN '/images/recipes/garlic-bread-bakery-style.jpg'
  WHEN translations->'en'->>'title' = 'Everything Bagel Salmon Melt' THEN '/images/recipes/everything-bagel-salmon-melt.jpg'
  WHEN translations->'en'->>'title' = 'New York-Style Pizza' THEN '/images/recipes/new-york-style-pizza.jpg'
  WHEN translations->'en'->>'title' = 'Chicken Pot Pie' THEN '/images/recipes/chicken-pot-pie.jpg'
  WHEN translations->'en'->>'title' = 'Roast Chicken with Root Vegetables' THEN '/images/recipes/roast-chicken-with-root-vegetables.jpg'
  WHEN translations->'en'->>'title' = 'Broiled Lobster Tail with Garlic Butter' THEN '/images/recipes/broiled-lobster-tail-with-garlic-butter.jpg'
  WHEN translations->'en'->>'title' = 'Classic Chocolate Chip Cookies' THEN '/images/recipes/classic-chocolate-chip-cookies.jpg'
  WHEN translations->'en'->>'title' = 'Apple Chips with Cinnamon' THEN '/images/recipes/apple-chips-with-cinnamon.jpg'
  WHEN translations->'en'->>'title' = 'Pizza Dough Proofing' THEN '/images/recipes/pizza-dough-proofing.jpg'
  ELSE image_url
END,
updated_at = NOW()
WHERE translations->'en'->>'title' IN (
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
);

SELECT translations->'en'->>'title' AS title_en, image_url
FROM recipes
WHERE translations->'en'->>'title' IN (
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
ORDER BY display_order;
