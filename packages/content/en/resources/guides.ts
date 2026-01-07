/**
 * Resource Guides Content (English)
 * NOTE: Auto-translated - requires review for market adaptation
 */

export interface Resource {
  slug: string;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'checklist' | 'whitepaper' | 'ebook';
  cover_image?: string;
  pages: number;
  file_size: string;
  format: 'PDF' | 'Excel' | 'Word' | 'Google Sheets';
  meta_description: string;
  keywords: string[];
  category: 'seleccion' | 'implementacion' | 'optimizacion' | 'roi' | 'industria';
  tags: string[];
  requires_email: boolean;
  preview: {
    what_you_learn: string[];
    who_is_for: string[];
    table_of_contents: Array<{
      chapter: string;
      topics: string[];
    }>;
  };
  download_url?: string;
  related_blog_posts?: string[];
  related_case_studies?: string[];
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export const resources: Resource[] = [
  {
    slug: 'guia-seleccion-erp-pyme',
    title: 'Complete ERP Selection Guide for SMBs',
    description: 'Proven methodology for choosing the right ERP. Includes evaluation checklist, comparison matrix, and RFP template.',
    type: 'guide',
    pages: 45,
    file_size: '2.5 MB',
    format: 'PDF',
    meta_description: 'Download the complete ERP selection guide for SMBs. Proven methodology, checklist, and RFP template.',
    keywords: ['ERP selection', 'choose ERP', 'ERP guide', 'RFP ERP', 'ERP comparison'],
    category: 'seleccion',
    tags: ['ERP', 'Selection', 'SMB', 'Guide'],
    requires_email: true,
    preview: {
      what_you_learn: [
        'How to define your ERP requirements',
        'How to evaluate ERP options objectively',
        'How to avoid common mistakes in ERP selection',
        'How to calculate ERP ROI',
        'How to negotiate with ERP vendors',
        'How to create an RFP (Request for Proposal)'
      ],
      who_is_for: [
        'CEOs and CFOs evaluating ERP options',
        'IT managers leading ERP selection',
        'Operations managers needing a better system',
        'Consultants advising clients on ERP'
      ],
      table_of_contents: [
        {
          chapter: '1. Why Do You Need an ERP?',
          topics: [
            'Signs you need an ERP',
            'Benefits of an ERP',
            'Myths about ERP'
          ]
        },
        {
          chapter: '2. How to Define Your Requirements',
          topics: [
            'Functional requirements',
            'Technical requirements',
            'Requirements prioritization'
          ]
        },
        {
          chapter: '3. How to Evaluate ERP Options',
          topics: [
            'Evaluation criteria',
            'Comparison matrix',
            'Demos and proofs of concept'
          ]
        },
        {
          chapter: '4. How to Calculate ROI',
          topics: [
            'ROI methodology',
            'Costs to consider',
            'Benefits to quantify'
          ]
        },
        {
          chapter: '5. How to Create an RFP',
          topics: [
            'RFP structure',
            'RFP template',
            'How to evaluate proposals'
          ]
        }
      ]
    },
    related_blog_posts: ['como-elegir-erp-para-pyme-2024', 'errores-comunes-implementacion-erp'],
    cta: {
      title: 'Download the Complete Guide',
      description: 'Get the complete ERP selection guide for SMBs. Includes checklist, matrix, and RFP template.',
      button: 'Download Free Guide'
    }
  },
  {
    slug: 'checklist-implementacion-erp',
    title: 'ERP Implementation Checklist: 100 Critical Tasks',
    description: 'Complete checklist with 100 tasks to ensure your ERP implementation success. From planning to go-live.',
    type: 'checklist',
    pages: 15,
    file_size: '800 KB',
    format: 'PDF',
    meta_description: 'Download the complete ERP implementation checklist. 100 critical tasks from planning to go-live.',
    keywords: ['ERP implementation', 'implementation checklist', 'ERP project', 'go-live'],
    category: 'implementacion',
    tags: ['ERP', 'Implementation', 'Checklist', 'Project'],
    requires_email: true,
    preview: {
      what_you_learn: [
        '100 critical tasks for ERP implementation',
        'How to plan an ERP implementation',
        'How to avoid common implementation mistakes',
        'How to ensure successful go-live',
        'How to manage change'
      ],
      who_is_for: [
        'Project managers leading ERP implementation',
        'IT managers implementing ERP',
        'Consultants advising on ERP implementation',
        'Companies about to implement an ERP'
      ],
      table_of_contents: [
        {
          chapter: 'Pre-Implementation (20 tasks)',
          topics: [
            'Executive sponsor assignment',
            'Project team formation',
            'Budget definition',
            'Timeline creation'
          ]
        },
        {
          chapter: 'Analysis and Planning (25 tasks)',
          topics: [
            'Process mapping',
            'Requirements definition',
            'Data migration plan',
            'Training plan'
          ]
        },
        {
          chapter: 'Configuration and Development (30 tasks)',
          topics: [
            'System configuration',
            'Customizations',
            'Integrations',
            'Testing'
          ]
        },
        {
          chapter: 'Training and Go-Live (25 tasks)',
          topics: [
            'User training',
            'Data migration',
            'Go-live',
            'Post go-live support'
          ]
        }
      ]
    },
    related_blog_posts: ['errores-comunes-implementacion-erp'],
    cta: {
      title: 'Download the Checklist',
      description: 'Get the complete ERP implementation checklist. 100 critical tasks to ensure success.',
      button: 'Download Free Checklist'
    }
  },
  {
    slug: 'calculadora-roi-erp',
    title: 'ERP ROI Calculator (Excel Template)',
    description: 'Interactive Excel template to calculate your ERP ROI. Includes real examples and detailed instructions.',
    type: 'template',
    pages: 1,
    file_size: '500 KB',
    format: 'Excel',
    meta_description: 'Download the interactive ERP ROI calculator. Excel template with examples and instructions.',
    keywords: ['ERP ROI', 'ROI calculator', 'ERP investment', 'business case'],
    category: 'roi',
    tags: ['ERP', 'ROI', 'Calculator', 'Excel'],
    requires_email: true,
    preview: {
      what_you_learn: [
        'How to calculate ERP ROI',
        'What costs to include',
        'What benefits to quantify',
        'How to present ROI to management'
      ],
      who_is_for: [
        'CFOs needing to justify ERP investment',
        'Project managers creating business case',
        'Consultants advising on ERP',
        'Anyone needing to calculate ERP ROI'
      ],
      table_of_contents: [
        {
          chapter: 'Instructions Tab',
          topics: [
            'How to use the calculator',
            'What data to enter',
            'How to interpret results'
          ]
        },
        {
          chapter: 'Costs Tab',
          topics: [
            'License costs',
            'Implementation costs',
            'Maintenance costs',
            'Infrastructure costs'
          ]
        },
        {
          chapter: 'Benefits Tab',
          topics: [
            'Time savings',
            'Error reduction',
            'Inventory reduction',
            'Sales increase'
          ]
        },
        {
          chapter: 'Results Tab',
          topics: [
            'ROI calculation',
            'Payback period',
            'NPV (Net Present Value)',
            'Charts and graphs'
          ]
        }
      ]
    },
    related_blog_posts: ['roi-erp-como-calcularlo'],
    cta: {
      title: 'Download the Calculator',
      description: 'Get the interactive ERP ROI calculator. Excel template with examples.',
      button: 'Download Free Calculator'
    }
  },
  {
    slug: 'matriz-comparacion-erp',
    title: 'ERP Comparison Matrix (Excel Template)',
    description: 'Excel template to compare ERP options objectively. Includes weighted criteria and automatic scoring.',
    type: 'template',
    pages: 1,
    file_size: '400 KB',
    format: 'Excel',
    meta_description: 'Download the ERP comparison matrix. Excel template with weighted criteria and automatic scoring.',
    keywords: ['ERP comparison', 'comparison matrix', 'ERP evaluation', 'ERP selection'],
    category: 'seleccion',
    tags: ['ERP', 'Comparison', 'Matrix', 'Excel'],
    requires_email: true,
    preview: {
      what_you_learn: [
        'How to compare ERP options objectively',
        'What criteria to evaluate',
        'How to weight criteria by importance',
        'How to make the final decision'
      ],
      who_is_for: [
        'Companies evaluating multiple ERP options',
        'IT managers leading ERP selection',
        'Consultants advising on ERP',
        'Anyone needing to compare ERPs'
      ],
      table_of_contents: [
        {
          chapter: 'Instructions Tab',
          topics: [
            'How to use the matrix',
            'How to add ERP options',
            'How to weight criteria'
          ]
        },
        {
          chapter: 'Criteria Tab',
          topics: [
            'Functional criteria',
            'Technical criteria',
            'Commercial criteria',
            'Vendor criteria'
          ]
        },
        {
          chapter: 'Comparison Tab',
          topics: [
            'Score each ERP',
            'Automatic calculation',
            'Results visualization'
          ]
        },
        {
          chapter: 'Results Tab',
          topics: [
            'Final ranking',
            'Charts and graphs',
            'Recommendations'
          ]
        }
      ]
    },
    related_blog_posts: ['como-elegir-erp-para-pyme-2024'],
    cta: {
      title: 'Download the Matrix',
      description: 'Get the ERP comparison matrix. Excel template with weighted criteria.',
      button: 'Download Free Matrix'
    }
  },
  {
    slug: 'guia-migracion-excel-erp',
    title: 'Excel to ERP Migration Guide',
    description: 'Step-by-step guide to migrate from Excel to ERP. Includes data cleanup checklist and migration plan.',
    type: 'guide',
    pages: 30,
    file_size: '1.8 MB',
    format: 'PDF',
    meta_description: 'Download the Excel to ERP migration guide. Step-by-step with checklist and plan.',
    keywords: ['Excel to ERP', 'data migration', 'ERP migration', 'leave Excel'],
    category: 'implementacion',
    tags: ['ERP', 'Migration', 'Excel', 'Guide'],
    requires_email: true,
    preview: {
      what_you_learn: [
        'How to prepare Excel data for migration',
        'How to clean and validate data',
        'How to map Excel fields to ERP',
        'How to test migration',
        'How to train users'
      ],
      who_is_for: [
        'Companies migrating from Excel to ERP',
        'IT managers leading migration',
        'Accountants managing data',
        'Anyone leaving Excel for ERP'
      ],
      table_of_contents: [
        {
          chapter: '1. Why Leave Excel?',
          topics: [
            'Excel limitations',
            'Benefits of ERP',
            'When to migrate'
          ]
        },
        {
          chapter: '2. Data Preparation',
          topics: [
            'Data cleanup checklist',
            'Validation rules',
            'Duplicates elimination'
          ]
        },
        {
          chapter: '3. Field Mapping',
          topics: [
            'How to map fields',
            'Mapping template',
            'Special cases'
          ]
        },
        {
          chapter: '4. Migration Execution',
          topics: [
            'Migration plan',
            'Testing',
            'Go-live'
          ]
        },
        {
          chapter: '5. Post-Migration',
          topics: [
            'User training',
            'Support',
            'Continuous improvement'
          ]
        }
      ]
    },
    related_blog_posts: ['erp-vs-excel-cuando-hacer-cambio'],
    cta: {
      title: 'Download the Guide',
      description: 'Get the Excel to ERP migration guide. Step-by-step with checklist.',
      button: 'Download Free Guide'
    }
  }
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug);
}

export function getAllResources(): Resource[] {
  return resources;
}

export function getResourcesByCategory(category: Resource['category']): Resource[] {
  return resources.filter(r => r.category === category);
}

export function getResourcesByType(type: Resource['type']): Resource[] {
  return resources.filter(r => r.type === type);
}
