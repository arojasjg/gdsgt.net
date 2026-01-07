import type { SecurityTopic } from '../../types';

export const securityTopics: SecurityTopic[] = [
  {
    slug: 'roles-permissions',
    name: 'Roles y Permisos (RBAC)',
    description:
      'Control de acceso basado en roles (RBAC) con permisos granulares por módulo, funcionalidad y datos, asegurando que cada usuario acceda solo a lo necesario.',
    controls: [
      'Roles predefinidos (Admin, Gerente, Vendedor, Contador, etc.)',
      'Creación de roles personalizados',
      'Permisos granulares por módulo y acción (crear, leer, actualizar, eliminar)',
      'Permisos a nivel de datos (por empresa, sucursal, proyecto, etc.)',
      'Herencia de permisos',
      'Auditoría de cambios de permisos',
    ],
    bestPractices: [
      'Aplicar principio de mínimo privilegio',
      'Revisar permisos periódicamente',
      'Usar roles en lugar de permisos individuales',
      'Documentar roles y responsabilidades',
      'Revocar accesos de usuarios inactivos',
      'Separar roles administrativos de operativos',
    ],
    scope:
      'El sistema permite configurar roles y permisos a nivel de módulo y acción. La configuración de permisos a nivel de datos (row-level security) puede requerir configuración adicional.',
    faqs: [
      {
        question: '¿Puedo crear roles personalizados?',
        answer:
          'Sí, puedes crear roles personalizados con permisos específicos según las necesidades de tu organización.',
      },
      {
        question: '¿Cómo funciona la herencia de permisos?',
        answer:
          'Los roles pueden heredar permisos de otros roles, facilitando la gestión de permisos complejos.',
      },
      {
        question: '¿Se registran los cambios de permisos?',
        answer:
          'Sí, todos los cambios de roles y permisos se registran en el log de auditoría con fecha, usuario y detalle del cambio.',
      },
    ],
  },
  {
    slug: 'audit-logs',
    name: 'Logs de Auditoría',
    description:
      'Registro completo de todas las acciones realizadas en el sistema, incluyendo quién, qué, cuándo y desde dónde, para trazabilidad y cumplimiento.',
    controls: [
      'Registro de todas las transacciones (crear, modificar, eliminar)',
      'Registro de accesos (login, logout, intentos fallidos)',
      'Registro de cambios de configuración',
      'Registro de cambios de permisos',
      'Almacenamiento inmutable de logs',
      'Búsqueda y filtrado avanzado',
      'Exportación de logs para análisis',
    ],
    bestPractices: [
      'Revisar logs periódicamente',
      'Configurar alertas para acciones críticas',
      'Retener logs según requerimientos legales',
      'Proteger logs de modificación',
      'Usar logs para investigación de incidentes',
      'Cumplir con normativas de privacidad (GDPR, etc.)',
    ],
    scope:
      'El sistema registra todas las acciones en módulos core. Logs se retienen según configuración (mínimo 1 año recomendado). Exportación disponible en CSV/JSON.',
    faqs: [
      {
        question: '¿Qué información se registra en los logs?',
        answer:
          'Usuario, fecha/hora, acción realizada, módulo, registro afectado, IP de origen, y valores antes/después del cambio.',
      },
      {
        question: '¿Por cuánto tiempo se retienen los logs?',
        answer:
          'Por defecto 1 año. Puedes configurar retención mayor según tus necesidades de cumplimiento.',
      },
      {
        question: '¿Puedo exportar los logs?',
        answer:
          'Sí, puedes exportar logs en formato CSV o JSON para análisis externo o cumplimiento.',
      },
    ],
  },
  {
    slug: 'backups-recovery',
    name: 'Backups y Recuperación',
    description:
      'Copias de seguridad automáticas diarias con retención configurable y procedimientos de recuperación probados.',
    controls: [
      'Backups automáticos diarios',
      'Backups incrementales cada hora (opcional)',
      'Retención configurable (7 días, 30 días, 1 año)',
      'Almacenamiento en ubicación separada',
      'Encriptación de backups',
      'Pruebas de recuperación periódicas',
      'Procedimientos documentados de recuperación',
    ],
    bestPractices: [
      'Configurar backups automáticos',
      'Verificar backups periódicamente',
      'Probar procedimientos de recuperación',
      'Almacenar backups en ubicación geográfica diferente',
      'Encriptar backups',
      'Documentar procedimientos de recuperación',
      'Definir RTO (Recovery Time Objective) y RPO (Recovery Point Objective)',
    ],
    scope:
      'Backups incluyen base de datos y archivos adjuntos. Recuperación completa puede tomar de 1 a 4 horas según volumen de datos. RPO típico: 24 horas (backup diario).',
    faqs: [
      {
        question: '¿Con qué frecuencia se realizan los backups?',
        answer:
          'Backups completos diarios. Backups incrementales cada hora disponibles en planes superiores.',
      },
      {
        question: '¿Cuánto tiempo toma recuperar un backup?',
        answer:
          'Depende del volumen de datos. Típicamente entre 1 y 4 horas para recuperación completa.',
      },
      {
        question: '¿Puedo descargar mis backups?',
        answer:
          'Sí, puedes solicitar descarga de backups en formato SQL/ZIP para custodia externa.',
      },
    ],
  },
  {
    slug: 'disaster-recovery',
    name: 'Disaster Recovery (DR)',
    description:
      'Plan de recuperación ante desastres con procedimientos documentados, RTO/RPO definidos, y pruebas periódicas.',
    controls: [
      'Plan de DR documentado',
      'RTO (Recovery Time Objective) definido',
      'RPO (Recovery Point Objective) definido',
      'Backups en ubicación geográfica separada',
      'Procedimientos de failover',
      'Pruebas de DR periódicas',
      'Equipo de respuesta ante desastres',
    ],
    bestPractices: [
      'Definir RTO y RPO según criticidad del negocio',
      'Documentar procedimientos de DR',
      'Realizar pruebas de DR al menos anualmente',
      'Mantener contactos de emergencia actualizados',
      'Revisar y actualizar plan de DR periódicamente',
      'Capacitar al equipo en procedimientos de DR',
    ],
    scope:
      'Plan de DR básico incluido. RTO típico: 4-8 horas. RPO típico: 24 horas. DR avanzado con failover automático disponible en planes enterprise.',
    faqs: [
      {
        question: '¿Qué es RTO y RPO?',
        answer:
          'RTO es el tiempo máximo de recuperación. RPO es la cantidad máxima de datos que se pueden perder. Ej: RTO 4h, RPO 24h.',
      },
      {
        question: '¿Con qué frecuencia se prueban los procedimientos de DR?',
        answer:
          'Recomendamos pruebas anuales. En planes enterprise se realizan pruebas trimestrales.',
      },
      {
        question: '¿Qué pasa si hay un desastre?',
        answer:
          'Se activa el plan de DR: notificación al equipo, recuperación de backups, validación de integridad, y reanudación de operaciones.',
      },
    ],
  },
  {
    slug: 'data-privacy',
    name: 'Privacidad de Datos',
    description:
      'Cumplimiento con regulaciones de privacidad (GDPR, CCPA) con controles de acceso, encriptación, y derechos de los titulares de datos.',
    controls: [
      'Encriptación de datos en reposo (AES-256)',
      'Encriptación de datos en tránsito (TLS 1.2+)',
      'Anonimización de datos sensibles',
      'Control de acceso a datos personales',
      'Registro de procesamiento de datos',
      'Procedimientos para derechos de titulares (acceso, rectificación, eliminación)',
      'Evaluaciones de impacto de privacidad (PIA)',
    ],
    bestPractices: [
      'Minimizar recolección de datos personales',
      'Obtener consentimiento explícito',
      'Implementar políticas de retención de datos',
      'Capacitar al personal en privacidad',
      'Responder a solicitudes de titulares en tiempo',
      'Notificar brechas de seguridad según normativa',
    ],
    scope:
      'Controles de privacidad básicos incluidos. Cumplimiento GDPR/CCPA requiere configuración adicional y procedimientos organizacionales. Consultoría de privacidad disponible.',
    faqs: [
      {
        question: '¿El sistema cumple con GDPR?',
        answer:
          'El sistema incluye controles técnicos para GDPR. Cumplimiento completo requiere también procedimientos organizacionales y políticas.',
      },
      {
        question: '¿Cómo se manejan las solicitudes de eliminación de datos?',
        answer:
          'Mediante procedimiento documentado: validación de identidad, eliminación de datos personales, y confirmación al titular.',
      },
      {
        question: '¿Los datos están encriptados?',
        answer:
          'Sí, datos en reposo (AES-256) y en tránsito (TLS 1.2+) están encriptados.',
      },
    ],
  },
  {
    slug: 'availability-monitoring',
    name: 'Disponibilidad y Monitoreo',
    description:
      'Monitoreo 24/7 de disponibilidad, rendimiento y salud del sistema con alertas automáticas y SLA definido.',
    controls: [
      'Monitoreo 24/7 de disponibilidad',
      'Monitoreo de rendimiento (tiempos de respuesta)',
      'Monitoreo de capacidad (CPU, memoria, disco)',
      'Alertas automáticas ante incidentes',
      'Dashboard de estado en tiempo real',
      'Reportes de uptime y SLA',
      'Equipo de soporte 24/7 (planes enterprise)',
    ],
    bestPractices: [
      'Definir SLA según criticidad del negocio',
      'Configurar alertas para umbrales críticos',
      'Revisar reportes de uptime mensualmente',
      'Planificar mantenimientos en horarios de bajo uso',
      'Mantener contactos de soporte actualizados',
      'Documentar incidentes y resoluciones',
    ],
    scope:
      'Monitoreo básico incluido. SLA típico: 99.5% uptime mensual. SLA 99.9% disponible en planes enterprise. Soporte 24/7 en planes enterprise.',
    faqs: [
      {
        question: '¿Cuál es el SLA de disponibilidad?',
        answer:
          'SLA estándar: 99.5% uptime mensual. SLA enterprise: 99.9% uptime mensual.',
      },
      {
        question: '¿Hay soporte 24/7?',
        answer:
          'Soporte 24/7 disponible en planes enterprise. Planes estándar: soporte en horario laboral.',
      },
      {
        question: '¿Cómo se notifican los incidentes?',
        answer:
          'Mediante email y/o SMS a contactos configurados. También disponible dashboard de estado público.',
      },
    ],
  },
];
