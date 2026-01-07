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
    description: 'Comparación detallada entre GDS ONE y SAP Business One: funcionalidades, precios, soporte y más.',
    summary: 'GDS ONE ofrece 70% más económico que SAP con funcionalidades similares, soporte local en Guatemala y sin costos ocultos.',
    metaDescription: 'Compara GDS ONE vs SAP Business One. Descubre por qué GDS ONE es más económico (70% menos), con mejor soporte local y sin costos ocultos.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-odoo',
    title: 'GDS ONE vs Odoo',
    competitor: 'Odoo',
    competitorLogo: '🟣',
    description: 'Comparación completa entre GDS ONE y Odoo: módulos, precios, implementación y soporte técnico.',
    summary: 'GDS ONE supera a Odoo en soporte local, facturación electrónica guatemalteca y tiempo de implementación más rápido.',
    metaDescription: 'GDS ONE vs Odoo: comparación de ERP. GDS ONE ofrece mejor soporte local, facturación FEL integrada y implementación 50% más rápida.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-inteligos',
    title: 'GDS ONE vs Inteligos',
    competitor: 'Inteligos',
    competitorLogo: '🔵',
    description: 'Comparación entre GDS ONE e Inteligos: tecnología, UX, precios y funcionalidades para empresas guatemaltecas.',
    summary: 'GDS ONE ofrece tecnología más moderna, mejor UX, precios competitivos y soporte local superior comparado con Inteligos.',
    metaDescription: 'GDS ONE vs Inteligos: comparación de ERP en Guatemala. GDS ONE tiene tecnología más moderna, mejor UX y precios más competitivos.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-quickbooks',
    title: 'GDS ONE vs QuickBooks',
    competitor: 'QuickBooks',
    competitorLogo: '💚',
    description: 'Comparación entre GDS ONE y QuickBooks: funcionalidades ERP completas vs software contable.',
    summary: 'GDS ONE es un ERP completo mientras QuickBooks es principalmente contabilidad. GDS ONE incluye inventario, producción, CRM y más.',
    metaDescription: 'GDS ONE vs QuickBooks: ERP completo vs software contable. GDS ONE incluye inventario, producción, ventas, CRM y mucho más.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-netsuite',
    title: 'GDS ONE vs Oracle NetSuite',
    competitor: 'Oracle NetSuite',
    competitorLogo: '☁️',
    description: 'Comparación entre GDS ONE y NetSuite: ERP para PyMEs vs Enterprise, precios y funcionalidades.',
    summary: 'GDS ONE está diseñado para PyMEs guatemaltecas con precios accesibles, mientras NetSuite es enterprise con costos muy altos.',
    metaDescription: 'GDS ONE vs NetSuite: ERP para PyMEs vs Enterprise. GDS ONE es 80% más económico con funcionalidades adaptadas a Guatemala.',
    lastUpdated: '2026-01-05'
  },
  {
    slug: 'gds-one-vs-tucontrol',
    title: 'GDS ONE vs TuControl',
    competitor: 'TuControl',
    competitorLogo: '🟢',
    description: 'Comparación entre GDS ONE y TuControl: funcionalidades, tecnología y soporte en Guatemala.',
    summary: 'GDS ONE ofrece más módulos, tecnología más moderna, mejor UX y funcionalidades avanzadas como IA comparado con TuControl.',
    metaDescription: 'GDS ONE vs TuControl: comparación de ERP guatemaltecos. GDS ONE tiene más módulos, mejor tecnología y funcionalidades con IA.',
    lastUpdated: '2026-01-05'
  }
];
