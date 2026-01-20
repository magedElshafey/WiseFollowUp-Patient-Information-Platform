import type { Founder } from "../types/aboutFounders";
import SocialButton from "./SocialButton";
import { SOCIAL_CONFIG } from "../utils/socialConfig";
import { ImageWithPlaceholder } from "./HeroImageWithPlaceholder";

interface Props extends Founder {
  reverse?: boolean;
}

export default function FounderProfile({
  name,
  position,
  image,
  bio,
  socials,
  reverse = false,
}: Props) {
  return (
    <section className="bg-bg-surface py-section-y">
      <div
        className={`
          containerr
          grid gap-12 items-center
          lg:grid-cols-2
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* Image */}
        <ImageWithPlaceholder
          src={image}
          alt={name}
          className="
            w-full
            h-[420px] md:h-[480px]
            rounded-card
            shadow-soft
          "
        />

        {/* Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
            {name}
          </h2>

          <p className="mt-1 text-primary font-medium text-sm md:text-base">
            {position}
          </p>

          <p className="mt-6 text-base md:text-lg text-text-muted leading-relaxed whitespace-pre-line">
            {bio.join("\n")}
          </p>

          {socials?.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map(({ type, link }, index) => {
                const key = type.toLowerCase();
                const config = SOCIAL_CONFIG[key];

                if (!config || !link) return null;

                const { Icon, label } = config;

                return (
                  <SocialButton
                    key={`${key}-${index}`}
                    href={link}
                    label={label}
                  >
                    <Icon size={18} />
                    <span className="hidden sm:inline">{label}</span>
                  </SocialButton>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
