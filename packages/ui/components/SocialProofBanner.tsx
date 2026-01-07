/**
 * Social Proof Banner Component
 * 
 * Displays social proof metrics prominently
 * Inspired by: HubSpot ("200K+ customers"), Monday ("152K+ teams")
 */

'use client';

import { useEffect, useState } from 'react';
import { clientLogosEs, clientLogosEn } from '@gds/content';

export interface SocialProofMetric {
  value: string;
  label: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

export interface SocialProofBannerProps {
  metrics?: SocialProofMetric[];
  lang?: 'es' | 'en';
  variant?: 'default' | 'compact' | 'hero';
  animated?: boolean;
}

export function SocialProofBanner({
  metrics,
  lang = 'es',
  variant = 'default',
  animated = true
}: SocialProofBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(true);
    }
  }, [animated]);

  const defaultMetrics: SocialProofMetric[] = metrics || [
    {
      value: '500+',
      label: lang === 'es' ? 'Empresas activas' : 'Active companies',
      icon: '🏢',
      color: 'blue'
    },
    {
      value: '98%',
      label: lang === 'es' ? 'Satisfacción' : 'Satisfaction',
      icon: '⭐',
      color: 'green'
    },
    {
      value: '15+',
      label: lang === 'es' ? 'Años experiencia' : 'Years experience',
      icon: '🏆',
      color: 'purple'
    },
    {
      value: '24/7',
      label: lang === 'es' ? 'Soporte local' : 'Local support',
      icon: '💬',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600'
  };

  const variantClasses = {
    default: 'py-8',
    compact: 'py-4',
    hero: 'py-12'
  };

  const textSizeClasses = {
    default: {
      value: 'text-4xl md:text-5xl',
      label: 'text-sm md:text-base'
    },
    compact: {
      value: 'text-3xl md:text-4xl',
      label: 'text-xs md:text-sm'
    },
    hero: {
      value: 'text-5xl md:text-6xl',
      label: 'text-base md:text-lg'
    }
  };

  return (
    <div className={`w-full ${variantClasses[variant]}`}>
      <div className="container mx-auto px-4">
        <div className={`
          grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          transition-all duration-700
        `}>
          {defaultMetrics.map((metric, idx) => (
            <div
              key={idx}
              className={`
                text-center
                ${animated ? 'animate-fade-in' : ''}
              `}
              style={{
                animationDelay: animated ? `${idx * 150}ms` : '0ms'
              }}
            >
              {/* Icon (optional) */}
              {metric.icon && variant !== 'compact' && (
                <div className="text-4xl mb-2">{metric.icon}</div>
              )}
              
              {/* Value */}
              <div className={`
                font-bold ${colorClasses[metric.color || 'blue']}
                ${textSizeClasses[variant].value}
              `}>
                {metric.value}
              </div>
              
              {/* Label */}
              <div className={`
                text-gray-600 mt-1
                ${textSizeClasses[variant].label}
              `}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Variant with client logos
export interface SocialProofLogosProps {
  title?: string;
  logos?: Array<{
    name: string;
    src: string;
    alt: string;
  }>;
  lang?: 'es' | 'en';
}

export function SocialProofLogos({
  title,
  logos = [],
  lang = 'es'
}: SocialProofLogosProps) {
  const defaultTitle = title || (lang === 'es' ? 'Confían en nosotros:' : 'Trusted by:');
  const defaultLogos =
    logos.length > 0
      ? logos
      : (lang === 'es' ? clientLogosEs : clientLogosEn).map((c) => ({
          name: c.company,
          src: c.logo_src,
          alt: c.contact_name ? `${c.company} — ${c.contact_name}` : c.company,
        }));

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500 text-center mb-6">{defaultTitle}</p>
        <div className="flex flex-wrap gap-8 items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
          {defaultLogos.length > 0 ? (
            defaultLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain"
                title={logo.name}
              />
            ))
          ) : (
            // Placeholder logos
            <div className="flex gap-8 items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-10 w-24 bg-gray-200 rounded animate-pulse"
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Combined component with metrics + logos
export interface SocialProofHeroProps {
  metrics?: SocialProofMetric[];
  logos?: Array<{
    name: string;
    src: string;
    alt: string;
  }>;
  lang?: 'es' | 'en';
}

export function SocialProofHero({
  metrics,
  logos,
  lang = 'es'
}: SocialProofHeroProps) {
  return (
    <div className="w-full">
      <SocialProofBanner metrics={metrics} lang={lang} variant="hero" />
      <SocialProofLogos logos={logos} lang={lang} />
    </div>
  );
}

export default SocialProofBanner;
