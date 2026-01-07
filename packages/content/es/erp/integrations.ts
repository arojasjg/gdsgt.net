import type { Integration } from '../../types';

export const integrations: Integration[] = [
  {
    slug: 'power-bi',
    name: 'Power BI',
    description:
      'Integración nativa con Microsoft Power BI para análisis avanzado y dashboards interactivos con datos en tiempo real del ERP.',
    category: 'bi',
    entities: [
      'Ventas y facturación',
      'Inventario y movimientos',
      'Compras y proveedores',
      'Contabilidad y finanzas',
      'Clientes y cartera',
      'Producción y costos',
    ],
    flow: [
      'Conexión directa a base de datos del ERP (SQL Server/PostgreSQL)',
      'Extracción de datos mediante vistas optimizadas',
      'Transformación y modelado en Power BI Desktop',
      'Publicación a Power BI Service',
      'Actualización automática programada',
      'Acceso mediante roles y permisos',
    ],
    security: [
      'Conexión encriptada (TLS 1.2+)',
      'Autenticación mediante Azure AD o credenciales',
      'Acceso mediante vistas con permisos específicos',
      'Row-level security (RLS) por usuario/empresa',
      'Auditoría de accesos',
    ],
    faqs: [
      {
        question: '¿Qué datos puedo visualizar en Power BI?',
        answer:
          'Todos los datos del ERP: ventas, inventario, compras, contabilidad, clientes, producción, RRHH, etc. Se exponen mediante vistas optimizadas.',
      },
      {
        question: '¿Con qué frecuencia se actualizan los datos?',
        answer:
          'Puedes configurar actualizaciones desde cada hora hasta diarias. Para datos en tiempo real, se puede usar DirectQuery.',
      },
      {
        question: '¿Necesito licencia de Power BI?',
        answer:
          'Sí, necesitas Power BI Pro o Premium para publicar y compartir reportes. Power BI Desktop es gratuito.',
      },
    ],
  },
  {
    slug: 'looker-studio',
    name: 'Looker Studio (Google Data Studio)',
    description:
      'Integración con Looker Studio para crear dashboards y reportes visuales con datos del ERP, ideal para compartir con equipos.',
    category: 'bi',
    entities: [
      'Ventas y facturación',
      'Inventario',
      'Compras',
      'Finanzas',
      'KPIs operacionales',
    ],
    flow: [
      'Exportación de datos a Google Sheets o BigQuery',
      'Conexión de Looker Studio a la fuente de datos',
      'Creación de dashboards interactivos',
      'Compartir con usuarios autorizados',
      'Actualización automática de datos',
    ],
    security: [
      'Autenticación mediante Google Workspace',
      'Permisos de acceso por usuario/grupo',
      'Datos encriptados en tránsito y reposo',
      'Auditoría de accesos',
    ],
    faqs: [
      {
        question: '¿Cómo se actualizan los datos?',
        answer:
          'Mediante sincronización programada (cada hora, diaria, etc.) desde el ERP a Google Sheets o BigQuery.',
      },
      {
        question: '¿Es gratuito Looker Studio?',
        answer: 'Sí, Looker Studio es gratuito. Solo necesitas una cuenta de Google.',
      },
    ],
  },
  {
    slug: 'excel-csv',
    name: 'Excel / CSV',
    description:
      'Importación y exportación masiva de datos mediante archivos Excel o CSV, con validación y mapeo de campos.',
    category: 'data',
    entities: [
      'Catálogos (productos, clientes, proveedores)',
      'Transacciones (ventas, compras, pagos)',
      'Inventario inicial',
      'Saldos contables',
    ],
    flow: [
      'Descarga de plantilla Excel/CSV con estructura requerida',
      'Llenado de datos en la plantilla',
      'Carga del archivo en el ERP',
      'Validación automática de datos',
      'Revisión de errores y corrección',
      'Importación definitiva',
    ],
    security: [
      'Validación de estructura y tipos de datos',
      'Detección de duplicados',
      'Registro de auditoría de importaciones',
      'Rollback en caso de error',
    ],
    faqs: [
      {
        question: '¿Qué formato de archivo debo usar?',
        answer:
          'Puedes usar Excel (.xlsx) o CSV (.csv). Recomendamos Excel para mayor compatibilidad.',
      },
      {
        question: '¿Puedo importar datos históricos?',
        answer:
          'Sí, puedes importar datos históricos respetando la estructura y validaciones del sistema.',
      },
    ],
  },
  {
    slug: 'zapier-webhooks',
    name: 'Zapier / Webhooks',
    description:
      'Integración mediante Zapier y webhooks para conectar el ERP con más de 5,000 aplicaciones y automatizar flujos de trabajo.',
    category: 'api',
    entities: [
      'Clientes nuevos',
      'Órdenes de venta',
      'Facturas',
      'Pagos recibidos',
      'Productos',
      'Inventario',
    ],
    flow: [
      'Configuración de webhooks en el ERP (eventos a notificar)',
      'Creación de Zap en Zapier',
      'Mapeo de campos entre ERP y aplicación destino',
      'Prueba de integración',
      'Activación del Zap',
      'Monitoreo de ejecuciones',
    ],
    security: [
      'Autenticación mediante API key',
      'Webhooks firmados (HMAC)',
      'HTTPS obligatorio',
      'Rate limiting',
      'Auditoría de llamadas',
    ],
    faqs: [
      {
        question: '¿Qué eventos puedo notificar mediante webhooks?',
        answer:
          'Creación/actualización de clientes, productos, órdenes, facturas, pagos, inventario, etc.',
      },
      {
        question: '¿Necesito cuenta de Zapier?',
        answer:
          'Sí, necesitas una cuenta de Zapier (tienen plan gratuito con límites). Los webhooks directos no requieren Zapier.',
      },
    ],
  },
  {
    slug: 'whatsapp',
    name: 'WhatsApp Business',
    description:
      'Integración con WhatsApp Business API para enviar notificaciones, confirmaciones de pedidos, estados de cuenta y soporte.',
    category: 'messaging',
    entities: [
      'Notificaciones de pedidos',
      'Confirmaciones de pago',
      'Estados de cuenta',
      'Recordatorios de vencimiento',
      'Soporte al cliente',
    ],
    flow: [
      'Configuración de WhatsApp Business API',
      'Definición de plantillas de mensajes',
      'Configuración de triggers en el ERP',
      'Envío automático de notificaciones',
      'Recepción de respuestas (opcional)',
      'Registro de interacciones',
    ],
    security: [
      'Autenticación mediante WhatsApp Business API',
      'Encriptación end-to-end de mensajes',
      'Opt-in de clientes requerido',
      'Cumplimiento con políticas de WhatsApp',
      'Auditoría de mensajes enviados',
    ],
    faqs: [
      {
        question: '¿Necesito WhatsApp Business API?',
        answer:
          'Sí, necesitas una cuenta de WhatsApp Business API (diferente a la app). Se puede contratar mediante proveedores oficiales.',
      },
      {
        question: '¿Puedo recibir mensajes de clientes?',
        answer:
          'Sí, puedes recibir y responder mensajes dentro de una ventana de 24 horas desde el último mensaje del cliente.',
      },
    ],
  },
  {
    slug: 'email-smtp',
    name: 'Email / SMTP',
    description:
      'Integración con servidores SMTP para envío automático de facturas, cotizaciones, estados de cuenta y notificaciones por email.',
    category: 'messaging',
    entities: [
      'Facturas electrónicas',
      'Cotizaciones',
      'Órdenes de compra',
      'Estados de cuenta',
      'Recordatorios de pago',
      'Notificaciones del sistema',
    ],
    flow: [
      'Configuración de servidor SMTP',
      'Definición de plantillas de email',
      'Configuración de envíos automáticos',
      'Personalización de contenido',
      'Envío y registro de emails',
      'Seguimiento de aperturas (opcional)',
    ],
    security: [
      'Conexión SMTP segura (TLS/SSL)',
      'Autenticación mediante credenciales',
      'SPF, DKIM, DMARC configurados',
      'Rate limiting',
      'Auditoría de envíos',
    ],
    faqs: [
      {
        question: '¿Qué servidor SMTP puedo usar?',
        answer:
          'Puedes usar Gmail, Outlook, SendGrid, Amazon SES, Mailgun, o tu propio servidor SMTP.',
      },
      {
        question: '¿Puedo personalizar las plantillas de email?',
        answer:
          'Sí, puedes personalizar completamente el diseño y contenido de las plantillas con tu marca.',
      },
    ],
  },
  {
    slug: 'payment-gateways',
    name: 'Pasarelas de Pago',
    description:
      'Integración con pasarelas de pago para procesar pagos en línea, generar links de pago y conciliar automáticamente.',
    category: 'payments',
    entities: ['Facturas', 'Órdenes de venta', 'Pagos recibidos', 'Conciliación bancaria'],
    flow: [
      'Configuración de pasarela de pago (credenciales API)',
      'Generación de link de pago desde factura',
      'Cliente realiza pago en línea',
      'Notificación de pago recibida (webhook)',
      'Aplicación automática del pago en el ERP',
      'Conciliación bancaria',
    ],
    security: [
      'Cumplimiento PCI-DSS',
      'Tokenización de tarjetas',
      'Webhooks firmados',
      'HTTPS obligatorio',
      'Auditoría de transacciones',
    ],
    faqs: [
      {
        question: '¿Qué pasarelas soportan?',
        answer:
          'Actualmente mediante servicios de integración. Pasarelas comunes: Stripe, PayPal, Visa/Mastercard local. Consulta disponibilidad.',
      },
      {
        question: '¿Se concilian automáticamente los pagos?',
        answer:
          'Sí, mediante webhooks se aplican automáticamente los pagos a las facturas correspondientes.',
      },
    ],
  },
  {
    slug: 'rest-api',
    name: 'REST API / SDK',
    description:
      'API REST completa para integrar el ERP con cualquier sistema externo, con documentación OpenAPI y SDKs disponibles.',
    category: 'api',
    entities: [
      'Todos los módulos del ERP',
      'Catálogos',
      'Transacciones',
      'Reportes',
      'Configuración',
    ],
    flow: [
      'Generación de API key en el ERP',
      'Consulta de documentación API (OpenAPI/Swagger)',
      'Desarrollo de integración',
      'Pruebas en ambiente sandbox',
      'Despliegue a producción',
      'Monitoreo de uso',
    ],
    security: [
      'Autenticación mediante API key o OAuth 2.0',
      'Rate limiting por cliente',
      'HTTPS obligatorio',
      'Permisos granulares por endpoint',
      'Auditoría de llamadas',
      'Webhooks firmados (HMAC)',
    ],
    faqs: [
      {
        question: '¿Qué puedo hacer con la API?',
        answer:
          'Crear, leer, actualizar y eliminar registros en todos los módulos del ERP. También consultar reportes y configurar webhooks.',
      },
      {
        question: '¿Hay límite de llamadas?',
        answer:
          'Sí, hay rate limiting configurable por cliente (ej: 1000 llamadas/hora). Consulta tu plan.',
      },
      {
        question: '¿Hay SDKs disponibles?',
        answer:
          'Sí, ofrecemos SDKs oficiales en JavaScript/TypeScript, Python y PHP. También puedes usar la API REST directamente.',
      },
    ],
  },
];
