import React from 'react';
import clsx from 'clsx';

export interface HeroSectionProps {
  title: string;
  description?: string;
  cta?: React.ReactNode;
  image?: React.ReactNode;
  centered?: boolean;
  size?: 'default' | 'large';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  cta,
  image,
  centered = false,
  size = 'default',
}) => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-60"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={clsx(
            'grid gap-8 items-center',
            image ? 'lg:grid-cols-2' : 'lg:grid-cols-1',
            centered && 'text-center'
          )}
        >
          <div className={clsx(centered && 'mx-auto max-w-4xl', 'animate-fade-in')}>
            <h1
              className={clsx(
                'font-extrabold text-gray-900 mb-6 leading-tight',
                size === 'large' ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl lg:text-6xl'
              )}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600">
                {title}
              </span>
            </h1>
            {description && (
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slide-up">
                {description}
              </p>
            )}
            {cta && (
              <div className={clsx('flex gap-4 animate-slide-up animation-delay-200', centered && 'justify-center')}>
                {cta}
              </div>
            )}
          </div>
          {image && <div className="relative animate-fade-in animation-delay-400">{image}</div>}
        </div>
      </div>
    </section>
  );
};
