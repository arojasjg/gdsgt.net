/**
 * Pricing Content (Spanish)
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
    tagline: 'Para empresas que inician con ERP',
    target_icp: ['servicios-profesionales', 'retail-pequeño'],
    base_description: 'Módulos core de ERP para gestión básica. Ideal para empresas que dan sus primeros pasos en automatización.',
    
    pricing_model: 'per_user',
    base_price_range: 'Desde $5/usuario/mes',
    pricing_note: '1 empresa incluida. Sin sorpresas, sin costos ocultos.',
    
    included_modules: [
      'Contabilidad',
      'Clientes',
      'Proveedores',
      'Ventas',
      'Compras',
      'Inventario básico',
      'Documentos'
    ],
    included_users: 'Usuarios ilimitados',
    included_companies: 1,
    included_support: 'Email (horario laboral)',
    included_storage: '10 GB',
    included_integrations: ['Excel/CSV', 'Email'],
    
    available_addons: [
      {
        name: 'Usuarios adicionales',
        description: 'Más de 10 usuarios',
        price_note: '$5/usuario/mes'
      },
      {
        name: 'Módulos adicionales',
        description: 'POS, Producción, Proyectos, etc.',
        price_note: 'Desde $50/módulo/mes'
      },
      {
        name: 'Integraciones premium',
        description: 'Power BI, WhatsApp, API',
        price_note: 'Desde $25/integración/mes'
      }
    ],
    
    cta_primary: 'Solicitar Demo',
    cta_secondary: 'Ver módulos incluidos',
    
    features: {
      'Usuarios incluidos': '10',
      'Empresas': '1',
      'Módulos core': true,
      'Inventario multi-bodega': false,
      'Producción': false,
      'Multi-empresa': false,
      'BI básico': false,
      'BI avanzado': false,
      'Integraciones básicas': true,
      'Integraciones premium': false,
      'API REST': false,
      'Soporte': 'Email',
      'SLA': 'Best effort',
      'Backups': 'Diarios',
      'Almacenamiento': '10 GB'
    }
  },
  
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Para empresas en crecimiento (Recomendado)',
    target_icp: ['distribucion', 'manufactura', 'retail'],
    base_description: 'ERP completo con inventario avanzado, producción, nómina, CRM y BI. La opción más popular.',
    
    pricing_model: 'per_user',
    base_price_range: 'Desde $9/usuario/mes',
    pricing_note: '1 empresa incluida. Todo lo que necesitas para escalar.',
    
    included_modules: [
      'Todo Starter',
      'Inventario avanzado / multi-bodega',
      'Producción',
      'Nómina / RRHH',
      'CRM',
      'BI básico',
      'Presupuesto',
      'Proyectos'
    ],
    included_users: 'Usuarios ilimitados',
    included_companies: 1,
    included_support: 'Email + Chat (horario laboral)',
    included_storage: '100 GB',
    included_integrations: [
      'Todos de Starter',
      'Power BI',
      'Looker Studio',
      'Zapier',
      'WhatsApp'
    ],
    
    available_addons: [
      {
        name: 'Usuarios adicionales',
        description: 'Más de 50 usuarios',
        price_note: '$5/usuario/mes'
      },
      {
        name: 'Multi-empresa',
        description: 'Gestionar múltiples empresas',
        price_note: '$150/empresa/mes'
      },
      {
        name: 'BI avanzado',
        description: 'Dashboards personalizados ilimitados',
        price_note: '$200/mes'
      },
      {
        name: 'AI features',
        description: 'Predicciones, copilots',
        price_note: '$300/mes'
      }
    ],
    
    cta_primary: 'Solicitar Demo',
    cta_secondary: 'Comparar funcionalidades',
    
    features: {
      'Usuarios incluidos': '50',
      'Empresas': '1',
      'Módulos core': true,
      'Inventario multi-bodega': true,
      'Producción': true,
      'Multi-empresa': 'Add-on',
      'BI básico': true,
      'BI avanzado': 'Add-on',
      'Integraciones básicas': true,
      'Integraciones premium': true,
      'API REST': true,
      'Soporte': 'Email + Chat',
      'SLA': '99% uptime',
      'Backups': 'Diarios',
      'Almacenamiento': '100 GB'
    }
  },
  
  {
    id: 'multi-company',
    name: 'Multi-Company',
    tagline: 'Para holdings y grupos empresariales',
    target_icp: ['holding'],
    base_description: 'ERP con consolidación multi-empresa, reportes corporativos y gobierno de datos centralizado.',
    
    pricing_model: 'custom',
    base_price_range: 'Desde $12/usuario/mes + servicio multiempresa',
    pricing_note: 'Precio depende de número de empresas y complejidad de consolidación.',
    
    included_modules: [
      'Todo Growth',
      'Multiempresa',
      'Consolidación operativa',
      'Reportes corporativos',
      'BI avanzado',
      'Benchmarking entre empresas'
    ],
    included_users: 'Usuarios ilimitados',
    included_companies: 'Desde 3 empresas',
    included_support: 'Email + Chat + Teléfono',
    included_storage: '1 TB',
    included_integrations: [
      'Todas las integraciones',
      'API REST completa',
      'Webhooks ilimitados',
      'SSO (Single Sign-On)'
    ],
    
    available_addons: [
      {
        name: 'Empresas adicionales',
        description: 'Más de 3 empresas',
        price_note: '$99/empresa/mes'
      },
      {
        name: 'Implementación dedicada',
        description: 'Equipo dedicado full-time',
        price_note: 'Cotización según alcance'
      },
      {
        name: 'SLA Premium',
        description: '99.9% uptime + soporte prioritario',
        price_note: '$500/mes'
      }
    ],
    
    cta_primary: 'Solicitar Propuesta',
    cta_secondary: 'Ver servicio multiempresa',
    
    features: {
      'Usuarios incluidos': 'Ilimitado',
      'Empresas': '3+',
      'Módulos core': true,
      'Inventario multi-bodega': true,
      'Producción': true,
      'Multi-empresa': true,
      'BI básico': true,
      'BI avanzado': true,
      'Integraciones básicas': true,
      'Integraciones premium': true,
      'API REST': true,
      'Soporte': '24/7',
      'SLA': '99.9% uptime',
      'Backups': 'Diarios + retención',
      'Almacenamiento': '1 TB'
    }
  },
  
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Para grandes organizaciones',
    target_icp: ['holding', 'enterprise'],
    base_description: 'Solución completa con SLA, seguridad avanzada, integraciones enterprise y account manager dedicado.',
    
    pricing_model: 'custom',
    base_price_range: 'Cotización personalizada',
    pricing_note: 'Todo incluido + SLA + seguridad avanzada + integraciones enterprise.',
    
    included_modules: [
      'Todos los módulos',
      'Personalización ilimitada',
      'Desarrollo de features custom',
      'AI avanzado',
      'Data warehouse dedicado',
      'Seguridad avanzada'
    ],
    included_users: 'Usuarios ilimitados',
    included_companies: 'Ilimitado',
    included_support: 'Account Manager dedicado + Soporte 24/7 + SLA',
    included_storage: 'Ilimitado',
    included_integrations: [
      'Todas las integraciones',
      'Desarrollo de integraciones custom',
      'API dedicada',
      'Webhooks ilimitados',
      'SSO + SAML'
    ],
    
    available_addons: [],
    
    cta_primary: 'Hablar con Ventas Enterprise',
    cta_secondary: 'Ver casos de éxito',
    
    features: {
      'Usuarios incluidos': 'Ilimitado',
      'Empresas': 'Ilimitado',
      'Módulos core': true,
      'Inventario multi-bodega': true,
      'Producción': true,
      'Multi-empresa': true,
      'BI básico': true,
      'BI avanzado': true,
      'Integraciones básicas': true,
      'Integraciones premium': true,
      'API REST': true,
      'Soporte': 'Dedicado 24/7',
      'SLA': '99.9% uptime',
      'Backups': 'Custom',
      'Almacenamiento': 'Ilimitado'
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

/**
 * Implementation & Services Pricing
 */
export interface ImplementationPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  includes: string[];
  ideal_for: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  includes: string[];
}

export const implementationPackages: ImplementationPackage[] = [
  {
    id: 'fast-start',
    name: 'Fast Start',
    description: 'Implementación rápida para empresas con procesos simples',
    price: 'Desde $99',
    includes: [
      'Parametrización inicial',
      'Catálogo base de productos/servicios',
      'Capacitación básica (2 sesiones)',
      'Soporte durante go-live (1 semana)'
    ],
    ideal_for: 'Empresas pequeñas con procesos estándar'
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Implementación completa con migración y procesos',
    price: 'Desde $1,199',
    includes: [
      'Todo Fast Start',
      'Migración de datos estándar',
      'Configuración de procesos',
      '1 integración estándar incluida',
      'Capacitación avanzada (4 sesiones)',
      'Soporte durante go-live (2 semanas)'
    ],
    ideal_for: 'Empresas medianas con datos existentes'
  },
  {
    id: 'holdings',
    name: 'Holdings',
    description: 'Implementación multi-empresa con gobierno de datos',
    price: 'Desde $2,399',
    includes: [
      'Todo Scale',
      'Configuración multiempresa',
      'Gobierno de datos centralizado',
      'Consolidación operativa',
      'Despliegue por fases',
      'Change management',
      'Soporte durante go-live (1 mes)'
    ],
    ideal_for: 'Holdings y grupos empresariales'
  }
];

export const services: ServiceItem[] = [
  {
    id: 'adaptations',
    name: 'Adaptaciones / Cambios (Bolsa Mensual)',
    description: 'Mejoras continuas y adaptaciones mensuales',
    price: 'Desde $300/mes',
    includes: [
      '5-10 horas de desarrollo/mes (según paquete)',
      'Ajustes de procesos',
      'Nuevos reportes',
      'Mejoras de UX',
      'Prioridad en roadmap'
    ]
  },
  {
    id: 'custom-development',
    name: 'Desarrollo a la Medida (SOW)',
    description: 'Funcionalidades nuevas y flujos complejos',
    price: 'Cotización según alcance',
    includes: [
      'Análisis de requerimientos',
      'Diseño de solución',
      'Desarrollo 100% in-house',
      'Testing y QA',
      'Documentación',
      'Capacitación'
    ]
  },
  {
    id: 'integrations',
    name: 'Integraciones',
    description: 'Conectores con bancos, POS, e-commerce, etc.',
    price: 'Desde $99/mes + setup',
    includes: [
      'Configuración inicial',
      'Conectores pre-construidos',
      'Monitoreo 24/7',
      'Soporte técnico',
      'Actualizaciones incluidas'
    ]
  },
  {
    id: 'multicompany-service',
    name: 'Servicio Multiempresa',
    description: 'Gestión y consolidación de múltiples empresas',
    price: 'Desde $199/mes',
    includes: [
      'Configuración multiempresa',
      'Consolidación operativa',
      'Reportes corporativos',
      'Gobierno de datos',
      'Soporte especializado'
    ]
  }
];

export const multicompanyFees = [
  {
    range: '3-5 empresas',
    price: '$199/mes'
  },
  {
    range: '6-15 empresas',
    price: '$349/mes'
  },
  {
    range: '16+ empresas',
    price: 'Cotización'
  }
];

export const valueProps = [
  {
    title: 'ERP completo por usuario, sin sorpresas',
    description: 'Precio transparente por usuario/mes. Sin costos ocultos ni módulos bloqueados.'
  },
  {
    title: 'Cambios y adaptaciones con reglas claras',
    description: 'Bolsa mensual o proyecto. Sabes exactamente qué pagas y qué recibes.'
  },
  {
    title: 'Desarrollo 100% in-house',
    description: 'No pagas partners ni dependencias externas. Controlamos costos, tiempos y calidad.'
  }
];
