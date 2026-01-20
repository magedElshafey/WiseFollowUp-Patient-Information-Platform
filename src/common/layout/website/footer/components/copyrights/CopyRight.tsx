import { Link } from "react-router-dom";
import { FooterLink } from "../../types/footer.types";
import { openCookieSettings } from "@/features/cookies/CookieConsentProvider";
import useGetAllPolicies from "@/features/policies/api/useGetAllPolicies";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useWebsiteSettings } from "@/store/WebsiteSettingsProvider";

const CopyRight: React.FC = () => {
  const { settings, isLoading: isSettingsLoading } = useWebsiteSettings();
  const { data, isLoading: isPoliciesLoading } = useGetAllPolicies();
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const policyLinks = useMemo<FooterLink[]>(() => {
    if (!data?.data?.length) return [];
    return data.data.map((policy) => ({
      label: policy.title,
      href: `/policies/${policy.slug}`,
    }));
  }, [data]);

  const hasDisclaimer = Boolean(settings?.copyrights_disclaimer);
  const hasPolicies = policyLinks.length > 0;

  return (
    <div
      className="
        mt-6 pt-4 border-t border-border-subtle
        flex flex-col gap-3
        md:flex-row md:items-center md:justify-between
      "
    >
      {/* ================= LEFT ================= */}
      <div className="text-xs text-text-muted max-w-xl">
        {/* Copyright line (static → no CLS) */}
        <p className="mb-1">
          &copy; {year}{" "}
          <a
            className="text-primary font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medwisely.com/"
          >
            medwisely
          </a>
          . {t("All rights reserved")}.
        </p>

        {/* Disclaimer */}
        {isSettingsLoading ? (
          <div aria-hidden className="mt-1 space-y-1">
            <div className="h-3 w-full rounded bg-border-subtle animate-pulse" />
            <div className="h-3 w-5/6 rounded bg-border-subtle animate-pulse" />
          </div>
        ) : hasDisclaimer ? (
          <p className="text-[11px] leading-relaxed">
            {settings?.copyrights_disclaimer}
          </p>
        ) : null}
      </div>

      {/* ================= RIGHT ================= */}
      {(isPoliciesLoading || hasPolicies) && (
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          {/* Policies pills */}
          {isPoliciesLoading ? (
            <ul aria-hidden className="flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={i}
                  className="h-6 w-20 rounded-pill bg-border-subtle animate-pulse"
                />
              ))}
            </ul>
          ) : hasPolicies ? (
            <ul className="flex flex-wrap items-center gap-2 text-xs">
              {policyLinks.map((item, index) => (
                <li key={item.href + index}>
                  <Link
                    to={item.href}
                    aria-label={item.label}
                    className="
                      inline-flex items-center rounded-pill
                      border border-border-subtle
                      px-3 py-1
                      text-[11px] text-text-muted
                      hover:text-text-main hover:bg-bg-page
                      focus-visible:outline-none focus-visible:ring-2
                      focus-visible:ring-primary focus-visible:ring-offset-2
                      focus-visible:ring-offset-bg-surface
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

          {/* Cookie settings (always visible → stable layout) */}
          <button
            type="button"
            onClick={openCookieSettings}
            className="
              inline-flex items-center rounded-pill
              border border-border-subtle
              px-3 py-1 text-[11px] text-text-muted
              hover:bg-bg-page hover:text-text-main
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              focus-visible:ring-offset-bg-surface
            "
          >
            {t("Cookie settings")}
          </button>
        </div>
      )}
    </div>
  );
};

export default CopyRight;
