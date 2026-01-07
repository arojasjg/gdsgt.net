import type { Module } from '../../types';

export const modules: Module[] = [
  {
    slug: 'accounting',
    name: 'Accounting',
    description:
      'Complete accounting management with customizable chart of accounts, cost centers, bank reconciliation, and real-time financial reports.',
    features: [
      'Customizable multi-level chart of accounts',
      'Automatic bank reconciliation',
      'Cost centers and projects',
      'Financial reports (Balance Sheet, Income Statement, Cash Flow)',
      'Periodic accounting closure',
      'Bank integration',
      'Transaction audit trail',
    ],
    benefits: [
      'Real-time financial visibility',
      'Reduction of accounting errors',
      'Regulatory compliance',
      'Informed decision making',
    ],
  },
  {
    slug: 'inventory',
    name: 'Inventory',
    description:
      'Total inventory control with multiple warehouses, traceability, lots, series, and min/max stock management.',
    features: [
      'Multiple warehouses and locations',
      'Traceability by lots and series',
      'Min/max stock with alerts',
      'Inventory valuation (FIFO, LIFO, Average)',
      'Inter-warehouse transfers',
      'Inventory adjustments',
      'Rotation and obsolescence reports',
    ],
    benefits: [
      'Reduction of stockouts',
      'Working capital optimization',
      'Complete traceability',
      'Better purchase planning',
    ],
  },
  {
    slug: 'sales',
    name: 'Sales',
    description:
      'Sales management from quotation to invoicing, with price control, discounts, commissions, and multiple price lists.',
    features: [
      'Quotations and orders',
      'Electronic invoicing',
      'Multiple price lists',
      'Discounts and promotions',
      'Sales commissions',
      'Returns and credit notes',
      'Point of sale (POS) integration',
    ],
    benefits: [
      'Streamlined sales process',
      'Margin control',
      'Improved customer service',
      'Tax compliance',
    ],
  },
  {
    slug: 'purchasing',
    name: 'Purchasing',
    description:
      'Purchase management with requisitions, orders, receiving, and supplier and commercial terms control.',
    features: [
      'Purchase requisitions',
      'Purchase orders',
      'Goods receiving',
      'Supplier management',
      'Quote comparison',
      'Commercial terms control',
      'Supplier returns',
    ],
    benefits: [
      'Cost optimization',
      'Better supplier negotiation',
      'Quality control',
      'Commitment visibility',
    ],
  },
  {
    slug: 'accounts-receivable',
    name: 'Accounts Receivable',
    description:
      'Customer portfolio management with credit control, collections, aging balances, and cash flow projection.',
    features: [
      'Credit control per customer',
      'Collections management',
      'Aging balances',
      'Payment application',
      'Debit and credit notes',
      'Cash flow projection',
      'Due date alerts',
    ],
    benefits: [
      'Improved cash flow',
      'Reduced delinquency',
      'Collections automation',
      'Better customer relationships',
    ],
  },
  {
    slug: 'accounts-payable',
    name: 'Accounts Payable',
    description:
      'Control of supplier obligations, payment scheduling, and advance and withholding management.',
    features: [
      'Supplier invoice recording',
      'Payment scheduling',
      'Advance management',
      'Tax withholdings',
      'Supplier reconciliation',
      'Expense projection',
      'Electronic payments',
    ],
    benefits: [
      'Cash flow optimization',
      'Discount utilization',
      'Obligation compliance',
      'Better supplier relationships',
    ],
  },
  {
    slug: 'production',
    name: 'Production',
    description:
      'Production order management, recipes (BOM), material consumption, and production cost control.',
    features: [
      'Production orders',
      'Multi-level bill of materials (BOM)',
      'Material consumption',
      'Production cost control',
      'Capacity planning',
      'Lot traceability',
      'Efficiency reports',
    ],
    benefits: [
      'Resource optimization',
      'Cost control',
      'Efficiency improvement',
      'Complete traceability',
    ],
  },
  {
    slug: 'human-resources',
    name: 'Human Resources',
    description:
      'Personnel management, payroll, attendance, vacation, and digital employee records.',
    features: [
      'Digital employee records',
      'Payroll calculation',
      'Attendance control',
      'Vacation and leave management',
      'Performance evaluation',
      'Recruitment and selection',
      'Training',
    ],
    benefits: [
      'Payroll automation',
      'Labor compliance',
      'Improved work environment',
      'Talent retention',
    ],
  },
  {
    slug: 'fixed-assets',
    name: 'Fixed Assets',
    description:
      'Fixed asset control with automatic depreciation, maintenance, and location and responsible party traceability.',
    features: [
      'Asset registration',
      'Automatic depreciation',
      'Preventive and corrective maintenance',
      'Location traceability',
      'Responsible party assignment',
      'Book value reports',
      'Asset disposals and sales',
    ],
    benefits: [
      'Asset control',
      'Tax compliance',
      'Maintenance optimization',
      'Loss reduction',
    ],
  },
  {
    slug: 'projects',
    name: 'Projects',
    description:
      'Project management with cost, time, resource control, and project-based billing.',
    features: [
      'Project planning',
      'Cost and budget control',
      'Resource allocation',
      'Time tracking',
      'Project billing',
      'Profitability reports',
      'Milestone management',
    ],
    benefits: [
      'Improved profitability',
      'Cost control',
      'Deadline compliance',
      'Progress visibility',
    ],
  },
  {
    slug: 'point-of-sale',
    name: 'Point of Sale (POS)',
    description:
      'Integrated point of sale system with inventory, invoicing, and multiple payment methods.',
    features: [
      'Intuitive touch interface',
      'Multiple payment methods',
      'Electronic invoicing',
      'Inventory integration',
      'Shift and cash register management',
      'Promotions and discounts',
      'Real-time sales reports',
    ],
    benefits: [
      'Streamlined sales',
      'Error reduction',
      'Better customer experience',
      'Cash control',
    ],
  },
  {
    slug: 'crm',
    name: 'CRM',
    description:
      'Customer relationship management, sales opportunities, lead tracking, and marketing automation.',
    features: [
      'Lead and opportunity management',
      'Interaction tracking',
      'Sales pipeline',
      'Marketing automation',
      'Customer segmentation',
      'Email campaigns',
      'Conversion reports',
    ],
    benefits: [
      'Increased conversion',
      'Improved retention',
      'Process automation',
      'Pipeline visibility',
    ],
  },
];
