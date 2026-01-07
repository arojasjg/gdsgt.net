/**
 * Experiment Types
 * 
 * A/B testing and feature flag system for CRO
 */

export interface Experiment {
  id: string;
  name: string;
  hypothesis: string;
  variants: Array<{
    id: string;
    name: string;
    weight: number; // 0-100 (percentage of traffic)
  }>;
  target_pages: string[]; // URLs where experiment runs
  target_audience?: {
    icp?: string[];
    lang?: string[];
    device?: ('desktop' | 'mobile' | 'tablet')[];
  };
  success_metric: string; // event name
  secondary_metrics?: string[];
  status: 'draft' | 'running' | 'paused' | 'completed';
  start_date?: Date;
  end_date?: Date;
  results?: ExperimentResults;
}

export interface ExperimentResults {
  variants: Array<{
    variant_id: string;
    sessions: number;
    conversions: number;
    conversion_rate: number;
    confidence: number; // statistical significance (0-100)
  }>;
  winner?: string;
  lift?: number; // % improvement
}

export interface ExperimentConfig {
  enabled: boolean;
  cookie_name: string;
  cookie_duration_days: number;
}
