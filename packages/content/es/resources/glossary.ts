import type { GlossaryTerm } from '../../types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'erp',
    term: 'ERP (Enterprise Resource Planning)',
    definition:
      'Sistema de planificación de recursos empresariales que integra y gestiona los procesos core del negocio (finanzas, inventario, ventas, compras, producción, RRHH) en una plataforma unificada.',
    relatedTerms: ['bi', 'crm', 'saas'],
  },
  {
    slug: 'bi',
    term: 'BI (Business Intelligence)',
    definition:
      'Inteligencia de negocios. Conjunto de tecnologías y procesos para analizar datos y convertirlos en información accionable mediante dashboards, reportes y análisis avanzado.',
    relatedTerms: ['erp', 'etl', 'data-warehouse'],
  },
  {
    slug: 'crm',
    term: 'CRM (Customer Relationship Management)',
    definition:
      'Gestión de relaciones con clientes. Sistema para administrar interacciones con clientes actuales y potenciales, incluyendo ventas, marketing y servicio al cliente.',
    relatedTerms: ['erp', 'pipeline', 'lead'],
  },
  {
    slug: 'etl',
    term: 'ETL (Extract, Transform, Load)',
    definition:
      'Proceso de extracción, transformación y carga de datos desde fuentes diversas hacia un destino (data warehouse, BI). Incluye limpieza, validación y enriquecimiento de datos.',
    relatedTerms: ['bi', 'data-warehouse', 'api'],
  },
  {
    slug: 'webhook',
    term: 'Webhook',
    definition:
      'Mecanismo de notificación HTTP que permite a una aplicación enviar datos en tiempo real a otra cuando ocurre un evento específico. Usado para integraciones y automatización.',
    relatedTerms: ['api', 'rest-api', 'integracion'],
  },
  {
    slug: 'rbac',
    term: 'RBAC (Role-Based Access Control)',
    definition:
      'Control de acceso basado en roles. Modelo de seguridad donde los permisos se asignan a roles y los usuarios se asignan a roles, simplificando la gestión de accesos.',
    relatedTerms: ['seguridad', 'permisos', 'audit-trail'],
  },
  {
    slug: 'disaster-recovery',
    term: 'Disaster Recovery (DR)',
    definition:
      'Plan y procedimientos para recuperar sistemas y datos críticos después de un desastre (natural, técnico, humano). Incluye backups, RTO, RPO y pruebas periódicas.',
    relatedTerms: ['backup', 'rto', 'rpo'],
  },
  {
    slug: 'audit-trail',
    term: 'Audit Trail (Pista de Auditoría)',
    definition:
      'Registro cronológico e inmutable de todas las acciones realizadas en un sistema, incluyendo quién, qué, cuándo y desde dónde. Esencial para cumplimiento y seguridad.',
    relatedTerms: ['rbac', 'seguridad', 'compliance'],
  },
  {
    slug: 'api',
    term: 'API (Application Programming Interface)',
    definition:
      'Interfaz de programación de aplicaciones. Conjunto de definiciones y protocolos para integrar y comunicar aplicaciones entre sí. REST API es el estándar más común.',
    relatedTerms: ['rest-api', 'webhook', 'integracion'],
  },
  {
    slug: 'saas',
    term: 'SaaS (Software as a Service)',
    definition:
      'Software como servicio. Modelo de distribución donde el software se aloja en la nube y se accede vía web, sin necesidad de instalación local. Pago por suscripción.',
    relatedTerms: ['cloud', 'erp', 'crm'],
  },
  {
    slug: 'cloud',
    term: 'Cloud (Nube)',
    definition:
      'Infraestructura de servidores remotos accesibles vía internet para almacenar, procesar y gestionar datos. Ofrece escalabilidad, disponibilidad y reducción de costos de infraestructura.',
    relatedTerms: ['saas', 'backup', 'disaster-recovery'],
  },
  {
    slug: 'rest-api',
    term: 'REST API',
    definition:
      'API basada en el estilo arquitectónico REST (Representational State Transfer). Usa HTTP y métodos estándar (GET, POST, PUT, DELETE) para operaciones CRUD.',
    relatedTerms: ['api', 'webhook', 'integracion'],
  },
  {
    slug: 'data-warehouse',
    term: 'Data Warehouse',
    definition:
      'Almacén de datos centralizado que integra datos de múltiples fuentes para análisis y reporting. Optimizado para consultas analíticas (OLAP) vs transaccionales (OLTP).',
    relatedTerms: ['bi', 'etl', 'olap'],
  },
  {
    slug: 'rto',
    term: 'RTO (Recovery Time Objective)',
    definition:
      'Tiempo máximo aceptable de inactividad después de un desastre. Define qué tan rápido debe recuperarse un sistema. Ej: RTO de 4 horas significa que el sistema debe estar operativo en máximo 4 horas.',
    relatedTerms: ['disaster-recovery', 'rpo', 'backup'],
  },
  {
    slug: 'rpo',
    term: 'RPO (Recovery Point Objective)',
    definition:
      'Cantidad máxima de datos que se pueden perder después de un desastre. Define la frecuencia de backups. Ej: RPO de 24 horas significa que se pueden perder máximo 24 horas de datos.',
    relatedTerms: ['disaster-recovery', 'rto', 'backup'],
  },
  {
    slug: 'backup',
    term: 'Backup (Copia de Seguridad)',
    definition:
      'Copia de datos almacenada en ubicación separada para recuperación en caso de pérdida, corrupción o desastre. Tipos: completo, incremental, diferencial.',
    relatedTerms: ['disaster-recovery', 'rto', 'rpo'],
  },
  {
    slug: 'integracion',
    term: 'Integración',
    definition:
      'Conexión y sincronización de sistemas diferentes para intercambiar datos y automatizar procesos. Métodos: API, webhooks, ETL, archivos, bases de datos.',
    relatedTerms: ['api', 'webhook', 'etl'],
  },
  {
    slug: 'pipeline',
    term: 'Pipeline (Embudo de Ventas)',
    definition:
      'Representación visual del proceso de ventas desde el primer contacto hasta el cierre. Incluye etapas (lead, oportunidad, propuesta, negociación, cierre) y probabilidades.',
    relatedTerms: ['crm', 'lead', 'conversion'],
  },
  {
    slug: 'lead',
    term: 'Lead',
    definition:
      'Contacto o prospecto que ha mostrado interés en un producto o servicio. Puede ser calificado (MQL/SQL) según su nivel de interés y ajuste con el perfil ideal de cliente.',
    relatedTerms: ['crm', 'pipeline', 'conversion'],
  },
  {
    slug: 'compliance',
    term: 'Compliance (Cumplimiento)',
    definition:
      'Cumplimiento de regulaciones, leyes y estándares aplicables al negocio (fiscales, laborales, privacidad, seguridad). Requiere controles, auditorías y documentación.',
    relatedTerms: ['audit-trail', 'gdpr', 'seguridad'],
  },
  {
    slug: 'bom',
    term: 'BOM (Bill of Materials)',
    definition:
      'Lista de materiales. Especificación detallada de materias primas, componentes, sub-ensambles y cantidades necesarias para fabricar un producto. Incluye costos y proveedores.',
    relatedTerms: ['manufactura', 'orden-produccion', 'mrp'],
  },
  {
    slug: 'mrp',
    term: 'MRP (Material Requirements Planning)',
    definition:
      'Planificación de requerimientos de materiales. Sistema que calcula qué materiales se necesitan, cuánto y cuándo, basado en órdenes de producción, BOMs, inventario actual y tiempos de entrega.',
    relatedTerms: ['bom', 'orden-produccion', 'manufactura'],
  },
  {
    slug: 'orden-produccion',
    term: 'Orden de Producción',
    definition:
      'Documento que autoriza la fabricación de una cantidad específica de producto. Incluye BOM, ruta de producción, fechas, recursos asignados y costos.',
    relatedTerms: ['bom', 'mrp', 'manufactura'],
  },
  {
    slug: 'sku',
    term: 'SKU (Stock Keeping Unit)',
    definition:
      'Unidad de mantenimiento de stock. Código único que identifica un producto específico en inventario. Incluye variantes (color, talla, etc.).',
    relatedTerms: ['inventario', 'codigo-barras', 'trazabilidad'],
  },
  {
    slug: 'codigo-barras',
    term: 'Código de Barras',
    definition:
      'Representación visual de datos en formato de barras paralelas. Usado para identificar productos rápidamente mediante scanner. Estándares: EAN, UPC, Code128.',
    relatedTerms: ['sku', 'inventario', 'wms'],
  },
  {
    slug: 'trazabilidad',
    term: 'Trazabilidad',
    definition:
      'Capacidad de rastrear el historial, ubicación y aplicación de un producto mediante identificadores (lotes, series). Crítico para recalls, auditorías y compliance.',
    relatedTerms: ['lote', 'serie', 'audit-trail'],
  },
  {
    slug: 'lote',
    term: 'Lote',
    definition:
      'Grupo de productos fabricados o recibidos juntos, identificados con un código único. Permite rastrear origen, fecha de fabricación/vencimiento y movimientos.',
    relatedTerms: ['trazabilidad', 'serie', 'inventario'],
  },
  {
    slug: 'serie',
    term: 'Número de Serie',
    definition:
      'Identificador único asignado a una unidad individual de producto. Permite rastreo unitario, garantías y mantenimiento. Común en electrónicos, maquinaria, vehículos.',
    relatedTerms: ['trazabilidad', 'lote', 'garantia'],
  },
  {
    slug: 'wms',
    term: 'WMS (Warehouse Management System)',
    definition:
      'Sistema de gestión de almacenes. Optimiza operaciones de bodega: recepción, ubicación, picking, packing, despacho. Incluye RF guns, ubicaciones, rutas de picking.',
    relatedTerms: ['inventario', 'codigo-barras', 'picking'],
  },
  {
    slug: 'picking',
    term: 'Picking',
    definition:
      'Proceso de recolección de productos de sus ubicaciones en bodega para cumplir órdenes de venta. Métodos: piece picking, batch picking, zone picking, wave picking.',
    relatedTerms: ['wms', 'orden-venta', 'inventario'],
  },
  {
    slug: 'orden-venta',
    term: 'Orden de Venta',
    definition:
      'Documento que registra el compromiso de vender productos/servicios a un cliente. Incluye productos, cantidades, precios, descuentos, términos de pago y entrega.',
    relatedTerms: ['factura', 'cotizacion', 'picking'],
  },
  {
    slug: 'cotizacion',
    term: 'Cotización',
    definition:
      'Propuesta formal de venta que detalla productos/servicios, precios, descuentos, términos y condiciones. No es vinculante hasta que se convierte en orden de venta.',
    relatedTerms: ['orden-venta', 'crm', 'pipeline'],
  },
  {
    slug: 'factura',
    term: 'Factura',
    definition:
      'Documento fiscal que comprueba la venta de productos/servicios. Incluye datos del emisor/receptor, productos, precios, impuestos, forma de pago. Genera CXC.',
    relatedTerms: ['orden-venta', 'cxc', 'cfdi'],
  },
  {
    slug: 'cfdi',
    term: 'CFDI (Comprobante Fiscal Digital por Internet)',
    definition:
      'Factura electrónica válida en México. Requiere certificado SAT, timbrado, UUID y cumple con regulaciones fiscales. Reemplaza facturas en papel.',
    relatedTerms: ['factura', 'sat', 'compliance'],
  },
  {
    slug: 'sat',
    term: 'SAT (Servicio de Administración Tributaria)',
    definition:
      'Autoridad fiscal de México. Regula facturación electrónica (CFDI), declaraciones, pagos de impuestos y cumplimiento fiscal.',
    relatedTerms: ['cfdi', 'compliance', 'impuestos'],
  },
  {
    slug: 'cxc',
    term: 'CXC (Cuentas por Cobrar)',
    definition:
      'Dinero que los clientes deben a la empresa por ventas a crédito. Incluye facturas pendientes, pagos parciales, vencimientos, cobranza y análisis de antigüedad.',
    relatedTerms: ['factura', 'cxp', 'cobranza'],
  },
  {
    slug: 'cxp',
    term: 'CXP (Cuentas por Pagar)',
    definition:
      'Dinero que la empresa debe a proveedores por compras a crédito. Incluye facturas de proveedores, pagos programados, vencimientos y gestión de cash flow.',
    relatedTerms: ['cxc', 'orden-compra', 'proveedor'],
  },
  {
    slug: 'cobranza',
    term: 'Cobranza',
    definition:
      'Proceso de recuperación de cuentas por cobrar vencidas. Incluye recordatorios, negociación de pagos, gestión de morosidad y, en casos extremos, cobranza judicial.',
    relatedTerms: ['cxc', 'morosidad', 'flujo-caja'],
  },
  {
    slug: 'orden-compra',
    term: 'Orden de Compra',
    definition:
      'Documento que autoriza la compra de productos/servicios a un proveedor. Incluye productos, cantidades, precios, términos de pago y entrega. Genera CXP al recibir factura.',
    relatedTerms: ['proveedor', 'cxp', 'recepcion'],
  },
  {
    slug: 'proveedor',
    term: 'Proveedor',
    definition:
      'Empresa o persona que suministra productos/servicios. Incluye datos de contacto, términos de pago, catálogo de productos, precios, tiempos de entrega y evaluación de desempeño.',
    relatedTerms: ['orden-compra', 'cxp', 'recepcion'],
  },
  {
    slug: 'recepcion',
    term: 'Recepción de Mercancía',
    definition:
      'Proceso de recibir productos de proveedores. Incluye verificación de cantidades, calidad, documentación, registro en inventario y generación de CXP.',
    relatedTerms: ['orden-compra', 'proveedor', 'inventario'],
  },
  {
    slug: 'inventario',
    term: 'Inventario',
    definition:
      'Stock de productos disponibles para venta o producción. Incluye materia prima, producto en proceso, producto terminado. Métricas: rotación, días de inventario, obsoletos.',
    relatedTerms: ['sku', 'wms', 'rotacion'],
  },
  {
    slug: 'rotacion',
    term: 'Rotación de Inventario',
    definition:
      'Número de veces que el inventario se vende y reemplaza en un período. Fórmula: Costo de Ventas / Inventario Promedio. Alta rotación = buen flujo de caja.',
    relatedTerms: ['inventario', 'flujo-caja', 'kpi'],
  },
  {
    slug: 'flujo-caja',
    term: 'Flujo de Caja',
    definition:
      'Movimiento de dinero entrante y saliente de la empresa. Incluye ingresos por ventas, pagos a proveedores, gastos operativos, inversiones. Crítico para liquidez.',
    relatedTerms: ['cxc', 'cxp', 'cobranza'],
  },
  {
    slug: 'kpi',
    term: 'KPI (Key Performance Indicator)',
    definition:
      'Indicador clave de desempeño. Métrica cuantificable que mide el éxito en alcanzar objetivos de negocio. Ejemplos: margen, rotación, NPS, churn, CAC.',
    relatedTerms: ['bi', 'dashboard', 'metrica'],
  },
  {
    slug: 'dashboard',
    term: 'Dashboard',
    definition:
      'Panel de control visual que muestra KPIs y métricas clave en tiempo real mediante gráficos, tablas y alertas. Facilita toma de decisiones rápida.',
    relatedTerms: ['kpi', 'bi', 'metrica'],
  },
  {
    slug: 'metrica',
    term: 'Métrica',
    definition:
      'Medida cuantitativa de un aspecto del negocio. Puede ser operacional (tiempo de ciclo), financiera (margen), o de cliente (NPS). Base para análisis y mejora.',
    relatedTerms: ['kpi', 'dashboard', 'bi'],
  },
  {
    slug: 'margen',
    term: 'Margen',
    definition:
      'Diferencia entre precio de venta y costo. Margen bruto = (Precio - Costo) / Precio. Margen neto = Utilidad Neta / Ventas. Indica rentabilidad.',
    relatedTerms: ['rentabilidad', 'costo', 'precio'],
  },
  {
    slug: 'costo',
    term: 'Costo',
    definition:
      'Gasto incurrido para producir o adquirir un producto/servicio. Incluye materiales, mano de obra, overhead. Tipos: estándar, real, promedio, FIFO, LIFO.',
    relatedTerms: ['margen', 'precio', 'costeo'],
  },
  {
    slug: 'costeo',
    term: 'Costeo',
    definition:
      'Método para calcular el costo de productos. Costeo estándar usa costos predefinidos. Costeo real usa costos actuales. Costeo ABC asigna overhead por actividades.',
    relatedTerms: ['costo', 'bom', 'manufactura'],
  },
  {
    slug: 'precio',
    term: 'Precio',
    definition:
      'Cantidad de dinero que se cobra por un producto/servicio. Puede tener múltiples niveles (lista, mayoreo, cliente específico), descuentos, promociones.',
    relatedTerms: ['margen', 'costo', 'descuento'],
  },
  {
    slug: 'descuento',
    term: 'Descuento',
    definition:
      'Reducción del precio de venta. Tipos: porcentaje, monto fijo, por volumen, por pronto pago, promocional. Afecta margen y debe controlarse.',
    relatedTerms: ['precio', 'margen', 'promocion'],
  },
  {
    slug: 'promocion',
    term: 'Promoción',
    definition:
      'Oferta temporal para incentivar ventas. Puede incluir descuentos, 2x1, regalos, envío gratis. Debe tener fecha inicio/fin, productos aplicables, condiciones.',
    relatedTerms: ['descuento', 'precio', 'ventas'],
  },
  {
    slug: 'comision',
    term: 'Comisión',
    definition:
      'Compensación variable pagada a vendedores basada en ventas logradas. Puede ser porcentaje de ventas, margen, o monto fijo. Incentiva desempeño.',
    relatedTerms: ['vendedor', 'ventas', 'kpi'],
  },
  {
    slug: 'vendedor',
    term: 'Vendedor',
    definition:
      'Persona responsable de generar ventas. Incluye datos de contacto, territorio, cuota, comisiones, pipeline, clientes asignados, desempeño.',
    relatedTerms: ['comision', 'ventas', 'crm'],
  },
  {
    slug: 'territorio',
    term: 'Territorio',
    definition:
      'Área geográfica o segmento de clientes asignado a un vendedor. Permite organizar fuerza de ventas, evitar conflictos, medir desempeño por región.',
    relatedTerms: ['vendedor', 'cliente', 'ventas'],
  },
  {
    slug: 'cliente',
    term: 'Cliente',
    definition:
      'Persona o empresa que compra productos/servicios. Incluye datos de contacto, historial de compras, saldo CXC, límite de crédito, términos de pago, segmentación.',
    relatedTerms: ['orden-venta', 'cxc', 'crm'],
  },
  {
    slug: 'segmentacion',
    term: 'Segmentación',
    definition:
      'División de clientes en grupos homogéneos según criterios (tamaño, industria, geografía, comportamiento). Permite estrategias de marketing y ventas personalizadas.',
    relatedTerms: ['cliente', 'crm', 'marketing'],
  },
  {
    slug: 'limite-credito',
    term: 'Límite de Crédito',
    definition:
      'Monto máximo que un cliente puede deber. Controla riesgo de incobrabilidad. Sistema debe bloquear ventas si cliente excede límite.',
    relatedTerms: ['cliente', 'cxc', 'riesgo'],
  },
  {
    slug: 'terminos-pago',
    term: 'Términos de Pago',
    definition:
      'Condiciones acordadas para pago de facturas. Ejemplos: contado, 30 días, 60 días, 2/10 neto 30 (2% descuento si paga en 10 días). Afecta flujo de caja.',
    relatedTerms: ['cxc', 'cliente', 'flujo-caja'],
  },
  {
    slug: 'morosidad',
    term: 'Morosidad',
    definition:
      'Retraso en el pago de cuentas por cobrar. Se mide en días vencidos. Alta morosidad afecta flujo de caja y puede requerir provisión para cuentas incobrables.',
    relatedTerms: ['cxc', 'cobranza', 'flujo-caja'],
  },
  {
    slug: 'provision',
    term: 'Provisión',
    definition:
      'Reserva contable para cubrir pérdidas esperadas (cuentas incobrables, obsoletos, garantías). Reduce utilidad pero refleja realidad financiera.',
    relatedTerms: ['morosidad', 'obsoletos', 'contabilidad'],
  },
  {
    slug: 'obsoletos',
    term: 'Obsoletos',
    definition:
      'Productos en inventario que ya no se pueden vender (vencidos, dañados, descontinuados). Deben identificarse, provisionarse y liquidarse.',
    relatedTerms: ['inventario', 'provision', 'rotacion'],
  },
  {
    slug: 'garantia',
    term: 'Garantía',
    definition:
      'Compromiso de reparar o reemplazar producto defectuoso durante período definido. Requiere rastreo de series, fechas de venta, reclamos, costos.',
    relatedTerms: ['serie', 'servicio', 'cliente'],
  },
  {
    slug: 'servicio',
    term: 'Servicio Post-Venta',
    definition:
      'Soporte después de la venta: instalación, capacitación, mantenimiento, reparaciones, garantías. Genera ingresos recurrentes y fidelización.',
    relatedTerms: ['garantia', 'cliente', 'orden-servicio'],
  },
  {
    slug: 'orden-servicio',
    term: 'Orden de Servicio',
    definition:
      'Documento que registra solicitud de servicio técnico. Incluye cliente, equipo, problema, técnico asignado, partes usadas, tiempo, costo.',
    relatedTerms: ['servicio', 'tecnico', 'garantia'],
  },
  {
    slug: 'tecnico',
    term: 'Técnico',
    definition:
      'Persona que realiza servicios técnicos (instalación, mantenimiento, reparación). Incluye habilidades, disponibilidad, órdenes asignadas, desempeño.',
    relatedTerms: ['orden-servicio', 'servicio', 'garantia'],
  },
  {
    slug: 'activo-fijo',
    term: 'Activo Fijo',
    definition:
      'Bien de uso duradero (maquinaria, vehículos, mobiliario, inmuebles). Se deprecia en el tiempo. Requiere registro, depreciación, mantenimiento, baja.',
    relatedTerms: ['depreciacion', 'mantenimiento', 'contabilidad'],
  },
  {
    slug: 'depreciacion',
    term: 'Depreciación',
    definition:
      'Pérdida de valor de activos fijos por uso, obsolescencia o tiempo. Métodos: línea recta, saldos decrecientes, unidades producidas. Afecta utilidad e impuestos.',
    relatedTerms: ['activo-fijo', 'contabilidad', 'impuestos'],
  },
  {
    slug: 'mantenimiento',
    term: 'Mantenimiento',
    definition:
      'Actividades para preservar o restaurar activos fijos. Tipos: preventivo (programado), correctivo (reparación), predictivo (basado en condición).',
    relatedTerms: ['activo-fijo', 'orden-servicio', 'tecnico'],
  },
  {
    slug: 'contabilidad',
    term: 'Contabilidad',
    definition:
      'Registro sistemático de transacciones financieras. Genera estados financieros (balance, P&L, flujo de caja). Base para decisiones, impuestos, auditorías.',
    relatedTerms: ['balance', 'pyg', 'asiento-contable'],
  },
  {
    slug: 'balance',
    term: 'Balance General',
    definition:
      'Estado financiero que muestra activos, pasivos y capital en un momento específico. Ecuación: Activos = Pasivos + Capital. Refleja salud financiera.',
    relatedTerms: ['contabilidad', 'pyg', 'activo'],
  },
  {
    slug: 'pyg',
    term: 'Estado de Resultados (P&L)',
    definition:
      'Estado financiero que muestra ingresos, costos, gastos y utilidad en un período. Fórmula: Utilidad = Ingresos - Costos - Gastos. Mide rentabilidad.',
    relatedTerms: ['contabilidad', 'balance', 'utilidad'],
  },
  {
    slug: 'asiento-contable',
    term: 'Asiento Contable',
    definition:
      'Registro de transacción en el sistema contable. Incluye fecha, cuentas afectadas, debe, haber, descripción. Debe cuadrar (debe = haber).',
    relatedTerms: ['contabilidad', 'cuenta-contable', 'mayor'],
  },
  {
    slug: 'cuenta-contable',
    term: 'Cuenta Contable',
    definition:
      'Categoría que agrupa transacciones similares (bancos, clientes, inventario, ventas, gastos). Organizada en catálogo de cuentas jerárquico.',
    relatedTerms: ['asiento-contable', 'catalogo-cuentas', 'mayor'],
  },
  {
    slug: 'catalogo-cuentas',
    term: 'Catálogo de Cuentas',
    definition:
      'Lista estructurada de todas las cuentas contables. Organizada jerárquicamente (activo > activo circulante > bancos). Base para contabilidad y reportes.',
    relatedTerms: ['cuenta-contable', 'contabilidad', 'balance'],
  },
  {
    slug: 'mayor',
    term: 'Libro Mayor',
    definition:
      'Registro que muestra movimientos y saldo de cada cuenta contable. Incluye fecha, descripción, debe, haber, saldo. Base para estados financieros.',
    relatedTerms: ['cuenta-contable', 'asiento-contable', 'contabilidad'],
  },
  {
    slug: 'conciliacion',
    term: 'Conciliación Bancaria',
    definition:
      'Proceso de comparar saldo contable de bancos vs estado de cuenta bancario. Identifica diferencias (cheques en tránsito, depósitos no registrados, errores).',
    relatedTerms: ['banco', 'contabilidad', 'flujo-caja'],
  },
  {
    slug: 'banco',
    term: 'Banco',
    definition:
      'Cuenta bancaria de la empresa. Incluye movimientos (depósitos, retiros, transferencias), conciliación, saldo disponible, chequera.',
    relatedTerms: ['conciliacion', 'flujo-caja', 'pago'],
  },
  {
    slug: 'pago',
    term: 'Pago',
    definition:
      'Transacción que liquida CXP o CXC. Métodos: efectivo, cheque, transferencia, tarjeta. Genera asiento contable, afecta bancos, actualiza saldos.',
    relatedTerms: ['cxp', 'cxc', 'banco'],
  },
  {
    slug: 'impuestos',
    term: 'Impuestos',
    definition:
      'Obligaciones fiscales (IVA, ISR, retenciones). Calculados en transacciones, declarados periódicamente, pagados a autoridad fiscal. Crítico para compliance.',
    relatedTerms: ['sat', 'cfdi', 'compliance'],
  },
  {
    slug: 'iva',
    term: 'IVA (Impuesto al Valor Agregado)',
    definition:
      'Impuesto indirecto sobre consumo. Se cobra en ventas (IVA trasladado), se paga en compras (IVA acreditable). Diferencia se paga/recupera mensualmente.',
    relatedTerms: ['impuestos', 'sat', 'factura'],
  },
  {
    slug: 'retencion',
    term: 'Retención',
    definition:
      'Impuesto retenido al proveedor y pagado directamente a autoridad fiscal. Tipos: ISR, IVA. Genera constancia de retención. Reduce pago a proveedor.',
    relatedTerms: ['impuestos', 'cxp', 'proveedor'],
  },
];
