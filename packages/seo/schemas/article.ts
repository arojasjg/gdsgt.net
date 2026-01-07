/**
 * Article Schema Generator
 * For blog posts and articles
 * https://schema.org/Article
 */

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  keywords?: string[];
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    author: {
      '@type': 'Person',
      name: props.author.name,
      ...(props.author.url && { url: props.author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: props.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: props.publisher.logo,
      },
    },
    datePublished: props.datePublished,
    ...(props.dateModified && { dateModified: props.dateModified }),
    ...(props.image && {
      image: {
        '@type': 'ImageObject',
        url: props.image,
      },
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
    ...(props.keywords && props.keywords.length > 0 && { keywords: props.keywords.join(', ') }),
  };
}
