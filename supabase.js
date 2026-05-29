/* ============================================================
   TomaChef Supabase Client Configuration
   ============================================================ */

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

async function fetchProducts(category = null, lang = 'en') {
  const sb = initSupabase();
  if (!sb) return [];

  let query = sb.from('products').select('*').eq('active', true);

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  query = query.order('sort_order', { ascending: true });

  const { data, error } = await query;
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  // Return raw data — localization is handled by getLocalizedName/getLocalizedDesc at render time
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
  return await sb.from('products').insert(product).select();
}

async function updateProduct(id, updates) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('products').update(updates).eq('id', id).select();
}

async function deleteProduct(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('products').delete().eq('id', id);
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
  return await sb.from('site_settings').upsert(
    { key, value, updated_at: new Date().toISOString() },
    { onConflict: 'key' }
  );
}

async function getNotificationEmail() {
  const settings = await fetchSiteSettings();
  return settings['notification_email'] || '';
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
  return await sb.from('contact_info').upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: 'key' });
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

async function fetchRecipes(category = null) {
  const sb = initSupabase();
  if (!sb) return [];
  let query = sb.from('recipes').select('*').eq('is_active', true);
  if (category && category !== 'all') query = query.eq('category', category);
  query = query.order('display_order', { ascending: true });
  const { data, error } = await query;
  if (error) { console.error('Error fetching recipes:', error); return []; }
  return data;
}

async function fetchAllRecipesAdmin() {
  const sb = initSupabase();
  if (!sb) return [];
  const { data, error } = await sb.from('recipes').select('*').order('display_order', { ascending: true });
  if (error) { console.error('Error fetching recipes admin:', error); return []; }
  return data;
}

async function upsertRecipe(recipe) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  recipe.updated_at = new Date().toISOString();
  return await sb.from('recipes').upsert(recipe, { onConflict: 'id' }).select();
}

async function deleteRecipe(id) {
  const sb = initSupabase();
  if (!sb) return { error: 'Supabase not initialized' };
  return await sb.from('recipes').delete().eq('id', id);
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
  return {
    question: faq[qKey] || faq.question,
    answer: faq[aKey] || faq.answer
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
