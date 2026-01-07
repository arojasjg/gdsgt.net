/**
 * Schema.org structured data generators
 * Provides rich snippets for better SEO and search appearance
 */

export interface OrganizationSchema {
  name: string;
  description: string;
  url: string;
  logo: string;
  foundingDate?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed: string[];
    availableLanguage: string[];
  };
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
}

export interface ProductSchema {
  name: string;
  description: string;
  image?: string;
  brand: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BreadcrumbSchema {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(config: OrganizationSchema): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    description: config.description,
    url: config.url,
    logo: config.logo,
    ...(config.foundingDate && { foundingDate: config.foundingDate }),
    ...(config.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: config.contactPoint.telephone,
        contactType: config.contactPoint.contactType,
        areaServed: config.contactPoint.areaServed,
        availableLanguage: config.contactPoint.availableLanguage,
      },
    }),
    ...(config.sameAs && { sameAs: config.sameAs }),
    ...(config.address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.address.streetAddress,
        addressLocality: config.address.addressLocality,
        addressCountry: config.address.addressCountry,
      },
    }),
  };

  return JSON.stringify(schema);
}

/**
 * Generate Product schema (for SaaS products)
 */
export function generateProductSchema(config: ProductSchema): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: config.name,
    description: config.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    ...(config.image && { image: config.image }),
    brand: {
      '@type': 'Brand',
      name: config.brand,
    },
    ...(config.offers && {
      offers: {
        '@type': 'Offer',
        price: config.offers.price,
        priceCurrency: config.offers.priceCurrency,
        availability: config.offers.availability,
        url: config.offers.url,
      },
    }),
    ...(config.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: config.aggregateRating.ratingValue,
        reviewCount: config.aggregateRating.reviewCount,
      },
    }),
  };

  return JSON.stringify(schema);
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(config: FAQSchema): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(config: BreadcrumbSchema): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: config.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Generate Article schema (for blog posts)
 */
export function generateArticleSchema(config: ArticleSchema): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    description: config.description,
    image: config.image,
    datePublished: config.datePublished,
    ...(config.dateModified && { dateModified: config.dateModified }),
    author: {
      '@type': 'Person',
      name: config.author.name,
      ...(config.author.url && { url: config.author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: config.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: config.publisher.logo,
      },
    },
  };

  return JSON.stringify(schema);
}

/**
 * Note: To render schemas in Next.js pages, use:
 * 
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: schemaString }}
 * />
 */
