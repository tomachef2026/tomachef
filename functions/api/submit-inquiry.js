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
  const url = `${env.SUPABASE_URL}/rest/v1/${table}`;
  const res = await fetch(url, {
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

export async function onRequestPost({ request, env }) {
  try {
    if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
      return jsonResponse({ error: 'Server is not configured.' }, 500);
    }

    const payload = await request.json();
    const verification = await verifyRecaptcha(
      payload.recaptchaToken,
      env.RECAPTCHA_SECRET_KEY,
      request.headers.get('CF-Connecting-IP')
    );

    if (!verification.success) {
      return jsonResponse({ error: 'Verification failed.' }, 403);
    }

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
  } catch (error) {
    return jsonResponse({ error: error.message || 'Submission failed.' }, 500);
  }
}
