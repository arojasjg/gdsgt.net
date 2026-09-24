import { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllCaseStudies } from '@gds/content';
import { SITE_URL, CUSTOM_SOFTWARE_PATH } from '@/lib/site';

type Entry = MetadataRoute.Sitemap[number];

const LANGS = ['es', 'en'] as const;

/** One entry per language, each declaring its hreflang alternates. */
function localized(
  path: string,
  changeFrequency: Entry['changeFrequency'],
  priority: number,
  lastModified: string | Date = new Date()
): MetadataRoute.Sitemap {
  const languages = {
    es: `${SITE_URL}/es${path}`,
    en: `${SITE_URL}/en${path}`,
    'x-default': `${SITE_URL}/es${path}`,
  };
  return LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}${path}`,
    lastModified,
    changeFrequency,
    priority: lang === 'es' ? priority : Math.max(priority - 0.1, 0.1),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();
  const caseStudies = getAllCaseStudies();

  return [
    ...localized('', 'weekly', 1.0),
    ...localized(CUSTOM_SOFTWARE_PATH, 'weekly', 0.95),
    ...localized('/blog', 'weekly', 0.8),
    ...localized('/case-studies', 'monthly', 0.8),
    ...localized('/calculators/roi-erp', 'monthly', 0.6),
    ...localized('/calculators/tco-erp-vs-excel', 'monthly', 0.6),
    ...localized('/partners', 'monthly', 0.5),
    ...localized('/privacy', 'yearly', 0.2),
    ...localized('/terms', 'yearly', 0.2),

    // Blog posts are Spanish-only content
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/es/blog/${post.slug}`,
      lastModified: post.updated_date || post.published_date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    ...caseStudies.map((cs) => ({
      url: `${SITE_URL}/es/case-studies/${cs.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
