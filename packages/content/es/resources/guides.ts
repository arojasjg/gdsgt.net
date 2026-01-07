/**
 * Downloadable Resources/Guides (Spanish)
 * 
 * Lead magnets and educational content
 */

export interface Resource {
  slug: string;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'checklist' | 'whitepaper' | 'ebook';
  
  // Content
  cover_image?: string;
  pages: number;
  file_size: string;
  format: 'PDF' | 'Excel' | 'Word' | 'Google Sheets';
  
  // SEO
  meta_description: string;
  keywords: string[];
  
  // Categorization
  category: 'seleccion' | 'implementacion' | 'optimizacion' | 'roi' | 'industria';
  tags: string[];
  
  // Gating
  requires_email: boolean;
  
  // Content preview
  preview: {
    what_you_learn: string[];
    who_is_for: string[];
    table_of_contents: Array<{
      chapter: string;
      topics: string[];
    }>;
  };
  
  // Download
  download_url?: string; // Will be generated dynamically
  
  // Related
  related_blog_posts?: string[];
  related_case_studies?: string[];
  
  // CTA
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export const resources: Resource[] = [
  {
    slug: 'guia-seleccion-erp-pyme',
    title: 'Guía Completa de Selección de ERP para PYME',
    description: 'Metodología probada para elegir el ERP correcto. Incluye checklist de evaluación, matriz de comparación, y plantilla de RFP.',
    type: 'guide',
    pages: 28,
    file_size: '2.4 MB',
    format: 'PDF',
    
    meta_description: 'Guía gratuita de selección de ERP para PYME. Checklist, matriz de comparación, RFP template. Descarga PDF.',
    keywords: ['guía selección ERP', 'elegir ERP PYME', 'checklist ERP', 'RFP ERP', 'comparación ERP'],
    
    category: 'seleccion',
    tags: ['ERP', 'Selección', 'PYME', 'Guía'],
    
    requires_email: true,
    
    preview: {
      what_you_learn: [
        'Cómo definir requerimientos de ERP para tu empresa',
        'Criterios clave para evaluar proveedores de ERP',
        'Cómo calcular TCO (costo total de propiedad)',
        'Cómo crear un RFP (Request for Proposal) efectivo',
        'Cómo comparar opciones objetivamente',
        'Errores comunes a evitar en la selección',
        'Cómo negociar términos y precios',
        'Cómo obtener buy-in de stakeholders'
      ],
      who_is_for: [
        'Directores de IT evaluando opciones de ERP',
        'CFOs buscando justificar inversión en ERP',
        'COOs necesitando optimizar operaciones',
        'Gerentes de proyecto liderando selección de ERP',
        'Consultores asesorando clientes en selección',
        'Empresarios considerando primer ERP'
      ],
      table_of_contents: [
        {
          chapter: '1. Preparación',
          topics: [
            'Definir objetivos y alcance',
            'Identificar stakeholders',
            'Documentar procesos actuales',
            'Definir presupuesto y timeline'
          ]
        },
        {
          chapter: '2. Requerimientos',
          topics: [
            'Requerimientos funcionales',
            'Requerimientos técnicos',
            'Requerimientos de integración',
            'Must-haves vs nice-to-haves'
          ]
        },
        {
          chapter: '3. Investigación',
          topics: [
            'Identificar opciones de ERP',
            'Investigar proveedores',
            'Leer reviews y casos de éxito',
            'Crear shortlist'
          ]
        },
        {
          chapter: '4. Evaluación',
          topics: [
            'Crear RFP',
            'Solicitar demos',
            'Evaluar funcionalidad',
            'Evaluar usabilidad',
            'Evaluar TCO',
            'Verificar referencias'
          ]
        },
        {
          chapter: '5. Comparación',
          topics: [
            'Matriz de comparación',
            'Scoring de opciones',
            'Análisis de riesgos',
            'Recomendación final'
          ]
        },
        {
          chapter: '6. Negociación',
          topics: [
            'Negociar precios',
            'Negociar términos',
            'Revisar contrato',
            'Firmar acuerdo'
          ]
        },
        {
          chapter: 'Anexos',
          topics: [
            'Checklist de evaluación (40 criterios)',
            'Matriz de comparación (template Excel)',
            'RFP template (Word)',
            'Preguntas para demos',
            'Preguntas para referencias'
          ]
        }
      ]
    },
    
    related_blog_posts: ['como-elegir-erp-para-pyme-2024'],
    
    cta: {
      title: '¿Necesitas ayuda para elegir tu ERP?',
      description: 'Agenda una consultoría gratuita y te ayudamos a evaluar opciones.',
      button: 'Agendar Consultoría'
    }
  },
  
  {
    slug: 'checklist-implementacion-erp',
    title: 'Checklist de Implementación de ERP: 100 Puntos Críticos',
    description: 'Lista completa de tareas para implementación exitosa de ERP. Desde kick-off hasta go-live y más allá.',
    type: 'checklist',
    pages: 15,
    file_size: '1.2 MB',
    format: 'PDF',
    
    meta_description: 'Checklist gratuito de implementación de ERP. 100 puntos críticos desde kick-off hasta go-live. Descarga PDF.',
    keywords: ['checklist implementación ERP', 'tareas implementación ERP', 'proyecto ERP', 'go-live ERP'],
    
    category: 'implementacion',
    tags: ['ERP', 'Implementación', 'Checklist', 'Proyecto'],
    
    requires_email: true,
    
    preview: {
      what_you_learn: [
        '100 tareas críticas para implementación exitosa',
        'Checklist por fase (preparación, configuración, migración, capacitación, go-live, post-go-live)',
        'Quién es responsable de cada tarea',
        'Cuándo debe completarse cada tarea',
        'Criterios de aceptación para cada fase',
        'Red flags a monitorear',
        'Quick wins para celebrar',
        'Métricas de éxito'
      ],
      who_is_for: [
        'Gerentes de proyecto liderando implementación de ERP',
        'Directores de IT supervisando proyecto',
        'Consultores implementando ERP',
        'Equipos de implementación internos',
        'Sponsors ejecutivos monitoreando progreso',
        'Vendors de ERP gestionando implementación'
      ],
      table_of_contents: [
        {
          chapter: 'Fase 0: Preparación (Pre-Kick-off)',
          topics: [
            'Definir sponsor ejecutivo',
            'Formar equipo de proyecto',
            'Definir alcance y objetivos',
            'Establecer governance',
            'Preparar infraestructura',
            'Comunicar a organización'
          ]
        },
        {
          chapter: 'Fase 1: Análisis y Diseño',
          topics: [
            'Documentar procesos as-is',
            'Diseñar procesos to-be',
            'Definir configuración',
            'Identificar personalizaciones',
            'Diseñar integraciones',
            'Validar diseño con stakeholders'
          ]
        },
        {
          chapter: 'Fase 2: Configuración',
          topics: [
            'Configurar módulos',
            'Configurar seguridad y permisos',
            'Configurar reportes',
            'Configurar workflows',
            'Configurar integraciones',
            'Validar configuración'
          ]
        },
        {
          chapter: 'Fase 3: Migración de Datos',
          topics: [
            'Limpiar datos fuente',
            'Mapear datos',
            'Desarrollar scripts de migración',
            'Migrar datos maestros',
            'Migrar saldos iniciales',
            'Validar datos migrados'
          ]
        },
        {
          chapter: 'Fase 4: Capacitación',
          topics: [
            'Crear materiales de capacitación',
            'Capacitar super users',
            'Capacitar usuarios finales',
            'Crear manuales de usuario',
            'Grabar videos de capacitación',
            'Validar comprensión'
          ]
        },
        {
          chapter: 'Fase 5: Pruebas',
          topics: [
            'Crear casos de prueba',
            'Ejecutar pruebas unitarias',
            'Ejecutar pruebas de integración',
            'Ejecutar pruebas end-to-end',
            'Ejecutar pruebas de performance',
            'Documentar y corregir bugs'
          ]
        },
        {
          chapter: 'Fase 6: Go-Live',
          topics: [
            'Preparar plan de go-live',
            'Preparar plan de rollback',
            'Ejecutar go-live',
            'Monitorear sistema',
            'Soporte intensivo',
            'Resolver issues críticos'
          ]
        },
        {
          chapter: 'Fase 7: Post-Go-Live',
          topics: [
            'Estabilizar sistema',
            'Optimizar procesos',
            'Capacitación adicional',
            'Medir resultados vs objetivos',
            'Celebrar éxitos',
            'Planear mejoras continuas'
          ]
        }
      ]
    },
    
    related_blog_posts: ['errores-comunes-implementacion-erp'],
    
    cta: {
      title: '¿Implementando un ERP?',
      description: 'Nuestro equipo tiene 100+ implementaciones exitosas. Te ayudamos.',
      button: 'Hablar con Experto'
    }
  },
  
  {
    slug: 'calculadora-roi-erp',
    title: 'Calculadora de ROI de ERP (Excel)',
    description: 'Plantilla Excel para calcular ROI de ERP. Incluye costos, beneficios, análisis de sensibilidad, y gráficos.',
    type: 'template',
    pages: 1,
    file_size: '850 KB',
    format: 'Excel',
    
    meta_description: 'Calculadora gratuita de ROI de ERP en Excel. Calcula costos, beneficios, payback period. Descarga template.',
    keywords: ['calculadora ROI ERP', 'ROI ERP Excel', 'calcular ROI ERP', 'business case ERP'],
    
    category: 'roi',
    tags: ['ERP', 'ROI', 'Excel', 'Finanzas'],
    
    requires_email: true,
    
    preview: {
      what_you_learn: [
        'Cómo calcular costos totales de ERP (TCO)',
        'Cómo cuantificar beneficios tangibles',
        'Cómo calcular ROI y payback period',
        'Cómo hacer análisis de sensibilidad',
        'Cómo presentar business case a dirección',
        'Fórmulas pre-configuradas',
        'Gráficos automáticos',
        'Ejemplos reales incluidos'
      ],
      who_is_for: [
        'CFOs justificando inversión en ERP',
        'Directores de IT creando business case',
        'Gerentes de proyecto calculando ROI',
        'Consultores asesorando clientes',
        'Controllers analizando inversiones',
        'Empresarios evaluando ERP'
      ],
      table_of_contents: [
        {
          chapter: 'Hoja 1: Costos',
          topics: [
            'Costos iniciales (licencias, implementación, capacitación, migración)',
            'Costos recurrentes (mantenimiento, soporte, hosting)',
            'Costos ocultos (personalizaciones, integraciones, upgrades)',
            'TCO a 3 y 5 años'
          ]
        },
        {
          chapter: 'Hoja 2: Beneficios',
          topics: [
            'Ahorro de tiempo (automatización)',
            'Reducción de errores',
            'Reducción de inventario',
            'Aumento de ventas',
            'Reducción de costos operativos',
            'Beneficios intangibles'
          ]
        },
        {
          chapter: 'Hoja 3: ROI',
          topics: [
            'Cálculo de ROI (año 1, 3, 5)',
            'Payback period',
            'NPV (Net Present Value)',
            'IRR (Internal Rate of Return)',
            'Gráficos de ROI'
          ]
        },
        {
          chapter: 'Hoja 4: Sensibilidad',
          topics: [
            'Escenario pesimista',
            'Escenario base',
            'Escenario optimista',
            'Variables críticas',
            'Análisis what-if'
          ]
        },
        {
          chapter: 'Hoja 5: Presentación',
          topics: [
            'Executive summary',
            'Resumen de costos',
            'Resumen de beneficios',
            'ROI y payback',
            'Recomendación'
          ]
        }
      ]
    },
    
    related_blog_posts: ['roi-erp-como-calcularlo'],
    
    cta: {
      title: '¿Necesitas ayuda para calcular ROI?',
      description: 'Agenda una sesión y te ayudamos a armar tu business case.',
      button: 'Agendar Sesión'
    }
  },
  
  {
    slug: 'matriz-comparacion-erp',
    title: 'Matriz de Comparación de ERP (Excel)',
    description: 'Plantilla Excel para comparar opciones de ERP objetivamente. 40 criterios de evaluación con pesos y scoring.',
    type: 'template',
    pages: 1,
    file_size: '650 KB',
    format: 'Excel',
    
    meta_description: 'Matriz gratuita de comparación de ERP en Excel. Compara hasta 5 opciones con 40 criterios. Descarga template.',
    keywords: ['matriz comparación ERP', 'comparar ERP', 'evaluación ERP', 'scoring ERP'],
    
    category: 'seleccion',
    tags: ['ERP', 'Selección', 'Excel', 'Comparación'],
    
    requires_email: true,
    
    preview: {
      what_you_learn: [
        'Cómo comparar hasta 5 opciones de ERP',
        '40 criterios de evaluación pre-definidos',
        'Sistema de pesos por importancia',
        'Scoring automático',
        'Gráficos de comparación',
        'Análisis de fortalezas/debilidades',
        'Recomendación basada en scoring',
        'Personalizable a tus necesidades'
      ],
      who_is_for: [
        'Equipos de selección de ERP',
        'Directores de IT evaluando opciones',
        'Consultores asesorando clientes',
        'Gerentes de proyecto',
        'CFOs comparando inversiones',
        'Comités de evaluación'
      ],
      table_of_contents: [
        {
          chapter: 'Hoja 1: Criterios',
          topics: [
            'Funcionalidad (20 criterios)',
            'Usabilidad (5 criterios)',
            'Costo (5 criterios)',
            'Implementación (3 criterios)',
            'Soporte (3 criterios)',
            'Vendor (4 criterios)',
            'Definir pesos por criterio'
          ]
        },
        {
          chapter: 'Hoja 2: Evaluación',
          topics: [
            'Comparar hasta 5 opciones',
            'Scoring 1-5 por criterio',
            'Comentarios por criterio',
            'Cálculo automático de score total',
            'Ranking de opciones'
          ]
        },
        {
          chapter: 'Hoja 3: Análisis',
          topics: [
            'Gráfico de radar por opción',
            'Gráfico de barras comparativo',
            'Fortalezas de cada opción',
            'Debilidades de cada opción',
            'Diferenciadores clave'
          ]
        },
        {
          chapter: 'Hoja 4: Recomendación',
          topics: [
            'Opción recomendada',
            'Justificación',
            'Riesgos y mitigación',
            'Próximos pasos'
          ]
        }
      ]
    },
    
    related_blog_posts: ['como-elegir-erp-para-pyme-2024'],
    
    cta: {
      title: '¿Comparando opciones de ERP?',
      description: 'Te ayudamos a evaluar y elegir la mejor opción para tu empresa.',
      button: 'Solicitar Ayuda'
    }
  },
  
  {
    slug: 'whitepaper-erp-cloud-vs-onpremise',
    title: 'ERP Cloud vs On-Premise: Análisis Comparativo 2024',
    description: 'Whitepaper técnico comparando ERP cloud vs on-premise. TCO, seguridad, performance, escalabilidad, y casos de uso.',
    type: 'whitepaper',
    pages: 22,
    file_size: '1.8 MB',
    format: 'PDF',
    
    meta_description: 'Whitepaper gratuito: ERP Cloud vs On-Premise. Análisis técnico de TCO, seguridad, performance. Descarga PDF.',
    keywords: ['ERP cloud vs on-premise', 'ERP cloud', 'ERP on-premise', 'comparación ERP', 'whitepaper ERP'],
    
    category: 'seleccion',
    tags: ['ERP', 'Cloud', 'On-Premise', 'Whitepaper'],
    
    requires_email: true,
    
    preview: {
      what_you_learn: [
        'Diferencias fundamentales entre cloud y on-premise',
        'Análisis de TCO a 5 años',
        'Comparación de seguridad',
        'Comparación de performance',
        'Comparación de escalabilidad',
        'Casos de uso para cada modelo',
        'Mitos y realidades',
        'Tendencias del mercado'
      ],
      who_is_for: [
        'Directores de IT evaluando arquitectura',
        'CIOs definiendo estrategia de IT',
        'CFOs analizando costos',
        'Gerentes de seguridad evaluando riesgos',
        'Arquitectos de soluciones',
        'Consultores asesorando clientes'
      ],
      table_of_contents: [
        {
          chapter: '1. Introducción',
          topics: [
            'Evolución del ERP',
            'Cloud vs On-Premise: definiciones',
            'Tendencias del mercado',
            'Metodología de análisis'
          ]
        },
        {
          chapter: '2. Análisis de Costos',
          topics: [
            'Modelo de costos cloud',
            'Modelo de costos on-premise',
            'TCO a 1, 3, 5 años',
            'Costos ocultos',
            'Break-even analysis'
          ]
        },
        {
          chapter: '3. Seguridad',
          topics: [
            'Modelo de seguridad cloud',
            'Modelo de seguridad on-premise',
            'Compliance y regulaciones',
            'Disaster recovery',
            'Mitos de seguridad'
          ]
        },
        {
          chapter: '4. Performance',
          topics: [
            'Latencia y throughput',
            'Escalabilidad',
            'Disponibilidad (uptime)',
            'Casos de uso por industria'
          ]
        },
        {
          chapter: '5. Gestión y Operaciones',
          topics: [
            'Actualizaciones y upgrades',
            'Backup y recovery',
            'Monitoreo y alertas',
            'Requerimientos de IT staff'
          ]
        },
        {
          chapter: '6. Casos de Uso',
          topics: [
            'Cuándo elegir cloud',
            'Cuándo elegir on-premise',
            'Modelo híbrido',
            'Casos reales'
          ]
        },
        {
          chapter: '7. Conclusiones',
          topics: [
            'Resumen comparativo',
            'Recomendaciones',
            'Checklist de decisión'
          ]
        }
      ]
    },
    
    related_blog_posts: ['tendencias-erp-2024-ia-cloud-movil'],
    
    cta: {
      title: '¿Cloud u On-Premise?',
      description: 'Te ayudamos a evaluar la mejor opción para tu empresa.',
      button: 'Agendar Consulta'
    }
  }
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug);
}

export function getAllResources(): Resource[] {
  return resources;
}

export function getResourcesByCategory(category: Resource['category']): Resource[] {
  return resources.filter(r => r.category === category);
}

export function getResourcesByType(type: Resource['type']): Resource[] {
  return resources.filter(r => r.type === type);
}
