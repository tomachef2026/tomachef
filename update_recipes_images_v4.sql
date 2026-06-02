-- TomaChef 食谱图片更新 v4 (Final)
-- 所有 10 张图片均为 AI 生成或 PDF 提取的平铺风格美食照
-- 600x600 JPEG 压缩优化，48-71KB
-- 在 Supabase SQL Editor 执行: https://supabase.com/dashboard/project/jtrhzphdttralmvdhtva/sql/new

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/oven-fried-buttermilk-chicken.jpg'
WHERE id = 'd3e69037-026c-48ae-9900-547f67f57106';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/garlic-bread.jpg'
WHERE id = '6f1a6aae-3482-48f5-8ec0-722b070150f3';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/everything-bagel-salmon-melt.jpg'
WHERE id = '0cb2eea8-8650-43db-8af7-8aef88a2b4f0';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/detroit-style-pan-pizza.jpg'
WHERE id = '98b809de-3dc1-44ce-ab93-3cf3bd86737e';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/chicken-pot-pie.jpg'
WHERE id = 'dad9c18e-da49-48cc-b71a-e0552ba0fa44';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/roast-chicken-root-vegetables.jpg'
WHERE id = '1b14c152-6ae9-4cc6-8d75-ede6f4aa0a74';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/broiled-lobster-tail.jpg'
WHERE id = 'd9daea15-915e-486d-b570-4a7c4b95dc62';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/classic-chocolate-chip-cookies.jpg'
WHERE id = '276e224a-b94d-4de6-a42b-196a3225dade';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/apple-chips-cinnamon.jpg'
WHERE id = '0f2f65e0-570d-4bfd-9b58-acf3c7fa80d9';

UPDATE recipes SET image_url = 'https://jtrhzphdttralmvdhtva.supabase.co/storage/v1/object/public/tomachef-assets/recipes/pizza-dough-proofing.jpg'
WHERE id = 'a000ecb5-5c4d-4ef8-876d-0e871bf65fd2';

-- 验证
SELECT display_order, translations->'en'->>'title' AS en_title, image_url FROM recipes WHERE is_active = true ORDER BY display_order;
