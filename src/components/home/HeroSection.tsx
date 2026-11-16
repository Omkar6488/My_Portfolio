"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroPortrait from "./HeroPortrait";
import { HeroMetadataLeft, HeroMetadataRight } from "./HeroMetadata";

interface HeroSectionProps {
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export default function HeroSection({
  activeSection = "hero",
  onNavigateSection,
}: HeroSectionProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "hero", number: "01", label: "Presence" },
    { id: "work", number: "02", label: "Selected Work" },
    { id: "about", number: "03", label: "Philosophy & Bio" },
    { id: "experience", number: "04", label: "Experience & Honors" },
    { id: "contact", number: "05", label: "Connect" },
  ];

  return (
    <section
      id="hero"
      aria-label="Omkar More Portfolio Hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-[clamp(1.5rem,2.5vh,2.5rem)] pb-[clamp(0.75rem,2vh,1.75rem)] px-[clamp(0.75rem,2.5vw,3rem)] overflow-hidden"
    >
      {/* Max-Width Layout Frame corresponding to 1862px specification */}
      <div className="relative w-full max-w-[1862px] mx-auto h-full flex flex-col justify-between flex-1 min-w-0">
        {/* Intermediate Viewport (Tablet / Mobile / High Zoom) Top Metadata Bar */}
        <div className="flex xl:hidden items-center justify-between py-1.5 text-[clamp(9.5px,0.85vw,11.5px)] font-mono tracking-wider sm:tracking-widest text-[#B5B0A6] border-b border-white/[0.05] mb-1 select-none w-full min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B] shrink-0 shadow-[0_0_6px_rgba(255,81,11,0.6)]" />
            <span className="truncate">
              <span className="sm:hidden">ENGINEER · BUILDER</span>
              <span className="hidden sm:inline">ENGINEER. DEVELOPER. BUILDER.</span>
            </span>
          </div>
          <div className="hidden sm:block text-right shrink-0">
            <span>BASED IN INDIA • THINKING BEYOND</span>
          </div>
          <div className="sm:hidden text-[#FF510B] shrink-0 font-semibold">
            <span>01 / PRESENCE</span>
          </div>
        </div>

        {/* Main Central Stage flanked by Independently Positioned Left & Right Metadata */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-start min-w-0">
          {/* Left Metadata Column (Pinned below navbar so it starts cleanly at ~y=110px) */}
          <div className="hidden xl:flex absolute left-0 top-[clamp(5.25rem,9vh,7rem)] bottom-[clamp(1rem,2vh,2rem)] z-20 pointer-events-auto">
            <HeroMetadataLeft />
          </div>

          {/* Central Hero Stage: Perfectly Centered Relative to Full Viewport Width */}
          <div className="relative w-full flex flex-col items-center justify-center text-center px-2 py-1 min-w-0 z-10">
            {/* Central Monochromatic Portrait (Hair top reaches precisely the center line of the navbar Y≈44-45 without exiting above) */}
            <div className="relative z-10 w-full flex justify-center -mt-[clamp(0.75rem,1.45vh,1.5rem)]">
              <HeroPortrait />
            </div>

            {/* Layered Typography (Nudged slightly lower so eyebrow and name sit cleanly across collar opening) */}
            <div className="relative z-30 flex flex-col items-center w-full max-w-6xl mx-auto px-2 sm:px-4 -mt-[clamp(9.5rem,min(24vw,46.5vh),27rem)] min-w-0">
              {/* Eyebrow / Pre-kicker */}
              <p className="font-mono text-[clamp(10.5px,min(0.95vw,1.45vh),13.5px)] uppercase tracking-wider sm:tracking-[clamp(0.22em,0.34vw,0.3em)] text-[#D8D4CC] mb-[clamp(0.25rem,0.9vh,0.55rem)] drop-shadow-md select-none font-medium max-w-full truncate text-center">
                A HUMAN PERSPECTIVE ON TECHNOLOGY
              </p>

              {/* Main Headline: OMKAR MORE (Bolder editorial Bodoni Moda with faded-to-darker orange gradient) */}
              <h1 className="font-serif text-[clamp(2.75rem,min(9.8vw,16.5vh),10.5rem)] uppercase tracking-tight leading-[0.88] select-none text-center whitespace-normal sm:whitespace-nowrap max-w-full">
                <span className="text-[#F4F0E9] drop-shadow-[0_4px_30px_rgba(0,0,0,0.92)] font-bold">
                  OMKAR{" "}
                </span>
                <span className="bg-gradient-to-r from-[#F6A572] via-[#FF5E18] to-[#D03000] bg-clip-text text-transparent font-bold drop-shadow-[0_0_45px_rgba(255,81,11,0.45)]">
                  MORE
                </span>
              </h1>

              {/* Sub-headline (Matched to font-mono, letter-spacing, and restrained weight like the eyebrow) */}
              <p className="font-mono text-[clamp(12px,min(0.95vw,1.6vh),15px)] text-[#D0CCC4] text-center max-w-[min(720px,94vw)] mx-auto mt-[clamp(0.6rem,1.5vh,1.2rem)] leading-relaxed font-normal tracking-[clamp(0.1em,0.16vw,0.18em)] drop-shadow-sm px-2">
                Building intelligent products and digital experiences
                <br className="hidden sm:inline" /> that solve real-world problems.
              </p>

              {/* Call To Action Buttons */}
              <div className="flex flex-row items-center justify-center gap-[clamp(1rem,2vw,2rem)] mt-[clamp(0.65rem,1.6vh,1.45rem)] flex-wrap pointer-events-auto">
                {/* Primary CTA Button */}
                <a
                  href="#work"
                  onClick={(e) => handleScrollTo(e, "#work")}
                  className="group relative inline-flex items-center gap-2.5 px-[clamp(1.4rem,2.3vw,2.2rem)] py-[clamp(0.56rem,1.2vh,0.8rem)] rounded-full font-sans text-[clamp(13px,0.95vw,15px)] text-[#F4F0E9] bg-[#121212]/95 backdrop-blur-md border border-white/[0.25] hover:border-[#FF510B] hover:bg-[#181818] hover:shadow-[0_0_24px_rgba(255,81,11,0.32)] transition-all duration-300"
                >
                  <span>Explore my work</span>
                  <ArrowDown className="w-4 h-4 text-[#B5B0A6] group-hover:text-[#FF510B] transition-transform duration-200 group-hover:translate-y-1" />
                </a>

                {/* Secondary CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="group inline-flex items-center gap-1.5 font-sans text-[clamp(13px,0.95vw,15px)] text-[#F4F0E9] hover:text-[#FF510B] pb-1 border-b-2 border-[#FF510B]/70 hover:border-[#FF510B] transition-all duration-200"
                >
                  <span>Let&apos;s connect</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF510B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Metadata Column (Pinned below navbar so it starts cleanly at ~y=110px) */}
          <div className="hidden xl:flex absolute right-0 top-[clamp(5.25rem,9vh,7rem)] bottom-[clamp(1rem,2vh,2rem)] z-20 pointer-events-auto">
            <HeroMetadataRight
              activeSection={activeSection}
              onNavigateSection={onNavigateSection}
            />
          </div>
        </div>

        {/* Intermediate & Mobile Viewport Bottom Metadata Bar */}
        <div className="flex xl:hidden items-center justify-between pt-2.5 mt-1 border-t border-white/[0.05] text-[clamp(9.5px,0.85vw,11.5px)] font-mono tracking-wider sm:tracking-widest text-[#B5B0A6] select-none w-full min-w-0">
          <a
            href="#work"
            className="flex items-center gap-1.5 hover:text-[#F4F0E9] transition-colors shrink-0"
          >
            <span className="text-[#FF510B] font-bold text-sm">|</span>
            <span className="sm:hidden">EXPLORE ↓</span>
            <span className="hidden sm:inline">SCROLL TO EXPLORE ↓</span>
          </a>

          {/* Compact Section Indicators for tablet viewports */}
          <div className="hidden sm:flex items-center gap-2">
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => onNavigateSection?.(sec.id)}
                className={`transition-colors ${
                  activeSection === sec.id
                    ? "text-[#FF510B] font-bold"
                    : "text-[#666] hover:text-[#B5B0A6]"
                }`}
              >
                {sec.number}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span>2026</span>
            <span className="hidden sm:inline">PORTFOLIO</span>
            <span className="text-[#FF510B] font-bold">—</span>
          </div>
        </div>
      </div>
    </section>
  );
}
