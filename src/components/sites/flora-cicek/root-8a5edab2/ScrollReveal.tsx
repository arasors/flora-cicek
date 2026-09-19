"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";
type RevealDelay = "none" | "short" | "medium" | "long";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: RevealDelay;
};

const hiddenClasses: Record<RevealDirection, string> = {
  up: "translate-y-12",
  left: "-translate-x-10",
  right: "translate-x-10",
  scale: "scale-[0.96]",
};

const delayClasses: Record<RevealDelay, string> = {
  none: "delay-0",
  short: "delay-100",
  medium: "delay-200",
  long: "delay-300",
};

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = "none",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "-6% 0px -6%" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`flora-scroll-reveal ${delayClasses[delay]} ${
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
          : `${hiddenClasses[direction]} opacity-0 blur-[2px]`
      } ${className}`}
    >
      {children}
    </div>
  );
}
