/**
 * LeadForm Component
 * 
 * Lead capture form with ICP qualification
 */

'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';

export interface LeadFormData {
  email: string;
  name?: string;
  company?: string;
  industry?: string;
  company_size?: string;
  interest: string[];
  message?: string;
}

export interface LeadFormProps {
  variant?: 'short' | 'long';
  interests?: string[];
  onSubmit: (data: LeadFormData) => void | Promise<void>;
  submitLabel?: string;
  className?: string;
}

export function LeadForm({
  variant = 'long',
  interests = ['erp', 'bi', 'crm', 'ai', 'data', 'integrations', 'security', 'staff-aug'],
  onSubmit,
  submitLabel = 'Enviar',
  className = ''
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    email: '',
    name: '',
    company: '',
    industry: '',
    company_size: '',
    interest: [],
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
      setError(err instanceof Error ? err.message : 'Error al enviar el formulario');
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
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        
        <Input
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          {isSubmitting ? 'Enviando...' : submitLabel}
        </Button>
      </form>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="tu@empresa.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        
        <Input
          type="text"
          label="Nombre"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
      </div>
      
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
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Qué te interesa? (selecciona todas las que apliquen)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {interests.map((interest) => (
            <label key={interest} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interest.includes(interest)}
                onChange={() => handleInterestChange(interest)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 capitalize">
                {interest === 'staff-aug' ? 'Staff Aug' : interest.toUpperCase()}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Cuéntanos más sobre tus necesidades..."
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
        {isSubmitting ? 'Enviando...' : submitLabel}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        Al enviar este formulario, aceptas nuestra política de privacidad.
      </p>
    </form>
  );
}
