"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Download, ArrowUpRight, Github, Linkedin, Send, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful dispatch
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Omkar More"
      className="relative w-full max-w-[1862px] mx-auto px-6 sm:px-10 lg:px-14 py-28 border-t border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.05]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF510B]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FF510B]">
              05 / INITIATE CONVERSATION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F4F0E9]">
            LET&apos;S BUILD SOMETHING EXTRAORDINARY
          </h2>
        </div>
        <p className="font-mono text-xs text-[#A7A7A7] uppercase tracking-[0.18em] mt-4 md:mt-0 max-w-sm">
          Open for full-stack engineering roles, graph database architecture, and game systems development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Inquiries & Verification Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-white/[0.08] hover:border-[#FF510B]/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] text-[#A7A7A7] uppercase tracking-wider">
                PRIMARY EMAIL
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-mono text-[11px] text-[#FF510B] hover:text-white transition-colors"
              >
                {copiedEmail ? "COPIED ✓" : "COPY ADDRESS"}
              </button>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="font-serif text-xl sm:text-2xl text-[#F4F0E9] hover:text-[#FF510B] transition-colors break-all"
            >
              {personal.email}
            </a>
          </div>

          {/* Phone & Location Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#0e0e0e] border border-white/[0.06]">
              <span className="font-mono text-[10px] text-[#888] uppercase tracking-wider block mb-1">
                TELEPHONE
              </span>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="font-mono text-sm text-[#F4F0E9] hover:text-[#FF510B] transition-colors"
              >
                {personal.phone}
              </a>
            </div>

            <div className="p-5 rounded-xl bg-[#0e0e0e] border border-white/[0.06]">
              <span className="font-mono text-[10px] text-[#888] uppercase tracking-wider block mb-1">
                LOCATION
              </span>
              <p className="font-mono text-sm text-[#F4F0E9]">
                {personal.location}
              </p>
            </div>
          </div>

          {/* Resume Download Action */}
          <div className="p-6 rounded-2xl bg-[#111111] border border-[#FF510B]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg text-[#F4F0E9]">
                Official Resume
              </h4>
              <p className="text-xs text-[#A7A7A7] mt-0.5">
                PDF format · Complete verified credentials & academic record
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Omkar_More_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider text-white bg-[#FF510B] hover:bg-[#ff682b] hover:shadow-[0_0_20px_rgba(255,81,11,0.4)] transition-all font-medium whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Social Presence Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-3.5 rounded-xl bg-[#0e0e0e] border border-white/[0.06] hover:border-white/[0.2] flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C4C0B8] hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#FF510B]" />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-3.5 rounded-xl bg-[#0e0e0e] border border-white/[0.06] hover:border-white/[0.2] flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C4C0B8] hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#FF510B]" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Editorial Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0e0e0e]/80 border border-white/[0.08] backdrop-blur-sm">
            <h3 className="font-serif text-2xl text-[#F4F0E9] mb-2">
              Send a Direct Dispatch
            </h3>
            <p className="font-mono text-xs text-[#888] mb-8 uppercase tracking-wider">
              All messages route directly to omkarmore6488@gmail.com
            </p>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FF510B]/20 text-[#FF510B] border border-[#FF510B] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-[#F4F0E9]">
                  Transmission Dispatched
                </h4>
                <p className="text-sm text-[#A7A7A7] max-w-sm mx-auto">
                  Thank you for reaching out. I will review your message and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#A7A7A7] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full bg-[#141414] border border-white/[0.08] focus:border-[#FF510B] focus:outline-none rounded-xl px-4 py-3 font-mono text-xs text-[#F4F0E9] placeholder:text-[#555] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#A7A7A7] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="jane@example.com"
                      className="w-full bg-[#141414] border border-white/[0.08] focus:border-[#FF510B] focus:outline-none rounded-xl px-4 py-3 font-mono text-xs text-[#F4F0E9] placeholder:text-[#555] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#A7A7A7] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="Engineering Role / Project Collaboration"
                    className="w-full bg-[#141414] border border-white/[0.08] focus:border-[#FF510B] focus:outline-none rounded-xl px-4 py-3 font-mono text-xs text-[#F4F0E9] placeholder:text-[#555] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#A7A7A7] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Describe your inquiry or opportunity..."
                    className="w-full bg-[#141414] border border-white/[0.08] focus:border-[#FF510B] focus:outline-none rounded-xl px-4 py-3 font-mono text-xs text-[#F4F0E9] placeholder:text-[#555] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider text-white bg-[#FF510B] hover:bg-[#ff682b] hover:shadow-[0_0_20px_rgba(255,81,11,0.35)] transition-all font-medium"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

