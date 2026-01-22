import HeroLayout from "@/common/layout/hero-layout/HeroLayout";
import SearchBar from "@/features/search-advanced/components/SearchBar";
import { useSearchController } from "../hooks/useSearchController";
import MainSelect from "@/common/components/inputs/MainSelect";
import { useTranslation } from "react-i18next";
import SearchHistoryPanel from "../components/SearchHistoryPanel";
import PageSeo from "@/common/components/seo/PageSeo";
const SEARCH_TYPES = [
  { id: 0, name: "Default search", key: undefined },
  { id: 1, name: "Trust ID", key: "trust_id" },
  { id: 2, name: "organizations name", key: "organization_id" },
  // { id: 3, name: "Date", key: "date" },
];

const AdvancedSearch = () => {
  const controller = useSearchController({ mode: "advanced" });
  const { t } = useTranslation();

  const isTrustId = controller.payload.key === "trust_id";

  return (
    <>
      <PageSeo
        title="Advanced medical leaflet search"
        description="Search leaflets by symptom, Trust ID, author or date"
        canonicalPath="/advanced-search"
      />
      <HeroLayout minHeight="min-h-[65vh]">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-text-main">
              {t("Advanced search")}
            </h1>
            <p className="mt-2 text-text-muted max-w-xl mx-auto">
              {t(
                "Refine your search using keywords, Trust ID, author name, or date range.",
              )}
            </p>
          </div>

          {/* Search Card */}
          <div
            className="
            bg-bg-surface
            rounded-card
            shadow-soft
            border border-border-subtle
            p-6 md:p-8
            space-y-6
          "
          >
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 items-end">
              {/* Search type */}
              <MainSelect
                options={SEARCH_TYPES}
                placeholder={t("Search type")}
                onSelect={(opt) =>
                  controller.setPayload({
                    key: opt.key as any,
                    value: "",
                  })
                }
              />

              {/* Dynamic input */}

              <SearchBar
                variant="compact"
                controller={controller}
                placeholder={
                  isTrustId ? t("Enter Trust ID (e.g. NHS-OPH-221)") : undefined
                }
              />
            </div>

            {/* Hint */}
            <p className="text-sm text-text-muted">
              {isTrustId &&
                t(
                  "Trust ID is a reference code for a leaflet, usually provided by the healthcare organization.",
                )}

              {!controller.payload.key &&
                t("Search symptoms, conditions, or keywords.")}
            </p>

            {/* Search history */}
          </div>
        </div>
      </HeroLayout>
      <div className="containerr">
        <SearchHistoryPanel
          onSelect={(value) => controller.handleSelect(value)}
        />
      </div>
    </>
  );
};

export default AdvancedSearch;
