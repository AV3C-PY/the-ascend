// =============================================================================
// THE ASCEND — Market Configuration
// =============================================================================
//
// This is the SINGLE SOURCE OF TRUTH for all market-specific content.
//
// Each market has:
//   - language
//   - currency
//   - completely INDEPENDENT pricing (not auto-converted)
//   - country-specific CTA text
//
// TODO: Update prices per market before going live
// TODO: Add more markets here if you expand to new countries
//
// =============================================================================

export type MarketCode = 'FR' | 'ES' | 'PE';

export interface Market {
  code: MarketCode;
  flag: string;
  label: string;          // Display name in dropdown
  labelShort: string;     // Short code shown in navbar (e.g. "FR")
  currency: string;       // ISO currency code
  currencySymbol: string; // Display symbol (€, S/)
  locale: string;         // BCP 47 locale for number formatting
  lang: string;           // HTML lang attribute
}

// TODO: Add/remove markets here as you expand to new countries
export const MARKETS: Record<MarketCode, Market> = {
  FR: {
    code: 'FR',
    flag: '🇫🇷',
    label: 'Français • EUR',
    labelShort: 'FR',
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'fr-FR',
    lang: 'fr',
  },
  ES: {
    code: 'ES',
    flag: '🇪🇸',
    label: 'Español • EUR',
    labelShort: 'ES',
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'es-ES',
    lang: 'es',
  },
  PE: {
    code: 'PE',
    flag: '🇵🇪',
    label: 'Español • PEN',
    labelShort: 'PE',
    currency: 'PEN',
    currencySymbol: 'S/',
    locale: 'es-PE',
    lang: 'es',
  },
};

export const MARKET_LIST = Object.values(MARKETS);

// Default market shown on first visit (before localStorage preference is read)
// TODO: Change to 'FR' or 'ES' depending on your main audience
export const DEFAULT_MARKET: MarketCode = 'ES';

// =============================================================================
// PRICING — Independent per market
//
// IMPORTANT: These are NOT automatic currency conversions.
// Each country has completely independent, manually set prices.
// TODO: Set the correct price for each market and plan.
// =============================================================================

export interface MarketPlan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;                   // Price in local currency (no conversion)
  originalPrice?: number;          // Optional crossed-out price for promos
  features: string[];
  notIncluded: string[];
  cta: string;
  badge?: string;
  highlighted: boolean;
}

export interface MarketPricing {
  plans: MarketPlan[];
  note?: string;    // Optional footnote below pricing grid
}

// ---------------------------------------------------------------------------
// 🇫🇷 FRANCE — Prices in EUR
// TODO: Update France pricing
// ---------------------------------------------------------------------------
const pricingFR: MarketPricing = {
  plans: [
    {
      id: 'esencial',
      name: 'Esencial',
      tagline: 'Pour démarrer du bon pied.',
      description: 'Tout ce qu\'un commerce local a besoin pour avoir une présence digitale professionnelle.',
      price: 390,              // France Starter price (EUR)
      features: [
        'Site web jusqu\'à 5 pages',
        'Design personnalisé',
        'Optimisation mobile',
        'Formulaire de contact',
        'Google Analytics intégré',
        '1 mois de support inclus',
        'Livraison en 2 semaines',
      ],
      notIncluded: ['SEO avancé', 'Chatbot IA', 'Boutique en ligne', 'Multilingue'],
      cta: 'Demander un devis',
      highlighted: false,
    },
    {
      id: 'profesional',
      name: 'Professionnel',
      tagline: 'Le plus choisi par nos clients.',
      description: 'La solution complète pour les entreprises qui veulent se démarquer et convertir les visites en clients.',
      price: 590,              // France Professional price (EUR)
      features: [
        'Site web jusqu\'à 10 pages',
        'Design premium personnalisé',
        'Optimisation mobile avancée',
        'SEO local inclus',
        'WhatsApp Business configuré',
        'Blog intégré',
        'Google Analytics + Search Console',
        '3 mois de support inclus',
        'Livraison en 3 semaines',
      ],
      notIncluded: ['Chatbot IA', 'Automatisations', 'Boutique en ligne'],
      cta: 'Demander un devis',
      highlighted: true,
      badge: 'Le plus populaire',
    },
    {
      id: 'premium',
      name: 'Premium',
      tagline: 'Transformation digitale complète.',
      description: 'Pour les entreprises qui veulent automatiser, scaler et dominer leur marché avec l\'IA.',
      price: 890,             // France Premium price (EUR)
      features: [
        'Tout du plan Professionnel',
        'Chatbot IA personnalisé',
        'Automatisations de processus',
        'Intégration multilingue',
        'Branding Express inclus',
        'Boutique en ligne (si nécessaire)',
        '6 mois de support prioritaire',
        'Rapports mensuels de performance',
        'Livraison en 4 semaines',
      ],
      notIncluded: [],
      cta: 'Demander une proposition',
      highlighted: false,
      badge: 'Tout inclus',
    },
  ],
  note: 'Prix en euros (€) TTC. Devis gratuit, sans engagement.',
};

// ---------------------------------------------------------------------------
// 🇪🇸 SPAIN — Prices in EUR
// TODO: Update Spain pricing
// ---------------------------------------------------------------------------
const pricingES: MarketPricing = {
  plans: [
    {
      id: 'esencial',
      name: 'Esencial',
      tagline: 'Para empezar con el pie derecho.',
      description: 'Todo lo que un negocio local necesita para tener presencia digital profesional.',
      price: 250,              // Spain Starter price (EUR)
      features: [
        'Sitio web hasta 5 páginas',
        'Diseño personalizado',
        'Optimización móvil',
        'Formulario de contacto',
        'Google Analytics integrado',
        '1 mes de soporte incluido',
        'Entrega en 2 semanas',
      ],
      notIncluded: ['SEO avanzado', 'Chatbot IA', 'Tienda online', 'Multiidioma'],
      cta: 'Solicitar presupuesto',
      highlighted: false,
    },
    {
      id: 'profesional',
      name: 'Profesional',
      tagline: 'El más elegido por nuestros clientes.',
      description: 'La solución completa para negocios que quieren destacar y convertir visitas en clientes.',
      price: 450,              // Spain Professional price (EUR)
      features: [
        'Sitio web hasta 10 páginas',
        'Diseño premium personalizado',
        'Optimización móvil avanzada',
        'SEO local incluido',
        'WhatsApp Business configurado',
        'Blog integrado',
        'Google Analytics + Search Console',
        '3 meses de soporte incluido',
        'Entrega en 3 semanas',
      ],
      notIncluded: ['Chatbot IA', 'Automatizaciones', 'Tienda online'],
      cta: 'Solicitar presupuesto',
      highlighted: true,
      badge: 'Más popular',
    },
    {
      id: 'premium',
      name: 'Premium',
      tagline: 'Transformación digital completa.',
      description: 'Para negocios que quieren automatizar, escalar y dominar su mercado con IA.',
      price: 750,             // Spain Premium price (EUR)
      features: [
        'Todo lo del plan Profesional',
        'Chatbot IA personalizado',
        'Automatizaciones de procesos',
        'Integración multiidioma',
        'Branding Express incluido',
        'Tienda online (si necesaria)',
        '6 meses de soporte prioritario',
        'Reportes mensuales de rendimiento',
        'Entrega en 4 semanas',
      ],
      notIncluded: [],
      cta: 'Solicitar propuesta',
      highlighted: false,
      badge: 'Todo incluido',
    },
  ],
  note: 'Precios en euros (€). Presupuesto gratuito, sin compromiso.',
};

// ---------------------------------------------------------------------------
// 🇵🇪 PERU — Prices in PEN (Soles)
// TODO: Update Peru pricing — completely INDEPENDENT from EUR prices
// ---------------------------------------------------------------------------
const pricingPE: MarketPricing = {
  plans: [
    {
      id: 'esencial',
      name: 'Esencial',
      tagline: 'Para empezar con el pie derecho.',
      description: 'Todo lo que un negocio local necesita para tener presencia digital profesional.',
      price: 499,             // Peru Starter price (S/)
      features: [
        'Sitio web hasta 5 páginas',
        'Diseño personalizado',
        'Optimización móvil',
        'Formulario de contacto',
        'Google Analytics integrado',
        '1 mes de soporte incluido',
        'Entrega en 2 semanas',
      ],
      notIncluded: ['SEO avanzado', 'Chatbot IA', 'Tienda online', 'Multiidioma'],
      cta: 'Solicitar presupuesto',
      highlighted: false,
    },
    {
      id: 'profesional',
      name: 'Profesional',
      tagline: 'El más elegido por nuestros clientes.',
      description: 'La solución completa para negocios que quieren destacar y convertir visitas en clientes.',
      price: 699,             // Peru Professional price (S/)
      features: [
        'Sitio web hasta 10 páginas',
        'Diseño premium personalizado',
        'Optimización móvil avanzada',
        'SEO local incluido',
        'WhatsApp Business configurado',
        'Blog integrado',
        'Google Analytics + Search Console',
        '3 meses de soporte incluido',
        'Entrega en 3 semanas',
      ],
      notIncluded: ['Chatbot IA', 'Automatizaciones', 'Tienda online'],
      cta: 'Solicitar presupuesto',
      highlighted: true,
      badge: 'Más popular',
    },
    {
      id: 'premium',
      name: 'Premium',
      tagline: 'Transformación digital completa.',
      description: 'Para negocios que quieren automatizar, escalar y dominar su mercado con IA.',
      price: 999,             // Peru Premium price (S/)
      features: [
        'Todo lo del plan Profesional',
        'Chatbot IA personalizado',
        'Automatizaciones de procesos',
        'Integración multiidioma',
        'Branding Express incluido',
        'Tienda online (si necesaria)',
        '6 meses de soporte prioritario',
        'Reportes mensuales de rendimiento',
        'Entrega en 4 semanas',
      ],
      notIncluded: [],
      cta: 'Solicitar propuesta',
      highlighted: false,
      badge: 'Todo incluido',
    },
  ],
  note: 'Precios en soles peruanos (S/). Presupuesto gratuito, sin compromiso.',
};

// Map of market code → pricing data
export const MARKET_PRICING: Record<MarketCode, MarketPricing> = {
  FR: pricingFR,
  ES: pricingES,
  PE: pricingPE,
};
