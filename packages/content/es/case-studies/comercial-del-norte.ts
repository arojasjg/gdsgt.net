/**
 * Case Study: Soluferre
 * Industry: Distribution
 * Country: Guatemala
 * Results: Migrated from SAP to GDS ONE, 84% cost reduction, 30% more productive salespeople
 */

export const comercialDelNorte = {
  slug: 'soluferre-migracion-sap',
  title: 'Soluferre Migró de SAP a GDS ONE y Ahorró $30,000/Año',
  excerpt: 'Empresa guatemalteca migró de SAP Business One a GDS ONE. Resultados: 84% reducción de costos, vendedores 30% más productivos con app móvil, ROI en 2 meses.',
  industry: 'Distribución',
  country: 'Guatemala',
  company: {
    name: 'Soluferre Sociedad Anónima',
    size: '45 empleados',
    branches: '3 bodegas',
    revenue: '$3.5M USD/año',
    founded: '2015',
    location: 'Guatemala City',
    logo: '🚚'
  },
  challenge: {
    title: 'El Desafío',
    description: 'Después de 4 años con SAP Business One, los costos y limitaciones se volvieron insostenibles.',
    problems: [
      {
        icon: '💰',
        title: 'Costos Muy Altos',
        description: '$2,800/mes en licencias + soporte. 40% de su presupuesto IT.',
        impact: 'Costo: $33,600/año'
      },
      {
        icon: '🐌',
        title: 'Soporte Lento',
        description: 'Tickets tardaban 2-3 días en resolverse. Partner local poco responsivo.',
        impact: 'Downtime costaba $500-1,000 por incidente'
      },
      {
        icon: '📱',
        title: 'Sin App Móvil Real',
        description: 'SAP tiene web móvil limitada. Vendedores no podían consultar inventario en campo.',
        impact: 'Vendedores 30% menos productivos'
      },
      {
        icon: '🔄',
        title: 'Actualizaciones Costosas',
        description: 'Cada actualización mayor costaba $5,000 + downtime de 1 día.',
        impact: '$5,000/año + pérdidas por downtime'
      },
      {
        icon: '🤖',
        title: 'Sin Inteligencia Artificial',
        description: 'SAP no ofrece IA. Análisis y predicciones eran 100% manuales.',
        impact: 'Oportunidades perdidas de optimización'
      }
    ],
    quote: 'SAP es excelente, pero para una PyME como nosotros era overkill. Pagábamos por features que nunca usábamos.',
    author: 'Gerencia General',
    position: 'Soluferre'
  },
  solution: {
    title: 'La Solución: Migración a GDS ONE',
    description: 'Migramos de SAP B1 a GDS ONE en 5 semanas, sin pérdida de datos ni downtime significativo.',
    implementation: {
      duration: '35 días',
      team: '3 personas (GDS ONE) + 4 personas (Comercial)',
      modules: ['Inventario', 'Ventas', 'Compras', 'Contabilidad', 'CRM', 'IA', 'App Móvil'],
      timeline: [
        {
          week: 'Semana 1',
          title: 'Análisis y Exportación',
          tasks: [
            'Análisis de configuración SAP',
            'Exportación de maestros (productos, clientes, proveedores)',
            'Exportación de saldos y transacciones',
            'Mapeo de datos SAP → GDS ONE',
            'Plan de migración aprobado'
          ]
        },
        {
          week: 'Semana 2-3',
          title: 'Configuración y Migración',
          tasks: [
            'Configuración de GDS ONE (réplica de SAP)',
            'Importación de maestros (validación)',
            'Importación de saldos iniciales',
            'Configuración de 3 bodegas',
            'Setup de integraciones (FEL, banco)'
          ]
        },
        {
          week: 'Semana 4',
          title: 'Capacitación Express',
          tasks: [
            'Capacitación de usuarios (ya sabían ERP)',
            'Diferencias SAP vs GDS ONE',
            'Nuevas features (IA, app móvil)',
            'Práctica con datos reales'
          ]
        },
        {
          week: 'Semana 5',
          title: 'Go-Live',
          tasks: [
            'Operación en paralelo (3 días)',
            'Go-live oficial',
            'Desactivación de SAP',
            'Soporte intensivo (2 semanas)',
            'Activación de IA'
          ]
        }
      ]
    },
    features_used: [
      {
        feature: 'App Móvil Nativa',
        description: 'Vendedores consultan inventario, crean órdenes, ven historial de clientes desde celular',
        impact: 'Vendedores 30% más productivos'
      },
      {
        feature: 'IA Predictiva',
        description: 'Predicciones de demanda que SAP no ofrecía',
        impact: 'Inventario optimizado, menos faltantes'
      },
      {
        feature: 'Soporte por WhatsApp',
        description: 'Respuesta en minutos vs días con SAP',
        impact: 'Problemas resueltos 10x más rápido'
      },
      {
        feature: 'Actualizaciones Automáticas',
        description: 'Sin costo, sin downtime',
        impact: 'Ahorro: $5,000/año'
      }
    ]
  },
  results: {
    title: 'Los Resultados',
    description: 'La migración fue un éxito rotundo. Soluferre no mira atrás.',
    metrics: [
      {
        metric: '84%',
        label: 'Reducción de Costos',
        description: 'De $2,800/mes (SAP) a $450/mes (GDS ONE)',
        value: '$2,350/mes = $28,200/año en ahorros'
      },
      {
        metric: '30%',
        label: 'Vendedores Más Productivos',
        description: 'App móvil permite trabajar desde cualquier lugar',
        value: '+$35,000/año en ventas adicionales'
      },
      {
        metric: '10x',
        label: 'Soporte Más Rápido',
        description: 'De 2-3 días a minutos (WhatsApp)',
        value: 'Menos downtime, más productividad'
      },
      {
        metric: '0',
        label: 'Costo de Actualizaciones',
        description: 'Automáticas y gratis (vs $5,000/año con SAP)',
        value: '$5,000/año en ahorros'
      },
      {
        metric: '5 semanas',
        label: 'Tiempo de Migración',
        description: 'Más rápido que implementación SAP original (4 meses)',
        value: '3 meses menos de proyecto'
      },
      {
        metric: '$63,200',
        label: 'Ahorro Anual Total',
        description: 'Licencias + actualizaciones + productividad',
        value: 'ROI: 658% en el primer año'
      }
    ],
    timeline: [
      {
        period: 'Semana 1-5',
        title: 'Migración',
        description: 'De SAP a GDS ONE sin downtime'
      },
      {
        period: 'Mes 2',
        title: 'ROI Alcanzado',
        description: 'Recuperaron inversión en 2 meses'
      },
      {
        period: 'Mes 6',
        title: 'Resultados Completos',
        description: 'Vendedores adaptados, IA optimizada'
      },
      {
        period: 'Mes 12',
        title: 'Nunca Miraron Atrás',
        description: 'Renovaron por 3 años más'
      }
    ]
  },
  testimonial: {
    quote: 'Pensábamos que SAP era "lo mejor" porque es la marca más conocida. Pero para una PyME como nosotros, GDS ONE es objetivamente superior: más barato, más rápido, mejor soporte, y tiene IA que SAP no ofrece. Deberíamos haber migrado antes.',
    author: 'Gerencia General',
    position: 'Soluferre',
    company: 'Soluferre Sociedad Anónima',
    avatar: '👨‍💼',
    video_url: null,
    additional_quotes: [
      {
        quote: 'La migración fue sorprendentemente fácil. En 5 semanas estábamos operando. Temíamos que fuera un caos, pero el equipo de GDS ONE lo manejó perfectamente.',
        context: 'Sobre la migración'
      },
      {
        quote: 'Ahorramos $28,200/año en licencias. Ese dinero lo reinvertimos en contratar 2 vendedores más.',
        context: 'Sobre ahorros'
      },
      {
        quote: 'La app móvil cambió todo para nuestros vendedores. Ahora pueden consultar inventario, crear órdenes y ver historial de clientes desde su celular. Son 30% más productivos.',
        context: 'Sobre app móvil'
      }
    ]
  },
  roi: {
    investment: {
      implementation: 3000,
      year1_licenses: 5400,
      training: 1200,
      migration_service: 2000,
      total: 11600
    },
    savings: {
      license_cost_reduction: 28200,
      update_cost_savings: 5000,
      support_efficiency: 6000,
      sales_productivity: 35000,
      total: 74200
    },
    roi_percentage: 540,
    payback_months: 1.9,
    npv_5_years: 354000
  },
  technical_details: {
    modules_implemented: [
      'Inventario Multi-Bodega',
      'Ventas y CRM',
      'Compras',
      'Contabilidad',
      'Reportes con IA',
      'App Móvil iOS/Android'
    ],
    integrations: [
      'Facturación Electrónica (FEL)',
      'Banco Industrial (conciliación)',
      'WhatsApp Business (notificaciones a clientes)'
    ],
    data_migrated: {
      products: 650,
      customers: 280,
      suppliers: 60,
      historical_transactions: '4 años de SAP',
      open_documents: 'Todas las CxC y CxP'
    },
    training_hours: 8,
    go_live_date: '2025-12-01',
    current_users: 45,
    previous_system: 'SAP Business One 10.0'
  },
  lessons_learned: [
    {
      lesson: 'Migración de SAP es más fácil de lo que parece',
      description: 'SAP tiene buena estructura de datos. Exportación e importación fue limpia.'
    },
    {
      lesson: 'Usuarios que saben ERP aprenden rápido',
      description: 'Como ya usaban SAP, aprender GDS ONE tomó solo 8 horas (vs 20 horas para usuarios nuevos).'
    },
    {
      lesson: 'Mantener SAP en "solo lectura" es útil',
      description: 'Primeros 3 meses mantuvimos SAP disponible para consultas históricas (sin pagar licencias).'
    },
    {
      lesson: 'El ahorro en licencias paga la migración',
      description: 'Ahorro mensual de $2,350 pagó la migración en 1.5 meses.'
    }
  ],
  migration_details: {
    from_system: 'SAP Business One 10.0',
    to_system: 'GDS ONE Cloud',
    migration_duration: '35 días',
    downtime: '4 horas (fin de semana)',
    data_loss: '0%',
    success_rate: '100%',
    parallel_operation: '3 días',
    challenges: [
      {
        challenge: 'Exportar histórico de SAP',
        solution: 'Script SQL custom para exportación limpia',
        time: '2 días'
      },
      {
        challenge: 'Mapeo de cuentas contables',
        solution: 'Replicamos plan de cuentas de SAP en GDS ONE',
        time: '1 día'
      },
      {
        challenge: 'Capacitar en nuevas features (IA, móvil)',
        solution: 'Sesiones hands-on de 2 horas',
        time: '4 horas'
      }
    ]
  },
  next_steps: {
    title: '¿Usas SAP y Quieres Ahorrar?',
    description: 'Si pagas >$2,000/mes en SAP, podemos ayudarte a migrar y ahorrar 70-85%.',
    cta: 'Solicitar Análisis de Migración Gratis',
    link: '/es/migracion-sap'
  },
  seo: {
    meta_description: 'Caso de éxito: Soluferre migró de SAP a GDS ONE. Ahorro: 84% ($28,200/año). Vendedores 30% más productivos. ROI en 2 meses.',
    keywords: ['migración SAP', 'SAP a GDS ONE', 'alternativa SAP', 'caso éxito migración', 'Guatemala'],
    og_image: '/case-studies/og-comercial-del-norte.jpg'
  },
  published_date: '2026-01-10',
  updated_date: '2026-01-10',
  featured: true,
  category: 'distribution',
  tags: ['Distribución', 'Migración SAP', 'App Móvil', 'Guatemala', 'Ahorro 84%']
};
