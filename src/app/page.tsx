"use client";

import SmoothScroll from "@/components/animations/SmoothScroll";
import GridOverlay from "@/components/layout/GridOverlay";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const activeSection = useActiveSection([
    "hero",
    "work",
    "about",
    "experience",
    "contact",
  ]);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080808] text-[#F4F0E9] selection:bg-[#FF510B]/30 selection:text-white overflow-x-hidden">
        {/* Subtle Ambient Grid & Noise Atmosphere */}
        <GridOverlay />

        {/* Floating Capsule Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Content Flow */}
        <main className="relative z-10 flex flex-col">
          {/* Section 01: Hero Presence */}
          <HeroSection
            activeSection={activeSection}
            onNavigateSection={handleNavigateSection}
          />

          {/* Section 02: Selected Work */}
          <ProjectsSection />

          {/* Section 03: Philosophy, Narrative & Education */}
          <AboutSection />

          {/* Technical Skills Taxonomy */}
          <SkillsSection />

          {/* Section 04: Industry Work History & Hackathons */}
          <ExperienceSection />

          {/* Section 05: Communication & Credentials */}
          <ContactSection />
        </main>

        {/* Minimal Editorial Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
