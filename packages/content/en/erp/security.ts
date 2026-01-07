import type { SecurityTopic } from '../../types';

export const securityTopics: SecurityTopic[] = [
  {
    slug: 'roles-permissions',
    name: 'Roles and Permissions (RBAC)',
    description:
      'Role-based access control (RBAC) with granular permissions by module, functionality, and data, ensuring each user accesses only what is necessary.',
    controls: [
      'Predefined roles (Admin, Manager, Salesperson, Accountant, etc.)',
      'Custom role creation',
      'Granular permissions by module and action (create, read, update, delete)',
      'Data-level permissions (by company, branch, project, etc.)',
      'Permission inheritance',
      'Permission change auditing',
    ],
    bestPractices: [
      'Apply principle of least privilege',
      'Review permissions periodically',
      'Use roles instead of individual permissions',
      'Document roles and responsibilities',
      'Revoke access for inactive users',
      'Separate administrative from operational roles',
    ],
    scope:
      'System allows role and permission configuration at module and action level. Data-level permission configuration (row-level security) may require additional setup.',
    faqs: [
      {
        question: 'Can I create custom roles?',
        answer:
          'Yes, you can create custom roles with specific permissions according to your organization\'s needs.',
      },
      {
        question: 'How does permission inheritance work?',
        answer:
          'Roles can inherit permissions from other roles, facilitating complex permission management.',
      },
      {
        question: 'Are permission changes logged?',
        answer:
          'Yes, all role and permission changes are logged in the audit log with date, user, and change details.',
      },
    ],
  },
  {
    slug: 'audit-logs',
    name: 'Audit Logs',
    description:
      'Complete record of all actions performed in the system, including who, what, when, and from where, for traceability and compliance.',
    controls: [
      'Recording of all transactions (create, modify, delete)',
      'Access recording (login, logout, failed attempts)',
      'Configuration change recording',
      'Permission change recording',
      'Immutable log storage',
      'Advanced search and filtering',
      'Log export for analysis',
    ],
    bestPractices: [
      'Review logs periodically',
      'Configure alerts for critical actions',
      'Retain logs according to legal requirements',
      'Protect logs from modification',
      'Use logs for incident investigation',
      'Comply with privacy regulations (GDPR, etc.)',
    ],
    scope:
      'System records all actions in core modules. Logs are retained according to configuration (minimum 1 year recommended). Export available in CSV/JSON.',
    faqs: [
      {
        question: 'What information is recorded in logs?',
        answer:
          'User, date/time, action performed, module, affected record, source IP, and before/after values of the change.',
      },
      {
        question: 'How long are logs retained?',
        answer:
          'Default 1 year. You can configure longer retention according to your compliance needs.',
      },
      {
        question: 'Can I export logs?',
        answer:
          'Yes, you can export logs in CSV or JSON format for external analysis or compliance.',
      },
    ],
  },
  {
    slug: 'backups-recovery',
    name: 'Backups and Recovery',
    description:
      'Automatic daily backups with configurable retention and tested recovery procedures.',
    controls: [
      'Automatic daily backups',
      'Hourly incremental backups (optional)',
      'Configurable retention (7 days, 30 days, 1 year)',
      'Storage in separate location',
      'Backup encryption',
      'Periodic recovery testing',
      'Documented recovery procedures',
    ],
    bestPractices: [
      'Configure automatic backups',
      'Verify backups periodically',
      'Test recovery procedures',
      'Store backups in different geographic location',
      'Encrypt backups',
      'Document recovery procedures',
      'Define RTO (Recovery Time Objective) and RPO (Recovery Point Objective)',
    ],
    scope:
      'Backups include database and attached files. Complete recovery can take 1 to 4 hours depending on data volume. Typical RPO: 24 hours (daily backup).',
    faqs: [
      {
        question: 'How often are backups performed?',
        answer:
          'Complete daily backups. Hourly incremental backups available in higher plans.',
      },
      {
        question: 'How long does it take to recover a backup?',
        answer:
          'Depends on data volume. Typically between 1 and 4 hours for complete recovery.',
      },
      {
        question: 'Can I download my backups?',
        answer:
          'Yes, you can request backup download in SQL/ZIP format for external custody.',
      },
    ],
  },
  {
    slug: 'disaster-recovery',
    name: 'Disaster Recovery (DR)',
    description:
      'Disaster recovery plan with documented procedures, defined RTO/RPO, and periodic testing.',
    controls: [
      'Documented DR plan',
      'Defined RTO (Recovery Time Objective)',
      'Defined RPO (Recovery Point Objective)',
      'Backups in separate geographic location',
      'Failover procedures',
      'Periodic DR testing',
      'Disaster response team',
    ],
    bestPractices: [
      'Define RTO and RPO according to business criticality',
      'Document DR procedures',
      'Perform DR tests at least annually',
      'Keep emergency contacts updated',
      'Review and update DR plan periodically',
      'Train team in DR procedures',
    ],
    scope:
      'Basic DR plan included. Typical RTO: 4-8 hours. Typical RPO: 24 hours. Advanced DR with automatic failover available in enterprise plans.',
    faqs: [
      {
        question: 'What are RTO and RPO?',
        answer:
          'RTO is maximum recovery time. RPO is maximum amount of data that can be lost. E.g.: RTO 4h, RPO 24h.',
      },
      {
        question: 'How often are DR procedures tested?',
        answer:
          'We recommend annual testing. In enterprise plans, quarterly tests are performed.',
      },
      {
        question: 'What happens if there is a disaster?',
        answer:
          'DR plan is activated: team notification, backup recovery, integrity validation, and operations resumption.',
      },
    ],
  },
  {
    slug: 'data-privacy',
    name: 'Data Privacy',
    description:
      'Compliance with privacy regulations (GDPR, CCPA) with access controls, encryption, and data subject rights.',
    controls: [
      'Data encryption at rest (AES-256)',
      'Data encryption in transit (TLS 1.2+)',
      'Sensitive data anonymization',
      'Personal data access control',
      'Data processing logging',
      'Data subject rights procedures (access, rectification, deletion)',
      'Privacy impact assessments (PIA)',
    ],
    bestPractices: [
      'Minimize personal data collection',
      'Obtain explicit consent',
      'Implement data retention policies',
      'Train staff in privacy',
      'Respond to subject requests on time',
      'Notify security breaches according to regulations',
    ],
    scope:
      'Basic privacy controls included. GDPR/CCPA compliance requires additional configuration and organizational procedures. Privacy consulting available.',
    faqs: [
      {
        question: 'Does the system comply with GDPR?',
        answer:
          'System includes technical controls for GDPR. Complete compliance also requires organizational procedures and policies.',
      },
      {
        question: 'How are data deletion requests handled?',
        answer:
          'Through documented procedure: identity validation, personal data deletion, and confirmation to subject.',
      },
      {
        question: 'Is data encrypted?',
        answer:
          'Yes, data at rest (AES-256) and in transit (TLS 1.2+) is encrypted.',
      },
    ],
  },
  {
    slug: 'availability-monitoring',
    name: 'Availability and Monitoring',
    description:
      '24/7 monitoring of availability, performance, and system health with automatic alerts and defined SLA.',
    controls: [
      '24/7 availability monitoring',
      'Performance monitoring (response times)',
      'Capacity monitoring (CPU, memory, disk)',
      'Automatic incident alerts',
      'Real-time status dashboard',
      'Uptime and SLA reports',
      '24/7 support team (enterprise plans)',
    ],
    bestPractices: [
      'Define SLA according to business criticality',
      'Configure alerts for critical thresholds',
      'Review uptime reports monthly',
      'Plan maintenance during low-usage hours',
      'Keep support contacts updated',
      'Document incidents and resolutions',
    ],
    scope:
      'Basic monitoring included. Typical SLA: 99.5% monthly uptime. 99.9% SLA available in enterprise plans. 24/7 support in enterprise plans.',
    faqs: [
      {
        question: 'What is the availability SLA?',
        answer:
          'Standard SLA: 99.5% monthly uptime. Enterprise SLA: 99.9% monthly uptime.',
      },
      {
        question: 'Is there 24/7 support?',
        answer:
          '24/7 support available in enterprise plans. Standard plans: business hours support.',
      },
      {
        question: 'How are incidents notified?',
        answer:
          'Via email and/or SMS to configured contacts. Public status dashboard also available.',
      },
    ],
  },
];
