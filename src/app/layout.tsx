import type { Metadata } from "next";
import { Bodoni_Moda, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omkar More — Engineer. Developer. Builder.",
  description:
    "Personal portfolio of Omkar More. Building intelligent products and digital experiences that solve real world problems.",
  keywords: [
    "Omkar More",
    "Portfolio",
    "Full-Stack Developer",
    "Game Developer",
    "Knowledge Graphs",
    "GraphRAG",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Omkar More" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${editorial.variable} ${inter.variable} ${mono.variable} dark`}
    >
      <body className="bg-background text-primaryText antialiased selection:bg-accentOrange/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

