import { hasConsent } from './consent';

export type EventName =
  | 'click_demo'
  | 'view_pricing'
  | 'submit_lead'
  | 'book_demo'
  | 'download_resource'
  | 'click_integration'
  | 'view_security'
  | 'view_module'
  | 'view_industry'
  | 'compare_product'
  | 'view_case_study'
  | 'newsletter_signup'
  | 'contact_form_submit'
  | 'phone_click'
  | 'email_click'
  | 'experiment_exposure'
  | 'experiment_conversion'
  | 'partner_application_submitted'
  | string; // Allow custom event names

export interface EventPayload {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/** Our events mapped to GA4 recommended events (used for Google Ads conversions). */
const GA_STANDARD_EVENTS: Record<string, string> = {
  submit_lead: 'generate_lead',
  contact_form_submit: 'generate_lead',
  partner_application_submitted: 'generate_lead',
};

/** Our events mapped to Meta Pixel standard events. */
const META_STANDARD_EVENTS: Record<string, string> = {
  submit_lead: 'Lead',
  contact_form_submit: 'Lead',
  partner_application_submitted: 'SubmitApplication',
  click_whatsapp: 'Contact',
  phone_click: 'Contact',
  email_click: 'Contact',
  book_demo: 'Schedule',
};

export function track(eventName: EventName, payload: EventPayload = {}): void {
  if (!hasConsent()) {
    console.debug('[Analytics] Skipping event (no consent):', eventName);
    return;
  }

  if (typeof window === 'undefined') return;

  // GTM dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }

  // GA4 gtag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
    const gaStandard = GA_STANDARD_EVENTS[eventName];
    if (gaStandard) window.gtag('event', gaStandard, payload);
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    const metaStandard = META_STANDARD_EVENTS[eventName];
    if (metaStandard) {
      window.fbq('track', metaStandard, payload);
    } else {
      window.fbq('trackCustom', eventName, payload);
    }
  }

  console.debug('[Analytics] Event tracked:', eventName, payload);
}

export function trackPageView(url: string, title: string): void {
  if (!hasConsent()) return;

  track('page_view' as EventName, {
    page_location: url,
    page_title: title,
  });
}
