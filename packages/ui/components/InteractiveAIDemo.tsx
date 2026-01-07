/**
 * Interactive AI Demo Component
 * 
 * Shows AI assistant in action with example queries and responses
 */

'use client';

import { useState } from 'react';
import { Button } from './Button';

export interface AIMessage {
  type: 'user' | 'ai';
  content: string;
  timestamp?: string;
}

export interface AIExample {
  query: string;
  response: string;
  category?: string;
}

export interface InteractiveAIDemoProps {
  examples?: AIExample[];
  lang?: 'es' | 'en';
  variant?: 'default' | 'compact';
}

export function InteractiveAIDemo({
  examples,
  lang = 'es',
  variant = 'default'
}: InteractiveAIDemoProps) {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const content = {
    es: {
      title: 'Prueba GDS AI Assistant',
      subtitle: 'Pregunta en lenguaje natural y obtén respuestas instantáneas',
      placeholder: 'Pregunta algo... ej: "¿Cuáles son mis ventas de enero?"',
      send: 'Enviar',
      tryExample: 'Prueba un ejemplo:',
      typing: 'GDS AI está escribiendo...',
      examples: examples || [
        {
          query: '¿Cuáles son mis ventas de este mes?',
          response: '📊 Ventas de Enero 2026:\n- Total: $125,450\n- Crecimiento vs Diciembre: +15.3%\n- Top producto: Producto A ($45,000)\n\n💡 Recomendación: Aumenta inventario de Producto A 20%',
          category: 'Ventas'
        },
        {
          query: '¿Qué productos están por agotarse?',
          response: '⚠️ Productos con stock crítico:\n1. Producto X: 8 unidades (3 días restantes)\n2. Producto Y: 12 unidades (2 días restantes)\n\n✅ Orden de compra automática creada para Producto X',
          category: 'Inventario'
        },
        {
          query: '¿Cuál es mi producto más rentable?',
          response: '💰 Producto más rentable:\n\nProducto A:\n- Margen: 45%\n- Utilidad: $12,500/mes\n- Ventas: 450 unidades/mes\n\n📈 Oportunidad: Este producto tiene alta demanda. Considera promoción.',
          category: 'Rentabilidad'
        }
      ]
    },
    en: {
      title: 'Try GDS AI Assistant',
      subtitle: 'Ask in natural language and get instant answers',
      placeholder: 'Ask something... e.g. "What are my January sales?"',
      send: 'Send',
      tryExample: 'Try an example:',
      typing: 'GDS AI is typing...',
      examples: examples || [
        {
          query: 'What are my sales this month?',
          response: '📊 January 2026 Sales:\n- Total: $125,450\n- Growth vs December: +15.3%\n- Top product: Product A ($45,000)\n\n💡 Recommendation: Increase Product A inventory 20%',
          category: 'Sales'
        },
        {
          query: 'Which products are running low?',
          response: '⚠️ Products with critical stock:\n1. Product X: 8 units (3 days remaining)\n2. Product Y: 12 units (2 days remaining)\n\n✅ Automatic purchase order created for Product X',
          category: 'Inventory'
        },
        {
          query: 'What is my most profitable product?',
          response: '💰 Most profitable product:\n\nProduct A:\n- Margin: 45%\n- Profit: $12,500/month\n- Sales: 450 units/month\n\n📈 Opportunity: High demand product. Consider promotion.',
          category: 'Profitability'
        }
      ]
    }
  };

  const t = content[lang];

  const handleSendMessage = (query: string, response?: string) => {
    if (!query.trim()) return;

    // Add user message
    const userMessage: AIMessage = {
      type: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI typing
    setIsTyping(true);

    // Add AI response after delay
    setTimeout(() => {
      const aiMessage: AIMessage = {
        type: 'ai',
        content: response || t.examples[0].response,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleExampleClick = (example: AIExample) => {
    handleSendMessage(example.query, example.response);
  };

  const variantClasses = {
    default: {
      container: 'max-w-4xl mx-auto',
      chat: 'h-96',
      title: 'text-3xl font-bold mb-2',
      subtitle: 'text-lg text-gray-600 mb-8'
    },
    compact: {
      container: 'max-w-2xl mx-auto',
      chat: 'h-64',
      title: 'text-2xl font-bold mb-2',
      subtitle: 'text-base text-gray-600 mb-6'
    }
  };

  const classes = variantClasses[variant];

  return (
    <div className={classes.container}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className={classes.title}>{t.title}</h2>
        <p className={classes.subtitle}>{t.subtitle}</p>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Messages */}
        <div className={`${classes.chat} overflow-y-auto p-6 bg-gray-50`}>
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-lg">{t.tryExample}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 shadow-md border border-gray-200'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.timestamp && (
                      <div
                        className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-400'
                        }`}
                      >
                        {message.timestamp}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-150"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-300"></span>
                      </div>
                      <span className="text-sm text-gray-500">{t.typing}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isTyping) {
                  handleSendMessage(inputValue);
                }
              }}
              placeholder={t.placeholder}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              variant="primary"
            >
              {t.send}
            </Button>
          </div>
        </div>
      </div>

      {/* Example Queries */}
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-3">{t.tryExample}</p>
        <div className="flex flex-wrap gap-2">
          {t.examples.map((example, idx) => (
            <button
              key={idx}
              onClick={() => handleExampleClick(example)}
              disabled={isTyping}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-blue-500 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {example.category && (
                <span className="text-xs text-gray-500 mr-2">{example.category}:</span>
              )}
              {example.query}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InteractiveAIDemo;
