export type ConsentStatus = 'granted' | 'denied' | 'pending';

export interface ConsentState {
  analytics: ConsentStatus;
  marketing: ConsentStatus;
}

const CONSENT_KEY = 'gds_consent';

export function getConsentState(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setConsentState(state: ConsentState): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  
  // Update GTM consent
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: state.analytics,
      ad_storage: state.marketing,
    });
  }
}

export function hasConsent(): boolean {
  const state = getConsentState();
  return state?.analytics === 'granted';
}

export function initConsent(): void {
  if (typeof window === 'undefined') return;
  
  // Set default consent to denied
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      wait_for_update: 500,
    });
  }
  
  // Apply stored consent if available
  const state = getConsentState();
  if (state) {
    setConsentState(state);
  }
}
