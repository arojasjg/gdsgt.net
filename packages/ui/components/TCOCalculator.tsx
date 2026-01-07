/**
 * TCOCalculator Component
 * 
 * Interactive TCO calculator: ERP vs Excel
 */

'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { calculateTCO, formatCurrency, type TCOInputs, type TCOResults } from '@gds/calculators';

export interface TCOCalculatorProps {
  onCalculate?: (inputs: TCOInputs, results: TCOResults) => void;
  className?: string;
}

export function TCOCalculator({ onCalculate, className = '' }: TCOCalculatorProps) {
  const [inputs, setInputs] = useState<TCOInputs>({
    employees: 50,
    monthly_transactions: 1000,
    avg_salary_accounting: 15, // per hour
    hours_per_month_manual_work: 80,
    error_rate_percentage: 2,
    avg_cost_per_error: 500,
    current_software_cost: 0,
    current_it_support_cost: 0
  });
  
  const [results, setResults] = useState<TCOResults | null>(null);
  
  const handleCalculate = () => {
    const calculatedResults = calculateTCO(inputs);
    setResults(calculatedResults);
    onCalculate?.(inputs, calculatedResults);
  };
  
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Input Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Ingresa los datos de tu empresa
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="number"
            label="Número de empleados"
            value={inputs.employees}
            onChange={(e) => setInputs({ ...inputs, employees: Number(e.target.value) })}
            min={1}
          />
          
          <Input
            type="number"
            label="Transacciones mensuales"
            value={inputs.monthly_transactions}
            onChange={(e) => setInputs({ ...inputs, monthly_transactions: Number(e.target.value) })}
            min={1}
          />
          
          <Input
            type="number"
            label="Salario contabilidad ($/hora)"
            value={inputs.avg_salary_accounting}
            onChange={(e) => setInputs({ ...inputs, avg_salary_accounting: Number(e.target.value) })}
            min={1}
            step={0.1}
          />
          
          <Input
            type="number"
            label="Horas/mes en trabajo manual"
            value={inputs.hours_per_month_manual_work}
            onChange={(e) => setInputs({ ...inputs, hours_per_month_manual_work: Number(e.target.value) })}
            min={1}
          />
          
          <Input
            type="number"
            label="Tasa de error (%)"
            value={inputs.error_rate_percentage}
            onChange={(e) => setInputs({ ...inputs, error_rate_percentage: Number(e.target.value) })}
            min={0}
            max={100}
            step={0.1}
          />
          
          <Input
            type="number"
            label="Costo promedio por error ($)"
            value={inputs.avg_cost_per_error}
            onChange={(e) => setInputs({ ...inputs, avg_cost_per_error: Number(e.target.value) })}
            min={0}
          />
        </div>
        
        <Button
          variant="primary"
          size="lg"
          className="w-full mt-6"
          onClick={handleCalculate}
        >
          Calcular TCO
        </Button>
      </div>
      
      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Cost Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Excel Costs */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">
                Costo Anual: Excel
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Costo de labor:</span>
                  <span className="font-semibold">{formatCurrency(results.excel_annual_cost.labor_cost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Costo de errores:</span>
                  <span className="font-semibold">{formatCurrency(results.excel_annual_cost.error_cost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Costo de oportunidad:</span>
                  <span className="font-semibold">{formatCurrency(results.excel_annual_cost.opportunity_cost)}</span>
                </div>
                <div className="border-t border-red-300 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-red-900">Total Anual:</span>
                    <span className="font-bold text-xl text-red-900">
                      {formatCurrency(results.excel_annual_cost.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ERP Costs */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                Costo Anual: GDS ONE
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Licencias:</span>
                  <span className="font-semibold">{formatCurrency(results.erp_annual_cost.license_cost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Implementación (Año 1):</span>
                  <span className="font-semibold">{formatCurrency(results.erp_annual_cost.implementation_cost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Capacitación (Año 1):</span>
                  <span className="font-semibold">{formatCurrency(results.erp_annual_cost.training_cost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Soporte:</span>
                  <span className="font-semibold">{formatCurrency(results.erp_annual_cost.support_cost)}</span>
                </div>
                <div className="border-t border-green-300 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-green-900">Año 1:</span>
                    <span className="font-bold text-xl text-green-900">
                      {formatCurrency(results.erp_annual_cost.total_year_1)}
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-700">Año 2+:</span>
                    <span className="text-sm font-semibold">
                      {formatCurrency(results.erp_annual_cost.total_year_2_onwards)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Análisis de Retorno
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-700 mb-1">Breakeven (meses)</p>
                <p className="text-3xl font-bold text-blue-900">
                  {results.breakeven_months}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1">Ahorro 5 años</p>
                <p className="text-3xl font-bold text-green-600">
                  {formatCurrency(results.five_year_savings)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1">ROI 5 años</p>
                <p className="text-3xl font-bold text-green-600">
                  {results.five_year_roi_percentage.toFixed(0)}%
                </p>
              </div>
            </div>
          </div>
          
          {/* Assumptions */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Supuestos del cálculo:
            </h4>
            <ul className="space-y-1 text-xs text-gray-600">
              {results.assumptions.map((assumption: string, idx: number) => (
                <li key={idx}>• {assumption}</li>
              ))}
            </ul>
          </div>
          
          {/* Disclaimers */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-yellow-900 mb-2">
              ⚠️ Importante:
            </h4>
            <ul className="space-y-1 text-xs text-yellow-800">
              {results.disclaimers.map((disclaimer: string, idx: number) => (
                <li key={idx}>• {disclaimer}</li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Quieres un análisis personalizado?
            </h3>
            <p className="text-blue-100 mb-4">
              Agenda una demo y te mostraremos el TCO específico para tu empresa
            </p>
            <Button variant="secondary" size="lg">
              Agendar Demo Personalizada
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
