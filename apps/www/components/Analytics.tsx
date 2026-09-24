'use client';

/**
 * Google tag (GA4 / Google Ads) and Meta Pixel, with a region-aware consent banner.
 *
 * Configure with env vars (build time):
 *   NEXT_PUBLIC_GOOGLE_TAG_IDS  comma-separated, e.g. "G-XXXXXXX,AW-123456789"
 *   NEXT_PUBLIC_META_PIXEL_ID   e.g. "1234567890"
 * Nothing loads when a variable is empty.
 *
 * Visitors in opt-in regions (EU/EEA, UK, Switzerland, detected by timezone)
 * start with consent denied and see the banner. Everyone else is tracked by
 * default and can change it via "Preferencias de cookies" in the footer.
 */

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  track,
  getConsentState,
  setConsentState,
  getInitialConsent,
  requiresOptIn,
  toGoogleConsent,
  OPEN_CONSENT_EVENT,
  type ConsentState,
} from '@gds/analytics';

const GOOGLE_TAG_IDS = (process.env.NEXT_PUBLIC_GOOGLE_TAG_IDS || '')
  .split(',')
  .map((id) => id.trim())
  .filter(Boolean);
const META_PIXEL_ID = (process.env.NEXT_PUBLIC_META_PIXEL_ID || '').trim();

const bannerText = {
  es: {
    message:
      'Usamos cookies de analítica y publicidad (Google y Meta) para medir el uso del sitio y mejorar nuestros anuncios. Puedes aceptarlas o rechazarlas.',
    privacy: 'Política de privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar',
  },
  en: {
    message:
      'We use analytics and advertising cookies (Google and Meta) to measure site usage and improve our ads. You can accept or reject them.',
    privacy: 'Privacy policy',
    accept: 'Accept',
    reject: 'Reject',
  },
};

export function Analytics() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const [initialConsent, setInitialConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  // Region and stored choice are only known in the browser.
  useEffect(() => {
    setInitialConsent(getInitialConsent());
    setShowBanner(requiresOptIn() && !getConsentState());

    const open = () => setShowBanner(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  // Meta Pixel only tracks the initial PageView itself; report client-side navigations.
  // (GA4 enhanced measurement already tracks history changes.)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.fbq?.('track', 'PageView');
  }, [pathname]);

  // Site-wide conversion clicks: WhatsApp, phone and email links.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.('a');
      const href = link?.getAttribute('href') || '';
      const payload = { page_path: window.location.pathname, link_url: href };
      if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) track('click_whatsapp', payload);
      else if (href.startsWith('tel:')) track('phone_click', payload);
      else if (href.startsWith('mailto:')) track('email_click', payload);
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  const choose = (granted: boolean) => {
    const status = granted ? 'granted' : 'denied';
    setConsentState({ analytics: status, marketing: status });
    setShowBanner(false);
  };

  const t = pathname?.startsWith('/en') ? bannerText.en : bannerText.es;
  const lang = pathname?.startsWith('/en') ? 'en' : 'es';

  return (
    <>
      {initialConsent && GOOGLE_TAG_IDS.length > 0 && (
        <>
          <Script id="google-tag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', ${JSON.stringify(toGoogleConsent(initialConsent))});
gtag('js', new Date());
${GOOGLE_TAG_IDS.map((id) => `gtag('config', ${JSON.stringify(id)});`).join('\n')}`}
          </Script>
          <Script
            id="google-tag"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS[0]}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {initialConsent && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('consent', ${JSON.stringify(initialConsent.marketing === 'granted' ? 'grant' : 'revoke')});
fbq('init', ${JSON.stringify(META_PIXEL_ID)});
fbq('track', 'PageView');`}
        </Script>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookies"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-gray-200 bg-white shadow-2xl"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center">
            <p className="flex-1 text-sm text-gray-700">
              {t.message}{' '}
              <a href={`/${lang}/privacy`} className="text-primary-600 underline">
                {t.privacy}
              </a>
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => choose(false)}
                className="flex-1 rounded-lg border-2 border-gray-300 px-5 py-2 font-semibold text-gray-800 hover:bg-gray-50 md:flex-none"
              >
                {t.reject}
              </button>
              <button
                type="button"
                onClick={() => choose(true)}
                className="flex-1 rounded-lg bg-primary-600 px-5 py-2 font-semibold text-white hover:bg-primary-700 md:flex-none"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
