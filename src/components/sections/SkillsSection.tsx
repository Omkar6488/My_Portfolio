"use client";

import { Code2, Globe, Database, Brain, Cpu, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-[#FF510B]" />;
      case "Web & Frontend":
        return <Globe className="w-4 h-4 text-[#FF510B]" />;
      case "Backend & Systems":
        return <Cpu className="w-4 h-4 text-[#FF510B]" />;
      case "Databases & Graph":
        return <Database className="w-4 h-4 text-[#FF510B]" />;
      case "AI, RAG & Specialized":
        return <Brain className="w-4 h-4 text-[#FF510B]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#FF510B]" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative w-full max-w-[1862px] mx-auto px-6 sm:px-10 lg:px-14 py-24 border-t border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.05]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FF510B]">
              TECHNICAL PROFICIENCIES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F4F0E9]">
            SKILLS & ARCHITECTURAL TOOLING
          </h2>
        </div>
        <p className="font-mono text-xs text-[#A7A7A7] uppercase tracking-[0.18em] mt-4 md:mt-0 max-w-sm">
          Strictly verified engineering competencies across languages, graph stores, and intelligent pipelines.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="p-6 rounded-2xl bg-[#0e0e0e]/70 border border-white/[0.08] hover:border-[#FF510B]/40 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
              {getCategoryIcon(skillGroup.category)}
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9] font-medium">
                {skillGroup.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#141414] text-[#C4C0B8] border border-white/[0.05] hover:border-[#FF510B]/50 hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

