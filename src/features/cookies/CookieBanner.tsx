import React, { useEffect, useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import CookiePreferencesModal from "./CookiePreferencesModal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CookieBanner: React.FC = () => {
  const { hasDecision, acceptAll } = useCookieConsent();
  const [openPrefs, setOpenPrefs] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const openHandler = () => setOpenPrefs(true);
    window.addEventListener("wf:open-cookie-settings", openHandler);
    return () =>
      window.removeEventListener("wf:open-cookie-settings", openHandler);
  }, []);

  if (hasDecision)
    return (
      <CookiePreferencesModal
        open={openPrefs}
        onClose={() => setOpenPrefs(false)}
      />
    );

  return (
    <>
      <div
        role="region"
        aria-label="Cookie consent"
        className="
          fixed inset-x-0 bottom-0 z-50
          border-t border-border-subtle bg-bg-surface/95 backdrop-blur
        "
      >
        <div className="containerr py-3">
          <div className="grid gap-3 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-text-main">
                {t("Cookies on WiseFollowUp")}
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                {t(
                  "We use essential cookies for site functionality. With your permission, we also use optional cookies (e.g., analytics) to improve the website. You can change your choice at any time in Cookie settings.",
                )}
              </p>
              <Link
                to="/policies/cookies-policy"
                className="
                  inline-flex text-xs text-primary hover:underline
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface rounded-sm
                "
              >
                {t("Read our Cookies Policy")}
              </Link>
            </div>

            {/* Buttons: equal prominence (ICO expectation) */}
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => setOpenPrefs(true)}
                className="
                  rounded-pill border border-border-subtle bg-bg-surface
                  px-4 py-2 text-sm font-semibold text-text-main
                  hover:bg-bg-page
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface
                "
              >
                {t("Manage")}
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="
                  rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white
                  shadow-soft hover:brightness-110
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface
                "
              >
                {t("Accept all")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookiePreferencesModal
        open={openPrefs}
        onClose={() => setOpenPrefs(false)}
      />
    </>
  );
};

export default CookieBanner;
