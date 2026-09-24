import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Analytics } from '@/components/Analytics';
import { Header, Footer, WhatsAppButton } from '@gds/ui';
import { SITE_URL, ERP_URL, PHONE, EMAIL, ADDRESS, SOCIAL_PROFILES, CUSTOM_SOFTWARE_PATH } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'GDS - Soluciones Integrales para tu Empresa',
  description: 'Suite completa de ERP, BI, CRM, IA y Data Engineering. Software personalizado y equipos dedicados.',
  applicationName: 'GDS',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // Set these env vars after verifying the site in Google Search Console / Bing Webmaster Tools
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

const locales = ['es', 'en'] as const;
type Locale = (typeof locales)[number];

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * Site-wide entity data (Organization + LocalBusiness + WebSite) so search
 * engines and AI assistants resolve "GDS" as one consistent entity.
 */
function entitySchema(lang: Locale): string {
  const isSpanish = lang === 'es';
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE_URL}/#organization`,
        name: 'GDS - Grupo de Soluciones',
        alternateName: ['GDS', 'Grupo GDS', 'GDS Guatemala', 'GDS ONE'],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og-default.png`,
        description: isSpanish
          ? 'Empresa guatemalteca de software empresarial: GDS ONE ERP, Business Intelligence, CRM, IA, Data Engineering y desarrollo de software y apps a la medida desde Q2,500 al mes.'
          : 'Guatemalan business software company: GDS ONE ERP, Business Intelligence, CRM, AI, Data Engineering and custom software and app development from Q2,500 per month.',
        foundingDate: '2009',
        telephone: PHONE,
        email: EMAIL,
        priceRange: 'Q2,500 - Q50,000+',
        address: { '@type': 'PostalAddress', ...ADDRESS },
        areaServed: ['GT', 'SV', 'HN', 'NI', 'CR', 'PA', 'MX', 'CO'],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: PHONE,
            contactType: 'sales',
            areaServed: ['GT', 'SV', 'HN', 'NI', 'CR', 'PA', 'MX', 'CO'],
            availableLanguage: ['es', 'en'],
          },
        ],
        sameAs: [...SOCIAL_PROFILES, ERP_URL],
        knowsAbout: [
          'ERP',
          'Business Intelligence',
          'CRM',
          isSpanish ? 'Desarrollo de software a la medida' : 'Custom software development',
          isSpanish ? 'Desarrollo de aplicaciones móviles' : 'Mobile app development',
          isSpanish ? 'Factura electrónica FEL' : 'FEL e-invoicing',
          isSpanish ? 'Inteligencia artificial' : 'Artificial intelligence',
          'Data Engineering',
        ],
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: { '@id': `${SITE_URL}/${lang}${CUSTOM_SOFTWARE_PATH}#service` },
            price: 2500,
            priceCurrency: 'GTQ',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'GDS',
        inLanguage: ['es', 'en'],
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  });
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: entitySchema(lang as Locale) }} />
        <Header lang={lang as 'es' | 'en'} />
        {children}
        <Footer lang={lang as 'es' | 'en'} />
        <WhatsAppButton lang={lang as 'es' | 'en'} />
        <Analytics />
      </body>
    </html>
  );
}
