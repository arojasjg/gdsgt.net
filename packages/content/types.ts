export interface Module {
  slug: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  icon?: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  modules: string[];
}

export interface Capability {
  slug: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

export interface Integration {
  slug: string;
  name: string;
  description: string;
  category: 'bi' | 'crm' | 'data' | 'messaging' | 'payments' | 'api';
  entities: string[];
  flow: string[];
  security: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface SecurityTopic {
  slug: string;
  name: string;
  description: string;
  controls: string[];
  bestPractices: string[];
  scope: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface BITopic {
  slug: string;
  name: string;
  description: string;
  features: string[];
  useCases: string[];
}

export interface CRMTopic {
  slug: string;
  name: string;
  description: string;
  features: string[];
  useCases: string[];
}

export interface AIUseCase {
  slug: string;
  name: string;
  description: string;
  capabilities: string[];
  benefits: string[];
  examples: string[];
}

export interface Comparison {
  slug: string;
  competitor: string;
  title: string;
  description: string;
  features: Array<{
    name: string;
    gds: string | boolean;
    competitor: string | boolean;
  }>;
  faqs: Array<{ question: string; answer: string }>;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  modules: string[];
}

export interface PricingTier {
  name: string;
  description: string;
  basePrice: string;
  includes: string[];
  addons: Array<{
    name: string;
    price: string;
  }>;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  deliverables: string[];
  process: string[];
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  content: string;
  relatedResources: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  author: string | { name: string; position?: string; avatar?: string };
  publishedAt?: string;
  published_date?: string;
  updatedAt?: string;
  updated_date?: string;
  readTime?: string;
  reading_time?: number;
  category: string;
  tags: string[];
  content: string | { introduction?: string; sections?: any[] };
  featured_image?: string;
  seo?: {
    meta_description?: string;
    keywords?: string[];
    og_image?: string;
  };
  related_posts?: string[];
  meta_description?: string;
  keywords?: string[];
  cta?: any;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  relatedTerms: string[];
}

export interface Template {
  slug: string;
  name: string;
  description: string;
  format: string;
  downloadUrl: string;
}
