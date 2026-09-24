/**
 * Case Study: Istmo Entertainment
 * Industry: Restaurants
 * Country: Panama
 * Results: 40% waste reduction, 25% increase in table turnover
 */

export const restaurantesSaborLatino = {
  slug: 'istmo-entertainment-guatemala',
  title: 'Istmo Entertainment Redujo Merma en 40% con Control de Inventario IA',
  excerpt: 'Empresa guatemalteca de entretenimiento implementó GDS ONE con control de inventario. Resultados: 40% menos merma, 25% más rotación, $45,000/año en ahorros.',
  industry: 'Entretenimiento',
  country: 'Guatemala',
  company: {
    name: 'Istmo Entertainment Sociedad Anónima',
    size: '95 empleados',
    branches: '8 restaurantes',
    revenue: '$4M USD/año',
    founded: '2014',
    location: 'Ciudad de Panamá',
    logo: '🍽️'
  },
  challenge: {
    title: 'El Desafío',
    description: 'Gestionar inventario perecedero en 8 restaurantes era un desafío constante.',
    problems: [
      {
        icon: '🗑️',
        title: 'Merma Alta',
        description: '15% de alimentos se desperdiciaban (vencimiento, sobre-producción).',
        impact: 'Pérdida: $48,000/año'
      },
      {
        icon: '📦',
        title: 'Compras Ineficientes',
        description: 'Compraban "por experiencia". A veces faltaba, a veces sobraba.',
        impact: 'Clientes frustrados + desperdicio'
      },
      {
        icon: '💰',
        title: 'Costos de Recetas Desconocidos',
        description: 'No sabían costo real de cada platillo.',
        impact: 'Precios subóptimos en menú'
      },
      {
        icon: '⏱️',
        title: 'Control Manual de 8 Locales',
        description: 'Gerente general pasaba 12 horas/semana revisando inventario de cada local.',
        impact: '$1,800/mes en tiempo de gerente'
      }
    ],
    quote: 'Teníamos desperdicio de inventario constantemente. Sabíamos que había una mejor manera, pero con Excel era imposible.',
    author: 'Dirección de Operaciones',
    position: 'Istmo Entertainment'
  },
  solution: {
    title: 'La Solución: Inventario Perecedero con IA',
    description: 'Implementamos GDS ONE con enfoque en control de inventario de alimentos.',
    implementation: {
      duration: '40 días',
      team: '3 personas (GDS ONE) + 6 personas (Istmo Entertainment)',
      modules: ['Inventario Perecedero', 'Recetas', 'Compras', 'POS', 'IA', 'Multi-Local'],
      timeline: [
        {
          week: 'Semana 1-2',
          title: 'Configuración de Recetas',
          tasks: [
            'Configuración de 8 locales',
            'Carga de 120 recetas con ingredientes',
            'Configuración de costos por receta',
            'Setup de control de vencimientos',
            'Migración de proveedores'
          ]
        },
        {
          week: 'Semana 3-4',
          title: 'Capacitación',
          tasks: [
            'Capacitación de chefs (control de recetas)',
            'Capacitación de gerentes de local (inventario)',
            'Capacitación de cajeros (POS)',
            'Capacitación en compras'
          ]
        },
        {
          week: 'Semana 5-6',
          title: 'Go-Live Escalonado',
          tasks: [
            'Go-live local piloto (semana 5)',
            'Go-live 3 locales más (semana 6)',
            'Go-live 4 locales restantes (semana 6)',
            'Activación de IA (día 35)',
            'Soporte en cada local'
          ]
        }
      ]
    },
    features_used: [
      {
        feature: 'Control de Vencimientos',
        description: 'Sistema alerta cuando ingredientes están por vencer (FEFO)',
        impact: 'Merma por vencimiento -85%'
      },
      {
        feature: 'IA de Predicción de Demanda',
        description: 'Predice cuántos platillos se venderán por día/local',
        impact: 'Compras optimizadas, menos sobre-producción'
      },
      {
        feature: 'Costo de Recetas',
        description: 'Costo real de cada platillo actualizado en tiempo real',
        impact: 'Precios optimizados en menú'
      },
      {
        feature: 'Análisis por Local',
        description: 'Reportes automáticos de cada restaurante',
        impact: 'De 12 horas/semana a 1 hora/semana'
      }
    ]
  },
  results: {
    title: 'Los Resultados',
    description: 'En 4 meses, Istmo Entertainment transformó su gestión de alimentos.',
    metrics: [
      {
        metric: '40%',
        label: 'Reducción de Merma',
        description: 'De 15% a 9% de desperdicio',
        value: '$28,800/año en ahorros'
      },
      {
        metric: '25%',
        label: 'Más Rotación de Mesas',
        description: 'POS más rápido, menos errores',
        value: '+$40,000/año en ventas'
      },
      {
        metric: '100%',
        label: 'Trazabilidad de Costos',
        description: 'Saber costo real de cada platillo',
        value: 'Precios de menú optimizados'
      },
      {
        metric: '92%',
        label: 'Ahorro de Tiempo',
        description: 'De 12 horas/semana a 1 hora/semana',
        value: '11 horas/semana = $1,650/mes'
      },
      {
        metric: '8',
        label: 'Locales Sincronizados',
        description: 'Todos operan con misma información',
        value: 'Decisiones centralizadas, ejecución local'
      },
      {
        metric: '$88,600',
        label: 'Ahorro + Ventas Adicionales',
        description: 'Merma + ventas + tiempo',
        value: 'ROI: 521% en el primer año'
      }
    ],
    timeline: [
      {
        period: 'Mes 1-2',
        title: 'Implementación',
        description: 'Setup de 8 restaurantes'
      },
      {
        period: 'Mes 3',
        title: 'Primeros Resultados',
        description: 'Merma -25%, rotación +15%'
      },
      {
        period: 'Mes 6',
        title: 'Resultados Completos',
        description: 'Merma -40%, sistema optimizado'
      },
      {
        period: 'Mes 12',
        title: 'Expansión',
        description: 'Abrieron 2 restaurantes más'
      }
    ]
  },
  testimonial: {
    quote: 'GDS ONE nos dio control total sobre nuestros costos operativos. La IA predice demanda y nos dice exactamente qué comprar. Redujimos merma en 40% y aumentamos eficiencia en 25%. Es como tener un gerente de operaciones 24/7.',
    author: 'Dirección de Operaciones',
    position: 'Istmo Entertainment',
    company: 'Istmo Entertainment Sociedad Anónima',
    avatar: '👨‍🍳',
    video_url: null,
    additional_quotes: [
      {
        quote: 'Antes tirábamos comida todos los días. Ahora la merma es mínima porque sabemos exactamente qué comprar.',
        context: 'Sobre control de merma'
      },
      {
        quote: 'El costo de recetas en tiempo real nos permitió optimizar precios. Algunos platillos los subimos 10%, otros los bajamos 5%. Resultado: más rentabilidad.',
        context: 'Sobre costos de recetas'
      }
    ]
  },
  roi: {
    investment: {
      implementation: 4500,
      year1_licenses: 9600,
      training: 2400,
      pos_hardware: 3000,
      total: 19500
    },
    savings: {
      waste_reduction: 28800,
      sales_increase: 40000,
      time_saved: 19800,
      total: 88600
    },
    roi_percentage: 354,
    payback_months: 2.6,
    npv_5_years: 424000
  },
  technical_details: {
    modules_implemented: [
      'Inventario Perecedero (FEFO)',
      'Control de Recetas',
      'POS (8 puntos de venta)',
      'Compras',
      'IA Predictiva',
      'Reportes por Local'
    ],
    integrations: [
      'Facturación Electrónica (Panamá)',
      'Banco General (conciliación)',
      'Rappi/UberEats (pedidos online)'
    ],
    data_migrated: {
      recipes: 120,
      ingredients: 350,
      branches: 8,
      suppliers: 45
    },
    training_hours: 16,
    go_live_date: '2025-11-15',
    current_users: 95
  },
  lessons_learned: [
    {
      lesson: 'FEFO (First Expired, First Out) es crítico',
      description: 'Sistema automáticamente usa ingredientes que vencen primero.'
    },
    {
      lesson: 'Predicción por día de semana',
      description: 'IA aprendió que lunes venden 40% menos que viernes. Compras ajustadas.'
    },
    {
      lesson: 'Integración con delivery es clave',
      description: 'Pedidos de Rappi/UberEats entran automáticamente al sistema.'
    }
  ],
  next_steps: {
    title: '¿Tienes Restaurantes o Hoteles?',
    description: 'Si manejas inventario perecedero, podemos ayudarte a reducir merma.',
    cta: 'Ver Demo para Restaurantes',
    link: '/es/demo?industry=restaurant'
  },
  seo: {
    meta_description: 'Caso de éxito: Istmo Entertainment redujo merma 40% con GDS ONE IA. 8 locales optimizados. ROI 354%. Ahorro+ventas: $88,600/año.',
    keywords: ['caso éxito restaurantes', 'control merma', 'inventario perecedero', 'ERP restaurantes', 'Panamá'],
    og_image: '/case-studies/og-sabor-latino.jpg'
  },
  published_date: '2026-01-11',
  updated_date: '2026-01-11',
  featured: true,
  category: 'restaurant',
  tags: ['Restaurantes', 'Control de Merma', 'IA', 'Guatemala', 'Multi-Local']
};
