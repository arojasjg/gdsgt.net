/**
 * Case Study Detail Page
 * 
 * Full customer success story with metrics, journey, and testimonials
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeroSection, CTASection } from '@gds/ui/layouts';
import { Card, Badge, Accordion, AccordionItem } from '@gds/ui';
import { generateMetadata as generateSEOMetadata, generateArticleSchema, generateOrganizationSchema, generateBreadcrumbSchema } from '@gds/seo';
import { getCaseStudyBySlug, getAllCaseStudies } from '@gds/content';
import { track } from '@gds/analytics';

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  const langs = ['es', 'en'];
  
  return langs.flatMap(lang =>
    caseStudies.map(cs => ({
      lang,
      slug: cs.slug
    }))
  );
}

export async function generateMetadata({ params }: { params: { lang: string; slug: string } }): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    return {};
  }
  
  const isSpanish = params.lang === 'es';
  const resultsText = caseStudy.results.metrics.map(m => `${m.value} ${m.label}`).join(', ');
  
  return generateSEOMetadata(
    {
      title: isSpanish
        ? `${caseStudy.title} | Caso de Éxito GDS ONE`
        : `${caseStudy.title} | GDS ONE Success Story`,
      description: isSpanish
        ? `${caseStudy.subtitle} Caso de éxito real de ${caseStudy.company.name} (${caseStudy.company.industry}). Resultados: ${resultsText}. Implementación en ${caseStudy.solution.implementation_time}. Solicita demo gratis.`
        : `${caseStudy.subtitle} Real success story of ${caseStudy.company.name} (${caseStudy.company.industry}). Results: ${resultsText}. Implementation in ${caseStudy.solution.implementation_time}. Request free demo.`,
      keywords: [
        caseStudy.company.name,
        caseStudy.company.industry,
        'caso de éxito',
        'success story',
        'ERP',
        'resultados',
        'results',
        'ROI',
        'implementación ERP',
        'ERP implementation',
        ...(caseStudy.solution.modules_implemented || [])
      ]
    },
    {
      name: 'GDS ONE',
      domain: 'www.gdsgt.net',
      description: 'Enterprise Resource Planning',
      locales: ['es', 'en'],
      defaultLocale: 'es'
    },
    params.lang as 'es' | 'en',
    `/case-studies/${params.slug}`
  );
}

export default function CaseStudyDetailPage({ params }: { params: { lang: string; slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    notFound();
  }
  
  const isSpanish = params.lang === 'es';

  // URLs for schema
  const homeUrl = process.env.NODE_ENV === 'development' ? `http://localhost:9000/${params.lang}` : `https://www.gdsgt.net/${params.lang}`;
  const caseStudiesUrl = process.env.NODE_ENV === 'development' ? `http://localhost:9000/${params.lang}/case-studies` : `https://www.gdsgt.net/${params.lang}/case-studies`;
  const currentUrl = process.env.NODE_ENV === 'development' ? `http://localhost:9000/${params.lang}/case-studies/${params.slug}` : `https://www.gdsgt.net/${params.lang}/case-studies/${params.slug}`;

  // Schema.org structured data
  const articleSchema = generateArticleSchema({
    headline: caseStudy.title,
    description: caseStudy.subtitle,
    image: `https://www.gdsgt.net/case-studies/${params.slug}.jpg`,
    datePublished: new Date().toISOString(), // Use actual date if available
    dateModified: new Date().toISOString(),
    author: {
      name: 'GDS Team',
      url: 'https://www.gdsgt.net',
    },
    publisher: {
      name: 'GDS',
      logo: 'https://www.gdsgt.net/logo.png',
    },
  });

  const organizationSchema = generateOrganizationSchema({
    name: caseStudy.company.name,
    description: `${caseStudy.company.industry} - Cliente de GDS ONE`,
    url: currentUrl,
    logo: `https://www.gdsgt.net/logos/${caseStudy.company.name.toLowerCase().replace(/\s/g, '-')}.png`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: isSpanish ? 'Inicio' : 'Home', url: homeUrl },
      { name: isSpanish ? 'Casos de Éxito' : 'Success Stories', url: caseStudiesUrl },
      { name: caseStudy.title, url: currentUrl },
    ],
  });
  
  const content = {
    es: {
      company_info: 'Información de la Empresa',
      challenge: 'El Desafío',
      pain_points: 'Puntos de Dolor',
      previous_system: 'Sistema Anterior',
      solution: 'La Solución',
      modules: 'Módulos Implementados',
      implementation_time: 'Tiempo de Implementación',
      key_features: 'Características Clave',
      results: 'Los Resultados',
      metrics: 'Métricas de Éxito',
      testimonial: 'Testimonio',
      journey: 'El Viaje de Implementación',
      takeaways: 'Conclusiones Clave',
      related: 'Contenido Relacionado',
      view_industry: 'Ver Industria',
      view_capability: 'Ver Capacidad',
      cta_prefix: '¿Tu empresa enfrenta desafíos similares?'
    },
    en: {
      company_info: 'Company Information',
      challenge: 'The Challenge',
      pain_points: 'Pain Points',
      previous_system: 'Previous System',
      solution: 'The Solution',
      modules: 'Implemented Modules',
      implementation_time: 'Implementation Time',
      key_features: 'Key Features',
      results: 'The Results',
      metrics: 'Success Metrics',
      testimonial: 'Testimonial',
      journey: 'Implementation Journey',
      takeaways: 'Key Takeaways',
      related: 'Related Content',
      view_industry: 'View Industry',
      view_capability: 'View Capability',
      cta_prefix: 'Does your company face similar challenges?'
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Badge variant="primary" className="bg-white text-blue-600">
              {caseStudy.company.industry}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
          <p className="text-2xl text-blue-100 mb-8">{caseStudy.subtitle}</p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.results.metrics.slice(0, 4).map((metric, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">{metric.improvement}</div>
                <div className="text-sm text-blue-100">{metric.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card variant="default">
            <h2 className="text-2xl font-bold mb-6">{t.company_info}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">Empresa</div>
                <div className="font-semibold text-lg">{caseStudy.company.name}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Industria</div>
                <div className="font-semibold">{caseStudy.company.industry}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Tamaño</div>
                <div className="font-semibold">{caseStudy.company.size}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Ubicación</div>
                <div className="font-semibold">{caseStudy.company.location}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Challenge */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{caseStudy.challenge.title}</h2>
          <p className="text-xl text-gray-700 mb-8">{caseStudy.challenge.description}</p>
          
          <Card variant="default" className="bg-red-50 border-red-200">
            <h3 className="text-xl font-bold mb-4 text-red-900">{t.pain_points}</h3>
            <ul className="space-y-3">
              {caseStudy.challenge.pain_points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">❌</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-red-200">
              <div className="text-sm text-gray-600 mb-1">{t.previous_system}</div>
              <div className="font-semibold text-red-900">{caseStudy.challenge.previous_system}</div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{caseStudy.solution.title}</h2>
          <p className="text-xl text-gray-700 mb-8">{caseStudy.solution.description}</p>
          
          {caseStudy.solution.modules_implemented && caseStudy.solution.implementation_time && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card variant="default">
                <h3 className="text-lg font-bold mb-4">{t.modules}</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.solution.modules_implemented.map((module, idx) => (
                    <Badge key={idx} variant="primary">{module}</Badge>
                  ))}
                </div>
              </Card>
              
              <Card variant="default">
                <h3 className="text-lg font-bold mb-4">{t.implementation_time}</h3>
                <div className="text-3xl font-bold text-blue-600">{caseStudy.solution.implementation_time}</div>
              </Card>
            </div>
          )}
          
          <h3 className="text-2xl font-bold mb-6">{t.key_features}</h3>
          <div className="space-y-4">
            {caseStudy.solution.key_features.map((feature, idx) => (
              <Card key={idx} variant="default">
                <h4 className="text-lg font-bold mb-2 text-blue-600">{feature.feature}</h4>
                <p className="text-gray-700">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{caseStudy.results.title}</h2>
          <p className="text-xl text-gray-700 mb-8">{caseStudy.results.summary}</p>
          
          <h3 className="text-2xl font-bold mb-6">{t.metrics}</h3>
          <div className="space-y-4 mb-12">
            {caseStudy.results.metrics.map((metric, idx) => (
              <Card key={idx} variant="default" className="bg-green-50 border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="md:col-span-1">
                    <div className="font-bold text-gray-900">{metric.metric}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Antes</div>
                    <div className="font-semibold text-red-600">{metric.before}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Después</div>
                    <div className="font-semibold text-blue-600">{metric.after}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{metric.improvement}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Testimonial */}
          <Card variant="default" className="bg-blue-50 border-blue-200">
            <div className="flex items-start">
              <span className="text-6xl text-blue-600 mr-4">&ldquo;</span>
              <div>
                <p className="text-xl text-gray-800 mb-6 italic">{caseStudy.results.testimonial.quote}</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900">{caseStudy.results.testimonial.author}</div>
                    <div className="text-sm text-gray-600">{caseStudy.results.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Implementation Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{caseStudy.journey.title}</h2>
          
          <div className="space-y-6">
            {caseStudy.journey.phases.map((phase, idx) => (
              <Card key={idx} variant="default">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {idx + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <Badge variant="primary">{phase.duration}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Takeaways */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{t.takeaways}</h2>
          
          <div className="space-y-4">
            {caseStudy.takeaways.map((takeaway, idx) => (
              <Card key={idx} variant="default" className="bg-yellow-50 border-yellow-200">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💡</span>
                  <p className="text-gray-800">{takeaway}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Content */}
      {(caseStudy.related_industry || caseStudy.related_capabilities) && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">{t.related}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.related_industry && (
                <Card variant="hover">
                  <h3 className="text-lg font-bold mb-3">🏭 {t.view_industry}</h3>
                  <Link 
                    href={`/${params.lang}/industries/${caseStudy.related_industry}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Ver más sobre {caseStudy.company.industry} →
                  </Link>
                </Card>
              )}
              
              {caseStudy.related_capabilities && caseStudy.related_capabilities.length > 0 && (
                <Card variant="hover">
                  <h3 className="text-lg font-bold mb-3">⚡ {t.view_capability}</h3>
                  <div className="space-y-2">
                    {caseStudy.related_capabilities.map((cap, idx) => (
                      <Link 
                        key={idx}
                        href={`/${params.lang}/capabilities/${cap}`}
                        className="block text-blue-600 font-semibold hover:underline"
                      >
                        {cap} →
                      </Link>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <CTASection
        title={`${t.cta_prefix} ${caseStudy.cta.title}`}
        description={caseStudy.cta.description}
        cta={
          <Link href={`/${params.lang}/demo`}>
            <button 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => track('case_study_cta_click', { case_study: caseStudy.slug })}
            >
              {caseStudy.cta.button}
            </button>
          </Link>
        }
      />
    </div>
  );
}
