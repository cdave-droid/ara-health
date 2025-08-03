"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

export default function MissionSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Mission text animations - appears, holds, then scrolls up
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  // Mission statement animation - fade in after heading
  const missionOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const missionY = useTransform(scrollYProgress, [0.2, 0.35], [30, 0]);
  const missionScale = useTransform(scrollYProgress, [0.2, 0.35], [0.95, 1]);

  // Mission pillars animation
  const pillarsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const pillarsY = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-32 relative min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Heading */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-inter font-bold text-ara-navy mb-6 md:mb-12 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
        </motion.div>

        {/* Mission Statement - Elegant Design */}
        <motion.div
          className="mb-20 md:mb-32"
          style={{ opacity: missionOpacity, y: missionY, scale: missionScale }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-ara-blue/20 to-ara-teal/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-ara-teal/20 to-ara-blue/20 rounded-full blur-xl"></div>

              {/* Main mission card */}
              <div className="relative bg-gradient-to-br from-white via-white to-gray-50/50 rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-200/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl mb-6 md:mb-8 shadow-lg">
                    <Heart className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-inter font-bold text-ara-navy mb-6 md:mb-8">
                    To reduce patient suffering as much as possible
                  </h3>

                  <p className="text-xl md:text-2xl lg:text-3xl font-inter font-bold text-ara-navy mb-6 md:mb-8">
                    by building a more compassionate and efficient health care
                    system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
