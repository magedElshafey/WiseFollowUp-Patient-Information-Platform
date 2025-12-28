import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CookieConsentState, CookiePreferences } from "./cookie-consent";
import { defaultPrefs, readConsent, writeConsent } from "./cookie-consent";

type CookieConsentCtx = {
  consent: CookieConsentState | null;
  prefs: CookiePreferences;
  hasDecision: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePrefs: (prefs: Omit<CookiePreferences, "essential">) => void;
};

const CookieConsentContext = createContext<CookieConsentCtx | null>(null);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [consent, setConsent] = useState<CookieConsentState | null>(() =>
    readConsent()
  );

  const prefs = consent?.preferences ?? defaultPrefs;
  const hasDecision = !!consent;

  useEffect(() => {
    const onChanged = (e: Event) => {
      const ce = e as CustomEvent<CookieConsentState>;
      setConsent(ce.detail);
    };
    window.addEventListener("wf:cookie-consent-changed", onChanged);
    return () =>
      window.removeEventListener("wf:cookie-consent-changed", onChanged);
  }, []);

  // OPTIONAL: Gate analytics loading here (example placeholder)
  useEffect(() => {
    if (!consent) return;

    // Only run non-essential tools AFTER consent
    if (consent.preferences.analytics) {
      // loadAnalytics();
    }
    if (consent.preferences.marketing) {
      // loadMarketing();
    }
  }, [consent]);

  const value = useMemo<CookieConsentCtx>(() => {
    return {
      consent,
      prefs,
      hasDecision,
      acceptAll: () =>
        setConsent(
          writeConsent({ analytics: true, functional: true, marketing: true })
        ),
      rejectNonEssential: () =>
        setConsent(
          writeConsent({
            analytics: false,
            functional: false,
            marketing: false,
          })
        ),
      savePrefs: (p) => setConsent(writeConsent(p)),
    };
  }, [consent, prefs, hasDecision]);

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx)
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider"
    );
  return ctx;
}
