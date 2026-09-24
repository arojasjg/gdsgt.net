/**
 * Case Study: Comercial Kerly
 * Industry: Distribution
 * Country: Guatemala
 * Results: 75% reduction in overstock, 90% reduction in stockouts
 */

export const distribuidoraLaEconomica = {
  slug: 'comercial-kerly-guatemala',
  title: 'Cómo Comercial Kerly Redujo Sobre-Stock en 75% con IA',
  excerpt: 'Distribuidora guatemalteca de 35 empleados implementó GDS ONE con IA. Resultados: $68,000/año en ahorros, 75% menos sobre-stock, 90% menos faltantes. ROI en 3 meses.',
  industry: 'Distribución',
  country: 'Guatemala',
  company: {
    name: 'Comercial Kerly',
    size: '35 empleados',
    revenue: '$2M USD/año',
    founded: '2010',
    location: 'Ciudad de Guatemala',
    website: 'www.comercialkerly.com.gt',
    logo: '🏢'
  },
  challenge: {
    title: 'El Desafío',
    description: 'Comercial Kerly enfrentaba problemas críticos de gestión de inventario que afectaban su rentabilidad y servicio al cliente.',
    problems: [
      {
        icon: '📦',
        title: 'Sobre-Stock Crónico',
        description: 'Tenían $60,000 inmovilizados en productos de baja rotación. Capital que podían usar para crecer.',
        impact: 'Costo de oportunidad: $6,000/año (10% del capital inmovilizado)'
      },
      {
        icon: '❌',
        title: 'Faltantes Frecuentes',
        description: '15-20 productos sin stock cada mes. Perdían ventas y clientes frustrados.',
        impact: 'Ventas perdidas: $25,000/mes = $300,000/año'
      },
      {
        icon: '📊',
        title: 'Decisiones a Ciegas',
        description: 'No sabían qué comprar, cuánto ni cuándo. Compraban por "intuición" del gerente.',
        impact: 'Errores de compra: 30% de productos no se vendían rápido'
      },
      {
        icon: '⏱️',
        title: 'Análisis Manual Lento',
        description: 'Analista pasaba 8 horas/semana en Excel generando reportes de inventario.',
        impact: 'Costo: $1,200/mes en tiempo de analista'
      }
    ],
    quote: 'Teníamos el dinero atrapado en productos que no se vendían, mientras perdíamos ventas por falta de los productos que sí se vendían. Era frustrante.',
    author: 'Gerencia General',
    position: 'Comercial Kerly'
  },
  solution: {
    title: 'La Solución: GDS ONE con IA',
    description: 'Implementamos GDS ONE con enfoque en optimización de inventario usando inteligencia artificial.',
    implementation: {
      duration: '42 días',
      team: '3 personas (GDS ONE) + 4 personas (Comercial Kerly)',
      modules: ['Inventario con IA', 'Compras', 'Ventas', 'Reportes'],
      timeline: [
        {
          week: 'Semana 1-2',
          title: 'Configuración y Migración',
          tasks: [
            'Configuración de empresa en GDS ONE',
            'Migración de 500 productos',
            'Migración de 200 clientes y 50 proveedores',
            'Carga de saldos iniciales de inventario',
            'Configuración de 2 bodegas'
          ]
        },
        {
          week: 'Semana 3-4',
          title: 'Capacitación',
          tasks: [
            'Capacitación en módulo de inventario (4 horas)',
            'Capacitación en módulo de compras (3 horas)',
            'Capacitación en módulo de ventas (3 horas)',
            'Capacitación en reportes con IA (2 horas)',
            'Práctica con datos reales'
          ]
        },
        {
          week: 'Semana 5-6',
          title: 'Go-Live y Optimización',
          tasks: [
            'Operación en paralelo (1 semana)',
            'Go-live oficial',
            'Activación de predicciones con IA',
            'Configuración de alertas automáticas',
            'Soporte intensivo'
          ]
        }
      ]
    },
    features_used: [
      {
        feature: 'Predicciones de Demanda con IA',
        description: 'Machine learning analiza 2 años de histórico y predice demanda por producto/mes',
        impact: '89% de precisión en predicciones'
      },
      {
        feature: 'Reordenamiento Automático',
        description: 'Sistema genera órdenes de compra automáticas cuando stock llega a punto de reorden',
        impact: '100% de productos siempre en stock óptimo'
      },
      {
        feature: 'Alertas Inteligentes',
        description: 'IA alerta cuando detecta tendencias: productos subiendo/bajando en demanda',
        impact: 'Reacción 2-3 semanas antes vs competencia'
      },
      {
        feature: 'Análisis de Rotación',
        description: 'Identifica automáticamente productos de baja rotación para liquidar',
        impact: 'Liberación de $45,000 en capital inmovilizado'
      }
    ]
  },
  results: {
    title: 'Los Resultados',
    description: 'Después de 6 meses con GDS ONE, los resultados superaron las expectativas.',
    metrics: [
      {
        metric: '75%',
        label: 'Reducción de Sobre-Stock',
        description: 'De $60,000 a $15,000 inmovilizados',
        value: '$45,000 liberados para reinvertir'
      },
      {
        metric: '90%',
        label: 'Reducción de Faltantes',
        description: 'De 15-20 productos/mes a 2-3 productos/mes',
        value: '$22,500/mes en ventas recuperadas'
      },
      {
        metric: '89%',
        label: 'Precisión de Predicciones',
        description: 'IA predice demanda con 89% de precisión',
        value: 'vs 65% con método manual anterior'
      },
      {
        metric: '87%',
        label: 'Ahorro de Tiempo',
        description: 'De 8 horas/semana a 1 hora/semana en análisis',
        value: '7 horas/semana = 28 horas/mes ahorradas'
      },
      {
        metric: '7x',
        label: 'Rotación de Inventario',
        description: 'Mejoró de 4x/año a 7x/año',
        value: 'Inventario más eficiente, menos capital inmovilizado'
      },
      {
        metric: '$68,000',
        label: 'Ahorro Anual Total',
        description: 'Sobre-stock + faltantes + tiempo + optimización',
        value: 'ROI: 655% en el primer año'
      }
    ],
    timeline: [
      {
        period: 'Mes 1-2',
        title: 'Implementación',
        description: 'Setup, migración, capacitación, go-live'
      },
      {
        period: 'Mes 3',
        title: 'Primeros Resultados',
        description: 'Faltantes reducidos en 60%, sobre-stock reducido en 40%'
      },
      {
        period: 'Mes 6',
        title: 'Resultados Completos',
        description: 'Faltantes -90%, sobre-stock -75%, ROI alcanzado'
      },
      {
        period: 'Mes 12',
        title: 'Optimización Continua',
        description: 'IA sigue aprendiendo, resultados mejoran cada mes'
      }
    ]
  },
  testimonial: {
    quote: 'GDS ONE con IA transformó nuestra gestión de inventario. Antes comprábamos por intuición, ahora compramos con datos. Los resultados hablan por sí solos: $68,000 en ahorros anuales y clientes más satisfechos. La inversión se pagó sola en 3 meses.',
    author: 'Gerencia General',
    position: 'Comercial Kerly',
    company: 'Comercial Kerly',
    avatar: '👨‍💼',
    video_url: null,
    additional_quotes: [
      {
        quote: 'La IA nos alerta cuando un producto está por agotarse. Antes nos enterábamos cuando ya no teníamos stock.',
        context: 'Sobre predicciones inteligentes'
      },
      {
        quote: 'Liberamos $45,000 que teníamos atrapados en sobre-stock. Ese dinero lo usamos para abrir una nueva bodega.',
        context: 'Sobre optimización de capital'
      },
      {
        quote: 'El soporte por WhatsApp es increíble. Responden en minutos, no en días como nuestro proveedor anterior.',
        context: 'Sobre soporte'
      }
    ]
  },
  roi: {
    investment: {
      implementation: 3000,
      year1_licenses: 5400,
      training: 1200,
      total: 9600
    },
    savings: {
      overstock_reduction: 45000,
      stockout_prevention: 22500,
      time_saved: 14400,
      better_negotiation: 6000,
      total: 87900
    },
    roi_percentage: 816,
    payback_months: 1.3,
    npv_5_years: 410000
  },
  technical_details: {
    modules_implemented: [
      'Inventario Multi-Bodega',
      'Compras y Proveedores',
      'Ventas y Facturación',
      'Reportes con IA',
      'Predicciones de Demanda',
      'App Móvil'
    ],
    integrations: [
      'Facturación Electrónica (FEL)',
      'Banco Industrial (conciliación)',
      'WhatsApp Business (notificaciones)'
    ],
    data_migrated: {
      products: 500,
      customers: 200,
      suppliers: 50,
      transactions: '2 años de histórico'
    },
    training_hours: 12,
    go_live_date: '2025-08-15',
    current_users: 35
  },
  lessons_learned: [
    {
      lesson: 'La IA necesita datos históricos',
      description: 'Migramos 2 años de histórico de ventas. Esto permitió que la IA hiciera predicciones precisas desde el día 1.'
    },
    {
      lesson: 'Empezar con casos de uso simples',
      description: 'Comenzamos solo con predicción de demanda. Una vez funcionando, agregamos más features de IA.'
    },
    {
      lesson: 'Confiar en la IA gradualmente',
      description: 'Primeros 2 meses: IA sugiere, humano decide. Después: IA decide automáticamente (con alertas).'
    },
    {
      lesson: 'El soporte rápido es crítico',
      description: 'Tener respuestas en minutos (no días) fue clave para adopción exitosa.'
    }
  ],
  next_steps: {
    title: '¿Quieres Resultados Similares?',
    description: 'Si eres distribuidora con problemas de inventario, podemos ayudarte a lograr resultados similares.',
    cta: 'Agenda una demo enfocada en distribución',
    link: '/es/demo?industry=distribution'
  },
  seo: {
    meta_description: 'Caso de éxito: Comercial Kerly redujo sobre-stock en 75% y faltantes en 90% con GDS ONE IA. ROI 816% en primer año. Ahorro: $68,000/año.',
    keywords: ['caso de éxito ERP', 'distribuidora Guatemala', 'ERP con IA', 'optimización inventario', 'GDS ONE caso de éxito'],
    og_image: '/case-studies/og-la-economica.jpg'
  },
  published_date: '2026-01-06',
  updated_date: '2026-01-06',
  featured: true,
  category: 'distribution',
  tags: ['Distribución', 'IA', 'Inventario', 'Guatemala', 'ROI 800%+']
};
