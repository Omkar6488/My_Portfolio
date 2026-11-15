"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setOffset({ x: x * 6, y: y * 4 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center pointer-events-none select-none transition-transform duration-300 ease-out"
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      {/* Rich Warm Orange Ambient Rim Bloom behind right shoulder and hair */}
      <div
        className="absolute top-[18%] right-[2%] w-[clamp(260px,36vw,520px)] h-[clamp(260px,36vw,520px)] rounded-full pointer-events-none opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 62% 40%, rgba(255, 81, 11, 0.5) 0%, rgba(255, 81, 11, 0.16) 48%, transparent 75%)",
        }}
      />

      {/* Focused Orange Rim Accent along right hair contour */}
      <div
        className="absolute top-[12%] right-[14%] w-[clamp(160px,22vw,320px)] h-[clamp(220px,30vw,420px)] pointer-events-none opacity-45 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 75% 35%, rgba(255, 110, 20, 0.55) 0%, rgba(255, 81, 11, 0.2) 42%, transparent 72%)",
        }}
      />

      {/* Prominent Central Portrait (+30% visual scale to match reference) */}
      <Image
        src="/images/omkar-portrait.png"
        alt="Omkar More — Portrait"
        priority
        width={1309}
        height={1202}
        className="w-[clamp(310px,min(52vw,74vh),780px)] h-auto max-h-[clamp(290px,74vh,690px)] object-contain object-top drop-shadow-[0_24px_65px_rgba(0,0,0,0.95)]"
      />
    </div>
  );
}
