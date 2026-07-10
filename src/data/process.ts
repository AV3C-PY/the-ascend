// =============================================================================
// THE ASCEND — Process Steps Data
// TODO: Update process steps if your workflow changes
// =============================================================================

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
  icon: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "consulta",
    number: "01",
    title: "Consulta inicial",
    description:
      "Nos cuentas sobre tu negocio, tus objetivos y lo que necesitas. Sin formularios largos, sin tecnicismos. Solo una conversación.",
    duration: "1 día",
    details: [
      "Análisis de tu situación actual",
      "Entendimiento de tus objetivos",
      "Identificación de oportunidades",
      "Propuesta inicial sin compromiso",
    ],
    icon: "MessageSquare",
  },
  {
    id: "propuesta",
    number: "02",
    title: "Propuesta personalizada",
    description:
      "Preparamos una propuesta detallada con estrategia, alcance, plazos y presupuesto. Sin sorpresas.",
    duration: "1–2 días",
    details: [
      "Estrategia digital adaptada a tu negocio",
      "Alcance detallado del proyecto",
      "Cronograma de entrega",
      "Presupuesto desglosado",
    ],
    icon: "FileText",
  },
  {
    id: "diseno",
    number: "03",
    title: "Diseño y desarrollo",
    description:
      "Nuestro equipo trabaja en tu proyecto con actualizaciones periódicas. Tú apruebas, nosotros ejecutamos.",
    duration: "1–4 semanas",
    details: [
      "Diseño visual personalizado",
      "Desarrollo técnico profesional",
      "Actualizaciones semanales de progreso",
      "Revisiones incluidas en cada etapa",
    ],
    icon: "Layers",
  },
  {
    id: "revision",
    number: "04",
    title: "Revisión y ajustes",
    description:
      "Presentamos el resultado y refinamos cualquier detalle hasta que estés completamente satisfecho.",
    duration: "3–5 días",
    details: [
      "Presentación del proyecto completo",
      "Hasta 3 rondas de revisiones incluidas",
      "Ajustes de diseño y contenido",
      "Pruebas en todos los dispositivos",
    ],
    icon: "CheckCircle",
  },
  {
    id: "lanzamiento",
    number: "05",
    title: "Lanzamiento",
    description:
      "Publicamos tu proyecto, lo configuramos todo y te entregamos formación básica para que puedas gestionarlo.",
    duration: "1–2 días",
    details: [
      "Publicación en producción",
      "Configuración de analytics y SEO",
      "Formación básica de administración",
      "Documentación de accesos",
    ],
    icon: "Rocket",
  },
  {
    id: "soporte",
    number: "06",
    title: "Soporte y crecimiento",
    description:
      "No desaparecemos después del lanzamiento. Estamos disponibles para soporte, mejoras y seguir creciendo juntos.",
    duration: "1–6 meses incluido",
    details: [
      "Soporte técnico incluido",
      "Monitorización de rendimiento",
      "Sugerencias de mejora continua",
      "Acceso prioritario para nuevos proyectos",
    ],
    icon: "TrendingUp",
  },
];
