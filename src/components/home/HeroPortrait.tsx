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
        className="absolute top-[15%] right-[18%] w-[clamp(100px,14vw,200px)] h-[clamp(180px,26vw,340px)] rounded-full pointer-events-none opacity-25 blur-xl"
        style={{
          background:
            "radial-gradient(ellipse at 65% 45%, rgba(255, 81, 11, 0.35) 0%, rgba(255, 81, 11, 0.08) 50%, transparent 75%)",
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
