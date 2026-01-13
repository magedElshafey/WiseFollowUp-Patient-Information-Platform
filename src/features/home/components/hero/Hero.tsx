import React from "react";
import Section from "@/common/components/section/Section";
import { DEFAULT_QUICK_LINKS, type HeroQuickLink } from "./data/heroData";
import HeroTextBlock from "./text-block/HeroTextBlock";
import SearchBar from "@/features/search/components/SearchBar";
import { useNavigate } from "react-router-dom";
import HeroQuickLinks from "./quick-links/HeroQuickLinks";
type HomeHeroProps = {
  quickLinks?: HeroQuickLink[];
};

const HomeHero: React.FC<HomeHeroProps> = ({
  quickLinks = DEFAULT_QUICK_LINKS,
}) => {
  const navigate = useNavigate();
  return (
    <Section
      aria-labelledby="home-hero-heading"
      className="
    section-shell
    relative overflow-hidden
    bg-gradient-to-b
    from-primary/20
    via-bg-page
    to-bg-alt
  "
    >
      <span
        aria-hidden="true"
        className="
      absolute inset-x-0 top-0 h-24
      bg-primary/5
    "
      />

      {/* Decorative blobs */}
      <span
        aria-hidden="true"
        className="
      pointer-events-none absolute -top-32 -right-32
      h-96 w-96 rounded-full bg-primary/25 blur-3xl
    "
      />
      <span
        aria-hidden="true"
        className="
      pointer-events-none absolute -bottom-32 -left-32
      h-96 w-96 rounded-full bg-accent/20 blur-3xl
    "
      />
      <div className="containerr relative">
        <HeroTextBlock />

        <div className="mt-8 md:mt-10 space-y-6">
          <SearchBar
            variant="hero"
            onSubmit={(q) => navigate(`/explore?filter-name=${q}&type=all`)}
            onSelectSuggestion={(item) => navigate(`/leaflets/${item.id}`)}
          />

          <HeroQuickLinks quickLinks={quickLinks} />
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
