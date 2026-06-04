function escapeContactText(value) {
  const div = document.createElement('div');
  div.textContent = value || '';
  return div.innerHTML;
}

function renderContactMultiline(value) {
  return escapeContactText(value).replace(/\n/g, '<br>');
}

async function refreshContactInfo() {
  if (typeof initSupabase !== 'function' || typeof fetchContactInfo !== 'function') return;

  initSupabase();
  const info = await fetchContactInfo();
  if (!info || typeof info !== 'object') return;

  document.querySelectorAll('[data-contact-field]').forEach(el => {
    const key = el.getAttribute('data-contact-field');
    if (!Object.prototype.hasOwnProperty.call(info, key)) return;

    const value = info[key] || '';
    const prefix = el.getAttribute('data-contact-prefix') || '';
    if (key === 'address' || key === 'business_hours') {
      el.innerHTML = value ? prefix + renderContactMultiline(value) : '';
    } else {
      el.textContent = value ? prefix + value : '';
    }
  });
}

document.addEventListener('DOMContentLoaded', refreshContactInfo);
document.addEventListener('langChanged', () => {
  setTimeout(refreshContactInfo, 0);
});
