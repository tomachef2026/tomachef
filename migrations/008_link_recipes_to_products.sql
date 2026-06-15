-- Link existing category recipes to the corresponding products shown on the site.
UPDATE recipes
SET product_id = 1,
    updated_at = NOW()
WHERE category = 'airfryer'
  AND product_id IS NULL;

UPDATE recipes
SET product_id = 2,
    updated_at = NOW()
WHERE category = 'toaster'
  AND product_id IS NULL;
