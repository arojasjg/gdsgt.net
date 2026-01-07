/**
 * 404 Not Found Page - WWW App
 * 
 * Custom 404 error page with helpful navigation
 */

import Link from 'next/link';
import { Button } from '@gds/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 opacity-20">404</div>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Página No Encontrada
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Qué estás buscando?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/es">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <div className="text-3xl mb-2">🏠</div>
                <div className="font-semibold text-gray-900">Inicio</div>
                <div className="text-sm text-gray-600">Volver a la página principal</div>
              </div>
            </Link>

            <a href="http://localhost:9001/es">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <div className="text-3xl mb-2">💼</div>
                <div className="font-semibold text-gray-900">GDS ONE ERP</div>
                <div className="text-sm text-gray-600">Ver nuestro producto</div>
              </div>
            </a>

            <Link href="/es/blog">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <div className="text-3xl mb-2">📝</div>
                <div className="font-semibold text-gray-900">Blog</div>
                <div className="text-sm text-gray-600">Artículos y guías</div>
              </div>
            </Link>

            <Link href="/es/case-studies">
              <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-gray-900">Casos de Éxito</div>
                <div className="text-sm text-gray-600">Historias de clientes</div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/es">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Volver al Inicio
            </Button>
          </Link>
          <a href="http://localhost:9001/es/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contactar Soporte
            </Button>
          </a>
        </div>

        {/* Help Text */}
        <p className="text-sm text-gray-500 mt-8">
          Si crees que esto es un error, por favor{' '}
          <a href="http://localhost:9001/es/contact" className="text-blue-600 hover:underline">
            contáctanos
          </a>
        </p>
      </div>
    </div>
  );
}
