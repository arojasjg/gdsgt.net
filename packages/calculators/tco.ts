/**
 * TCO Calculator: ERP vs Excel
 * 
 * Calculate Total Cost of Ownership for ERP vs Excel
 */

export interface TCOInputs {
  employees: number;
  monthly_transactions: number;
  avg_salary_accounting: number; // per hour
  hours_per_month_manual_work: number;
  error_rate_percentage: number;
  avg_cost_per_error: number;
  
  // Optional: Current system costs
  current_software_cost?: number; // monthly
  current_it_support_cost?: number; // monthly
}

export interface TCOResults {
  excel_annual_cost: {
    labor_cost: number;
    error_cost: number;
    opportunity_cost: number;
    software_cost: number;
    it_support_cost: number;
    total: number;
  };
  erp_annual_cost: {
    license_cost: number; // PLACEHOLDER or range
    implementation_cost: number; // PLACEHOLDER or range
    training_cost: number; // PLACEHOLDER or range
    support_cost: number;
    total_year_1: number;
    total_year_2_onwards: number;
  };
  breakeven_months: number;
  five_year_savings: number;
  five_year_roi_percentage: number;
  
  // Assumptions and disclaimers
  assumptions: string[];
  disclaimers: string[];
}

/**
 * Calculate TCO: ERP vs Excel
 */
export function calculateTCO(inputs: TCOInputs): TCOResults {
  // ===== EXCEL COSTS =====
  
  // Labor cost (manual work)
  const labor_cost_annual = 
    inputs.hours_per_month_manual_work * 
    inputs.avg_salary_accounting * 
    12;
  
  // Error cost
  const errors_per_month = 
    inputs.monthly_transactions * 
    (inputs.error_rate_percentage / 100);
  
  const error_cost_annual = 
    errors_per_month * 
    inputs.avg_cost_per_error * 
    12;
  
  // Opportunity cost (time that could be spent on analysis vs data entry)
  // Assume 30% of manual work time could be redirected to value-add activities
  const opportunity_cost_annual = labor_cost_annual * 0.3;
  
  // Software cost (if using paid Excel/Office)
  const software_cost_annual = (inputs.current_software_cost || 0) * 12;
  
  // IT support cost
  const it_support_cost_annual = (inputs.current_it_support_cost || 0) * 12;
  
  const excel_total_annual = 
    labor_cost_annual + 
    error_cost_annual + 
    opportunity_cost_annual + 
    software_cost_annual + 
    it_support_cost_annual;
  
  // ===== ERP COSTS =====
  
  // PLACEHOLDER: These should be replaced with real pricing
  // For now, use industry averages
  
  // License cost (per user per month)
  // Industry average: $50-150/user/month for SMB ERP
  // Use $80/user/month as baseline
  const estimated_users = Math.ceil(inputs.employees * 0.3); // 30% of employees use ERP
  const license_cost_monthly = estimated_users * 80;
  const license_cost_annual = license_cost_monthly * 12;
  
  // Implementation cost (one-time)
  // Industry average: 1-3x annual license cost
  // Use 2x as baseline
  const implementation_cost = license_cost_annual * 2;
  
  // Training cost (one-time)
  // Industry average: $500-1000 per user
  // Use $750 per user as baseline
  const training_cost = estimated_users * 750;
  
  // Support cost (annual)
  // Industry average: 15-20% of license cost
  // Use 18% as baseline
  const support_cost_annual = license_cost_annual * 0.18;
  
  // Year 1 total (includes one-time costs)
  const erp_year_1_total = 
    license_cost_annual + 
    implementation_cost + 
    training_cost + 
    support_cost_annual;
  
  // Year 2+ total (recurring only)
  const erp_year_2_onwards = 
    license_cost_annual + 
    support_cost_annual;
  
  // ===== BREAKEVEN =====
  
  // Monthly savings after ERP implementation
  const monthly_savings = excel_total_annual / 12 - erp_year_2_onwards / 12;
  
  // Breakeven months (how long to recover Year 1 investment)
  const breakeven_months = monthly_savings > 0 
    ? Math.ceil(erp_year_1_total / monthly_savings)
    : 999; // If no savings, set to high number
  
  // ===== 5-YEAR ANALYSIS =====
  
  const excel_5_year_cost = excel_total_annual * 5;
  const erp_5_year_cost = erp_year_1_total + (erp_year_2_onwards * 4);
  const five_year_savings = excel_5_year_cost - erp_5_year_cost;
  const five_year_roi_percentage = (five_year_savings / erp_year_1_total) * 100;
  
  // ===== ASSUMPTIONS =====
  
  const assumptions = [
    `Usuarios estimados: ${estimated_users} (30% de ${inputs.employees} empleados)`,
    `Costo de licencia: $${license_cost_monthly.toFixed(2)}/mes ($${(license_cost_monthly / estimated_users).toFixed(2)}/usuario/mes)`,
    `Implementación: ${(implementation_cost / license_cost_annual).toFixed(1)}x costo de licencia anual`,
    `Capacitación: $${(training_cost / estimated_users).toFixed(2)} por usuario`,
    `Soporte: ${(support_cost_annual / license_cost_annual * 100).toFixed(0)}% del costo de licencia`,
    `Tasa de error Excel: ${inputs.error_rate_percentage}%`,
    `Costo promedio por error: $${inputs.avg_cost_per_error.toFixed(2)}`,
    `Costo de oportunidad: 30% del tiempo de trabajo manual`
  ];
  
  // ===== DISCLAIMERS =====
  
  const disclaimers = [
    'Los costos de ERP son estimaciones basadas en promedios de la industria.',
    'Los costos reales dependen de módulos, usuarios, y personalización requerida.',
    'No incluye: costo de hardware, migración de datos, integraciones custom.',
    'No incluye: costo de downtime durante implementación.',
    'Los ahorros asumen reducción de 70% en trabajo manual y 80% en errores.',
    'Para un cálculo preciso, solicita una cotización personalizada.'
  ];
  
  return {
    excel_annual_cost: {
      labor_cost: labor_cost_annual,
      error_cost: error_cost_annual,
      opportunity_cost: opportunity_cost_annual,
      software_cost: software_cost_annual,
      it_support_cost: it_support_cost_annual,
      total: excel_total_annual
    },
    erp_annual_cost: {
      license_cost: license_cost_annual,
      implementation_cost: implementation_cost,
      training_cost: training_cost,
      support_cost: support_cost_annual,
      total_year_1: erp_year_1_total,
      total_year_2_onwards: erp_year_2_onwards
    },
    breakeven_months,
    five_year_savings,
    five_year_roi_percentage,
    assumptions,
    disclaimers
  };
}

/**
 * Format currency
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'GTQ',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}
