export type ConsentStatus = 'granted' | 'denied' | 'pending';

export interface ConsentState {
  analytics: ConsentStatus;
  marketing: ConsentStatus;
}

const CONSENT_KEY = 'gds_consent';

export function getConsentState(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

/**
 * Timezones of regions that require opt-in consent before tracking
 * (EU/EEA, UK, Switzerland). All `Europe/*` zones are included on purpose:
 * showing the banner to a few extra visitors is the safe side.
 */
const OPT_IN_TIMEZONE = /^(Europe\/|Atlantic\/(Canary|Madeira|Azores|Reykjavik|Faroe)$|Arctic\/Longyearbyen$)/;

/** Whether the visitor appears to be in a region that requires opt-in consent. */
export function requiresOptIn(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return OPT_IN_TIMEZONE.test(Intl.DateTimeFormat().resolvedOptions().timeZone || '');
  } catch {
    return false;
  }
}

/** Google Consent Mode v2 fields for a consent state. */
export function toGoogleConsent(state: ConsentState) {
  return {
    analytics_storage: state.analytics,
    ad_storage: state.marketing,
    ad_user_data: state.marketing,
    ad_personalization: state.marketing,
  };
}

export function setConsentState(state: ConsentState): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable (private mode): the choice applies to this page only
  }
  
  // Update Google consent
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', toGoogleConsent(state));
  }

  // Update Meta Pixel consent
  if (typeof window.fbq === 'function') {
    window.fbq('consent', state.marketing === 'granted' ? 'grant' : 'revoke');
  }
}

/**
 * Visitors in opt-in regions are tracked only after accepting the banner;
 * everyone else is tracked unless they opted out.
 */
export function hasConsent(): boolean {
  const state = getConsentState();
  if (state) return state.analytics === 'granted';
  return !requiresOptIn();
}

/** Consent to apply before the visitor makes a choice. */
export function getInitialConsent(): ConsentState {
  const state = getConsentState();
  if (state) return state;
  const status: ConsentStatus = requiresOptIn() ? 'denied' : 'granted';
  return { analytics: status, marketing: status };
}

/** Event name used to reopen the consent banner (e.g. from the footer). */
export const OPEN_CONSENT_EVENT = 'gds:open-consent';

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
