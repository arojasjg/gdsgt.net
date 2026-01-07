import type { Lang } from './types';

export interface HreflangTag {
  rel: 'alternate';
  hreflang: string;
  href: string;
}

export function generateHreflangTags(
  domain: string,
  path: string,
  locales: Lang[],
  defaultLocale: Lang = 'en'
): HreflangTag[] {
  const tags: HreflangTag[] = [];

  locales.forEach((locale) => {
    tags.push({
      rel: 'alternate',
      hreflang: locale,
      href: `https://${domain}/${locale}${path}`,
    });
  });

  tags.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `https://${domain}/${defaultLocale}${path}`,
  });

  return tags;
}
