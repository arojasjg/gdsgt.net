/**
 * Privacy Policy Page
 * 
 * GDPR and data protection compliance
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@gds/ui/layouts';
import { Card } from '@gds/ui';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  return {
    title: lang === 'es' 
      ? 'Política de Privacidad | GDS ONE' 
      : 'Privacy Policy | GDS ONE',
    description: lang === 'es'
      ? 'Política de privacidad y protección de datos de GDS ONE. Conoce cómo protegemos tu información.'
      : 'GDS ONE privacy and data protection policy. Learn how we protect your information.',
    robots: 'index, follow',
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isSpanish = lang === 'es';

  const content = {
    es: {
      title: 'Política de Privacidad',
      subtitle: 'Última actualización: 24 de septiembre de 2026',
      intro: 'En GDS ONE, nos comprometemos a proteger tu privacidad y tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información.',
      sections: [
        {
          title: '1. Información que Recopilamos',
          content: [
            'Recopilamos información que nos proporcionas directamente cuando:',
            '• Te registras para una cuenta de GDS ONE',
            '• Solicitas una demostración o información sobre nuestros productos',
            '• Te comunicas con nuestro equipo de soporte',
            '• Participas en encuestas o promociones',
            '',
            'Esta información puede incluir:',
            '• Nombre y apellidos',
            '• Dirección de correo electrónico',
            '• Número de teléfono',
            '• Nombre de la empresa',
            '• Cargo o posición',
            '• Información de facturación',
          ]
        },
        {
          title: '2. Cómo Usamos tu Información',
          content: [
            'Utilizamos la información recopilada para:',
            '• Proporcionar, mantener y mejorar nuestros servicios',
            '• Procesar transacciones y enviar confirmaciones',
            '• Responder a tus consultas y solicitudes de soporte',
            '• Enviarte actualizaciones técnicas, de seguridad y administrativas',
            '• Comunicarte ofertas, promociones y noticias sobre GDS ONE',
            '• Analizar el uso de nuestros servicios para mejorar la experiencia del usuario',
            '• Detectar, prevenir y abordar problemas técnicos y de seguridad',
            '• Cumplir con obligaciones legales y regulatorias',
          ]
        },
        {
          title: '3. Compartir Información',
          content: [
            'No vendemos ni alquilamos tu información personal a terceros.',
            '',
            'Podemos compartir tu información con:',
            '• Proveedores de servicios que nos ayudan a operar nuestro negocio',
            '• Autoridades legales cuando sea requerido por ley',
            '• Terceros en caso de fusión, adquisición o venta de activos',
            '',
            'Todos nuestros proveedores de servicios están obligados contractualmente a proteger tu información y solo pueden usarla para los fines específicos que les autorizamos.',
          ]
        },
        {
          title: '4. Seguridad de Datos',
          content: [
            'Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:',
            '• Cifrado SSL/TLS para todas las transmisiones de datos',
            '• Cifrado de datos en reposo',
            '• Controles de acceso basados en roles (RBAC)',
            '• Auditorías de seguridad regulares',
            '• Monitoreo continuo de amenazas',
            '• Backups automáticos y redundancia de datos',
            '• Cumplimiento con estándares ISO 27001',
            '',
            'Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por proteger tu información, no podemos garantizar su seguridad absoluta.',
          ]
        },
        {
          title: '5. Retención de Datos',
          content: [
            'Conservamos tu información personal solo durante el tiempo necesario para:',
            '• Cumplir con los propósitos descritos en esta política',
            '• Satisfacer requisitos legales, contables o de informes',
            '• Resolver disputas y hacer cumplir nuestros acuerdos',
            '',
            'Cuando tu información ya no sea necesaria, la eliminaremos de forma segura o la anonimizaremos.',
          ]
        },
        {
          title: '6. Tus Derechos',
          content: [
            'Tienes derecho a:',
            '• Acceder a tu información personal',
            '• Corregir información inexacta o incompleta',
            '• Solicitar la eliminación de tu información',
            '• Oponerte al procesamiento de tu información',
            '• Solicitar la portabilidad de tus datos',
            '• Retirar tu consentimiento en cualquier momento',
            '',
            'Para ejercer estos derechos, contáctanos en: info@grupogds.co',
          ]
        },
        {
          title: '7. Cookies y Tecnologías Similares',
          content: [
            'Utilizamos cookies y tecnologías similares para:',
            '• Mantener tu sesión activa y recordar tus preferencias',
            '• Medir el uso del sitio web (Google Analytics 4)',
            '• Medir la efectividad de nuestros anuncios (Google Ads y Meta Pixel de Facebook e Instagram)',
            '',
            'Proveedores de terceros:',
            '• Google LLC (Google Analytics y Google Ads): policies.google.com/privacy',
            '• Meta Platforms, Inc. (Meta Pixel): facebook.com/privacy/policy',
            '',
            'Registramos eventos como visitas a páginas, clics en enlaces de WhatsApp, teléfono o correo, y envíos de formularios. No enviamos a estos proveedores el contenido que escribes en los formularios.',
            '',
            'Si nos visitas desde la Unión Europea, el Espacio Económico Europeo, el Reino Unido o Suiza, solo activamos estas cookies después de que las aceptes en el banner. Desde otros países se activan por defecto.',
            '',
            'Puedes cambiar tu decisión en cualquier momento con el enlace "Preferencias de cookies" al pie de cada página, o bloquear las cookies en la configuración de tu navegador.',
          ]
        },
        {
          title: '8. Transferencias Internacionales',
          content: [
            'Tus datos pueden ser transferidos y procesados en países fuera de tu jurisdicción. Cuando transferimos datos internacionalmente, implementamos salvaguardas apropiadas, incluyendo:',
            '• Cláusulas contractuales estándar aprobadas',
            '• Certificaciones de privacidad relevantes',
            '• Medidas de seguridad adicionales',
          ]
        },
        {
          title: '9. Privacidad de Menores',
          content: [
            'Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.',
          ]
        },
        {
          title: '10. Cambios a esta Política',
          content: [
            'Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos mediante:',
            '• Un aviso destacado en nuestro sitio web',
            '• Una notificación por correo electrónico',
            '',
            'Te recomendamos revisar esta política regularmente para estar informado sobre cómo protegemos tu información.',
          ]
        },
        {
          title: '11. Contacto',
          content: [
            'Si tienes preguntas sobre esta política de privacidad, contáctanos:',
            '',
            '📧 Email: info@grupogds.co',
            '📞 Teléfono: +502 2354-5437',
            '💬 WhatsApp: +502 5996-1882',
            '',
            '📍 Dirección:',
            'K.M. 15.5 CARR. A EL SALVADOR',
            'PLAZA CONDADO CONCEPCIÓN',
            '5TO. NIVEL OF. 5F-1 Y 5F-2',
            'Guatemala, Guatemala',
          ]
        }
      ],
      gdpr: {
        title: 'Cumplimiento GDPR',
        content: 'GDS ONE cumple con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y otras leyes de privacidad aplicables en Latinoamérica.'
      },
      backToHome: '← Volver al Inicio'
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'Last updated: September 24, 2026',
      intro: 'At GDS ONE, we are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect your information.',
      sections: [
        {
          title: '1. Information We Collect',
          content: [
            'We collect information you provide directly when you:',
            '• Register for a GDS ONE account',
            '• Request a demonstration or information about our products',
            '• Communicate with our support team',
            '• Participate in surveys or promotions',
            '',
            'This information may include:',
            '• First and last name',
            '• Email address',
            '• Phone number',
            '• Company name',
            '• Job title or position',
            '• Billing information',
          ]
        },
        {
          title: '2. How We Use Your Information',
          content: [
            'We use the collected information to:',
            '• Provide, maintain, and improve our services',
            '• Process transactions and send confirmations',
            '• Respond to your inquiries and support requests',
            '• Send you technical, security, and administrative updates',
            '• Communicate offers, promotions, and news about GDS ONE',
            '• Analyze service usage to improve user experience',
            '• Detect, prevent, and address technical and security issues',
            '• Comply with legal and regulatory obligations',
          ]
        },
        {
          title: '3. Information Sharing',
          content: [
            'We do not sell or rent your personal information to third parties.',
            '',
            'We may share your information with:',
            '• Service providers who help us operate our business',
            '• Legal authorities when required by law',
            '• Third parties in case of merger, acquisition, or asset sale',
            '',
            'All our service providers are contractually obligated to protect your information and may only use it for the specific purposes we authorize.',
          ]
        },
        {
          title: '4. Data Security',
          content: [
            'We implement technical and organizational security measures to protect your information:',
            '• SSL/TLS encryption for all data transmissions',
            '• Encryption of data at rest',
            '• Role-based access controls (RBAC)',
            '• Regular security audits',
            '• Continuous threat monitoring',
            '• Automatic backups and data redundancy',
            '• ISO 27001 compliance',
            '',
            'However, no method of Internet transmission or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.',
          ]
        },
        {
          title: '5. Data Retention',
          content: [
            'We retain your personal information only as long as necessary to:',
            '• Fulfill the purposes described in this policy',
            '• Satisfy legal, accounting, or reporting requirements',
            '• Resolve disputes and enforce our agreements',
            '',
            'When your information is no longer needed, we will securely delete it or anonymize it.',
          ]
        },
        {
          title: '6. Your Rights',
          content: [
            'You have the right to:',
            '• Access your personal information',
            '• Correct inaccurate or incomplete information',
            '• Request deletion of your information',
            '• Object to the processing of your information',
            '• Request data portability',
            '• Withdraw your consent at any time',
            '',
            'To exercise these rights, contact us at: info@grupogds.co',
          ]
        },
        {
          title: '7. Cookies and Similar Technologies',
          content: [
            'We use cookies and similar technologies to:',
            '• Keep your session active and remember your preferences',
            '• Measure website usage (Google Analytics 4)',
            '• Measure the effectiveness of our ads (Google Ads and Meta Pixel for Facebook and Instagram)',
            '',
            'Third-party providers:',
            '• Google LLC (Google Analytics and Google Ads): policies.google.com/privacy',
            '• Meta Platforms, Inc. (Meta Pixel): facebook.com/privacy/policy',
            '',
            'We record events such as page views, clicks on WhatsApp, phone or email links, and form submissions. We do not send the content you type into forms to these providers.',
            '',
            'If you visit us from the European Union, the European Economic Area, the United Kingdom or Switzerland, these cookies are only activated after you accept them in the banner. From other countries they are active by default.',
            '',
            'You can change your choice at any time using the "Cookie preferences" link at the bottom of every page, or block cookies in your browser settings.',
          ]
        },
        {
          title: '8. International Transfers',
          content: [
            'Your data may be transferred and processed in countries outside your jurisdiction. When we transfer data internationally, we implement appropriate safeguards, including:',
            '• Approved standard contractual clauses',
            '• Relevant privacy certifications',
            '• Additional security measures',
          ]
        },
        {
          title: '9. Children\'s Privacy',
          content: [
            'Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If we discover we have collected information from a minor, we will delete it immediately.',
          ]
        },
        {
          title: '10. Changes to This Policy',
          content: [
            'We may update this policy periodically. We will notify you of significant changes through:',
            '• A prominent notice on our website',
            '• An email notification',
            '',
            'We recommend reviewing this policy regularly to stay informed about how we protect your information.',
          ]
        },
        {
          title: '11. Contact',
          content: [
            'If you have questions about this privacy policy, contact us:',
            '',
            '📧 Email: info@grupogds.co',
            '📞 Phone: +502 2354-5437',
            '💬 WhatsApp: +502 5996-1882',
            '',
            '📍 Address:',
            'K.M. 15.5 CARR. A EL SALVADOR',
            'PLAZA CONDADO CONCEPCIÓN',
            '5TH FLOOR OF. 5F-1 Y 5F-2',
            'Guatemala, Guatemala',
          ]
        }
      ],
      gdpr: {
        title: 'GDPR Compliance',
        content: 'GDS ONE complies with the European Union General Data Protection Regulation (GDPR) and other applicable privacy laws in Latin America.'
      },
      backToHome: '← Back to Home'
    }
  };

  const t = isSpanish ? content.es : content.en;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            href={`/${lang}`}
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            {t.backToHome}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-100">{t.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card variant="default" className="p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.intro}
            </p>
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

          {/* GDPR Badge */}
          <Card variant="default" className="p-8 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔒</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {t.gdpr.title}
                </h3>
                <p className="text-blue-800">
                  {t.gdpr.content}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
