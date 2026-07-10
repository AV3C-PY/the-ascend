// =============================================================================
// THE ASCEND — Site Configuration
// TODO: Update all values below with your real information
// =============================================================================

export const SITE = {
  // TODO: Update company name if needed
  name: "The Ascend",

  // TODO: Update with your production domain
  url: "https://the-ascend.store",

  // TODO: Update main contact email
  email: "info@the-ascend.store",

  // TODO: Update WhatsApp number (French format, no spaces or dashes)
  // Format: international code without + (e.g. 33751158825 for France)
  whatsapp: "33751158825",
  // Raw number for display
  whatsappDisplay: "+33 7 51 15 88 25",

  // TODO: Update Instagram handle (without @)
  instagram: "jsuisnnova",
  instagramUrl: "https://instagram.com/jsuisnnova",

  // TODO: Add LinkedIn URL when available
  linkedin: "",

  // TODO: Add Twitter/X URL when available
  twitter: "",

  // Site description (used for SEO)
  // TODO: Update description
  description: "Transformación digital para pequeñas empresas. Diseño web premium, SEO local, chatbots IA y automatizaciones para restaurantes, clínicas, abogados y más.",

  // Markets served
  markets: ["France", "España", "Perú"],

  // Default language
  lang: "es",

  // TODO: Update OG image path when you have a branded image
  ogImage: "/og-image.jpg",
} as const;

// =============================================================================
// CTA Button Labels
// TODO: Update these labels if you want different CTA wording
// =============================================================================
export const CTA = {
  primary: "Solicitar presupuesto",
  secondary: "Ver servicios",
  contact: "Hablar sobre mi proyecto",
  quote: "Solicitar propuesta",
  schedule: "Agendar una consulta",
  start: "Empezar proyecto",
  whatsapp: "Escríbeme por WhatsApp",
} as const;
