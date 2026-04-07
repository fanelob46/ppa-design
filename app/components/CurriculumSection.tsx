// components/CurriculumSection.tsx
"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Play, Settings, Users, MessageCircle } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    defaultOpen: true,
    lessons: [
      { title: "Understanding Focus & Distraction", duration: "14:23", preview: true },
      { title: "The Science Behind Deep Work", duration: "22:51" },
      { title: "Identifying Your Productivity Killers", duration: "34:42" },
      { title: "How to Strengthen Your Attention Span", duration: "27:08" },
    ],
  },
  {
    id: 2,
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [],
  },
  {
    id: 3,
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [],
  },
  {
    id: 4,
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [],
  },
];

const perks = [
  { icon: Play,           text: "6h of videos – Step-by-step deep work strategies." },
  { icon: Settings,       text: "Templates & Trackers – Stay on track effortlessly." },
  { icon: MessageCircle,  text: "Live Q&As – Expert guidance & accountability." },
  { icon: Users,          text: "Exclusive Community – Connect with others." },
];

export default function CurriculumSection() {
  const [openModule, setOpenModule] = useState(1);

  return (
    <section className="bg-[#080810] py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-white/10
            bg-white/5 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            <span className="text-xs text-white/60 tracking-wide">Course Curriculum</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center
          leading-snug mb-14">
          Mastering Deep Work: A Structured <br />
          Path to Peak Productivity
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left: Accordion */}
          <div className="flex-1 w-full">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="border-b border-white/10 last:border-b-0"
              >
                {/* Module header */}
                <button
                  onClick={() => setOpenModule(openModule === mod.id ? 0 : mod.id)}
                  className="w-full flex items-center justify-between py-5 text-left
                    group"
                >
                  <div>
                    <p className="text-white text-sm font-medium">{mod.title}</p>
                    <p className="text-white/40 text-xs mt-0.5">{mod.duration}</p>
                  </div>
                  {openModule === mod.id
                    ? <ChevronUp size={16} className="text-white/40 flex-shrink-0" />
                    : <ChevronDown size={16} className="text-white/40 flex-shrink-0" />
                  }
                </button>

                {/* Lessons */}
                {openModule === mod.id && mod.lessons.length > 0 && (
                  <div className="pb-4 flex flex-col gap-1">
                    {mod.lessons.map((lesson, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-lg
                          hover:bg-white/5 transition-colors group/lesson cursor-pointer"
                      >
                        {/* Play icon */}
                        <div className="w-6 h-6 rounded-full border border-white/20
                          flex items-center justify-center flex-shrink-0">
                          <Play size={9} className="text-white/50 ml-0.5" />
                        </div>

                        {/* Title */}
                        <span className="text-white/70 text-sm flex-1">
                          {lesson.title}
                        </span>

                        {/* Preview badge */}
                        {lesson.preview && (
                          <span className="text-[11px] text-blue-400 border
                            border-blue-400/30 bg-blue-500/10 rounded px-2 py-0.5">
                            Preview
                          </span>
                        )}

                        {/* Duration */}
                        <span className="text-white/30 text-xs ml-1">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Perks card */}
          <div className="w-full lg:w-64 flex-shrink-0 rounded-2xl border border-white/10
            bg-[#0d0d1a] p-6 flex flex-col gap-6">

            <h3 className="text-white font-semibold text-base">
              Not only video lessons!
            </h3>

            <ul className="flex flex-col gap-4">
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

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white
              text-sm font-medium py-2.5 rounded-lg transition-colors mt-2">
              Enroll now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}