// =============================================================================
// THE ASCEND — Spanish Translations
// =============================================================================
//
// This file contains ALL Spanish UI text for the website.
// Used for markets: ES (España) and PE (Perú).
//
// TODO: Update any text that changes for your business.
// TODO: If adding a new section/page, add its keys here AND in fr.ts.
//
// Key structure:
//   nav.*         Navigation links & header
//   hero.*        Hero section (homepage)
//   services.*    Services section & page
//   portfolio.*   Portfolio section & page
//   testimonials.* Testimonials section
//   process.*     Process section & page
//   pricing.*     Pricing page
//   faq.*         FAQ page & section
//   about.*       About us page (sobre nosotros)
//   contact.*     Contact page
//   footer.*      Footer
//   common.*      Shared/reusable strings
//   pages.*       Page-specific text not covered above
//   404.*         404 error page
// =============================================================================

import { SITE } from '../data/site';

export const es = {
  // ---------------------------------------------------------------------------
  // SEO
  // ---------------------------------------------------------------------------
  seo: {
    home: {
      title: 'The Ascend — Transformación Digital para tu Negocio',
      metaDesc: 'Diseño web premium, SEO local, chatbots IA y automatizaciones para restaurantes, clínicas, abogados y pequeñas empresas en Francia, España y Perú.'
    }
  },

  // ---------------------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------------------
  nav: {
    services:   'Servicios',
    portfolio:  'Portfolio',
    process:    'Proceso',
    pricing:    'Precios',
    about:      'Nosotros',
    contact:    'Contactar',
    ctaPrimary: 'Agendar llamada',
    menuOpen:   'Abrir menú',
    menuClose:  'Cerrar menú',
    skipToContent: 'Ir al contenido principal',
  },

  // ---------------------------------------------------------------------------
  // HERO (Homepage)
  // ---------------------------------------------------------------------------
  hero: {
    badge:     'Transformación digital para negocios reales',
    title:     'Tu negocio merece\nuna presencia digital\nque impresione.',
    subtitle:  'Diseñamos webs, automatizamos procesos e implementamos IA para que restaurantes, clínicas, abogados y pequeñas empresas de Francia, España y Perú compitan con los grandes.',
    ctaPrimary:   'Agendar llamada gratuita',
    ctaSecondary: 'Ver nuestro trabajo',
    proof: {
      projects: '+40',
      projectsLabel: 'Proyectos entregados',
      countries: '3',
      countriesLabel: 'Países',
      satisfaction: '98%',
      satisfactionLabel: 'Satisfacción',
    },
  },

  // ---------------------------------------------------------------------------
  // COMMON / SHARED
  // ---------------------------------------------------------------------------
  common: {
    learnMore:          'Ver más',
    viewAll:            'Ver todos',
    seeProject:         'Ver caso de estudio',
    requestQuote:       'Solicitar presupuesto',
    scheduleCall:       'Agendar llamada',
    freeQuote:          'Presupuesto gratuito',
    noCommitment:       'Sin compromiso',
    send:               'Enviar solicitud',
    sending:            'Enviando...',
    readMore:           'Leer más',
    viewPortfolio:      'Ver todos los proyectos',
    backToHome:         'Volver al inicio',
    featuredLabel:      'Destacado',
    allRightsReserved:  'Todos los derechos reservados.',
    by:                 'por',
    duration:           'Duración',
    idealFor:           'Ideal para',
    years:              'años',
    months:             'meses',
    weeks:              'semanas',
    days:               'días',
    resultsLabel:       'Resultados',
    processLabel:       'Proceso',
    sectionLabel: {
      portfolio:     'Portfolio',
      services:      'Servicios',
      process:       'Proceso',
      testimonials:  'Testimonios',
      pricing:       'Precios',
      faq:           'Preguntas frecuentes',
      about:         'Sobre nosotros',
      markets:       'Mercados',
      contact:       'Contacto',
    },
  },

  // ---------------------------------------------------------------------------
  // SERVICES (Section on homepage + full Services page)
  // ---------------------------------------------------------------------------
  services: {
    sectionLabel:  'Servicios',
    title:         'Todo lo que tu negocio necesita para crecer online.',
    subtitle:      'Desde diseño web hasta automatización con IA. Servicios diseñados para pequeñas y medianas empresas.',
    ctaViewAll:    'Ver todos los servicios',

    categories: {
      web:       'Desarrollo Web',
      marketing: 'Marketing Digital',
      ia:        'Inteligencia Artificial',
      branding:  'Identidad Visual',
    },

    // TODO: Update service names/descriptions in src/data/services.ts
    // French translations are in fr.ts under services.items
    items: {
      'desarrollo-web': {
        name:        'Desarrollo Web',
        tagline:     'Tu presencia digital, impecable.',
        description: 'Diseñamos y desarrollamos sitios web a medida que transmiten profesionalismo desde el primer segundo. Rápidos, seguros y optimizados para convertir visitantes en clientes.',
        features:    ['Diseño personalizado y único', 'Optimizado para móviles', 'Velocidad de carga superior', 'Panel de administración sencillo', 'Integración con Google Analytics', 'Formularios de contacto funcionales'],
        idealFor:    ['Restaurantes', 'Clínicas', 'Abogados', 'Arquitectos', 'Hoteles'],
        duration:    '2–3 semanas',
      },
      'shopify': {
        name:        'Tiendas Shopify',
        tagline:     'Vende online sin complicaciones.',
        description: 'Creamos tu tienda online en Shopify con un diseño premium y configuración profesional para que empieces a vender desde el primer día.',
        features:    ['Diseño de tienda personalizado', 'Configuración de productos y variantes', 'Pasarelas de pago integradas', 'Gestión de inventario', 'Emails automáticos de pedidos', 'Optimización para conversión'],
        idealFor:    ['Tiendas locales', 'Peluquerías', 'Boutiques', 'Artesanos'],
        duration:    '2–4 semanas',
      },
      'branding': {
        name:        'Branding Express',
        tagline:     'Una identidad que inspira confianza.',
        description: 'Creamos la identidad visual de tu negocio: logo, paleta de colores, tipografía y guía de marca. Todo lo que necesitas para ser reconocido y recordado.',
        features:    ['Logo profesional en todos los formatos', 'Paleta de colores corporativa', 'Tipografía seleccionada', 'Guía de marca básica', 'Tarjeta de visita digital', 'Aplicación en redes sociales'],
        idealFor:    ['Negocios nuevos', 'Rebranding', 'Peluquerías', 'Restaurantes'],
        duration:    '1–2 semanas',
      },
      'seo-local': {
        name:        'SEO Local',
        tagline:     'Aparece primero cuando te buscan.',
        description: 'Posicionamos tu negocio en Google para que los clientes de tu zona te encuentren antes que a tu competencia. Resultados medibles en semanas.',
        features:    ['Optimización de Google Business Profile', 'Palabras clave locales estratégicas', 'Optimización on-page completa', 'Creación de contenido local', 'Gestión de reseñas', 'Reporte mensual de resultados'],
        idealFor:    ['Dentistas', 'Restaurantes', 'Abogados', 'Hoteles', 'Clínicas'],
        duration:    'Servicio mensual',
      },
      'whatsapp': {
        name:        'WhatsApp Business',
        tagline:     'Atiende a tus clientes donde están.',
        description: 'Configuramos y automatizamos tu WhatsApp Business para que nunca pierdas una consulta. Mensajes automáticos, catálogo de productos y flujos de atención.',
        features:    ['Configuración profesional del perfil', 'Mensajes de bienvenida y ausencia', 'Catálogo de productos/servicios', 'Respuestas rápidas configuradas', 'Integración en tu sitio web', 'Formación para tu equipo'],
        idealFor:    ['Peluquerías', 'Restaurantes', 'Tiendas', 'Clínicas'],
        duration:    '3–5 días',
      },
      'chatbot': {
        name:        'Chatbots IA',
        tagline:     'Tu empleado virtual, 24/7.',
        description: 'Implementamos asistentes virtuales con inteligencia artificial que responden preguntas, capturan leads y reservan citas mientras tú descansas.',
        features:    ['Configuración según tu negocio', 'Respuestas en múltiples idiomas', 'Integración en web y WhatsApp', 'Captura automática de leads', 'Transferencia a humano cuando sea necesario', 'Panel de conversaciones'],
        idealFor:    ['Clínicas', 'Hoteles', 'Abogados', 'Dentistas'],
        duration:    '1–2 semanas',
      },
      'automatizaciones': {
        name:        'Automatizaciones IA',
        tagline:     'Tu negocio funcionando solo.',
        description: 'Diseñamos flujos de automatización que eliminan tareas repetitivas: confirmaciones de citas, seguimiento de clientes, reportes automáticos y mucho más.',
        features:    ['Análisis de procesos actuales', 'Flujos de automatización personalizados', 'Integración con herramientas existentes', 'Notificaciones automáticas', 'Reportes programados', 'Soporte y ajustes continuos'],
        idealFor:    ['Cualquier negocio con procesos repetitivos'],
        duration:    '2–3 semanas',
      },
      'rediseno': {
        name:        'Rediseño Web',
        tagline:     'Tu web actual, transformada.',
        description: 'Si tu web actual no representa el nivel de tu negocio, la renovamos completamente. Mejor diseño, mejor velocidad, mejor conversión.',
        features:    ['Auditoría de la web actual', 'Nuevo diseño moderno y profesional', 'Migración del contenido existente', 'Mejora de velocidad', 'Optimización móvil completa', 'Redirecciones SEO preservadas'],
        idealFor:    ['Cualquier negocio con web desactualizada'],
        duration:    '2–3 semanas',
      },
      'movil': {
        name:        'Optimización Móvil',
        tagline:     'Perfecta en cualquier pantalla.',
        description: 'El 70% de tus clientes te visitan desde el móvil. Nos aseguramos de que su experiencia sea impecable en cualquier dispositivo.',
        features:    ['Auditoría de experiencia móvil', 'Corrección de diseño responsive', 'Optimización de velocidad móvil', 'Mejora de formularios táctiles', 'Test en múltiples dispositivos', 'Certificación Core Web Vitals'],
        idealFor:    ['Cualquier negocio con web existente'],
        duration:    '1 semana',
      },
      'multiidioma': {
        name:        'Multiidioma',
        tagline:     'Habla el idioma de tus clientes.',
        description: 'Expandimos tu negocio a nuevos mercados con sitios web completamente adaptados a diferentes idiomas y culturas. Traducciones profesionales, no automáticas.',
        features:    ['Traducción profesional del contenido', 'Arquitectura técnica multiidioma', 'URLs localizadas (SEO)', 'Selector de idioma elegante', 'Adaptación cultural del mensaje', 'Hasta 3 idiomas incluidos'],
        idealFor:    ['Hoteles', 'Restaurantes', 'Agencias', 'Empresas que exportan'],
        duration:    '2–3 semanas',
      },
    },

    // Services page specific
    page: {
      title:    'Servicios',
      heading:  'Todo lo que necesitas para crecer online.',
      subtitle: 'No vendemos servicios. Vendemos resultados medibles para tu negocio.',
      allServices: 'Todos los servicios',
      duration: 'Duración estimada',
      idealFor: 'Ideal para',
      features: 'Qué incluye',
      requestService: 'Solicitar este servicio',
      ctaTitle:    '¿No sabes qué necesitas?',
      ctaSubtitle: 'Cuéntame sobre tu negocio y te digo exactamente qué necesitas. Sin tecnicismos, sin presiones.',
    },
  },

  // ---------------------------------------------------------------------------
  // PORTFOLIO
  // ---------------------------------------------------------------------------
  portfolio: {
    sectionLabel: 'Portfolio',
    title:        'Proyectos que hablan\npor sí solos.',
    subtitle:     'Cada proyecto es un negocio transformado. Resultados reales, medibles y documentados.',
    ctaViewAll:   'Ver todos los proyectos',
    seeCase:      'Ver caso de estudio',

    page: {
      title:    'Portfolio',
      heading:  'Proyectos reales.\nResultados medibles.',
      subtitle: 'Cada caso de estudio documenta el reto, la solución y los resultados obtenidos.',
    },

    stats: {
      industriesNumber: '7',
      industriesLabel: 'Industrias',
      satisfactionLabel: 'Clientes satisfechos',
    },

    // TODO: Update portfolio item descriptions in src/data/portfolio.ts
    // French translations are in fr.ts under portfolio.items
    items: {
      'restaurant-paris': {
        industry:    'Restaurante',
        description: 'Sitio web elegante para un restaurante familiar francés con sistema de reservas integrado y SEO local.',
        challenge:   'El restaurante era prácticamente invisible en Google y dependía 100% de las recomendaciones boca a boca.',
        solution:    'Diseñamos un sitio web premium con menú digital, galería de platos y sistema de reservas online, optimizado para búsquedas locales en Lyon.',
        results:     ['+120% de reservas en los primeros 3 meses', '#1 en Google para "restaurant français Lyon"', '40% de reservas provenientes de la web'],
      },
      'clinica-dental-madrid': {
        industry:    'Salud',
        description: 'Web médica profesional con chatbot IA para gestión de citas y consultas 24/7.',
        challenge:   'La clínica perdía pacientes potenciales por no poder responder consultas fuera del horario laboral.',
        solution:    'Implementamos un chatbot IA entrenado con la información de la clínica, integrado en la web y WhatsApp, capaz de responder dudas y capturar datos de contacto.',
        results:     ['+85 leads/mes capturados fuera de horario', 'Reducción del 60% en tiempo dedicado a consultas básicas', '#2 en Google para "dentista Madrid centro"'],
      },
      'bufete-barcelona': {
        industry:    'Legal',
        description: 'Sitio web de abogados premium que transmite autoridad, confianza y convierte visitas en consultas.',
        challenge:   'El bufete no tenía presencia digital y perdía clientes frente a competidores con mejor imagen online.',
        solution:    'Desarrollamos una web premium con diseño austero y elegante, blog de artículos legales para SEO y formulario de consulta urgente.',
        results:     ['+200% de consultas online en 60 días', '#3 en Google para "abogados Barcelona"', 'Imagen de marca reforzada'],
      },
      'hotel-marseille': {
        industry:    'Hostelería',
        description: 'Web hotelera multiidioma con reservas directas para eliminar comisiones de OTAs.',
        challenge:   'El hotel pagaba hasta un 25% de comisión a plataformas como Booking.com por cada reserva.',
        solution:    'Creamos un sitio multiidioma (FR/EN/ES) con motor de reservas directo, galería premium y integración con sistema PMS del hotel.',
        results:     ['35% de reservas directas en 2 meses', 'Ahorro de €2,400/mes en comisiones', '+4.8★ en Google Maps'],
      },
      'peluqueria-lima': {
        industry:    'Belleza',
        description: 'Sistema de citas automatizado con WhatsApp Business y web optimizada para Lima.',
        challenge:   'La peluquería perdía clientes por no contestar WhatsApp a tiempo y no tener sistema de citas.',
        solution:    'Implementamos WhatsApp Business automatizado con agenda online integrada y web local optimizada para SEO en Lima.',
        results:     ['40% de crecimiento en clientes en 2 meses', '0 citas perdidas por falta de respuesta', 'Ahorro de 3h/día en gestión de citas'],
      },
      'arquitecto-paris': {
        industry:    'Arquitectura',
        description: 'Portfolio digital premium para captación de clientes de alto perfil en París.',
        challenge:   'La arquitecta dependía exclusivamente de referencias para conseguir nuevos proyectos.',
        solution:    'Diseñamos un portfolio digital de alto impacto visual con presentaciones de proyectos cinematográficas y SEO para búsquedas de arquitectos en París.',
        results:     ['3 nuevos proyectos captados en 30 días', 'Posicionamiento en búsquedas locales de arquitectura', 'Portfolio visto por 800+ potenciales clientes/mes'],
      },
    },
  },

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------
  testimonials: {
    sectionLabel: 'Testimonios',
    title:        'Lo que dicen\nnuestros clientes.',
    subtitle:     'Resultados reales de negocios reales. Sin filtros.',
    pauseHint:    'Pasa el cursor para pausar',
  },

  // ---------------------------------------------------------------------------
  // PROCESS
  // ---------------------------------------------------------------------------
  process: {
    sectionLabel: 'Proceso',
    title:        'Simple, transparente\ny sin sorpresas.',
    subtitle:     'Cada proyecto sigue el mismo proceso probado. Sabes exactamente en qué punto estamos en todo momento.',
    ctaStart:     'Empezar ahora',

    steps: {
      'consulta': {
        title:       'Consulta inicial',
        description: 'Nos cuentas sobre tu negocio, tus objetivos y lo que necesitas. Sin formularios largos, sin tecnicismos. Solo una conversación.',
        duration:    '1 día',
        details:     ['Análisis de tu situación actual', 'Entendimiento de tus objetivos', 'Identificación de oportunidades', 'Propuesta inicial sin compromiso'],
      },
      'propuesta': {
        title:       'Propuesta personalizada',
        description: 'Preparamos una propuesta detallada con estrategia, alcance, plazos y presupuesto. Sin sorpresas.',
        duration:    '1–2 días',
        details:     ['Estrategia digital adaptada a tu negocio', 'Alcance detallado del proyecto', 'Cronograma de entrega', 'Presupuesto desglosado'],
      },
      'diseno': {
        title:       'Diseño y desarrollo',
        description: 'Nuestro equipo trabaja en tu proyecto con actualizaciones periódicas. Tú apruebas, nosotros ejecutamos.',
        duration:    '1–4 semanas',
        details:     ['Diseño visual personalizado', 'Desarrollo técnico profesional', 'Actualizaciones semanales de progreso', 'Revisiones incluidas en cada etapa'],
      },
      'revision': {
        title:       'Revisión y ajustes',
        description: 'Presentamos el resultado y refinamos cualquier detalle hasta que estés completamente satisfecho.',
        duration:    '3–5 días',
        details:     ['Presentación del proyecto completo', 'Hasta 3 rondas de revisiones incluidas', 'Ajustes de diseño y contenido', 'Pruebas en todos los dispositivos'],
      },
      'lanzamiento': {
        title:       'Lanzamiento',
        description: 'Publicamos tu proyecto, lo configuramos todo y te entregamos formación básica para que puedas gestionarlo.',
        duration:    '1–2 días',
        details:     ['Publicación en producción', 'Configuración de analytics y SEO', 'Formación básica de administración', 'Documentación de accesos'],
      },
      'soporte': {
        title:       'Soporte y crecimiento',
        description: 'No desaparecemos después del lanzamiento. Estamos disponibles para soporte, mejoras y seguir creciendo juntos.',
        duration:    '1–6 meses incluido',
        details:     ['Soporte técnico incluido', 'Monitorización de rendimiento', 'Sugerencias de mejora continua', 'Acceso prioritario para nuevos proyectos'],
      },
    },

    page: {
      title:    'Proceso',
      heading:  'Así trabajamos.',
      subtitle: 'Un proceso claro, sin fricciones, diseñado para que cada proyecto sea un éxito.',
      guarantee: {
        label:   'Garantía',
        title:   'Tu satisfacción, garantizada.',
        subtitle: 'Si el resultado no cumple lo acordado en la propuesta inicial, revisamos sin coste adicional hasta que estés satisfecho.',
        items: [
          '3 rondas de revisión incluidas en todos los proyectos',
          'Entrega en los plazos acordados o te devolvemos el depósito',
          '30 días de soporte gratuito tras el lanzamiento',
          'Comunicación directa con el equipo durante todo el proceso',
        ],
      },
    },
  },

  // ---------------------------------------------------------------------------
  // PRICING
  // ---------------------------------------------------------------------------
  pricing: {
    sectionLabel: 'Precios',
    title:        'Inversión transparente.\nSin sorpresas.',
    subtitle:     'Elegimos no tener checkout automático. Porque cada negocio es único y merece una propuesta hecha a medida. Hablamos primero, pagamos después.',
    currencyNote: 'Precios en euros (€). Presupuesto gratuito, sin compromiso.',

    enterprise: {
      title:       '¿Proyecto a medida?',
      description: 'Si tu negocio tiene necesidades específicas que van más allá de estos planes, hablemos. Cada proyecto es único y merece una propuesta personalizada.',
      cta:         'Agendar una consulta',
    },

    paymentFlow: {
      sectionLabel: '¿Cómo funciona el pago?',
      title:        '100% humano.\nSin presiones.',
      subtitle:     'Nunca te pediremos que pagues antes de hablar contigo. El proceso siempre empieza con una conversación.',
      steps: [
        'Solicitas presupuesto a través del formulario o WhatsApp.',
        'Hablamos sobre tu proyecto sin ningún compromiso.',
        'Analizamos tu caso y preparamos una propuesta personalizada.',
        'Si estás convencido, te enviamos el enlace de pago.',
        'Pagas y comenzamos a trabajar inmediatamente.',
      ],
    },

    faqTitle: 'Dudas sobre precios',
    faq: {
      paymentProcess: {
        question: '¿Cómo funciona el proceso de pago?',
        answer: 'El proceso es completamente humano: primero hablamos, analizamos tu proyecto, te preparamos una propuesta y acordamos los detalles. Una vez todo claro, te enviamos el enlace de pago. No hay checkout automático ni presiones.'
      },
      paymentMethods: {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos tarjeta de crédito/débito, transferencia bancaria y PayPal. Los pagos se gestionan de forma segura a través de LemonSqueezy.'
      },
      upfront: {
        question: '¿Hay que pagar todo por adelantado?',
        answer: 'No. Generalmente trabajamos con un 50% al inicio del proyecto y el 50% restante a la entrega. Para proyectos grandes podemos acordar un plan de pagos en 3 partes.'
      },
      freeQuote: {
        question: '¿El presupuesto es gratuito?',
        answer: 'Sí, siempre. Analizar tu proyecto y prepararte una propuesta detallada no tiene ningún coste. Solo empezamos a facturar cuando decides contratar.'
      }
    }
  },

  // ---------------------------------------------------------------------------
  // FAQ
  // ---------------------------------------------------------------------------
  faq: {
    sectionLabel: 'Preguntas frecuentes',
    title:        'Resolvemos todas\ntus dudas.',
    subtitle:     'Si no encuentras lo que buscas, escríbenos directamente.',
    ctaContact:   'Contactar directamente',

    categories: {
      general:  'General',
      proceso:  'Proceso de trabajo',
      precios:  'Precios y pagos',
      tecnico:  'Aspectos técnicos',
      soporte:  'Soporte y mantenimiento',
    },

    // TODO: Update FAQ content in src/data/faq.ts
    // French translations are in fr.ts under faq.items
    items: {
      'que-es-the-ascend': {
        question: '¿Qué es The Ascend?',
        answer:   'The Ascend es una empresa especializada en transformación digital para pequeñas y medianas empresas. No solo creamos sitios web: diseñamos estrategias completas de presencia digital que incluyen diseño, SEO, automatización e inteligencia artificial para ayudar a tu negocio a crecer.',
      },
      'donde-trabajan': {
        question: '¿En qué países trabajan?',
        answer:   'Trabajamos principalmente con empresas en Francia, España y Perú, aunque también atendemos clientes en toda América Latina y Europa. Toda la comunicación es en español o francés, y trabajamos 100% en remoto.',
      },
      'tipos-empresa': {
        question: '¿Para qué tipo de negocios trabajan?',
        answer:   'Nos especializamos en pequeñas y medianas empresas: restaurantes, clínicas, dentistas, abogados, arquitectos, peluquerías, hoteles, tiendas locales y cualquier negocio que quiera tener una presencia digital profesional.',
      },
      'necesito-conocimientos': {
        question: '¿Necesito conocimientos técnicos para trabajar con vosotros?',
        answer:   'Absolutamente no. Nos encargamos de todo el proceso técnico. Tú solo necesitas contarnos sobre tu negocio y tus objetivos. Explicamos todo en lenguaje claro, sin tecnicismos.',
      },
      'como-empieza': {
        question: '¿Cómo empieza el proceso?',
        answer:   'Muy simple: solicitas un presupuesto a través de nuestro formulario, WhatsApp o email. Nos ponemos en contacto contigo en menos de 24 horas, analizamos tu proyecto juntos y te enviamos una propuesta detallada sin compromiso.',
      },
      'cuanto-tiempo': {
        question: '¿Cuánto tiempo tarda un proyecto?',
        answer:   'Depende del proyecto: un sitio web básico tarda entre 1 y 2 semanas. Un proyecto completo con SEO, chatbot y automatizaciones puede tardar entre 3 y 5 semanas. Siempre te damos una fecha estimada de entrega antes de empezar.',
      },
      'necesito-contenido': {
        question: '¿Necesito tener el contenido listo antes de empezar?',
        answer:   'No es obligatorio, pero ayuda. Si no tienes textos o imágenes, podemos orientarte sobre qué necesitas y, en algunos planes, incluimos la redacción de contenido básico. Trabajamos con lo que tienes y te guiamos en el resto.',
      },
      'revisiones': {
        question: '¿Cuántas revisiones incluye el proyecto?',
        answer:   'Todos los proyectos incluyen hasta 3 rondas de revisiones sin coste adicional. Nuestra metodología de trabajo está diseñada para que las correcciones sean mínimas gracias a un briefing detallado al inicio.',
      },
      'como-se-paga': {
        question: '¿Cómo funciona el proceso de pago?',
        answer:   'El proceso es completamente humano: primero hablamos, analizamos tu proyecto, te preparamos una propuesta y acordamos los detalles. Una vez todo claro, te enviamos el enlace de pago. No hay checkout automático ni presiones.',
      },
      'que-metodos-pago': {
        question: '¿Qué métodos de pago aceptan?',
        answer:   'Aceptamos tarjeta de crédito/débito, transferencia bancaria y PayPal. Los pagos se gestionan de forma segura a través de LemonSqueezy.',
      },
      'pago-adelanto': {
        question: '¿Hay que pagar todo por adelantado?',
        answer:   'No. Generalmente trabajamos con un 50% al inicio del proyecto y el 50% restante a la entrega. Para proyectos grandes podemos acordar un plan de pagos en 3 partes.',
      },
      'presupuesto-gratis': {
        question: '¿El presupuesto es gratuito?',
        answer:   'Sí, siempre. Analizar tu proyecto y prepararte una propuesta detallada no tiene ningún coste. Solo empezamos a facturar cuando decides contratar.',
      },
      'hosting': {
        question: '¿Incluye hosting y dominio?',
        answer:   'El hosting y dominio no están incluidos en el precio base, pero te asesoramos en la elección de los mejores proveedores para tu caso y configuramos todo por ti. Los costes de hosting suelen ser entre 5€ y 20€/mes según el proyecto.',
      },
      'mantenimiento': {
        question: '¿La web necesita mantenimiento?',
        answer:   'Todo sitio web requiere actualizaciones y mantenimiento periódico para mantener la seguridad y el rendimiento. Ofrecemos planes de mantenimiento mensual, aunque muchos clientes gestionan las actualizaciones básicas ellos mismos sin problema.',
      },
      'seo-garantias': {
        question: '¿Garantizan resultados de SEO?',
        answer:   'Nadie puede garantizar posiciones exactas en Google, ya que el algoritmo es externo a nosotros. Lo que sí garantizamos es que implementamos todas las mejores prácticas de SEO y trabajamos hasta ver resultados medibles.',
      },
      'que-pasa-despues': {
        question: '¿Qué pasa después de entregar el proyecto?',
        answer:   'Según el plan elegido, tienes entre 1 y 6 meses de soporte incluido. Durante ese tiempo puedes consultarnos dudas, solicitar pequeños ajustes y recibir asesoramiento. Al terminar el soporte, puedes contratar un plan de mantenimiento mensual.',
      },
      'puedo-editar': {
        question: '¿Podré editar mi web yo mismo?',
        answer:   'Sí. Todos los proyectos incluyen un panel de administración sencillo. Te damos una formación básica para que puedas actualizar textos, imágenes y contenido sin necesitar conocimientos técnicos.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // ABOUT (Sobre nosotros)
  // ---------------------------------------------------------------------------
  about: {
    sectionLabel: 'Sobre nosotros',
    title:        'No somos una agencia.\nSomos tu equipo digital.',
    subtitle:     'The Ascend nació de una convicción simple: las pequeñas empresas merecen el mismo nivel de calidad digital que las grandes marcas. Sin presupuestos astronómicos. Sin procesos interminables. Sin tecnicismos innecesarios.',

    philosophy: {
      title: 'Nuestra filosofía',
      items: [
        {
          label: 'Lo que creemos',
          title: 'Cada negocio merece brillar.',
          body: 'Un restaurante de barrio, una clínica familiar o un abogado local merecen la misma presencia digital que cualquier gran empresa. La tecnología debe ser un igualador, no una barrera.',
        },
        {
          label: 'Cómo trabajamos',
          title: 'Claro, humano y sin rodeos.',
          body: 'No hablamos de APIs, frameworks ni stacks tecnológicos. Hablamos de clientes, ventas y crecimiento. Nuestro trabajo es traducir la tecnología en resultados que tú puedas ver y medir.',
        },
        {
          label: 'Nuestro compromiso',
          title: 'Tu éxito es nuestro portfolio.',
          body: 'No somos proveedores que entregan y desaparecen. Somos socios a largo plazo. Tu crecimiento es nuestra mejor tarjeta de presentación.',
        },
      ]
    },

    mission: {
      label:    'Misión',
      title:    'Nuestra misión',
      text:     'Ayudar a pequeñas y medianas empresas a crecer mediante diseño moderno, automatización e inteligencia artificial. No vendemos páginas web. Vendemos transformación digital.',
    },

    story: {
      label:   'Historia',
      title:   'Nuestra historia',
      text:    'The Ascend nació de una observación simple: los mejores restaurantes, clínicas y pequeños negocios a menudo tienen la peor presencia digital. No porque no lo merezcan, sino porque las agencias tradicionales eran demasiado caras o demasiado lentas para ellos.',
      text2:   'Decidimos crear una empresa diferente: ágil, honesta y especializada en negocios reales. Trabajamos con restaurantes en Lyon, clínicas en Madrid, arquitectas en París y peluquerías en Lima. Cada proyecto nos hace mejores.',
    },

    values: {
      label:  'Valores',
      title:  'Lo que nos define',
      items: [
        { title: 'Honestidad radical',       description: 'Si no necesitas algo, te lo decimos. No inflamos presupuestos ni vendemos servicios innecesarios.' },
        { title: 'Resultados, no promesas',   description: 'Cada proyecto incluye métricas claras de éxito. No entregamos hasta que el resultado esté a la altura.' },
        { title: 'Diseño sin compromisos',    description: 'Creemos que el diseño premium no es un lujo. Es una herramienta de negocio que genera retorno.' },
        { title: 'Proceso humano',            description: 'Sin bots, sin formularios imposibles. Solo personas reales que entienden tu negocio.' },
        { title: 'Tecnología accesible',      description: 'La IA y la automatización no son solo para grandes empresas. Te las hacemos accesibles.' },
        { title: 'Relaciones a largo plazo',  description: 'El 70% de nuestros clientes vuelven. No buscamos transacciones, buscamos socios.' },
      ],
    },

    markets: {
      label:  'Donde estamos',
      title:  'Donde estamos.',
      subtitle: 'Operamos en tres mercados con características y necesidades diferentes. Conocemos las particularidades de cada uno.',
      items: [
        {
          country:     'Francia',
          description: 'Atendemos a negocios franceses con comunicación en francés, precios en euros y cumplimiento del RGPD europeo.',
          focus:       ['Restaurantes', 'Hôtellerie', 'Professions libérales'],
        },
        {
          country:     'España',
          description: 'Proyectos para empresas españolas en toda la geografía nacional, con foco en pymes y autónomos.',
          focus:       ['Clínicas', 'Abogados', 'Comercio local'],
        },
        {
          country:     'Perú',
          description: 'Soluciones adaptadas al mercado peruano, con precios locales y entendimiento del contexto empresarial.',
          focus:       ['Restaurantes', 'Peluquerías', 'Tiendas'],
        },
      ],
    },

    team: {
      label:   'Equipo',
      title:   'Las personas detrás de The Ascend',
      subtitle: 'Un equipo pequeño, multidisciplinar y apasionado por lo que hace.',
    },

    page: {
      title:    'Sobre Nosotros',
      metaDesc: 'Conoce al equipo de The Ascend. Empresa de transformación digital para pequeñas empresas en Francia, España y Perú.',
    },
  },

  // ---------------------------------------------------------------------------
  // CONTACT
  // ---------------------------------------------------------------------------
  contact: {
    sectionLabel: 'Contacto',
    title:        'Cuéntanos sobre\ntu proyecto.',
    subtitle:     'El presupuesto es completamente gratuito. Te respondemos en menos de 24 horas.',

    form: {
      title:        'Solicitar presupuesto',
      subtitle:     'Rellena el formulario y te contactamos en menos de 24 horas.',
      name:         'Nombre',
      namePlaceholder: 'Tu nombre',
      email:        'Email',
      emailPlaceholder: 'tu@email.com',
      phone:        'Teléfono (opcional)',
      phonePlaceholder: '+34 600 000 000',
      business:     'Nombre de tu negocio (opcional)',
      businessPlaceholder: 'Restaurante Le Petit Coin',
      businessOptions: {
        select: 'Selecciona...',
        restaurant: 'Restaurante / Hostelería',
        clinic: 'Clínica / Salud',
        lawyer: 'Abogado / Asesoría',
        architect: 'Arquitecto / Diseño',
        salon: 'Peluquería / Belleza',
        hotel: 'Hotel / Alojamiento',
        store: 'Tienda / Comercio',
        other: 'Otro',
      },
      service:      '¿Qué servicio te interesa?',
      serviceDefault: 'Selecciona un servicio...',
      serviceOptions: {
        notSure: 'No sé todavía, necesito orientación',
      },
      budget:       'Presupuesto aproximado',
      budgetOptions: {
        select: 'Selecciona un rango...',
        tier1: 'Menos de 500€',
        tier2: '500€ – 1.000€',
        tier3: '1.000€ – 2.000€',
        tier4: 'Más de 2.000€',
        notSure: 'No lo sé todavía',
      },
      message:      'Cuéntanos sobre tu proyecto',
      messagePlaceholder: '¿Qué necesitas? ¿Tienes web actualmente? ¿Cuáles son tus objetivos? Cuanto más nos cuentes, mejor podremos ayudarte.',
      privacy:      'He leído y acepto la ',
      privacyLink:  'Política de Privacidad',
      submit:       'Enviar solicitud',
      sending:      'Enviando...',
      required:     'Campo obligatorio',
    },

    success: {
      title:    '¡Mensaje enviado!',
      text:     'Gracias por contactarnos. Te respondemos en menos de 24 horas laborables.',
      subtext:  'Mientras tanto, puedes explorar nuestro portfolio o leer sobre nuestro proceso de trabajo.',
    },

    error: {
      title: 'Error al enviar',
      text:  'Ha ocurrido un error. Por favor, inténtalo de nuevo o contáctanos directamente por email o WhatsApp.',
    },

    info: {
      directContact: 'Contacto directo',
      email:         'Email',
      whatsapp:      'WhatsApp',
      responseTimeTitle: '¿Cuándo respondemos?',
      fast:          'Rápido',
      normal:        'Normal',
      emailForm:     'Email / Formulario',
      time1:         '1–3 horas',
      time2:         'Menos de 24h',
      afterContactTitle: 'Después de contactar...',
      step1:         'Te respondemos con preguntas para entender mejor tu proyecto.',
      step2:         'Preparamos una propuesta personalizada sin compromiso.',
      step3:         'Si estás convencido, acordamos los detalles y empezamos.',
      response:      'Tiempo de respuesta',
      responseValue: '< 24 horas',
      location:      'Ubicación',
      locationValue: 'Francia · España · Perú',
      schedule:      'Horario de atención',
      scheduleValue: 'Lun–Vie, 9:00–19:00',
      howItWorks:    'Cómo funciona',
      steps: [
        'Rellenas el formulario',
        'Nos ponemos en contacto en < 24h',
        'Hablamos de tu proyecto',
        'Recibes propuesta personalizada',
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------------------------
  footer: {
    tagline:       'Transformación digital para negocios que quieren crecer.',
    columnsTitle: {
      company:  'Empresa',
      services: 'Servicios',
      contact:  'Contacto',
    },
    links: {
      about:      'Sobre Nosotros',
      process:    'Nuestro Proceso',
      portfolio:  'Portfolio',
      contact:    'Contacto',
      privacy:    'Política de Privacidad',
      terms:      'Términos de Servicio',
      faq:        'FAQ',
    },
    ctaTitle: '¿Listo para empezar?',
    ctaText: 'Cuéntanos sobre tu proyecto. Sin compromisos, sin presiones.',
    ctaButton: 'Solicitar presupuesto',
    whatsapp: 'Escríbeme por WhatsApp',
    markets:       'Francia · España · Perú',
    copyright:     (year: number) => `© ${year} The Ascend. Todos los derechos reservados.`,
  },

  // ---------------------------------------------------------------------------
  // CTA BANNER (Reusable across pages)
  // ---------------------------------------------------------------------------
  cta: {
    primary:   'Agendar llamada gratuita',
    secondary: 'Ver portfolio',
    schedule:  'Agendar llamada gratuita',
    contact:   'Contactar ahora',
    whatsapp:  'Hablemos por WhatsApp',
    bannerTitle: '¿Listo para transformar tu negocio?',
    bannerSubtitle: 'Cuéntanos sobre tu proyecto. La consulta inicial es gratuita y sin compromiso. Respondemos en menos de 24 horas.',
    trust: [
      'Consulta gratuita',
      'Respuesta en <24h',
      'Sin compromiso',
      'Pago solo cuando estés convencido',
    ]
  },

  // ---------------------------------------------------------------------------
  // 404 PAGE
  // ---------------------------------------------------------------------------
  notFound: {
    code:     '404',
    title:    'Página no encontrada',
    subtitle: 'La página que buscas no existe o ha sido movida.',
    cta:      'Volver al inicio',
  },

  // ---------------------------------------------------------------------------
  // LEGAL PAGES
  // ---------------------------------------------------------------------------
  legal: {
    privacy: {
      title:       'Política de Privacidad',
      metaDesc:    'Política de privacidad de The Ascend.',
      lastUpdated: 'Última actualización',
      content: `
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <strong>${SITE.name}</strong><br />
          Email de contacto: <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>

        <h2>2. Datos que recopilamos</h2>
        <p>Recopilamos los siguientes datos cuando utilizas nuestros servicios:</p>
        <ul>
          <li><strong>Datos de contacto:</strong> nombre, email, teléfono (cuando los proporcionas en formularios)</li>
          <li><strong>Datos de uso:</strong> páginas visitadas, tiempo en el sitio, dispositivo utilizado (vía Google Analytics)</li>
          <li><strong>Datos de comunicación:</strong> contenido de los mensajes que nos envías</li>
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <p>Utilizamos tus datos para:</p>
        <ul>
          <li>Responder a tus solicitudes de información o presupuesto</li>
          <li>Gestionar la relación comercial si contratas nuestros servicios</li>
          <li>Mejorar nuestro sitio web y servicios (analytics anonimizados)</li>
          <li>Enviarte comunicaciones relacionadas con tu proyecto (solo si nos has contactado)</li>
        </ul>

        <h2>4. Base legal del tratamiento</h2>
        <p>El tratamiento de tus datos se basa en:</p>
        <ul>
          <li><strong>Consentimiento:</strong> cuando rellenas nuestros formularios y aceptas esta política</li>
          <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y prevenir fraudes</li>
          <li><strong>Obligación contractual:</strong> cuando hay una relación comercial activa</li>
        </ul>

        <h2>5. Conservación de datos</h2>
        <p>
          Conservamos tus datos durante el tiempo necesario para los fines descritos:
        </p>
        <ul>
          <li>Datos de contacto: máximo 3 años desde el último contacto</li>
          <li>Datos de clientes activos: durante la vigencia del contrato + 5 años</li>
          <li>Datos de analytics: 26 meses (configuración estándar de GA4)</li>
        </ul>

        <h2>6. Servicios de terceros</h2>
        <p>Utilizamos los siguientes servicios que pueden tratar tus datos:</p>
        <ul>
          <li><strong>Google Analytics 4:</strong> Análisis de tráfico web. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Google</a></li>
          <li><strong>Resend:</strong> Plataforma de envío de emails. <a href="https://resend.com/privacy" target="_blank" rel="noopener">Política de Resend</a></li>
          <li><strong>Cloudflare:</strong> Hosting y seguridad. <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">Política de Cloudflare</a></li>
        </ul>

        <h2>7. Tus derechos</h2>
        <p>De acuerdo con el RGPD (Europa) y normativas aplicables, tienes derecho a:</p>
        <ul>
          <li><strong>Acceso:</strong> solicitar una copia de los datos que tenemos sobre ti</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos ("derecho al olvido")</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento en determinadas circunstancias</li>
          <li><strong>Limitación:</strong> solicitar la restricción del tratamiento</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, contáctanos en:
          <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>

        <h2>8. Cookies</h2>
        <p>Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies de análisis (Google Analytics) para entender cómo los visitantes utilizan el sitio. Puedes gestionar las cookies desde la configuración de tu navegador.</p>

        <h2>9. Seguridad</h2>
        <p>Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o divulgación, incluyendo transmisión cifrada (HTTPS) y acceso restringido a los datos.</p>

        <h2>10. Cambios a esta política</h2>
        <p>Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva versión en esta página con la fecha de actualización.</p>

        <h2>11. Contacto</h2>
        <p>
          Si tienes preguntas sobre esta política de privacidad o sobre cómo tratamos tus datos, contáctanos:<br />
          📧 <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>
      `
    },
    terms: {
      title:       'Términos de Servicio',
      metaDesc:    'Términos y condiciones de uso de The Ascend.',
      lastUpdated: 'Última actualización',
      content: `
        <h2>1. Identificación del prestador</h2>
        <p>
          <strong>${SITE.name}</strong> presta servicios de transformación digital,
          diseño web, SEO, automatización e inteligencia artificial para empresas.<br />
          Email: <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>

        <h2>2. Servicios ofrecidos</h2>
        <p>${SITE.name} ofrece servicios digitales incluyendo, entre otros: desarrollo web, diseño gráfico, SEO local, implementación de chatbots con IA, automatización de procesos, y gestión de herramientas de marketing digital.</p>

        <h2>3. Proceso de contratación</h2>
        <p>
          Todos los proyectos se inician mediante una solicitud de presupuesto.
          El proceso es el siguiente:
        </p>
        <ol>
          <li>El cliente solicita presupuesto a través de los canales disponibles (formulario, email o WhatsApp)</li>
          <li>${SITE.name} prepara una propuesta personalizada sin coste</li>
          <li>El cliente acepta la propuesta y recibe el enlace de pago correspondiente</li>
          <li>El pago activa el inicio del proyecto</li>
        </ol>
        <p>No existe checkout automático. Todo acuerdo comercial es previo al pago.</p>

        <h2>4. Condiciones de pago</h2>
        <ul>
          <li>El pago se realizará según las condiciones acordadas en la propuesta</li>
          <li>El pago inicial (50%) activa el inicio del trabajo</li>
          <li>El pago final (50%) se realiza a la entrega y aprobación del proyecto</li>
          <li>Los pagos se procesan de forma segura mediante LemonSqueezy</li>
          <li>Los precios en euros incluyen/excluyen IVA según lo indicado en cada propuesta</li>
        </ul>

        <h2>5. Entrega y plazos</h2>
        <p>Los plazos de entrega se especifican en cada propuesta individual. ${SITE.name} se compromete a cumplir los plazos acordados. Retrasos causados por falta de información o aprobación del cliente no son responsabilidad de ${SITE.name}.</p>

        <h2>6. Revisiones</h2>
        <p>Cada proyecto incluye hasta 3 rondas de revisiones sin coste adicional. Las revisiones adicionales o cambios fuera del alcance acordado pueden suponer un coste extra, que se comunicará y acordará previamente.</p>

        <h2>7. Propiedad intelectual</h2>
        <p>Una vez completado el pago íntegro del proyecto, el cliente recibe la propiedad completa de los entregables acordados. ${SITE.name} se reserva el derecho de mostrar el proyecto en su portfolio salvo indicación expresa del cliente.</p>

        <h2>8. Garantías y limitaciones</h2>
        <ul>
          <li>${SITE.name} garantiza que el trabajo entregado cumple las especificaciones acordadas</li>
          <li>No se garantizan posiciones específicas en buscadores (SEO)</li>
          <li>No se garantizan resultados comerciales específicos</li>
          <li>La responsabilidad máxima de ${SITE.name} se limita al importe pagado por el proyecto</li>
        </ul>

        <h2>9. Soporte post-entrega</h2>
        <p>El soporte incluido con cada plan cubre correcciones de errores y dudas de funcionamiento. No incluye nuevas funcionalidades o cambios de alcance no previstos.</p>

        <h2>10. Cancelación</h2>
        <p>El cliente puede cancelar el proyecto en cualquier momento. El importe facturado corresponderá al trabajo ya realizado. El depósito inicial no es reembolsable si el trabajo ya ha comenzado.</p>

        <h2>11. Ley aplicable</h2>
        <p>Estos términos se rigen por la legislación aplicable. Para usuarios en España: legislación española. Para usuarios en Francia: legislación francesa.</p>

        <h2>12. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos:<br />
          📧 <a href="mailto:${SITE.email}">${SITE.email}</a>
        </p>
      `
    },
  },

  // ---------------------------------------------------------------------------
  // PROCESS TEASER (Homepage section)
  // ---------------------------------------------------------------------------
  processTeaser: {
    sectionLabel: 'Proceso',
    title:        'Simple, transparente\ny sin sorpresas.',
    subtitle:     'Cada proyecto sigue el mismo proceso probado. Sabes exactamente en qué punto estamos en todo momento.',
    cta:          'Ver el proceso completo',
  },

  // ---------------------------------------------------------------------------
  // PROCESS PAGE
  // ---------------------------------------------------------------------------
  process: {
    page: {
      title: 'Así trabajamos.\nSimple y claro.',
      subtitle: 'Sin tecnicismos, sin misterios. Cada etapa es transparente y tú siempre sabes exactamente en qué punto estamos.',
      trustTitle: 'Nuestros compromisos contigo.',
    },
    items: {
      consulta: {
        title: 'Consulta inicial',
        description: 'Nos cuentas sobre tu negocio, tus objetivos y lo que necesitas. Sin formularios largos, sin tecnicismos. Solo una conversación.',
        duration: '1 día',
        details: [
          'Análisis de tu situación actual',
          'Entendimiento de tus objetivos',
          'Identificación de oportunidades',
          'Propuesta inicial sin compromiso'
        ]
      },
      propuesta: {
        title: 'Propuesta personalizada',
        description: 'Preparamos una propuesta detallada con estrategia, alcance, plazos y presupuesto. Sin sorpresas.',
        duration: '1–2 días',
        details: [
          'Estrategia digital adaptada a tu negocio',
          'Alcance detallado del proyecto',
          'Cronograma de entrega',
          'Presupuesto desglosado'
        ]
      },
      diseno: {
        title: 'Diseño y desarrollo',
        description: 'Nuestro equipo trabaja en tu proyecto con actualizaciones periódicas. Tú apruebas, nosotros ejecutamos.',
        duration: '1–4 semanas',
        details: [
          'Diseño visual personalizado',
          'Desarrollo técnico profesional',
          'Actualizaciones semanales de progreso',
          'Revisiones incluidas en cada etapa'
        ]
      },
      revision: {
        title: 'Revisión y ajustes',
        description: 'Presentamos el resultado y refinamos cualquier detalle hasta que estés completamente satisfecho.',
        duration: '3–5 días',
        details: [
          'Presentación del proyecto completo',
          'Hasta 3 rondas de revisiones incluidas',
          'Ajustes de diseño y contenido',
          'Pruebas en todos los dispositivos'
        ]
      },
      lanzamiento: {
        title: 'Lanzamiento',
        description: 'Publicamos tu proyecto, lo configuramos todo y te entregamos formación básica para que puedas gestionarlo.',
        duration: '1–2 días',
        details: [
          'Publicación en producción',
          'Configuración de analytics y SEO',
          'Formación básica de administración',
          'Documentación de accesos'
        ]
      },
      soporte: {
        title: 'Soporte y crecimiento',
        description: 'No desaparecemos después del lanzamiento. Estamos disponibles para soporte, mejoras y seguir creciendo juntos.',
        duration: '1–6 meses incluido',
        details: [
          'Soporte técnico incluido',
          'Monitorización de rendimiento',
          'Sugerencias de mejora continua',
          'Acceso prioritario para nuevos proyectos'
        ]
      }
    },
    trust: [
      {
        title: 'Comunicación constante',
        desc: 'Actualizaciones semanales de progreso. Nunca estarás en la oscuridad sobre el estado de tu proyecto.'
      },
      {
        title: 'Plazos cumplidos',
        desc: 'Si acordamos una fecha de entrega, la cumplimos. Si surge algo, te avisamos con antelación.'
      },
      {
        title: 'Revisiones incluidas',
        desc: 'Hasta 3 rondas de revisiones sin coste adicional. Tu satisfacción es parte del proyecto.'
      },
      {
        title: 'Sin sorpresas',
        desc: 'El presupuesto acordado es el precio final. No añadimos costes ocultos ni extras no pactados.'
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // SERVICES OVERVIEW (Homepage section)
  // ---------------------------------------------------------------------------
  servicesOverview: {
    sectionLabel: 'Servicios',
    title:        'Todo lo que tu negocio\nnecesita para crecer online.',
    subtitle:     'Desde diseño web hasta automatización con IA. Cada servicio está diseñado para pequeñas y medianas empresas.',
    cta:          'Ver todos los servicios',
  },

  // ---------------------------------------------------------------------------
  // FAQ TEASER (Homepage section)
  // ---------------------------------------------------------------------------
  faqTeaser: {
    sectionLabel: 'FAQ',
    title:        'Resolvemos tus dudas.',
    subtitle:     'Las preguntas más frecuentes, respondidas.',
    cta:          'Ver todas las preguntas',
  },

} as const;

export type TranslationKey = typeof es;
