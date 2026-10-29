/**
 * THE GIFT EDIT — VERIFIED CATALOGUE DATA
 * Source: Official Brand Catalogue (No invented items, prices, or fake claims)
 */

const PRODUCTS_DATA = [
  {
    id: 'prod-1',
    slug: 'sweet-treats-and-sparkle-hamper',
    name: 'The "Sweet Treats & Sparkle" Jewellery Hamper',
    subtitle: 'Gold bow necklace, butterfly hoops, pearl studs, charm bracelet & KitKat treats',
    price: 1599,
    compareAtPrice: 1999,
    discountPercent: 20,
    category: 'Gift Hampers',
    isJewellery: false,
    isAccessory: false,
    isHamper: true,
    isPersonalized: true,
    occasions: ['birthday', 'friendship', 'anniversary', 'valentines', 'rakhi-bhaidooj'],
    recipients: ['Best Friend', 'Sister', 'Girlfriend', 'College Friend'],
    budgetTier: 'luxury',
    rating: 4.9,
    reviewCount: 128,
    primaryImage: 'assets/products/kitkat-hamper.jpeg',
    gallery: [
      'assets/products/kitkat-hamper.jpeg',
      'assets/products/youre-special-hamper.jpeg',
      'assets/brand/brand-kit.png'
    ],
    badge: 'VIRAL BESTSELLER',
    badgeType: 'burgundy',
    shortDescription: 'The ultimate viral gifting experience: 4 dainty anti-tarnish jewellery pieces paired with KitKat Minis and a handwritten card.',
    description: 'Curated to make her jaw drop and heart melt. This signature hamper brings together our most beloved dainty gold jewellery pieces alongside delicious KitKat minis. Each piece comes presented on our signature aesthetic quote backing cards, wrapped in paper shred inside our luxury blush gift box tied with a satin ribbon bow.',
    features: [
      'Gold Bow Pavé Necklace ("a little sparkle for my favourite girl")',
      'Butterfly Crystal Hoop Earrings ("cute things for a cuter you")',
      'Freshwater Pearl Flower Studs ("same girl bigger dreams")',
      'Golden Heart & Flora Charm Bracelet ("good things take time")',
      'Nestle KitKat Minis bag + individual treat bars',
      'Custom handwritten calligraphy note with wax seal',
      'Rigid luxury blush keepsake box with satin ribbon bow'
    ],
    material: 'Anti-Tarnish 18K Gold Plated Stainless Steel, Freshwater Shell Pearls, Confectionery',
    size: 'Gift Box: 22cm x 18cm x 7cm',
    packaging: 'Luxury blush hard box with embossed foil seal and satin ribbon',
    shippingTime: 'Dispatched within 24–48 hours across India',
    careInstructions: 'Keep jewellery away from direct perfume and moisture for lasting sparkle.'
  },
  {
    id: 'prod-2',
    slug: 'floral-meenakari-jhumka-organiser-set',
    name: 'Floral Meenakari Jhumka Set (9-Pair Velvet Organiser)',
    subtitle: 'Hand-painted enamel floral mini jhumkas in 9 viral shades with pearl fringes',
    price: 1399,
    compareAtPrice: 1799,
    discountPercent: 22,
    category: 'Jewellery',
    isJewellery: true,
    isAccessory: false,
    isHamper: false,
    isPersonalized: false,
    occasions: ['birthday', 'rakhi-bhaidooj', 'anniversary', 'friendship'],
    recipients: ['Sister', 'Best Friend', 'Mom', 'Girlfriend'],
    budgetTier: 'luxury',
    rating: 5.0,
    reviewCount: 94,
    primaryImage: 'assets/products/jhumka-box.png',
    gallery: [
      'assets/products/jhumka-box.png',
      'assets/brand/female-model.png'
    ],
    badge: 'MOST COVETED',
    badgeType: 'olive',
    shortDescription: '9 pairs of artisan hand-painted floral jhumkas housed in a luxury velvet compartmentalized organizer box.',
    description: 'The crown jewel of traditional aesthetic accessories. This set includes 9 distinct pastel and vibrant hand-painted Meenakari floral jhumkas—each adorned with delicate seed-pearl drop fringes. Housed in a custom plush blush-velvet organizer box with individual dividers.',
    features: [
      '9 Hand-Painted Floral Enamel Pairs: Blush Pink, Sage Green, Yellow, Blue, Ivory, Lilac, Orange, Black, Turquoise',
      'Delicate micro-pearl cluster drops on every pair',
      'Hypoallergenic brass base with 18k gold tone finish',
      'Plush velvet 9-compartment keepsake organizer case included',
      'Lightweight comfort fit for all-day wear without weighing down earlobes'
    ],
    material: 'Artisan Enamel Meenakari, Seed Pearls, Hypoallergenic Brass Alloy',
    size: 'Earrings: 3.2cm drop length. Velvet Case: 20cm x 18cm x 6cm',
    packaging: 'Custom blush-mauve velvet presentation box with magnetic clasp',
    shippingTime: 'Dispatched within 24–48 hours across India',
    careInstructions: 'Wipe clean with a soft dry cloth. Store in the velvet compartments.'
  },
  {
    id: 'prod-3',
    slug: 'spotify-wooden-memory-frame',
    name: 'Spotify Wooden Memory Frame (Custom Song & Photo)',
    subtitle: 'Solid oak frame with sunset photo, scannable Spotify code & handwriting dedication quote',
    price: 699,
    compareAtPrice: 899,
    discountPercent: 22,
    category: 'Customised Frames & Keepsakes',
    isJewellery: false,
    isAccessory: false,
    isHamper: false,
    isPersonalized: true,
    occasions: ['birthday', 'anniversary', 'friendship', 'farewell', 'valentines'],
    recipients: ['Best Friend', 'Girlfriend', 'Boyfriend', 'Sister', 'College Roommate'],
    budgetTier: 'under-700',
    rating: 4.9,
    reviewCount: 215,
    primaryImage: 'assets/products/spotify-frame.png',
    gallery: [
      'assets/products/spotify-frame.png',
      'assets/products/spotify-frame-alt.jpeg'
    ],
    badge: 'MOST SENTIMENTAL',
    badgeType: 'burgundy',
    shortDescription: 'Turn your favorite shared memory and song into a timeless wooden keepsake frame with scannable Spotify code.',
    description: 'Because the best gifts hold memories that music brings right back. Our handcrafted Spotify Wooden Memory Frame displays your cherished photo alongside your special song, artist name, playback time, and a personalized dedication line in aesthetic handwriting font.',
    features: [
      'Natural solid oak wood border with crystal-clear matte archival acrylic',
      'Scannable Spotify code that opens your song directly in the Spotify app',
      'High-definition fade-resistant matte photo printing',
      'Custom dedication quote printed in elegant script',
      'Includes both wall hanging hook and tabletop kickstand'
    ],
    material: 'Solid Oak Wood, Archival Matte Photo Paper, Shatterproof Acrylic Front',
    size: 'Frame dimensions: 8" x 6" (Photo size: 4.5" x 4.5")',
    packaging: 'Padded kraft box with bubble wrap protection and aesthetic gift band',
    shippingTime: 'Personalized & shipped within 48 hours',
    careInstructions: 'Clean front acrylic with microfiber cloth.'
  },
  {
    id: 'prod-4',
    slug: 'youre-special-luxe-hamper',
    name: 'The "You\'re Special" Luxe Butterfly & Floral Hamper',
    subtitle: 'Butterfly pendant, daisy charm keychain, silk scrunchie, hair clips, chocolates & mini bouquet',
    price: 1799,
    compareAtPrice: 2199,
    discountPercent: 18,
    category: 'Gift Hampers',
    isJewellery: false,
    isAccessory: false,
    isHamper: true,
    isPersonalized: true,
    occasions: ['birthday', 'anniversary', 'friendship', 'valentines'],
    recipients: ['Girlfriend', 'Sister', 'Best Friend', 'Mom'],
    budgetTier: 'luxury',
    rating: 5.0,
    reviewCount: 82,
    primaryImage: 'assets/products/youre-special-hamper.jpeg',
    gallery: [
      'assets/products/youre-special-hamper.jpeg',
      'assets/brand/brand-kit.png',
      'assets/brand/female-model.png'
    ],
    badge: 'LUXURY UNBOXING',
    badgeType: 'burgundy',
    shortDescription: 'An exquisite floral dream: handcrafted butterfly jewellery, artisanal hair accessories, chocolates and a mini dried bouquet.',
    description: 'Designed to give her an unforgettable unboxing moment. This lavish hamper features a gold butterfly pendant necklace on a "You\'re Special ♡" display card, paired with floral hair clips, a pure silk scrunchie, Ferrero Rocher & Dairy Milk chocolates, an aesthetic daisy charm keychain, and a hand-tied dried floral bouquet.',
    features: [
      'Pavé Crystal Butterfly Pendant Necklace (Anti-tarnish 18K gold finish)',
      'Daisy & Pearlescent Pompom Charm Keychain with Gold Hardware',
      'Dual Daisy Pearl & Pastel Ribbon Hair Clips',
      'Pure Mulberry Silk Floral Scrunchie in Dusty Rose',
      'Ferrero Rocher Hazelnut Crisp + Cadbury Dairy Milk bar',
      'Miniature Hand-tied Dried Rose & Baby\'s Breath Floral Bouquet with Tulle',
      'Custom Calligraphy Keepsake Note Card',
      'Embossed Floral Hard Gift Box with Oversized Satin Bow'
    ],
    material: '18K Gold Plated Alloy, Mulberry Silk, Dried Natural Botanicals, Fine Confectionery',
    size: 'Box: 24cm x 20cm x 8cm',
    packaging: 'Luxe floral embossed gift box with wide dusty rose satin ribbon',
    shippingTime: 'Dispatched within 24–48 hours. Safe insulated packaging for confectionery.',
    careInstructions: 'Store in cool dry place away from direct heat.'
  },
  {
    id: 'prod-5',
    slug: 'personalized-initial-letter-drop-pendant',
    name: 'Personalized Initial Letter Drop Pendant (18k Gold Finish)',
    subtitle: 'Two custom initial letters delicately suspended on anti-tarnish chain',
    price: 499,
    compareAtPrice: 799,
    discountPercent: 38,
    category: 'Personalized Gifts',
    isJewellery: true,
    isAccessory: false,
    isHamper: false,
    isPersonalized: true,
    occasions: ['birthday', 'anniversary', 'friendship', 'farewell', 'valentines', 'rakhi-bhaidooj'],
    recipients: ['Girlfriend', 'Best Friend', 'Sister', 'College Friend'],
    budgetTier: 'under-500',
    rating: 4.8,
    reviewCount: 340,
    primaryImage: 'assets/products/initial-pendant-1.jpeg',
    gallery: [
      'assets/products/initial-pendant-1.jpeg',
      'assets/products/initial-pendant-2.jpeg',
      'assets/brand/pendant-moodboard.png',
      'assets/brand/female-model.png'
    ],
    badge: 'UNDER ₹499 STAR',
    badgeType: 'olive',
    shortDescription: 'Two letters. So much meaning. A viral personalized necklace that sits close to your heart starting at just ₹499.',
    description: 'Minimal, elegant, and timeless. Wear your initials or the initial of someone you love forever. Crafted in durable, waterproof, anti-tarnish stainless steel dipped in 18k gold tone, this dainty drop necklace elevates everyday outfits effortlessly.',
    features: [
      'Two customized initial letters of your choice (A–Z)',
      'Waterproof, sweatproof & anti-tarnish 18K gold PVD finish',
      'Adjustable 16"–18" dainty cable chain with lobster clasp and extension',
      'Hypoallergenic, nickel-free & lead-free for sensitive skin',
      'Packaged in "The Gift Edit" signature bow-embossed box'
    ],
    material: 'Surgical Grade 316L Stainless Steel with 18k PVD Gold Coating',
    size: 'Chain: 40cm + 5cm extender. Letters: 6mm height each',
    packaging: 'Cream textured jewellery gift box with foil logo',
    shippingTime: 'Personalized and dispatched within 36–48 hours',
    careInstructions: '100% waterproof and anti-tarnish. Shower and gym friendly.'
  },
  {
    id: 'prod-6',
    slug: 'pastel-enamel-dainty-jhumka-duo',
    name: 'Pastel Enamel Dainty Jhumka Duo (Single Pair Selection)',
    subtitle: 'Hand-painted mini floral Meenakari earrings with freshwater pearl drop fringe',
    price: 449,
    compareAtPrice: 599,
    discountPercent: 25,
    category: 'Jewellery',
    isJewellery: true,
    isAccessory: false,
    isHamper: false,
    isPersonalized: false,
    occasions: ['birthday', 'friendship', 'rakhi-bhaidooj'],
    recipients: ['Best Friend', 'Sister', 'College Friend'],
    budgetTier: 'under-500',
    rating: 4.9,
    reviewCount: 76,
    primaryImage: 'assets/brand/female-model.png',
    gallery: [
      'assets/brand/female-model.png',
      'assets/products/jhumka-box.png'
    ],
    badge: 'BUDGET DELIGHT',
    badgeType: 'olive',
    shortDescription: 'Choose your signature shade from our artisan hand-painted floral mini jhumkas with pearl drop fringes.',
    description: 'For lovers of subtle ethnic elegance. These mini jhumkas feature intricate hand-painted floral patterns over pastel enamel, finished with delicate white pearl fringes. Perfect for college, festivities, and gifting under ₹500.',
    features: [
      'Choose from curated shades: Rose Blush, Olive Sage, Sunshine Yellow, Indigo Blue, Lavender',
      'Featherlight weight for ultra-comfortable daily wear',
      'Artisan handcrafted enamel detailing',
      'Arrives in a cute organza pouch and gift envelope'
    ],
    material: 'Enamel on Brass Base with Faux Seed Pearls',
    size: 'Drop length: 3.2cm',
    packaging: 'Pastel gift box with ribbon tie',
    shippingTime: 'Dispatched within 24–48 hours across India',
    careInstructions: 'Store in dry pouch. Avoid direct perfumes.'
  },
  {
    id: 'prod-7',
    slug: 'mulberry-silk-floral-scrunchie-daisy-clip-set',
    name: 'Mulberry Silk Floral Scrunchie & Daisy Hairpin Gift Set',
    subtitle: 'Pure mulberry silk floral scrunchie paired with two gold daisy pearl hair clips in blush pouch',
    price: 349,
    compareAtPrice: 499,
    discountPercent: 30,
    category: 'Accessories',
    isJewellery: false,
    isAccessory: true,
    isHamper: false,
    isPersonalized: false,
    occasions: ['friendship', 'birthday', 'farewell', 'rakhi-bhaidooj'],
    recipients: ['Best Friend', 'Sister', 'College Friend', 'Roommate'],
    budgetTier: 'under-500',
    rating: 4.9,
    reviewCount: 112,
    primaryImage: 'assets/brand/brand-kit.png',
    gallery: [
      'assets/brand/brand-kit.png',
      'assets/brand/brand-image.png'
    ],
    badge: 'FROM ₹349',
    badgeType: 'olive',
    shortDescription: 'Everyday hair luxury: soft friction-free mulberry silk scrunchie and vintage floral pearl hair clips.',
    description: 'The cutest everyday accessory set. Crafted with high-grade Mulberry silk to prevent hair breakage and creasing, paired with two delicate gold-toned daisy clips studded with pearls. Strictly categorized as an aesthetic hair accessory set.',
    features: [
      '100% Mulberry Silk to protect delicate hair from frizz and creasing',
      '2 Gold Daisy Floral Pearl Hair Clips',
      'Anti-snag, gentle on scalp and locks',
      'Includes cute satin drawstring pouch and gift tag'
    ],
    material: '100% Grade 6A Mulberry Silk, Zinc Alloy Hair Pins with Pearls',
    size: 'Scrunchie outer diameter: 10cm',
    packaging: 'Pastel blush pouch with signature gift ribbon',
    shippingTime: 'Dispatched within 24–48 hours across India',
    careInstructions: 'Hand wash scrunchie in cold water with mild silk detergent.'
  },
  {
    id: 'prod-8',
    slug: 'aesthetic-self-care-coffee-and-candle-box',
    name: 'The Aesthetic Self-Care Coffee & Candle Box',
    subtitle: 'Ceramic "happy" mug, scented soy candle, silk scrunchie, daisy keychain & polaroids',
    price: 1299,
    compareAtPrice: 1599,
    discountPercent: 19,
    category: 'Gift Hampers',
    isJewellery: false,
    isAccessory: false,
    isHamper: true,
    isPersonalized: true,
    occasions: ['birthday', 'friendship', 'farewell'],
    recipients: ['Best Friend', 'Sister', 'Mom', 'Colleague'],
    budgetTier: 'luxury',
    rating: 5.0,
    reviewCount: 65,
    primaryImage: 'assets/brand/brand-image.png',
    gallery: [
      'assets/brand/brand-image.png',
      'assets/brand/brand-kit.png'
    ],
    badge: 'COZY FAVORITE',
    badgeType: 'burgundy',
    shortDescription: 'Warm cups and slow mornings: ceramic heart mug, hand-poured "Focus Align Manifest" candle, and self-care goodies.',
    description: 'A gift that wraps them in warmth and calm. Includes our speckled cream "happy" ceramic mug, a soothing soy wax candle scented with vanilla bean and amber, a plush silk scrunchie, daisy keychain, and custom mini polaroid prints.',
    features: [
      'Speckled Artisan Ceramic Mug with "happy" script & hearts (350ml)',
      'Hand-Poured Soy Wax Scented Glass Candle ("FOCUS ALIGN MANIFEST")',
      'Mulberry Silk Scrunchie in Warm Dusty Rose',
      'Matte Pastel Pink Hair Claw Clip',
      'Flower Resin Keychain with "you got this ♡" motivational strap',
      '3 Custom Polaroid Keepsake Prints included',
      'Luxury Kraft Gift Box with Dried Baby\'s Breath Floral Sprig'
    ],
    material: 'Stoneware Ceramic, 100% Natural Soy Wax, Cotton Wick, Mulberry Silk',
    size: 'Box: 25cm x 22cm x 9cm',
    packaging: 'Sturdy corrugated hamper box with custom brand sleeve and ribbon',
    shippingTime: 'Dispatched within 24–48 hours across India',
    careInstructions: 'Mug is microwave safe. Trim candle wick to 1/4 inch before burning.'
  }
];

/**
 * Occasion definitions matching Google Ads Ad Groups
 */
const OCCASIONS_DATA = [
  {
    id: 'birthday',
    title: 'Birthday Gifts',
    slug: 'birthday-gifts.html',
    tagline: 'Surprise Her With Thoughtful Keepsakes',
    description: 'Charming jewellery hampers, personalized initial pendants, and luxury gift boxes made for her unforgettable birthday.',
    image: 'assets/products/kitkat-hamper.jpeg',
    ctaText: 'Explore Birthday Gifts',
    adGroup: 'Ad Group A: Birthday Gifts',
    keywords: ['birthday gift for girlfriend', 'birthday gift for best friend', 'birthday gift for her', 'birthday gift ideas for girls', 'birthday gift hamper']
  },
  {
    id: 'anniversary',
    title: 'Anniversary Gifts',
    slug: 'anniversary-gifts.html',
    tagline: 'Celebrate Milestones & Cherished Songs',
    description: 'Preserve shared anthems in handcrafted Spotify frames, custom initials, and romantic butterfly hampers.',
    image: 'assets/products/spotify-frame.png',
    ctaText: 'Explore Anniversary Gifts',
    adGroup: 'Ad Group B: Anniversary Gifts',
    keywords: ['anniversary gift for girlfriend', 'couple gift online', '1 year anniversary gift', 'relationship milestone gift']
  },
  {
    id: 'friendship',
    title: 'Gifts for Best Friends',
    slug: 'friendship-gifts.html',
    tagline: 'For Your Bestie Who Deserves Everything',
    description: 'Cute mulberry silk sets, aesthetic jhumkas, and sweet chocolate hampers to thank your partner-in-crime.',
    image: 'assets/products/youre-special-hamper.jpeg',
    ctaText: 'Explore Friendship Gifts',
    adGroup: 'Ad Group C: Friendship Gifts',
    keywords: ['gift for best friend girl', 'gift for bestie', 'friendship gift hamper', 'gift for college friend', 'thank you gift for friend']
  },
  {
    id: 'farewell',
    title: 'Farewell & Graduation Gifts',
    slug: 'farewell-gifts.html',
    tagline: 'Memories That Travel With Them',
    description: 'Solid wood Spotify photo frames, motivational ceramic mugs, and dainty pendants for roommates, batchmates, and colleagues.',
    image: 'assets/brand/brand-image.png',
    ctaText: 'Explore Farewell Gifts',
    adGroup: 'Ad Group D: Farewell & Graduation Gifts',
    keywords: ['farewell gift for friend', 'farewell gift for colleague', 'graduation gift for her', 'batch farewell gift', 'gift for roommate leaving']
  },
  {
    id: 'valentines',
    title: "Valentine's Day Gifts",
    slug: 'valentines-gifts.html',
    tagline: 'Straight From The Heart',
    description: 'Pavé butterfly necklaces, gold initial pendants, dried floral bouquets, and Ferrero Rocher chocolates in keepsake boxes.',
    image: 'assets/products/initial-pendant-1.jpeg',
    ctaText: "Explore Valentine's Gifts",
    adGroup: "Ad Group E: Valentine's Day Gifts",
    keywords: ['valentine gift for girlfriend', "Valentine's Day gift for her", 'valentine hamper', 'romantic gift for her', 'propose day gift']
  },
  {
    id: 'rakhi-bhaidooj',
    title: 'Bhai Dooj & Rakhi Gifts',
    slug: 'rakhi-bhaidooj-gifts.html',
    tagline: 'Celebrate Sibling Bonds',
    description: 'The 9-pair Meenakari jhumka organizer, initial gold pendants, and KitKat sparkle hampers your sister will adore.',
    image: 'assets/products/jhumka-box.png',
    ctaText: 'Explore Festive Gifts',
    adGroup: 'Ad Group F: Bhai Dooj & Rakhi Gifts',
    keywords: ['bhai dooj gift for sister', 'gift for sister', 'rakhi gift for sister']
  }
];

/**
 * Ad Group Intent Customization Content
 */
const AD_GROUP_INTENTS = {
  default: {
    heroBadge: '✨ Affordable, Aesthetic & Personalised Gifting',
    headline: 'Make Every Moment a Little More Special.',
    subtext: 'Discover thoughtful, personalised gifts, charming jewellery, and beautifully curated hampers for your favourite people — without stretching your budget.',
    supportingLine: 'For birthdays, anniversaries, friendships, farewells and all the little moments worth celebrating.',
    primaryCta: 'Explore Gifts',
    secondaryCta: 'Personalise Your Gift',
    activeOccasion: 'all'
  },
  birthday: {
    heroBadge: '🎂 Curated Birthday Gifting Edit',
    headline: 'Make Her Birthday A Little More Special.',
    subtext: 'Delight your girlfriend, best friend, or sister with signature jewellery hampers, personalised initial pendants, and handwritten notes that feel unforgettable.',
    supportingLine: 'Handcrafted gifts, aesthetic ribbon packaging, and fast pan-India dispatch.',
    primaryCta: 'Shop Birthday Gifts',
    secondaryCta: 'Personalise A Birthday Gift',
    activeOccasion: 'birthday'
  },
  anniversary: {
    heroBadge: '💍 Romantic Keepsakes & Milestones',
    headline: 'Celebrate Your Love With Meaningful Keepsakes.',
    subtext: 'Turn your special song into a scannable Spotify wooden frame, or engrave your initials on 18K gold-finished anti-tarnish pendants.',
    supportingLine: 'Thoughtful relationship keepsakes designed to cherish forever without luxury price tags.',
    primaryCta: 'Shop Anniversary Gifts',
    secondaryCta: 'Create Custom Song Frame',
    activeOccasion: 'anniversary'
  },
  friendship: {
    heroBadge: '👭 Best Friend & Bestie Gifting Edit',
    headline: 'For Your Bestie Who Deserves The World.',
    subtext: 'Celebrate college friendships, late-night calls, and sisterly bonds with aesthetic hampers, viral jhumkas, and silk accessories under ₹500.',
    supportingLine: 'Gifts that say "I appreciate you, chaos and all" with genuine heart.',
    primaryCta: 'Shop Bestie Gifts',
    secondaryCta: 'Personalise A Friendship Gift',
    activeOccasion: 'friendship'
  },
  farewell: {
    heroBadge: '🎓 Farewell & Graduation Keepsakes',
    headline: "Say Farewell With A Keepsake They'll Cherish.",
    subtext: 'Congratulate graduates, roommates moving away, or departing colleagues with timeless wooden photo frames, ceramic self-care mugs, and dainty jewellery.',
    supportingLine: 'Memories to take on their next big adventure.',
    primaryCta: 'Shop Farewell Gifts',
    secondaryCta: 'Custom Photo Keepsake',
    activeOccasion: 'farewell'
  },
  valentines: {
    heroBadge: "💌 Valentine's & Romantic Edits",
    headline: 'Romantic Surprises That Speak Straight To Her Heart.',
    subtext: 'From butterfly pavé pendants to chocolate-and-sparkle hampers with real dried bouquets, give her an unboxing moment she will treasure.',
    supportingLine: 'Premium satin-ribbon boxes with handwritten wax-sealed notes.',
    primaryCta: "Shop Valentine's Hampers",
    secondaryCta: 'Personalise With Her Initial',
    activeOccasion: 'valentines'
  },
  'rakhi-bhaidooj': {
    heroBadge: '🪔 Sibling Celebrations & Festive Edits',
    headline: 'Thoughtful Gifts That Celebrate Sibling Bonds.',
    subtext: 'Delight your sister on Bhai Dooj or Rakhi with our 9-pair velvet Meenakari organizer box, initial pendants, or sweet treats hampers.',
    supportingLine: 'Festive-ready packaging with personalized sibling notes.',
    primaryCta: 'Shop Gifts For Sister',
    secondaryCta: 'Explore Jhumka Box',
    activeOccasion: 'rakhi-bhaidooj'
  }
};
