import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDS - Soluciones Integrales para tu Empresa',
  description: 'Suite completa de ERP, BI, CRM, IA y Data Engineering. Software personalizado y equipos dedicados.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
