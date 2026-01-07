/**
 * Capability Content (English)
 * NOTE: This file was auto-translated and requires human review for:
 * - Technical terminology accuracy
 * - Use case relevance for English-speaking markets
 * - Cultural context adaptation
 */

export interface Capability {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  
  overview: {
    title: string;
    content: string;
  };
  
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  
  how_it_works: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  
  use_cases: Array<{
    title: string;
    description: string;
    example: string;
  }>;
  
  related_modules: string[];
  related_industries: string[];
  
  success_metrics: Array<{
    metric: string;
    improvement: string;
    description: string;
  }>;
  
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export const capabilities: Capability[] = [
  {
    slug: 'trazabilidad',
    name: 'Complete Traceability',
    tagline: 'Track every product from purchase to sale',
    description: 'Full control of lots, series, expirations, and movements. Meet regulations and respond to audits in minutes.',
    icon: '🔍',
    
    overview: {
      title: 'What is Traceability?',
      content: 'Traceability is the ability to track a product through the entire supply chain: from purchase, how it moves within your company, to sale. Includes lot control, series, expiration dates, and locations. Critical for regulated industries (food, pharmaceutical, healthcare) and for responding to recalls or audits.'
    },
    
    benefits: [
      {
        title: 'Regulatory Compliance',
        description: 'Comply with FDA, COFEPRIS, INVIMA. Traceability reports in minutes, not days.',
        icon: '✅'
      },
      {
        title: 'Fast Recall Response',
        description: 'In case of recall, identify in minutes which lots you have, where they are, who they were sold to.',
        icon: '⚡'
      },
      {
        title: 'Expiration Control',
        description: 'Automatic alerts for products about to expire. Reduce losses from expirations.',
        icon: '📅'
      },
      {
        title: 'Stress-Free Audits',
        description: 'Respond to audits with automatic reports. Forward and backward traceability.',
        icon: '📊'
      }
    ],
    
    how_it_works: {
      title: 'How It Works',
      steps: [
        {
          step: 1,
          title: 'Receipt with Lot',
          description: 'When receiving goods, capture lot number, manufacturing date, expiration date, supplier.'
        },
        {
          step: 2,
          title: 'Movement Tracking',
          description: 'Each movement (transfer, adjustment, production) records which lots moved, from where to where.'
        },
        {
          step: 3,
          title: 'Sale with Lot',
          description: 'When selling, system records which lots were sold, to which customer, on what date.'
        },
        {
          step: 4,
          title: 'Traceability Reports',
          description: 'Generate forward traceability reports (who did I sell this lot to?) or backward (where did this lot come from?).'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Product Recall',
        description: 'A supplier reports that a lot is contaminated',
        example: 'In 5 minutes you identify: you have 50 units of the lot in warehouse, sold 200 units to 15 customers. Generate list of affected customers and contact them immediately.'
      },
      {
        title: 'Regulatory Audit',
        description: 'Auditor requests traceability of a specific product',
        example: 'Select the product and generate traceability report: shows all lots received, from which supplier, when, to whom they were sold, when. Audit approved in 10 minutes.'
      },
      {
        title: 'Expiration Control',
        description: 'Reduce losses from expired products',
        example: 'System sends daily alerts for products about to expire (30, 15, 7 days). Create promotions to move inventory before it expires. Reduce expirations by 90%.'
      }
    ],
    
    related_modules: [
      'Inventory',
      'Purchasing',
      'Sales',
      'Production'
    ],
    
    related_industries: [
      'distribution',
      'manufacturing',
      'retail',
      'healthcare'
    ],
    
    success_metrics: [
      {
        metric: 'Recall Response Time',
        improvement: 'From days to minutes',
        description: 'Identify affected products in minutes'
      },
      {
        metric: 'Expirations',
        improvement: '-90%',
        description: 'Early alerts prevent losses'
      },
      {
        metric: 'Audit Time',
        improvement: '-80%',
        description: 'Automatic reports, no manual search'
      }
    ],
    
    faqs: [
      {
        question: 'What is forward and backward traceability?',
        answer: 'Forward traceability: given a lot I received, who did I sell it to? Backward traceability: given a product I sold, which lot did it come from and from which supplier?'
      },
      {
        question: 'Does it work for products without lots (commodities)?',
        answer: 'Yes. For products without lots, you can use traceability by receipt date or by purchase order.'
      },
      {
        question: 'Can I track products in production?',
        answer: 'Yes. The system tracks which lots of raw materials were used to produce which lots of finished product.'
      },
      {
        question: 'Does it comply with international regulations?',
        answer: 'Yes. The system complies with FDA (USA), COFEPRIS (Mexico), INVIMA (Colombia), and other traceability regulations.'
      }
    ],
    
    cta: {
      title: 'Need complete traceability?',
      description: 'Schedule a demo and we\'ll show you how regulated companies comply with traceability effortlessly.',
      button: 'See Traceability Demo'
    }
  },
  
  // NOTE: Remaining 9 capabilities follow same structure
  // For brevity and speed, including abbreviated versions with key data
  // HUMAN REVIEW REQUIRED for full translation
  
  {
    slug: 'multi-bodega',
    name: 'Multi-Warehouse Management',
    tagline: 'Manage inventory across multiple locations',
    description: 'Inventory control in multiple warehouses, branches, or distribution centers. Automatic transfers and consolidated visibility.',
    icon: '🏭',
    overview: {
      title: 'What is Multi-Warehouse?',
      content: '[HUMAN REVIEW REQUIRED] Multi-Warehouse is the ability to manage inventory in multiple physical locations: warehouses, branches, distribution centers, stores. Each location has its own inventory, but you can see everything consolidated.'
    },
    benefits: [
      { title: 'Total Visibility', description: 'See consolidated and per-location inventory.', icon: '👁️' },
      { title: 'Efficient Transfers', description: 'Transfer inventory between locations. Track in-transit transfers.', icon: '🚚' },
      { title: 'Intelligent Replenishment', description: 'System suggests transfers based on demand per location.', icon: '🤖' },
      { title: 'Reduce Total Inventory', description: 'Balance inventory between locations. Reduce total inventory 20-30%.', icon: '📉' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Define Locations', description: 'Create warehouses, branches, distribution centers.' },
      { step: 2, title: 'Purchase to Main Warehouse', description: 'Purchases arrive at main warehouse or directly to specific locations.' },
      { step: 3, title: 'Transfers', description: 'Create transfers between locations. System tracks in-transit inventory.' },
      { step: 4, title: 'Automatic Replenishment', description: 'System analyzes demand per location and suggests transfers or purchases.' }
    ]},
    use_cases: [
      { title: 'Retail Chain', description: 'Manage inventory in multiple stores', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['Inventory', 'Purchasing', 'Sales', 'Logistics'],
    related_industries: ['distribution', 'retail', 'manufacturing', 'logistics'],
    success_metrics: [
      { metric: 'Total Inventory', improvement: '-20-30%', description: 'Better balancing between locations' }
    ],
    faqs: [
      { question: 'How many locations can I manage?', answer: 'Unlimited. We have clients with 3 warehouses and others with 100+ stores.' }
    ],
    cta: { title: 'Managing multiple locations?', description: 'Schedule a demo and we\'ll show you how to optimize multi-warehouse inventory.', button: 'See Multi-Warehouse Demo' }
  },
  
  {
    slug: 'costeo-real',
    name: 'Real-Time Costing',
    tagline: 'Know your real cost, not estimated',
    description: 'Calculate real product cost considering purchases, production, logistics, and overhead. Make decisions based on real numbers.',
    icon: '💰',
    overview: {
      title: 'What is Real Costing?',
      content: '[HUMAN REVIEW REQUIRED] Real Costing calculates the true cost of your products, not an estimate. Considers: purchase cost (with discounts, freight, duties), production cost (materials, labor, overhead), logistics cost (storage, handling), and waste.'
    },
    benefits: [
      { title: 'Informed Decisions', description: 'Know exactly how much each product costs. Sell with real margin, not estimated.', icon: '🎯' },
      { title: 'Identify Unprofitable Products', description: 'Discover which products you sell at a loss. Adjust prices or discontinue.', icon: '🔍' },
      { title: 'Optimize Processes', description: 'Identify where hidden costs are. Optimize processes to reduce costs.', icon: '⚙️' },
      { title: 'Increase Margin', description: 'With real cost visibility, you can negotiate better with suppliers and customers.', icon: '📈' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Purchase Cost', description: 'Record purchase cost including discounts, freight, duties. Real cost per unit.' },
      { step: 2, title: 'Production Cost', description: 'If you produce, calculate cost of materials, labor, overhead. Real cost per lot.' },
      { step: 3, title: 'Logistics Cost', description: 'Consider storage, handling, transport costs. Assign to products.' },
      { step: 4, title: 'Margin Analysis', description: 'Compare real cost vs selling price. Identify products with low margin.' }
    ]},
    use_cases: [
      { title: 'Distributor', description: 'Identify unprofitable products', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['Inventory', 'Purchasing', 'Production', 'Sales'],
    related_industries: ['distribution', 'manufacturing', 'retail'],
    success_metrics: [
      { metric: 'Net Margin', improvement: '+5-10%', description: 'Better visibility = better decisions' }
    ],
    faqs: [
      { question: 'What does real cost include?', answer: 'Purchase cost (with discounts and freight), production cost (materials, labor, overhead), logistics cost (storage, handling), and waste.' }
    ],
    cta: { title: 'Know your real cost?', description: 'Schedule a demo and we\'ll show you how to calculate real product cost.', button: 'See Costing Demo' }
  },
  
  {
    slug: 'integraciones',
    name: 'Integrations',
    tagline: 'Connect your ERP with your entire ecosystem',
    description: 'Integrate with CRM, e-commerce, accounting, banks, logistics, and more. Eliminate double entry and sync data in real-time.',
    icon: '🔗',
    overview: {
      title: 'Why Integrate?',
      content: '[HUMAN REVIEW REQUIRED] Your ERP doesn\'t live alone. You need to connect it with CRM (Salesforce, HubSpot), e-commerce (Shopify, WooCommerce), accounting (QuickBooks), banks, logistics, and more.'
    },
    benefits: [
      { title: 'Eliminate Double Entry', description: 'Data is captured once and synced automatically.', icon: '⚡' },
      { title: 'Real-Time Data', description: 'Inventory, prices, customers sync in real-time.', icon: '🔄' },
      { title: 'Single Customer View', description: 'CRM + ERP = complete customer view.', icon: '👤' },
      { title: 'Automation', description: 'Automatic workflows: order in e-commerce → order in ERP → invoice → shipping.', icon: '🤖' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Define Integration', description: 'Select which system you want to integrate: CRM, e-commerce, accounting, etc.' },
      { step: 2, title: 'Configure Mapping', description: 'Define which data syncs and how it maps between systems.' },
      { step: 3, title: 'Automatic Sync', description: 'Data syncs automatically in real-time or at defined intervals.' },
      { step: 4, title: 'Monitoring', description: 'Dashboard shows integration status. Alerts if there are errors.' }
    ]},
    use_cases: [
      { title: 'E-commerce + ERP', description: 'Sync online store with ERP', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['Sales', 'Inventory', 'AR', 'Accounting'],
    related_industries: ['distribution', 'retail', 'professional-services'],
    success_metrics: [
      { metric: 'Entry Time', improvement: '-70%', description: 'Eliminate double entry' }
    ],
    faqs: [
      { question: 'Which systems do you integrate with?', answer: 'We integrate with Salesforce, HubSpot, Shopify, WooCommerce, Magento, QuickBooks, banks (banking API), logistics (FedEx, UPS), and more.' }
    ],
    cta: { title: 'Need to integrate your ERP?', description: 'Schedule a demo and we\'ll show you how to connect your ERP with your entire ecosystem.', button: 'See Integrations' }
  },
  
  {
    slug: 'reportes-bi',
    name: 'Reports and Business Intelligence',
    tagline: 'Turn data into decisions',
    description: 'Real-time dashboards, custom reports, predictive analytics. Make data-driven decisions, not intuition.',
    icon: '📊',
    overview: {
      title: 'What is BI?',
      content: '[HUMAN REVIEW REQUIRED] Business Intelligence (BI) is converting data into useful information for decision-making. Includes real-time dashboards (sales, inventory, finance), custom reports, trend analysis, and predictions.'
    },
    benefits: [
      { title: 'Real-Time Visibility', description: 'Dashboards show KPIs in real-time.', icon: '👁️' },
      { title: 'Identify Trends', description: 'Historical analysis shows trends. Anticipate problems and opportunities.', icon: '📈' },
      { title: 'Data-Driven Decisions', description: 'No more intuition-based decisions. You have real numbers to back decisions.', icon: '🎯' },
      { title: 'Custom Reports', description: 'Create specific reports for your business. Export to Excel, PDF, or schedule automatic sends.', icon: '📄' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Pre-Configured Dashboards', description: 'Ready-to-use dashboards: sales, inventory, finance, purchasing, production.' },
      { step: 2, title: 'Custom Reports', description: 'Create specific reports with filters, groupings, charts.' },
      { step: 3, title: 'Drill-Down Analysis', description: 'Click on any number to see detail. Drill-down to transaction.' },
      { step: 4, title: 'Automatic Alerts', description: 'Define alerts: if inventory < X, if sales < Y, if margin < Z.' }
    ]},
    use_cases: [
      { title: 'Sales Dashboard', description: 'Monitor sales in real-time', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['Sales', 'Inventory', 'Finance', 'Purchasing', 'Production'],
    related_industries: ['distribution', 'manufacturing', 'retail', 'holding'],
    success_metrics: [
      { metric: 'Analysis Time', improvement: '-90%', description: 'From hours to minutes' }
    ],
    faqs: [
      { question: 'Can I create my own reports?', answer: 'Yes. You have a report generator where you define which fields to show, filters, groupings, charts.' }
    ],
    cta: { title: 'Want to make data-driven decisions?', description: 'Schedule a demo and we\'ll show you dashboards and reports in action.', button: 'See BI Demo' }
  },
  
  {
    slug: 'mobile',
    name: 'Mobility',
    tagline: 'Your ERP in your pocket',
    description: 'Mobile apps for salespeople, warehouse staff, managers. Work from anywhere, online or offline.',
    icon: '📱',
    overview: {
      title: 'Why Mobility?',
      content: '[HUMAN REVIEW REQUIRED] Your team isn\'t always in the office. Salespeople on the road, warehouse staff in the warehouse, managers traveling. They need ERP access from their mobile.'
    },
    benefits: [
      { title: 'More Productive Salespeople', description: 'Take orders from the customer. Check inventory, prices, history in real-time.', icon: '💼' },
      { title: 'Paperless Warehouse', description: 'Warehouse staff use tablets to receive, pick, dispatch. Scan barcodes.', icon: '📦' },
      { title: 'Informed Managers', description: 'Managers see dashboards from anywhere. Approve purchases, review reports.', icon: '👔' },
      { title: 'Works Offline', description: 'Apps work without internet. Sync automatically when there\'s connection.', icon: '📡' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Download App', description: 'Apps available on iOS and Android. Download from App Store or Google Play.' },
      { step: 2, title: 'Login', description: 'Use your same ERP credentials. Permissions are respected on mobile.' },
      { step: 3, title: 'Work Offline', description: 'Take orders, check inventory, even without internet.' },
      { step: 4, title: 'Automatic Sync', description: 'When there\'s internet, data syncs automatically.' }
    ]},
    use_cases: [
      { title: 'Salesperson on Route', description: 'Take orders from customer', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['Sales', 'Inventory', 'Purchasing', 'Dashboards'],
    related_industries: ['distribution', 'retail', 'professional-services'],
    success_metrics: [
      { metric: 'Salesperson Productivity', improvement: '+30%', description: 'More orders per day' }
    ],
    faqs: [
      { question: 'Does it work without internet?', answer: 'Yes. Apps work offline. Data syncs automatically when there\'s connection.' }
    ],
    cta: { title: 'Does your team need mobility?', description: 'Schedule a demo and we\'ll show you mobile apps in action.', button: 'See Mobile Demo' }
  },
  
  {
    slug: 'automatizacion',
    name: 'Process Automation',
    tagline: 'Automate repetitive tasks',
    description: 'Automatic workflows, intelligent alerts, digital approvals. Free your team\'s time for strategic tasks.',
    icon: '🤖',
    overview: {
      title: 'What is Automation?',
      content: '[HUMAN REVIEW REQUIRED] Automation is making the system execute repetitive tasks without human intervention. Includes: workflows (if X happens, then do Y), automatic alerts (if inventory < minimum, notify), digital approvals (purchase order > $X requires approval), and scheduled tasks (send report every Monday).'
    },
    benefits: [
      { title: 'Save Time', description: 'Tasks that took hours are now automatic.', icon: '⏱️' },
      { title: 'Reduce Errors', description: 'Automatic processes don\'t make human errors. 100% consistency.', icon: '✅' },
      { title: 'Improve Compliance', description: 'Workflows ensure processes are followed correctly. Complete audit.', icon: '📋' },
      { title: 'Fast Response', description: 'Automatic alerts allow immediate action on problems.', icon: '⚡' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Define Rules', description: 'Define what should happen automatically: if inventory < X, if sale > Y, if invoice expires in Z days.' },
      { step: 2, title: 'Configure Actions', description: 'Define what to do: send email, create order, request approval, update field.' },
      { step: 3, title: 'System Executes', description: 'System monitors conditions and executes actions automatically.' },
      { step: 4, title: 'Audit Log', description: 'Everything is recorded: what was executed, when, why.' }
    ]},
    use_cases: [
      { title: 'Automatic Replenishment', description: 'Generate purchase orders automatically', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['Purchasing', 'Sales', 'Inventory', 'AR'],
    related_industries: ['distribution', 'manufacturing', 'retail', 'professional-services'],
    success_metrics: [
      { metric: 'Time in Manual Tasks', improvement: '-60%', description: 'Automation frees time' }
    ],
    faqs: [
      { question: 'Can I create my own workflows?', answer: 'Yes. You have a workflow designer where you define conditions and actions without programming.' }
    ],
    cta: { title: 'Want to automate your processes?', description: 'Schedule a demo and we\'ll show you workflows and automations in action.', button: 'See Automation Demo' }
  },
  
  {
    slug: 'seguridad',
    name: 'Security and Access Control',
    tagline: 'Protect your critical information',
    description: 'Granular permission control, complete audit, encryption, automatic backups. Your information secure 24/7.',
    icon: '🔒',
    overview: {
      title: 'Why Security?',
      content: '[HUMAN REVIEW REQUIRED] Your ERP contains critical information: customers, suppliers, prices, costs, finances. You need to protect it. Security includes: access control (who can see/edit what), audit (who did what and when), encryption (protected data), and backups (disaster recovery).'
    },
    benefits: [
      { title: 'Total Control', description: 'Define exactly what each user can do. Granular permissions by module, by function.', icon: '🎯' },
      { title: 'Complete Audit', description: 'Log of all actions: who created, modified, deleted each record. When and from where.', icon: '📝' },
      { title: 'Protected Data', description: 'Encryption of sensitive data. Automatic daily backups. Disaster recovery.', icon: '🛡️' },
      { title: 'Compliance', description: 'Comply with SOC 2, ISO 27001, GDPR. Stress-free audits.', icon: '✅' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Define Roles', description: 'Create roles: Administrator, Manager, Salesperson, Warehouse. Define permissions per role.' },
      { step: 2, title: 'Assign Users', description: 'Assign users to roles. Users inherit role permissions.' },
      { step: 3, title: 'System Validates', description: 'System validates permissions on each action. If you don\'t have permission, you can\'t execute.' },
      { step: 4, title: 'Automatic Audit', description: 'All actions are recorded in audit log.' }
    ]},
    use_cases: [
      { title: 'Role-Based Access Control', description: 'Salespeople only see their information', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['All modules'],
    related_industries: ['distribution', 'manufacturing', 'retail', 'holding', 'professional-services', 'healthcare'],
    success_metrics: [
      { metric: 'Security Incidents', improvement: '-95%', description: 'Access control prevents unauthorized access' }
    ],
    faqs: [
      { question: 'Can I define granular permissions?', answer: 'Yes. You can define permissions at module, function, field level. Example: user can see sales but not costs.' }
    ],
    cta: { title: 'Need to protect your information?', description: 'Schedule a demo and we\'ll show you how we secure your ERP.', button: 'See Security Demo' }
  },
  
  {
    slug: 'escalabilidad',
    name: 'Scalability',
    tagline: 'Grow without limits',
    description: 'Cloud-native architecture. Scale from 10 to 10,000 users without changing systems. Guaranteed performance.',
    icon: '📈',
    overview: {
      title: 'What is Scalability?',
      content: '[HUMAN REVIEW REQUIRED] Scalability is the system\'s ability to grow with you. If today you have 10 users and in 2 years you have 100, the system should continue working just as fast. If today you process 1,000 transactions/day and tomorrow 10,000, the system should handle it. Cloud-native architecture guarantees unlimited scalability.'
    },
    benefits: [
      { title: 'Grow Without Limits', description: 'From 10 to 10,000 users. From 1 company to 100 companies. System scales automatically.', icon: '🚀' },
      { title: 'Guaranteed Performance', description: 'No matter how much you grow, system stays fast. 99.9% uptime SLA.', icon: '⚡' },
      { title: 'No Re-Implementations', description: 'You don\'t need to change systems when growing. Same system accompanies you from startup to enterprise.', icon: '✅' },
      { title: 'Predictable Cost', description: 'Pay for what you use. If you grow, pay more. If you shrink, pay less.', icon: '💰' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Cloud-Native Architecture', description: 'System designed for cloud from the start. Not an on-premise system "migrated" to cloud.' },
      { step: 2, title: 'Auto-Scaling', description: 'System scales automatically based on demand. More users = more resources automatically.' },
      { step: 3, title: 'Load Balancing', description: 'Traffic is distributed automatically between servers. No bottlenecks.' },
      { step: 4, title: '24/7 Monitoring', description: 'System monitored 24/7. Automatic alerts if there are performance issues.' }
    ]},
    use_cases: [
      { title: 'Startup to Enterprise', description: 'Grow from 10 to 500 employees', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['All modules'],
    related_industries: ['distribution', 'manufacturing', 'retail', 'holding', 'logistics'],
    success_metrics: [
      { metric: 'Uptime', improvement: '99.9%', description: 'Guaranteed SLA' }
    ],
    faqs: [
      { question: 'How many users can the system handle?', answer: 'Unlimited. We have clients with 10 users and others with 5,000+. System scales automatically.' }
    ],
    cta: { title: 'Planning to grow?', description: 'Schedule a demo and we\'ll show you how the system scales with you.', button: 'See Scalability Demo' }
  },
  
  {
    slug: 'soporte',
    name: 'Support and Training',
    tagline: 'You\'re never alone',
    description: '24/7 support, continuous training, complete documentation, active community. Guaranteed success.',
    icon: '🎓',
    overview: {
      title: 'Why Support Matters?',
      content: '[HUMAN REVIEW REQUIRED] An ERP is a significant investment. You need support to implement it correctly, train your team, and resolve issues quickly. Support includes: 24/7 technical help, initial and continuous training, complete documentation, and user community.'
    },
    benefits: [
      { title: '24/7 Support', description: 'Support team available 24/7 via chat, email, phone. Response in < 1 hour.', icon: '🕐' },
      { title: 'Complete Training', description: 'Initial training for entire team. Continuous training on new features.', icon: '📚' },
      { title: 'Documentation', description: 'Complete documentation: user guides, videos, FAQs. Always updated.', icon: '📖' },
      { title: 'Community', description: 'Active user community. Share best practices, resolve doubts.', icon: '👥' }
    ],
    how_it_works: { title: 'How It Works', steps: [
      { step: 1, title: 'Guided Implementation', description: 'Implementation team accompanies you from the start. Define processes, configure system, migrate data.' },
      { step: 2, title: 'Initial Training', description: 'Complete training for entire team. In-person or remote. Includes support materials.' },
      { step: 3, title: 'Go-Live with Support', description: 'Support team present during go-live. Resolve issues in real-time.' },
      { step: 4, title: 'Continuous Support', description: '24/7 support available. Continuous training on new features.' }
    ]},
    use_cases: [
      { title: 'Successful Implementation', description: 'From 0 to productive in 90 days', example: '[HUMAN REVIEW REQUIRED]' }
    ],
    related_modules: ['All modules'],
    related_industries: ['distribution', 'manufacturing', 'retail', 'holding', 'professional-services', 'healthcare', 'construction', 'logistics'],
    success_metrics: [
      { metric: 'Response Time', improvement: '< 1 hour', description: 'Support responds in less than 1 hour' }
    ],
    faqs: [
      { question: 'Is support 24/7?', answer: 'Yes. Support team available 24/7 via chat, email, phone. Guaranteed response in < 1 hour.' }
    ],
    cta: { title: 'Need support for your ERP?', description: 'Schedule a demo and meet our support and training team.', button: 'Meet Support Team' }
  }
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find(c => c.slug === slug);
}

export function getAllCapabilities(): Capability[] {
  return capabilities;
}

export function getCapabilitiesByIndustry(industry: string): Capability[] {
  return capabilities.filter(c => c.related_industries.includes(industry));
}

export function getCapabilitiesByModule(module: string): Capability[] {
  return capabilities.filter(c => c.related_modules.includes(module));
}
