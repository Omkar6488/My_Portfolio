"use client";

export default function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Deep Obsidian Canvas */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* Atmospheric Orange Ambient Bloom behind the portrait's right shoulder */}
      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[min(850px,90vw)] h-[min(600px,65vh)] opacity-35 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 56% 38%, rgba(255, 81, 11, 0.28) 0%, rgba(255, 81, 11, 0.06) 42%, transparent 72%)",
        }}
      />

      {/* Fluid Architecture Vertical Grid Columns (2 on mobile, 4 on tablet, 6 on desktop) */}
      <div className="relative mx-auto h-full max-w-[1862px] px-[clamp(1rem,3vw,3.5rem)] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 border-x border-white/[0.04]">
        <div className="border-r border-white/[0.035] h-full" />
        <div className="sm:border-r border-white/[0.035] h-full" />
        <div className="hidden sm:block lg:border-r border-white/[0.035] h-full" />
        <div className="hidden sm:block lg:border-r border-white/[0.035] h-full" />
        <div className="hidden lg:block border-r border-white/[0.035] h-full" />
        <div className="hidden lg:block h-full" />
      </div>

      {/* Subtle Noise / Film Grain Layer */}
      <div className="noise-overlay absolute inset-0 opacity-25 mix-blend-screen pointer-events-none" />
    </div>
  );
}
