"use client";
import { useRef, useEffect, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", prefix = "", duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const start = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}{value >= 1000 ? count.toLocaleString("pl-PL") : count}{suffix}
    </span>
  );
}
