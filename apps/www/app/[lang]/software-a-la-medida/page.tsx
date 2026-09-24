/**
 * Custom Software & App Development (subscription) landing page
 *
 * Service offer from Q2,500/month. Includes Service, FAQPage and
 * BreadcrumbList structured data for search engines and AI assistants.
 */

import { Metadata } from 'next';
import { HeroSection, FAQSection } from '@gds/ui';
import { Card } from '@gds/ui';
import { generateMetadata as generateSEOMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@gds/seo';
import { customSoftwareEs, customSoftwareEn, customSoftwareIndustries, customSoftwarePosts } from '@gds/content';
import { SITE_URL, CUSTOM_SOFTWARE_PATH, whatsappLink } from '@/lib/site';
import Link from 'next/link';
import { ProjectForm } from './ProjectForm';

type Lang = 'es' | 'en';

const getContent = (lang: string) => (lang === 'en' ? customSoftwareEn : customSoftwareEs);

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getContent(lang);

  return generateSEOMetadata(
    {
      title: t.seo.title,
      description: t.seo.description,
      keywords: t.seo.keywords,
      ogImage: `${SITE_URL}/og-software-a-la-medida.png`,
    },
    {
      name: 'GDS',
      domain: 'www.gdsgt.net',
      description: 'Custom software development',
      locales: ['es', 'en'],
      defaultLocale: 'es',
    },
    lang as Lang,
    CUSTOM_SOFTWARE_PATH
  );
}

export default async function CustomSoftwarePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getContent(lang);
  const pageUrl = `${SITE_URL}/${lang}${CUSTOM_SOFTWARE_PATH}`;

  const serviceSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: t.hero.title,
    serviceType: lang === 'en' ? 'Custom software development' : 'Desarrollo de software a la medida',
    description: t.seo.description,
    url: pageUrl,
    image: `${SITE_URL}/og-software-a-la-medida.png`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'Guatemala' },
      { '@type': 'Place', name: lang === 'en' ? 'Central America' : 'Centroamérica' },
      { '@type': 'Place', name: lang === 'en' ? 'Latin America' : 'Latinoamérica' },
    ],
    availableLanguage: ['es', 'en'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.plans.title,
      itemListElement: t.plans.items.map((plan) => ({
        '@type': 'Offer',
        name: plan.name,
        description: plan.tagline,
        url: `${pageUrl}#planes`,
        ...(plan.priceValue && {
          price: plan.priceValue,
          priceCurrency: 'GTQ',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: plan.priceValue,
            priceCurrency: 'GTQ',
            unitCode: 'MON',
            referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
            valueAddedTaxIncluded: false,
          },
        }),
      })),
    },
  });

  const faqSchema = generateFAQSchema({
    questions: t.faq.items.map((f) => ({ question: f.question, answer: f.answer })),
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t.breadcrumb.home, url: `${SITE_URL}/${lang}` },
      { name: t.breadcrumb.current, url: pageUrl },
    ],
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      <nav aria-label="breadcrumb" className="container mx-auto px-4 pt-4 text-sm text-gray-500">
        <a href={`/${lang}`} className="hover:text-primary-600">{t.breadcrumb.home}</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{t.breadcrumb.current}</span>
      </nav>

      <HeroSection
        title={t.hero.title}
        description={t.hero.description}
        centered
        cta={
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="inline-block bg-lime-500 text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm">
              {t.hero.badge}
            </span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cotizar"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href={whatsappLink(t.form.whatsappIntro)}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold px-8 py-3 rounded-lg transition-colors text-center"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
              {t.hero.trust.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Problem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t.problem.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.problem.items.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whatWeBuild.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.whatWeBuild.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whatWeBuild.items.map((item) => (
              <Card key={item.title} variant="hover" className="p-6">
                <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planes" className="py-16 bg-gradient-to-b from-primary-50 to-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.plans.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.plans.description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.plans.items.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm border-2 ${
                  plan.highlighted ? 'border-primary-600 shadow-lg' : 'border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {lang === 'en' ? 'Most popular' : 'Más elegido'}
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 mt-1 mb-4">{plan.tagline}</p>
                <p className="mb-6">
                  {plan.priceValue && <span className="text-sm text-gray-500 mr-1">{lang === 'en' ? 'From' : 'Desde'}</span>}
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.priceNote}</span>
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-gray-700">
                      <span className="text-green-600 font-bold" aria-hidden="true">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold py-3 rounded-lg transition-colors ${
                    plan.highlighted
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'border-2 border-primary-600 text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center max-w-3xl mx-auto mt-8">{t.plans.footnote}</p>
        </div>
      </section>

      {/* Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t.included.title}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.included.items.map((item) => (
              <li key={item} className="flex gap-2 bg-gray-50 rounded-lg p-4 text-gray-700">
                <span className="text-green-600 font-bold" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.process.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.process.description}</p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {t.process.steps.map((step) => (
              <li key={step.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-primary-700 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.comparison.title}</h2>
            <p className="text-xl text-gray-600">{t.comparison.description}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr>
                  <th className="p-3 border-b-2 border-gray-200"></th>
                  {t.comparison.columns.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={`p-3 border-b-2 border-gray-200 font-semibold ${i === 0 ? 'bg-primary-50 text-primary-700' : ''}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="p-3 border-b border-gray-100 font-medium text-gray-900">{row.label}</th>
                    {row.values.map((v, i) => (
                      <td key={i} className={`p-3 border-b border-gray-100 text-gray-700 ${i === 0 ? 'bg-primary-50 font-semibold' : ''}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t.useCases.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.useCases.items.map((item) => (
              <Card key={item.industry} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{item.industry}</h3>
                <p className="text-gray-600 text-sm">{item.examples}</p>
              </Card>
            ))}
          </div>
          {lang === 'es' && (
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold mb-4">Soluciones listas para tu industria</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {customSoftwareIndustries.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/es${CUSTOM_SOFTWARE_PATH}/${i.slug}`}
                    className="bg-white border border-primary-200 text-primary-700 hover:bg-primary-50 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {i.h1} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Integrations + Why GDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          <div>
            <h2 className="text-3xl font-bold mb-4">{t.integrations.title}</h2>
            <p className="text-gray-600 mb-6">{t.integrations.description}</p>
            <ul className="flex flex-wrap gap-2">
              {t.integrations.items.map((item) => (
                <li key={item} className="bg-primary-50 text-primary-800 px-3 py-1.5 rounded-full text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">{t.whyGds.title}</h2>
            <dl className="space-y-4">
              {t.whyGds.items.map((item) => (
                <div key={item.title}>
                  <dt className="font-semibold text-gray-900">{item.title}</dt>
                  <dd className="text-gray-600">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="cotizar" className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.form.title}</h2>
            <p className="text-lg opacity-90">{t.form.description}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <ProjectForm t={t.form} lang={lang} />
          </div>
        </div>
      </section>

      {lang === 'es' && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Guías para decidir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {customSoftwarePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/es/blog/${post.slug}`}
                  className="block rounded-xl border border-gray-200 p-5 hover:border-primary-400 hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-900 mb-2">{post.title}</p>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection
        title={t.faq.title}
        faqs={t.faq.items.map((f, i) => ({ id: `faq-${i}`, title: f.question, content: f.answer }))}
      />

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.finalCta.title}</h2>
          <p className="text-lg text-gray-300 mb-8">{t.finalCta.description}</p>
          <a
            href={whatsappLink(t.form.whatsappIntro)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t.finalCta.button}
          </a>
        </div>
      </section>
    </main>
  );
}
