"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const handle = (e: PointerEvent) => {
      const root = document.documentElement;
      root.style.setProperty("--cursor-x", `${e.clientX}px`);
      root.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handle, { passive: true });
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        aria-hidden
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          left: "var(--cursor-x)",
          top: "var(--cursor-y)",
          width: "520px",
          height: "520px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(closest-side, var(--accent-to), transparent)",
        }}
      />
    </div>
  );
}


