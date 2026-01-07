'use client';

import React, { useState } from 'react';

interface ComparisonItem {
  feature: string;
  gdsOne: string;
  competitor: string;
  winner?: 'gds' | 'competitor' | 'tie';
}

interface ComparisonCategory {
  name: string;
  items: ComparisonItem[];
}

export interface ComparisonTableV2Props {
  lang?: 'es' | 'en';
  title?: string;
  subtitle?: string;
  categories: ComparisonCategory[];
  gdsOneLabel?: string;
  competitorLabel?: string;
}

export const ComparisonTableV2: React.FC<ComparisonTableV2Props> = ({
  lang = 'es',
  title,
  subtitle,
  categories,
  gdsOneLabel = 'GDS ONE',
  competitorLabel = 'Competitor'
}) => {
  const isSpanish = lang === 'es';
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.map(c => c.name))
  );

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const getWinnerClass = (winner?: 'gds' | 'competitor' | 'tie') => {
    if (!winner || winner === 'tie') return 'text-gray-700';
    return winner === 'gds' ? 'text-green-600 font-semibold' : 'text-gray-600';
  };

  const getWinnerIcon = (winner: 'gds' | 'competitor' | 'tie' | undefined, isGds: boolean) => {
    if (!winner || winner === 'tie') return null;
    if ((winner === 'gds' && isGds) || (winner === 'competitor' && !isGds)) {
      return (
        <span className="ml-2 text-green-600">
          <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
      {/* Header */}
      {(title || subtitle) && (
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-primary-100">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b-2 border-gray-200 font-bold text-center">
        <div className="text-gray-600">{isSpanish ? 'Característica' : 'Feature'}</div>
        <div className="text-primary-600">{gdsOneLabel}</div>
        <div className="text-gray-600">{competitorLabel}</div>
      </div>

      {/* Categories */}
      <div className="divide-y divide-gray-200">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full bg-gray-100 hover:bg-gray-200 px-6 py-4 flex items-center justify-between transition-colors"
            >
              <span className="font-bold text-lg text-gray-900">{category.name}</span>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform ${
                  expandedCategories.has(category.name) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Category Items */}
            {expandedCategories.has(category.name) && (
              <div className="divide-y divide-gray-100">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    {/* Feature Name */}
                    <div className="flex items-center text-gray-700">
                      {item.feature}
                    </div>

                    {/* GDS ONE */}
                    <div className={`flex items-center justify-center ${getWinnerClass(item.winner === 'gds' ? 'gds' : item.winner)}`}>
                      <span>{item.gdsOne}</span>
                      {getWinnerIcon(item.winner, true)}
                    </div>

                    {/* Competitor */}
                    <div className={`flex items-center justify-center ${getWinnerClass(item.winner === 'competitor' ? 'competitor' : item.winner)}`}>
                      <span>{item.competitor}</span>
                      {getWinnerIcon(item.winner, false)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 text-center">
        <p className="text-lg text-gray-700 mb-4">
          {isSpanish 
            ? '¿Listo para cambiar a GDS ONE?' 
            : 'Ready to switch to GDS ONE?'}
        </p>
        <a
          href={`https://wa.me/50259961882?text=${encodeURIComponent(
            isSpanish
              ? `Hola! Vi la comparación con ${competitorLabel} y quiero más información sobre GDS ONE`
              : `Hi! I saw the comparison with ${competitorLabel} and want more information about GDS ONE`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {isSpanish ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
        </a>
      </div>
    </div>
  );
};
