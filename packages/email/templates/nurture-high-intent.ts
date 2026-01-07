/**
 * High-Intent Nurture Sequence
 * 
 * For leads who book a demo
 */

import { NurtureSequence } from '../types';

export const highIntentNurtureSequence: NurtureSequence = {
  id: 'nurture-high-intent',
  name: 'High-Intent Nurture (Demo Booked)',
  description: 'For leads who have booked a demo',
  target_audience: 'high-intent',
  emails: [
    {
      id: 'high-intent-day-0',
      sequence_id: 'nurture-high-intent',
      name: 'Demo Confirmation',
      day: 0,
      subject: 'Confirmación de demo: {{date}} a las {{time}}',
      preview: 'Aquí está tu confirmación + qué esperar',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nGracias por agendar una demo de GDS ONE.\n\n📅 **Fecha**: {{date}}\n🕐 **Hora**: {{time}}\n⏱️ **Duración**: 30-45 minutos\n🔗 **Link**: {{meeting_link}}'
        },
        {
          type: 'text',
          content: '**Qué veremos:**\n\n1. Módulos específicos para {{industry}}\n2. Integraciones relevantes\n3. Pricing y planes\n4. Próximos pasos'
        },
        {
          type: 'text',
          content: '**Para aprovechar al máximo la demo, por favor comparte:**\n\n- ¿Qué sistema usas actualmente?\n- ¿Cuáles son tus 3 principales pain points?\n- ¿Cuántos usuarios necesitarías?\n- ¿Timeline de decisión?'
        }
      ],
      cta_primary: 'Agregar a Calendario',
      cta_url: '{{calendar_link}}',
      variables: ['name', 'date', 'time', 'meeting_link', 'calendar_link', 'industry']
    },
    
    {
      id: 'high-intent-day-minus-1',
      sequence_id: 'nurture-high-intent',
      name: 'Demo Reminder',
      day: -1, // 1 day before demo
      subject: 'Recordatorio: Demo mañana a las {{time}}',
      preview: 'Nos vemos mañana',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nRecordatorio de tu demo mañana:\n\n📅 {{date}} a las {{time}}\n🔗 {{meeting_link}}\n\nNos vemos mañana!'
        }
      ],
      cta_primary: 'Unirme a la Demo',
      cta_url: '{{meeting_link}}',
      variables: ['name', 'date', 'time', 'meeting_link']
    },
    
    {
      id: 'high-intent-day-1',
      sequence_id: 'nurture-high-intent',
      name: 'Demo Follow-up',
      day: 1, // 1 day after demo
      subject: 'Gracias por la demo + próximos pasos',
      preview: 'Resumen + recursos + propuesta',
      content_blocks: [
        {
          type: 'text',
          content: 'Hola {{name}},\n\nGracias por tu tiempo ayer. Fue un placer conocer más sobre {{company}} y tus necesidades.\n\n**Resumen de lo que vimos:**\n\n{{demo_summary}}'
        },
        {
          type: 'text',
          content: '**Próximos pasos:**\n\n1. Revisa la propuesta adjunta\n2. Comparte con tu equipo\n3. Agenda una segunda llamada si tienes preguntas\n\n📄 [Propuesta GDS ONE para {{company}}]'
        },
        {
          type: 'cta',
          content: '¿Preguntas? Hablemos.'
        }
      ],
      cta_primary: 'Agendar Seguimiento',
      cta_url: '/es/contact',
      variables: ['name', 'company', 'demo_summary']
    }
  ]
};
