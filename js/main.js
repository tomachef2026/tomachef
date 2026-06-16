/* ============================================================
   TomaChef - Main JavaScript
   Navbar scroll, animations, contact form, smooth scroll
   ============================================================ */

function getProtectedImageUrl(url) {
  const raw = String(url || '').trim();
  if (!raw || raw.startsWith('data:') || raw.startsWith('blob:')) return raw;

  try {
    const parsed = new URL(raw, window.location.origin);
    const isSupabaseAsset = parsed.origin === 'https://jtrhzphdttralmvdhtva.supabase.co' &&
      parsed.pathname.startsWith('/storage/v1/object/public/tomachef-assets/');

    const canUseImageProxy = /(^|\.)tomachefappliance\.com$/i.test(window.location.hostname);
    if (isSupabaseAsset && canUseImageProxy) {
      return '/protected-image?src=' + encodeURIComponent(parsed.href);
    }

    return raw;
  } catch (error) {
    return raw;
  }
}

window.getProtectedImageUrl = getProtectedImageUrl;

function protectDisplayedImages(root = document) {
  root.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.setAttribute('data-image-protected', 'true');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  protectDisplayedImages();

  const imageObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.tagName === 'IMG') {
          node.setAttribute('draggable', 'false');
          node.setAttribute('data-image-protected', 'true');
        } else {
          protectDisplayedImages(node);
        }
      });
    });
  });
  imageObserver.observe(document.body, { childList: true, subtree: true });

  document.addEventListener('contextmenu', event => {
    if (event.target.closest('img, [data-image-protected="true"]')) {
      event.preventDefault();
    }
  });

  document.addEventListener('dragstart', event => {
    if (event.target.closest('img, [data-image-protected="true"]')) {
      event.preventDefault();
    }
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
      }
    });
  }

  // Active nav link based on current page
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace('./', '').replace('/', ''))) {
      link.classList.add('active');
    } else if (currentPath.endsWith('index.html') && href === './index.html') {
      link.classList.add('active');
    } else if ((currentPath.endsWith('/') || currentPath.endsWith('/tomachef/')) && (href === './index.html' || href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => observer.observe(el));
  }
});

// Show toast notification
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ============================================================
   Navbar Product Search
   ============================================================ */
(function initSearch() {
  const input = document.getElementById('navSearchInput');
  const dropdown = document.getElementById('navSearchResults');
  if (!input || !dropdown) return;

  let debounceTimer;
  let allProducts = [];
  let productsLoadPromise = null;

  // Fetch products only when search is used, so the homepage first paint stays light.
  async function loadProducts() {
    if (allProducts.length > 0) return;
    if (productsLoadPromise) return productsLoadPromise;
    productsLoadPromise = (async () => {
    if (typeof fetchProducts === 'function') {
      const products = await fetchProducts();
      if (Array.isArray(products)) allProducts = products;
    }
    })();
    return productsLoadPromise;
  }

  // Search products
  function searchProducts(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return allProducts.filter(p => {
      const name = (p.name || '').toLowerCase();
      const sku = (p.sku || '').toLowerCase();
      const desc = (p.description || '').toLowerCase();
      return name.includes(q) || sku.includes(q) || desc.includes(q);
    }).slice(0, 8);
  }

  // Category icon map
  const catIcons = { airfryer: '🍟', airfryeroven: '🔥', toaster: '🍞' };

  function renderResults(results) {
    dropdown.innerHTML = '';
    if (results.length === 0) {
      dropdown.innerHTML = '<div class="search-empty">No products found</div>';
    } else {
      results.forEach(p => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
          <span class="search-result-icon">${catIcons[p.category] || '📦'}</span>
          <div>
            <div class="search-result-name">${escapeHtml(p.name)}</div>
            <div class="search-result-cat">${p.sku || p.category}</div>
          </div>`;
        item.addEventListener('click', () => {
          window.location.href = `products.html?search=${encodeURIComponent(p.name)}#section-${p.category}`;
        });
        dropdown.appendChild(item);
      });
    }
    dropdown.classList.add('show');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  input.addEventListener('input', async () => {
    clearTimeout(debounceTimer);
    const q = input.value.trim();
    if (!q) { dropdown.classList.remove('show'); return; }

    debounceTimer = setTimeout(async () => {
      await loadProducts();
      const results = searchProducts(q);
      renderResults(results);
    }, 300);
  });

  input.addEventListener('focus', () => {
    loadProducts();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dropdown.classList.remove('show');
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
    }
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
})();
