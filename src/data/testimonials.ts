// =============================================================================
// THE ASCEND — Testimonials Data
// TODO: Replace these placeholder testimonials with real client testimonials.
// Add name, role, company, location, and quote for each.
// TODO: Add a real photo URL for each client (or use initials placeholder).
// =============================================================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  // TODO: Replace avatar URLs with real client photos
  avatar?: string;
  rating: number; // 1-5
  service: string; // Which service they used
}

// TODO: Replace all testimonials with real client feedback
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marie Dubois",
    role: "Propietaria",
    company: "Restaurant Le Petit Coin",
    location: "Lyon, France",
    quote:
      "Antes de trabajar con The Ascend, mi restaurante era invisible en Google. Ahora recibo reservas todos los días a través de mi web. El diseño es exactamente lo que imaginaba: elegante y moderno.",
    rating: 5,
    service: "Desarrollo Web + SEO Local",
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    role: "Director",
    company: "Clínica Dental Sonríe",
    location: "Madrid, España",
    quote:
      "El chatbot que instalaron en mi clínica responde consultas a las 2 de la mañana. Mis pacientes están encantados y yo ahorro horas de trabajo cada semana. Inversión que se amortiza sola.",
    rating: 5,
    service: "Chatbot IA + Desarrollo Web",
  },
  {
    id: "3",
    name: "Ana García",
    role: "Abogada",
    company: "Bufete García & Asociados",
    location: "Barcelona, España",
    quote:
      "Necesitaba una web que transmitiera seriedad y confianza. The Ascend entendió exactamente lo que quería. El resultado superó mis expectativas y mis clientes lo comentan constantemente.",
    rating: 5,
    service: "Desarrollo Web + Branding",
  },
  {
    id: "4",
    name: "Sophie Laurent",
    role: "Gerente",
    company: "Hôtel Belle Vue",
    location: "Marseille, France",
    quote:
      "Nuestro hotel tiene ahora reservas directas sin comisiones de plataformas intermediarias. La web multiidioma atrajo clientes que antes no llegaban. El ROI fue inmediato.",
    rating: 5,
    service: "Desarrollo Web Multiidioma",
  },
  {
    id: "5",
    name: "Ricardo Quispe",
    role: "Propietario",
    company: "Peluquería Estilo Lima",
    location: "Lima, Perú",
    quote:
      "Con el WhatsApp Business automatizado ya no pierdo clientes por no contestar a tiempo. Las citas se agendan solas y mi negocio creció un 40% en dos meses.",
    rating: 5,
    service: "WhatsApp Business + Web",
  },
  {
    id: "6",
    name: "Isabelle Martin",
    role: "Arquitecta",
    company: "Martin Architecture",
    location: "Paris, France",
    quote:
      "Mi portfolio online ahora hace el trabajo de presentación por mí. Consigo proyectos de clientes que me encuentran en Google sin referencias previas. Un cambio total.",
    rating: 5,
    service: "Desarrollo Web + SEO",
  },
];
