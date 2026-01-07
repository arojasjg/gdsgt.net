/**
 * Case Studies Content (English)
 * NOTE: This file was auto-translated and requires human review for:
 * - Company names and details localization
 * - Metrics and KPIs adaptation for English-speaking markets
 * - Testimonial quotes translation quality
 */

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
  challenge: {
    title: string;
    description: string;
    pain_points: string[];
    previous_system: string;
  };
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
  journey: {
    title: string;
    phases: Array<{
      phase: string;
      duration: string;
      activities: string[];
    }>;
  };
  takeaways: string[];
  related_industry?: string;
  related_capabilities?: string[];
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'distribuidora-abc-inventario-tiempo-real',
    title: 'How ABC Distributor Reduced Inventory 30% with Real-Time Visibility',
    subtitle: 'From Excel chaos to real-time control: ABC Distributor transformed its operation with GDS ONE',
    company: {
      name: 'ABC Distributor',
      industry: 'Distribution',
      size: '50 employees, 3 warehouses',
      location: 'Guatemala City, Guatemala',
    },
    challenge: {
      title: 'The Challenge',
      description: 'ABC Distributor managed 3 warehouses and 500+ SKUs with Excel. They had no real-time visibility, frequent stockouts, and excess inventory. They were losing sales and tying up capital.',
      pain_points: [
        'No real-time inventory visibility across 3 warehouses',
        'Frequent stockouts of best-selling products',
        'Excess inventory of slow-moving products',
        'Hours spent consolidating Excel sheets',
        'Errors in manual data entry',
        'Couldn\'t respond quickly to customer inquiries'
      ],
      previous_system: 'Excel + QuickBooks'
    },
    solution: {
      title: 'The Solution',
      description: 'GDS ONE implemented with multi-warehouse inventory, real-time reports, and mobile app for sales team. Now they have complete visibility and can make data-driven decisions.',
      modules_implemented: [
        'Multi-warehouse Inventory',
        'Sales and Invoicing',
        'Purchasing',
        'Real-time Reports',
        'Mobile App'
      ],
      implementation_time: '60 days',
      key_features: [
        {
          feature: 'Real-time Multi-warehouse Inventory',
          description: 'See inventory across all 3 warehouses in real-time. No more consolidating Excel sheets.'
        },
        {
          feature: 'Automatic Reorder Alerts',
          description: 'System alerts when a product reaches minimum stock. No more stockouts.'
        },
        {
          feature: 'ABC Analysis',
          description: 'Identify best-selling products (A), medium (B), and slow-moving (C). Focus on what sells.'
        }
      ]
    },
    results: {
      title: 'The Results',
      summary: 'In 6 months, ABC Distributor reduced inventory 30%, increased sales 25%, and recovered 10 hours/week of administrative time.',
      metrics: [
        {
          metric: 'Total Inventory',
          before: '$500K',
          after: '$350K',
          improvement: '-30%'
        },
        {
          metric: 'Stockouts',
          before: '15/month',
          after: '2/month',
          improvement: '-87%'
        },
        {
          metric: 'Sales',
          before: '$2M/year',
          after: '$2.5M/year',
          improvement: '+25%'
        },
        {
          metric: 'Admin Time',
          before: '20 hrs/week',
          after: '10 hrs/week',
          improvement: '-50%'
        }
      ],
      testimonial: {
        quote: 'Before GDS ONE, we were flying blind. Now we have real-time visibility and can make data-driven decisions. We reduced inventory 30% and increased sales 25%. ROI in less than 6 months.',
        author: 'Carlos Méndez',
        position: 'Operations Manager, ABC Distributor'
      }
    },
    journey: {
      title: 'Implementation Journey',
      phases: [
        {
          phase: 'Analysis and Planning',
          duration: '2 weeks',
          activities: [
            'Process mapping',
            'Data cleanup (Excel)',
            'User training plan'
          ]
        },
        {
          phase: 'Configuration and Migration',
          duration: '4 weeks',
          activities: [
            'System configuration',
            'Data migration (customers, products, inventory)',
            'Integration testing'
          ]
        },
        {
          phase: 'Training and Go-Live',
          duration: '2 weeks',
          activities: [
            'User training',
            'Parallel operation',
            'Go-live and support'
          ]
        }
      ]
    },
    takeaways: [
      'Real-time visibility is key to reducing inventory and increasing sales',
      'ABC analysis helps focus on what sells',
      'Mobile app empowers sales team with real-time information',
      'Fast implementation (60 days) minimizes disruption'
    ],
    related_industry: 'distribution',
    related_capabilities: ['multi-bodega', 'trazabilidad'],
    cta: {
      title: 'Are you a distributor with inventory challenges?',
      description: 'Schedule a demo and we\'ll show you how GDS ONE can transform your operation like ABC Distributor.',
      button: 'Schedule Demo'
    }
  },
  {
    slug: 'manufactura-xyz-produccion-eficiente',
    title: 'How XYZ Manufacturing Increased Production 40% with GDS ONE',
    subtitle: 'From manual production control to automated system: XYZ Manufacturing transformed its plant',
    company: {
      name: 'XYZ Manufacturing',
      industry: 'Manufacturing',
      size: '100 employees, 1 plant',
      location: 'San Salvador, El Salvador'
    },
    challenge: {
      title: 'The Challenge',
      description: 'XYZ Manufacturing managed production with paper and Excel. They had no visibility of work-in-progress, frequent material shortages, and couldn\'t calculate real production costs.',
      pain_points: [
        'No visibility of work-in-progress',
        'Frequent material shortages stopping production',
        'Couldn\'t calculate real production costs',
        'Hours spent consolidating production reports',
        'Couldn\'t respond quickly to customer inquiries about order status'
      ],
      previous_system: 'Paper + Excel'
    },
    solution: {
      title: 'The Solution',
      description: 'GDS ONE implemented with production module, material planning, and real-time costing. Now they have complete visibility and can optimize production.',
      modules_implemented: [
        'Production',
        'Inventory',
        'Material Planning (MRP)',
        'Costing',
        'Quality Control'
      ],
      implementation_time: '90 days',
      key_features: [
        {
          feature: 'Production Orders',
          description: 'Create production orders with BOM (bill of materials). System reserves materials and tracks progress.'
        },
        {
          feature: 'Material Planning (MRP)',
          description: 'System calculates material needs based on production orders. No more shortages.'
        },
        {
          feature: 'Real-time Costing',
          description: 'Calculate real production cost (materials + labor + overhead) in real-time.'
        }
      ]
    },
    results: {
      title: 'The Results',
      summary: 'In 12 months, XYZ Manufacturing increased production 40%, reduced material shortages 90%, and reduced production costs 15%.',
      metrics: [
        {
          metric: 'Production',
          before: '1,000 units/month',
          after: '1,400 units/month',
          improvement: '+40%'
        },
        {
          metric: 'Material Shortages',
          before: '20/month',
          after: '2/month',
          improvement: '-90%'
        },
        {
          metric: 'Production Costs',
          before: '$50/unit',
          after: '$42.50/unit',
          improvement: '-15%'
        }
      ],
      testimonial: {
        quote: 'GDS ONE transformed our plant. We went from paper chaos to automated system. We increased production 40% and reduced costs 15%. Best investment we\'ve made.',
        author: 'Roberto Sánchez',
        position: 'Plant Manager, XYZ Manufacturing'
      }
    },
    journey: {
      title: 'Implementation Journey',
      phases: [
        {
          phase: 'Analysis',
          duration: '3 weeks',
          activities: [
            'Production process mapping',
            'BOM creation',
            'Routing definition'
          ]
        },
        {
          phase: 'Configuration',
          duration: '5 weeks',
          activities: [
            'System configuration',
            'BOM and routing loading',
            'Integration testing'
          ]
        },
        {
          phase: 'Go-Live',
          duration: '2 weeks',
          activities: [
            'Operator training',
            'Pilot production',
            'Full go-live'
          ]
        }
      ]
    },
    takeaways: [
      'Production visibility is key to increasing efficiency',
      'MRP eliminates material shortages',
      'Real-time costing enables informed decisions',
      'Operator training is critical for success'
    ],
    related_industry: 'manufacturing',
    related_capabilities: ['trazabilidad'],
    cta: {
      title: 'Are you a manufacturer with production challenges?',
      description: 'Schedule a demo and we\'ll show you how GDS ONE can transform your plant like XYZ Manufacturing.',
      button: 'Schedule Demo'
    }
  },
  {
    slug: 'holding-ghi-consolidacion-multi-empresa',
    title: 'How GHI Holding Consolidated 5 Companies in a Single System',
    subtitle: 'From 5 disconnected systems to a single integrated platform: GHI Holding transformed its operation',
    company: {
      name: 'GHI Holding',
      industry: 'Holding (Multi-company)',
      size: '5 companies, 200 employees',
      location: 'Panama City, Panama'
    },
    challenge: {
      title: 'The Challenge',
      description: 'GHI Holding had 5 companies, each with its own system (or Excel). They had no consolidated visibility, couldn\'t share resources, and spent weeks closing month.',
      pain_points: [
        'No consolidated visibility across 5 companies',
        'Each company with its own system (or Excel)',
        'Couldn\'t share resources (inventory, personnel)',
        'Weeks closing month consolidating reports',
        'Couldn\'t make group-level decisions'
      ],
      previous_system: 'Multiple systems (QuickBooks, Excel, Odoo)'
    },
    solution: {
      title: 'The Solution',
      description: 'GDS ONE implemented with multi-company module. Now they have a single system for all 5 companies with consolidated reports and resource sharing.',
      modules_implemented: [
        'Multi-company',
        'Consolidated Accounting',
        'Shared Inventory',
        'Consolidated Reports',
        'Intercompany'
      ],
      implementation_time: '120 days',
      key_features: [
        {
          feature: 'Multi-company',
          description: 'Single system for all 5 companies. Each company has its own data but shares the platform.'
        },
        {
          feature: 'Consolidated Reports',
          description: 'See consolidated reports across all companies. Balance sheet, income statement, cash flow.'
        },
        {
          feature: 'Resource Sharing',
          description: 'Share inventory and personnel across companies. Optimize resource use.'
        }
      ]
    },
    results: {
      title: 'The Results',
      summary: 'In 12 months, GHI Holding reduced month-close time from 3 weeks to 3 days, increased resource utilization 25%, and reduced IT costs 40%.',
      metrics: [
        {
          metric: 'Month-close Time',
          before: '3 weeks',
          after: '3 days',
          improvement: '-90%'
        },
        {
          metric: 'Resource Utilization',
          before: '60%',
          after: '85%',
          improvement: '+25%'
        },
        {
          metric: 'IT Costs',
          before: '$10K/month',
          after: '$6K/month',
          improvement: '-40%'
        }
      ],
      testimonial: {
        quote: 'GDS ONE unified our 5 companies in a single system. Now we have consolidated visibility and can make group-level decisions. We reduced month-close from 3 weeks to 3 days.',
        author: 'Patricia González',
        position: 'CFO, GHI Holding'
      }
    },
    journey: {
      title: 'Implementation Journey',
      phases: [
        {
          phase: 'Planning',
          duration: '4 weeks',
          activities: [
            'Multi-company structure definition',
            'Chart of accounts unification',
            'Migration plan'
          ]
        },
        {
          phase: 'Migration',
          duration: '8 weeks',
          activities: [
            'Data migration from 5 systems',
            'Configuration per company',
            'Integration testing'
          ]
        },
        {
          phase: 'Go-Live',
          duration: '4 weeks',
          activities: [
            'Training per company',
            'Staggered go-live',
            'Post go-live support'
          ]
        }
      ]
    },
    takeaways: [
      'Multi-company consolidation is key for holdings',
      'Unified chart of accounts facilitates consolidation',
      'Resource sharing optimizes utilization',
      'Staggered implementation reduces risk'
    ],
    related_industry: 'holdings',
    cta: {
      title: 'Are you a holding with multiple companies?',
      description: 'Schedule a demo and we\'ll show you how GDS ONE can consolidate your companies like GHI Holding.',
      button: 'Schedule Demo'
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.related_industry === industry);
}
