"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
  <div className=" flex  flex-col items-center justify-center  text-center">
  
  <div className="absolute bottom-0 h-[300px] w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-50"></div>
  
  <div className="relative z-10 flex flex-col items-center">
    
    <div className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-4 py-1.5 text-xs font-medium text-gray-400">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
      30% off until 4d : 2h : 41m : 17s
    </div>

    <h1 className="max-w-4xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
      Master Focus & Get <br /> More Done in Less Time
    </h1>

    <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
      A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.
    </p>

    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
      <button className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
        Enroll now
      </button>
      <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
        Curriculum
      </button>
    </div>
    
  </div>
 
 <div className="py-16">
      <Image src="/image.png" alt="PPA" width={900} height={300} priority />
 </div>
</div>
  );
}