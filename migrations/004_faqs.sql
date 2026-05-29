-- ============================================================
-- TomaChef: FAQs Table
-- 常见问题解答 - 多语言支持
-- ============================================================

CREATE TABLE IF NOT EXISTS faqs (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,           -- English question (primary)
  answer TEXT NOT NULL,             -- English answer (primary)
  question_zh TEXT,                 -- 中文问题
  answer_zh TEXT,                   -- 中文答案
  question_es TEXT,                 -- Spanish question
  answer_es TEXT,                   -- Spanish answer
  question_fr TEXT,                 -- French question
  answer_fr TEXT,                   -- French answer
  question_ja TEXT,                 -- Japanese question
  answer_ja TEXT,                   -- Japanese answer
  question_pt TEXT,                 -- Portuguese question
  answer_pt TEXT,                   -- Portuguese answer
  sort_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: Public can read active FAQs
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active faqs"
  ON faqs FOR SELECT
  USING (active = true);

CREATE POLICY "Authenticated users full access"
  ON faqs FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert default FAQs with Chinese translations
INSERT INTO faqs (question, answer, question_zh, answer_zh, sort_order) VALUES
('What is the minimum order quantity (MOQ)?',
 'Our standard MOQ varies by product. Air fryers typically start at 100 units per model, while toasters may start at 200 units. Contact us for mixed-container options.',
 '最小起订量是多少？',
 '我们的标准MOQ因产品而异。空气炸锅通常每款100台起订，烤面包机200台起订。混合集装箱订单请联系我们。',
 1),

('How long does shipping take?',
 'Standard shipping to North America takes 25-35 days by sea. Air freight is available for urgent orders (7-10 days).',
 '发货需要多长时间？',
 '海运到北美通常需要25-35天。紧急订单可选择空运（7-10天）。',
 2),

('Do you offer OEM/ODM services?',
 'Yes! We provide full OEM/ODM customization including branding, packaging design, color options, and feature modifications.',
 '你们提供OEM/ODM服务吗？',
 '是的！我们提供全面的OEM/ODM定制服务，包括品牌定制、包装设计、颜色选项和功能修改。',
 3),

('What certifications do your products have?',
 'Our products are UL, ETL, CE, FDA, and RoHS certified, ensuring compliance with major markets including North America, Europe, the Middle East, and Asia.',
 '你们的产品有哪些认证？',
 '我们的产品拥有UL、ETL、CE、FDA和RoHS认证，确保符合北美、欧洲、中东和亚洲等主要市场的要求。',
 4),

('What are your payment terms?',
 'We accept T/T (wire transfer), L/C (letter of credit), and other payment methods. Standard terms are 30% deposit with order confirmation and 70% before shipment.',
 '你们的付款条件是什么？',
 '我们接受T/T电汇、L/C信用证等付款方式。标准条件为订单确认时30%定金，发货前支付70%余款。',
 5),

('Can I get a sample before placing a bulk order?',
 'Absolutely. We encourage sample orders so you can evaluate product quality firsthand. Sample units are shipped within 3-5 business days.',
 '大货下单前可以拿样品吗？',
 '当然可以。我们鼓励样品订单，以便您亲自评估产品质量。样品将在3-5个工作日内发货。',
 6),

('Do you provide warranty?',
 'All TomaChef products come with a 12-month warranty against manufacturing defects. Extended warranty options are available for bulk orders.',
 '你们提供保修吗？',
 '所有TomaChef产品均享有12个月制造缺陷保修。大宗订单可享受延长保修选项。',
 7),

('How do I track my order?',
 'Once your order ships, you''ll receive a tracking number and regular updates. Our customer support team is available throughout the shipping process for any questions.',
 '如何追踪我的订单？',
 '订单发货后，您将收到追踪编号和定期更新。我们的客服团队会在整个运输过程中为您解答任何问题。',
 8);
