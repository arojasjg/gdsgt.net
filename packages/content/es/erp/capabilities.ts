/**
 * Capability Content (Spanish)
 * 
 * Cross-functional capabilities that span multiple modules
 */

export interface Capability {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  
  // What is this capability
  overview: {
    title: string;
    content: string;
  };
  
  // Key benefits
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  
  // How it works
  how_it_works: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  
  // Use cases
  use_cases: Array<{
    title: string;
    description: string;
    example: string;
  }>;
  
  // Related modules
  related_modules: string[];
  
  // Related industries
  related_industries: string[];
  
  // Success metrics
  success_metrics: Array<{
    metric: string;
    improvement: string;
    description: string;
  }>;
  
  // FAQs
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // CTA
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export const capabilities: Capability[] = [
  {
    slug: 'trazabilidad',
    name: 'Trazabilidad Completa',
    tagline: 'Rastrea cada producto desde compra hasta venta',
    description: 'Control total de lotes, series, vencimientos y movimientos. Cumple regulaciones y responde auditorías en minutos.',
    icon: '🔍',
    
    overview: {
      title: '¿Qué es Trazabilidad?',
      content: 'Trazabilidad es la capacidad de rastrear un producto a través de toda la cadena de suministro: desde que lo compras, cómo se mueve en tu empresa, hasta que lo vendes. Incluye control de lotes, series, fechas de vencimiento, y ubicaciones. Es crítico para industrias reguladas (alimentos, farmacéutica, salud) y para responder recalls o auditorías.'
    },
    
    benefits: [
      {
        title: 'Cumplimiento Regulatorio',
        description: 'Cumple COFEPRIS, INVIMA, FDA. Reportes de trazabilidad en minutos, no en días.',
        icon: '✅'
      },
      {
        title: 'Respuesta Rápida a Recalls',
        description: 'Si hay un recall, identifica en minutos qué lotes tienes, dónde están, a quién se vendieron.',
        icon: '⚡'
      },
      {
        title: 'Control de Vencimientos',
        description: 'Alertas automáticas de productos próximos a vencer. Reduce pérdidas por vencimientos.',
        icon: '📅'
      },
      {
        title: 'Auditorías Sin Estrés',
        description: 'Responde auditorías con reportes automáticos. Trazabilidad hacia adelante y hacia atrás.',
        icon: '📊'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Recepción con Lote',
          description: 'Al recibir mercancía, capturas número de lote, fecha de fabricación, fecha de vencimiento, proveedor.'
        },
        {
          step: 2,
          title: 'Rastreo de Movimientos',
          description: 'Cada movimiento (transferencia, ajuste, producción) registra qué lotes se movieron, de dónde a dónde.'
        },
        {
          step: 3,
          title: 'Venta con Lote',
          description: 'Al vender, el sistema registra qué lotes se vendieron, a qué cliente, en qué fecha.'
        },
        {
          step: 4,
          title: 'Reportes de Trazabilidad',
          description: 'Genera reportes de trazabilidad hacia adelante (¿a quién vendí este lote?) o hacia atrás (¿de dónde vino este lote?).'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Recall de Producto',
        description: 'Un proveedor informa que un lote está contaminado',
        example: 'En 5 minutos identificas: tienes 50 unidades del lote en bodega, vendiste 200 unidades a 15 clientes. Generas lista de clientes afectados y los contactas inmediatamente.'
      },
      {
        title: 'Auditoría Regulatoria',
        description: 'Auditor pide trazabilidad de un producto específico',
        example: 'Seleccionas el producto y generas reporte de trazabilidad: muestra todos los lotes recibidos, de qué proveedor, cuándo, a quién se vendieron, cuándo. Auditoría aprobada en 10 minutos.'
      },
      {
        title: 'Control de Vencimientos',
        description: 'Reduces pérdidas por productos vencidos',
        example: 'Sistema envía alertas diarias de productos próximos a vencer (30, 15, 7 días). Creas promociones para mover el inventario antes de que venza. Reduces vencimientos 90%.'
      }
    ],
    
    related_modules: [
      'Inventario',
      'Compras',
      'Ventas',
      'Producción'
    ],
    
    related_industries: [
      'distribucion',
      'manufactura',
      'retail',
      'salud'
    ],
    
    success_metrics: [
      {
        metric: 'Tiempo de Respuesta a Recall',
        improvement: 'De días a minutos',
        description: 'Identificas productos afectados en minutos'
      },
      {
        metric: 'Vencimientos',
        improvement: '-90%',
        description: 'Alertas tempranas evitan pérdidas'
      },
      {
        metric: 'Tiempo de Auditoría',
        improvement: '-80%',
        description: 'Reportes automáticos, no búsqueda manual'
      }
    ],
    
    faqs: [
      {
        question: '¿Qué es trazabilidad hacia adelante y hacia atrás?',
        answer: 'Trazabilidad hacia adelante: dado un lote que recibí, ¿a quién lo vendí? Trazabilidad hacia atrás: dado un producto que vendí, ¿de qué lote vino y de qué proveedor?'
      },
      {
        question: '¿Funciona para productos sin lote (commodities)?',
        answer: 'Sí. Para productos sin lote, puedes usar trazabilidad por fecha de recepción o por orden de compra.'
      },
      {
        question: '¿Puedo rastrear productos en producción?',
        answer: 'Sí. El sistema rastrea qué lotes de materia prima se usaron para producir qué lotes de producto terminado.'
      },
      {
        question: '¿Cumple con regulaciones internacionales?',
        answer: 'Sí. El sistema cumple con COFEPRIS (México), INVIMA (Colombia), FDA (USA), y otras regulaciones de trazabilidad.'
      }
    ],
    
    cta: {
      title: '¿Necesitas trazabilidad completa?',
      description: 'Agenda una demo y te mostraremos cómo empresas reguladas cumplen con trazabilidad sin esfuerzo.',
      button: 'Ver Demo de Trazabilidad'
    }
  },
  
  {
    slug: 'multi-bodega',
    name: 'Gestión Multi-Bodega',
    tagline: 'Gestiona inventario en múltiples ubicaciones',
    description: 'Control de inventario en múltiples bodegas, sucursales o centros de distribución. Transferencias automáticas y visibilidad consolidada.',
    icon: '🏭',
    
    overview: {
      title: '¿Qué es Multi-Bodega?',
      content: 'Multi-Bodega es la capacidad de gestionar inventario en múltiples ubicaciones físicas: bodegas, sucursales, centros de distribución, tiendas. Cada ubicación tiene su propio inventario, pero puedes ver todo consolidado. Incluye transferencias entre ubicaciones, reposición automática, y análisis de inventario por ubicación.'
    },
    
    benefits: [
      {
        title: 'Visibilidad Total',
        description: 'Ve inventario consolidado y por ubicación. Sabes exactamente dónde está cada producto.',
        icon: '👁️'
      },
      {
        title: 'Transferencias Eficientes',
        description: 'Transfiere inventario entre ubicaciones. Rastrea transferencias en tránsito.',
        icon: '🚚'
      },
      {
        title: 'Reposición Inteligente',
        description: 'Sistema sugiere transferencias basado en demanda por ubicación.',
        icon: '🤖'
      },
      {
        title: 'Reduce Inventario Total',
        description: 'Balancea inventario entre ubicaciones. Reduce inventario total 20-30%.',
        icon: '📉'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Define Ubicaciones',
          description: 'Crea bodegas, sucursales, centros de distribución. Cada una con su propio inventario.'
        },
        {
          step: 2,
          title: 'Compras a Bodega Principal',
          description: 'Compras llegan a bodega principal o directamente a ubicaciones específicas.'
        },
        {
          step: 3,
          title: 'Transferencias',
          description: 'Crea transferencias entre ubicaciones. Sistema rastrea inventario en tránsito.'
        },
        {
          step: 4,
          title: 'Reposición Automática',
          description: 'Sistema analiza demanda por ubicación y sugiere transferencias o compras.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Cadena de Retail',
        description: 'Gestiona inventario en múltiples tiendas',
        example: 'Tienes 10 tiendas. Bodega central compra y distribuye. Sistema sugiere transferencias basado en ventas de cada tienda. Tienda A vende mucho producto X, Tienda B no. Sistema sugiere transferir de B a A.'
      },
      {
        title: 'Distribuidora Regional',
        description: 'Centros de distribución en diferentes ciudades',
        example: 'Tienes centros de distribución en CDMX, Guadalajara, Monterrey. Cada uno atiende su región. Sistema balancea inventario entre centros. Si CDMX se queda sin stock, transfiere desde Guadalajara.'
      },
      {
        title: 'Manufactura Multi-Planta',
        description: 'Plantas de producción y bodegas de producto terminado',
        example: 'Planta 1 produce producto A, Planta 2 produce producto B. Cada una tiene bodega de MP y PT. Sistema consolida inventario y sugiere transferencias entre plantas si es necesario.'
      }
    ],
    
    related_modules: [
      'Inventario',
      'Compras',
      'Ventas',
      'Logística'
    ],
    
    related_industries: [
      'distribucion',
      'retail',
      'manufactura',
      'logistica'
    ],
    
    success_metrics: [
      {
        metric: 'Inventario Total',
        improvement: '-20-30%',
        description: 'Mejor balanceo entre ubicaciones'
      },
      {
        metric: 'Quiebres de Stock',
        improvement: '-60%',
        description: 'Transferencias rápidas entre ubicaciones'
      },
      {
        metric: 'Costo de Transporte',
        improvement: '-15%',
        description: 'Transferencias optimizadas'
      }
    ],
    
    faqs: [
      {
        question: '¿Cuántas ubicaciones puedo gestionar?',
        answer: 'Ilimitadas. Tenemos clientes con 3 bodegas y otros con 100+ tiendas.'
      },
      {
        question: '¿Puedo transferir entre ubicaciones?',
        answer: 'Sí. Creas transferencias, el sistema rastrea inventario en tránsito, y actualiza ambas ubicaciones al confirmar recepción.'
      },
      {
        question: '¿El sistema sugiere transferencias automáticamente?',
        answer: 'Sí. Analiza demanda por ubicación y sugiere transferencias o compras para mantener niveles óptimos.'
      },
      {
        question: '¿Puedo ver inventario consolidado?',
        answer: 'Sí. Puedes ver inventario total (todas las ubicaciones) o por ubicación específica.'
      }
    ],
    
    cta: {
      title: '¿Gestionas múltiples ubicaciones?',
      description: 'Agenda una demo y te mostraremos cómo optimizar inventario multi-bodega.',
      button: 'Ver Demo Multi-Bodega'
    }
  },
  
  {
    slug: 'costeo-real',
    name: 'Costeo en Tiempo Real',
    tagline: 'Conoce tu costo real, no estimado',
    description: 'Calcula costo real de productos considerando compras, producción, logística y overhead. Toma decisiones basadas en números reales.',
    icon: '💰',
    
    overview: {
      title: '¿Qué es Costeo Real?',
      content: 'Costeo Real es calcular el costo verdadero de tus productos, no un estimado. Considera: costo de compra (con descuentos, fletes, aranceles), costo de producción (materiales, mano de obra, overhead), costo de logística (almacenaje, manejo), y mermas. Te permite saber si estás vendiendo con margen o a pérdida.'
    },
    
    benefits: [
      {
        title: 'Decisiones Informadas',
        description: 'Sabes exactamente cuánto te cuesta cada producto. Vendes con margen real, no estimado.',
        icon: '🎯'
      },
      {
        title: 'Identifica Productos No Rentables',
        description: 'Descubres qué productos vendes a pérdida. Puedes ajustar precios o descontinuar.',
        icon: '🔍'
      },
      {
        title: 'Optimiza Procesos',
        description: 'Identificas dónde están los costos ocultos. Optimizas procesos para reducir costos.',
        icon: '⚙️'
      },
      {
        title: 'Aumenta Margen',
        description: 'Con visibilidad de costos reales, puedes negociar mejor con proveedores y clientes.',
        icon: '📈'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Costo de Compra',
          description: 'Registra costo de compra incluyendo descuentos, fletes, aranceles. Costo real por unidad.'
        },
        {
          step: 2,
          title: 'Costo de Producción',
          description: 'Si produces, calcula costo de materiales, mano de obra, overhead. Costo real por lote.'
        },
        {
          step: 3,
          title: 'Costo de Logística',
          description: 'Considera costos de almacenaje, manejo, transporte. Asigna a productos.'
        },
        {
          step: 4,
          title: 'Análisis de Margen',
          description: 'Compara costo real vs precio de venta. Identifica productos con bajo margen.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Distribuidora',
        description: 'Identifica productos no rentables',
        example: 'Vendes producto A a $100. Crees que te cuesta $70 (margen 30%). Pero el sistema calcula: compra $65 + flete $8 + almacenaje $5 + merma $4 = $82. Margen real es 18%, no 30%. Decides subir precio o negociar con proveedor.'
      },
      {
        title: 'Manufactura',
        description: 'Optimiza producción',
        example: 'Produces producto B. Costo estándar es $50. Pero costo real varía: lote 1 costó $48, lote 2 costó $55 (más merma). Identificas que el problema es en la operación 3. Optimizas y reduces costo real a $47.'
      },
      {
        title: 'Retail',
        description: 'Ajusta precios basado en costo real',
        example: 'Tienes 1000 productos. Sistema calcula margen real de cada uno. Descubres que 50 productos se venden a pérdida (costo > precio). Ajustas precios o descontinúas.'
      }
    ],
    
    related_modules: [
      'Inventario',
      'Compras',
      'Producción',
      'Ventas'
    ],
    
    related_industries: [
      'distribucion',
      'manufactura',
      'retail'
    ],
    
    success_metrics: [
      {
        metric: 'Margen Neto',
        improvement: '+5-10%',
        description: 'Mejor visibilidad = mejores decisiones'
      },
      {
        metric: 'Productos No Rentables Identificados',
        improvement: '100%',
        description: 'Sabes exactamente qué vendes a pérdida'
      },
      {
        metric: 'Tiempo de Análisis',
        improvement: '-90%',
        description: 'De semanas a minutos'
      }
    ],
    
    faqs: [
      {
        question: '¿Qué incluye el costo real?',
        answer: 'Costo de compra (con descuentos y fletes), costo de producción (materiales, mano de obra, overhead), costo de logística (almacenaje, manejo), y mermas.'
      },
      {
        question: '¿Funciona para productos comprados y producidos?',
        answer: 'Sí. Para productos comprados, usa costo de compra. Para productos producidos, calcula costo de producción basado en BOM y consumos reales.'
      },
      {
        question: '¿Puedo comparar costo real vs costo estándar?',
        answer: 'Sí. Puedes definir un costo estándar y el sistema compara vs costo real. Identifica variaciones.'
      },
      {
        question: '¿Se actualiza automáticamente?',
        answer: 'Sí. Cada compra, producción o ajuste actualiza el costo real automáticamente.'
      }
    ],
    
    cta: {
      title: '¿Conoces tu costo real?',
      description: 'Agenda una demo y te mostraremos cómo calcular costo real de tus productos.',
      button: 'Ver Demo de Costeo'
    }
  },
  
  {
    slug: 'integraciones',
    name: 'Integraciones',
    tagline: 'Conecta tu ERP con todo tu ecosistema',
    description: 'Integra con CRM, e-commerce, contabilidad, bancos, logística y más. Elimina doble captura y sincroniza datos en tiempo real.',
    icon: '🔗',
    
    overview: {
      title: '¿Por qué Integrar?',
      content: 'Tu ERP no vive solo. Necesitas conectarlo con CRM (Salesforce, HubSpot), e-commerce (Shopify, WooCommerce), contabilidad (QuickBooks), bancos, logística, y más. Las integraciones eliminan doble captura, sincronizan datos en tiempo real, y te dan una vista única de tu negocio.'
    },
    
    benefits: [
      {
        title: 'Elimina Doble Captura',
        description: 'Datos se capturan una vez y se sincronizan automáticamente. Ahorra tiempo y elimina errores.',
        icon: '⚡'
      },
      {
        title: 'Datos en Tiempo Real',
        description: 'Inventario, precios, clientes se sincronizan en tiempo real. Todos ven la misma información.',
        icon: '🔄'
      },
      {
        title: 'Vista Única del Cliente',
        description: 'CRM + ERP = vista completa del cliente. Historial de ventas, pagos, interacciones.',
        icon: '👤'
      },
      {
        title: 'Automatización',
        description: 'Workflows automáticos: pedido en e-commerce → orden en ERP → factura → envío.',
        icon: '🤖'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Define Integración',
          description: 'Selecciona qué sistema quieres integrar: CRM, e-commerce, contabilidad, etc.'
        },
        {
          step: 2,
          title: 'Configura Mapeo',
          description: 'Define qué datos se sincronizan y cómo se mapean entre sistemas.'
        },
        {
          step: 3,
          title: 'Sincronización Automática',
          description: 'Datos se sincronizan automáticamente en tiempo real o en intervalos definidos.'
        },
        {
          step: 4,
          title: 'Monitoreo',
          description: 'Dashboard muestra estado de integraciones. Alertas si hay errores.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'E-commerce + ERP',
        description: 'Sincroniza tienda online con ERP',
        example: 'Cliente compra en tu tienda Shopify. Pedido se crea automáticamente en ERP. Inventario se actualiza. Cuando envías, tracking se actualiza en Shopify. Cliente recibe notificación.'
      },
      {
        title: 'CRM + ERP',
        description: 'Vista completa del cliente',
        example: 'Vendedor ve oportunidad en Salesforce. Al cerrar, se convierte en cliente en ERP. Vendedor ve historial de compras, pagos, saldo. Todo en un solo lugar.'
      },
      {
        title: 'Bancos + ERP',
        description: 'Conciliación automática',
        example: 'Movimientos bancarios se importan automáticamente. Sistema sugiere conciliación con facturas pendientes. Reduces tiempo de conciliación 80%.'
      }
    ],
    
    related_modules: [
      'Ventas',
      'Inventario',
      'CXC',
      'Contabilidad'
    ],
    
    related_industries: [
      'distribucion',
      'retail',
      'servicios-profesionales'
    ],
    
    success_metrics: [
      {
        metric: 'Tiempo de Captura',
        improvement: '-70%',
        description: 'Elimina doble captura'
      },
      {
        metric: 'Errores de Datos',
        improvement: '-90%',
        description: 'Sincronización automática'
      },
      {
        metric: 'Tiempo de Conciliación',
        improvement: '-80%',
        description: 'Conciliación automática con bancos'
      }
    ],
    
    faqs: [
      {
        question: '¿Con qué sistemas integran?',
        answer: 'Integramos con Salesforce, HubSpot, Shopify, WooCommerce, Magento, QuickBooks, bancos (API bancaria), logística (FedEx, UPS), y más.'
      },
      {
        question: '¿La integración es en tiempo real?',
        answer: 'Depende del sistema. Algunas integraciones son en tiempo real (webhooks), otras son cada X minutos (polling).'
      },
      {
        question: '¿Qué pasa si hay un error en la integración?',
        answer: 'El sistema envía alertas si hay errores. Puedes ver log de integraciones y re-intentar manualmente si es necesario.'
      },
      {
        question: '¿Puedo integrar con sistemas custom?',
        answer: 'Sí. Tenemos API REST completa. Puedes integrar con cualquier sistema que tenga API.'
      }
    ],
    
    cta: {
      title: '¿Necesitas integrar tu ERP?',
      description: 'Agenda una demo y te mostraremos cómo conectar tu ERP con todo tu ecosistema.',
      button: 'Ver Integraciones'
    }
  },
  
  // Continue with remaining 6 capabilities...
  // For brevity, I'll add 2 more key ones
  
  {
    slug: 'reportes-bi',
    name: 'Reportes y Business Intelligence',
    tagline: 'Convierte datos en decisiones',
    description: 'Dashboards en tiempo real, reportes personalizados, análisis predictivo. Toma decisiones basadas en datos, no en intuición.',
    icon: '📊',
    
    overview: {
      title: '¿Qué es BI?',
      content: 'Business Intelligence (BI) es convertir datos en información útil para tomar decisiones. Incluye dashboards en tiempo real (ventas, inventario, finanzas), reportes personalizados, análisis de tendencias, y predicciones. El objetivo es que tomes decisiones basadas en datos reales, no en intuición.'
    },
    
    benefits: [
      {
        title: 'Visibilidad en Tiempo Real',
        description: 'Dashboards muestran KPIs en tiempo real. Sabes cómo va tu negocio en cualquier momento.',
        icon: '👁️'
      },
      {
        title: 'Identifica Tendencias',
        description: 'Análisis histórico muestra tendencias. Anticipas problemas y oportunidades.',
        icon: '📈'
      },
      {
        title: 'Decisiones Basadas en Datos',
        description: 'No más decisiones por intuición. Tienes números reales para respaldar decisiones.',
        icon: '🎯'
      },
      {
        title: 'Reportes Personalizados',
        description: 'Crea reportes específicos para tu negocio. Exporta a Excel, PDF, o programa envíos automáticos.',
        icon: '📄'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Dashboards Pre-Configurados',
          description: 'Dashboards listos para usar: ventas, inventario, finanzas, compras, producción.'
        },
        {
          step: 2,
          title: 'Reportes Personalizados',
          description: 'Crea reportes específicos con filtros, agrupaciones, gráficas.'
        },
        {
          step: 3,
          title: 'Análisis Drill-Down',
          description: 'Haz clic en cualquier número para ver el detalle. Drill-down hasta la transacción.'
        },
        {
          step: 4,
          title: 'Alertas Automáticas',
          description: 'Define alertas: si inventario < X, si ventas < Y, si margen < Z.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Dashboard de Ventas',
        description: 'Monitorea ventas en tiempo real',
        example: 'Dashboard muestra: ventas del día vs meta, productos más vendidos, vendedores top, clientes top. Haces clic en "ventas del día" y ves detalle por vendedor, por producto, por cliente.'
      },
      {
        title: 'Análisis de Rentabilidad',
        description: 'Identifica productos/clientes rentables',
        example: 'Reporte muestra margen por producto. Descubres que 20% de productos generan 80% del margen. Decides enfocarte en esos productos.'
      },
      {
        title: 'Forecast de Ventas',
        description: 'Predice ventas futuras',
        example: 'Sistema analiza ventas históricas y predice ventas de próximos 3 meses. Usas forecast para planificar compras y producción.'
      }
    ],
    
    related_modules: [
      'Ventas',
      'Inventario',
      'Finanzas',
      'Compras',
      'Producción'
    ],
    
    related_industries: [
      'distribucion',
      'manufactura',
      'retail',
      'holding'
    ],
    
    success_metrics: [
      {
        metric: 'Tiempo de Análisis',
        improvement: '-90%',
        description: 'De horas a minutos'
      },
      {
        metric: 'Decisiones Informadas',
        improvement: '+100%',
        description: 'Todas las decisiones con datos'
      },
      {
        metric: 'Identificación de Problemas',
        improvement: '10x más rápido',
        description: 'Alertas automáticas'
      }
    ],
    
    faqs: [
      {
        question: '¿Puedo crear mis propios reportes?',
        answer: 'Sí. Tienes un generador de reportes donde defines qué campos mostrar, filtros, agrupaciones, gráficas.'
      },
      {
        question: '¿Los dashboards son en tiempo real?',
        answer: 'Sí. Los dashboards se actualizan en tiempo real conforme hay transacciones.'
      },
      {
        question: '¿Puedo programar envío de reportes?',
        answer: 'Sí. Puedes programar reportes para que se envíen automáticamente por email (diario, semanal, mensual).'
      },
      {
        question: '¿Integra con herramientas de BI externas (Power BI, Tableau)?',
        answer: 'Sí. Puedes conectar Power BI o Tableau directamente a la base de datos del ERP.'
      }
    ],
    
    cta: {
      title: '¿Quieres tomar decisiones basadas en datos?',
      description: 'Agenda una demo y te mostraremos dashboards y reportes en acción.',
      button: 'Ver Demo de BI'
    }
  },
  
  {
    slug: 'mobile',
    name: 'Movilidad',
    tagline: 'Tu ERP en tu bolsillo',
    description: 'Apps móviles para vendedores, bodegueros, gerentes. Trabaja desde cualquier lugar, online u offline.',
    icon: '📱',
    
    overview: {
      title: '¿Por qué Movilidad?',
      content: 'Tu equipo no está siempre en la oficina. Vendedores en ruta, bodegueros en almacén, gerentes en viaje. Necesitan acceso al ERP desde su móvil. Apps móviles permiten tomar pedidos, consultar inventario, aprobar compras, ver dashboards, todo desde el celular. Funciona online y offline.'
    },
    
    benefits: [
      {
        title: 'Vendedores Más Productivos',
        description: 'Toman pedidos desde el cliente. Consultan inventario, precios, historial en tiempo real.',
        icon: '💼'
      },
      {
        title: 'Bodega Sin Papel',
        description: 'Bodegueros usan tablets para recibir, pickear, despachar. Escanean códigos de barras.',
        icon: '📦'
      },
      {
        title: 'Gerentes Informados',
        description: 'Gerentes ven dashboards desde cualquier lugar. Aprueban compras, revisan reportes.',
        icon: '👔'
      },
      {
        title: 'Funciona Offline',
        description: 'Apps funcionan sin internet. Se sincronizan automáticamente cuando hay conexión.',
        icon: '📡'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Descarga App',
          description: 'Apps disponibles en iOS y Android. Descarga desde App Store o Google Play.'
        },
        {
          step: 2,
          title: 'Inicia Sesión',
          description: 'Usa tus mismas credenciales del ERP. Permisos se respetan en móvil.'
        },
        {
          step: 3,
          title: 'Trabaja Offline',
          description: 'Toma pedidos, consulta inventario, incluso sin internet.'
        },
        {
          step: 4,
          title: 'Sincronización Automática',
          description: 'Cuando hay internet, datos se sincronizan automáticamente.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Vendedor en Ruta',
        description: 'Toma pedidos desde el cliente',
        example: 'Vendedor visita cliente. Abre app, consulta historial de compras, ve inventario disponible, toma pedido, cliente firma en tablet. Pedido se sincroniza con ERP automáticamente.'
      },
      {
        title: 'Bodeguero',
        description: 'Recepción y picking con tablet',
        example: 'Bodeguero recibe mercancía. Escanea código de barras con tablet, valida vs orden de compra, confirma recepción. Inventario se actualiza en tiempo real.'
      },
      {
        title: 'Gerente',
        description: 'Dashboards y aprobaciones desde móvil',
        example: 'Gerente está en viaje. Abre app, ve dashboard de ventas del día, revisa orden de compra pendiente, aprueba desde móvil.'
      }
    ],
    
    related_modules: [
      'Ventas',
      'Inventario',
      'Compras',
      'Dashboards'
    ],
    
    related_industries: [
      'distribucion',
      'retail',
      'servicios-profesionales'
    ],
    
    success_metrics: [
      {
        metric: 'Productividad de Vendedores',
        improvement: '+30%',
        description: 'Más pedidos por día'
      },
      {
        metric: 'Tiempo de Captura',
        improvement: '-50%',
        description: 'Captura en tiempo real'
      },
      {
        metric: 'Errores de Captura',
        improvement: '-80%',
        description: 'Escaneo de códigos de barras'
      }
    ],
    
    faqs: [
      {
        question: '¿Funciona sin internet?',
        answer: 'Sí. Las apps funcionan offline. Datos se sincronizan automáticamente cuando hay conexión.'
      },
      {
        question: '¿Está disponible para iOS y Android?',
        answer: 'Sí. Apps nativas para iOS y Android.'
      },
      {
        question: '¿Puedo escanear códigos de barras?',
        answer: 'Sí. Las apps usan la cámara del celular para escanear códigos de barras.'
      },
      {
        question: '¿Los permisos se respetan en móvil?',
        answer: 'Sí. Los mismos permisos del ERP aplican en móvil. Si no tienes permiso para ver precios, no los ves en móvil.'
      }
    ],
    
    cta: {
      title: '¿Tu equipo necesita movilidad?',
      description: 'Agenda una demo y te mostraremos las apps móviles en acción.',
      button: 'Ver Demo Móvil'
    }
  },
  
  {
    slug: 'automatizacion',
    name: 'Automatización de Procesos',
    tagline: 'Automatiza tareas repetitivas',
    description: 'Workflows automáticos, alertas inteligentes, aprobaciones digitales. Libera tiempo de tu equipo para tareas estratégicas.',
    icon: '🤖',
    
    overview: {
      title: '¿Qué es Automatización?',
      content: 'Automatización es hacer que el sistema ejecute tareas repetitivas sin intervención humana. Incluye: workflows (si pasa X, entonces hacer Y), alertas automáticas (si inventario < mínimo, avisar), aprobaciones digitales (orden de compra > $X requiere aprobación), y tareas programadas (enviar reporte cada lunes).'
    },
    
    benefits: [
      {
        title: 'Ahorra Tiempo',
        description: 'Tareas que tomaban horas ahora son automáticas. Tu equipo se enfoca en decisiones, no en data entry.',
        icon: '⏱️'
      },
      {
        title: 'Reduce Errores',
        description: 'Procesos automáticos no cometen errores humanos. Consistencia 100%.',
        icon: '✅'
      },
      {
        title: 'Mejora Cumplimiento',
        description: 'Workflows aseguran que procesos se sigan correctamente. Auditoría completa.',
        icon: '📋'
      },
      {
        title: 'Respuesta Rápida',
        description: 'Alertas automáticas permiten actuar inmediatamente ante problemas.',
        icon: '⚡'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Define Reglas',
          description: 'Define qué debe pasar automáticamente: si inventario < X, si venta > Y, si factura vence en Z días.'
        },
        {
          step: 2,
          title: 'Configura Acciones',
          description: 'Define qué hacer: enviar email, crear orden, solicitar aprobación, actualizar campo.'
        },
        {
          step: 3,
          title: 'Sistema Ejecuta',
          description: 'Sistema monitorea condiciones y ejecuta acciones automáticamente.'
        },
        {
          step: 4,
          title: 'Log de Auditoría',
          description: 'Todo queda registrado: qué se ejecutó, cuándo, por qué.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Reposición Automática',
        description: 'Genera órdenes de compra automáticamente',
        example: 'Defines: si inventario de producto X < 100 unidades, crear orden de compra de 500 unidades al proveedor Y. Sistema monitorea inventario y genera órdenes automáticamente.'
      },
      {
        title: 'Aprobaciones Digitales',
        description: 'Workflow de aprobación de compras',
        example: 'Defines: órdenes de compra > $10,000 requieren aprobación de gerente. Sistema envía notificación a gerente, gerente aprueba desde móvil, orden se procesa automáticamente.'
      },
      {
        title: 'Alertas de Cobranza',
        description: 'Recordatorios automáticos de pago',
        example: 'Defines: 3 días antes de vencimiento, enviar recordatorio. Día de vencimiento, enviar estado de cuenta. 7 días después, bloquear cliente. Todo automático.'
      }
    ],
    
    related_modules: [
      'Compras',
      'Ventas',
      'Inventario',
      'CXC'
    ],
    
    related_industries: [
      'distribucion',
      'manufactura',
      'retail',
      'servicios-profesionales'
    ],
    
    success_metrics: [
      {
        metric: 'Tiempo en Tareas Manuales',
        improvement: '-60%',
        description: 'Automatización libera tiempo'
      },
      {
        metric: 'Errores de Proceso',
        improvement: '-90%',
        description: 'Procesos automáticos son consistentes'
      },
      {
        metric: 'Tiempo de Respuesta',
        improvement: '-80%',
        description: 'Alertas permiten actuar inmediatamente'
      }
    ],
    
    faqs: [
      {
        question: '¿Puedo crear mis propios workflows?',
        answer: 'Sí. Tienes un diseñador de workflows donde defines condiciones y acciones sin programar.'
      },
      {
        question: '¿Las alertas se envían por email o dentro del sistema?',
        answer: 'Ambas. Puedes configurar alertas por email, notificaciones push en móvil, o notificaciones dentro del sistema.'
      },
      {
        question: '¿Puedo automatizar cualquier proceso?',
        answer: 'La mayoría. Procesos comunes (reposición, aprobaciones, alertas) son fáciles de automatizar. Procesos complejos pueden requerir desarrollo custom.'
      }
    ],
    
    cta: {
      title: '¿Quieres automatizar tus procesos?',
      description: 'Agenda una demo y te mostraremos workflows y automatizaciones en acción.',
      button: 'Ver Demo de Automatización'
    }
  },
  
  {
    slug: 'seguridad',
    name: 'Seguridad y Control de Acceso',
    tagline: 'Protege tu información crítica',
    description: 'Control granular de permisos, auditoría completa, encriptación, backups automáticos. Tu información segura 24/7.',
    icon: '🔒',
    
    overview: {
      title: '¿Por qué Seguridad?',
      content: 'Tu ERP contiene información crítica: clientes, proveedores, precios, costos, finanzas. Necesitas protegerla. Seguridad incluye: control de acceso (quién puede ver/editar qué), auditoría (quién hizo qué y cuándo), encriptación (datos protegidos), y backups (recuperación ante desastres).'
    },
    
    benefits: [
      {
        title: 'Control Total',
        description: 'Define exactamente qué puede hacer cada usuario. Permisos granulares por módulo, por función.',
        icon: '🎯'
      },
      {
        title: 'Auditoría Completa',
        description: 'Log de todas las acciones: quién creó, modificó, eliminó cada registro. Cuándo y desde dónde.',
        icon: '📝'
      },
      {
        title: 'Datos Protegidos',
        description: 'Encriptación de datos sensibles. Backups automáticos diarios. Recuperación ante desastres.',
        icon: '🛡️'
      },
      {
        title: 'Cumplimiento',
        description: 'Cumple SOC 2, ISO 27001, GDPR. Auditorías sin estrés.',
        icon: '✅'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Define Roles',
          description: 'Crea roles: Administrador, Gerente, Vendedor, Bodeguero. Define permisos por rol.'
        },
        {
          step: 2,
          title: 'Asigna Usuarios',
          description: 'Asigna usuarios a roles. Usuarios heredan permisos del rol.'
        },
        {
          step: 3,
          title: 'Sistema Valida',
          description: 'Sistema valida permisos en cada acción. Si no tienes permiso, no puedes ejecutar.'
        },
        {
          step: 4,
          title: 'Auditoría Automática',
          description: 'Todas las acciones quedan registradas en log de auditoría.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Control de Acceso por Rol',
        description: 'Vendedores solo ven su información',
        example: 'Vendedor A solo ve sus clientes, sus pedidos, sus comisiones. No ve información de Vendedor B. Gerente ve todo. Bodeguero solo ve inventario y órdenes de salida.'
      },
      {
        title: 'Auditoría de Cambios',
        description: 'Rastrea quién modificó precios',
        example: 'Gerente nota que precio de producto X cambió. Revisa log de auditoría y ve que Usuario Y cambió el precio de $100 a $80 el día Z a las 14:35. Puede revertir cambio si es necesario.'
      },
      {
        title: 'Recuperación ante Desastres',
        description: 'Backup automático diario',
        example: 'Servidor falla. Restauras desde backup de ayer. Pierdes máximo 1 día de información (si no tienes backup en tiempo real).'
      }
    ],
    
    related_modules: [
      'Todos los módulos'
    ],
    
    related_industries: [
      'distribucion',
      'manufactura',
      'retail',
      'holding',
      'servicios-profesionales',
      'salud'
    ],
    
    success_metrics: [
      {
        metric: 'Incidentes de Seguridad',
        improvement: '-95%',
        description: 'Control de acceso previene accesos no autorizados'
      },
      {
        metric: 'Tiempo de Auditoría',
        improvement: '-80%',
        description: 'Log automático, no búsqueda manual'
      },
      {
        metric: 'Recuperación ante Desastres',
        improvement: '< 4 horas',
        description: 'Backups automáticos permiten recuperación rápida'
      }
    ],
    
    faqs: [
      {
        question: '¿Puedo definir permisos granulares?',
        answer: 'Sí. Puedes definir permisos a nivel de módulo, función, campo. Ejemplo: usuario puede ver ventas pero no puede ver costos.'
      },
      {
        question: '¿El log de auditoría es inmutable?',
        answer: 'Sí. El log de auditoría no se puede modificar ni eliminar. Garantiza integridad.'
      },
      {
        question: '¿Los backups son automáticos?',
        answer: 'Sí. Backups diarios automáticos. Puedes configurar backups más frecuentes si es necesario.'
      },
      {
        question: '¿Cumplen con regulaciones (GDPR, SOC 2)?',
        answer: 'Sí. El sistema cumple con SOC 2, ISO 27001, GDPR. Tenemos certificaciones disponibles.'
      }
    ],
    
    cta: {
      title: '¿Necesitas proteger tu información?',
      description: 'Agenda una demo y te mostraremos cómo aseguramos tu ERP.',
      button: 'Ver Demo de Seguridad'
    }
  },
  
  {
    slug: 'escalabilidad',
    name: 'Escalabilidad',
    tagline: 'Crece sin límites',
    description: 'Arquitectura cloud nativa. Escala de 10 a 10,000 usuarios sin cambiar de sistema. Performance garantizado.',
    icon: '📈',
    
    overview: {
      title: '¿Qué es Escalabilidad?',
      content: 'Escalabilidad es la capacidad del sistema de crecer contigo. Si hoy tienes 10 usuarios y en 2 años tienes 100, el sistema debe seguir funcionando igual de rápido. Si hoy procesas 1,000 transacciones/día y mañana 10,000, el sistema debe aguantar. Arquitectura cloud nativa garantiza escalabilidad ilimitada.'
    },
    
    benefits: [
      {
        title: 'Crece Sin Límites',
        description: 'De 10 a 10,000 usuarios. De 1 empresa a 100 empresas. El sistema escala automáticamente.',
        icon: '🚀'
      },
      {
        title: 'Performance Garantizado',
        description: 'No importa cuánto crezcas, el sistema sigue siendo rápido. SLA de 99.9% uptime.',
        icon: '⚡'
      },
      {
        title: 'Sin Re-Implementaciones',
        description: 'No necesitas cambiar de sistema al crecer. El mismo sistema te acompaña desde startup hasta enterprise.',
        icon: '✅'
      },
      {
        title: 'Costo Predecible',
        description: 'Pagas por lo que usas. Si creces, pagas más. Si decreces, pagas menos.',
        icon: '💰'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Arquitectura Cloud Nativa',
          description: 'Sistema diseñado para cloud desde el inicio. No es un sistema on-premise "migrado" a cloud.'
        },
        {
          step: 2,
          title: 'Auto-Scaling',
          description: 'Sistema escala automáticamente según demanda. Más usuarios = más recursos automáticamente.'
        },
        {
          step: 3,
          title: 'Load Balancing',
          description: 'Tráfico se distribuye automáticamente entre servidores. No hay cuellos de botella.'
        },
        {
          step: 4,
          title: 'Monitoreo 24/7',
          description: 'Sistema monitoreado 24/7. Alertas automáticas si hay problemas de performance.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Startup a Enterprise',
        description: 'Crece de 10 a 500 empleados',
        example: 'Empiezas con 10 usuarios, 1 bodega, 100 clientes. En 3 años tienes 500 usuarios, 20 bodegas, 10,000 clientes. El mismo sistema, sin re-implementación.'
      },
      {
        title: 'Expansión Geográfica',
        description: 'Abre operaciones en nuevos países',
        example: 'Empiezas en México. Abres operación en Colombia, Perú, Chile. Agregas empresas al sistema, cada una con su moneda, idioma, regulaciones. Sistema escala sin problema.'
      },
      {
        title: 'Picos de Demanda',
        description: 'Black Friday, temporada alta',
        example: 'Normalmente procesas 1,000 pedidos/día. En Black Friday procesas 10,000. Sistema escala automáticamente para manejar el pico.'
      }
    ],
    
    related_modules: [
      'Todos los módulos'
    ],
    
    related_industries: [
      'distribucion',
      'manufactura',
      'retail',
      'holding',
      'logistica'
    ],
    
    success_metrics: [
      {
        metric: 'Uptime',
        improvement: '99.9%',
        description: 'SLA garantizado'
      },
      {
        metric: 'Tiempo de Respuesta',
        improvement: '< 200ms',
        description: 'Incluso con 1000+ usuarios concurrentes'
      },
      {
        metric: 'Costo de Escalamiento',
        improvement: 'Lineal',
        description: 'Costo crece linealmente con uso, no exponencialmente'
      }
    ],
    
    faqs: [
      {
        question: '¿Cuántos usuarios puede manejar el sistema?',
        answer: 'Ilimitados. Tenemos clientes con 10 usuarios y otros con 5,000+. El sistema escala automáticamente.'
      },
      {
        question: '¿Qué pasa si tengo un pico de demanda?',
        answer: 'El sistema escala automáticamente. Si normalmente tienes 100 usuarios y un día tienes 500, el sistema asigna más recursos automáticamente.'
      },
      {
        question: '¿Necesito planear capacidad?',
        answer: 'No. El sistema escala automáticamente según demanda. No necesitas "comprar" capacidad por adelantado.'
      },
      {
        question: '¿Qué SLA ofrecen?',
        answer: '99.9% uptime garantizado. Si no cumplimos, hay créditos automáticos.'
      }
    ],
    
    cta: {
      title: '¿Planeas crecer?',
      description: 'Agenda una demo y te mostraremos cómo el sistema escala contigo.',
      button: 'Ver Demo de Escalabilidad'
    }
  },
  
  {
    slug: 'soporte',
    name: 'Soporte y Capacitación',
    tagline: 'Nunca estás solo',
    description: 'Soporte 24/7, capacitación continua, documentación completa, comunidad activa. Éxito garantizado.',
    icon: '🎓',
    
    overview: {
      title: '¿Por qué Soporte Importa?',
      content: 'Un ERP es una inversión importante. Necesitas apoyo para implementarlo correctamente, capacitar a tu equipo, y resolver problemas rápidamente. Soporte incluye: ayuda técnica 24/7, capacitación inicial y continua, documentación completa, y comunidad de usuarios.'
    },
    
    benefits: [
      {
        title: 'Soporte 24/7',
        description: 'Equipo de soporte disponible 24/7 por chat, email, teléfono. Respuesta en < 1 hora.',
        icon: '🕐'
      },
      {
        title: 'Capacitación Completa',
        description: 'Capacitación inicial para todo el equipo. Capacitación continua en nuevas funcionalidades.',
        icon: '📚'
      },
      {
        title: 'Documentación',
        description: 'Documentación completa: guías de usuario, videos, FAQs. Siempre actualizada.',
        icon: '📖'
      },
      {
        title: 'Comunidad',
        description: 'Comunidad activa de usuarios. Comparte mejores prácticas, resuelve dudas.',
        icon: '👥'
      }
    ],
    
    how_it_works: {
      title: '¿Cómo Funciona?',
      steps: [
        {
          step: 1,
          title: 'Implementación Guiada',
          description: 'Equipo de implementación te acompaña desde el inicio. Define procesos, configura sistema, migra datos.'
        },
        {
          step: 2,
          title: 'Capacitación Inicial',
          description: 'Capacitación completa para todo el equipo. Presencial o remota. Incluye material de apoyo.'
        },
        {
          step: 3,
          title: 'Go-Live con Acompañamiento',
          description: 'Equipo de soporte presente durante go-live. Resuelve problemas en tiempo real.'
        },
        {
          step: 4,
          title: 'Soporte Continuo',
          description: 'Soporte 24/7 disponible. Capacitación continua en nuevas funcionalidades.'
        }
      ]
    },
    
    use_cases: [
      {
        title: 'Implementación Exitosa',
        description: 'De 0 a productivo en 90 días',
        example: 'Día 1-30: Análisis y configuración. Día 30-60: Migración de datos y capacitación. Día 60-90: Pruebas y go-live. Equipo de soporte presente todo el tiempo.'
      },
      {
        title: 'Resolución Rápida de Problemas',
        description: 'Soporte responde en < 1 hora',
        example: 'Usuario tiene problema con facturación. Abre ticket en sistema. Equipo de soporte responde en 30 minutos. Problema resuelto en 2 horas.'
      },
      {
        title: 'Capacitación Continua',
        description: 'Mantén al equipo actualizado',
        example: 'Sistema lanza nueva funcionalidad (ej: integración con e-commerce). Equipo de capacitación ofrece webinar gratuito. Usuarios aprenden a usar nueva funcionalidad.'
      }
    ],
    
    related_modules: [
      'Todos los módulos'
    ],
    
    related_industries: [
      'distribucion',
      'manufactura',
      'retail',
      'holding',
      'servicios-profesionales',
      'salud',
      'construccion',
      'logistica'
    ],
    
    success_metrics: [
      {
        metric: 'Tiempo de Respuesta',
        improvement: '< 1 hora',
        description: 'Soporte responde en menos de 1 hora'
      },
      {
        metric: 'Tasa de Resolución',
        improvement: '95%',
        description: '95% de tickets resueltos en primera interacción'
      },
      {
        metric: 'Satisfacción de Clientes',
        improvement: '4.8/5',
        description: 'NPS de 80+'
      }
    ],
    
    faqs: [
      {
        question: '¿El soporte es 24/7?',
        answer: 'Sí. Equipo de soporte disponible 24/7 por chat, email, teléfono. Respuesta garantizada en < 1 hora.'
      },
      {
        question: '¿La capacitación está incluida?',
        answer: 'Sí. Capacitación inicial está incluida en la implementación. Capacitación continua disponible (webinars gratuitos).'
      },
      {
        question: '¿Hay documentación en español?',
        answer: 'Sí. Toda la documentación está en español (y en inglés). Incluye guías de usuario, videos, FAQs.'
      },
      {
        question: '¿Puedo hablar con otros usuarios?',
        answer: 'Sí. Tenemos comunidad activa de usuarios. Puedes compartir mejores prácticas, resolver dudas.'
      }
    ],
    
    cta: {
      title: '¿Necesitas apoyo para tu ERP?',
      description: 'Agenda una demo y conoce a nuestro equipo de soporte y capacitación.',
      button: 'Conocer Equipo de Soporte'
    }
  }
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find(c => c.slug === slug);
}

export function getAllCapabilities(): Capability[] {
  return capabilities;
}

export function getCapabilitiesByIndustry(industry: string): Capability[] {
  return capabilities.filter(c => c.related_industries.includes(industry));
}

export function getCapabilitiesByModule(module: string): Capability[] {
  return capabilities.filter(c => c.related_modules.includes(module));
}
