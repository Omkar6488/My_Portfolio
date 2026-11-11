"use client";

import { Briefcase, Trophy, CheckCircle2, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const { experience, achievements, certifications } = portfolioData;

  return (
    <section
      id="experience"
      aria-label="Experience & Achievements"
      className="relative w-full max-w-[1862px] mx-auto px-6 sm:px-10 lg:px-14 py-28 border-t border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.05]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FF510B]">
              04 / TRACK RECORD & HONORS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F4F0E9]">
            INDUSTRY EXPERIENCE & HACKATHONS
          </h2>
        </div>
        <p className="font-mono text-xs text-[#A7A7A7] uppercase tracking-[0.18em] mt-4 md:mt-0 max-w-sm">
          Verified studio internship, competitive hackathon placements, and professional certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Studio Internship */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-[#FF510B]" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
              PROFESSIONAL WORK HISTORY
            </h3>
          </div>

          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e0e0e]/80 border border-white/[0.08] hover:border-[#FF510B]/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/[0.06] gap-2">
                <div>
                  <h4 className="font-serif text-2xl text-[#F4F0E9]">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-[#FF510B] font-mono mt-0.5">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#161616] border border-white/[0.08] font-mono text-xs text-[#A7A7A7]">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#C4C0B8]">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-[#FF510B] mt-1.5 text-xs">◆</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Certifications Block */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#FF510B]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
                VERIFIED CERTIFICATIONS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-[#0e0e0e] border border-white/[0.06] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#FF510B] tracking-wider">
                      {cert.date}
                    </span>
                    <h5 className="font-serif text-sm text-[#F4F0E9] mt-1">
                      {cert.title}
                    </h5>
                  </div>
                  <p className="font-mono text-[11px] text-[#777] mt-2">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Hackathon Honors & Competitions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-[#FF510B]" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
              COMPETITIVE ACHIEVEMENTS
            </h3>
          </div>

          <div className="space-y-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0e0e0e] border border-white/[0.06] hover:border-[#FF510B]/40 transition-colors flex items-start gap-3.5"
              >
                <div className="mt-1 p-1.5 rounded-md bg-[#161616] text-[#FF510B] border border-[#FF510B]/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-serif text-base text-[#F4F0E9]">
                    {item.title}
                  </h5>
                  <p className="text-xs text-[#A7A7A7] mt-1 leading-relaxed">
                    {item.organizer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

