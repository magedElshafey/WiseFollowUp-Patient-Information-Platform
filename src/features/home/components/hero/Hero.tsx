import React from "react";
import HeroTextBlock from "./text-block/HeroTextBlock";
import SearchBar from "@/features/search-advanced/components/SearchBar";
import HeroLayout from "@/common/layout/hero-layout/HeroLayout";
import { useSearchController } from "@/features/search-advanced/hooks/useSearchController";
import { useTranslation } from "react-i18next";
import useGetHero from "../../api/hero/useGetHero";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import { Link } from "react-router-dom";

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
              <SearchBar
                controller={searchController}
                variant="hero"
                placeholder={t(
                  "Not sure where to start? Try searching a symptom, condition, or body system.",
                )}
              />
              <Link
                to="/search-advanced"
                className="text-xs underline text-primary w-fit"
              >
                {t("Advanced search")}
              </Link>
              {query.data.featured_words?.length > 0 && (
                <div className="space-y-2 my-9 flex flex-col items-center">
                  {/* Label / CTA */}
                  <p className="text-xs font-medium text-text-muted">
                    {t("Try searching for")}
                  </p>

                  {/* Featured buttons */}
                  <div className="flex flex-wrap gap-2">
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
