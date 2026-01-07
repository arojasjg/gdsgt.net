/**
 * Client logos / social proof (English)
 *
 * Source: gdsgt.net "CLIENTES" section (logos) + internal mapping provided by user (contacts).
 */

export interface ClientLogo {
  company: string;
  contact_name?: string;
  logo_src: string;
}

export const clientLogosEn: ClientLogo[] = [
  {
    company: 'IMESSA',
    contact_name: 'Marco Yoc',
    logo_src: '/clients/imessa.png',
  },
  {
    company: 'DOGSMART',
    contact_name: 'Lionel Chavez',
    logo_src: '/clients/dogsmart.png',
  },
  {
    company: 'Diagnos / Diagnosalud, S.A.',
    logo_src: '/clients/diagnos.png',
  },
  {
    company: 'Comercial Kerly',
    logo_src: '/clients/comercial-kerly.png',
  },
  {
    company: 'SERPICO, S.A.',
    logo_src: '/clients/serpico.png',
  },
  {
    company: 'Soluciones Arquitectónicas',
    logo_src: '/clients/soluciones-arquitectonicas.png',
  },
  {
    company: 'C.R.M.',
    logo_src: '/clients/crm.png',
  },
  {
    company: 'Autolite',
    contact_name: 'Alejandro Pacay',
    logo_src: '/clients/cliente-unknown-2.png',
  },
  {
    company: 'Dermatantigua, S.A.',
    contact_name: 'Marco Paz',
    logo_src: '/clients/cliente-unknown-1.png',
  },
  {
    company: 'Piedritecu',
    contact_name: 'Luisa Paiz',
    logo_src: '/clients/gds-mark.png',
  },
];

