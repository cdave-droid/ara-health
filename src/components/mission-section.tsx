"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Shield, Users, Target, ArrowRight } from "lucide-react";

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
          className="text-center mb-16 md:mb-24"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-inter font-bold text-ara-navy mb-6 md:mb-12 leading-tight">
            Our <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">Mission</span>
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
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-inter font-bold text-ara-navy mb-6 md:mb-8">
                    To reduce patient suffering as much as possible
                  </h3>
                  
                  <div className="flex items-center justify-center mb-6 md:mb-8">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-ara-blue to-transparent"></div>
                    <ArrowRight className="h-6 w-6 text-ara-blue mx-4" />
                    <div className="w-12 h-0.5 bg-gradient-to-r from-ara-blue via-ara-teal to-transparent"></div>
                  </div>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium">
                    and build a more effective healthcare system that prioritizes patient well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          style={{ opacity: pillarsOpacity, y: pillarsY }}
        >
          {/* Pillar 1 - Reduce Suffering */}
          <div className="text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Shield className="h-10 w-10 md:h-12 md:w-12 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3">
              Reduce Suffering
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Minimizing patient pain and distress through better care coordination and decision-making.
            </p>
          </div>

          {/* Pillar 2 - Build Effective System */}
          <div className="text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Target className="h-10 w-10 md:h-12 md:w-12 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3">
              Build Effective System
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Creating healthcare infrastructure that works seamlessly for patients and providers.
            </p>
          </div>

          {/* Pillar 3 - Prioritize Well-being */}
          <div className="text-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Users className="h-10 w-10 md:h-12 md:w-12 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3">
              Prioritize Well-being
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Ensuring every healthcare decision centers on patient health and quality of life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 