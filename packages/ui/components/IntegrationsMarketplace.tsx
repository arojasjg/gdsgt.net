'use client';

import React, { useState } from 'react';

interface Integration {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  popular?: boolean;
  verified?: boolean;
}

export interface IntegrationsMarketplaceProps {
  lang?: 'es' | 'en';
  integrations?: Integration[];
}

export const IntegrationsMarketplace: React.FC<IntegrationsMarketplaceProps> = ({
  lang = 'es',
  integrations: customIntegrations
}) => {
  const isSpanish = lang === 'es';

  const content = {
    es: {
      title: '🔌 Integraciones Poderosas',
      subtitle: 'Conecta GDS ONE con tus herramientas favoritas',
      searchPlaceholder: 'Buscar integraciones...',
      allCategories: 'Todas',
      popular: 'Popular',
      verified: 'Verificado',
      connect: 'Conectar',
      learnMore: 'Más Info',
      totalIntegrations: 'integraciones disponibles',
      categories: {
        accounting: 'Contabilidad',
        banking: 'Bancos',
        ecommerce: 'E-commerce',
        crm: 'CRM',
        marketing: 'Marketing',
        productivity: 'Productividad',
        shipping: 'Envíos',
        payments: 'Pagos'
      }
    },
    en: {
      title: '🔌 Powerful Integrations',
      subtitle: 'Connect GDS ONE with your favorite tools',
      searchPlaceholder: 'Search integrations...',
      allCategories: 'All',
      popular: 'Popular',
      verified: 'Verified',
      connect: 'Connect',
      learnMore: 'Learn More',
      totalIntegrations: 'available integrations',
      categories: {
        accounting: 'Accounting',
        banking: 'Banking',
        ecommerce: 'E-commerce',
        crm: 'CRM',
        marketing: 'Marketing',
        productivity: 'Productivity',
        shipping: 'Shipping',
        payments: 'Payments'
      }
    }
  };

  const t = isSpanish ? content.es : content.en;

  const defaultIntegrations: Integration[] = [
    // Banking
    { id: '1', name: 'Banco Industrial', logo: '🏦', category: 'banking', description: 'Conciliación bancaria automática', popular: true, verified: true },
    { id: '2', name: 'BAM', logo: '🏦', category: 'banking', description: 'Sincronización de transacciones', verified: true },
    { id: '3', name: 'Banrural', logo: '🏦', category: 'banking', description: 'Pagos y transferencias', verified: true },
    
    // Accounting
    { id: '4', name: 'SAT Guatemala', logo: '📄', category: 'accounting', description: 'Facturación electrónica FEL', popular: true, verified: true },
    { id: '5', name: 'QuickBooks', logo: '💚', category: 'accounting', description: 'Sincronización contable', verified: true },
    
    // E-commerce
    { id: '6', name: 'Shopify', logo: '🛍️', category: 'ecommerce', description: 'Integración de tienda online', popular: true, verified: true },
    { id: '7', name: 'WooCommerce', logo: '🛒', category: 'ecommerce', description: 'WordPress e-commerce', verified: true },
    { id: '8', name: 'Mercado Libre', logo: '🏪', category: 'ecommerce', description: 'Marketplace LATAM', popular: true },
    
    // CRM
    { id: '9', name: 'HubSpot', logo: '🧡', category: 'crm', description: 'CRM y marketing automation', verified: true },
    { id: '10', name: 'Salesforce', logo: '☁️', category: 'crm', description: 'Enterprise CRM', verified: true },
    
    // Marketing
    { id: '11', name: 'Mailchimp', logo: '📧', category: 'marketing', description: 'Email marketing', popular: true },
    { id: '12', name: 'Meta Business', logo: '📱', category: 'marketing', description: 'Facebook & Instagram ads', verified: true },
    { id: '13', name: 'Google Ads', logo: '🔍', category: 'marketing', description: 'Publicidad en Google', verified: true },
    
    // Productivity
    { id: '14', name: 'Google Workspace', logo: '📊', category: 'productivity', description: 'Gmail, Drive, Calendar', popular: true, verified: true },
    { id: '15', name: 'Microsoft 365', logo: '📘', category: 'productivity', description: 'Office, Teams, OneDrive', verified: true },
    { id: '16', name: 'Slack', logo: '💬', category: 'productivity', description: 'Comunicación de equipo', verified: true },
    
    // Shipping
    { id: '17', name: 'Cargo Expreso', logo: '📦', category: 'shipping', description: 'Envíos Guatemala', verified: true },
    { id: '18', name: 'Guatex', logo: '🚚', category: 'shipping', description: 'Logística local', verified: true },
    { id: '19', name: 'DHL', logo: '✈️', category: 'shipping', description: 'Envíos internacionales', verified: true },
    
    // Payments
    { id: '20', name: 'Visa/Mastercard', logo: '💳', category: 'payments', description: 'Pagos con tarjeta', popular: true, verified: true },
    { id: '21', name: 'PayPal', logo: '💙', category: 'payments', description: 'Pagos online', verified: true },
    { id: '22', name: 'Stripe', logo: '💜', category: 'payments', description: 'Procesamiento de pagos', verified: true }
  ];

  const integrations = customIntegrations || defaultIntegrations;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', ...Object.keys(t.categories)];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (category: string) => {
    if (category === 'all') return t.allCategories;
    return t.categories[category as keyof typeof t.categories] || category;
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          {t.subtitle}
        </p>
        <p className="text-sm text-gray-500">
          {integrations.length}+ {t.totalIntegrations}
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pl-12 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-6 py-2 rounded-full font-semibold transition-all duration-300 transform
              ${selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                : 'bg-white text-gray-700 hover:shadow-md hover:scale-105 border-2 border-gray-200'
              }
            `}
          >
            {getCategoryLabel(category)}
          </button>
        ))}
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredIntegrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 border-2 border-gray-100 hover:border-blue-300 relative overflow-hidden group"
          >
            {/* Badges */}
            <div className="absolute top-3 right-3 flex flex-col gap-1">
              {integration.popular && (
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ⭐ {t.popular}
                </span>
              )}
              {integration.verified && (
                <span className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ✓ {t.verified}
                </span>
              )}
            </div>

            {/* Logo */}
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
              {integration.logo}
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              {integration.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 text-center h-10">
              {integration.description}
            </p>

            {/* Category Badge */}
            <div className="text-center mb-4">
              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                {getCategoryLabel(integration.category)}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all">
                {t.connect}
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all">
                ℹ️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredIntegrations.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600">
            {isSpanish ? 'No se encontraron integraciones' : 'No integrations found'}
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t-2 border-gray-200">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
          <div className="text-sm text-gray-600">{isSpanish ? 'Integraciones' : 'Integrations'}</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
          <div className="text-sm text-gray-600">{isSpanish ? 'Sincronización' : 'Sync'}</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">API</div>
          <div className="text-sm text-gray-600">{isSpanish ? 'Abierta' : 'Open'}</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-600 mb-2">0</div>
          <div className="text-sm text-gray-600">{isSpanish ? 'Costos extra' : 'Extra costs'}</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href={`https://wa.me/50259961882?text=${encodeURIComponent(
            isSpanish
              ? `Hola! Quiero información sobre las integraciones de GDS ONE`
              : `Hi! I want information about GDS ONE integrations`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {isSpanish ? 'Solicitar Integración Personalizada' : 'Request Custom Integration'}
        </a>
      </div>
    </div>
  );
};
