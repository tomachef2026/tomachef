-- Add product-level display price for the public product detail page.
-- Leave values empty when a product should not show a front-end price.

ALTER TABLE products
ADD COLUMN IF NOT EXISTS price TEXT;
