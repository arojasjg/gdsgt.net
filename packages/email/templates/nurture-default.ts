/**
 * Default Nurture Sequence
 * 
 * For leads who download resources or subscribe to newsletter
 */

import { NurtureSequence } from '../types';

export const defaultNurtureSequence: NurtureSequence = {
  id: 'nurture-default',
  name: 'Default Nurture Sequence',
  description: 'For leads who download resources or subscribe',
  target_audience: 'default',
  emails: [
    {
      id: 'default-day-0',
      sequence_id: 'nurture-default',
      name: 'Welcome + Resource Delivery',
      day: 0,
      subject: 'Gracias por tu interés en GDS ONE',
      preview: 'Aquí está tu recurso + próximos pasos',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nGracias por descargar {{resource}}. Aquí está tu enlace de descarga:\n\n[DOWNLOAD LINK]'
        },
        {
          type: 'text',
          content: 'Mientras tanto, aquí hay 3 recursos que podrían interesarte:'
        },
        {
          type: 'list',
          content: '1. Guía: Cómo seleccionar un ERP\n2. Caso de éxito: Distribuidor reduce cierre contable de 10 a 3 días\n3. Comparativa: Odoo vs GDS'
        },
        {
          type: 'cta',
          content: '¿Listo para ver GDS en acción?'
        }
      ],
      cta_primary: 'Agendar Demo',
      cta_url: '/es/demo',
      variables: ['name', 'resource']
    },
    
    {
      id: 'default-day-2',
      sequence_id: 'nurture-default',
      name: 'Industry-Specific Use Cases',
      day: 2,
      subject: 'Cómo {{company_type}} usan GDS ONE',
      preview: 'Casos de uso específicos para tu industria',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nVi que trabajas en {{industry}}. Aquí hay 3 formas en que empresas similares usan GDS ONE:'
        },
        {
          type: 'list',
          content: '1. **Inventario multi-sucursal en tiempo real**: [Caso de éxito]\n2. **Automatización de reposición**: [Guía]\n3. **Dashboards de rentabilidad por sucursal**: [Demo]'
        },
        {
          type: 'social_proof',
          content: '"Antes tardábamos 10 días en cerrar el mes. Con GDS ONE cerramos en 3 días."\n— CFO, Distribuidora [Company]'
        },
        {
          type: 'cta',
          content: '¿Quieres ver cómo funciona para tu caso específico?'
        }
      ],
      cta_primary: 'Agendar Demo Personalizada',
      cta_url: '/es/demo?interest={{industry}}',
      variables: ['name', 'industry', 'company_type']
    },
    
    {
      id: 'default-day-4',
      sequence_id: 'nurture-default',
      name: 'ERP vs Excel',
      day: 4,
      subject: 'ERP vs Excel: ¿Cuándo es el momento de cambiar?',
      preview: '5 señales de que necesitas un ERP',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nMuchas empresas empiezan con Excel. Pero llega un punto donde Excel ya no escala.\n\nAquí hay 5 señales de que es momento de cambiar a un ERP:'
        },
        {
          type: 'list',
          content: '1. ❌ Inventario descuadrado entre sucursales\n2. ❌ Cierre contable tarda > 5 días\n3. ❌ No sabes rentabilidad real por producto/sucursal\n4. ❌ Múltiples versiones de "la verdad"\n5. ❌ Auditoría o crecimiento próximo'
        },
        {
          type: 'resource',
          content: '📄 [Descargar: Checklist completo de señales]'
        },
        {
          type: 'cta',
          content: '¿Te identificas con 2+ señales? Hablemos.'
        }
      ],
      cta_primary: 'Agendar Llamada',
      cta_url: '/es/demo',
      variables: ['name']
    },
    
    {
      id: 'default-day-7',
      sequence_id: 'nurture-default',
      name: 'Case Study',
      day: 7,
      subject: 'Caso de éxito: {{industry}} implementa GDS en 60 días',
      preview: 'Cómo lo hicieron + resultados',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nQuiero compartirte un caso de éxito de una empresa similar a la tuya:'
        },
        {
          type: 'social_proof',
          content: '**[Company Name]**\n\n**El desafío:**\n[Challenge description]\n\n**La solución:**\n[Solution description]\n\n**Resultados:**\n✅ [Result 1]\n✅ [Result 2]\n✅ [Result 3]'
        },
        {
          type: 'cta',
          content: '¿Resultados similares para tu empresa?'
        }
      ],
      cta_primary: 'Agendar Demo',
      cta_url: '/es/demo',
      variables: ['name', 'industry']
    },
    
    {
      id: 'default-day-10',
      sequence_id: 'nurture-default',
      name: 'Integrations',
      day: 10,
      subject: 'Integraciones: Conecta tu ERP con todo',
      preview: 'Power BI, WhatsApp, Zapier, y más',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nUn ERP moderno no vive aislado. GDS ONE se integra con las herramientas que ya usas:'
        },
        {
          type: 'list',
          content: '📊 **Power BI / Looker Studio**: Dashboards en tiempo real\n💬 **WhatsApp**: Notificaciones de pedidos, pagos, entregas\n🔗 **Zapier**: Automatiza flujos con 5000+ apps\n💳 **Payment Gateways**: Cobra online\n🔌 **REST API**: Integraciones custom'
        },
        {
          type: 'resource',
          content: '📄 [Ver todas las integraciones]'
        },
        {
          type: 'cta',
          content: '¿Necesitas una integración específica?'
        }
      ],
      cta_primary: 'Hablar con Experto en Integraciones',
      cta_url: '/es/services/integrations',
      variables: ['name']
    },
    
    {
      id: 'default-day-12',
      sequence_id: 'nurture-default',
      name: 'Security & Compliance',
      day: 12,
      subject: 'Seguridad y Compliance: ¿Tu ERP está preparado?',
      preview: 'RBAC, audit logs, backups, DR',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nLa seguridad no es opcional. GDS ONE incluye controles enterprise:'
        },
        {
          type: 'list',
          content: '🔐 **RBAC**: Permisos granulares por usuario/rol\n📝 **Audit Logs**: Quién hizo qué y cuándo\n💾 **Backups Diarios**: Automáticos + retención configurable\n🔄 **Disaster Recovery**: Plan de recuperación ante desastres\n🔒 **Data Privacy**: Controles de acceso a datos sensibles'
        },
        {
          type: 'resource',
          content: '📄 [Descargar: Security Checklist]'
        },
        {
          type: 'cta',
          content: '¿Auditoría próxima? Hablemos.'
        }
      ],
      cta_primary: 'Agendar Auditoría de Seguridad',
      cta_url: '/es/services/security-compliance',
      variables: ['name']
    },
    
    {
      id: 'default-day-14',
      sequence_id: 'nurture-default',
      name: 'Final CTA',
      day: 14,
      subject: 'Última oportunidad: Agenda tu demo personalizada',
      preview: 'Veamos GDS ONE en acción (específico para {{industry}})',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nHe compartido varios recursos contigo en las últimas 2 semanas. Espero que hayan sido útiles.\n\nSi aún estás evaluando opciones de ERP, me encantaría mostrarte GDS en acción, específicamente para {{industry}}.'
        },
        {
          type: 'list',
          content: 'En la demo verás:\n\n✅ Módulos específicos para {{industry}}\n✅ Integraciones que necesitas\n✅ Casos de éxito similares\n✅ Pricing transparente\n✅ Plan de implementación'
        },
        {
          type: 'cta',
          content: 'La demo dura 30 minutos. ¿Tienes tiempo esta semana?'
        }
      ],
      cta_primary: 'Sí, Agendar Demo',
      cta_url: '/es/demo',
      variables: ['name', 'industry']
    }
  ]
};
