// src/features/home/components/hero-mini-stat/HeroMiniStat.tsx
import React, { useEffect, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

type HeroMiniStatProps = {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
};

const HeroMiniStat: React.FC<HeroMiniStatProps> = ({
  label,
  value,
  suffix,
  duration = 1.2,
}) => {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [value, duration, motionValue]);

  return (
    <div className="rounded-card bg-bg-page px-4 py-3 shadow-soft flex flex-col">
      <p className="text-xs md:text-sm text-text-muted mb-1">{label}</p>

      <span
        className="
          text-2xl md:text-3xl xl:text-4xl
          font-bold text-primary tracking-tight
        "
      >
        {displayValue}
        {suffix && (
          <span className="ml-0.5 align-baseline text-primary/70 text-lg">
            {suffix}
          </span>
        )}
      </span>
    </div>
  );
};

export default HeroMiniStat;
