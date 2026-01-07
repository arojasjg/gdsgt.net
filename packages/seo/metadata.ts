import type { Metadata } from 'next';
import type { Lang, MetadataConfig, SiteConfig } from './types';

export function generateMetadata(
  config: MetadataConfig,
  siteConfig: SiteConfig,
  lang: Lang,
  path: string
): Metadata {
  const { title, description, keywords, ogImage, noindex } = config;
  const url = `https://${siteConfig.domain}/${lang}${path}`;
  const defaultOgImage = `https://${siteConfig.domain}/og-default.png`;

  const alternateLanguages: Record<string, string> = {};
  siteConfig.locales.forEach((locale) => {
    alternateLanguages[locale] = `https://${siteConfig.domain}/${locale}${path}`;
  });

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang === 'es' ? 'es_GT' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || defaultOgImage],
    },
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
  };
}

// Note: generateHreflangTags is exported from hreflang.ts
