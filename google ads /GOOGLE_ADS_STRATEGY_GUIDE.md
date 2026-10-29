# Google Ads Campaign Strategy & Landing Page Architecture Guide
## Brand: The Gift Edit (https://thegiftedit.space)

This document provides the complete operational blueprint for launching and optimizing Google Search Ads campaigns for **The Gift Edit**. It covers Ad Group structures, keyword clusters, match types, high-CTR ad copies, destination URL routing, Quality Score optimizations, and conversion tracking.

---

## 1. Executive Summary & Conversion Philosophy

- **Target Audience**: Young adults aged 18–25 in India (women, college students, young couples, shoppers looking for gifts for friends, partners, siblings).
- **Core Value Proposition**: Affordable, aesthetic, thoughtful, and personalised gifting that feels premium without expensive luxury markups.
- **Landing Page Architecture**: Dual-Strategy:
  1. **Dynamic Master Landing Page (`index.html`)**: Dynamically personalizes hero headline, subtext, badges, and highlighted products via URL query parameter `?ad_group=<group_key>`.
  2. **Dedicated Occasion Sub-Landing Pages**: Individual high-relevance pages for each ad group to achieve maximum Google Ads Quality Score (10/10) and lowest Cost-Per-Click (CPC).

---

## 2. Campaign Structure: Occasion Gifts (Campaign 1)

Below is the exact mapping of Google Ads Ad Groups to Keywords, Match Types, Ad Copy, and Destination URLs:

### Ad Group A: Birthday Gifts
- **Target Audience**: Boyfriends, best friends, college friends, and siblings shopping for upcoming birthdays.
- **Keyword Clusters & Match Types**:
  - `"birthday gift for girlfriend"` [Phrase]
  - `[birthday gift for girlfriend]` [Exact]
  - `"birthday gift for best friend"` [Phrase]
  - `[birthday gift for best friend]` [Exact]
  - `"birthday gift for her"` [Phrase]
  - `"birthday gift ideas for girls"` [Phrase]
  - `"birthday gift hamper"` [Phrase]
  - `[birthday surprise gift box]` [Exact]
  - `"personalised birthday gift"` [Phrase]
  - `"birthday gift for female friend"` [Phrase]
- **Ad Copy Suggestions**:
  - **Headline 1**: Thoughtful Birthday Gifts for Her
  - **Headline 2**: Dainty Jewellery & Treat Hampers
  - **Headline 3**: Starting at Just ₹349 | Pan-India
  - **Description 1**: Make her birthday unforgettable with 18K anti-tarnish jewellery, KitKat hampers & wax-sealed notes.
  - **Description 2**: Handcrafted with love in India. Fast 24-48h dispatch in luxury satin ribbon boxes.
- **Recommended Destination URLs**:
  - *Option 1 (Dedicated Page)*: `https://thegiftedit.space/birthday-gifts.html?utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts&utm_adgroup=birthday_gifts`
  - *Option 2 (Dynamic Master)*: `https://thegiftedit.space/index.html?ad_group=birthday&utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts`

---

### Ad Group B: Anniversary Gifts
- **Target Audience**: Couples celebrating 6 months, 1 year, or relationship milestones.
- **Keyword Clusters & Match Types**:
  - `"anniversary gift for girlfriend"` [Phrase]
  - `[anniversary gift for girlfriend]` [Exact]
  - `"anniversary gift for boyfriend"` [Phrase]
  - `"anniversary gift for him"` [Phrase]
  - `"first anniversary gift ideas"` [Phrase]
  - `[1 year anniversary gift]` [Exact]
  - `"couple gift online"` [Phrase]
  - `"relationship milestone gift"` [Phrase]
- **Ad Copy Suggestions**:
  - **Headline 1**: Cherished Anniversary Gifts
  - **Headline 2**: Spotify Wooden Memory Frame ₹699
  - **Headline 3**: 18K Gold Initial Drop Pendants
  - **Description 1**: Turn your song into a scannable Spotify oak frame with custom photo & handwriting quote.
  - **Description 2**: Romantic keepsakes they'll treasure forever. Dispatched within 24–48 hours across India.
- **Recommended Destination URLs**:
  - *Option 1 (Dedicated Page)*: `https://thegiftedit.space/anniversary-gifts.html?utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts&utm_adgroup=anniversary_gifts`
  - *Option 2 (Dynamic Master)*: `https://thegiftedit.space/index.html?ad_group=anniversary&utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts`

---

### Ad Group C: Friendship Gifts
- **Target Audience**: Young women and college students celebrating best friends, roommates, and soul sisters.
- **Keyword Clusters & Match Types**:
  - `"gift for best friend girl"` [Phrase]
  - `[gift for bestie]` [Exact]
  - `"friendship gift hamper"` [Phrase]
  - `"gift for college friend"` [Phrase]
  - `"thank you gift for friend"` [Phrase]
  - `[friendship day gift]` [Exact]
- **Ad Copy Suggestions**:
  - **Headline 1**: Gifts for Your Bestie From ₹349
  - **Headline 2**: Mulberry Silk & Jhumka Sets
  - **Headline 3**: The Gift Edit Best Friend Boxes
  - **Description 1**: For the best friend who deserves everything. Dainty jewellery, silk scrunchies & chocolate treats.
  - **Description 2**: Includes complimentary handwritten wax-sealed greeting card. Fast pan-India delivery.
- **Recommended Destination URLs**:
  - *Option 1 (Dedicated Page)*: `https://thegiftedit.space/friendship-gifts.html?utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts&utm_adgroup=friendship_gifts`
  - *Option 2 (Dynamic Master)*: `https://thegiftedit.space/index.html?ad_group=friendship&utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts`

---

### Ad Group D: Farewell & Graduation Gifts
- **Target Audience**: Classmates, roommates, and coworkers giving a send-off gift.
- **Keyword Clusters & Match Types**:
  - `"farewell gift for friend"` [Phrase]
  - `[farewell gift for colleague]` [Exact]
  - `"graduation gift for her"` [Phrase]
  - `"convocation gift ideas"` [Phrase]
  - `"batch farewell gift"` [Phrase]
  - `[gift for roommate leaving]` [Exact]
- **Ad Copy Suggestions**:
  - **Headline 1**: Heartfelt Farewell & Grad Gifts
  - **Headline 2**: Spotify Memory Frames & Mugs
  - **Headline 3**: Dispatched in 24-48 Hours India
  - **Description 1**: Say goodbye with keepsakes they'll keep forever: solid oak photo frames and cozy self-care hampers.
  - **Description 2**: High quality, aesthetic packaging, and friendly pricing from ₹499 to ₹1,299.
- **Recommended Destination URLs**:
  - *Option 1 (Dedicated Page)*: `https://thegiftedit.space/farewell-gifts.html?utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts&utm_adgroup=farewell_gifts`
  - *Option 2 (Dynamic Master)*: `https://thegiftedit.space/index.html?ad_group=farewell&utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts`

---

### Ad Group E: Valentine's Day Gifts (Seasonal Activation)
- **Target Audience**: Romantic partners looking for Valentine's Week and Propose Day presents.
- **Keyword Clusters & Match Types**:
  - `"valentine gift for girlfriend"` [Phrase]
  - `[Valentine's Day gift for her]` [Exact]
  - `"valentine hamper"` [Phrase]
  - `"romantic gift for her"` [Phrase]
  - `[propose day gift]` [Exact]
- **Ad Copy Suggestions**:
  - **Headline 1**: Romantic Valentine's Hampers
  - **Headline 2**: Butterfly Jewellery & Chocolates
  - **Headline 3**: Handcrafted With Love in India
  - **Description 1**: Melt her heart with our viral "You're Special" hamper: butterfly pendant, Ferrero Rocher & silk scrunchie.
  - **Description 2**: Luxury blush packaging tied with oversized satin bow. Dispatched in 24–48 hours.
- **Recommended Destination URLs**:
  - *Option 1 (Dedicated Page)*: `https://thegiftedit.space/valentines-gifts.html?utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts&utm_adgroup=valentines_gifts`
  - *Option 2 (Dynamic Master)*: `https://thegiftedit.space/index.html?ad_group=valentines&utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts`

---

### Ad Group F: Bhai Dooj & Rakhi Gifts (Seasonal Festive Activation)
- **Target Audience**: Brothers shopping for sister gifts, or sisters shopping for brother hampers.
- **Keyword Clusters & Match Types**:
  - `"bhai dooj gift for sister"` [Phrase]
  - `[bhai dooj gift for sister]` [Exact]
  - `"gift for sister"` [Phrase]
  - `[rakhi gift for sister]` [Exact]
  - `"bhai dooj gift for brother"` [Phrase]
- **Ad Copy Suggestions**:
  - **Headline 1**: Bhai Dooj Gifts for Sister
  - **Headline 2**: 9-Pair Jhumka Velvet Organiser
  - **Headline 3**: Starting at ₹449 | Anti-Tarnish
  - **Description 1**: Surprise your sister with our viral 9-pair hand-painted Meenakari jhumka box or initial pendants.
  - **Description 2**: Festive-ready packaging with handwritten sibling card. Pan-India doorstep delivery.
- **Recommended Destination URLs**:
  - *Option 1 (Dedicated Page)*: `https://thegiftedit.space/rakhi-bhaidooj-gifts.html?utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts&utm_adgroup=bhaidooj_gifts`
  - *Option 2 (Dynamic Master)*: `https://thegiftedit.space/index.html?ad_group=rakhi-bhaidooj&utm_source=google&utm_medium=cpc&utm_campaign=occasion_gifts`

---

## 3. SEO Title Tags & Meta Descriptions Matrix

| Page File | Target Intent / Ad Group | Recommended SEO Title Tag (50-60 chars) | Recommended Meta Description (140-160 chars) |
| :--- | :--- | :--- | :--- |
| `index.html` | Master Brand / Broad Gifting | `The Gift Edit | Thoughtful, Personalised Gifts & Hampers India` | `Discover aesthetic personalised gifts, anti-tarnish 18K gold jewellery, custom Spotify frames, and curated hampers for birthdays and best friends. From ₹349.` |
| `birthday-gifts.html` | Ad Group A: Birthday | `Birthday Gifts for Her & Best Friends | The Gift Edit India` | `Discover viral birthday hampers, personalized initial pendants, and luxury keepsakes for girlfriends, sisters, and besties. From ₹349. Dispatched in 24–48h.` |
| `anniversary-gifts.html` | Ad Group B: Anniversary | `Anniversary Gifts & Keepsakes for Couples | The Gift Edit` | `Celebrate your 1st anniversary with custom Spotify song frames, 18K gold initial pendants, and romantic hampers. Dispatched across India.` |
| `friendship-gifts.html` | Ad Group C: Friendship | `Gifts for Best Friends & College Besties | The Gift Edit` | `Discover viral bestie hampers, pure mulberry silk scrunchies, pastel Meenakari jhumkas, and custom memory frames. Aesthetic gifting starting at ₹349.` |
| `farewell-gifts.html` | Ad Group D: Farewell & Grad | `Farewell & Graduation Gifts for Friends | The Gift Edit` | `Thoughtful farewell gifts and graduation keepsakes for college friends, roommates, and colleagues. Custom Spotify frames, ceramic mug hampers, and pendants.` |
| `valentines-gifts.html` | Ad Group E: Valentine's | `Valentine's Day Gifts for Girlfriend | The Gift Edit` | `Romantic Valentine's hampers for girlfriend, butterfly pavé jewellery, 18K gold initial drop pendants, and dried flower gift boxes. Handcrafted in India.` |
| `rakhi-bhaidooj-gifts.html` | Ad Group F: Bhai Dooj & Rakhi | `Bhai Dooj & Rakhi Gifts for Sister | The Gift Edit` | `Festive gifts for sisters: 9-pair Meenakari jhumka velvet organiser sets, anti-tarnish initial pendants, and treat hampers. Dispatched in 24–48h across India.` |

---

## 4. Google Ads Quality Score Optimization Checklist

Google Ads calculates Quality Score (1 to 10) based on three core pillars:
1. **Expected Click-Through Rate (eCTR)**:
   - Use phrase and exact matches instead of broad matches to eliminate irrelevant traffic.
   - Include specific pricing hooks ("From ₹349") and clear benefits ("100% Anti-Tarnish").
   - Utilize all Google Ads Extensions (Sitelinks, Callouts, Structured Snippets, Image Extensions).
2. **Ad Relevance**:
   - Every Ad Group in this blueprint maps directly to a matching landing page headline. When someone searches `"birthday gift for best friend"`, they land on a page titled *"Make Her Birthday Unforgettably Special"* with birthday products immediately above the fold.
3. **Landing Page Experience**:
   - Zero render-blocking bloated frameworks: pure HTML5, vanilla JavaScript, and modern CSS ensure an LCP under 0.9s on 4G mobile devices.
   - High mobile usability with sticky bottom CTA bar ("Build Box" + "WhatsApp").
   - Explicit trust markers: real product images, verified prices, anti-tarnish care instructions, and 24-48h dispatch policy.

---

## 5. Conversion Tracking Setup Guide

### Step 1: Replace Placeholders in `js/tracking.js`
In `js/tracking.js`, update the top configuration block with your live Google Ads Conversion ID and GA4 Measurement ID:
```javascript
const TRACKING_CONFIG = {
  googleAdsId: 'AW-1234567890',              // Your Google Ads Conversion ID
  googleAdsConversionLabel: 'AbCdEfGhIjKl',   // Your Google Ads Conversion Label
  ga4MeasurementId: 'G-XXXXXXXXXX',         // Your Google Analytics 4 Measurement ID
  debugMode: false                           // Set to false in production
};
```

### Step 2: Events Tracked Automatically
| Trigger Action | Event Name in Google Ads / GA4 | Value Sent | Optimization Target |
| :--- | :--- | :--- | :--- |
| User clicks "Order on WhatsApp" | `whatsapp_click` | Product Price (e.g. ₹1,599) | **Primary Conversion** |
| User builds a custom gift box | `custom_box_built` | Calculated Total (e.g. ₹998) | **Primary Conversion** |
| User submits custom enquiry modal | `generate_lead` | ₹0 (Lead) | **Primary Conversion** |
| User clicks product "Quick View" | `view_item` | Product Price | Secondary / Engagement |
| User interacts with initial / Spotify customizer | `personalize_preview` | ₹0 | Micro-Conversion |
| User filters by budget tier | `filter_budget` | ₹0 | Navigation Engagement |

---

## 6. Business Detail Placeholders Summary (For Brand Owner)

To finalize the website for live production ad traffic, update the following placeholders:

1. **WhatsApp Concierge Number**:
   - File: `js/app.js` (Line 23)
   - Current Placeholder: `919876543210`
   - Replace with your active WhatsApp Business phone number (in international format without `+`, e.g., `9198XXXXXXXX`).
2. **Official Business Email**:
   - Current: `contact@thegiftedit.space` (or update to your preferred domain email).
3. **Instagram Handle**:
   - Current: `https://instagram.com/thegiftedit.space` (or your exact brand handle).
4. **Google Ads Conversion Tag**:
   - File: `js/tracking.js` (Line 10).
