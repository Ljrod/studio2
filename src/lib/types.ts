export interface Service {
  id: number;
  icon: string;
  title: string;
  bullets: string[];
  cta_link: string;
}

export interface Plan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  cta_text: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  avatar_url: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
