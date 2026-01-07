'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div key={item.id} className="border border-secondary-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-secondary-50 transition-colors duration-base"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="font-medium text-secondary-900">{item.title}</span>
              <svg
                className={clsx(
                  'w-5 h-5 text-secondary-500 transition-transform duration-base',
                  isOpen && 'rotate-180'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              className={clsx(
                'overflow-hidden transition-all duration-base',
                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              )}
              role="region"
              aria-labelledby={`accordion-button-${item.id}`}
            >
              <div className="px-4 py-3 bg-secondary-50 text-secondary-700">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
