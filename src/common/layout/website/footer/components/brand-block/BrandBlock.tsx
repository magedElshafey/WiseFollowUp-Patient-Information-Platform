import Logo from "@/common/components/logo/Logo";
import { useWebsiteSettings } from "@/store/WebsiteSettingsProvider";
import { useTranslation } from "react-i18next";

const BrandBlock: React.FC = () => {
  const { settings, isLoading } = useWebsiteSettings();
  const { t } = useTranslation();

  const slogan = settings?.app_slogan;
  const notEmergency = settings?.not_emergency;
  const logo = settings?.app_logo
  const forClinicians = settings?.for_clinicians;

  return (
    <section
      aria-label="About Wise Follow Up"
      className="
        rounded-card border border-border-subtle bg-bg-page
        p-4 sm:p-5
        flex flex-col gap-2
      "
    >
      {/* Logo (fixed height → no CLS) */}
      <div className="h-11">
        <Logo src={logo || "/images/footer-logo.png"} />
      </div>

      {/* Slogan */}
      {isLoading ? (
        <div
          aria-hidden
          className="h-4 w-4/5 rounded bg-border-subtle animate-pulse"
        />
      ) : slogan ? (
        <p className="text-xs md:text-sm text-text-muted leading-relaxed">
          {slogan}
        </p>
      ) : null}

      {/* Info blocks */}
      {(isLoading || notEmergency || forClinicians) && (
        <div
          className="
            grid gap-3
            sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)]
            text-xs
          "
        >
          {/* Not emergency */}
          <div className="space-y-1">
            <p className="font-medium text-text-main">
              {t("Not an emergency service")}
            </p>

            {isLoading ? (
              <>
                <div className="h-3 w-full rounded bg-border-subtle animate-pulse" />
                <div className="h-3 w-5/6 rounded bg-border-subtle animate-pulse" />
              </>
            ) : notEmergency ? (
              <p className="text-text-muted leading-relaxed">{notEmergency}</p>
            ) : null}
          </div>

          {/* For clinicians */}
          <div className="space-y-1">
            <p className="font-medium text-text-main">{t("For clinicians")}</p>

            {isLoading ? (
              <>
                <div className="h-3 w-full rounded bg-border-subtle animate-pulse" />
                <div className="h-3 w-4/6 rounded bg-border-subtle animate-pulse" />
              </>
            ) : forClinicians ? (
              <p className="text-text-muted leading-relaxed">{forClinicians}</p>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandBlock;
