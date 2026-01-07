/**
 * FAQPage Schema Generator
 * For FAQ sections
 * https://schema.org/FAQPage
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPageSchemaProps {
  faqs: FAQItem[];
}

export function generateFAQPageSchema(props: FAQPageSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
