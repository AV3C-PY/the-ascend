// =============================================================================
// THE ASCEND — Portfolio Data
// TODO: Replace placeholder projects with real portfolio items.
// TODO: Add real screenshots/images by replacing the image paths.
// TODO: Update client names, industries, results, and services used.
// =============================================================================

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  // TODO: Replace with real project image paths (put images in /public/portfolio/)
  image: string;
  // TODO: Add additional screenshots
  gallery?: string[];
  services: string[]; // Service IDs from services.ts
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  url?: string; // TODO: Add live URL when available
  featured: boolean;
  year: number;
}

// TODO: Replace all portfolio items with real projects
// TODO: Add images in /public/portfolio/ and update image paths here
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "restaurant-paris",
    slug: "restaurant-le-petit-coin",
    title: "Le Petit Coin",
    client: "Restaurant Le Petit Coin",
    industry: "Restaurante",
    location: "Lyon, France",
    // TODO: Replace with real project screenshot
    image: "/portfolio/restaurant-paris.jpg",
    services: ["desarrollo-web", "seo-local"],
    description:
      "Sitio web elegante para un restaurante familiar francés con sistema de reservas integrado y SEO local.",
    challenge:
      "El restaurante era prácticamente invisible en Google y dependía 100% de las recomendaciones boca a boca.",
    solution:
      "Diseñamos un sitio web premium con menú digital, galería de platos y sistema de reservas online, optimizado para búsquedas locales en Lyon.",
    results: [
      "+120% de reservas en los primeros 3 meses",
      "#1  en Google para 'restaurant français Lyon'",
      "40% de reservas provenientes de la web",
    ],
    url: "#",
    featured: true,
    year: 2025,
  },
  {
    id: "clinica-dental-madrid",
    slug: "clinica-dental-sonrie",
    title: "Clínica Dental Sonríe",
    client: "Clínica Dental Sonríe",
    industry: "Salud",
    location: "Madrid, España",
    // TODO: Replace with real project screenshot
    image: "/portfolio/dental-madrid.jpg",
    services: ["desarrollo-web", "chatbot", "seo-local"],
    description:
      "Web médica profesional con chatbot IA para gestión de citas y consultas 24/7.",
    challenge:
      "La clínica perdía pacientes potenciales por no poder responder consultas fuera del horario laboral.",
    solution:
      "Implementamos un chatbot IA entrenado con la información de la clínica, integrado en la web y WhatsApp, capaz de responder dudas y capturar datos de contacto.",
    results: [
      "+85 leads/mes capturados fuera de horario",
      "Reducción del 60% en tiempo dedicado a consultas básicas",
      "#2 en Google para 'dentista Madrid centro'",
    ],
    url: "#",
    featured: true,
    year: 2025,
  },
  {
    id: "hotel-marseille",
    slug: "hotel-belle-vue",
    title: "Hôtel Belle Vue",
    client: "Hôtel Belle Vue",
    industry: "Hostelería",
    location: "Marseille, France",
    // TODO: Replace with real project screenshot
    image: "/portfolio/hotel-marseille.jpg",
    services: ["desarrollo-web", "multiidioma", "seo-local"],
    description:
      "Web hotelera multiidioma con motor de reservas directo y galería visual inmersiva.",
    challenge:
      "El hotel pagaba comisiones del 15-20% a plataformas como Booking por cada reserva.",
    solution:
      "Creamos un sitio web multiidioma (FR/EN/ES) con motor de reservas directo integrado, reduciendo la dependencia de intermediarios.",
    results: [
      "35% de reservas directas en 6 meses",
      "Ahorro de +8.000€/año en comisiones",
      "Tráfico orgánico multiplicado ×3",
    ],
    url: "#",
    featured: true,
    year: 2025,
  },
  {
    id: "peluqueria-lima",
    slug: "peluqueria-estilo-lima",
    title: "Estilo Lima",
    client: "Peluquería Estilo Lima",
    industry: "Belleza",
    location: "Lima, Perú",
    // TODO: Replace with real project screenshot
    image: "/portfolio/peluqueria-lima.jpg",
    services: ["desarrollo-web", "whatsapp", "branding"],
    description:
      "Identidad de marca completa, sitio web moderno y sistema de citas por WhatsApp para peluquería premium.",
    challenge:
      "La peluquería operaba solo con recomendaciones y no tenía identidad visual coherente.",
    solution:
      "Desarrollamos el branding completo, un sitio web con galería de trabajos y un sistema de citas automatizado por WhatsApp.",
    results: [
      "+40% de clientes nuevos en 2 meses",
      "Sistema de citas 100% automatizado",
      "Identidad visual reconocible en RRSS",
    ],
    url: "#",
    featured: false,
    year: 2025,
  },
];

export const INDUSTRIES = [
  "Todos",
  "Restaurante",
  "Salud",
  "Hostelería",
  "Belleza",
  "Legal",
  "Arquitectura",
] as const;
