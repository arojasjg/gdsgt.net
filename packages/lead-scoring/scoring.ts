/**
 * Lead Scoring Logic
 * 
 * Calculate lead quality score based on fit and intent
 */

import { Lead, LeadScore, ScoringRules } from './types';

/**
 * Default scoring rules
 */
export const defaultScoringRules: ScoringRules = {
  industry_weights: {
    'distribucion': 15,
    'manufactura': 15,
    'holding': 15,
    'retail': 12,
    'servicios-profesionales': 12,
    'salud': 10,
    'construccion': 10,
    'logistica': 12,
    'other': 8
  },
  company_size_weights: {
    '1-20': 8,
    '20-50': 10,
    '50-200': 15,
    '200-500': 15,
    '500+': 12
  },
  interest_weights: {
    'erp': 8,
    'multi-empresa': 10,
    'integrations': 8,
    'security': 7,
    'bi': 7,
    'crm': 6,
    'ai': 6,
    'data': 6,
    'staff-aug': 5
  },
  page_weights: {
    '/pricing': 8,
    '/demo': 10,
    '/compare': 7,
    '/case-studies': 6,
    '/integrations': 5,
    '/security': 5,
    '/erp': 4,
    '/contact': 6
  },
  time_thresholds: {
    high: 600, // 10 minutes
    medium: 300 // 5 minutes
  }
};

/**
 * Calculate lead score
 */
export function calculateLeadScore(
  lead: Lead,
  rules: ScoringRules = defaultScoringRules
): LeadScore {
  let fit_score = 0;
  let intent_score = 0;
  const reasoning: string[] = [];
  
  // ===== FIT SCORE (0-50) =====
  
  // Industry (0-15)
  if (lead.industry) {
    const industry_score = rules.industry_weights[lead.industry] || rules.industry_weights['other'];
    fit_score += industry_score;
    
    if (industry_score >= 15) {
      reasoning.push(`Industria high-fit: ${lead.industry}`);
    } else if (industry_score >= 10) {
      reasoning.push(`Industria medium-fit: ${lead.industry}`);
    } else {
      reasoning.push(`Industria low-fit: ${lead.industry}`);
    }
  }
  
  // Company size (0-15)
  if (lead.company_size) {
    const size_score = rules.company_size_weights[lead.company_size] || 8;
    fit_score += size_score;
    
    if (size_score >= 15) {
      reasoning.push(`Tamaño high-fit: ${lead.company_size} empleados`);
    } else if (size_score >= 10) {
      reasoning.push(`Tamaño medium-fit: ${lead.company_size} empleados`);
    } else {
      reasoning.push(`Tamaño low-fit: ${lead.company_size} empleados`);
    }
  }
  
  // Interest (0-20)
  let interest_score = 0;
  const high_value_interests: string[] = [];
  
  for (const interest of lead.interest) {
    const weight = rules.interest_weights[interest] || 5;
    interest_score += weight;
    
    if (weight >= 8) {
      high_value_interests.push(interest);
    }
  }
  
  // Cap at 20
  interest_score = Math.min(interest_score, 20);
  fit_score += interest_score;
  
  if (high_value_interests.length >= 2) {
    reasoning.push(`Interés en múltiples soluciones high-value: ${high_value_interests.join(', ')}`);
  } else if (high_value_interests.length === 1) {
    reasoning.push(`Interés en solución high-value: ${high_value_interests[0]}`);
  } else {
    reasoning.push(`Interés en: ${lead.interest.join(', ')}`);
  }
  
  // ===== INTENT SCORE (0-50) =====
  
  // Demo requested (0-20)
  if (lead.demo_requested) {
    intent_score += 20;
    reasoning.push('Solicitó demo (high intent)');
  }
  
  // Pages viewed (0-15)
  let page_score = 0;
  const high_intent_pages: string[] = [];
  
  for (const page of lead.pages_viewed) {
    for (const [pattern, weight] of Object.entries(rules.page_weights)) {
      if (page.includes(pattern)) {
        page_score += weight;
        if (weight >= 6) {
          high_intent_pages.push(pattern);
        }
        break; // Only count once per page
      }
    }
  }
  
  // Cap at 15
  page_score = Math.min(page_score, 15);
  intent_score += page_score;
  
  if (high_intent_pages.length >= 3) {
    reasoning.push(`Visitó ${high_intent_pages.length} páginas high-intent`);
  } else if (high_intent_pages.length >= 1) {
    reasoning.push(`Visitó ${high_intent_pages.length} página(s) high-intent`);
  } else {
    reasoning.push('Visitó páginas informacionales');
  }
  
  // Time on site (0-10)
  if (lead.time_on_site > rules.time_thresholds.high) {
    intent_score += 10;
    reasoning.push(`Tiempo en sitio > ${Math.floor(rules.time_thresholds.high / 60)} min (engaged)`);
  } else if (lead.time_on_site > rules.time_thresholds.medium) {
    intent_score += 7;
    reasoning.push(`Tiempo en sitio > ${Math.floor(rules.time_thresholds.medium / 60)} min`);
  } else {
    intent_score += 3;
    reasoning.push(`Tiempo en sitio < ${Math.floor(rules.time_thresholds.medium / 60)} min`);
  }
  
  // Downloads (0-5)
  if (lead.downloads.length > 0) {
    intent_score += Math.min(lead.downloads.length * 2, 5);
    reasoning.push(`Descargó ${lead.downloads.length} recurso(s)`);
  }
  
  // ===== TOTAL SCORE =====
  const total_score = Math.min(fit_score + intent_score, 100);
  
  // ===== GRADE =====
  let grade: 'A' | 'B' | 'C' | 'D';
  if (total_score >= 80) grade = 'A';
  else if (total_score >= 60) grade = 'B';
  else if (total_score >= 40) grade = 'C';
  else grade = 'D';
  
  // ===== RECOMMENDED ACTION =====
  let recommended_action: string;
  let priority: 'high' | 'medium' | 'low';
  
  if (grade === 'A') {
    recommended_action = 'Contactar inmediatamente (llamada + email)';
    priority = 'high';
  } else if (grade === 'B') {
    recommended_action = 'Contactar en 24h (email + seguimiento)';
    priority = 'high';
  } else if (grade === 'C') {
    recommended_action = 'Agregar a nurture sequence';
    priority = 'medium';
  } else {
    recommended_action = 'Agregar a newsletter (low priority)';
    priority = 'low';
  }
  
  return {
    total_score,
    grade,
    breakdown: { fit_score, intent_score },
    reasoning,
    recommended_action,
    priority
  };
}

/**
 * Batch score multiple leads
 */
export function batchScoreLeads(
  leads: Lead[],
  rules?: ScoringRules
): Array<Lead & { score: LeadScore }> {
  return leads.map(lead => ({
    ...lead,
    score: calculateLeadScore(lead, rules)
  }));
}

/**
 * Filter leads by grade
 */
export function filterLeadsByGrade(
  leads: Array<Lead & { score: LeadScore }>,
  grades: Array<'A' | 'B' | 'C' | 'D'>
): Array<Lead & { score: LeadScore }> {
  return leads.filter(lead => grades.includes(lead.score.grade));
}

/**
 * Sort leads by score (descending)
 */
export function sortLeadsByScore(
  leads: Array<Lead & { score: LeadScore }>
): Array<Lead & { score: LeadScore }> {
  return [...leads].sort((a, b) => b.score.total_score - a.score.total_score);
}
