"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";

// 1. The Physics Node Component
// We separate this so each segment of the tail can have its own independent physics brain
function TailNode({
  mouseX,
  mouseY,
  index,
  isClicking,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  index: number;
  isClicking: boolean;
}) {
  // Physics logic: The further down the tail, the looser and heavier the spring.
  // This creates the fluid, snake-like trailing curve.
  const stiffness = Math.max(100, 1000 - index * 80);
  const damping = Math.max(15, 40 - index * 2);

  const x = useSpring(mouseX, { stiffness, damping });
  const y = useSpring(mouseY, { stiffness, damping });

  // Node size decreases the further it is down the tail
  const size = Math.max(4, 20 - index * 1.5);

  return (
    <motion.div
      className="absolute top-0 left-0 border border-[#eb7431] bg-transparent"
      style={{
        x,
        y,
        width: size,
        height: size,
        marginLeft: -size / 2, // Keeps perfect center alignment
        marginTop: -size / 2,
        opacity: 1 - index * 0.08, // Fades out into the distance
      }}
      animate={{
        // Idle/Moving: A spiraling diamond sequence. 
        // Clicking: Rapidly spin and morph into an expanded circular aperture.
        rotate: isClicking ? 180 + index * 20 : 45 + index * 8,
        scale: isClicking ? 1.5 : 1,
        borderRadius: isClicking ? "50%" : "0%",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  );
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse coordinates (start off-screen)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Flashlight background glow (Very heavy delay, floats like a drone)
  const glowX = useSpring(cursorX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(cursorY, { stiffness: 60, damping: 20 });

  // Instant HUD crosshair (Almost zero delay, locked to physical mouse)
  const hudX = useSpring(cursorX, { stiffness: 2000, damping: 30 });
  const hudY = useSpring(cursorY, { stiffness: 2000, damping: 30 });

  useEffect(() => {
    // Abort entirely if the user is on a touch device (phones/tablets)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block mix-blend-screen transition-opacity duration-500" 
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      
      {/* LAYER 1: Ambient Flashlight Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eb7431] blur-[100px] opacity-15"
        style={{ x: glowX, y: glowY }}
      />

      {/* LAYER 2: The Inverse-Kinematic Cyber Ribbon (12 Segments) */}
      {[...Array(12)].map((_, i) => (
        <TailNode
          key={i}
          mouseX={cursorX}
          mouseY={cursorY}
          index={i}
          isClicking={isClicking}
        />
      ))}

      {/* LAYER 3: Core Targeting Crosshair */}
      <motion.div
        className="absolute top-0 left-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
        style={{ x: hudX, y: hudY }}
        animate={{
          rotate: isClicking ? 90 : 0,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Blinding Center LED */}
        <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_3px_rgba(235,116,49,1)]" />
        
        {/* Tactical Crosshairs */}
        <div className="absolute top-0 left-1/2 h-1.5 w-[2px] -translate-x-1/2 bg-[#eb7431]" />
        <div className="absolute bottom-0 left-1/2 h-1.5 w-[2px] -translate-x-1/2 bg-[#eb7431]" />
        <div className="absolute left-0 top-1/2 w-1.5 h-[2px] -translate-y-1/2 bg-[#eb7431]" />
        <div className="absolute right-0 top-1/2 w-1.5 h-[2px] -translate-y-1/2 bg-[#eb7431]" />
      </motion.div>
      
    </div>
  );
}