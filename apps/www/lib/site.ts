/**
 * Shared site constants for www.gdsgt.net
 */

export const SITE_URL = 'https://www.gdsgt.net';
export const ERP_URL = 'https://erp.grupogds.co';

export const WHATSAPP_NUMBER = '50259961882';
export const PHONE = '+502-2354-5437';
export const EMAIL = 'info@grupogds.co';

export const ADDRESS = {
  streetAddress: 'K.M. 15.5 Carr. a El Salvador, Plaza Condado Concepción, 5to. Nivel Of. 5F-1 y 5F-2',
  addressLocality: 'Guatemala',
  addressRegion: 'Guatemala',
  addressCountry: 'GT',
};

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/grupo-gds',
  'https://www.facebook.com/grupogds',
];

export const CUSTOM_SOFTWARE_PATH = '/software-a-la-medida';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
