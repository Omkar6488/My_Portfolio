"use client";

export default function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Pure Cinematic Obsidian Canvas (#070707) */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* Subtle Horizontal Architectural Grid Line */}
      <div className="absolute top-[82px] left-0 right-0 border-b border-white/[0.035]" />
      <div className="absolute bottom-[48px] left-0 right-0 border-b border-white/[0.035]" />

      {/* Fluid Architecture Vertical Grid Columns (2 on mobile, 4 on tablet, 6 on desktop) */}
      <div className="relative mx-auto h-full max-w-[1862px] px-[clamp(1rem,3vw,3.5rem)] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 border-x border-white/[0.045]">
        <div className="border-r border-white/[0.04] h-full" />
        <div className="sm:border-r border-white/[0.04] h-full" />
        <div className="hidden sm:block lg:border-r border-white/[0.04] h-full" />
        <div className="hidden sm:block lg:border-r border-white/[0.04] h-full" />
        <div className="hidden lg:block border-r border-white/[0.04] h-full" />
        <div className="hidden lg:block h-full" />
      </div>

      {/* Delicate Film Grain / Stipple Photographic Noise Texture */}
      <div className="noise-overlay absolute inset-0 opacity-20 mix-blend-screen pointer-events-none" />
    </div>
  );
}
