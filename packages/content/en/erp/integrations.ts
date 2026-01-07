import type { Integration } from '../../types';

export const integrations: Integration[] = [
  {
    slug: 'power-bi',
    name: 'Power BI',
    description:
      'Native integration with Microsoft Power BI for advanced analysis and interactive dashboards with real-time ERP data.',
    category: 'bi',
    entities: [
      'Sales and invoicing',
      'Inventory and movements',
      'Purchases and suppliers',
      'Accounting and finance',
      'Customers and portfolio',
      'Production and costs',
    ],
    flow: [
      'Direct connection to ERP database (SQL Server/PostgreSQL)',
      'Data extraction through optimized views',
      'Transformation and modeling in Power BI Desktop',
      'Publication to Power BI Service',
      'Scheduled automatic refresh',
      'Access through roles and permissions',
    ],
    security: [
      'Encrypted connection (TLS 1.2+)',
      'Authentication via Azure AD or credentials',
      'Access through views with specific permissions',
      'Row-level security (RLS) by user/company',
      'Access auditing',
    ],
    faqs: [
      {
        question: 'What data can I visualize in Power BI?',
        answer:
          'All ERP data: sales, inventory, purchases, accounting, customers, production, HR, etc. Exposed through optimized views.',
      },
      {
        question: 'How often is data updated?',
        answer:
          'You can configure updates from hourly to daily. For real-time data, DirectQuery can be used.',
      },
      {
        question: 'Do I need a Power BI license?',
        answer:
          'Yes, you need Power BI Pro or Premium to publish and share reports. Power BI Desktop is free.',
      },
    ],
  },
  {
    slug: 'looker-studio',
    name: 'Looker Studio (Google Data Studio)',
    description:
      'Integration with Looker Studio to create visual dashboards and reports with ERP data, ideal for sharing with teams.',
    category: 'bi',
    entities: [
      'Sales and invoicing',
      'Inventory',
      'Purchases',
      'Finance',
      'Operational KPIs',
    ],
    flow: [
      'Data export to Google Sheets or BigQuery',
      'Looker Studio connection to data source',
      'Creation of interactive dashboards',
      'Share with authorized users',
      'Automatic data refresh',
    ],
    security: [
      'Authentication via Google Workspace',
      'Access permissions by user/group',
      'Data encrypted in transit and at rest',
      'Access auditing',
    ],
    faqs: [
      {
        question: 'How is data updated?',
        answer:
          'Through scheduled synchronization (hourly, daily, etc.) from ERP to Google Sheets or BigQuery.',
      },
      {
        question: 'Is Looker Studio free?',
        answer: 'Yes, Looker Studio is free. You only need a Google account.',
      },
    ],
  },
  {
    slug: 'excel-csv',
    name: 'Excel / CSV',
    description:
      'Mass data import and export via Excel or CSV files, with validation and field mapping.',
    category: 'data',
    entities: [
      'Catalogs (products, customers, suppliers)',
      'Transactions (sales, purchases, payments)',
      'Initial inventory',
      'Accounting balances',
    ],
    flow: [
      'Download Excel/CSV template with required structure',
      'Fill in data in the template',
      'Upload file to ERP',
      'Automatic data validation',
      'Error review and correction',
      'Final import',
    ],
    security: [
      'Structure and data type validation',
      'Duplicate detection',
      'Import audit log',
      'Rollback on error',
    ],
    faqs: [
      {
        question: 'What file format should I use?',
        answer:
          'You can use Excel (.xlsx) or CSV (.csv). We recommend Excel for better compatibility.',
      },
      {
        question: 'Can I import historical data?',
        answer:
          'Yes, you can import historical data respecting system structure and validations.',
      },
    ],
  },
  {
    slug: 'zapier-webhooks',
    name: 'Zapier / Webhooks',
    description:
      'Integration via Zapier and webhooks to connect ERP with 5,000+ applications and automate workflows.',
    category: 'api',
    entities: [
      'New customers',
      'Sales orders',
      'Invoices',
      'Payments received',
      'Products',
      'Inventory',
    ],
    flow: [
      'Webhook configuration in ERP (events to notify)',
      'Zap creation in Zapier',
      'Field mapping between ERP and destination app',
      'Integration testing',
      'Zap activation',
      'Execution monitoring',
    ],
    security: [
      'Authentication via API key',
      'Signed webhooks (HMAC)',
      'HTTPS required',
      'Rate limiting',
      'Call auditing',
    ],
    faqs: [
      {
        question: 'What events can I notify via webhooks?',
        answer:
          'Creation/update of customers, products, orders, invoices, payments, inventory, etc.',
      },
      {
        question: 'Do I need a Zapier account?',
        answer:
          'Yes, you need a Zapier account (they have a free plan with limits). Direct webhooks don\'t require Zapier.',
      },
    ],
  },
  {
    slug: 'whatsapp',
    name: 'WhatsApp Business',
    description:
      'Integration with WhatsApp Business API to send notifications, order confirmations, account statements, and support.',
    category: 'messaging',
    entities: [
      'Order notifications',
      'Payment confirmations',
      'Account statements',
      'Due date reminders',
      'Customer support',
    ],
    flow: [
      'WhatsApp Business API configuration',
      'Message template definition',
      'Trigger configuration in ERP',
      'Automatic notification sending',
      'Response reception (optional)',
      'Interaction logging',
    ],
    security: [
      'Authentication via WhatsApp Business API',
      'End-to-end message encryption',
      'Customer opt-in required',
      'WhatsApp policy compliance',
      'Sent message auditing',
    ],
    faqs: [
      {
        question: 'Do I need WhatsApp Business API?',
        answer:
          'Yes, you need a WhatsApp Business API account (different from the app). Can be contracted through official providers.',
      },
      {
        question: 'Can I receive messages from customers?',
        answer:
          'Yes, you can receive and respond to messages within a 24-hour window from the customer\'s last message.',
      },
    ],
  },
  {
    slug: 'email-smtp',
    name: 'Email / SMTP',
    description:
      'Integration with SMTP servers for automatic sending of invoices, quotes, account statements, and email notifications.',
    category: 'messaging',
    entities: [
      'Electronic invoices',
      'Quotes',
      'Purchase orders',
      'Account statements',
      'Payment reminders',
      'System notifications',
    ],
    flow: [
      'SMTP server configuration',
      'Email template definition',
      'Automatic sending configuration',
      'Content personalization',
      'Email sending and logging',
      'Open tracking (optional)',
    ],
    security: [
      'Secure SMTP connection (TLS/SSL)',
      'Credential authentication',
      'SPF, DKIM, DMARC configured',
      'Rate limiting',
      'Sending auditing',
    ],
    faqs: [
      {
        question: 'What SMTP server can I use?',
        answer:
          'You can use Gmail, Outlook, SendGrid, Amazon SES, Mailgun, or your own SMTP server.',
      },
      {
        question: 'Can I customize email templates?',
        answer:
          'Yes, you can fully customize template design and content with your brand.',
      },
    ],
  },
  {
    slug: 'payment-gateways',
    name: 'Payment Gateways',
    description:
      'Integration with payment gateways to process online payments, generate payment links, and automatically reconcile.',
    category: 'payments',
    entities: ['Invoices', 'Sales orders', 'Payments received', 'Bank reconciliation'],
    flow: [
      'Payment gateway configuration (API credentials)',
      'Payment link generation from invoice',
      'Customer makes online payment',
      'Payment received notification (webhook)',
      'Automatic payment application in ERP',
      'Bank reconciliation',
    ],
    security: [
      'PCI-DSS compliance',
      'Card tokenization',
      'Signed webhooks',
      'HTTPS required',
      'Transaction auditing',
    ],
    faqs: [
      {
        question: 'What gateways do you support?',
        answer:
          'Currently through integration services. Common gateways: Stripe, PayPal, local Visa/Mastercard. Check availability.',
      },
      {
        question: 'Are payments automatically reconciled?',
        answer:
          'Yes, through webhooks payments are automatically applied to corresponding invoices.',
      },
    ],
  },
  {
    slug: 'rest-api',
    name: 'REST API / SDK',
    description:
      'Complete REST API to integrate ERP with any external system, with OpenAPI documentation and available SDKs.',
    category: 'api',
    entities: [
      'All ERP modules',
      'Catalogs',
      'Transactions',
      'Reports',
      'Configuration',
    ],
    flow: [
      'API key generation in ERP',
      'API documentation consultation (OpenAPI/Swagger)',
      'Integration development',
      'Testing in sandbox environment',
      'Production deployment',
      'Usage monitoring',
    ],
    security: [
      'Authentication via API key or OAuth 2.0',
      'Rate limiting per client',
      'HTTPS required',
      'Granular permissions per endpoint',
      'Call auditing',
      'Signed webhooks (HMAC)',
    ],
    faqs: [
      {
        question: 'What can I do with the API?',
        answer:
          'Create, read, update, and delete records in all ERP modules. Also query reports and configure webhooks.',
      },
      {
        question: 'Is there a call limit?',
        answer:
          'Yes, there is configurable rate limiting per client (e.g., 1000 calls/hour). Check your plan.',
      },
      {
        question: 'Are SDKs available?',
        answer:
          'Yes, we offer official SDKs in JavaScript/TypeScript, Python, and PHP. You can also use the REST API directly.',
      },
    ],
  },
];
