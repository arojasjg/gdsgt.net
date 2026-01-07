/**
 * Industry Content (Spanish)
 * 
 * Industry-specific ERP content for SEO and conversion
 */

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  
  // Pain points specific to this industry
  challenges: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  
  // How ERP solves these challenges
  solutions: Array<{
    title: string;
    description: string;
    benefit: string;
  }>;
  
  // Recommended modules for this industry
  recommended_modules: string[];
  
  // Key features for this industry
  key_features: Array<{
    name: string;
    description: string;
  }>;
  
  // Use cases / workflows
  use_cases: Array<{
    title: string;
    description: string;
    steps: string[];
  }>;
  
  // Success metrics
  success_metrics: Array<{
    metric: string;
    improvement: string;
    description: string;
  }>;
  
  // FAQs specific to this industry
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

export const industries: Industry[] = [
  {
    slug: 'distribucion',
    name: 'Distribución',
    tagline: 'ERP para Empresas de Distribución',
    description: 'Gestiona tu operación de distribución de principio a fin: compras, inventario multi-bodega, ventas, entregas, cobranza y análisis. Todo en un solo sistema.',
    
    challenges: [
      {
        title: 'Inventario Desactualizado',
        description: 'No sabes qué tienes en cada bodega en tiempo real. Vendes productos que no tienes o compras lo que ya tienes.',
        icon: '📦'
      },
      {
        title: 'Rutas Ineficientes',
        description: 'Planificación manual de rutas. Entregas tardías, costos de combustible altos, clientes insatisfechos.',
        icon: '🚚'
      },
      {
        title: 'Cartera Vencida',
        description: 'No tienes visibilidad de qué clientes deben, cuánto y desde cuándo. Cobras reactivamente, no proactivamente.',
        icon: '💰'
      },
      {
        title: 'Márgenes Bajos',
        description: 'No sabes qué productos son rentables. Vendes sin conocer tu costo real (compra + logística + merma).',
        icon: '📉'
      }
    ],
    
    solutions: [
      {
        title: 'Inventario en Tiempo Real',
        description: 'Ve stock disponible, comprometido y en tránsito por bodega, lote y fecha de vencimiento.',
        benefit: 'Reduce inventario 20-30% sin perder ventas'
      },
      {
        title: 'Gestión de Rutas',
        description: 'Planifica rutas óptimas, asigna pedidos a vendedores, rastrea entregas en tiempo real.',
        benefit: 'Reduce costos de entrega 15-25%'
      },
      {
        title: 'Cobranza Inteligente',
        description: 'Alertas automáticas de vencimientos, estados de cuenta actualizados, bloqueo de clientes morosos.',
        benefit: 'Reduce días de cartera 30-40%'
      },
      {
        title: 'Análisis de Rentabilidad',
        description: 'Costo real por producto (compra + logística + merma), margen por cliente, por vendedor, por zona.',
        benefit: 'Aumenta margen neto 5-10%'
      }
    ],
    
    recommended_modules: [
      'Compras',
      'Inventario Multi-Bodega',
      'Ventas',
      'CXC (Cuentas por Cobrar)',
      'Logística',
      'Análisis de Rentabilidad'
    ],
    
    key_features: [
      {
        name: 'Multi-Bodega',
        description: 'Gestiona inventario en múltiples bodegas, sucursales o centros de distribución. Transferencias automáticas.'
      },
      {
        name: 'Lotes y Vencimientos',
        description: 'Rastreo de lotes, fechas de vencimiento, FEFO (First Expired, First Out). Alertas de productos próximos a vencer.'
      },
      {
        name: 'Precios Dinámicos',
        description: 'Listas de precios por cliente, por zona, por volumen. Descuentos automáticos, promociones, combos.'
      },
      {
        name: 'Rutas de Entrega',
        description: 'Planificación de rutas, asignación de pedidos, tracking GPS, confirmación de entrega con firma digital.'
      },
      {
        name: 'Cobranza Automatizada',
        description: 'Envío automático de estados de cuenta, recordatorios de pago, bloqueo de clientes morosos.'
      },
      {
        name: 'BI para Distribución',
        description: 'Dashboards de ventas por vendedor, por zona, por producto. Análisis de rotación, margen, cartera.'
      }
    ],
    
    use_cases: [
      {
        title: 'Flujo de Pedido a Entrega',
        description: 'Desde que el vendedor toma el pedido hasta que se entrega y cobra',
        steps: [
          'Vendedor toma pedido en tablet (online/offline)',
          'Sistema verifica stock disponible y crédito del cliente',
          'Pedido se envía automáticamente a bodega',
          'Bodega prepara pedido (picking list)',
          'Sistema asigna pedido a ruta de entrega',
          'Chofer entrega y captura firma digital',
          'Sistema genera factura y actualiza CXC',
          'Cliente recibe factura por email/WhatsApp'
        ]
      },
      {
        title: 'Reposición Automática de Inventario',
        description: 'Mantén niveles óptimos de stock sin sobre-inventario',
        steps: [
          'Sistema calcula punto de reorden por producto',
          'Genera sugerencia de compra basada en ventas históricas',
          'Considera lead time de proveedor y stock de seguridad',
          'Envía orden de compra automática a proveedor',
          'Rastrea recepción y actualiza inventario',
          'Distribuye automáticamente a bodegas según demanda'
        ]
      },
      {
        title: 'Gestión de Cobranza',
        description: 'Cobra más rápido y reduce cartera vencida',
        steps: [
          'Sistema envía recordatorio 3 días antes de vencimiento',
          'Envía estado de cuenta el día de vencimiento',
          'Bloquea automáticamente cliente si pasa X días de mora',
          'Genera reporte de cartera por vendedor/cobrador',
          'Envía alertas a gerencia de cuentas críticas',
          'Permite aplicar pagos desde app móvil'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Rotación de Inventario',
        improvement: '+30-40%',
        description: 'Menos capital inmovilizado, menos obsolescencia'
      },
      {
        metric: 'Días de Cartera',
        improvement: '-30-40%',
        description: 'Cobras más rápido, mejor flujo de caja'
      },
      {
        metric: 'Costo de Entrega',
        improvement: '-15-25%',
        description: 'Rutas optimizadas, menos combustible'
      },
      {
        metric: 'Margen Neto',
        improvement: '+5-10%',
        description: 'Mejor visibilidad de costos reales'
      },
      {
        metric: 'Tiempo de Facturación',
        improvement: '-70%',
        description: 'De horas a minutos'
      }
    ],
    
    faqs: [
      {
        question: '¿Funciona offline para vendedores en ruta?',
        answer: 'Sí. La app móvil funciona offline. Los vendedores pueden tomar pedidos sin internet y se sincronizan automáticamente cuando hay conexión.'
      },
      {
        question: '¿Puedo integrar con mi sistema de GPS?',
        answer: 'Sí. Integramos con sistemas de rastreo GPS para tracking en tiempo real de entregas.'
      },
      {
        question: '¿Maneja múltiples listas de precios?',
        answer: 'Sí. Puedes tener listas de precios por cliente, por zona, por volumen, con descuentos automáticos y promociones.'
      },
      {
        question: '¿Cómo maneja productos con vencimiento?',
        answer: 'El sistema rastrea lotes y fechas de vencimiento. Aplica FEFO (First Expired, First Out) automáticamente y envía alertas de productos próximos a vencer.'
      },
      {
        question: '¿Puedo ver en tiempo real qué tiene cada vendedor?',
        answer: 'Sí. Ves inventario por bodega, por vendedor (si llevan inventario), y pedidos pendientes de entrega en tiempo real.'
      }
    ],
    
    cta: {
      title: '¿Listo para optimizar tu distribución?',
      description: 'Agenda una demo y te mostraremos el sistema funcionando con datos de ejemplo de una distribuidora.',
      button: 'Ver Demo para Distribución'
    }
  },
  
  {
    slug: 'manufactura',
    name: 'Manufactura',
    tagline: 'ERP para Empresas Manufactureras',
    description: 'Controla tu producción de principio a fin: BOM, órdenes de producción, consumo de materiales, costos reales, inventario de PT/MP/PP y análisis de eficiencia.',
    
    challenges: [
      {
        title: 'Costos Desconocidos',
        description: 'No sabes cuánto te cuesta realmente producir cada producto. Vendes sin conocer tu margen real.',
        icon: '💸'
      },
      {
        title: 'Inventario Descontrolado',
        description: 'No sabes qué materia prima tienes, qué está en proceso o qué producto terminado hay disponible.',
        icon: '📦'
      },
      {
        title: 'Producción Ineficiente',
        description: 'No mides eficiencia de líneas de producción. No sabes dónde están los cuellos de botella.',
        icon: '⚙️'
      },
      {
        title: 'Planificación Manual',
        description: 'Planificas producción en Excel. No consideras capacidad, materiales disponibles ni prioridades.',
        icon: '📋'
      }
    ],
    
    solutions: [
      {
        title: 'Costeo Real',
        description: 'Calcula costo real de producción: materiales, mano de obra, overhead. Compara vs costo estándar.',
        benefit: 'Identifica productos no rentables'
      },
      {
        title: 'Control de Inventario',
        description: 'Inventario separado de MP, PP, PT. Rastreo de lotes, consumo real vs teórico, mermas.',
        benefit: 'Reduce inventario 20-30%'
      },
      {
        title: 'MES (Manufacturing Execution)',
        description: 'Captura datos de producción en tiempo real. Mide eficiencia, tiempos muertos, rechazos.',
        benefit: 'Aumenta eficiencia 15-25%'
      },
      {
        title: 'MRP (Material Requirements Planning)',
        description: 'Planifica producción basada en demanda. Calcula necesidades de materiales automáticamente.',
        benefit: 'Reduce faltantes 80%'
      }
    ],
    
    recommended_modules: [
      'BOM (Bill of Materials)',
      'Órdenes de Producción',
      'Control de Calidad',
      'Inventario (MP/PP/PT)',
      'Costeo',
      'MRP'
    ],
    
    key_features: [
      {
        name: 'BOM Multi-Nivel',
        description: 'Define recetas de producción con múltiples niveles. Sub-ensambles, alternativas, versiones.'
      },
      {
        name: 'Órdenes de Producción',
        description: 'Crea órdenes de producción, asigna materiales, captura consumo real, calcula costos.'
      },
      {
        name: 'Costeo por Lote',
        description: 'Calcula costo real por lote de producción. Compara vs costo estándar, identifica variaciones.'
      },
      {
        name: 'Control de Calidad',
        description: 'Define planes de inspección, captura resultados, bloquea lotes no conformes.'
      },
      {
        name: 'MRP',
        description: 'Planifica producción basada en demanda. Calcula necesidades de materiales, genera órdenes de compra.'
      },
      {
        name: 'Dashboards de Producción',
        description: 'Eficiencia por línea, por turno. Tiempos muertos, rechazos, OEE (Overall Equipment Effectiveness).'
      }
    ],
    
    use_cases: [
      {
        title: 'Flujo de Producción',
        description: 'Desde orden de producción hasta producto terminado',
        steps: [
          'Ventas genera orden de producción (manual o automática)',
          'Sistema verifica materiales disponibles (MP)',
          'Genera lista de materiales a consumir (picking list)',
          'Bodega entrega materiales a producción',
          'Producción captura inicio de orden',
          'Captura consumo real de materiales',
          'Captura tiempos de producción por operación',
          'Control de calidad inspecciona',
          'Sistema calcula costo real y genera PT',
          'PT pasa a bodega disponible para venta'
        ]
      },
      {
        title: 'Planificación con MRP',
        description: 'Planifica producción basada en demanda',
        steps: [
          'Sistema analiza pedidos de venta pendientes',
          'Calcula necesidades de PT (producto terminado)',
          'Explota BOM para calcular necesidades de MP',
          'Considera inventario disponible y en tránsito',
          'Genera sugerencias de órdenes de producción',
          'Genera sugerencias de órdenes de compra',
          'Considera capacidad de producción y lead times',
          'Permite ajustar plan manualmente'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Eficiencia de Producción',
        improvement: '+15-25%',
        description: 'Menos tiempos muertos, mejor planificación'
      },
      {
        metric: 'Costo de Producción',
        improvement: '-10-15%',
        description: 'Mejor control de consumos y mermas'
      },
      {
        metric: 'Inventario de MP',
        improvement: '-20-30%',
        description: 'Compras basadas en necesidades reales'
      },
      {
        metric: 'Cumplimiento de Entregas',
        improvement: '+30%',
        description: 'Mejor planificación, menos faltantes'
      }
    ],
    
    faqs: [
      {
        question: '¿Maneja BOM multi-nivel?',
        answer: 'Sí. Puedes definir recetas con múltiples niveles de sub-ensambles. El sistema explota automáticamente para calcular necesidades de materiales.'
      },
      {
        question: '¿Calcula costo real de producción?',
        answer: 'Sí. Calcula costo real basado en consumo real de materiales, mano de obra y overhead. Compara vs costo estándar y muestra variaciones.'
      },
      {
        question: '¿Tiene MRP?',
        answer: 'Sí. El módulo MRP planifica producción basada en demanda, calcula necesidades de materiales y genera sugerencias de órdenes de compra.'
      },
      {
        question: '¿Puedo capturar datos de producción en tiempo real?',
        answer: 'Sí. Con tablets o terminales en planta, los operadores pueden capturar inicio/fin de operaciones, consumos, rechazos en tiempo real.'
      }
    ],
    
    cta: {
      title: '¿Listo para controlar tu producción?',
      description: 'Agenda una demo y te mostraremos cómo empresas manufactureras optimizan su producción con GDS ONE.',
      button: 'Ver Demo para Manufactura'
    }
  },
  
  // Continue with remaining 6 industries...
  // (Retail, Servicios Profesionales, Holding, Salud, Construcción, Logística)
  // For brevity, I'll add 2 more and you can expand the rest
  
  {
    slug: 'retail',
    name: 'Retail',
    tagline: 'ERP para Empresas de Retail',
    description: 'Gestiona tu retail de principio a fin: punto de venta, inventario multi-sucursal, compras, precios dinámicos, promociones y análisis de ventas.',
    
    challenges: [
      {
        title: 'Inventario Desincronizado',
        description: 'El inventario en sistema no coincide con el físico. Vendes productos que no tienes.',
        icon: '📦'
      },
      {
        title: 'Precios Desactualizados',
        description: 'Cambios de precio no se reflejan en todas las sucursales. Vendes a precio incorrecto.',
        icon: '💰'
      },
      {
        title: 'Sin Visibilidad Multi-Sucursal',
        description: 'No sabes qué sucursal vende más, qué productos rotan mejor, dónde hay sobre-stock.',
        icon: '🏪'
      },
      {
        title: 'Promociones Manuales',
        description: 'Aplicar promociones es manual y propenso a errores. No puedes hacer promociones complejas.',
        icon: '🎁'
      }
    ],
    
    solutions: [
      {
        title: 'Inventario en Tiempo Real',
        description: 'Cada venta actualiza inventario instantáneamente. Ve stock por sucursal en tiempo real.',
        benefit: 'Reduce quiebres de stock 80%'
      },
      {
        title: 'Precios Centralizados',
        description: 'Actualiza precios desde oficina central. Se replican automáticamente a todas las sucursales.',
        benefit: 'Elimina errores de precio'
      },
      {
        title: 'BI Multi-Sucursal',
        description: 'Compara ventas por sucursal, por producto, por vendedor. Identifica mejores prácticas.',
        benefit: 'Aumenta ventas 15-20%'
      },
      {
        title: 'Motor de Promociones',
        description: 'Crea promociones complejas: 2x1, descuentos por volumen, combos. Se aplican automáticamente.',
        benefit: 'Aumenta ticket promedio 10-15%'
      }
    ],
    
    recommended_modules: [
      'Punto de Venta (POS)',
      'Inventario Multi-Sucursal',
      'Precios y Promociones',
      'Compras',
      'BI Retail',
      'E-commerce (integración)'
    ],
    
    key_features: [
      {
        name: 'POS Moderno',
        description: 'Punto de venta rápido, intuitivo. Funciona offline. Integra con lectores de código de barras, impresoras fiscales.'
      },
      {
        name: 'Multi-Sucursal',
        description: 'Gestiona múltiples sucursales desde un solo sistema. Transferencias entre sucursales, inventario consolidado.'
      },
      {
        name: 'Promociones Automáticas',
        description: '2x1, 3x2, descuentos por volumen, combos, cupones. Se aplican automáticamente en POS.'
      },
      {
        name: 'Programa de Lealtad',
        description: 'Acumula puntos por compra, canjea por productos. Identifica clientes frecuentes.'
      },
      {
        name: 'Integración E-commerce',
        description: 'Sincroniza inventario con tienda online. Pedidos online se procesan automáticamente.'
      },
      {
        name: 'Análisis de Ventas',
        description: 'Ventas por hora, por día, por sucursal. Productos más vendidos, margen por categoría.'
      }
    ],
    
    use_cases: [
      {
        title: 'Venta en Sucursal',
        description: 'Flujo de venta en punto de venta',
        steps: [
          'Cliente llega a caja con productos',
          'Cajero escanea códigos de barras',
          'Sistema aplica promociones automáticamente',
          'Cliente paga (efectivo, tarjeta, transferencia)',
          'Sistema imprime factura fiscal',
          'Inventario se actualiza en tiempo real',
          'Venta se refleja en dashboards inmediatamente'
        ]
      },
      {
        title: 'Reposición de Inventario',
        description: 'Mantén niveles óptimos en cada sucursal',
        steps: [
          'Sistema analiza ventas por sucursal',
          'Identifica productos con bajo stock',
          'Genera sugerencia de transferencia entre sucursales',
          'O genera orden de compra si no hay stock en otras sucursales',
          'Bodega central prepara transferencia',
          'Sucursal recibe y actualiza inventario',
          'Sistema confirma recepción automáticamente'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Quiebres de Stock',
        improvement: '-80%',
        description: 'Siempre tienes lo que el cliente busca'
      },
      {
        metric: 'Ticket Promedio',
        improvement: '+10-15%',
        description: 'Promociones aumentan venta por cliente'
      },
      {
        metric: 'Rotación de Inventario',
        improvement: '+25-35%',
        description: 'Menos inventario obsoleto'
      },
      {
        metric: 'Tiempo de Cierre de Caja',
        improvement: '-70%',
        description: 'De 30 minutos a 5 minutos'
      }
    ],
    
    faqs: [
      {
        question: '¿El POS funciona offline?',
        answer: 'Sí. El POS funciona sin internet. Las ventas se sincronizan automáticamente cuando hay conexión.'
      },
      {
        question: '¿Integra con impresoras fiscales?',
        answer: 'Sí. Integramos con las principales marcas de impresoras fiscales (Epson, Star, etc.).'
      },
      {
        question: '¿Puedo hacer promociones complejas?',
        answer: 'Sí. 2x1, 3x2, descuentos por volumen, combos, cupones, descuentos por categoría. Todo se aplica automáticamente.'
      },
      {
        question: '¿Integra con e-commerce?',
        answer: 'Sí. Integramos con Shopify, WooCommerce, Magento. El inventario se sincroniza en tiempo real.'
      }
    ],
    
    cta: {
      title: '¿Listo para modernizar tu retail?',
      description: 'Agenda una demo y te mostraremos cómo retailers aumentan ventas y reducen costos con GDS ONE.',
      button: 'Ver Demo para Retail'
    }
  },
  
  {
    slug: 'holding',
    name: 'Holdings / Multi-Empresa',
    tagline: 'ERP para Holdings y Grupos Empresariales',
    description: 'Gestiona múltiples empresas desde un solo sistema: consolidación financiera, inter-company, reportes corporativos y benchmarking entre empresas.',
    
    challenges: [
      {
        title: 'Sistemas Fragmentados',
        description: 'Cada empresa usa su propio sistema. Consolidar información es manual y toma semanas.',
        icon: '🔀'
      },
      {
        title: 'Sin Visibilidad Corporativa',
        description: 'No tienes visibilidad en tiempo real de todas las empresas. No puedes tomar decisiones corporativas ágiles.',
        icon: '👁️'
      },
      {
        title: 'Transacciones Inter-Company',
        description: 'Ventas entre empresas del grupo son manuales. Difícil de conciliar, propenso a errores.',
        icon: '🔄'
      },
      {
        title: 'Sin Benchmarking',
        description: 'No puedes comparar performance entre empresas. No identificas mejores prácticas.',
        icon: '📊'
      }
    ],
    
    solutions: [
      {
        title: 'Consolidación Automática',
        description: 'Consolida estados financieros automáticamente. Elimina transacciones inter-company.',
        benefit: 'Cierre mensual en 2 días vs 2 semanas'
      },
      {
        title: 'Dashboards Corporativos',
        description: 'Ve performance de todas las empresas en tiempo real. Drill-down a detalle por empresa.',
        benefit: 'Decisiones basadas en datos actuales'
      },
      {
        title: 'Inter-Company Automatizado',
        description: 'Ventas entre empresas se registran automáticamente en ambas. Conciliación automática.',
        benefit: 'Elimina errores de conciliación'
      },
      {
        title: 'Benchmarking',
        description: 'Compara KPIs entre empresas: margen, rotación, productividad. Identifica mejores prácticas.',
        benefit: 'Replica éxitos, corrige problemas'
      }
    ],
    
    recommended_modules: [
      'Multi-Empresa',
      'Consolidación Financiera',
      'Inter-Company',
      'BI Corporativo',
      'Gestión de Usuarios Multi-Empresa',
      'Todos los módulos ERP'
    ],
    
    key_features: [
      {
        name: 'Multi-Empresa Nativo',
        description: 'Gestiona múltiples empresas desde un solo sistema. Cada empresa tiene su propia contabilidad, inventario, clientes.'
      },
      {
        name: 'Consolidación Financiera',
        description: 'Consolida estados financieros automáticamente. Elimina transacciones inter-company, maneja diferentes monedas.'
      },
      {
        name: 'Transacciones Inter-Company',
        description: 'Venta en empresa A genera compra automática en empresa B. Conciliación automática.'
      },
      {
        name: 'Reportes Corporativos',
        description: 'Reportes consolidados y por empresa. Compara performance, identifica tendencias.'
      },
      {
        name: 'Gestión Centralizada',
        description: 'Administra usuarios, permisos, catálogos desde nivel corporativo. Replica configuraciones entre empresas.'
      },
      {
        name: 'Benchmarking',
        description: 'Compara KPIs entre empresas: ventas, margen, rotación, productividad. Ranking de empresas.'
      }
    ],
    
    use_cases: [
      {
        title: 'Consolidación Financiera',
        description: 'Cierre mensual corporativo',
        steps: [
          'Cada empresa cierra su mes',
          'Sistema valida que todas las empresas cerraron',
          'Consolida automáticamente estados financieros',
          'Elimina transacciones inter-company',
          'Convierte a moneda corporativa',
          'Genera reportes consolidados',
          'Envía a dirección corporativa',
          'Drill-down a detalle por empresa si es necesario'
        ]
      },
      {
        title: 'Transacción Inter-Company',
        description: 'Venta entre empresas del grupo',
        steps: [
          'Empresa A vende a Empresa B',
          'Sistema genera factura en Empresa A',
          'Automáticamente genera compra en Empresa B',
          'Ambas transacciones quedan vinculadas',
          'En consolidación, se eliminan automáticamente',
          'Conciliación es automática, sin errores'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Tiempo de Consolidación',
        improvement: '-80%',
        description: 'De 2 semanas a 2 días'
      },
      {
        metric: 'Errores de Conciliación',
        improvement: '-95%',
        description: 'Casi elimina errores inter-company'
      },
      {
        metric: 'Visibilidad Corporativa',
        improvement: 'Tiempo Real',
        description: 'De reportes mensuales a dashboards en vivo'
      },
      {
        metric: 'Eficiencia Administrativa',
        improvement: '+30%',
        description: 'Un solo sistema, procesos estandarizados'
      }
    ],
    
    faqs: [
      {
        question: '¿Cuántas empresas puedo gestionar?',
        answer: 'Ilimitadas. Tenemos clientes con 3 empresas y otros con 50+. El sistema escala sin problemas.'
      },
      {
        question: '¿Cada empresa tiene su propia contabilidad?',
        answer: 'Sí. Cada empresa es independiente: su propia contabilidad, inventario, clientes, proveedores. Pero todo en un solo sistema.'
      },
      {
        question: '¿Maneja diferentes monedas?',
        answer: 'Sí. Cada empresa puede operar en su moneda local. La consolidación convierte automáticamente a la moneda corporativa.'
      },
      {
        question: '¿Puedo limitar acceso por empresa?',
        answer: 'Sí. Puedes dar acceso a un usuario solo a ciertas empresas. O dar acceso corporativo a todo.'
      }
    ],
    
    cta: {
      title: '¿Listo para consolidar tu grupo empresarial?',
      description: 'Agenda una demo y te mostraremos cómo holdings gestionan múltiples empresas desde un solo sistema.',
      button: 'Ver Demo para Holdings'
    }
  },
  
  {
    slug: 'servicios-profesionales',
    name: 'Servicios Profesionales',
    tagline: 'ERP para Empresas de Servicios Profesionales',
    description: 'Gestiona tu firma de servicios profesionales: proyectos, time tracking, facturación por horas, recursos, rentabilidad por proyecto y análisis de utilización.',
    
    challenges: [
      {
        title: 'Sin Visibilidad de Rentabilidad',
        description: 'No sabes qué proyectos son rentables. Facturas por horas pero no conoces tu costo real.',
        icon: '💰'
      },
      {
        title: 'Time Tracking Manual',
        description: 'Hojas de tiempo en Excel. Difícil de consolidar, propenso a errores, imposible de facturar automáticamente.',
        icon: '⏱️'
      },
      {
        title: 'Recursos Mal Asignados',
        description: 'No sabes quién está disponible, quién está sobre-utilizado. Asignación de recursos es reactiva.',
        icon: '👥'
      },
      {
        title: 'Facturación Lenta',
        description: 'Consolidar horas, aplicar tarifas, generar facturas toma días. Cobras tarde.',
        icon: '📄'
      }
    ],
    
    solutions: [
      {
        title: 'Rentabilidad por Proyecto',
        description: 'Ve costo real vs ingreso por proyecto. Identifica proyectos rentables y no rentables.',
        benefit: 'Aumenta margen 10-15%'
      },
      {
        title: 'Time Tracking Integrado',
        description: 'Captura horas desde web/móvil. Se integra automáticamente con facturación.',
        benefit: 'Reduce tiempo de facturación 80%'
      },
      {
        title: 'Gestión de Recursos',
        description: 'Ve disponibilidad de equipo, asigna recursos a proyectos, balancea carga de trabajo.',
        benefit: 'Aumenta utilización 20-30%'
      },
      {
        title: 'Facturación Automática',
        description: 'Genera facturas automáticamente desde horas registradas. Aplica tarifas por cliente/proyecto.',
        benefit: 'Cobra 2 semanas antes'
      }
    ],
    
    recommended_modules: [
      'Gestión de Proyectos',
      'Time Tracking',
      'Facturación por Horas',
      'Gestión de Recursos',
      'CRM',
      'Análisis de Rentabilidad'
    ],
    
    key_features: [
      {
        name: 'Time Tracking',
        description: 'Captura horas por proyecto, por tarea, por cliente. Web, móvil, integración con calendario.'
      },
      {
        name: 'Gestión de Proyectos',
        description: 'Crea proyectos, asigna equipo, define presupuesto, rastrea avance vs presupuesto.'
      },
      {
        name: 'Facturación por Horas',
        description: 'Genera facturas automáticamente desde horas. Tarifas por cliente, por tipo de trabajo, por profesional.'
      },
      {
        name: 'Gestión de Recursos',
        description: 'Ve disponibilidad de equipo, asigna a proyectos, balancea carga, identifica sobre/sub-utilización.'
      },
      {
        name: 'Rentabilidad por Proyecto',
        description: 'Costo real (horas * tarifa interna) vs ingreso. Margen por proyecto, por cliente, por tipo de servicio.'
      },
      {
        name: 'Dashboards Profesionales',
        description: 'Utilización por profesional, rentabilidad por proyecto, pipeline de oportunidades, forecast de ingresos.'
      }
    ],
    
    use_cases: [
      {
        title: 'Flujo de Proyecto',
        description: 'Desde oportunidad hasta facturación',
        steps: [
          'CRM: Oportunidad se convierte en proyecto',
          'Gerente de proyecto define presupuesto (horas)',
          'Asigna equipo al proyecto',
          'Equipo registra horas trabajadas (web/móvil)',
          'Sistema compara horas reales vs presupuesto',
          'Alertas si proyecto se pasa de presupuesto',
          'Al final del mes, genera factura desde horas',
          'Factura se envía automáticamente al cliente',
          'Sistema calcula rentabilidad real del proyecto'
        ]
      },
      {
        title: 'Asignación de Recursos',
        description: 'Optimiza utilización de equipo',
        steps: [
          'Dashboard muestra disponibilidad de equipo',
          'Identifica profesionales sub-utilizados',
          'Identifica profesionales sobre-cargados',
          'Gerente asigna recursos a nuevos proyectos',
          'Sistema valida disponibilidad',
          'Balancea carga de trabajo',
          'Mide utilización real vs target (ej: 80%)',
          'Identifica oportunidades de contratación'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Utilización de Equipo',
        improvement: '+20-30%',
        description: 'Más horas facturables por profesional'
      },
      {
        metric: 'Tiempo de Facturación',
        improvement: '-80%',
        description: 'De días a horas'
      },
      {
        metric: 'Margen por Proyecto',
        improvement: '+10-15%',
        description: 'Mejor visibilidad = mejores decisiones'
      },
      {
        metric: 'Días de Cartera',
        improvement: '-40%',
        description: 'Facturas más rápido = cobras más rápido'
      }
    ],
    
    faqs: [
      {
        question: '¿Funciona para diferentes tipos de servicios (consultoría, legal, contabilidad, ingeniería)?',
        answer: 'Sí. El sistema es flexible y se adapta a diferentes tipos de servicios profesionales. Puedes definir tus propias tarifas, tipos de trabajo, y estructuras de proyecto.'
      },
      {
        question: '¿Puedo facturar por horas, por proyecto fijo, o mixto?',
        answer: 'Sí. Soporta facturación por horas (time & materials), por proyecto fijo (fixed fee), o mixto. Puedes definir el modelo por proyecto.'
      },
      {
        question: '¿El time tracking funciona en móvil?',
        answer: 'Sí. Hay app móvil para iOS y Android. Los profesionales pueden registrar horas desde cualquier lugar.'
      },
      {
        question: '¿Integra con herramientas de gestión de proyectos (Asana, Trello)?',
        answer: 'Sí. Integramos con las principales herramientas de gestión de proyectos. O puedes usar nuestro módulo de proyectos integrado.'
      },
      {
        question: '¿Puedo ver rentabilidad por cliente, por tipo de servicio?',
        answer: 'Sí. Puedes analizar rentabilidad por proyecto, por cliente, por tipo de servicio, por profesional. Múltiples dimensiones de análisis.'
      }
    ],
    
    cta: {
      title: '¿Listo para optimizar tu firma de servicios?',
      description: 'Agenda una demo y te mostraremos cómo firmas profesionales aumentan rentabilidad y utilización con GDS ONE.',
      button: 'Ver Demo para Servicios'
    }
  },
  
  {
    slug: 'salud',
    name: 'Salud',
    tagline: 'ERP para Instituciones de Salud',
    description: 'Gestiona tu institución de salud: inventario médico, compras, facturación de servicios, gestión de pacientes, control de costos y análisis de rentabilidad por servicio.',
    
    challenges: [
      {
        title: 'Inventario Crítico',
        description: 'Medicamentos y suministros médicos son críticos. Vencimientos, lotes, trazabilidad son obligatorios.',
        icon: '💊'
      },
      {
        title: 'Facturación Compleja',
        description: 'Facturación a pacientes, aseguradoras, convenios. Múltiples tarifarios, autorizaciones, glosas.',
        icon: '📋'
      },
      {
        title: 'Costos Descontrolados',
        description: 'No sabes cuánto cuesta cada servicio. Vendes sin conocer tu margen real.',
        icon: '💸'
      },
      {
        title: 'Cumplimiento Regulatorio',
        description: 'Trazabilidad de medicamentos, control de lotes, reportes regulatorios son obligatorios.',
        icon: '⚖️'
      }
    ],
    
    solutions: [
      {
        title: 'Inventario Médico',
        description: 'Control de lotes, vencimientos, trazabilidad completa. Alertas de productos próximos a vencer.',
        benefit: 'Reduce vencimientos 90%'
      },
      {
        title: 'Facturación Multi-Pagador',
        description: 'Factura a pacientes, aseguradoras, convenios. Aplica tarifarios automáticamente.',
        benefit: 'Reduce glosas 50%'
      },
      {
        title: 'Costeo por Servicio',
        description: 'Calcula costo real por servicio: insumos, medicamentos, personal, overhead.',
        benefit: 'Identifica servicios no rentables'
      },
      {
        title: 'Trazabilidad Completa',
        description: 'Rastrea medicamentos desde compra hasta aplicación al paciente. Cumple regulaciones.',
        benefit: 'Cumplimiento 100%'
      }
    ],
    
    recommended_modules: [
      'Inventario Médico',
      'Compras',
      'Facturación Multi-Pagador',
      'Gestión de Pacientes',
      'Costeo por Servicio',
      'Trazabilidad'
    ],
    
    key_features: [
      {
        name: 'Inventario Médico',
        description: 'Control de lotes, vencimientos, temperatura, trazabilidad. Alertas automáticas de productos críticos.'
      },
      {
        name: 'Facturación Multi-Pagador',
        description: 'Factura a pacientes (particular), aseguradoras, convenios empresariales. Múltiples tarifarios.'
      },
      {
        name: 'Gestión de Autorizaciones',
        description: 'Solicita y rastrea autorizaciones de aseguradoras. Alertas de servicios sin autorización.'
      },
      {
        name: 'Costeo por Servicio',
        description: 'Calcula costo real por servicio: insumos consumidos, medicamentos, tiempo de personal, overhead.'
      },
      {
        name: 'Trazabilidad',
        description: 'Rastrea medicamentos e insumos desde compra hasta aplicación al paciente. Cumple COFEPRIS/INVIMA.'
      },
      {
        name: 'Análisis de Rentabilidad',
        description: 'Rentabilidad por servicio, por especialidad, por médico, por pagador.'
      }
    ],
    
    use_cases: [
      {
        title: 'Flujo de Atención',
        description: 'Desde admisión hasta facturación',
        steps: [
          'Paciente llega a admisión',
          'Sistema verifica cobertura de aseguradora',
          'Solicita autorización si es necesario',
          'Médico ordena servicios (consulta, estudios, medicamentos)',
          'Sistema valida disponibilidad de insumos',
          'Aplica servicios y registra consumos',
          'Calcula costo real del servicio',
          'Genera factura aplicando tarifario correcto',
          'Envía factura a aseguradora o paciente',
          'Rastrea pagos y glosas'
        ]
      },
      {
        title: 'Control de Inventario Médico',
        description: 'Mantén inventario crítico bajo control',
        steps: [
          'Sistema monitorea niveles de inventario',
          'Alertas de productos con bajo stock',
          'Alertas de productos próximos a vencer',
          'Genera orden de compra automática',
          'Recibe productos y registra lotes',
          'Rastrea consumo por paciente',
          'Trazabilidad completa de medicamentos',
          'Reportes regulatorios automáticos'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Vencimientos',
        improvement: '-90%',
        description: 'Alertas tempranas evitan pérdidas'
      },
      {
        metric: 'Glosas',
        improvement: '-50%',
        description: 'Mejor documentación, menos rechazos'
      },
      {
        metric: 'Tiempo de Facturación',
        improvement: '-70%',
        description: 'Facturación automática desde servicios'
      },
      {
        metric: 'Cumplimiento Regulatorio',
        improvement: '100%',
        description: 'Trazabilidad completa'
      }
    ],
    
    faqs: [
      {
        question: '¿Cumple con regulaciones de trazabilidad (COFEPRIS, INVIMA)?',
        answer: 'Sí. El sistema cumple con regulaciones de trazabilidad de medicamentos. Rastrea desde compra hasta aplicación al paciente.'
      },
      {
        question: '¿Maneja múltiples tarifarios (aseguradoras, convenios)?',
        answer: 'Sí. Puedes definir múltiples tarifarios y el sistema aplica el correcto automáticamente según el pagador.'
      },
      {
        question: '¿Integra con sistemas de historia clínica electrónica?',
        answer: 'Sí. Integramos con los principales sistemas de HCE. O puedes usar nuestro módulo de gestión de pacientes.'
      },
      {
        question: '¿Calcula costo real por servicio?',
        answer: 'Sí. Calcula costo real considerando insumos consumidos, medicamentos, tiempo de personal y overhead.'
      }
    ],
    
    cta: {
      title: '¿Listo para optimizar tu institución de salud?',
      description: 'Agenda una demo y te mostraremos cómo instituciones de salud reducen costos y mejoran rentabilidad.',
      button: 'Ver Demo para Salud'
    }
  },
  
  {
    slug: 'construccion',
    name: 'Construcción',
    tagline: 'ERP para Empresas de Construcción',
    description: 'Gestiona tus proyectos de construcción: presupuestos, control de obra, compras, subcontratistas, avance vs presupuesto y rentabilidad por proyecto.',
    
    challenges: [
      {
        title: 'Proyectos Sobre-Presupuesto',
        description: 'No tienes visibilidad en tiempo real de costos vs presupuesto. Te enteras tarde que el proyecto se pasó.',
        icon: '💸'
      },
      {
        title: 'Compras Descontroladas',
        description: 'Compras de materiales son caóticas. No hay control de qué se compró, para qué proyecto, a qué precio.',
        icon: '🛒'
      },
      {
        title: 'Subcontratistas',
        description: 'Difícil controlar avance y pagos a subcontratistas. No tienes visibilidad de qué se ha pagado vs qué se ha ejecutado.',
        icon: '👷'
      },
      {
        title: 'Sin Rentabilidad por Proyecto',
        description: 'No sabes qué proyectos son rentables hasta que terminan (o peor, nunca lo sabes).',
        icon: '📊'
      }
    ],
    
    solutions: [
      {
        title: 'Control de Obra',
        description: 'Compara costo real vs presupuesto en tiempo real. Alertas si proyecto se desvía.',
        benefit: 'Reduce sobre-costos 30-40%'
      },
      {
        title: 'Gestión de Compras',
        description: 'Compras por proyecto, control de precios, comparación de proveedores, trazabilidad de materiales.',
        benefit: 'Reduce costos de compra 10-15%'
      },
      {
        title: 'Control de Subcontratistas',
        description: 'Controla avance vs contrato, pagos vs avance, retenciones, garantías.',
        benefit: 'Elimina sobre-pagos'
      },
      {
        title: 'Rentabilidad por Proyecto',
        description: 'Ve rentabilidad en tiempo real: costo real vs ingreso, margen por proyecto, forecast de cierre.',
        benefit: 'Identifica problemas a tiempo'
      }
    ],
    
    recommended_modules: [
      'Gestión de Proyectos',
      'Presupuestos',
      'Control de Obra',
      'Compras por Proyecto',
      'Subcontratistas',
      'Análisis de Rentabilidad'
    ],
    
    key_features: [
      {
        name: 'Presupuestos',
        description: 'Crea presupuestos detallados por partida. Compara múltiples versiones, aprueba, convierte en proyecto.'
      },
      {
        name: 'Control de Obra',
        description: 'Registra avance físico y financiero. Compara vs presupuesto, identifica desviaciones, proyecta cierre.'
      },
      {
        name: 'Compras por Proyecto',
        description: 'Todas las compras se asignan a un proyecto. Controla presupuesto de compras, compara precios.'
      },
      {
        name: 'Gestión de Subcontratistas',
        description: 'Contratos, estimaciones, pagos, retenciones, garantías. Controla avance vs pagos.'
      },
      {
        name: 'Inventario de Materiales',
        description: 'Inventario por proyecto, transferencias entre proyectos, control de desperdicios.'
      },
      {
        name: 'Dashboards de Proyecto',
        description: 'Avance físico vs financiero, costo real vs presupuesto, rentabilidad, forecast de cierre.'
      }
    ],
    
    use_cases: [
      {
        title: 'Flujo de Proyecto',
        description: 'Desde presupuesto hasta cierre',
        steps: [
          'Crea presupuesto detallado por partida',
          'Cliente aprueba presupuesto',
          'Convierte presupuesto en proyecto',
          'Define plan de compras y subcontratistas',
          'Compras se asignan automáticamente al proyecto',
          'Registra avance físico de obra',
          'Sistema compara costo real vs presupuesto',
          'Alertas si proyecto se desvía',
          'Factura avances al cliente',
          'Cierra proyecto y calcula rentabilidad real'
        ]
      },
      {
        title: 'Control de Subcontratistas',
        description: 'Controla avance y pagos',
        steps: [
          'Crea contrato con subcontratista',
          'Define partidas y precios',
          'Subcontratista ejecuta trabajo',
          'Residente registra avance',
          'Sistema genera estimación de pago',
          'Aplica retenciones y garantías',
          'Genera pago a subcontratista',
          'Controla avance vs pagos',
          'Cierra contrato al terminar'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Sobre-Costos',
        improvement: '-30-40%',
        description: 'Detecta desviaciones a tiempo'
      },
      {
        metric: 'Costo de Compras',
        improvement: '-10-15%',
        description: 'Mejor control de precios'
      },
      {
        metric: 'Tiempo de Cierre',
        improvement: '-50%',
        description: 'Información en tiempo real'
      },
      {
        metric: 'Rentabilidad por Proyecto',
        improvement: '+15-20%',
        description: 'Mejor control = mejor margen'
      }
    ],
    
    faqs: [
      {
        question: '¿Maneja múltiples proyectos simultáneos?',
        answer: 'Sí. Puedes gestionar múltiples proyectos simultáneos. Cada proyecto tiene su propio presupuesto, compras, inventario y análisis de rentabilidad.'
      },
      {
        question: '¿Puedo controlar avance físico vs financiero?',
        answer: 'Sí. El sistema compara avance físico (% de obra ejecutada) vs avance financiero (% de presupuesto gastado).'
      },
      {
        question: '¿Integra con software de estimaciones (Opus, Neodata)?',
        answer: 'Sí. Puedes importar presupuestos desde software de estimaciones y convertirlos en proyectos.'
      },
      {
        question: '¿Maneja retenciones y garantías de subcontratistas?',
        answer: 'Sí. El sistema maneja retenciones automáticas, garantías de cumplimiento, y liberación de retenciones al finalizar.'
      }
    ],
    
    cta: {
      title: '¿Listo para controlar tus proyectos de construcción?',
      description: 'Agenda una demo y te mostraremos cómo constructoras reducen sobre-costos y aumentan rentabilidad.',
      button: 'Ver Demo para Construcción'
    }
  },
  
  {
    slug: 'logistica',
    name: 'Logística y 3PL',
    tagline: 'ERP para Operadores Logísticos',
    description: 'Gestiona tu operación logística: recepción, almacenamiento, picking, packing, despacho, facturación por servicio y análisis de rentabilidad por cliente.',
    
    challenges: [
      {
        title: 'Inventario de Terceros',
        description: 'Gestionas inventario de múltiples clientes. Necesitas separación total, trazabilidad y reportes por cliente.',
        icon: '📦'
      },
      {
        title: 'Facturación Compleja',
        description: 'Facturas por múltiples conceptos: almacenaje, manejo, picking, valor agregado. Tarifas por cliente.',
        icon: '💰'
      },
      {
        title: 'Operación Ineficiente',
        description: 'Picking manual, rutas no optimizadas, espacios mal utilizados. Costos operativos altos.',
        icon: '⚙️'
      },
      {
        title: 'Sin Visibilidad para Clientes',
        description: 'Clientes no tienen visibilidad de su inventario. Llamadas constantes para consultar stock.',
        icon: '👁️'
      }
    ],
    
    solutions: [
      {
        title: 'WMS Multi-Cliente',
        description: 'Gestiona inventario de múltiples clientes. Separación total, trazabilidad, reportes individuales.',
        benefit: 'Aumenta capacidad 30%'
      },
      {
        title: 'Facturación por Servicio',
        description: 'Factura automáticamente por almacenaje, manejo, picking, servicios de valor agregado.',
        benefit: 'Reduce tiempo de facturación 80%'
      },
      {
        title: 'Optimización de Operación',
        description: 'Picking optimizado, slotting inteligente, rutas eficientes. Reduce costos operativos.',
        benefit: 'Reduce costos 20-30%'
      },
      {
        title: 'Portal de Clientes',
        description: 'Clientes ven su inventario en tiempo real. Self-service para consultas y órdenes.',
        benefit: 'Reduce llamadas 70%'
      }
    ],
    
    recommended_modules: [
      'WMS (Warehouse Management)',
      'Multi-Cliente',
      'Facturación por Servicio',
      'Portal de Clientes',
      'Optimización de Rutas',
      'Análisis de Rentabilidad'
    ],
    
    key_features: [
      {
        name: 'WMS Multi-Cliente',
        description: 'Gestiona inventario de múltiples clientes. Separación por cliente, lote, ubicación. Trazabilidad completa.'
      },
      {
        name: 'Recepción y Almacenamiento',
        description: 'Recibe mercancía, asigna ubicaciones automáticamente (slotting), genera etiquetas.'
      },
      {
        name: 'Picking y Packing',
        description: 'Genera listas de picking optimizadas, guía operadores por rutas eficientes, valida con RF.'
      },
      {
        name: 'Facturación por Servicio',
        description: 'Factura automáticamente por almacenaje (por pallet/m3), manejo (entradas/salidas), picking, servicios adicionales.'
      },
      {
        name: 'Portal de Clientes',
        description: 'Clientes ven su inventario en tiempo real, crean órdenes de salida, descargan reportes.'
      },
      {
        name: 'Análisis de Rentabilidad',
        description: 'Rentabilidad por cliente, por servicio. Identifica clientes rentables y no rentables.'
      }
    ],
    
    use_cases: [
      {
        title: 'Flujo de Recepción a Despacho',
        description: 'Operación completa de 3PL',
        steps: [
          'Cliente envía orden de entrada (ASN)',
          'Recepción valida mercancía vs ASN',
          'Sistema asigna ubicaciones automáticamente',
          'Operador coloca mercancía en ubicación',
          'Inventario se actualiza por cliente',
          'Cliente crea orden de salida desde portal',
          'Sistema genera lista de picking optimizada',
          'Operador hace picking guiado por RF',
          'Packing y generación de etiquetas',
          'Despacho y actualización de inventario',
          'Sistema factura servicios automáticamente'
        ]
      },
      {
        title: 'Facturación Mensual',
        description: 'Genera facturas por servicios',
        steps: [
          'Sistema acumula servicios del mes por cliente',
          'Almacenaje: calcula días-pallet o días-m3',
          'Manejo: cuenta entradas y salidas',
          'Picking: cuenta líneas pickeadas',
          'Servicios adicionales: etiquetado, re-empaque, etc.',
          'Aplica tarifas por cliente',
          'Genera factura automáticamente',
          'Envía factura y detalle al cliente',
          'Cliente puede validar desde portal'
        ]
      }
    ],
    
    success_metrics: [
      {
        metric: 'Capacidad de Almacenamiento',
        improvement: '+30%',
        description: 'Mejor slotting, más eficiente'
      },
      {
        metric: 'Costo de Picking',
        improvement: '-25%',
        description: 'Rutas optimizadas'
      },
      {
        metric: 'Tiempo de Facturación',
        improvement: '-80%',
        description: 'Facturación automática'
      },
      {
        metric: 'Llamadas de Clientes',
        improvement: '-70%',
        description: 'Portal self-service'
      }
    ],
    
    faqs: [
      {
        question: '¿Puedo gestionar inventario de múltiples clientes?',
        answer: 'Sí. El sistema separa inventario por cliente. Cada cliente solo ve su propio inventario. Trazabilidad completa.'
      },
      {
        question: '¿Cómo factura por almacenaje?',
        answer: 'Puedes facturar por días-pallet, días-m3, días-posición, o tarifa fija mensual. El sistema calcula automáticamente.'
      },
      {
        question: '¿Los clientes pueden ver su inventario?',
        answer: 'Sí. Portal de clientes permite ver inventario en tiempo real, crear órdenes de salida, descargar reportes.'
      },
      {
        question: '¿Integra con RF (radiofrecuencia)?',
        answer: 'Sí. Integramos con terminales RF para picking, recepción, conteos cíclicos.'
      },
      {
        question: '¿Maneja servicios de valor agregado (etiquetado, re-empaque)?',
        answer: 'Sí. Puedes definir servicios adicionales y facturarlos automáticamente.'
      }
    ],
    
    cta: {
      title: '¿Listo para optimizar tu operación logística?',
      description: 'Agenda una demo y te mostraremos cómo operadores 3PL aumentan capacidad y rentabilidad.',
      button: 'Ver Demo para Logística'
    }
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}

export function getAllIndustries(): Industry[] {
  return industries;
}

export function getIndustriesByICP(icp: string): Industry[] {
  // Map ICPs to industries
  const icpMapping: Record<string, string[]> = {
    'distribucion': ['distribucion', 'logistica'],
    'retail': ['retail'],
    'manufactura': ['manufactura'],
    'servicios': ['servicios-profesionales', 'salud'],
    'holding': ['holding']
  };
  
  const industrySlugs = icpMapping[icp] || [];
  return industries.filter(i => industrySlugs.includes(i.slug));
}
