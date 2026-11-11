"use client";

import { ArrowUpRight, Github, ExternalLink, Network, Zap, Users, Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Network className="w-5 h-5 text-[#FF510B]" />;
      case 1:
        return <Zap className="w-5 h-5 text-[#FF510B]" />;
      case 2:
        return <Users className="w-5 h-5 text-[#FF510B]" />;
      default:
        return <Compass className="w-5 h-5 text-[#FF510B]" />;
    }
  };

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="relative w-full max-w-[1862px] mx-auto px-6 sm:px-10 lg:px-14 py-28 border-t border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.05]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FF510B]">
              02 / SELECTED WORK
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F4F0E9]">
            ENGINEERED SYSTEMS & PRODUCTS
          </h2>
        </div>
        <p className="font-mono text-xs text-[#A7A7A7] uppercase tracking-[0.18em] mt-4 md:mt-0 max-w-sm">
          High-performance full-stack systems, knowledge graph pipelines, and mobile telemetry feeds.
        </p>
      </div>

      {/* Projects Grid / Editorial Cards */}
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <article
            key={project.title}
            className="group relative bg-[#0e0e0e]/70 border border-white/[0.08] hover:border-[#FF510B]/50 rounded-2xl p-6 sm:p-10 lg:p-12 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          >
            {/* Top Bar inside card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.06] gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#141414] border border-white/[0.08]">
                  {getProjectIcon(idx)}
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#A7A7A7] tracking-widest uppercase">
                    SYSTEM 0{idx + 1} · {project.year}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E9] group-hover:text-[#FF510B] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.links.github || "https://github.com/Omkar6488"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#A7A7A7] hover:text-[#F4F0E9] py-1 px-3 rounded-full bg-[#161616] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
                <a
                  href={project.links.github || "https://github.com/Omkar6488"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#F4F0E9] hover:text-[#FF510B] py-1 px-3 rounded-full bg-[#161616] border border-[#FF510B]/40 hover:border-[#FF510B] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF510B]" />
                </a>
              </div>
            </div>

            {/* Content & Architectural Spec */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description & Insights */}
              <div className="lg:col-span-7 space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-[#FF510B]">
                  {project.tagline}
                </p>

                <div className="space-y-3 font-sans text-sm sm:text-base text-[#C4C0B8] leading-relaxed">
                  {project.description.map((desc, dIdx) => (
                    <p key={dIdx} className="flex items-start gap-2.5">
                      <span className="text-[#FF510B] mt-1 text-xs">◆</span>
                      <span>{desc}</span>
                    </p>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-md bg-[#161616] text-[#A7A7A7] border border-white/[0.06] hover:border-[#FF510B]/40 hover:text-[#F4F0E9] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Architectural Terminal Preview */}
              <div className="lg:col-span-5 bg-[#080808] border border-white/[0.08] rounded-xl p-5 font-mono text-xs text-[#A7A7A7] select-none shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-[#666] uppercase tracking-wider">
                    SPEC // {project.title.toLowerCase().replace(/[^a-z0-9]/g, "_")}
                  </span>
                </div>

                <div className="space-y-2 text-[11px] leading-relaxed">
                  <p className="text-[#FF510B]">
                    &gt; ARCHITECTURE.STATUS: <span className="text-emerald-400">DEPLOYED</span>
                  </p>
                  <p className="text-[#888]">
                    &gt; RUNTIME_ENVIRONMENT: Production
                  </p>
                  <p className="text-[#888]">
                    &gt; PRIMARY_STACK: {project.techStack.slice(0, 3).join(" · ")}
                  </p>
                  <p className="text-[#888]">
                    &gt; REPOSITORY: Omkar6488/{project.title.replace(/\s+/g, "-")}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[#A7A7A7]">
                    <span>STATUS_CODE: 200 OK</span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

