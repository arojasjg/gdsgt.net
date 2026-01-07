/**
 * Lead Scoring Types
 */

export interface Lead {
  email: string;
  name?: string;
  company?: string;
  industry?: string;
  company_size?: string;
  interest: string[]; // erp, bi, crm, ai, integrations, security, staff-aug, data
  source: string; // organic, paid, referral, direct
  pages_viewed: string[];
  time_on_site: number; // seconds
  downloads: string[]; // templates, guides
  demo_requested: boolean;
  created_at: Date;
}

export interface LeadScore {
  total_score: number; // 0-100
  grade: 'A' | 'B' | 'C' | 'D'; // A: 80-100, B: 60-79, C: 40-59, D: 0-39
  breakdown: {
    fit_score: number; // 0-50 (ICP fit)
    intent_score: number; // 0-50 (buying intent)
  };
  reasoning: string[];
  recommended_action: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ScoringRules {
  industry_weights: Record<string, number>;
  company_size_weights: Record<string, number>;
  interest_weights: Record<string, number>;
  page_weights: Record<string, number>;
  time_thresholds: {
    high: number; // seconds
    medium: number; // seconds
  };
}
