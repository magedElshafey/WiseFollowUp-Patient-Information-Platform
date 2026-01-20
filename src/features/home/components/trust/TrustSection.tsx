import React, { useState } from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import useGetTrust from "../../api/trust/useGetTrust";
import { useTranslation } from "react-i18next";
import { TrustImagePlaceHolder } from "./TrustImagePlaceholder";

const TrustSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const query = useGetTrust();
  const { t } = useTranslation();

  return (
    <FetchHandler queryResult={query} skeletonType="trust">
      {query.data?.is_active ? (
        <section
          aria-labelledby="trust-heading"
          className="section-shell bg-bg-alt border-t border-border-subtle"
        >
          <div className="containerr">
            <div className="rounded-card bg-bg-surface p-5 md:p-6">
              <SectionHeader
                title={query.data.heading}
                titleId="trust-heading"
                description={query.data.description?.[0]}
                hasViewAll={false}
              />

              {/* Trust pillars */}
              {query.data.cards?.length > 0 && (
                <ul
                  role="list"
                  className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3"
                >
                  {query.data.cards.map((p, index) => (
                    <li
                      key={index}
                      className="rounded-card border border-border-subtle bg-bg-alt p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg"
                          aria-hidden
                        >
                          <TrustImagePlaceHolder
                            src={p.image}
                            alt={p.title}
                            className="h-9 w-9 rounded-lg"
                          />
                        </div>

                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold text-text-main">
                            {p.title}
                          </h3>
                          <p className="text-xs text-text-muted">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Reassurance box (fixed space) */}
              <div className="mt-4 rounded-card border border-border-subtle bg-bg-alt p-4">
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  className="
                    flex w-full items-center justify-between
                    text-xs font-medium text-text-main
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-primary
                    focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
                  "
                >
                  <span>{t("Important information")}</span>

                  <span
                    aria-hidden
                    className={`transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${open ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-xs text-text-muted leading-relaxed">
                    {t(
                      "Information on this website is for guidance only and does not replace medical advice. If you are worried about sudden or severe symptoms, please seek urgent medical care.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </FetchHandler>
  );
};

export default TrustSection;
