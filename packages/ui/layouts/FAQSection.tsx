import React from 'react';
import { Accordion, AccordionItem } from '../components/Accordion';

export interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: AccordionItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ title, description, faqs }) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">{title}</h2>}
            {description && <p className="text-lg text-secondary-600">{description}</p>}
          </div>
        )}
        <Accordion items={faqs} />
      </div>
    </section>
  );
};
