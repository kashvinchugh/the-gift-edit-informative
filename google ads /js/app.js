/**
 * THE GIFT EDIT — GOOGLE ADS INTERACTIVE APPLICATION ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  initIntentEngine();
  initOccasionCards();
  initProductCatalog();
  initJewelleryAndAccessories();
  initGiftHampers();
  initBudgetFilters();
  initPersonalizationStudio();
  initBuildBoxWizard();
  initModals();
  initFaqAccordion();
  initMobileNav();
});

// Official WhatsApp Business placeholder (change to your genuine number)
const BRAND_WHATSAPP = '919876543210'; 

function createWhatsAppLink(message) {
  return `https://wa.me/${BRAND_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/* ==========================================================================
   1. DYNAMIC INTENT ENGINE (GOOGLE ADS AD GROUP ROUTING)
   ========================================================================== */
let currentAdGroup = 'default';

function initIntentEngine() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramGroup = urlParams.get('ad_group') || urlParams.get('utm_campaign') || urlParams.get('occasion') || 'default';
  
  const normalizedGroup = paramGroup.toLowerCase().replace(/[^a-z0-9-]/g, '');
  if (AD_GROUP_INTENTS[normalizedGroup]) {
    setAdGroupIntent(normalizedGroup, false);
  } else {
    setAdGroupIntent('default', false);
  }

  // Bind interactive switcher chips
  const chips = document.querySelectorAll('.intent-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const targetGroup = chip.dataset.intent;
      setAdGroupIntent(targetGroup, true);
    });
  });
}

function setAdGroupIntent(intentKey, updateHistory = true) {
  currentAdGroup = intentKey;
  const intentData = AD_GROUP_INTENTS[intentKey] || AD_GROUP_INTENTS.default;

  // Update hero elements
  const heroBadge = document.getElementById('hero-badge');
  const heroHeadline = document.getElementById('hero-headline');
  const heroSubtext = document.getElementById('hero-subtext');
  const heroSupportingLine = document.getElementById('hero-supporting-line');
  const heroPrimaryCta = document.getElementById('hero-primary-cta');
  const heroSecondaryCta = document.getElementById('hero-secondary-cta');

  if (heroBadge) heroBadge.textContent = intentData.heroBadge;
  if (heroHeadline) heroHeadline.innerHTML = intentData.headline.replace(/\./g, '. <br><span class="italic font-normal" style="color: var(--color-dusty-rose-dark)">Made With Love.</span>');
  if (heroSubtext) heroSubtext.textContent = intentData.subtext;
  if (heroSupportingLine) heroSupportingLine.textContent = intentData.supportingLine;
  if (heroPrimaryCta) heroPrimaryCta.textContent = intentData.primaryCta;
  if (heroSecondaryCta) heroSecondaryCta.textContent = intentData.secondaryCta;

  // Update chip active classes
  const chips = document.querySelectorAll('.intent-chip');
  chips.forEach(chip => {
    if (chip.dataset.intent === intentKey) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  // Filter or highlight products
  if (intentData.activeOccasion && intentData.activeOccasion !== 'all') {
    filterProductsByOccasion(intentData.activeOccasion);
  } else {
    filterProductsByBudget('all');
  }

  // Update browser URL without reload if requested
  if (updateHistory && window.history.pushState) {
    const newUrl = intentKey === 'default' 
      ? window.location.pathname 
      : `${window.location.pathname}?ad_group=${intentKey}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  }

  if (window.Analytics) {
    window.Analytics.trackConversionEvent('intent_switch', { intent: intentKey });
  }
}

/* ==========================================================================
   2. OCCASION CARDS (SECTION 3)
   ========================================================================== */
function initOccasionCards() {
  const container = document.getElementById('occasion-cards-grid');
  if (!container) return;

  container.innerHTML = OCCASIONS_DATA.map(occ => `
    <div class="occasion-card">
      <div class="occasion-image-wrap">
        <img src="${occ.image}" alt="${occ.title} - The Gift Edit" loading="lazy">
        <span class="pill-badge pill-badge-burgundy" style="position: absolute; top: 12px; left: 12px; font-size: 0.68rem;">
          ${occ.title}
        </span>
      </div>
      <div style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
        <div>
          <h3 style="font-size: 1.35rem; color: var(--color-burgundy); margin-bottom: 6px;">${occ.title}</h3>
          <p style="font-size: 0.8rem; font-weight: 600; color: var(--color-dusty-rose-dark); margin-bottom: 8px;">${occ.tagline}</p>
          <p style="font-size: 0.825rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 16px;">${occ.description}</p>
        </div>
        <div style="padding-top: 14px; border-top: 1px solid var(--color-border-subtle); display: flex; align-items: center; justify-content: space-between;">
          <a href="${occ.slug}" class="btn-secondary btn-sm" onclick="handleOccasionClick(event, '${occ.id}', '${occ.title}', '${occ.slug}')">
            ${occ.ctaText} →
          </a>
          <button type="button" class="btn-sm" style="color: var(--color-burgundy); font-weight: 600; font-size: 0.75rem;" onclick="filterProductsByOccasion('${occ.id}')">
            Filter Below
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function handleOccasionClick(e, occId, occTitle, slug) {
  if (window.Analytics) {
    window.Analytics.trackSelectOccasion(occId, occTitle);
  }
}

/* ==========================================================================
   3. PRODUCT CATALOGUE & BUDGET FILTERS (SECTION 7)
   ========================================================================== */
let activeBudgetFilter = 'all';

function initProductCatalog() {
  renderProductGrid(PRODUCTS_DATA);
}

function renderProductGrid(productsToRender) {
  const container = document.getElementById('products-grid');
  const countBadge = document.getElementById('products-count');
  if (!container) return;

  if (countBadge) {
    countBadge.textContent = `${productsToRender.length} Gifts Available`;
  }

  if (productsToRender.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #FFFFFF; border-radius: var(--radius-lg); border: 1px dashed var(--color-border-subtle);">
        <p style="font-size: 1.1rem; color: var(--color-burgundy); font-weight: 600;">No items found in this exact filter.</p>
        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 6px;">Try switching to "All Budgets" or contact us to build a custom box for your budget.</p>
        <button class="btn-primary btn-sm" style="margin-top: 16px;" onclick="filterProductsByBudget('all')">View All Gifts</button>
      </div>
    `;
    return;
  }

  container.innerHTML = productsToRender.map(prod => `
    <div class="product-card" id="card-${prod.id}">
      <div class="product-image-wrap">
        <img src="${prod.primaryImage}" alt="${prod.name} - The Gift Edit" loading="lazy">
        ${prod.badge ? `
          <span class="pill-badge ${prod.badgeType === 'olive' ? 'pill-badge-olive' : 'pill-badge-burgundy'}" style="position: absolute; top: 12px; left: 12px;">
            ${prod.badge}
          </span>
        ` : ''}
        ${prod.discountPercent ? `
          <span style="position: absolute; bottom: 10px; right: 10px; background: rgba(255,255,255,0.92); color: var(--color-burgundy); padding: 3px 8px; border-radius: 6px; font-size: 0.725rem; font-weight: 700; border: 1px solid var(--color-border-subtle);">
            ${prod.discountPercent}% OFF
          </span>
        ` : ''}
      </div>

      <div style="padding: 22px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-size: 0.725rem; text-transform: uppercase; font-weight: 600; color: var(--color-dusty-rose-dark); letter-spacing: 0.05em;">
              ${prod.category}
            </span>
            <div class="rating-stars" title="${prod.rating} out of 5 stars">
              ★ ${prod.rating} <span style="color: var(--color-text-muted); font-size: 0.75rem;">(${prod.reviewCount})</span>
            </div>
          </div>

          <h3 style="font-size: 1.15rem; color: var(--color-burgundy); margin-bottom: 6px; line-height: 1.3;">
            ${prod.name}
          </h3>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 14px;">
            ${prod.subtitle}
          </p>
        </div>

        <div>
          <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px;">
            <span style="font-size: 1.35rem; font-weight: 700; color: var(--color-burgundy);">
              ₹${prod.price.toLocaleString('en-IN')}
            </span>
            ${prod.compareAtPrice ? `
              <span style="font-size: 0.9rem; color: var(--color-text-muted); text-decoration: line-through;">
                ₹${prod.compareAtPrice.toLocaleString('en-IN')}
              </span>
            ` : ''}
            <span style="font-size: 0.725rem; color: var(--color-olive-green); font-weight: 600; margin-left: auto;">
              ✓ Dispatched in 24-48h
            </span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <button type="button" class="btn-secondary btn-sm" onclick="openProductModal('${prod.id}')">
              Quick View
            </button>
            <a href="${createWhatsAppLink(`Hi The Gift Edit! I found the "${prod.name}" (₹${prod.price}) on your Google Ads page and would like to order/enquire.`)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-whatsapp btn-sm"
               onclick="window.Analytics && window.Analytics.trackWhatsAppClick('${prod.name}', ${prod.price}, 'catalog_grid')">
              Order WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initBudgetFilters() {
  const tabs = document.querySelectorAll('.budget-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tier = tab.dataset.tier;
      filterProductsByBudget(tier);
    });
  });
}

function filterProductsByBudget(tier) {
  activeBudgetFilter = tier;
  if (window.Analytics) {
    window.Analytics.trackBudgetFilter(tier);
  }

  let filtered = [];
  if (tier === 'all') {
    filtered = PRODUCTS_DATA;
  } else if (tier === 'under-300') {
    // Verified catalogue transparency: Brand offers add-ons and cards starting at ₹349 minimum for full sets
    filtered = PRODUCTS_DATA.filter(p => p.price <= 349);
  } else if (tier === 'under-500') {
    filtered = PRODUCTS_DATA.filter(p => p.price <= 500);
  } else if (tier === 'under-700') {
    filtered = PRODUCTS_DATA.filter(p => p.price <= 700);
  } else if (tier === 'under-1000') {
    filtered = PRODUCTS_DATA.filter(p => p.price <= 1000);
  } else if (tier === 'luxury') {
    filtered = PRODUCTS_DATA.filter(p => p.budgetTier === 'luxury' || p.price > 1000);
  }

  renderProductGrid(filtered);
}

function filterProductsByOccasion(occasionKey) {
  const filtered = PRODUCTS_DATA.filter(p => p.occasions && p.occasions.includes(occasionKey));
  renderProductGrid(filtered);
  
  // Smooth scroll to catalog section
  const section = document.getElementById('catalog-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   4. JEWELLERY & ACCESSORIES (SECTION 6)
   Strict Rule: Hair accessories are categorized as Accessories, NOT Jewellery
   ========================================================================== */
function initJewelleryAndAccessories() {
  const jewelleryContainer = document.getElementById('jewellery-grid');
  const accessoriesContainer = document.getElementById('accessories-grid');

  const jewelleryItems = PRODUCTS_DATA.filter(p => p.isJewellery);
  const accessoryItems = PRODUCTS_DATA.filter(p => p.isAccessory);

  if (jewelleryContainer) {
    jewelleryContainer.innerHTML = jewelleryItems.map(prod => createMiniCard(prod)).join('');
  }

  if (accessoriesContainer) {
    accessoriesContainer.innerHTML = accessoryItems.map(prod => createMiniCard(prod)).join('');
  }
}

function createMiniCard(prod) {
  return `
    <div class="surface-card" style="padding: 16px; display: flex; gap: 16px; align-items: center;">
      <div style="width: 80px; height: 80px; border-radius: var(--radius-md); overflow: hidden; flex-shrink: 0; background: var(--color-soft-cream);">
        <img src="${prod.primaryImage}" alt="${prod.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
      </div>
      <div style="flex-grow: 1;">
        <span style="font-size: 0.675rem; text-transform: uppercase; font-weight: 700; color: var(--color-dusty-rose-dark);">
          ${prod.category}
        </span>
        <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-burgundy); margin: 2px 0 4px 0; line-height: 1.25;">
          ${prod.name}
        </h4>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 1.05rem; font-weight: 700; color: var(--color-burgundy);">₹${prod.price}</span>
          <button class="btn-secondary btn-sm" onclick="openProductModal('${prod.id}')" style="padding: 5px 12px; font-size: 0.7rem;">
            View
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   5. GIFT HAMPERS (SECTION 5)
   ========================================================================== */
function initGiftHampers() {
  const container = document.getElementById('hampers-grid');
  if (!container) return;

  const hampers = PRODUCTS_DATA.filter(p => p.isHamper);
  container.innerHTML = hampers.map(hamper => `
    <div class="surface-card" style="overflow: hidden; display: flex; flex-direction: column;">
      <div style="position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden;">
        <img src="${hamper.primaryImage}" alt="${hamper.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
        <span class="pill-badge pill-badge-burgundy" style="position: absolute; top: 12px; left: 12px;">
          ${hamper.badge || 'CURATED HAMPER'}
        </span>
      </div>
      <div style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
        <div>
          <h3 style="font-size: 1.25rem; color: var(--color-burgundy); margin-bottom: 6px;">${hamper.name}</h3>
          <p style="font-size: 0.825rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 12px;">${hamper.shortDescription}</p>
          
          <ul style="list-style: none; padding: 0; margin-bottom: 16px;">
            ${hamper.features.slice(0, 3).map(f => `
              <li style="font-size: 0.775rem; color: var(--color-burgundy); margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                <span style="color: var(--color-olive-green); font-weight: 700;">✓</span> ${f}
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid var(--color-border-subtle);">
          <div>
            <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--color-text-muted); display: block;">All-Inclusive</span>
            <span style="font-size: 1.35rem; font-weight: 700; color: var(--color-burgundy);">₹${hamper.price}</span>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-secondary btn-sm" onclick="openProductModal('${hamper.id}')">Details</button>
            <a href="${createWhatsAppLink(`Hi The Gift Edit, I'm interested in the "${hamper.name}" (₹${hamper.price}). Could you confirm current dispatch timing?`)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-whatsapp btn-sm"
               onclick="window.Analytics && window.Analytics.trackWhatsAppClick('${hamper.name}', ${hamper.price}, 'hampers_section')">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. INTERACTIVE PERSONALIZATION STUDIO (SECTION 4)
   ========================================================================== */
function initPersonalizationStudio() {
  // Initial Pendant Live Preview
  const initial1Select = document.getElementById('initial-1-select');
  const initial2Select = document.getElementById('initial-2-select');
  const letter1Display = document.getElementById('gold-letter-1');
  const letter2Display = document.getElementById('gold-letter-2');
  const pendantWhatsAppBtn = document.getElementById('pendant-whatsapp-btn');

  function updatePendantPreview() {
    const l1 = initial1Select ? initial1Select.value : 'A';
    const l2 = initial2Select ? initial2Select.value : 'K';
    if (letter1Display) letter1Display.textContent = l1;
    if (letter2Display) letter2Display.textContent = l2;

    if (pendantWhatsAppBtn) {
      const msg = `Hi The Gift Edit! I'd like to order the Personalized Initial Drop Pendant (₹499) with Initials: "${l1}" and "${l2}".`;
      pendantWhatsAppBtn.href = createWhatsAppLink(msg);
    }
  }

  if (initial1Select && initial2Select) {
    initial1Select.addEventListener('change', updatePendantPreview);
    initial2Select.addEventListener('change', updatePendantPreview);
  }

  // Spotify Frame Live Preview
  const songInput = document.getElementById('spotify-song-input');
  const artistInput = document.getElementById('spotify-artist-input');
  const quoteInput = document.getElementById('spotify-quote-input');
  const songDisplay = document.getElementById('spotify-song-display');
  const artistDisplay = document.getElementById('spotify-artist-display');
  const quoteDisplay = document.getElementById('spotify-quote-display');
  const frameWhatsAppBtn = document.getElementById('frame-whatsapp-btn');

  function updateSpotifyPreview() {
    const song = songInput && songInput.value ? songInput.value : 'Better Together';
    const artist = artistInput && artistInput.value ? artistInput.value : 'Jack Johnson';
    const quote = quoteInput && quoteInput.value ? quoteInput.value : 'Same chaos, different days, still my favourite person ♡';

    if (songDisplay) songDisplay.textContent = song;
    if (artistDisplay) artistDisplay.textContent = artist;
    if (quoteDisplay) quoteDisplay.textContent = quote;

    if (frameWhatsAppBtn) {
      const msg = `Hi The Gift Edit! I'd like to order the Spotify Wooden Memory Frame (₹699) with:\n- Song: ${song}\n- Artist: ${artist}\n- Dedication: "${quote}"`;
      frameWhatsAppBtn.href = createWhatsAppLink(msg);
    }
  }

  if (songInput) songInput.addEventListener('input', updateSpotifyPreview);
  if (artistInput) artistInput.addEventListener('input', updateSpotifyPreview);
  if (quoteInput) quoteInput.addEventListener('input', updateSpotifyPreview);
}

/* ==========================================================================
   7. "BUILD YOUR OWN GIFT BOX" WIZARD (SECTION 5 MODAL)
   ========================================================================== */
const BUILD_BOX_ITEMS = [
  { id: 'bb-pendant', name: 'Personalized Initial Pendant', price: 499, category: 'Jewellery' },
  { id: 'bb-scrunchie', name: 'Mulberry Silk Scrunchie & Daisy Clip Set', price: 349, category: 'Accessories' },
  { id: 'bb-jhumka', name: 'Pastel Enamel Dainty Jhumka Duo', price: 449, category: 'Jewellery' },
  { id: 'bb-frame', name: 'Spotify Wooden Memory Frame', price: 699, category: 'Personalised' },
  { id: 'bb-chocolates', name: 'Ferrero Rocher & KitKat Treat Trio', price: 299, category: 'Treats' },
  { id: 'bb-candle', name: 'Scented Vanilla Soy Wax Candle', price: 399, category: 'Self-Care' }
];

let buildBoxState = {
  boxTheme: 'Luxury Blush Ribbon Box (₹150)',
  boxBasePrice: 150,
  selectedItems: ['bb-pendant', 'bb-scrunchie'],
  recipientName: '',
  giftNote: ''
};

function initBuildBoxWizard() {
  const container = document.getElementById('build-box-items-list');
  if (!container) return;

  container.innerHTML = BUILD_BOX_ITEMS.map(item => `
    <label style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); margin-bottom: 8px; cursor: pointer; transition: background 0.15s ease;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <input type="checkbox" value="${item.id}" class="build-box-checkbox" ${buildBoxState.selectedItems.includes(item.id) ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-burgundy);">
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: var(--color-burgundy);">${item.name}</span>
          <span style="font-size: 0.725rem; color: var(--color-dusty-rose-dark); display: block;">${item.category}</span>
        </div>
      </div>
      <span style="font-weight: 700; color: var(--color-burgundy); font-size: 0.95rem;">+₹${item.price}</span>
    </label>
  `).join('');

  // Attach change listeners
  const checkboxes = container.querySelectorAll('.build-box-checkbox');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        if (!buildBoxState.selectedItems.includes(cb.value)) {
          buildBoxState.selectedItems.push(cb.value);
        }
      } else {
        buildBoxState.selectedItems = buildBoxState.selectedItems.filter(id => id !== cb.value);
      }
      updateBuildBoxCalculations();
    });
  });

  const boxThemeSelect = document.getElementById('build-box-theme-select');
  if (boxThemeSelect) {
    boxThemeSelect.addEventListener('change', () => {
      buildBoxState.boxTheme = boxThemeSelect.value;
      updateBuildBoxCalculations();
    });
  }

  const recipientInput = document.getElementById('build-box-recipient');
  if (recipientInput) {
    recipientInput.addEventListener('input', () => {
      buildBoxState.recipientName = recipientInput.value;
      updateBuildBoxCalculations();
    });
  }

  const noteInput = document.getElementById('build-box-note');
  if (noteInput) {
    noteInput.addEventListener('input', () => {
      buildBoxState.giftNote = noteInput.value;
      updateBuildBoxCalculations();
    });
  }

  updateBuildBoxCalculations();
}

function updateBuildBoxCalculations() {
  let itemsTotal = 0;
  const chosenNames = [];

  buildBoxState.selectedItems.forEach(id => {
    const it = BUILD_BOX_ITEMS.find(item => item.id === id);
    if (it) {
      itemsTotal += it.price;
      chosenNames.push(it.name);
    }
  });

  const grandTotal = itemsTotal + buildBoxState.boxBasePrice;
  const totalDisplay = document.getElementById('build-box-total');
  const itemsCountDisplay = document.getElementById('build-box-count');
  const finishBtn = document.getElementById('build-box-whatsapp-btn');

  if (totalDisplay) totalDisplay.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (itemsCountDisplay) itemsCountDisplay.textContent = `${buildBoxState.selectedItems.length} items`;

  if (finishBtn) {
    const msg = `Hi The Gift Edit! I built a custom gift box on your website:
- Packaging: ${buildBoxState.boxTheme}
- Items Selected (${buildBoxState.selectedItems.length}):
${chosenNames.map(n => `  • ${n}`).join('\n')}
- Recipient Name: ${buildBoxState.recipientName || '(To be provided)'}
- Handwritten Note: "${buildBoxState.giftNote || 'Happy Celebrating!'}"
- Estimated Total: ₹${grandTotal}

Could you confirm dispatch details and next steps?`;
    finishBtn.href = createWhatsAppLink(msg);
  }
}

function openBuildBoxModal() {
  const modal = document.getElementById('build-box-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBuildBoxModal() {
  const modal = document.getElementById('build-box-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   8. MODALS (PRODUCT DETAIL & QUICK ENQUIRY)
   ========================================================================== */
function initModals() {
  // Backdrop click to close
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close buttons
  const closeBtns = document.querySelectorAll('.modal-close-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-modal-dynamic-content');
  if (!modal || !content) return;

  if (window.Analytics) {
    window.Analytics.trackViewItem(product);
  }

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
      <div style="width: 100%; aspect-ratio: 4 / 3; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-soft-cream);">
        <img src="${product.primaryImage}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span class="pill-badge pill-badge-olive">${product.category}</span>
          <span style="font-weight: 700; color: var(--color-burgundy); font-size: 1.4rem;">
            ₹${product.price.toLocaleString('en-IN')}
            ${product.compareAtPrice ? `<span style="font-size: 0.95rem; color: var(--color-text-muted); text-decoration: line-through; font-weight: normal; margin-left: 6px;">₹${product.compareAtPrice}</span>` : ''}
          </span>
        </div>

        <h2 style="font-size: 1.6rem; color: var(--color-burgundy); margin-bottom: 6px;">${product.name}</h2>
        <p style="font-size: 0.875rem; color: var(--color-dusty-rose-dark); font-weight: 600; margin-bottom: 14px;">${product.subtitle}</p>

        <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 18px;">
          ${product.description}
        </p>

        <div style="background: var(--color-soft-cream-light); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px; border: 1px solid var(--color-border-subtle);">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-burgundy); font-weight: 700; margin-bottom: 6px;">Verified Specifications</h4>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 4px;"><strong>Material:</strong> ${product.material}</p>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 4px;"><strong>Packaging:</strong> ${product.packaging}</p>
          <p style="font-size: 0.8rem; color: var(--color-olive-green); font-weight: 600;"><strong>Dispatch:</strong> ${product.shippingTime}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="${createWhatsAppLink(`Hi The Gift Edit! I'd like to order "${product.name}" (₹${product.price}).`)}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn-whatsapp"
             onclick="window.Analytics && window.Analytics.trackWhatsAppClick('${product.name}', ${product.price}, 'quick_view_modal')">
            <span>Order Instantly on WhatsApp</span>
          </a>
          <button type="button" class="btn-secondary" onclick="openEnquiryModal('${product.name}')">
            Submit Custom Enquiry Form
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openEnquiryModal(productName = '') {
  // Close detail modal if open
  const detailModal = document.getElementById('product-detail-modal');
  if (detailModal) detailModal.classList.remove('active');

  const enquiryModal = document.getElementById('enquiry-modal');
  const productInput = document.getElementById('enquiry-product-name');
  if (productInput) productInput.value = productName;

  if (enquiryModal) {
    enquiryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function handleEnquirySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.elements['name'] ? form.elements['name'].value : '';
  const phone = form.elements['phone'] ? form.elements['phone'].value : '';
  const product = form.elements['product'] ? form.elements['product'].value : '';
  const message = form.elements['message'] ? form.elements['message'].value : '';

  if (window.Analytics) {
    window.Analytics.trackEnquirySubmission(product, phone, message);
  }

  // Pre-fill and redirect to WhatsApp for instant closure
  const waMsg = `Hi The Gift Edit! Here is my gifting enquiry:
- Name: ${name}
- Phone: ${phone}
- Gift / Interest: ${product || 'General Recommendation'}
- Message: ${message}`;

  window.open(createWhatsAppLink(waMsg), '_blank');

  const enquiryModal = document.getElementById('enquiry-modal');
  if (enquiryModal) {
    enquiryModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  alert('Thank you! We have opened WhatsApp to connect with our gifting concierge directly.');
}

/* ==========================================================================
   9. FAQ ACCORDION (SECTION 10)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Collapse all others
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   10. MOBILE NAVIGATION & STICKY BAR
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', () => {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

// Global exposes for inline HTML calls
window.openProductModal = openProductModal;
window.openEnquiryModal = openEnquiryModal;
window.openBuildBoxModal = openBuildBoxModal;
window.closeBuildBoxModal = closeBuildBoxModal;
window.filterProductsByBudget = filterProductsByBudget;
window.filterProductsByOccasion = filterProductsByOccasion;
window.handleEnquirySubmit = handleEnquirySubmit;
