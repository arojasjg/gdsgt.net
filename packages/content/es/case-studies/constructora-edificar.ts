/**
 * Case Study: Constructora Edificar
 * Industry: Construction
 * Country: Costa Rica
 * Results: 40% reduction in cost overruns, 88% cost estimation accuracy
 */

export const constructoraEdificar = {
  slug: 'piedritecu-guatemala',
  title: 'Piedritecu Mejoró Rentabilidad de Proyectos en 20%',
  excerpt: 'Empresa guatemalteca implementó módulo de proyectos con IA. Resultados: 40% menos sobrecostos, 88% precisión en estimaciones, 20% más rentabilidad. ROI en 6 meses.',
  industry: 'Construcción',
  country: 'Guatemala',
  company: {
    name: 'Piedritecu',
    size: '45 empleados',
    revenue: '$6M USD/año',
    founded: '2009',
    location: 'San José, Costa Rica',
    website: 'www.edificar.co.cr',
    logo: '🏗️'
  },
  challenge: {
    title: 'El Desafío',
    description: 'Edificar tenía sobrecostos frecuentes en proyectos que destruían su rentabilidad.',
    problems: [
      {
        icon: '💸',
        title: 'Sobrecostos Constantes',
        description: '60% de proyectos terminaban con sobrecostos del 15-25%.',
        impact: 'Rentabilidad de 12% se convertía en 3-5%'
      },
      {
        icon: '📉',
        title: 'Estimaciones Imprecisas',
        description: 'Precisión de estimaciones: solo 65%. Cotizaban muy bajo y perdían dinero.',
        impact: 'Pérdidas: $120,000/año en proyectos mal cotizados'
      },
      {
        icon: '🔍',
        title: 'Sin Visibilidad de Costos',
        description: 'No sabían costos reales hasta que proyecto terminaba (demasiado tarde).',
        impact: 'Imposible corregir desviaciones a tiempo'
      },
      {
        icon: '📋',
        title: 'Control Manual de Subcontratistas',
        description: 'Excel para controlar 20-30 subcontratistas por proyecto.',
        impact: 'Errores, pagos duplicados, falta de trazabilidad'
      }
    ],
    quote: 'Ganábamos licitaciones pero perdíamos dinero en la ejecución. Necesitábamos control en tiempo real de costos.',
    author: 'Gerencia de Proyectos',
    position: 'Piedritecu'
  },
  solution: {
    title: 'La Solución: Módulo de Proyectos con IA',
    description: 'Implementamos GDS ONE con enfoque en control de costos por proyecto.',
    implementation: {
      duration: '55 días',
      team: '3 personas (GDS ONE) + 5 personas (Edificar)',
      modules: ['Proyectos', 'Costos por Proyecto', 'Subcontratistas', 'IA Predictiva', 'Reportes'],
      timeline: [
        {
          week: 'Semana 1-3',
          title: 'Configuración de Proyectos',
          tasks: [
            'Configuración de estructura de proyectos',
            'Setup de centros de costo',
            'Configuración de subcontratistas',
            'Migración de 15 proyectos activos',
            'Migración de histórico (3 años, 45 proyectos)'
          ]
        },
        {
          week: 'Semana 4-5',
          title: 'Capacitación Especializada',
          tasks: [
            'Capacitación en módulo de proyectos (6 horas)',
            'Capacitación en control de costos (4 horas)',
            'Capacitación en IA predictiva (3 horas)',
            'Práctica con proyectos reales'
          ]
        },
        {
          week: 'Semana 6-8',
          title: 'Go-Live y Calibración',
          tasks: [
            'Go-live con 3 proyectos nuevos',
            'Migración de proyectos activos',
            'Calibración de IA con datos históricos',
            'Ajustes basados en feedback',
            'Soporte intensivo'
          ]
        }
      ]
    },
    features_used: [
      {
        feature: 'IA de Predicción de Costos',
        description: 'Analiza proyectos históricos y predice costos de proyectos nuevos',
        impact: 'Precisión mejoró de 65% a 88%'
      },
      {
        feature: 'Alertas de Desviación',
        description: 'Sistema alerta cuando costos reales se desvían >5% de estimado',
        impact: 'Corrección a tiempo, no al final'
      },
      {
        feature: 'Control de Subcontratistas',
        description: 'Gestión completa de pagos, avances, retenciones',
        impact: 'Cero pagos duplicados, trazabilidad 100%'
      },
      {
        feature: 'Rentabilidad en Tiempo Real',
        description: 'Saber rentabilidad de cada proyecto en cualquier momento',
        impact: 'Decisiones basadas en datos actuales'
      }
    ]
  },
  results: {
    title: 'Los Resultados',
    description: 'Después de 6 meses, Edificar transformó su rentabilidad de proyectos.',
    metrics: [
      {
        metric: '40%',
        label: 'Reducción de Sobrecostos',
        description: 'Proyectos terminan en presupuesto o con sobrecosto <5%',
        value: '$72,000/año en sobrecostos evitados'
      },
      {
        metric: '88%',
        label: 'Precisión de Estimaciones',
        description: 'Mejoró de 65% a 88%',
        value: 'Más licitaciones ganadas rentables'
      },
      {
        metric: '20%',
        label: 'Aumento en Rentabilidad',
        description: 'De 12% a 18% de margen promedio',
        value: '+6 puntos de rentabilidad'
      },
      {
        metric: '100%',
        label: 'Visibilidad de Costos',
        description: 'Costos en tiempo real, no al final',
        impact: 'Corrección proactiva de desviaciones'
      },
      {
        metric: '0',
        label: 'Pagos Duplicados',
        description: 'Control automático de subcontratistas',
        value: 'Antes: 2-3 errores/año = $8,000'
      },
      {
        metric: '$120,000',
        label: 'Ahorro Anual Total',
        description: 'Sobrecostos + estimaciones + control',
        value: 'ROI: 706% en el primer año'
      }
    ],
    timeline: [
      {
        period: 'Mes 1-2',
        title: 'Implementación',
        description: 'Setup de módulo de proyectos'
      },
      {
        period: 'Mes 3',
        title: 'Primeros Proyectos',
        description: '3 proyectos nuevos con GDS ONE'
      },
      {
        period: 'Mes 6',
        title: 'IA Optimizada',
        description: 'Predicciones precisas, sobrecostos -40%'
      },
      {
        period: 'Mes 12',
        title: 'Transformación Completa',
        description: 'Rentabilidad +20%, 15 proyectos exitosos'
      }
    ]
  },
  testimonial: {
    quote: 'GDS ONE cambió nuestro negocio. Antes teníamos miedo de ganar licitaciones porque sabíamos que probablemente perderíamos dinero. Ahora cotizamos con confianza del 88% y nuestros proyectos son rentables. La IA es magia.',
    author: 'Gerencia de Proyectos',
    position: 'Piedritecu',
    company: 'Piedritecu',
    avatar: '👷',
    video_url: null,
    additional_quotes: [
      {
        quote: 'La alerta de desviación de costos nos salvó $30,000 en un solo proyecto. Detectamos el problema en semana 2, no en semana 12.',
        context: 'Sobre alertas en tiempo real'
      },
      {
        quote: 'Nuestra rentabilidad pasó de 12% a 18%. Esos 6 puntos adicionales son la diferencia entre sobrevivir y prosperar.',
        context: 'Sobre rentabilidad'
      }
    ]
  },
  roi: {
    investment: {
      implementation: 5000,
      year1_licenses: 6750,
      training: 2250,
      total: 14000
    },
    savings: {
      cost_overrun_prevention: 72000,
      better_estimation: 30000,
      subcontractor_control: 8000,
      time_saved: 10000,
      total: 120000
    },
    roi_percentage: 757,
    payback_months: 1.4,
    npv_5_years: 572000
  },
  technical_details: {
    modules_implemented: [
      'Gestión de Proyectos',
      'Contabilidad por Proyecto',
      'Control de Costos',
      'Subcontratistas',
      'IA Predictiva de Costos',
      'Reportes por Proyecto'
    ],
    integrations: [
      'Facturación Electrónica (Costa Rica)',
      'Banco Nacional (conciliación)',
      'AutoCAD (importación de planos - básico)'
    ],
    data_migrated: {
      active_projects: 15,
      historical_projects: 45,
      subcontractors: 80,
      historical_data: '3 años'
    },
    training_hours: 15,
    go_live_date: '2025-11-01',
    current_users: 45
  },
  lessons_learned: [
    {
      lesson: 'Histórico de proyectos es esencial',
      description: '3 años de histórico permitieron a la IA identificar patrones de sobrecostos.'
    },
    {
      lesson: 'Alertas tempranas son oro',
      description: 'Detectar desviación en semana 2 vs semana 12 puede ahorrar $20-50K por proyecto.'
    },
    {
      lesson: 'Involucrar a ingenieros de campo',
      description: 'Ellos reportan avances y costos en app móvil. Datos en tiempo real.'
    }
  ],
  next_steps: {
    title: '¿Eres Constructora?',
    description: 'Si tienes desafíos de control de costos en proyectos, podemos ayudarte.',
    cta: 'Ver Demo de Construcción',
    link: '/es/demo?industry=construction'
  },
  seo: {
    meta_description: 'Caso de éxito: Constructora Edificar redujo sobrecostos 40% y aumentó rentabilidad 20% con GDS ONE IA. ROI 757%. Ahorro: $120,000/año.',
    keywords: ['caso éxito construcción', 'ERP construcción', 'control costos proyectos', 'IA construcción', 'Costa Rica'],
    og_image: '/case-studies/og-constructora-edificar.jpg'
  },
  published_date: '2026-01-09',
  updated_date: '2026-01-09',
  featured: true,
  category: 'construction',
  tags: ['Construcción', 'Proyectos', 'IA', 'Costa Rica', 'Control de Costos']
};
