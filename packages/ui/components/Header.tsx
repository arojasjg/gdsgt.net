/**
 * Header Component
 * 
 * Main navigation header with GDS ONE logo
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export interface HeaderProps {
  lang: 'es' | 'en';
}

export function Header({ lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [urls, setUrls] = useState({
    home: `https://www.gdsgt.net/${lang}`,
    erp: `https://erp.grupogds.co/${lang}`,
    resources: `https://resources.gdsgt.net/${lang}`,
    services: `https://services.gdsgt.net/${lang}`,
    customSoftware: `https://www.gdsgt.net/${lang}/software-a-la-medida`,
    contact: `https://erp.grupogds.co/${lang}/contact`,
    demo: `https://erp.grupogds.co/${lang}/demo`
  });
  
  // Detectar entorno en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      
      // Desarrollo local
      if (hostname === 'localhost' || hostname === '127.0.0.1') {
        setUrls({
          home: `http://localhost:9000/${lang}`,
          erp: `http://localhost:9001/${lang}`,
          resources: `http://localhost:9003/${lang}`,  // CORREGIDO: 9003 (antes 9002)
          services: `http://localhost:9002/${lang}`,   // CORREGIDO: 9002 (antes 9003)
          customSoftware: `http://localhost:9000/${lang}/software-a-la-medida`,
          contact: `http://localhost:9001/${lang}/contact`,
          demo: `http://localhost:9001/${lang}/demo`
        });
      }
      // Producción usa las URLs por defecto ya configuradas
    }
  }, [lang]);
  
  const content = {
    es: {
      home: 'Inicio',
      products: 'Productos',
      solutions: 'Soluciones',
      resources: 'Recursos',
      services: 'Servicios',
      customSoftware: 'Software a la medida',
      pricing: 'Precios',
      contact: 'Contacto',
      demo: 'Solicitar Demo',
      menu: 'Menú'
    },
    en: {
      home: 'Home',
      products: 'Products',
      solutions: 'Solutions',
      resources: 'Resources',
      services: 'Services',
      customSoftware: 'Custom Software',
      pricing: 'Pricing',
      contact: 'Contact',
      demo: 'Request Demo',
      menu: 'Menu'
    }
  };
  
  const t = content[lang];
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href={urls.home} className="flex items-center">
            <Image
              src="/logo.png"
              alt="GDS ONE - Sistema ERP Modular para PyMEs en Latinoamérica"
              width={180}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href={urls.home}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t.home}
            </a>
            <a 
              href={urls.erp}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t.products}
            </a>
            <a 
              href={urls.resources}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t.resources}
            </a>
            <a 
              href={urls.services}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t.services}
            </a>
            <a 
              href={urls.customSoftware}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t.customSoftware}
            </a>
            <a 
              href={urls.contact}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {t.contact}
            </a>
            <a 
              href={urls.demo}
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              {t.demo}
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            aria-label={t.menu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href={urls.home}
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.home}
              </a>
              <a 
                href={urls.erp}
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.products}
              </a>
              <a 
                href={urls.resources}
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.resources}
              </a>
              <a 
                href={urls.services}
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.services}
              </a>
              <a 
                href={urls.customSoftware}
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.customSoftware}
              </a>
              <a 
                href={urls.contact}
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </a>
              <a 
                href={urls.demo}
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.demo}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
