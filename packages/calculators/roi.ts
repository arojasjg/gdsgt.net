/**
 * ROI Calculator
 * 
 * Calculate Return on Investment for ERP implementation
 */

export interface ROIInputs {
  current_annual_revenue: number;
  employees: number;
  
  // Expected improvements (percentages)
  inventory_reduction_percentage: number; // Reduce inventory holding costs
  time_savings_percentage: number; // Reduce time spent on manual tasks
  error_reduction_percentage: number; // Reduce costly errors
  revenue_increase_percentage: number; // Increase revenue through better visibility
  
  // Current costs
  current_inventory_holding_cost: number; // annual
  current_labor_cost_finance: number; // annual
  current_error_cost: number; // annual
  
  // ERP costs (from TCO calculator or manual input)
  erp_year_1_cost: number;
  erp_year_2_onwards_cost: number;
}

export interface ROIResults {
  annual_benefits: {
    inventory_savings: number;
    labor_savings: number;
    error_savings: number;
    revenue_increase: number;
    total: number;
  };
  erp_costs: {
    year_1: number;
    year_2_onwards: number;
  };
  roi: {
    year_1_roi_percentage: number;
    year_2_roi_percentage: number;
    year_3_roi_percentage: number;
    payback_months: number;
    three_year_net_benefit: number;
  };
  assumptions: string[];
  disclaimers: string[];
}

/**
 * Calculate ROI
 */
export function calculateROI(inputs: ROIInputs): ROIResults {
  // ===== ANNUAL BENEFITS =====
  
  const inventory_savings = 
    inputs.current_inventory_holding_cost * 
    (inputs.inventory_reduction_percentage / 100);
  
  const labor_savings = 
    inputs.current_labor_cost_finance * 
    (inputs.time_savings_percentage / 100);
  
  const error_savings = 
    inputs.current_error_cost * 
    (inputs.error_reduction_percentage / 100);
  
  const revenue_increase = 
    inputs.current_annual_revenue * 
    (inputs.revenue_increase_percentage / 100);
  
  const total_annual_benefits = 
    inventory_savings + 
    labor_savings + 
    error_savings + 
    revenue_increase;
  
  // ===== ROI CALCULATIONS =====
  
  // Year 1 ROI (includes implementation costs)
  const year_1_net_benefit = total_annual_benefits - inputs.erp_year_1_cost;
  const year_1_roi_percentage = (year_1_net_benefit / inputs.erp_year_1_cost) * 100;
  
  // Year 2 ROI (recurring costs only)
  const year_2_net_benefit = total_annual_benefits - inputs.erp_year_2_onwards_cost;
  const year_2_roi_percentage = (year_2_net_benefit / inputs.erp_year_2_onwards_cost) * 100;
  
  // Year 3 ROI (same as Year 2)
  const year_3_roi_percentage = year_2_roi_percentage;
  
  // Payback period (months)
  const monthly_net_benefit = (total_annual_benefits - inputs.erp_year_2_onwards_cost) / 12;
  const payback_months = monthly_net_benefit > 0
    ? Math.ceil(inputs.erp_year_1_cost / monthly_net_benefit)
    : 999;
  
  // 3-year net benefit
  const three_year_benefits = total_annual_benefits * 3;
  const three_year_costs = inputs.erp_year_1_cost + (inputs.erp_year_2_onwards_cost * 2);
  const three_year_net_benefit = three_year_benefits - three_year_costs;
  
  // ===== ASSUMPTIONS =====
  
  const assumptions = [
    `Reducción de inventario: ${inputs.inventory_reduction_percentage}%`,
    `Ahorro de tiempo: ${inputs.time_savings_percentage}%`,
    `Reducción de errores: ${inputs.error_reduction_percentage}%`,
    `Aumento de ingresos: ${inputs.revenue_increase_percentage}%`,
    'Los beneficios se asumen constantes año a año (conservador)',
    'No incluye beneficios intangibles (mejor toma de decisiones, escalabilidad, etc.)'
  ];
  
  // ===== DISCLAIMERS =====
  
  const disclaimers = [
    'Los resultados son estimaciones basadas en tus inputs.',
    'Los beneficios reales varían según la industria y calidad de implementación.',
    'Los porcentajes de mejora son conservadores basados en promedios de la industria.',
    'Para un análisis detallado, solicita una evaluación personalizada.'
  ];
  
  return {
    annual_benefits: {
      inventory_savings,
      labor_savings,
      error_savings,
      revenue_increase,
      total: total_annual_benefits
    },
    erp_costs: {
      year_1: inputs.erp_year_1_cost,
      year_2_onwards: inputs.erp_year_2_onwards_cost
    },
    roi: {
      year_1_roi_percentage,
      year_2_roi_percentage,
      year_3_roi_percentage,
      payback_months,
      three_year_net_benefit
    },
    assumptions,
    disclaimers
  };
}
