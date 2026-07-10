// =============================================================================
// THE ASCEND — FAQ Data
// TODO: Add, edit, or remove questions and answers here.
// All FAQ content across the site comes from this single file.
// =============================================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "proceso" | "precios" | "tecnico" | "soporte";
}

export const FAQ_CATEGORIES = {
  general: "General",
  proceso: "Proceso de trabajo",
  precios: "Precios y pagos",
  tecnico: "Aspectos técnicos",
  soporte: "Soporte y mantenimiento",
} as const;

// TODO: Update, add or remove FAQ items as your business evolves
export const FAQ: FAQItem[] = [
  // --- GENERAL ---
  {
    id: "que-es-the-ascend",
    question: "¿Qué es The Ascend?",
    answer:
      "The Ascend es una empresa especializada en transformación digital para pequeñas y medianas empresas. No solo creamos sitios web: diseñamos estrategias completas de presencia digital que incluyen diseño, SEO, automatización e inteligencia artificial para ayudar a tu negocio a crecer.",
    category: "general",
  },
  {
    id: "donde-trabajan",
    question: "¿En qué países trabajan?",
    answer:
      "Trabajamos principalmente con empresas en Francia, España y Perú, aunque también atendemos clientes en toda América Latina y Europa. Toda la comunicación es en español o francés, y trabajamos 100% en remoto.",
    category: "general",
  },
  {
    id: "tipos-empresa",
    question: "¿Para qué tipo de negocios trabajan?",
    answer:
      "Nos especializamos en pequeñas y medianas empresas: restaurantes, clínicas, dentistas, abogados, arquitectos, peluquerías, hoteles, tiendas locales y cualquier negocio que quiera tener una presencia digital profesional.",
    category: "general",
  },
  {
    id: "necesito-conocimientos",
    question: "¿Necesito conocimientos técnicos para trabajar con vosotros?",
    answer:
      "Absolutamente no. Nos encargamos de todo el proceso técnico. Tú solo necesitas contarnos sobre tu negocio y tus objetivos. Explicamos todo en lenguaje claro, sin tecnicismos.",
    category: "general",
  },

  // --- PROCESO ---
  {
    id: "como-empieza",
    question: "¿Cómo empieza el proceso?",
    answer:
      "Muy simple: solicitas un presupuesto a través de nuestro formulario, WhatsApp o email. Nos ponemos en contacto contigo en menos de 24 horas, analizamos tu proyecto juntos y te enviamos una propuesta detallada sin compromiso.",
    category: "proceso",
  },
  {
    id: "cuanto-tiempo",
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer:
      "Depende del proyecto: un sitio web básico tarda entre 1 y 2 semanas. Un proyecto completo con SEO, chatbot y automatizaciones puede tardar entre 3 y 5 semanas. Siempre te damos una fecha estimada de entrega antes de empezar.",
    category: "proceso",
  },
  {
    id: "necesito-contenido",
    question: "¿Necesito tener el contenido listo antes de empezar?",
    answer:
      "No es obligatorio, pero ayuda. Si no tienes textos o imágenes, podemos orientarte sobre qué necesitas y, en algunos planes, incluimos la redacción de contenido básico. Trabajamos con lo que tienes y te guiamos en el resto.",
    category: "proceso",
  },
  {
    id: "revisiones",
    question: "¿Cuántas revisiones incluye el proyecto?",
    answer:
      "Todos los proyectos incluyen hasta 3 rondas de revisiones sin coste adicional. Nuestra metodología de trabajo está diseñada para que las correcciones sean mínimas gracias a un briefing detallado al inicio.",
    category: "proceso",
  },

  // --- PRECIOS ---
  {
    id: "como-se-paga",
    question: "¿Cómo funciona el proceso de pago?",
    answer:
      "El proceso es completamente humano: primero hablamos, analizamos tu proyecto, te preparamos una propuesta y acordamos los detalles. Una vez todo claro, te enviamos el enlace de pago. No hay checkout automático ni presiones.",
    category: "precios",
  },
  {
    id: "que-metodos-pago",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjeta de crédito/débito, transferencia bancaria y PayPal. Los pagos se gestionan de forma segura a través de LemonSqueezy.",
    category: "precios",
  },
  {
    id: "pago-adelanto",
    question: "¿Hay que pagar todo por adelantado?",
    answer:
      "No. Generalmente trabajamos con un 50% al inicio del proyecto y el 50% restante a la entrega. Para proyectos grandes podemos acordar un plan de pagos en 3 partes.",
    category: "precios",
  },
  {
    id: "presupuesto-gratis",
    question: "¿El presupuesto es gratuito?",
    answer:
      "Sí, siempre. Analizar tu proyecto y prepararte una propuesta detallada no tiene ningún coste. Solo empezamos a facturar cuando decides contratar.",
    category: "precios",
  },

  // --- TÉCNICO ---
  {
    id: "hosting",
    question: "¿Incluye hosting y dominio?",
    answer:
      "El hosting y dominio no están incluidos en el precio base, pero te asesoramos en la elección de los mejores proveedores para tu caso y configuramos todo por ti. Los costes de hosting suelen ser entre 5€ y 20€/mes según el proyecto.",
    category: "tecnico",
  },
  {
    id: "mantenimiento",
    question: "¿La web necesita mantenimiento?",
    answer:
      "Todo sitio web requiere actualizaciones y mantenimiento periódico para mantener la seguridad y el rendimiento. Ofrecemos planes de mantenimiento mensual, aunque muchos clientes gestionan las actualizaciones básicas ellos mismos sin problema.",
    category: "tecnico",
  },
  {
    id: "seo-garantias",
    question: "¿Garantizan resultados de SEO?",
    answer:
      "Nadie puede garantizar posiciones exactas en Google, ya que el algoritmo es externo a nosotros. Lo que sí garantizamos es que implementamos todas las mejores prácticas de SEO y trabajamos hasta ver resultados medibles.",
    category: "tecnico",
  },

  // --- SOPORTE ---
  {
    id: "que-pasa-despues",
    question: "¿Qué pasa después de entregar el proyecto?",
    answer:
      "Según el plan elegido, tienes entre 1 y 6 meses de soporte incluido. Durante ese tiempo puedes consultarnos dudas, solicitar pequeños ajustes y recibir asesoramiento. Al terminar el soporte, puedes contratar un plan de mantenimiento mensual.",
    category: "soporte",
  },
  {
    id: "puedo-editar",
    question: "¿Podré editar mi web yo mismo?",
    answer:
      "Sí. Todos los proyectos incluyen un panel de administración sencillo. Te damos una formación básica para que puedas actualizar textos, imágenes y contenido sin necesitar conocimientos técnicos.",
    category: "soporte",
  },
];
