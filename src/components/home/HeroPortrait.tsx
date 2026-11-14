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
      {/* Subtle Warm Orange Ambient Rim Bloom */}
      <div
        className="absolute top-1/4 right-[5%] w-[clamp(200px,32vw,440px)] h-[clamp(200px,32vw,440px)] rounded-full pointer-events-none opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 65% 40%, rgba(255, 81, 11, 0.42) 0%, rgba(255, 81, 11, 0.1) 45%, transparent 75%)",
        }}
      />

      {/* Portrait Image with Natural Responsive Dimensions */}
      <Image
        src="/images/omkar-portrait.png"
        alt="Omkar More — Portrait"
        priority
        width={1309}
        height={1202}
        className="w-[clamp(250px,min(38vw,46vh),640px)] h-auto max-h-[clamp(220px,46vh,580px)] object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
      />
    </div>
  );
}
