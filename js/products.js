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

// Fallback recipe data — synced from Supabase (10 recipes with 6-language translations)
const FALLBACK_RECIPES = [
  { id:8, title:'Oven-Fried Buttermilk Chicken', category:'airfryeroven', emoji:'🍗', product_id: 11,
    mode:'Air Fry', temp:'375°F (190°C)', time:'25-30 minutes',
    translations: {"en": {"tips": ["Do not stack pieces on top of each other — this prevents even cooking and crisping.", "For extra crispy results, give chicken pieces a quick spray with cooking spray or a light coat of oil."], "title": "Oven-Fried Buttermilk Chicken", "directions": ["Coat each chicken piece evenly with the seasoned flour mixture.", "Place chicken pieces into the air fryer basket in a single layer.", "Cook at 375°F (190°C) for 25-30 minutes, flipping halfway through.", "Cook until internal temperature reaches 165°F (74°C)."], "description": "Crispy, golden fried chicken with juicy buttermilk-marinated meat — no deep frying needed.", "ingredients": ["2 bone-in chicken pieces (thighs or breast)", "1 cup buttermilk", "½ tsp paprika powder", "¼ tsp garlic powder", "½ tsp black pepper", "½ cup all-purpose flour", "Cooking spray or light oil spray"]}, "es": {"tips": ["No apile las piezas — esto impide una cocción uniforme.", "Para resultados extra crujientes, rocíe las piezas con spray de cocina."], "title": "Pollo Frito con Suero de Leche", "directions": ["Cubra cada pieza de pollo uniformemente con la mezcla de harina sazonada.", "Coloque las piezas de pollo en la canasta de la freidora de aire en una sola capa.", "Cocine a 190°C durante 25-30 minutos, volteando a la mitad.", "Cocine hasta que la temperatura interna alcance 74°C."], "description": "Pollo frito crujiente y dorado con carne jugosa marinada en suero de leche — sin freír en aceite.", "ingredients": ["2 piezas de pollo con hueso (muslos o pechuga)", "1 taza de suero de leche", "½ cdta de pimentón en polvo", "¼ cdta de ajo en polvo", "½ cdta de pimienta negra", "½ taza de harina", "Spray de cocina o aceite ligero"]}, "fr": {"tips": ["Ne pas empiler les morceaux — cela empêche une cuisson uniforme.", "Pour un résultat plus croustillant, vaporiser un peu d'huile sur le poulet."], "title": "Poulet Frit au Babeurre", "directions": ["Enrober chaque morceau de poulet uniformément avec le mélange de farine assaisonnée.", "Placer les morceaux de poulet dans le panier de la friteuse à air en une seule couche.", "Cuire à 190°C pendant 25-30 minutes, en retournant à mi-cuisson.", "Cuire jusqu'à ce que la température interne atteigne 74°C."], "description": "Poulet frit croustillant et doré avec une viande juteuse marinée au babeurre — sans friture.", "ingredients": ["2 morceaux de poulet avec os (cuisses ou blanc)", "1 tasse de babeurre", "½ cc de paprika en poudre", "¼ cc d'ail en poudre", "½ cc de poivre noir", "½ tasse de farine tout usage", "Spray de cuisson ou huile légère"]}, "ja": {"tips": ["重ねないこと — 均一な調理とカリッと感が損なわれる。", "よりカリッとさせるには、クッキングスプレーか薄く油を吹きかける。"], "title": "バターミルクフライドチキン", "directions": ["味付けした小麦粉ミックスを鶏肉にまんべんなくつける。", "エアフライヤーバスケットに重ならないように並べる。", "190°Cで25〜30分調理、途中でひっくり返す。", "中心温度74°Cに達するまで調理する。"], "description": "カリッと黄金色のフライドチキン、バターミルク漬けでジューシー — 揚げ油不要。", "ingredients": ["骨付き鶏肉 2枚（もも肉または胸肉）", "バターミルク 1カップ", "パプリカパウダー 小さじ½", "ガーリックパウダー 小さじ¼", "黒コショウ 小さじ½", "小麦粉 ½カップ", "クッキングスプレーまたは薄い油"]}, "pt": {"tips": ["Não empilhe as peças — isso impede um cozimento uniforme e crocância.", "Para resultados extra crocantes, borrife as peças de frango com spray de cozinha ou uma leve camada de óleo."], "title": "Frango Frito com Buttermilk", "directions": ["Cubra cada peça de frango uniformemente com a mistura de farinha temperada.", "Coloque as peças de frango no cesto da fritadeira de ar em uma única camada.", "Cozinhe a 190°C por 25-30 minutos, virando na metade.", "Cozinhe até que a temperatura interna atinja 74°C."], "description": "Frango frito crocante e dourado com carne suculenta marinada em buttermilk — sem fritura em óleo.", "ingredients": ["2 peças de frango com osso (coxas ou peito)", "1 xícara de buttermilk", "½ colher de chá de páprica em pó", "¼ colher de chá de alho em pó", "½ colher de chá de pimenta preta", "½ xícara de farinha de trigo", "Spray de cozinha ou óleo leve"]}, "zh": {"tips": ["不要将鸡肉叠放 — 这会影响均匀烹饪和酥脆效果。", "想要更酥脆，在鸡肉上喷一层薄薄的烹饪喷雾或油。"], "title": "酪乳脆皮炸鸡", "directions": ["将每块鸡肉均匀裹上调味面粉混合物。", "将鸡肉单层放入空气炸锅中。", "以375°F (190°C) 烹饪25-30分钟，中途翻面。", "烹饪至内部温度达到165°F (74°C) 即可。"], "description": "金黄酥脆的酪乳腌制炸鸡，鲜嫩多汁 — 无需油炸。", "ingredients": ["带骨鸡肉 2块（鸡腿或鸡胸）", "酪乳 1杯", "红椒粉 ½茶匙", "蒜粉 ¼茶匙", "黑胡椒 ½茶匙", "中筋面粉 ½杯", "烹饪喷雾或薄油"]}},
    is_active:true, display_order:8 },
  { id:9, title:'Garlic Bread (Bakery-Style)', category:'airfryeroven', emoji:'🧄', product_id: 11,
    mode:'Toast', temp:'400°F (205°C)', time:'6-8 minutes',
    translations: {"en": {"tips": ["For extra flavor, add a pinch of Parmesan cheese on top before toasting.", "Watch closely during the last minute to avoid burning."], "title": "Garlic Bread (Bakery-Style)", "directions": ["Preheat air fryer to toast mode at 400°F (205°C).", "Slice bread evenly on both sides with melted garlic-parsley butter.", "Toast for about 6-8 minutes until golden brown and crispy."], "description": "Crispy, golden garlic bread with a soft buttery center — just like your favorite bakery.", "ingredients": ["Sliced French bread or white bread loaf", "Unsalted butter, softened", "Dried parsley, chopped fresh garlic cloves", "A pinch of salt"]}, "es": {"tips": ["Para más sabor, añadir un poco de queso parmesano antes de tostar.", "Vigilar de cerca en el último minuto para evitar quemaduras."], "title": "Pan de Ajo Estilo Panadería", "directions": ["Precalentar la freidora a 205°C en modo tostar.", "Untar el pan uniformemente con mantequilla de ajo y perejil derretida.", "Tostar durante 6-8 minutos hasta que esté dorado y crujiente."], "description": "Pan de ajo crujiente y dorado con un centro suave y mantecoso — como el de tu panadería favorita.", "ingredients": ["Pan francés rebanado o pan blanco", "Mantequilla sin sal, ablandada", "Perejil seco, dientes de ajo picados", "Una pizca de sal"]}, "fr": {"tips": ["Pour plus de goût, ajouter un peu de parmesan avant de griller.", "Surveiller de près la dernière minute pour éviter de brûler."], "title": "Pain à l'Ail Façon Boulangerie", "directions": ["Préchauffer la friteuse à 205°C en mode griller.", "Tartiner le pain uniformément avec du beurre à l'ail et persil fondu.", "Griller pendant 6-8 minutes jusqu'à ce qu'il soit doré et croustillant."], "description": "Pain à l'ail croustillant et doré avec un cœur tendre au beurre — comme à la boulangerie.", "ingredients": ["Pain françois tranché ou pain blanc", "Beurre doux, ramolli", "Persil séché, gousses d'ail hachées", "Une pincée de sel"]}, "ja": {"tips": ["風味を増すために、トースト前にパルメザンチーズを一つまみ振りかける。", "焦げないように最後の1分は注意深く見守る。"], "title": "ベーカリースタイルガーリックブレッド", "directions": ["エアフライヤーをトーストモードで205°Cに予熱する。", "溶かしたガーリックパセリバターをパンの両面に均等に塗る。", "約6〜8分、黄金色でカリッとするまでトーストする。"], "description": "カリッと黄金色のガーリックブレッド、中心はバターでしっとり — お気に入りのベーカリーのような味わい。", "ingredients": ["スライスしたフランスパンまたは白パン", "無塩バター（常温で柔らかく）", "乾燥パセリ、刻み生にんにく", "塩ひとつまみ"]}, "pt": {"tips": ["Para mais sabor, adicione uma pitada de queijo parmesão antes de tostar.", "Observe atentamente durante o último minuto para evitar queimar."], "title": "Pão de Alho Estilo Padaria", "directions": ["Pré-aqueça a fritadeira de ar no modo tostar a 205°C.", "Passe manteiga de alho e salsa derretida uniformemente nos dois lados do pão.", "Toste por cerca de 6-8 minutos até dourar e ficar crocante."], "description": "Pão de alho crocante e dourado com centro macio e amanteigado — como o da sua padaria favorita.", "ingredients": ["Pão francês fatiado ou pão de forma branco", "Manteiga sem sal, amolecida", "Salsa seca, dentes de alho picados", "Uma pitada de sal"]}, "zh": {"tips": ["增加风味可在烘烤前撒一点帕玛森芝士。", "最后1分钟密切观察以防烤焦。"], "title": "面包店风格蒜香面包", "directions": ["将空气炸锅预热至烘烤模式400°F (205°C)。", "将融化的蒜香欧芹黄油均匀涂抹在面包两面。", "烘烤约6-8分钟，直到金黄酥脆。"], "description": "外酥内软的黄金蒜香面包，浓郁的黄油蒜香 — 复刻你最爱面包店的味道。", "ingredients": ["切片法式面包或白面包", "无盐黄油（软化）", "干欧芹、切碎的新鲜大蒜", "少许盐"]}},
    is_active:true, display_order:9 },
  { id:10, title:'Everything Bagel Salmon Melt', category:'airfryeroven', emoji:'🥯', product_id: 11,
    mode:'Bagel', temp:'420°F (220°C)', time:'8-10 minutes',
    translations: {"en": {"tips": ["Add capers for extra briny flavor.", "Serve immediately while warm."], "title": "Everything Bagel Salmon Melt", "directions": ["Slice bagels in half.", "Toast bagel halves until golden.", "Spread cream cheese on each half.", "Layer salmon, onions, and dill on top.", "Place assembled bagel halves in the oven and toast until warm and melty."], "description": "An open-faced bagel loaded with cream cheese, smoked salmon, and everything seasoning — brunch perfection.", "ingredients": ["Everything bagels, halved", "Cream cheese, softened", "Smoked salmon slices", "Red onion, thinly sliced (optional)", "Fresh dill (optional)"]}, "es": {"tips": ["Añadir alcaparras para un sabor extra.", "Servir inmediatamente mientras esté caliente."], "title": "Bagel Derretido con Salmón", "directions": ["Cortar los bagels a la mitad.", "Tostar las mitades hasta que estén doradas.", "Untar queso crema en cada mitad.", "Colocar el salmón, cebolla y eneldo encima.", "Colocar las mitades ensambladas en el horno y tostar hasta que estén calientes y derretidas."], "description": "Bagel abierto cargado con queso crema, salmón ahumado y el sazonador everything — perfección para el brunch.", "ingredients": ["Bagels everything, cortados a la mitad", "Queso crema, ablandado", "Láminas de salmón ahumado", "Cebolla roja, en rodajas finas (opcional)", "Eneldo fresco (opcional)"]}, "fr": {"tips": ["Ajouter des câpres pour un goût extra.", "Servir immédiatement tandis qu'il est chaud."], "title": "Bagel Fondant au Saumon", "directions": ["Couper les bagels en deux.", "Faire griller les moitiés jusqu'à ce qu'elles soient dorées.", "Tartiner le fromage frais sur chaque moitié.", "Disposer le saumon, l'oignon et l'aneth par-dessus.", "Placer les moitiés assemblées dans le four et griller jusqu'à ce que ce soit chaud et fondu."], "description": "Bagel ouvert garni de fromage frais, saumon fumé et l'assaisonnement everything — le brunch parfait.", "ingredients": ["Bagels everything, coupés en deux", "Fromage frais, ramolli", "Tranches de saumon fumé", "Oignon rouge, émincé (optionnel)", "Aneth frais (optionnel)"]}, "ja": {"tips": ["ケッパーを加えると風味が増す。", "温かいうちにすぐに召し上がれ。"], "title": "エブリシングベーゲルサーモンメルト", "directions": ["ベーゲルを半分に切る。", "ベーゲルの半分を黄金色になるまでトーストする。", "各半分にクリームチーズを塗る。", "サーモン、玉ねぎ、ディルをのせる。", "組み立てたベーゲルをオーブンに入れ、温かくとろけるまでトーストする。"], "description": "クリームチーズ、スモークサーモン、エブリシングシーズニングをのせたオープンベーゲル — ブランチの極み。", "ingredients": ["エブリシングベーゲル（半分にカット）", "クリームチーズ（室温で柔らかく）", "スモークサーモンスライス", "赤玉ねぎ（薄切り、お好みで）", "ディル（お好みで）"]}, "pt": {"tips": ["Adicione alcaparras para um sabor extra.", "Sirva imediatamente enquanto estiver quente."], "title": "Bagel Derretido com Salmão", "directions": ["Corte os bagels ao meio.", "Toste as metades até dourar.", "Espalhe cream cheese em cada metade.", "Disponha o salmão, cebola e endro por cima.", "Coloque as metades montadas no forno e toste até ficar quente e derretido."], "description": "Bagel aberto carregado com cream cheese, salmão defumado e tempero everything — perfeição para o brunch.", "ingredients": ["Bagels everything, cortados ao meio", "Cream cheese, amolecido", "Fatias de salmão defumado", "Cebola roxa, fatiada (opcional)", "Endro fresco (opcional)"]}, "zh": {"tips": ["加入酸豆可增添额外的咸鲜风味。", "趁热立即享用。"], "title": "贝果三文鱼芝士焗烤", "directions": ["将贝果对半切开。", "将贝果半面烤至金黄。", "每面涂抹奶油芝士。", "铺上三文鱼、洋葱和莳萝。", "将组装好的贝果放入烤箱，烤至温热且芝士融化。"], "description": "开面贝果搭配奶油芝士、烟熏三文鱼和Everything调味料 — 完美早午餐。", "ingredients": ["Everything贝果（对半切开）", "奶油芝士（软化）", "烟熏三文鱼片", "红洋葱（切薄片，可选）", "新鲜莳萝（可选）"]}},
    is_active:true, display_order:10 },
  { id:11, title:'New York-Style Pizza', category:'airfryeroven', emoji:'🍕', product_id: 11,
    mode:'Pizza', temp:'450°F (230°C)', time:'10-15 minutes',
    translations: {"en": {"tips": ["For a crispier crust, use a pizza stone and preheat it for at least 15 minutes.", "Don't overload with toppings — this can make the pizza soggy.", "Let cool for 2-3 minutes before slicing to prevent toppings from sliding off."], "title": "New York-Style Pizza", "directions": ["Place a pizza stone or baking tray in the oven and preheat thoroughly.", "Stretch the dough to fit the pan or stone, shaping it into a round pizza.", "Spread sauce evenly over the dough, leaving a small border around the edge.", "Top with cheese.", "Add pepperoni if desired.", "Carefully place the pizza onto the preheated stone or tray.", "Bake at 450°F (230°C) for 10-15 minutes.", "Remove when the crust is lightly browned and the cheese is melted and bubbling.", "Let cool briefly, then slice and serve."], "description": "Thin, foldable crust with a perfect char — authentic New York pizza made right in your air fryer oven.", "ingredients": ["Pizza dough (thick-crust style)", "Pizza sauce", "Shredded mozzarella cheese", "Pepperoni (optional)", "Dried oregano or red pepper flakes (optional)"]}, "es": {"tips": ["Para una base más crujiente, use una piedra para pizza y precaliente por al menos 15 minutos.", "No sobrecargue con ingredientes — esto puede hacer que la pizza quede soggy.", "Deje enfriar 2-3 minutos antes de cortar para evitar que los ingredientes se deslicen."], "title": "Pizza Estilo Nueva York", "directions": ["Colocar una piedra para pizza o bandeja en el horno y precalentar bien.", "Estirar la masa para que quepa en el molde o piedra, dándole forma redonda.", "Extender la salsa uniformemente sobre la masa, dejando un borde pequeño.", "Cubrir con queso.", "Añadir pepperoni si se desea.", "Colocar con cuidado la pizza sobre la piedra o bandeja precalentada.", "Hornear a 230°C durante 10-15 minutos.", "Retirar cuando el borde esté ligeramente dorado y el queso esté derretido y burbujeando.", "Dejar enfriar brevemente, luego cortar y servir."], "description": "Masa fina y plegable con el tostado perfecto — auténtica pizza neoyorquina hecha en tu horno freidor.", "ingredients": ["Masa de pizza (estilo corteza gruesa)", "Salsa de pizza", "Queso mozzarella rallado", "Pepperoni (opcional)", "Orégano seco o hojuelas de pimiento rojo (opcional)"]}, "fr": {"tips": ["Pour une croûte plus croustillante, utilisez une pierre à pizza et préchauffez-la pendant au moins 15 minutes.", "Ne surchargez pas de garnitures — cela peut rendre la pizza détrempée.", "Laissez refroidir 2-3 minutes avant de trancher pour éviter que les garnitures ne glissent."], "title": "Pizza Façon New York", "directions": ["Placer une pierre à pizza ou une plaque de cuisson dans le four et bien préchauffer.", "Étaler la pâte pour l'adapter au moule ou à la pierre, en lui donnant une forme ronde.", "Étaler la sauce uniformément sur la pâte, en laissant un petit bord.", "Recouvrir de fromage.", "Ajouter du pepperoni si désiré.", "Placer délicatement la pizza sur la pierre ou la plaque préchauffée.", "Cuire à 230°C pendant 10-15 minutes.", "Retirer lorsque la croûte est légèrement dorée et le fromage fondu et bouillonnant.", "Laisser refroidir brièvement, puis trancher et servir."], "description": "Pâte fine et pliable avec une cuisson parfaite — une authentique pizza new-yorkaise dans votre four friteuse.", "ingredients": ["Pâte à pizza (style croûte épaisse)", "Sauce pizza", "Mozzarella râpée", "Pepperoni (optionnel)", "Origan séché ou flocons de piment rouge (optionnel)"]}, "ja": {"tips": ["よりカリッとした生地にするには、ピザストーンを使い15分以上予熱する。", "トッピングを載せすぎない — ピザがべちゃべちゃになる。", "スライスする前に2〜3分冷ますと、トッピングが滑り落ちない。"], "title": "NYスタイルピザ", "directions": ["ピザストーンまたは焼き皿をオーブンに入れ、十分に予熱する。", "生地を型やストーンに合うように伸ばし、丸いピザの形に整える。", "ソースを生地に均等に広げ、縁に小さな余白を残す。", "チーズをのせる。", "お好みでペパロニを追加する。", "予熱したストーンまたはトレイに慎重にピザを載せる。", "230°Cで10〜15分焼く。", "生地が軽く茶色くなり、チーズが溶けて泡立ったら取り出す。", "少し冷ましてからスライスして召し上がれ。"], "description": "薄くて折りたためる生地に完璧な焼き目 — エアフライヤーオーブンで本格NYピザを。", "ingredients": ["ピザ生地（厚めのクラストスタイル）", "ピザソース", "細切りモッツァレラチーズ", "ペパロニ（お好みで）", "乾燥オレガノまたは赤唐辛子フレーク（お好みで）"]}, "pt": {"tips": ["Para uma massa mais crocante, use uma pedra para pizza e pré-aqueça por pelo menos 15 minutos.", "Não sobrecarregue com coberturas — isso pode deixar a pizza encharcada.", "Deixe esfriar por 2-3 minutos antes de fatiar para evitar que as coberturas deslizem."], "title": "Pizza Estilo Nova York", "directions": ["Coloque uma pedra para pizza ou assadeira no forno e pré-aqueça bem.", "Abra a massa para caber na forma ou pedra, moldando-a em uma pizza redonda.", "Espalhe o molho uniformemente sobre a massa, deixando uma pequena borda.", "Cubra com queijo.", "Adicione pepperoni se desejar.", "Coloque cuidadosamente a pizza sobre a pedra ou assadeira pré-aquecida.", "Asse a 230°C por 10-15 minutos.", "Retire quando a massa estiver levemente dourada e o queijo derretido e borbulhando.", "Deixe esfriar brevemente, depois fatie e sirva."], "description": "Massa fina e dobrável com o tostado perfeito — pizza autêntica de Nova York feita no seu forno fritadeira.", "ingredients": ["Massa de pizza (estilo massa grossa)", "Molho de pizza", "Queijo mussarela ralado", "Pepperoni (opcional)", "Orégano seco ou flocos de pimenta vermelha (opcional)"]}, "zh": {"tips": ["想要更酥脆的饼底，使用披萨石并预热至少15分钟。", "不要过量添加配料 — 这会让披萨变得湿软。", "切片前冷却2-3分钟，防止配料滑落。"], "title": "纽约风格披萨", "directions": ["将披萨石或烤盘放入烤箱充分预热。", "将面团拉伸至与烤盘或披萨石匹配，整形成圆形披萨。", "将酱料均匀涂抹在面团上，边缘留出小边框。", "撒上芝士。", "如需要，添加意式腊肠。", "小心将披萨放在预热的披萨石或烤盘上。", "以450°F (230°C) 烘烤10-15分钟。", "当饼底微黄、芝士融化冒泡时取出。", "稍凉后切片享用。"], "description": "薄底可折叠的披萨，完美的焦香 — 用空气炸烤箱做出正宗纽约披萨。", "ingredients": ["披萨面团（厚底风格）", "披萨酱", "马苏里拉芝士丝", "意式腊肠（可选）", "干牛至或红辣椒碎（可选）"]}},
    is_active:true, display_order:11 },
  { id:12, title:'Chicken Pot Pie', category:'airfryeroven', emoji:'🥧', product_id: 11,
    mode:'Bake', temp:'350°F (175°C)', time:'40-45 minutes',
    translations: {"en": {"tips": ["Let cool slightly before serving; the filling will be very hot.", "Use leftover turkey instead of chicken for variety."], "title": "Chicken Pot Pie", "directions": ["Preheat the oven to 350°F (175°C).", "Sauté onion in butter until soft.", "Stir in flour to make a roux.", "Gradually whisk in broth and milk, simmering until thickened.", "Add chicken and vegetables, season well.", "Pour filling into baking dish, cover with pastry/crust.", "Brush with egg wash, cut vents.", "Bake 40-45 minutes until golden and bubbly."], "description": "Creamy chicken and vegetable filling wrapped in golden flaky pastry — the ultimate comfort food.", "ingredients": ["Cooked chicken, diced or shredded", "Mixed vegetables (peas, carrots, corn)", "Chicken broth — 1 cup", "Onion, finely diced — ½ medium", "Unsalted butter — 2 tbsp (28 g)", "All-purpose flour — 2 tbsp (16 g)", "Milk or cream — ¾ cup (180 ml)", "Salt, black pepper — to taste", "Puff pastry sheet or pie crust", "Egg wash (for top crust only)"]}, "es": {"tips": ["Dejar enfriar ligeramente antes de servir; el relleno estará muy caliente.", "Use el pavo sobrante en lugar del pollo para variedad."], "title": "Pastel de Pollo", "directions": ["Precalentar el horno a 175°C.", "Sofreír la cebolla en mantequilla hasta que esté blanda.", "Agregar la harina y revolver para hacer un roux.", "Incorporar gradualmente el caldo y la leche, hirviendo a fuego lento hasta que espese.", "Agregar el pollo y las verduras, sazonar bien.", "Verter el relleno en una fuente, cubrir con la masa.", "Cepillar con el lavado de huevo, cortar ventilas.", "Hornear 40-45 minutos hasta que esté dorado y burbujeando."], "description": "Relleno cremoso de pollo y verduras envuelto en masa hojaldrada dorada — la comida reconfortante por excelencia.", "ingredients": ["Pollo cocido, en cubos o desmenuzado", "Verduras mixtas (chícharos, zanahorias, maíz)", "Caldo de pollo — 1 taza", "Cebolla, finamente picada — ½ mediana", "Mantequilla sin sal — 2 cdas (28 g)", "Harina — 2 cdas (16 g)", "Leche o crema — ¾ taza (180 ml)", "Sal, pimienta negra — al gusto", "Masa de hojaldre o masa para pastel", "Lavado de huevo (solo para la costra superior)"]}, "fr": {"tips": ["Laisser refroidir légèrement avant de servir; la garniture sera très chaude.", "Utiliser la dinde restante au lieu du poulet pour varier."], "title": "Tourte au Poulet", "directions": ["Préchauffer le four à 175°C.", "Faire revenir l'oignon dans le beurre jusqu'à ce qu'il soit tendre.", "Incorporer la farine pour faire un roux.", "Incorporer progressivement le bouillon et le lait, en faisant mijoter jusqu'à ce que ça épaississe.", "Ajouter le poulet et les légumes, bien assaisonner.", "Verser la garniture dans un plat, couvrir avec la pâte.", "Badigeonner avec l'œuf battu, couper des évents.", "Cuire 40-45 minutes jusqu'à ce que ce soit doré et bouillonnant."], "description": "Garniture crémeuse de poulet et légumes enveloppée dans une pâte dorée et feuilletée — le confort ultime.", "ingredients": ["Poulet cuit, en dés ou effiloché", "Légumes mélangés (pois, carottes, maïs)", "Bouillon de poulet — 1 tasse", "Oignon, finement haché — ½ moyen", "Beurre doux — 2 càs (28 g)", "Farine — 2 càs (16 g)", "Lait ou crème — ¾ tasse (180 ml)", "Sel, poivre noir — au goût", "Pâte feuilletée ou pâte à tarte", "Dorure (œuf battu, pour la croûte supérieure uniquement)"]}, "ja": {"tips": ["提供前に少し冷ましてください；具材は非常に熱いです。", "鶏肉の代わりに残った七面鳥を使ってバリエーションを。"], "title": "チキンポットパイ", "directions": ["オーブンを175°Cに予熱する。", "バターで玉ねぎを炒めて柔らかくする。", "小麦粉を加えてルーを作る。", "少しずつブイヨンと牛乳を加え、とろみがつくまで弱火で煮る。", "鶏肉と野菜を加え、しっかり味付ける。", "具材を耐熱皿に入れ、パイ生地で覆う。", "卵液を塗り、蒸気穴を数ヶ所切る。", "40〜45分焼き、黄金色で泡立つまで。"], "description": "クリーミーなチキンと野菜の具材を黄金のパイ生地で包んだ — 究極のコンフォートフード。", "ingredients": ["茹で鶏（サイコロ切りまたはほぐし身）", "ミックス野菜（グリーンピース、ニンジン、コーン）", "チキンブイヨン 1カップ", "玉ねぎ（みじん切り） ½個", "無塩バター 大さじ2 (28g)", "小麦粉 大さじ2 (16g)", "牛乳または生クリーム ¾カップ (180ml)", "塩、黒コショウ 適量", "パイ生地またはパフペストリー", "卵液（上部のパイのみ）"]}, "pt": {"tips": ["Deixe esfriar levemente antes de servir; o recheio estará muito quente.", "Use o peru sobrante em vez do frango para variedade."], "title": "Torta de Frango", "directions": ["Pré-aqueça o forno a 175°C.", "Refogar a cebola na manteiga até ficar macia.", "Mexer a farinha para fazer um roux.", "Bater gradualmente o caldo e o leite, cozinhando em fogo lento até engrossar.", "Adicionar o frango e os legumes, temperar bem.", "Despejar o recheio em um prato de assar, cobrir com a massa.", "Pincelar com a lavagem de ovo, cortar aberturas.", "Assar por 40-45 minutos até dourar e borbulhar."], "description": "Recheio cremoso de frango e legumes envolto em massa folhada dourada — a comida reconfortante definitiva.", "ingredients": ["Frango cozido, em cubos ou desfiado", "Legumes mistos (ervilhas, cenouras, milho)", "Caldo de frango — 1 xícara", "Cebola, finamente picada — ½ média", "Manteiga sem sal — 2 colheres de sopa (28 g)", "Farinha — 2 colheres de sopa (16 g)", "Leite ou creme — ¾ xícara (180 ml)", "Sal, pimenta preta — a gosto", "Massa folhada ou massa de torta", "Lavagem de ovo (apenas para a crosta superior)"]}, "zh": {"tips": ["上桌前稍凉片刻；馅料非常烫。", "可用剩余火鸡替代鸡肉，换换口味。"], "title": "鸡肉馅饼", "directions": ["将烤箱预热至350°F (175°C)。", "用黄油炒洋葱至变软。", "加入面粉搅拌成糊状。", "逐渐加入鸡汤和牛奶，小火煮至浓稠。", "加入鸡肉和蔬菜，充分调味。", "将馅料倒入烤盘，盖上酥皮。", "刷上蛋液，切几个通气口。", "烘烤40-45分钟直到金黄且冒泡。"], "description": "奶油鸡肉蔬菜馅料包裹在金黄酥脆的酥皮中 — 终极安慰食物。", "ingredients": ["熟鸡肉，切丁或撕碎", "混合蔬菜（豌豆、胡萝卜、玉米）", "鸡汤 1杯", "洋葱，切碎 ½个中等大小", "无盐黄油 2汤匙 (28g)", "中筋面粉 2汤匙 (16g)", "牛奶或奶油 ¾杯 (180ml)", "盐、黑胡椒 适量", "酥皮面团或派皮", "蛋液（仅用于顶部酥皮）"]}},
    is_active:true, display_order:12 },
  { id:13, title:'Roast Chicken with Root Vegetables', category:'airfryeroven', emoji:'🍗', product_id: 11,
    mode:'Roast', temp:'375°F (190°C)', time:'60-65 minutes',
    translations: {"en": {"tips": ["Use a meat thermometer for accuracy.", "Let rest before slicing for juicy results."], "title": "Roast Chicken with Root Vegetables", "directions": ["Rinse the seasoned chicken inside and out, pat dry.", "Rub olive oil and seasonings all over the chicken skin.", "Stuff cavity with lemon halves and herb sprigs if desired.", "Place chicken breast-side up in roasting pan.", "Surround with root vegetables, toss them in oil and seasoning.", "Roast at 375°F (190°C) for 60-65 min until internal temp reaches 165°F (74°C).", "Rest for 10 minutes before carving."], "description": "Juicy whole roast chicken surrounded by tender root vegetables — a complete family dinner.", "ingredients": ["Whole chicken (4–6 lb / 1.8–2.7 kg)", "Potatoes, cubed (large) — 3 cups", "Carrots, chopped — 2 cups", "Red onion, quartered — 1 large", "Olive oil — 3 tbsp", "Salt — 1 tsp", "Black pepper — 1 tsp", "Garlic powder (or fresh garlic) — 1 tsp", "Dried herbs (rosemary/thyme) — 1 tsp"]}, "es": {"tips": ["Use un termómetro de carne para precisión.", "Deje reposar antes de cortar para resultados jugosos."], "title": "Pollo Asado con Verduras de Raíz", "directions": ["Enjuagar el pollo por dentro y por fuera, secar.", "Frotar el aceite de oliva y los sazonadores sobre toda la piel del pollo.", "Rellenar la cavidad con medias limas y ramitas de hierbas si se desea.", "Colocar el pollo con el pecho hacia arriba en la bandeja de asar.", "Rodear con las verduras de raíz, revolver con aceite y sazonador.", "Asar a 190°C durante 60-65 minutos hasta que la temperatura interna alcance 74°C.", "Reposar 10 minutos antes de cortar."], "description": "Pollo asado jugoso entero rodeado de tiernas verduras de raíz — una cena familiar completa.", "ingredients": ["Pollo entero (4-6 lb / 1.8-2.7 kg)", "Papas, en cubos (grandes) — 3 tazas", "Zanahorias, picadas — 2 tazas", "Cebolla roja, en cuartos — 1 grande", "Aceite de oliva — 3 cdas", "Sal — 1 cdta", "Pimienta negra — 1 cdta", "Ajo en polvo (o ajo fresco) — 1 cdta", "Hierbas secas (romero/tomillo) — 1 cdta"]}, "fr": {"tips": ["Utiliser un thermomètre de viande pour la précision.", "Laissez reposer avant de trancher pour des résultats juteux."], "title": "Poulet Rôti aux Légumes Racines", "directions": ["Rincer le poulet à l'intérieur et à l'extérieur, sécher.", "Frotter l'huile d'olive et les assaisonnements sur toute la peau du poulet.", "Farcir la cavité avec des demi-citrons et des brindilles d'herbes si désiré.", "Placer le poulet avec la poitrine vers le haut dans le plat à rôtir.", "Entourer avec les légumes racines, remuer avec l'huile et l'assaisonnement.", "Rôtir à 190°C pendant 60-65 minutes jusqu'à ce que la température interne atteigne 74°C.", "Reposer 10 minutes avant de découper."], "description": "Poulet rôti juteux entier entouré de légumes racines tendres — un dîner familial complet.", "ingredients": ["Poulet entier (1.8-2.7 kg)", "Pommes de terre, en cubes (grandes) — 3 tasses", "Carottes, hachées — 2 tasses", "Oignon rouge, en quartiers — 1 grand", "Huile d'olive — 3 càs", "Sel — 1 cc", "Poivre noir — 1 cc", "Ail en poudre (ou ail frais) — 1 cc", "Herbes séchées (romarin/thym) — 1 cc"]}, "ja": {"tips": ["正確にするために肉用温度計を使用。", "スライスする前に休ませて、ジューシーな仕上がりに。"], "title": "根菜付きローストチキン", "directions": ["鶏肉の内側と外側を洗い、水気を拭き取る。", "鶏の皮全体にオリーブオイルとシーズニングを塗り込む。", "お好みで鶏の内側にレモン半分とハーブの枝を詰める。", "鶏胸を上にしてロースト用パンに置く。", "周りに根菜を配置、オイルとシーズニングを絡める。", "190°Cで60〜65分焼き、中心温度が74°Cに達するまで。", "切り分ける前に10分休ませる。"], "description": "ジューシーな丸鶏のロースト、柔らかい根菜を添えて — 家族みんなのディナーに。", "ingredients": ["丸鶏 1羽（1.8-2.7kg）", "ジャガイモ、大きめの角切り 3カップ", "ニンジン、刻んだ 2カップ", "赤玉ねぎ、四等分 1個（大）", "オリーブオイル 大さじ3", "塩 小さじ1", "黒コショウ 小さじ1", "ガーリックパウダー（または生ニンニク）小さじ1", "乾燥ハーブ（ローズマリー/タイム）小さじ1"]}, "pt": {"tips": ["Use um termômetro de carne para precisão.", "Deixe repousar antes de fatiar para resultados suculentos."], "title": "Frango Assado com Legumes de Raiz", "directions": ["Enxaguar o frango por dentro e por fora, secar.", "Esfregar o azeite de oliva e os temperos sobre toda a pele do frango.", "Stuff a cavidade com metades de limão e raminhos de ervas se desejar.", "Colocar o frango com o peito voltado para cima na assadeira.", "Cercar com os legumes de raiz, mexer com azeite e tempero.", "Assar a 190°C por 60-65 minutos até que a temperatura interna alcance 74°C.", "Repousar por 10 minutos antes de fatiar."], "description": "Frango assado suculento inteiro cercado por legumes de raiz macios — um jantar completo em família.", "ingredients": ["Frango inteiro (1.8-2.7 kg)", "Batatas, em cubos (grandes) — 3 xícaras", "Cenouras, picadas — 2 xícaras", "Cebola roxa, em quartos — 1 grande", "Azeite de oliva — 3 colheres de sopa", "Sal — 1 colher de chá", "Pimenta preta — 1 colher de chá", "Alho em pó (ou alho fresco) — 1 colher de chá", "Ervas secas (alecrim/tomilho) — 1 colher de chá"]}, "zh": {"tips": ["使用肉类温度计确保准确。", "切块前静置，保留肉汁更鲜嫩。"], "title": "烤鸡配根茎蔬菜", "directions": ["将腌制好的整鸡里外冲洗，拍干水分。", "在鸡皮上均匀涂抹橄榄油和调味料。", "如需要，在鸡腔内塞入柠檬 halves 和香草枝。", "将鸡胸朝上放入烤盘中。", "周围摆上根茎蔬菜，淋上油和调味料拌匀。", "以375°F (190°C) 烤60-65分钟，直到内部温度达到165°F (74°C)。", "烤好后静置10分钟再切块。"], "description": "鲜嫩多汁的整只烤鸡，搭配软嫩的根茎蔬菜 — 完整的家庭晚餐。", "ingredients": ["整鸡 1只（4-6磅 / 1.8-2.7公斤）", "土豆，切大块 3杯", "胡萝卜，切碎 2杯", "红洋葱，四等分 1个大", "橄榄油 3汤匙", "盐 1茶匙", "黑胡椒 1茶匙", "蒜粉（或新鲜大蒜）1茶匙", "干香草（迷迭香/百里香）1茶匙"]}},
    is_active:true, display_order:13 },
  { id:14, title:'Broiled Lobster Tail with Garlic Butter', category:'airfryeroven', emoji:'🦞', product_id: 11,
    mode:'Broil', temp:'500°F (260°C)', time:'6-10 minutes',
    translations: {"en": {"tips": ["Do not overcook — lobster becomes rubbery quickly.", "Watch closely after 6 minutes."], "title": "Broiled Lobster Tail with Garlic Butter", "directions": ["Using kitchen shears, cut through the top shell of each lobster tail down the center, stopping at the tail fan. Lift meat and rest it on top of the shell.", "In a small bowl, combine melted butter, garlic, lemon juice, and black pepper.", "Brush the garlic-butter mixture generously over lobster meat.", "Place tails in the broiler pan, meat side up.", "Broil at high heat for 6-10 minutes until opaque and lightly charred."], "description": "Elegant lobster tails brushed with garlic butter and broiled to perfection — restaurant-quality at home.", "ingredients": ["Lobster tails — 2–3 tails (each 5–6 oz / 140–170 g)", "Unsalted butter, melted — 3 tbsp (42 g)", "Garlic, minced — 2–3 cloves", "Lemon juice — 1 tbsp", "Black pepper — ½ tsp", "Paprika (optional, for garnish)"]}, "es": {"tips": ["No cocine demasiado — la langosta se pone gomosa rápidamente.", "Vigilar de cerca después de 6 minutos."], "title": "Cola de Langosta a la Parrilla con Mantequilla de Ajo", "directions": ["Usando tijeras de cocina, cortar a través del caparazón superior de cada cola de langosta hacia abajo por el centro, deteniéndose en el abanico de la cola. Levantar la carne y descansarla sobre la parte superior del caparazón.", "En un tazón pequeño, combinar la mantequilla derretida, ajo, jugo de limón y pimienta negra.", "Cepillar la mezcla de mantequilla de ajo generosamente sobre la carne de langosta.", "Colocar las colas en la bandeja de la parrilla, lado de la carne hacia arriba.", "Asar a fuego alto durante 6-10 minutos hasta que esté opaca y ligeramente chamuscada."], "description": "Colas de langosta elegantes badizonadas con mantequilla de ajo y asadas a la perfección — calidad de restaurante en casa.", "ingredients": ["Colas de langosta — 2-3 colas (cada una 140-170 g)", "Mantequilla sin sal, derretida — 3 cdas (42 g)", "Ajo, picado — 2-3 dientes", "Jugo de limón — 1 cda", "Pimienta negra — ½ cdta", "Pimentón (opcional, para adornar)"]}, "fr": {"tips": ["Ne pas trop cuire — le homard devient caoutchouteux rapidement.", "Surveiller de près après 6 minutes."], "title": "Queue de Homard Grillée au Beurre d'Ail", "directions": ["En utilisant des ciseaux de cuisine, couper à travers la carapace supérieure de chaque queue de homard vers le bas au centre, en s'arrêtant à l'éventail de la queue. Soulever la viande et la poser sur le dessus de la carapace.", "Dans un petit bol, combiner le beurre fondu, l'ail, le jus de citron et le poivre noir.", "Badigeonner généreusement le mélange de beurre à l'ail sur la viande de homard.", "Placer les queus dans le plat du gril, côté viande vers le haut.", "Griller à haute température pendant 6-10 minutes jusqu'à ce qu'elle soit opaque et légèrement noircie."], "description": "Queues de homard élégantes badigeonnées de beurre d'ail et grillées à la perfection — qualité restaurant à la maison.", "ingredients": ["Queues de homard — 2-3 queus (chaque une 140-170 g)", "Beurre sans sel, fondu — 3 càs (42 g)", "Ail, émincé — 2-3 gousses", "Jus de citron — 1 càs", "Poivre noir — ½ cc", "Paprika (optionnel, pour garnir)"]}, "ja": {"tips": ["加熱しすぎないこと — ロブスターはすぐにゴムのような食感になる。", "6分経過後は注意深く見守る。"], "title": "ガーリックバターロブスターテール", "directions": ["キッチンハサミを使って、各ロブスターテールの上側の殻を中心に沿って切り込みを入れ、尾ひれのところで止める。身を取り出して殻の上にのせる。", "小さなボウルで溶かしたバター、にんにく、レモン汁、黒コショウを混ぜ合わせる。", "ロブスターの身にガーリックバターミックスをたっぷりと塗る。", "ロブスターをグリルパンに肉面を上にして置く。", "強火で6〜10分、不透明になり軽く焦げ目がつくまで炙る。"], "description": "エレガントなロブスターテールにガーリックバターを塗って完璧に炙る — ご自宅でレストラン品質。", "ingredients": ["ロブスターテール 2-3尾（各140-170g）", "無塩バター（溶かした）大さじ3 (42g)", "にんにく（みじん切り）2-3片", "レモン汁 大さじ1", "黒コショウ 小さじ½", "パプリカ（お好みで、飾り用）"]}, "pt": {"tips": ["Não cozinhe demais — a lagosta fica borrachuda rapidamente.", "Observar atentamente após 6 minutos."], "title": "Cauda de Lagosta Grelhada com Manteiga de Alho", "directions": ["Usando tesouras de cozinha, cortar através da carapaça superior de cada cauda de lagosta para baixo pelo centro, parando no leque da cauda. Levantar a carne e descansá-la no topo da carapaça.", "Em uma tigela pequena, combinar a manteiga derretida, alho, suco de limão e pimenta preta.", "Pincelar a mistura de manteiga de alho generosamente sobre a carne de lagosta.", "Colocar as caudas na bandeja do grelhador, lado da carne para cima.", "Grelhar em fogo alto por 6-10 minutos até ficar opaca e levemente chamuscada."], "description": "Caudas de lagosta elegantes com manteiga de alho pincelada e grelhadas na perfeição — qualidade de restaurante em casa.", "ingredients": ["Caudas de lagosta — 2-3 caudas (cada uma 140-170 g)", "Manteiga sem sal, derretida — 3 colheres de sopa (42 g)", "Alho, picado — 2-3 dentes", "Suco de limão — 1 colher de sopa", "Pimenta preta — ½ colher de chá", "Páprica (opcional, para enfeitar)"]}, "zh": {"tips": ["切勿过度烹饪 — 龙虾肉很快会变硬。", "6分钟后密切观察。"], "title": "蒜香黄油烤龙虾尾", "directions": ["用厨房剪刀将每条龙虾尾的顶壳沿中心剪开，至尾扇处停止。将肉挑出置于壳上。", "在小碗中混合融化黄油、大蒜、柠檬汁和黑胡椒。", "将蒜香黄油混合物慷慨地刷在龙虾肉上。", "将龙虾尾放入烤盘中，肉面朝上。", "高温烤6-10分钟，直到不透明并轻微焦香。"], "description": "优雅的龙虾尾刷上蒜香黄油，烤至完美 — 在家享受餐厅品质。", "ingredients": ["龙虾尾 2-3条（每条5-6盎司 / 140-170克）", "无盐黄油（融化）3汤匙 (42g)", "大蒜（切碎）2-3瓣", "柠檬汁 1汤匙", "黑胡椒 ½茶匙", "红椒粉（可选，装饰用）"]}},
    is_active:true, display_order:14 },
  { id:15, title:'Classic Chocolate Chip Cookies', category:'airfryeroven', emoji:'🍪', product_id: 11,
    mode:'Cookie', temp:'320°F (160°C)', time:'11-13 minutes',
    translations: {"en": {"tips": ["Chill dough 30+ minutes for thicker cookies.", "Don't overbake — they continue cooking on the hot pan."], "title": "Classic Chocolate Chip Cookies", "directions": ["In mixing bowl, beat softened butter with sugars until creamy.", "Add egg and vanilla, mix until combined.", "In separate bowl, whisk together flour, baking soda, and salt.", "Gradually combine wet and dry ingredients together.", "Fold in chocolate chips.", "Drop rounded spoonfuls onto cookie sheet, spaced 2 inches apart.", "Bake at 320°F (160°C) for 11-13 minutes until edges are golden."], "description": "Soft, chewy chocolate chip cookies with perfectly golden edges — the timeless classic.", "ingredients": ["Unsalted butter, softened — ½ cup (113 g)", "Granulated sugar — ⅓ cup (67 g)", "Brown sugar, packed — ⅓ cup (70 g)", "Egg — 1 large", "All-purpose flour — 1½ cups (187 g)", "Baking soda — 1 tsp", "Salt — ½ tsp", "Vanilla extract — 1 tsp", "Chocolate chips — 1 cup (175 g)"]}, "es": {"tips": ["Enfriar la masa 30+ minutos para galletas más gruesas.", "No hornear demasiado — continúan cocinándose en la bandeja caliente."], "title": "Galletas Clásicas con Chispas de Chocolate", "directions": ["En un tazón de mezcla, batir la mantequilla ablandada con los azúcares hasta que esté cremosa.", "Agregar el huevo y la vainilla, mezclar hasta combinar.", "En un tazón separado, batir juntos la harina, el bicarbonato y la sal.", "Combinar gradualmente los ingredientes húmedos y secos.", "Incorporar las chispas de chocolate.", "Colocar cucharadas redondeadas en la bandeja para galletas, espaciadas 2 pulgadas.", "Hornear a 160°C durante 11-13 minutos hasta que los bordes estén dorados."], "description": "Galletas suaves y masticables con chispas de chocolate y bordes dorados perfectos — el clásico atemporal.", "ingredients": ["Mantequilla sin sal, ablandada — ½ taza (113 g)", "Azúcar granulada — ⅓ taza (67 g)", "Azúcar morena, compactada — ⅓ taza (70 g)", "Huevo — 1 grande", "Harina — 1½ tazas (187 g)", "Bicarbonato de sodio — 1 cdta", "Sal — ½ cdta", "Extracto de vainilla — 1 cdta", "Chispas de chocolate — 1 taza (175 g)"]}, "fr": {"tips": ["Réfrigérer la pâte 30+ minutes pour des cookies plus épais.", "Ne pas trop cuire — ils continuent à cuire sur la plaque chaude."], "title": "Cookies Classiques aux Pépites de Chocolat", "directions": ["Dans un bol de mélange, battre le beurre ramolli avec les sucres jusqu'à ce que ce soit crémeux.", "Ajouter l'œuf et la vanille, mélanger jusqu'à ce qu'ils soient combinés.", "Dans un bol séparé, fouetter ensemble la farine, le bicarbonate et le sel.", "Combiner progressivement les ingrédients humides et secs.", "Incorporer les pépites de chocolat.", "Déposer des cuillerées arrondies sur la plaque à cookies, espacées de 5 cm.", "Cuire à 160°C pendant 11-13 minutes jusqu'à ce que les bords soient dorés."], "description": "Cookies moelleux et chewy avec des pépites de chocolat et des bords parfaitement dorés — le classique intemporel.", "ingredients": ["Beurre doux, ramolli — 113 g", "Sucre granulé — 67 g", "Sucre brun, tassé — 70 g", "Œuf — 1 grand", "Farine — 187 g", "Bicarbonate de soude — 1 cc", "Sel — ½ cc", "Extrait de vanille — 1 cc", "Pépites de chocolat — 175 g"]}, "ja": {"tips": ["より厚いクッキーにするには、生地を30分以上冷蔵する。", "焼きすぎないこと — 熱い焼き皿の上で調理が続く。"], "title": "クラシックチョコチップクッキー", "directions": ["ミキシングボウルで、柔らかくしたバターと砂糖をクリーミーになるまで混ぜる。", "卵とバニラエクストラクトを加え、均一に混ぜる。", "別のボウルで、小麦粉、ベーキングソーダ、塩を泡立て器で混ぜ合わせる。", "湿った材料と乾いた材料を徐々に混ぜ合わせる。", "チョコチップを混ぜ込む。", "丸いスプーンすくいをクッキー焼き皿に並べ、2インチ（約5cm）間隔を空ける。", "160°Cで11〜13分、縁が黄金色になるまで焼く。"], "description": "柔らかくて chewy なチョコチップクッキー、完璧な黄金の縁 — 時代を超えるクラシック。", "ingredients": ["無塩バター（室温で柔らかく）113g", "グラニュー糖 67g", "ブラウンシュガー（固く押さえつけた）70g", "卵 1個（大）", "小麦粉 187g", "ベーキングソーダ 小さじ1", "塩 小さじ½", "バニラエクストラクト 小さじ1", "チョコチップ 175g"]}, "pt": {"tips": ["Esfriar a massa por 30+ minutos para cookies mais grossos.", "Não assar demais — eles continuam cozinhando na assadeira quente."], "title": "Cookies Clássicos com Gotas de Chocolate", "directions": ["Em uma tigela de mistura, bater a manteiga amolecida com os açúcares até ficar cremoso.", "Adicionar o ovo e a baunilha, misturar até combinar.", "Em uma tigela separada, bater junto a farinha, o bicarbonato e o sal.", "Combinar gradualmente os ingredientes úmidos e secos.", "Incorporar as gotas de chocolate.", "Colocar colheradas arredondadas na assadeira de cookies, espacadas de 5 cm.", "Assar a 160°C por 11-13 minutos até que as bordas estejam douradas."], "description": "Cookies macios e chewy com gotas de chocolate e bordas perfeitamente douradas — o clássico atemporal.", "ingredients": ["Manteiga sem sal, amolecida — 113 g", "Açúcar granulado — 67 g", "Açúcar mascavo, compactado — 70 g", "Ovo — 1 grande", "Farinha — 187 g", "Bicarbonato de sódio — 1 colher de chá", "Sal — ½ colher de chá", "Extrato de baunilha — 1 colher de chá", "Gotas de chocolate — 175 g"]}, "zh": {"tips": ["将面团冷藏30分钟以上，可制作更厚的曲奇。", "切勿过度烘烤 — 它们在热烤盘上会继续烹饪。"], "title": "经典巧克力曲奇", "directions": ["在搅拌盆中，将软化的黄油和糖搅拌至奶油状。", "加入鸡蛋和香草精，搅拌均匀。", "在另一个盆中，混合面粉、小苏打和盐。", "逐渐将湿料和干料混合在一起。", "拌入巧克力豆。", "将圆形面团勺放在曲奇烤盘上，间隔2英寸。", "以320°F (160°C) 烘烤11-13分钟，直到边缘呈金黄色。"], "description": "柔软有嚼劲的巧克力曲奇，边缘金黄完美 — 永恒的经典。", "ingredients": ["无盐黄油（软化）½杯 (113g)", "细砂糖 ⅓杯 (67g)", "黄糖（压实）⅓杯 (70g)", "鸡蛋 1个大蛋", "中筋面粉 1½杯 (187g)", "小苏打 1茶匙", "盐 ½茶匙", "香草精 1茶匙", "巧克力豆 1杯 (175g)"]}},
    is_active:true, display_order:15 },
  { id:16, title:'Apple Chips with Cinnamon', category:'airfryeroven', emoji:'🍎', product_id: 11,
    mode:'Dehydrate', temp:'135°F (57°C)', time:'6-8 hours',
    translations: {"en": {"tips": ["Thinner slices will dry faster and produce crisper chips.", "Drying time may vary depending on apple variety and moisture content; begin checking at 6 hours."], "title": "Apple Chips with Cinnamon", "directions": ["Wash apples thoroughly. Peeling is optional.", "Slice the apples into 2–3 mm thin slices using a knife or mandoline.", "If desired, gently toss the apple slices with lemon juice to reduce oxidation.", "Sprinkle the cinnamon evenly over the apple slices.", "Arrange apple slices in a single layer on dehydrating tray or baking tray, avoiding overlap.", "Place the tray into the oven and select Dehydrate mode.", "Set the temperature to 135°F (57°C) and dehydrate for 6-8 hours.", "Turn the slices once halfway through for even drying, if needed.", "Remove when apple chips are fully dried and become crisp after cooling.", "Allow to cool completely before serving or storing."], "description": "Naturally sweet, crispy apple chips dusted with cinnamon — a healthy snack made easy.", "ingredients": ["Apples — 2–3 medium apples (450–600 g total)", "Ground cinnamon — ½ tsp", "Lemon juice — 1 Tbsp (optional, to prevent browning)"]}, "es": {"tips": ["Rebanadas más delgadas se secarán más rápido y producirán chips más crujientes.", "El tiempo de secado puede variar según la variedad de manzana y el contenido de humedad; comenzar a verificar a las 6 horas."], "title": "Chips de Manzana con Canela", "directions": ["Lavar las manzanas minuciosamente. Pelar es opcional.", "Cortar las manzanas en rebanadas delgadas de 2-3 mm usando un cuchillo o mandolina.", "Si se desea, revolver suavemente las rebanadas de manzana con jugo de limón para reducir la oxidación.", "Espolvorear la canela uniformemente sobre las rebanadas de manzana.", "Disponer las rebanadas de manzana en una sola capa en la bandeja de deshidratación o bandeja de horno, evitando superposición.", "Colocar la bandeja en el horno y seleccionar modo Deshidratar.", "Configurar la temperatura a 57°C y deshidratar durante 6-8 horas.", "Voltear las rebanadas una vez a la mitad si es necesario para un secado uniforme.", "Retirar cuando los chips de manzana estén completamente secos y se vuelvan crocantes después de enfriar.", "Dejar enfriar completamente antes de servir o almacenar."], "description": "Chips de manzana naturalmente dulces y crujientes espolvoreadas con canela — un snack saludable fácil de hacer.", "ingredients": ["Manzanas — 2-3 manzanas medianas (450-600 g total)", "Canela molida — ½ cdta", "Jugo de limón — 1 cda (opcional, para evitar que se doren)"]}, "fr": {"tips": ["Des tranches plus fines sécheront plus rapidement et produiront des chips plus croustillantes.", "Le temps de séchage peut varier selon la variété de pomme et la teneur en humidité ; commencer à vérifier après 6 heures."], "title": "Chips de Pomme à la Cannelle", "directions": ["Laver les pommes soigneusement. Éplucher est optionnel.", "Couper les pommes en tranches fines de 2-3 mm à l'aide d'un couteau ou d'une mandoline.", "Si désiré, remuer doucement les tranches de pomme avec du jus de citron pour réduire l'oxydation.", "Saupoudrer la cannelle uniformément sur les tranches de pomme.", "Disposer les tranches de pomme en une seule couche sur le plateau de déshydratation ou la plaque de cuisson, en évitant le chevauchement.", "Placer le plateau dans le four et sélectionner le mode Déshydrater.", "Régler la température à 57°C et déshydrater pendant 6-8 heures.", "Retourner les tranches une fois à la moitié si nécessaire pour un séchage uniforme.", "Retirer lorsque les chips de pomme sont complètement séchées et deviennent croustillantes après refroidissement.", "Laisser refroidir complètement avant de servir ou de stocker."], "description": "Chips de pomme naturellement sucrées et croustillantes saupoudrées de cannelle — une collation saine facile à faire.", "ingredients": ["Pommes — 2-3 pommes moyennes (450-600 g total)", "Cannelle moulue — ½ cc", "Jus de citron — 1 càs (optionnel, pour éviter le brunissement)"]}, "ja": {"tips": ["薄いスライスの方が早く乾燥し、よりカリッとしたチップスになる。", "乾燥時間はりんごの品種と水分含有量により異なる；6時間経過後から確認を開始する。"], "title": "シナモンアップルチップス", "directions": ["りんごをよく洗う。皮をむくのはお好みで。", "ナイフまたはスライサーを使ってりんごを2-3mmの薄切りにする。", "お好みで、りんごのスライスをレモン汁と一緒に軽く和えて酸化を抑える。", "シナモンをりんごスライスに均一に振りかける。", "りんごスライスを単層で脱水トレイまたは焼き皿に並べ、重ならないようにする。", "トレイをオーブンに入れ、脱水モードを選択する。", "温度を57°Cに設定し、6〜8時間脱水する。", "必要に応じて途中で一度ひっくり返し、均一に乾燥させる。", "アップルチップスが完全に乾燥し、冷ましてからカリッとしたら取り出す。", "完全に冷ましてから召し上がるか保存する。"], "description": "自然な甘さのカリッとしたアップルチップスにシナモンを振りかけた — 簡単に作れる健康的なおやつ。", "ingredients": ["りんご 2-3個（中サイズ、計450-600g）", "シナモンパウダー 小さじ½", "レモン汁 大さじ1（お好みで、変色防止）"]}, "pt": {"tips": ["Fatias mais finas secarão mais rápido e produzirão chips mais crocantes.", "O tempo de secagem pode variar dependendo da variedade de maçã e do conteúdo de umidade; comece a verificar após 6 horas."], "title": "Chips de Maçã com Canela", "directions": ["Lavar as maçãs minuciosamente. Descascar é opcional.", "Cortar as maçãs em fatias finas de 2-3 mm usando uma faca ou mandolina.", "Se desejar, agitar suavemente as fatias de maçã com suco de limão para reduzir a oxidação.", "Polvilhar a canela uniformemente sobre as fatias de maçã.", "Dispor as fatias de maçã em uma única camada na bandeja de desidratação ou bandeja de forno, evitando sobreposição.", "Colocar a bandeja no forno e selecionar o modo Desidratar.", "Configurar a temperatura para 57°C e desidratar por 6-8 horas.", "Virar as fatias uma vez na metade, se necessário, para um secagem uniforme.", "Remover quando os chips de maçã estiverem completamente secos e ficarem crocantes após o resfriamento.", "Deixar esfriar completamente antes de servir ou armazenar."], "description": "Chips de maçã naturalmente doces e crocantes polvilhadas com canela — um lanche saudável fácil de fazer.", "ingredients": ["Maçãs — 2-3 maçãs médias (450-600 g total)", "Canela moída — ½ colher de chá", "Suco de limão — 1 colher de sopa (opcional, para evitar o escurecimento)"]}, "zh": {"tips": ["越薄的切片干燥越快，口感越脆。", "干燥时间因苹果品种和水分含量而异；6小时后开始检查。"], "title": "肉桂苹果脆片", "directions": ["彻底洗净苹果。去皮可选。", "用刀具或切片器将苹果切成2-3毫米的薄片。", "如需要，将苹果片轻轻拌入柠檬汁以减少氧化。", "将肉桂粉均匀撒在苹果片上。", "将苹果片单层摆放在脱水盘或烤盘上，避免重叠。", "将盘子放入烤箱，选择脱水模式。", "将温度设定为135°F (57°C)，脱水6-8小时。", "如需要，中途翻面一次以确保均匀干燥。", "当苹果脆片完全干燥并在冷却后变脆时取出。", "完全冷却后再享用或储存。"], "description": "天然甜美的酥脆苹果片，撒上肉桂粉 — 轻松制作的健康零食。", "ingredients": ["苹果 2-3个中等大小（总计450-600克）", "肉桂粉 ½茶匙", "柠檬汁 1汤匙（可选，防止氧化变色）"]}},
    is_active:true, display_order:16 },
  { id:17, title:'Pizza Dough Proofing', category:'airfryeroven', emoji:'🍕', product_id: 11,
    mode:'Ferment', temp:'95-100°F (35-38°C)', time:'1-2 hours',
    translations: {"en": {"tips": ["Do not set the temperature above 105°F (40°C), as excessive heat may reduce yeast activity.", "Proofing time may vary depending on dough size, yeast amount, and ambient conditions."], "title": "Pizza Dough Proofing", "directions": ["Shape the pizza dough into a smooth ball.", "Lightly coat the surface with olive oil if desired to prevent drying.", "Place the dough in a bowl and cover loosely with plastic wrap or a damp cloth.", "Place the covered dough into the oven.", "Select Ferment mode.", "Set the temperature to 95–100°F (35–38°C).", "Allow the dough to proof for 1–2 hours, or until it doubles in size.", "Remove the dough and proceed with shaping and baking as desired."], "description": "Perfectly proofed pizza dough every time — your secret to a light, airy crust.", "ingredients": ["Pizza dough — 1 dough ball (250–300 g) prepared according to your preferred pizza dough recipe", "Olive oil — a small amount, optional (to prevent sticking)"]}, "es": {"tips": ["No configurar la temperatura por encima de 40°C, ya que el exceso de calor puede reducir la actividad de la levadura.", "El tiempo de fermentación puede variar según el tamaño de la masa, la cantidad de levadura y las condiciones ambientales."], "title": "Fermentación de Masa de Pizza", "directions": ["Dar forma a la masa de pizza en una bola suave.", "Cubrir ligeramente la superficie con aceite de oliva si se desea para evitar que se seque.", "Colocar la masa en un tazón y cubrir loosely con plástico de envolver o un paño húmedo.", "Colocar la masa cubierta en el horno.", "Seleccionar modo Fermentar.", "Configurar la temperatura a 35-38°C.", "Permitir que la masa fermente durante 1-2 horas, o hasta que duplique su tamaño.", "Retirar la masa y proceder con el formado y horneado según se desee."], "description": "Masa de pizza perfectamente fermentada cada vez — tu secreto para una corteza ligera y esponjosa.", "ingredients": ["Masa de pizza — 1 bola de masa (250-300 g) preparada según su receta preferida", "Aceite de oliva — una pequeña cantidad, opcional (para evitar que se pegue)"]}, "fr": {"tips": ["Ne pas régler la température au-dessus de 40°C, car une chaleur excessive peut réduire l'activité de la levure.", "Le temps de levage peut varier selon la taille de la pâte, la quantité de levure et les conditions ambiantes."], "title": "Levage de Pâte à Pizza", "directions": ["Façonner la pâte à pizza en une boule lisse.", "Couvrir légèrement la surface avec de l'huile d'olive si désiré pour éviter le séchage.", "Placer la pâte dans un bol et couvrir loosely avec du film plastique ou un linge humide.", "Placer la pâte couverte dans le four.", "Sélectionner le mode Fermenter.", "Régler la température à 35-38°C.", "Permettre à la pâte de lever pendant 1-2 heures, ou jusqu'à ce qu'elle double de volume.", "Retirer la pâte et procéder au façonnage et à la cuisson comme désiré."], "description": "Pâte à pizza parfaitement levée à chaque fois — votre secret pour une croûte légère et aérée.", "ingredients": ["Pâte à pizza — 1 boule de pâte (250-300 g) préparée selon votre recette préférée", "Huile d'olive — une petite quantité, optionnelle (pour éviter que ça colle)"]}, "ja": {"tips": ["温度を40°C以上に設定しないこと、過熱するとイースト活性が低下する。", "発酵時間は生地の大きさ、イースト量、環境条件により異なる。"], "title": "ピザ生地の発酵", "directions": ["ピザ生地を滑らかな玉状に整える。", "お好みで表面にオリーブオイルを薄く塗り、乾燥を防ぐ。", "生地をボウルに入れ、ラップまたは湿った布でゆるく覆う。", "覆った生地をオーブンに入れる。", "発酵モードを選択する。", "温度を35〜38°Cに設定する。", "生地を1〜2時間、または倍の大きさになるまで発酵させる。", "生地を取り出し、お好みで成形・焼成に進む。"], "description": "毎回完璧に発酵するピザ生地 — 軽くてふんわりとした生地の秘密。", "ingredients": ["ピザ生地 — 生地玉1個（250-300g）、お好みのピザ生地レシピで準備", "オリーブオイル — 少量（お好みで、くっつき防止）"]}, "pt": {"tips": ["Não configure a temperatura acima de 40°C, pois o calor excessivo pode reduzir a atividade do fermento.", "O tempo de fermentação pode variar dependendo do tamanho da massa, quantidade de fermento e condições ambientais."], "title": "Fermentação de Massa de Pizza", "directions": ["Formatar a massa de pizza em uma bola suave.", "Cobrir levemente a superfície com azeite de oliva se desejado para evitar o ressecamento.", "Colocar a massa em uma tigela e cobrir loosely com plástico filme ou um pano úmido.", "Colocar a massa coberta no forno.", "Selecionar o modo Fermentar.", "Configurar a temperatura para 35-38°C.", "Permitir que a massa fermenta por 1-2 horas, ou até que dobre de tamanho.", "Remover a massa e proceder com a modelagem e o cozimento como desejado."], "description": "Massa de pizza perfeitamente fermentada toda vez — seu segredo para uma crosta leve e aerada.", "ingredients": ["Massa de pizza — 1 bola de massa (250-300 g) preparada de acordo com sua receita preferida", "Azeite de oliva — uma pequena quantidade, opcional (para evitar que grude)"]}, "zh": {"tips": ["切勿将温度设定在105°F (40°C) 以上，因为过热会降低酵母活性。", "发酵时间因面团大小、酵母量和环境条件而异。"], "title": "披萨面团发酵", "directions": ["将披萨面团整形成光滑的球状。", "如需要，在表面轻涂一层橄榄油以防止干燥。", "将面团放入碗中，用保鲜膜或湿布 loosely 覆盖。", "将覆盖好的面团放入烤箱。", "选择发酵模式。", "将温度设定为95-100°F (35-38°C)。", "让面团发酵1-2小时，或直到体积翻倍。", "取出面团，按需要进行整形和烘烤。"], "description": "每次都完美发酵的披萨面团 — 你做出轻盈蓬松饼底的秘诀。", "ingredients": ["披萨面团 — 1个面团球（250-300克），按照你喜欢的披萨面团配方准备", "橄榄油 — 少量，可选（防止粘连）"]}},
    is_active:true, display_order:17 }
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

// Map badge text to CSS variant class
function getBadgeClass(badgeText) {
  const map = {
    'new': 'product-badge--new',
    'hot': 'product-badge--hot',
    'bestseller': 'product-badge--bestseller',
    'smart': 'product-badge--smart',
    'premium': '',
    'xl': '',
    'large': '',
    'retro': '',
    'digital': '',
    'commercial': ''
  };
  return map[badgeText.toLowerCase().trim()] || '';
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

  const badgeClass = getBadgeClass(badgeText);
  const badgeHtml = badgeText
    ? `<a href="buy.html?product=${product.id}" class="product-badge ${badgeClass}">${badgeText}</a>`
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
        ${imgContent}
      </div>
      <div class="scroll-card-body">
        ${badgeHtml}
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

  const badgeClass = getBadgeClass(badgeText);
  const badgeHtml = badgeText
    ? `<a href="buy.html?product=${product.id}" class="product-badge ${badgeClass}">${badgeText}</a>`
    : '';

  const imgContent = imageUrl
    ? `<img src="${imageUrl}" alt="${name}" style="width:100%;height:100%;object-fit:cover;">`
    : `<span style="font-size:4rem;">${icon}</span>`;

  return `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4" data-category="${product.category}">
      <div class="product-card">
        <div class="product-img">
          ${imgContent}
        </div>
        <div class="product-body">
          ${badgeHtml}
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
let _initProductsRunning = null;

async function initProducts() {
  // Prevent duplicate concurrent calls — reuse in-flight promise
  if (_initProductsRunning) return _initProductsRunning;
  _initProductsRunning = (async () => {
    // Try Supabase first
    if (typeof SUPABASE_URL !== 'undefined' && SUPABASE_URL !== 'https://YOUR_PROJECT_ID.supabase.co') {
      try {
        const supabaseProducts = await fetchProducts(null, getCurrentLang());
        if (supabaseProducts && supabaseProducts.length > 0) {
          // Use Supabase data as-is (admin panel manages all fields including translations)
          products = supabaseProducts;
          console.log('Loaded ' + products.length + ' products from Supabase');
        } else {
          // Supabase returned empty — use fallback
          console.log('Supabase returned empty products, using fallback data');
          products = [...FALLBACK_PRODUCTS];
        }
      } catch (e) {
        console.log('Supabase not available, using fallback data:', e.message);
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
  })();
  return _initProductsRunning;
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
document.addEventListener('DOMContentLoaded', async () => {
  await initProducts();

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
