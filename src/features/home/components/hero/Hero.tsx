import React from "react";
import HeroTextBlock from "./text-block/HeroTextBlock";
import SearchBar from "@/features/search-advanced/components/SearchBar";
import HeroLayout from "@/common/layout/hero-layout/HeroLayout";
import { useSearchController } from "@/features/search-advanced/hooks/useSearchController";

const QUICK_SUGGESTIONS = [
  "Chest pain",
  "After surgery",
  "Medication side effects",
  "Skin rash",
];

const HomeHero: React.FC = () => {
  const searchController = useSearchController({
    mode: "normal",
  });

  return (
    <HeroLayout aria-labelledby="home-hero-heading">
      <div className="mx-auto max-w-5xl rounded-card bg-bg-surface/70 backdrop-blur-sm p-6 md:p-8 shadow-soft">
        <HeroTextBlock />
        <div className="mt-8 md:mt-10">
          <SearchBar controller={searchController} variant="hero" />
          {/* guiding sentence */}
          <p className="text-xs sm:text-sm text-text-muted mt-2 mb-5">
            Not sure where to start? Try searching a symptom, condition, or body
            system.
          </p>
          {/* quick suggestions */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {QUICK_SUGGESTIONS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => searchController.handleSelect(item)}
                className="rounded-pill border border-border-subtle px-3 py-1 text-xs text-text-muted transition hover:bg-primary-soft hover:text-primary"
              >
                {item}
              </button>
            ))}
          </div>

          {/* trust micro badges */}
          <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-text-muted">
            <span>✔ Clinically reviewed</span>
            <span>•</span>
            <span>✔ Plain language</span>
            <span>•</span>
            <span>✔ UK-focused</span>
          </p>
        </div>
      </div>
    </HeroLayout>
  );
};

export default HomeHero;
