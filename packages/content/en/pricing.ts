/**
 * Pricing Content (English)
 */

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  target_icp: string[];
  base_description: string;
  
  // Pricing (PLACEHOLDER - requires real data)
  pricing_model: 'per_user' | 'per_module' | 'flat_rate' | 'custom';
  base_price_range: string;
  pricing_note: string;
  
  // Included
  included_modules: string[];
  included_users: string | number;
  included_companies: string | number;
  included_support: string;
  included_storage: string;
  included_integrations: string[];
  
  // Add-ons available
  available_addons: Array<{
    name: string;
    description: string;
    price_note: string;
  }>;
  
  // CTA
  cta_primary: string;
  cta_secondary?: string;
  
  // Features (for comparison table)
  features: {
    [key: string]: boolean | string;
  };
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For companies starting with ERP',
    target_icp: ['professional-services', 'small-retail'],
    base_description: 'Core ERP modules for basic management',
    
    pricing_model: 'per_user',
    base_price_range: 'From $5/user/month',
    pricing_note: 'Price includes core modules. Additional modules have extra cost.',
    
    included_modules: [
      'Accounting',
      'Sales',
      'Purchasing',
      'Basic Inventory',
      'AR/AP'
    ],
    included_users: 'up to 10 users',
    included_companies: 1,
    included_support: 'Email (business hours)',
    included_storage: '10 GB',
    included_integrations: ['Excel/CSV', 'Email'],
    
    available_addons: [
      {
        name: 'Additional users',
        description: 'More than 10 users',
        price_note: '$5/user/month'
      },
      {
        name: 'Additional modules',
        description: 'POS, Production, Projects, etc.',
        price_note: 'From $50/module/month'
      },
      {
        name: 'Premium integrations',
        description: 'Power BI, WhatsApp, API',
        price_note: 'From $25/integration/month'
      }
    ],
    
    cta_primary: 'Request Demo',
    cta_secondary: 'View Details',
    
    features: {
      'Included users': '10',
      'Companies': '1',
      'Core modules': true,
      'Multi-warehouse inventory': false,
      'Production': false,
      'Multi-company': false,
      'Basic BI': false,
      'Advanced BI': false,
      'Basic integrations': true,
      'Premium integrations': false,
      'REST API': false,
      'Support': 'Email',
      'SLA': 'Best effort',
      'Backups': 'Daily',
      'Storage': '10 GB'
    }
  },
  
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For growing companies',
    target_icp: ['distribution', 'manufacturing', 'retail'],
    base_description: 'Complete ERP with BI and integrations',
    
    pricing_model: 'per_user',
    base_price_range: 'From $9/user/month',
    pricing_note: 'Price includes all core modules + basic BI.',
    
    included_modules: [
      'All Starter modules',
      'Advanced inventory (multi-warehouse)',
      'Production',
      'Fixed Assets',
      'Basic BI (pre-configured dashboards)'
    ],
    included_users: 'up to 50 users',
    included_companies: 1,
    included_support: 'Email + Chat (business hours)',
    included_storage: '100 GB',
    included_integrations: [
      'All from Starter',
      'Power BI',
      'Looker Studio',
      'Zapier',
      'WhatsApp'
    ],
    
    available_addons: [
      {
        name: 'Additional users',
        description: 'More than 50 users',
        price_note: '$5/user/month'
      },
      {
        name: 'Multi-company',
        description: 'Manage multiple companies',
        price_note: '$150/company/month'
      },
      {
        name: 'Advanced BI',
        description: 'Unlimited custom dashboards',
        price_note: '$200/month'
      },
      {
        name: 'AI features',
        description: 'Predictions, copilots',
        price_note: '$300/month'
      }
    ],
    
    cta_primary: 'Request Demo',
    cta_secondary: 'Compare Plans',
    
    features: {
      'Included users': '50',
      'Companies': '1',
      'Core modules': true,
      'Multi-warehouse inventory': true,
      'Production': true,
      'Multi-company': 'Add-on',
      'Basic BI': true,
      'Advanced BI': 'Add-on',
      'Basic integrations': true,
      'Premium integrations': true,
      'REST API': true,
      'Support': 'Email + Chat',
      'SLA': '99% uptime',
      'Backups': 'Daily',
      'Storage': '100 GB'
    }
  },
  
  {
    id: 'multi-company',
    name: 'Multi-Company',
    tagline: 'For holdings and business groups',
    target_icp: ['holding'],
    base_description: 'ERP with multi-company consolidation',
    
    pricing_model: 'custom',
    base_price_range: 'From $12/user/month + multi-company services',
    pricing_note: 'Price depends on number of companies, users, and modules.',
    
    included_modules: [
      'All Growth modules',
      'Multi-company consolidation',
      'Corporate reports',
      'Advanced BI',
      'Inter-company benchmarking'
    ],
    included_users: 'unlimited',
    included_companies: 'from 3 companies',
    included_support: 'Email + Chat + Phone (24/7)',
    included_storage: '1 TB',
    included_integrations: [
      'All integrations',
      'Complete REST API',
      'Unlimited webhooks',
      'SSO (Single Sign-On)'
    ],
    
    available_addons: [
      {
        name: 'Additional companies',
        description: 'More than 3 companies',
        price_note: '$150/company/month'
      },
      {
        name: 'Dedicated implementation',
        description: 'Full-time dedicated team',
        price_note: 'Quote based on scope'
      },
      {
        name: 'Premium SLA',
        description: '99.9% uptime + priority support',
        price_note: '$500/month'
      }
    ],
    
    cta_primary: 'Request Proposal',
    cta_secondary: 'Talk to Sales',
    
    features: {
      'Included users': 'Unlimited',
      'Companies': '3+',
      'Core modules': true,
      'Multi-warehouse inventory': true,
      'Production': true,
      'Multi-company': true,
      'Basic BI': true,
      'Advanced BI': true,
      'Basic integrations': true,
      'Premium integrations': true,
      'REST API': true,
      'Support': '24/7',
      'SLA': '99.9% uptime',
      'Backups': 'Daily + retention',
      'Storage': '1 TB'
    }
  },
  
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large organizations',
    target_icp: ['holding', 'enterprise'],
    base_description: 'Complete solution with SLA and dedicated support',
    
    pricing_model: 'custom',
    base_price_range: 'Custom quote',
    pricing_note: 'Includes everything + customization + SLA + dedicated support.',
    
    included_modules: [
      'All modules',
      'Unlimited customization',
      'Custom feature development',
      'Advanced AI',
      'Dedicated data warehouse'
    ],
    included_users: 'unlimited',
    included_companies: 'unlimited',
    included_support: 'Dedicated Account Manager + 24/7 Support + 99.9% SLA',
    included_storage: 'unlimited',
    included_integrations: [
      'All integrations',
      'Custom integration development',
      'Dedicated API',
      'Unlimited webhooks',
      'SSO + SAML'
    ],
    
    available_addons: [],
    
    cta_primary: 'Talk to Enterprise Sales',
    cta_secondary: 'View Success Stories',
    
    features: {
      'Included users': 'Unlimited',
      'Companies': 'Unlimited',
      'Core modules': true,
      'Multi-warehouse inventory': true,
      'Production': true,
      'Multi-company': true,
      'Basic BI': true,
      'Advanced BI': true,
      'Basic integrations': true,
      'Premium integrations': true,
      'REST API': true,
      'Support': 'Dedicated 24/7',
      'SLA': '99.9% uptime',
      'Backups': 'Custom',
      'Storage': 'Unlimited'
    }
  }
];

export function getPricingTier(id: string): PricingTier | undefined {
  return pricingTiers.find(tier => tier.id === id);
}

export function getAllPricingTiers(): PricingTier[] {
  return pricingTiers;
}

export function getPricingTiersForICP(icp: string): PricingTier[] {
  return pricingTiers.filter(tier => tier.target_icp.includes(icp));
}
