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
        className="absolute top-12 right-2 sm:right-8 md:right-16 w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full pointer-events-none opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 65% 40%, rgba(255, 81, 11, 0.42) 0%, rgba(255, 81, 11, 0.1) 45%, transparent 75%)",
        }}
      />

      {/* Portrait Image with Pure Transparent Background */}
      <div className="relative w-[300px] xs:w-[360px] sm:w-[480px] md:w-[560px] lg:w-[620px] xl:w-[670px] aspect-[1309/1202]">
        <Image
          src="/images/omkar-portrait.png"
          alt="Omkar More — Portrait"
          priority
          fill
          sizes="(max-width: 640px) 300px, (max-width: 768px) 480px, (max-width: 1024px) 560px, (max-width: 1280px) 620px, 670px"
          className="object-contain object-top"
        />
      </div>
    </div>
  );
}
