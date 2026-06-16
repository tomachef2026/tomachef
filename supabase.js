/* ============================================================
   TomaChef Supabase Client Configuration
   ============================================================ */

// ============================================================
// Cache Layer — avoids re-fetching on every page navigation
// ============================================================
const CACHE_VERSION = 'v6'; // bump to invalidate all old caches
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function cacheGet(key) {
  try {
    const raw = localStorage.getItem(CACHE_VERSION + '_' + key);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (!cached || !Array.isArray(cached.data) || !cached.ts) return null;
    if (Date.now() - cached.ts > CACHE_TTL) {
      localStorage.removeItem(CACHE_VERSION + '_' + key);
      return null;
    }
    return cached.data;
  } catch (e) {
    return null;
  }
}

function cacheSet(key, data) {
  try { localStorage.setItem(CACHE_VERSION + '_' + key, JSON.stringify({ data, ts: Date.now() })); } catch (e) {}
}

function cacheClear(prefix) {
  try {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(CACHE_VERSION + '_' + prefix));
    keys.forEach(k => localStorage.removeItem(k));
  } catch (e) {}
}

// Also clean up old v1 caches on first load
(function cleanupOldCaches() {
  try {
    const old = Object.keys(localStorage).filter(k => k.startsWith('tc_') && !k.startsWith(CACHE_VERSION + '_'));
    old.forEach(k => localStorage.removeItem(k));
  } catch(e) {}
})();

// ⚠️ Replace these with your actual Supabase project credentials
// You can find them in: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://jtrhzphdttralmvdhtva.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_X30tdyeHkou-T0BA2UuhHA_2ERiLvxM';

// Initialize Supabase client (loaded from CDN)
let supabase = null;

function initSupabase() {
  if (typeof window.supabase === 'undefined') {
    console.error('Supabase JS SDK not loaded. Check CDN script tag.');
    return null;
  }
  if (!supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabase;
}

async function waitForSupabase(timeoutMs = 5000) {
  if (typeof window.supabase !== 'undefined') return true;

  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    await new Promise(resolve => setTimeout(resolve, 50));
    if (typeof window.supabase !== 'undefined') return true;
  }
  return false;
}

// ============================================================
// Auth Helpers
// ============================================================

async function signIn(email, password) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.auth.signInWithPassword({ email, password });
}

async function signOut() {
  const sb = initSupabase();
  if (!sb) return;
  await sb.auth.signOut();
}

async function getCurrentUser() {
  const sb = initSupabase();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function getSession() {
  const sb = initSupabase();
  if (!sb) return null;
  const { data: { session } } = await sb.auth.getSession();
  return session;
}

async function isAdmin() {
  const user = await getCurrentUser();
  if (!user) return false;
  return user.app_metadata?.role === 'admin';
}

async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  // 检查是否为管理员（双重防护：RLS + 客户端校验）
  const admin = await isAdmin();
  if (!admin) {
    alert('您没有管理员权限，请联系网站管理员。');
    await signOut();
    window.location.href = 'login.html';
    return null;
  }
  return session;
}

// ============================================================
// Product API (Public)
// ============================================================

async function fetchProducts(category = null, lang = 'en', forceRefresh = false) {
  // Check cache first
  const cacheKey = category ? 'products_' + category : 'products_all';
  const cached = forceRefresh ? null : cacheGet(cacheKey);
  if (cached) return cached;

  if (typeof window.supabase === 'undefined') {
    await waitForSupabase();
  }
  const sb = initSupabase();
  if (!sb) return null;

  let query = sb.from('products').select('*').eq('active', true);

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  query = query.order('sort_order', { ascending: true });

  const { data, error } = await query;
  if (error) {
    console.error('Error fetching products:', error);
    return null;
  }
  // Return raw data — localization is handled by getLocalizedName/getLocalizedDesc at render time
  cacheSet(cacheKey, data);
  return data;
}

async function fetchAllProductsAdmin() {
  const sb = initSupabase();
  if (!sb) return [];

  const { data, error } = await sb
    .from('products')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching products (admin):', error);
    return [];
  }
  return data;
}

async function createProduct(product) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const result = await sb.from('products').insert(product).select();
  if (!result.error) cacheClear('products_');
  return result;
}

async function updateProduct(id, updates) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const result = await sb.from('products').update(updates).eq('id', id).select();
  if (!result.error) cacheClear('products_');
  return result;
}

async function deleteProduct(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const result = await sb.from('products').delete().eq('id', id);
  if (!result.error) cacheClear('products_');
  return result;
}

// ============================================================
// Inquiry API
// ============================================================

async function submitInquiry(inquiry) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('inquiries').insert(inquiry);
}

async function fetchInquiries() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching inquiries:', error);
    return [];
  }
  return data;
}

async function markInquiryRead(id, isRead = true) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('inquiries').update({ is_read: isRead }).eq('id', id);
}

// ============================================================
// Order API (Buy Page)
// ============================================================

async function submitOrder(order) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('orders').insert(order);
}

async function fetchOrders() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
  return data;
}

async function markOrderRead(id, isRead = true) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('orders').update({ is_read: isRead }).eq('id', id);
}

async function deleteOrder(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('orders').delete().eq('id', id);
}

// ============================================================
// Purchase Channels API
// ============================================================

async function fetchPurchaseChannels(productId) {
  const sb = initSupabase();
  if (!sb) return [];
  const query = sb.from('purchase_channels')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  if (productId) query.eq('product_id', productId);
  const { data, error } = await query;
  if (error) { console.error('Error fetching channels:', error); return []; }
  return data;
}

async function fetchAllChannelsAdmin() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb.from('purchase_channels')
    .select('*')
    .order('display_order', { ascending: true });
  if (error) { console.error('Error fetching channels admin:', error); return []; }
  return data;
}

async function upsertPurchaseChannel(channel) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('purchase_channels').upsert(channel, { onConflict: 'id' }).select();
}

async function deletePurchaseChannel(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('purchase_channels').delete().eq('id', id);
}

// ============================================================
// Site Settings API
// ============================================================

async function fetchSiteSettings() {
  const sb = initSupabase();
  if (!sb) return {};
  const { data, error } = await sb.from('site_settings').select('*');
  if (error) {
    console.error('Error fetching site settings:', error);
    return {};
  }
  const settings = {};
  data.forEach(row => { settings[row.key] = row.value; });
  return settings;
}

async function updateSiteSetting(key, value) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const result = await sb.from('site_settings').upsert(
    { key, value, updated_at: new Date().toISOString() },
    { onConflict: 'key' }
  );
  if (!result.error) cacheClear('settings_');
  return result;
}

async function getNotificationEmail() {
  const settings = await fetchSiteSettings();
  return settings['notification_email'] || '';
}

const DEFAULT_PRODUCT_CATEGORIES = [
  {
    key: 'airfryer',
    icon: '🍟',
    sort_order: 1,
    active: true,
    name_en: 'Air Fryer',
    name_zh: '空气炸锅',
    name_es: 'Freidora de Aire',
    name_fr: 'Friteuse à Air',
    name_ja: 'エアフライヤー',
    name_pt: 'Fritadeira de Ar',
    desc_en: 'Healthy frying with rapid air circulation technology.',
    desc_zh: '快速空气循环技术，健康油炸。'
  },
  {
    key: 'airfryeroven',
    icon: '🔥',
    sort_order: 2,
    active: true,
    name_en: 'Air Fryer Oven',
    name_zh: '空气炸烤箱',
    name_es: 'Horno Freidor de Aire',
    name_fr: 'Four Friteuse à Air',
    name_ja: 'エアフライヤーオーブン',
    name_pt: 'Forno Fritadeira de Ar',
    desc_en: 'Air fry, bake, roast, dehydrate — all in one appliance.',
    desc_zh: '空气炸、烘焙、烤制、脱水，一机多用。'
  },
  {
    key: 'toaster',
    icon: '🍞',
    sort_order: 3,
    active: true,
    name_en: 'Toaster',
    name_zh: '烤面包机',
    name_es: 'Tostadora',
    name_fr: 'Grille-Pain',
    name_ja: 'トースター',
    name_pt: 'Torradeira',
    desc_en: 'Reliable toasters for perfect results every morning.',
    desc_zh: '可靠的时尚烤面包机，每天早晨完美出品。'
  }
];

function parseProductCategoriesSetting(value) {
  if (!value) return [];
  try {
    const parsed = typeof value === 'string' ? JSON.parse(value) : value;
    return Array.isArray(parsed) ? parsed.filter(item => item && item.key) : [];
  } catch (e) {
    console.warn('Invalid product_categories setting:', e);
    return [];
  }
}

async function fetchProductCategories(forceRefresh = false) {
  const cached = forceRefresh ? null : cacheGet('settings_product_categories');
  if (cached) return cached;
  const settings = await fetchSiteSettings();
  const configured = parseProductCategoriesSetting(settings.product_categories);
  const categories = configured.length ? configured : DEFAULT_PRODUCT_CATEGORIES;
  cacheSet('settings_product_categories', categories);
  return categories;
}

async function saveProductCategories(categories) {
  const clean = (categories || [])
    .filter(item => item && item.key)
    .map((item, index) => ({
      key: String(item.key || '').trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9_-]/g, ''),
      icon: String(item.icon || '🍽️').trim() || '🍽️',
      sort_order: Number.parseInt(item.sort_order, 10) || index + 1,
      active: item.active !== false,
      name_en: String(item.name_en || '').trim(),
      name_zh: String(item.name_zh || '').trim(),
      name_es: String(item.name_es || '').trim(),
      name_fr: String(item.name_fr || '').trim(),
      name_ja: String(item.name_ja || '').trim(),
      name_pt: String(item.name_pt || '').trim(),
      desc_en: String(item.desc_en || '').trim(),
      desc_zh: String(item.desc_zh || '').trim(),
      image_url: String(item.image_url || '').trim()
    }))
    .filter(item => item.key);
  return await updateSiteSetting('product_categories', JSON.stringify(clean));
}

// ============================================================
// Contact Info API
// ============================================================

async function fetchContactInfo() {
  const sb = initSupabase();
  if (!sb) return {};
  const { data, error } = await sb.from('contact_info').select('*');
  if (error) {
    console.error('Error fetching contact info:', error);
    return {};
  }
  // Convert to key-value object
  const info = {};
  data.forEach(row => { info[row.key] = row.value; });
  return info;
}

async function updateContactInfo(key, value) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb
    .from('contact_info')
    .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: 'key' })
    .select('key,value')
    .single();
}

// ============================================================
// Social Links API
// ============================================================

async function fetchSocialLinks() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('social_links')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  if (error) {
    console.error('Error fetching social links:', error);
    return [];
  }
  return data;
}

async function fetchAllSocialLinksAdmin() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('social_links')
    .select('*')
    .order('display_order', { ascending: true });
  if (error) {
    console.error('Error fetching social links (admin):', error);
    return [];
  }
  return data;
}

async function upsertSocialLink(link) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('social_links').upsert(link, { onConflict: 'id' }).select();
}

async function deleteSocialLink(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('social_links').delete().eq('id', id);
}

// ============================================================
// Recipe API
// ============================================================

async function fetchRecipes(category = null, productId = null) {
  const sb = initSupabase();
  if (!sb) return [];
  let query = sb.from('recipes').select('*, products(name)').eq('is_active', true);
  if (category && category !== 'all') query = query.eq('category', category);
  if (productId) query = query.eq('product_id', productId);
  query = query
    .order('category', { ascending: true })
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: true });
  const { data, error } = await query;
  if (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
  return data;
}

async function fetchAllRecipesAdmin() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('recipes')
    .select('*, products(id, sku, name, name_zh)')
    .order('is_active', { ascending: false })
    .order('category', { ascending: true })
    .order('display_order', { ascending: true });
  if (error) { console.error('Error fetching recipes admin:', error); return []; }
  return data;
}

async function upsertRecipe(recipe) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  recipe.updated_at = new Date().toISOString();
  const result = await sb.from('recipes').upsert(recipe, { onConflict: 'id' }).select();
  if (!result.error) cacheClear('recipes_');
  return result;
}

async function updateRecipeTranslations(id, translations) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const result = await sb
    .from('recipes')
    .update({
      translations,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select('id,translations')
    .single();
  if (!result.error) cacheClear('recipes_');
  return result;
}

async function updateRecipeActive(id, isActive) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const result = await sb
    .from('recipes')
    .update({
      is_active: isActive,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select('id,is_active')
    .single();
  if (!result.error) cacheClear('recipes_');
  return result;
}

async function updateRecipeSortOrders(updates) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const rows = (updates || [])
    .filter(item => item && item.id)
    .map(item => ({
      id: item.id,
      display_order: Number.parseInt(item.display_order, 10) || 0,
      updated_at: new Date().toISOString()
    }));
  if (!rows.length) return { data: [] };
  const results = await Promise.all(rows.map(row =>
    sb
      .from('recipes')
      .update({
        display_order: row.display_order,
        updated_at: row.updated_at
      })
      .eq('id', row.id)
      .select('id,display_order')
      .single()
  ));
  const errorResult = results.find(result => result.error);
  if (errorResult) return errorResult;
  cacheClear('recipes_');
  return { data: results.map(result => result.data) };
}

async function deleteRecipe(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  const result = await sb.from('recipes').delete().eq('id', id);
  if (!result.error) cacheClear('recipes_');
  return result;
}

// ============================================================
// FAQ API
// ============================================================

async function fetchFaqs(lang = 'en') {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('faqs')
    .select('*')
    .eq('active', true)
    .order('sort_order', { ascending: true });
  if (error) { console.error('Error fetching FAQs:', error); return []; }
  return data;
}

function getLocalizedFaq(faq, lang) {
  const qKey = lang === 'en' ? 'question' : 'question_' + lang;
  const aKey = lang === 'en' ? 'answer' : 'answer_' + lang;
  let question = faq[qKey];
  let answer = faq[aKey];

  // The original eight FAQs already exist in the site translation catalog.
  // Use those translations while legacy database rows are being backfilled.
  const index = Number(faq.sort_order);
  const catalog = typeof translations !== 'undefined' ? translations : null;
  const englishCatalogQuestion = catalog?.en?.['faq_q' + index];
  const isCatalogFaq = englishCatalogQuestion && faq.question === englishCatalogQuestion;
  if ((!question || !answer) && isCatalogFaq) {
    const localizedCatalog = catalog[lang] || catalog.en;
    question = question || localizedCatalog?.['faq_q' + index];
    answer = answer || localizedCatalog?.['faq_a' + index];
  }

  return {
    question: question || faq.question_zh || faq.question || '',
    answer: answer || faq.answer_zh || faq.answer || ''
  };
}

async function fetchAllFaqsAdmin() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('faqs')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) { console.error('Error fetching FAQs admin:', error); return []; }
  return data;
}

async function upsertFaq(faq) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  faq.updated_at = new Date().toISOString();
  return await sb.from('faqs').upsert(faq, { onConflict: 'id' }).select();
}

async function deleteFaq(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('faqs').delete().eq('id', id);
}

// ============================================================
// Storage API (Image Upload)
// ============================================================

async function uploadProductImage(file) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };

  // Validate image type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    return { error: 'Unsupported image format. Use JPEG, PNG, WebP, or GIF.' };
  }
  // Max 5MB
  if (file.size > 5 * 1024 * 1024) {
    return { error: 'Image too large. Maximum 5MB.' };
  }

  const ext = file.name.split('.').pop() || 'jpg';
  const fileName = `products/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;

  const { data, error } = await sb.storage
    .from('tomachef-assets')
    .upload(fileName, file, {
      cacheControl: '31536000',
      upsert: false
    });

  if (error) return { error };

  const { data: publicUrlData } = sb.storage
    .from('tomachef-assets')
    .getPublicUrl(fileName);

  return { url: publicUrlData.publicUrl };
}

async function uploadRecipeImage(file) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };

  // Generate unique filename
  const ext = file.name.split('.').pop() || 'jpg';
  const fileName = `recipes/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;

  const { data, error } = await sb.storage
    .from('tomachef-assets')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) return { error };

  // Get public URL
  const { data: publicUrlData } = sb.storage
    .from('tomachef-assets')
    .getPublicUrl(fileName);

  return { url: publicUrlData.publicUrl };
}

async function deleteRecipeImage(imageUrl) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };

  // Extract path from URL
  try {
    const url = new URL(imageUrl);
    const pathMatch = url.pathname.match(/\/tomachef-assets\/(.+)$/);
    if (!pathMatch) return { error: 'Invalid image URL' };

    const { error } = await sb.storage
      .from('tomachef-assets')
      .remove([pathMatch[1]]);

    if (error) return { error };
    return { success: true };
  } catch (e) {
    return { error: 'Failed to parse image URL' };
  }
}

// ============================================================
// Product Videos API
// ============================================================

async function fetchProductVideos(productId) {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb
    .from('product_videos')
    .select('*')
    .eq('product_id', productId)
    .order('sort_order', { ascending: true });
  if (error) { console.error('Error fetching videos:', error); return []; }
  return data;
}

async function upsertProductVideo(video) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('product_videos').upsert(video, { onConflict: 'id' }).select();
}

async function deleteProductVideo(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('product_videos').delete().eq('id', id);
}

async function uploadProductVideo(file, onProgress) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };

  const ext = file.name.split('.').pop() || 'mp4';
  const fileName = `videos/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;

  const { data, error } = await sb.storage
    .from('tomachef-assets')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) return { error };

  const { data: publicUrlData } = sb.storage
    .from('tomachef-assets')
    .getPublicUrl(fileName);

  return { url: publicUrlData.publicUrl };
}

// ============================================================
// Init on load
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
});
