/**
 * Partners Page
 * 
 * Partner program overview and application
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@gds/ui/layouts';
import { Button, Card, Badge } from '@gds/ui';
import { generateMetadata as generateSEOMetadata } from '@gds/seo';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return generateSEOMetadata({
    title: params.lang === 'es' 
      ? 'Programa de Partners GDS | Crece con Nosotros'
      : 'GDS Partner Program | Grow with Us',
    description: params.lang === 'es'
      ? 'Únete al programa de partners de GDS. Comisiones competitivas, materiales de co-marketing, capacitación técnica y soporte dedicado.'
      : 'Join the GDS partner program. Competitive commissions, co-marketing materials, technical training, and dedicated support.'
  }, {
    name: 'GDS',
    domain: 'www.gdsgt.net',
    description: 'GDS - Sistema ERP, BI, CRM, AI, Data, Integrations, Security',
    locales: ['es', 'en'],
    defaultLocale: 'es'
  }, params.lang as 'es' | 'en', `/partners`);
}

export default function PartnersPage({ params }: { params: { lang: string } }) {
  const isSpanish = params.lang === 'es';
  const logoUrl = 'https://gdsgt.net/uploads/7691933/400_filter_nobg_64155247def00.png';
  
  const content = {
    es: {
      hero: {
        title: 'Programa de Partners GDS',
        description: 'Únete a nuestro ecosistema de partners y ofrece soluciones ERP+BI+CRM a tus clientes. Crece tu negocio con GDS.',
        cta: 'Aplicar Ahora'
      },
      benefits: {
        title: 'Beneficios del Programa',
        items: [
          {
            icon: '💰',
            title: 'Comisiones Competitivas',
            description: 'Gana comisiones recurrentes por cada cliente que traigas. Modelo transparente y predecible.'
          },
          {
            icon: '🎯',
            title: 'Materiales de Co-Marketing',
            description: 'Acceso a presentaciones, casos de éxito, plantillas de email, y contenido para redes sociales.'
          },
          {
            icon: '🎓',
            title: 'Capacitación Técnica',
            description: 'Entrenamientos regulares sobre producto, implementación, y mejores prácticas.'
          },
          {
            icon: '🤝',
            title: 'Soporte Dedicado',
            description: 'Account manager dedicado y soporte técnico prioritario para tus clientes.'
          },
          {
            icon: '📊',
            title: 'Portal de Partners',
            description: 'Dashboard para trackear leads, comisiones, y performance en tiempo real.'
          },
          {
            icon: '🚀',
            title: 'Leads Compartidos',
            description: 'Recibe leads calificados en tu región cuando tengamos más demanda que capacidad.'
          }
        ]
      },
      types: {
        title: 'Tipos de Partners',
        items: [
          {
            type: 'Reseller',
            badge: 'Más Popular',
            description: 'Vende licencias de GDS a tus clientes',
            commission: '15%',
            requirements: [
              'Experiencia en venta de software B2B',
              'Cartera de clientes potenciales',
              'Capacidad de soporte básico'
            ]
          },
          {
            type: 'Implementador',
            badge: 'Alto Valor',
            description: 'Implementa GDS para clientes finales',
            commission: '10%',
            requirements: [
              'Experiencia en implementación ERP',
              'Equipo técnico certificado',
              'Capacidad de proyectos'
            ]
          },
          {
            type: 'Referral',
            badge: 'Fácil Inicio',
            description: 'Refiere clientes y gana comisión',
            commission: '5%',
            requirements: [
              'Red de contactos en industrias objetivo',
              'Credibilidad en el mercado',
              'Ninguna inversión requerida'
            ]
          }
        ]
      },
      process: {
        title: 'Proceso de Aplicación',
        steps: [
          {
            number: '1',
            title: 'Aplica',
            description: 'Completa el formulario de aplicación con información de tu empresa.'
          },
          {
            number: '2',
            title: 'Evaluación',
            description: 'Revisamos tu aplicación y agendamos una llamada de evaluación.'
          },
          {
            number: '3',
            title: 'Onboarding',
            description: 'Firma el acuerdo de partner y recibe capacitación inicial.'
          },
          {
            number: '4',
            title: 'Activa',
            description: 'Accede al portal de partners y comienza a generar ingresos.'
          }
        ]
      },
      cta: {
        title: '¿Listo para Crecer con GDS?',
        description: 'Únete a nuestro programa de partners y comienza a generar ingresos recurrentes.',
        button: 'Aplicar al Programa'
      }
    },
    en: {
      hero: {
        title: 'GDS Partner Program',
        description: 'Join our partner ecosystem and offer ERP+BI+CRM solutions to your clients. Grow your business with GDS.',
        cta: 'Apply Now'
      },
      benefits: {
        title: 'Program Benefits',
        items: [
          {
            icon: '💰',
            title: 'Competitive Commissions',
            description: 'Earn recurring commissions for every client you bring. Transparent and predictable model.'
          },
          {
            icon: '🎯',
            title: 'Co-Marketing Materials',
            description: 'Access to presentations, case studies, email templates, and social media content.'
          },
          {
            icon: '🎓',
            title: 'Technical Training',
            description: 'Regular training on product, implementation, and best practices.'
          },
          {
            icon: '🤝',
            title: 'Dedicated Support',
            description: 'Dedicated account manager and priority technical support for your clients.'
          },
          {
            icon: '📊',
            title: 'Partner Portal',
            description: 'Dashboard to track leads, commissions, and performance in real-time.'
          },
          {
            icon: '🚀',
            title: 'Shared Leads',
            description: 'Receive qualified leads in your region when we have more demand than capacity.'
          }
        ]
      },
      types: {
        title: 'Partner Types',
        items: [
          {
            type: 'Reseller',
            badge: 'Most Popular',
            description: 'Sell GDS licenses to your clients',
            commission: '15%',
            requirements: [
              'Experience in B2B software sales',
              'Portfolio of potential clients',
              'Basic support capability'
            ]
          },
          {
            type: 'Implementer',
            badge: 'High Value',
            description: 'Implement GDS for end clients',
            commission: '10%',
            requirements: [
              'ERP implementation experience',
              'Certified technical team',
              'Project capacity'
            ]
          },
          {
            type: 'Referral',
            badge: 'Easy Start',
            description: 'Refer clients and earn commission',
            commission: '5%',
            requirements: [
              'Network of contacts in target industries',
              'Market credibility',
              'No investment required'
            ]
          }
        ]
      },
      process: {
        title: 'Application Process',
        steps: [
          {
            number: '1',
            title: 'Apply',
            description: 'Complete the application form with your company information.'
          },
          {
            number: '2',
            title: 'Evaluation',
            description: 'We review your application and schedule an evaluation call.'
          },
          {
            number: '3',
            title: 'Onboarding',
            description: 'Sign the partner agreement and receive initial training.'
          },
          {
            number: '4',
            title: 'Activate',
            description: 'Access the partner portal and start generating revenue.'
          }
        ]
      },
      cta: {
        title: 'Ready to Grow with GDS?',
        description: 'Join our partner program and start generating recurring revenue.',
        button: 'Apply to Program'
      }
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title={t.hero.title}
        description={t.hero.description}
        cta={
          <div className="flex flex-col items-center gap-6">
            <div className="text-8xl mb-4 animate-fade-in">
              🤝
            </div>
            <Link href={`/${params.lang}/partners/apply`}>
              <Button size="lg">
                {t.hero.cta}
              </Button>
            </Link>
          </div>
        }
      />
      
      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">{t.benefits.title}</h2>
          <div className="flex justify-center mb-12 text-6xl opacity-50">
            🏢
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.items.map((benefit, idx) => (
              <Card key={idx} variant="default" className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partner Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.types.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.types.items.map((type, idx) => (
              <Card key={idx} variant="hover" className="p-6 relative">
                {type.badge && (
                  <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {type.badge}
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2 mt-2">{type.type}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="mb-4 p-4 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700 block mb-1">
                    {isSpanish ? 'Comisión:' : 'Commission:'}
                  </span>
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-primary-600">{type.commission}</span>
                  <span className="text-sm text-gray-600 block mt-1">
                    {isSpanish ? 'Comisión recurrente' : 'Recurring commission'}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700 block mb-2">
                    {isSpanish ? 'Requisitos:' : 'Requirements:'}
                  </span>
                  <ul className="space-y-1">
                    {type.requirements.map((req, reqIdx) => (
                      <li key={reqIdx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.process.title}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
              
              <div className="space-y-8">
                {t.process.steps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start">
                    {/* Number circle */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold z-10">
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <Link href={`/${params.lang}/partners/apply`}>
            <Button variant="secondary" size="lg">
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
