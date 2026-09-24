/**
 * Terms and Conditions Page
 * 
 * Legal terms of service for GDS ONE
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@gds/ui';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  return {
    title: lang === 'es' 
      ? 'Términos y Condiciones | GDS ONE' 
      : 'Terms and Conditions | GDS ONE',
    description: lang === 'es'
      ? 'Términos y condiciones de uso de GDS ONE. Lee nuestros términos de servicio.'
      : 'GDS ONE terms and conditions of use. Read our terms of service.',
    robots: 'index, follow',
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isSpanish = lang === 'es';

  const content = {
    es: {
      title: 'Términos y Condiciones',
      subtitle: 'Última actualización: 6 de enero de 2026',
      intro: 'Bienvenido a GDS ONE. Al acceder y usar nuestros servicios, aceptas cumplir con estos términos y condiciones. Por favor, léelos cuidadosamente.',
      sections: [
        {
          title: '1. Aceptación de los Términos',
          content: [
            'Al acceder o usar GDS ONE, aceptas estar sujeto a estos Términos y Condiciones y a nuestra Política de Privacidad. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios.',
            '',
            'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.',
          ]
        },
        {
          title: '2. Descripción del Servicio',
          content: [
            'GDS ONE es un sistema ERP (Enterprise Resource Planning) basado en la nube que proporciona:',
            '• Gestión contable y financiera',
            '• Control de inventario y almacenes',
            '• Gestión de ventas y CRM',
            '• Gestión de compras y proveedores',
            '• Producción y manufactura',
            '• Business Intelligence y reportes',
            '• Y otros módulos empresariales',
            '',
            'Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento.',
          ]
        },
        {
          title: '3. Registro y Cuenta',
          content: [
            'Para usar GDS ONE, debes:',
            '• Tener al menos 18 años de edad',
            '• Proporcionar información precisa y completa',
            '• Mantener la seguridad de tu cuenta',
            '• Notificarnos inmediatamente sobre cualquier uso no autorizado',
            '',
            'Eres responsable de todas las actividades que ocurran bajo tu cuenta. No puedes transferir tu cuenta a otra persona sin nuestro consentimiento previo por escrito.',
          ]
        },
        {
          title: '4. Planes y Pagos',
          content: [
            'GDS ONE ofrece diferentes planes de suscripción:',
            '• Starter: Para pequeñas empresas (1-10 usuarios)',
            '• Professional: Para empresas en crecimiento (11-50 usuarios)',
            '• Enterprise: Para grandes empresas (50+ usuarios)',
            '',
            'Términos de pago:',
            '• Los pagos se procesan mensualmente o anualmente según tu plan',
            '• Todos los precios están en Quetzales guatemaltecos (GTQ)',
            '• Los impuestos aplicables se añadirán según la jurisdicción',
            '• Los pagos no son reembolsables excepto según lo requerido por ley',
            '• Puedes cancelar tu suscripción en cualquier momento',
            '• La cancelación será efectiva al final del período de facturación actual',
          ]
        },
        {
          title: '5. Uso Aceptable',
          content: [
            'Al usar GDS ONE, aceptas NO:',
            '• Violar leyes o regulaciones aplicables',
            '• Infringir derechos de propiedad intelectual',
            '• Transmitir malware, virus o código dañino',
            '• Intentar acceder sin autorización a nuestros sistemas',
            '• Realizar ingeniería inversa del software',
            '• Usar el servicio para actividades fraudulentas',
            '• Sobrecargar o interferir con nuestros servidores',
            '• Revender o redistribuir el servicio sin autorización',
            '',
            'Nos reservamos el derecho de suspender o terminar tu cuenta si violas estos términos.',
          ]
        },
        {
          title: '6. Propiedad Intelectual',
          content: [
            'GDS ONE y todo su contenido, características y funcionalidad son propiedad de Grupo GDS y están protegidos por:',
            '• Derechos de autor',
            '• Marcas registradas',
            '• Patentes',
            '• Secretos comerciales',
            '• Otras leyes de propiedad intelectual',
            '',
            'No puedes copiar, modificar, distribuir, vender o arrendar ninguna parte de nuestros servicios sin nuestro permiso expreso por escrito.',
            '',
            'Tus Datos:',
            'Conservas todos los derechos sobre los datos que ingresas en GDS ONE. Te otorgamos una licencia para usar el software, pero tus datos siguen siendo tuyos.',
          ]
        },
        {
          title: '7. Disponibilidad y Soporte',
          content: [
            'Nos esforzamos por mantener GDS ONE disponible 24/7, pero no garantizamos:',
            '• Acceso ininterrumpido al servicio',
            '• Operación libre de errores',
            '• Corrección inmediata de defectos',
            '',
            'Soporte Técnico:',
            '• Starter: Soporte por email (respuesta en 48 horas)',
            '• Professional: Soporte prioritario (respuesta en 24 horas)',
            '• Enterprise: Soporte dedicado 24/7 con SLA garantizado',
            '',
            'Mantenimiento programado será notificado con al menos 48 horas de anticipación.',
          ]
        },
        {
          title: '8. Respaldos y Seguridad de Datos',
          content: [
            'Implementamos medidas de seguridad para proteger tus datos:',
            '• Respaldos automáticos diarios',
            '• Cifrado de datos en tránsito y en reposo',
            '• Controles de acceso basados en roles',
            '• Monitoreo de seguridad 24/7',
            '• Cumplimiento con ISO 27001',
            '',
            'Sin embargo, ningún sistema es 100% seguro. Eres responsable de:',
            '• Mantener credenciales seguras',
            '• Configurar permisos de usuario apropiadamente',
            '• Mantener respaldos adicionales si lo consideras necesario',
          ]
        },
        {
          title: '9. Limitación de Responsabilidad',
          content: [
            'EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY:',
            '',
            'GDS ONE SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO.',
            '',
            'NO SEREMOS RESPONSABLES POR:',
            '• Pérdida de beneficios, datos o oportunidades de negocio',
            '• Daños indirectos, incidentales o consecuentes',
            '• Interrupciones del servicio',
            '• Errores o inexactitudes en el contenido',
            '• Acceso no autorizado a tus datos',
            '',
            'NUESTRA RESPONSABILIDAD TOTAL NO EXCEDERÁ EL MONTO PAGADO POR TI EN LOS ÚLTIMOS 12 MESES.',
          ]
        },
        {
          title: '10. Indemnización',
          content: [
            'Aceptas indemnizar y eximir de responsabilidad a GDS ONE, sus directores, empleados y agentes de cualquier reclamo, daño, pérdida o gasto (incluyendo honorarios legales) que surjan de:',
            '• Tu uso del servicio',
            '• Tu violación de estos términos',
            '• Tu violación de derechos de terceros',
            '• Cualquier contenido que proporciones',
          ]
        },
        {
          title: '11. Terminación',
          content: [
            'Puedes terminar tu cuenta en cualquier momento:',
            '• Cancelando tu suscripción desde el panel de control',
            '• Contactando a nuestro equipo de soporte',
            '',
            'Podemos terminar o suspender tu cuenta si:',
            '• Violas estos términos',
            '• No pagas las tarifas aplicables',
            '• Tu uso pone en riesgo nuestros sistemas',
            '• Lo requerimos por ley',
            '',
            'Tras la terminación:',
            '• Tu acceso al servicio cesará inmediatamente',
            '• Tus datos serán retenidos por 30 días para recuperación',
            '• Después de 30 días, los datos serán eliminados permanentemente',
            '• No se reembolsarán pagos ya realizados',
          ]
        },
        {
          title: '12. Ley Aplicable y Jurisdicción',
          content: [
            'Estos términos se rigen por las leyes de Guatemala.',
            '',
            'Cualquier disputa será resuelta en los tribunales de Guatemala, Ciudad de Guatemala.',
            '',
            'Si alguna disposición de estos términos se considera inválida, las demás disposiciones permanecerán en pleno vigor.',
          ]
        },
        {
          title: '13. Modificaciones al Servicio',
          content: [
            'Nos reservamos el derecho de:',
            '• Modificar o discontinuar características',
            '• Cambiar precios con 30 días de aviso',
            '• Actualizar estos términos en cualquier momento',
            '',
            'Los cambios significativos serán notificados por email o mediante aviso en el servicio.',
          ]
        },
        {
          title: '14. Contacto',
          content: [
            'Para preguntas sobre estos términos, contáctanos:',
            '',
            '📧 Email: info@gdsgt.net',
            '📞 Teléfono: +502 2354-5437',
            '💬 WhatsApp: +502 5996-1882',
            '',
            '📍 Dirección Legal:',
            'Grupo GDS',
            'K.M. 15.5 CARR. A EL SALVADOR',
            'PLAZA CONDADO CONCEPCIÓN',
            '5TO. NIVEL OF. 5F-1 Y 5F-2',
            'Guatemala, Guatemala',
            '',
            'NIT: [Número de Identificación Tributaria]',
          ]
        }
      ],
      acceptance: {
        title: 'Aceptación',
        content: 'Al usar GDS ONE, confirmas que has leído, entendido y aceptado estos Términos y Condiciones.'
      },
      backToHome: '← Volver al Inicio'
    },
    en: {
      title: 'Terms and Conditions',
      subtitle: 'Last updated: January 6, 2026',
      intro: 'Welcome to GDS ONE. By accessing and using our services, you agree to comply with these terms and conditions. Please read them carefully.',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: [
            'By accessing or using GDS ONE, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, you should not use our services.',
            '',
            'We reserve the right to modify these terms at any time. Changes will take effect immediately upon posting on our website.',
          ]
        },
        {
          title: '2. Service Description',
          content: [
            'GDS ONE is a cloud-based ERP (Enterprise Resource Planning) system that provides:',
            '• Accounting and financial management',
            '• Inventory and warehouse control',
            '• Sales and CRM management',
            '• Purchasing and supplier management',
            '• Production and manufacturing',
            '• Business Intelligence and reporting',
            '• And other business modules',
            '',
            'We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.',
          ]
        },
        {
          title: '3. Registration and Account',
          content: [
            'To use GDS ONE, you must:',
            '• Be at least 18 years old',
            '• Provide accurate and complete information',
            '• Maintain the security of your account',
            '• Notify us immediately of any unauthorized use',
            '',
            'You are responsible for all activities that occur under your account. You may not transfer your account to another person without our prior written consent.',
          ]
        },
        {
          title: '4. Plans and Payments',
          content: [
            'GDS ONE offers different subscription plans:',
            '• Starter: For small businesses (1-10 users)',
            '• Professional: For growing companies (11-50 users)',
            '• Enterprise: For large enterprises (50+ users)',
            '',
            'Payment terms:',
            '• Payments are processed monthly or annually according to your plan',
            '• All prices are in Guatemalan Quetzales (GTQ)',
            '• Applicable taxes will be added according to jurisdiction',
            '• Payments are non-refundable except as required by law',
            '• You may cancel your subscription at any time',
            '• Cancellation will be effective at the end of the current billing period',
          ]
        },
        {
          title: '5. Acceptable Use',
          content: [
            'By using GDS ONE, you agree NOT to:',
            '• Violate applicable laws or regulations',
            '• Infringe intellectual property rights',
            '• Transmit malware, viruses, or harmful code',
            '• Attempt unauthorized access to our systems',
            '• Reverse engineer the software',
            '• Use the service for fraudulent activities',
            '• Overload or interfere with our servers',
            '• Resell or redistribute the service without authorization',
            '',
            'We reserve the right to suspend or terminate your account if you violate these terms.',
          ]
        },
        {
          title: '6. Intellectual Property',
          content: [
            'GDS ONE and all its content, features, and functionality are owned by Grupo GDS and protected by:',
            '• Copyright',
            '• Trademarks',
            '• Patents',
            '• Trade secrets',
            '• Other intellectual property laws',
            '',
            'You may not copy, modify, distribute, sell, or lease any part of our services without our express written permission.',
            '',
            'Your Data:',
            'You retain all rights to the data you enter into GDS ONE. We grant you a license to use the software, but your data remains yours.',
          ]
        },
        {
          title: '7. Availability and Support',
          content: [
            'We strive to keep GDS ONE available 24/7, but we do not guarantee:',
            '• Uninterrupted access to the service',
            '• Error-free operation',
            '• Immediate correction of defects',
            '',
            'Technical Support:',
            '• Starter: Email support (48-hour response)',
            '• Professional: Priority support (24-hour response)',
            '• Enterprise: Dedicated 24/7 support with guaranteed SLA',
            '',
            'Scheduled maintenance will be notified at least 48 hours in advance.',
          ]
        },
        {
          title: '8. Backups and Data Security',
          content: [
            'We implement security measures to protect your data:',
            '• Automatic daily backups',
            '• Data encryption in transit and at rest',
            '• Role-based access controls',
            '• 24/7 security monitoring',
            '• ISO 27001 compliance',
            '',
            'However, no system is 100% secure. You are responsible for:',
            '• Keeping credentials secure',
            '• Configuring user permissions appropriately',
            '• Maintaining additional backups if you deem necessary',
          ]
        },
        {
          title: '9. Limitation of Liability',
          content: [
            'TO THE MAXIMUM EXTENT PERMITTED BY LAW:',
            '',
            'GDS ONE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.',
            '',
            'WE WILL NOT BE LIABLE FOR:',
            '• Loss of profits, data, or business opportunities',
            '• Indirect, incidental, or consequential damages',
            '• Service interruptions',
            '• Errors or inaccuracies in content',
            '• Unauthorized access to your data',
            '',
            'OUR TOTAL LIABILITY WILL NOT EXCEED THE AMOUNT PAID BY YOU IN THE LAST 12 MONTHS.',
          ]
        },
        {
          title: '10. Indemnification',
          content: [
            'You agree to indemnify and hold harmless GDS ONE, its directors, employees, and agents from any claim, damage, loss, or expense (including legal fees) arising from:',
            '• Your use of the service',
            '• Your violation of these terms',
            '• Your violation of third-party rights',
            '• Any content you provide',
          ]
        },
        {
          title: '11. Termination',
          content: [
            'You may terminate your account at any time by:',
            '• Canceling your subscription from the control panel',
            '• Contacting our support team',
            '',
            'We may terminate or suspend your account if:',
            '• You violate these terms',
            '• You fail to pay applicable fees',
            '• Your use puts our systems at risk',
            '• Required by law',
            '',
            'Upon termination:',
            '• Your access to the service will cease immediately',
            '• Your data will be retained for 30 days for recovery',
            '• After 30 days, data will be permanently deleted',
            '• No refunds will be issued for payments already made',
          ]
        },
        {
          title: '12. Applicable Law and Jurisdiction',
          content: [
            'These terms are governed by the laws of Guatemala.',
            '',
            'Any dispute will be resolved in the courts of Guatemala, Guatemala City.',
            '',
            'If any provision of these terms is deemed invalid, the other provisions will remain in full force.',
          ]
        },
        {
          title: '13. Service Modifications',
          content: [
            'We reserve the right to:',
            '• Modify or discontinue features',
            '• Change prices with 30 days\' notice',
            '• Update these terms at any time',
            '',
            'Significant changes will be notified by email or through a notice in the service.',
          ]
        },
        {
          title: '14. Contact',
          content: [
            'For questions about these terms, contact us:',
            '',
            '📧 Email: info@gdsgt.net',
            '📞 Phone: +502 2354-5437',
            '💬 WhatsApp: +502 5996-1882',
            '',
            '📍 Legal Address:',
            'Grupo GDS',
            'K.M. 15.5 CARR. A EL SALVADOR',
            'PLAZA CONDADO CONCEPCIÓN',
            '5TH FLOOR OF. 5F-1 Y 5F-2',
            'Guatemala, Guatemala',
            '',
            'Tax ID: [Tax Identification Number]',
          ]
        }
      ],
      acceptance: {
        title: 'Acceptance',
        content: 'By using GDS ONE, you confirm that you have read, understood, and accepted these Terms and Conditions.'
      },
      backToHome: '← Back to Home'
    }
  };

  const t = isSpanish ? content.es : content.en;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            href={`/${lang}`}
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            {t.backToHome}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card variant="default" className="p-8 mb-8 bg-yellow-50 border-yellow-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚖️</div>
              <p className="text-lg text-gray-800 leading-relaxed">
                {t.intro}
              </p>
            </div>
          </Card>

          {/* Sections */}
          {t.sections.map((section, index) => (
            <Card key={index} variant="default" className="p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 mb-2 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ))}

          {/* Acceptance */}
          <Card variant="default" className="p-8 bg-green-50 border-green-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {t.acceptance.title}
                </h3>
                <p className="text-green-800">
                  {t.acceptance.content}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
