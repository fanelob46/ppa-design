// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = ["Overview", "Curriculum", "Testimonials", "Pricing"];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14
      bg-[#0a0a0f] border-b border-white/[0.08]"
    >
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="PPA" width={80} height={32} priority />
      </Link>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              href={`#${link.toLowerCase()}`}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <div className="flex items-center bg-white/[0.07] rounded-full p-[3px] gap-0.5">
          <button
            onClick={() => setTheme("dark")}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
              ${theme === "dark" ? "bg-white/10 text-white" : "text-white/40"}`}
          >
            {/* Moon icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          </button>
          <button
            onClick={() => setTheme("light")}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
              ${theme === "light" ? "bg-white/10 text-white" : "text-white/40"}`}
          >
            {/* Sun icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
            </svg>
          </button>
        </div>

        {/* CTA Button */}
        <button
          className="bg-[#3B6FFF] hover:bg-[#2a5ee8] text-white text-[13px] font-medium
          px-[18px] h-[34px] rounded-lg transition-colors whitespace-nowrap"
        >
          Enroll now
        </button>
      </div>
    </nav>
  );
}
