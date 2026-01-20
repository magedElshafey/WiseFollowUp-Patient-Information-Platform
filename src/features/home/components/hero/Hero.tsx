import React from "react";
import HeroTextBlock from "./text-block/HeroTextBlock";
import SearchBar from "@/features/search-advanced/components/SearchBar";
import HeroLayout from "@/common/layout/hero-layout/HeroLayout";
import { useSearchController } from "@/features/search-advanced/hooks/useSearchController";
import { useTranslation } from "react-i18next";
import useGetHero from "../../api/hero/useGetHero";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";

const HomeHero: React.FC = () => {
  const searchController = useSearchController({ mode: "normal" });
  const query = useGetHero();
  const { t } = useTranslation();

  return (
    <HeroLayout aria-labelledby="home-hero-heading">
      <FetchHandler queryResult={query} skeletonType="home-hero">
        {query.data?.is_active ? (
          <div
            className="
              mx-auto max-w-5xl
              min-h-[420px]
              rounded-card
              bg-bg-surface/70
              backdrop-blur-sm
              p-6 md:p-8
              shadow-soft
            "
          >
            <HeroTextBlock
              title={query.data.heading}
              desc={query.data.description?.[0]}
            />

            <div className="mt-8 md:mt-10">
              <SearchBar controller={searchController} variant="hero" />

              <p className="text-xs sm:text-sm text-text-muted mt-2 mb-5">
                {t(
                  "Not sure where to start? Try searching a symptom, condition, or body system.",
                )}
              </p>

              {query.data.featured_words?.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {query.data.featured_words.map((item) => (
                    <button
                      key={item}
                      onClick={() => searchController.handleSelect(item)}
                      className="rounded-pill border border-border-subtle px-3 py-1 text-xs text-text-muted transition hover:bg-primary-soft hover:text-primary"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}

              {query.data.features?.length > 0 && (
                <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-text-muted">
                  {query.data.features.map((item, index) => (
                    <span key={index}>✔ {item}</span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ) : null}
      </FetchHandler>
    </HeroLayout>
  );
};

export default HomeHero;
