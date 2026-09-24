/**
 * Industry landing pages for the custom software service (Spanish only).
 * /es/software-a-la-medida/[industria]
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, FAQSection } from '@gds/ui';
import { generateMetadata as generateSEOMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@gds/seo';
import { customSoftwareIndustries, getCustomSoftwareIndustry } from '@gds/content';
import { SITE_URL, CUSTOM_SOFTWARE_PATH, whatsappLink } from '@/lib/site';

export const dynamicParams = false;

// Spanish-only content: the /en paths are generated too (Next skips a parent
// param whose child list is empty) but render notFound().
export async function generateStaticParams() {
  return customSoftwareIndustries.map((i) => ({ industria: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; industria: string }>;
}): Promise<Metadata> {
  const { industria } = await params;
  const industry = getCustomSoftwareIndustry(industria);
  if (!industry) return {};

  const metadata = generateSEOMetadata(
    {
      title: industry.seo.title,
      description: industry.seo.description,
      keywords: industry.seo.keywords,
      ogImage: `${SITE_URL}/og-software-a-la-medida.png`,
    },
    { name: 'GDS', domain: 'www.gdsgt.net', description: 'Software a la medida', locales: ['es'], defaultLocale: 'es' },
    'es',
    `${CUSTOM_SOFTWARE_PATH}/${industry.slug}`
  );
  return metadata;
}

export default async function IndustryPage({ params }: { params: Promise<{ lang: string; industria: string }> }) {
  const { lang, industria } = await params;
  const industry = getCustomSoftwareIndustry(industria);
  if (lang !== 'es' || !industry) notFound();

  const pageUrl = `${SITE_URL}/es${CUSTOM_SOFTWARE_PATH}/${industry.slug}`;
  const serviceUrl = `${SITE_URL}/es${CUSTOM_SOFTWARE_PATH}`;

  const serviceSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: industry.h1,
    serviceType: 'Desarrollo de software a la medida',
    description: industry.seo.description,
    url: pageUrl,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Guatemala' },
    audience: { '@type': 'BusinessAudience', name: industry.name },
    isRelatedTo: { '@id': `${serviceUrl}#service` },
    offers: {
      '@type': 'Offer',
      price: 2500,
      priceCurrency: 'GTQ',
      url: `${serviceUrl}#planes`,
      priceSpecification: { '@type': 'UnitPriceSpecification', price: 2500, priceCurrency: 'GTQ', unitCode: 'MON' },
    },
  });
  const faqSchema = generateFAQSchema({ questions: industry.faq });
  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Inicio', url: `${SITE_URL}/es` },
      { name: 'Software a la medida', url: serviceUrl },
      { name: industry.name, url: pageUrl },
    ],
  });

  const others = customSoftwareIndustries.filter((i) => i.slug !== industry.slug);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      <nav aria-label="breadcrumb" className="container mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/es" className="hover:text-primary-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href={`/es${CUSTOM_SOFTWARE_PATH}`} className="hover:text-primary-600">Software a la medida</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{industry.name}</span>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block bg-lime-500 text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
            {industry.name} · Desde Q2,500 al mes
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{industry.h1}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{industry.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink(industry.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href={`/es${CUSTOM_SOFTWARE_PATH}#planes`}
              className="border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ver planes y precios
            </Link>
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">Problemas que resolvemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.pains.map((p) => (
              <Card key={p.title} className="p-6 bg-red-50 border-red-100">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">Qué incluye tu sistema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((f) => (
              <Card key={f.title} variant="hover" className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-700">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow + integrations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Así funciona</h2>
            <ol className="space-y-4">
              {industry.workflow.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Integraciones</h2>
            <ul className="flex flex-wrap gap-2 mb-10">
              {industry.integrations.map((item) => (
                <li key={item} className="bg-primary-50 text-primary-800 px-3 py-1.5 rounded-full text-sm font-medium">{item}</li>
              ))}
            </ul>
            <Card className="p-6 border-2 border-primary-600">
              <p className="text-sm text-gray-500 mb-1">Plan recomendado</p>
              <p className="text-2xl font-bold mb-2">{industry.recommendedPlan.name}</p>
              <p className="text-gray-600 mb-4">{industry.recommendedPlan.reason}</p>
              <Link href={`/es${CUSTOM_SOFTWARE_PATH}#planes`} className="text-primary-700 font-semibold hover:underline">
                Comparar planes →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <FAQSection
        title="Preguntas frecuentes"
        faqs={industry.faq.map((f, i) => ({ id: `faq-${i}`, title: f.question, content: f.answer }))}
      />

      {/* Other industries */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Otras soluciones a la medida</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/es${CUSTOM_SOFTWARE_PATH}/${o.slug}`}
                className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-primary-400 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500">{o.name}</p>
                <p className="font-semibold text-gray-900">{o.h1}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Agenda un diagnóstico gratis</h2>
          <p className="text-lg text-gray-300 mb-8">En 30 minutos entendemos tu proceso y te decimos cuánto costaría tu sistema.</p>
          <a
            href={whatsappLink(industry.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Hablar con un consultor
          </a>
        </div>
      </section>
    </main>
  );
}
