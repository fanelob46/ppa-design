// components/Footer.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = ["Terms & conditions", "Refund policy", "Pricing", "Support"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10">

      {/* Main footer content */}
      <div className="max-w-5xl mx-auto px-8 py-14 flex items-center justify-between gap-8">

        {/* Left: Branding */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-3xl font-semibold leading-tight">
            The Deep <br /> Work Blueprint
          </h3>
          <p className="text-white/30 text-sm">
            Master Focus & Get More Done in Less Time
          </p>
        </div>

        {/* Right: CTA card */}
        <div className="flex-shrink-0 w-56 rounded-2xl bg-blue-600 p-5
          flex flex-col gap-4">

          {/* Avatars */}
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-blue-600 bg-white/20"
              />
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <p className="text-white text-xs font-medium">
              Join with 5K other students
            </p>
            <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30
              flex items-center justify-center transition-colors flex-shrink-0">
              <ArrowRight size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
          <p className="text-white/25 text-xs">© Copyright 2024, All Rights Reserved</p>
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}