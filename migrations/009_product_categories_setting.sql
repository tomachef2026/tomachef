-- Product category management stored in site_settings.
-- The frontend can run without this row because supabase.js has a default fallback,
-- but inserting it makes the category list editable in Admin -> 品类管理.

INSERT INTO site_settings (key, value, updated_at)
VALUES (
  'product_categories',
  '[
    {
      "key": "airfryer",
      "icon": "🍟",
      "sort_order": 1,
      "active": true,
      "name_en": "Air Fryer",
      "name_zh": "空气炸锅",
      "name_es": "Freidora de Aire",
      "name_fr": "Friteuse à Air",
      "name_ja": "エアフライヤー",
      "name_pt": "Fritadeira de Ar",
      "desc_en": "Healthy frying with rapid air circulation technology.",
      "desc_zh": "快速空气循环技术，健康油炸。"
    },
    {
      "key": "airfryeroven",
      "icon": "🔥",
      "sort_order": 2,
      "active": true,
      "name_en": "Air Fryer Oven",
      "name_zh": "空气炸烤箱",
      "name_es": "Horno Freidor de Aire",
      "name_fr": "Four Friteuse à Air",
      "name_ja": "エアフライヤーオーブン",
      "name_pt": "Forno Fritadeira de Ar",
      "desc_en": "Air fry, bake, roast, dehydrate — all in one appliance.",
      "desc_zh": "空气炸、烘焙、烤制、脱水，一机多用。"
    },
    {
      "key": "toaster",
      "icon": "🍞",
      "sort_order": 3,
      "active": true,
      "name_en": "Toaster",
      "name_zh": "烤面包机",
      "name_es": "Tostadora",
      "name_fr": "Grille-Pain",
      "name_ja": "トースター",
      "name_pt": "Torradeira",
      "desc_en": "Reliable toasters for perfect results every morning.",
      "desc_zh": "可靠的时尚烤面包机，每天早晨完美出品。"
    }
  ]',
  NOW()
)
ON CONFLICT (key) DO NOTHING;
