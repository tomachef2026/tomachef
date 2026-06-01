/* ============================================================
   TomaChef Products - API-first with fallback
   ============================================================ */

// Fallback static data (used when Supabase is not configured)
const FALLBACK_PRODUCTS = [
  { id:1, sku:'TC-AF-001', name:'Digital Air Fryer 5.8QT', name_zh:'数字触控空气炸锅 5.8QT', name_es:'Freidora de Aire Digital 5.8QT', name_fr:'Friteuse à Air Numérique 5.8QT', name_ja:'デジタルエアフライヤー 5.8QT', name_pt:'Fritadeira de Ar Digital 5.8QT', description:'Touchscreen, 8 presets, 1700W', description_zh:'触控屏，8种预设，1700W', description_es:'Pantalla táctil, 8 programas, 1700W', description_fr:'Écran tactile, 8 préréglages, 1700W', description_ja:'タッチスクリーン、8プリセット、1700W', description_pt:'Tela touch, 8 programas, 1700W', category:'airfryer', icon:'🍟', badge:'Bestseller', price:'$49.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'White',hex:'#f5f5f5'},{name:'Red',hex:'#b91c1c'}], specs:{capacity:'5.8 QT',power:'1700W',presets:'8',temp:'90-400°F'}, sort_order:1, active:true },
  { id:2, sku:'TC-AF-002', name:'Visible Glass Air Fryer', name_zh:'可视玻璃空气炸锅', name_es:'Freidora de Aire con Visor', name_fr:'Friteuse à Air avec Hublot', name_ja:'可視ガラスエアフライヤー', name_pt:'Fritadeira de Ar com Visor', description:'360° viewing window, 6QT, LED display', description_zh:'360°观察窗，6QT，LED显示', description_es:'Ventana 360°, 6QT, pantalla LED', description_fr:'Fenêtre 360°, 6QT, affichage LED', description_ja:'360°ビューウィンドウ、6QT、LEDディスプレイ', description_pt:'Visor 360°, 6QT, display LED', category:'airfryer', icon:'🔍', badge:'New', price:'$59.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'6 QT',power:'1700W',presets:'10',temp:'90-400°F'}, sort_order:2, active:true },
  { id:3, sku:'TC-AF-003', name:'Dual Basket Air Fryer 8QT', name_zh:'双篮空气炸锅 8QT', name_es:'Freidora de Aire Doble Cesta 8QT', name_fr:'Friteuse à Air Double Panier 8QT', name_ja:'デュアルバスケットエアフライヤー 8QT', name_pt:'Fritadeira de Ar Cesto Duplo 8QT', description:'DualZone tech, sync finish, 1700W', description_zh:'双区技术，同步完成，1700W', description_es:'Tecnología DualZone, final sincronizado, 1700W', description_fr:'Technologie DualZone, finition synchronisée, 1700W', description_ja:'DualZone技術、同期仕上げ、1700W', description_pt:'Tecnologia DualZone, final sincronizado, 1700W', category:'airfryer', icon:'🍗', badge:'Hot', price:'$79.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Silver',hex:'#d4d4d4'}], specs:{capacity:'8 QT',power:'1700W',presets:'6',temp:'90-450°F'}, sort_order:3, active:true },
  { id:4, sku:'TC-AF-004', name:'Compact Air Fryer 3.5QT', name_zh:'迷你空气炸锅 3.5QT', name_es:'Freidora de Aire Compacta 3.5QT', name_fr:'Friteuse à Air Compacte 3.5QT', name_ja:'コンパクトエアフライヤー 3.5QT', name_pt:'Fritadeira de Ar Compacta 3.5QT', description:'Space-saving design, 1300W, 4 presets', description_zh:'节省空间设计，1300W，4种预设', description_es:'Diseño compacto, 1300W, 4 programas', description_fr:'Design compact, 1300W, 4 préréglages', description_ja:'省スペース設計、1300W、4プリセット', description_pt:'Design compacto, 1300W, 4 programas', category:'airfryer', icon:'🥗', badge:'', price:'$34.99', image_url:'', colors:[{name:'White',hex:'#f5f5f5'},{name:'Mint',hex:'#a7d8c8'}], specs:{capacity:'3.5 QT',power:'1300W',presets:'4',temp:'90-400°F'}, sort_order:4, active:true },
  { id:5, sku:'TC-AF-005', name:'Smart WiFi Air Fryer', name_zh:'智能WiFi空气炸锅', name_es:'Freidora de Aire WiFi Inteligente', name_fr:'Friteuse à Air WiFi Intelligente', name_ja:'スマートWiFiエアフライヤー', name_pt:'Fritadeira de Ar WiFi Inteligente', description:'App control, voice ready, 5.8QT', description_zh:'APP控制，语音就绪，5.8QT', description_es:'Control por app, compatible con voz, 5.8QT', description_fr:'Contrôle par app, compatible vocal, 5.8QT', description_ja:'アプリ制御、音声対応、5.8QT', description_pt:'Controle por app, pronto para voz, 5.8QT', category:'airfryer', icon:'📱', badge:'Smart', price:'$69.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'White',hex:'#f5f5f5'}], specs:{capacity:'5.8 QT',power:'1700W',presets:'12',temp:'90-400°F'}, sort_order:5, active:true },
  { id:6, sku:'TC-AF-006', name:'Stainless Steel Air Fryer', name_zh:'不锈钢空气炸锅', name_es:'Freidora de Aire de Acero Inoxidable', name_fr:'Friteuse à Air en Acier Inoxydable', name_ja:'ステンレスエアフライヤー', name_pt:'Fritadeira de Ar em Aço Inox', description:'Premium finish, 6.5QT, 1800W', description_zh:'高级外观，6.5QT，1800W', description_es:'Acabado premium, 6.5QT, 1800W', description_fr:'Finition premium, 6.5QT, 1800W', description_ja:'プレミアム仕上げ、6.5QT、1800W', description_pt:'Acabamento premium, 6.5QT, 1800W', category:'airfryer', icon:'✨', badge:'Premium', price:'$89.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'6.5 QT',power:'1800W',presets:'10',temp:'90-450°F'}, sort_order:6, active:true },
  { id:7, sku:'TC-AF-007', name:'Mini Air Fryer 2.5QT', name_zh:'个人空气炸锅 2.5QT', name_es:'Mini Freidora de Aire 2.5QT', name_fr:'Mini Friteuse à Air 2.5QT', name_ja:'ミニエアフライヤー 2.5QT', name_pt:'Mini Fritadeira de Ar 2.5QT', description:'Personal size, 1000W, rapid air', description_zh:'个人使用，1000W，快速空气循环', description_es:'Tamaño personal, 1000W, aire rápido', description_fr:'Format personnel, 1000W, air rapide', description_ja:'パーソナルサイズ、1000W、高速空気循環', description_pt:'Tamanho pessoal, 1000W, ar rápido', category:'airfryer', icon:'🍳', badge:'', price:'$24.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Pink',hex:'#f4a7b9'}], specs:{capacity:'2.5 QT',power:'1000W',presets:'4',temp:'90-400°F'}, sort_order:7, active:true },
  { id:8, sku:'TC-AF-008', name:'XL Air Fryer 10QT', name_zh:'大容量空气炸锅 10QT', name_es:'Freidora de Aire XL 10QT', name_fr:'Friteuse à Air XL 10QT', name_ja:'XLエアフライヤー 10QT', name_pt:'Fritadeira de Ar XL 10QT', description:'Family size, 1800W, rotisserie', description_zh:'家庭装，1800W，旋转烤叉', description_es:'Tamaño familiar, 1800W, rosticero', description_fr:'Format familial, 1800W, rôtissoire', description_ja:'ファミリーサイズ、1800W、ロティサリー', description_pt:'Tamanho família, 1800W, rotisseria', category:'airfryer', icon:'🦃', badge:'XL', price:'$99.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Silver',hex:'#d4d4d4'}], specs:{capacity:'10 QT',power:'1800W',presets:'8',temp:'90-450°F'}, sort_order:8, active:true },
  { id:9, sku:'TC-AFO-001', name:'26QT Air Fryer Oven', name_zh:'26QT 空气炸烤箱', name_es:'Horno Freidor 26QT', name_fr:'Four Friteuse 26QT', name_ja:'26QTエアフライヤーオーブン', name_pt:'Forno Fritadeira 26QT', description:'12-in-1, rotisserie, dehydrate, 1800W', description_zh:'12合1，旋转烤叉，脱水，1800W', description_es:'12 en 1, rosticero, deshidratador, 1800W', description_fr:'12 en 1, rôtissoire, déshydrateur, 1800W', description_ja:'12-in-1、ロティサリー、脱水、1800W', description_pt:'12 em 1, rotisseria, desidratador, 1800W', category:'airfryeroven', icon:'🔥', badge:'Bestseller', price:'$119.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'26 QT',power:'1800W',functions:'12-in-1',temp:'90-450°F'}, sort_order:9, active:true },
  { id:10, sku:'TC-AFO-002', name:'32QT Convection Oven', name_zh:'32QT 对流烤箱', name_es:'Horno de Convección 32QT', name_fr:'Four à Convection 32QT', name_ja:'32QT対流オーブン', name_pt:'Forno de Convecção 32QT', description:'Stainless steel, 10 presets, large capacity', description_zh:'不锈钢，10种预设，大容量', description_es:'Acero inoxidable, 10 programas, gran capacidad', description_fr:'Acier inoxydable, 10 préréglages, grande capacité', description_ja:'ステンレス、10プリセット、大容量', description_pt:'Aço inox, 10 programas, grande capacidade', category:'airfryeroven', icon:'🍕', badge:'Large', price:'$149.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'},{name:'Black',hex:'#1a1a1a'}], specs:{capacity:'32 QT',power:'1800W',functions:'10',temp:'90-450°F'}, sort_order:10, active:true },
  { id:11, sku:'TC-AFO-003', name:'Digital Air Fryer Toaster Oven', name_zh:'数字空气炸烤面包机', name_es:'Horno Tostador Freidor Digital', name_fr:'Four Grille-Pain Friteuse Numérique', name_ja:'デジタルエアフライヤートースターオーブン', name_pt:'Forno Torradeira Fritadeira Digital', description:'Smart presets, interior light, 1800W', description_zh:'智能预设，内部照明，1800W', description_es:'Programas inteligentes, luz interior, 1800W', description_fr:'Préréglages intelligents, éclairage intérieur, 1800W', description_ja:'スマートプリセット、内部照明、1800W', description_pt:'Programas inteligentes, luz interna, 1800W', category:'airfryeroven', icon:'📟', badge:'Smart', price:'$109.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'White',hex:'#f5f5f5'}], specs:{capacity:'25 QT',power:'1800W',functions:'10',temp:'90-450°F'}, sort_order:11, active:true },
  { id:12, sku:'TC-AFO-004', name:'French Door Air Fryer Oven', name_zh:'法式双门空气炸烤箱', name_es:'Horno Freidor Puerta Francesa 25QT', name_fr:'Four Friteuse Portes Françaises 25QT', name_ja:'フレンチドアエアフライヤーオーブン', name_pt:'Forno Fritadeira Porta Francesa 25QT', description:'25QT, dual door, 12 functions', description_zh:'25QT，双门设计，12种功能', description_es:'25QT, puerta doble, 12 funciones', description_fr:'25QT, double porte, 12 fonctions', description_ja:'25QT、デュアルドア、12機能', description_pt:'25QT, porta dupla, 12 funções', category:'airfryeroven', icon:'🚪', badge:'New', price:'$139.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'25 QT',power:'1800W',functions:'12',temp:'90-450°F'}, sort_order:12, active:true },
  { id:13, sku:'TC-AFO-005', name:'Compact Air Fryer Oven 15QT', name_zh:'紧凑型空气炸烤箱 15QT', name_es:'Horno Freidor Compacto 15QT', name_fr:'Four Friteuse Compact 15QT', name_ja:'コンパクトエアフライヤーオーブン 15QT', name_pt:'Forno Fritadeira Compacto 15QT', description:'Countertop friendly, 6-in-1, 1500W', description_zh:'台面友好，6合1，1500W', description_es:'Ideal para encimera, 6 en 1, 1500W', description_fr:'Adapté au plan de travail, 6 en 1, 1500W', description_ja:'カウンタートップ対応、6-in-1、1500W', description_pt:'Ideal para bancada, 6 em 1, 1500W', category:'airfryeroven', icon:'🏠', badge:'', price:'$89.99', image_url:'', colors:[{name:'White',hex:'#f5f5f5'},{name:'Black',hex:'#1a1a1a'}], specs:{capacity:'15 QT',power:'1500W',functions:'6-in-1',temp:'90-400°F'}, sort_order:13, active:true },
  { id:14, sku:'TC-TT-001', name:'4-Slice Stainless Toaster', name_zh:'4片不锈钢烤面包机', name_es:'Tostadora Inox 4 Rebanadas', name_fr:'Grille-Pain Inox 4 Tranches', name_ja:'4枚焼きステンレストースター', name_pt:'Torradeira Inox 4 Fatias', description:'Extra-wide slots, bagel mode, 1500W', description_zh:'加宽槽口，贝果模式，1500W', description_es:'Ranuras extra anchas, modo bagel, 1500W', description_fr:'Fentes extra larges, mode bagel, 1500W', description_ja:'ワイドスロット、ベーグルモード、1500W', description_pt:'Ranhuras extra largas, modo bagel, 1500W', category:'toaster', icon:'🍞', badge:'Bestseller', price:'$39.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'},{name:'Black',hex:'#1a1a1a'},{name:'Red',hex:'#b91c1c'}], specs:{slices:'4',power:'1500W',levels:'7',features:'Bagel/Defrost'}, sort_order:14, active:true },
  { id:15, sku:'TC-TT-002', name:'2-Slice Retro Toaster', name_zh:'2片复古烤面包机', name_es:'Tostadora Retro 2 Rebanadas', name_fr:'Grille-Pain Rétro 2 Tranches', name_ja:'2枚焼きレトロトースター', name_pt:'Torradeira Retrô 2 Fatias', description:'Vintage design, 7 browning levels', description_zh:'复古设计，7档烘烤程度', description_es:'Diseño vintage, 7 niveles de tostado', description_fr:'Design vintage, 7 niveaux de brunissage', description_ja:'ヴィンテージデザイン、7段階焼き色調整', description_pt:'Design vintage, 7 níveis de tostagem', category:'toaster', icon:'🧈', badge:'Retro', price:'$29.99', image_url:'', colors:[{name:'Cream',hex:'#fdf6e3'},{name:'Mint',hex:'#a7d8c8'},{name:'Red',hex:'#b91c1c'}], specs:{slices:'2',power:'900W',levels:'7',features:'Defrost/Reheat'}, sort_order:15, active:true },
  { id:16, sku:'TC-TT-003', name:'4-Slice Digital Toaster', name_zh:'4片数字烤面包机', name_es:'Tostadora Digital 4 Rebanadas', name_fr:'Grille-Pain Numérique 4 Tranches', name_ja:'4枚焼きデジタルトースター', name_pt:'Torradeira Digital 4 Fatias', description:'LCD display, countdown timer, memory function', description_zh:'LCD显示屏，倒计时器，记忆功能', description_es:'Pantalla LCD, temporizador, función memoria', description_fr:'Écran LCD, minuteur, fonction mémoire', description_ja:'LCDディスプレイ、カウントダウンタイマー、メモリー機能', description_pt:'Display LCD, temporizador, função memória', category:'toaster', icon:'🖥️', badge:'Digital', price:'$49.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Silver',hex:'#d4d4d4'}], specs:{slices:'4',power:'1600W',levels:'9',features:'LCD/Memory'}, sort_order:16, active:true },
  { id:17, sku:'TC-TT-004', name:'Long Slot Toaster 2-Slice', name_zh:'长槽2片烤面包机', name_es:'Tostadora Ranura Larga 2 Rebanadas', name_fr:'Grille-Pain Fente Longue 2 Tranches', name_ja:'ロングスロットトースター 2枚焼き', name_pt:'Torradeira Ranhura Longa 2 Fatias', description:'Artisan bread ready, defrost mode, 900W', description_zh:'适合手工面包，解冻模式，900W', description_es:'Para pan artesanal, modo descongelar, 900W', description_fr:'Pour pain artisanal, mode décongélation, 900W', description_ja:'アーティザンブレッド対応、解凍モード、900W', description_pt:'Para pão artesanal, modo descongelar, 900W', category:'toaster', icon:'🥖', badge:'', price:'$34.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'},{name:'Black',hex:'#1a1a1a'}], specs:{slices:'2',power:'900W',levels:'7',features:'Long Slot'}, sort_order:17, active:true },
  { id:18, sku:'TC-TT-005', name:'Commercial 4-Slice Toaster', name_zh:'商用4片烤面包机', name_es:'Tostadora Comercial 4 Rebanadas', name_fr:'Grille-Pain Commercial 4 Tranches', name_ja:'業務用4枚焼きトースター', name_pt:'Torradeira Comercial 4 Fatias', description:'Heavy-duty, high-speed, 1800W', description_zh:'重型，高速，1800W', description_es:'Servicio pesado, alta velocidad, 1800W', description_fr:'Usage intensif, haute vitesse, 1800W', description_ja:'ヘビーデューティー、高速、1800W', description_pt:'Serviço pesado, alta velocidade, 1800W', category:'toaster', icon:'🏪', badge:'Commercial', price:'$69.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'}], specs:{slices:'4',power:'1800W',levels:'9',features:'Heavy Duty'}, sort_order:18, active:true }
];

// Fallback recipe data (shown when Supabase has no recipes)
const FALLBACK_RECIPES = [
  { id:1, title:'Crispy Air Fryer Chicken Wings', category:'airfryer', emoji:'🍗', product_id: null,
    translations: { en:{title:'Crispy Air Fryer Chicken Wings',description:'Golden and crunchy in just 20 minutes — no oil needed.'}, zh:{title:'香脆空气炸鸡翅',description:'20分钟金黄酥脆，无需一滴油。'}, es:{title:'Alitas Crujientes en Freidora de Aire',description:'Doradas y crujientes en solo 20 minutos.'}, fr:{title:'Ailes de Poulet Croustillantes',description:'Dorées et croustillantes en 20 minutes.'}, ja:{title:'カリカリエアフライヤーチキン',description:'20分で黄金色にカリッと。'}, pt:{title:'Asinhas Crocantes na Air Fryer',description:'Douradas e crocantes em 20 minutos.'} },
    is_active:true, display_order:1 },
  { id:2, title:'Perfect Air Fryer Oven Pizza', category:'airfryeroven', emoji:'🍕', product_id: null,
    translations: { en:{title:'Perfect Air Fryer Oven Pizza',description:'Restaurant-quality pizza from your air fryer oven in 15 minutes.'}, zh:{title:'空气炸烤箱披萨',description:'15分钟做出餐厅级披萨。'}, es:{title:'Pizza Perfecta en Horno Freidor',description:'Pizza calidad restaurante en 15 minutos.'}, fr:{title:'Pizza Parfaite au Four Friteuse',description:'Pizza qualité restaurant en 15 minutes.'}, ja:{title:'完璧なエアフライヤーオーブンピザ',description:'15分でレストラン品質のピザ。'}, pt:{title:'Pizza Perfeita no Forno Fritadeira',description:'Pizza qualidade restaurante em 15 minutos.'} },
    is_active:true, display_order:2 },
  { id:3, title:'Avocado Toast 3 Ways', category:'toaster', emoji:'🥑', product_id: null,
    translations: { en:{title:'Avocado Toast 3 Ways',description:'Elevate your breakfast with these three gourmet avocado toast recipes.'}, zh:{title:'牛油果吐司三吃',description:'三种精致牛油果吐司，开启美好早晨。'}, es:{title:'Tostada de Aguacate 3 Estilos',description:'Eleva tu desayuno con estas tres recetas gourmet.'}, fr:{title:'Tartine Avocat 3 Façons',description:'Sublimez votre petit-déjeuner avec ces recettes gourmandes.'}, ja:{title:'アボカドトースト3種',description:'3つのグルメレシピで朝食をワンランクアップ。'}, pt:{title:'Torrada de Abacate 3 Estilos',description:'Eleve seu café da manhã com estas três receitas gourmet.'} },
    is_active:true, display_order:3 },
  // === 11-in-1 Air Fryer Oven Recipes ===
  { id:4, title:'Oven-Fried Buttermilk Chicken', category:'airfryeroven', emoji:'🍗', product_id: null,
    mode:'Air Fryer', temp:'375°F (190°C)', time:'25-30 minutes',
    translations: {
      en:{title:'Oven-Fried Buttermilk Chicken',description:'Crispy, golden fried chicken with juicy buttermilk-marinated meat — no deep frying needed.',content:'',
        ingredients:['4 chicken drumsticks','1 cup buttermilk','1½ cups all-purpose flour','1 tsp paprika','1 tsp garlic powder','½ tsp cayenne','Salt and pepper'],
        directions:['Marinate chicken in room-temperature buttermilk for at least 30 minutes. If time permits, soak overnight for the most tender flavor.','Combine flour, paprika, garlic powder, cayenne, salt, and pepper in a shallow dish.','One at a time, remove chicken pieces from the buttermilk mixture, shaking off excess, and coat thoroughly in the flour mixture. For extra thick crust, repeat for second coat.','Arrange chicken in a single layer and air fry at 375°F for 25-30 minutes, flipping halfway for even browning and crispness.'],
        tips:['For extra thick crust, repeat for second coat.','Let the chicken rest at room temperature for at least 5 minutes after coating before placing into the fryer.','Use a meat thermometer — chicken is done when internal temperature reaches 165°F (74°C).']},
      zh:{title:'酪乳脆皮炸鸡',description:'金黄酥脆的酪乳腌制炸鸡，鲜嫩多汁 — 无需油炸。',content:'',
        ingredients:['4只鸡腿','1杯酪乳','1½杯中筋面粉','1茶匙红椒粉','1茶匙蒜粉','½茶匙辣椒粉','盐和黑胡椒'],
        directions:['将鸡肉在室温酪乳中腌制至少30分钟。如有时间，浸泡过夜以获得最鲜嫩的口感。','将面粉、红椒粉、蒜粉、辣椒粉、盐和胡椒混合在浅盘中。','一次一块，将鸡肉从酪乳中取出，抖掉多余的液体，然后均匀沾满面粉混合物。想要更厚的脆皮，可以重复裹面一次。','将鸡肉单层摆放，在375°F下空气炸25-30分钟，中途翻面以确保均匀上色和酥脆。'],
        tips:['想要更厚的脆皮，重复裹面一次。','裹好面后让鸡肉在室温下静置至少5分钟再放入炸锅。','使用肉类温度计 — 鸡肉内部温度达到165°F (74°C) 时即熟。']},
      es:{title:'Pollo Frito con Suero de Leche',description:'Pollo frito crujiente y dorado con carne jugosa marinada en suero de leche — sin freír en aceite.',content:'',
        ingredients:['4 muslos de pollo','1 taza de suero de leche','1½ tazas de harina','1 cdta de pimentón','1 cdta de ajo en polvo','½ cdta de cayena','Sal y pimienta'],
        directions:['Marinar el pollo en suero de leche a temperatura ambiente durante al menos 30 minutos. Si es posible, remojar durante la noche.','Mezclar harina, pimentón, ajo en polvo, cayena, sal y pimienta en un plato.','Retirar los trozos de pollo del suero, sacudir el exceso y cubrir completamente con la mezcla de harina. Para una corteza extra gruesa, repetir.','Colocar el pollo en una sola capa y freír con aire a 190°C durante 25-30 minutos, volteando a la mitad.'],
        tips:['Para una corteza extra gruesa, repetir el empanizado.','Dejar reposar el pollo 5 minutos a temperatura ambiente después de empanizar.','Usar un termómetro de carne — el pollo está listo a 74°C.']},
      fr:{title:'Poulet Frit au Babeurre',description:'Poulet frit croustillant et doré avec une viande juteuse marinée au babeurre — sans friture.',content:'',
        ingredients:['4 pilons de poulet','250ml de babeurre','180g de farine','1 cc de paprika','1 cc d\'ail en poudre','½ cc de cayenne','Sel et poivre'],
        directions:['Faire mariner le poulet dans le babeurre à température ambiante pendant au moins 30 minutes. Idéalement, laisser tremper toute la nuit.','Mélanger la farine, le paprika, l\'ail, le cayenne, le sel et le poivre dans un plat.','Retirer les morceaux de poulet du babeurre, secouer l\'excédent et bien enrober du mélange de farine. Pour une croûte plus épaisse, répéter.','Disposer le poulet en une seule couche et cuire à 190°C pendant 25-30 minutes, en retournant à mi-cuisson.'],
        tips:['Pour une croûte plus épaisse, répéter l\'enrobage.','Laisser reposer le poulet 5 minutes à température ambiante après l\'enrobage.','Utiliser un thermomètre — le poulet est cuit à 74°C.']},
      ja:{title:'バターミルクフライドチキン',description:'カリッと黄金色のフライドチキン、バターミルク漬けでジューシー — 揚げ油不要。',content:'',
        ingredients:['鶏ドラムスティック 4本','バターミルク 240ml','小麦粉 180g','パプリカ 小さじ1','ガーリックパウダー 小さじ1','カイエンペッパー 小さじ½','塩・コショウ'],
        directions:['鶏肉を室温のバターミルクに少なくとも30分漬け込む。時間があれば一晩漬けるとより柔らかく。','小麦粉、パプリカ、ガーリックパウダー、カイエン、塩コショウを浅い皿で混ぜる。','鶏肉を1本ずつバターミルクから取り出し、余分な液を落として粉ミックスにしっかりまぶす。厚い衣にしたい場合はもう一度繰り返す。','鶏肉を単層に並べ、190°Cで25〜30分エアフライ、途中でひっくり返す。'],
        tips:['厚い衣にしたい場合は、もう一度粉をまぶす。','衣をつけた後、室温で5分ほど置いてから調理する。','肉用温度計を使う — 中心温度74°Cで完成。']},
      pt:{title:'Frango Frito com Buttermilk',description:'Frango frito crocante e dourado com carne suculenta marinada em buttermilk — sem fritura em óleo.',content:'',
        ingredients:['4 coxas de frango','1 xícara de buttermilk','1½ xícaras de farinha','1 colher de chá de páprica','1 colher de chá de alho em pó','½ colher de chá de pimenta caiena','Sal e pimenta'],
        directions:['Marinar o frango em buttermilk em temperatura ambiente por pelo menos 30 minutos. Se possível, deixe de molho durante a noite.','Misture farinha, páprica, alho em pó, caiena, sal e pimenta em um prato.','Retire os pedaços de frango do buttermilk, sacuda o excesso e cubra completamente com a mistura de farinha. Para crosta extra grossa, repita.','Disponha o frango em uma única camada e frite com ar a 190°C por 25-30 minutos, virando na metade.'],
        tips:['Para crosta extra grossa, repita o empanamento.','Deixe o frango descansar 5 minutos em temperatura ambiente após empanar.','Use um termômetro de carne — o frango está pronto a 74°C.']}
    }, is_active:true, display_order:4 },
  { id:5, title:'Garlic Bread (Bakery-Style)', category:'airfryeroven', emoji:'🧄', product_id: null,
    mode:'Bake/Toast', temp:'400°F (200°C)', time:'8-16 minutes',
    translations: {
      en:{title:'Garlic Bread (Bakery-Style)',description:'Crispy, golden garlic bread with a soft buttery center — just like your favorite bakery.',content:'',
        ingredients:['1 loaf Italian or French bread, halved lengthwise','½ cup unsalted butter, softened','4 cloves garlic, minced','2 tbsp fresh parsley, finely chopped','¼ cup Parmesan cheese, grated','½ tsp sea salt','Optional: ½ cup shredded mozzarella'],
        directions:['Preheat the air fryer oven to 400°F (200°C) on Bake/Toast mode.','In a small bowl, combine softened butter, minced garlic, chopped parsley, Parmesan, and salt. Mix until well blended.','Spread the garlic butter mixture evenly over the cut sides of the bread halves. Sprinkle mozzarella on top if using.','Place bread halves in the air fryer oven, cut side up. Bake for 8-12 minutes until edges are golden and butter is bubbling. For extra crispy, add 2-4 minutes.','Remove, slice into strips, and serve warm.'],
        tips:['For extra garlic flavor, roast the garlic cloves first for 5 minutes before mixing into butter.','Use day-old bread — it holds up better to the butter and gets crispier.','Watch closely after the 8-minute mark — ovens vary and garlic can burn quickly.']},
      zh:{title:'面包店风格蒜香面包',description:'外酥内软的黄金蒜香面包，浓郁的黄油蒜香 — 复刻你最爱面包店的味道。',content:'',
        ingredients:['1条意式或法式面包，纵向对半切开','½杯无盐黄油，软化','4瓣大蒜，切碎','2汤匙新鲜欧芹，切碎','¼杯帕玛森芝士，磨碎','½茶匙海盐','可选：½杯马苏里拉芝士丝'],
        directions:['将空气炸烤箱预热至400°F (200°C)，选择烘烤/吐司模式。','在小碗中混合软化黄油、蒜末、欧芹、帕玛森芝士和盐，搅拌均匀。','将蒜香黄油均匀涂抹在面包的切面上。如使用马苏里拉，撒在上面。','将面包切面朝上放入空气炸烤箱，烘烤8-12分钟，直到边缘金黄、黄油冒泡。想要更脆可再加2-4分钟。','取出，切成条状，趁热享用。'],
        tips:['想要更浓郁的蒜香，先将蒜瓣烤5分钟再加入黄油中。','用隔夜面包效果更好 — 更能吸收黄油且更酥脆。','8分钟后密切观察 — 不同烤箱火力不同，蒜容易烤焦。']},
      es:{title:'Pan de Ajo Estilo Panadería',description:'Pan de ajo crujiente y dorado con un centro suave y mantecoso — como el de tu panadería favorita.',content:'',
        ingredients:['1 barra de pan italiano o francés, cortado a lo largo','½ taza de mantequilla sin sal, ablandada','4 dientes de ajo, picados','2 cdas de perejil fresco, picado','¼ taza de queso parmesano, rallado','½ cdta de sal marina','Opcional: ½ taza de mozzarella rallada'],
        directions:['Precalentar el horno freidor a 200°C en modo Hornear/Tostar.','Mezclar la mantequilla ablandada, ajo picado, perejil, parmesano y sal.','Untar la mezcla sobre los lados cortados del pan. Espolvorear mozzarella si se desea.','Colocar el pan con el corte hacia arriba y hornear 8-12 minutos hasta que esté dorado. Para más crujiente, añadir 2-4 minutos.','Retirar, cortar en tiras y servir caliente.'],
        tips:['Para más sabor a ajo, asar los dientes de ajo 5 minutos antes de mezclar.','Usar pan del día anterior — absorbe mejor la mantequilla y queda más crujiente.','Vigilar después de 8 minutos — el ajo puede quemarse rápido.']},
      fr:{title:'Pain à l\'Ail Façon Boulangerie',description:'Pain à l\'ail croustillant et doré avec un cœur tendre au beurre — comme à la boulangerie.',content:'',
        ingredients:['1 pain italien ou français, coupé en deux dans la longueur','125g de beurre doux, ramolli','4 gousses d\'ail, émincées','2 càs de persil frais, haché','30g de parmesan, râpé','½ cc de sel de mer','Option: 60g de mozzarella râpée'],
        directions:['Préchauffer le four friteuse à 200°C en mode Cuire/Griller.','Mélanger le beurre ramolli, l\'ail émincé, le persil, le parmesan et le sel.','Étaler le mélange sur les faces coupées du pain. Parsemer de mozzarella si désiré.','Placer le pain face coupée vers le haut et cuire 8-12 minutes jusqu\'à ce qu\'il soit doré. Pour plus de croustillant, ajouter 2-4 minutes.','Retirer, couper en tranches et servir chaud.'],
        tips:['Pour plus de goût, rôtir les gousses d\'ail 5 minutes avant de les mélanger au beurre.','Utiliser du pain de la veille — il absorbe mieux le beurre.','Surveiller après 8 minutes — l\'ail peut brûler rapidement.']},
      ja:{title:'ベーカリースタイルガーリックブレッド',description:'カリッと黄金色のガーリックブレッド、中心はバターでしっとり — お気に入りのベーカリーのような味わい。',content:'',
        ingredients:['イタリアンまたはフランスパン 1本（縦半分にカット）','無塩バター 120g（室温で柔らかく）','にんにく 4片（みじん切り）','新鮮パセリ 大さじ2（みじん切り）','パルメザンチーズ 30g（すりおろし）','海塩 小さじ½','お好みで：モッツァレラ 60g（千切り）'],
        directions:['エアフライヤーオーブンを200°Cに予熱、ベイク/トーストモード。','柔らかくしたバター、にんにく、パセリ、パルメザン、塩を混ぜ合わせる。','パンの切り口にガーリックバターを均等に塗る。お好みでモッツァレラをのせる。','切り口を上にしてオーブンに入れ、8〜12分焼く。よりカリッとさせたい場合は2〜4分追加。','取り出してスライスし、温かいうちに召し上がれ。'],
        tips:['より濃いガーリック風味にしたい場合は、にんにくを5分ローストしてからバターに混ぜる。','前日のパンを使うとよりカリッと仕上がる。','8分経過後は注意深く見守る — にんにくは焦げやすい。']},
      pt:{title:'Pão de Alho Estilo Padaria',description:'Pão de alho crocante e dourado com centro macio e amanteigado — como o da sua padaria favorita.',content:'',
        ingredients:['1 pão italiano ou francês, cortado ao meio no comprimento','½ xícara de manteiga sem sal, amolecida','4 dentes de alho, picados','2 colheres de sopa de salsinha fresca, picada','¼ xícara de queijo parmesão, ralado','½ colher de chá de sal marinho','Opcional: ½ xícara de mussarela ralada'],
        directions:['Pré-aqueça o forno fritadeira a 200°C no modo Assar/Tostar.','Misture a manteiga amolecida, alho picado, salsinha, parmesão e sal.','Espalhe a mistura sobre os lados cortados do pão. Polvilhe mussarela se desejar.','Coloque o pão com o corte para cima e asse por 8-12 minutos até dourar. Para mais crocância, adicione 2-4 minutos.','Retire, corte em tiras e sirva quente.'],
        tips:['Para mais sabor de alho, asse os dentes de alho por 5 minutos antes de misturar.','Use pão do dia anterior — absorve melhor a manteiga.','Observe após 8 minutos — o alho pode queimar rápido.']}
    }, is_active:true, display_order:5 },
  { id:6, title:'Everything Bagel Salmon Melt', category:'airfryeroven', emoji:'🥯', product_id: null,
    mode:'Bake/Roast', temp:'425°F (220°C)', time:'13-18 minutes',
    translations: {
      en:{title:'Everything Bagel Salmon Melt',description:'An open-faced bagel loaded with cream cheese, smoked salmon, and melted cheese — brunch perfection.',content:'',
        ingredients:['2 everything bagels, halved','4 oz cream cheese, softened','6 oz smoked salmon','1 tbsp capers','¼ red onion, thinly sliced','1 cup shredded mozzarella or Swiss cheese','Fresh dill for garnish','Lemon wedges for serving'],
        directions:['Preheat the air fryer oven to 425°F (220°C) on Bake/Roast mode.','Spread cream cheese evenly on each bagel half. Layer smoked salmon on top, then scatter capers and red onion slices.','Generously top each bagel half with shredded cheese — this creates the "melt" effect.','Place bagels on the rack and bake for 8-11 minutes until the cheese is melted, bubbly, and lightly golden.','Remove, garnish with fresh dill, and serve immediately with lemon wedges.'],
        tips:['For extra flavor, spread a thin layer of Dijon mustard under the cream cheese.','Don\'t over-bake — the salmon should stay moist and tender.','Serve with a simple arugula salad on the side for a complete brunch.']},
      zh:{title:'贝果三文鱼芝士焗烤',description:'开面贝果搭配奶油芝士、烟熏三文鱼和融化芝士 — 完美早午餐之选。',content:'',
        ingredients:['2个Everything贝果，对半切开','4盎司奶油芝士，软化','6盎司烟熏三文鱼','1汤匙酸豆','¼个红洋葱，切薄片','1杯马苏里拉或瑞士芝士丝','新鲜莳萝装饰','柠檬角佐餐'],
        directions:['将空气炸烤箱预热至425°F (220°C)，选择烘焙/烧烤模式。','在每个贝果半面上均匀涂抹奶油芝士。铺上烟熏三文鱼，撒上酸豆和红洋葱片。','每个贝果上厚厚地撒满芝士丝 — 这是"焗烤"效果的关键。','将贝果放在烤架上，烤8-11分钟，直到芝士融化、冒泡、微微金黄。','取出，撒上新鲜莳萝，搭配柠檬角立即上桌。'],
        tips:['想要更丰富的味道，在奶油芝士下涂一层薄薄的第戎芥末。','不要烤太久 — 三文鱼应该保持湿润鲜嫩。','搭配简单的芝麻菜沙拉，就是完美的早午餐。']},
      es:{title:'Bagel Derretido con Salmón',description:'Bagel abierto con queso crema, salmón ahumado y queso derretido — perfección para el brunch.',content:'',
        ingredients:['2 bagels everything, partidos por la mitad','115g de queso crema, ablandado','170g de salmón ahumado','1 cda de alcaparras','¼ de cebolla morada, en rodajas finas','1 taza de mozzarella o queso suizo rallado','Eneldo fresco para decorar','Gajos de limón para servir'],
        directions:['Precalentar el horno freidor a 220°C en modo Hornear/Asar.','Untar el queso crema en cada mitad de bagel. Colocar el salmón ahumado encima y esparcir alcaparras y cebolla.','Cubrir generosamente con queso rallado.','Colocar en la rejilla y hornear 8-11 minutos hasta que el queso esté derretido y burbujeante.','Retirar, decorar con eneldo fresco y servir con limón.'],
        tips:['Para más sabor, untar mostaza Dijon debajo del queso crema.','No hornear demasiado — el salmón debe quedar húmedo.','Servir con ensalada de rúcula para un brunch completo.']},
      fr:{title:'Bagel Fondant au Saumon',description:'Bagel ouvert garni de fromage frais, saumon fumé et fromage fondu — le brunch parfait.',content:'',
        ingredients:['2 bagels everything, coupés en deux','115g de fromage frais, ramolli','170g de saumon fumé','1 càs de câpres','¼ d\'oignon rouge, émincé','100g de mozzarella ou fromage suisse râpé','Aneth frais pour décorer','Quartiers de citron'],
        directions:['Préchauffer le four friteuse à 220°C en mode Cuire/Rôtir.','Tartiner le fromage frais sur chaque moitié de bagel. Disposer le saumon fumé, puis les câpres et l\'oignon.','Couvrir généreusement de fromage râpé.','Placer sur la grille et cuire 8-11 minutes jusqu\'à ce que le fromage fonde et dore.','Retirer, garnir d\'aneth frais et servir avec du citron.'],
        tips:['Pour plus de goût, étaler de la moutarde de Dijon sous le fromage frais.','Ne pas trop cuire — le saumon doit rester moelleux.','Accompagner d\'une salade de roquette pour un brunch complet.']},
      ja:{title:'エブリシングベーゲルサーモンメルト',description:'クリームチーズとスモークサーモン、とろけるチーズをのせたオープンベーゲル — ブランチに最適。',content:'',
        ingredients:['エブリシングベーゲル 2個（半分にカット）','クリームチーズ 115g（室温で柔らかく）','スモークサーモン 170g','ケッパー 大さじ1','赤玉ねぎ ¼個（薄切り）','モッツァレラまたはスイスチーズ 100g（千切り）','ディル（飾り用）','レモンくし切り（付け合わせ）'],
        directions:['エアフライヤーオーブンを220°Cに予熱、ベイク/ローストモード。','各ベーゲル半分にクリームチーズを塗り、スモークサーモンをのせ、ケッパーと赤玉ねぎを散らす。','たっぷりのチーズをのせる。','ラックにのせて8〜11分焼き、チーズがとろけて泡立つまで。','取り出してディルを飾り、レモンを添えてすぐに召し上がれ。'],
        tips:['より風味豊かにするには、クリームチーズの下にディジョンマスタードを薄く塗る。','焼きすぎ注意 — サーモンはしっとりと。','サイドにルッコラサラダを添えれば完璧なブランチに。']},
      pt:{title:'Bagel Derretido com Salmão',description:'Bagel aberto com cream cheese, salmão defumado e queijo derretido — perfeito para o brunch.',content:'',
        ingredients:['2 bagels everything, cortados ao meio','115g de cream cheese, amolecido','170g de salmão defumado','1 colher de sopa de alcaparras','¼ de cebola roxa, fatiada','1 xícara de mussarela ou queijo suíço ralado','Endro fresco para decorar','Gomos de limão para servir'],
        directions:['Pré-aqueça o forno fritadeira a 220°C no modo Assar/Grelhar.','Espalhe o cream cheese em cada metade de bagel. Disponha o salmão defumado e espalhe alcaparras e cebola.','Cubra generosamente com queijo ralado.','Coloque na grelha e asse por 8-11 minutos até o queijo derreter e borbulhar.','Retire, decore com endro fresco e sirva com limão.'],
        tips:['Para mais sabor, espalhe mostarda Dijon sob o cream cheese.','Não asse demais — o salmão deve ficar úmido.','Sirva com salada de rúcula para um brunch completo.']}
    }, is_active:true, display_order:6 },
  { id:7, title:'New-York-Style Pizza', category:'airfryeroven', emoji:'🍕', product_id: null,
    mode:'Pizza', temp:'450°F (230°C)', time:'16-20+ minutes',
    translations: {
      en:{title:'New-York-Style Pizza',description:'Thin, foldable crust with a perfect char — authentic New York pizza made right in your air fryer oven.',content:'',
        ingredients:['1 lb pizza dough (store-bought or homemade)','½ cup pizza sauce','2 cups low-moisture mozzarella, shredded','¼ cup grated Parmesan','2 tbsp olive oil','Toppings of choice: pepperoni, mushrooms, bell peppers','Cornmeal for dusting'],
        directions:['Preheat the air fryer oven to 450°F (230°C) on Pizza mode. If your oven has a pizza stone, place it inside during preheating.','Stretch or roll the dough into a 10-12 inch round on a lightly floured surface. Don\'t worry if it\'s not perfectly round — that\'s the NY style!','Dust a pizza peel or baking sheet with cornmeal, then transfer the dough. Brush the edges with olive oil.','Spread pizza sauce evenly, leaving a ½-inch border. Top with mozzarella and Parmesan, then add your favorite toppings.','Slide the pizza into the oven and bake for 8-12 minutes until the crust is golden and cheese is bubbly with light brown spots.','Let cool for 2 minutes, slice into triangles, and fold like a true New Yorker!'],
        tips:['For the crispiest crust, preheat your pizza stone or baking sheet in the oven first.','Low-moisture mozzarella is key — fresh mozzarella releases too much water.','The dough should be at room temperature for at least 30 minutes before stretching for best results.']},
      zh:{title:'纽约风格披萨',description:'薄底可折叠的披萨，完美的焦香 — 用空气炸烤箱做出正宗纽约披萨。',content:'',
        ingredients:['1磅披萨面团（市售或自制）','½杯披萨酱','2杯低水分马苏里拉芝士，切丝','¼杯帕玛森芝士碎','2汤匙橄榄油','自选配料：意式腊肠、蘑菇、彩椒','玉米粉（撒粉用）'],
        directions:['将空气炸烤箱预热至450°F (230°C)，选择披萨模式。如有披萨石，预热时放入烤箱。','在撒了面粉的台面上将面团拉伸或擀成10-12英寸的圆形。不必追求完美圆形 — 这就是纽约风格！','在披萨铲或烤盘上撒玉米粉，放上面饼。边缘刷上橄榄油。','均匀涂抹披萨酱，留出½英寸边。铺上马苏里拉和帕玛森芝士，再放上喜欢的配料。','将披萨滑入烤箱，烤8-12分钟，直到饼底金黄、芝士冒泡带有浅褐色斑点。','冷却2分钟，切成三角块，像真正的纽约人一样折叠享用！'],
        tips:['想要最酥脆的饼底，先将披萨石或烤盘预热。','低水分马苏里拉是关键 — 新鲜马苏里拉水分太多。','面团在擀开前应在室温下放置至少30分钟，效果最佳。']},
      es:{title:'Pizza Estilo Nueva York',description:'Masa fina y plegable con el tostado perfecto — auténtica pizza neoyorquina hecha en tu horno freidor.',content:'',
        ingredients:['450g de masa de pizza','½ taza de salsa de pizza','2 tazas de mozzarella baja en humedad, rallada','¼ taza de parmesano rallado','2 cdas de aceite de oliva','Ingredientes al gusto: pepperoni, champiñones, pimientos','Harina de maíz para espolvorear'],
        directions:['Precalentar el horno freidor a 230°C en modo Pizza. Si tienes piedra para pizza, colócala durante el precalentamiento.','Estirar la masa en un círculo de 25-30cm sobre una superficie enharinada.','Espolvorear harina de maíz en una pala o bandeja, transferir la masa. Pincelar los bordes con aceite de oliva.','Extender la salsa dejando 1cm de borde. Cubrir con mozzarella, parmesano y los ingredientes deseados.','Hornear 8-12 minutos hasta que la masa esté dorada y el queso burbujee.','Dejar enfriar 2 minutos, cortar en triángulos y ¡doblar como un auténtico neoyorquino!'],
        tips:['Para la masa más crujiente, precalentar la piedra o bandeja.','La mozzarella baja en humedad es clave — la fresca suelta demasiada agua.','La masa debe estar a temperatura ambiente al menos 30 minutos antes de estirar.']},
      fr:{title:'Pizza Façon New York',description:'Pâte fine et pliable avec une cuisson parfaite — une authentique pizza new-yorkaise dans votre four friteuse.',content:'',
        ingredients:['450g de pâte à pizza','125ml de sauce pizza','200g de mozzarella à faible humidité, râpée','30g de parmesan râpé','2 càs d\'huile d\'olive','Garnitures au choix : pepperoni, champignons, poivrons','Semoule de maïs pour saupoudrer'],
        directions:['Préchauffer le four friteuse à 230°C en mode Pizza. Placer la pierre à pizza pendant le préchauffage si disponible.','Étaler la pâte en un cercle de 25-30cm sur un plan fariné.','Saupoudrer la pelle ou plaque de semoule, transférer la pâte. Badigeonner les bords d\'huile d\'olive.','Étaler la sauce en laissant 1cm de bord. Garnir de mozzarella, parmesan et garnitures.','Cuire 8-12 minutes jusqu\'à ce que la pâte soit dorée et le fromage bouillonnant.','Laisser refroidir 2 minutes, couper en triangles et plier comme un vrai New-Yorkais !'],
        tips:['Pour une pâte ultra croustillante, préchauffer la pierre ou plaque.','La mozzarella à faible humidité est indispensable.','La pâte doit reposer 30 minutes à température ambiante avant d\'être étalée.']},
      ja:{title:'NYスタイルピザ',description:'薄くて折りたためる生地に完璧な焼き目 — エアフライヤーオーブンで本格NYピザを。',content:'',
        ingredients:['ピザ生地 450g','ピザソース 120ml','低水分モッツァレラ 200g（千切り）','パルメザン 30g（すりおろし）','オリーブオイル 大さじ2','お好みのトッピング：ペパロニ、マッシュルーム、ピーマン','コーンミール（打ち粉用）'],
        directions:['エアフライヤーオーブンを230°Cに予熱、ピザモード。ピザストーンがあれば一緒に予熱。','打ち粉をした台で生地を25〜30cmの円形に伸ばす。完璧な円でなくてOK — それがNYスタイル！','ピザピールまたは天板にコーンミールを振り、生地を移す。縁にオリーブオイルを塗る。','ソースを広げ（縁1cm残す）、モッツァレラとパルメザンをのせ、トッピングを追加。','8〜12分焼き、生地が黄金色でチーズが泡立つまで。','2分冷まして三角形にカット、ニューヨーカーのように折りたたんで！'],
        tips:['最もカリッとした生地にするには、ピザストーンか天板を予熱する。','低水分モッツァレラが必須 — フレッシュタイプは水分が多すぎる。','生地は伸ばす前に室温で30分以上置くこと。']},
      pt:{title:'Pizza Estilo Nova York',description:'Massa fina e dobrável com o tostado perfeito — pizza autêntica de Nova York feita no seu forno fritadeira.',content:'',
        ingredients:['450g de massa de pizza','½ xícara de molho de pizza','2 xícaras de mussarela de baixa umidade, ralada','¼ xícara de parmesão ralado','2 colheres de sopa de azeite','Coberturas a gosto: pepperoni, cogumelos, pimentões','Fubá para polvilhar'],
        directions:['Pré-aqueça o forno fritadeira a 230°C no modo Pizza. Se tiver pedra para pizza, coloque durante o pré-aquecimento.','Abra a massa em um círculo de 25-30cm sobre superfície enfarinhada.','Polvilhe fubá na pá ou assadeira, transfira a massa. Pincele as bordas com azeite.','Espalhe o molho deixando 1cm de borda. Cubra com mussarela, parmesão e coberturas.','Asse por 8-12 minutos até a massa dourar e o queijo borbulhar.','Deixe esfriar 2 minutos, corte em triângulos e dobre como um verdadeiro nova-iorquino!'],
        tips:['Para a massa mais crocante, pré-aqueça a pedra ou assadeira.','Mussarela de baixa umidade é essencial — a fresca solta muita água.','A massa deve descansar 30 minutos em temperatura ambiente antes de abrir.']}
    }, is_active:true, display_order:7 }
];

// Expose products globally — start empty, loaded from Supabase or fallback
let products = [];

// Get localized name for a product
function getLocalizedName(product, lang) {
  const val = product['name_' + lang];
  if (lang !== 'en' && val && typeof val === 'string' && val.trim()) return val;
  return product.name || '';
}

// Get localized description
function getLocalizedDesc(product, lang) {
  const val = product['description_' + lang];
  if (lang !== 'en' && val && typeof val === 'string' && val.trim()) return val;
  return product.description || '';
}

// Get products by category
function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

// Create scroll card (for horizontal scroll layout)
function createScrollCard(product, lang) {
  const name = getLocalizedName(product, lang);
  const desc = getLocalizedDesc(product, lang);
  const badgeText = product.badge || '';
  const icon = product.icon || '🍳';
  const imageUrl = product.image_url || '';

  let inquiryText = 'Buy Now';
  if (typeof translations !== 'undefined') {
    const t = translations[lang] || translations['en'];
    inquiryText = t['btn_inquiry'] || 'Buy Now';
  }

  const badgeHtml = badgeText
    ? `<span class="product-badge">${badgeText}</span>`
    : '';

  const imgContent = imageUrl
    ? `<img src="${imageUrl}" alt="${escapeHtml(name)}">`
    : `<span class="placeholder-icon">${icon}</span>`;

  // Build spec tags
  let specsHtml = '';
  const specs = product.specs;
  if (specs && typeof specs === 'object') {
    specsHtml = Object.entries(specs).slice(0, 4).map(([k, v]) =>
      `<span class="spec-tag">${k}: ${v}</span>`
    ).join('');
  }

  return `
    <div class="scroll-card" data-category="${product.category}">
      <div class="scroll-card-img">
        ${badgeHtml}
        ${imgContent}
      </div>
      <div class="scroll-card-body">
        <h6>${escapeHtml(name)}</h6>
        <p class="scroll-card-desc">${escapeHtml(desc)}</p>
        ${specsHtml ? `<div class="scroll-card-specs">${specsHtml}</div>` : ''}
        <a href="buy.html?product=${product.id}" class="btn-inquiry">${inquiryText} →</a>
      </div>
    </div>`;
}

// Create product card HTML (for homepage grid, kept for compatibility)
function createProductCard(product, lang) {
  const name = getLocalizedName(product, lang);
  const desc = getLocalizedDesc(product, lang);
  const badgeText = product.badge || '';
  const icon = product.icon || '🍳';
  const imageUrl = product.image_url || '';

  let inquiryText, catLabel;
  if (typeof translations !== 'undefined') {
    const t = translations[lang] || translations['en'];
    inquiryText = t['btn_inquiry'] || 'Buy Now';
    catLabel = t['filter_' + product.category] || product.category;
  } else {
    inquiryText = 'Buy Now';
    catLabel = product.category;
  }

  let specsHtml = '';
  const specs = product.specs;
  if (specs && typeof specs === 'object') {
    specsHtml = Object.entries(specs).map(([k, v]) => {
      const label = k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, ' ');
      return `<span style="display:inline-block;margin-right:12px;white-space:nowrap;"><strong>${label}:</strong> ${v}</span>`;
    }).join('');
  }

  const badgeHtml = badgeText
    ? `<span class="product-badge">${badgeText}</span>`
    : '';

  const imgContent = imageUrl
    ? `<img src="${imageUrl}" alt="${name}" style="width:100%;height:100%;object-fit:cover;">`
    : `<span style="font-size:4rem;">${icon}</span>`;

  return `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4" data-category="${product.category}">
      <div class="product-card">
        <div class="product-img">
          ${badgeHtml}
          ${imgContent}
        </div>
        <div class="product-body">
          <div class="product-category">${catLabel}</div>
          <h6>${escapeHtml(name)}</h6>
          <p class="product-specs">${escapeHtml(desc)}</p>
          ${specsHtml ? `<div style="font-size:0.78rem;color:#94a3b8;margin-bottom:12px;">${specsHtml}</div>` : ''}
          <a href="buy.html?product=${product.id}" class="btn-inquiry">${inquiryText} →</a>
        </div>
      </div>
    </div>`;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Render category scroll sections
function renderProductSections(lang) {
  const container = document.getElementById('productSections');
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = '<div class="text-center py-5"><div class="empty-state" style="font-size:3rem;margin-bottom:1rem;">📦</div><h4 style="color:#94a3b8;">' + ((typeof translations !== 'undefined' && translations[lang] && translations[lang].prod_no_results) || 'No products yet') + '</h4><p style="color:#cbd5e1;">' + ((typeof translations !== 'undefined' && translations[lang] && translations[lang].prod_coming_soon) || 'New products coming soon. Stay tuned!') + '</p></div>';
    return;
  }

  const categories = [
    { key: 'airfryer', icon: '🍟' },
    { key: 'airfryeroven', icon: '🔥' },
    { key: 'toaster', icon: '🍞' }
  ];

  const t = (typeof translations !== 'undefined') ? (translations[lang] || translations['en']) : {};

  let html = '';
  for (const cat of categories) {
    const catProducts = products.filter(p => p.category === cat.key && p.active !== false);
    if (catProducts.length === 0) continue;

    const catName = t['filter_' + cat.key] || cat.key;

    html += `
      <div class="category-scroll-section" id="section-${cat.key}">
        <div class="section-header">
          <h3>${cat.icon} ${catName} <span class="product-count">(${catProducts.length})</span></h3>
          <a href="buy.html" class="view-all-link">${t['btn_inquiry'] || 'Buy Now'} →</a>
        </div>
        <div class="scroll-wrapper">
          <button class="scroll-arrow scroll-left" data-target="scroll-${cat.key}" aria-label="Scroll left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="scroll-container" id="scroll-${cat.key}">
            ${catProducts.map(p => createScrollCard(p, lang)).join('')}
          </div>
          <button class="scroll-arrow scroll-right" data-target="scroll-${cat.key}" aria-label="Scroll right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>`;
  }

  container.innerHTML = html;

  // Attach arrow button handlers
  container.querySelectorAll('.scroll-arrow').forEach(btn => {
    btn.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const scrollEl = document.getElementById(targetId);
      if (!scrollEl) return;
      const cardWidth = scrollEl.querySelector('.scroll-card')?.offsetWidth || 300;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      if (this.classList.contains('scroll-left')) {
        scrollEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });

  // Update arrow visibility on scroll
  container.querySelectorAll('.scroll-container').forEach(scrollEl => {
    const updateArrows = () => {
      const wrapper = scrollEl.parentElement;
      const leftArrow = wrapper.querySelector('.scroll-left');
      const rightArrow = wrapper.querySelector('.scroll-right');
      if (!leftArrow || !rightArrow) return;
      leftArrow.style.opacity = scrollEl.scrollLeft <= 10 ? '0.3' : '1';
      rightArrow.style.opacity = scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth - 10 ? '0.3' : '1';
    };
    scrollEl.addEventListener('scroll', updateArrows);
    updateArrows();
  });
}

// Render product grid (for products page, legacy)
function renderProducts(category, lang) {
  const container = document.getElementById('productGrid');
  if (!container) return;

  const filtered = getProductsByCategory(category);
  if (filtered.length === 0) {
    const t = (typeof translations !== 'undefined') ? (translations[lang] || translations['en']) : {};
    container.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">${t['prod_no_results'] || 'No products found.'}</p></div>`;
    return;
  }

  container.innerHTML = filtered.map(p => createProductCard(p, lang)).join('');
}

// Also render to homeProductGrid (for homepage)
function renderHomeProducts(category, lang) {
  const container = document.getElementById('homeProductGrid');
  if (!container) return;

  const filtered = getProductsByCategory(category);
  const display = filtered.slice(0, 3);
  container.innerHTML = display.map(p => createProductCard(p, lang)).join('');
}

// Update product cards when language changes
function updateProductCards() {
  const sectionsContainer = document.getElementById('productSections');
  if (sectionsContainer) {
    const lang = getCurrentLang();
    renderProductSections(lang);
    updateHomeRecipeCards(lang);
    return;
  }
  const container = document.getElementById('productGrid');
  if (!container) {
    updateHomeProductCards();
    const lang = getCurrentLang();
    updateHomeRecipeCards(lang);
    return;
  }
  const lang = getCurrentLang();
  const activeFilter = document.querySelector('.filter-btn.active');
  const category = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
  renderProducts(category, lang);
  updateHomeRecipeCards(lang);
}

// Update home recipe cards on language change
function updateHomeRecipeCards(lang) {
  const grid = document.getElementById('homeRecipeGrid');
  if (!grid) return;
  const recipes = window._homeRecipes;
  if (!recipes || !recipes.length) return;

  const catLabels = {
    airfryer: 'Air Fryer',
    airfryeroven: 'Air Fryer Oven',
    toaster: 'Toaster'
  };
  if (typeof translations !== 'undefined') {
    const t = translations[lang] || translations['en'] || {};
    if (t.recipe_tag_airfryer) catLabels.airfryer = t.recipe_tag_airfryer;
    if (t.recipe_tag_oven) catLabels.airfryeroven = t.recipe_tag_oven;
    if (t.recipe_tag_toaster) catLabels.toaster = t.recipe_tag_toaster;
  }

  grid.innerHTML = recipes.map(r => {
    const trData = (typeof r.translations === 'string') ? JSON.parse(r.translations) : (r.translations || {});
    const tr = trData[lang] || trData.en || {};
    const imgHtml = r.image_url
      ? '<img src="' + r.image_url + '" alt="" style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;">'
      : '<span class="recipe-emoji">' + (r.emoji || '🍳') + '</span>';
    const viewText = (typeof translations !== 'undefined' && translations[lang] && translations[lang].recipe_view)
      ? translations[lang].recipe_view : 'View Recipe →';
    const productName = (r.products && r.products.name) || '';
    return '<div class="recipe-card fade-in">' +
      '<div class="recipe-img" style="position:relative;">' + imgHtml +
      '<span class="recipe-badge" style="z-index:1;">' + escapeHtml(catLabels[r.category] || r.category) + '</span></div>' +
      '<div class="recipe-body"><h5>' + escapeHtml(tr.title || '') + '</h5>' +
      (productName ? '<p style="font-size:0.8rem;color:#b91c1c;margin-bottom:6px;">' + escapeHtml(productName) + '</p>' : '') +
      '<p>' + escapeHtml(tr.description || '') + '</p>' +
      '<a href="recipes.html" class="recipe-btn">' + viewText + '</a></div></div>';
  }).join('');
}

function updateHomeProductCards() {
  const container = document.getElementById('homeProductGrid');
  if (!container) return;
  const lang = getCurrentLang();
  renderHomeProducts('all', lang);
}

// Initialize with Supabase API (falls back to static data)
async function initProducts() {
  // Try Supabase first
  if (typeof SUPABASE_URL !== 'undefined' && SUPABASE_URL !== 'https://YOUR_PROJECT_ID.supabase.co') {
    try {
      const supabaseProducts = await fetchProducts(null, getCurrentLang());
      if (supabaseProducts && supabaseProducts.length > 0) {
        // Merge missing translations from fallback data
        products = supabaseProducts.map(p => {
          const fallback = FALLBACK_PRODUCTS.find(f => f.id === p.id);
          if (fallback) {
            for (const lang of ['zh', 'es', 'fr', 'ja', 'pt']) {
              if (!p['name_' + lang] || !p['name_' + lang].toString().trim()) {
                p['name_' + lang] = fallback['name_' + lang];
              }
              if (!p['description_' + lang] || !p['description_' + lang].toString().trim()) {
                p['description_' + lang] = fallback['description_' + lang];
              }
            }
            // Merge missing price/sku if Supabase doesn't have them
            if (!p.price) p.price = fallback.price;
            if (!p.sku) p.sku = fallback.sku;
          }
          return p;
        });
        console.log('Loaded ' + products.length + ' products from Supabase (translations merged from fallback)');
      } else {
        // Supabase returned empty — use fallback
        console.log('Supabase returned empty products, using fallback data');
        products = [...FALLBACK_PRODUCTS];
      }
    } catch (e) {
      console.log('Supabase not available, using fallback data');
      products = [...FALLBACK_PRODUCTS];
    }
  } else {
    products = [...FALLBACK_PRODUCTS];
  }

  // Render based on which layout is on this page
  const lang = getCurrentLang();
  const sectionsContainer = document.getElementById('productSections');
  const productGrid = document.getElementById('productGrid');
  const homeGrid = document.getElementById('homeProductGrid');

  if (sectionsContainer) {
    // New scroll section layout
    renderProductSections(lang);
  } else if (productGrid) {
    // Legacy grid layout
    renderProducts('all', lang);

    // Check URL params for category filter
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat && ['airfryer', 'airfryeroven', 'toaster'].includes(cat)) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      const target = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
      if (target) {
        target.classList.add('active');
        renderProducts(cat, lang);
      }
    }
  }

  if (homeGrid) {
    renderHomeProducts('all', lang);
  }

  // Notify any listeners that products are fully loaded (including Supabase data)
  window.dispatchEvent(new CustomEvent('productsReady'));
}

// ================================================================
// ALWAYS render fallback products immediately (before Supabase)
// This ensures the homepage never shows blank products
// ================================================================
(function renderFallbackHomeProducts() {
  const homeGrid = document.getElementById('homeProductGrid');
  if (homeGrid && products.length > 0) {
    const lang = getCurrentLang();
    const display = products.slice(0, 3);
    homeGrid.innerHTML = display.map(p => createProductCard(p, lang)).join('');
  }
})();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initProducts();

  // Filter buttons - scroll to category section
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-filter');
      if (category === 'all') {
        // Legacy: re-render grid
        renderProducts('all', getCurrentLang());
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        return;
      }
      // New: scroll to section
      const section = document.getElementById('section-' + category);
      if (section) {
        // Highlight active filter
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        // Smooth scroll
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Legacy filter behavior
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderProducts(category, getCurrentLang());
      }
    });
  });
});
