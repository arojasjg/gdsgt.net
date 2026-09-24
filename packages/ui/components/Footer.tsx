/**
 * Footer Component
 * Company information, address, and links
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export interface FooterProps {
  lang?: 'es' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang = 'es' }) => {
  const isSpanish = lang === 'es';
  
  // URLs for cross-app navigation
  const [urls, setUrls] = useState({
    www: `https://www.gdsgt.net/${lang}`,
    erp: `https://erp.grupogds.co/${lang}`,
    resources: `https://resources.gdsgt.net/${lang}`,
    services: `https://services.gdsgt.net/${lang}`
  });
  
  // Detect environment on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      
      // Local development
      if (hostname === 'localhost' || hostname === '127.0.0.1') {
        setUrls({
          www: `http://localhost:9000/${lang}`,
          erp: `http://localhost:9001/${lang}`,
          resources: `http://localhost:9003/${lang}`,
          services: `http://localhost:9002/${lang}`
        });
      }
    }
  }, [lang]);
  
  const content = {
    es: {
      company: 'GDS ONE',
      tagline: 'Sistema ERP Integral para Empresas en Latinoamérica',
      region: 'Latinoamérica',
      headquarters: 'Oficina Principal',
      addressLine1: 'K.M. 15.5 CARR. A EL SALVADOR',
      addressLine2: 'PLAZA CONDADO CONCEPCIÓN',
      addressLine3: '5TO. NIVEL OF. 5F-1 Y 5F-2',
      addressLine4: 'Guatemala, Guatemala',
      regionalPresence: 'Presencia Regional',
      countries: 'Operamos en toda Latinoamérica',
      contact: 'Contacto',
      phone: 'Teléfono',
      phoneNumber: '+502 2354-5437',
      phoneNote: '(Guatemala)',
      whatsapp: 'WhatsApp',
      whatsappNumber: '+502 5996 1882',
      whatsappNote: 'Atención en toda Latinoamérica',
      email: 'Email',
      emailAddress: 'info@grupogds.co',
      quickLinks: 'Enlaces Rápidos',
      products: 'Productos',
      resources: 'Recursos',
      companySection: 'Empresa',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      copyright: '© 2026 GDS ONE. Todos los derechos reservados. Latinoamérica.',
    },
    en: {
      company: 'GDS ONE',
      tagline: 'Comprehensive ERP System for Latin American Businesses',
      region: 'Latin America',
      headquarters: 'Headquarters',
      addressLine1: 'K.M. 15.5 CARR. A EL SALVADOR',
      addressLine2: 'PLAZA CONDADO CONCEPCIÓN',
      addressLine3: '5TH FLOOR OF. 5F-1 Y 5F-2',
      addressLine4: 'Guatemala, Guatemala',
      regionalPresence: 'Regional Presence',
      countries: 'Operating across Latin America',
      contact: 'Contact',
      phone: 'Phone',
      phoneNumber: '+502 2354-5437',
      phoneNote: '(Guatemala)',
      whatsapp: 'WhatsApp',
      whatsappNumber: '+502 5996 1882',
      whatsappNote: 'Service across Latin America',
      email: 'Email',
      emailAddress: 'info@grupogds.co',
      quickLinks: 'Quick Links',
      products: 'Products',
      resources: 'Resources',
      companySection: 'Company',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      copyright: '© 2026 GDS ONE. All rights reserved. Latin America.',
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{t.company}</h3>
            <p className="text-gray-400 mb-4">{t.tagline}</p>
            
            {/* Regional Presence */}
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🌎</span> {t.regionalPresence}
              </h4>
              <p className="text-sm text-gray-400 mb-3">{t.countries}</p>
            </div>
            
            {/* Headquarters */}
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">{t.headquarters}</h4>
              <address className="not-italic text-sm text-gray-400 leading-relaxed">
                {t.addressLine1}<br />
                {t.addressLine2}<br />
                {t.addressLine3}<br />
                {t.addressLine4}
              </address>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <div>
                <div className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <span>📞</span> {t.phone}
                </div>
                <a 
                  href={`tel:${t.phoneNumber.replace(/\s/g, '')}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors block"
                >
                  {t.phoneNumber}
                </a>
                <span className="text-xs text-gray-500">{t.phoneNote}</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <span>💬</span> {t.whatsapp}
                </div>
                <a 
                  href={`https://wa.me/${t.whatsappNumber.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors inline-flex items-center gap-1"
                >
                  {t.whatsappNumber}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <div className="text-xs text-gray-500 mt-1">{t.whatsappNote}</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm mb-1">{t.email}</div>
                <a 
                  href={`mailto:${t.emailAddress}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {t.emailAddress}
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links - ERP App */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href={urls.erp} className="hover:text-white transition-colors">
                  {isSpanish ? 'GDS ONE ERP' : 'GDS ONE ERP'}
                </a>
              </li>
              <li>
                <a href={`${urls.erp}/ia`} className="hover:text-white transition-colors flex items-center gap-1">
                  {isSpanish ? 'GDS AI Assistant' : 'GDS AI Assistant'}
                  <span className="text-xs bg-pink-500 text-white px-1.5 py-0.5 rounded">NUEVO</span>
                </a>
              </li>
              <li>
                <a href={`${urls.erp}/capabilities`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Capacidades' : 'Capabilities'}
                </a>
              </li>
              <li>
                <a href={`${urls.erp}/industries`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Industrias' : 'Industries'}
                </a>
              </li>
              <li>
                <a href={`${urls.www}/software-a-la-medida`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Software y apps a la medida' : 'Custom software & apps'}
                </a>
              </li>
              <li>
                <a href={`${urls.erp}/pricing`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Precios' : 'Pricing'}
                </a>
              </li>
              <li>
                <a href={`${urls.erp}/calculadora-roi`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Calculadora ROI' : 'ROI Calculator'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources - WWW & Resources Apps */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.resources}</h3>
            <ul className="space-y-2">
              <li>
                <a href={`${urls.www}/blog`} className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href={`${urls.resources}/guides`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Guías' : 'Guides'}
                </a>
              </li>
              <li>
                <a href={`${urls.www}/case-studies`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Casos de Éxito' : 'Case Studies'}
                </a>
              </li>
              <li>
                <a href={`${urls.erp}/demo`} className="hover:text-white transition-colors">
                  {isSpanish ? 'Solicitar Demo' : 'Request Demo'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">{t.copyright}</p>
            <div className="flex gap-6 text-sm">
              <a href={`${urls.www}/privacy`} className="hover:text-white transition-colors">
                {t.privacy}
              </a>
              <a href={`${urls.www}/terms`} className="hover:text-white transition-colors">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
