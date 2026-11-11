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
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[600px] opacity-35 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 56% 38%, rgba(255, 81, 11, 0.28) 0%, rgba(255, 81, 11, 0.06) 42%, transparent 72%)",
        }}
      />

      {/* Precision Vertical Grid Columns (6 Columns) */}
      <div className="relative mx-auto h-full max-w-[1862px] px-6 sm:px-12 grid grid-cols-6 border-x border-white/[0.04]">
        <div className="border-r border-white/[0.035] h-full" />
        <div className="border-r border-white/[0.035] h-full" />
        <div className="border-r border-white/[0.035] h-full" />
        <div className="border-r border-white/[0.035] h-full" />
        <div className="border-r border-white/[0.035] h-full" />
        <div className="h-full" />
      </div>

      {/* Precision Horizontal Guide Line */}
      <div className="absolute top-[86px] left-0 right-0 border-b border-white/[0.03]" />

      {/* Subtle Noise / Film Grain Layer */}
      <div className="noise-overlay absolute inset-0 opacity-25 mix-blend-screen pointer-events-none" />
    </div>
  );
}
