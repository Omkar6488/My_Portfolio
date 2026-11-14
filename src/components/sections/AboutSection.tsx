"use client";

import { GraduationCap, Users } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const { education, leadership } = portfolioData;

  return (
    <section
      id="about"
      aria-label="About & Education"
      className="relative w-full max-w-[1862px] mx-auto px-[clamp(1rem,3vw,3.5rem)] py-[clamp(3.5rem,8vh,7rem)] border-t border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-[clamp(2.5rem,5vh,4rem)] pb-6 border-b border-white/[0.05] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FF510B]">
              03 / PHILOSOPHY & BACKGROUND
            </span>
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] uppercase tracking-tight text-[#F4F0E9] leading-tight">
            ENGINEERING WITH CLARITY & PURPOSE
          </h2>
        </div>
        <p className="font-mono text-[clamp(11px,0.8vw,13px)] text-[#A7A7A7] uppercase tracking-[0.18em] max-w-sm">
          Bridging knowledge graphs, intelligent web architectures, and human-centric software design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,3.5rem)]">
        {/* Left Column: Personal Narrative & Engineering Principles */}
        <div className="lg:col-span-6 space-y-8 min-w-0">
          <div className="space-y-5 font-sans text-sm sm:text-base md:text-lg text-[#C4C0B8] leading-relaxed">
            <p className="font-serif text-[clamp(1.25rem,2vw,1.6rem)] text-[#F4F0E9] italic font-normal">
              &ldquo;I believe that the most potent systems combine computational rigor with intuitive human design.&rdquo;
            </p>
            <p>
              I am a Computer Science & Design undergraduate at K.K. Wagh Institute of Engineering Education and Research, Nashik, maintaining an <span className="text-[#FF510B] font-mono font-medium">8.70 CGPA</span>. My technical work focuses on graph-based retrieval systems (GraphRAG), distributed web systems, and interactive digital products.
            </p>
            <p>
              From engineering gameplay mechanics and collision systems in C# (Unity) during my game development internship at Anstric Games, to modeling complex legal relationships in Neo4j and building full-stack renewable energy management dashboards, I approach software as both an analytical discipline and a creative craft.
            </p>
          </div>

          {/* Core Values / Triplets (Fluid 1 column on mobile, 3 columns on tablet/desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(0.75rem,1.5vw,1rem)] pt-4 border-t border-white/[0.06]">
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-white/[0.06] min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF510B]">
                PILLAR 01
              </span>
              <p className="font-serif text-base sm:text-lg text-[#F4F0E9] mt-1">Technology</p>
              <p className="text-xs text-[#888] mt-1 leading-normal">Deep system fundamentals and robust graph structures.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-white/[0.06] min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF510B]">
                PILLAR 02
              </span>
              <p className="font-serif text-base sm:text-lg text-[#F4F0E9] mt-1">Creativity</p>
              <p className="text-xs text-[#888] mt-1 leading-normal">Refined visual aesthetics and thoughtful user experiences.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0e0e0e] border border-white/[0.06] min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF510B]">
                PILLAR 03
              </span>
              <p className="font-serif text-base sm:text-lg text-[#F4F0E9] mt-1">Real Impact</p>
              <p className="text-xs text-[#888] mt-1 leading-normal">Production solutions that solve actual human and industrial needs.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Education & Co-Curricular Track */}
        <div className="lg:col-span-6 space-y-8 min-w-0">
          {/* Education Block */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="w-5 h-5 text-[#FF510B] shrink-0" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
                ACADEMIC FOUNDATION
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-[clamp(1rem,2vw,1.25rem)] rounded-xl bg-[#0e0e0e] border border-white/[0.06] hover:border-white/[0.15] transition-colors min-w-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-serif text-base sm:text-lg text-[#F4F0E9]">
                      {edu.degree}
                    </span>
                    <span className="font-mono text-xs text-[#FF510B] font-medium shrink-0">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-xs text-[#A7A7A7]">{edu.institution}</p>
                  <p className="font-mono text-[11px] text-[#666] mt-2">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Users className="w-5 h-5 text-[#FF510B] shrink-0" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
                LEADERSHIP & ENGAGEMENT
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leadership.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0e0e0e] border border-white/[0.06] min-w-0"
                >
                  <span className="font-mono text-[10px] uppercase text-[#FF510B] tracking-wider block">
                    {item.period}
                  </span>
                  <p className="font-serif text-sm sm:text-base text-[#F4F0E9] mt-1">
                    {item.role}
                  </p>
                  <p className="text-xs text-[#888] mt-1">{item.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
