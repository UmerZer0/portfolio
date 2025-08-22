"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

type RevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delayMs?: number;
}>;

export default function Reveal({ as = "div", className, delayMs = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => setVisible(true), delayMs);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const Comp: any = as;
  return (
    <Comp
      ref={ref}
      className={[
        "reveal",
        visible ? "reveal--visible" : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </Comp>
  );
}


