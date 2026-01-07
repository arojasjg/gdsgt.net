/**
 * DemoForm Component
 * 
 * Demo booking form with calendar integration
 */

'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';

export interface DemoFormData {
  email: string;
  name: string;
  company?: string;
  phone?: string;
  preferred_date?: string;
  preferred_time?: string;
  industry?: string;
  company_size?: string;
  interest: string[];
  current_system?: string;
  timeline?: string;
  message?: string;
}

export interface DemoFormProps {
  variant?: 'short' | 'long';
  onSubmit: (data: DemoFormData) => void | Promise<void>;
  submitLabel?: string;
  className?: string;
}

export function DemoForm({
  variant = 'long',
  onSubmit,
  submitLabel = 'Agendar Demo',
  className = ''
}: DemoFormProps) {
  const [formData, setFormData] = useState<DemoFormData>({
    email: '',
    name: '',
    company: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    industry: '',
    company_size: '',
    interest: [],
    current_system: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al agendar la demo');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interest: prev.interest.includes(interest)
        ? prev.interest.filter(i => i !== interest)
        : [...prev.interest, interest]
    }));
  };
  
  if (variant === 'short') {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <Input
          type="text"
          label="Nombre"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        
        <Input
          type="email"
          label="Email"
          placeholder="tu@empresa.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
            {error}
          </div>
        )}
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Agendando...' : submitLabel}
        </Button>
      </form>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">
          📅 Agenda tu demo personalizada
        </h3>
        <p className="text-sm text-blue-700">
          Duración: 30-45 minutos. Te mostraremos GDS ONE específicamente para tu industria y necesidades.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          label="Nombre completo *"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        
        <Input
          type="email"
          label="Email *"
          placeholder="tu@empresa.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          label="Empresa"
          placeholder="Nombre de tu empresa"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        
        <Input
          type="tel"
          label="Teléfono"
          placeholder="+502 1234-5678"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="date"
          label="Fecha preferida"
          value={formData.preferred_date}
          onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
          min={new Date().toISOString().split('T')[0]}
        />
        
        <Select
          label="Hora preferida"
          value={formData.preferred_time}
          onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
        >
          <option value="">Selecciona una hora</option>
          <option value="09:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="16:00">4:00 PM</option>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Industria"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
        >
          <option value="">Selecciona una industria</option>
          <option value="distribucion">Distribución</option>
          <option value="manufactura">Manufactura</option>
          <option value="servicios-profesionales">Servicios Profesionales</option>
          <option value="retail">Retail</option>
          <option value="holding">Holding / Multi-empresa</option>
          <option value="salud">Salud</option>
          <option value="construccion">Construcción</option>
          <option value="logistica">Logística</option>
          <option value="other">Otra</option>
        </Select>
        
        <Select
          label="Tamaño de empresa"
          value={formData.company_size}
          onChange={(e) => setFormData({ ...formData, company_size: e.target.value })}
        >
          <option value="">Selecciona un tamaño</option>
          <option value="1-20">1-20 empleados</option>
          <option value="20-50">20-50 empleados</option>
          <option value="50-200">50-200 empleados</option>
          <option value="200-500">200-500 empleados</option>
          <option value="500+">500+ empleados</option>
        </Select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Qué te gustaría ver en la demo?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {['ERP', 'BI', 'CRM', 'AI', 'Data', 'Integrations', 'Security', 'Multi-empresa'].map((interest) => (
            <label key={interest} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interest.includes(interest.toLowerCase())}
                onChange={() => handleInterestChange(interest.toLowerCase())}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="¿Qué sistema usas actualmente?"
          value={formData.current_system}
          onChange={(e) => setFormData({ ...formData, current_system: e.target.value })}
        >
          <option value="">Selecciona</option>
          <option value="excel">Excel / Hojas de cálculo</option>
          <option value="odoo">Odoo</option>
          <option value="sap">SAP</option>
          <option value="quickbooks">QuickBooks</option>
          <option value="zoho">Zoho</option>
          <option value="custom">Sistema custom</option>
          <option value="other">Otro</option>
          <option value="none">Ninguno</option>
        </Select>
        
        <Select
          label="Timeline de decisión"
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
        >
          <option value="">Selecciona</option>
          <option value="immediate">Inmediato (&lt; 1 mes)</option>
          <option value="1-3-months">1-3 meses</option>
          <option value="3-6-months">3-6 meses</option>
          <option value="6-12-months">6-12 meses</option>
          <option value="exploring">Solo explorando</option>
        </Select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          ¿Algo más que debamos saber?
        </label>
        <textarea
          id="message"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ej: Necesitamos multi-sucursal, integración con Power BI, etc."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          {error}
        </div>
      )}
      
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Agendando...' : submitLabel}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        Te enviaremos una confirmación por email con el link de la reunión.
      </p>
    </form>
  );
}
