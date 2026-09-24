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

/**
 * The case study source files use a richer, different shape (problems,
 * features_used, lessons_learned, next_steps...). Normalize them into the
 * CaseStudy shape the pages render.
 */
function normalizeCaseStudy(raw: any): CaseStudy {
  const implementation = raw.solution?.implementation ?? {};
  return {
    slug: raw.slug,
    title: raw.title,
    subtitle: raw.subtitle ?? raw.excerpt ?? '',
    company: {
      name: raw.company?.name ?? '',
      industry: raw.company?.industry ?? raw.industry ?? '',
      size: raw.company?.size ?? '',
      location: raw.company?.location ?? raw.country ?? '',
      website: raw.company?.website,
    },
    challenge: {
      title: raw.challenge?.title ?? 'El Desafío',
      description: raw.challenge?.description ?? '',
      pain_points:
        raw.challenge?.pain_points ??
        (raw.challenge?.problems ?? []).map((p: any) => `${p.title}: ${p.description}`),
      previous_system: raw.challenge?.previous_system ?? '',
    },
    solution: {
      title: raw.solution?.title ?? 'La Solución',
      description: raw.solution?.description ?? '',
      modules_implemented:
        raw.solution?.modules_implemented ?? raw.technical_details?.modules_implemented ?? implementation.modules ?? [],
      implementation_time: raw.solution?.implementation_time ?? implementation.duration ?? '',
      key_features: raw.solution?.key_features ?? raw.solution?.features_used ?? [],
    },
    results: {
      title: raw.results?.title ?? 'Los Resultados',
      summary: raw.results?.summary ?? raw.results?.description ?? '',
      metrics: (raw.results?.metrics ?? []).map((m: any) =>
        'improvement' in m
          ? m
          : { metric: m.label, before: m.description, after: m.value, improvement: m.metric }
      ),
      testimonial: raw.results?.testimonial ?? raw.testimonial ?? { quote: '', author: '', position: '' },
    },
    journey: raw.journey ?? {
      title: 'El Viaje de Implementación',
      phases: (implementation.timeline ?? []).map((phase: any) => ({
        phase: phase.title,
        duration: phase.week ?? phase.period ?? '',
        activities: phase.tasks ?? [],
      })),
    },
    takeaways:
      raw.takeaways ?? (raw.lessons_learned ?? []).map((l: any) => `${l.lesson}: ${l.description}`),
    related_industry: raw.related_industry,
    related_capabilities: raw.related_capabilities,
    cta: raw.cta ?? {
      title: raw.next_steps?.title ?? '',
      description: raw.next_steps?.description ?? '',
      button: raw.next_steps?.cta ?? 'Solicitar demo',
    },
  };
}

export const caseStudies: CaseStudy[] = [
  distribuidoraLaEconomica,
  textilesModernos,
  farmaciasSaludPlus,
  constructoraEdificar,
  comercialDelNorte,
  electronicaTechStore,
].map(normalizeCaseStudy);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.related_industry === industry);
}
