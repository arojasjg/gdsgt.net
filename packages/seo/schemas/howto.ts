/**
 * HowTo Schema Generator
 * For guides and tutorials
 * https://schema.org/HowTo
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  steps: HowToStep[];
  image?: string;
  url: string;
}

export function generateHowToSchema(props: HowToSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    ...(props.totalTime && { totalTime: props.totalTime }),
    ...(props.image && { image: props.image }),
    step: props.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
    url: props.url,
  };
}
