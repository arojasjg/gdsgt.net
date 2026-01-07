export type Lang = 'es' | 'en';

export interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export interface SiteConfig {
  name: string;
  domain: string;
  defaultLocale: Lang;
  locales: Lang[];
  description: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
