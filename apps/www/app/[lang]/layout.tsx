import { notFound } from 'next/navigation';
import { Header, Footer, WhatsAppButton } from '@gds/ui';

const locales = ['es', 'en'] as const;
type Locale = (typeof locales)[number];

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <>
      <Header lang={lang as 'es' | 'en'} />
      {children}
      <Footer lang={lang as 'es' | 'en'} />
      <WhatsAppButton lang={lang as 'es' | 'en'} />
    </>
  );
}
