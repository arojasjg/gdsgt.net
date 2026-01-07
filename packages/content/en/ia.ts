/**
 * AI Assistant Content (English)
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
    title: 'Natural Language Queries',
    description: 'Ask your ERP as if talking to an expert. No SQL, no complex reports.',
    examples: [
      'What are my sales this month?',
      'Show me products with low inventory',
      'What is my most profitable product?',
      'Alert if inventory of X drops below 10 units',
      'Which customers haven\'t purchased in 3 months?'
    ],
    benefits: [
      'No learning curve',
      'Answers in seconds',
      'Available 24/7',
      'Learns from your patterns'
    ]
  },
  {
    id: 'predictions',
    icon: '🔮',
    title: 'Machine Learning Predictions',
    description: 'Anticipate your business future with AI models trained on your historical data.',
    examples: [
      'Sales forecast for next 3 months',
      'Demand prediction by product',
      'Stock-out risk',
      'Customer payment probability',
      'Market trends'
    ],
    benefits: [
      '85-95% accuracy',
      'Reduce stock-outs 60%',
      'Optimize inventory',
      'Improve cash flow'
    ]
  },
  {
    id: 'recommendations',
    icon: '💡',
    title: 'Intelligent Recommendations',
    description: 'The system suggests actions based on analysis of millions of data points and best practices.',
    examples: [
      'Automatic reorder suggestions',
      'Optimal prices per product',
      'Customers at risk of churn',
      'Cross-sell opportunities',
      'Process improvements'
    ],
    benefits: [
      'Increase sales 20-30%',
      'Reduce costs 15-25%',
      'Improve customer retention',
      'Optimize margins'
    ]
  },
  {
    id: 'automation',
    icon: '🚀',
    title: 'Intelligent Automation',
    description: 'AI learns your patterns and automates repetitive tasks without programming.',
    examples: [
      'Automatic expense classification',
      'Automatic bank reconciliation',
      'Pattern-based workflows',
      'Proactive alerts',
      'Automatic reports'
    ],
    benefits: [
      'Save 10-15 hours/week',
      'Reduce errors 90%',
      'Increase productivity 40%',
      'Free time for strategy'
    ]
  }
];

export const aiUseCases: AIUseCase[] = [
  {
    id: 'sales-analysis',
    title: 'Sales Analysis',
    description: 'Query your sales in natural language',
    query: 'Show me January sales compared to December',
    response: `📊 **January 2026 Sales:**
- Total: $125,450
- Growth vs December: +15.3%
- Top 3 products:
  1. Product A: $45,000 (36%)
  2. Product B: $32,500 (26%)
  3. Product C: $18,200 (14%)
- New customers: 12
- Average ticket: $1,250 (+8%)

💡 **Recommendation:** Product A has high demand. Consider increasing inventory 20% for February.`,
    impact: '+15% sales, -0 hours analysis'
  },
  {
    id: 'inventory-alert',
    title: 'Inventory Alerts',
    description: 'Prevent stock-outs with AI',
    query: 'Which products are running low?',
    response: `⚠️ **Critical Stock Alerts:**

**Require urgent reorder (< 3 days):**
1. Product X: 8 units (avg sale: 5/day)
2. Product Y: 12 units (avg sale: 6/day)

**Require reorder soon (< 7 days):**
3. Product Z: 25 units (avg sale: 4/day)
4. Product W: 18 units (avg sale: 3/day)

🔮 **Prediction:** Based on trend, Product X will run out in 1.6 days.

✅ **Suggested action:** Automatic purchase order created for Product X (optimal quantity: 150 units).`,
    impact: '-60% stock-outs, +30% turnover'
  },
  {
    id: 'profitability',
    title: 'Product Profitability',
    description: 'Identify unprofitable products',
    query: 'What are my least profitable products?',
    response: `📉 **Low Profitability Products:**

**Losses:**
1. Product M: -$450/month (margin: -5%)
   - Cost: $105, Sale price: $100
   - Recommendation: Increase price to $125 or discontinue

**Low margin (<10%):**
2. Product N: $120/month (margin: 3%)
   - Cost: $97, Sale price: $100
3. Product O: $280/month (margin: 8%)
   - Cost: $92, Sale price: $100

💡 **Opportunity:** By adjusting prices of these 3 products, you could increase profit $2,500/month (+12%).

📊 **Most profitable products (for comparison):**
1. Product A: $12,500/month (margin: 45%)
2. Product B: $8,200/month (margin: 38%)`,
    impact: '+$2,500/month profit'
  },
  {
    id: 'forecast',
    title: 'Sales Forecast',
    description: 'Predict future sales with 90% accuracy',
    query: 'Predict my sales for the next 3 months',
    response: `🔮 **Sales Forecast (Feb-Apr 2026):**

**February:**
- Prediction: $132,500 (+5.6% vs January)
- Range: $125,000 - $140,000
- Confidence: 92%

**March:**
- Prediction: $145,800 (+10% vs February)
- Range: $138,000 - $153,000
- Confidence: 88%

**April:**
- Prediction: $138,200 (-5.2% vs March)
- Range: $131,000 - $145,000
- Confidence: 85%

📈 **Trend:** Sustained growth with peak in March (historical high season).

💰 **Quarter Projection:** $416,500 total

⚠️ **Identified risks:**
- April: Seasonal drop (historical: -8% vs March)
- Recommendation: Promotions in April to maintain momentum`,
    impact: '90% accuracy, better planning'
  }
];

export const aiStats = {
  accuracy: '85-95%',
  timeSaved: '10-15 hours/week',
  errorReduction: '90%',
  productivityIncrease: '40%',
  stockoutReduction: '60%',
  salesIncrease: '20-30%'
};

export const aiCompetitors = [
  {
    name: 'SAP Business AI',
    hasAI: true,
    features: ['Predictions', 'Automation'],
    price: 'From $50,000/year',
    local: false
  },
  {
    name: 'Oracle NetSuite',
    hasAI: true,
    features: ['Analytics', 'Forecasting'],
    price: 'From $30,000/year',
    local: false
  },
  {
    name: 'Odoo',
    hasAI: false,
    features: ['Basic reports'],
    price: 'From $5,000/year',
    local: false
  },
  {
    name: 'Inteligos',
    hasAI: false,
    features: ['Static reports'],
    price: 'Not available',
    local: true
  },
  {
    name: 'TuControl',
    hasAI: false,
    features: ['Basic reports'],
    price: 'Not available',
    local: true
  },
  {
    name: 'GDS ONE',
    hasAI: true,
    features: ['Natural language', 'Predictions', 'Recommendations', 'Automation'],
    price: 'Included from $5/user/month',
    local: true
  }
];

export const aiFAQ = [
  {
    question: 'What is GDS AI Assistant?',
    answer: 'It is an artificial intelligence assistant integrated into GDS ONE that allows you to query your ERP in natural language, get predictions, and receive intelligent recommendations to make better decisions.'
  },
  {
    question: 'Do I need technical knowledge to use AI?',
    answer: 'No. GDS AI is designed for business users. Just ask in English as if talking to an expert: "What are my sales this month?" and you\'ll get instant answers.'
  },
  {
    question: 'How accurate is the AI?',
    answer: 'Our prediction models have 85-95% accuracy depending on the type of analysis. Accuracy improves over time as the system learns from your data.'
  },
  {
    question: 'Does AI have an additional cost?',
    answer: 'No. GDS AI Assistant is included in all plans from $5/user/month. No hidden costs or query limits.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. Your data never leaves your instance. AI models are trained with your data but not shared with other customers. We comply with GDPR and international security standards.'
  },
  {
    question: 'What differentiates GDS AI from SAP or Oracle?',
    answer: 'GDS AI is more accessible ($5/user vs $50,000+), easier to use (natural language vs complex dashboards), and optimized for Latin American SMBs. SAP/Oracle are for large enterprises with technical teams.'
  }
];

export default {
  aiFeatures,
  aiUseCases,
  aiStats,
  aiCompetitors,
  aiFAQ
};
