// components/FeaturesSection.tsx
import { Zap, Target, CheckCircle, Repeat } from "lucide-react";

const features = [
  {
    icon: Zap,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: Target,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: CheckCircle,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: Repeat,
    text: "Build lasting habits for long-term success.",
  },
];

export default function FeaturesSection() {
  return (
   <section className="flex flex-col items-center bg-[#000000] py-24 px-6 text-center size-[1800px]">
  
  <div className="mb-20">
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] tracking-wide text-blue-400">
      <span className="h-1 w-1 rounded-full bg-blue-500"></span>
      The Deep Work Blueprint
    </div>
    <h2 className="max-w-xl text-3xl font-medium leading-tight text-white md:text-4xl">
      A self-paced, results-driven course designed to help you
    </h2>
  </div>

  <div className="relative flex flex-col gap-16 text-left">
    
    <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>

    <div className="relative flex items-start gap-10 pl-0">
      <div className="z-10 mt-2 h-[15px] w-[15px] rounded-full border-[3px] border-black bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
        </div>
        <p className="max-w-xs text-lg font-medium text-gray-300">Develop laser-sharp focus & eliminate distractions.</p>
      </div>
    </div>

    <div className="relative flex items-start gap-10 pl-0">
      <div className="z-10 mt-2 h-[15px] w-[15px] rounded-full border-[3px] border-black bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <p className="max-w-xs text-lg font-medium text-gray-300">Master deep work techniques for smarter productivity.</p>
      </div>
    </div>

    <div className="relative flex items-start gap-10 pl-0">
      <div className="z-10 mt-2 h-[15px] w-[15px] rounded-full border-[3px] border-black bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <p className="max-w-xs text-lg font-medium text-gray-300">Overcome procrastination & get more done.</p>
      </div>
    </div>

    <div className="relative flex items-start gap-10 pl-0">
      <div className="z-10 mt-2 h-[15px] w-[15px] rounded-full border-[3px] border-black bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
        </div>
        <p className="max-w-xs text-lg font-medium text-gray-300">Build lasting habits for long-term success.</p>
      </div>
    </div>

  </div>
</section>
  );
}