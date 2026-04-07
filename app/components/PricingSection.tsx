// components/PricingSection.tsx
"use client";
import { useState, useEffect } from "react";
import { Play, Settings, MessageCircle, Users } from "lucide-react";

const perks = [
  { icon: Play,          text: "6h of videos – Step-by-step deep work strategies." },
  { icon: Settings,      text: "Templates & Trackers – Stay on track effortlessly." },
  { icon: MessageCircle, text: "Live Q&As – Expert guidance & accountability." },
  { icon: Users,         text: "Exclusive Community – Connect with others." },
];

const DEADLINE = new Date(Date.now() + 4 * 86400000 + 2 * 3600000 + 41 * 60000 + 17000);

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function PricingSection() {
  const { d, h, m, s } = useCountdown(DEADLINE);

  return (
    <section className="bg-[#080810] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Left: Intro card */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-[#0d0d1a] p-8
            flex flex-col justify-between">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/10
              bg-white/5 rounded-full px-3 py-1 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              <span className="text-xs text-white/60">Introducing</span>
            </div>

            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                The Deep Work Blueprint
              </h3>
              <p className="text-white/40 text-sm mb-8">
                What extra you will get if you enroll now
              </p>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-white/15
                    flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <span className="text-white/50 text-sm">
                    Bonus: 1:1 coaching session to boost focus.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-white/15
                    flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                  <span className="text-white/50 text-sm">
                    Discount: Save 30% when you enroll now!
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Pricing card */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-[#0d0d1a] p-8
            flex flex-col gap-6">

            {/* Price row */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-white text-4xl font-bold">$349</span>
                <span className="text-white/30 text-lg line-through">$500</span>
              </div>
              <span className="text-xs text-blue-400 border border-blue-400/30
                bg-blue-500/10 rounded-md px-2.5 py-1 font-medium">
                30% off
              </span>
            </div>

            {/* Countdown */}
            <p className="text-white/40 text-sm">
              30% off until{" "}
              <span className="text-white/70 font-medium tabular-nums">
                {d}d : {String(h).padStart(2, "0")}h : {String(m).padStart(2, "0")}m : {String(s).padStart(2, "0")}s
              </span>
            </p>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Perks */}
            <ul className="flex flex-col gap-3">
              {perks.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-white/15
                    flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={10} className="text-white/50" />
                  </div>
                  <span className="text-white/50 text-xs leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white
              text-sm font-medium py-3 rounded-xl transition-colors mt-auto">
              Enroll now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}