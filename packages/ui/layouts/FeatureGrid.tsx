import React from 'react';
import clsx from 'clsx';
import { Card } from '../components/Card';

export interface Feature {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  title?: string;
  description?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  columns = 3,
  title,
  description,
}) => {
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">{title}</h2>}
            {description && <p className="text-lg text-secondary-600">{description}</p>}
          </div>
        )}
        <div className={clsx('grid gap-6', gridClasses[columns])}>
          {features.map((feature) => (
            <Card key={feature.id} variant="hover" padding="lg">
              {feature.icon && <div className="mb-4">{feature.icon}</div>}
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">{feature.title}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
