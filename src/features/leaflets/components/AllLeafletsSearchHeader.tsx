import { FC, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SearchBar from "@/features/search-advanced/components/SearchBar";
import { useSearchController } from "@/features/search-advanced/hooks/useSearchController";
import HeroLayout from "@/common/layout/hero-layout/HeroLayout";

const AllLeafletsSearchHeader: FC = () => {
  const { t } = useTranslation();
  const [params] = useSearchParams();

  const searchController = useSearchController({
    mode: "normal",
    initialPayload: {
      value: params.get("filter-search") || "",
    },
  });
  const searchValue = params.get("filter-search") || "";

  // 🔥 sync payload with URL
  useEffect(() => {
    searchController.setPayload((prev) => ({
      ...prev,
      value: searchValue,
    }));
  }, [searchValue]);
  return (
    <HeroLayout minHeight="min-h-[30vh]">
      <header className="containerr py-6 ">
        <div
          className="space-y-2  mx-auto max-w-5xl
              min-h-[200px]
              rounded-card
              bg-bg-surface/70
              backdrop-blur-sm
              p-6 md:p-8
              shadow-soft"
        >
          <h1 className="text-2xl font-bold text-primary">
            {t("Browse all leaflets")}
          </h1>

          <p className="text-sm text-text-muted max-w-xl">
            {t(
              "Trusted patient information reviewed by healthcare professionals.",
            )}
          </p>

          <SearchBar variant="compact" controller={searchController} />

          <Link
            to="/search-advanced"
            className="text-xs underline text-primary w-fit"
          >
            {t("Advanced search")}
          </Link>
        </div>
      </header>
    </HeroLayout>
  );
};

export default AllLeafletsSearchHeader;
