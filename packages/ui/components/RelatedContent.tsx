import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import clsx from 'clsx';

export interface RelatedContentItem {
  type: 'module' | 'blog' | 'case-study' | 'guide' | 'industry' | 'capability';
  title: string;
  description?: string;
  href: string;
  icon?: string;
}

export interface RelatedContentProps {
  title: string;
  items: RelatedContentItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const typeLabels: Record<RelatedContentItem['type'], { es: string; en: string; icon: string }> = {
  module: { es: 'Módulo', en: 'Module', icon: '📦' },
  blog: { es: 'Blog', en: 'Blog', icon: '📝' },
  'case-study': { es: 'Caso de Éxito', en: 'Case Study', icon: '🎯' },
  guide: { es: 'Guía', en: 'Guide', icon: '📚' },
  industry: { es: 'Industria', en: 'Industry', icon: '🏭' },
  capability: { es: 'Capacidad', en: 'Capability', icon: '⚡' },
};

export const RelatedContent: React.FC<RelatedContentProps> = ({
  title,
  items,
  columns = 3,
  className,
}) => {
  if (items.length === 0) return null;

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <section className={clsx('py-12 bg-secondary-50', className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className={clsx('grid grid-cols-1 gap-6', gridCols[columns])}>
          {items.map((item, index) => {
            const typeInfo = typeLabels[item.type];
            return (
              <Link key={index} href={item.href}>
                <Card variant="clickable" padding="lg" className="h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{item.icon || typeInfo.icon}</span>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">
                        {typeInfo.es}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-sm text-secondary-600 line-clamp-2">{item.description}</p>
                  )}
                  <div className="mt-4 text-primary-600 font-medium text-sm flex items-center">
                    Ver más
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-base group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
