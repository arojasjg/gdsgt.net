/**
 * Email Types
 */

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preview: string;
  content_blocks: Array<{
    type: 'text' | 'cta' | 'resource' | 'social_proof' | 'list';
    content: string;
  }>;
  cta_primary: string;
  cta_url: string;
  variables?: string[]; // Template variables like {{name}}, {{company}}
}

export interface NurtureEmail extends EmailTemplate {
  day: number; // days after lead capture (0 = immediate)
  sequence_id: string;
}

export interface NurtureSequence {
  id: string;
  name: string;
  description: string;
  target_audience: 'default' | 'high-intent' | 'low-intent' | 'specific-icp';
  emails: NurtureEmail[];
}

export interface EmailVariables {
  name?: string;
  company?: string;
  industry?: string;
  resource?: string;
  company_type?: string;
  date?: string;
  time?: string;
  meeting_link?: string;
  calendar_link?: string;
  demo_summary?: string;
  [key: string]: string | undefined;
}
