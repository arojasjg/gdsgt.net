/**
 * Glossary Terms (English)
 * NOTE: Auto-translated - requires review for technical accuracy
 */

import type { GlossaryTerm } from '../../types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'erp',
    term: 'ERP (Enterprise Resource Planning)',
    definition: 'Enterprise resource planning system that integrates and manages core business processes (finance, inventory, sales, purchasing, production, HR) in a unified platform.',
    relatedTerms: ['bi', 'crm', 'saas'],
  },
  {
    slug: 'crm',
    term: 'CRM (Customer Relationship Management)',
    definition: 'Customer relationship management system. Manages sales pipeline, opportunities, contacts, and customer interactions.',
    relatedTerms: ['erp', 'sales-funnel'],
  },
  {
    slug: 'bi',
    term: 'BI (Business Intelligence)',
    definition: 'Business intelligence. Analysis and visualization of data to make informed decisions. Includes dashboards, reports, and predictive analytics.',
    relatedTerms: ['erp', 'kpi', 'dashboard'],
  },
  {
    slug: 'saas',
    term: 'SaaS (Software as a Service)',
    definition: 'Software as a service. Delivery model where software is hosted in the cloud and accessed via internet. You pay monthly subscription instead of buying perpetual license.',
    relatedTerms: ['cloud', 'on-premise'],
  },
  {
    slug: 'cloud',
    term: 'Cloud',
    definition: 'Cloud computing. IT resources (servers, storage, databases, software) delivered via internet. Advantages: scalability, accessibility, no infrastructure investment.',
    relatedTerms: ['saas', 'on-premise'],
  },
  {
    slug: 'on-premise',
    term: 'On-Premise',
    definition: 'Software installed on your own servers, in your facilities. You manage infrastructure, security, and maintenance. Opposite of Cloud.',
    relatedTerms: ['cloud', 'saas'],
  },
  {
    slug: 'api',
    term: 'API (Application Programming Interface)',
    definition: 'Programming interface that allows two systems to communicate. Example: ERP integrates with e-commerce via API.',
    relatedTerms: ['integracion', 'webhook'],
  },
  {
    slug: 'roi',
    term: 'ROI (Return on Investment)',
    definition: 'Return on investment. Measures how much return you get for each dollar invested. Formula: ROI = ((Benefits - Costs) / Costs) × 100%',
    relatedTerms: ['tco', 'payback'],
  },
  {
    slug: 'tco',
    term: 'TCO (Total Cost of Ownership)',
    definition: 'Total cost of ownership. Includes all costs: licenses, implementation, training, maintenance, infrastructure, support. Used to compare ERP options.',
    relatedTerms: ['roi', 'payback'],
  },
  {
    slug: 'kpi',
    term: 'KPI (Key Performance Indicator)',
    definition: 'Key performance indicator. Metric measuring business performance. Examples: sales growth, gross margin, inventory turnover, customer satisfaction.',
    relatedTerms: ['bi', 'dashboard', 'metrica'],
  },
  {
    slug: 'dashboard',
    term: 'Dashboard',
    definition: 'Visual panel showing key metrics (KPIs) in real-time. Allows monitoring business performance at a glance.',
    relatedTerms: ['bi', 'kpi', 'reporte'],
  },
  {
    slug: 'lote',
    term: 'Lot',
    definition: 'Group of products manufactured or received together. Used for traceability: if a lot is defective, you can identify who you sold it to and recall it.',
    relatedTerms: ['trazabilidad', 'serie', 'vencimiento'],
  },
  {
    slug: 'serie',
    term: 'Serial Number',
    definition: 'Unique identifier for each product unit. Used for high-value products (electronics, vehicles, machinery). Allows tracking each unit individually.',
    relatedTerms: ['lote', 'trazabilidad'],
  },
  {
    slug: 'trazabilidad',
    term: 'Traceability',
    definition: 'Ability to track a product through the entire supply chain: from purchase, how it moves within your company, to sale. Critical for regulated industries (food, pharmaceutical).',
    relatedTerms: ['lote', 'serie', 'vencimiento'],
  },
  {
    slug: 'bom',
    term: 'BOM (Bill of Materials)',
    definition: 'Bill of materials. List of materials and quantities needed to manufacture a product. Example: to make a chair you need 4 legs, 1 seat, 2 screws.',
    relatedTerms: ['produccion', 'mrp', 'routing'],
  },
  {
    slug: 'mrp',
    term: 'MRP (Material Requirements Planning)',
    definition: 'Material requirements planning. Calculates what materials you need, how much, and when, based on production orders. Prevents shortages and excess.',
    relatedTerms: ['bom', 'produccion', 'compras'],
  },
  {
    slug: 'routing',
    term: 'Routing',
    definition: 'Production route. Sequence of operations to manufacture a product. Example: cut → sand → paint → assemble. Includes time and resources per operation.',
    relatedTerms: ['bom', 'produccion'],
  },
  {
    slug: 'lead-time',
    term: 'Lead Time',
    definition: 'Time from placing an order until receiving the product. Example: if a supplier has 15-day lead time, you must order 15 days in advance.',
    relatedTerms: ['compras', 'inventario', 'mrp'],
  },
  {
    slug: 'stock-minimo',
    term: 'Minimum Stock',
    definition: 'Minimum inventory level before reordering. When inventory reaches minimum, system alerts to purchase. Prevents stockouts.',
    relatedTerms: ['stock-maximo', 'punto-reorden', 'inventario'],
  },
  {
    slug: 'punto-reorden',
    term: 'Reorder Point',
    definition: 'Inventory level at which to place an order. Calculated as: Reorder Point = (Daily Demand × Lead Time) + Safety Stock.',
    relatedTerms: ['stock-minimo', 'lead-time', 'inventario'],
  },
  {
    slug: 'abc-analysis',
    term: 'ABC Analysis',
    definition: 'Inventory classification method. A: high-value products (20% of products, 80% of value). B: medium. C: low-value (80% of products, 20% of value). Helps prioritize.',
    relatedTerms: ['inventario', 'rotacion'],
  },
  {
    slug: 'rotacion',
    term: 'Inventory Turnover',
    definition: 'Measures how many times inventory is sold and replaced in a period. Formula: Turnover = Cost of Sales / Average Inventory. High turnover = good.',
    relatedTerms: ['inventario', 'abc-analysis'],
  },
  {
    slug: 'fifo',
    term: 'FIFO (First In, First Out)',
    definition: 'Inventory valuation method. First products purchased are first sold. Used for perishable products (food, medicine).',
    relatedTerms: ['lifo', 'promedio-ponderado', 'inventario'],
  },
  {
    slug: 'lifo',
    term: 'LIFO (Last In, First Out)',
    definition: 'Inventory valuation method. Last products purchased are first sold. Less common than FIFO. Not allowed in some countries (IFRS).',
    relatedTerms: ['fifo', 'promedio-ponderado', 'inventario'],
  },
  {
    slug: 'promedio-ponderado',
    term: 'Weighted Average',
    definition: 'Inventory valuation method. Cost is calculated as weighted average of all purchases. Simple and widely used.',
    relatedTerms: ['fifo', 'lifo', 'inventario'],
  },
  {
    slug: 'margen-bruto',
    term: 'Gross Margin',
    definition: 'Difference between sales and cost of sales. Formula: Gross Margin = (Sales - Cost of Sales) / Sales × 100%. Example: sell at $100, cost $60, margin 40%.',
    relatedTerms: ['margen-neto', 'punto-equilibrio'],
  },
  {
    slug: 'margen-neto',
    term: 'Net Margin',
    definition: 'Profit after all expenses (cost of sales, operating expenses, taxes). Formula: Net Margin = Net Profit / Sales × 100%.',
    relatedTerms: ['margen-bruto', 'ebitda'],
  },
  {
    slug: 'ebitda',
    term: 'EBITDA',
    definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. Measures operational profitability before financial and accounting effects.',
    relatedTerms: ['margen-neto', 'flujo-caja'],
  },
  {
    slug: 'flujo-caja',
    term: 'Cash Flow',
    definition: 'Movement of money in and out of the company. Positive cash flow = more money coming in than going out. Critical for liquidity.',
    relatedTerms: ['ebitda', 'capital-trabajo'],
  },
  {
    slug: 'capital-trabajo',
    term: 'Working Capital',
    definition: 'Money needed to operate day-to-day. Formula: Working Capital = Current Assets - Current Liabilities. Positive = good.',
    relatedTerms: ['flujo-caja', 'liquidez'],
  },
  {
    slug: 'punto-equilibrio',
    term: 'Break-Even Point',
    definition: 'Sales level where you don\'t lose or gain. Formula: Break-Even = Fixed Costs / (Price - Variable Cost per Unit).',
    relatedTerms: ['margen-bruto', 'costos-fijos'],
  },
  {
    slug: 'costos-fijos',
    term: 'Fixed Costs',
    definition: 'Costs that don\'t vary with production or sales. Examples: rent, salaries, insurance. You pay them even if you sell nothing.',
    relatedTerms: ['costos-variables', 'punto-equilibrio'],
  },
  {
    slug: 'costos-variables',
    term: 'Variable Costs',
    definition: 'Costs that vary with production or sales. Examples: raw materials, sales commissions. More you produce/sell, more you pay.',
    relatedTerms: ['costos-fijos', 'margen-contribucion'],
  },
  {
    slug: 'centro-costos',
    term: 'Cost Center',
    definition: 'Department or area to which costs are assigned. Examples: sales, production, administration. Allows analyzing profitability by area.',
    relatedTerms: ['contabilidad', 'presupuesto'],
  },
  {
    slug: 'orden-compra',
    term: 'Purchase Order (PO)',
    definition: 'Document sent to supplier to request products/services. Includes: products, quantities, prices, delivery date. Legally binding.',
    relatedTerms: ['compras', 'factura', 'recepcion'],
  },
  {
    slug: 'cotizacion',
    term: 'Quote',
    definition: 'Document offering products/services to a customer with prices and conditions. Not legally binding until customer accepts and becomes an order.',
    relatedTerms: ['orden-venta', 'ventas'],
  },
  {
    slug: 'orden-venta',
    term: 'Sales Order',
    definition: 'Document confirming a sale. Generated when customer accepts a quote. Includes: products, quantities, prices, delivery date. Legally binding.',
    relatedTerms: ['cotizacion', 'factura', 'ventas'],
  },
  {
    slug: 'factura',
    term: 'Invoice',
    definition: 'Document proving a sale and requesting payment. Includes: products/services, quantities, prices, taxes, payment terms. Legally binding.',
    relatedTerms: ['orden-venta', 'nota-credito', 'fel'],
  },
  {
    slug: 'nota-credito',
    term: 'Credit Note',
    definition: 'Document canceling or reducing an invoice. Used for returns, discounts, or errors. Reduces amount customer owes you.',
    relatedTerms: ['factura', 'nota-debito'],
  },
  {
    slug: 'nota-debito',
    term: 'Debit Note',
    definition: 'Document increasing an invoice. Used for additional charges or corrections. Increases amount customer owes you.',
    relatedTerms: ['factura', 'nota-credito'],
  },
  {
    slug: 'fel',
    term: 'FEL (Electronic Invoice)',
    definition: 'Electronic invoice. Digital invoice certified by tax authority. Mandatory in many Latin American countries (Guatemala, Mexico, Chile, etc.).',
    relatedTerms: ['factura', 'sat'],
  },
  {
    slug: 'sat',
    term: 'SAT (Tax Administration Service)',
    definition: 'Tax authority. In Guatemala: SAT (Superintendencia de Administración Tributaria). In Mexico: SAT (Servicio de Administración Tributaria).',
    relatedTerms: ['fel', 'factura'],
  },
  {
    slug: 'cuentas-por-cobrar',
    term: 'Accounts Receivable',
    definition: 'Money customers owe you. When you sell on credit, you create an account receivable. When customer pays, you close it.',
    relatedTerms: ['cuentas-por-pagar', 'cartera'],
  },
  {
    slug: 'cuentas-por-pagar',
    term: 'Accounts Payable',
    definition: 'Money you owe suppliers. When you buy on credit, you create an account payable. When you pay, you close it.',
    relatedTerms: ['cuentas-por-cobrar', 'compras'],
  },
  {
    slug: 'cartera',
    term: 'Portfolio',
    definition: 'Set of accounts receivable. "Cartera vencida" = overdue accounts receivable. "Días de cartera" = average days to collect.',
    relatedTerms: ['cuentas-por-cobrar', 'cobranza'],
  },
  {
    slug: 'cobranza',
    term: 'Collection',
    definition: 'Process of collecting accounts receivable. Includes: payment reminders, calls, visits, legal action if necessary.',
    relatedTerms: ['cartera', 'cuentas-por-cobrar'],
  },
  {
    slug: 'conciliacion-bancaria',
    term: 'Bank Reconciliation',
    definition: 'Process of matching your accounting records with bank statement. Identifies differences (uncleared checks, deposits in transit, errors).',
    relatedTerms: ['contabilidad', 'tesoreria'],
  },
  {
    slug: 'plan-cuentas',
    term: 'Chart of Accounts',
    definition: 'List of all accounting accounts used. Organized by: assets, liabilities, equity, income, expenses. Foundation of accounting.',
    relatedTerms: ['contabilidad', 'centro-costos'],
  },
  {
    slug: 'asiento-contable',
    term: 'Journal Entry',
    definition: 'Accounting record of a transaction. Includes: date, accounts, debit, credit, description. Foundation of double-entry bookkeeping.',
    relatedTerms: ['contabilidad', 'plan-cuentas'],
  },
  {
    slug: 'balance-general',
    term: 'Balance Sheet',
    definition: 'Financial statement showing financial position at a point in time. Formula: Assets = Liabilities + Equity.',
    relatedTerms: ['estado-resultados', 'flujo-caja'],
  },
  {
    slug: 'estado-resultados',
    term: 'Income Statement',
    definition: 'Financial statement showing profitability over a period. Formula: Net Profit = Income - Expenses.',
    relatedTerms: ['balance-general', 'ebitda'],
  },
  {
    slug: 'cierre-contable',
    term: 'Accounting Close',
    definition: 'Process of closing an accounting period (month, quarter, year). Includes: reconciliations, adjustments, financial statements.',
    relatedTerms: ['contabilidad', 'periodo-contable'],
  },
  {
    slug: 'depreciacion',
    term: 'Depreciation',
    definition: 'Systematic allocation of an asset\'s cost over its useful life. Example: buy machinery for $100K, useful life 10 years, annual depreciation $10K.',
    relatedTerms: ['activo-fijo', 'amortizacion'],
  },
  {
    slug: 'activo-fijo',
    term: 'Fixed Asset',
    definition: 'Long-term asset used in operation. Examples: buildings, machinery, vehicles, computers. Not for sale.',
    relatedTerms: ['depreciacion', 'balance-general'],
  },
  {
    slug: 'nomina',
    term: 'Payroll',
    definition: 'Process of calculating and paying employee salaries. Includes: base salary, bonuses, deductions (taxes, social security), net pay.',
    relatedTerms: ['rrhh', 'igss'],
  },
  {
    slug: 'igss',
    term: 'IGSS (Social Security)',
    definition: 'Social security institute. In Guatemala: IGSS (Instituto Guatemalteco de Seguridad Social). Employer and employee contribute.',
    relatedTerms: ['nomina', 'rrhh'],
  },
  {
    slug: 'rrhh',
    term: 'HR (Human Resources)',
    definition: 'Department managing personnel: hiring, payroll, training, performance evaluation, terminations.',
    relatedTerms: ['nomina', 'igss'],
  },
  {
    slug: 'rfp',
    term: 'RFP (Request for Proposal)',
    definition: 'Document requesting proposals from suppliers. Used to select ERP: you describe your needs and suppliers respond with proposals.',
    relatedTerms: ['seleccion-erp', 'implementacion'],
  },
  {
    slug: 'implementacion',
    term: 'Implementation',
    definition: 'Process of deploying an ERP. Includes: analysis, configuration, data migration, training, go-live. Takes 30-180 days depending on complexity.',
    relatedTerms: ['go-live', 'migracion-datos'],
  },
  {
    slug: 'go-live',
    term: 'Go-Live',
    definition: 'Day the ERP goes into production. You stop using the old system and start using the new one. Critical milestone.',
    relatedTerms: ['implementacion', 'migracion-datos'],
  },
  {
    slug: 'migracion-datos',
    term: 'Data Migration',
    definition: 'Process of transferring data from old system to new ERP. Includes: extraction, cleaning, transformation, loading. Critical for success.',
    relatedTerms: ['implementacion', 'go-live'],
  },
  {
    slug: 'customizacion',
    term: 'Customization',
    definition: 'Modification of ERP to fit specific needs. Can be: configuration (no code) or development (code). More customization = more cost and risk.',
    relatedTerms: ['implementacion', 'parametrizacion'],
  },
  {
    slug: 'parametrizacion',
    term: 'Parameterization',
    definition: 'ERP configuration via parameters (no code). Example: define tax rates, payment terms, price lists. Preferred over customization.',
    relatedTerms: ['customizacion', 'implementacion'],
  },
  {
    slug: 'integracion',
    term: 'Integration',
    definition: 'Connection between ERP and other systems. Example: ERP integrates with e-commerce, CRM, bank. Done via API, files, or middleware.',
    relatedTerms: ['api', 'webhook', 'middleware'],
  },
  {
    slug: 'webhook',
    term: 'Webhook',
    definition: 'Mechanism for a system to notify another when an event occurs. Example: when a sale is created in ERP, it sends a webhook to e-commerce.',
    relatedTerms: ['api', 'integracion'],
  },
  {
    slug: 'middleware',
    term: 'Middleware',
    definition: 'Software connecting two or more systems. Example: middleware connects ERP with e-commerce, CRM, and bank. Facilitates integration.',
    relatedTerms: ['integracion', 'api'],
  }
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms;
}

export function searchGlossaryTerms(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(lowerQuery) ||
    term.definition.toLowerCase().includes(lowerQuery)
  );
}
