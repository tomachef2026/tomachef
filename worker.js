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

      return env.ASSETS.fetch(request);
    } catch (error) {
      return jsonResponse({ error: error.message || 'Server error.' }, 500);
    }
  }
};
