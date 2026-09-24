/**
 * WhatsApp Sticky Button Component
 * 
 * Floating WhatsApp button with pre-written messages
 * Inspired by: Local advantage vs global competitors
 */

'use client';

import { useState, useEffect } from 'react';

export interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  lang?: 'es' | 'en';
  position?: 'bottom-right' | 'bottom-left';
  showText?: boolean;
}

export function WhatsAppButton({
  phoneNumber = '+50259961882',
  message,
  lang = 'es',
  position = 'bottom-right',
  showText = true
}: WhatsAppButtonProps) {
  const [isPulsing, setIsPulsing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Pulse animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Get default message based on current page
  const getDefaultMessage = () => {
    if (message) return message;
    
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      
      if (path.includes('/software-a-la-medida')) {
        return lang === 'es'
          ? 'Hola GDS, me interesa el desarrollo de software a la medida desde Q2,500/mes'
          : 'Hi GDS, I am interested in custom software development from Q2,500/month';
      }
      if (path.includes('/pricing')) {
        return lang === 'es' 
          ? 'Hola, quiero una cotización personalizada de GDS ONE'
          : 'Hi, I want a personalized quote for GDS ONE';
      }
      if (path.includes('/compare')) {
        return lang === 'es'
          ? 'Hola, quiero comparar GDS ONE con otros ERP'
          : 'Hi, I want to compare GDS ONE with other ERPs';
      }
      if (path.includes('/demo')) {
        return lang === 'es'
          ? 'Hola, quiero agendar una demo de GDS ONE'
          : 'Hi, I want to schedule a demo of GDS ONE';
      }
      if (path.includes('/contact')) {
        return lang === 'es'
          ? 'Hola, necesito más información sobre GDS ONE'
          : 'Hi, I need more information about GDS ONE';
      }
    }
    
    return lang === 'es'
      ? 'Hola, quiero conocer más sobre GDS ONE'
      : 'Hi, I want to know more about GDS ONE';
  };

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(getDefaultMessage());
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    // Picked up by the site's analytics as a WhatsApp conversion
    window.dispatchEvent(new CustomEvent('gds:whatsapp-click', { detail: { link_url: whatsappUrl } }));
    window.open(whatsappUrl, '_blank');
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  const content = {
    es: {
      text: 'Respuesta en 5 min',
      tooltip: 'Habla con un experto'
    },
    en: {
      text: 'Reply in 5 min',
      tooltip: 'Talk to an expert'
    }
  };

  const t = content[lang];

  return (
    <div className={`fixed ${positionClasses[position]} z-50 group`}>
      {/* Tooltip */}
      {isHovered && !showText && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap animate-fade-in">
          {t.tooltip}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-full
          shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
          ${isPulsing ? 'animate-pulse' : ''}
        `}
        aria-label="WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Text (optional) */}
        {showText && (
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold leading-tight">{t.text}</span>
            <span className="text-xs opacity-90">⚡ {lang === 'es' ? 'Disponible ahora' : 'Available now'}</span>
          </div>
        )}

        {/* Pulse rings */}
        {isPulsing && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping animation-delay-150"></span>
          </>
        )}
      </button>
    </div>
  );
}

// Export for convenience
export default WhatsAppButton;
