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
  }
}

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
