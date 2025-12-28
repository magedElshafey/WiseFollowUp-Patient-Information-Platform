import HeroBadge from "../hero-badge/HeroBadge";

const HeroTextBlock: React.FC = () => {
  return (
    <div className="space-y-4 md:space-y-5">
      <p className="inline-flex items-center rounded-pill bg-primary-soft/70 px-3 py-1 text-xs md:text-sm font-medium text-primary">
        Designed for patients in the UK
      </p>

      <div className="space-y-3 md:space-y-4">
        <h1
          id="home-hero-heading"
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold tracking-tight text-text-main
          "
        >
          Clear patient leaflets{" "}
          <span className="text-primary">and healthcare tools</span> in one
          place.
        </h1>

        <p
          id="home-hero-description"
          className="max-w-xl text-sm sm:text-base text-text-muted"
        >
          Wise Follow Up helps patients and carers find UK-friendly leaflets,
          tools, and explanations they can actually understand – reviewed by
          clinicians, written in plain language.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-muted">
        <HeroBadge label="Plain-language patient leaflets" />
        <HeroBadge label="Tools built for real-world clinics" />
        <HeroBadge label="Mobile-friendly and printable" />
      </div>
    </div>
  );
};

export default HeroTextBlock;
