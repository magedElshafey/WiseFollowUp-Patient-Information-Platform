import React from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "soft" | "inset";
  "aria-labelledby"?: string;
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variantClass =
    variant === "soft"
      ? "section-shell-soft"
      : variant === "inset"
      ? "" // مفيش خلفية ولا padding جاهز
      : "section-shell";
  return (
    <section
      id={id}
      className={twMerge(
        `
        py-section-y-sm md:py-section-y
      `,
        variantClass,
        className
      )}
      {...props}
    >
      <div className="containerr">{children}</div>
    </section>
  );
};

export default Section;
