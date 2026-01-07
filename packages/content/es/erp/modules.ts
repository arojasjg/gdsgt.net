import type { Module } from '../../types';

export const modules: Module[] = [
  {
    slug: 'contabilidad',
    name: 'Contabilidad',
    description:
      'Gestión contable completa con plan de cuentas personalizable, centro de costos, conciliación bancaria y reportes financieros en tiempo real.',
    features: [
      'Plan de cuentas multinivel personalizable',
      'Conciliación bancaria automática',
      'Centro de costos y proyectos',
      'Reportes financieros (Balance, Estado de Resultados, Flujo de Caja)',
      'Cierre contable periódico',
      'Integración con bancos',
      'Auditoría de transacciones',
    ],
    benefits: [
      'Visibilidad financiera en tiempo real',
      'Reducción de errores contables',
      'Cumplimiento normativo',
      'Toma de decisiones informada',
    ],
  },
  {
    slug: 'inventario',
    name: 'Inventario',
    description:
      'Control total de inventarios con múltiples bodegas, trazabilidad, lotes, series, y gestión de stock mínimo/máximo.',
    features: [
      'Múltiples bodegas y ubicaciones',
      'Trazabilidad por lotes y series',
      'Stock mínimo/máximo con alertas',
      'Valoración de inventario (FIFO, LIFO, Promedio)',
      'Transferencias entre bodegas',
      'Ajustes de inventario',
      'Reportes de rotación y obsolescencia',
    ],
    benefits: [
      'Reducción de quiebres de stock',
      'Optimización de capital de trabajo',
      'Trazabilidad completa',
      'Mejor planificación de compras',
    ],
  },
  {
    slug: 'ventas',
    name: 'Ventas',
    description:
      'Gestión de ventas desde cotización hasta facturación, con control de precios, descuentos, comisiones y múltiples listas de precios.',
    features: [
      'Cotizaciones y pedidos',
      'Facturación electrónica',
      'Múltiples listas de precios',
      'Descuentos y promociones',
      'Comisiones de vendedores',
      'Devoluciones y notas de crédito',
      'Integración con punto de venta (POS)',
    ],
    benefits: [
      'Agilización del proceso de ventas',
      'Control de márgenes',
      'Mejora en atención al cliente',
      'Cumplimiento fiscal',
    ],
  },
  {
    slug: 'compras',
    name: 'Compras',
    description:
      'Gestión de compras con solicitudes, órdenes, recepción, y control de proveedores y condiciones comerciales.',
    features: [
      'Solicitudes de compra',
      'Órdenes de compra',
      'Recepción de mercadería',
      'Gestión de proveedores',
      'Comparación de cotizaciones',
      'Control de condiciones comerciales',
      'Devoluciones a proveedores',
    ],
    benefits: [
      'Optimización de costos',
      'Mejor negociación con proveedores',
      'Control de calidad',
      'Visibilidad de compromisos',
    ],
  },
  {
    slug: 'cuentas-por-cobrar',
    name: 'Cuentas por Cobrar',
    description:
      'Gestión de cartera de clientes con control de crédito, cobranza, antigüedad de saldos y proyección de flujo de caja.',
    features: [
      'Control de crédito por cliente',
      'Gestión de cobranza',
      'Antigüedad de saldos',
      'Aplicación de pagos',
      'Notas de débito y crédito',
      'Proyección de flujo de caja',
      'Alertas de vencimiento',
    ],
    benefits: [
      'Mejora en flujo de caja',
      'Reducción de morosidad',
      'Automatización de cobranza',
      'Mejor relación con clientes',
    ],
  },
  {
    slug: 'cuentas-por-pagar',
    name: 'Cuentas por Pagar',
    description:
      'Control de obligaciones con proveedores, programación de pagos, y gestión de anticipos y retenciones.',
    features: [
      'Registro de facturas de proveedores',
      'Programación de pagos',
      'Gestión de anticipos',
      'Retenciones fiscales',
      'Conciliación con proveedores',
      'Proyección de egresos',
      'Pagos electrónicos',
    ],
    benefits: [
      'Optimización de flujo de caja',
      'Aprovechamiento de descuentos',
      'Cumplimiento de obligaciones',
      'Mejor relación con proveedores',
    ],
  },
  {
    slug: 'produccion',
    name: 'Producción',
    description:
      'Gestión de órdenes de producción, recetas (BOM), consumo de materiales, y control de costos de producción.',
    features: [
      'Órdenes de producción',
      'Lista de materiales (BOM) multinivel',
      'Consumo de materiales',
      'Control de costos de producción',
      'Planificación de capacidad',
      'Trazabilidad de lotes',
      'Reportes de eficiencia',
    ],
    benefits: [
      'Optimización de recursos',
      'Control de costos',
      'Mejora en eficiencia',
      'Trazabilidad completa',
    ],
  },
  {
    slug: 'recursos-humanos',
    name: 'Recursos Humanos',
    description:
      'Gestión de personal, nómina, asistencia, vacaciones, y expediente digital de empleados.',
    features: [
      'Expediente digital de empleados',
      'Cálculo de nómina',
      'Control de asistencia',
      'Gestión de vacaciones y permisos',
      'Evaluación de desempeño',
      'Reclutamiento y selección',
      'Capacitación',
    ],
    benefits: [
      'Automatización de nómina',
      'Cumplimiento laboral',
      'Mejora en clima laboral',
      'Retención de talento',
    ],
  },
  {
    slug: 'activos-fijos',
    name: 'Activos Fijos',
    description:
      'Control de activos fijos con depreciación automática, mantenimiento, y trazabilidad de ubicación y responsables.',
    features: [
      'Registro de activos',
      'Depreciación automática',
      'Mantenimiento preventivo y correctivo',
      'Trazabilidad de ubicación',
      'Asignación de responsables',
      'Reportes de valor en libros',
      'Bajas y ventas de activos',
    ],
    benefits: [
      'Control patrimonial',
      'Cumplimiento fiscal',
      'Optimización de mantenimiento',
      'Reducción de pérdidas',
    ],
  },
  {
    slug: 'proyectos',
    name: 'Proyectos',
    description:
      'Gestión de proyectos con control de costos, tiempos, recursos, y facturación por proyecto.',
    features: [
      'Planificación de proyectos',
      'Control de costos y presupuestos',
      'Asignación de recursos',
      'Seguimiento de tiempos',
      'Facturación por proyecto',
      'Reportes de rentabilidad',
      'Gestión de hitos',
    ],
    benefits: [
      'Mejora en rentabilidad',
      'Control de costos',
      'Cumplimiento de plazos',
      'Visibilidad de avance',
    ],
  },
  {
    slug: 'punto-de-venta',
    name: 'Punto de Venta (POS)',
    description:
      'Sistema de punto de venta integrado con inventario, facturación, y múltiples formas de pago.',
    features: [
      'Interfaz táctil intuitiva',
      'Múltiples formas de pago',
      'Facturación electrónica',
      'Integración con inventario',
      'Gestión de turnos y cajas',
      'Promociones y descuentos',
      'Reportes de ventas en tiempo real',
    ],
    benefits: [
      'Agilización de ventas',
      'Reducción de errores',
      'Mejor experiencia de cliente',
      'Control de caja',
    ],
  },
  {
    slug: 'crm',
    name: 'CRM',
    description:
      'Gestión de relaciones con clientes, oportunidades de venta, seguimiento de leads, y automatización de marketing.',
    features: [
      'Gestión de leads y oportunidades',
      'Seguimiento de interacciones',
      'Pipeline de ventas',
      'Automatización de marketing',
      'Segmentación de clientes',
      'Campañas de email',
      'Reportes de conversión',
    ],
    benefits: [
      'Aumento en conversión',
      'Mejora en retención',
      'Automatización de procesos',
      'Visibilidad de pipeline',
    ],
  },
];
