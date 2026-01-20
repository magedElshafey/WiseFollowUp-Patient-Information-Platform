import { FC, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SearchBar from "@/features/search-advanced/components/SearchBar";
import { useSearchController } from "@/features/search-advanced/hooks/useSearchController";

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
    <header className="border-b border-border-subtle bg-bg-page">
      <div className="containerr py-6 space-y-3">
        <h1 className="text-2xl font-bold text-text-main">
          Browse all leaflets
        </h1>

        <p className="text-sm text-text-muted max-w-xl">
          Trusted patient information reviewed by healthcare professionals.
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
  );
};

export default AllLeafletsSearchHeader;
