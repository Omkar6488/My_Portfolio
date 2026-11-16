"use client";

import { ArrowDown } from "lucide-react";

interface HeroMetadataProps {
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export function HeroMetadataLeft() {
  return (
    <div className="hidden xl:flex flex-col justify-between h-full py-2 z-20 pointer-events-auto select-none min-w-[220px] max-w-[280px]">
      {/* Upper Left */}
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-[#FF510B] shrink-0 shadow-[0_0_8px_rgba(255,81,11,0.6)]" />
        <span className="font-mono text-[clamp(11px,0.88vw,13px)] uppercase tracking-[0.22em] text-[#C2BEB5]">
          ENGINEER. DEVELOPER. BUILDER.
        </span>
      </div>

      {/* Middle Left */}
      <div className="flex flex-col items-start space-y-4 my-auto">
        <span className="font-mono text-[clamp(12px,0.95vw,14px)] uppercase tracking-[0.22em] text-[#FF510B] font-semibold">
          01 / PRESENCE
        </span>

        <span className="font-mono text-2xl font-light text-[#FF510B] leading-none">
          +
        </span>

        <div className="font-mono text-[clamp(11px,0.88vw,13px)] uppercase tracking-[0.22em] text-[#C2BEB5] space-y-2.5 leading-relaxed">
          <p className="hover:text-[#F4F0E9] transition-colors">TECHNOLOGY</p>
          <p className="hover:text-[#F4F0E9] transition-colors">CREATIVITY</p>
          <p className="hover:text-[#F4F0E9] transition-colors">REAL IMPACT</p>
        </div>
      </div>

      {/* Bottom Left */}
      <a
        href="#work"
        className="group flex items-center gap-2 font-mono text-[clamp(11px,0.88vw,13px)] uppercase tracking-[0.22em] text-[#C2BEB5] hover:text-[#F4F0E9] transition-colors cursor-pointer w-fit"
      >
        <span className="text-[#FF510B] font-bold text-sm">|</span>
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C2BEB5] transition-transform duration-200 group-hover:translate-y-1 group-hover:text-[#FF510B]" />
      </a>
    </div>
  );
}

export function HeroMetadataRight({
  activeSection = "hero",
  onNavigateSection,
}: HeroMetadataProps) {
  const sections = [
    { id: "hero", number: "01", label: "Presence" },
    { id: "work", number: "02", label: "Selected Work" },
    { id: "about", number: "03", label: "Philosophy & Bio" },
    { id: "experience", number: "04", label: "Experience & Honors" },
    { id: "contact", number: "05", label: "Connect" },
  ];

  const handleSectionClick = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden xl:flex flex-col justify-between items-end h-full py-2 z-20 pointer-events-auto select-none min-w-[220px] max-w-[280px]">
      {/* Upper Right */}
      <div className="text-right">
        <span className="font-mono text-[clamp(11px,0.88vw,13px)] uppercase tracking-[0.22em] text-[#C2BEB5]">
          BASED IN INDIA · THINKING BEYOND
        </span>
      </div>

      {/* Middle Right: Exact Vertical Section Indicator */}
      <div className="flex flex-col items-end space-y-4 my-auto">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleSectionClick(sec.id)}
              className="group flex items-center gap-2.5 font-mono text-[clamp(12px,0.95vw,14px)] tracking-[0.2em] transition-all duration-200 focus:outline-none"
              title={sec.label}
            >
              <span
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#FF510B] font-semibold"
                    : "text-[#666666] group-hover:text-[#C2BEB5]"
                }`}
              >
                {sec.number}
              </span>
              <span
                className={`transition-colors duration-200 font-bold ${
                  isActive ? "text-[#FF510B]" : "text-transparent"
                }`}
              >
                |
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Right */}
      <div className="flex items-center gap-2 font-mono text-[clamp(11px,0.88vw,13px)] uppercase tracking-[0.22em] text-[#C2BEB5]">
        <span>PORTFOLIO 2026</span>
        <span className="text-[#FF510B] font-bold tracking-widest">—</span>
      </div>
    </div>
  );
}
