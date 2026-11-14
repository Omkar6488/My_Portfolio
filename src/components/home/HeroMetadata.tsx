"use client";

import { ArrowDown } from "lucide-react";

interface HeroMetadataProps {
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export function HeroMetadataLeft() {
  return (
    <div className="hidden xl:flex flex-col justify-between h-full py-4 z-20 pointer-events-auto select-none min-w-[200px] max-w-[260px]">
      {/* Upper Left */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
        <span className="font-mono text-[clamp(9px,0.8vw,11px)] uppercase tracking-[0.22em] text-[#A7A7A7]">
          ENGINEER. DEVELOPER. BUILDER.
        </span>
      </div>

      {/* Middle Left */}
      <div className="flex flex-col items-start space-y-3 my-auto">
        <span className="font-mono text-[clamp(10px,0.85vw,11px)] uppercase tracking-[0.22em] text-[#FF510B] font-medium">
          01 / PRESENCE
        </span>

        <span className="font-mono text-xl font-light text-[#FF510B] leading-none">
          +
        </span>

        <div className="font-mono text-[clamp(9px,0.8vw,11px)] uppercase tracking-[0.22em] text-[#A7A7A7] space-y-1.5 leading-tight">
          <p className="hover:text-[#F4F0E9] transition-colors">TECHNOLOGY</p>
          <p className="hover:text-[#F4F0E9] transition-colors">CREATIVITY</p>
          <p className="hover:text-[#F4F0E9] transition-colors">REAL IMPACT</p>
        </div>
      </div>

      {/* Bottom Left */}
      <a
        href="#work"
        className="group flex items-center gap-2 font-mono text-[clamp(9px,0.8vw,11px)] uppercase tracking-[0.22em] text-[#A7A7A7] hover:text-[#F4F0E9] transition-colors cursor-pointer w-fit"
      >
        <span className="text-[#FF510B] font-bold">|</span>
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3 h-3 text-[#A7A7A7] transition-transform duration-200 group-hover:translate-y-0.5" />
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
    <div className="hidden xl:flex flex-col justify-between items-end h-full py-4 z-20 pointer-events-auto select-none min-w-[200px] max-w-[260px]">
      {/* Upper Right */}
      <div className="text-right">
        <span className="font-mono text-[clamp(9px,0.8vw,11px)] uppercase tracking-[0.22em] text-[#A7A7A7]">
          BASED IN INDIA • THINKING BEYOND
        </span>
      </div>

      {/* Middle Right: Exact Vertical Section Indicator */}
      <div className="flex flex-col items-end space-y-2.5 my-auto">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleSectionClick(sec.id)}
              className="group flex items-center gap-2 font-mono text-[clamp(10px,0.85vw,12px)] tracking-[0.16em] transition-all duration-200 focus:outline-none"
              title={sec.label}
            >
              <span
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#FF510B] font-medium"
                    : "text-[#555555] group-hover:text-[#A7A7A7]"
                }`}
              >
                {sec.number}
              </span>
              <span
                className={`transition-colors duration-200 ${
                  isActive ? "text-[#FF510B] font-bold" : "text-transparent"
                }`}
              >
                |
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Right */}
      <div className="flex items-center gap-2 font-mono text-[clamp(9px,0.8vw,11px)] uppercase tracking-[0.22em] text-[#A7A7A7]">
        <span>PORTFOLIO 2026</span>
        <span className="text-[#FF510B] font-bold tracking-widest">—</span>
      </div>
    </div>
  );
}
