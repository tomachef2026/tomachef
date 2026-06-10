-- TomaChef: 10 American toaster recipes
-- Idempotent import: safe to run again without creating duplicates.

WITH source AS (
  SELECT *
  FROM jsonb_to_recordset($recipes$
[
  {
    "id": "c3d4e5f6-0711-4201-8201-000000000201",
    "title": "Classic Avocado Toast",
    "category": "toaster",
    "emoji": "🥑",
    "product_sku": "TC-TT-001",
    "mode": "Toast",
    "temp": "Browning level 4",
    "time": "3-5 minutes",
    "image_url": "images/recipes/toaster/01-classic-avocado-toast.jpg",
    "display_order": 1,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Classic Avocado Toast",
        "description": "Golden whole-grain toast topped with creamy avocado, lemon, and cracked pepper.",
        "ingredients": [
          "Whole-grain bread, 2 slices",
          "Ripe avocado, 1",
          "Lemon juice, 1 tsp",
          "Salt and black pepper",
          "Red pepper flakes, optional"
        ],
        "directions": [
          "Toast the bread at a medium browning level until evenly golden.",
          "Mash avocado with lemon juice, salt, and pepper in a bowl.",
          "Spread the avocado over the toast only after the bread leaves the toaster.",
          "Finish with black pepper or red pepper flakes and serve immediately."
        ],
        "tips": [
          "Never place avocado or other toppings inside a pop-up toaster.",
          "Use firm, thick-cut bread for a crisp base."
        ]
      },
      "zh": {
        "title": "经典牛油果吐司",
        "description": "全麦吐司烤至金黄，搭配绵密牛油果、柠檬汁和现磨黑胡椒。",
        "ingredients": [
          "全麦面包 2片",
          "成熟牛油果 1个",
          "柠檬汁 1茶匙",
          "盐和黑胡椒适量",
          "红辣椒碎（可选）"
        ],
        "directions": [
          "使用中等烘烤档位将面包烤至均匀金黄。",
          "在碗中将牛油果与柠檬汁、盐和黑胡椒压成泥。",
          "面包完全离开吐司机后再涂抹牛油果。",
          "撒黑胡椒或红辣椒碎并立即食用。"
        ],
        "tips": [
          "切勿将牛油果或其他配料放入弹出式吐司机。",
          "厚切且结构结实的面包口感更酥脆。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4202-8202-000000000202",
    "title": "Peanut Butter Banana Toast",
    "category": "toaster",
    "emoji": "🍌",
    "product_sku": "TC-TT-001",
    "mode": "Toast",
    "temp": "Browning level 4",
    "time": "3-5 minutes",
    "image_url": "images/recipes/toaster/02-peanut-butter-banana-toast.jpg",
    "display_order": 2,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Peanut Butter Banana Toast",
        "description": "Crisp multigrain toast with creamy peanut butter, banana, honey, and cinnamon.",
        "ingredients": [
          "Multigrain bread, 2 slices",
          "Creamy peanut butter, 2 tbsp",
          "Banana, 1, sliced",
          "Honey, 1 tsp",
          "Ground cinnamon, a pinch"
        ],
        "directions": [
          "Toast bread at a medium setting until golden and crisp.",
          "Move toast to a plate and spread with peanut butter.",
          "Arrange banana slices on top.",
          "Drizzle lightly with honey and add cinnamon."
        ],
        "tips": [
          "Add all spreads and toppings only after toasting.",
          "Check peanut allergy requirements before serving."
        ]
      },
      "zh": {
        "title": "花生酱香蕉吐司",
        "description": "香脆杂粮吐司搭配花生酱、香蕉、蜂蜜和少量肉桂，适合快速早餐。",
        "ingredients": [
          "杂粮面包 2片",
          "顺滑花生酱 2汤匙",
          "香蕉 1根（切片）",
          "蜂蜜 1茶匙",
          "肉桂粉少许"
        ],
        "directions": [
          "用中等档位将面包烤至金黄酥脆。",
          "取出吐司放到盘中，涂抹花生酱。",
          "铺上香蕉片。",
          "淋少量蜂蜜并撒肉桂粉。"
        ],
        "tips": [
          "所有酱料和配料都必须在烘烤完成后添加。",
          "食用前确认是否存在花生过敏。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4203-8203-000000000203",
    "title": "Cinnamon Butter Toast",
    "category": "toaster",
    "emoji": "🍞",
    "product_sku": "TC-TT-001",
    "mode": "Toast",
    "temp": "Browning level 4",
    "time": "3-5 minutes",
    "image_url": "images/recipes/toaster/03-cinnamon-butter-toast.jpg",
    "display_order": 3,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Cinnamon Butter Toast",
        "description": "Simple golden toast finished with melting butter and warm cinnamon sugar.",
        "ingredients": [
          "Sandwich bread, 2 slices",
          "Unsalted butter, 1 tbsp",
          "Sugar, 1 tsp",
          "Ground cinnamon, 1/4 tsp"
        ],
        "directions": [
          "Combine sugar and cinnamon in a small bowl.",
          "Toast bread at a medium setting until evenly golden.",
          "Place toast on a heat-safe plate and spread with butter.",
          "Sprinkle with cinnamon sugar and serve warm."
        ],
        "tips": [
          "Butter the bread after it leaves the toaster to reduce fire risk.",
          "Start with a moderate browning level and add another cycle only if needed."
        ]
      },
      "zh": {
        "title": "肉桂黄油吐司",
        "description": "简单经典的金黄吐司，搭配融化黄油和温暖的肉桂糖香。",
        "ingredients": [
          "吐司面包 2片",
          "无盐黄油 1汤匙",
          "白砂糖 1茶匙",
          "肉桂粉 1/4茶匙"
        ],
        "directions": [
          "在小碗中混合白砂糖和肉桂粉。",
          "用中等档位将面包烤至均匀金黄。",
          "取出放在耐热盘中，再涂抹黄油。",
          "撒上肉桂糖，趁热食用。"
        ],
        "tips": [
          "黄油应在面包离开吐司机后涂抹，以降低起火风险。",
          "先用中等档位，不够时再增加短周期。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4204-8204-000000000204",
    "title": "Blueberry Cream Cheese Bagel",
    "category": "toaster",
    "emoji": "🫐",
    "product_sku": "TC-TT-001",
    "mode": "Bagel",
    "temp": "Browning level 3",
    "time": "3-4 minutes",
    "image_url": "images/recipes/toaster/04-blueberry-cream-cheese-bagel.jpg",
    "display_order": 4,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Blueberry Cream Cheese Bagel",
        "description": "A lightly crisp bagel topped with cool cream cheese, fresh blueberries, and lemon zest.",
        "ingredients": [
          "Plain bagel, 1, sliced",
          "Cream cheese, 2 tbsp",
          "Fresh blueberries, 1/3 cup",
          "Lemon zest, optional"
        ],
        "directions": [
          "Place bagel halves in the toaster with cut sides facing the heating elements when supported by the appliance.",
          "Select the bagel function and toast to a light golden finish.",
          "Transfer to a plate and spread with cream cheese.",
          "Top with blueberries and optional lemon zest."
        ],
        "tips": [
          "Use the bagel mode according to the appliance manual.",
          "Cream cheese and fruit must be added after toasting."
        ]
      },
      "zh": {
        "title": "蓝莓奶油奶酪贝果",
        "description": "贝果轻烤至酥香，搭配冰凉奶油奶酪、新鲜蓝莓和少量柠檬皮屑。",
        "ingredients": [
          "原味贝果 1个（切开）",
          "奶油奶酪 2汤匙",
          "新鲜蓝莓 1/3杯",
          "柠檬皮屑（可选）"
        ],
        "directions": [
          "按照产品说明，将贝果切面朝向加热侧放入吐司机。",
          "选择贝果模式，烤至浅金黄色。",
          "取出放盘中并涂抹奶油奶酪。",
          "铺上蓝莓和可选的柠檬皮屑。"
        ],
        "tips": [
          "贝果模式的放置方向以产品说明书为准。",
          "奶油奶酪和水果必须在烘烤后添加。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4205-8205-000000000205",
    "title": "Smoked Salmon Bagel",
    "category": "toaster",
    "emoji": "🥯",
    "product_sku": "TC-TT-001",
    "mode": "Bagel",
    "temp": "Browning level 3",
    "time": "3-4 minutes",
    "image_url": "images/recipes/toaster/05-smoked-salmon-bagel.jpg",
    "display_order": 5,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Smoked Salmon Bagel",
        "description": "A deli-style toasted bagel with cream cheese, smoked salmon, capers, and dill.",
        "ingredients": [
          "Plain or everything bagel, 1, sliced",
          "Cream cheese, 2 tbsp",
          "Ready-to-eat smoked salmon, 3 oz / 85 g",
          "Capers, 1 tsp",
          "Fresh dill and lemon"
        ],
        "directions": [
          "Toast bagel halves using the bagel setting until lightly crisp.",
          "Transfer the bagel to a clean plate.",
          "Spread with cream cheese and add ready-to-eat smoked salmon.",
          "Finish with capers, dill, and lemon juice."
        ],
        "tips": [
          "Keep smoked salmon refrigerated until assembly.",
          "Do not put fish, cheese, or capers inside the toaster."
        ]
      },
      "zh": {
        "title": "烟熏三文鱼贝果",
        "description": "熟食店风格烤贝果，搭配奶油奶酪、即食烟熏三文鱼、酸豆和莳萝。",
        "ingredients": [
          "原味或综合香料贝果 1个（切开）",
          "奶油奶酪 2汤匙",
          "即食烟熏三文鱼 85克",
          "酸豆 1茶匙",
          "新鲜莳萝和柠檬适量"
        ],
        "directions": [
          "使用贝果模式将贝果烤至轻微酥脆。",
          "将贝果转移到干净盘中。",
          "涂抹奶油奶酪并放上即食烟熏三文鱼。",
          "加入酸豆、莳萝和柠檬汁。"
        ],
        "tips": [
          "组合前烟熏三文鱼应保持冷藏。",
          "切勿将鱼、奶酪或酸豆放入吐司机。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4206-8206-000000000206",
    "title": "Sausage Egg Breakfast Sandwich",
    "category": "toaster",
    "emoji": "🍳",
    "product_sku": "TC-TT-001",
    "mode": "Toast",
    "temp": "Browning level 4",
    "time": "4-6 minutes",
    "image_url": "images/recipes/toaster/06-sausage-egg-breakfast-sandwich.jpg",
    "display_order": 6,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Sausage Egg Breakfast Sandwich",
        "description": "A toasted English muffin stacked with a fully cooked egg, sausage patty, and cheddar.",
        "ingredients": [
          "English muffin, 1, split",
          "Fully cooked sausage patty, 1",
          "Egg, 1",
          "Cheddar cheese, 1 slice",
          "Salt and pepper"
        ],
        "directions": [
          "Cook the sausage patty separately to 160°F / 71°C and cook the egg until set.",
          "Toast the English muffin halves until golden.",
          "Place cheese on the hot muffin after it leaves the toaster.",
          "Assemble with the fully cooked sausage and egg and serve immediately."
        ],
        "tips": [
          "A pop-up toaster does not cook raw eggs or raw sausage.",
          "Keep raw meat utensils separate from the finished sandwich."
        ]
      },
      "zh": {
        "title": "香肠鸡蛋早餐三明治",
        "description": "烤英式松饼夹入全熟鸡蛋、香肠肉饼和切达芝士，是经典美式早餐。",
        "ingredients": [
          "英式松饼 1个（切开）",
          "全熟香肠肉饼 1块",
          "鸡蛋 1个",
          "切达芝士 1片",
          "盐和黑胡椒适量"
        ],
        "directions": [
          "用其他合适厨具将香肠肉饼烹饪至160°F（71°C），鸡蛋煎至凝固。",
          "将英式松饼两半烤至金黄。",
          "松饼离开吐司机后，趁热放上芝士。",
          "加入全熟香肠和鸡蛋，立即食用。"
        ],
        "tips": [
          "弹出式吐司机不能烹饪生鸡蛋或生香肠。",
          "处理生肉的工具应与成品分开。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4207-8207-000000000207",
    "title": "Classic BLT Toasted Sandwich",
    "category": "toaster",
    "emoji": "🥪",
    "product_sku": "TC-TT-001",
    "mode": "Toast",
    "temp": "Browning level 4",
    "time": "3-5 minutes",
    "image_url": "images/recipes/toaster/07-classic-blt-sandwich.jpg",
    "display_order": 7,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Classic BLT Toasted Sandwich",
        "description": "Crisp toast layered with fully cooked bacon, lettuce, tomato, and a light spread of mayonnaise.",
        "ingredients": [
          "Sandwich bread, 2 slices",
          "Fully cooked bacon, 3 strips",
          "Lettuce leaves",
          "Tomato, sliced",
          "Mayonnaise, 1 tbsp"
        ],
        "directions": [
          "Cook bacon separately until fully cooked and crisp, then drain.",
          "Toast bread to a medium golden finish.",
          "Spread mayonnaise on the bread after toasting.",
          "Layer with lettuce, tomato, and bacon, then close and serve."
        ],
        "tips": [
          "Never place an assembled sandwich or greasy bacon in a pop-up toaster.",
          "Refrigerate lettuce and tomato until assembly."
        ]
      },
      "zh": {
        "title": "经典BLT烤吐司三明治",
        "description": "香脆吐司夹入全熟培根、生菜、番茄和少量蛋黄酱，经典清爽。",
        "ingredients": [
          "吐司面包 2片",
          "全熟培根 3条",
          "生菜叶适量",
          "番茄切片",
          "蛋黄酱 1汤匙"
        ],
        "directions": [
          "用其他合适厨具将培根完全煎熟至酥脆，并沥去多余油脂。",
          "将面包烤至中等金黄色。",
          "面包烤好后再涂抹蛋黄酱。",
          "依次放入生菜、番茄和培根，合上后食用。"
        ],
        "tips": [
          "切勿将组装好的三明治或油腻培根放入弹出式吐司机。",
          "生菜和番茄在组合前应保持冷藏。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4208-8208-000000000208",
    "title": "Berry Yogurt Toaster Waffles",
    "category": "toaster",
    "emoji": "🧇",
    "product_sku": "TC-TT-001",
    "mode": "Frozen",
    "temp": "Browning level 4",
    "time": "4-6 minutes",
    "image_url": "images/recipes/toaster/08-berry-yogurt-waffles.jpg",
    "display_order": 8,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Berry Yogurt Toaster Waffles",
        "description": "Crisp toaster waffles topped with Greek yogurt, strawberries, blueberries, and maple syrup.",
        "ingredients": [
          "Frozen toaster waffles, 2",
          "Greek yogurt, 1/3 cup",
          "Strawberries, sliced",
          "Blueberries, 1/4 cup",
          "Maple syrup, 1 tsp"
        ],
        "directions": [
          "Toast frozen waffles according to package directions and the toaster manual.",
          "Use a second cycle only if needed for crispness.",
          "Transfer waffles to a plate and add Greek yogurt.",
          "Top with berries and a light drizzle of maple syrup."
        ],
        "tips": [
          "Only use waffles labeled for toaster preparation.",
          "Add yogurt, fruit, and syrup after toasting."
        ]
      },
      "zh": {
        "title": "莓果酸奶烤华夫饼",
        "description": "烤至酥脆的华夫饼搭配希腊酸奶、草莓、蓝莓和少量枫糖浆。",
        "ingredients": [
          "适用于吐司机的冷冻华夫饼 2片",
          "希腊酸奶 1/3杯",
          "草莓切片",
          "蓝莓 1/4杯",
          "枫糖浆 1茶匙"
        ],
        "directions": [
          "按照包装说明和吐司机说明烘烤冷冻华夫饼。",
          "如需更酥脆，可视情况增加一次短周期。",
          "将华夫饼取出放盘，加入希腊酸奶。",
          "铺上莓果并淋少量枫糖浆。"
        ],
        "tips": [
          "仅使用包装明确标注可用吐司机加热的华夫饼。",
          "酸奶、水果和糖浆均在烘烤后添加。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4209-8209-000000000209",
    "title": "Mixed Berry Jam Toast",
    "category": "toaster",
    "emoji": "🍓",
    "product_sku": "TC-TT-001",
    "mode": "Toast",
    "temp": "Browning level 4",
    "time": "3-5 minutes",
    "image_url": "images/recipes/toaster/09-mixed-berry-jam-toast.jpg",
    "display_order": 9,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Mixed Berry Jam Toast",
        "description": "Golden toast with smooth mixed-berry preserves and fresh berries for a bright breakfast.",
        "ingredients": [
          "Thick-cut bread, 2 slices",
          "Mixed-berry preserves, 2 tbsp",
          "Strawberries, sliced",
          "Blueberries, 1/4 cup",
          "Butter, optional"
        ],
        "directions": [
          "Toast bread until golden and crisp.",
          "Transfer to a plate and add a thin layer of butter if desired.",
          "Spread mixed-berry preserves evenly.",
          "Top with fresh strawberries and blueberries."
        ],
        "tips": [
          "Jam and fruit must never be added before placing bread in a pop-up toaster.",
          "Allow very hot toast to cool briefly before serving children."
        ]
      },
      "zh": {
        "title": "综合莓果果酱吐司",
        "description": "金黄厚切吐司搭配顺滑莓果果酱和新鲜草莓蓝莓，酸甜明亮。",
        "ingredients": [
          "厚切面包 2片",
          "综合莓果果酱 2汤匙",
          "草莓切片",
          "蓝莓 1/4杯",
          "黄油（可选）"
        ],
        "directions": [
          "将面包烤至金黄酥脆。",
          "取出放盘，需要时薄涂一层黄油。",
          "均匀涂抹综合莓果果酱。",
          "铺上新鲜草莓和蓝莓。"
        ],
        "tips": [
          "果酱和水果绝不能在面包放入弹出式吐司机前添加。",
          "给儿童食用前，让高温吐司稍微冷却。"
        ]
      }
    }
  },
  {
    "id": "c3d4e5f6-0711-4210-8210-000000000210",
    "title": "Apple Pie Toast",
    "category": "toaster",
    "emoji": "🍎",
    "product_sku": "TC-TT-001",
    "mode": "Toast",
    "temp": "Browning level 4",
    "time": "8-10 minutes total",
    "image_url": "images/recipes/toaster/10-apple-pie-toast.jpg",
    "display_order": 10,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Apple Pie Toast",
        "description": "Golden toast topped with warm cinnamon apples and a small spoonful of vanilla yogurt.",
        "ingredients": [
          "Thick-cut bread, 2 slices",
          "Apple, peeled and sliced, 1",
          "Butter, 1 tsp",
          "Brown sugar, 1 tsp",
          "Ground cinnamon, 1/4 tsp",
          "Vanilla yogurt, 2 tbsp"
        ],
        "directions": [
          "Cook apple, butter, brown sugar, and cinnamon separately in a skillet until tender.",
          "Toast bread at a medium setting until golden.",
          "Transfer toast to plates and spoon the warm apple mixture on top.",
          "Finish with vanilla yogurt and serve carefully while warm."
        ],
        "tips": [
          "Apples must be cooked separately; never put sugared fruit in a pop-up toaster.",
          "The apple topping can be hot, so test the temperature before serving."
        ]
      },
      "zh": {
        "title": "苹果派风味吐司",
        "description": "金黄吐司搭配温热肉桂苹果和少量香草酸奶，呈现美式苹果派风味。",
        "ingredients": [
          "厚切面包 2片",
          "苹果 1个（去皮切片）",
          "黄油 1茶匙",
          "红糖 1茶匙",
          "肉桂粉 1/4茶匙",
          "香草酸奶 2汤匙"
        ],
        "directions": [
          "用平底锅另行加热苹果、黄油、红糖和肉桂，煮至柔软。",
          "用中等档位将面包烤至金黄。",
          "取出吐司放盘，将温热苹果铺在表面。",
          "加入香草酸奶，注意温度后食用。"
        ],
        "tips": [
          "苹果必须另行烹饪，切勿将带糖水果放入弹出式吐司机。",
          "苹果馅可能很烫，食用前应测试温度。"
        ]
      }
    }
  }
]
$recipes$::jsonb) AS r(
    id uuid,
    title text,
    category text,
    emoji text,
    product_sku text,
    mode text,
    temp text,
    "time" text,
    image_url text,
    display_order integer,
    is_active boolean,
    translations jsonb
  )
)
INSERT INTO recipes (
  id, title, category, emoji, product_id, mode, temp, "time",
  image_url, translations, is_active, display_order
)
SELECT
  source.id,
  source.title,
  source.category,
  source.emoji,
  (
    SELECT products.id
    FROM products
    WHERE products.sku = source.product_sku
    ORDER BY products.sort_order
    LIMIT 1
  ),
  source.mode,
  source.temp,
  source."time",
  source.image_url,
  source.translations,
  source.is_active,
  source.display_order
FROM source
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  emoji = EXCLUDED.emoji,
  product_id = EXCLUDED.product_id,
  mode = EXCLUDED.mode,
  temp = EXCLUDED.temp,
  "time" = EXCLUDED."time",
  image_url = EXCLUDED.image_url,
  translations = EXCLUDED.translations,
  is_active = EXCLUDED.is_active,
  display_order = EXCLUDED.display_order,
  updated_at = NOW();

SELECT
  display_order,
  translations->'en'->>'title' AS title_en,
  translations->'zh'->>'title' AS title_zh,
  image_url,
  category,
  is_active
FROM recipes
WHERE id::text LIKE 'c3d4e5f6-0711-42%'
ORDER BY display_order;
