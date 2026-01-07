'use client';

import React, { useState } from 'react';

interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    gdsOne: boolean | string;
    competitor: boolean | string;
    highlight?: boolean;
  }[];
}

export interface ComparisonTableProps {
  lang?: 'es' | 'en';
  competitorName: string;
  competitorLogo?: string;
  features?: ComparisonFeature[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  lang = 'es',
  competitorName,
  competitorLogo = '🏢',
  features: customFeatures
}) => {
  const isSpanish = lang === 'es';

  const content = {
    es: {
      title: 'Comparación Detallada',
      subtitle: 'Decisión basada en hechos',
      gdsOne: 'GDS ONE',
      included: 'Incluido',
      notIncluded: 'No incluido',
      limited: 'Limitado',
      additional: 'Costo adicional',
      cta: 'Elegir GDS ONE',
      categories: {
        pricing: 'Precios y Planes',
        features: 'Funcionalidades',
        support: 'Soporte',
        technology: 'Tecnología',
        local: 'Ventajas Locales'
      }
    },
    en: {
      title: 'Detailed Comparison',
      subtitle: 'Fact-based decision',
      gdsOne: 'GDS ONE',
      included: 'Included',
      notIncluded: 'Not included',
      limited: 'Limited',
      additional: 'Additional cost',
      cta: 'Choose GDS ONE',
      categories: {
        pricing: 'Pricing and Plans',
        features: 'Features',
        support: 'Support',
        technology: 'Technology',
        local: 'Local Advantages'
      }
    }
  };

  const t = isSpanish ? content.es : content.en;

  const defaultFeatures: ComparisonFeature[] = [
    {
      category: t.categories.pricing,
      features: [
        { name: 'Precio inicial mensual', gdsOne: 'Desde $200', competitor: 'Desde $650+', highlight: true },
        { name: 'Costo por usuario adicional', gdsOne: '$20', competitor: '$40-65' },
        { name: 'Implementación incluida', gdsOne: true, competitor: false },
        { name: 'Actualizaciones gratuitas', gdsOne: true, competitor: 'Costo adicional' },
        { name: 'Sin contratos largos', gdsOne: true, competitor: false }
      ]
    },
    {
      category: t.categories.features,
      features: [
        { name: 'Módulos incluidos', gdsOne: '15+ módulos', competitor: '5-8 módulos', highlight: true },
        { name: 'Asistente con IA', gdsOne: true, competitor: false },
        { name: 'Facturación electrónica GT', gdsOne: true, competitor: 'Limitado' },
        { name: 'Multi-bodega', gdsOne: true, competitor: true },
        { name: 'Multi-moneda', gdsOne: true, competitor: 'Costo adicional' },
        { name: 'Reportes personalizables', gdsOne: '100+ reportes', competitor: '20-30 reportes' },
        { name: 'App móvil', gdsOne: true, competitor: 'Limitado' }
      ]
    },
    {
      category: t.categories.support,
      features: [
        { name: 'Soporte en español', gdsOne: true, competitor: 'Limitado', highlight: true },
        { name: 'Soporte local (Guatemala)', gdsOne: true, competitor: false, highlight: true },
        { name: 'WhatsApp directo', gdsOne: true, competitor: false },
        { name: 'Tiempo de respuesta', gdsOne: '< 30 min', competitor: '24-48 hrs' },
        { name: 'Capacitación incluida', gdsOne: true, competitor: 'Costo adicional' },
        { name: 'Soporte 24/7', gdsOne: true, competitor: 'Solo horario laboral' }
      ]
    },
    {
      category: t.categories.technology,
      features: [
        { name: 'Basado en la nube', gdsOne: true, competitor: true },
        { name: 'Tecnología moderna', gdsOne: 'Next.js, React', competitor: 'Tecnología legacy' },
        { name: 'API abierta', gdsOne: true, competitor: 'Limitado' },
        { name: 'Integraciones', gdsOne: '100+ apps', competitor: '20-30 apps' },
        { name: 'Backup automático', gdsOne: 'Diario', competitor: 'Semanal' }
      ]
    },
    {
      category: t.categories.local,
      features: [
        { name: 'Configuración para Latinoamérica', gdsOne: true, competitor: false, highlight: true },
        { name: 'Cumplimiento fiscal local', gdsOne: true, competitor: 'Parcial' },
        { name: 'Multi-moneda (USD, MXN, COP, etc)', gdsOne: true, competitor: 'Limitado' },
        { name: 'Bancos locales integrados', gdsOne: true, competitor: false },
        { name: 'Soporte en tu zona horaria', gdsOne: true, competitor: false }
      ]
    }
  ];

  const features = customFeatures || defaultFeatures;
  const [expandedCategory, setExpandedCategory] = useState<string | null>(features[0]?.category || null);

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {t.included}
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-red-600 font-semibold">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          {t.notIncluded}
        </span>
      );
    }
    return <span className="font-semibold text-gray-700">{value}</span>;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600">
          {t.subtitle}
        </p>
      </div>

      {/* Competitor Logos */}
      <div className="flex justify-center items-center gap-8 mb-8 pb-8 border-b-2">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl text-white font-bold mb-3 shadow-lg">
            GDS
          </div>
          <div className="font-bold text-xl text-gray-900">{t.gdsOne}</div>
        </div>
        <div className="text-4xl text-gray-400">VS</div>
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center text-4xl mb-3">
            {competitorLogo}
          </div>
          <div className="font-bold text-xl text-gray-700">{competitorName}</div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-4">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="border-2 border-gray-200 rounded-xl overflow-hidden">
            {/* Category Header */}
            <button
              onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
              className="w-full bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 flex items-center justify-between hover:from-gray-200 hover:to-gray-100 transition-colors"
            >
              <span className="font-bold text-lg text-gray-900">{category.category}</span>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform ${expandedCategory === category.category ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Features */}
            {expandedCategory === category.category && (
              <div className="divide-y divide-gray-200">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`grid grid-cols-3 gap-4 px-6 py-4 ${feature.highlight ? 'bg-blue-50' : 'bg-white'}`}
                  >
                    {/* Feature Name */}
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700">
                        {feature.name}
                        {feature.highlight && <span className="ml-2 text-blue-600">⭐</span>}
                      </span>
                    </div>

                    {/* GDS ONE */}
                    <div className="flex items-center justify-center">
                      {renderValue(feature.gdsOne)}
                    </div>

                    {/* Competitor */}
                    <div className="flex items-center justify-center">
                      {renderValue(feature.competitor)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
            <div className="text-sm text-gray-600">Más económico</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2x</div>
            <div className="text-sm text-gray-600">Más funcionalidades</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Soporte local</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/50259961882?text=${encodeURIComponent(
              isSpanish
                ? `Hola! Vi la comparación con ${competitorName} y quiero cambiarme a GDS ONE`
                : `Hi! I saw the comparison with ${competitorName} and want to switch to GDS ONE`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.cta}
          </a>
        </div>
      </div>
    </div>
  );
};
