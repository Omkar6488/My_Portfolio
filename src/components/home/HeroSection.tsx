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

  return (
    <section
      id="hero"
      aria-label="Omkar More Portfolio Hero"
      className="relative w-full min-h-[820px] h-screen max-h-[1050px] flex flex-col justify-between overflow-hidden pt-24 pb-8"
    >
      {/* Centered Max-Width Frame corresponding to 1862px specification */}
      <div className="relative w-full max-w-[1862px] mx-auto h-full px-6 sm:px-10 lg:px-14 flex flex-col justify-between">
        {/* Main Content Grid with Left Meta, Center Stage, Right Meta */}
        <div className="relative w-full flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[320px_1fr_320px] items-stretch">
          {/* Left Metadata Column */}
          <HeroMetadataLeft />

          {/* Central Stage: Portrait + Layered Headline + Subtitle + CTAs */}
          <div className="relative flex flex-col items-center justify-center text-center px-2">
            {/* Central Monochromatic Portrait */}
            <div className="relative z-10 -mb-28 sm:-mb-32 md:-mb-36 lg:-mb-40 xl:-mb-44 w-full flex justify-center">
              <HeroPortrait />
            </div>

            {/* Layered Typography (in front of lower chest of portrait) */}
            <div className="relative z-30 flex flex-col items-center max-w-4xl mx-auto px-4">
              {/* Eyebrow / Pre-kicker */}
              <p className="font-mono text-[10px] sm:text-xs md:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.26em] text-[#C4C0B8] mb-2.5 drop-shadow-md select-none font-medium">
                A HUMAN PERSPECTIVE ON TECHNOLOGY
              </p>

              {/* Main Headline: OMKAR MORE */}
              <h1 className="font-serif text-[38px] xs:text-[46px] sm:text-[70px] md:text-[88px] lg:text-[104px] xl:text-[118px] 2xl:text-[124px] uppercase tracking-[-0.01em] leading-[0.92] select-none text-center whitespace-normal sm:whitespace-nowrap">
                <span className="text-[#F4F0E9] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] font-normal">
                  OMKAR{" "}
                </span>
                <span className="bg-gradient-to-r from-[#FF510B] via-[#FF6A28] to-[#FF4500] bg-clip-text text-transparent font-normal drop-shadow-[0_0_40px_rgba(255,81,11,0.38)]">
                  MORE
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#A7A7A7] text-center max-w-[540px] mx-auto mt-3 sm:mt-4 leading-relaxed font-light drop-shadow-sm px-2">
                Building intelligent products and digital experiences
                <br className="hidden sm:inline" /> that solve real world problems.
              </p>

              {/* Call To Action Buttons */}
              <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 mt-5 sm:mt-7 flex-wrap">
                {/* Primary CTA Button */}
                <a
                  href="#work"
                  onClick={(e) => handleScrollTo(e, "#work")}
                  className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-[13px] text-[#F4F0E9] bg-[#111111]/90 backdrop-blur-md border border-white/[0.16] hover:border-[#FF510B] hover:bg-[#161616] hover:shadow-[0_0_20px_rgba(255,81,11,0.25)] transition-all duration-300"
                >
                  <span>Explore my work</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#A7A7A7] group-hover:text-[#FF510B] transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>

                {/* Secondary CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="group inline-flex items-center gap-1.5 font-sans text-xs sm:text-[13px] text-[#F4F0E9] hover:text-[#FF510B] pb-1 border-b border-[#FF510B]/60 hover:border-[#FF510B] transition-all duration-200"
                >
                  <span>Let&apos;s connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF510B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Metadata Column */}
          <HeroMetadataRight
            activeSection={activeSection}
            onNavigateSection={onNavigateSection}
          />
        </div>

        {/* Mobile-only peripheral indicators */}
        <div className="flex lg:hidden items-center justify-between pt-4 mt-2 border-t border-white/[0.05] text-[10px] font-mono tracking-widest text-[#777]">
          <span className="flex items-center gap-1.5 text-[#A7A7A7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
            ENGINEER. DEVELOPER. BUILDER.
          </span>
          <span className="text-[#FF510B]">01 / PRESENCE</span>
        </div>
      </div>
    </section>
  );
}
