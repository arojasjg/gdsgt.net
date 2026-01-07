import { HeroSection, FeatureGrid, CTASection, SocialProofBanner, PricingInline } from '@gds/ui';
import { Button, Card } from '@gds/ui';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from '@gds/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isSpanish = lang === 'es';

  return generateSEOMetadata(
    {
      title: isSpanish
        ? 'GDS - Software ERP, BI, CRM e IA para Empresas | Soluciones Integrales'
        : 'GDS - ERP, BI, CRM & AI Software for Businesses | Comprehensive Solutions',
      description: isSpanish
        ? 'Soluciones empresariales integrales: ERP modular, Business Intelligence, CRM, Data Engineering e IA. Alternativa moderna a SAP, Oracle NetSuite, Microsoft Dynamics, Odoo. Reduce costos hasta 70%, mejora eficiencia operativa y toma mejores decisiones con datos en tiempo real. +500 empresas en Latinoamérica. Solicita consultoría gratuita.'
        : 'Comprehensive business solutions: Modular ERP, Business Intelligence, CRM, Data Engineering and AI. Modern alternative to SAP, Oracle NetSuite, Microsoft Dynamics, Odoo. Reduce costs up to 70%, improve operational efficiency and make better decisions with real-time data. +500 companies in Latin America. Request free consultation.',
      keywords: isSpanish
        ? [
            'software empresarial',
            'soluciones empresariales',
            'ERP',
            'Business Intelligence',
            'CRM',
            'inteligencia artificial',
            'data engineering',
            'alternativa SAP',
            'alternativa NetSuite',
            'alternativa Dynamics 365',
            'alternativa Odoo',
            'software de gestión',
            'transformación digital',
            'automatización empresarial',
            'análisis de datos',
            'GDS',
            'Latinoamérica',
          ]
        : [
            'business software',
            'enterprise solutions',
            'ERP',
            'Business Intelligence',
            'CRM',
            'artificial intelligence',
            'data engineering',
            'SAP alternative',
            'NetSuite alternative',
            'Dynamics 365 alternative',
            'Odoo alternative',
            'management software',
            'digital transformation',
            'business automation',
            'data analytics',
            'GDS',
            'Latin America',
          ],
    },
    {
      name: 'GDS',
      domain: 'www.gdsgt.net',
      description: 'Business Software Solutions',
      locales: ['es', 'en'],
      defaultLocale: 'es',
    },
    lang as 'es' | 'en',
    ''
  );
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isSpanish = lang === 'es';

  // Schema.org structured data
  const organizationSchema = generateOrganizationSchema({
    name: 'GDS - Grupo de Soluciones',
    description: isSpanish
      ? 'Proveedor líder de software empresarial: ERP, BI, CRM, Data Engineering e IA para empresas en Latinoamérica'
      : 'Leading provider of business software: ERP, BI, CRM, Data Engineering and AI for businesses in Latin America',
    url: 'https://www.gdsgt.net',
    logo: 'https://www.gdsgt.net/logo.png',
    foundingDate: '2009',
    contactPoint: {
      telephone: '+502-2354-5437',
      contactType: 'customer service',
      areaServed: ['GT', 'MX', 'CO', 'SV', 'HN', 'NI', 'CR', 'PA'],
      availableLanguage: ['es', 'en'],
    },
    sameAs: [
      'https://www.linkedin.com/company/grupo-gds',
      'https://www.facebook.com/grupogds',
    ],
    address: {
      streetAddress: 'K.M. 15.5 CARR. A EL SALVADOR, PLAZA CONDADO CONCEPCIÓN, 5TO. NIVEL OF. 5F-1 Y 5F-2',
      addressLocality: 'Guatemala',
      addressCountry: 'GT',
    },
  });

  const benefits = [
    {
      icon: '📊',
      title: isSpanish ? 'Reduce Costos' : 'Reduce Costs',
      description: isSpanish
        ? 'Mejora la eficiencia operativa y reduce costos operacionales automatizando procesos manuales'
        : 'Improve operational efficiency and reduce operational costs by automating manual processes'
    },
    {
      icon: '🎯',
      title: isSpanish ? 'Toma Mejores Decisiones' : 'Make Better Decisions',
      description: isSpanish
        ? 'Acceso instantáneo a datos empresariales en tiempo real para decisiones informadas'
        : 'Instant access to real-time business data for informed decisions'
    },
    {
      icon: '🌐',
      title: isSpanish ? 'Disponible 24/7' : 'Available 24/7',
      description: isSpanish
        ? 'Accede a tu sistema desde cualquier dispositivo con conexión a internet'
        : 'Access your system from any device with internet connection'
    },
    {
      icon: '⚙️',
      title: isSpanish ? 'Adaptable' : 'Adaptable',
      description: isSpanish
        ? 'Soluciones personalizadas que se adaptan a las necesidades específicas de tu empresa'
        : 'Custom solutions that adapt to your company\'s specific needs'
    }
  ];

  const suiteFeatures = [
    {
      id: 'erp',
      title: 'ERP',
      description: isSpanish
        ? 'Sistema ERP modular con contabilidad, inventario, ventas, compras y más'
        : 'Modular ERP system with accounting, inventory, sales, purchasing and more',
    },
    {
      id: 'bi',
      title: 'Business Intelligence',
      description: isSpanish
        ? 'Dashboards interactivos, KPIs y reportes avanzados para toma de decisiones'
        : 'Interactive dashboards, KPIs and advanced reports for decision making',
    },
    {
      id: 'crm',
      title: 'CRM',
      description: isSpanish
        ? 'Gestión de clientes, oportunidades, pipeline de ventas y automatización'
        : 'Customer management, opportunities, sales pipeline and automation',
    },
    {
      id: 'ai',
      title: isSpanish ? 'IA para Negocios' : 'AI for Business',
      description: isSpanish
        ? 'Copilots, automatización inteligente, predicciones y agentes de IA'
        : 'Copilots, intelligent automation, predictions and AI agents',
    },
    {
      id: 'data',
      title: isSpanish ? 'Data Engineering' : 'Data Engineering',
      description: isSpanish
        ? 'ETL/ELT, data warehouse, calidad de datos y análisis avanzado'
        : 'ETL/ELT, data warehouse, data quality and advanced analytics',
    },
    {
      id: 'services',
      title: isSpanish ? 'Servicios' : 'Services',
      description: isSpanish
        ? 'Implementación, integraciones, staff augmentation y soporte'
        : 'Implementation, integrations, staff augmentation and support',
    },
  ];

  return (
    <main>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema }}
      />

      <HeroSection
        title={
          isSpanish
            ? 'Soluciones Integrales, Resultados Integrales'
            : 'Comprehensive Solutions, Comprehensive Results'
        }
        description={
          isSpanish
            ? 'Software personalizado que ayuda a las empresas a mejorar sus procesos y rendimiento. GDS ONE: alternativa moderna a SAP, Oracle NetSuite, Microsoft Dynamics, Odoo, Sage, Infor y QuickBooks. Reduce costos, mejora la eficiencia operativa y toma mejores decisiones con datos en tiempo real.'
            : 'Custom software that helps businesses improve their processes and performance. GDS ONE: modern alternative to SAP, Oracle NetSuite, Microsoft Dynamics, Odoo, Sage, Infor, and QuickBooks. Reduce costs, improve operational efficiency, and make better decisions with real-time data.'
        }
        cta={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/partners/apply`}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                {isSpanish ? 'Solicitar Demo' : 'Request Demo'}
              </Button>
            </Link>
            <Link href={`/${lang}/partners`}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {isSpanish ? 'Hablar con Consultor' : 'Talk to Consultant'}
              </Button>
            </Link>
          </div>
        }
        centered
        size="large"
      />

      {/* Social Proof Banner */}
      <SocialProofBanner lang={lang as 'es' | 'en'} variant="default" />

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              {isSpanish ? 'Beneficios' : 'Benefits'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isSpanish
                ? 'Nuestros servicios están diseñados para ayudar a las empresas a reducir costos, mejorar la eficiencia operativa y estar disponibles en cualquier momento y lugar'
                : 'Our services are designed to help businesses reduce costs, improve operational efficiency, and be available anytime, anywhere'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} variant="hover" className="p-6 text-center">
                <div className="mb-4 flex justify-center text-6xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        title={isSpanish ? 'Nuestra Suite' : 'Our Suite'}
        description={
          isSpanish
            ? 'Soluciones integradas para gestión empresarial, análisis de datos e inteligencia artificial. GDS ONE es una alternativa moderna y accesible a SAP, Oracle NetSuite, Microsoft Dynamics 365, Odoo, Sage Intacct, Infor CloudSuite, Epicor, Acumatica y QuickBooks Enterprise.'
            : 'Integrated solutions for business management, data analytics and artificial intelligence. GDS ONE is a modern and affordable alternative to SAP, Oracle NetSuite, Microsoft Dynamics 365, Odoo, Sage Intacct, Infor CloudSuite, Epicor, Acumatica, and QuickBooks Enterprise.'
        }
        features={suiteFeatures}
        columns={3}
      />

      <CTASection
        variant="gradient"
        title={isSpanish ? '¿Listo para transformar tu empresa?' : 'Ready to transform your business?'}
        description={
          isSpanish
            ? 'Agenda una consultoría gratuita y descubre cómo podemos ayudarte'
            : 'Schedule a free consultation and discover how we can help you'
        }
        cta={
          <Link href={`/${lang}/partners/apply`}>
            <Button variant="secondary" size="lg">
              {isSpanish ? 'Agendar Consultoría' : 'Schedule Consultation'}
            </Button>
          </Link>
        }
      />
    </main>
  );
}
