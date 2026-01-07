/**
 * Case Studies Index Page
 * 
 * Overview of customer success stories
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection, CTASection } from '@gds/ui/layouts';
import { Card, Badge } from '@gds/ui';
import { generateMetadata as generateSEOMetadata } from '@gds/seo';
import { getAllCaseStudies } from '@gds/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isSpanish = lang === 'es';
  
  return generateSEOMetadata(
    {
      title: isSpanish ? 'Casos de Éxito' : 'Success Stories',
      description: isSpanish 
        ? 'Descubre cómo empresas reales transformaron su operación con GDS ONE. Resultados medibles, historias reales.'
        : 'Discover how real companies transformed their operations with GDS ONE. Measurable results, real stories.',
      keywords: isSpanish
        ? ['casos de éxito ERP', 'testimonios ERP', 'resultados ERP', 'ROI ERP', 'implementación ERP']
        : ['ERP success stories', 'ERP testimonials', 'ERP results', 'ERP ROI', 'ERP implementation']
    },
    {
      name: 'GDS ONE',
      domain: 'www.gds.com',
      description: 'Enterprise Resource Planning',
      locales: ['es', 'en'],
      defaultLocale: 'es'
    },
    lang as 'es' | 'en',
    '/case-studies'
  );
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isSpanish = lang === 'es';
  const caseStudies = getAllCaseStudies();
  
  // Determine demo URL based on environment
  const demoUrl = process.env.NODE_ENV === 'development' 
    ? `http://localhost:9001/${lang}/demo` 
    : `https://erp.grupogds.co/${lang}/demo`;
  
  const content = {
    es: {
      hero: {
        title: 'Casos de Éxito',
        description: 'Empresas reales, resultados reales. Descubre cómo GDS ONE transformó su operación.'
      },
      intro: {
        title: '¿Por qué casos de éxito?',
        description: 'No te pedimos que confíes en nuestras palabras. Te mostramos resultados reales de empresas como la tuya.',
        stats: [
          { value: '100+', label: 'Implementaciones' },
          { value: '95%', label: 'Tasa de Éxito' },
          { value: '12 meses', label: 'ROI Promedio' },
          { value: '30%', label: 'Ahorro Promedio' }
        ]
      },
      case_studies_title: 'Historias de Éxito',
      read_case_study: 'Leer Caso Completo',
      cta: {
        title: '¿Listo para tu propia historia de éxito?',
        description: 'Agenda una demo y platiquemos sobre cómo GDS puede transformar tu empresa.',
        button: 'Agendar Demo'
      }
    },
    en: {
      hero: {
        title: 'Success Stories',
        description: 'Real companies, real results. Discover how GDS ONE transformed their operations.'
      },
      intro: {
        title: 'Why success stories?',
        description: 'Don\'t take our word for it. See real results from companies like yours.',
        stats: [
          { value: '100+', label: 'Implementations' },
          { value: '95%', label: 'Success Rate' },
          { value: '12 months', label: 'Average ROI' },
          { value: '30%', label: 'Average Savings' }
        ]
      },
      case_studies_title: 'Success Stories',
      read_case_study: 'Read Full Case Study',
      cta: {
        title: 'Ready for your own success story?',
        description: 'Schedule a demo and let\'s talk about how GDS can transform your company.',
        button: 'Schedule Demo'
      }
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title={t.hero.title}
        description={t.hero.description}
      />
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-6">{t.intro.title}</h2>
          <p className="text-xl text-center mb-12 text-blue-100">{t.intro.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.intro.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.case_studies_title}</h2>
          
          <div className="space-y-8">
            {caseStudies.map((caseStudy) => (
              <Link key={caseStudy.slug} href={`/${lang}/case-studies/${caseStudy.slug}`}>
                <Card variant="hover" className="cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                      <div className="text-sm text-gray-500 mb-2">{caseStudy.company.industry}</div>
                      <h3 className="text-2xl font-bold mb-2">{caseStudy.company.name}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>📍 {caseStudy.company.location}</div>
                        <div>👥 {caseStudy.company.size}</div>
                      </div>
                      <div className="mt-4">
                        <Badge variant="primary">{caseStudy.company.industry}</Badge>
                      </div>
                    </div>
                    
                    {/* Story */}
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold mb-3">{caseStudy.title}</h4>
                      <p className="text-gray-600 mb-4">{caseStudy.subtitle}</p>
                      
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {caseStudy.results.metrics.slice(0, 3).map((metric, idx) => (
                          <div key={idx} className="bg-green-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{metric.improvement}</div>
                            <div className="text-sm text-gray-700">{metric.metric}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-blue-600 font-semibold">
                        {t.read_case_study} →
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CTASection
        title={t.cta.title}
        description={t.cta.description}
        cta={
          <a href={demoUrl}>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.cta.button}
            </button>
          </a>
        }
      />
    </div>
  );
}
