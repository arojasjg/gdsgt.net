/**
 * Product Schema Generator
 * For ERP modules and software products
 * https://schema.org/Product
 */

export interface ProductSchemaProps {
  name: string;
  description: string;
  brand: string;
  category?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    url?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  url: string;
  image?: string;
}

export function generateProductSchema(props: ProductSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: props.name,
    description: props.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, macOS, Linux',
    brand: {
      '@type': 'Brand',
      name: props.brand,
    },
    ...(props.category && { applicationSubCategory: props.category }),
    ...(props.offers && {
      offers: {
        '@type': 'Offer',
        ...(props.offers.price && { price: props.offers.price }),
        ...(props.offers.priceCurrency && { priceCurrency: props.offers.priceCurrency }),
        ...(props.offers.availability && { availability: `https://schema.org/${props.offers.availability}` }),
        ...(props.offers.url && { url: props.offers.url }),
      },
    }),
    ...(props.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: props.aggregateRating.ratingValue,
        reviewCount: props.aggregateRating.reviewCount,
        bestRating: props.aggregateRating.bestRating || 5,
        worstRating: props.aggregateRating.worstRating || 1,
      },
    }),
    url: props.url,
    ...(props.image && { image: props.image }),
  };
}
