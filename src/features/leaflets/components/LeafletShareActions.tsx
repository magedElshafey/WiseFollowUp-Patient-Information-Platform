import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
type Props = {
  title: string;
};

const LeafletShareActions: FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  const url = typeof window !== "undefined" ? window.location.href : "";

  const message = useMemo(() => {
    return `
    Read this leaflet on WiseFollowUp 👇
    
📄 ${title}


${url}
    `.trim();
  }, [title, url]);

  const encodedMessage = encodeURIComponent(message);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // لو عندك toast system سيبه هنا
    } catch {
      // silent fail
    }
  };

  return (
    <div className="space-y-2" aria-label="Share leaflet">
      <p className="text-[11px] uppercase tracking-wide text-text-muted">
        {t("Share leaflet")}
      </p>

      <div className="flex flex-wrap gap-2">
        {/* Copy link */}
        <button
          type="button"
          onClick={handleCopy}
          className="
            rounded-pill
            border border-border-subtle
            px-3 py-1
            text-xs text-text-main
            hover:bg-bg-page
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-bg-surface
          "
          aria-label="Copy leaflet link"
        >
          {t("Copy link")}
        </button>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-pill
            border border-border-subtle
            px-3 py-1
            text-xs text-text-main
            hover:bg-bg-page
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-bg-surface
          "
          aria-label="Share leaflet on WhatsApp"
        >
          {t("Whatsapp")}
        </a>

        {/* Email */}
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedMessage}`}
          className="
            rounded-pill
            border border-border-subtle
            px-3 py-1
            text-xs text-text-main
            hover:bg-bg-page
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-bg-surface
          "
          aria-label="Share leaflet by email"
        >
          {t("Email")}
        </a>
      </div>
    </div>
  );
};

export default LeafletShareActions;
