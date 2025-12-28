// src/components/ui/Card.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  as?: "div" | "article" | "section";
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const Card: React.FC<CardProps> = ({
  as: Component = "article",
  className,
  children,
  interactive = false,
  ...props
}) => {
  return (
    <Component
      className={twMerge(
        "card-base",
        interactive &&
          ` duration-300
          transition-transform transition-shadow
          hover:-translate-y-0.5 hover:shadow-soft
          focus-within:ring-2 focus-within:ring-primary
          focus-within:ring-offset-2 focus-within:ring-offset-bg-page
        `,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
