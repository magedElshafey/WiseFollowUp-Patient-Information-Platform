import HeroLayout from "@/common/layout/hero-layout/HeroLayout";
import { HeroAbout } from "../types/aboutHero.types";
import { ImageWithPlaceholder } from "./HeroImageWithPlaceholder";

export default function FoundersHero({ data }: { data: HeroAbout }) {
  return (
    <HeroLayout minHeight="min-h-[80vh] overflow-y-hidden">
      <div className="relative containerr  lg:pb-40">
        {/* Center story */}
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            {data?.heading}
          </h1>

          <p className="mt-6 text-base md:text-lg text-text-muted leading-relaxed">
            {data?.description}
          </p>
        </div>

        {/* Desktop founders images */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 top-0
            hidden lg:flex
            justify-between
            items-end
          "
        >
          <FounderImage image={data?.anas_image?.image} align="left" />
          <FounderImage image={data?.khaled_image?.image} align="right" />
        </div>

        {/* Mobile fallback */}
        <div className="mt-16 grid gap-8 lg:hidden">
          {[data?.anas_image, data?.khaled_image].map((f, i) => (
            <ImageWithPlaceholder
              key={i}
              src={f?.image}
              alt={f?.title}
              className="
                w-full max-w-sm mx-auto
                aspect-[3/4]
                rounded-card
                shadow-soft
              "
            />
          ))}
        </div>
      </div>
    </HeroLayout>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Helper Image                                  */
/* -------------------------------------------------------------------------- */

function FounderImage({
  image,
  align,
}: {
  image: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`
        relative
        w-[280px] xl:w-[340px]
        ${align === "left" ? "ml-6 xl:ml-12" : "mr-6 xl:mr-12"}
      `}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="
          w-full
          h-[520px] xl:h-[620px]
          object-cover
          rounded-t-[2rem]
          shadow-soft
        "
      />
    </div>
  );
}
