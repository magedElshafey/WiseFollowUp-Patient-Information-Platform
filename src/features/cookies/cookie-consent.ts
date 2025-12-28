export type CookieCategory =
  | "essential"
  | "analytics"
  | "functional"
  | "marketing";

export type CookiePreferences = {
  essential: true; // always true
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

export type CookieConsentState = {
  version: number;
  updatedAt: string; // ISO string
  preferences: CookiePreferences;
};

const STORAGE_KEY = "wf_cookie_consent";
const CONSENT_VERSION = 1;

export const defaultPrefs: CookiePreferences = {
  essential: true,
  analytics: false,
  functional: false,
  marketing: false,
};

export function readConsent(): CookieConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsentState;
    if (!parsed?.preferences?.essential) return null;

    // if version changed, re-consent
    if (parsed.version !== CONSENT_VERSION) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(
  preferences: Omit<CookiePreferences, "essential"> & { essential?: true }
): CookieConsentState {
  const state: CookieConsentState = {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    preferences: {
      essential: true,
      analytics: !!preferences.analytics,
      functional: !!preferences.functional,
      marketing: !!preferences.marketing,
    },
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(
    new CustomEvent("wf:cookie-consent-changed", { detail: state })
  );
  return state;
}

export function clearConsent() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent("wf:cookie-consent-cleared"));
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("wf:open-cookie-settings"));
}
