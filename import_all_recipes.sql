-- ===========================================================
-- TomaChef Recipe Booklet Import
-- 10 recipes for 11-in-1 Air Fryer Oven (product_id = 9)
-- Run this in Supabase SQL Editor
-- ===========================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Recipe 4: Oven-Fried Buttermilk Chicken
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  4,
  'Oven-Fried Buttermilk Chicken',
  'airfryeroven',
  '🍗',
  9,
  'Air Fry',
  '375°F (190°C)',
  '25-30 minutes',
  '{"en": {"title": "Oven-Fried Buttermilk Chicken", "description": "Crispy, golden fried chicken with juicy buttermilk-marinated meat — no deep frying needed.", "content": "", "ingredients": ["2 bone-in chicken pieces (thighs or breast)", "1 cup buttermilk", "½ tsp paprika powder", "¼ tsp garlic powder", "½ tsp black pepper", "½ cup all-purpose flour", "Cooking spray or light oil spray"], "directions": ["Coat each chicken piece evenly with the seasoned flour mixture.", "Place chicken pieces into the air fryer basket in a single layer.", "Cook at 375°F (190°C) for 25-30 minutes, flipping halfway through.", "Cook until internal temperature reaches 165°F (74°C)."], "tips": ["Do not stack pieces on top of each other — this prevents even cooking and crisping.", "For extra crispy results, give chicken pieces a quick spray with cooking spray or a light coat of oil."]}, "zh": {"title": "酪乳脆皮炸鸡", "description": "金黄酥脆的酪乳腌制炸鸡，鲜嫩多汁 — 无需油炸。", "content": "", "ingredients": ["鸡腿肉或鸡胸肉（带骨）2块", "酪乳 1杯", "红椒粉 ½茶匙", "蒜粉 ¼茶匙", "黑胡椒 ½茶匙", "中筋面粉 ½杯", "烹饪喷雾或少许食用油"], "directions": ["将每块鸡肉均匀裹上调味面粉混合物。", "将鸡肉单层放入空气炸锅篮中。", "以375°F (190°C) 烘烤25-30分钟，中途翻面。", "煮至内部温度达到165°F (74°C) 即可。"], "tips": ["切勿重叠放置鸡肉 — 这会导致受热不均，影响酥脆度。", "想要更酥脆的效果，可在鸡肉表面轻喷烹饪喷雾或刷一层薄油。"]}, "es": {"title": "Pollo Frito con Suero de Leche", "description": "Pollo frito crujiente y dorado con carne jugosa marinada en suero de leche — sin freír en aceite.", "content": "", "ingredients": ["2 piezas de pollo con hueso (muslos o pechuga)", "1 taza de suero de leche", "½ cdta de pimentón en polvo", "¼ cdta de ajo en polvo", "½ cdta de pimienta negra", "½ taza de harina", "Spray de cocina o aceite ligero"], "directions": ["Cubra cada pieza de pollo uniformemente con la mezcla de harina sazonada.", "Coloque las piezas de pollo en la canasta de la freidora de aire en una sola capa.", "Cocine a 190°C durante 25-30 minutos, volteando a la mitad.", "Cocine hasta que la temperatura interna alcance 74°C."], "tips": ["No apile las piezas — esto impide una cocción uniforme.", "Para resultados extra crujientes, rocíe las piezas con spray de cocina."]}, "fr": {"title": "Poulet Frit au Babeurre", "description": "Poulet frit croustillant et doré avec une viande juteuse marinée au babeurre — sans friture.", "content": "", "ingredients": ["2 morceaux de poulet avec os (cuisses ou blanc)", "250ml de babeurre", "½ cc de paprika en poudre", "¼ cc d''ail en poudre", "½ cc de poivre noir", "60g de farine", "Spray de cuisson ou huile légère"], "directions": ["Enrober chaque morceau de poulet uniformément avec le mélange de farine assaisonné.", "Placer les morceaux de poulet dans le panier de la friteuse à air en une seule couche.", "Cuire à 190°C pendant 25-30 minutes, en retournant à mi-cuisson.", "Cuire jusqu''à ce que la température interne atteigne 74°C."], "tips": ["Ne pas empiler les morceaux — cela empêche une cuisson uniforme.", "Pour un résultat plus croustillant, vaporiser un peu d''huile sur le poulet."]}, "ja": {"title": "バターミルクフライドチキン", "description": "カリッと黄金色のフライドチキン、バターミルク漬けでジューシー — 揚げ油不要。", "content": "", "ingredients": ["鶏肉（手羽または胸肉・骨付き）2本", "バターミルク 240ml", "パプリカパウダー 小さじ½", "ガーリックパウダー 小さじ¼", "黒コショウ 小さじ½", "小麦粉 60g", "料理用スプレーまたは少しの油"], "directions": ["鶏肉を味付け小麦粉で均一にまぶす。", "鶏肉を単層でエアフライヤーのバスケットに入れる。", "190°Cで25〜30分加熱、途中でひっくり返す。", "中心温度が74°Cに達するまで加熱する。"], "tips": ["重ねて置かないこと — 均一に加熱できなくなる。", "よりカリッとさせたい場合は、料理用スプレーを軽く吹きかける。"]}, "pt": {"title": "Frango Frito com Buttermilk", "description": "Frango frito crocante e dourado com carne suculenta marinada em buttermilk — sem fritura em óleo.", "content": "", "ingredients": ["2 pedaços de frango com osso (coxas ou peito)", "1 xícara de buttermilk", "½ colher de chá de páprica em pó", "¼ colher de chá de alho em pó", "½ colher de chá de pimenta preta", "½ xícara de farinha", "Spray de cozinha ou óleo leve"], "directions": ["Cubra cada pedaço de frango uniformemente com a mistura de farinha temperada.", "Coloque os pedaços de frango na cesta da fritadeira de ar em uma única camada.", "Cozinhe a 190°C por 25-30 minutos, virando na metade.", "Cozinhe até que a temperatura interna alcance 74°C."], "tips": ["Não empilhe as peças — isso impede um cozimento uniforme.", "Para resultados extra crocantes, pulverize um pouco de spray de cozinha sobre o frango."]}}'::jsonb,
  true,
  4
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 5: Garlic Bread (Bakery-Style)
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  5,
  'Garlic Bread (Bakery-Style)',
  'airfryeroven',
  '🧄',
  9,
  'Toast',
  '400°F (205°C)',
  '6-8 minutes',
  '{"en": {"title": "Garlic Bread (Bakery-Style)", "description": "Crispy, golden garlic bread with a soft buttery center — just like your favorite bakery.", "content": "", "ingredients": ["Sliced French bread or white bread loaf", "Unsalted butter, softened", "Dried parsley, chopped fresh garlic cloves", "A pinch of salt"], "directions": ["Preheat air fryer to toast mode at 400°F (205°C).", "Slice bread evenly on both sides with melted garlic-parsley butter.", "Toast for about 6-8 minutes until golden brown and crispy."], "tips": ["For extra flavor, add a pinch of Parmesan cheese on top before toasting.", "Watch closely during the last minute to avoid burning."]}, "zh": {"title": "面包店风格蒜香面包", "description": "外酥内软的黄金蒜香面包，浓郁的黄油蒜香 — 复刻你最爱面包店的味道。", "content": "", "ingredients": ["法式面包或白面包切片", "无盐黄油（软化）", "干欧芹、新鲜蒜末", "少许盐"], "directions": ["将空气炸锅预热至吐司模式400°F (205°C)。", "在面包两面均匀涂抹融化的蒜香欧芹黄油。", "烤制约6-8分钟，直到金黄酥脆。"], "tips": ["想要更浓郁风味，可在烤制前撒少许帕玛森芝士。", "最后一分钟密切观察，避免烤焦。"]}, "es": {"title": "Pan de Ajo Estilo Panadería", "description": "Pan de ajo crujiente y dorado con un centro suave y mantecoso — como el de tu panadería favorita.", "content": "", "ingredients": ["Pan francés rebanado o pan blanco", "Mantequilla sin sal, ablandada", "Perejil seco, dientes de ajo picados", "Una pizca de sal"], "directions": ["Precalentar la freidora a 205°C en modo tostar.", "Untar el pan uniformemente con mantequilla de ajo y perejil derretida.", "Tostar durante 6-8 minutos hasta que esté dorado y crujiente."], "tips": ["Para más sabor, añadir un poco de queso parmesano antes de tostar.", "Vigilar de cerca en el último minuto para evitar quemaduras."]}, "fr": {"title": "Pain à l''Ail Façon Boulangerie", "description": "Pain à l''ail croustillant et doré avec un cœur tendre au beurre — comme à la boulangerie.", "content": "", "ingredients": ["Pain françois tranché ou pain blanc", "Beurre doux, ramolli", "Persil séché, gousses d''ail hachées", "Une pincée de sel"], "directions": ["Préchauffer la friteuse à 205°C en mode griller.", "Tartiner le pain uniformément avec du beurre à l''ail et persil fondu.", "Griller pendant 6-8 minutes jusqu''à ce qu''il soit doré et croustillant."], "tips": ["Pour plus de goût, ajouter un peu de parmesan avant de griller.", "Surveiller de près la dernière minute pour éviter de brûler."]}, "ja": {"title": "ベーカリースタイルガーリックブレッド", "description": "カリッと黄金色のガーリックブレッド、中心はバターでしっとり — お気に入りのベーカリーのような味わい。", "content": "", "ingredients": ["フランスパンまたは白パンのスライス", "無塩バター（室温で柔らかく）", "乾燥パセリ、新鮮ニンニク（みじん切り）", "塩ひとつまみ"], "directions": ["エアフライヤーをトーストモード205°Cに予熱する。", "パンの両面に溶かしたガーリック・パセリバターを均一に塗る。", "約6〜8分焼き、黄金色でカリッとなるまで。"], "tips": ["より風味を増したい場合は、焼く前にパルメザンチーズを少しのせる。", "最後の1分は焦げないよう注意深く見守る。"]}, "pt": {"title": "Pão de Alho Estilo Padaria", "description": "Pão de alho crocante e dourado com centro macio e amanteigado — como o da sua padaria favorita.", "content": "", "ingredients": ["Pão francês fatiado ou pão branco", "Manteiga sem sal, amolecida", "Salsinha seca, dentes de alho picados", "Uma pitada de sal"], "directions": ["Pré-aqueça a fritadeira a 205°C no modo tostar.", "Espalhe uniformemente a manteiga de alho e salsinha derretida sobre o pão.", "Torrar por 6-8 minutos até dourar e ficar crocante."], "tips": ["Para mais sabor, adicione um pouco de queijo parmesão antes de torrar.", "Observar atentamente no último minuto para evitar queimar."]}}'::jsonb,
  true,
  5
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 6: Everything Bagel Salmon Melt
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  6,
  'Everything Bagel Salmon Melt',
  'airfryeroven',
  '🥯',
  9,
  'Bagel',
  '420°F (220°C)',
  '8-10 minutes',
  '{"en": {"title": "Everything Bagel Salmon Melt", "description": "An open-faced bagel loaded with cream cheese, smoked salmon, and everything seasoning — brunch perfection.", "content": "", "ingredients": ["Everything bagels, halved", "Cream cheese, softened", "Smoked salmon slices", "Red onion, thinly sliced (optional)", "Fresh dill (optional)"], "directions": ["Slice bagels in half.", "Toast bagel halves until golden.", "Spread cream cheese on each half.", "Layer salmon, onions, and dill on top.", "Place assembled bagel halves in the oven and toast until warm and melty."], "tips": ["Add capers for extra briny flavor.", "Serve immediately while warm."]}, "zh": {"title": "贝果三文鱼芝士焗烤", "description": "开面贝果搭配奶油芝士、烟熏三文鱼和全能调味料 — 完美早午餐之选。", "content": "", "ingredients": ["全能贝果，对半切开", "奶油芝士，软化", "烟熏三文鱼片", "红洋葱，切薄片（可选）", "新鲜莳萝（可选）"], "directions": ["将贝果对半切开。", "将贝果切面朝上烤至金黄。", "在每个贝果切面上涂抹奶油芝士。", "依次铺上三文鱼、洋葱和莳萝。", "将组装好的贝果放入烤箱，烤至温热芝士融化。"], "tips": ["可加入刺山柑增加咸鲜风味。", "趁热立即享用。"]}, "es": {"title": "Bagel Derretido con Salmón", "description": "Bagel abierto cargado con queso crema, salmón ahumado y el sazonador everything — perfección para el brunch.", "content": "", "ingredients": ["Bagels everything, cortados a la mitad", "Queso crema, ablandado", "Láminas de salmón ahumado", "Cebolla roja, en rodajas finas (opcional)", "Eneldo fresco (opcional)"], "directions": ["Cortar los bagels a la mitad.", "Tostar las mitades hasta que estén doradas.", "Untar queso crema en cada mitad.", "Colocar el salmón, cebolla y eneldo encima.", "Colocar las mitades ensambladas en el horno y tostar hasta que estén calientes y derretidas."], "tips": ["Añadir alcaparras para un sabor extra.", "Servir inmediatamente mientras esté caliente."]}, "fr": {"title": "Bagel Fondant au Saumon", "description": "Bagel ouvert garni de fromage frais, saumon fumé et l''assaisonnement everything — le brunch parfait.", "content": "", "ingredients": ["Bagels everything, coupés en deux", "Fromage frais, ramolli", "Tranches de saumon fumé", "Oignon rouge, en fines rondelles (optionnel)", "Aneth frais (optionnel)"], "directions": ["Couper les bagels en deux.", "Faire griller les moitiés jusqu''à ce qu''elles soient dorées.", "Tartiner le fromage frais sur chaque moitié.", "Disposer le saumon, l''oignon et l''aneth par-dessus.", "Placer les moitiés assemblées dans le four et griller jusqu''à ce que ce soit chaud et fondu."], "tips": ["Ajouter des câpres pour un goût extra.", "Servir immédiatement tandis qu''il est chaud."]}, "ja": {"title": "エブリシングベーゲルサーモンメルト", "description": "クリームチーズとスモークサーモン、エブリシングシーズニングをのせたオープンベーゲル — ブランチに最適。", "content": "", "ingredients": ["エブリシングベーゲル、対半にカット", "クリームチーズ、室温で柔らかく", "スモークサーモンスライス", "赤玉ねぎ、薄切り（お好みで）", "新鮮ディル（お好みで）"], "directions": ["ベーゲルを対半にカットする。", "ベーゲルを黄金色になるまでトーストする。", "各半分にクリームチーズを塗る。", "その上にサーモン、玉ねぎ、ディルをのせる。", "組み立てたベーゲルをオーブンに入れ、温かくチーズが溶けるまで焼く。"], "tips": ["ケーパーを加えると風味が増す。", "温かいうちにすぐ召し上がれ。"]}, "pt": {"title": "Bagel Derretido com Salmão", "description": "Bagel aberto carregado com cream cheese, salmão defumado e o tempero everything — perfeito para o brunch.", "content": "", "ingredients": ["Bagels everything, cortados ao meio", "Cream cheese, amolecido", "Fatias de salmão defumado", "Cebola roxa, em fatias finas (opcional)", "Endro fresco (opcional)"], "directions": ["Cortar os bagels ao meio.", "Torrar as metades até dourar.", "Espalhar cream cheese em cada metade.", "Colocar o salmão, cebola e endro por cima.", "Colocar as metades montadas no forno e torrar até ficarem quentes e derretidas."], "tips": ["Adicionar alcaparras para sabor extra.", "Servir imediatamente enquanto estiver quente."]}}'::jsonb,
  true,
  6
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 7: New York-Style Pizza
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  7,
  'New York-Style Pizza',
  'airfryeroven',
  '🍕',
  9,
  'Pizza',
  '450°F (230°C)',
  '10-15 minutes',
  '{"en": {"title": "New York-Style Pizza", "description": "Thin, foldable crust with a perfect char — authentic New York pizza made right in your air fryer oven.", "content": "", "ingredients": ["Pizza dough (thick-crust style)", "Pizza sauce", "Shredded mozzarella cheese", "Pepperoni (optional)", "Dried oregano or red pepper flakes (optional)"], "directions": ["Place a pizza stone or baking tray in the oven and preheat thoroughly.", "Stretch the dough to fit the pan or stone, shaping it into a round pizza.", "Spread sauce evenly over the dough, leaving a small border around the edge.", "Top with cheese.", "Add pepperoni if desired.", "Carefully place the pizza onto the preheated stone or tray.", "Bake at 450°F (230°C) for 10-15 minutes.", "Remove when the crust is lightly browned and the cheese is melted and bubbling.", "Let cool briefly, then slice and serve."], "tips": ["For a crispier crust, use a pizza stone and preheat it for at least 15 minutes.", "Don''t overload with toppings — this can make the pizza soggy.", "Let cool for 2-3 minutes before slicing to prevent toppings from sliding off."]}, "zh": {"title": "纽约风格披萨", "description": "薄底可折叠的披萨，完美的焦香 — 用空气炸烤箱做出正宗纽约披萨。", "content": "", "ingredients": ["披萨面团（厚底风格）", "披萨酱", "马苏里拉芝士碎", "意大利辣香肠（可选）", "干牛至或红辣椒碎（可选）"], "directions": ["将披萨石或烤盘放入烤箱，充分预热。", "将面团拉伸至适合烤盘或石的大小，整形成圆形披萨。", "在面团上均匀涂抹酱料，边缘留一小圈不涂。", "铺上芝士。", "如需要，加上意大利辣香肠。", "小心地将披萨放到预热好的石或烤盘上。", "以450°F (230°C) 烘烤10-15分钟。", "当饼底呈浅金色、芝士融化并冒泡时取出。", "稍凉片刻，然后切片享用。"], "tips": ["想要更酥脆的饼底，使用披萨石并预热至少15分钟。", "不要过量堆放配料 — 这会使披萨变得湿软。", "切片前冷却2-3分钟，防止配料滑落。"]}, "es": {"title": "Pizza Estilo Nueva York", "description": "Masa fina y plegable con el tostado perfecto — auténtica pizza neoyorquina hecha en tu horno freidor.", "content": "", "ingredients": ["Masa de pizza (estilo masa gruesa)", "Salsa de pizza", "Queso mozzarella rallado", "Pepperoni (opcional)", "Orégano seco o hojuelas de pimiento rojo (opcional)"], "directions": ["Colocar una piedra para pizza o bandeja en el horno y precalentar bien.", "Estirar la masa para que quepa en el molde o piedra, dándole forma redonda.", "Extender la salsa uniformemente sobre la masa, dejando un borde pequeño.", "Cubrir con queso.", "Añadir pepperoni si se desea.", "Colocar con cuidado la pizza sobre la piedra o bandeja precalentada.", "Hornear a 230°C durante 10-15 minutos.", "Retirar cuando el borde esté ligeramente dorado y el queso esté derretido y burbujeando.", "Dejar enfriar brevemente, luego cortar y servir."], "tips": ["Para una base más crujiente, use una piedra para pizza y precaliente por al menos 15 minutos.", "No sobrecargue con ingredientes — esto puede hacer que la pizza quede soggy.", "Deje enfriar 2-3 minutos antes de cortar para evitar que los ingredientes se deslicen."]}, "fr": {"title": "Pizza Façon New York", "description": "Pâte fine et pliable avec un tostado parfait — authentique pizza new-yorkaise dans votre four friteuse.", "content": "", "ingredients": ["Pâte à pizza (style croûte épaisse)", "Sauce pizza", "Fromage mozzarella râpé", "Pepperoni (optionnel)", "Origan séché ou flocons de piment rouge (optionnel)"], "directions": ["Placer une pierre à pizza ou une plaque dans le four et préchauffer soigneusement.", "Étirer la pâte pour l''adapter au moule ou à la pierre, en lui donnant une forme ronde.", "Étaler la sauce uniformément sur la pâte, en laissant une petite bordure sur le bord.", "Garnir de fromage.", "Ajouter le pepperoni si désiré.", "Placer soigneusement la pizza sur la pierre ou la plaque préchauffée.", "Cuire à 230°C pendant 10-15 minutes.", "Retirer lorsque le bord est légèrement doré et que le fromage est fondu et bouillonnant.", "Laisser refroidir brièvement, puis couper et servir."], "tips": ["Pour une croûte plus croustillante, utilisez une pierre à pizza et préchauffez-la pendant au moins 15 minutes.", "Ne surchargez pas avec les garnitures — cela peut rendre la pizza soggy.", "Laissez refroidir 2-3 minutes avant de couper pour éviter que les garnitures ne glissent."]}, "ja": {"title": "NYスタイルピザ", "description": "薄くて折りたためる生地に完璧な焼き目 — エアフライヤーオーブンで本格NYピザを。", "content": "", "ingredients": ["ピザ生地（厚めのスタイル）", "ピザソース", "モッツァレラチーズ（千切り）", "ペペロンチーノ（お好みで）", "乾燥オレガノまたは赤唐辛子フレーク（お好みで）"], "directions": ["ピザストーンまたは焼き皿をオーブンに入れ、十分に予熱する。", "生地を伸ばして型またはストーンに合わせ、丸型に形成する。", "生地にソースを均一に塗り、端に小さな縁を残す。", "チーズをのせる。", "お好みでペペロンチーノを追加。", "注意してピザを予熱したストーンまたは皿の上に置く。", "230°Cで10〜15分焼く。", "縁が薄く金色になり、チーズが溶けて泡立ったら取り出す。", "少し冷ましてから切り分けて召し上がれ。"], "tips": ["よりカリッとした生地にするには、ピザストーンを使い少なくとも15分予熱する。", "トッピングを過剰にのせないこと — ピザがぐちゃぐちゃになる。", "スライスする前に2〜3分冷まし、トッピングが滑り落ちるのを防ぐ。"]}, "pt": {"title": "Pizza Estilo Nova York", "description": "Massa fina e dobrável com o tostado perfeito — autêntica pizza nova-iorquina feita no seu forno fritadeira.", "content": "", "ingredients": ["Massa de pizza (estilo massa grossa)", "Molho de pizza", "Queijo mozzarella ralado", "Pepperoni (opcional)", "Orégano seco ou flocos de pimenta vermelha (opcional)"], "directions": ["Coloque uma pedra de pizza ou assadeira no forno e pré-aqueça bem.", "Estique a massa para caber na forma ou pedra, dando-lhe um formato redondo.", "Espalhe o molho uniformemente sobre a massa, deixando uma pequena borda ao redor.", "Cubra com queijo.", "Adicione pepperoni se desejar.", "Coloque cuidadosamente a pizza sobre a pedra ou assadeira pré-aquecida.", "Asse a 230°C por 10-15 minutos.", "Retire quando a borda estiver levemente dourada e o queijo estiver derretido e borbulhando.", "Deixe esfriar brevemente, depois corte e sirva."], "tips": ["Para uma crosta mais crocante, use uma pedra de pizza e pré-aqueça por pelo menos 15 minutos.", "Não sobrecarregue com coberturas — isso pode deixar a pizza encharcada.", "Deixe esfriar por 2-3 minutos antes de cortar para evitar que as coberturas escorreguem."]}}'::jsonb,
  true,
  7
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 8: Chicken Pot Pie
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  8,
  'Chicken Pot Pie',
  'airfryeroven',
  '🥧',
  9,
  'Bake',
  '350°F (175°C)',
  '40-45 minutes',
  '{"en": {"title": "Chicken Pot Pie", "description": "Creamy chicken and vegetable filling wrapped in golden flaky pastry — the ultimate comfort food.", "content": "", "ingredients": ["Cooked chicken, diced or shredded", "Mixed vegetables (peas, carrots, corn)", "Chicken broth — 1 cup", "Onion, finely diced — ½ medium", "Unsalted butter — 2 tbsp (28 g)", "All-purpose flour — 2 tbsp (16 g)", "Milk or cream — ¾ cup (180 ml)", "Salt, black pepper — to taste", "Puff pastry sheet or pie crust", "Egg wash (for top crust only)"], "directions": ["Preheat the oven to 350°F (175°C).", "Sauté onion in butter until soft.", "Stir in flour to make a roux.", "Gradually whisk in broth and milk, simmering until thickened.", "Add chicken and vegetables, season well.", "Pour filling into baking dish, cover with pastry/crust.", "Brush with egg wash, cut vents.", "Bake 40-45 minutes until golden and bubbly."], "tips": ["Let cool slightly before serving; the filling will be very hot.", "Use leftover turkey instead of chicken for variety."]}, "zh": {"title": "鸡肉馅饼", "description": "奶油鸡肉蔬菜馅料包裹在金黄酥脆的酥皮中 — 终极安慰食物。", "content": "", "ingredients": ["熟鸡肉，切丁或撕碎", "混合蔬菜（豌豆、胡萝卜、玉米）", "鸡汤 1杯", "洋葱，切碎 ½个中等大小", "无盐黄油 2汤匙 (28g)", "中筋面粉 2汤匙 (16g)", "牛奶或奶油 ¾杯 (180ml)", "盐、黑胡椒 适量", "酥皮面团或派皮", "蛋液（仅用于顶部酥皮）"], "directions": ["将烤箱预热至350°F (175°C)。", "用黄油炒洋葱至变软。", "加入面粉搅拌成糊状。", "逐渐加入鸡汤和牛奶，小火煮至浓稠。", "加入鸡肉和蔬菜，充分调味。", "将馅料倒入烤盘，盖上酥皮。", "刷上蛋液，切几个通气口。", "烘烤40-45分钟直到金黄且冒泡。"], "tips": ["上桌前稍凉片刻；馅料非常烫。", "可用剩余火鸡替代鸡肉，换换口味。"]}, "es": {"title": "Pastel de Pollo", "description": "Relleno cremoso de pollo y verduras envuelto en masa hojaldrada dorada — la comida reconfortante por excelencia.", "content": "", "ingredients": ["Pollo cocido, en cubos o desmenuzado", "Verduras mixtas (chícharos, zanahorias, maíz)", "Caldo de pollo — 1 taza", "Cebolla, finamente picada — ½ mediana", "Mantequilla sin sal — 2 cdas (28 g)", "Harina — 2 cdas (16 g)", "Leche o crema — ¾ taza (180 ml)", "Sal, pimienta negra — al gusto", "Masa de hojaldre o masa para pastel", "Lavado de huevo (solo para la costra superior)"], "directions": ["Precalentar el horno a 175°C.", "Sofreír la cebolla en mantequilla hasta que esté blanda.", "Agregar la harina y revolver para hacer un roux.", "Incorporar gradualmente el caldo y la leche, hirviendo a fuego lento hasta que espese.", "Agregar el pollo y las verduras, sazonar bien.", "Verter el relleno en una fuente, cubrir con la masa.", "Cepillar con el lavado de huevo, cortar ventilas.", "Hornear 40-45 minutos hasta que esté dorado y burbujeando."], "tips": ["Dejar enfriar ligeramente antes de servir; el relleno estará muy caliente.", "Use el pavo sobrante en lugar del pollo para variedad."]}, "fr": {"title": "Tourte au Poulet", "description": "Garniture crémeuse de poulet et légumes enveloppée dans une pâte dorée et feuilletée — le confort ultime.", "content": "", "ingredients": ["Poulet cuit, en dés ou effiloché", "Légumes mélangés (pois, carottes, maïs)", "Bouillon de poulet — 1 tasse", "Oignon, finement haché — ½ moyen", "Beurre doux — 2 càs (28 g)", "Farine — 2 càs (16 g)", "Lait ou crème — ¾ tasse (180 ml)", "Sel, poivre noir — au goût", "Pâte feuilletée ou pâte à tarte", "Dorure (œuf battu, pour la croûte supérieure uniquement)"], "directions": ["Préchauffer le four à 175°C.", "Faire revenir l''oignon dans le beurre jusqu''à ce qu''il soit tendre.", "Incorporer la farine pour faire un roux.", "Incorporer progressivement le bouillon et le lait, en faisant mijoter jusqu''à ce que ça épaississe.", "Ajouter le poulet et les légumes, bien assaisonner.", "Verser la garniture dans un plat, couvrir avec la pâte.", "Badigeonner avec l''œuf battu, couper des évents.", "Cuire 40-45 minutes jusqu''à ce que ce soit doré et bouillonnant."], "tips": ["Laisser refroidir légèrement avant de servir; la garniture sera très chaude.", "Utiliser la dinde restante au lieu du poulet pour varier."]}, "ja": {"title": "チキンポットパイ", "description": "クリーミーなチキンと野菜の具材を黄金のパイ生地で包んだ — 究極のコンフォートフード。", "content": "", "ingredients": ["茹で鶏（サイコロ切りまたはほぐし身）", "ミックス野菜（グリーンピース、ニンジン、コーン）", "チキンブイヨン 1カップ", "玉ねぎ（みじん切り） ½個", "無塩バター 大さじ2 (28g)", "小麦粉 大さじ2 (16g)", "牛乳または生クリーム ¾カップ (180ml)", "塩、黒コショウ 適量", "パイ生地またはパフペストリー", "卵液（上部のパイのみ）"], "directions": ["オーブンを175°Cに予熱する。", "バターで玉ねぎを炒めて柔らかくする。", "小麦粉を加えてルーを作る。", "少しずつブイヨンと牛乳を加え、とろみがつくまで弱火で煮る。", "鶏肉と野菜を加え、しっかり味付ける。", "具材を耐熱皿に入れ、パイ生地で覆う。", "卵液を塗り、蒸気穴を数ヶ所切る。", "40〜45分焼き、黄金色で泡立つまで。"], "tips": ["提供前に少し冷ましてください；具材は非常に熱いです。", "鶏肉の代わりに残った七面鳥を使ってバリエーションを。"]}, "pt": {"title": "Torta de Frango", "description": "Recheio cremoso de frango e legumes envolto em massa folhada dourada — a comida reconfortante definitiva.", "content": "", "ingredients": ["Frango cozido, em cubos ou desfiado", "Legumes mistos (ervilhas, cenouras, milho)", "Caldo de frango — 1 xícara", "Cebola, finamente picada — ½ média", "Manteiga sem sal — 2 colheres de sopa (28 g)", "Farinha — 2 colheres de sopa (16 g)", "Leite ou creme — ¾ xícara (180 ml)", "Sal, pimenta preta — a gosto", "Massa folhada ou massa de torta", "Lavagem de ovo (apenas para a crosta superior)"], "directions": ["Pré-aqueça o forno a 175°C.", "Refogar a cebola na manteiga até ficar macia.", "Mexer a farinha para fazer um roux.", "Bater gradualmente o caldo e o leite, cozinhando em fogo lento até engrossar.", "Adicionar o frango e os legumes, temperar bem.", "Despejar o recheio em um prato de assar, cobrir com a massa.", "Pincelar com a lavagem de ovo, cortar aberturas.", "Assar por 40-45 minutos até dourar e borbulhar."], "tips": ["Deixe esfriar levemente antes de servir; o recheio estará muito quente.", "Use o peru sobrante em vez do frango para variedade."]}}'::jsonb,
  true,
  8
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 9: Roast Chicken with Root Vegetables
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  9,
  'Roast Chicken with Root Vegetables',
  'airfryeroven',
  '🍗',
  9,
  'Roast',
  '375°F (190°C)',
  '60-65 minutes',
  '{"en": {"title": "Roast Chicken with Root Vegetables", "description": "Juicy whole roast chicken surrounded by tender root vegetables — a complete family dinner.", "content": "", "ingredients": ["Whole chicken (4–6 lb / 1.8–2.7 kg)", "Potatoes, cubed (large) — 3 cups", "Carrots, chopped — 2 cups", "Red onion, quartered — 1 large", "Olive oil — 3 tbsp", "Salt — 1 tsp", "Black pepper — 1 tsp", "Garlic powder (or fresh garlic) — 1 tsp", "Dried herbs (rosemary/thyme) — 1 tsp"], "directions": ["Rinse the seasoned chicken inside and out, pat dry.", "Rub olive oil and seasonings all over the chicken skin.", "Stuff cavity with lemon halves and herb sprigs if desired.", "Place chicken breast-side up in roasting pan.", "Surround with root vegetables, toss them in oil and seasoning.", "Roast at 375°F (190°C) for 60-65 min until internal temp reaches 165°F (74°C).", "Rest for 10 minutes before carving."], "tips": ["Use a meat thermometer for accuracy.", "Let rest before slicing for juicy results."]}, "zh": {"title": "烤鸡配根茎蔬菜", "description": "鲜嫩多汁的整只烤鸡，搭配软嫩的根茎蔬菜 — 完整的家庭晚餐。", "content": "", "ingredients": ["整鸡 1只（4-6磅 / 1.8-2.7公斤）", "土豆，切大块 3杯", "胡萝卜，切碎 2杯", "红洋葱，四等分 1个大", "橄榄油 3汤匙", "盐 1茶匙", "黑胡椒 1茶匙", "蒜粉（或新鲜大蒜）1茶匙", "干香草（迷迭香/百里香）1茶匙"], "directions": ["将腌制好的整鸡里外冲洗，拍干水分。", "在鸡皮上均匀涂抹橄榄油和调味料。", "如需要，在鸡腔内塞入柠檬 halves 和香草枝。", "将鸡胸朝上放入烤盘中。", "周围摆上根茎蔬菜，淋上油和调味料拌匀。", "以375°F (190°C) 烤60-65分钟，直到内部温度达到165°F (74°C)。", "烤好后静置10分钟再切块。"], "tips": ["使用肉类温度计确保准确。", "切块前静置，保留肉汁更鲜嫩。"]}, "es": {"title": "Pollo Asado con Verduras de Raíz", "description": "Pollo asado jugoso entero rodeado de tiernas verduras de raíz — una cena familiar completa.", "content": "", "ingredients": ["Pollo entero (4-6 lb / 1.8-2.7 kg)", "Papas, en cubos (grandes) — 3 tazas", "Zanahorias, picadas — 2 tazas", "Cebolla roja, en cuartos — 1 grande", "Aceite de oliva — 3 cdas", "Sal — 1 cdta", "Pimienta negra — 1 cdta", "Ajo en polvo (o ajo fresco) — 1 cdta", "Hierbas secas (romero/tomillo) — 1 cdta"], "directions": ["Enjuagar el pollo por dentro y por fuera, secar.", "Frotar el aceite de oliva y los sazonadores sobre toda la piel del pollo.", "Rellenar la cavidad con medias limas y ramitas de hierbas si se desea.", "Colocar el pollo con el pecho hacia arriba en la bandeja de asar.", "Rodear con las verduras de raíz, revolver con aceite y sazonador.", "Asar a 190°C durante 60-65 minutos hasta que la temperatura interna alcance 74°C.", "Reposar 10 minutos antes de cortar."], "tips": ["Use un termómetro de carne para precisión.", "Deje reposar antes de cortar para resultados jugosos."]}, "fr": {"title": "Poulet Rôti aux Légumes Racines", "description": "Poulet rôti juteux entier entouré de légumes racines tendres — un dîner familial complet.", "content": "", "ingredients": ["Poulet entier (1.8-2.7 kg)", "Pommes de terre, en cubes (grandes) — 3 tasses", "Carottes, hachées — 2 tasses", "Oignon rouge, en quartiers — 1 grand", "Huile d''olive — 3 càs", "Sel — 1 cc", "Poivre noir — 1 cc", "Ail en poudre (ou ail frais) — 1 cc", "Herbes séchées (romarin/thym) — 1 cc"], "directions": ["Rincer le poulet à l''intérieur et à l''extérieur, sécher.", "Frotter l''huile d''olive et les assaisonnements sur toute la peau du poulet.", "Farcir la cavité avec des demi-citrons et des brindilles d''herbes si désiré.", "Placer le poulet avec la poitrine vers le haut dans le plat à rôtir.", "Entourer avec les légumes racines, remuer avec l''huile et l''assaisonnement.", "Rôtir à 190°C pendant 60-65 minutes jusqu''à ce que la température interne atteigne 74°C.", "Reposer 10 minutes avant de découper."], "tips": ["Utiliser un thermomètre de viande pour la précision.", "Laissez reposer avant de trancher pour des résultats juteux."]}, "ja": {"title": "根菜付きローストチキン", "description": "ジューシーな丸鶏のロースト、柔らかい根菜を添えて — 家族みんなのディナーに。", "content": "", "ingredients": ["丸鶏 1羽（1.8-2.7kg）", "ジャガイモ、大きめの角切り 3カップ", "ニンジン、刻んだ 2カップ", "赤玉ねぎ、四等分 1個（大）", "オリーブオイル 大さじ3", "塩 小さじ1", "黒コショウ 小さじ1", "ガーリックパウダー（または生ニンニク）小さじ1", "乾燥ハーブ（ローズマリー/タイム）小さじ1"], "directions": ["鶏肉の内側と外側を洗い、水気を拭き取る。", "鶏の皮全体にオリーブオイルとシーズニングを塗り込む。", "お好みで鶏の内側にレモン半分とハーブの枝を詰める。", "鶏胸を上にしてロースト用パンに置く。", "周りに根菜を配置、オイルとシーズニングを絡める。", "190°Cで60〜65分焼き、中心温度が74°Cに達するまで。", "切り分ける前に10分休ませる。"], "tips": ["正確にするために肉用温度計を使用。", "スライスする前に休ませて、ジューシーな仕上がりに。"]}, "pt": {"title": "Frango Assado com Legumes de Raiz", "description": "Frango assado suculento inteiro cercado por legumes de raiz macios — um jantar completo em família.", "content": "", "ingredients": ["Frango inteiro (1.8-2.7 kg)", "Batatas, em cubos (grandes) — 3 xícaras", "Cenouras, picadas — 2 xícaras", "Cebola roxa, em quartos — 1 grande", "Azeite de oliva — 3 colheres de sopa", "Sal — 1 colher de chá", "Pimenta preta — 1 colher de chá", "Alho em pó (ou alho fresco) — 1 colher de chá", "Ervas secas (alecrim/tomilho) — 1 colher de chá"], "directions": ["Enxaguar o frango por dentro e por fora, secar.", "Esfregar o azeite de oliva e os temperos sobre toda a pele do frango.", "Stuff a cavidade com metades de limão e raminhos de ervas se desejar.", "Colocar o frango com o peito voltado para cima na assadeira.", "Cercar com os legumes de raiz, mexer com azeite e tempero.", "Assar a 190°C por 60-65 minutos até que a temperatura interna alcance 74°C.", "Repousar por 10 minutos antes de fatiar."], "tips": ["Use um termômetro de carne para precisão.", "Deixe repousar antes de fatiar para resultados suculentos."]}}'::jsonb,
  true,
  9
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 10: Broiled Lobster Tail with Garlic Butter
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  10,
  'Broiled Lobster Tail with Garlic Butter',
  'airfryeroven',
  '🦞',
  9,
  'Broil',
  '500°F (260°C)',
  '6-10 minutes',
  '{"en": {"title": "Broiled Lobster Tail with Garlic Butter", "description": "Elegant lobster tails brushed with garlic butter and broiled to perfection — restaurant-quality at home.", "content": "", "ingredients": ["Lobster tails — 2–3 tails (each 5–6 oz / 140–170 g)", "Unsalted butter, melted — 3 tbsp (42 g)", "Garlic, minced — 2–3 cloves", "Lemon juice — 1 tbsp", "Black pepper — ½ tsp", "Paprika (optional, for garnish)"], "directions": ["Using kitchen shears, cut through the top shell of each lobster tail down the center, stopping at the tail fan. Lift meat and rest it on top of the shell.", "In a small bowl, combine melted butter, garlic, lemon juice, and black pepper.", "Brush the garlic-butter mixture generously over lobster meat.", "Place tails in the broiler pan, meat side up.", "Broil at high heat for 6-10 minutes until opaque and lightly charred."], "tips": ["Do not overcook — lobster becomes rubbery quickly.", "Watch closely after 6 minutes."]}, "zh": {"title": "蒜香黄油烤龙虾尾", "description": "优雅的龙虾尾刷上蒜香黄油，烤至完美 — 在家享受餐厅品质。", "content": "", "ingredients": ["龙虾尾 2-3条（每条5-6盎司 / 140-170克）", "无盐黄油（融化）3汤匙 (42g)", "大蒜（切碎）2-3瓣", "柠檬汁 1汤匙", "黑胡椒 ½茶匙", "红椒粉（可选，装饰用）"], "directions": ["用厨房剪刀将每条龙虾尾的顶壳沿中心剪开，至尾扇处停止。将肉挑出置于壳上。", "在小碗中混合融化黄油、大蒜、柠檬汁和黑胡椒。", "将蒜香黄油混合物慷慨地刷在龙虾肉上。", "将龙虾尾放入烤盘中，肉面朝上。", "高温烤6-10分钟，直到不透明并轻微焦香。"], "tips": ["切勿过度烹饪 — 龙虾肉很快会变硬。", "6分钟后密切观察。"]}, "es": {"title": "Cola de Langosta a la Parrilla con Mantequilla de Ajo", "description": "Colas de langosta elegantes badizonadas con mantequilla de ajo y asadas a la perfección — calidad de restaurante en casa.", "content": "", "ingredients": ["Colas de langosta — 2-3 colas (cada una 140-170 g)", "Mantequilla sin sal, derretida — 3 cdas (42 g)", "Ajo, picado — 2-3 dientes", "Jugo de limón — 1 cda", "Pimienta negra — ½ cdta", "Pimentón (opcional, para adornar)"], "directions": ["Usando tijeras de cocina, cortar a través del caparazón superior de cada cola de langosta hacia abajo por el centro, deteniéndose en el abanico de la cola. Levantar la carne y descansarla sobre la parte superior del caparazón.", "En un tazón pequeño, combinar la mantequilla derretida, ajo, jugo de limón y pimienta negra.", "Cepillar la mezcla de mantequilla de ajo generosamente sobre la carne de langosta.", "Colocar las colas en la bandeja de la parrilla, lado de la carne hacia arriba.", "Asar a fuego alto durante 6-10 minutos hasta que esté opaca y ligeramente chamuscada."], "tips": ["No cocine demasiado — la langosta se pone gomosa rápidamente.", "Vigilar de cerca después de 6 minutos."]}, "fr": {"title": "Queue de Homard Grillée au Beurre d''Ail", "description": "Queues de homard élégantes badigeonnées de beurre d''ail et grillées à la perfection — qualité restaurant à la maison.", "content": "", "ingredients": ["Queues de homard — 2-3 queus (chaque une 140-170 g)", "Beurre sans sel, fondu — 3 càs (42 g)", "Ail, émincé — 2-3 gousses", "Jus de citron — 1 càs", "Poivre noir — ½ cc", "Paprika (optionnel, pour garnir)"], "directions": ["En utilisant des ciseaux de cuisine, couper à travers la carapace supérieure de chaque queue de homard vers le bas au centre, en s''arrêtant à l''éventail de la queue. Soulever la viande et la poser sur le dessus de la carapace.", "Dans un petit bol, combiner le beurre fondu, l''ail, le jus de citron et le poivre noir.", "Badigeonner généreusement le mélange de beurre à l''ail sur la viande de homard.", "Placer les queus dans le plat du gril, côté viande vers le haut.", "Griller à haute température pendant 6-10 minutes jusqu''à ce qu''elle soit opaque et légèrement noircie."], "tips": ["Ne pas trop cuire — le homard devient caoutchouteux rapidement.", "Surveiller de près après 6 minutes."]}, "ja": {"title": "ガーリックバターロブスターテール", "description": "エレガントなロブスターテールにガーリックバターを塗って完璧に炙る — ご自宅でレストラン品質。", "content": "", "ingredients": ["ロブスターテール 2-3尾（各140-170g）", "無塩バター（溶かした）大さじ3 (42g)", "にんにく（みじん切り）2-3片", "レモン汁 大さじ1", "黒コショウ 小さじ½", "パプリカ（お好みで、飾り用）"], "directions": ["キッチンハサミを使って、各ロブスターテールの上側の殻を中心に沿って切り込みを入れ、尾ひれのところで止める。身を取り出して殻の上にのせる。", "小さなボウルで溶かしたバター、にんにく、レモン汁、黒コショウを混ぜ合わせる。", "ロブスターの身にガーリックバターミックスをたっぷりと塗る。", "ロブスターをグリルパンに肉面を上にして置く。", "強火で6〜10分、不透明になり軽く焦げ目がつくまで炙る。"], "tips": ["加熱しすぎないこと — ロブスターはすぐにゴムのような食感になる。", "6分経過後は注意深く見守る。"]}, "pt": {"title": "Cauda de Lagosta Grelhada com Manteiga de Alho", "description": "Caudas de lagosta elegantes com manteiga de alho pincelada e grelhadas na perfeição — qualidade de restaurante em casa.", "content": "", "ingredients": ["Caudas de lagosta — 2-3 caudas (cada uma 140-170 g)", "Manteiga sem sal, derretida — 3 colheres de sopa (42 g)", "Alho, picado — 2-3 dentes", "Suco de limão — 1 colher de sopa", "Pimenta preta — ½ colher de chá", "Páprica (opcional, para enfeitar)"], "directions": ["Usando tesouras de cozinha, cortar através da carapaça superior de cada cauda de lagosta para baixo pelo centro, parando no leque da cauda. Levantar a carne e descansá-la no topo da carapaça.", "Em uma tigela pequena, combinar a manteiga derretida, alho, suco de limão e pimenta preta.", "Pincelar a mistura de manteiga de alho generosamente sobre a carne de lagosta.", "Colocar as caudas na bandeja do grelhador, lado da carne para cima.", "Grelhar em fogo alto por 6-10 minutos até ficar opaca e levemente chamuscada."], "tips": ["Não cozinhe demais — a lagosta fica borrachuda rapidamente.", "Observar atentamente após 6 minutos."]}}'::jsonb,
  true,
  10
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 11: Classic Chocolate Chip Cookies
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  11,
  'Classic Chocolate Chip Cookies',
  'airfryeroven',
  '🍪',
  9,
  'Cookie',
  '320°F (160°C)',
  '11-13 minutes',
  '{"en": {"title": "Classic Chocolate Chip Cookies", "description": "Soft, chewy chocolate chip cookies with perfectly golden edges — the timeless classic.", "content": "", "ingredients": ["Unsalted butter, softened — ½ cup (113 g)", "Granulated sugar — ⅓ cup (67 g)", "Brown sugar, packed — ⅓ cup (70 g)", "Egg — 1 large", "All-purpose flour — 1½ cups (187 g)", "Baking soda — 1 tsp", "Salt — ½ tsp", "Vanilla extract — 1 tsp", "Chocolate chips — 1 cup (175 g)"], "directions": ["In mixing bowl, beat softened butter with sugars until creamy.", "Add egg and vanilla, mix until combined.", "In separate bowl, whisk together flour, baking soda, and salt.", "Gradually combine wet and dry ingredients together.", "Fold in chocolate chips.", "Drop rounded spoonfuls onto cookie sheet, spaced 2 inches apart.", "Bake at 320°F (160°C) for 11-13 minutes until edges are golden."], "tips": ["Chill dough 30+ minutes for thicker cookies.", "Don''t overbake — they continue cooking on the hot pan."]}, "zh": {"title": "经典巧克力曲奇", "description": "柔软有嚼劲的巧克力曲奇，边缘金黄完美 — 永恒的经典。", "content": "", "ingredients": ["无盐黄油（软化）½杯 (113g)", "细砂糖 ⅓杯 (67g)", "黄糖（压实）⅓杯 (70g)", "鸡蛋 1个大蛋", "中筋面粉 1½杯 (187g)", "小苏打 1茶匙", "盐 ½茶匙", "香草精 1茶匙", "巧克力豆 1杯 (175g)"], "directions": ["在搅拌盆中，将软化的黄油和糖搅拌至奶油状。", "加入鸡蛋和香草精，搅拌均匀。", "在另一个盆中，混合面粉、小苏打和盐。", "逐渐将湿料和干料混合在一起。", "拌入巧克力豆。", "将圆形面团勺放在曲奇烤盘上，间隔2英寸。", "以320°F (160°C) 烘烤11-13分钟，直到边缘呈金黄色。"], "tips": ["将面团冷藏30分钟以上，可制作更厚的曲奇。", "切勿过度烘烤 — 它们在热烤盘上会继续烹饪。"]}, "es": {"title": "Galletas Clásicas con Chispas de Chocolate", "description": "Galletas suaves y masticables con chispas de chocolate y bordes dorados perfectos — el clásico atemporal.", "content": "", "ingredients": ["Mantequilla sin sal, ablandada — ½ taza (113 g)", "Azúcar granulada — ⅓ taza (67 g)", "Azúcar morena, compactada — ⅓ taza (70 g)", "Huevo — 1 grande", "Harina — 1½ tazas (187 g)", "Bicarbonato de sodio — 1 cdta", "Sal — ½ cdta", "Extracto de vainilla — 1 cdta", "Chispas de chocolate — 1 taza (175 g)"], "directions": ["En un tazón de mezcla, batir la mantequilla ablandada con los azúcares hasta que esté cremosa.", "Agregar el huevo y la vainilla, mezclar hasta combinar.", "En un tazón separado, batir juntos la harina, el bicarbonato y la sal.", "Combinar gradualmente los ingredientes húmedos y secos.", "Incorporar las chispas de chocolate.", "Colocar cucharadas redondeadas en la bandeja para galletas, espaciadas 2 pulgadas.", "Hornear a 160°C durante 11-13 minutos hasta que los bordes estén dorados."], "tips": ["Enfriar la masa 30+ minutos para galletas más gruesas.", "No hornear demasiado — continúan cocinándose en la bandeja caliente."]}, "fr": {"title": "Cookies Classiques aux Pépites de Chocolat", "description": "Cookies moelleux et chewy avec des pépites de chocolat et des bords parfaitement dorés — le classique intemporel.", "content": "", "ingredients": ["Beurre doux, ramolli — 113 g", "Sucre granulé — 67 g", "Sucre brun, tassé — 70 g", "Œuf — 1 grand", "Farine — 187 g", "Bicarbonate de soude — 1 cc", "Sel — ½ cc", "Extrait de vanille — 1 cc", "Pépites de chocolat — 175 g"], "directions": ["Dans un bol de mélange, battre le beurre ramolli avec les sucres jusqu''à ce que ce soit crémeux.", "Ajouter l''œuf et la vanille, mélanger jusqu''à ce qu''ils soient combinés.", "Dans un bol séparé, fouetter ensemble la farine, le bicarbonate et le sel.", "Combiner progressivement les ingrédients humides et secs.", "Incorporer les pépites de chocolat.", "Déposer des cuillerées arrondies sur la plaque à cookies, espacées de 5 cm.", "Cuire à 160°C pendant 11-13 minutes jusqu''à ce que les bords soient dorés."], "tips": ["Réfrigérer la pâte 30+ minutes pour des cookies plus épais.", "Ne pas trop cuire — ils continuent à cuire sur la plaque chaude."]}, "ja": {"title": "クラシックチョコチップクッキー", "description": "柔らかくて chewy なチョコチップクッキー、完璧な黄金の縁 — 時代を超えるクラシック。", "content": "", "ingredients": ["無塩バター（室温で柔らかく）113g", "グラニュー糖 67g", "ブラウンシュガー（固く押さえつけた）70g", "卵 1個（大）", "小麦粉 187g", "ベーキングソーダ 小さじ1", "塩 小さじ½", "バニラエクストラクト 小さじ1", "チョコチップ 175g"], "directions": ["ミキシングボウルで、柔らかくしたバターと砂糖をクリーミーになるまで混ぜる。", "卵とバニラエクストラクトを加え、均一に混ぜる。", "別のボウルで、小麦粉、ベーキングソーダ、塩を泡立て器で混ぜ合わせる。", "湿った材料と乾いた材料を徐々に混ぜ合わせる。", "チョコチップを混ぜ込む。", "丸いスプーンすくいをクッキー焼き皿に並べ、2インチ（約5cm）間隔を空ける。", "160°Cで11〜13分、縁が黄金色になるまで焼く。"], "tips": ["より厚いクッキーにするには、生地を30分以上冷蔵する。", "焼きすぎないこと — 熱い焼き皿の上で調理が続く。"]}, "pt": {"title": "Cookies Clássicos com Gotas de Chocolate", "description": "Cookies macios e chewy com gotas de chocolate e bordas perfeitamente douradas — o clássico atemporal.", "content": "", "ingredients": ["Manteiga sem sal, amolecida — 113 g", "Açúcar granulado — 67 g", "Açúcar mascavo, compactado — 70 g", "Ovo — 1 grande", "Farinha — 187 g", "Bicarbonato de sódio — 1 colher de chá", "Sal — ½ colher de chá", "Extrato de baunilha — 1 colher de chá", "Gotas de chocolate — 175 g"], "directions": ["Em uma tigela de mistura, bater a manteiga amolecida com os açúcares até ficar cremoso.", "Adicionar o ovo e a baunilha, misturar até combinar.", "Em uma tigela separada, bater junto a farinha, o bicarbonato e o sal.", "Combinar gradualmente os ingredientes úmidos e secos.", "Incorporar as gotas de chocolate.", "Colocar colheradas arredondadas na assadeira de cookies, espacadas de 5 cm.", "Assar a 160°C por 11-13 minutos até que as bordas estejam douradas."], "tips": ["Esfriar a massa por 30+ minutos para cookies mais grossos.", "Não assar demais — eles continuam cozinhando na assadeira quente."]}}'::jsonb,
  true,
  11
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 12: Apple Chips with Cinnamon
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  12,
  'Apple Chips with Cinnamon',
  'airfryeroven',
  '🍎',
  9,
  'Dehydrate',
  '135°F (57°C)',
  '6-8 hours',
  '{"en": {"title": "Apple Chips with Cinnamon", "description": "Naturally sweet, crispy apple chips dusted with cinnamon — a healthy snack made easy.", "content": "", "ingredients": ["Apples — 2–3 medium apples (450–600 g total)", "Ground cinnamon — ½ tsp", "Lemon juice — 1 Tbsp (optional, to prevent browning)"], "directions": ["Wash apples thoroughly. Peeling is optional.", "Slice the apples into 2–3 mm thin slices using a knife or mandoline.", "If desired, gently toss the apple slices with lemon juice to reduce oxidation.", "Sprinkle the cinnamon evenly over the apple slices.", "Arrange apple slices in a single layer on dehydrating tray or baking tray, avoiding overlap.", "Place the tray into the oven and select Dehydrate mode.", "Set the temperature to 135°F (57°C) and dehydrate for 6-8 hours.", "Turn the slices once halfway through for even drying, if needed.", "Remove when apple chips are fully dried and become crisp after cooling.", "Allow to cool completely before serving or storing."], "tips": ["Thinner slices will dry faster and produce crisper chips.", "Drying time may vary depending on apple variety and moisture content; begin checking at 6 hours."]}, "zh": {"title": "肉桂苹果脆片", "description": "天然甜美的酥脆苹果片，撒上肉桂粉 — 轻松制作的健康零食。", "content": "", "ingredients": ["苹果 2-3个中等大小（总计450-600克）", "肉桂粉 ½茶匙", "柠檬汁 1汤匙（可选，防止氧化变色）"], "directions": ["彻底洗净苹果。去皮可选。", "用刀具或切片器将苹果切成2-3毫米的薄片。", "如需要，将苹果片轻轻拌入柠檬汁以减少氧化。", "将肉桂粉均匀撒在苹果片上。", "将苹果片单层摆放在脱水盘或烤盘上，避免重叠。", "将盘子放入烤箱，选择脱水模式。", "将温度设定为135°F (57°C)，脱水6-8小时。", "如需要，中途翻面一次以确保均匀干燥。", "当苹果脆片完全干燥并在冷却后变脆时取出。", "完全冷却后再享用或储存。"], "tips": ["越薄的切片干燥越快，口感越脆。", "干燥时间因苹果品种和水分含量而异；6小时后开始检查。"]}, "es": {"title": "Chips de Manzana con Canela", "description": "Chips de manzana naturalmente dulces y crujientes espolvoreadas con canela — un snack saludable fácil de hacer.", "content": "", "ingredients": ["Manzanas — 2-3 manzanas medianas (450-600 g total)", "Canela molida — ½ cdta", "Jugo de limón — 1 cda (opcional, para evitar que se doren)"], "directions": ["Lavar las manzanas minuciosamente. Pelar es opcional.", "Cortar las manzanas en rebanadas delgadas de 2-3 mm usando un cuchillo o mandolina.", "Si se desea, revolver suavemente las rebanadas de manzana con jugo de limón para reducir la oxidación.", "Espolvorear la canela uniformemente sobre las rebanadas de manzana.", "Disponer las rebanadas de manzana en una sola capa en la bandeja de deshidratación o bandeja de horno, evitando superposición.", "Colocar la bandeja en el horno y seleccionar modo Deshidratar.", "Configurar la temperatura a 57°C y deshidratar durante 6-8 horas.", "Voltear las rebanadas una vez a la mitad si es necesario para un secado uniforme.", "Retirar cuando los chips de manzana estén completamente secos y se vuelvan crocantes después de enfriar.", "Dejar enfriar completamente antes de servir o almacenar."], "tips": ["Rebanadas más delgadas se secarán más rápido y producirán chips más crujientes.", "El tiempo de secado puede variar según la variedad de manzana y el contenido de humedad; comenzar a verificar a las 6 horas."]}, "fr": {"title": "Chips de Pomme à la Cannelle", "description": "Chips de pomme naturellement sucrées et croustillantes saupoudrées de cannelle — une collation saine facile à faire.", "content": "", "ingredients": ["Pommes — 2-3 pommes moyennes (450-600 g total)", "Cannelle moulue — ½ cc", "Jus de citron — 1 càs (optionnel, pour éviter le brunissement)"], "directions": ["Laver les pommes soigneusement. Éplucher est optionnel.", "Couper les pommes en tranches fines de 2-3 mm à l''aide d''un couteau ou d''une mandoline.", "Si désiré, remuer doucement les tranches de pomme avec du jus de citron pour réduire l''oxydation.", "Saupoudrer la cannelle uniformément sur les tranches de pomme.", "Disposer les tranches de pomme en une seule couche sur le plateau de déshydratation ou la plaque de cuisson, en évitant le chevauchement.", "Placer le plateau dans le four et sélectionner le mode Déshydrater.", "Régler la température à 57°C et déshydrater pendant 6-8 heures.", "Retourner les tranches une fois à la moitié si nécessaire pour un séchage uniforme.", "Retirer lorsque les chips de pomme sont complètement séchées et deviennent croustillantes après refroidissement.", "Laisser refroidir complètement avant de servir ou de stocker."], "tips": ["Des tranches plus fines sécheront plus rapidement et produiront des chips plus croustillantes.", "Le temps de séchage peut varier selon la variété de pomme et la teneur en humidité ; commencer à vérifier après 6 heures."]}, "ja": {"title": "シナモンアップルチップス", "description": "自然な甘さのカリッとしたアップルチップスにシナモンを振りかけた — 簡単に作れる健康的なおやつ。", "content": "", "ingredients": ["りんご 2-3個（中サイズ、計450-600g）", "シナモンパウダー 小さじ½", "レモン汁 大さじ1（お好みで、変色防止）"], "directions": ["りんごをよく洗う。皮をむくのはお好みで。", "ナイフまたはスライサーを使ってりんごを2-3mmの薄切りにする。", "お好みで、りんごのスライスをレモン汁と一緒に軽く和えて酸化を抑える。", "シナモンをりんごスライスに均一に振りかける。", "りんごスライスを単層で脱水トレイまたは焼き皿に並べ、重ならないようにする。", "トレイをオーブンに入れ、脱水モードを選択する。", "温度を57°Cに設定し、6〜8時間脱水する。", "必要に応じて途中で一度ひっくり返し、均一に乾燥させる。", "アップルチップスが完全に乾燥し、冷ましてからカリッとしたら取り出す。", "完全に冷ましてから召し上がるか保存する。"], "tips": ["薄いスライスの方が早く乾燥し、よりカリッとしたチップスになる。", "乾燥時間はりんごの品種と水分含有量により異なる；6時間経過後から確認を開始する。"]}, "pt": {"title": "Chips de Maçã com Canela", "description": "Chips de maçã naturalmente doces e crocantes polvilhadas com canela — um lanche saudável fácil de fazer.", "content": "", "ingredients": ["Maçãs — 2-3 maçãs médias (450-600 g total)", "Canela moída — ½ colher de chá", "Suco de limão — 1 colher de sopa (opcional, para evitar o escurecimento)"], "directions": ["Lavar as maçãs minuciosamente. Descascar é opcional.", "Cortar as maçãs em fatias finas de 2-3 mm usando uma faca ou mandolina.", "Se desejar, agitar suavemente as fatias de maçã com suco de limão para reduzir a oxidação.", "Polvilhar a canela uniformemente sobre as fatias de maçã.", "Dispor as fatias de maçã em uma única camada na bandeja de desidratação ou bandeja de forno, evitando sobreposição.", "Colocar a bandeja no forno e selecionar o modo Desidratar.", "Configurar a temperatura para 57°C e desidratar por 6-8 horas.", "Virar as fatias uma vez na metade, se necessário, para um secagem uniforme.", "Remover quando os chips de maçã estiverem completamente secos e ficarem crocantes após o resfriamento.", "Deixar esfriar completamente antes de servir ou armazenar."], "tips": ["Fatias mais finas secarão mais rápido e produzirão chips mais crocantes.", "O tempo de secagem pode variar dependendo da variedade de maçã e do conteúdo de umidade; comece a verificar após 6 horas."]}}'::jsonb,
  true,
  12
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Recipe 13: Pizza Dough Proofing
INSERT INTO recipes (id, title, category, emoji, product_id, mode, temp, time, translations, is_active, display_order)
VALUES (
  13,
  'Pizza Dough Proofing',
  'airfryeroven',
  '🍕',
  9,
  'Ferment',
  '95-100°F (35-38°C)',
  '1-2 hours',
  '{"en": {"title": "Pizza Dough Proofing", "description": "Perfectly proofed pizza dough every time — your secret to a light, airy crust.", "content": "", "ingredients": ["Pizza dough — 1 dough ball (250–300 g) prepared according to your preferred pizza dough recipe", "Olive oil — a small amount, optional (to prevent sticking)"], "directions": ["Shape the pizza dough into a smooth ball.", "Lightly coat the surface with olive oil if desired to prevent drying.", "Place the dough in a bowl and cover loosely with plastic wrap or a damp cloth.", "Place the covered dough into the oven.", "Select Ferment mode.", "Set the temperature to 95–100°F (35–38°C).", "Allow the dough to proof for 1–2 hours, or until it doubles in size.", "Remove the dough and proceed with shaping and baking as desired."], "tips": ["Do not set the temperature above 105°F (40°C), as excessive heat may reduce yeast activity.", "Proofing time may vary depending on dough size, yeast amount, and ambient conditions."]}, "zh": {"title": "披萨面团发酵", "description": "每次都完美发酵的披萨面团 — 你做出轻盈蓬松饼底的秘诀。", "content": "", "ingredients": ["披萨面团 — 1个面团球（250-300克），按照你喜欢的披萨面团配方准备", "橄榄油 — 少量，可选（防止粘连）"], "directions": ["将披萨面团整形成光滑的球状。", "如需要，在表面轻涂一层橄榄油以防止干燥。", "将面团放入碗中，用保鲜膜或湿布 loosely 覆盖。", "将覆盖好的面团放入烤箱。", "选择发酵模式。", "将温度设定为95-100°F (35-38°C)。", "让面团发酵1-2小时，或直到体积翻倍。", "取出面团，按需要进行整形和烘烤。"], "tips": ["切勿将温度设定在105°F (40°C) 以上，因为过热会降低酵母活性。", "发酵时间因面团大小、酵母量和环境条件而异。"]}, "es": {"title": "Fermentación de Masa de Pizza", "description": "Masa de pizza perfectamente fermentada cada vez — tu secreto para una corteza ligera y esponjosa.", "content": "", "ingredients": ["Masa de pizza — 1 bola de masa (250-300 g) preparada según su receta preferida", "Aceite de oliva — una pequeña cantidad, opcional (para evitar que se pegue)"], "directions": ["Dar forma a la masa de pizza en una bola suave.", "Cubrir ligeramente la superficie con aceite de oliva si se desea para evitar que se seque.", "Colocar la masa en un tazón y cubrir loosely con plástico de envolver o un paño húmedo.", "Colocar la masa cubierta en el horno.", "Seleccionar modo Fermentar.", "Configurar la temperatura a 35-38°C.", "Permitir que la masa fermente durante 1-2 horas, o hasta que duplique su tamaño.", "Retirar la masa y proceder con el formado y horneado según se desee."], "tips": ["No configurar la temperatura por encima de 40°C, ya que el exceso de calor puede reducir la actividad de la levadura.", "El tiempo de fermentación puede variar según el tamaño de la masa, la cantidad de levadura y las condiciones ambientales."]}, "fr": {"title": "Levage de Pâte à Pizza", "description": "Pâte à pizza parfaitement levée à chaque fois — votre secret pour une croûte légère et aérée.", "content": "", "ingredients": ["Pâte à pizza — 1 boule de pâte (250-300 g) préparée selon votre recette préférée", "Huile d''olive — une petite quantité, optionnelle (pour éviter que ça colle)"], "directions": ["Façonner la pâte à pizza en une boule lisse.", "Couvrir légèrement la surface avec de l''huile d''olive si désiré pour éviter le séchage.", "Placer la pâte dans un bol et couvrir loosely avec du film plastique ou un linge humide.", "Placer la pâte couverte dans le four.", "Sélectionner le mode Fermenter.", "Régler la température à 35-38°C.", "Permettre à la pâte de lever pendant 1-2 heures, ou jusqu''à ce qu''elle double de volume.", "Retirer la pâte et procéder au façonnage et à la cuisson comme désiré."], "tips": ["Ne pas régler la température au-dessus de 40°C, car une chaleur excessive peut réduire l''activité de la levure.", "Le temps de levage peut varier selon la taille de la pâte, la quantité de levure et les conditions ambiantes."]}, "ja": {"title": "ピザ生地の発酵", "description": "毎回完璧に発酵するピザ生地 — 軽くてふんわりとした生地の秘密。", "content": "", "ingredients": ["ピザ生地 — 生地玉1個（250-300g）、お好みのピザ生地レシピで準備", "オリーブオイル — 少量（お好みで、くっつき防止）"], "directions": ["ピザ生地を滑らかな玉状に整える。", "お好みで表面にオリーブオイルを薄く塗り、乾燥を防ぐ。", "生地をボウルに入れ、ラップまたは湿った布でゆるく覆う。", "覆った生地をオーブンに入れる。", "発酵モードを選択する。", "温度を35〜38°Cに設定する。", "生地を1〜2時間、または倍の大きさになるまで発酵させる。", "生地を取り出し、お好みで成形・焼成に進む。"], "tips": ["温度を40°C以上に設定しないこと、過熱するとイースト活性が低下する。", "発酵時間は生地の大きさ、イースト量、環境条件により異なる。"]}, "pt": {"title": "Fermentação de Massa de Pizza", "description": "Massa de pizza perfeitamente fermentada toda vez — seu segredo para uma crosta leve e aerada.", "content": "", "ingredients": ["Massa de pizza — 1 bola de massa (250-300 g) preparada de acordo com sua receita preferida", "Azeite de oliva — uma pequena quantidade, opcional (para evitar que grude)"], "directions": ["Formatar a massa de pizza em uma bola suave.", "Cobrir levemente a superfície com azeite de oliva se desejado para evitar o ressecamento.", "Colocar a massa em uma tigela e cobrir loosely com plástico filme ou um pano úmido.", "Colocar a massa coberta no forno.", "Selecionar o modo Fermentar.", "Configurar a temperatura para 35-38°C.", "Permitir que a massa fermenta por 1-2 horas, ou até que dobre de tamanho.", "Remover a massa e proceder com a modelagem e o cozimento como desejado."], "tips": ["Não configure a temperatura acima de 40°C, pois o calor excessivo pode reduzir a atividade do fermento.", "O tempo de fermentação pode variar dependendo do tamanho da massa, quantidade de fermento e condições ambientais."]}}'::jsonb,
  true,
  13
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  time = EXCLUDED.time,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

-- Verify import
SELECT id, title, mode, temp, time, product_id, is_active FROM recipes WHERE id BETWEEN 4 AND 13 ORDER BY id;
