/**
 * Landings por industria del servicio de software a la medida
 * Ruta: /es/software-a-la-medida/[slug]
 */

export interface CustomSoftwareIndustry {
  slug: string;
  name: string;
  seo: { title: string; description: string; keywords: string[] };
  h1: string;
  intro: string;
  pains: { title: string; description: string }[];
  features: { title: string; description: string }[];
  workflow: string[];
  integrations: string[];
  recommendedPlan: { name: string; reason: string };
  faq: { question: string; answer: string }[];
  whatsappMessage: string;
}

export const customSoftwareIndustries: CustomSoftwareIndustry[] = [
  {
    slug: 'app-pedidos-distribuidoras',
    name: 'Distribuidoras',
    seo: {
      title: 'App de Pedidos para Distribuidoras en Guatemala desde Q2,500/mes | GDS',
      description:
        'App a la medida para vendedores en ruta: toma de pedidos sin conexión, inventario en tiempo real, cobros, rutas y facturación FEL. Para distribuidoras en Guatemala desde Q2,500/mes.',
      keywords: ['app de pedidos distribuidora', 'app para vendedores en ruta', 'preventa móvil Guatemala', 'software para distribuidoras Guatemala', 'toma de pedidos app'],
    },
    h1: 'App de pedidos y preventa para distribuidoras',
    intro:
      'Tus vendedores toman pedidos desde el celular, con precios, existencias y crédito del cliente al día, incluso sin señal. La bodega recibe el pedido al instante y la factura FEL sale sin volver a digitar nada.',
    pains: [
      { title: 'Pedidos por WhatsApp y papel', description: 'Pedidos que se pierden, se digitan dos veces o llegan con errores de precio y código.' },
      { title: 'Vendes lo que no tienes', description: 'El vendedor no ve existencias reales y la bodega descubre los faltantes al despachar.' },
      { title: 'Cobros sin control', description: 'Saldos, abonos y límites de crédito que solo conoce el vendedor en su libreta.' },
    ],
    features: [
      { title: 'Pedidos sin conexión', description: 'La app guarda los pedidos en el teléfono y los sincroniza al recuperar señal.' },
      { title: 'Catálogo con precios por cliente', description: 'Listas de precios, descuentos, promociones y bonificaciones por cliente o canal.' },
      { title: 'Existencias en tiempo real', description: 'Inventario por bodega visible desde la ruta para vender solo lo disponible.' },
      { title: 'Cobros y estados de cuenta', description: 'Registro de abonos con recibo digital, saldos y alertas de crédito vencido.' },
      { title: 'Rutas y visitas con GPS', description: 'Plan de visitas, registro de ubicación y fotos del punto de venta.' },
      { title: 'Tablero para gerencia', description: 'Ventas por vendedor, ruta, cliente y producto, con metas y comisiones.' },
    ],
    workflow: [
      'El vendedor abre la ruta del día y visita al cliente.',
      'Toma el pedido con precios y existencias actualizados, aunque no tenga señal.',
      'El pedido llega a bodega para preparar el despacho.',
      'Se emite la factura FEL y el cliente la recibe por WhatsApp o correo.',
      'Gerencia ve ventas, cobros y avance de metas en tiempo real.',
    ],
    integrations: ['Factura electrónica FEL (SAT)', 'Tu ERP o GDS ONE', 'WhatsApp Business', 'Google Maps', 'Excel / Power BI'],
    recommendedPlan: { name: 'Profesional', reason: 'Incluye app móvil Android/iOS, sistema web para bodega y gerencia, e integración FEL.' },
    faq: [
      { question: '¿La app funciona sin internet?', answer: 'Sí. Los pedidos y cobros se guardan en el teléfono y se sincronizan automáticamente cuando hay conexión.' },
      { question: '¿Se integra con mi ERP actual?', answer: 'Sí, mediante API o archivos de intercambio. Si usas GDS ONE, la integración es directa.' },
      { question: '¿Cuántos vendedores pueden usarla?', answer: 'El plan Profesional incluye hasta 50 usuarios; para equipos más grandes cotizamos el plan Empresarial.' },
      { question: '¿Funciona en Android y iPhone?', answer: 'Sí, desarrollamos la app para ambos sistemas.' },
    ],
    whatsappMessage: 'Hola GDS, me interesa una app de pedidos para mi distribuidora.',
  },
  {
    slug: 'sistema-citas-clinicas',
    name: 'Clínicas',
    seo: {
      title: 'Sistema de Citas y Expediente Clínico a la Medida en Guatemala | GDS',
      description:
        'Sistema a la medida para clínicas y consultorios: agenda en línea, recordatorios por WhatsApp, expediente clínico, cobros y facturación FEL. Desde Q2,500/mes en Guatemala.',
      keywords: ['sistema de citas clínica', 'software para clínicas Guatemala', 'expediente clínico electrónico', 'agenda médica en línea', 'software consultorio médico'],
    },
    h1: 'Sistema de citas y expediente clínico para tu clínica',
    intro:
      'Tus pacientes agendan en línea o por WhatsApp, reciben recordatorios automáticos y tu equipo tiene el expediente, las recetas y los cobros en un solo lugar, seguro y accesible desde cualquier dispositivo.',
    pains: [
      { title: 'Pacientes que no llegan', description: 'Citas olvidadas que dejan espacios vacíos en la agenda del médico.' },
      { title: 'Expedientes en papel', description: 'Historias clínicas difíciles de encontrar, incompletas o ilegibles.' },
      { title: 'Recepción saturada', description: 'Teléfono y WhatsApp llenos de mensajes para agendar, confirmar y reprogramar.' },
    ],
    features: [
      { title: 'Agenda en línea', description: 'Reserva de citas por médico, especialidad, sede y tipo de consulta.' },
      { title: 'Recordatorios por WhatsApp', description: 'Confirmación y recordatorio automático para reducir ausencias.' },
      { title: 'Expediente clínico', description: 'Historia clínica, notas de evolución, adjuntos, recetas y órdenes de laboratorio.' },
      { title: 'Cobros y facturación', description: 'Caja por sede, seguros, paquetes de tratamiento y factura FEL.' },
      { title: 'Portal del paciente', description: 'Resultados, recetas y próximas citas desde el celular.' },
      { title: 'Seguridad y permisos', description: 'Accesos por rol, bitácora de cambios y respaldos diarios.' },
    ],
    workflow: [
      'El paciente agenda desde la web o por WhatsApp.',
      'Recibe confirmación y un recordatorio el día anterior.',
      'El médico consulta y actualiza el expediente durante la cita.',
      'Recepción cobra y emite la factura FEL.',
      'El paciente recibe su receta y sus indicaciones en el celular.',
    ],
    integrations: ['WhatsApp Business API', 'Factura electrónica FEL (SAT)', 'Pasarelas de pago', 'Google Calendar', 'Laboratorios (API)'],
    recommendedPlan: { name: 'Esencial o Profesional', reason: 'Esencial para una clínica con agenda y expediente; Profesional si necesitas app, varias sedes o integración con laboratorios.' },
    faq: [
      { question: '¿Los datos de los pacientes están seguros?', answer: 'Sí. Usamos conexiones cifradas, permisos por rol, bitácora de accesos y respaldos diarios.' },
      { question: '¿Sirve para varias sedes y médicos?', answer: 'Sí. La agenda y los reportes se manejan por sede, médico y especialidad.' },
      { question: '¿Puedo migrar mis expedientes actuales?', answer: 'Sí. Migramos la información desde Excel u otros sistemas como parte del arranque.' },
      { question: '¿Los pacientes necesitan instalar algo?', answer: 'No. Agendan desde la web o por WhatsApp; el portal del paciente funciona en el navegador.' },
    ],
    whatsappMessage: 'Hola GDS, me interesa un sistema de citas y expediente para mi clínica.',
  },
  {
    slug: 'ordenes-de-trabajo-servicios-tecnicos',
    name: 'Servicios técnicos',
    seo: {
      title: 'App de Órdenes de Trabajo para Técnicos en Campo en Guatemala | GDS',
      description:
        'Software a la medida para empresas de servicio técnico: órdenes de trabajo, app para técnicos en campo, firma digital, fotos, repuestos y reportes al cliente. Desde Q2,500/mes.',
      keywords: ['app órdenes de trabajo', 'software servicio técnico', 'app técnicos en campo', 'field service Guatemala', 'software mantenimiento'],
    },
    h1: 'Órdenes de trabajo y app para técnicos en campo',
    intro:
      'Asigna servicios, sigue a tus técnicos y entrega a tus clientes un reporte profesional con fotos y firma al terminar cada visita. Todo sin papeles ni llamadas para preguntar cómo va.',
    pains: [
      { title: 'Órdenes en papel', description: 'Boletas que se pierden, se llenan incompletas o llegan días después a la oficina.' },
      { title: 'Sin visibilidad del campo', description: 'No sabes dónde está cada técnico ni cuánto tarda cada servicio.' },
      { title: 'Repuestos sin control', description: 'Materiales usados que no se cobran ni se descuentan del inventario.' },
    ],
    features: [
      { title: 'Despacho de órdenes', description: 'Asignación por técnico, zona, habilidad y prioridad, con calendario.' },
      { title: 'App para el técnico', description: 'Detalle del servicio, checklist, fotos antes y después, y funcionamiento sin conexión.' },
      { title: 'Firma digital del cliente', description: 'Conformidad firmada en el teléfono y reporte PDF enviado automáticamente.' },
      { title: 'Repuestos e inventario', description: 'Materiales por orden, inventario por vehículo y cobro automático.' },
      { title: 'Mantenimientos preventivos', description: 'Contratos y visitas programadas con recordatorios.' },
      { title: 'Indicadores', description: 'Tiempos de respuesta, servicios por técnico, satisfacción y rentabilidad.' },
    ],
    workflow: [
      'El cliente reporta la falla por WhatsApp, teléfono o portal.',
      'Se crea la orden y se asigna al técnico disponible.',
      'El técnico registra diagnóstico, fotos y repuestos en la app.',
      'El cliente firma en el teléfono y recibe el reporte en PDF.',
      'Se factura y se actualizan inventario e indicadores.',
    ],
    integrations: ['WhatsApp Business', 'Factura electrónica FEL (SAT)', 'Google Maps', 'Tu ERP o GDS ONE', 'Correo'],
    recommendedPlan: { name: 'Profesional', reason: 'Incluye la app móvil para técnicos, el sistema web de despacho e integraciones.' },
    faq: [
      { question: '¿La app funciona donde no hay señal?', answer: 'Sí. El técnico trabaja sin conexión y la información se sincroniza al recuperar señal.' },
      { question: '¿Puedo ver dónde están mis técnicos?', answer: 'Sí, con registro de ubicación al iniciar y cerrar cada servicio.' },
      { question: '¿El cliente recibe un reporte?', answer: 'Sí, un PDF con fotos, detalle del trabajo y firma, por correo o WhatsApp.' },
      { question: '¿Sirve para mantenimientos preventivos?', answer: 'Sí. Programamos visitas recurrentes por contrato con recordatorios automáticos.' },
    ],
    whatsappMessage: 'Hola GDS, me interesa un sistema de órdenes de trabajo para mis técnicos.',
  },
  {
    slug: 'control-de-obra-constructoras',
    name: 'Constructoras',
    seo: {
      title: 'Software de Control de Obra para Constructoras en Guatemala | GDS',
      description:
        'Sistema a la medida para constructoras: avance de obra con fotos, presupuesto vs. real, requisiciones, bodegas, planillas y bitácora. Desde Q2,500/mes en Guatemala.',
      keywords: ['software control de obra', 'software para constructoras Guatemala', 'avance de obra app', 'control de costos construcción', 'bitácora de obra digital'],
    },
    h1: 'Control de obra y costos para constructoras',
    intro:
      'Compara presupuesto contra gasto real en cada proyecto, registra el avance con fotos desde la obra y controla requisiciones, bodegas y planillas sin esperar el cierre de mes.',
    pains: [
      { title: 'Sobrecostos que se descubren tarde', description: 'Sabes que un proyecto perdió dinero cuando ya terminó.' },
      { title: 'Materiales que desaparecen', description: 'Requisiciones y salidas de bodega sin trazabilidad por proyecto.' },
      { title: 'Avance sin evidencia', description: 'Reportes de obra por WhatsApp, difíciles de consolidar para el cliente o el banco.' },
    ],
    features: [
      { title: 'Presupuesto vs. real', description: 'Costos por proyecto, fase y renglón, con alertas de desviación.' },
      { title: 'Bitácora con fotos', description: 'Avance diario desde la obra con fotos, ubicación y comentarios.' },
      { title: 'Requisiciones y compras', description: 'Solicitudes desde la obra con aprobación y seguimiento.' },
      { title: 'Bodegas por proyecto', description: 'Ingresos, salidas y traslados de materiales con trazabilidad.' },
      { title: 'Planillas y destajos', description: 'Asistencia de cuadrillas y pagos por avance.' },
      { title: 'Reportes para clientes', description: 'Informes de avance y estimaciones listos para enviar.' },
    ],
    workflow: [
      'Se carga el presupuesto del proyecto por fases y renglones.',
      'El residente registra avance, fotos y requisiciones desde la obra.',
      'Compras y bodega atienden las requisiciones aprobadas.',
      'El sistema compara gasto real contra presupuesto y alerta desviaciones.',
      'Gerencia y cliente reciben informes de avance actualizados.',
    ],
    integrations: ['Tu ERP o GDS ONE', 'Factura electrónica FEL (SAT)', 'Excel / Power BI', 'WhatsApp Business'],
    recommendedPlan: { name: 'Profesional', reason: 'Incluye la app para residentes de obra, el sistema web de costos y los tableros.' },
    faq: [
      { question: '¿Puedo importar mis presupuestos de Excel?', answer: 'Sí. Importamos presupuestos y renglones desde tus plantillas actuales.' },
      { question: '¿Funciona para varios proyectos a la vez?', answer: 'Sí. Cada proyecto tiene su presupuesto, bodega, bitácora y reportes.' },
      { question: '¿Los residentes necesitan computadora?', answer: 'No. Registran avance, fotos y requisiciones desde la app en su celular.' },
      { question: '¿Se integra con contabilidad?', answer: 'Sí, con GDS ONE u otro ERP mediante integración.' },
    ],
    whatsappMessage: 'Hola GDS, me interesa un sistema de control de obra para mi constructora.',
  },
];

export function getCustomSoftwareIndustry(slug: string) {
  return customSoftwareIndustries.find((i) => i.slug === slug);
}
