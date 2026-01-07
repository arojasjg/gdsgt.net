import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  includeSchema?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
  includeSchema = true,
}) => {
  // Generate schema.org BreadcrumbList JSON-LD
  const schemaData = includeSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: `https://gdsgt.net${item.href}`,
        })),
      }
    : null;

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <nav
        aria-label="Breadcrumb"
        className={clsx('flex items-center space-x-2 text-sm', className)}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.href}>
              {index > 0 && (
                <span className="text-secondary-400" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-secondary-600 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-secondary-500 hover:text-primary-600 transition-colors duration-base"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};
