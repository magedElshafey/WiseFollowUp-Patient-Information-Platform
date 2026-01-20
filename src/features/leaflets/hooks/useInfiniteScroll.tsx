// src/common/hooks/useInfiniteScroll.ts
import { useEffect } from "react";

type Params = {
  target: React.RefObject<Element>;
  enabled: boolean;
  onIntersect: () => void;
};

export const useInfiniteScroll = ({ target, enabled, onIntersect }: Params) => {
  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(target.current);

    return () => observer.disconnect();
  }, [enabled, onIntersect, target]);
};
