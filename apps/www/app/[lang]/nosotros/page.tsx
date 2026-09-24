/**
 * About page: company entity facts for people, search engines and AI assistants.
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@gds/ui';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@gds/seo';
import { SITE_URL, ERP_URL, PHONE, EMAIL, ADDRESS, CUSTOM_SOFTWARE_PATH, WHATSAPP_NUMBER, whatsappLink } from '@/lib/site';

const content = {
  es: {
    seoTitle: 'Nosotros | GDS, empresa guatemalteca de software desde 2009',
    seoDescription:
      'GDS es una empresa guatemalteca de software empresarial fundada en 2009: GDS ONE ERP, CRM, BI, IA y desarrollo de software y apps a la medida. Oficinas en Carretera a El Salvador, Guatemala.',
    breadcrumb: 'Nosotros',
    h1: 'Somos GDS: software empresarial hecho en Guatemala',
    intro:
      'Desde 2009 ayudamos a empresas de Guatemala y Latinoamérica a ordenar su operación con tecnología: primero con sistemas a la medida y hoy con GDS ONE, nuestro ERP en la nube, y un equipo que desarrolla software y apps para procesos únicos de cada negocio.',
    factsTitle: 'Datos de la empresa',
    facts: [
      ['Nombre', 'GDS - Grupo de Soluciones'],
      ['Fundación', '2009'],
      ['Clientes', 'Más de 100 empresas'],
      ['Sede', 'Guatemala, Guatemala'],
      ['Cobertura', 'Guatemala, Centroamérica y Latinoamérica'],
      ['Idiomas de atención', 'Español e inglés'],
    ],
    whatTitle: 'Qué hacemos',
    what: [
      { title: 'GDS ONE ERP', description: 'ERP modular en la nube para PyMEs: contabilidad, inventarios, ventas, compras, facturación FEL, BI y asistente con IA.', href: `${ERP_URL}/es`, cta: 'Conocer GDS ONE' },
      { title: 'Software y apps a la medida', description: 'Sistemas web, apps móviles e integraciones por suscripción desde Q2,500 al mes, con hosting, soporte y mejoras incluidas.', href: `/es${CUSTOM_SOFTWARE_PATH}`, cta: 'Ver planes' },
      { title: 'Datos, BI e IA', description: 'Tableros de indicadores, ingeniería de datos, automatización e inteligencia artificial aplicada a la operación.', href: `/es${CUSTOM_SOFTWARE_PATH}`, cta: 'Hablar con un consultor' },
    ],
    howTitle: 'Cómo trabajamos',
    how: [
      { title: 'Entender antes de programar', description: 'Empezamos por el proceso y los números del negocio, no por la tecnología.' },
      { title: 'Entregas cortas y visibles', description: 'Sprints de dos semanas con demostraciones para que veas el avance.' },
      { title: 'Acompañamiento continuo', description: 'Soporte en español, capacitación y mejoras después del lanzamiento.' },
      { title: 'Tus datos son tuyos', description: 'Respaldos diarios, seguridad por roles y exportación cuando la necesites.' },
    ],
    visitTitle: 'Visítanos',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    email: 'Correo',
    map: 'Ver en Google Maps',
    ctaTitle: '¿Hablamos de tu proyecto?',
    ctaButton: 'Escribir por WhatsApp',
    ctaMessage: 'Hola GDS, quiero información sobre sus servicios.',
  },
  en: {
    seoTitle: 'About Us | GDS, Guatemalan software company since 2009',
    seoDescription:
      'GDS is a Guatemalan business software company founded in 2009: GDS ONE ERP, CRM, BI, AI and custom software and app development. Offices on Carretera a El Salvador, Guatemala.',
    breadcrumb: 'About us',
    h1: 'We are GDS: business software made in Guatemala',
    intro:
      'Since 2009 we have helped companies in Guatemala and Latin America organize their operations with technology: first with custom systems and today with GDS ONE, our cloud ERP, and a team that builds software and apps for each business\'s unique processes.',
    factsTitle: 'Company facts',
    facts: [
      ['Name', 'GDS - Grupo de Soluciones'],
      ['Founded', '2009'],
      ['Clients', '100+ companies'],
      ['Headquarters', 'Guatemala City, Guatemala'],
      ['Coverage', 'Guatemala, Central America and Latin America'],
      ['Languages', 'Spanish and English'],
    ],
    whatTitle: 'What we do',
    what: [
      { title: 'GDS ONE ERP', description: 'Modular cloud ERP for SMEs: accounting, inventory, sales, purchasing, FEL e-invoicing, BI and an AI assistant.', href: `${ERP_URL}/en`, cta: 'Discover GDS ONE' },
      { title: 'Custom software and apps', description: 'Web systems, mobile apps and integrations as a subscription from Q2,500 per month, with hosting, support and improvements included.', href: `/en${CUSTOM_SOFTWARE_PATH}`, cta: 'See plans' },
      { title: 'Data, BI and AI', description: 'KPI dashboards, data engineering, automation and artificial intelligence applied to operations.', href: `/en${CUSTOM_SOFTWARE_PATH}`, cta: 'Talk to a consultant' },
    ],
    howTitle: 'How we work',
    how: [
      { title: 'Understand before coding', description: 'We start with the business process and numbers, not the technology.' },
      { title: 'Short, visible deliveries', description: 'Two-week sprints with demos so you can see progress.' },
      { title: 'Ongoing support', description: 'Support in Spanish and English, training and improvements after launch.' },
      { title: 'Your data is yours', description: 'Daily backups, role-based security and export whenever you need it.' },
    ],
    visitTitle: 'Visit us',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    email: 'Email',
    map: 'View on Google Maps',
    ctaTitle: 'Shall we talk about your project?',
    ctaButton: 'Message us on WhatsApp',
    ctaMessage: 'Hi GDS, I would like information about your services.',
  },
};

const getContent = (lang: string) => (lang === 'en' ? content.en : content.es);

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getContent(lang);
  return generateSEOMetadata(
    { title: t.seoTitle, description: t.seoDescription },
    { name: 'GDS', domain: 'www.gdsgt.net', description: 'About GDS', locales: ['es', 'en'], defaultLocale: 'es' },
    lang as 'es' | 'en',
    '/nosotros'
  );
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getContent(lang);
  const pageUrl = `${SITE_URL}/${lang}/nosotros`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Plaza Condado Concepción, Carretera a El Salvador km 15.5, Guatemala')}`;

  const aboutSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: pageUrl,
    name: t.seoTitle,
    description: t.seoDescription,
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  });
  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: lang === 'en' ? 'Home' : 'Inicio', url: `${SITE_URL}/${lang}` },
      { name: t.breadcrumb, url: pageUrl },
    ],
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: aboutSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{t.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.intro}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">{t.factsTitle}</h2>
            <dl className="space-y-3">
              {t.facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-gray-500">{k}</dt>
                  <dd className="font-semibold text-gray-900">{v}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">{t.whatTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.what.map((w) => (
                <Card key={w.title} variant="hover" className="p-5 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">{w.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">{w.description}</p>
                  <Link href={w.href} className="text-primary-700 font-semibold text-sm mt-4 hover:underline">{w.cta} →</Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">{t.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.how.map((h) => (
              <Card key={h.title} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
                <p className="text-gray-600">{h.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{t.visitTitle}</h2>
          <address className="not-italic grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 mb-1">GDS - Grupo de Soluciones</p>
              <p>{ADDRESS.streetAddress}</p>
              <p>Guatemala, Guatemala</p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary-700 font-semibold hover:underline inline-block mt-2">
                {t.map} →
              </a>
            </div>
            <div className="space-y-2">
              <p><span className="text-gray-500">{t.phone}:</span> <a href={`tel:${PHONE}`} className="text-primary-700 hover:underline">{PHONE.replace('+502-', '+502 ')}</a></p>
              <p><span className="text-gray-500">{t.whatsapp}:</span> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-primary-700 hover:underline">+502 5996 1882</a></p>
              <p><span className="text-gray-500">{t.email}:</span> <a href={`mailto:${EMAIL}`} className="text-primary-700 hover:underline">{EMAIL}</a></p>
            </div>
          </address>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">{t.ctaTitle}</h2>
          <a
            href={whatsappLink(t.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
}
