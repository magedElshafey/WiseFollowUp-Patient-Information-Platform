// src/features/home/components/hero/HeroSidePanel.tsx
import React from "react";
import HeroMiniStat from "../hero-mini-stat/HeroMiniStat";

const HeroSidePanel: React.FC = () => {
  return (
    <aside
      aria-label="Example of how Wise Follow Up organises medical information"
      className="
        hidden md:block
        bg-bg-surface rounded-card shadow-soft border border-border-subtle
        p-4 sm:p-5 space-y-3
      "
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        A quick glimpse
      </p>

      <p className="font-semibold text-text-main">
        Find the right leaflet in a few clicks
      </p>

      <ul className="space-y-2 text-xs md:text-sm text-text-muted">
        <li className="flex items-start gap-2">
          <span
            className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-soft text-[10px] text-primary"
            aria-hidden="true"
          >
            1
          </span>
          <span>Search by condition, symptom, surgery, or medication.</span>
        </li>
        <li className="flex items-start gap-2">
          <span
            className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-soft text-[10px] text-primary"
            aria-hidden="true"
          >
            2
          </span>
          <span>Open a patient leaflet written in plain language.</span>
        </li>
        <li className="flex items-start gap-2">
          <span
            className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-soft text-[10px] text-primary"
            aria-hidden="true"
          >
            3
          </span>
          <span>Use a related calculator or tool where available.</span>
        </li>
      </ul>

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <HeroMiniStat label="Leaflets" value={120} suffix="+" />
        <HeroMiniStat label="Tools" value={15} suffix="+" />
      </div>
    </aside>
  );
};

export default HeroSidePanel;
