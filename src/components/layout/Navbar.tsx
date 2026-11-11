"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = "hero" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work", id: "work" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-10 lg:px-14 pointer-events-none">
      <nav
        aria-label="Primary"
        className={`pointer-events-auto w-full max-w-[1720px] flex items-center justify-between py-2.5 px-6 sm:px-8 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
            : "bg-[#0b0b0b]/75 backdrop-blur-md border border-white/[0.09]"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="group flex items-baseline gap-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF510B] rounded-full py-1"
        >
          <span className="font-serif text-xl sm:text-[22px] font-normal tracking-tight text-[#F4F0E9] transition-transform duration-200 group-hover:scale-[1.01]">
            Omkar More
          </span>
          <span className="font-serif text-xl sm:text-[22px] font-bold text-[#FF510B]">
            .
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-9">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`font-sans text-[13px] tracking-normal transition-colors duration-200 relative py-1 ${
                      isActive
                        ? "text-[#F4F0E9] font-medium"
                        : "text-[#A7A7A7] hover:text-[#F4F0E9]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#FF510B] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA: Let's talk ↗ */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full font-sans text-xs tracking-wide text-[#F4F0E9] bg-transparent border border-white/[0.22] hover:border-[#FF510B] hover:bg-[#FF510B]/10 hover:shadow-[0_0_15px_rgba(255,81,11,0.25)] transition-all duration-300"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F4F0E9] group-hover:text-[#FF510B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-sans text-xs tracking-wide text-[#F4F0E9] border border-[#FF510B]/60"
          >
            <span>Talk</span>
            <ArrowUpRight className="w-3 h-3 text-[#FF510B]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A7A7A7] hover:text-[#F4F0E9] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto md:hidden px-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-3 text-[#A7A7A7] hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <ul className="flex flex-col items-center gap-8 mb-10 text-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-serif text-3xl text-[#F4F0E9] hover:text-[#FF510B] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-sans text-sm tracking-wide text-[#F4F0E9] bg-[#111111] border border-[#FF510B]"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF510B]" />
          </a>
        </div>
      )}
    </header>
  );
}
