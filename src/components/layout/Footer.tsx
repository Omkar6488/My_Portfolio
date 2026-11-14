"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full max-w-[1862px] mx-auto px-[clamp(1rem,3vw,3.5rem)] py-[clamp(1.75rem,3.5vh,2.5rem)] border-t border-white/[0.06] text-[#777] font-mono text-[clamp(10px,0.8vw,11.5px)] tracking-wider select-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B] shrink-0" />
          <span>© 2026 OMKAR MORE. ALL RIGHTS RESERVED.</span>
        </div>

        {/* Center: System & Location Note */}
        <div className="text-center text-[#555] uppercase text-[10px] tracking-[0.2em] hidden sm:block">
          NASHIK, INDIA · NEXT.JS · TYPESCRIPT · TAILWIND CSS
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 text-[#A7A7A7] hover:text-[#FF510B] transition-colors"
        >
          <span className="uppercase tracking-widest text-[clamp(10px,0.8vw,11px)]">Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
