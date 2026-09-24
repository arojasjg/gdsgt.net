/**
 * Servicio: Desarrollo de Software y Apps a la Medida (suscripción mensual)
 *
 * Contenido de la landing /[lang]/software-a-la-medida
 */

export interface CustomSoftwarePlan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  /** Precio numérico en GTQ para schema.org (undefined = cotización) */
  priceValue?: number;
  tagline: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
  highlighted?: boolean;
}

export interface CustomSoftwareContent {
  seo: { title: string; description: string; keywords: string[] };
  breadcrumb: { home: string; current: string };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
  };
  problem: { title: string; items: { title: string; description: string }[] };
  whatWeBuild: { title: string; description: string; items: { icon: string; title: string; description: string }[] };
  plans: { title: string; description: string; items: CustomSoftwarePlan[]; footnote: string };
  included: { title: string; items: string[] };
  process: { title: string; description: string; steps: { title: string; description: string }[] };
  comparison: {
    title: string;
    description: string;
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  useCases: { title: string; items: { industry: string; examples: string }[] };
  integrations: { title: string; description: string; items: string[] };
  whyGds: { title: string; items: { title: string; description: string }[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  form: {
    title: string;
    description: string;
    name: string;
    company: string;
    phone: string;
    projectType: string;
    projectTypes: string[];
    plan: string;
    planOptions: string[];
    details: string;
    detailsPlaceholder: string;
    submit: string;
    privacy: string;
    whatsappIntro: string;
  };
  finalCta: { title: string; description: string; button: string };
}

export const customSoftwareEs: CustomSoftwareContent = {
  seo: {
    title: 'Desarrollo de Software a la Medida en Guatemala desde Q2,500/mes | GDS',
    description:
      'Desarrollo de software y apps a la medida en Guatemala por suscripción desde Q2,500 al mes: sistemas web, apps móviles, integraciones FEL, pagos y WhatsApp. Hosting, soporte y mejoras mensuales incluidas. Diagnóstico gratis.',
    keywords: [
      'desarrollo de software a la medida',
      'software a la medida Guatemala',
      'desarrollo de aplicaciones Guatemala',
      'desarrollo de apps Guatemala',
      'empresa de desarrollo de software Guatemala',
      'programación a la medida',
      'sistema a la medida',
      'desarrollo web a la medida',
      'apps móviles Android iOS Guatemala',
      'software por suscripción',
      'integración FEL SAT',
      'software para pymes Guatemala',
      'fábrica de software Guatemala',
    ],
  },
  breadcrumb: { home: 'Inicio', current: 'Software a la medida' },
  hero: {
    badge: 'Nuevo · Desde Q2,500 al mes',
    title: 'Software y apps a la medida de tu empresa, por una mensualidad fija',
    description:
      'Diseñamos, desarrollamos, alojamos y mejoramos tu sistema web o app móvil cada mes. Sin pagar decenas de miles de quetzales por adelantado y sin contratar un equipo de programadores. Tú pones la idea; nosotros la convertimos en software que funciona.',
    primaryCta: 'Agendar diagnóstico gratis',
    secondaryCta: 'Cotizar por WhatsApp',
    trust: [
      '+100 empresas confían en GDS',
      'Equipo en Guatemala',
      'Primera versión en semanas, no meses',
      'Hosting, soporte y mejoras incluidos',
      'Tus datos siempre son tuyos',
    ],
  },
  problem: {
    title: '¿Te suena familiar?',
    items: [
      {
        title: 'Tu operación vive en Excel y WhatsApp',
        description:
          'Pedidos, cotizaciones, inventario y cobros repartidos en hojas de cálculo y chats. Se pierde información y nadie tiene la cifra correcta.',
      },
      {
        title: 'El software “enlatado” no se adapta',
        description:
          'Pagas licencias por funciones que no usas y aun así te falta lo que tu proceso realmente necesita.',
      },
      {
        title: 'Un proyecto a la medida parece inalcanzable',
        description:
          'Las cotizaciones tradicionales piden un pago inicial alto, tardan meses y después cobran aparte cada cambio y el mantenimiento.',
      },
      {
        title: 'El programador freelance desapareció',
        description:
          'Sistemas sin documentación, sin respaldos y sin nadie que responda cuando algo falla.',
      },
    ],
  },
  whatWeBuild: {
    title: 'Qué desarrollamos',
    description: 'Soluciones reales para procesos reales. Si tu empresa lo hace, lo podemos digitalizar.',
    items: [
      { icon: '🖥️', title: 'Sistemas web a la medida', description: 'Inventarios, cotizaciones, órdenes de trabajo, cobros, planillas, control de proyectos e intranets.' },
      { icon: '📱', title: 'Apps móviles Android y iOS', description: 'Apps para vendedores, técnicos en campo, repartidores y clientes, con funcionamiento sin conexión.' },
      { icon: '🛒', title: 'Portales y tiendas en línea', description: 'Portales de clientes y proveedores, catálogos, pedidos B2B y e-commerce con pagos en línea.' },
      { icon: '🔗', title: 'Integraciones y automatización', description: 'Factura electrónica FEL, bancos, pasarelas de pago, WhatsApp, ERP, correo y APIs de terceros.' },
      { icon: '📊', title: 'Dashboards y reportes', description: 'Indicadores en tiempo real, reportes automáticos y tableros de Business Intelligence.' },
      { icon: '🤖', title: 'Inteligencia Artificial aplicada', description: 'Chatbots, asistentes para atención al cliente, lectura de documentos y automatización con IA.' },
    ],
  },
  plans: {
    title: 'Planes de desarrollo a la medida',
    description:
      'Una mensualidad fija que incluye el desarrollo, la infraestructura, el soporte y la evolución continua de tu software.',
    items: [
      {
        id: 'esencial',
        name: 'Esencial',
        price: 'Q2,500',
        priceNote: '/mes',
        priceValue: 2500,
        tagline: 'Para digitalizar un proceso clave de tu negocio',
        features: [
          '1 sistema web o app web (PWA) a la medida',
          'Desarrollo inicial incluido según el alcance del diagnóstico',
          'Hasta 10 horas al mes de mejoras y nuevas funciones',
          'Hasta 10 usuarios',
          'Hosting en la nube, dominio con SSL y respaldos diarios',
          'Soporte por WhatsApp y correo en horario hábil',
          'Capacitación para tu equipo',
        ],
        cta: 'Empezar con Esencial',
        whatsappMessage: 'Hola GDS, me interesa el plan Esencial de software a la medida (Q2,500/mes). Quiero agendar un diagnóstico.',
      },
      {
        id: 'profesional',
        name: 'Profesional',
        price: 'Q5,900',
        priceNote: '/mes',
        priceValue: 5900,
        tagline: 'Para empresas que necesitan web + app e integraciones',
        features: [
          'Sistema web + app móvil Android/iOS (o 2 sistemas web)',
          'Hasta 25 horas al mes de mejoras y nuevas funciones',
          'Hasta 50 usuarios',
          'Integraciones: FEL, pasarela de pagos, WhatsApp o tu ERP',
          'Dashboard de indicadores',
          'Soporte prioritario y monitoreo',
          'Reunión mensual de seguimiento y roadmap',
        ],
        cta: 'Empezar con Profesional',
        whatsappMessage: 'Hola GDS, me interesa el plan Profesional de software a la medida (Q5,900/mes). Quiero agendar un diagnóstico.',
        highlighted: true,
      },
      {
        id: 'empresarial',
        name: 'Empresarial',
        price: 'A la medida',
        priceNote: '',
        tagline: 'Equipo dedicado para proyectos grandes o críticos',
        features: [
          'Desarrollador o equipo dedicado (squad)',
          'Arquitectura, QA y DevOps incluidos',
          'Usuarios ilimitados y ambientes de prueba',
          'Integraciones complejas y alta disponibilidad',
          'Acuerdo de nivel de servicio (SLA)',
          'Gerente de proyecto asignado',
        ],
        cta: 'Solicitar propuesta',
        whatsappMessage: 'Hola GDS, necesito una propuesta de desarrollo a la medida con equipo dedicado.',
      },
    ],
    footnote:
      'Precios en quetzales, no incluyen IVA. Contrato mínimo de 12 meses. El alcance del desarrollo inicial se define por escrito en el diagnóstico gratuito. También cotizamos proyectos con pago único.',
  },
  included: {
    title: 'Todo incluido en tu mensualidad',
    items: [
      'Análisis y diseño de la solución (UX/UI)',
      'Desarrollo, pruebas y puesta en producción',
      'Servidores en la nube, dominio y certificado SSL',
      'Respaldos automáticos diarios',
      'Actualizaciones de seguridad',
      'Soporte técnico en español',
      'Mejoras y nuevas funciones cada mes',
      'Documentación y capacitación',
    ],
  },
  process: {
    title: 'Cómo trabajamos',
    description: 'Un proceso claro para que sepas qué recibes, cuándo y cuánto cuesta.',
    steps: [
      { title: '1. Diagnóstico gratis', description: 'Una llamada de 30 a 45 minutos para entender tu proceso, tus usuarios y tus objetivos.' },
      { title: '2. Propuesta y prototipo', description: 'Te presentamos el alcance, el plan recomendado y un prototipo navegable antes de firmar.' },
      { title: '3. Desarrollo por sprints', description: 'Entregas cada dos semanas con demostración, para que veas el avance y lo ajustes a tiempo.' },
      { title: '4. Lanzamiento', description: 'Publicamos tu sistema, migramos tus datos y capacitamos a tu equipo.' },
      { title: '5. Mejora continua', description: 'Cada mes usamos tus horas de mejora para agregar funciones según las prioridades de tu negocio.' },
    ],
  },
  comparison: {
    title: '¿Por qué una suscripción y no un proyecto tradicional?',
    description: 'Compara las opciones más comunes para tener software propio.',
    columns: ['GDS suscripción', 'Programador interno', 'Freelancer', 'Agencia tradicional'],
    rows: [
      { label: 'Inversión inicial', values: ['Baja', 'Reclutamiento y equipo', 'Media', 'Alta'] },
      { label: 'Costo mensual predecible', values: ['✅ Fijo', '⚠️ Salario + prestaciones', '❌ Variable', '❌ Cambios con costo extra'] },
      { label: 'Hosting, respaldos y seguridad', values: ['✅ Incluidos', '❌ Aparte', '❌ Aparte', '⚠️ Aparte'] },
      { label: 'Mejoras continuas', values: ['✅ Cada mes', '✅', '⚠️ Según disponibilidad', '❌ Nueva cotización'] },
      { label: 'Continuidad si alguien se va', values: ['✅ Equipo y documentación', '❌ Riesgo alto', '❌ Riesgo alto', '⚠️'] },
      { label: 'Diseño, QA y DevOps', values: ['✅ Incluidos', '❌', '❌', '✅'] },
    ],
  },
  useCases: {
    title: 'Ejemplos por industria',
    items: [
      { industry: 'Distribuidoras y comercio', examples: 'Toma de pedidos en ruta, control de inventario, cobros y comisiones de vendedores.' },
      { industry: 'Clínicas y salud', examples: 'Agenda de citas, expediente clínico, recordatorios por WhatsApp y facturación.' },
      { industry: 'Restaurantes', examples: 'Pedidos en línea, control de insumos, recetas y cierres de caja por sucursal.' },
      { industry: 'Construcción', examples: 'Avance de obra, bodegas, requisiciones, planillas y bitácora con fotos.' },
      { industry: 'Servicios técnicos', examples: 'Órdenes de trabajo, técnicos en campo con app, firmas digitales y reportes al cliente.' },
      { industry: 'Educación', examples: 'Inscripciones, pagos de colegiatura, notas y comunicación con padres.' },
      { industry: 'Logística', examples: 'Rastreo de envíos, pruebas de entrega, rutas y portal para clientes.' },
      { industry: 'Manufactura', examples: 'Órdenes de producción, control de calidad, trazabilidad de lotes y mantenimiento.' },
    ],
  },
  integrations: {
    title: 'Integrado con lo que ya usas',
    description: 'Conectamos tu software con los servicios que tu operación necesita en Guatemala y la región.',
    items: [
      'Factura electrónica FEL (SAT)',
      'Pasarelas de pago y bancos',
      'WhatsApp Business API',
      'GDS ONE ERP',
      'Google Workspace y Microsoft 365',
      'Power BI y Looker Studio',
      'Correo y SMS',
      'APIs REST de terceros',
    ],
  },
  whyGds: {
    title: 'Por qué GDS',
    items: [
      { title: 'Experiencia empresarial', description: 'Somos el equipo detrás de GDS ONE ERP. Entendemos contabilidad, inventarios, ventas y operación, no solo código.' },
      { title: 'Equipo local', description: 'Atención en español, en tu horario y con reuniones presenciales en Guatemala cuando se necesitan.' },
      { title: 'Tecnología moderna', description: 'Aplicaciones web y móviles con tecnologías actuales, en la nube, seguras y listas para crecer.' },
      { title: 'Sin sorpresas', description: 'Mensualidad fija, alcance por escrito y entregas cada dos semanas que puedes probar.' },
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Cuánto cuesta desarrollar un software a la medida en Guatemala?',
        answer:
          'Con GDS puedes empezar desde Q2,500 al mes (plan Esencial) con desarrollo, hosting, soporte y mejoras incluidos. Un proyecto tradicional de pago único suele requerir una inversión inicial alta más costos aparte de hosting y mantenimiento. En el diagnóstico gratuito te damos una cotización exacta para tu caso.',
      },
      {
        question: '¿Qué incluye la mensualidad?',
        answer:
          'El análisis, diseño, desarrollo y pruebas; los servidores en la nube, dominio y SSL; respaldos diarios; actualizaciones de seguridad; soporte técnico y una bolsa mensual de horas para mejoras y nuevas funciones.',
      },
      {
        question: '¿Cuánto tiempo tarda en estar listo mi sistema?',
        answer:
          'Depende del alcance. Trabajamos por sprints de dos semanas y buscamos que tengas una primera versión funcional en pocas semanas, para luego seguir agregando funciones cada mes.',
      },
      {
        question: '¿Hay un plazo mínimo de contrato?',
        answer:
          'Sí, los planes mensuales tienen un plazo mínimo de 12 meses porque el desarrollo inicial está incluido en la mensualidad. Al terminar el plazo puedes continuar mes a mes.',
      },
      {
        question: '¿De quién son el software y los datos?',
        answer:
          'Tus datos siempre son tuyos y puedes exportarlos cuando quieras. Las condiciones para transferir el código fuente se definen claramente en el contrato antes de empezar.',
      },
      {
        question: '¿Pueden hacer una app para Android y iPhone?',
        answer:
          'Sí. Desarrollamos apps móviles para Android y iOS, y también aplicaciones web progresivas (PWA) que se instalan desde el navegador sin pasar por las tiendas.',
      },
      {
        question: '¿Se puede integrar con la factura electrónica FEL de la SAT?',
        answer:
          'Sí. Integramos tu sistema con certificadores FEL, pasarelas de pago, bancos, WhatsApp Business y otros sistemas mediante APIs.',
      },
      {
        question: '¿Qué pasa si necesito más horas o más funciones?',
        answer:
          'Puedes subir de plan en cualquier momento o contratar horas adicionales. Las horas no utilizadas en un mes no se acumulan.',
      },
      {
        question: '¿Trabajan con empresas fuera de Guatemala?',
        answer:
          'Sí. Atendemos empresas en Centroamérica y Latinoamérica de forma remota; para clientes fuera de Guatemala podemos facturar en dólares.',
      },
      {
        question: '¿Cuál es la diferencia con GDS ONE ERP?',
        answer:
          'GDS ONE es nuestro ERP listo para usar. El desarrollo a la medida es para procesos únicos de tu empresa; también podemos construir módulos o apps que se integren con GDS ONE u otro ERP.',
      },
    ],
  },
  form: {
    title: 'Cuéntanos tu proyecto',
    description: 'Te respondemos por WhatsApp en horario hábil para agendar tu diagnóstico gratuito.',
    name: 'Nombre',
    company: 'Empresa',
    phone: 'Teléfono / WhatsApp',
    projectType: 'Tipo de proyecto',
    projectTypes: ['Sistema web', 'App móvil', 'Web + App', 'Integración / automatización', 'Tienda o portal en línea', 'Aún no lo sé'],
    plan: 'Plan de interés',
    planOptions: ['Esencial (Q2,500/mes)', 'Profesional (Q5,900/mes)', 'Empresarial', 'Necesito asesoría'],
    details: '¿Qué proceso quieres digitalizar?',
    detailsPlaceholder: 'Ej.: necesitamos una app para que los vendedores tomen pedidos en ruta y se refleje el inventario.',
    submit: 'Enviar por WhatsApp',
    privacy: 'Al enviar aceptas nuestra política de privacidad. No compartimos tus datos.',
    whatsappIntro: 'Hola GDS, quiero cotizar desarrollo de software a la medida.',
  },
  finalCta: {
    title: 'Convierte tu proceso en software esta misma temporada',
    description: 'Agenda un diagnóstico gratuito de 30 minutos. Sin compromiso.',
    button: 'Hablar con un consultor',
  },
};
