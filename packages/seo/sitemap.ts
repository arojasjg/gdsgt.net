/**
 * Sitemap Generator for GDS ONE Ecosystem
 * Generates XML sitemaps for better SEO and indexing
 */

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: Array<{
    lang: string;
    url: string;
  }>;
}

export interface SitemapConfig {
  baseUrl: string;
  urls: SitemapURL[];
}

/**
 * Generate XML sitemap
 */
export function generateSitemap(config: SitemapConfig): string {
  const { baseUrl, urls } = config;

  const urlEntries = urls.map((url) => {
    const alternates = url.alternates
      ? url.alternates
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`
          )
          .join('\n')
      : '';

    return `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}${
      url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ''
    }${url.priority !== undefined ? `\n    <priority>${url.priority}</priority>` : ''}${
      alternates ? `\n${alternates}` : ''
    }
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;
}

/**
 * Generate sitemap index (for multiple sitemaps)
 */
export function generateSitemapIndex(sitemaps: Array<{ loc: string; lastmod?: string }>): string {
  const sitemapEntries = sitemaps
    .map(
      (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>${sitemap.lastmod ? `\n    <lastmod>${sitemap.lastmod}</lastmod>` : ''}
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
}

/**
 * Helper to get current date in ISO format
 */
export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Generate sitemap for GDSERP app
 */
export function generateGDSERPSitemap(): string {
  const baseUrl = 'https://erp.grupogds.co';
  const currentDate = getCurrentDate();

  const urls: SitemapURL[] = [
    // Homepage
    {
      loc: `${baseUrl}/es`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es` },
        { lang: 'en', url: `${baseUrl}/en` },
      ],
    },
    {
      loc: `${baseUrl}/en`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
    },

    // Main sections
    {
      loc: `${baseUrl}/es/modules`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/modules` },
        { lang: 'en', url: `${baseUrl}/en/modules` },
      ],
    },
    {
      loc: `${baseUrl}/es/industries`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/industries` },
        { lang: 'en', url: `${baseUrl}/en/industries` },
      ],
    },
    {
      loc: `${baseUrl}/es/capabilities`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/capabilities` },
        { lang: 'en', url: `${baseUrl}/en/capabilities` },
      ],
    },
    {
      loc: `${baseUrl}/es/pricing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/pricing` },
        { lang: 'en', url: `${baseUrl}/en/pricing` },
      ],
    },
    {
      loc: `${baseUrl}/es/compare`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/compare` },
        { lang: 'en', url: `${baseUrl}/en/compare` },
      ],
    },
    {
      loc: `${baseUrl}/es/demo`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/demo` },
        { lang: 'en', url: `${baseUrl}/en/demo` },
      ],
    },
    {
      loc: `${baseUrl}/es/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/contact` },
        { lang: 'en', url: `${baseUrl}/en/contact` },
      ],
    },

    // Modules (12 modules)
    ...['contabilidad', 'inventario', 'ventas', 'compras', 'produccion', 'crm', 'rrhh', 'proyectos', 'activos', 'pos', 'ecommerce', 'logistica'].map(
      (slug) => ({
        loc: `${baseUrl}/es/modules/${slug}`,
        lastmod: currentDate,
        changefreq: 'monthly' as const,
        priority: 0.8,
        alternates: [
          { lang: 'es', url: `${baseUrl}/es/modules/${slug}` },
          { lang: 'en', url: `${baseUrl}/en/modules/${slug}` },
        ],
      })
    ),

    // Industries (8 industries)
    ...['distribucion', 'manufactura', 'retail', 'servicios', 'construccion', 'alimentos', 'farmaceutica', 'automotriz'].map(
      (slug) => ({
        loc: `${baseUrl}/es/industries/${slug}`,
        lastmod: currentDate,
        changefreq: 'monthly' as const,
        priority: 0.8,
        alternates: [
          { lang: 'es', url: `${baseUrl}/es/industries/${slug}` },
          { lang: 'en', url: `${baseUrl}/en/industries/${slug}` },
        ],
      })
    ),

    // Capabilities (10 capabilities)
    ...['trazabilidad', 'multi-bodega', 'movilidad', 'integraciones', 'reportes', 'automatizacion', 'seguridad', 'escalabilidad', 'personalizacion', 'soporte'].map(
      (slug) => ({
        loc: `${baseUrl}/es/capabilities/${slug}`,
        lastmod: currentDate,
        changefreq: 'monthly' as const,
        priority: 0.7,
        alternates: [
          { lang: 'es', url: `${baseUrl}/es/capabilities/${slug}` },
          { lang: 'en', url: `${baseUrl}/en/capabilities/${slug}` },
        ],
      })
    ),

    // Comparisons (5 comparisons)
    ...['gds-one-vs-sap', 'gds-one-vs-odoo', 'gds-one-vs-netsuite', 'gds-one-vs-inteligos', 'gds-one-vs-softland'].map(
      (slug) => ({
        loc: `${baseUrl}/es/compare/${slug}`,
        lastmod: currentDate,
        changefreq: 'monthly' as const,
        priority: 0.8,
        alternates: [
          { lang: 'es', url: `${baseUrl}/es/compare/${slug}` },
          { lang: 'en', url: `${baseUrl}/en/compare/${slug}` },
        ],
      })
    ),
  ];

  return generateSitemap({ baseUrl, urls });
}

/**
 * Generate sitemap for WWW app
 */
export function generateWWWSitemap(): string {
  const baseUrl = 'https://www.gdsgt.net';
  const currentDate = getCurrentDate();

  const urls: SitemapURL[] = [
    // Homepage
    {
      loc: `${baseUrl}/es`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es` },
        { lang: 'en', url: `${baseUrl}/en` },
      ],
    },

    // Blog
    {
      loc: `${baseUrl}/es/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/blog` },
        { lang: 'en', url: `${baseUrl}/en/blog` },
      ],
    },

    // Case Studies
    {
      loc: `${baseUrl}/es/case-studies`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/case-studies` },
        { lang: 'en', url: `${baseUrl}/en/case-studies` },
      ],
    },

    // Blog posts (5 posts)
    ...['que-es-erp', 'erp-vs-contabilidad', 'como-elegir-erp', 'ia-en-erp-2026', 'erp-para-distribucion'].map(
      (slug) => ({
        loc: `${baseUrl}/es/blog/${slug}`,
        lastmod: currentDate,
        changefreq: 'monthly' as const,
        priority: 0.7,
        alternates: [
          { lang: 'es', url: `${baseUrl}/es/blog/${slug}` },
          { lang: 'en', url: `${baseUrl}/en/blog/${slug}` },
        ],
      })
    ),

    // Case studies (3 case studies)
    ...['distribucion-guatemala', 'manufactura-el-salvador', 'retail-honduras'].map(
      (slug) => ({
        loc: `${baseUrl}/es/case-studies/${slug}`,
        lastmod: currentDate,
        changefreq: 'yearly' as const,
        priority: 0.7,
        alternates: [
          { lang: 'es', url: `${baseUrl}/es/case-studies/${slug}` },
          { lang: 'en', url: `${baseUrl}/en/case-studies/${slug}` },
        ],
      })
    ),
  ];

  return generateSitemap({ baseUrl, urls });
}

/**
 * Generate sitemap for SERVICES app
 */
export function generateServicesSitemap(): string {
  const baseUrl = 'https://services.gdsgt.net';
  const currentDate = getCurrentDate();

  const urls: SitemapURL[] = [
    // Homepage
    {
      loc: `${baseUrl}/es`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 1.0,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es` },
        { lang: 'en', url: `${baseUrl}/en` },
      ],
    },

    // Services (6 services)
    ...['erp-implementation', 'bi-analytics', 'integrations', 'security-compliance', 'data-engineering', 'staff-augmentation'].map(
      (slug) => ({
        loc: `${baseUrl}/es/services/${slug}`,
        lastmod: currentDate,
        changefreq: 'monthly' as const,
        priority: 0.8,
        alternates: [
          { lang: 'es', url: `${baseUrl}/es/services/${slug}` },
          { lang: 'en', url: `${baseUrl}/en/services/${slug}` },
        ],
      })
    ),
  ];

  return generateSitemap({ baseUrl, urls });
}

/**
 * Generate sitemap for RESOURCES app
 */
export function generateResourcesSitemap(): string {
  const baseUrl = 'https://resources.gdsgt.net';
  const currentDate = getCurrentDate();

  const urls: SitemapURL[] = [
    // Homepage
    {
      loc: `${baseUrl}/es`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 1.0,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es` },
        { lang: 'en', url: `${baseUrl}/en` },
      ],
    },

    // Guides
    {
      loc: `${baseUrl}/es/guides`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/guides` },
        { lang: 'en', url: `${baseUrl}/en/guides` },
      ],
    },

    // Glossary
    {
      loc: `${baseUrl}/es/glossary`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/glossary` },
        { lang: 'en', url: `${baseUrl}/en/glossary` },
      ],
    },

    // Templates
    {
      loc: `${baseUrl}/es/templates`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
      alternates: [
        { lang: 'es', url: `${baseUrl}/es/templates` },
        { lang: 'en', url: `${baseUrl}/en/templates` },
      ],
    },
  ];

  return generateSitemap({ baseUrl, urls });
}

/**
 * Generate master sitemap index
 */
export function generateMasterSitemapIndex(): string {
  const currentDate = getCurrentDate();

  const sitemaps = [
    {
      loc: 'https://erp.grupogds.co/sitemap.xml',
      lastmod: currentDate,
    },
    {
      loc: 'https://www.gdsgt.net/sitemap.xml',
      lastmod: currentDate,
    },
    {
      loc: 'https://services.gdsgt.net/sitemap.xml',
      lastmod: currentDate,
    },
    {
      loc: 'https://resources.gdsgt.net/sitemap.xml',
      lastmod: currentDate,
    },
  ];

  return generateSitemapIndex(sitemaps);
}
