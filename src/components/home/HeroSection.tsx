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
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-[clamp(4.25rem,7.5vh,6rem)] pb-[clamp(0.75rem,2vh,1.75rem)] px-[clamp(0.75rem,2.5vw,3rem)] overflow-hidden"
    >
      {/* Max-Width Layout Frame corresponding to 1862px specification */}
      <div className="relative w-full max-w-[1862px] mx-auto h-full flex flex-col justify-between flex-1 min-w-0">
        {/* Intermediate Viewport (Tablet / Mobile / High Zoom) Top Metadata Bar */}
        <div className="flex xl:hidden items-center justify-between py-1.5 text-[clamp(9px,0.85vw,11px)] font-mono tracking-wider sm:tracking-widest text-[#A7A7A7] border-b border-white/[0.04] mb-1 select-none w-full min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B] shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">ENGINEER · BUILDER</span>
              <span className="hidden sm:inline">ENGINEER. DEVELOPER. BUILDER.</span>
            </span>
          </div>
          <div className="hidden sm:block text-right shrink-0">
            <span>BASED IN INDIA • THINKING BEYOND</span>
          </div>
          <div className="sm:hidden text-[#FF510B] shrink-0 font-medium">
            <span>01 / PRESENCE</span>
          </div>
        </div>

        {/* Main Central Stage flanked by Left & Right Metadata on xl+ displays */}
        <div className="relative w-full flex-1 flex flex-col xl:flex-row items-center justify-between my-auto min-w-0">
          {/* Left Metadata Column (Visible on xl+ displays) */}
          <HeroMetadataLeft />

          {/* Central Hero Stage: Portrait + Layered Headline + Subtitle + CTAs */}
          <div className="relative flex-1 w-full max-w-[960px] mx-auto flex flex-col items-center justify-center text-center px-2 py-1 min-w-0">
            {/* Central Monochromatic Portrait */}
            <div className="relative z-10 w-full flex justify-center">
              <HeroPortrait />
            </div>

            {/* Layered Typography (in front of lower chest of portrait) */}
            <div className="relative z-30 flex flex-col items-center w-full max-w-4xl mx-auto px-2 sm:px-4 -mt-[clamp(1.75rem,6.5vh,5.5rem)] min-w-0">
              {/* Eyebrow / Pre-kicker */}
              <p className="font-mono text-[clamp(8.5px,min(0.8vw,1.3vh),11.5px)] uppercase tracking-wider sm:tracking-[clamp(0.18em,0.3vw,0.26em)] text-[#C4C0B8] mb-[clamp(0.2rem,0.8vh,0.5rem)] drop-shadow-md select-none font-medium max-w-full truncate">
                A HUMAN PERSPECTIVE ON TECHNOLOGY
              </p>

              {/* Main Headline: OMKAR MORE */}
              <h1 className="font-serif text-[clamp(2rem,min(6.2vw,9.5vh),7rem)] uppercase tracking-tight leading-[0.92] select-none text-center whitespace-normal sm:whitespace-nowrap max-w-full">
                <span className="text-[#F4F0E9] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] font-normal">
                  OMKAR{" "}
                </span>
                <span className="bg-gradient-to-r from-[#FF510B] via-[#FF6A28] to-[#FF4500] bg-clip-text text-transparent font-normal drop-shadow-[0_0_40px_rgba(255,81,11,0.38)]">
                  MORE
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="font-sans text-[clamp(11px,min(0.95vw,1.5vh),14.5px)] text-[#A7A7A7] text-center max-w-[min(520px,90vw)] mx-auto mt-[clamp(0.35rem,1vh,0.75rem)] leading-relaxed font-light drop-shadow-sm px-1">
                Building intelligent products and digital experiences
                <br className="hidden sm:inline" /> that solve real world problems.
              </p>

              {/* Call To Action Buttons */}
              <div className="flex flex-row items-center justify-center gap-[clamp(0.75rem,1.8vw,1.75rem)] mt-[clamp(0.5rem,1.5vh,1.25rem)] flex-wrap">
                {/* Primary CTA Button */}
                <a
                  href="#work"
                  onClick={(e) => handleScrollTo(e, "#work")}
                  className="group relative inline-flex items-center gap-2 px-[clamp(1.1rem,1.8vw,1.6rem)] py-[clamp(0.4rem,0.8vh,0.6rem)] rounded-full font-sans text-[clamp(11px,0.8vw,12.5px)] text-[#F4F0E9] bg-[#111111]/90 backdrop-blur-md border border-white/[0.16] hover:border-[#FF510B] hover:bg-[#161616] hover:shadow-[0_0_20px_rgba(255,81,11,0.25)] transition-all duration-300"
                >
                  <span>Explore my work</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#A7A7A7] group-hover:text-[#FF510B] transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>

                {/* Secondary CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="group inline-flex items-center gap-1.5 font-sans text-[clamp(11px,0.8vw,12.5px)] text-[#F4F0E9] hover:text-[#FF510B] pb-0.5 border-b border-[#FF510B]/60 hover:border-[#FF510B] transition-all duration-200"
                >
                  <span>Let&apos;s connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF510B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Metadata Column (Visible on xl+ displays) */}
          <HeroMetadataRight
            activeSection={activeSection}
            onNavigateSection={onNavigateSection}
          />
        </div>

        {/* Intermediate & Mobile Viewport Bottom Metadata Bar */}
        <div className="flex xl:hidden items-center justify-between pt-2.5 mt-1 border-t border-white/[0.04] text-[clamp(9px,0.85vw,11px)] font-mono tracking-wider sm:tracking-widest text-[#A7A7A7] select-none w-full min-w-0">
          <a
            href="#work"
            className="flex items-center gap-1 hover:text-[#F4F0E9] transition-colors shrink-0"
          >
            <span className="text-[#FF510B] font-bold">|</span>
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
                    : "text-[#555] hover:text-[#A7A7A7]"
                }`}
              >
                {sec.number}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <span>2026</span>
            <span className="hidden sm:inline">PORTFOLIO</span>
            <span className="text-[#FF510B] font-bold">—</span>
          </div>
        </div>
      </div>
    </section>
  );
}
