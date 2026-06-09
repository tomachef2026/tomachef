-- TomaChef: 10 American air fryer recipes
-- Idempotent import: safe to run again without creating duplicates.

WITH source AS (
  SELECT *
  FROM jsonb_to_recordset($recipes$
[
  {
    "id": "b2c3d4e5-f607-4101-8101-000000000101",
    "title": "Buffalo Chicken Wings",
    "category": "airfryer",
    "emoji": "🍗",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "380°F (193°C)",
    "time": "22-26 minutes",
    "image_url": "images/recipes/air-fryer/01-buffalo-chicken-wings.jpg",
    "display_order": 1,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Buffalo Chicken Wings",
        "description": "Classic American-style wings with crisp skin and a tangy Buffalo glaze.",
        "ingredients": [
          "Chicken wings, 2 lb / 900 g",
          "Baking powder, 1 tsp",
          "Garlic powder, 1 tsp",
          "Salt and black pepper",
          "Buffalo sauce, 1/3 cup",
          "Melted butter, 1 tbsp, optional"
        ],
        "directions": [
          "Pat wings very dry with paper towels.",
          "Toss with baking powder, garlic powder, salt, and pepper.",
          "Place wings in a single layer in the air fryer basket.",
          "Air fry at 380°F / 193°C for 22-26 minutes, turning halfway.",
          "Toss hot wings with Buffalo sauce and optional melted butter.",
          "Confirm the thickest wing reaches 165°F / 74°C before serving."
        ],
        "tips": [
          "Dry wings well for crispier skin.",
          "Add sauce after cooking to reduce burning."
        ]
      },
      "zh": {
        "title": "布法罗鸡翅",
        "description": "经典美式布法罗鸡翅，表皮酥脆，酸辣开胃，适合聚会和家庭分享。",
        "ingredients": [
          "鸡翅 900克",
          "泡打粉 1茶匙",
          "蒜粉 1茶匙",
          "盐和黑胡椒适量",
          "布法罗辣酱 1/3杯",
          "融化黄油 1汤匙（可选）"
        ],
        "directions": [
          "用厨房纸将鸡翅彻底吸干。",
          "加入泡打粉、蒜粉、盐和黑胡椒拌匀。",
          "将鸡翅单层摆入炸篮，避免重叠。",
          "以380°F（193°C）空气炸22-26分钟，中途翻面。",
          "出锅后拌入布法罗辣酱和可选的融化黄油。",
          "食用前确认最厚处中心温度达到165°F（74°C）。"
        ],
        "tips": [
          "鸡翅越干，表皮越容易酥脆。",
          "酱汁在烹饪后加入可减少焦糊。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4102-8102-000000000102",
    "title": "Crispy Chicken Tenders",
    "category": "airfryer",
    "emoji": "🍗",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "375°F (190°C)",
    "time": "12-15 minutes",
    "image_url": "images/recipes/air-fryer/02-crispy-chicken-tenders.jpg",
    "display_order": 2,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Crispy Chicken Tenders",
        "description": "Juicy chicken tenders with a crunchy panko coating and much less oil than deep frying.",
        "ingredients": [
          "Chicken tenderloins, 1 lb / 450 g",
          "Flour, 1/3 cup",
          "Egg, 1, beaten",
          "Panko breadcrumbs, 1 cup",
          "Paprika, garlic powder, salt, and pepper",
          "Light oil spray"
        ],
        "directions": [
          "Pat chicken dry and season lightly.",
          "Coat each piece in flour, dip in egg, then press into seasoned panko.",
          "Spray both sides lightly with oil.",
          "Air fry at 375°F / 190°C for 12-15 minutes, flipping once.",
          "Cook until the center reaches 165°F / 74°C."
        ],
        "tips": [
          "Press crumbs firmly onto the chicken for better coverage.",
          "Serve with honey mustard or ranch after cooking."
        ]
      },
      "zh": {
        "title": "美式脆皮鸡柳",
        "description": "外层金黄酥脆、内部鲜嫩多汁的美式鸡柳，少油更轻盈。",
        "ingredients": [
          "鸡里脊 450克",
          "面粉 1/3杯",
          "鸡蛋 1个（打散）",
          "日式面包糠 1杯",
          "红椒粉、蒜粉、盐和黑胡椒适量",
          "少量喷雾油"
        ],
        "directions": [
          "将鸡柳吸干并轻度调味。",
          "依次裹面粉、蛋液和调味面包糠。",
          "两面轻喷少量油。",
          "以375°F（190°C）空气炸12-15分钟，中途翻面一次。",
          "确认鸡肉中心温度达到165°F（74°C）。"
        ],
        "tips": [
          "轻压面包糠可让外衣更牢固。",
          "出锅后搭配蜂蜜芥末酱或牧场酱。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4103-8103-000000000103",
    "title": "Loaded Potato Skins",
    "category": "airfryer",
    "emoji": "🥔",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "390°F (199°C)",
    "time": "10-14 minutes",
    "image_url": "images/recipes/air-fryer/03-loaded-potato-skins.jpg",
    "display_order": 3,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Loaded Potato Skins",
        "description": "Crispy potato skins filled with cheddar, bacon, and green onion for a game-day snack.",
        "ingredients": [
          "Small baked potatoes, 4",
          "Shredded cheddar cheese, 1/2 cup",
          "Cooked bacon bits, 1/4 cup",
          "Green onion, sliced",
          "Sour cream, for serving",
          "Light oil spray, salt, and pepper"
        ],
        "directions": [
          "Halve baked potatoes and scoop out part of the center, leaving a sturdy shell.",
          "Spray skins lightly with oil and season with salt and pepper.",
          "Air fry at 390°F / 199°C for 6-8 minutes until edges crisp.",
          "Add cheese and bacon, then air fry 3-5 minutes until melted.",
          "Top with green onion and serve with sour cream."
        ],
        "tips": [
          "Use already baked potatoes for predictable timing.",
          "Do not overfill before the cheese melts."
        ]
      },
      "zh": {
        "title": "芝士培根土豆皮",
        "description": "美式比赛日小食，土豆皮外脆内软，搭配切达芝士、培根碎和葱香。",
        "ingredients": [
          "烤熟的小土豆 4个",
          "切达芝士碎 1/2杯",
          "熟培根碎 1/4杯",
          "葱花适量",
          "酸奶油适量",
          "喷雾油、盐和黑胡椒适量"
        ],
        "directions": [
          "将熟土豆对半切开，挖去部分内部，保留结实外壳。",
          "土豆皮轻喷油，并用盐和黑胡椒调味。",
          "以390°F（199°C）空气炸6-8分钟至边缘酥脆。",
          "加入芝士和培根，再炸3-5分钟至芝士融化。",
          "撒葱花并搭配酸奶油食用。"
        ],
        "tips": [
          "使用提前烤熟的土豆，时间更稳定。",
          "芝士融化前不要装得过满。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4104-8104-000000000104",
    "title": "Ranch Parmesan Zucchini Fries",
    "category": "airfryer",
    "emoji": "🥒",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "375°F (190°C)",
    "time": "10-12 minutes",
    "image_url": "images/recipes/air-fryer/04-ranch-parmesan-zucchini-fries.jpg",
    "display_order": 4,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Ranch Parmesan Zucchini Fries",
        "description": "Zucchini sticks with a crisp Parmesan ranch-style coating and a light, fresh bite.",
        "ingredients": [
          "Zucchini, 2 medium",
          "Panko breadcrumbs, 3/4 cup",
          "Grated Parmesan, 1/4 cup",
          "Ranch seasoning, 1 tsp",
          "Egg, 1",
          "Flour, 1/4 cup",
          "Light oil spray"
        ],
        "directions": [
          "Cut zucchini into even sticks and pat dry.",
          "Coat with flour, dip in egg, then press into panko, Parmesan, and ranch seasoning.",
          "Spray lightly with oil.",
          "Air fry at 375°F / 190°C for 10-12 minutes, turning once.",
          "Serve immediately while crisp."
        ],
        "tips": [
          "Dry zucchini well to avoid soggy breading.",
          "Cook in a single layer."
        ]
      },
      "zh": {
        "title": "牧场帕玛森西葫芦条",
        "description": "西葫芦条裹上帕玛森和美式牧场风味外衣，外脆内嫩，适合作为轻食小吃。",
        "ingredients": [
          "中等西葫芦 2根",
          "日式面包糠 3/4杯",
          "帕玛森芝士碎 1/4杯",
          "牧场风味调味粉 1茶匙",
          "鸡蛋 1个",
          "面粉 1/4杯",
          "少量喷雾油"
        ],
        "directions": [
          "将西葫芦切成均匀长条并吸干水分。",
          "依次裹面粉、蛋液，再压入面包糠、帕玛森和牧场调味粉混合物。",
          "表面轻喷少量油。",
          "以375°F（190°C）空气炸10-12分钟，中途翻面一次。",
          "趁酥脆立即食用。"
        ],
        "tips": [
          "充分吸干水分可避免外衣变软。",
          "保持单层摆放。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4105-8105-000000000105",
    "title": "BBQ Turkey Meatballs",
    "category": "airfryer",
    "emoji": "🍖",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "375°F (190°C)",
    "time": "10-13 minutes",
    "image_url": "images/recipes/air-fryer/05-bbq-turkey-meatballs.jpg",
    "display_order": 5,
    "is_active": true,
    "translations": {
      "en": {
        "title": "BBQ Turkey Meatballs",
        "description": "Lean turkey meatballs with a sticky BBQ glaze, ideal for an easy appetizer or bowl.",
        "ingredients": [
          "Ground turkey, 1 lb / 450 g",
          "Breadcrumbs, 1/3 cup",
          "Egg, 1",
          "Garlic powder, onion powder, salt, and pepper",
          "BBQ sauce, 1/3 cup",
          "Light oil spray"
        ],
        "directions": [
          "Mix turkey, breadcrumbs, egg, and seasonings until just combined.",
          "Form into small even meatballs.",
          "Air fry at 375°F / 190°C for 8-10 minutes.",
          "Brush with BBQ sauce and cook 2-3 minutes more.",
          "Confirm meatballs reach 165°F / 74°C internally."
        ],
        "tips": [
          "Avoid overmixing to keep the meatballs tender.",
          "Add BBQ sauce near the end to prevent scorching."
        ]
      },
      "zh": {
        "title": "烧烤酱火鸡肉丸",
        "description": "低脂火鸡肉丸搭配美式 BBQ 酱，外层微焦、酱汁光亮，适合小食或便当碗。",
        "ingredients": [
          "火鸡肉末 450克",
          "面包糠 1/3杯",
          "鸡蛋 1个",
          "蒜粉、洋葱粉、盐和黑胡椒适量",
          "BBQ烧烤酱 1/3杯",
          "少量喷雾油"
        ],
        "directions": [
          "将火鸡肉末、面包糠、鸡蛋和调味料轻轻混合。",
          "搓成大小均匀的小肉丸。",
          "以375°F（190°C）空气炸8-10分钟。",
          "刷上BBQ酱，再炸2-3分钟。",
          "确认肉丸中心温度达到165°F（74°C）。"
        ],
        "tips": [
          "避免过度搅拌，以保持肉丸柔嫩。",
          "临近结束再刷酱可减少焦糊。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4106-8106-000000000106",
    "title": "Cajun Shrimp with Corn",
    "category": "airfryer",
    "emoji": "🍤",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "380°F (193°C)",
    "time": "7-9 minutes",
    "image_url": "images/recipes/air-fryer/06-cajun-shrimp-corn.jpg",
    "display_order": 6,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Cajun Shrimp with Corn",
        "description": "A quick Southern-inspired shrimp dish with corn, Cajun spices, and lemon.",
        "ingredients": [
          "Large shrimp, peeled and deveined, 1 lb / 450 g",
          "Cooked corn kernels, 1 cup",
          "Olive oil, 1 tbsp",
          "Cajun seasoning, 1-2 tsp",
          "Lemon wedges",
          "Parsley, optional"
        ],
        "directions": [
          "Toss shrimp and corn with oil and Cajun seasoning.",
          "Arrange in a single layer.",
          "Air fry at 380°F / 193°C for 7-9 minutes, shaking once.",
          "Cook until shrimp are opaque and firm.",
          "Finish with lemon juice and parsley."
        ],
        "tips": [
          "Use moderate seasoning for family-friendly heat.",
          "Do not overcook shrimp."
        ]
      },
      "zh": {
        "title": "卡真风味虾仁玉米",
        "description": "南方风味卡真虾仁搭配甜玉米，香辣鲜嫩，适合快手晚餐。",
        "ingredients": [
          "去壳去虾线大虾 450克",
          "熟甜玉米粒 1杯",
          "橄榄油 1汤匙",
          "卡真调味粉 1-2茶匙",
          "柠檬角适量",
          "欧芹（可选）"
        ],
        "directions": [
          "将虾仁和玉米与橄榄油、卡真调味粉拌匀。",
          "单层摆入炸篮。",
          "以380°F（193°C）空气炸7-9分钟，中途摇匀一次。",
          "烹饪至虾仁完全不透明且肉质紧实。",
          "出锅后加入柠檬汁和欧芹。"
        ],
        "tips": [
          "家庭食用可适当减少辣味调料。",
          "避免过度烹饪虾仁。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4107-8107-000000000107",
    "title": "Crispy Fish Tacos",
    "category": "airfryer",
    "emoji": "🌮",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "390°F (199°C)",
    "time": "8-11 minutes",
    "image_url": "images/recipes/air-fryer/07-crispy-fish-tacos.jpg",
    "display_order": 7,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Crispy Fish Tacos",
        "description": "Crisp air-fried white fish served in warm tortillas with slaw and lime crema.",
        "ingredients": [
          "White fish fillets, 1 lb / 450 g",
          "Panko breadcrumbs, 1 cup",
          "Flour, 1/3 cup",
          "Egg, 1",
          "Chili powder, cumin, salt, and pepper",
          "Small tortillas, slaw, and lime crema"
        ],
        "directions": [
          "Cut fish into taco-sized strips and pat dry.",
          "Coat with flour, egg, then seasoned panko.",
          "Spray lightly with oil.",
          "Air fry at 390°F / 199°C for 8-11 minutes, turning once.",
          "Cook until fish reaches 145°F / 63°C and flakes easily.",
          "Serve in tortillas with slaw and lime crema."
        ],
        "tips": [
          "Keep toppings fresh and add after cooking.",
          "Use firm white fish for easier handling."
        ]
      },
      "zh": {
        "title": "酥脆鱼肉塔可",
        "description": "空气炸白鱼块外层酥脆，搭配卷心菜沙拉和青柠酱，清爽又有美式餐厅感。",
        "ingredients": [
          "白肉鱼柳 450克",
          "日式面包糠 1杯",
          "面粉 1/3杯",
          "鸡蛋 1个",
          "辣椒粉、孜然粉、盐和黑胡椒适量",
          "小玉米饼、卷心菜沙拉和青柠奶油酱"
        ],
        "directions": [
          "将鱼柳切成适合塔可的长条并吸干。",
          "依次裹面粉、蛋液和调味面包糠。",
          "表面轻喷少量油。",
          "以390°F（199°C）空气炸8-11分钟，中途翻面一次。",
          "确认鱼肉达到145°F（63°C），完全不透明且容易剥落。",
          "放入玉米饼，加入卷心菜沙拉和青柠酱。"
        ],
        "tips": [
          "新鲜配菜应在烹饪后加入。",
          "选择结实的白肉鱼更方便操作。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4108-8108-000000000108",
    "title": "Maple Mustard Pork Tenderloin Bites",
    "category": "airfryer",
    "emoji": "🥩",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "380°F (193°C)",
    "time": "10-12 minutes",
    "image_url": "images/recipes/air-fryer/08-maple-mustard-pork-bites.jpg",
    "display_order": 8,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Maple Mustard Pork Tenderloin Bites",
        "description": "Tender pork bites with a sweet-savory maple mustard glaze and caramelized edges.",
        "ingredients": [
          "Pork tenderloin, cut into bite-size pieces, 1 lb / 450 g",
          "Dijon mustard, 1 tbsp",
          "Maple syrup, 1 tbsp",
          "Olive oil, 1 tbsp",
          "Garlic powder, salt, and pepper"
        ],
        "directions": [
          "Toss pork pieces with oil, mustard, maple syrup, and seasoning.",
          "Arrange in a single layer.",
          "Air fry at 380°F / 193°C for 10-12 minutes, shaking halfway.",
          "Cook until pork reaches 145°F / 63°C.",
          "Rest for 3 minutes before serving."
        ],
        "tips": [
          "Cut pork evenly for consistent cooking.",
          "Add a little extra maple mustard glaze after cooking if desired."
        ]
      },
      "zh": {
        "title": "枫糖芥末猪里脊块",
        "description": "枫糖和芥末带来经典美式甜咸风味，猪里脊块边缘微焦、内部柔嫩。",
        "ingredients": [
          "猪里脊切块 450克",
          "第戎芥末 1汤匙",
          "枫糖浆 1汤匙",
          "橄榄油 1汤匙",
          "蒜粉、盐和黑胡椒适量"
        ],
        "directions": [
          "将猪肉块与橄榄油、芥末、枫糖浆和调味料拌匀。",
          "单层摆入炸篮。",
          "以380°F（193°C）空气炸10-12分钟，中途摇匀。",
          "确认猪肉中心温度达到145°F（63°C）。",
          "静置3分钟后食用。"
        ],
        "tips": [
          "切成均匀大小可保证受热一致。",
          "需要时可在出锅后补少量枫糖芥末酱。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4109-8109-000000000109",
    "title": "Mini Cheeseburger Sliders",
    "category": "airfryer",
    "emoji": "🍔",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "375°F (190°C)",
    "time": "8-10 minutes",
    "image_url": "images/recipes/air-fryer/09-mini-cheeseburger-sliders.jpg",
    "display_order": 9,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Mini Cheeseburger Sliders",
        "description": "Small juicy burger patties finished with melted cheese and served on slider buns.",
        "ingredients": [
          "Ground beef, 1 lb / 450 g",
          "Salt, pepper, and garlic powder",
          "Slider buns, 6",
          "Cheddar cheese slices",
          "Lettuce, tomato, and pickles, optional"
        ],
        "directions": [
          "Form beef into small slider patties and season.",
          "Air fry at 375°F / 190°C for 6-8 minutes, flipping once.",
          "Add cheese during the final 1-2 minutes.",
          "Cook ground beef to 160°F / 71°C.",
          "Assemble on slider buns with fresh toppings."
        ],
        "tips": [
          "Make patties slightly wider than the buns because they shrink.",
          "Add fresh toppings after cooking."
        ]
      },
      "zh": {
        "title": "迷你芝士汉堡",
        "description": "迷你美式芝士汉堡，肉饼多汁、芝士融化，适合家庭聚餐和派对小食。",
        "ingredients": [
          "牛肉末 450克",
          "盐、黑胡椒和蒜粉适量",
          "迷你汉堡面包 6个",
          "切达芝士片",
          "生菜、番茄和酸黄瓜（可选）"
        ],
        "directions": [
          "将牛肉整形成小肉饼并调味。",
          "以375°F（190°C）空气炸6-8分钟，中途翻面一次。",
          "最后1-2分钟放上芝士。",
          "确认牛肉末中心温度达到160°F（71°C）。",
          "与面包和新鲜配菜组合。"
        ],
        "tips": [
          "肉饼应比面包略宽，因为烹饪时会收缩。",
          "新鲜配菜在烹饪后加入。"
        ]
      }
    }
  },
  {
    "id": "b2c3d4e5-f607-4110-8110-000000000110",
    "title": "Apple Pie Hand Pies",
    "category": "airfryer",
    "emoji": "🥧",
    "product_sku": "TC-AF-001",
    "mode": "Air Fry",
    "temp": "350°F (175°C)",
    "time": "8-10 minutes",
    "image_url": "images/recipes/air-fryer/10-apple-pie-hand-pies.jpg",
    "display_order": 10,
    "is_active": true,
    "translations": {
      "en": {
        "title": "Apple Pie Hand Pies",
        "description": "Golden mini hand pies filled with warm cinnamon apples and a crisp pastry shell.",
        "ingredients": [
          "Refrigerated pie crust or puff pastry, 1 sheet",
          "Apple, finely diced, 1 cup",
          "Brown sugar, 1 tbsp",
          "Cinnamon, 1/2 tsp",
          "Lemon juice, 1 tsp",
          "Egg wash, optional"
        ],
        "directions": [
          "Mix diced apple with brown sugar, cinnamon, and lemon juice.",
          "Cut pastry into small rectangles or circles.",
          "Add a spoonful of filling and seal edges with a fork.",
          "Brush lightly with egg wash if desired.",
          "Air fry at 350°F / 175°C for 8-10 minutes until golden.",
          "Let cool briefly before serving because the filling will be hot."
        ],
        "tips": [
          "Do not overfill or the pies may leak.",
          "Vent the top with a small slit."
        ]
      },
      "zh": {
        "title": "苹果派小酥饼",
        "description": "美式苹果派风味小酥饼，外皮金黄酥脆，内馅带有肉桂苹果香气。",
        "ingredients": [
          "冷藏派皮或酥皮 1张",
          "苹果切小丁 1杯",
          "红糖 1汤匙",
          "肉桂粉 1/2茶匙",
          "柠檬汁 1茶匙",
          "蛋液（可选）"
        ],
        "directions": [
          "将苹果丁与红糖、肉桂粉和柠檬汁混合。",
          "将酥皮切成小长方形或圆形。",
          "放入一勺馅料，用叉子压紧边缘。",
          "需要时表面薄刷蛋液。",
          "以350°F（175°C）空气炸8-10分钟至金黄。",
          "内馅温度较高，稍微冷却后再食用。"
        ],
        "tips": [
          "不要放入过多馅料，以免漏出。",
          "顶部切一个小口用于排气。"
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
WHERE id::text LIKE 'b2c3d4e5-f607-41%'
ORDER BY display_order;
