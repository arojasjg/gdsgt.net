export interface Comparison {
  slug: string;
  title: string;
  competitor: string;
  competitorLogo: string;
  description: string;
  summary: string;
  metaDescription: string;
  lastUpdated: string;
}

export const comparisons: Comparison[] = [
  {
    slug: 'gds-one-vs-sap',
    title: 'GDS ONE vs SAP Business One',
    competitor: 'SAP Business One',
    competitorLogo: '🔷',
    description: 'Detailed comparison between GDS ONE and SAP Business One: features, pricing, support and more.',
    summary: 'GDS ONE offers 70% lower cost than SAP with similar features, local support in Guatemala and no hidden costs.',
    metaDescription: 'Compare GDS ONE vs SAP Business One. Discover why GDS ONE is more affordable (70% less), with better local support and no hidden costs.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-odoo',
    title: 'GDS ONE vs Odoo',
    competitor: 'Odoo',
    competitorLogo: '🟣',
    description: 'Complete comparison between GDS ONE and Odoo: modules, pricing, implementation and technical support.',
    summary: 'GDS ONE surpasses Odoo in local support, Guatemalan electronic invoicing and faster implementation time.',
    metaDescription: 'GDS ONE vs Odoo: ERP comparison. GDS ONE offers better local support, integrated FEL invoicing and 50% faster implementation.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-inteligos',
    title: 'GDS ONE vs Inteligos',
    competitor: 'Inteligos',
    competitorLogo: '🔵',
    description: 'Comparison between GDS ONE and Inteligos: technology, UX, pricing and features for Guatemalan companies.',
    summary: 'GDS ONE offers more modern technology, better UX, competitive pricing and superior local support compared to Inteligos.',
    metaDescription: 'GDS ONE vs Inteligos: ERP comparison in Guatemala. GDS ONE has more modern technology, better UX and more competitive pricing.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-quickbooks',
    title: 'GDS ONE vs QuickBooks',
    competitor: 'QuickBooks',
    competitorLogo: '💚',
    description: 'Comparison between GDS ONE and QuickBooks: complete ERP features vs accounting software.',
    summary: 'GDS ONE is a complete ERP while QuickBooks is primarily accounting. GDS ONE includes inventory, production, CRM and more.',
    metaDescription: 'GDS ONE vs QuickBooks: Complete ERP vs accounting software. GDS ONE includes inventory, production, sales, CRM and much more.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-netsuite',
    title: 'GDS ONE vs Oracle NetSuite',
    competitor: 'Oracle NetSuite',
    competitorLogo: '☁️',
    description: 'Comparison between GDS ONE and NetSuite: ERP for SMBs vs Enterprise, pricing and features.',
    summary: 'GDS ONE is designed for Guatemalan SMBs with affordable pricing, while NetSuite is enterprise with very high costs.',
    metaDescription: 'GDS ONE vs NetSuite: ERP for SMBs vs Enterprise. GDS ONE is 80% more affordable with features adapted to Guatemala.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-tucontrol',
    title: 'GDS ONE vs TuControl',
    competitor: 'TuControl',
    competitorLogo: '🟢',
    description: 'Comparison between GDS ONE and TuControl: features, technology and support in Guatemala.',
    summary: 'GDS ONE offers more modules, more modern technology, better UX and advanced features like AI compared to TuControl.',
    metaDescription: 'GDS ONE vs TuControl: comparison of Guatemalan ERPs. GDS ONE has more modules, better technology and AI features.',
    lastUpdated: '2026-01-05'
  }
];
