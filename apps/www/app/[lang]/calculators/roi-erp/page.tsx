/**
 * ROI Calculator Page: ERP Implementation
 * 
 * Interactive calculator to estimate ROI from ERP
 */

'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { HeroSection, CTASection } from '@gds/ui/layouts';
import { Button, Card, Input, Select } from '@gds/ui';
import { track } from '@gds/analytics';
import { calculateROI, formatCurrency, formatPercentage, type ROIInputs, type ROIResults } from '@gds/calculators';

export default function ROICalculatorPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const isSpanish = lang === 'es';
  const [results, setResults] = useState<ROIResults | null>(null);
  const [inputs, setInputs] = useState<ROIInputs>({
    current_annual_revenue: 0,
    employees: 0,
    inventory_reduction_percentage: 20,
    time_savings_percentage: 30,
    error_reduction_percentage: 80,
    revenue_increase_percentage: 15,
    current_inventory_holding_cost: 0,
    current_labor_cost_finance: 0,
    current_error_cost: 0,
    erp_year_1_cost: 0,
    erp_year_2_onwards_cost: 0
  });
  
  const content = {
    es: {
      hero: {
        title: 'Calculadora ROI: Implementación ERP',
        description: 'Estima el retorno de inversión de implementar un ERP en tu empresa. Calcula beneficios tangibles en inventario, productividad y reducción de errores.'
      },
      form: {
        title: '📈 Calcula tu ROI',
        description: 'Ingresa los datos de tu empresa:',
        annual_revenue: 'Ingresos Anuales',
        employees: 'Número de Empleados',
        inventory_value: 'Valor de Inventario',
        monthly_transactions: 'Transacciones Mensuales',
        current_error_rate: 'Tasa de Error Actual (%)',
        labor_hours_manual: 'Horas/Mes en Trabajo Manual',
        calculate: 'Calcular ROI'
      },
      results: {
        title: '🎯 Resultados de tu ROI',
        annual_benefits: 'Beneficios Anuales Estimados',
        inventory_savings: 'Ahorro en Inventario',
        labor_savings: 'Ahorro en Productividad',
        error_reduction: 'Reducción de Errores',
        revenue_increase: 'Aumento en Ingresos',
        roi_year_1: 'ROI Año 1',
        roi_year_2: 'ROI Año 2',
        roi_year_3: 'ROI Año 3',
        payback_period: 'Período de Recuperación'
      },
      benefits: {
        title: 'Beneficios Clave de un ERP',
        items: [
          {
            icon: '📦',
            title: 'Optimización de Inventario',
            description: 'Reduce inventario en 15-25% manteniendo niveles de servicio. Libera capital de trabajo.'
          },
          {
            icon: '⚡',
            title: 'Productividad',
            description: 'Automatiza tareas repetitivas. Tu equipo se enfoca en decisiones estratégicas, no en data entry.'
          },
          {
            icon: '✅',
            title: 'Reducción de Errores',
            description: 'Elimina 80% de errores manuales. Menos devoluciones, menos retrabajos, menos costos.'
          },
          {
            icon: '💹',
            title: 'Crecimiento',
            description: 'Empresas con ERP crecen 15-20% más rápido. Mejor visibilidad = mejores decisiones.'
          }
        ]
      },
      cta: {
        title: '¿Listo para ver tu ROI real?',
        description: 'Agenda una demo y te mostraremos casos reales de empresas como la tuya que ya lograron estos resultados.',
        button: 'Ver Casos de Éxito'
      }
    },
    en: {
      hero: {
        title: 'ROI Calculator: ERP Implementation',
        description: 'Estimate the return on investment of implementing an ERP in your company. Calculate tangible benefits in inventory, productivity, and error reduction.'
      },
      form: {
        title: '📈 Calculate Your ROI',
        description: 'Enter your company data:',
        annual_revenue: 'Annual Revenue',
        employees: 'Number of Employees',
        inventory_value: 'Inventory Value',
        monthly_transactions: 'Monthly Transactions',
        current_error_rate: 'Current Error Rate (%)',
        labor_hours_manual: 'Hours/Month in Manual Work',
        calculate: 'Calculate ROI'
      },
      results: {
        title: '🎯 Your ROI Results',
        annual_benefits: 'Estimated Annual Benefits',
        inventory_savings: 'Inventory Savings',
        labor_savings: 'Productivity Savings',
        error_reduction: 'Error Reduction',
        revenue_increase: 'Revenue Increase',
        roi_year_1: 'ROI Year 1',
        roi_year_2: 'ROI Year 2',
        roi_year_3: 'ROI Year 3',
        payback_period: 'Payback Period'
      },
      benefits: {
        title: 'Key ERP Benefits',
        items: [
          {
            icon: '📦',
            title: 'Inventory Optimization',
            description: 'Reduce inventory by 15-25% while maintaining service levels. Free up working capital.'
          },
          {
            icon: '⚡',
            title: 'Productivity',
            description: 'Automate repetitive tasks. Your team focuses on strategic decisions, not data entry.'
          },
          {
            icon: '✅',
            title: 'Error Reduction',
            description: 'Eliminate 80% of manual errors. Fewer returns, less rework, lower costs.'
          },
          {
            icon: '💹',
            title: 'Growth',
            description: 'Companies with ERP grow 15-20% faster. Better visibility = better decisions.'
          }
        ]
      },
      cta: {
        title: 'Ready to see your real ROI?',
        description: 'Schedule a demo and we\'ll show you real cases of companies like yours that already achieved these results.',
        button: 'See Success Stories'
      }
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  const handleCalculate = () => {
    const calculatedResults = calculateROI(inputs);
    setResults(calculatedResults);
    
    // Track calculation
    track('roi_calculated', {
      annual_revenue: inputs.current_annual_revenue,
      employees: inputs.employees,
      roi_year_1: calculatedResults.roi.year_1_roi_percentage,
      payback_months: calculatedResults.roi.payback_months,
      lang: lang
    });
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title={t.hero.title}
        description={t.hero.description}
      />
      
      {/* Calculator Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.form.title}</h2>
            <p className="text-xl text-gray-600">{t.form.description}</p>
          </div>
          
          <Card variant="default" className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="number"
                label={t.form.annual_revenue}
                placeholder="1000000"
                value={inputs.current_annual_revenue || ''}
                onChange={(e) => setInputs({ ...inputs, current_annual_revenue: Number(e.target.value) })}
              />
              
              <Input
                type="number"
                label={t.form.employees}
                placeholder="50"
                value={inputs.employees || ''}
                onChange={(e) => setInputs({ ...inputs, employees: Number(e.target.value) })}
              />
              
              <Input
                type="number"
                label="Costo Anual de Inventario"
                placeholder="100000"
                value={inputs.current_inventory_holding_cost || ''}
                onChange={(e) => setInputs({ ...inputs, current_inventory_holding_cost: Number(e.target.value) })}
              />
              
              <Input
                type="number"
                label="Costo Anual de Trabajo Manual"
                placeholder="50000"
                value={inputs.current_labor_cost_finance || ''}
                onChange={(e) => setInputs({ ...inputs, current_labor_cost_finance: Number(e.target.value) })}
              />
              
              <Input
                type="number"
                label="Costo Anual de Errores"
                placeholder="20000"
                value={inputs.current_error_cost || ''}
                onChange={(e) => setInputs({ ...inputs, current_error_cost: Number(e.target.value) })}
              />
              
              <Input
                type="number"
                label="Costo ERP Año 1"
                placeholder="50000"
                value={inputs.erp_year_1_cost || ''}
                onChange={(e) => setInputs({ ...inputs, erp_year_1_cost: Number(e.target.value) })}
              />
            </div>
            
            <div className="mt-8">
              <Button
                onClick={handleCalculate}
                size="lg"
                variant="primary"
                className="w-full"
              >
                {t.form.calculate}
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Results */}
      {results && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t.results.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card variant="hover" className="text-center">
                <div className="text-sm text-gray-600 mb-2">{t.results.inventory_savings}</div>
                <div className="text-3xl font-bold text-green-600">
                  {formatCurrency(results.annual_benefits.inventory_savings)}
                </div>
              </Card>
              
              <Card variant="hover" className="text-center">
                <div className="text-sm text-gray-600 mb-2">{t.results.labor_savings}</div>
                <div className="text-3xl font-bold text-green-600">
                  {formatCurrency(results.annual_benefits.labor_savings)}
                </div>
              </Card>
              
              <Card variant="hover" className="text-center">
                <div className="text-sm text-gray-600 mb-2">{t.results.error_reduction}</div>
                <div className="text-3xl font-bold text-green-600">
                  {formatCurrency(results.annual_benefits.error_savings)}
                </div>
              </Card>
              
              <Card variant="hover" className="text-center">
                <div className="text-sm text-gray-600 mb-2">{t.results.revenue_increase}</div>
                <div className="text-3xl font-bold text-green-600">
                  {formatCurrency(results.annual_benefits.revenue_increase)}
                </div>
              </Card>
            </div>
            
            <Card variant="default" className="bg-blue-50 border-2 border-blue-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-700 mb-2">{t.results.roi_year_1}</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPercentage(results.roi.year_1_roi_percentage)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-700 mb-2">{t.results.roi_year_2}</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPercentage(results.roi.year_2_roi_percentage)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-700 mb-2">{t.results.roi_year_3}</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPercentage(results.roi.year_3_roi_percentage)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-700 mb-2">{t.results.payback_period}</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {results.roi.payback_months} {isSpanish ? 'meses' : 'months'}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}
      
      {/* Benefits */}
      <section className="py-16 bg-gray-50">
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
      
      {/* CTA */}
      <CTASection
        title={t.cta.title}
        description={t.cta.description}
        cta={
          <Link href={`/${lang}/case-studies`}>
            <Button size="lg" variant="primary">
              {t.cta.button}
            </Button>
          </Link>
        }
      />
    </div>
  );
}
