"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

type AllowedTags =
  | "div"
  | "section"
  | "span"
  | "p"
  | "header"
  | "footer"
  | "main"
  | "article"
  | "aside"
  | "nav";

type RevealProps = PropsWithChildren<{
  as?: AllowedTags;
  className?: string;
  delayMs?: number;
}>;

export default function Reveal({
  as = "div",
  className,
  delayMs = 0,
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
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

  const Comp = as;
  return (
    <div ref={ref}>
      <Comp
        className={[
          "reveal",
          visible ? "reveal--visible" : "",
          className ?? "",
        ].join(" ")}
      >
        {children}
      </Comp>
    </div>
  );
}
