/**
 * Industry Content (English)
 * 
 * Industry-specific ERP content for SEO and conversion
 * 
 * NOTE: This file was auto-translated and requires human review for:
 * - Industry-specific terminology
 * - Use case accuracy
 * - Cultural context
 */

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  
  challenges: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  
  solutions: Array<{
    title: string;
    description: string;
    benefit: string;
  }>;
  
  recommended_modules: string[];
  
  key_features: Array<{
    name: string;
    description: string;
  }>;
  
  use_cases: Array<{
    title: string;
    description: string;
    steps: string[];
  }>;
  
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

export const industries: Industry[] = [
  {
    slug: 'distribution',
    name: 'Distribution',
    tagline: 'ERP for Distribution Companies',
    description: 'Manage your distribution operation end-to-end: purchasing, multi-warehouse inventory, sales, deliveries, collections, and analytics. All in one system.',
    
    challenges: [
      {
        title: 'Outdated Inventory',
        description: 'You don\'t know what you have in each warehouse in real-time. You sell products you don\'t have or buy what you already have.',
        icon: '📦'
      },
      {
        title: 'Inefficient Routes',
        description: 'Manual route planning. Late deliveries, high fuel costs, dissatisfied customers.',
        icon: '🚚'
      },
      {
        title: 'Overdue Portfolio',
        description: 'No visibility of which customers owe, how much, and since when. You collect reactively, not proactively.',
        icon: '💰'
      },
      {
        title: 'Low Margins',
        description: 'You don\'t know which products are profitable. You sell without knowing your real cost (purchase + logistics + shrinkage).',
        icon: '📉'
      }
    ],
    
    solutions: [
      {
        title: 'Real-Time Inventory',
        description: 'See available, committed, and in-transit stock by warehouse, lot, and expiration date.',
        benefit: 'Reduce inventory 20-30% without losing sales'
      },
      {
        title: 'Route Management',
        description: 'Plan optimal routes, assign orders to salespeople, track deliveries in real-time.',
        benefit: 'Reduce delivery costs 15-25%'
      },
      {
        title: 'Smart Collections',
        description: 'Automatic due date alerts, updated account statements, delinquent customer blocking.',
        benefit: 'Reduce portfolio days 30-40%'
      },
      {
        title: 'Profitability Analysis',
        description: 'Real cost per product (purchase + logistics + shrinkage), margin by customer, by salesperson, by zone.',
        benefit: 'Increase net margin 5-10%'
      }
    ],
    
    recommended_modules: [
      'Purchasing',
      'Multi-Warehouse Inventory',
      'Sales',
      'AR (Accounts Receivable)',
      'Logistics',
      'Profitability Analysis'
    ],
    
    key_features: [
      {
        name: 'Multi-Warehouse',
        description: 'Manage inventory in multiple warehouses, branches, or distribution centers. Automatic transfers.'
      },
      {
        name: 'Lots and Expirations',
        description: 'Lot tracking, expiration dates, FEFO (First Expired, First Out). Alerts for products about to expire.'
      },
      {
        name: 'Dynamic Pricing',
        description: 'Price lists by customer, by zone, by volume. Automatic discounts, promotions, combos.'
      },
      {
        name: 'Delivery Routes',
        description: 'Route planning, order assignment, GPS tracking, delivery confirmation with digital signature.'
      },
      {
        name: 'Automated Collections',
        description: 'Automatic sending of account statements, payment reminders, delinquent customer blocking.'
      },
      {
        name: 'BI for Distribution',
        description: 'Sales dashboards by salesperson, by zone, by product. Rotation, margin, portfolio analysis.'
      }
    ],
    
    use_cases: [
      {
        title: 'Order to Delivery Flow',
        description: 'From when the salesperson takes the order until it\'s delivered and collected',
        steps: [
          'Salesperson takes order on tablet (online/offline)',
          'System verifies available stock and customer credit',
          'Order is automatically sent to warehouse',
          'Warehouse prepares order (picking list)',
          'System assigns order to delivery route',
          'Driver delivers and captures digital signature',
          'System generates invoice and updates AR',
          'Customer receives invoice via email/WhatsApp'
        ]
      },
      {
        title: 'Automatic Inventory Replenishment',
        description: 'Maintain optimal stock levels without over-inventory',
        steps: [
          'System calculates reorder point per product',
          'Generates purchase suggestion based on historical sales',
          'Considers supplier lead time and safety stock',
          'Sends automatic purchase order to supplier',
          'Tracks receipt and updates inventory',
          'Automatically distributes to warehouses based on demand'
        ]
      },
      {
        title: 'Collections Management',
        description: 'Collect faster and reduce overdue portfolio',
        steps: [
          'System sends reminder 3 days before due date',
          'Sends account statement on due date',
          'Automatically blocks customer if X days overdue',
          'Generates portfolio report by salesperson/collector',
          'Sends alerts to management for critical accounts',
          'Allows payment application from mobile app'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Inventory Turnover',
        improvement: '+30-40%',
        description: 'Less immobilized capital, less obsolescence'
      },
      {
        metric: 'Portfolio Days',
        improvement: '-30-40%',
        description: 'Collect faster, better cash flow'
      },
      {
        metric: 'Delivery Cost',
        improvement: '-15-25%',
        description: 'Optimized routes, less fuel'
      },
      {
        metric: 'Net Margin',
        improvement: '+5-10%',
        description: 'Better visibility of real costs'
      },
      {
        metric: 'Invoicing Time',
        improvement: '-70%',
        description: 'From hours to minutes'
      }
    ],
    
    faqs: [
      {
        question: 'Does it work offline for salespeople on routes?',
        answer: 'Yes. The mobile app works offline. Salespeople can take orders without internet and they sync automatically when there\'s connection.'
      },
      {
        question: 'Can I integrate with my GPS system?',
        answer: 'Yes. We integrate with GPS tracking systems for real-time delivery tracking.'
      },
      {
        question: 'Does it handle multiple price lists?',
        answer: 'Yes. You can have price lists by customer, by zone, by volume, with automatic discounts and promotions.'
      },
      {
        question: 'How does it handle products with expiration?',
        answer: 'The system tracks lots and expiration dates. Applies FEFO (First Expired, First Out) automatically and sends alerts for products about to expire.'
      },
      {
        question: 'Can I see in real-time what each salesperson has?',
        answer: 'Yes. You see inventory by warehouse, by salesperson (if they carry inventory), and pending delivery orders in real-time.'
      }
    ],
    
    cta: {
      title: 'Ready to optimize your distribution?',
      description: 'Schedule a demo and we\'ll show you the system working with sample data from a distributor.',
      button: 'View Distribution Demo'
    }
  },
  
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'ERP for Manufacturing Companies',
    description: 'Control your production end-to-end: BOM, production orders, material consumption, real costs, FG/RM/WIP inventory, and efficiency analysis.',
    
    challenges: [
      {
        title: 'Unknown Costs',
        description: 'You don\'t know how much it really costs to produce each product. You sell without knowing your real margin.',
        icon: '💸'
      },
      {
        title: 'Uncontrolled Inventory',
        description: 'You don\'t know what raw material you have, what\'s in process, or what finished product is available.',
        icon: '📦'
      },
      {
        title: 'Inefficient Production',
        description: 'You don\'t measure production line efficiency. You don\'t know where the bottlenecks are.',
        icon: '⚙️'
      },
      {
        title: 'Manual Planning',
        description: 'You plan production in Excel. You don\'t consider capacity, available materials, or priorities.',
        icon: '📋'
      }
    ],
    
    solutions: [
      {
        title: 'Real Costing',
        description: 'Calculate real production cost: materials, labor, overhead. Compare vs standard cost.',
        benefit: 'Identify unprofitable products'
      },
      {
        title: 'Inventory Control',
        description: 'Separate inventory of RM, WIP, FG. Lot tracking, real vs theoretical consumption, shrinkage.',
        benefit: 'Reduce inventory 20-30%'
      },
      {
        title: 'MES (Manufacturing Execution)',
        description: 'Capture production data in real-time. Measure efficiency, downtime, rejects.',
        benefit: 'Increase efficiency 15-25%'
      },
      {
        title: 'MRP (Material Requirements Planning)',
        description: 'Plan production based on demand. Calculate material needs automatically.',
        benefit: 'Reduce shortages 80%'
      }
    ],
    
    recommended_modules: [
      'BOM (Bill of Materials)',
      'Production Orders',
      'Quality Control',
      'Inventory (RM/WIP/FG)',
      'Costing',
      'MRP'
    ],
    
    key_features: [
      {
        name: 'Multi-Level BOM',
        description: 'Define production recipes with multiple levels. Sub-assemblies, alternatives, versions.'
      },
      {
        name: 'Production Orders',
        description: 'Create production orders, assign materials, capture real consumption, calculate costs.'
      },
      {
        name: 'Batch Costing',
        description: 'Calculate real cost per production batch. Compare vs standard cost, identify variances.'
      },
      {
        name: 'Quality Control',
        description: 'Define inspection plans, capture results, block non-conforming batches.'
      },
      {
        name: 'MRP',
        description: 'Plan production based on demand. Calculate material needs, generate purchase orders.'
      },
      {
        name: 'Production Dashboards',
        description: 'Efficiency by line, by shift. Downtime, rejects, OEE (Overall Equipment Effectiveness).'
      }
    ],
    
    use_cases: [
      {
        title: 'Production Flow',
        description: 'From production order to finished product',
        steps: [
          'Sales generates production order (manual or automatic)',
          'System verifies available materials (RM)',
          'Generates material consumption list (picking list)',
          'Warehouse delivers materials to production',
          'Production captures order start',
          'Captures real material consumption',
          'Captures production times by operation',
          'Quality control inspects',
          'System calculates real cost and generates FG',
          'FG goes to warehouse available for sale'
        ]
      },
      {
        title: 'MRP Planning',
        description: 'Plan production based on demand',
        steps: [
          'System analyzes pending sales orders',
          'Calculates FG (finished goods) needs',
          'Explodes BOM to calculate RM needs',
          'Considers available and in-transit inventory',
          'Generates production order suggestions',
          'Generates purchase order suggestions',
          'Considers production capacity and lead times',
          'Allows manual plan adjustment'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Production Efficiency',
        improvement: '+15-25%',
        description: 'Less downtime, better planning'
      },
      {
        metric: 'Production Cost',
        improvement: '-10-15%',
        description: 'Better control of consumption and shrinkage'
      },
      {
        metric: 'RM Inventory',
        improvement: '-20-30%',
        description: 'Purchases based on real needs'
      },
      {
        metric: 'Delivery Compliance',
        improvement: '+30%',
        description: 'Better planning, fewer shortages'
      }
    ],
    
    faqs: [
      {
        question: 'Does it handle multi-level BOM?',
        answer: 'Yes. You can define recipes with multiple levels of sub-assemblies. The system explodes automatically to calculate material needs.'
      },
      {
        question: 'Does it calculate real production cost?',
        answer: 'Yes. Calculates real cost based on real material consumption, labor, and overhead. Compares vs standard cost and shows variances.'
      },
      {
        question: 'Does it have MRP?',
        answer: 'Yes. The MRP module plans production based on demand, calculates material needs, and generates purchase order suggestions.'
      },
      {
        question: 'Can I capture production data in real-time?',
        answer: 'Yes. With tablets or terminals on the shop floor, operators can capture start/end of operations, consumption, rejects in real-time.'
      }
    ],
    
    cta: {
      title: 'Ready to control your production?',
      description: 'Schedule a demo and we\'ll show you how manufacturing companies optimize their production with GDS ONE.',
      button: 'View Manufacturing Demo'
    }
  },
  
  {
    slug: 'retail',
    name: 'Retail',
    tagline: 'ERP for Retail Companies',
    description: 'Manage your retail end-to-end: point of sale, multi-branch inventory, purchasing, dynamic pricing, promotions, and sales analytics.',
    
    challenges: [
      {
        title: 'Unsynchronized Inventory',
        description: 'System inventory doesn\'t match physical. You sell products you don\'t have.',
        icon: '📦'
      },
      {
        title: 'Outdated Prices',
        description: 'Price changes don\'t reflect in all branches. You sell at incorrect price.',
        icon: '💰'
      },
      {
        title: 'No Multi-Branch Visibility',
        description: 'You don\'t know which branch sells more, which products rotate better, where there\'s overstock.',
        icon: '🏪'
      },
      {
        title: 'Manual Promotions',
        description: 'Applying promotions is manual and error-prone. You can\'t do complex promotions.',
        icon: '🎁'
      }
    ],
    
    solutions: [
      {
        title: 'Real-Time Inventory',
        description: 'Each sale updates inventory instantly. See stock by branch in real-time.',
        benefit: 'Reduce stockouts 80%'
      },
      {
        title: 'Centralized Pricing',
        description: 'Update prices from head office. Automatically replicate to all branches.',
        benefit: 'Eliminate pricing errors'
      },
      {
        title: 'Multi-Branch BI',
        description: 'Compare sales by branch, by product, by salesperson. Identify best practices.',
        benefit: 'Increase sales 15-20%'
      },
      {
        title: 'Promotion Engine',
        description: 'Create complex promotions: 2x1, volume discounts, combos. Apply automatically.',
        benefit: 'Increase average ticket 10-15%'
      }
    ],
    
    recommended_modules: [
      'Point of Sale (POS)',
      'Multi-Branch Inventory',
      'Pricing and Promotions',
      'Purchasing',
      'Retail BI',
      'E-commerce (integration)'
    ],
    
    key_features: [
      {
        name: 'Modern POS',
        description: 'Fast, intuitive point of sale. Works offline. Integrates with barcode readers, fiscal printers.'
      },
      {
        name: 'Multi-Branch',
        description: 'Manage multiple branches from one system. Inter-branch transfers, consolidated inventory.'
      },
      {
        name: 'Automatic Promotions',
        description: '2x1, 3x2, volume discounts, combos, coupons. Apply automatically at POS.'
      },
      {
        name: 'Loyalty Program',
        description: 'Accumulate points per purchase, redeem for products. Identify frequent customers.'
      },
      {
        name: 'E-commerce Integration',
        description: 'Sync inventory with online store. Online orders processed automatically.'
      },
      {
        name: 'Sales Analytics',
        description: 'Sales by hour, by day, by branch. Top products, margin by category.'
      }
    ],
    
    use_cases: [
      {
        title: 'Branch Sale',
        description: 'Sale flow at point of sale',
        steps: [
          'Customer arrives at checkout with products',
          'Cashier scans barcodes',
          'System applies promotions automatically',
          'Customer pays (cash, card, transfer)',
          'System prints fiscal invoice',
          'Inventory updates in real-time',
          'Sale reflects in dashboards immediately'
        ]
      },
      {
        title: 'Inventory Replenishment',
        description: 'Maintain optimal levels in each branch',
        steps: [
          'System analyzes sales by branch',
          'Identifies products with low stock',
          'Generates inter-branch transfer suggestion',
          'Or generates purchase order if no stock in other branches',
          'Central warehouse prepares transfer',
          'Branch receives and updates inventory',
          'System confirms receipt automatically'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Stockouts',
        improvement: '-80%',
        description: 'Always have what customer is looking for'
      },
      {
        metric: 'Average Ticket',
        improvement: '+10-15%',
        description: 'Promotions increase sale per customer'
      },
      {
        metric: 'Inventory Turnover',
        improvement: '+25-35%',
        description: 'Less obsolete inventory'
      },
      {
        metric: 'Cash Closing Time',
        improvement: '-70%',
        description: 'From 30 minutes to 5 minutes'
      }
    ],
    
    faqs: [
      {
        question: 'Does POS work offline?',
        answer: 'Yes. POS works without internet. Sales sync automatically when there\'s connection.'
      },
      {
        question: 'Does it integrate with fiscal printers?',
        answer: 'Yes. We integrate with major fiscal printer brands (Epson, Star, etc.).'
      },
      {
        question: 'Can I do complex promotions?',
        answer: 'Yes. 2x1, 3x2, volume discounts, combos, coupons, category discounts. All apply automatically.'
      },
      {
        question: 'Does it integrate with e-commerce?',
        answer: 'Yes. We integrate with Shopify, WooCommerce, Magento. Inventory syncs in real-time.'
      }
    ],
    
    cta: {
      title: 'Ready to modernize your retail?',
      description: 'Schedule a demo and we\'ll show you how retailers increase sales and reduce costs with GDS ONE.',
      button: 'View Retail Demo'
    }
  },
  
  {
    slug: 'holding',
    name: 'Holdings / Multi-Company',
    tagline: 'ERP for Holdings and Business Groups',
    description: 'Manage multiple companies from one system: financial consolidation, inter-company, corporate reports, and inter-company benchmarking.',
    
    challenges: [
      {
        title: 'Fragmented Systems',
        description: 'Each company uses its own system. Consolidating information is manual and takes weeks.',
        icon: '🔀'
      },
      {
        title: 'No Corporate Visibility',
        description: 'No real-time visibility of all companies. Can\'t make agile corporate decisions.',
        icon: '👁️'
      },
      {
        title: 'Inter-Company Transactions',
        description: 'Sales between group companies are manual. Difficult to reconcile, error-prone.',
        icon: '🔄'
      },
      {
        title: 'No Benchmarking',
        description: 'Can\'t compare performance between companies. Don\'t identify best practices.',
        icon: '📊'
      }
    ],
    
    solutions: [
      {
        title: 'Automatic Consolidation',
        description: 'Consolidate financial statements automatically. Eliminate inter-company transactions.',
        benefit: 'Monthly close in 2 days vs 2 weeks'
      },
      {
        title: 'Corporate Dashboards',
        description: 'See performance of all companies in real-time. Drill-down to detail by company.',
        benefit: 'Decisions based on current data'
      },
      {
        title: 'Automated Inter-Company',
        description: 'Sales between companies recorded automatically in both. Automatic reconciliation.',
        benefit: 'Eliminate reconciliation errors'
      },
      {
        title: 'Benchmarking',
        description: 'Compare KPIs between companies: margin, turnover, productivity. Identify best practices.',
        benefit: 'Replicate successes, correct problems'
      }
    ],
    
    recommended_modules: [
      'Multi-Company',
      'Financial Consolidation',
      'Inter-Company',
      'Corporate BI',
      'Multi-Company User Management',
      'All ERP modules'
    ],
    
    key_features: [
      {
        name: 'Native Multi-Company',
        description: 'Manage multiple companies from one system. Each company has its own accounting, inventory, customers.'
      },
      {
        name: 'Financial Consolidation',
        description: 'Consolidate financial statements automatically. Eliminate inter-company transactions, handle different currencies.'
      },
      {
        name: 'Inter-Company Transactions',
        description: 'Sale in company A generates automatic purchase in company B. Automatic reconciliation.'
      },
      {
        name: 'Corporate Reports',
        description: 'Consolidated and by-company reports. Compare performance, identify trends.'
      },
      {
        name: 'Centralized Management',
        description: 'Manage users, permissions, catalogs from corporate level. Replicate configurations between companies.'
      },
      {
        name: 'Benchmarking',
        description: 'Compare KPIs between companies: sales, margin, turnover, productivity. Company ranking.'
      }
    ],
    
    use_cases: [
      {
        title: 'Financial Consolidation',
        description: 'Corporate monthly close',
        steps: [
          'Each company closes its month',
          'System validates all companies closed',
          'Automatically consolidates financial statements',
          'Eliminates inter-company transactions',
          'Converts to corporate currency',
          'Generates consolidated reports',
          'Sends to corporate management',
          'Drill-down to detail by company if needed'
        ]
      },
      {
        title: 'Inter-Company Transaction',
        description: 'Sale between group companies',
        steps: [
          'Company A sells to Company B',
          'System generates invoice in Company A',
          'Automatically generates purchase in Company B',
          'Both transactions are linked',
          'In consolidation, automatically eliminated',
          'Reconciliation is automatic, no errors'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Consolidation Time',
        improvement: '-80%',
        description: 'From 2 weeks to 2 days'
      },
      {
        metric: 'Reconciliation Errors',
        improvement: '-95%',
        description: 'Almost eliminates inter-company errors'
      },
      {
        metric: 'Corporate Visibility',
        improvement: 'Real-Time',
        description: 'From monthly reports to live dashboards'
      },
      {
        metric: 'Administrative Efficiency',
        improvement: '+30%',
        description: 'One system, standardized processes'
      }
    ],
    
    faqs: [
      {
        question: 'How many companies can I manage?',
        answer: 'Unlimited. We have clients with 3 companies and others with 50+. The system scales without problems.'
      },
      {
        question: 'Does each company have its own accounting?',
        answer: 'Yes. Each company is independent: its own accounting, inventory, customers, suppliers. But all in one system.'
      },
      {
        question: 'Does it handle different currencies?',
        answer: 'Yes. Each company can operate in its local currency. Consolidation automatically converts to corporate currency.'
      },
      {
        question: 'Can I limit access by company?',
        answer: 'Yes. You can give a user access only to certain companies. Or give corporate access to everything.'
      }
    ],
    
    cta: {
      title: 'Ready to consolidate your business group?',
      description: 'Schedule a demo and we\'ll show you how holdings manage multiple companies from one system.',
      button: 'View Holdings Demo'
    }
  },
  
  {
    slug: 'professional-services',
    name: 'Professional Services',
    tagline: 'ERP for Professional Services Firms',
    description: 'Manage your professional services firm: projects, time tracking, hourly billing, resources, project profitability, and utilization analysis.',
    
    challenges: [
      {
        title: 'No Profitability Visibility',
        description: 'Don\'t know which projects are profitable. Invoice by hours but don\'t know your real cost.',
        icon: '💰'
      },
      {
        title: 'Manual Time Tracking',
        description: 'Timesheets in Excel. Difficult to consolidate, error-prone, impossible to invoice automatically.',
        icon: '⏱️'
      },
      {
        title: 'Poorly Assigned Resources',
        description: 'Don\'t know who\'s available, who\'s over-utilized. Resource assignment is reactive.',
        icon: '👥'
      },
      {
        title: 'Slow Invoicing',
        description: 'Consolidating hours, applying rates, generating invoices takes days. Collect late.',
        icon: '📄'
      }
    ],
    
    solutions: [
      {
        title: 'Project Profitability',
        description: 'See real cost vs income per project. Identify profitable and unprofitable projects.',
        benefit: 'Increase margin 10-15%'
      },
      {
        title: 'Integrated Time Tracking',
        description: 'Capture hours from web/mobile. Automatically integrates with invoicing.',
        benefit: 'Reduce invoicing time 80%'
      },
      {
        title: 'Resource Management',
        description: 'See team availability, assign resources to projects, balance workload.',
        benefit: 'Increase utilization 20-30%'
      },
      {
        title: 'Automatic Invoicing',
        description: 'Generate invoices automatically from recorded hours. Apply rates by client/project.',
        benefit: 'Collect 2 weeks earlier'
      }
    ],
    
    recommended_modules: [
      'Project Management',
      'Time Tracking',
      'Hourly Billing',
      'Resource Management',
      'CRM',
      'Profitability Analysis'
    ],
    
    key_features: [
      {
        name: 'Time Tracking',
        description: 'Capture hours by project, by task, by client. Web, mobile, calendar integration.'
      },
      {
        name: 'Project Management',
        description: 'Create projects, assign team, define budget, track progress vs budget.'
      },
      {
        name: 'Hourly Billing',
        description: 'Generate invoices automatically from hours. Rates by client, by work type, by professional.'
      },
      {
        name: 'Resource Management',
        description: 'See team availability, assign to projects, balance load, identify over/under-utilization.'
      },
      {
        name: 'Project Profitability',
        description: 'Real cost (hours * internal rate) vs income. Margin by project, by client, by service type.'
      },
      {
        name: 'Professional Dashboards',
        description: 'Utilization by professional, profitability by project, opportunity pipeline, revenue forecast.'
      }
    ],
    
    use_cases: [
      {
        title: 'Project Flow',
        description: 'From opportunity to invoicing',
        steps: [
          'CRM: Opportunity converts to project',
          'Project manager defines budget (hours)',
          'Assigns team to project',
          'Team records worked hours (web/mobile)',
          'System compares real hours vs budget',
          'Alerts if project exceeds budget',
          'At month end, generates invoice from hours',
          'Invoice automatically sent to client',
          'System calculates real project profitability'
        ]
      },
      {
        title: 'Resource Allocation',
        description: 'Optimize team utilization',
        steps: [
          'Dashboard shows team availability',
          'Identifies under-utilized professionals',
          'Identifies overloaded professionals',
          'Manager assigns resources to new projects',
          'System validates availability',
          'Balances workload',
          'Measures real utilization vs target (e.g., 80%)',
          'Identifies hiring opportunities'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Team Utilization',
        improvement: '+20-30%',
        description: 'More billable hours per professional'
      },
      {
        metric: 'Invoicing Time',
        improvement: '-80%',
        description: 'From days to hours'
      },
      {
        metric: 'Project Margin',
        improvement: '+10-15%',
        description: 'Better visibility = better decisions'
      },
      {
        metric: 'Portfolio Days',
        improvement: '-40%',
        description: 'Invoice faster = collect faster'
      }
    ],
    
    faqs: [
      {
        question: 'Does it work for different types of services (consulting, legal, accounting, engineering)?',
        answer: 'Yes. The system is flexible and adapts to different types of professional services. You can define your own rates, work types, and project structures.'
      },
      {
        question: 'Can I invoice by hours, by fixed project, or mixed?',
        answer: 'Yes. Supports hourly billing (time & materials), fixed project (fixed fee), or mixed. You can define the model per project.'
      },
      {
        question: 'Does time tracking work on mobile?',
        answer: 'Yes. There\'s a mobile app for iOS and Android. Professionals can record hours from anywhere.'
      },
      {
        question: 'Does it integrate with project management tools (Asana, Trello)?',
        answer: 'Yes. We integrate with major project management tools. Or you can use our integrated projects module.'
      },
      {
        question: 'Can I see profitability by client, by service type?',
        answer: 'Yes. You can analyze profitability by project, by client, by service type, by professional. Multiple analysis dimensions.'
      }
    ],
    
    cta: {
      title: 'Ready to optimize your services firm?',
      description: 'Schedule a demo and we\'ll show you how professional firms increase profitability and utilization with GDS ONE.',
      button: 'View Services Demo'
    }
  },
  
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'ERP for Healthcare Institutions',
    description: 'Manage your healthcare institution: medical inventory, purchasing, service billing, patient management, cost control, and service profitability analysis.',
    
    challenges: [
      {
        title: 'Critical Inventory',
        description: 'Medications and medical supplies are critical. Expirations, lots, traceability are mandatory.',
        icon: '💊'
      },
      {
        title: 'Complex Billing',
        description: 'Billing to patients, insurers, agreements. Multiple tariffs, authorizations, rejections.',
        icon: '📋'
      },
      {
        title: 'Uncontrolled Costs',
        description: 'Don\'t know how much each service costs. Sell without knowing your real margin.',
        icon: '💸'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Medication traceability, lot control, regulatory reports are mandatory.',
        icon: '⚖️'
      }
    ],
    
    solutions: [
      {
        title: 'Medical Inventory',
        description: 'Lot control, expirations, complete traceability. Alerts for products about to expire.',
        benefit: 'Reduce expirations 90%'
      },
      {
        title: 'Multi-Payer Billing',
        description: 'Bill patients, insurers, agreements. Apply tariffs automatically.',
        benefit: 'Reduce rejections 50%'
      },
      {
        title: 'Service Costing',
        description: 'Calculate real cost per service: supplies, medications, staff, overhead.',
        benefit: 'Identify unprofitable services'
      },
      {
        title: 'Complete Traceability',
        description: 'Track medications from purchase to patient application. Comply with regulations.',
        benefit: '100% compliance'
      }
    ],
    
    recommended_modules: [
      'Medical Inventory',
      'Purchasing',
      'Multi-Payer Billing',
      'Patient Management',
      'Service Costing',
      'Traceability'
    ],
    
    key_features: [
      {
        name: 'Medical Inventory',
        description: 'Lot control, expirations, temperature, traceability. Automatic alerts for critical products.'
      },
      {
        name: 'Multi-Payer Billing',
        description: 'Bill patients (private), insurers, corporate agreements. Multiple tariffs.'
      },
      {
        name: 'Authorization Management',
        description: 'Request and track insurer authorizations. Alerts for unauthorized services.'
      },
      {
        name: 'Service Costing',
        description: 'Calculate real cost per service: consumed supplies, medications, staff time, overhead.'
      },
      {
        name: 'Traceability',
        description: 'Track medications and supplies from purchase to patient application. Comply with COFEPRIS/INVIMA.'
      },
      {
        name: 'Profitability Analysis',
        description: 'Profitability by service, by specialty, by physician, by payer.'
      }
    ],
    
    use_cases: [
      {
        title: 'Care Flow',
        description: 'From admission to billing',
        steps: [
          'Patient arrives at admission',
          'System verifies insurer coverage',
          'Requests authorization if needed',
          'Physician orders services (consultation, studies, medications)',
          'System validates supply availability',
          'Applies services and records consumption',
          'Calculates real service cost',
          'Generates invoice applying correct tariff',
          'Sends invoice to insurer or patient',
          'Tracks payments and rejections'
        ]
      },
      {
        title: 'Medical Inventory Control',
        description: 'Keep critical inventory under control',
        steps: [
          'System monitors inventory levels',
          'Alerts for low stock products',
          'Alerts for products about to expire',
          'Generates automatic purchase order',
          'Receives products and records lots',
          'Tracks consumption per patient',
          'Complete medication traceability',
          'Automatic regulatory reports'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Expirations',
        improvement: '-90%',
        description: 'Early alerts prevent losses'
      },
      {
        metric: 'Rejections',
        improvement: '-50%',
        description: 'Better documentation, fewer rejections'
      },
      {
        metric: 'Invoicing Time',
        improvement: '-70%',
        description: 'Automatic invoicing from services'
      },
      {
        metric: 'Regulatory Compliance',
        improvement: '100%',
        description: 'Complete traceability'
      }
    ],
    
    faqs: [
      {
        question: 'Does it comply with traceability regulations (COFEPRIS, INVIMA)?',
        answer: 'Yes. The system complies with medication traceability regulations. Tracks from purchase to patient application.'
      },
      {
        question: 'Does it handle multiple tariffs (insurers, agreements)?',
        answer: 'Yes. You can define multiple tariffs and the system applies the correct one automatically according to payer.'
      },
      {
        question: 'Does it integrate with electronic health record systems?',
        answer: 'Yes. We integrate with major EHR systems. Or you can use our patient management module.'
      },
      {
        question: 'Does it calculate real cost per service?',
        answer: 'Yes. Calculates real cost considering consumed supplies, medications, staff time, and overhead.'
      }
    ],
    
    cta: {
      title: 'Ready to optimize your healthcare institution?',
      description: 'Schedule a demo and we\'ll show you how healthcare institutions reduce costs and improve profitability.',
      button: 'View Healthcare Demo'
    }
  },
  
  {
    slug: 'construction',
    name: 'Construction',
    tagline: 'ERP for Construction Companies',
    description: 'Manage your construction projects: budgets, project control, purchasing, subcontractors, progress vs budget, and project profitability.',
    
    challenges: [
      {
        title: 'Over-Budget Projects',
        description: 'No real-time visibility of costs vs budget. Find out late that project went over.',
        icon: '💸'
      },
      {
        title: 'Uncontrolled Purchasing',
        description: 'Material purchases are chaotic. No control of what was bought, for which project, at what price.',
        icon: '🛒'
      },
      {
        title: 'Subcontractors',
        description: 'Difficult to control subcontractor progress and payments. No visibility of what\'s been paid vs executed.',
        icon: '👷'
      },
      {
        title: 'No Project Profitability',
        description: 'Don\'t know which projects are profitable until they finish (or worse, never know).',
        icon: '📊'
      }
    ],
    
    solutions: [
      {
        title: 'Project Control',
        description: 'Compare real cost vs budget in real-time. Alerts if project deviates.',
        benefit: 'Reduce cost overruns 30-40%'
      },
      {
        title: 'Purchase Management',
        description: 'Purchases by project, price control, supplier comparison, material traceability.',
        benefit: 'Reduce purchase costs 10-15%'
      },
      {
        title: 'Subcontractor Control',
        description: 'Control progress vs contract, payments vs progress, retentions, guarantees.',
        benefit: 'Eliminate overpayments'
      },
      {
        title: 'Project Profitability',
        description: 'See profitability in real-time: real cost vs income, margin per project, closing forecast.',
        benefit: 'Identify problems in time'
      }
    ],
    
    recommended_modules: [
      'Project Management',
      'Budgets',
      'Project Control',
      'Project Purchasing',
      'Subcontractors',
      'Profitability Analysis'
    ],
    
    key_features: [
      {
        name: 'Budgets',
        description: 'Create detailed budgets by item. Compare multiple versions, approve, convert to project.'
      },
      {
        name: 'Project Control',
        description: 'Record physical and financial progress. Compare vs budget, identify deviations, project closing.'
      },
      {
        name: 'Project Purchasing',
        description: 'All purchases assigned to a project. Control purchase budget, compare prices.'
      },
      {
        name: 'Subcontractor Management',
        description: 'Contracts, estimates, payments, retentions, guarantees. Control progress vs payments.'
      },
      {
        name: 'Material Inventory',
        description: 'Inventory by project, inter-project transfers, waste control.'
      },
      {
        name: 'Project Dashboards',
        description: 'Physical vs financial progress, real cost vs budget, profitability, closing forecast.'
      }
    ],
    
    use_cases: [
      {
        title: 'Project Flow',
        description: 'From budget to closing',
        steps: [
          'Create detailed budget by item',
          'Client approves budget',
          'Convert budget to project',
          'Define purchase plan and subcontractors',
          'Purchases automatically assigned to project',
          'Record physical project progress',
          'System compares real cost vs budget',
          'Alerts if project deviates',
          'Invoice progress to client',
          'Close project and calculate real profitability'
        ]
      },
      {
        title: 'Subcontractor Control',
        description: 'Control progress and payments',
        steps: [
          'Create contract with subcontractor',
          'Define items and prices',
          'Subcontractor executes work',
          'Resident records progress',
          'System generates payment estimate',
          'Applies retentions and guarantees',
          'Generates payment to subcontractor',
          'Controls progress vs payments',
          'Closes contract upon completion'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Cost Overruns',
        improvement: '-30-40%',
        description: 'Detect deviations in time'
      },
      {
        metric: 'Purchase Costs',
        improvement: '-10-15%',
        description: 'Better price control'
      },
      {
        metric: 'Closing Time',
        improvement: '-50%',
        description: 'Real-time information'
      },
      {
        metric: 'Project Profitability',
        improvement: '+15-20%',
        description: 'Better control = better margin'
      }
    ],
    
    faqs: [
      {
        question: 'Does it handle multiple simultaneous projects?',
        answer: 'Yes. You can manage multiple simultaneous projects. Each project has its own budget, purchases, inventory, and profitability analysis.'
      },
      {
        question: 'Can I control physical vs financial progress?',
        answer: 'Yes. The system compares physical progress (% of work executed) vs financial progress (% of budget spent).'
      },
      {
        question: 'Does it integrate with estimating software (Opus, Neodata)?',
        answer: 'Yes. You can import budgets from estimating software and convert them to projects.'
      },
      {
        question: 'Does it handle subcontractor retentions and guarantees?',
        answer: 'Yes. The system handles automatic retentions, performance guarantees, and retention release upon completion.'
      }
    ],
    
    cta: {
      title: 'Ready to control your construction projects?',
      description: 'Schedule a demo and we\'ll show you how construction companies reduce cost overruns and increase profitability.',
      button: 'View Construction Demo'
    }
  },
  
  {
    slug: 'logistics',
    name: 'Logistics and 3PL',
    tagline: 'ERP for Logistics Operators',
    description: 'Manage your logistics operation: receiving, storage, picking, packing, dispatch, service billing, and customer profitability analysis.',
    
    challenges: [
      {
        title: 'Third-Party Inventory',
        description: 'Manage inventory for multiple clients. Need total separation, traceability, and per-client reports.',
        icon: '📦'
      },
      {
        title: 'Complex Billing',
        description: 'Bill for multiple concepts: storage, handling, picking, value-added. Rates per client.',
        icon: '💰'
      },
      {
        title: 'Inefficient Operation',
        description: 'Manual picking, non-optimized routes, poorly utilized spaces. High operating costs.',
        icon: '⚙️'
      },
      {
        title: 'No Client Visibility',
        description: 'Clients have no visibility of their inventory. Constant calls to check stock.',
        icon: '👁️'
      }
    ],
    
    solutions: [
      {
        title: 'Multi-Client WMS',
        description: 'Manage inventory for multiple clients. Total separation, traceability, individual reports.',
        benefit: 'Increase capacity 30%'
      },
      {
        title: 'Service Billing',
        description: 'Automatically bill for storage, handling, picking, value-added services.',
        benefit: 'Reduce invoicing time 80%'
      },
      {
        title: 'Operation Optimization',
        description: 'Optimized picking, intelligent slotting, efficient routes. Reduce operating costs.',
        benefit: 'Reduce costs 20-30%'
      },
      {
        title: 'Client Portal',
        description: 'Clients see their inventory in real-time. Self-service for queries and orders.',
        benefit: 'Reduce calls 70%'
      }
    ],
    
    recommended_modules: [
      'WMS (Warehouse Management)',
      'Multi-Client',
      'Service Billing',
      'Client Portal',
      'Route Optimization',
      'Profitability Analysis'
    ],
    
    key_features: [
      {
        name: 'Multi-Client WMS',
        description: 'Manage inventory for multiple clients. Separation by client, lot, location. Complete traceability.'
      },
      {
        name: 'Receiving and Storage',
        description: 'Receive goods, automatically assign locations (slotting), generate labels.'
      },
      {
        name: 'Picking and Packing',
        description: 'Generate optimized picking lists, guide operators through efficient routes, validate with RF.'
      },
      {
        name: 'Service Billing',
        description: 'Automatically bill for storage (per pallet/m3), handling (in/out), picking, additional services.'
      },
      {
        name: 'Client Portal',
        description: 'Clients see their inventory in real-time, create outbound orders, download reports.'
      },
      {
        name: 'Profitability Analysis',
        description: 'Profitability by client, by service. Identify profitable and unprofitable clients.'
      }
    ],
    
    use_cases: [
      {
        title: 'Receiving to Dispatch Flow',
        description: 'Complete 3PL operation',
        steps: [
          'Client sends inbound order (ASN)',
          'Receiving validates goods vs ASN',
          'System automatically assigns locations',
          'Operator places goods in location',
          'Inventory updates per client',
          'Client creates outbound order from portal',
          'System generates optimized picking list',
          'Operator picks guided by RF',
          'Packing and label generation',
          'Dispatch and inventory update',
          'System automatically bills services'
        ]
      },
      {
        title: 'Monthly Billing',
        description: 'Generate service invoices',
        steps: [
          'System accumulates month services per client',
          'Storage: calculates pallet-days or m3-days',
          'Handling: counts inbounds and outbounds',
          'Picking: counts picked lines',
          'Additional services: labeling, repackaging, etc.',
          'Applies rates per client',
          'Automatically generates invoice',
          'Sends invoice and detail to client',
          'Client can validate from portal'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Storage Capacity',
        improvement: '+30%',
        description: 'Better slotting, more efficient'
      },
      {
        metric: 'Picking Cost',
        improvement: '-25%',
        description: 'Optimized routes'
      },
      {
        metric: 'Invoicing Time',
        improvement: '-80%',
        description: 'Automatic invoicing'
      },
      {
        metric: 'Client Calls',
        improvement: '-70%',
        description: 'Self-service portal'
      }
    ],
    
    faqs: [
      {
        question: 'Can I manage inventory for multiple clients?',
        answer: 'Yes. The system separates inventory by client. Each client only sees their own inventory. Complete traceability.'
      },
      {
        question: 'How do you bill for storage?',
        answer: 'You can bill per pallet-days, m3-days, position-days, or fixed monthly rate. System calculates automatically.'
      },
      {
        question: 'Can clients see their inventory?',
        answer: 'Yes. Client portal allows real-time inventory viewing, outbound order creation, report downloads.'
      },
      {
        question: 'Does it integrate with RF (radio frequency)?',
        answer: 'Yes. We integrate with RF terminals for picking, receiving, cycle counts.'
      },
      {
        question: 'Does it handle value-added services (labeling, repackaging)?',
        answer: 'Yes. You can define additional services and bill them automatically.'
      }
    ],
    
    cta: {
      title: 'Ready to optimize your logistics operation?',
      description: 'Schedule a demo and we\'ll show you how 3PL operators increase capacity and profitability.',
      button: 'View Logistics Demo'
    }
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}

export function getAllIndustries(): Industry[] {
  return industries;
}

export function getIndustriesByICP(icp: string): Industry[] {
  const icpMapping: Record<string, string[]> = {
    'distribution': ['distribution', 'logistics'],
    'retail': ['retail'],
    'manufacturing': ['manufacturing'],
    'services': ['professional-services', 'healthcare'],
    'holding': ['holding']
  };
  
  const industrySlugs = icpMapping[icp] || [];
  return industries.filter(i => industrySlugs.includes(i.slug));
}
