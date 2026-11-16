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
      {/* Restrained subtle orange contour highlight strictly behind right edge of hair & shoulder */}
      <div
        className="absolute top-[10%] right-[15%] w-[clamp(120px,16vw,240px)] h-[clamp(200px,30vw,400px)] rounded-full pointer-events-none opacity-25 blur-xl"
        style={{
          background:
            "radial-gradient(ellipse at 65% 45%, rgba(255, 81, 11, 0.35) 0%, rgba(255, 81, 11, 0.08) 50%, transparent 75%)",
        }}
      />

      {/* Prominent Central Portrait (Enlarged +20-25% to match original reference) */}
      <Image
        src="/images/omkar-portrait.png"
        alt="Omkar More — Portrait"
        priority
        width={1309}
        height={1202}
        className="w-[clamp(340px,min(62vw,89vh),940px)] h-auto max-h-[clamp(330px,89vh,800px)] object-contain object-top drop-shadow-[0_24px_65px_rgba(0,0,0,0.95)]"
      />
    </div>
  );
}
