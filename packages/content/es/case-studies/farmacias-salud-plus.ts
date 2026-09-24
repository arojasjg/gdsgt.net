/**
 * Case Study: Cadena Farmacias Salud+
 * Industry: Retail/Pharmacy
 * Country: Honduras
 * Results: 92% reduction in expired products, 15 branches managed efficiently
 */

export const farmaciasSaludPlus = {
  slug: 'drogueria-palacios-gomez-guatemala',
  title: 'Droguería Palacios Gomez Redujo Productos Vencidos en 92% con IA',
  excerpt: 'Droguería guatemalteca implementó GDS ONE con IA. Resultados: 92% menos productos vencidos, $52,000/año en ahorros, inventario optimizado por sucursal. ROI en 5 meses.',
  industry: 'Retail - Farmacias',
  country: 'Guatemala',
  company: {
    name: 'Droguería Palacios Gomez Sociedad Anónima',
    size: '80 empleados',
    branches: '15 sucursales',
    revenue: '$8M USD/año',
    founded: '2012',
    location: 'Ciudad de Guatemala',
    website: 'www.drogueriapalaciosgomez.com.gt',
    logo: '💊'
  },
  challenge: {
    title: 'El Desafío',
    description: 'Gestionar inventario de 15 farmacias con productos de vencimiento era un dolor de cabeza constante.',
    problems: [
      {
        icon: '⏰',
        title: 'Productos Vencidos',
        description: '$38,000/año en productos que vencían antes de venderse.',
        impact: 'Pérdida directa + riesgo sanitario'
      },
      {
        icon: '🔄',
        title: 'Transferencias Ineficientes',
        description: 'Transferían productos entre sucursales "a ciegas", sin saber demanda real.',
        impact: 'Costos de logística innecesarios'
      },
      {
        icon: '❌',
        title: 'Faltantes en Sucursales',
        description: 'Clientes iban a sucursal A (sin stock) cuando sucursal B tenía el producto.',
        impact: 'Ventas perdidas + clientes frustrados'
      },
      {
        icon: '📊',
        title: 'Análisis Manual por Sucursal',
        description: 'Gerente pasaba 10 horas/semana analizando inventario de cada sucursal.',
        impact: '$1,500/mes en tiempo de gerente'
      }
    ],
    quote: 'Teníamos productos vencidos en una sucursal mientras en otra nos faltaban. Era un caos logístico que nos costaba $38,000/año.',
    author: 'Dirección General',
    position: 'Droguería Palacios Gomez'
  },
  solution: {
    title: 'La Solución: Multi-Sucursal con IA',
    description: 'Implementamos GDS ONE con IA para optimizar inventario de 15 sucursales.',
    implementation: {
      duration: '45 días',
      team: '4 personas (GDS ONE) + 8 personas (Salud+)',
      modules: ['Inventario Multi-Sucursal', 'POS', 'IA Predictiva', 'Transferencias', 'Reportes'],
      timeline: [
        {
          week: 'Semana 1-2',
          title: 'Configuración Multi-Sucursal',
          tasks: [
            'Configuración de 15 sucursales',
            'Migración de 3,500 productos',
            'Setup de POS en cada sucursal',
            'Configuración de transferencias',
            'Migración de histórico (2 años)'
          ]
        },
        {
          week: 'Semana 3-4',
          title: 'Capacitación',
          tasks: [
            'Capacitación de gerentes (6 horas)',
            'Capacitación de cajeros POS (4 horas)',
            'Capacitación en transferencias (2 horas)',
            'Capacitación en reportes con IA (3 horas)'
          ]
        },
        {
          week: 'Semana 5-6',
          title: 'Go-Live Escalonado',
          tasks: [
            'Go-live sucursal piloto (semana 5)',
            'Go-live 5 sucursales más (semana 6)',
            'Go-live 9 sucursales restantes (semana 6)',
            'Activación de IA (día 40)',
            'Soporte en cada sucursal'
          ]
        }
      ]
    },
    features_used: [
      {
        feature: 'Predicción por Sucursal',
        description: 'IA predice demanda específica de cada sucursal (no promedio)',
        impact: 'Inventario optimizado por ubicación'
      },
      {
        feature: 'Alertas de Vencimiento',
        description: 'Sistema alerta 30 días antes de vencimiento',
        impact: 'Tiempo para liquidar o transferir'
      },
      {
        feature: 'Sugerencias de Transferencia',
        description: 'IA sugiere qué transferir, de dónde y hacia dónde',
        impact: '30% menos transferencias innecesarias'
      },
      {
        feature: 'Análisis Automático',
        description: 'Reportes automáticos de cada sucursal',
        impact: 'De 10 horas/semana a 1 hora/semana'
      }
    ]
  },
  results: {
    title: 'Los Resultados',
    description: 'En 3 meses, la cadena transformó su gestión de inventario multi-sucursal.',
    metrics: [
      {
        metric: '92%',
        label: 'Reducción de Productos Vencidos',
        description: 'De $38,000/año a $3,000/año en pérdidas',
        value: '$35,000/año en ahorros'
      },
      {
        metric: '30%',
        label: 'Menos Transferencias',
        description: 'IA optimiza qué transferir y cuándo',
        value: '$8,000/año en costos logísticos'
      },
      {
        metric: '85%',
        label: 'Reducción de Faltantes',
        description: 'Clientes encuentran lo que buscan',
        value: 'Satisfacción de clientes +25%'
      },
      {
        metric: '90%',
        label: 'Ahorro de Tiempo',
        description: 'De 10 horas/semana a 1 hora/semana en análisis',
        value: '9 horas/semana = $1,350/mes'
      },
      {
        metric: '15',
        label: 'Sucursales Sincronizadas',
        description: 'Todas operan como una sola empresa',
        value: 'Visibilidad total en tiempo real'
      },
      {
        metric: '$52,000',
        label: 'Ahorro Anual Total',
        description: 'Vencidos + transferencias + tiempo + ventas recuperadas',
        value: 'ROI: 433% en el primer año'
      }
    ],
    timeline: [
      {
        period: 'Mes 1-2',
        title: 'Implementación',
        description: 'Setup de 15 sucursales'
      },
      {
        period: 'Mes 3',
        title: 'Primeros Resultados',
        description: 'Vencidos -60%, faltantes -50%'
      },
      {
        period: 'Mes 6',
        title: 'Resultados Completos',
        description: 'Vencidos -92%, sistema optimizado'
      },
      {
        period: 'Mes 12',
        title: 'Expansión',
        description: 'Abrieron 3 sucursales más con GDS ONE'
      }
    ]
  },
  testimonial: {
    quote: 'GDS ONE nos permitió gestionar múltiples puntos de venta sin caos. La IA maneja la complejidad de inventario multi-sucursal. Ahorramos $52,000/año y nuestros clientes están más satisfechos.',
    author: 'Dirección General',
    position: 'Droguería Palacios Gomez',
    company: 'Droguería Palacios Gomez Sociedad Anónima',
    avatar: '👨‍⚕️',
    video_url: null,
    additional_quotes: [
      {
        quote: 'La alerta de vencimientos nos salvó $35,000 en el primer año. Antes perdíamos productos porque no nos dábamos cuenta a tiempo.',
        context: 'Sobre alertas inteligentes'
      },
      {
        quote: 'Ahora sabemos exactamente qué tiene cada sucursal en tiempo real. Antes era un misterio.',
        context: 'Sobre visibilidad'
      }
    ]
  },
  roi: {
    investment: {
      implementation: 5000,
      year1_licenses: 9600,
      training: 2400,
      total: 17000
    },
    savings: {
      expired_products: 35000,
      transfer_optimization: 8000,
      time_saved: 16200,
      sales_recovered: 12000,
      total: 71200
    },
    roi_percentage: 319,
    payback_months: 2.9,
    npv_5_years: 338000
  },
  technical_details: {
    modules_implemented: [
      'Inventario Multi-Sucursal',
      'POS (15 puntos de venta)',
      'Transferencias Inteligentes',
      'IA Predictiva por Sucursal',
      'Control de Vencimientos',
      'Reportes Consolidados'
    ],
    integrations: [
      'Facturación Electrónica (Honduras)',
      'Banco Atlántida (conciliación)',
      'WhatsApp Business (alertas)'
    ],
    data_migrated: {
      products: 3500,
      branches: 15,
      historical_sales: '2 años',
      customers: 45000
    },
    training_hours: 20,
    go_live_date: '2025-10-10',
    current_users: 80
  },
  lessons_learned: [
    {
      lesson: 'Go-live escalonado funciona mejor',
      description: 'Empezamos con 1 sucursal piloto, luego 5, luego todas. Menos riesgo.'
    },
    {
      lesson: 'IA necesita 2-3 meses para optimizarse',
      description: 'Primeros resultados en mes 1, resultados óptimos en mes 3-4.'
    },
    {
      lesson: 'Capacitar a gerentes de sucursal es clave',
      description: 'Ellos son los champions que ayudan a cajeros y personal.'
    }
  ],
  next_steps: {
    title: '¿Tienes Múltiples Sucursales?',
    description: 'Si gestionas 2+ sucursales, podemos ayudarte a optimizar inventario con IA.',
    cta: 'Ver Demo Multi-Sucursal',
    link: '/es/demo?industry=retail'
  },
  seo: {
    meta_description: 'Caso de éxito: Farmacias Salud+ redujo productos vencidos 92% con GDS ONE IA. 15 sucursales optimizadas. ROI 319%. Ahorro: $52,000/año.',
    keywords: ['caso éxito retail', 'farmacias Honduras', 'multi-sucursal', 'control vencimientos', 'IA retail'],
    og_image: '/case-studies/og-farmacias-salud-plus.jpg'
  },
  published_date: '2026-01-08',
  updated_date: '2026-01-08',
  featured: true,
  category: 'retail',
  tags: ['Retail', 'Farmacias', 'Multi-Sucursal', 'Guatemala', 'IA']
};
