-- ============================================================
-- TomaChef 007: Seed products + starter recipes
-- Run in Supabase SQL Editor. Safe to re-run.
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  sku TEXT UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  icon TEXT,
  badge TEXT,
  price TEXT,
  image_url TEXT,
  colors JSONB DEFAULT '[]'::jsonb,
  specs JSONB DEFAULT '{}'::jsonb,
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products
  ADD COLUMN IF NOT EXISTS sku TEXT,
  ADD COLUMN IF NOT EXISTS name TEXT,
  ADD COLUMN IF NOT EXISTS description TEXT,
  ADD COLUMN IF NOT EXISTS category TEXT,
  ADD COLUMN IF NOT EXISTS icon TEXT,
  ADD COLUMN IF NOT EXISTS badge TEXT,
  ADD COLUMN IF NOT EXISTS price TEXT,
  ADD COLUMN IF NOT EXISTS image_url TEXT,
  ADD COLUMN IF NOT EXISTS colors JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS specs JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS active BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS name_zh TEXT,
  ADD COLUMN IF NOT EXISTS description_zh TEXT,
  ADD COLUMN IF NOT EXISTS name_es TEXT,
  ADD COLUMN IF NOT EXISTS description_es TEXT,
  ADD COLUMN IF NOT EXISTS name_fr TEXT,
  ADD COLUMN IF NOT EXISTS description_fr TEXT,
  ADD COLUMN IF NOT EXISTS name_ja TEXT,
  ADD COLUMN IF NOT EXISTS description_ja TEXT,
  ADD COLUMN IF NOT EXISTS name_pt TEXT,
  ADD COLUMN IF NOT EXISTS description_pt TEXT;

CREATE TABLE IF NOT EXISTS recipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  category TEXT,
  emoji TEXT,
  product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
  mode TEXT,
  temp TEXT,
  "time" TEXT,
  image_url TEXT,
  translations JSONB DEFAULT '{}'::jsonb,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE recipes
  ADD COLUMN IF NOT EXISTS title TEXT,
  ADD COLUMN IF NOT EXISTS category TEXT,
  ADD COLUMN IF NOT EXISTS emoji TEXT,
  ADD COLUMN IF NOT EXISTS product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS mode TEXT,
  ADD COLUMN IF NOT EXISTS temp TEXT,
  ADD COLUMN IF NOT EXISTS "time" TEXT,
  ADD COLUMN IF NOT EXISTS image_url TEXT,
  ADD COLUMN IF NOT EXISTS translations JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_sort_order ON products(sort_order);
CREATE INDEX IF NOT EXISTS idx_recipes_product_id ON recipes(product_id);
CREATE INDEX IF NOT EXISTS idx_recipes_display_order ON recipes(display_order);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM products LIMIT 1) THEN
    INSERT INTO products (id, sku, name, description, category, icon, badge, price, image_url, colors, specs, sort_order, active, name_zh, description_zh, name_es, description_es, name_fr, description_fr, name_ja, description_ja, name_pt, description_pt)
    VALUES
  (1, 'TC-AF-001', 'Digital Air Fryer 5.8QT', 'Touchscreen, 8 presets, 1700W', 'airfryer', '🍟', 'Bestseller', '$49.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"White","hex":"#f5f5f5"},{"name":"Red","hex":"#b91c1c"}]'::jsonb, '{"capacity":"5.8 QT","power":"1700W","presets":"8","temp":"90-400°F"}'::jsonb, 1, true, '数字触控空气炸锅 5.8QT', '触控屏，8种预设，1700W', 'Freidora de Aire Digital 5.8QT', 'Pantalla táctil, 8 programas, 1700W', 'Friteuse à Air Numérique 5.8QT', 'Écran tactile, 8 préréglages, 1700W', 'デジタルエアフライヤー 5.8QT', 'タッチスクリーン、8プリセット、1700W', 'Fritadeira de Ar Digital 5.8QT', 'Tela touch, 8 programas, 1700W'),
  (2, 'TC-AF-002', 'Visible Glass Air Fryer', '360° viewing window, 6QT, LED display', 'airfryer', '🔍', 'New', '$59.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"Stainless","hex":"#c0c0c0"}]'::jsonb, '{"capacity":"6 QT","power":"1700W","presets":"10","temp":"90-400°F"}'::jsonb, 2, true, '可视玻璃空气炸锅', '360°观察窗，6QT，LED显示', 'Freidora de Aire con Visor', 'Ventana 360°, 6QT, pantalla LED', 'Friteuse à Air avec Hublot', 'Fenêtre 360°, 6QT, affichage LED', '可視ガラスエアフライヤー', '360°ビューウィンドウ、6QT、LEDディスプレイ', 'Fritadeira de Ar com Visor', 'Visor 360°, 6QT, display LED'),
  (3, 'TC-AF-003', 'Dual Basket Air Fryer 8QT', 'DualZone tech, sync finish, 1700W', 'airfryer', '🍗', 'Hot', '$79.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"Silver","hex":"#d4d4d4"}]'::jsonb, '{"capacity":"8 QT","power":"1700W","presets":"6","temp":"90-450°F"}'::jsonb, 3, true, '双篮空气炸锅 8QT', '双区技术，同步完成，1700W', 'Freidora de Aire Doble Cesta 8QT', 'Tecnología DualZone, final sincronizado, 1700W', 'Friteuse à Air Double Panier 8QT', 'Technologie DualZone, finition synchronisée, 1700W', 'デュアルバスケットエアフライヤー 8QT', 'DualZone技術、同期仕上げ、1700W', 'Fritadeira de Ar Cesto Duplo 8QT', 'Tecnologia DualZone, final sincronizado, 1700W'),
  (4, 'TC-AF-004', 'Compact Air Fryer 3.5QT', 'Space-saving design, 1300W, 4 presets', 'airfryer', '🥗', '', '$34.99', '', '[{"name":"White","hex":"#f5f5f5"},{"name":"Mint","hex":"#a7d8c8"}]'::jsonb, '{"capacity":"3.5 QT","power":"1300W","presets":"4","temp":"90-400°F"}'::jsonb, 4, true, '迷你空气炸锅 3.5QT', '节省空间设计，1300W，4种预设', 'Freidora de Aire Compacta 3.5QT', 'Diseño compacto, 1300W, 4 programas', 'Friteuse à Air Compacte 3.5QT', 'Design compact, 1300W, 4 préréglages', 'コンパクトエアフライヤー 3.5QT', '省スペース設計、1300W、4プリセット', 'Fritadeira de Ar Compacta 3.5QT', 'Design compacto, 1300W, 4 programas'),
  (5, 'TC-AF-005', 'Smart WiFi Air Fryer', 'App control, voice ready, 5.8QT', 'airfryer', '📱', 'Smart', '$69.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"White","hex":"#f5f5f5"}]'::jsonb, '{"capacity":"5.8 QT","power":"1700W","presets":"12","temp":"90-400°F"}'::jsonb, 5, true, '智能WiFi空气炸锅', 'APP控制，语音就绪，5.8QT', 'Freidora de Aire WiFi Inteligente', 'Control por app, compatible con voz, 5.8QT', 'Friteuse à Air WiFi Intelligente', 'Contrôle par app, compatible vocal, 5.8QT', 'スマートWiFiエアフライヤー', 'アプリ制御、音声対応、5.8QT', 'Fritadeira de Ar WiFi Inteligente', 'Controle por app, pronto para voz, 5.8QT'),
  (6, 'TC-AF-006', 'Stainless Steel Air Fryer', 'Premium finish, 6.5QT, 1800W', 'airfryer', '✨', 'Premium', '$89.99', '', '[{"name":"Stainless","hex":"#c0c0c0"}]'::jsonb, '{"capacity":"6.5 QT","power":"1800W","presets":"10","temp":"90-450°F"}'::jsonb, 6, true, '不锈钢空气炸锅', '高级外观，6.5QT，1800W', 'Freidora de Aire de Acero Inoxidable', 'Acabado premium, 6.5QT, 1800W', 'Friteuse à Air en Acier Inoxydable', 'Finition premium, 6.5QT, 1800W', 'ステンレスエアフライヤー', 'プレミアム仕上げ、6.5QT、1800W', 'Fritadeira de Ar em Aço Inox', 'Acabamento premium, 6.5QT, 1800W'),
  (7, 'TC-AF-007', 'Mini Air Fryer 2.5QT', 'Personal size, 1000W, rapid air', 'airfryer', '🍳', '', '$24.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"Pink","hex":"#f4a7b9"}]'::jsonb, '{"capacity":"2.5 QT","power":"1000W","presets":"4","temp":"90-400°F"}'::jsonb, 7, true, '个人空气炸锅 2.5QT', '个人使用，1000W，快速空气循环', 'Mini Freidora de Aire 2.5QT', 'Tamaño personal, 1000W, aire rápido', 'Mini Friteuse à Air 2.5QT', 'Format personnel, 1000W, air rapide', 'ミニエアフライヤー 2.5QT', 'パーソナルサイズ、1000W、高速空気循環', 'Mini Fritadeira de Ar 2.5QT', 'Tamanho pessoal, 1000W, ar rápido'),
  (8, 'TC-AF-008', 'XL Air Fryer 10QT', 'Family size, 1800W, rotisserie', 'airfryer', '🦃', 'XL', '$99.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"Silver","hex":"#d4d4d4"}]'::jsonb, '{"capacity":"10 QT","power":"1800W","presets":"8","temp":"90-450°F"}'::jsonb, 8, true, '大容量空气炸锅 10QT', '家庭装，1800W，旋转烤叉', 'Freidora de Aire XL 10QT', 'Tamaño familiar, 1800W, rosticero', 'Friteuse à Air XL 10QT', 'Format familial, 1800W, rôtissoire', 'XLエアフライヤー 10QT', 'ファミリーサイズ、1800W、ロティサリー', 'Fritadeira de Ar XL 10QT', 'Tamanho família, 1800W, rotisseria'),
  (9, 'TC-AFO-001', '26QT Air Fryer Oven', '12-in-1, rotisserie, dehydrate, 1800W', 'airfryeroven', '🔥', 'Bestseller', '$119.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"Stainless","hex":"#c0c0c0"}]'::jsonb, '{"capacity":"26 QT","power":"1800W","functions":"12-in-1","temp":"90-450°F"}'::jsonb, 9, true, '26QT 空气炸烤箱', '12合1，旋转烤叉，脱水，1800W', 'Horno Freidor 26QT', '12 en 1, rosticero, deshidratador, 1800W', 'Four Friteuse 26QT', '12 en 1, rôtissoire, déshydrateur, 1800W', '26QTエアフライヤーオーブン', '12-in-1、ロティサリー、脱水、1800W', 'Forno Fritadeira 26QT', '12 em 1, rotisseria, desidratador, 1800W'),
  (10, 'TC-AFO-002', '32QT Convection Oven', 'Stainless steel, 10 presets, large capacity', 'airfryeroven', '🍕', 'Large', '$149.99', '', '[{"name":"Stainless","hex":"#c0c0c0"},{"name":"Black","hex":"#1a1a1a"}]'::jsonb, '{"capacity":"32 QT","power":"1800W","functions":"10","temp":"90-450°F"}'::jsonb, 10, true, '32QT 对流烤箱', '不锈钢，10种预设，大容量', 'Horno de Convección 32QT', 'Acero inoxidable, 10 programas, gran capacidad', 'Four à Convection 32QT', 'Acier inoxydable, 10 préréglages, grande capacité', '32QT対流オーブン', 'ステンレス、10プリセット、大容量', 'Forno de Convecção 32QT', 'Aço inox, 10 programas, grande capacidade'),
  (11, 'TC-AFO-003', 'Digital Air Fryer Toaster Oven', 'Smart presets, interior light, 1800W', 'airfryeroven', '📟', 'Smart', '$109.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"White","hex":"#f5f5f5"}]'::jsonb, '{"capacity":"25 QT","power":"1800W","functions":"10","temp":"90-450°F"}'::jsonb, 11, true, '数字空气炸烤面包机', '智能预设，内部照明，1800W', 'Horno Tostador Freidor Digital', 'Programas inteligentes, luz interior, 1800W', 'Four Grille-Pain Friteuse Numérique', 'Préréglages intelligents, éclairage intérieur, 1800W', 'デジタルエアフライヤートースターオーブン', 'スマートプリセット、内部照明、1800W', 'Forno Torradeira Fritadeira Digital', 'Programas inteligentes, luz interna, 1800W'),
  (12, 'TC-AFO-004', 'French Door Air Fryer Oven', '25QT, dual door, 12 functions', 'airfryeroven', '🚪', 'New', '$139.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"Stainless","hex":"#c0c0c0"}]'::jsonb, '{"capacity":"25 QT","power":"1800W","functions":"12","temp":"90-450°F"}'::jsonb, 12, true, '法式双门空气炸烤箱', '25QT，双门设计，12种功能', 'Horno Freidor Puerta Francesa 25QT', '25QT, puerta doble, 12 funciones', 'Four Friteuse Portes Françaises 25QT', '25QT, double porte, 12 fonctions', 'フレンチドアエアフライヤーオーブン', '25QT、デュアルドア、12機能', 'Forno Fritadeira Porta Francesa 25QT', '25QT, porta dupla, 12 funções'),
  (13, 'TC-AFO-005', 'Compact Air Fryer Oven 15QT', 'Countertop friendly, 6-in-1, 1500W', 'airfryeroven', '🏠', '', '$89.99', '', '[{"name":"White","hex":"#f5f5f5"},{"name":"Black","hex":"#1a1a1a"}]'::jsonb, '{"capacity":"15 QT","power":"1500W","functions":"6-in-1","temp":"90-400°F"}'::jsonb, 13, true, '紧凑型空气炸烤箱 15QT', '台面友好，6合1，1500W', 'Horno Freidor Compacto 15QT', 'Ideal para encimera, 6 en 1, 1500W', 'Four Friteuse Compact 15QT', 'Adapté au plan de travail, 6 en 1, 1500W', 'コンパクトエアフライヤーオーブン 15QT', 'カウンタートップ対応、6-in-1、1500W', 'Forno Fritadeira Compacto 15QT', 'Ideal para bancada, 6 em 1, 1500W'),
  (14, 'TC-TT-001', '4-Slice Stainless Toaster', 'Extra-wide slots, bagel mode, 1500W', 'toaster', '🍞', 'Bestseller', '$39.99', '', '[{"name":"Stainless","hex":"#c0c0c0"},{"name":"Black","hex":"#1a1a1a"},{"name":"Red","hex":"#b91c1c"}]'::jsonb, '{"slices":"4","power":"1500W","levels":"7","features":"Bagel/Defrost"}'::jsonb, 14, true, '4片不锈钢烤面包机', '加宽槽口，贝果模式，1500W', 'Tostadora Inox 4 Rebanadas', 'Ranuras extra anchas, modo bagel, 1500W', 'Grille-Pain Inox 4 Tranches', 'Fentes extra larges, mode bagel, 1500W', '4枚焼きステンレストースター', 'ワイドスロット、ベーグルモード、1500W', 'Torradeira Inox 4 Fatias', 'Ranhuras extra largas, modo bagel, 1500W'),
  (15, 'TC-TT-002', '2-Slice Retro Toaster', 'Vintage design, 7 browning levels', 'toaster', '🧈', 'Retro', '$29.99', '', '[{"name":"Cream","hex":"#fdf6e3"},{"name":"Mint","hex":"#a7d8c8"},{"name":"Red","hex":"#b91c1c"}]'::jsonb, '{"slices":"2","power":"900W","levels":"7","features":"Defrost/Reheat"}'::jsonb, 15, true, '2片复古烤面包机', '复古设计，7档烘烤程度', 'Tostadora Retro 2 Rebanadas', 'Diseño vintage, 7 niveles de tostado', 'Grille-Pain Rétro 2 Tranches', 'Design vintage, 7 niveaux de brunissage', '2枚焼きレトロトースター', 'ヴィンテージデザイン、7段階焼き色調整', 'Torradeira Retrô 2 Fatias', 'Design vintage, 7 níveis de tostagem'),
  (16, 'TC-TT-003', '4-Slice Digital Toaster', 'LCD display, countdown timer, memory function', 'toaster', '🖥️', 'Digital', '$49.99', '', '[{"name":"Black","hex":"#1a1a1a"},{"name":"Silver","hex":"#d4d4d4"}]'::jsonb, '{"slices":"4","power":"1600W","levels":"9","features":"LCD/Memory"}'::jsonb, 16, true, '4片数字烤面包机', 'LCD显示屏，倒计时器，记忆功能', 'Tostadora Digital 4 Rebanadas', 'Pantalla LCD, temporizador, función memoria', 'Grille-Pain Numérique 4 Tranches', 'Écran LCD, minuteur, fonction mémoire', '4枚焼きデジタルトースター', 'LCDディスプレイ、カウントダウンタイマー、メモリー機能', 'Torradeira Digital 4 Fatias', 'Display LCD, temporizador, função memória'),
  (17, 'TC-TT-004', 'Long Slot Toaster 2-Slice', 'Artisan bread ready, defrost mode, 900W', 'toaster', '🥖', '', '$34.99', '', '[{"name":"Stainless","hex":"#c0c0c0"},{"name":"Black","hex":"#1a1a1a"}]'::jsonb, '{"slices":"2","power":"900W","levels":"7","features":"Long Slot"}'::jsonb, 17, true, '长槽2片烤面包机', '适合手工面包，解冻模式，900W', 'Tostadora Ranura Larga 2 Rebanadas', 'Para pan artesanal, modo descongelar, 900W', 'Grille-Pain Fente Longue 2 Tranches', 'Pour pain artisanal, mode décongélation, 900W', 'ロングスロットトースター 2枚焼き', 'アーティザンブレッド対応、解凍モード、900W', 'Torradeira Ranhura Longa 2 Fatias', 'Para pão artesanal, modo descongelar, 900W'),
  (18, 'TC-TT-005', 'Commercial 4-Slice Toaster', 'Heavy-duty, high-speed, 1800W', 'toaster', '🏪', 'Commercial', '$69.99', '', '[{"name":"Stainless","hex":"#c0c0c0"}]'::jsonb, '{"slices":"4","power":"1800W","levels":"9","features":"Heavy Duty"}'::jsonb, 18, true, '商用4片烤面包机', '重型，高速，1800W', 'Tostadora Comercial 4 Rebanadas', 'Servicio pesado, alta velocidad, 1800W', 'Grille-Pain Commercial 4 Tranches', 'Usage intensif, haute vitesse, 1800W', '業務用4枚焼きトースター', 'ヘビーデューティー、高速、1800W', 'Torradeira Comercial 4 Fatias', 'Serviço pesado, alta velocidade, 1800W');
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM recipes LIMIT 1) THEN
    INSERT INTO recipes (category, emoji, product_id, translations, is_active, display_order)
    VALUES
  ('airfryer', '🍗', NULL, '{"en":{"title":"Crispy Air Fryer Chicken Wings","description":"Golden and crunchy in just 20 minutes — no oil needed."},"zh":{"title":"香脆空气炸鸡翅","description":"20分钟金黄酥脆，无需一滴油。"},"es":{"title":"Alitas Crujientes en Freidora de Aire","description":"Doradas y crujientes en solo 20 minutos."},"fr":{"title":"Ailes de Poulet Croustillantes","description":"Dorées et croustillantes en 20 minutes."},"ja":{"title":"カリカリエアフライヤーチキン","description":"20分で黄金色にカリッと。"},"pt":{"title":"Asinhas Crocantes na Air Fryer","description":"Douradas e crocantes em 20 minutos."}}'::jsonb, true, 1),
  ('airfryeroven', '🍕', NULL, '{"en":{"title":"Perfect Air Fryer Oven Pizza","description":"Restaurant-quality pizza from your air fryer oven in 15 minutes."},"zh":{"title":"空气炸烤箱披萨","description":"15分钟做出餐厅级披萨。"},"es":{"title":"Pizza Perfecta en Horno Freidor","description":"Pizza calidad restaurante en 15 minutos."},"fr":{"title":"Pizza Parfaite au Four Friteuse","description":"Pizza qualité restaurant en 15 minutes."},"ja":{"title":"完璧なエアフライヤーオーブンピザ","description":"15分でレストラン品質のピザ。"},"pt":{"title":"Pizza Perfeita no Forno Fritadeira","description":"Pizza qualidade restaurante em 15 minutos."}}'::jsonb, true, 2),
  ('toaster', '🥑', NULL, '{"en":{"title":"Avocado Toast 3 Ways","description":"Elevate your breakfast with these three gourmet avocado toast recipes."},"zh":{"title":"牛油果吐司三吃","description":"三种精致牛油果吐司，开启美好早晨。"},"es":{"title":"Tostada de Aguacate 3 Estilos","description":"Eleva tu desayuno con estas tres recetas gourmet."},"fr":{"title":"Tartine Avocat 3 Façons","description":"Sublimez votre petit-déjeuner avec ces recettes gourmandes."},"ja":{"title":"アボカドトースト3種","description":"3つのグルメレシピで朝食をワンランクアップ。"},"pt":{"title":"Torrada de Abacate 3 Estilos","description":"Eleve seu café da manhã com estas três receitas gourmet."}}'::jsonb, true, 3);
  END IF;
END $$;

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read products" ON products;
CREATE POLICY "Anyone can read products" ON products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Anyone can read recipes" ON recipes;
CREATE POLICY "Anyone can read recipes" ON recipes FOR SELECT USING (true);

SELECT 'products' AS table_name, COUNT(*) AS row_count FROM products
UNION ALL
SELECT 'recipes' AS table_name, COUNT(*) AS row_count FROM recipes;
