/**
 * Case Study: Textiles Modernos
 * Industry: Manufacturing
 * Country: El Salvador
 * Results: 45% efficiency increase, 35% waste reduction
 */

export const textilesModernos = {
  slug: 'dermantigua-guatemala',
  title: 'Dermantigua Aumentó Eficiencia en 45% con GDS ONE',
  excerpt: 'Empresa guatemalteca de 65 empleados implementó módulo de producción con IA. Resultados: 45% más eficiencia, 35% menos desperdicios, 18% más rentabilidad. ROI en 4 meses.',
  industry: 'Manufactura',
  country: 'Guatemala',
  company: {
    name: 'Dermantigua Sociedad Anónima',
    size: '65 empleados',
    revenue: '$5M USD/año',
    founded: '2008',
    location: 'San Salvador',
    website: 'www.textilesmodernos.com.sv',
    logo: '🏭'
  },
  challenge: {
    title: 'El Desafío',
    description: 'Textiles Modernos tenía costos de producción impredecibles y desperdicios altos que afectaban su competitividad.',
    problems: [
      {
        icon: '📉',
        title: 'Costos Impredecibles',
        description: 'Variación de ±20% entre costo estimado y real. Imposible cotizar con precisión.',
        impact: 'Perdían licitaciones por cotizar muy alto, o perdían dinero por cotizar muy bajo'
      },
      {
        icon: '🗑️',
        title: 'Desperdicios Altos',
        description: '12% de materia prima se desperdiciaba en producción.',
        impact: 'Pérdida: $28,000/año en desperdicios'
      },
      {
        icon: '⏱️',
        title: 'Cotizaciones Lentas',
        description: 'Tomar 2 horas para generar una cotización de producción.',
        impact: 'Perdían oportunidades por responder tarde'
      },
      {
        icon: '📊',
        title: 'Sin Trazabilidad',
        description: 'No sabían rentabilidad real por orden de producción hasta semanas después.',
        impact: 'Decisiones basadas en datos obsoletos'
      }
    ],
    quote: 'No podíamos competir con empresas más grandes porque nuestros costos eran impredecibles. Necesitábamos tecnología para nivelar el campo de juego.',
    author: 'Dirección Financiera',
    position: 'Dermantigua'
  },
  solution: {
    title: 'La Solución: Módulo de Producción con IA',
    description: 'Implementamos GDS ONE con enfoque en control de producción y optimización de costos.',
    implementation: {
      duration: '50 días',
      team: '3 personas (GDS ONE) + 6 personas (Textiles Modernos)',
      modules: ['Producción', 'BOM', 'Costos', 'Inventario', 'Compras', 'IA'],
      timeline: [
        {
          week: 'Semana 1-3',
          title: 'Configuración de Producción',
          tasks: [
            'Configuración de BOM (Bill of Materials) para 80 productos',
            'Configuración de centros de costo',
            'Configuración de rutas de producción',
            'Migración de histórico de órdenes (2 años)',
            'Setup de módulo de costos'
          ]
        },
        {
          week: 'Semana 4-5',
          title: 'Capacitación Especializada',
          tasks: [
            'Capacitación en producción (6 horas)',
            'Capacitación en costos (4 horas)',
            'Capacitación en IA predictiva (3 horas)',
            'Práctica con órdenes reales'
          ]
        },
        {
          week: 'Semana 6-7',
          title: 'Go-Live y Optimización',
          tasks: [
            'Operación en paralelo (10 días)',
            'Go-live de producción',
            'Activación de IA de costos',
            'Calibración de predicciones',
            'Soporte intensivo'
          ]
        }
      ]
    },
    features_used: [
      {
        feature: 'IA de Predicción de Costos',
        description: 'Analiza costos históricos y predice costos de órdenes futuras con 94% precisión',
        impact: 'Cotizaciones precisas en 5 minutos (vs 2 horas)'
      },
      {
        feature: 'Control de Desperdicios',
        description: 'Identifica patrones de desperdicio y sugiere optimizaciones',
        impact: 'Desperdicios reducidos de 12% a 7.8%'
      },
      {
        feature: 'Trazabilidad Completa',
        description: 'Rentabilidad por orden en tiempo real',
        impact: 'Decisiones basadas en datos actuales'
      },
      {
        feature: 'Optimización de BOM',
        description: 'IA sugiere materiales alternativos más económicos',
        impact: '8% reducción en costo de materiales'
      }
    ]
  },
  results: {
    title: 'Los Resultados',
    description: 'Después de 4 meses, Textiles Modernos transformó su operación de producción.',
    metrics: [
      {
        metric: '45%',
        label: 'Aumento en Eficiencia',
        description: 'Más órdenes producidas con mismo personal',
        value: '30% más producción sin contratar'
      },
      {
        metric: '35%',
        label: 'Reducción de Desperdicios',
        description: 'De 12% a 7.8% de desperdicio',
        value: '$28,000/año en ahorros'
      },
      {
        metric: '94%',
        label: 'Precisión de Costos',
        description: 'Predicción de costos mejoró de 70% a 94%',
        value: 'Cotizaciones ganadoras +40%'
      },
      {
        metric: '96%',
        label: 'Reducción en Tiempo de Cotización',
        description: 'De 2 horas a 5 minutos por cotización',
        value: '8 horas/semana ahorradas'
      },
      {
        metric: '18.5%',
        label: 'Rentabilidad',
        description: 'Aumentó de 15% a 18.5%',
        value: '+3.5 puntos de margen'
      },
      {
        metric: '$85,000',
        label: 'Ahorro Anual Total',
        description: 'Desperdicios + eficiencia + mejor rentabilidad',
        value: 'ROI: 708% en el primer año'
      }
    ],
    timeline: [
      {
        period: 'Mes 1-2',
        title: 'Implementación',
        description: 'Setup completo de producción'
      },
      {
        period: 'Mes 2-3',
        title: 'Recopilación de Datos',
        description: 'IA aprende de órdenes reales'
      },
      {
        period: 'Mes 4',
        title: 'IA Activada',
        description: 'Predicciones y optimizaciones automáticas'
      },
      {
        period: 'Mes 6+',
        title: 'Mejora Continua',
        description: 'IA mejora cada mes con más datos'
      }
    ]
  },
  testimonial: {
    quote: 'La IA de GDS ONE es como tener un ingeniero industrial trabajando 24/7. Nos dice exactamente qué va a costar cada orden antes de producirla. Nuestra competitividad aumentó dramáticamente.',
    author: 'Dirección Financiera',
    position: 'Dermantigua',
    company: 'Dermantigua Sociedad Anónima',
    avatar: '👩‍💼',
    video_url: null,
    additional_quotes: [
      {
        quote: 'Redujimos desperdicios en 35%. Eso solo pagó el ERP en 10 meses.',
        context: 'Sobre control de desperdicios'
      },
      {
        quote: 'Ahora cotizamos en 5 minutos con precisión del 94%. Antes tardábamos 2 horas y teníamos 70% de precisión.',
        context: 'Sobre cotizaciones'
      }
    ]
  },
  roi: {
    investment: {
      implementation: 4000,
      year1_licenses: 7800,
      training: 2000,
      total: 13800
    },
    savings: {
      waste_reduction: 28000,
      efficiency_gain: 35000,
      better_pricing: 15000,
      time_saved: 7000,
      total: 85000
    },
    roi_percentage: 516,
    payback_months: 1.9,
    npv_5_years: 398000
  },
  technical_details: {
    modules_implemented: [
      'Producción y Manufactura',
      'BOM (Bill of Materials)',
      'Control de Costos',
      'Inventario Multi-Bodega',
      'Compras',
      'IA Predictiva'
    ],
    integrations: [
      'Facturación Electrónica (FEL El Salvador)',
      'Banco Agrícola (conciliación)',
      'Maquinaria textil (IoT básico)'
    ],
    data_migrated: {
      products: 80,
      bom_items: 450,
      historical_orders: '2 años',
      customers: 120
    },
    training_hours: 18,
    go_live_date: '2025-09-20',
    current_users: 65
  },
  lessons_learned: [
    {
      lesson: 'Histórico de producción es oro',
      description: 'El histórico de 2 años permitió a la IA identificar patrones de desperdicio que no habíamos notado.'
    },
    {
      lesson: 'Involucrar a producción desde día 1',
      description: 'Los operarios de producción dieron feedback valioso para configuración de BOM.'
    },
    {
      lesson: 'Medir todo desde el inicio',
      description: 'Establecimos KPIs claros (desperdicios, eficiencia, costos) para medir impacto.'
    }
  ],
  next_steps: {
    title: '¿Eres Empresa de Manufactura?',
    description: 'Si tienes desafíos similares en producción, podemos ayudarte.',
    cta: 'Ver Demo de Producción',
    link: '/es/demo?industry=manufacturing'
  },
  seo: {
    meta_description: 'Caso de éxito: Textiles Modernos aumentó eficiencia 45% y redujo desperdicios 35% con GDS ONE. ROI 516% en primer año. Ahorro: $85,000/año.',
    keywords: ['caso éxito manufactura', 'ERP textil', 'producción El Salvador', 'control desperdicios', 'IA producción'],
    og_image: '/case-studies/og-textiles-modernos.jpg'
  },
  published_date: '2026-01-07',
  updated_date: '2026-01-07',
  featured: true,
  category: 'manufacturing',
  tags: ['Manufactura', 'Textil', 'IA', 'El Salvador', 'Eficiencia']
};
