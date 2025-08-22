export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.12] mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-center text-foreground/70">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
