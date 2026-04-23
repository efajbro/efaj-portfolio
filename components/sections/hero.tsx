"use client"; // <-- THIS IS THE MISSING MAGIC WORD

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
});

export function HeroSection() {
  return (
    // ... the rest of your hero section code stays exactly the same
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center bg-zinc-950 overflow-hidden"
    >
      {/* 1. The 3D Background Engine */}
      {/* We center the canvas perfectly and scale it up to 115% of the viewport. 
          This guarantees the bottom-right corner is violently shoved off-screen, no matter your monitor size. */}
      <div className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/JVfFHXRWZNuwEjmG/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* 2. The Lighting / Readability Layer */}
      {/* A subtle dark gradient coming from the left so your text is always perfectly readable, 
          even if the 3D object spins behind it. pointer-events-none lets mouse clicks pass through to the 3D. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none" />

      {/* 3. The Typography (Pulled to the Front) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
        {/* We re-enable pointer-events here so users can still highlight your text if they want to */}
        <div className="space-y-6 max-w-3xl pointer-events-auto">
          <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-none drop-shadow-2xl">
            Efaj
            <br />
            Hossain
          </h1>
          <p className="text-xl sm:text-3xl text-zinc-300 font-light tracking-wide drop-shadow-lg">
            Researcher, Entrepreneur, Photographer
          </p>
        </div>
      </div>
    </section>
  );
}