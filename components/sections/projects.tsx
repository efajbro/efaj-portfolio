"use client";

import dynamic from 'next/dynamic';

// Dynamically import Spline and force Next.js to skip Server-Side Rendering (SSR)
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
});
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, useTime } from "framer-motion";
import { MouseEvent, useRef } from "react";

const projects = [
  {
    title: "Neural Edge Controller",
    description: "Real-time object detection and path planning for autonomous robots using TinyML on microcontrollers.",
    techStack: ["TinyML", "ROS2", "Edge TPU", "Python"],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Swarm Intelligence Platform",
    description: "Distributed coordination system for multi-robot swarms with decentralized decision-making.",
    techStack: ["PyTorch", "MQTT", "Raspberry Pi", "Docker"],
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Vision-Based Gripper",
    description: "Adaptive robotic gripper with real-time visual feedback for delicate object manipulation.",
    techStack: ["OpenCV", "STM32", "3D CAD", "C++"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Edge AI Inference",
    description: "Optimized neural network inference framework for resource-constrained embedded systems.",
    techStack: ["Mamba", "ONNX", "ARM Cortex", "Rust"],
    className: "md:col-span-1 md:row-span-1",
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse & 3D Tilt Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  const xSpring = useSpring(xPct, { stiffness: 400, damping: 30 });
  const ySpring = useSpring(yPct, { stiffness: 400, damping: 30 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Continuous spinning laser border
  const time = useTime();
  const borderRotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    xPct.set((e.clientX - rect.left) / rect.width - 0.5);
    yPct.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    xPct.set(0);
    yPct.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-zinc-950 p-6 shadow-2xl ${project.className}`}
    >
      {/* 1. Spinning Laser Border */}
      <div className="absolute inset-[-2px] rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 mask-border">
        <motion.div 
          style={{ rotate: borderRotate }} 
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#eb7431_360deg)] opacity-50"
        />
      </div>

      {/* 2. Base Dark Glass Layer (Slightly more opaque so Spline doesn't ruin text readability) */}
      <div className="absolute inset-0 z-0 rounded-2xl bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/50" />

      {/* 3. Dot-Matrix Hologram Reveal (Tied to Mouse) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 overflow-hidden"
        style={{
          WebkitMaskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black 20%, transparent 100%)`,
          maskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black 20%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjM1LDExNiw0OSwwLjI1KSIvPjwvc3ZnPg==')] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#eb7431]/20 to-[#eb7431]/5 mix-blend-overlay" />
      </motion.div>

      {/* 4. Content */}
      <div 
        className="relative z-20 flex h-full flex-col justify-between pointer-events-none"
        style={{ transform: "translateZ(80px)" }} 
      >
        <div>
          <div className="w-full h-32 md:h-48 bg-zinc-900/40 rounded-xl mb-6 flex items-center justify-center border border-zinc-800/50 group-hover:border-[#eb7431]/50 group-hover:bg-[#eb7431]/5 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#eb7431]/50 shadow-[0_0_10px_#eb7431] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]" />
            <span className="text-zinc-600 text-xs font-mono tracking-[0.3em] group-hover:text-[#eb7431] group-hover:drop-shadow-[0_0_8px_rgba(235,116,49,0.8)] transition-all duration-500">
              INIT_RENDER_SEQ
            </span>
          </div>

          <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-[#eb7431] transition-colors duration-300 drop-shadow-lg">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(100px)" }}>
          {project.techStack.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md bg-zinc-900/80 text-zinc-300 border border-zinc-700/50 group-hover:border-[#eb7431]/50 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(235,116,49,0.3)] transition-all duration-300 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-zinc-950 [perspective:1200px]">
      
      {/* SPLINE 3D BACKGROUND
        The watermark guillotine: h-[calc(100%+120px)] forces the bottom 120px out of bounds.
        Since the parent section has `overflow-hidden`, the watermark is cleanly cut off.
        pointer-events-none prevents the 3D scene from intercepting your scroll or card hovers.
      */}
      <div className="absolute top-0 left-0 w-full h-[calc(100%+120px)] z-0 pointer-events-none opacity-80">
        <Spline scene="https://prod.spline.design/cRpj00oTCyXTFW1Q/scene.splinecode" />
      </div>

      {/* Deep Cyberpunk Background Glow - Left in for blending over the 3D scene */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#eb7431]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      
      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-2 border-[#eb7431] pl-6"
        >
          <div className="inline-flex items-center gap-2 text-[#eb7431] text-xs font-mono mb-2 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#eb7431] animate-ping" />
            Classified // Level 4
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase drop-shadow-xl">
            Deployed Systems
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(320px,auto)] gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}} />
    </section>
  );
}