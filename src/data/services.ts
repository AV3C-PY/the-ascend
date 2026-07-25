// =============================================================================
// THE ASCEND — Services Data
// TODO: Edit service names, descriptions, features, and icons here.
// All service-related text across the site comes from this file.
// =============================================================================

export interface Service {
  id: string;
  slug: string;
  icon: string; // Lucide icon name
  name: string;
  tagline: string;
  description: string;
  features: string[];
  idealFor: string[];
  duration: string;
  category: "web" | "marketing" | "ia" | "branding";
  // Plan IDs where this service is included (e.g. ['esencial', 'profesional', 'premium'])
  includedInPlans: string[];
}

// TODO: Add, remove, or edit services here. Each service appears on the
// Services page, the Home overview, and the Pricing page.
export const SERVICES: Service[] = [
  {
    id: "desarrollo-web",
    slug: "desarrollo-web",
    icon: "Globe",
    name: "Desarrollo Web",
    tagline: "Tu presencia digital, impecable.",
    description:
      "Diseñamos y desarrollamos sitios web a medida que transmiten profesionalismo desde el primer segundo. Rápidos, seguros y optimizados para convertir visitantes en clientes.",
    features: [
      "Diseño personalizado y único",
      "Optimizado para móviles",
      "Velocidad de carga superior",
      "Panel de administración sencillo",
      "Integración con Google Analytics",
      "Formularios de contacto funcionales",
    ],
    idealFor: ["Restaurantes", "Clínicas", "Abogados", "Arquitectos", "Hoteles"],
    duration: "2–3 semanas",
    category: "web",
    includedInPlans: ["esencial", "profesional", "premium"],
  },
  {
    id: "shopify",
    slug: "tiendas-shopify",
    icon: "ShoppingBag",
    name: "Tiendas Shopify",
    tagline: "Vende online sin complicaciones.",
    description:
      "Creamos tu tienda online en Shopify con un diseño premium y configuración profesional para que empieces a vender desde el primer día.",
    features: [
      "Diseño de tienda personalizado",
      "Configuración de productos y variantes",
      "Pasarelas de pago integradas",
      "Gestión de inventario",
      "Emails automáticos de pedidos",
      "Optimización para conversión",
    ],
    idealFor: ["Tiendas locales", "Peluquerías", "Boutiques", "Artesanos"],
    duration: "2–4 semanas",
    category: "web",
    includedInPlans: ["premium"],
  },
  {
    id: "branding",
    slug: "branding-express",
    icon: "Sparkles",
    name: "Branding Express",
    tagline: "Una identidad que inspira confianza.",
    description:
      "Creamos la identidad visual de tu negocio: logo, paleta de colores, tipografía y guía de marca. Todo lo que necesitas para ser reconocido y recordado.",
    features: [
      "Logo profesional en todos los formatos",
      "Paleta de colores corporativa",
      "Tipografía seleccionada",
      "Guía de marca básica",
      "Tarjeta de visita digital",
      "Aplicación en redes sociales",
    ],
    idealFor: ["Negocios nuevos", "Rebranding", "Peluquerías", "Restaurantes"],
    duration: "1–2 semanas",
    category: "branding",
    includedInPlans: ["premium"],
  },
  {
    id: "seo-local",
    slug: "seo-local",
    icon: "MapPin",
    name: "SEO Local",
    tagline: "Aparece primero cuando te buscan.",
    description:
      "Posicionamos tu negocio en Google para que los clientes de tu zona te encuentren antes que a tu competencia. Resultados medibles en semanas.",
    features: [
      "Optimización de Google Business Profile",
      "Palabras clave locales estratégicas",
      "Optimización on-page completa",
      "Creación de contenido local",
      "Gestión de reseñas",
      "Reporte mensual de resultados",
    ],
    idealFor: ["Dentistas", "Restaurantes", "Abogados", "Hoteles", "Clínicas"],
    duration: "Servicio mensual",
    category: "marketing",
    includedInPlans: ["profesional", "premium"],
  },
  {
    id: "whatsapp",
    slug: "whatsapp-business",
    icon: "MessageCircle",
    name: "WhatsApp Business",
    tagline: "Atiende a tus clientes donde están.",
    description:
      "Configuramos y automatizamos tu WhatsApp Business para que nunca pierdas una consulta. Mensajes automáticos, catálogo de productos y flujos de atención.",
    features: [
      "Configuración profesional del perfil",
      "Mensajes de bienvenida y ausencia",
      "Catálogo de productos/servicios",
      "Respuestas rápidas configuradas",
      "Integración en tu sitio web",
      "Formación para tu equipo",
    ],
    idealFor: ["Peluquerías", "Restaurantes", "Tiendas", "Clínicas"],
    duration: "3–5 días",
    category: "marketing",
    includedInPlans: ["esencial", "profesional", "premium"],
  },
  {
    id: "chatbot",
    slug: "chatbots-ia",
    icon: "Bot",
    name: "Chatbots IA",
    tagline: "Tu empleado virtual, 24/7.",
    description:
      "Implementamos asistentes virtuales con inteligencia artificial que responden preguntas, capturan leads y reservan citas mientras tú descansas.",
    features: [
      "Configuración según tu negocio",
      "Respuestas en múltiples idiomas",
      "Integración en web y WhatsApp",
      "Captura automática de leads",
      "Transferencia a humano cuando sea necesario",
      "Panel de conversaciones",
    ],
    idealFor: ["Clínicas", "Hoteles", "Abogados", "Dentistas"],
    duration: "1–2 semanas",
    category: "ia",
    includedInPlans: ["premium"],
  },
  {
    id: "automatizaciones",
    slug: "automatizaciones-ia",
    icon: "Zap",
    name: "Automatizaciones IA",
    tagline: "Tu negocio funcionando solo.",
    description:
      "Diseñamos flujos de automatización que eliminan tareas repetitivas: confirmaciones de citas, seguimiento de clientes, reportes automáticos y mucho más.",
    features: [
      "Análisis de procesos actuales",
      "Flujos de automatización personalizados",
      "Integración con herramientas existentes",
      "Notificaciones automáticas",
      "Reportes programados",
      "Soporte y ajustes continuos",
    ],
    idealFor: ["Cualquier negocio con procesos repetitivos"],
    duration: "2–3 semanas",
    category: "ia",
    includedInPlans: ["premium"],
  },
  {
    id: "rediseno",
    slug: "rediseno-web",
    icon: "RefreshCw",
    name: "Rediseño Web",
    tagline: "Tu web actual, transformada.",
    description:
      "Si tu web actual no representa el nivel de tu negocio, la renovamos completamente. Mejor diseño, mejor velocidad, mejor conversión.",
    features: [
      "Auditoría de la web actual",
      "Nuevo diseño moderno y profesional",
      "Migración del contenido existente",
      "Mejora de velocidad",
      "Optimización móvil completa",
      "Redirecciones SEO preservadas",
    ],
    idealFor: ["Cualquier negocio con web desactualizada"],
    duration: "2–3 semanas",
    category: "web",
    includedInPlans: [],
  },
  {
    id: "movil",
    slug: "optimizacion-movil",
    icon: "Smartphone",
    name: "Optimización Móvil",
    tagline: "Perfecta en cualquier pantalla.",
    description:
      "El 70% de tus clientes te visitan desde el móvil. Nos aseguramos de que su experiencia sea impecable en cualquier dispositivo.",
    features: [
      "Auditoría de experiencia móvil",
      "Corrección de diseño responsive",
      "Optimización de velocidad móvil",
      "Mejora de formularios táctiles",
      "Test en múltiples dispositivos",
      "Certificación Core Web Vitals",
    ],
    idealFor: ["Cualquier negocio con web existente"],
    duration: "1 semana",
    category: "web",
    includedInPlans: ["esencial", "profesional", "premium"],
  },
  {
    id: "multiidioma",
    slug: "multiidioma",
    icon: "Languages",
    name: "Multiidioma",
    tagline: "Habla el idioma de tus clientes.",
    description:
      "Expandimos tu negocio a nuevos mercados con sitios web completamente adaptados a diferentes idiomas y culturas. Traducciones profesionales, no automáticas.",
    features: [
      "Traducción profesional del contenido",
      "Arquitectura técnica multiidioma",
      "URLs localizadas (SEO)",
      "Selector de idioma elegante",
      "Adaptación cultural del mensaje",
      "Hasta 3 idiomas incluidos",
    ],
    idealFor: ["Hoteles", "Restaurantes", "Agencias", "Empresas que exportan"],
    duration: "2–3 semanas",
    category: "web",
    includedInPlans: ["premium"],
  },
  {
    id: "menu-digital",
    slug: "menu-digital",
    icon: "Utensils",
    name: "Menú Digital (QR Menu)",
    tagline: "Tu carta online, accesible con un código QR.",
    description:
      "Creamos tu carta digital con código QR para que tus clientes puedan ver el menú desde su móvil. Fácil de actualizar, sin app, con fotos y botones de WhatsApp y Google Maps.",
    features: [
      "QR Menu personalizado",
      "Optimizado para móviles",
      "Actualizaciones sencillas",
      "Fotos de platos y productos",
      "Botón de WhatsApp integrado",
      "Botón de Google Maps integrado",
    ],
    idealFor: ["Restaurantes", "Cafés", "Bares", "Panaderías", "Pequeños negocios de comida"],
    duration: "3–5 días",
    category: "marketing",
    includedInPlans: ["esencial", "profesional", "premium"],
  },
  {
    id: "google-business",
    slug: "google-business",
    icon: "MapPin",
    name: "Google Business Profile",
    tagline: "Aparece en Google cuando te buscan cerca.",
    description:
      "Creamos y optimizamos tu perfil de Google Business para que tu negocio aparezca en Google Maps y las búsquedas locales. Más visibilidad, más clientes.",
    features: [
      "Creación de Google Business Profile",
      "Optimización del perfil",
      "Categorías y atributos",
      "Fotos profesionales del negocio",
      "Horarios de apertura configurados",
      "Integración con WhatsApp",
      "Enlace a tu sitio web",
      "Mejoras de SEO local",
    ],
    idealFor: ["Negocios locales", "Restaurantes", "Clínicas", "Tiendas", "Profesionales"],
    duration: "2–3 días",
    category: "marketing",
    includedInPlans: ["esencial", "profesional", "premium"],
  },
];

export const SERVICE_CATEGORIES = {
  web: "Desarrollo Web",
  marketing: "Marketing Digital",
  ia: "Inteligencia Artificial",
  branding: "Identidad Visual",
} as const;
