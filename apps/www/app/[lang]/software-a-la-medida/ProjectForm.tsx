'use client';

import { useState } from 'react';
import { track } from '@gds/analytics';
import type { CustomSoftwareContent } from '@gds/content';
import { whatsappLink } from '@/lib/site';

const fieldClass =
  'block w-full px-3 py-2 border border-secondary-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500';
const labelClass = 'block text-sm font-medium text-secondary-700 mb-1';

/**
 * Lead form that composes a WhatsApp message, so leads reach the sales team
 * without depending on a backend endpoint.
 */
export function ProjectForm({ t, lang }: { t: CustomSoftwareContent['form']; lang: string }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    projectType: t.projectTypes[0],
    plan: t.planOptions[0],
    details: '',
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    track('submit_lead', { source: 'custom_software', plan: form.plan, project_type: form.projectType, lang });

    const message = [
      t.whatsappIntro,
      `${t.name}: ${form.name}`,
      `${t.company}: ${form.company}`,
      `${t.phone}: ${form.phone}`,
      `${t.projectType}: ${form.projectType}`,
      `${t.plan}: ${form.plan}`,
      `${t.details} ${form.details}`,
    ].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cs-name" className={labelClass}>{t.name} *</label>
          <input id="cs-name" required autoComplete="name" className={fieldClass} value={form.name} onChange={update('name')} />
        </div>
        <div>
          <label htmlFor="cs-company" className={labelClass}>{t.company}</label>
          <input id="cs-company" autoComplete="organization" className={fieldClass} value={form.company} onChange={update('company')} />
        </div>
      </div>
      <div>
        <label htmlFor="cs-phone" className={labelClass}>{t.phone} *</label>
        <input id="cs-phone" type="tel" required autoComplete="tel" className={fieldClass} value={form.phone} onChange={update('phone')} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cs-type" className={labelClass}>{t.projectType}</label>
          <select id="cs-type" className={fieldClass} value={form.projectType} onChange={update('projectType')}>
            {t.projectTypes.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cs-plan" className={labelClass}>{t.plan}</label>
          <select id="cs-plan" className={fieldClass} value={form.plan} onChange={update('plan')}>
            {t.planOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cs-details" className={labelClass}>{t.details} *</label>
        <textarea
          id="cs-details"
          required
          rows={4}
          className={fieldClass}
          placeholder={t.detailsPlaceholder}
          value={form.details}
          onChange={update('details')}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {t.submit}
      </button>
      <p className="text-xs text-secondary-500 text-center">{t.privacy}</p>
    </form>
  );
}
