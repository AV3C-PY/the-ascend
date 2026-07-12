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
      "Avant de travailler avec The Ascend, mon restaurant était invisible sur Google. Désormais, je reçois des réservations via mon site web. Le design correspond exactement à ce que j'avais imaginé : élégant et moderne.",
    rating: 5,
    service: "Développement Web & SEO Local",
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
      "Notre hôtel propose désormais des réservations directes. Le site web multilingue a attiré des clients qui ne venaient pas auparavant.",
    rating: 5,
    service: "Développement Web Multilingue",
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
      "Mon portfolio en ligne fait désormais office de carte de visite à ma place. Je décroche des projets auprès de clients qui me trouvent sur Google sans aucune référence préalable. Un changement radical.",
    rating: 5,
    service: "Développement Web + SEO",
  },
];
