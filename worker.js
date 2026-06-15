const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}

function sanitizeText(value, maxLength = 1000) {
  return String(value || '').trim().slice(0, maxLength);
}

async function verifyRecaptcha(token, secret, remoteIp) {
  if (!secret) return { success: false, message: 'Missing RECAPTCHA_SECRET_KEY' };
  if (!token) return { success: false, message: 'Missing verification token' };

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  if (remoteIp) body.set('remoteip', remoteIp);

  const res = await fetch(RECAPTCHA_VERIFY_URL, {
    method: 'POST',
    body
  });

  return res.json();
}

async function insertSupabase(env, table, row) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(row)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Supabase insert failed: ${res.status}`);
  }
}

async function requireAdminAuth(request, env) {
  const authorization = request.headers.get('Authorization') || '';
  if (!authorization.startsWith('Bearer ')) {
    return jsonResponse({ error: 'Authentication required.' }, 401);
  }

  const response = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
    headers: {
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: authorization
    }
  });

  if (!response.ok) {
    return jsonResponse({ error: 'Invalid or expired session.' }, 401);
  }

  return null;
}

function getTranslatedText(result) {
  if (typeof result === 'string') return result.trim();
  return String(
    result?.translated_text ||
    result?.translation ||
    result?.response ||
    ''
  ).trim();
}

async function translateText(env, text, targetLang) {
  const result = await env.AI.run('@cf/meta/m2m100-1.2b', {
    text,
    source_lang: 'zh',
    target_lang: targetLang
  });
  const translated = getTranslatedText(result);
  if (!translated) {
    throw new Error(`Translation returned no text for ${targetLang}.`);
  }
  return translated;
}

async function handleTranslateFaq(request, env) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405);
  }
  if (!env.AI) {
    return jsonResponse({ error: 'Translation service is not configured.' }, 500);
  }

  const authError = await requireAdminAuth(request, env);
  if (authError) return authError;

  const payload = await request.json();
  const questionZh = sanitizeText(payload.question_zh, 1000);
  const answerZh = sanitizeText(payload.answer_zh, 6000);
  if (!questionZh || !answerZh) {
    return jsonResponse({ error: 'Chinese question and answer are required.' }, 400);
  }

  const targets = [
    ['en', 'question', 'answer'],
    ['es', 'question_es', 'answer_es'],
    ['fr', 'question_fr', 'answer_fr'],
    ['ja', 'question_ja', 'answer_ja'],
    ['pt', 'question_pt', 'answer_pt']
  ];

  const translatedPairs = await Promise.all(targets.map(async ([lang, questionKey, answerKey]) => {
    const [question, answer] = await Promise.all([
      translateText(env, questionZh, lang),
      translateText(env, answerZh, lang)
    ]);
    return { [questionKey]: question, [answerKey]: answer };
  }));

  return jsonResponse(Object.assign({}, ...translatedPairs));
}

async function requireVerifiedRequest(request, env) {
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return { error: jsonResponse({ error: 'Server is not configured.' }, 500) };
  }

  let payload = {};
  try {
    payload = await request.json();
  } catch (error) {
    return { error: jsonResponse({ error: 'Invalid request body.' }, 400) };
  }

  const verification = await verifyRecaptcha(
    payload.recaptchaToken,
    env.RECAPTCHA_SECRET_KEY,
    request.headers.get('CF-Connecting-IP')
  );

  if (!verification.success) {
    return { error: jsonResponse({ error: 'Verification failed.' }, 403) };
  }

  return { payload };
}

async function handleSubmitInquiry(request, env) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405);
  }

  const { payload, error } = await requireVerifiedRequest(request, env);
  if (error) return error;

  const row = {
    name: sanitizeText(payload.name, 120),
    email: sanitizeText(payload.email, 180),
    phone: sanitizeText(payload.phone, 80),
    company: sanitizeText(payload.company, 180),
    product_interest: sanitizeText(payload.product_interest, 120),
    message: sanitizeText(payload.message, 3000)
  };

  if (!row.name || !row.email || !row.message) {
    return jsonResponse({ error: 'Missing required fields.' }, 400);
  }

  await insertSupabase(env, 'inquiries', row);
  return jsonResponse({ ok: true });
}

async function handleSubmitOrder(request, env) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405);
  }

  const { payload, error } = await requireVerifiedRequest(request, env);
  if (error) return error;

  const quantity = Number.parseInt(payload.quantity, 10);
  const row = {
    product_id: sanitizeText(payload.product_id, 80),
    product_name: sanitizeText(payload.product_name, 240),
    quantity: Number.isFinite(quantity) ? quantity : 100,
    notes: sanitizeText(payload.notes, 3000),
    name: sanitizeText(payload.name, 120),
    email: sanitizeText(payload.email, 180),
    company: sanitizeText(payload.company, 180),
    phone: sanitizeText(payload.phone, 80)
  };

  if (!row.name || !row.email) {
    return jsonResponse({ error: 'Missing required fields.' }, 400);
  }

  await insertSupabase(env, 'orders', row);
  return jsonResponse({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    try {
      if (url.pathname === '/api/submit-inquiry') {
        return handleSubmitInquiry(request, env);
      }

      if (url.pathname === '/api/submit-order') {
        return handleSubmitOrder(request, env);
      }

      if (url.pathname === '/api/translate-faq') {
        return handleTranslateFaq(request, env);
      }

      return env.ASSETS.fetch(request);
    } catch (error) {
      return jsonResponse({ error: error.message || 'Server error.' }, 500);
    }
  }
};
