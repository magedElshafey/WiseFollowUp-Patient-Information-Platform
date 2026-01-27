import { useEffect, useState } from "react";

type UseCountUpProps = {
  end: number;
  duration?: number; // ms
};

export function useCountUp({ end, duration = 800 }: UseCountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}
