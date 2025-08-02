"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function DynamicGradientBackground() {
  const { scrollY } = useScroll();
  const [currentGradient, setCurrentGradient] = useState(0);

  // Healthcare-themed gradient colors
  const gradients = [
    // Start: Clean medical white to soft blue
    "from-white via-ara-blue-light/20 to-ara-blue-light/50",
    // Transition: Soft blue to teal (trust, healing)
    "from-ara-blue-light/50 via-ara-blue-light/80 to-ara-teal-light/40",
    // Middle: Teal to green (health, growth)
    "from-ara-teal-light/40 via-ara-teal-light/80 to-ara-teal-light/30",
    // Transition: Green to mint (fresh, clean)
    "from-ara-teal-light/30 via-ara-navy/80 to-ara-navy/30",
    // End: Mint to soft blue (calm, professional)
    "from-ara-navy/30 via-ara-blue-light/20 to-ara-blue-light/50",
  ];

  // Transform scroll progress to gradient index
  const gradientIndex = useTransform(
    scrollY,
    [0, 1000, 2000, 3000, 4000],
    [0, 1, 2, 3, 4]
  );

  useEffect(() => {
    const unsubscribe = gradientIndex.on("change", (value) => {
      setCurrentGradient(Math.floor(value));
    });

    return () => unsubscribe();
  }, [gradientIndex]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 transition-all duration-1000 ease-in-out"
      style={{
        background: `linear-gradient(135deg, ${getGradientColors(currentGradient)})`,
      }}
      animate={{
        background: `linear-gradient(135deg, ${getGradientColors(currentGradient)})`,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-ara-blue-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-ara-teal-light/30 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-emerald-100/40 rounded-full blur-lg animate-pulse delay-1500"></div>
      </div>
    </motion.div>
  );
}

function getGradientColors(index: number): string {
  const colors = [
    // Start: Clean medical white to soft blue
    "#ffffff 0%, #e0f2fe 50%, #b3d8ff 100%",
    // Transition: Soft blue to teal
    "#b3d8ff 0%, #7dd3fc 50%, #5eead4 100%",
    // Middle: Teal to teal (health, growth)
    "#5eead4 0%, #2dd4bf 50%, #14b8a6 100%",
    // Transition: Teal to navy (fresh, clean)
    "#14b8a6 0%, #0a1f3d 50%, #0a1f3d 100%",
    // End: Navy to soft blue (calm, professional)
    "#0a1f3d 0%, #e0f2fe 50%, #b3d8ff 100%",
  ];

  return colors[Math.min(index, colors.length - 1)];
}
