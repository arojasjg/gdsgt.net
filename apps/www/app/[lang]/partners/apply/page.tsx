/**
 * Partner Application Page
 * 
 * Form to apply to the partner program
 */

'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { HeroSection } from '@gds/ui/layouts';
import { Button, Input, Select, Card, Alert } from '@gds/ui';
import { track } from '@gds/analytics';
import { submitLead } from '@/lib/leads';
import { whatsappLink } from '@/lib/site';

export default function PartnerApplyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const isSpanish = lang === 'es';
  
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    country: '',
    website: '',
    partner_type: '',
    company_size: '',
    experience_years: '',
    target_industries: [] as string[],
    current_clients: '',
    why_partner: '',
    linkedin: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    try {
      // Track application
      track('partner_application_submitted', {
        partner_type: formData.partner_type,
        company_size: formData.company_size,
        country: formData.country,
        lang: lang
      });
      
      const delivered = await submitLead('partner_application', formData, lang, honeypot);
      if (!delivered) {
        throw new Error(t.form.send_error);
      }
      
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar la aplicación');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const content = {
    es: {
      title: 'Aplicar al Programa de Partners',
      description: 'Completa el formulario y nos pondremos en contacto contigo en 24-48 horas.',
      success: {
        title: '¡Aplicación Recibida!',
        message: 'Gracias por tu interés en el programa de partners de GDS. Revisaremos tu aplicación y nos pondremos en contacto contigo en 24-48 horas.',
        cta: 'Volver a Partners'
      },
      form: {
        company_info: 'Información de la Empresa',
        company_name: 'Nombre de la Empresa',
        contact_name: 'Nombre del Contacto',
        email: 'Email',
        phone: 'Teléfono',
        country: 'País',
        website: 'Sitio Web',
        linkedin: 'LinkedIn (opcional)',
        
        partner_info: 'Información del Partner',
        partner_type: 'Tipo de Partner',
        partner_types: {
          reseller: 'Reseller',
          implementer: 'Implementador',
          referral: 'Referral'
        },
        company_size: 'Tamaño de Empresa',
        sizes: {
          '1-10': '1-10 empleados',
          '10-50': '10-50 empleados',
          '50-200': '50-200 empleados',
          '200+': '200+ empleados'
        },
        experience_years: 'Años de Experiencia en Software B2B',
        target_industries: 'Industrias Objetivo',
        current_clients: 'Número Aproximado de Clientes Actuales',
        why_partner: '¿Por qué quieres ser partner de GDS?',
        
        submit: 'Enviar Aplicación',
        send_error: 'No pudimos enviar tu aplicación. Por favor envíanosla por WhatsApp.',
        whatsapp: 'Enviar por WhatsApp'
      }
    },
    en: {
      title: 'Apply to Partner Program',
      description: 'Complete the form and we\'ll get back to you within 24-48 hours.',
      success: {
        title: 'Application Received!',
        message: 'Thank you for your interest in the GDS partner program. We will review your application and contact you within 24-48 hours.',
        cta: 'Back to Partners'
      },
      form: {
        company_info: 'Company Information',
        company_name: 'Company Name',
        contact_name: 'Contact Name',
        email: 'Email',
        phone: 'Phone',
        country: 'Country',
        website: 'Website',
        linkedin: 'LinkedIn (optional)',
        
        partner_info: 'Partner Information',
        partner_type: 'Partner Type',
        partner_types: {
          reseller: 'Reseller',
          implementer: 'Implementer',
          referral: 'Referral'
        },
        company_size: 'Company Size',
        sizes: {
          '1-10': '1-10 employees',
          '10-50': '10-50 employees',
          '50-200': '50-200 employees',
          '200+': '200+ employees'
        },
        experience_years: 'Years of Experience in B2B Software',
        target_industries: 'Target Industries',
        current_clients: 'Approximate Number of Current Clients',
        why_partner: 'Why do you want to be a GDS partner?',
        
        submit: 'Submit Application',
        send_error: 'We could not send your application. Please send it to us via WhatsApp.',
        whatsapp: 'Send via WhatsApp'
      }
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  if (submitted) {
    return (
      <div className="min-h-screen">
        <HeroSection
          title={t.success.title}
          description={t.success.message}
          cta={
            <Link href={`/${lang}/partners`}>
              <Button variant="primary" size="lg">
                {t.success.cta}
              </Button>
            </Link>
          }
        />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.description}</p>
        </div>
        
        <Card variant="default" className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.form.company_info}</h2>
              <div className="space-y-4">
                <Input
                  type="text"
                  label={t.form.company_name}
                  placeholder="Acme Corp"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  required
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    label={t.form.contact_name}
                    placeholder="Juan Pérez"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    required
                  />
                  
                  <Input
                    type="email"
                    label={t.form.email}
                    placeholder="juan@acme.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    label={t.form.phone}
                    placeholder="+502 1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  
                  <Input
                    type="text"
                    label={t.form.country}
                    placeholder="Guatemala"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="url"
                    label={t.form.website}
                    placeholder="https://acme.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                  
                  <Input
                    type="url"
                    label={t.form.linkedin}
                    placeholder="https://linkedin.com/company/acme"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>
              </div>
            </div>
            
            {/* Partner Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.form.partner_info}</h2>
              <div className="space-y-4">
                <Select
                  label={t.form.partner_type}
                  value={formData.partner_type}
                  onChange={(e) => setFormData({ ...formData, partner_type: e.target.value })}
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="reseller">{t.form.partner_types.reseller}</option>
                  <option value="implementer">{t.form.partner_types.implementer}</option>
                  <option value="referral">{t.form.partner_types.referral}</option>
                </Select>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label={t.form.company_size}
                    value={formData.company_size}
                    onChange={(e) => setFormData({ ...formData, company_size: e.target.value })}
                    required
                  >
                    <option value="">Selecciona un tamaño</option>
                    <option value="1-10">{t.form.sizes['1-10']}</option>
                    <option value="10-50">{t.form.sizes['10-50']}</option>
                    <option value="50-200">{t.form.sizes['50-200']}</option>
                    <option value="200+">{t.form.sizes['200+']}</option>
                  </Select>
                  
                  <Input
                    type="number"
                    label={t.form.experience_years}
                    placeholder="5"
                    value={formData.experience_years}
                    onChange={(e) => setFormData({ ...formData, experience_years: e.target.value })}
                    min={0}
                    required
                  />
                </div>
                
                <Input
                  type="number"
                  label={t.form.current_clients}
                  placeholder="50"
                  value={formData.current_clients}
                  onChange={(e) => setFormData({ ...formData, current_clients: e.target.value })}
                  min={0}
                />
                
                <div>
                  <label htmlFor="why_partner" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.why_partner}
                  </label>
                  <textarea
                    id="why_partner"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isSpanish 
                      ? "Cuéntanos por qué quieres ser partner de GDS..."
                      : "Tell us why you want to be a GDS partner..."
                    }
                    value={formData.why_partner}
                    onChange={(e) => setFormData({ ...formData, why_partner: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Honeypot: hidden from people, filled by bots */}
            <input
              type="text"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
            
            {error && (
              <Alert variant="error">
                {error}{' '}
                <a
                  href={whatsappLink(
                    [
                      isSpanish ? 'Hola GDS, quiero aplicar al programa de partners.' : 'Hi GDS, I want to apply to the partner program.',
                      ...Object.entries(formData).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`),
                    ].join('\n')
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  {t.form.whatsapp}
                </a>
              </Alert>
            )}
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (isSpanish ? 'Enviando...' : 'Submitting...') : t.form.submit}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
