// components/TestimonialsSection.tsx
"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Freelance Designer",
    avatar: "/avatars/alex.jpg",
    type: "text",
    quote:
      "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
  },
  {
    name: "Daniel Foster",
    role: "Content Creator",
    avatar: "/avatars/daniel.jpg",
    type: "video",
    bg: "/testimonials/daniel.jpg",
  },
  {
    name: "Mark Davidson",
    role: "Software Developer",
    avatar: "/avatars/mark.jpg",
    type: "text",
    quote:
      "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
  },
  {
    name: "Tom David",
    role: "Entrepreneur",
    avatar: "/avatars/tom.jpg",
    type: "video",
    bg: "/testimonials/tom.jpg",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className="bg-[#080810] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-white/10
            bg-white/5 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            <span className="text-xs text-white/60 tracking-wide">Testimonials</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center
          leading-tight mb-14">
          Real Results from <br /> Real People
        </h2>

        {/* Row header */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-white/60 text-sm">Join with 5K other students</p>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center
                justify-center text-white/50 hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center
                justify-center text-white/50 hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Cards row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[200px] rounded-2xl border border-white/10
                overflow-hidden relative"
              style={{ minHeight: 220 }}
            >
              {t.type === "video" ? (
                /* Video card */
                <div className="relative w-full h-full min-h-[220px] bg-white/10">
                  {/* Replace div with actual <Image> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                      border border-white/30 flex items-center justify-center">
                      <Play size={14} className="text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/20" />
                      <div>
                        <p className="text-white text-xs font-medium">{t.name}</p>
                        <p className="text-white/50 text-[10px]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Text card */
                <div className="bg-[#0d0d1a] p-4 h-full flex flex-col justify-between
                  min-h-[220px]">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-white/10 mb-3" />
                    <p className="text-white/50 text-xs leading-relaxed">{t.quote}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-white text-xs font-medium">{t.name}</p>
                    <p className="text-white/40 text-[10px]">{t.role}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}