// =============================================================================
// THE ASCEND — Pricing Data
// TODO: Update prices, currencies, and plan features here.
// This is the ONLY place where pricing lives. Change it here, it changes everywhere.
// =============================================================================

export type Currency = "EUR" | "PEN" | "USD";

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  description: string;
  // TODO: Update prices per currency
  prices: Record<Currency, number | null>;
  features: string[];
  notIncluded: string[];
  cta: string;
  badge?: string; // e.g. "Más popular"
  highlighted: boolean;
}

// TODO: Update these prices when your pricing changes
export const PRICING: PricingTier[] = [
  {
    id: "esencial",
    name: "Esencial",
    tagline: "Para empezar con el pie derecho.",
    description:
      "Todo lo que un negocio local necesita para tener presencia digital profesional.",
    prices: {
      EUR: 490,
      PEN: 1990,
      USD: 520,
    },
    features: [
      "Sitio web hasta 5 páginas",
      "Diseño personalizado",
      "Optimización móvil",
      "Formulario de contacto",
      "Google Analytics integrado",
      "1 mes de soporte incluido",
      "Entrega en 2 semanas",
    ],
    notIncluded: [
      "SEO avanzado",
      "Chatbot IA",
      "Tienda online",
      "Multiidioma",
    ],
    cta: "Solicitar presupuesto",
    highlighted: false,
    badge: undefined,
  },
  {
    id: "profesional",
    name: "Profesional",
    tagline: "El más elegido por nuestros clientes.",
    description:
      "La solución completa para negocios que quieren destacar y convertir visitas en clientes.",
    prices: {
      EUR: 890,
      PEN: 3690,
      USD: 950,
    },
    features: [
      "Sitio web hasta 10 páginas",
      "Diseño premium personalizado",
      "Optimización móvil avanzada",
      "SEO local incluido",
      "WhatsApp Business configurado",
      "Blog integrado",
      "Google Analytics + Search Console",
      "3 meses de soporte incluido",
      "Entrega en 3 semanas",
    ],
    notIncluded: ["Chatbot IA", "Automatizaciones", "Tienda online"],
    cta: "Solicitar presupuesto",
    highlighted: true,
    badge: "Más popular",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Transformación digital completa.",
    description:
      "Para negocios que quieren automatizar, escalar y dominar su mercado con IA.",
    prices: {
      EUR: 1490,
      PEN: 6190,
      USD: 1590,
    },
    features: [
      "Todo lo del plan Profesional",
      "Chatbot IA personalizado",
      "Automatizaciones de procesos",
      "Integración multiidioma",
      "Branding Express incluido",
      "Tienda online (si necesaria)",
      "6 meses de soporte prioritario",
      "Reportes mensuales de rendimiento",
      "Entrega en 4 semanas",
    ],
    notIncluded: [],
    cta: "Solicitar propuesta",
    highlighted: false,
    badge: "Todo incluido",
  },
];

// TODO: Update this message if you want different enterprise CTA text
export const ENTERPRISE = {
  title: "¿Proyecto a medida?",
  description:
    "Si tu negocio tiene necesidades específicas que van más allá de estos planes, hablemos. Cada proyecto es único y merece una propuesta personalizada.",
  cta: "Agendar una consulta",
};

// TODO: Change default currency shown to visitors
// Options: "EUR" | "PEN" | "USD"
export const DEFAULT_CURRENCY: Currency = "EUR";

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  EUR: "€",
  PEN: "S/",
  USD: "$",
};
