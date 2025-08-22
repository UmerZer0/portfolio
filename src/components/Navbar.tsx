"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/[.08] dark:border-white/[.12] glass">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="#" className="font-semibold tracking-tight">
            <span className="text-base text-gradient">Umar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline underline-offset-4">
              About
            </a>
            <a href="#projects" className="hover:underline underline-offset-4">
              Projects
            </a>
            <a href="#contact" className="hover:underline underline-offset-4">
              Contact
            </a>
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
            onClick={() => setIsOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#about"
                className="rounded px-3 py-2 hover:bg-black/[.05] dark:hover:bg-white/[.06]"
              >
                About
              </a>
              <a
                href="#projects"
                className="rounded px-3 py-2 hover:bg-black/[.05] dark:hover:bg-white/[.06]"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="rounded px-3 py-2 hover:bg-black/[.05] dark:hover:bg-white/[.06]"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
