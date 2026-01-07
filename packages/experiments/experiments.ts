/**
 * Experiment Definitions
 * 
 * All A/B tests and experiments defined here
 */

import { Experiment } from './types';

export const experiments: Experiment[] = [
  {
    id: 'exp-001-hero-cta',
    name: 'Hero CTA: "Solicitar Demo" vs "Ver Demo en Vivo"',
    hypothesis: '"Ver Demo en Vivo" es más específico y genera más clicks',
    variants: [
      { id: 'control', name: 'Solicitar Demo', weight: 50 },
      { id: 'variant-a', name: 'Ver Demo en Vivo', weight: 50 }
    ],
    target_pages: ['/es', '/en'],
    success_metric: 'click_demo',
    secondary_metrics: ['submit_lead', 'book_demo'],
    status: 'draft'
  },
  
  {
    id: 'exp-002-pricing-transparency',
    name: 'Pricing: Show ranges vs "Cotización"',
    hypothesis: 'Mostrar rangos de precio aumenta conversión (transparencia)',
    variants: [
      { id: 'control', name: 'Cotización personalizada', weight: 50 },
      { id: 'variant-a', name: 'Desde $X/usuario/mes', weight: 50 }
    ],
    target_pages: ['/es/pricing', '/en/pricing'],
    success_metric: 'click_demo',
    secondary_metrics: ['view_pricing', 'submit_lead'],
    status: 'draft'
  },
  
  {
    id: 'exp-003-demo-form-length',
    name: 'Demo form: Short vs Long',
    hypothesis: 'Form corto aumenta submissions',
    variants: [
      { id: 'control', name: 'Long form (5 fields)', weight: 50 },
      { id: 'variant-a', name: 'Short form (2 fields)', weight: 50 }
    ],
    target_pages: ['/es/demo', '/en/demo'],
    success_metric: 'submit_lead',
    secondary_metrics: ['form_abandonment', 'lead_quality_score'],
    status: 'draft'
  },
  
  {
    id: 'exp-004-trust-block',
    name: 'Trust block: Logos vs Testimonials vs Numbers',
    hypothesis: 'Testimonials generan más confianza que logos',
    variants: [
      { id: 'control', name: 'Customer logos', weight: 33 },
      { id: 'variant-a', name: 'Testimonials', weight: 33 },
      { id: 'variant-b', name: 'Numbers (X empresas)', weight: 34 }
    ],
    target_pages: ['/es', '/en', '/es/pricing', '/en/pricing'],
    success_metric: 'click_demo',
    secondary_metrics: ['scroll_depth', 'time_on_page'],
    status: 'draft'
  },
  
  {
    id: 'exp-005-comparison-tone',
    name: 'Comparison: Neutral vs Favorable',
    hypothesis: 'Neutral genera más confianza y conversión',
    variants: [
      { id: 'control', name: 'Neutral tone', weight: 50 },
      { id: 'variant-a', name: 'Favorable to GDS', weight: 50 }
    ],
    target_pages: ['/es/compare/*', '/en/compare/*'],
    success_metric: 'click_demo',
    secondary_metrics: ['time_on_page', 'scroll_depth'],
    status: 'draft'
  },
  
  {
    id: 'exp-006-integration-cta',
    name: 'Integration CTA: Generic vs Specific',
    hypothesis: 'CTA específico convierte mejor',
    variants: [
      { id: 'control', name: 'Solicitar Demo', weight: 50 },
      { id: 'variant-a', name: 'Solicitar Demo de Integración', weight: 50 }
    ],
    target_pages: ['/es/integrations/*', '/en/integrations/*'],
    success_metric: 'click_integration_cta',
    secondary_metrics: ['submit_lead'],
    status: 'draft'
  }
];

export function getExperiment(id: string): Experiment | undefined {
  return experiments.find(exp => exp.id === id);
}

export function getActiveExperiments(): Experiment[] {
  return experiments.filter(exp => exp.status === 'running');
}

export function getExperimentsForPage(pathname: string): Experiment[] {
  return experiments.filter(exp => {
    if (exp.status !== 'running') return false;
    
    return exp.target_pages.some(pattern => {
      // Simple pattern matching (support wildcards)
      const regex = new RegExp('^' + pattern.replace('*', '.*') + '$');
      return regex.test(pathname);
    });
  });
}
