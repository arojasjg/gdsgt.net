/**
 * PricingTable Component
 * 
 * Displays pricing tiers in a comparison table
 */

'use client';

import React from 'react';
import { Button } from './Button';
import { Badge } from './Badge';

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  base_price_range: string;
  pricing_note: string;
  included_modules: string[];
  included_users: string | number;
  included_companies: string | number;
  included_support: string;
  included_storage: string;
  included_integrations: string[];
  available_addons: Array<{
    name: string;
    description: string;
    price_note: string;
  }>;
  cta_primary: string;
  cta_secondary?: string;
  features: {
    [key: string]: boolean | string;
  };
  recommended?: boolean;
}

export interface PricingTableProps {
  tiers: PricingTier[];
  lang?: 'es' | 'en';
  onSelectTier?: (tierId: string, action: 'primary' | 'secondary') => void;
}

export function PricingTable({ tiers, lang = 'es', onSelectTier }: PricingTableProps) {
  const t = lang === 'es'
    ? {
        recommended: 'Recomendado',
        includes: 'Incluye:',
        users: 'Usuarios',
        companies: 'Empresas',
        support: 'Soporte',
        storage: 'Almacenamiento',
        modules: 'Módulos',
        more: 'más',
        companySingular: 'empresa',
        companyPlural: 'empresas',
      }
    : {
        recommended: 'Recommended',
        includes: 'Includes:',
        users: 'Users',
        companies: 'Companies',
        support: 'Support',
        storage: 'Storage',
        modules: 'Modules',
        more: 'more',
        companySingular: 'company',
        companyPlural: 'companies',
      };

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-[900px]">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            lang={lang}
            t={t}
            onSelect={onSelectTier}
          />
        ))}
      </div>
    </div>
  );
}

function PricingCard({
  tier,
  lang,
  t,
  onSelect
}: {
  tier: PricingTier;
  lang: 'es' | 'en';
  t: {
    recommended: string;
    includes: string;
    users: string;
    companies: string;
    support: string;
    storage: string;
    modules: string;
    more: string;
    companySingular: string;
    companyPlural: string;
  };
  onSelect?: (tierId: string, action: 'primary' | 'secondary') => void;
}) {
  return (
    <div
      id={tier.id}
      className={`
        relative flex flex-col p-6 bg-white rounded-lg border-2
        ${tier.recommended ? 'border-blue-600 shadow-lg' : 'border-gray-200'}
      `}
    >
      {tier.recommended && (
        <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
          {t.recommended}
        </Badge>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{tier.tagline}</p>
        
        <div className="mb-2">
          <p className="text-3xl font-bold text-gray-900">{tier.base_price_range}</p>
          <p className="text-xs text-gray-500 mt-1">{tier.pricing_note}</p>
        </div>
      </div>
      
      <div className="flex-1 mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">{t.includes}</h4>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>{t.users}:</strong> {tier.included_users}
            </span>
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>{t.companies}:</strong>{' '}
              {typeof tier.included_companies === 'number'
                ? tier.included_companies === 1
                  ? `1 ${t.companySingular}`
                  : `${tier.included_companies}+ ${t.companyPlural}`
                : tier.included_companies}
            </span>
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>{t.support}:</strong> {tier.included_support}
            </span>
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>{t.storage}:</strong> {tier.included_storage}
            </span>
          </li>
        </ul>
        
        {tier.included_modules.length > 0 && (
          <div className="mt-4">
            <h5 className="text-xs font-semibold text-gray-700 mb-2">{t.modules}:</h5>
            <ul className="space-y-1">
              {tier.included_modules.slice(0, 3).map((module, idx) => (
                <li key={idx} className="text-xs text-gray-600">• {module}</li>
              ))}
              {tier.included_modules.length > 3 && (
                <li className="text-xs text-gray-500">
                  + {tier.included_modules.length - 3} {t.more}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Button
          variant={tier.recommended ? 'primary' : 'secondary'}
          size="md"
          className="w-full"
          onClick={() => onSelect?.(tier.id, 'primary')}
        >
          {tier.cta_primary}
        </Button>
        
        {tier.cta_secondary && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            onClick={() => onSelect?.(tier.id, 'secondary')}
          >
            {tier.cta_secondary}
          </Button>
        )}
      </div>
    </div>
  );
}

/**
 * Feature Comparison Table (detailed)
 */
export interface FeatureComparisonProps {
  tiers: PricingTier[];
  featureCategories: Array<{
    name: string;
    features: string[];
  }>;
  lang?: 'es' | 'en';
}

export function FeatureComparison({ tiers, featureCategories, lang = 'es' }: FeatureComparisonProps) {
  const t = lang === 'es'
    ? {
        feature: 'Característica',
      }
    : {
        feature: 'Feature',
      };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse min-w-[900px]">
        <thead>
          <tr className="border-b-2 border-gray-200 sticky top-0 bg-white z-20">
            <th className="text-left p-4 font-semibold text-gray-900 sticky left-0 bg-white z-30">
              {t.feature}
            </th>
            {tiers.map((tier) => (
              <th key={tier.id} className="text-center p-4 font-semibold text-gray-900">
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureCategories.map((category, catIdx) => (
            <React.Fragment key={catIdx}>
              <tr className="bg-gray-50">
                <td
                  colSpan={tiers.length + 1}
                  className="p-3 font-semibold text-sm text-gray-700 sticky left-0 bg-gray-50 z-10"
                >
                  {category.name}
                </td>
              </tr>
              {category.features.map((feature, featIdx) => (
                <tr key={featIdx} className="border-b border-gray-100">
                  <td className="p-4 text-sm text-gray-700 sticky left-0 bg-white z-10">
                    {feature}
                  </td>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="p-4 text-center">
                      {renderFeatureValue(tier.features[feature])}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderFeatureValue(value: boolean | string | undefined) {
  if (value === true) {
    return (
      <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  } else if (value === false) {
    return (
      <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  } else if (typeof value === 'string') {
    return <span className="text-sm text-gray-700">{value}</span>;
  } else {
    return <span className="text-sm text-gray-400">—</span>;
  }
}
