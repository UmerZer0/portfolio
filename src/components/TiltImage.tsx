"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type TiltImageProps = {
  src: string;
  alt: string;
  className?: string;
  maxRotateDeg?: number;
};

export default function TiltImage({
  src,
  alt,
  className,
  maxRotateDeg = 10,
}: TiltImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>(
    "rotateX(0deg) rotateY(0deg)"
  );
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1; // -1..1
      const py = (y / rect.height) * 2 - 1; // -1..1

      const rotateY = px * maxRotateDeg; // left/right
      const rotateX = -py * maxRotateDeg; // up/down

      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      setGlowPos({ x, y });
    },
    [maxRotateDeg]
  );

  const handleLeave = useCallback(() => {
    setTransform("rotateX(0deg) rotateY(0deg)");
  }, []);

  // Initialize glow in the center for consistent appearance
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setGlowPos({ x: rect.width / 2, y: rect.height / 2 });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative isolate [perspective:1000px] animate-[float_6s_ease-in-out_infinite]"
      style={{
        transformStyle: "preserve-3d" as React.CSSProperties["transformStyle"],
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute z-0 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-30 transition-[left,top,opacity] duration-200 ease-[cubic-bezier(.22,.61,.36,1)]"
        style={{
          left: glowPos ? glowPos.x : 0,
          top: glowPos ? glowPos.y : 0,
          background:
            "radial-gradient(closest-side, var(--accent-to), transparent)",
        }}
      />

      <Image
        src={src}
        alt={alt}
        className={`relative z-10 rounded-2xl object-cover border border-black/[.08] dark:border-white/[.12] shadow-lg will-change-transform transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)] ${
          className ?? ""
        }`}
        style={{
          transform,
          transformStyle: "preserve-3d",
        }}
        width={1200}
        height={800}
      />
    </div>
  );
}
