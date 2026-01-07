/**
 * Case Studies Content (Spanish)
 * 
 * Real customer success stories
 */

import { distribuidoraLaEconomica } from './case-studies/distribuidora-la-economica';
import { textilesModernos } from './case-studies/textiles-modernos';
import { farmaciasSaludPlus } from './case-studies/farmacias-salud-plus';
import { constructoraEdificar } from './case-studies/constructora-edificar';
import { comercialDelNorte } from './case-studies/comercial-del-norte';
import { electronicaTechStore } from './case-studies/electronica-tech-store';

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  company: {
    name: string;
    industry: string;
    size: string;
    location: string;
    website?: string;
  };
  
  // Hero image/video
  hero_image?: string;
  hero_video?: string;
  
  // Challenge
  challenge: {
    title: string;
    description: string;
    pain_points: string[];
    previous_system: string;
  };
  
  // Solution
  solution: {
    title: string;
    description: string;
    modules_implemented: string[];
    implementation_time: string;
    key_features: Array<{
      feature: string;
      description: string;
    }>;
  };
  
  // Results
  results: {
    title: string;
    summary: string;
    metrics: Array<{
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }>;
    testimonial: {
      quote: string;
      author: string;
      position: string;
      photo?: string;
    };
  };
  
  // Implementation journey
  journey: {
    title: string;
    phases: Array<{
      phase: string;
      duration: string;
      activities: string[];
    }>;
  };
  
  // Key takeaways
  takeaways: string[];
  
  // Related content
  related_industry?: string;
  related_capabilities?: string[];
  
  // CTA
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export const caseStudies: CaseStudy[] = [
  distribuidoraLaEconomica as any,
  textilesModernos as any,
  farmaciasSaludPlus as any,
  constructoraEdificar as any,
  comercialDelNorte as any,
  electronicaTechStore as any
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.related_industry === industry);
}
