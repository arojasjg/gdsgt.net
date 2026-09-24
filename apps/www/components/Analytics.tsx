'use client';

/**
 * Google tag (GA4 / Google Ads) and Meta Pixel.
 *
 * Configure with env vars (build time):
 *   NEXT_PUBLIC_GOOGLE_TAG_IDS  comma-separated, e.g. "G-XXXXXXX,AW-123456789"
 *   NEXT_PUBLIC_META_PIXEL_ID   e.g. "1234567890"
 * Nothing loads when a variable is empty.
 */

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { track } from '@gds/analytics';

const GOOGLE_TAG_IDS = (process.env.NEXT_PUBLIC_GOOGLE_TAG_IDS || '')
  .split(',')
  .map((id) => id.trim())
  .filter(Boolean);
const META_PIXEL_ID = (process.env.NEXT_PUBLIC_META_PIXEL_ID || '').trim();

export function Analytics() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

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

  return (
    <>
      {GOOGLE_TAG_IDS.length > 0 && (
        <>
          <Script
            id="google-tag"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS[0]}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${GOOGLE_TAG_IDS.map((id) => `gtag('config', ${JSON.stringify(id)});`).join('\n')}`}
          </Script>
        </>
      )}

      {META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${JSON.stringify(META_PIXEL_ID)});
fbq('track', 'PageView');`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${encodeURIComponent(META_PIXEL_ID)}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
