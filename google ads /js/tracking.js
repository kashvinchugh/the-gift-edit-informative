/**
 * THE GIFT EDIT — GOOGLE ADS & GA4 CONVERSION TRACKING ENGINE
 * 
 * Instructions for Business Owner:
 * Replace 'AW-CONVERSION-ID/LABEL' and 'G-MEASUREMENT-ID' with your official
 * Google Ads Conversion ID and Google Analytics 4 Measurement ID.
 */

const TRACKING_CONFIG = {
  googleAdsId: 'AW-XXXXXXXXX',              // Replace with your Google Ads Account ID (e.g. AW-123456789)
  googleAdsConversionLabel: 'YYYYYYYYYYYY',  // Replace with your Google Ads Conversion Label
  ga4MeasurementId: 'G-XXXXXXXXXX',         // Replace with your GA4 ID (e.g. G-ABC123XYZ)
  debugMode: true                           // Set to false in production to suppress console logs
};

/**
 * Universal Event Dispatcher
 */
function trackConversionEvent(eventName, eventParams = {}) {
  const payload = {
    send_to: `${TRACKING_CONFIG.googleAdsId}/${TRACKING_CONFIG.googleAdsConversionLabel}`,
    timestamp: new Date().toISOString(),
    currency: 'INR',
    ...eventParams
  };

  if (TRACKING_CONFIG.debugMode) {
    console.log(`[Google Ads Tracking] Event fired: "${eventName}"`, payload);
  }

  // Fire gtag if loaded
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  // Fire dataLayer for Google Tag Manager if available
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...payload
    });
  }
}

/**
 * High-Intent Conversion Triggers
 */
const Analytics = {
  // 1. WhatsApp Click (Highest Conversion Intent for Indian E-commerce)
  trackWhatsAppClick: function(productName, price, source = 'product_card') {
    trackConversionEvent('whatsapp_click', {
      event_category: 'Conversion',
      event_label: productName || 'General Inquiry',
      value: price || 0,
      traffic_source: source
    });
  },

  // 2. Enquiry Form Submission
  trackEnquirySubmission: function(productName, customerEmail, customMessage) {
    trackConversionEvent('generate_lead', {
      event_category: 'Lead',
      event_label: productName || 'Custom Request',
      lead_type: 'Enquiry Form'
    });
  },

  // 3. Build Your Own Gift Box Complete
  trackBuildBoxComplete: function(boxItems, totalPrice, recipientName) {
    trackConversionEvent('custom_box_built', {
      event_category: 'Ecommerce',
      event_label: 'Build Your Own Gift Box',
      value: totalPrice,
      item_count: boxItems.length
    });
  },

  // 4. View Product Details (Micro-Conversion)
  trackViewItem: function(product) {
    trackConversionEvent('view_item', {
      event_category: 'Engagement',
      event_label: product.name,
      value: product.price,
      item_id: product.id,
      item_name: product.name,
      item_category: product.category
    });
  },

  // 5. Select Occasion Card
  trackSelectOccasion: function(occasionId, occasionTitle) {
    trackConversionEvent('select_occasion', {
      event_category: 'Navigation',
      event_label: occasionTitle,
      occasion_id: occasionId
    });
  },

  // 6. Filter by Budget
  trackBudgetFilter: function(budgetTier) {
    trackConversionEvent('filter_budget', {
      event_category: 'Navigation',
      event_label: budgetTier
    });
  },

  // 7. Interactive Personalization Preview
  trackPersonalizeInteraction: function(type, details) {
    trackConversionEvent('personalize_preview', {
      event_category: 'Customization',
      event_label: type,
      details: details
    });
  }
};

window.Analytics = Analytics;
