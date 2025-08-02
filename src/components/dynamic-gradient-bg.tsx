"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function DynamicGradientBackground() {
  const { scrollY } = useScroll();
  const [currentGradient, setCurrentGradient] = useState(0);

  // Healthcare-themed gradient colors with more vibrant transitions
  const gradients = [
    // Start: Clean medical white to soft blue
    "from-white via-blue-50 to-ara-blue-light/20",
    // Transition: Soft blue to teal (trust, healing)
    "from-blue-50 via-ara-blue-light/30 to-ara-teal-light/40",
    // Middle: Teal to green (health, growth)
    "from-ara-teal-light/40 via-emerald-100 to-green-100",
    // Transition: Green to mint (fresh, clean)
    "from-green-100 via-mint-50 to-ara-teal-light/30",
    // End: Mint to soft blue (calm, professional)
    "from-mint-50 via-ara-blue-light/20 to-blue-50",
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
      className="fixed inset-0 -z-10 transition-all duration-1000 ease-in-out overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${getGradientColors(currentGradient)})`,
      }}
      animate={{
        background: `linear-gradient(135deg, ${getGradientColors(currentGradient)})`,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Magical Animated Particles */}
      <div className="absolute inset-0">
        {/* Floating orbs with different animations */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-ara-blue-light/30 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-ara-teal-light/40 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-emerald-100/50 rounded-full blur-lg"
          animate={{
            y: [0, 25, 0],
            x: [0, -10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Additional magical elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-ara-blue/20 rounded-full blur-md"
          animate={{
            y: [0, -30, 0],
            x: [0, 25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-ara-teal/25 rounded-full blur-xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />

        {/* Sparkle effects */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-2 h-2 bg-white/60 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-ara-blue-light/80 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <motion.div
          className="absolute bottom-1/2 left-1/5 w-1 h-1 bg-ara-teal-light/70 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Ripple effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 border border-white/30 rounded-full"
          animate={{
            scale: [0, 50, 0],
            opacity: [0.8, 0, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0,
          }}
        />

        <motion.div
          className="absolute bottom-1/2 right-1/2 w-3 h-3 border border-ara-blue-light/40 rounded-full"
          animate={{
            scale: [0, 40, 0],
            opacity: [0.6, 0, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-8 h-8 border border-white/20 rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 225, 45],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/6 left-1/6 w-6 h-6 border border-ara-teal-light/30 rotate-45"
          animate={{
            y: [0, 25, 0],
            rotate: [45, -135, 45],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
      </div>
    </motion.div>
  );
}

function getGradientColors(index: number): string {
  const colors = [
    // Start: Clean medical white to soft blue
    "#ffffff 0%, #f0f9ff 50%, #e0f2fe 100%",
    // Transition: Soft blue to teal
    "#f0f9ff 0%, #e0f2fe 50%, #ccfbf1 100%",
    // Middle: Teal to green
    "#ccfbf1 0%, #d1fae5 50%, #dcfce7 100%",
    // Transition: Green to mint
    "#dcfce7 0%, #f0fdf4 50%, #ccfbf1 100%",
    // End: Mint to soft blue
    "#f0fdf4 0%, #e0f2fe 50%, #f0f9ff 100%",
  ];

  return colors[Math.min(index, colors.length - 1)];
}
