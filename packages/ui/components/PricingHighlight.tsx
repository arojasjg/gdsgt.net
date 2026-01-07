/**
 * Pricing Highlight Component
 * 
 * Displays pricing prominently in hero sections
 * Inspired by: Monday.com (pricing very visible), Odoo (from $0)
 */

'use client';

import Link from 'next/link';

export interface PricingHighlightProps {
  basePrice?: string;
  perUser?: string;
  implementationPrice?: string;
  ctaText?: string;
  ctaLink?: string;
  lang?: 'es' | 'en';
  variant?: 'default' | 'compact' | 'hero';
}

export function PricingHighlight({
  basePrice = '$5',
  perUser,
  implementationPrice = '$99',
  ctaText,
  ctaLink = '/pricing',
  lang = 'es',
  variant = 'default'
}: PricingHighlightProps) {
  const content = {
    es: {
      prefix: 'Precios transparentes desde',
      perUserText: perUser || '/usuario/mes',
      implementationFromText: 'Implementación desde',
      ctaDefault: 'Ver todos los planes',
      arrow: '→'
    },
    en: {
      prefix: 'Transparent pricing from',
      perUserText: perUser || '/user/month',
      implementationFromText: 'Implementation from',
      ctaDefault: 'View all plans',
      arrow: '→'
    }
  };

  const t = content[lang];
  const finalCtaText = ctaText || t.ctaDefault;

  const variantClasses = {
    default: {
      container: 'p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl',
      prefix: 'text-sm text-gray-600 mb-2',
      price: 'text-5xl font-bold text-blue-600',
      perUser: 'text-2xl text-gray-700',
      implementation: 'text-sm text-gray-500 mt-2',
      cta: 'text-blue-600 hover:text-blue-700 font-medium mt-4 inline-flex items-center gap-2'
    },
    compact: {
      container: 'p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl',
      prefix: 'text-xs text-gray-600 mb-1',
      price: 'text-3xl font-bold text-blue-600',
      perUser: 'text-lg text-gray-700',
      implementation: 'text-xs text-gray-500 mt-1',
      cta: 'text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 inline-flex items-center gap-1'
    },
    hero: {
      container: 'p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-xl border-2 border-blue-100',
      prefix: 'text-base text-gray-600 mb-3',
      price: 'text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
      perUser: 'text-3xl text-gray-700',
      implementation: 'text-base text-gray-500 mt-3',
      cta: 'text-blue-600 hover:text-blue-700 text-lg font-semibold mt-6 inline-flex items-center gap-2 hover:gap-3 transition-all'
    }
  };

  const classes = variantClasses[variant];

  return (
    <div className={classes.container}>
      <p className={classes.prefix}>{t.prefix}</p>
      <div className="flex items-baseline gap-2">
        <div className={classes.price}>{basePrice}</div>
        <span className={classes.perUser}>{t.perUserText}</span>
      </div>
      <p className={classes.implementation}>
        {t.implementationFromText}{' '}
        <span className="font-semibold text-gray-700">{implementationPrice}</span>
      </p>
      <Link href={ctaLink} className={classes.cta}>
        {finalCtaText}
        <span className="transition-transform">{t.arrow}</span>
      </Link>
    </div>
  );
}

// Inline variant for hero sections
export interface PricingInlineProps {
  basePrice?: string;
  perUser?: string;
  lang?: 'es' | 'en';
}

export function PricingInline({
  basePrice = '$5',
  perUser,
  lang = 'es'
}: PricingInlineProps) {
  const content = {
    es: {
      prefix: 'Desde',
      perUserText: perUser || '/usuario/mes'
    },
    en: {
      prefix: 'From',
      perUserText: perUser || '/user/month'
    }
  };

  const t = content[lang];

  return (
    <div className="inline-flex items-baseline gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-blue-100">
      <span className="text-sm text-gray-600">{t.prefix}</span>
      <span className="text-3xl font-bold text-blue-600">{basePrice}</span>
      <span className="text-sm text-gray-700">{t.perUserText}</span>
    </div>
  );
}

// Badge variant for headers
export interface PricingBadgeProps {
  basePrice?: string;
  lang?: 'es' | 'en';
}

export function PricingBadge({
  basePrice = '$5',
  lang = 'es'
}: PricingBadgeProps) {
  const content = {
    es: {
      prefix: 'Desde'
    },
    en: {
      prefix: 'From'
    }
  };

  const t = content[lang];

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow">
      <span>{t.prefix}</span>
      <span className="text-lg">{basePrice}</span>
    </div>
  );
}

export default PricingHighlight;
