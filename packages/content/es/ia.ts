/**
 * AI Assistant Content (Spanish)
 * 
 * Content for GDS AI Assistant - positioning and features
 */

export interface AIFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  examples: string[];
  benefits: string[];
}

export interface AIUseCase {
  id: string;
  title: string;
  description: string;
  query: string;
  response: string;
  impact: string;
}

export const aiFeatures: AIFeature[] = [
  {
    id: 'natural-language',
    icon: '💬',
    title: 'Consultas en Lenguaje Natural',
    description: 'Pregunta a tu ERP como si hablaras con un experto. Sin SQL, sin reportes complejos.',
    examples: [
      '¿Cuáles son mis ventas de este mes?',
      'Muéstrame los productos con bajo inventario',
      '¿Cuál es mi producto más rentable?',
      'Alerta si el inventario de X baja de 10 unidades',
      '¿Qué clientes no han comprado en 3 meses?'
    ],
    benefits: [
      'Sin curva de aprendizaje',
      'Respuestas en segundos',
      'Disponible 24/7',
      'Aprende de tus patrones'
    ]
  },
  {
    id: 'predictions',
    icon: '🔮',
    title: 'Predicciones con Machine Learning',
    description: 'Anticipa el futuro de tu negocio con modelos de IA entrenados con tus datos históricos.',
    examples: [
      'Forecast de ventas próximos 3 meses',
      'Predicción de demanda por producto',
      'Riesgo de quiebre de stock',
      'Probabilidad de pago de clientes',
      'Tendencias de mercado'
    ],
    benefits: [
      'Precisión 85-95%',
      'Reduce quiebres de stock 60%',
      'Optimiza inventario',
      'Mejora flujo de caja'
    ]
  },
  {
    id: 'recommendations',
    icon: '💡',
    title: 'Recomendaciones Inteligentes',
    description: 'El sistema sugiere acciones basadas en análisis de millones de datos y mejores prácticas.',
    examples: [
      'Sugerencias de reorden automático',
      'Precios óptimos por producto',
      'Clientes con riesgo de churn',
      'Oportunidades de cross-sell',
      'Mejoras de procesos'
    ],
    benefits: [
      'Aumenta ventas 20-30%',
      'Reduce costos 15-25%',
      'Mejora retención clientes',
      'Optimiza márgenes'
    ]
  },
  {
    id: 'automation',
    icon: '🚀',
    title: 'Automatización Inteligente',
    description: 'La IA aprende tus patrones y automatiza tareas repetitivas sin necesidad de programación.',
    examples: [
      'Clasificación automática de gastos',
      'Conciliación bancaria automática',
      'Workflows basados en patrones',
      'Alertas proactivas',
      'Reportes automáticos'
    ],
    benefits: [
      'Ahorra 10-15 horas/semana',
      'Reduce errores 90%',
      'Aumenta productividad 40%',
      'Libera tiempo para estrategia'
    ]
  }
];

export const aiUseCases: AIUseCase[] = [
  {
    id: 'sales-analysis',
    title: 'Análisis de Ventas',
    description: 'Consulta tus ventas en lenguaje natural',
    query: 'Muéstrame las ventas de enero comparadas con diciembre',
    response: `📊 **Ventas Enero 2026:**
- Total: $125,450
- Crecimiento vs Diciembre: +15.3%
- Top 3 productos:
  1. Producto A: $45,000 (36%)
  2. Producto B: $32,500 (26%)
  3. Producto C: $18,200 (14%)
- Clientes nuevos: 12
- Ticket promedio: $1,250 (+8%)

💡 **Recomendación:** El Producto A tiene alta demanda. Considera aumentar inventario 20% para febrero.`,
    impact: '+15% ventas, -0 horas análisis'
  },
  {
    id: 'inventory-alert',
    title: 'Alertas de Inventario',
    description: 'Previene quiebres de stock con IA',
    query: '¿Qué productos están por agotarse?',
    response: `⚠️ **Alertas de Stock Crítico:**

**Requieren reorden urgente (< 3 días):**
1. Producto X: 8 unidades (venta promedio: 5/día)
2. Producto Y: 12 unidades (venta promedio: 6/día)

**Requieren reorden pronto (< 7 días):**
3. Producto Z: 25 unidades (venta promedio: 4/día)
4. Producto W: 18 unidades (venta promedio: 3/día)

🔮 **Predicción:** Basado en tendencia, Producto X se agotará en 1.6 días.

✅ **Acción sugerida:** Orden de compra automática creada para Producto X (cantidad óptima: 150 unidades).`,
    impact: '-60% quiebres, +30% rotación'
  },
  {
    id: 'profitability',
    title: 'Rentabilidad por Producto',
    description: 'Identifica productos no rentables',
    query: '¿Cuáles son mis productos menos rentables?',
    response: `📉 **Productos con Baja Rentabilidad:**

**Pérdidas:**
1. Producto M: -$450/mes (margen: -5%)
   - Costo: $105, Precio venta: $100
   - Recomendación: Aumentar precio a $125 o descontinuar

**Margen bajo (<10%):**
2. Producto N: $120/mes (margen: 3%)
   - Costo: $97, Precio venta: $100
3. Producto O: $280/mes (margen: 8%)
   - Costo: $92, Precio venta: $100

💡 **Oportunidad:** Ajustando precios de estos 3 productos, podrías aumentar utilidad $2,500/mes (+12%).

📊 **Productos más rentables (para comparar):**
1. Producto A: $12,500/mes (margen: 45%)
2. Producto B: $8,200/mes (margen: 38%)`,
    impact: '+$2,500/mes utilidad'
  },
  {
    id: 'forecast',
    title: 'Forecast de Ventas',
    description: 'Predice ventas futuras con 90% precisión',
    query: 'Predice mis ventas de los próximos 3 meses',
    response: `🔮 **Forecast de Ventas (Feb-Abr 2026):**

**Febrero:**
- Predicción: $132,500 (+5.6% vs Enero)
- Rango: $125,000 - $140,000
- Confianza: 92%

**Marzo:**
- Predicción: $145,800 (+10% vs Febrero)
- Rango: $138,000 - $153,000
- Confianza: 88%

**Abril:**
- Predicción: $138,200 (-5.2% vs Marzo)
- Rango: $131,000 - $145,000
- Confianza: 85%

📈 **Tendencia:** Crecimiento sostenido con pico en marzo (temporada alta histórica).

💰 **Proyección Trimestre:** $416,500 total

⚠️ **Riesgos identificados:**
- Abril: Caída estacional (histórico: -8% vs marzo)
- Recomendación: Promociones en abril para mantener momentum`,
    impact: '90% precisión, mejor planificación'
  }
];

export const aiStats = {
  accuracy: '85-95%',
  timeSaved: '10-15 horas/semana',
  errorReduction: '90%',
  productivityIncrease: '40%',
  stockoutReduction: '60%',
  salesIncrease: '20-30%'
};

export const aiCompetitors = [
  {
    name: 'SAP Business AI',
    hasAI: true,
    features: ['Predicciones', 'Automatización'],
    price: 'Desde $50,000/año',
    local: false
  },
  {
    name: 'Oracle NetSuite',
    hasAI: true,
    features: ['Analytics', 'Forecasting'],
    price: 'Desde $30,000/año',
    local: false
  },
  {
    name: 'Odoo',
    hasAI: false,
    features: ['Reportes básicos'],
    price: 'Desde $5,000/año',
    local: false
  },
  {
    name: 'Inteligos',
    hasAI: false,
    features: ['Reportes estáticos'],
    price: 'No disponible',
    local: true
  },
  {
    name: 'TuControl',
    hasAI: false,
    features: ['Reportes básicos'],
    price: 'No disponible',
    local: true
  },
  {
    name: 'GDS ONE',
    hasAI: true,
    features: ['Lenguaje natural', 'Predicciones', 'Recomendaciones', 'Automatización'],
    price: 'Incluido desde $5/usuario/mes',
    local: true
  }
];

export const aiFAQ = [
  {
    question: '¿Qué es GDS AI Assistant?',
    answer: 'Es un asistente de inteligencia artificial integrado en GDS ONE que te permite consultar tu ERP en lenguaje natural, obtener predicciones y recibir recomendaciones inteligentes para tomar mejores decisiones.'
  },
  {
    question: '¿Necesito conocimientos técnicos para usar la IA?',
    answer: 'No. GDS AI está diseñado para usuarios de negocio. Solo pregunta en español como si hablaras con un experto: "¿Cuáles son mis ventas de este mes?" y obtendrás respuestas instantáneas.'
  },
  {
    question: '¿Qué tan precisa es la IA?',
    answer: 'Nuestros modelos de predicción tienen una precisión del 85-95% dependiendo del tipo de análisis. La precisión mejora con el tiempo a medida que el sistema aprende de tus datos.'
  },
  {
    question: '¿La IA tiene costo adicional?',
    answer: 'No. GDS AI Assistant está incluido en todos los planes desde $5/usuario/mes. No hay costos ocultos ni límites de consultas.'
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Sí. Tus datos nunca salen de tu instancia. Los modelos de IA se entrenan con tus datos pero no se comparten con otros clientes. Cumplimos con GDPR y estándares internacionales de seguridad.'
  },
  {
    question: '¿Qué diferencia a GDS AI de SAP o Oracle?',
    answer: 'GDS AI es más accesible ($5/usuario vs $50,000+), más fácil de usar (lenguaje natural vs dashboards complejos) y está optimizado para PyMEs latinoamericanas. SAP/Oracle son para grandes empresas con equipos técnicos.'
  }
];

export default {
  aiFeatures,
  aiUseCases,
  aiStats,
  aiCompetitors,
  aiFAQ
};
