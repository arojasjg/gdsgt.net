import React from 'react';
import clsx from 'clsx';

export interface CTASectionProps {
  title: string;
  description?: string;
  cta: React.ReactNode;
  variant?: 'default' | 'primary' | 'gradient';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  cta,
  variant = 'default',
}) => {
  const variantClasses = {
    default: 'bg-secondary-50',
    primary: 'bg-primary-600 text-white',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-800 text-white',
  };

  return (
    <section className={clsx('py-16 md:py-20', variantClasses[variant])}>
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2
          className={clsx(
            'text-3xl md:text-4xl font-bold mb-4',
            variant === 'default' ? 'text-secondary-900' : 'text-white'
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={clsx(
              'text-lg mb-8',
              variant === 'default' ? 'text-secondary-600' : 'text-white/90'
            )}
          >
            {description}
          </p>
        )}
        <div className="flex gap-4 justify-center">{cta}</div>
      </div>
    </section>
  );
};
