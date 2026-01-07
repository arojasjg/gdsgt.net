/**
 * Google Analytics 4 (GA4) Integration
 * 
 * Client-side tracking with gtag.js
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

/**
 * Initialize Google Analytics
 */
export function initGA() {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  
  // Load gtag.js script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);
  
  // Initialize dataLayer
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll send manually
  });
}

/**
 * Track page view (GA4-specific)
 */
export function trackGA4PageView(url: string, title?: string) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  if (!window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: title || document.title,
  });
}

/**
 * Track custom event (GA4-specific)
 */
export function trackGA4Event(
  eventName: string,
  params?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  if (!window.gtag) return;
  
  window.gtag('event', eventName, params);
}

/**
 * Track conversion
 */
export function trackConversion(conversionId: string, params?: any) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  if (!window.gtag) return;
  
  window.gtag('event', 'conversion', {
    send_to: conversionId,
    ...params,
  });
}

/**
 * Set user properties
 */
export function setUserProperties(properties: {
  user_id?: string;
  user_type?: string;
  [key: string]: any;
}) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  if (!window.gtag) return;
  
  window.gtag('set', 'user_properties', properties);
}

/**
 * Get GA4 script tags (for Next.js Script component)
 */
export function getGAScripts() {
  if (!GA_MEASUREMENT_ID) return [];
  
  return [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
      strategy: 'afterInteractive' as const,
    },
    {
      id: 'ga-init',
      strategy: 'afterInteractive' as const,
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
      },
    },
  ];
}
