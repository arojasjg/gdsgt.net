'use client';

import React, { useState, useEffect } from 'react';

export interface ROICalculatorProps {
  lang?: 'es' | 'en';
  industry?: 'retail' | 'manufacturing' | 'services' | 'distribution' | 'general';
}

interface CalculatorInputs {
  employees: number;
  monthlyRevenue: number;
  currentSoftwareCost: number;
  hoursPerWeekManual: number;
}

interface ROIResults {
  timeSaved: number;
  costSaved: number;
  roiPercentage: number;
  paybackMonths: number;
  productivityGain: number;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ 
  lang = 'es',
  industry = 'general'
}) => {
  const isSpanish = lang === 'es';

  const content = {
    es: {
      title: '🧮 Calculadora de ROI',
      subtitle: 'Descubre cuánto puedes ahorrar con GDS ONE',
      employees: 'Número de empleados',
      monthlyRevenue: 'Facturación mensual ($)',
      currentCost: 'Costo actual de software ($/mes)',
      manualHours: 'Horas semanales en procesos manuales',
      calculate: 'Calcular ROI',
      results: {
        title: '📊 Tus Resultados',
        timeSaved: 'Tiempo ahorrado por semana',
        costSaved: 'Ahorro anual',
        roi: 'ROI en el primer año',
        payback: 'Recuperación de inversión',
        productivity: 'Aumento de productividad',
        hours: 'horas',
        months: 'meses',
        cta: 'Solicitar Demo Personalizada',
        disclaimer: '* Cálculos basados en promedios de la industria y casos de éxito reales'
      },
      industries: {
        retail: 'Retail',
        manufacturing: 'Manufactura',
        services: 'Servicios',
        distribution: 'Distribución',
        general: 'General'
      }
    },
    en: {
      title: '🧮 ROI Calculator',
      subtitle: 'Discover how much you can save with GDS ONE',
      employees: 'Number of employees',
      monthlyRevenue: 'Monthly revenue ($)',
      currentCost: 'Current software cost ($/month)',
      manualHours: 'Weekly hours on manual processes',
      calculate: 'Calculate ROI',
      results: {
        title: '📊 Your Results',
        timeSaved: 'Time saved per week',
        costSaved: 'Annual savings',
        roi: 'ROI in first year',
        payback: 'Payback period',
        productivity: 'Productivity increase',
        hours: 'hours',
        months: 'months',
        cta: 'Request Custom Demo',
        disclaimer: '* Calculations based on industry averages and real success stories'
      },
      industries: {
        retail: 'Retail',
        manufacturing: 'Manufacturing',
        services: 'Services',
        distribution: 'Distribution',
        general: 'General'
      }
    }
  };

  const t = isSpanish ? content.es : content.en;

  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 10,
    monthlyRevenue: 15000,
    currentSoftwareCost: 300,
    hoursPerWeekManual: 20
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Industry-specific multipliers (based on analysis)
  const industryMultipliers = {
    retail: { efficiency: 1.3, automation: 1.4 },
    manufacturing: { efficiency: 1.5, automation: 1.6 },
    services: { efficiency: 1.2, automation: 1.3 },
    distribution: { efficiency: 1.4, automation: 1.5 },
    general: { efficiency: 1.25, automation: 1.35 }
  };

  const calculateROI = () => {
    const multiplier = industryMultipliers[industry];
    
    // Time saved (30-50% reduction in manual processes)
    const timeSavedHours = inputs.hoursPerWeekManual * 0.4 * multiplier.automation;
    
    // Cost of manual labor (assuming $7/hour average in Latin America)
    const laborCostPerHour = 7;
    const annualLaborSavings = timeSavedHours * 52 * laborCostPerHour;
    
    // Software cost savings (GDS ONE typically 30-50% cheaper than competitors)
    // New pricing: $5-$12/user/month depending on plan
    const avgPricePerUser = inputs.employees <= 10 ? 5 : inputs.employees <= 50 ? 9 : 12;
    const gdsOneCost = inputs.employees * avgPricePerUser; // $/user/month
    const annualSoftwareSavings = Math.max(0, (inputs.currentSoftwareCost - gdsOneCost) * 12);
    
    // Productivity gains (5-15% revenue increase from better insights)
    const productivityGainPercentage = 8 * multiplier.efficiency;
    const annualProductivityGain = (inputs.monthlyRevenue * 12) * (productivityGainPercentage / 100);
    
    // Total annual savings
    const totalAnnualSavings = annualLaborSavings + annualSoftwareSavings + annualProductivityGain;
    
    // Investment cost (implementation + first year)
    // Fast Start: $99 (basic)
    const implementationCost = inputs.employees <= 10 ? 99 : inputs.employees <= 50 ? 1199 : 2399;
    const firstYearCost = gdsOneCost * 12;
    const totalInvestment = implementationCost + firstYearCost;
    
    // ROI calculations
    const roi = ((totalAnnualSavings - totalInvestment) / totalInvestment) * 100;
    const paybackMonths = (totalInvestment / (totalAnnualSavings / 12));

    setResults({
      timeSaved: Math.round(timeSavedHours * 10) / 10,
      costSaved: Math.round(totalAnnualSavings),
      roiPercentage: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      productivityGain: Math.round(productivityGainPercentage * 10) / 10
    });

    setShowResults(true);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({ ...prev, [field]: numValue }));
    setShowResults(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600">
          {t.subtitle}
        </p>
      </div>

      {/* Calculator Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Employees */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            👥 {t.employees}
          </label>
          <input
            type="number"
            value={inputs.employees}
            onChange={(e) => handleInputChange('employees', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            min="1"
          />
        </div>

        {/* Monthly Revenue */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            💰 {t.monthlyRevenue}
          </label>
          <input
            type="number"
            value={inputs.monthlyRevenue}
            onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            min="0"
            step="1000"
          />
        </div>

        {/* Current Software Cost */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            💳 {t.currentCost}
          </label>
          <input
            type="number"
            value={inputs.currentSoftwareCost}
            onChange={(e) => handleInputChange('currentSoftwareCost', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            min="0"
            step="100"
          />
        </div>

        {/* Manual Hours */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            ⏱️ {t.manualHours}
          </label>
          <input
            type="number"
            value={inputs.hoursPerWeekManual}
            onChange={(e) => handleInputChange('hoursPerWeekManual', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            min="0"
            step="1"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <div className="text-center mb-8">
        <button
          onClick={calculateROI}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          {t.calculate}
        </button>
      </div>

      {/* Results */}
      {showResults && results && (
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-100 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t.results.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Time Saved */}
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {results.timeSaved}
              </div>
              <div className="text-sm font-semibold text-green-700 mb-1">
                {t.results.hours}
              </div>
              <div className="text-xs text-gray-600">
                {t.results.timeSaved}
              </div>
            </div>

            {/* Cost Saved */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {formatCurrency(results.costSaved)}
              </div>
              <div className="text-xs text-gray-600">
                {t.results.costSaved}
              </div>
            </div>

            {/* ROI */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {results.roiPercentage}%
              </div>
              <div className="text-xs text-gray-600">
                {t.results.roi}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Payback Period */}
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {results.paybackMonths}
              </div>
              <div className="text-sm font-semibold text-orange-700 mb-1">
                {t.results.months}
              </div>
              <div className="text-xs text-gray-600">
                {t.results.payback}
              </div>
            </div>

            {/* Productivity Gain */}
            <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
              <div className="text-3xl font-bold text-pink-600 mb-2">
                +{results.productivityGain}%
              </div>
              <div className="text-xs text-gray-600">
                {t.results.productivity}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={`https://wa.me/50259961882?text=${encodeURIComponent(
                isSpanish
                  ? `Hola! Vi mi ROI potencial de ${results.roiPercentage}% y quiero una demo personalizada de GDS ONE`
                  : `Hi! I saw my potential ROI of ${results.roiPercentage}% and want a custom demo of GDS ONE`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.results.cta}
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center mt-6">
            {t.results.disclaimer}
          </p>
        </div>
      )}
    </div>
  );
};
