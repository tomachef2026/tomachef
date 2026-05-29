-- ============================================================
-- Migration 005: Admin-Only RLS Fix
-- Purpose: 限制所有写入操作仅管理员可执行
-- 
-- 使用说明：
-- 1. 在 Supabase SQL Editor 中运行本脚本
-- 2. 将末尾的 YOUR_ADMIN_EMAIL 替换为你的管理员邮箱
-- 3. 运行后，在 Supabase Dashboard → Authentication → Settings
--    中关闭 "Allow new users to sign up"
-- ============================================================

-- ============================================================
-- Step 1: 创建 is_admin() 辅助函数
-- ============================================================
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT (nullif(current_setting('request.jwt.claims', true)::jsonb -> 'app_metadata' ->> 'role', '')) = 'admin';
$$;

-- ============================================================
-- Step 2: 更新 product_videos 策略
-- ============================================================
DROP POLICY IF EXISTS "Admin full access videos" ON product_videos;
CREATE POLICY "Admin full access videos" ON product_videos
  FOR ALL USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ============================================================
-- Step 3: 更新 faqs 策略
-- ============================================================
DROP POLICY IF EXISTS "Authenticated users full access" ON faqs;
CREATE POLICY "Admin full access faqs" ON faqs
  FOR ALL USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ============================================================
-- Step 4: 更新 purchase_channels 策略
-- ============================================================
DROP POLICY IF EXISTS "Authenticated users can insert channels" ON purchase_channels;
DROP POLICY IF EXISTS "Authenticated users can update channels" ON purchase_channels;
DROP POLICY IF EXISTS "Authenticated users can delete channels" ON purchase_channels;

CREATE POLICY "Admin insert channels" ON purchase_channels
  FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admin update channels" ON purchase_channels
  FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin delete channels" ON purchase_channels
  FOR DELETE USING (public.is_admin());

-- ============================================================
-- Step 5: 更新 site_settings 策略
-- ============================================================
DROP POLICY IF EXISTS "Authenticated users can update settings" ON site_settings;
DROP POLICY IF EXISTS "Authenticated users can insert settings" ON site_settings;

CREATE POLICY "Admin update settings" ON site_settings
  FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin insert settings" ON site_settings
  FOR INSERT WITH CHECK (public.is_admin());

-- ============================================================
-- Step 6: 更新 orders 策略（保留公开下单，收窄管理权限）
-- ============================================================
DROP POLICY IF EXISTS "Authenticated users can read orders" ON orders;
DROP POLICY IF EXISTS "Authenticated users can update orders" ON orders;
DROP POLICY IF EXISTS "Authenticated users can delete orders" ON orders;

CREATE POLICY "Admin read orders" ON orders
  FOR SELECT USING (public.is_admin());
CREATE POLICY "Admin update orders" ON orders
  FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin delete orders" ON orders
  FOR DELETE USING (public.is_admin());

-- ============================================================
-- Step 7: 更新 social_links 策略
-- ============================================================
DROP POLICY IF EXISTS "Admins can manage social links" ON social_links;
CREATE POLICY "Admin manage social links" ON social_links
  FOR ALL USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ============================================================
-- Step 8: 补充 products 表的管理员策略（如果已存在则替换）
-- ============================================================
ALTER TABLE IF EXISTS products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can insert products" ON products;
DROP POLICY IF EXISTS "Authenticated users can update products" ON products;
DROP POLICY IF EXISTS "Authenticated users can delete products" ON products;

-- 公开读
DROP POLICY IF EXISTS "Anyone can read products" ON products;
CREATE POLICY "Anyone can read products" ON products
  FOR SELECT USING (true);

-- 管理员写
CREATE POLICY "Admin insert products" ON products
  FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admin update products" ON products
  FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin delete products" ON products
  FOR DELETE USING (public.is_admin());

-- ============================================================
-- Step 9: 补充 recipes 表的管理员策略
-- ============================================================
ALTER TABLE IF EXISTS recipes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can insert recipes" ON recipes;
DROP POLICY IF EXISTS "Authenticated users can update recipes" ON recipes;
DROP POLICY IF EXISTS "Authenticated users can delete recipes" ON recipes;

DROP POLICY IF EXISTS "Anyone can read recipes" ON recipes;
CREATE POLICY "Anyone can read recipes" ON recipes
  FOR SELECT USING (true);

CREATE POLICY "Admin insert recipes" ON recipes
  FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admin update recipes" ON recipes
  FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin delete recipes" ON recipes
  FOR DELETE USING (public.is_admin());

-- ============================================================
-- Step 10: 补充 inquiries 表的管理员策略
-- ============================================================
ALTER TABLE IF EXISTS inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can insert inquiries" ON inquiries;
DROP POLICY IF EXISTS "Authenticated users can read inquiries" ON inquiries;

CREATE POLICY "Anyone can insert inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin read inquiries" ON inquiries
  FOR SELECT USING (public.is_admin());

-- ============================================================
-- Step 11: 补充 contact_info 表的管理员策略
-- ============================================================
ALTER TABLE IF EXISTS contact_info ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read contact_info" ON contact_info;
DROP POLICY IF EXISTS "Authenticated users can update contact_info" ON contact_info;
DROP POLICY IF EXISTS "Authenticated users can insert contact_info" ON contact_info;

CREATE POLICY "Anyone can read contact_info" ON contact_info
  FOR SELECT USING (true);

CREATE POLICY "Admin update contact_info" ON contact_info
  FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin insert contact_info" ON contact_info
  FOR INSERT WITH CHECK (public.is_admin());

-- ============================================================
-- Step 12: 标记你的账号为管理员
--          ⚠️ 将 YOUR_ADMIN_EMAIL 替换为你的 Supabase 登录邮箱！
-- ============================================================
-- UPDATE auth.users
-- SET raw_app_meta_data = raw_app_meta_data || '{"role":"admin"}'::jsonb
-- WHERE email = 'YOUR_ADMIN_EMAIL@example.com';

-- ============================================================
-- 验证：运行以下查询检查结果
-- ============================================================
-- 检查管理员是否设置成功
-- SELECT id, email, raw_app_meta_data FROM auth.users WHERE email = '你的邮箱';

-- 检查所有策略
-- SELECT schemaname, tablename, policyname, cmd, roles, qual, with_check
-- FROM pg_policies WHERE schemaname = 'public' ORDER BY tablename, cmd;
