-- Step 1: Clear all recipe images (user will upload correct ones later)
UPDATE recipes SET image_url = NULL WHERE image_url IS NOT NULL;

-- Step 2: Delete incomplete product record if exists
DELETE FROM products WHERE id = 1;
