// components/ProblemSection.tsx
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="flex flex-col items-center bg-black py-24 px-6 text-center w-[1800px]">
      <div className="max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-widest text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
          Are Distractions Holding You Back?
        </div>
 
        <h2 className="text-3xl font-medium leading-tight text-white md:text-5xl">
          If you struggle to focus, feel overwhelmed <br />
          by{" "}
          <span className="text-gray-700">
            endless tasks, or procrastinate instead
          </span>{" "}
          <br />
          <span className="text-gray-800">
            of making progress, you're not alone.
          </span>
        </h2>

        <div className="mt-10 flex justify-center gap-3">
          <img
            src="image1.jpg"
            className="h-16 w-14 rounded-xl object-cover  opacity-80"
            alt="strained person"
          />
          <img
            src="image2.jpg"
            className="h-16 w-14 rounded-xl object-cover  opacity-80"
            alt="strained person"
          />
          <img
            src="image3.jpg"
            className="h-16 w-14 rounded-xl object-cover  opacity-80"
            alt="strained person"
          />
        </div>
      </div>
      {/* ── Part 2: Card Block ── */}
      <div className="max-w-4xl mx-auto b">
        <div
          className=" 
          overflow-hidden p-6 flex gap-6 min-h-[340px]"
        >
          {/* Left: Big photo */}
          <div className="w-56 h-full flex-shrink-0 rounded-xl overflow-hidden bg-white/5 ">
            
            <img src="image4.png" className="" />
            
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-between border border-white/10 rounded-xl p-6 bg-white/5">
            {/* Top row */}
            <div className="flex items-start justify-between">
              {/* No worries badge */}
              <div
                className="inline-flex items-center gap-2 border border-white/10 
                bg-white/5 rounded-full px-3 py-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <span className="text-xs text-white/50">No worries</span>
              </div>

              {/* Avatars + label */}
              <div className="flex flex-col items-end gap-1">
                <div className="flex -space-x-2">
                  <img
                    src="image8.jpg"
                    className="h-16 w-14 rounded-full object-cover  opacity-80"
                    alt="strained person"
                  />
                  <img
                    src="image9.jpg"
                    className="h-16 w-14 rounded-full object-cover  opacity-80"
                    alt="strained person"
                  />
                  <img
                    src="image10.jpg"
                    className="h-16 w-14 rounded-full object-cover  opacity-80"
                    alt="strained person"
                  />
                </div>
                <span className="text-xs text-white/40">
                  Join with 5K other students
                </span>
              </div>
            </div>

           

            
            <div className="flex">

{/* Bottom: text */}
            <div className="mt-auto py-8">
              <p className="text-xs text-white/40 mb-2">
                The ability to concentrate deeply is the ultimate productivity
                hack
              </p>
              <p className="text-white text-lg font-semibold leading-snug">
                And fortunately it's a skill you can train & develop.
              </p>
            </div>
             {/* Middle: small photo stack */}
            <div className="flex flex-col gap-2 self-end">
              <div className="mt-10 flex-col justify-center gap-3">
                <img
                  src="image5.jpg"
                  className="h-16 w-14 rounded-xl object-cover  opacity-80"
                  alt="strained person"
                />
                <img
                  src="image6.jpg"
                  className="h-16 w-14 rounded-xl object-cover  opacity-80"
                  alt="strained person"
                />
                <img
                  src="image7.jpg"
                  className="h-16 w-14 rounded-xl object-cover  opacity-80"
                  alt="strained person"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
