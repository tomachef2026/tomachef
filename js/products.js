/* ============================================================
   TomaChef Products - API-first with fallback
   ============================================================ */

// Fallback static data (used when Supabase is not configured)
const FALLBACK_PRODUCTS = [
  { id:1, name:'Digital Air Fryer 5.8QT', name_zh:'数字触控空气炸锅 5.8QT', name_es:'Freidora de Aire Digital 5.8QT', name_fr:'Friteuse à Air Numérique 5.8QT', name_ja:'デジタルエアフライヤー 5.8QT', name_pt:'Fritadeira de Ar Digital 5.8QT', description:'Touchscreen, 8 presets, 1700W', description_zh:'触控屏，8种预设，1700W', description_es:'Pantalla táctil, 8 programas, 1700W', description_fr:'Écran tactile, 8 préréglages, 1700W', description_ja:'タッチスクリーン、8プリセット、1700W', description_pt:'Tela touch, 8 programas, 1700W', category:'airfryer', icon:'🍟', badge:'Bestseller', price:'$49.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'White',hex:'#f5f5f5'},{name:'Red',hex:'#b91c1c'}], specs:{capacity:'5.8 QT',power:'1700W',presets:'8',temp:'90-400°F'}, sort_order:1, active:true },
  { id:2, name:'Visible Glass Air Fryer', name_zh:'可视玻璃空气炸锅', name_es:'Freidora de Aire con Visor', name_fr:'Friteuse à Air avec Hublot', name_ja:'可視ガラスエアフライヤー', name_pt:'Fritadeira de Ar com Visor', description:'360° viewing window, 6QT, LED display', description_zh:'360°观察窗，6QT，LED显示', description_es:'Ventana 360°, 6QT, pantalla LED', description_fr:'Fenêtre 360°, 6QT, affichage LED', description_ja:'360°ビューウィンドウ、6QT、LEDディスプレイ', description_pt:'Visor 360°, 6QT, display LED', category:'airfryer', icon:'🔍', badge:'New', price:'$59.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'6 QT',power:'1700W',presets:'10',temp:'90-400°F'}, sort_order:2, active:true },
  { id:3, name:'Dual Basket Air Fryer 8QT', name_zh:'双篮空气炸锅 8QT', name_es:'Freidora de Aire Doble Cesta 8QT', name_fr:'Friteuse à Air Double Panier 8QT', name_ja:'デュアルバスケットエアフライヤー 8QT', name_pt:'Fritadeira de Ar Cesto Duplo 8QT', description:'DualZone tech, sync finish, 1700W', description_zh:'双区技术，同步完成，1700W', description_es:'Tecnología DualZone, final sincronizado, 1700W', description_fr:'Technologie DualZone, finition synchronisée, 1700W', description_ja:'DualZone技術、同期仕上げ、1700W', description_pt:'Tecnologia DualZone, final sincronizado, 1700W', category:'airfryer', icon:'🍗', badge:'Hot', price:'$79.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Silver',hex:'#d4d4d4'}], specs:{capacity:'8 QT',power:'1700W',presets:'6',temp:'90-450°F'}, sort_order:3, active:true },
  { id:4, name:'Compact Air Fryer 3.5QT', name_zh:'迷你空气炸锅 3.5QT', name_es:'Freidora de Aire Compacta 3.5QT', name_fr:'Friteuse à Air Compacte 3.5QT', name_ja:'コンパクトエアフライヤー 3.5QT', name_pt:'Fritadeira de Ar Compacta 3.5QT', description:'Space-saving design, 1300W, 4 presets', description_zh:'节省空间设计，1300W，4种预设', description_es:'Diseño compacto, 1300W, 4 programas', description_fr:'Design compact, 1300W, 4 préréglages', description_ja:'省スペース設計、1300W、4プリセット', description_pt:'Design compacto, 1300W, 4 programas', category:'airfryer', icon:'🥗', badge:'', price:'$34.99', image_url:'', colors:[{name:'White',hex:'#f5f5f5'},{name:'Mint',hex:'#a7d8c8'}], specs:{capacity:'3.5 QT',power:'1300W',presets:'4',temp:'90-400°F'}, sort_order:4, active:true },
  { id:5, name:'Smart WiFi Air Fryer', name_zh:'智能WiFi空气炸锅', name_es:'Freidora de Aire WiFi Inteligente', name_fr:'Friteuse à Air WiFi Intelligente', name_ja:'スマートWiFiエアフライヤー', name_pt:'Fritadeira de Ar WiFi Inteligente', description:'App control, voice ready, 5.8QT', description_zh:'APP控制，语音就绪，5.8QT', description_es:'Control por app, compatible con voz, 5.8QT', description_fr:'Contrôle par app, compatible vocal, 5.8QT', description_ja:'アプリ制御、音声対応、5.8QT', description_pt:'Controle por app, pronto para voz, 5.8QT', category:'airfryer', icon:'📱', badge:'Smart', price:'$69.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'White',hex:'#f5f5f5'}], specs:{capacity:'5.8 QT',power:'1700W',presets:'12',temp:'90-400°F'}, sort_order:5, active:true },
  { id:6, name:'Stainless Steel Air Fryer', name_zh:'不锈钢空气炸锅', name_es:'Freidora de Aire de Acero Inoxidable', name_fr:'Friteuse à Air en Acier Inoxydable', name_ja:'ステンレスエアフライヤー', name_pt:'Fritadeira de Ar em Aço Inox', description:'Premium finish, 6.5QT, 1800W', description_zh:'高级外观，6.5QT，1800W', description_es:'Acabado premium, 6.5QT, 1800W', description_fr:'Finition premium, 6.5QT, 1800W', description_ja:'プレミアム仕上げ、6.5QT、1800W', description_pt:'Acabamento premium, 6.5QT, 1800W', category:'airfryer', icon:'✨', badge:'Premium', price:'$89.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'6.5 QT',power:'1800W',presets:'10',temp:'90-450°F'}, sort_order:6, active:true },
  { id:7, name:'Mini Air Fryer 2.5QT', name_zh:'个人空气炸锅 2.5QT', name_es:'Mini Freidora de Aire 2.5QT', name_fr:'Mini Friteuse à Air 2.5QT', name_ja:'ミニエアフライヤー 2.5QT', name_pt:'Mini Fritadeira de Ar 2.5QT', description:'Personal size, 1000W, rapid air', description_zh:'个人使用，1000W，快速空气循环', description_es:'Tamaño personal, 1000W, aire rápido', description_fr:'Format personnel, 1000W, air rapide', description_ja:'パーソナルサイズ、1000W、高速空気循環', description_pt:'Tamanho pessoal, 1000W, ar rápido', category:'airfryer', icon:'🍳', badge:'', price:'$24.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Pink',hex:'#f4a7b9'}], specs:{capacity:'2.5 QT',power:'1000W',presets:'4',temp:'90-400°F'}, sort_order:7, active:true },
  { id:8, name:'XL Air Fryer 10QT', name_zh:'大容量空气炸锅 10QT', name_es:'Freidora de Aire XL 10QT', name_fr:'Friteuse à Air XL 10QT', name_ja:'XLエアフライヤー 10QT', name_pt:'Fritadeira de Ar XL 10QT', description:'Family size, 1800W, rotisserie', description_zh:'家庭装，1800W，旋转烤叉', description_es:'Tamaño familiar, 1800W, rosticero', description_fr:'Format familial, 1800W, rôtissoire', description_ja:'ファミリーサイズ、1800W、ロティサリー', description_pt:'Tamanho família, 1800W, rotisseria', category:'airfryer', icon:'🦃', badge:'XL', price:'$99.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Silver',hex:'#d4d4d4'}], specs:{capacity:'10 QT',power:'1800W',presets:'8',temp:'90-450°F'}, sort_order:8, active:true },
  { id:9, name:'26QT Air Fryer Oven', name_zh:'26QT 空气炸烤箱', name_es:'Horno Freidor 26QT', name_fr:'Four Friteuse 26QT', name_ja:'26QTエアフライヤーオーブン', name_pt:'Forno Fritadeira 26QT', description:'12-in-1, rotisserie, dehydrate, 1800W', description_zh:'12合1，旋转烤叉，脱水，1800W', description_es:'12 en 1, rosticero, deshidratador, 1800W', description_fr:'12 en 1, rôtissoire, déshydrateur, 1800W', description_ja:'12-in-1、ロティサリー、脱水、1800W', description_pt:'12 em 1, rotisseria, desidratador, 1800W', category:'airfryeroven', icon:'🔥', badge:'Bestseller', price:'$119.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'26 QT',power:'1800W',functions:'12-in-1',temp:'90-450°F'}, sort_order:9, active:true },
  { id:10, name:'32QT Convection Oven', name_zh:'32QT 对流烤箱', name_es:'Horno de Convección 32QT', name_fr:'Four à Convection 32QT', name_ja:'32QT対流オーブン', name_pt:'Forno de Convecção 32QT', description:'Stainless steel, 10 presets, large capacity', description_zh:'不锈钢，10种预设，大容量', description_es:'Acero inoxidable, 10 programas, gran capacidad', description_fr:'Acier inoxydable, 10 préréglages, grande capacité', description_ja:'ステンレス、10プリセット、大容量', description_pt:'Aço inox, 10 programas, grande capacidade', category:'airfryeroven', icon:'🍕', badge:'Large', price:'$149.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'},{name:'Black',hex:'#1a1a1a'}], specs:{capacity:'32 QT',power:'1800W',functions:'10',temp:'90-450°F'}, sort_order:10, active:true },
  { id:11, name:'Digital Air Fryer Toaster Oven', name_zh:'数字空气炸烤面包机', name_es:'Horno Tostador Freidor Digital', name_fr:'Four Grille-Pain Friteuse Numérique', name_ja:'デジタルエアフライヤートースターオーブン', name_pt:'Forno Torradeira Fritadeira Digital', description:'Smart presets, interior light, 1800W', description_zh:'智能预设，内部照明，1800W', description_es:'Programas inteligentes, luz interior, 1800W', description_fr:'Préréglages intelligents, éclairage intérieur, 1800W', description_ja:'スマートプリセット、内部照明、1800W', description_pt:'Programas inteligentes, luz interna, 1800W', category:'airfryeroven', icon:'📟', badge:'Smart', price:'$109.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'White',hex:'#f5f5f5'}], specs:{capacity:'25 QT',power:'1800W',functions:'10',temp:'90-450°F'}, sort_order:11, active:true },
  { id:12, name:'French Door Air Fryer Oven', name_zh:'法式双门空气炸烤箱', name_es:'Horno Freidor Puerta Francesa 25QT', name_fr:'Four Friteuse Portes Françaises 25QT', name_ja:'フレンチドアエアフライヤーオーブン', name_pt:'Forno Fritadeira Porta Francesa 25QT', description:'25QT, dual door, 12 functions', description_zh:'25QT，双门设计，12种功能', description_es:'25QT, puerta doble, 12 funciones', description_fr:'25QT, double porte, 12 fonctions', description_ja:'25QT、デュアルドア、12機能', description_pt:'25QT, porta dupla, 12 funções', category:'airfryeroven', icon:'🚪', badge:'New', price:'$139.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Stainless',hex:'#c0c0c0'}], specs:{capacity:'25 QT',power:'1800W',functions:'12',temp:'90-450°F'}, sort_order:12, active:true },
  { id:13, name:'Compact Air Fryer Oven 15QT', name_zh:'紧凑型空气炸烤箱 15QT', name_es:'Horno Freidor Compacto 15QT', name_fr:'Four Friteuse Compact 15QT', name_ja:'コンパクトエアフライヤーオーブン 15QT', name_pt:'Forno Fritadeira Compacto 15QT', description:'Countertop friendly, 6-in-1, 1500W', description_zh:'台面友好，6合1，1500W', description_es:'Ideal para encimera, 6 en 1, 1500W', description_fr:'Adapté au plan de travail, 6 en 1, 1500W', description_ja:'カウンタートップ対応、6-in-1、1500W', description_pt:'Ideal para bancada, 6 em 1, 1500W', category:'airfryeroven', icon:'🏠', badge:'', price:'$89.99', image_url:'', colors:[{name:'White',hex:'#f5f5f5'},{name:'Black',hex:'#1a1a1a'}], specs:{capacity:'15 QT',power:'1500W',functions:'6-in-1',temp:'90-400°F'}, sort_order:13, active:true },
  { id:14, name:'4-Slice Stainless Toaster', name_zh:'4片不锈钢烤面包机', name_es:'Tostadora Inox 4 Rebanadas', name_fr:'Grille-Pain Inox 4 Tranches', name_ja:'4枚焼きステンレストースター', name_pt:'Torradeira Inox 4 Fatias', description:'Extra-wide slots, bagel mode, 1500W', description_zh:'加宽槽口，贝果模式，1500W', description_es:'Ranuras extra anchas, modo bagel, 1500W', description_fr:'Fentes extra larges, mode bagel, 1500W', description_ja:'ワイドスロット、ベーグルモード、1500W', description_pt:'Ranhuras extra largas, modo bagel, 1500W', category:'toaster', icon:'🍞', badge:'Bestseller', price:'$39.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'},{name:'Black',hex:'#1a1a1a'},{name:'Red',hex:'#b91c1c'}], specs:{slices:'4',power:'1500W',levels:'7',features:'Bagel/Defrost'}, sort_order:14, active:true },
  { id:15, name:'2-Slice Retro Toaster', name_zh:'2片复古烤面包机', name_es:'Tostadora Retro 2 Rebanadas', name_fr:'Grille-Pain Rétro 2 Tranches', name_ja:'2枚焼きレトロトースター', name_pt:'Torradeira Retrô 2 Fatias', description:'Vintage design, 7 browning levels', description_zh:'复古设计，7档烘烤程度', description_es:'Diseño vintage, 7 niveles de tostado', description_fr:'Design vintage, 7 niveaux de brunissage', description_ja:'ヴィンテージデザイン、7段階焼き色調整', description_pt:'Design vintage, 7 níveis de tostagem', category:'toaster', icon:'🧈', badge:'Retro', price:'$29.99', image_url:'', colors:[{name:'Cream',hex:'#fdf6e3'},{name:'Mint',hex:'#a7d8c8'},{name:'Red',hex:'#b91c1c'}], specs:{slices:'2',power:'900W',levels:'7',features:'Defrost/Reheat'}, sort_order:15, active:true },
  { id:16, name:'4-Slice Digital Toaster', name_zh:'4片数字烤面包机', name_es:'Tostadora Digital 4 Rebanadas', name_fr:'Grille-Pain Numérique 4 Tranches', name_ja:'4枚焼きデジタルトースター', name_pt:'Torradeira Digital 4 Fatias', description:'LCD display, countdown timer, memory function', description_zh:'LCD显示屏，倒计时器，记忆功能', description_es:'Pantalla LCD, temporizador, función memoria', description_fr:'Écran LCD, minuteur, fonction mémoire', description_ja:'LCDディスプレイ、カウントダウンタイマー、メモリー機能', description_pt:'Display LCD, temporizador, função memória', category:'toaster', icon:'🖥️', badge:'Digital', price:'$49.99', image_url:'', colors:[{name:'Black',hex:'#1a1a1a'},{name:'Silver',hex:'#d4d4d4'}], specs:{slices:'4',power:'1600W',levels:'9',features:'LCD/Memory'}, sort_order:16, active:true },
  { id:17, name:'Long Slot Toaster 2-Slice', name_zh:'长槽2片烤面包机', name_es:'Tostadora Ranura Larga 2 Rebanadas', name_fr:'Grille-Pain Fente Longue 2 Tranches', name_ja:'ロングスロットトースター 2枚焼き', name_pt:'Torradeira Ranhura Longa 2 Fatias', description:'Artisan bread ready, defrost mode, 900W', description_zh:'适合手工面包，解冻模式，900W', description_es:'Para pan artesanal, modo descongelar, 900W', description_fr:'Pour pain artisanal, mode décongélation, 900W', description_ja:'アーティザンブレッド対応、解凍モード、900W', description_pt:'Para pão artesanal, modo descongelar, 900W', category:'toaster', icon:'🥖', badge:'', price:'$34.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'},{name:'Black',hex:'#1a1a1a'}], specs:{slices:'2',power:'900W',levels:'7',features:'Long Slot'}, sort_order:17, active:true },
  { id:18, name:'Commercial 4-Slice Toaster', name_zh:'商用4片烤面包机', name_es:'Tostadora Comercial 4 Rebanadas', name_fr:'Grille-Pain Commercial 4 Tranches', name_ja:'業務用4枚焼きトースター', name_pt:'Torradeira Comercial 4 Fatias', description:'Heavy-duty, high-speed, 1800W', description_zh:'重型，高速，1800W', description_es:'Servicio pesado, alta velocidad, 1800W', description_fr:'Usage intensif, haute vitesse, 1800W', description_ja:'ヘビーデューティー、高速、1800W', description_pt:'Serviço pesado, alta velocidade, 1800W', category:'toaster', icon:'🏪', badge:'Commercial', price:'$69.99', image_url:'', colors:[{name:'Stainless',hex:'#c0c0c0'}], specs:{slices:'4',power:'1800W',levels:'9',features:'Heavy Duty'}, sort_order:18, active:true }
];

// Fallback recipe data (shown when Supabase has no recipes)
const FALLBACK_RECIPES = [
  { id:1, title:'Crispy Air Fryer Chicken Wings', category:'airfryer', emoji:'🍗',
    translations: { en:{title:'Crispy Air Fryer Chicken Wings',description:'Golden and crunchy in just 20 minutes — no oil needed.'}, zh:{title:'香脆空气炸鸡翅',description:'20分钟金黄酥脆，无需一滴油。'}, es:{title:'Alitas Crujientes en Freidora de Aire',description:'Doradas y crujientes en solo 20 minutos.'}, fr:{title:'Ailes de Poulet Croustillantes',description:'Dorées et croustillantes en 20 minutes.'}, ja:{title:'カリカリエアフライヤーチキン',description:'20分で黄金色にカリッと。'}, pt:{title:'Asinhas Crocantes na Air Fryer',description:'Douradas e crocantes em 20 minutos.'} },
    is_active:true, display_order:1 },
  { id:2, title:'Perfect Air Fryer Oven Pizza', category:'airfryeroven', emoji:'🍕',
    translations: { en:{title:'Perfect Air Fryer Oven Pizza',description:'Restaurant-quality pizza from your air fryer oven in 15 minutes.'}, zh:{title:'空气炸烤箱披萨',description:'15分钟做出餐厅级披萨。'}, es:{title:'Pizza Perfecta en Horno Freidor',description:'Pizza calidad restaurante en 15 minutos.'}, fr:{title:'Pizza Parfaite au Four Friteuse',description:'Pizza qualité restaurant en 15 minutes.'}, ja:{title:'完璧なエアフライヤーオーブンピザ',description:'15分でレストラン品質のピザ。'}, pt:{title:'Pizza Perfeita no Forno Fritadeira',description:'Pizza qualidade restaurante em 15 minutos.'} },
    is_active:true, display_order:2 },
  { id:3, title:'Avocado Toast 3 Ways', category:'toaster', emoji:'🥑',
    translations: { en:{title:'Avocado Toast 3 Ways',description:'Elevate your breakfast with these three gourmet avocado toast recipes.'}, zh:{title:'牛油果吐司三吃',description:'三种精致牛油果吐司，开启美好早晨。'}, es:{title:'Tostada de Aguacate 3 Estilos',description:'Eleva tu desayuno con estas tres recetas gourmet.'}, fr:{title:'Tartine Avocat 3 Façons',description:'Sublimez votre petit-déjeuner avec ces recettes gourmandes.'}, ja:{title:'アボカドトースト3種',description:'3つのグルメレシピで朝食をワンランクアップ。'}, pt:{title:'Torrada de Abacate 3 Estilos',description:'Eleve seu café da manhã com estas três receitas gourmet.'} },
    is_active:true, display_order:3 }
];

// Expose products globally
let products = [...FALLBACK_PRODUCTS];

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
    return '<div class="recipe-card fade-in">' +
      '<div class="recipe-img" style="position:relative;">' + imgHtml +
      '<span class="recipe-badge" style="z-index:1;">' + escapeHtml(catLabels[r.category] || r.category) + '</span></div>' +
      '<div class="recipe-body"><h5>' + escapeHtml(tr.title || '') + '</h5>' +
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
          }
          return p;
        });
        console.log('Loaded ' + products.length + ' products from Supabase (translations merged from fallback)');
      }
    } catch (e) {
      console.log('Supabase not available, using fallback data');
    }
  }

  // Render based on which layout is on this page
  const sectionsContainer = document.getElementById('productSections');
  const productGrid = document.getElementById('productGrid');
  const homeGrid = document.getElementById('homeProductGrid');

  if (sectionsContainer) {
    // New scroll section layout
    const lang = getCurrentLang();
    renderProductSections(lang);
  } else if (productGrid) {
    // Legacy grid layout
    const lang = getCurrentLang();
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
