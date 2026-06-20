"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Wraps content in a scroll-triggered reveal. Uses the `.on-scroll`
 * utility from globals.css; toggles `.is-in` when it enters the viewport.
 */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`on-scroll ${shown ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
};
