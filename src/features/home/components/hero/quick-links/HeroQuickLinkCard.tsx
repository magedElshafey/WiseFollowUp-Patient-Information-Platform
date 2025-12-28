import React, { memo } from "react";
import { HeroQuickLink } from "../data/heroData";
import Card from "@/common/components/card/Card";
import { useNavigate } from "react-router-dom";
type HeroQuickLinkCardProps = {
  link: HeroQuickLink;
};

const HeroQuickLinkCard: React.FC<HeroQuickLinkCardProps> = memo(({ link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link?.href);
  };
  return (
    <Card onClick={handleClick} interactive={true} className="cursor-pointer">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-text-main">{link.label}</h3>
        <span
          aria-hidden="true"
          className="
            inline-flex h-6 w-6 items-center justify-center
            rounded-full bg-primary-soft text-xs text-primary
            transition-transform group-hover:translate-x-0.5
          "
        >
          →
        </span>
      </div>

      <p className="text-xs text-text-muted">{link.description}</p>
    </Card>
  );
});

HeroQuickLinkCard.displayName = "HeroQuickLinkCard";

export default HeroQuickLinkCard;
