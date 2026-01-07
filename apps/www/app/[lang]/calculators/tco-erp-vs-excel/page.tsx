/**
 * TCO Calculator Page: ERP vs Excel
 * 
 * Interactive calculator to show cost comparison
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HeroSection, CTASection } from '@gds/ui/layouts';
import { TCOCalculator, Button, Card } from '@gds/ui';
import { track } from '@gds/analytics';
import { calculateTCO, formatCurrency, formatPercentage, type TCOInputs, type TCOResults } from '@gds/calculators';

export default function TCOCalculatorPage({ params }: { params: { lang: string } }) {
  const isSpanish = params.lang === 'es';
  const [results, setResults] = useState<TCOResults | null>(null);
  
  const content = {
    es: {
      hero: {
        title: 'Calculadora TCO: ERP vs Excel',
        description: 'Descubre cuánto te está costando realmente usar Excel para gestionar tu empresa. Calcula el ROI de implementar un ERP en minutos.'
      },
      calculator: {
        title: '📊 Calcula tu TCO',
        description: 'Ingresa los datos de tu empresa para ver una comparación detallada de costos.'
      },
      benefits: {
        title: '¿Por qué calcular el TCO?',
        items: [
          {
            icon: '💰',
            title: 'Costos Ocultos',
            description: 'Excel tiene costos ocultos: tiempo manual, errores, oportunidades perdidas. Un ERP los elimina.'
          },
          {
            icon: '⏱️',
            title: 'Tiempo es Dinero',
            description: 'El tiempo que tu equipo gasta en tareas manuales podría usarse en análisis y toma de decisiones.'
          },
          {
            icon: '📈',
            title: 'ROI Comprobado',
            description: 'Empresas similares recuperan su inversión en ERP en 12-18 meses. ¿Cuánto tardarías tú?'
          },
          {
            icon: '🎯',
            title: 'Decisión Informada',
            description: 'Toma una decisión basada en números reales, no en intuición. Compara manzanas con manzanas.'
          }
        ]
      },
      methodology: {
        title: '🔬 Nuestra Metodología',
        description: 'Este cálculo se basa en:',
        items: [
          'Promedios de la industria de ERP para SMB (fuentes: Gartner, Forrester, Panorama Consulting)',
          'Estudios de tiempo y movimiento en procesos contables y administrativos',
          'Tasas de error documentadas en procesos manuales vs automatizados',
          'Costos de oportunidad basados en salarios promedio del mercado',
          'Experiencia con más de 100 implementaciones de ERP en LATAM'
        ]
      },
      cta: {
        title: '¿Quieres ver cómo funciona en tu empresa?',
        description: 'Agenda una demo personalizada y te mostraremos el sistema funcionando con datos de ejemplo de tu industria.',
        button: 'Agendar Demo Gratis'
      }
    },
    en: {
      hero: {
        title: 'TCO Calculator: ERP vs Excel',
        description: 'Discover how much using Excel to manage your business is really costing you. Calculate the ROI of implementing an ERP in minutes.'
      },
      calculator: {
        title: '📊 Calculate Your TCO',
        description: 'Enter your company data to see a detailed cost comparison.'
      },
      benefits: {
        title: 'Why Calculate TCO?',
        items: [
          {
            icon: '💰',
            title: 'Hidden Costs',
            description: 'Excel has hidden costs: manual time, errors, lost opportunities. An ERP eliminates them.'
          },
          {
            icon: '⏱️',
            title: 'Time is Money',
            description: 'The time your team spends on manual tasks could be used for analysis and decision-making.'
          },
          {
            icon: '📈',
            title: 'Proven ROI',
            description: 'Similar companies recover their ERP investment in 12-18 months. How long would it take you?'
          },
          {
            icon: '🎯',
            title: 'Informed Decision',
            description: 'Make a decision based on real numbers, not intuition. Compare apples to apples.'
          }
        ]
      },
      methodology: {
        title: '🔬 Our Methodology',
        description: 'This calculation is based on:',
        items: [
          'SMB ERP industry averages (sources: Gartner, Forrester, Panorama Consulting)',
          'Time and motion studies in accounting and administrative processes',
          'Documented error rates in manual vs automated processes',
          'Opportunity costs based on average market salaries',
          'Experience with over 100 ERP implementations in LATAM'
        ]
      },
      cta: {
        title: 'Want to see how it works in your company?',
        description: 'Schedule a personalized demo and we\'ll show you the system working with sample data from your industry.',
        button: 'Schedule Free Demo'
      }
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  const handleCalculate = (inputs: TCOInputs) => {
    const calculatedResults = calculateTCO(inputs);
    setResults(calculatedResults);
    
    // Track calculation
    track('tco_calculated', {
      employees: inputs.employees,
      transactions: inputs.monthly_transactions,
      breakeven_months: calculatedResults.breakeven_months,
      five_year_savings: calculatedResults.five_year_savings,
      lang: params.lang
    });
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title={t.hero.title}
        description={t.hero.description}
      />
      
      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.calculator.title}</h2>
            <p className="text-xl text-gray-600">{t.calculator.description}</p>
          </div>
          
          <TCOCalculator onCalculate={handleCalculate} />
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.benefits.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((item, idx) => (
              <Card key={idx} variant="hover" className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">{t.methodology.title}</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">{t.methodology.description}</p>
          
          <Card variant="default" className="bg-white">
            <ul className="space-y-3">
              {t.methodology.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
      
      {/* CTA */}
      <CTASection
        title={t.cta.title}
        description={t.cta.description}
        cta={
          <Link href={`/${params.lang}/demo`}>
            <Button size="lg" variant="primary">
              {t.cta.button}
            </Button>
          </Link>
        }
      />
    </div>
  );
}
