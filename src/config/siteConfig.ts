/**
 * ============================================================
 *  SITE CONFIGURATION — Single Source of Truth
 *  Edit this file to update business details across the entire
 *  website automatically. No other files need to be changed.
 * ============================================================
 */

export const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────
  siteName: "PS Photography Indore",

  /** The text rendered in the Navbar logo and Footer wordmark */
  logoText: "PS",

  tagline: "Capturing Timeless Stories",

  // ── Contact ────────────────────────────────────────────────
  phone: "+91 70490 00425",

  /** Used for the floating WhatsApp button — digits only, no spaces */
  whatsapp: "917049000425",

  email: "suryanshyadav@gmail.com",

  bookingEmail: "suryanshyadav@gmail.com",

  // ── Address ────────────────────────────────────────────────
  address: {
    /** Single-line version used in the footer */
    line: "Scheme 78, Vijay Nagar, PS Photography, Indore, MP 452011",

    /** Multi-line version used in the contact page */
    street: "Scheme 78, Vijay Nagar",
    city: "Indore",
    state: "MP",
    postalCode: "452011",
    country: "India",
    note: "By Appointment Only",
  },

  officeHours: "Mon – Sat: 10:00 AM – 7:00 PM",

  /**
   * Paste your Google Maps embed src URL here.
   * Get it from Google Maps → Share → Embed a map → copy the src="…" value.
   * Leave blank to show the decorative map mockup on the Contact page.
   */
  googleMapsEmbedUrl: "",

  // ── Social Media ───────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/ps_photography_indore/",
    facebook: "https://www.facebook.com/1592931720959761?ref=NONE_xav_ig_profile_page_web",
    youtube: "https://www.youtube.com/@psphotographyindore388",
  },

  // ── SEO ────────────────────────────────────────────────────
  seo: {
    titleTemplate: "%s | PS Photography Indore",
    defaultTitle: "PS Photography Indore | Capturing Timeless Stories",
    description:
      "Premium wedding photography and cinematography capturing your timeless stories with elegance.",
  },

  // ── Photographer / Team ────────────────────────────────────
  /**
   * Lead photographer details. Rendered on the About page.
   * To add more photographers later, convert this into an array.
   */
  photographer: {
    name: "Suryansh Yadav",
    role: "Founder & Lead Photographer",
    bio: [
      "Hi, I'm Suryansh. I founded PS Photography with a simple yet profound vision: to document authentic love stories without intruding on the magic of the moment.",
      "Over the last decade, I've had the privilege of traveling the world, capturing diverse cultures, grand celebrations, and quiet, intimate vows. My approach is rooted in fine art portraiture and documentary cinema.",
      "When I'm not behind the lens, you can find me exploring vintage cameras or enjoying a quiet cup of coffee with my rescue dog.",
    ],
  },

  // ── Business Schema (structured data) ─────────────────────
  schema: {
    type: "PhotographyBusiness",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop",
    description: "Premium wedding photography and cinematography.",
    priceRange: "₹85,000+",
  },
} as const;

export type SiteConfig = typeof siteConfig;
