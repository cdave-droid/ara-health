"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Users, Heart, ArrowRight } from "lucide-react";

export default function WhereWeAreSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Section text animations - appears, holds, then scrolls up (no fade out)
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  // Timeline items animations - appear one by one, fully opaque at 50% screen height
  const item1Opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const item1Y = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);
  const item1Scale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);

  const item2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const item2Y = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const item2Scale = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1]);

  const item3Opacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const item3Y = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);
  const item3Scale = useTransform(scrollYProgress, [0.4, 0.7], [0.9, 1]);

  return (
    <section ref={containerRef} className="py-80 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-56"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-inter font-bold text-ara-navy mb-12 leading-tight">
            Where We Are Today
          </h2>
        </motion.div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ara-blue via-ara-teal to-ara-gold rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {/* Item 1 - Early Prototypes */}
            <motion.div
              className="relative group"
              style={{ opacity: item1Opacity, y: item1Y, scale: item1Scale }}
            >
              <div className="flex items-center justify-center md:justify-start md:pr-8">
                {/* Content Card */}
                <div className="ml-8 md:ml-12 flex-1">
                  <div className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 border border-ara-blue">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Smartphone className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-ara-navy mb-4 group-hover:text-ara-blue transition-colors duration-300">
                          Early Prototypes
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Early prototypes and testing of the mobile app are in
                          progress.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-ara-blue rounded-full animate-pulse"></div>
                          <span className="text-sm text-ara-blue font-medium">
                            In Development
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Item 2 - Exclusive Network */}
            <motion.div
              className="relative group"
              style={{ opacity: item2Opacity, y: item2Y, scale: item2Scale }}
            >
              <div className="flex items-center justify-center md:justify-end md:pl-8">
                {/* Content Card */}
                <div className="mr-8 md:mr-12 flex-1 order-1 md:order-2">
                  <div className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 border border-ara-blue">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-ara-navy mb-4 group-hover:text-ara-teal transition-colors duration-300">
                          Exclusive Network
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Exclusive network of clinics, hospital systems,
                          patients, and estate-planning attorneys to refine
                          workflows and medicolegal requirements.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-ara-teal rounded-full animate-pulse"></div>
                          <span className="text-sm text-ara-teal font-medium">
                            Active Partnerships
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Item 3 - Design Partners */}
            <motion.div
              className="relative group"
              style={{ opacity: item3Opacity, y: item3Y, scale: item3Scale }}
            >
              <div className="flex items-center justify-center md:justify-start md:pr-8">
                {/* Content Card */}
                <div className="ml-8 md:ml-12 flex-1">
                  <div className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 border border-ara-blue">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-ara-navy mb-4 group-hover:text-ara-gold transition-colors duration-300">
                          Design Partners
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Looking for design-partner hospitals, long-term-care
                          organisations, and patient advocates who want to shape
                          the product from ground up.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-ara-gold rounded-full animate-pulse"></div>
                          <span className="text-sm text-ara-gold font-medium">
                            Seeking Partners
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
