import { HeroQuickLink } from "../data/heroData";
import HeroQuickLinkCard from "./HeroQuickLinkCard";

type HeroQuickLinksProps = {
  quickLinks: HeroQuickLink[];
};

const HeroQuickLinks: React.FC<HeroQuickLinksProps> = ({ quickLinks }) => {
  if (!quickLinks.length) return null;

  return (
    <section
      aria-label="Quick access to popular leaflet categories and tools"
      className="space-y-3"
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
          Quick access
        </h2>
        <p className="text-xs text-text-muted">
          Start with one of these common areas.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((item) => (
          <HeroQuickLinkCard key={item.id} link={item} />
        ))}
      </div>
    </section>
  );
};
export default HeroQuickLinks;
