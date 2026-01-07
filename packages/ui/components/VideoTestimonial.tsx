'use client';

import React, { useState } from 'react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  /**
   * Either an emoji (e.g. "🏢") or a local image path (e.g. "/clients/imessa.png")
   */
  companyLogo?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  quote: string;
  results: {
    metric: string;
    value: string;
    icon: string;
  }[];
  industry: string;
}

export interface VideoTestimonialProps {
  lang?: 'es' | 'en';
  testimonials?: Testimonial[];
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ 
  lang = 'es',
  testimonials: customTestimonials
}) => {
  const isSpanish = lang === 'es';

  const content = {
    es: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Empresas reales, resultados reales',
      watchVideo: 'Ver Video',
      readMore: 'Leer Más',
      industry: 'Industria',
      results: 'Resultados',
      cta: 'Quiero Resultados Como Estos'
    },
    en: {
      title: 'What Our Clients Say',
      subtitle: 'Real companies, real results',
      watchVideo: 'Watch Video',
      readMore: 'Read More',
      industry: 'Industry',
      results: 'Results',
      cta: 'I Want Results Like These'
    }
  };

  const t = isSpanish ? content.es : content.en;

  // Real clients / owners provided by user (avoid unverified numeric claims)
  const defaultTestimonials: Testimonial[] = [
    {
      id: 'imessa',
      name: 'Marco Yoc',
      role: isSpanish ? 'Propietario' : 'Owner',
      company: 'IMESSA',
      companyLogo: '/clients/imessa.png',
      quote: isSpanish
        ? 'Con GDS ONE logramos ordenar procesos, tener información más clara y reducir el trabajo manual del día a día.'
        : 'With GDS ONE we organized our processes, gained clearer information, and reduced daily manual work.',
      results: [
        { metric: isSpanish ? 'Control' : 'Control', value: isSpanish ? 'Mejor' : 'Improved', icon: '✅' },
        { metric: isSpanish ? 'Visibilidad' : 'Visibility', value: isSpanish ? 'En tiempo real' : 'Real-time', icon: '👁️' },
        { metric: isSpanish ? 'Operación' : 'Operations', value: isSpanish ? 'Más ágil' : 'Faster', icon: '⚡' },
      ],
      industry: isSpanish ? 'Servicios' : 'Services',
    },
    {
      id: 'dogsmart',
      name: 'Lionel Chavez',
      role: isSpanish ? 'Propietario' : 'Owner',
      company: 'DOGSMART',
      companyLogo: '/clients/dogsmart.png',
      quote: isSpanish
        ? 'El inventario y las ventas ahora están sincronizados. Esto nos ayudó a atender mejor y evitar errores.'
        : 'Inventory and sales are now synchronized. This helped us serve better and avoid mistakes.',
      results: [
        { metric: isSpanish ? 'Inventario' : 'Inventory', value: isSpanish ? 'Más exacto' : 'More accurate', icon: '📦' },
        { metric: isSpanish ? 'Ventas' : 'Sales', value: isSpanish ? 'Más rápido' : 'Faster', icon: '🧾' },
        { metric: isSpanish ? 'Errores' : 'Errors', value: isSpanish ? 'Menos' : 'Fewer', icon: '🛡️' },
      ],
      industry: isSpanish ? 'Retail' : 'Retail',
    },
    {
      id: 'dermatantigua',
      name: 'Marco Paz',
      role: isSpanish ? 'Propietario' : 'Owner',
      company: isSpanish ? 'DERMATANTIGUA, S.A.' : 'DERMATANTIGUA, S.A.',
      companyLogo: '/clients/cliente-unknown-1.png',
      quote: isSpanish
        ? 'Con un solo sistema controlamos mejor la operación y mantenemos un seguimiento más ordenado.'
        : 'With a single system we improved operational control and kept a more organized follow-up.',
      results: [
        { metric: isSpanish ? 'Procesos' : 'Processes', value: isSpanish ? 'Estandarizados' : 'Standardized', icon: '🧩' },
        { metric: isSpanish ? 'Reportes' : 'Reports', value: isSpanish ? 'Más claros' : 'Clearer', icon: '📊' },
        { metric: isSpanish ? 'Control' : 'Control', value: isSpanish ? 'Centralizado' : 'Centralized', icon: '🎯' },
      ],
      industry: isSpanish ? 'Salud' : 'Healthcare',
    },
    {
      id: 'autolite',
      name: 'Alejandro Pacay',
      role: isSpanish ? 'Propietario' : 'Owner',
      company: 'AUTOLITE',
      companyLogo: '/clients/cliente-unknown-2.png',
      quote: isSpanish
        ? 'Ahora tenemos una base más sólida para crecer: mejor control y menos retrabajo.'
        : 'We now have a stronger foundation to grow: better control and less rework.',
      results: [
        { metric: isSpanish ? 'Orden' : 'Order', value: isSpanish ? 'Operativo' : 'Operational', icon: '🧠' },
        { metric: isSpanish ? 'Eficiencia' : 'Efficiency', value: isSpanish ? 'Mejor' : 'Improved', icon: '📈' },
        { metric: isSpanish ? 'Soporte' : 'Support', value: '24/7', icon: '💬' },
      ],
      industry: isSpanish ? 'Automotriz' : 'Automotive',
    },
    {
      id: 'piedritecu',
      name: 'Luisa Paiz',
      role: isSpanish ? 'Propietaria' : 'Owner',
      company: 'PIEDRITECU',
      companyLogo: '/clients/gds-mark.png',
      quote: isSpanish
        ? 'GDS ONE nos dio claridad y control. Hoy tomamos decisiones más rápido con información confiable.'
        : 'GDS ONE gave us clarity and control. Today we make faster decisions with reliable information.',
      results: [
        { metric: isSpanish ? 'Decisiones' : 'Decisions', value: isSpanish ? 'Más rápidas' : 'Faster', icon: '⚡' },
        { metric: isSpanish ? 'Datos' : 'Data', value: isSpanish ? 'Confiables' : 'Reliable', icon: '✅' },
        { metric: isSpanish ? 'Gestión' : 'Management', value: isSpanish ? 'Más simple' : 'Simpler', icon: '🧾' },
      ],
      industry: isSpanish ? 'Comercial' : 'Commerce',
    },
  ];

  const testimonials = customTestimonials || defaultTestimonials;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const currentTestimonial = testimonials[activeTestimonial];

  const renderCompanyLogo = (logo?: string, alt?: string) => {
    if (!logo) return null;
    const isImagePath = logo.startsWith('/');
    if (!isImagePath) {
      return <span>{logo}</span>;
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={alt || ''}
        className="h-16 w-auto object-contain drop-shadow-sm"
        loading="lazy"
      />
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          {t.title}
        </h2>
        <p className="text-lg text-gray-300">
          {t.subtitle}
        </p>
      </div>

      {/* Main Testimonial */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Video/Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden shadow-lg">
              {currentTestimonial.videoUrl ? (
                <video
                  className="w-full h-full object-cover"
                  poster={currentTestimonial.thumbnailUrl}
                  controls
                >
                  <source src={currentTestimonial.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex items-center justify-center">
                      {renderCompanyLogo(currentTestimonial.companyLogo, currentTestimonial.company)}
                    </div>
                    <div className="text-2xl font-bold">{currentTestimonial.company}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
              <span className="flex items-center">
                {renderCompanyLogo(currentTestimonial.companyLogo, currentTestimonial.company)}
              </span>
              <span className="font-bold">{currentTestimonial.company}</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            {/* Quote */}
            <div className="mb-6">
              <div className="text-6xl text-blue-400 mb-2">"</div>
              <p className="text-xl text-gray-100 leading-relaxed italic">
                {currentTestimonial.quote}
              </p>
              <div className="text-6xl text-blue-400 text-right">"</div>
            </div>

            {/* Author */}
            <div className="mb-6">
              <div className="font-bold text-2xl">{currentTestimonial.name}</div>
              <div className="text-blue-300">{currentTestimonial.role}</div>
              <div className="text-sm text-gray-400 mt-1">
                {t.industry}: {currentTestimonial.industry}
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="text-sm font-semibold text-gray-300 mb-3">{t.results}:</div>
              <div className="grid grid-cols-3 gap-3">
                {currentTestimonial.results.map((result, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-3xl mb-1">{result.icon}</div>
                    <div className="text-2xl font-bold text-green-400">{result.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => setActiveTestimonial(index)}
            className={`
              flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform
              ${activeTestimonial === index
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-110'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
              }
            `}
          >
            <span className="flex items-center">
              {renderCompanyLogo(testimonial.companyLogo, testimonial.company)}
            </span>
            <span className="hidden sm:inline">{testimonial.company}</span>
          </button>
        ))}
      </div>

      {/* Social Proof Numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pt-8 border-t border-white/10">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
          <div className="text-sm text-gray-400">Empresas Confían en GDS ONE</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
          <div className="text-sm text-gray-400">Satisfacción del Cliente</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
          <div className="text-sm text-gray-400">Soporte Técnico</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
          <div className="text-sm text-gray-400">Años de Experiencia</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href={`https://wa.me/50259961882?text=${encodeURIComponent(
            isSpanish
              ? `Hola! Vi los casos de éxito y quiero resultados similares para mi empresa`
              : `Hi! I saw the success stories and want similar results for my company`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t.cta}
        </a>
      </div>
    </div>
  );
};
