"use client";

import { Briefcase, Trophy, CheckCircle2, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const { experience, achievements, certifications } = portfolioData;

  return (
    <section
      id="experience"
      aria-label="Experience & Achievements"
      className="relative w-full max-w-[1862px] mx-auto px-[clamp(1rem,3vw,3.5rem)] py-[clamp(3.5rem,8vh,7rem)] border-t border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-[clamp(2.5rem,5vh,4rem)] pb-6 border-b border-white/[0.05] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FF510B]">
              04 / TRACK RECORD & HONORS
            </span>
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] uppercase tracking-tight text-[#F4F0E9] leading-tight">
            INDUSTRY EXPERIENCE & HACKATHONS
          </h2>
        </div>
        <p className="font-mono text-[clamp(11px,0.8vw,13px)] text-[#A7A7A7] uppercase tracking-[0.18em] max-w-sm">
          Verified studio internship, competitive hackathon placements, and professional certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,3.5rem)]">
        {/* Left Column: Studio Internship */}
        <div className="lg:col-span-7 space-y-8 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-[#FF510B] shrink-0" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
              PROFESSIONAL WORK HISTORY
            </h3>
          </div>

          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-[clamp(1.25rem,2.5vw,2rem)] rounded-2xl bg-[#0e0e0e]/80 border border-white/[0.08] hover:border-[#FF510B]/50 transition-all duration-300 min-w-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.06] gap-2">
                <div className="min-w-0">
                  <h4 className="font-serif text-[clamp(1.25rem,2vw,1.6rem)] text-[#F4F0E9] truncate">
                    {exp.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FF510B] font-mono mt-0.5">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#161616] border border-white/[0.08] font-mono text-[11px] sm:text-xs text-[#A7A7A7]">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#C4C0B8]">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-[#FF510B] mt-1.5 text-xs shrink-0">◆</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Certifications Block */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#FF510B] shrink-0" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
                VERIFIED CERTIFICATIONS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-[#0e0e0e] border border-white/[0.06] flex flex-col justify-between min-w-0"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase text-[#FF510B] tracking-wider block">
                      {cert.date}
                    </span>
                    <h5 className="font-serif text-sm text-[#F4F0E9] mt-1 line-clamp-2">
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
        <div className="lg:col-span-5 space-y-5 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-[#FF510B] shrink-0" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F4F0E9]">
              COMPETITIVE ACHIEVEMENTS
            </h3>
          </div>

          <div className="space-y-3.5">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-[clamp(1rem,1.5vw,1.25rem)] rounded-xl bg-[#0e0e0e] border border-white/[0.06] hover:border-[#FF510B]/40 transition-colors flex items-start gap-3 min-w-0"
              >
                <div className="mt-1 p-1.5 rounded-md bg-[#161616] text-[#FF510B] border border-[#FF510B]/30 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-serif text-sm sm:text-base text-[#F4F0E9]">
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
