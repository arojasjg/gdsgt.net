'use client';

import React, { useState } from 'react';

export interface InteractiveDemoProps {
  lang?: 'es' | 'en';
}

type DemoScreen = 'dashboard' | 'inventory' | 'sales' | 'reports' | 'ai';

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ lang = 'es' }) => {
  const isSpanish = lang === 'es';

  const content = {
    es: {
      title: '🎮 Demo Interactivo',
      subtitle: 'Explora GDS ONE en acción - Haz click en las secciones',
      tryIt: 'Pruébalo ahora',
      screens: {
        dashboard: {
          title: 'Dashboard Inteligente',
          description: 'Visualiza tus KPIs en tiempo real con IA',
          features: ['📊 Métricas en tiempo real', '🤖 Predicciones con IA', '📈 Análisis automático', '⚡ Alertas inteligentes']
        },
        inventory: {
          title: 'Gestión de Inventario',
          description: 'Control total de tu stock con alertas automáticas',
          features: ['📦 Stock en tiempo real', '🔔 Alertas de reorden', '📱 Escaneo de códigos', '🔄 Sincronización multi-bodega']
        },
        sales: {
          title: 'Punto de Venta',
          description: 'Vende rápido con interfaz táctil moderna',
          features: ['💳 Múltiples formas de pago', '🧾 Facturación electrónica', '👥 Gestión de clientes', '🎁 Promociones automáticas']
        },
        reports: {
          title: 'Reportes Avanzados',
          description: 'Informes personalizables en segundos',
          features: ['📄 +100 reportes predefinidos', '🎨 Personalización total', '📧 Envío automático', '📊 Exportar a Excel/PDF']
        },
        ai: {
          title: 'Asistente IA',
          description: 'Tu copiloto empresarial inteligente',
          features: ['💬 Consultas en lenguaje natural', '🔮 Predicciones de ventas', '💡 Recomendaciones automáticas', '🚀 Automatización inteligente']
        }
      }
    },
    en: {
      title: '🎮 Interactive Demo',
      subtitle: 'Explore GDS ONE in action - Click on sections',
      tryIt: 'Try it now',
      screens: {
        dashboard: {
          title: 'Intelligent Dashboard',
          description: 'Visualize your KPIs in real-time with AI',
          features: ['📊 Real-time metrics', '🤖 AI predictions', '📈 Automatic analysis', '⚡ Smart alerts']
        },
        inventory: {
          title: 'Inventory Management',
          description: 'Total control of your stock with automatic alerts',
          features: ['📦 Real-time stock', '🔔 Reorder alerts', '📱 Barcode scanning', '🔄 Multi-warehouse sync']
        },
        sales: {
          title: 'Point of Sale',
          description: 'Sell fast with modern touch interface',
          features: ['💳 Multiple payment methods', '🧾 Electronic invoicing', '👥 Customer management', '🎁 Automatic promotions']
        },
        reports: {
          title: 'Advanced Reports',
          description: 'Customizable reports in seconds',
          features: ['📄 +100 predefined reports', '🎨 Full customization', '📧 Automatic sending', '📊 Export to Excel/PDF']
        },
        ai: {
          title: 'AI Assistant',
          description: 'Your intelligent business copilot',
          features: ['💬 Natural language queries', '🔮 Sales predictions', '💡 Automatic recommendations', '🚀 Smart automation']
        }
      }
    }
  };

  const t = isSpanish ? content.es : content.en;

  const [activeScreen, setActiveScreen] = useState<DemoScreen>('dashboard');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScreenChange = (screen: DemoScreen) => {
    if (screen === activeScreen) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveScreen(screen);
      setIsAnimating(false);
    }, 300);
  };

  const screens: { id: DemoScreen; icon: string; color: string }[] = [
    { id: 'dashboard', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { id: 'inventory', icon: '📦', color: 'from-green-500 to-green-600' },
    { id: 'sales', icon: '💳', color: 'from-purple-500 to-purple-600' },
    { id: 'reports', icon: '📄', color: 'from-orange-500 to-orange-600' },
    { id: 'ai', icon: '🤖', color: 'from-pink-500 to-pink-600' }
  ];

  const currentScreen = screens.find(s => s.id === activeScreen)!;
  const currentContent = t.screens[activeScreen];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600">
          {t.subtitle}
        </p>
      </div>

      {/* Screen Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {screens.map((screen) => (
          <button
            key={screen.id}
            onClick={() => handleScreenChange(screen.id)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform
              ${activeScreen === screen.id
                ? `bg-gradient-to-r ${screen.color} text-white shadow-lg scale-110`
                : 'bg-white text-gray-700 hover:shadow-md hover:scale-105'
              }
            `}
          >
            <span className="text-2xl">{screen.icon}</span>
            <span className="hidden sm:inline">
              {t.screens[screen.id].title}
            </span>
          </button>
        ))}
      </div>

      {/* Demo Screen */}
      <div className={`
        bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300
        ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
      `}>
        {/* Screen Header */}
        <div className={`bg-gradient-to-r ${currentScreen.color} text-white p-6`}>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{currentScreen.icon}</span>
            <div>
              <h3 className="text-2xl font-bold">{currentContent.title}</h3>
              <p className="text-white/90">{currentContent.description}</p>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="p-8">
          {/* Mock UI based on screen */}
          <div className="mb-6">
            {activeScreen === 'dashboard' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">Q1.2M</div>
                  <div className="text-sm text-gray-600">Ventas del mes</div>
                  <div className="text-xs text-green-600 mt-1">↑ 23% vs mes anterior</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">Q850K</div>
                  <div className="text-sm text-gray-600">Inventario</div>
                  <div className="text-xs text-blue-600 mt-1">2,340 productos</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">1,234</div>
                  <div className="text-sm text-gray-600">Clientes activos</div>
                  <div className="text-xs text-green-600 mt-1">↑ 12% este mes</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                  <div className="text-xs text-green-600 mt-1">+2% vs trimestre</div>
                </div>
              </div>
            )}

            {activeScreen === 'inventory' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">📱</div>
                    <div>
                      <div className="font-semibold">iPhone 15 Pro</div>
                      <div className="text-sm text-gray-600">SKU: IPH15PRO-256</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">45 unidades</div>
                    <div className="text-xs text-gray-500">Bodega Central</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors cursor-pointer border-2 border-red-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">💻</div>
                    <div>
                      <div className="font-semibold">MacBook Air M2</div>
                      <div className="text-sm text-gray-600">SKU: MBA-M2-512</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-600">3 unidades ⚠️</div>
                    <div className="text-xs text-red-600">Reordenar ahora</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">⌚</div>
                    <div>
                      <div className="font-semibold">Apple Watch Series 9</div>
                      <div className="text-sm text-gray-600">SKU: AW9-45MM</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">28 unidades</div>
                    <div className="text-xs text-gray-500">Múltiples bodegas</div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === 'sales' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="font-semibold text-gray-700 mb-3">Carrito de Compra</div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>iPhone 15 Pro x1</span>
                    <span className="font-bold">Q8,999</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>AirPods Pro x2</span>
                    <span className="font-bold">Q3,998</span>
                  </div>
                  <div className="border-t-2 pt-3 flex justify-between items-center text-xl font-bold">
                    <span>Total</span>
                    <span className="text-green-600">Q12,997</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-gray-700 mb-3">Forma de Pago</div>
                  <button className="w-full p-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    💳 Tarjeta de Crédito
                  </button>
                  <button className="w-full p-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    💵 Efectivo
                  </button>
                  <button className="w-full p-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                    📱 Transferencia
                  </button>
                </div>
              </div>
            )}

            {activeScreen === 'reports' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Ventas por Producto', 'Clientes Top', 'Rentabilidad', 'Inventario Crítico', 'Flujo de Caja', 'Comisiones'].map((report, i) => (
                  <div key={i} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{report}</div>
                    <div className="text-xs text-gray-500 mt-1">Generado en 0.3s</div>
                  </div>
                ))}
              </div>
            )}

            {activeScreen === 'ai' && (
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">AI</div>
                  <div className="flex-1 bg-gray-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-gray-800">¡Hola! Soy tu asistente de GDS ONE. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex-1 max-w-md bg-blue-500 text-white rounded-2xl rounded-tr-none p-4">
                    <p>¿Cuáles fueron mis ventas de ayer?</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">TÚ</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">AI</div>
                  <div className="flex-1 bg-gray-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-gray-800 mb-3">Tus ventas de ayer fueron:</p>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-bold text-2xl text-green-600">Q45,230</div>
                      <div className="text-sm text-gray-600">127 transacciones</div>
                      <div className="text-xs text-blue-600 mt-1">↑ 18% vs promedio semanal</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl">{feature.split(' ')[0]}</div>
                <div className="text-sm font-medium text-gray-700">{feature.substring(feature.indexOf(' ') + 1)}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href={`https://wa.me/50259961882?text=${encodeURIComponent(
                isSpanish
                  ? `Hola! Me interesa el módulo de ${currentContent.title} de GDS ONE`
                  : `Hi! I'm interested in the ${currentContent.title} module of GDS ONE`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.tryIt}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
