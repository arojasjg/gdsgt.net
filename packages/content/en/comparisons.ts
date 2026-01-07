/**
 * Comparison Content (English)
 * NOTE: Auto-translated - requires human review for market-specific terminology
 */

export interface Comparison {
  slug: string;
  competitor_name: string;
  competitor_tagline: string;
  title: string;
  description: string;
  summary: {
    gds_best_for: string[];
    competitor_best_for: string[];
    verdict: string;
  };
  features: Array<{
    category: string;
    items: Array<{
      feature: string;
      gds: 'yes' | 'no' | 'partial' | string;
      competitor: 'yes' | 'no' | 'partial' | string;
      notes?: string;
    }>;
  }>;
  pricing: {
    gds: { model: string; starting_price: string; includes: string[]; };
    competitor: { model: string; starting_price: string; includes: string[]; };
    verdict: string;
  };
  gds_pros: string[];
  gds_cons: string[];
  competitor_pros: string[];
  competitor_cons: string[];
  when_to_choose_gds: Array<{ scenario: string; reason: string; }>;
  when_to_choose_competitor: Array<{ scenario: string; reason: string; }>;
  migration: {
    difficulty: 'easy' | 'medium' | 'hard';
    duration: string;
    key_considerations: string[];
  };
  faqs: Array<{ question: string; answer: string; }>;
  cta: { title: string; description: string; button: string; };
}

export const comparisons: Comparison[] = [
  {
    slug: 'gds-vs-odoo',
    competitor_name: 'Odoo',
    competitor_tagline: 'Open Source ERP',
    title: 'GDS ONE vs Odoo',
    description: 'Detailed comparison between GDS ONE and Odoo. Discover which is better for your company.',
    summary: {
      gds_best_for: [
        'Companies needing 24/7 Spanish support',
        'Fast implementations (30-90 days)',
        'Specific industries (distribution, manufacturing)',
        'Companies valuing stability over extreme customization'
      ],
      competitor_best_for: [
        'Companies with strong internal technical team',
        'Need for extreme customization',
        'Very limited budget (Community version)',
        'Tech-savvy companies that can self-support'
      ],
      verdict: '[HUMAN REVIEW] GDS ONE is better for companies seeking a complete, stable solution with professional support. Odoo is better for companies with internal technical resources that can customize and maintain the system.'
    },
    features: [],
    pricing: {
      gds: {
        model: 'Monthly subscription per user',
        starting_price: 'From $50 USD/user/month',
        includes: ['All modules', '24/7 support', 'Cloud hosting', 'Automatic updates', 'Initial training', 'Daily backups']
      },
      competitor: {
        model: 'Community (free) or Enterprise (per user)',
        starting_price: 'Community: $0, Enterprise: from $30 USD/user/month',
        includes: ['Community: No official support', 'Enterprise: Limited support', 'Self-hosting (Community)', 'Odoo.sh (Enterprise, additional cost)']
      },
      verdict: '[HUMAN REVIEW] Odoo Community seems cheaper but has hidden costs (hosting, support, development). GDS includes everything.'
    },
    gds_pros: ['24/7 Spanish support included', 'Fast implementation (30-90 days)', 'All-inclusive (hosting, backups, updates)'],
    gds_cons: ['Less flexible than Odoo for extreme customizations', 'Smaller module ecosystem'],
    competitor_pros: ['Very flexible and customizable', 'Large module ecosystem', 'Free Community version'],
    competitor_cons: ['Community without official support', 'Complex version migration', 'Requires internal technical team'],
    when_to_choose_gds: [
      { scenario: 'Need professional Spanish support', reason: 'GDS has 24/7 Spanish support included.' },
      { scenario: 'Want fast implementation', reason: 'GDS implements in 30-90 days. Odoo can take 6+ months.' }
    ],
    when_to_choose_competitor: [
      { scenario: 'Have strong technical team', reason: 'Odoo requires development and customization.' },
      { scenario: 'Need extreme customization', reason: 'Odoo is more flexible. You can modify almost everything.' }
    ],
    migration: {
      difficulty: 'medium',
      duration: '2-3 months',
      key_considerations: ['Export data from Odoo (PostgreSQL)', 'Map fields between systems', 'Migrate customizations (may require re-development)']
    },
    faqs: [
      { question: 'Can I migrate from Odoo to GDS?', answer: 'Yes. We have experience migrating from Odoo. The process takes 2-3 months.' }
    ],
    cta: { title: 'Migrating from Odoo?', description: 'Schedule a consultation and we\'ll help you evaluate if GDS is a better option.', button: 'Schedule Consultation' }
  },
  {
    slug: 'gds-vs-sap',
    competitor_name: 'SAP Business One',
    competitor_tagline: 'Enterprise ERP',
    title: 'GDS ONE vs SAP Business One',
    description: 'Comparison between GDS ONE and SAP Business One. Discover which fits your SMB better.',
    summary: {
      gds_best_for: ['SMBs seeking enterprise functionality without complexity', 'Companies valuing agility over "brand"', 'Moderate budget ($50-150/user/month)'],
      competitor_best_for: ['Companies requiring "SAP brand" (compliance, audits)', 'Subsidiaries of corporates using SAP', 'High budget ($150-300+/user/month)'],
      verdict: '[HUMAN REVIEW] GDS offers 80% of SAP B1 functionality at 40% of the cost and 50% of implementation time.'
    },
    features: [],
    pricing: {
      gds: {
        model: 'All-inclusive monthly subscription',
        starting_price: 'From $50 USD/user/month',
        includes: ['All licenses', 'Cloud hosting', '24/7 support', 'Updates', 'Backups']
      },
      competitor: {
        model: 'Perpetual license + annual maintenance',
        starting_price: 'From $3,000 USD/user (one-time) + 18-22% annual',
        includes: ['Perpetual license', 'Annual maintenance (18-22%)', 'Support through partner', 'Additional hosting', 'Implementation $50-150K+']
      },
      verdict: '[HUMAN REVIEW] SAP B1 is 3-5x more expensive considering licenses, implementation, and maintenance. GDS is all-inclusive and predictable.'
    },
    gds_pros: ['Predictable and transparent pricing', 'Fast implementation (30-90 days)', 'Easy to use', 'Direct 24/7 support'],
    gds_cons: ['Doesn\'t have "SAP brand"', 'Doesn\'t integrate natively with SAP ECC/S4'],
    competitor_pros: ['SAP brand (recognition)', 'Very robust', 'Integrates with SAP ECC/S4'],
    competitor_cons: ['Very expensive (3-5x more than GDS)', 'Slow implementation (6-12 months)', 'Complex to use'],
    when_to_choose_gds: [
      { scenario: 'You\'re an SMB seeking enterprise functionality', reason: 'GDS offers 80% of functionality at 40% of the cost.' }
    ],
    when_to_choose_competitor: [
      { scenario: 'Need "SAP brand" for compliance', reason: 'Some audits or clients require SAP.' }
    ],
    migration: { difficulty: 'hard', duration: '4-6 months', key_considerations: ['SAP has complex data structure', 'Requires detailed field mapping'] },
    faqs: [
      { question: 'Can GDS replace SAP Business One?', answer: 'Yes, for most SMBs. GDS offers similar functionality but easier to use and more economical.' }
    ],
    cta: { title: 'Evaluating SAP Business One?', description: 'Compare functionality and costs. You\'ll be surprised how much you can save with GDS.', button: 'See Detailed Comparison' }
  },
  {
    slug: 'gds-vs-quickbooks',
    competitor_name: 'QuickBooks',
    competitor_tagline: 'Accounting Software',
    title: 'GDS ONE vs QuickBooks',
    description: 'Comparison between GDS ONE and QuickBooks. When it\'s time to grow beyond QuickBooks.',
    summary: {
      gds_best_for: ['Companies that outgrew QuickBooks', 'Need advanced inventory', 'Manufacturing or distribution', 'Multiple warehouses or branches'],
      competitor_best_for: ['Very small companies (< 10 employees)', 'Only need basic accounting', 'Don\'t handle inventory', 'Very limited budget'],
      verdict: '[HUMAN REVIEW] QuickBooks is excellent for basic accounting of small companies. GDS is a complete ERP for companies needing inventory, production, multiple locations, and more complex processes.'
    },
    features: [],
    pricing: {
      gds: {
        model: 'Monthly subscription per user',
        starting_price: 'From $50 USD/user/month',
        includes: ['Complete ERP', 'All modules', 'Unlimited users', '24/7 support', 'Cloud hosting']
      },
      competitor: {
        model: 'Monthly subscription per company',
        starting_price: 'From $30 USD/month (Simple Start) to $200/month (Advanced)',
        includes: ['Simple Start: 1 user, basic accounting', 'Essentials: 3 users, basic inventory', 'Plus: 5 users, multi-warehouse']
      },
      verdict: '[HUMAN REVIEW] QuickBooks seems cheaper but has user and functionality limits. For 10+ users with advanced inventory, GDS is more economical and complete.'
    },
    gds_pros: ['Complete ERP (not just accounting)', 'Advanced inventory (multi-warehouse, lots)', 'Manufacturing included', 'Integrated CRM'],
    gds_cons: ['More complex than QuickBooks (but more powerful)', 'Requires implementation (QuickBooks is more "plug and play")'],
    competitor_pros: ['Very easy to use', 'Fast implementation (days)', 'Low price for small companies'],
    competitor_cons: ['Only accounting and basic inventory', 'No manufacturing', 'User limits', 'Doesn\'t scale well'],
    when_to_choose_gds: [
      { scenario: 'Have more than 10 employees', reason: 'QuickBooks has user limits. GDS scales without limits.' }
    ],
    when_to_choose_competitor: [
      { scenario: 'Very small (< 5 employees)', reason: 'QuickBooks Simple Start is sufficient and economical.' }
    ],
    migration: { difficulty: 'easy', duration: '2-4 weeks', key_considerations: ['Export catalogs (customers, products)', 'Migrate initial balances'] },
    faqs: [
      { question: 'When should I migrate from QuickBooks to an ERP?', answer: 'When: 1) Have more than 10 employees, 2) Need advanced inventory, 3) Multiple warehouses, 4) Manufacturing, 5) QuickBooks feels limited.' }
    ],
    cta: { title: 'Outgrew QuickBooks?', description: 'If QuickBooks fell short, it\'s time for a complete ERP. Schedule a demo.', button: 'See How to Migrate' }
  },
  {
    slug: 'gds-vs-excel',
    competitor_name: 'Excel',
    competitor_tagline: 'Spreadsheets',
    title: 'GDS ONE vs Excel',
    description: 'Why Excel isn\'t an ERP and when it\'s time to make the leap to a real system.',
    summary: {
      gds_best_for: ['Companies that outgrew Excel', 'More than 5 employees', 'Frequent errors in Excel', 'Need real-time collaboration'],
      competitor_best_for: ['Very small companies (1-3 people)', 'Very simple processes', 'Zero budget', 'Don\'t need collaboration'],
      verdict: '[HUMAN REVIEW] Excel is a tool, not a system. It\'s free but has enormous hidden costs: time, errors, lost opportunities. GDS automates what you do manually in Excel.'
    },
    features: [],
    pricing: {
      gds: {
        model: 'Monthly subscription',
        starting_price: '$50 USD/user/month',
        includes: ['Complete system', 'Automation', '24/7 support', 'Updates', 'Automatic backups']
      },
      competitor: {
        model: 'License or Office 365 subscription',
        starting_price: '$0 (if you already have Office) or $7-13/user/month (Office 365)',
        includes: ['Spreadsheet', 'No automation', 'No process support', 'You do everything manually', 'Hidden costs: time, errors']
      },
      verdict: '[HUMAN REVIEW] Excel seems free but has enormous hidden costs. If an employee spends 10 hours/week on Excel that could be automated, that costs $500-1000/month. GDS pays for itself.'
    },
    gds_pros: ['Automates manual processes', 'Eliminates human errors', 'Real-time collaboration', 'Complete audit'],
    gds_cons: ['Requires initial investment', 'Learning curve', 'Not "free" like Excel'],
    competitor_pros: ['Free (if you already have Office)', 'Flexible', 'Familiar to everyone'],
    competitor_cons: ['Everything is manual', 'Error-prone', 'Doesn\'t scale', 'Scattered files', 'No audit'],
    when_to_choose_gds: [
      { scenario: 'Spend 10+ hours/week on Excel', reason: 'GDS automates manual tasks. You recover that time.' }
    ],
    when_to_choose_competitor: [
      { scenario: 'You\'re 1-2 people', reason: 'If you\'re very small, Excel may be sufficient.' }
    ],
    migration: { difficulty: 'easy', duration: '2-4 weeks', key_considerations: ['Identify which Excel sheets to use', 'Clean data (Excel usually has inconsistencies)'] },
    faqs: [
      { question: 'When should I leave Excel and use an ERP?', answer: 'When: 1) Spend 10+ hours/week on Excel, 2) Frequent errors, 3) Multiple people use Excel, 4) Need audit, 5) Excel feels chaotic.' }
    ],
    cta: { title: 'Tired of Excel?', description: 'Calculate how much time and money you lose with Excel. You\'ll be surprised.', button: 'Calculate Excel Cost' }
  },
  {
    slug: 'gds-vs-zoho',
    competitor_name: 'Zoho',
    competitor_tagline: 'Application Suite',
    title: 'GDS ONE vs Zoho',
    description: 'Comparison between GDS ONE and Zoho. Integrated ERP vs application suite.',
    summary: {
      gds_best_for: ['Companies needing integrated ERP', 'Value simplicity over quantity of apps', 'Need professional support'],
      competitor_best_for: ['Companies needing many different apps', 'Very tight budget', 'Willing to integrate multiple apps'],
      verdict: '[HUMAN REVIEW] Zoho offers many apps at low cost but requires integrating multiple systems. GDS is an integrated ERP, simpler but more focused on operations.'
    },
    features: [],
    pricing: {
      gds: {
        model: 'All-inclusive monthly subscription',
        starting_price: '$50 USD/user/month',
        includes: ['Complete ERP', 'All modules', '24/7 support', 'Implementation', 'Hosting']
      },
      competitor: {
        model: 'Per app, per user',
        starting_price: 'From $7/user/month per app (need multiple apps)',
        includes: ['Zoho CRM: $14-52/user/month', 'Zoho Books: $15-240/month', 'Zoho Inventory: $79-249/month']
      },
      verdict: '[HUMAN REVIEW] Zoho seems cheaper but you need multiple apps. For complete ERP functionality, you end up paying similar or more than GDS, with more complexity.'
    },
    gds_pros: ['Integrated ERP (not multiple apps)', 'Simpler to use', '24/7 support included', 'Consistent UI'],
    gds_cons: ['Fewer apps than Zoho (but more focused)', 'Doesn\'t have all Zoho productivity apps'],
    competitor_pros: ['Many apps (40+)', 'Very strong CRM', 'Low price per individual app'],
    competitor_cons: ['Requires multiple apps for ERP', 'Complex to integrate', 'Inconsistent UI between apps'],
    when_to_choose_gds: [
      { scenario: 'Need integrated ERP', reason: 'GDS is all-in-one. Zoho requires multiple apps.' }
    ],
    when_to_choose_competitor: [
      { scenario: 'CRM is your #1 priority', reason: 'Zoho CRM is very strong. If CRM is most important, consider Zoho.' }
    ],
    migration: { difficulty: 'medium', duration: '2-3 months', key_considerations: ['Export data from multiple Zoho apps', 'Consolidate into single system'] },
    faqs: [
      { question: 'Can GDS replace Zoho?', answer: 'For ERP functionality, yes. GDS replaces Zoho CRM + Books + Inventory. Doesn\'t replace productivity apps (email, docs).' }
    ],
    cta: { title: 'Tired of multiple Zoho apps?', description: 'Simplify with an integrated ERP. Everything in one system.', button: 'See Integrated ERP' }
  }
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug);
}

export function getAllComparisons(): Comparison[] {
  return comparisons;
}
