// ===================== CDA MOBILE DETAILING CONFIG =====================
// Brand config for the booking demo page
// Rebrand: edit this file, swap images, done.
// ======================================================================

const BRAND = {
  // Identity
  name: "CDA Mobile Detailing",
  tagline: "Professional car detailing — we come to you",
  shortName: "CDA Detailing",
  location: "Little Rock, AR",

  // Contact
  phone: "501-515-8451",
  email: "cdadetailing@gmail.com",
  instagram: "@CDAdetailing",

  // Visual Identity
  colors: {
    primary: "#1a365d",
    primaryLight: "#2c5282",
    accent: "#3182ce",
    accentHover: "#2b6cb0",
    secondary: "#4a5568",
    gold: "#d69e2e",
    goldLight: "#faf5eb",
    surface: "#f7fafc",
    card: "#ffffff",
    text: "#1a202c",
    textLight: "#718096",
    border: "#e2e8f0",
    success: "#38a169",
    error: "#e53e3e",
  },

  // Assets
  logo: "images/unnamed-2.jpg",
  favicon: "images/unnamed-2.jpg",
  heroImage: "images/unnamed-3.jpg",

  // Hours (CST/Chicago)
  hours: {
    timezone: "America/Chicago",
    openDays: [0, 1, 2, 3, 4, 5, 6], // All week
    openTime: { hour: 7, minute: 0 },
    closeTime: { hour: 20, minute: 0 },
    closedMessage: "Currently Closed · Open daily 7 AM – 8 PM",
    openMessage: "Open Now · Daily 7 AM – 8 PM",
  },

  // Webhook endpoint (you configure this in n8n)
  webhook: {
    // Main booking endpoint — fires when customer submits
    booking: "https://n8n.systack.net/webhook/cda-booking",
    // Optional: reminder trigger endpoint (for daily cron in n8n)
    reminder: "https://n8n.systack.net/webhook/cda-reminder",
  },
};

// ===================== SERVICE PACKAGES =====================
// These match the exact packages from their Google Sites page
const SERVICES = [
  {
    id: "exterior",
    name: "🚗 Exterior: Wash • Clay • Seal",
    shortName: "Exterior Detail",
    desc: "Foam pre-wash, hand wash & air dry. Wheel faces, barrels, tires & wells cleaned and dressed. Clay bar treatment. Exterior glass. Paint sealant for protection & gloss.",
    icon: "✨",
    photo: "images/unnamed-4.jpg",
    prices: {
      small: 10000,
      medium: 12000,
      large: 14000,
    },
    popular: false,
  },
  {
    id: "interior",
    name: "🧼 Interior: Vac • Extract • Restore",
    shortName: "Interior Detail",
    desc: "Full interior & trunk vacuum. Hot water extraction (carpets & cloth seats). Deep clean plastics, vents & trim. Leather & vinyl cleaned and conditioned. Interior glass.",
    icon: "🧽",
    photo: "images/unnamed-5.jpg",
    prices: {
      small: 15000,
      medium: 17500,
      large: 20000,
    },
    popular: false,
  },
  {
    id: "full",
    name: "✨ Full Detail (Inside + Outside)",
    shortName: "Full Detail",
    desc: "Complete transformation. Full exterior Wash•Clay•Seal + interior Vac•Extract•Restore. Door jamb deep cleaning. Optional engine bay detail (+$60).",
    icon: "🌟",
    photo: "images/unnamed-6.jpg",
    prices: {
      small: 25000,
      medium: 29500,
      large: 34000,
    },
    popular: true,
  },
];

// Vehicle size labels
const VEHICLE_SIZES = {
  small: { label: "Small", examples: "Coupe, Sedan, Compact" },
  medium: { label: "Medium", examples: "SUV, Truck, Crossover" },
  large: { label: "Large", examples: "Van, Large SUV, Truck" },
};

// Time slots (30 min increments, 7 AM - 8 PM)
const TIME_SLOTS = [
  "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30"
];

// How far in advance can they book?
const BOOKING_CONFIG = {
  minHoursAhead: 24,      // Must book at least 24 hours out
  maxDaysAhead: 30,        // Can book up to 30 days out
  slotDurationMinutes: 120, // Each booking takes ~2 hours
};

// ===================== WHITE-LABEL CHECKLIST =====================
// 1. Replace BRAND.name, .tagline, .location
// 2. Update BRAND.phone and BRAND.email
// 3. Replace images in images/ folder
// 4. Update SERVICES array with your packages & pricing
// 5. Update BRAND.webhook.booking to your n8n webhook URL
// 6. Update VEHICLE_SIZES if needed
// ======================================================================
