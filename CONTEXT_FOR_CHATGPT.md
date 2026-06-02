# TomaChef 项目移交文档 — ChatGPT 专用

> 生成日期：2026-06-02
> 项目周期：2026-05-27 ~ 2026-06-02（7天）

---

## 1. 项目概览

| 项目 | 详情 |
|------|------|
| **品牌** | TomaChef |
| **定位** | B2B 国际贸易出口网站，厨房电器制造商 |
| **产品线** | 空气炸锅（8款）、空气炸烤箱（5款）、烤面包机（5款），共18款 |
| **参考网站** | modernhome-inc.com |
| **域名** | tomachefappliance.com |
| **代码仓库** | GitHub: tomachef2026/tomachef |
| **部署** | Cloudflare Pages（手动 git push 触发自动构建） |

---

## 2. 技术架构

### 前端
- **HTML + Bootstrap 5.3 CDN + 原生 JavaScript**（无构建工具，零依赖）
- 4 个公开页面：`index.html` / `products.html` / `recipes.html` / `buy.html` / `about.html` / `contact.html`
- **无 about.html**（该页面已从导航移除，改为 recipes.html）

### 后端（Supabase Serverless）
- **项目 URL**：`jtrhzphdttralmvdhtva.supabase.co`
- **Auth**：邮箱/密码登录（anon key 已配置在 `supabase.js`）
- **Storage**：`tomachef-assets` bucket（产品图片、食谱图片、视频）
- **RLS 策略**：所有表公共可读、仅 admin 可写

### 多语言 (i18n)
- 6 语言：EN / ZH / ES / FR / JA / PT
- 通过 `js/i18n.js` 实现，localStorage 持久化
- 全局广播机制：语言切换时派发 `langChanged` CustomEvent，各页面监听后自动重渲染
- 产品多语言：数据库列 `name_zh` / `description_zh` 等存储
- 食谱多语言：数据库 JSONB `translations` 列存储结构化数据

### 配色
- 主色：番茄红 `#b91c1c`
- CTA：琥珀金 `#f59e0b`
- 背景：白色 + 浅灰

---

## 3. Supabase 数据库结构

### 表清单（11张表，全部有 RLS 策略）

| 表 | 说明 |
|----|------|
| `products` | 18款产品（含6语翻译 + specs/colors JSONB） |
| `recipes` | 10道食谱（translations JSONB 含标题/配料/做法/小贴士） |
| `purchase_channels` | 产品购买渠道（Amazon/Walmart/TikTok Shop 等） |
| `product_videos` | 产品视频（YouTube/Vimeo/本地上传） |
| `orders` | 批发询价订单 |
| `faqs` | FAQ 常见问题（6语翻译） |
| `inquiries` | 联系表单提交 |
| `social_links` | 社交媒体链接 |
| `site_settings` | 系统设置（如通知邮箱） |
| `contact_info` | 联系信息（邮箱/电话/地址/营业时间） |

### 管理员
- 账号：`tomachef2026@gmail.com`
- 角色：`role=admin`（app_metadata 标记）
- 注册功能已关闭

---

## 4. 文件结构

```
tomachef/
├── index.html              # 首页（Hero + 产品分类 + 热门产品 + 优势 + 食谱区 + CTA）
├── products.html           # 产品中心（横向滑动分类浏览）
├── recipes.html            # 食谱页（产品→食谱两层浏览）
├── buy.html                # 购买详情页（电商风格：大图/颜色选择/渠道购买/FAQ）
├── about.html              # 关于我们（已从导航移除，文件仍存在）
├── contact.html            # 联系我们
├── css/
│   └── style.css           # 全站样式（~3000+ 行）
├── js/
│   ├── i18n.js             # 多语言核心（applyTranslations + langChanged 广播）
│   ├── products.js         # 产品数据（FALLBACK_PRODUCTS + initProducts）
│   ├── main.js             # 全局交互（导航栏、搜索、滚动动画）
│   ├── social.js           # 社交媒体栏
│   └── supabase.js         # Supabase 客户端 + 全部 API 封装
├── admin/
│   ├── login.html          # 管理员登录
│   ├── dashboard.html      # 仪表盘（统计 + 最近询价）
│   ├── products.html       # 产品管理（增删改查 + 渠道管理 + FAQ）
│   ├── channels.html       # 购买渠道管理
│   ├── inquiries.html      # 订购咨询管理
│   ├── contact.html        # 联系信息管理
│   ├── recipes.html        # 食谱管理
│   ├── social.html         # 社交媒体管理
│   └── settings.html       # 系统设置（通知邮箱）
├── migrations/             # SQL 迁移脚本（按编号）
│   ├── 001_products_i18n.sql
│   ├── 002_product_i18n_columns.sql
│   ├── 003_product_videos.sql
│   ├── 004_faqs.sql
│   ├── 005_admin_rls_fix.sql
│   ├── 006_recipe_product_link.sql
│   └── 007_seed_all_data.sql          # 全量导入脚本（幂等）
├── images/
│   └── recipes/            # 食谱图片（10张，600×600 JPEG）
├── _headers                # Cloudflare Pages 安全头
├── favicon.ico
└── CONTEXT_FOR_CHATGPT.md  # 本文档
```

---

## 5. 完整开发日志（按时间线）

### 2026-05-27（第1天）— 网站搭建 + 管理后台 + 配色改版

1. **网站主体搭建**
   - 参考 modernhome-inc.com 结构，创建 4 页面（index/products/about/contact）
   - 18 款产品卡片网格（分类筛选 + URL 参数自动筛选）
   - 6 语言完整 i18n，localStorage 持久化

2. **Supabase 管理后台**
   - 新建 `admin/login.html`、`dashboard.html`、`products.html`、`inquiries.html`
   - `supabase.js` API 封装（产品 CRUD、询价、认证）
   - `supabase-setup.sql` 数据库初始化脚本
   - RLS 策略：公开读 active=true 产品 + 已登录用户完整 CRUD

3. **网站配色改版 — 蓝→番茄红**
   - 基于 Logo（番茄厨师：红+白+绿）确定配色
   - CSS 变量全量替换：`var(--blue-*)` → `var(--tomato-*)`
   - 4 个前台 + 4 个后台页面全部更新

4. **产品页横向滑动布局**
   - 从 Grid 改为品类分区横向滑动（左右箭头 + 移动端触摸滑动）

5. **联系信息后台管理**
   - `sql/contact_info.sql` 建表 + `admin/contact.html` 管理页
   - 前台 `contact.html` 从 Supabase 动态加载

6. **导航栏全局搜索框**
   - 实时搜索产品名/型号，300ms 防抖，下拉建议框

7. **首页食谱板块**
   - 6 张食谱卡片（emoji 占位图），Grid 响应式布局

8. **社交媒体栏**
   - `js/social.js` + `admin/social.html`（增删改查 + 排序）

9. **"询价" → "购买"大改造**
   - 全站 CTA 从 Contact 改为 Buy
   - 新建 `buy.html`（购买页面 + FAQ 手风琴）
   - 新增 `orders` 表（批发订单提交）

### 2026-05-28（第2天）— Bug 修复 + 购买渠道 + 食谱管理

1. **导航栏/语言切换 Bug 修复系列**
   - 修复产品/食谱页导航 active 状态
   - 修复产品多语言切换不生效（`products` 表缺语言列 → SQL 迁移加列 + 后台 6 语 Tab 编辑）
   - 修复 ES/FR/JA/PT 语言切换失效（根因：`fetchProducts` 污染了 `product.name`）

2. **购买渠道系统**
   - 新建 `purchase_channels` 表 + `admin/channels.html`
   - `buy.html` 重构为电商详情页：产品大图 + 颜色选择器 + 多渠道购买卡片
   - 12 个预设平台（Amazon/Walmart/Home Depot/eBay/TikTok Shop 等）

3. **订购咨询管理 + 通知邮箱**
   - `admin/inquiries.html`（统计卡片 + 列表 + 标记已读）
   - `admin/settings.html`（通知邮箱配置 + EmailJS 可选集成）

4. **产品编辑内联渠道管理**
   - 编辑产品弹窗可直接添加/删除/修改购买渠道

5. **全部后台页面 UI 统一**
   - 7 个后台页面统一暗色侧边栏布局（8 个链接 + CSS `display:block`）

6. **食谱管理完整实现**
   - Supabase `recipes` 表（JSONB 6 语翻译）+ `admin/recipes.html`
   - 前台 `recipes.html` 从数据库动态加载，详情弹窗

7. **语言切换"屎山"全面修复**
   - 引入 `langChanged` CustomEvent 广播机制
   - 修复 `filter_all` key 冲突
   - 修复食谱页 `langChanged` 监听器注册时序（从 `DOMContentLoaded` 移到脚本顶层）
   - 修复 `applyTranslations` 异常阻塞 `addEventListener` 注册

8. **FALLBACK_PRODUCTS 补齐翻译**
   - 18 款产品全部补齐 `name_es/fr/ja/pt` + `description_es/fr/ja/pt`
   - `initProducts()` 中 Supabase 数据用 fallback 翻译补齐缺失字段

### 2026-05-29（第3天）— 视频 + FAQ + 安全加固 + 食谱重构

1. **产品视频功能**
   - `product_videos` 表 + 后台管理（YouTube/Vimeo/本地上传）
   - 前台 Google Search 风格横向滚动 + lightbox 播放

2. **FAQ 改为数据库驱动**
   - `faqs` 表（6 语翻译列）+ 后台管理嵌入产品管理页
   - 前台 `buy.html` FAQ 区从 Supabase 动态加载

3. **安全加固**
   - 创建 `is_admin()` 函数（检查 `app_metadata.role`）
   - 全部 11 张表 RLS 策略改为 admin-only 写入
   - 前端 `isAdmin()` + `requireAuth` 双重校验
   - 关闭注册功能
   - 添加 7 个安全响应头（CSP/HSTS/X-Frame-Options 等，通过 `_headers` 文件）

4. **食谱系统重构**
   - 添加 `product_id` 列关联产品
   - 修复 Buy Now 跳转不显示详情 bug（`productsReady` 事件）
   - 10 道食谱完整数据同步到 FALLBACK_RECIPES
   - 删除所有样板数据（18 产品 + 10 食谱 → 从 SQL 重建）

5. **FAQ Bug 修复**
   - 后台按钮无响应 → 加 null 检查 + 自动滚动
   - 前台语言不同步 → SQL 种子数据补充中文翻译

### 2026-05-30（第4天）— 食谱页面重构 + SKU

1. **食谱页面完全重写**
   - 从分类过滤改为"先选产品→再展食谱"两层浏览
   - 新增 4 条 11-in-1 空气烤箱食谱
   - 结构化详情弹窗（Ingredients/Directions/Tips 分区 + mode/temp/time badge）

2. **产品卡片增强**
   - 全部 18 款添加 SKU（TC-AF-001~008, TC-AFO-001~005, TC-TT-001~005）
   - 产品选择器卡片显示图标/名称/价格/食谱数/规格

3. **Bug 修复**
   - `initProducts()` Supabase 空结果 fallback
   - 食谱页产品 UUID 比较兼容（parseInt ↔ String）

### 2026-06-01（第5天）— 食谱数据导入 + 图片同步

1. **食谱数据导入**
   - 从截图提取 10 道食谱完整 6 语数据
   - 生成 `import_all_recipes.sql`（INSERT ... ON CONFLICT DO UPDATE）
   - 修复 SQL 中的 `time` 保留字 + UUID 类型问题

2. **PDF 食谱图片同步**
   - 从 PDF（菜品手册定稿转曲(1).pdf）提取 10 张图片
   - 网格精确裁剪 + 600×600 JPEG 压缩（48-71KB）
   - 上传到 Supabase Storage `tomachef-assets/recipes/`

3. **AI 图片重生成**
   - 3 张图没铺平（炸鸡/披萨/龙虾尾）+ 2 张缺失（烤鸡/面团发酵）
   - 使用 ImageGen 生成 5 张 AI 美食摄影图（平铺俯拍风格）
   - 多次重新生成不满意的图片（加入 hyperrealistic/8K/culinary magazine quality 等 prompt）

4. **后台食谱管理修复**
   - `saveRecipe()` 编辑时合并保留非 EN 翻译（防止数据丢失）
   - 新增 mode/temp/time 表单字段

5. **前台食谱不显示修复**
   - 根因：`product_id=NULL` → `getProductsWithRecipes()` 跳过 → 空
   - 修复：首页/食谱页加入 `__all__` fallback

6. **创建全量导入脚本**
   - `migrations/007_seed_all_data.sql`：18 产品 + 10 食谱 + RLS + is_admin()

### 2026-06-02（第6天）— 图片质量最终优化

- 对 #6/#7/#10 图片第三次重生成（Michelin star/dramatic lighting/artisan bakery）
- 10 张图全部上传完成
- 生成 `update_recipes_images_v4.sql`（待执行）

---

## 6. 当前状态与待办事项

### ⚠️ 需要执行的操作

1. **执行 SQL 更新图片 URL**（最高优先级）
   - 在 Supabase SQL Editor 运行 `update_recipes_images_v4.sql`
   - 链接：https://supabase.com/dashboard/project/jtrhzphdttralmvdhtva/sql/new
   - 执行后网站刷新即可看到 10 张食谱图片

2. **执行全量数据导入**（如果产品表仍为空）
   - 运行 `migrations/007_seed_all_data.sql`
   - 包含：18 产品 + 10 食谱 + RLS 策略

### 已知状态

- Supabase `products` 表可能仍为空（网站依靠 `FALLBACK_PRODUCTS` 显示）
- 食谱 `image_url` 列尚未更新（SQL 执行前为 NULL）
- 管理员账号正常、RLS 安全策略已部署

---

## 7. 用户偏好速查

- 中文交流，消息简短直接
- 对生成速度敏感
- 喜欢迭代优化（先出初版，再改进）
- 需要直接可复制的 SQL 语句（减少交互步骤）
- 使用 EPSON L3250 打印机
- 同时在运营 TikTok 店铺（紫鸟浏览器）
- AI 技术动态 + 基金投资

---

## 8. 关键决策记录

| 决策 | 原因 |
|------|------|
| HTML + Bootstrap CDN（不用 React/Vue） | 简单部署，零构建 |
| Supabase 作为后端 | 免费层够用，无需自建服务器 |
| anon key 无法写入 recipes 表 | RLS 限制，需在 SQL Editor 执行 |
| 自动翻译用 MyMemory API（免费） | 无需 API key，支持 zh↔多语 |
| 后台简化为单语言编辑 | 翻译列太多，UI 维护成本高 |
| 配色从蓝色改为番茄红 | 与 Logo 配色一致 |
| 关闭 Supabase 注册 | 安全加固，防止未授权操作 |
| 食谱图片用 AI 生成补缺 | PDF 中特定食谱无对应图片 |
