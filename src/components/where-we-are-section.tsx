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
    <section
      ref={containerRef}
      className="py-16 md:py-80 relative min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-inter font-bold text-ara-navy mb-6 md:mb-12 leading-tight">
            Where We Are{" "}
            <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">
              Today
            </span>
          </h2>
        </motion.div>

        {/* Timeline Component */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ara-blue via-ara-teal to-ara-gold rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {/* Item 1 - Early Prototypes */}
            <motion.div
              className="relative group"
              style={{ opacity: item1Opacity, y: item1Y, scale: item1Scale }}
            >
              <div className="flex items-center justify-center md:justify-start md:pr-8">
                {/* Content Card */}
                <div className="w-full md:ml-12 md:flex-1">
                  <div className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-6 md:p-8 border border-ara-blue">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto sm:mx-0">
                        <Smartphone className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 group-hover:text-ara-blue transition-colors duration-300">
                          Early Prototypes
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          Early prototypes and testing of the mobile app are in
                          progress.
                        </p>
                        <div className="mt-4 flex items-center justify-center sm:justify-start space-x-2">
                          <div className="w-2 h-2 bg-ara-blue rounded-full animate-pulse"></div>
                          <span className="text-xs md:text-sm text-ara-blue font-medium">
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
                <div className="w-full md:mr-12 md:flex-1 md:order-2">
                  <div className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-6 md:p-8 border border-ara-blue">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto sm:mx-0">
                        <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 group-hover:text-ara-teal transition-colors duration-300">
                          Exclusive Network
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          Exclusive network of clinics, hospital systems,
                          patients, and estate-planning attorneys to refine
                          workflows and medicolegal requirements.
                        </p>
                        <div className="mt-4 flex items-center justify-center sm:justify-start space-x-2">
                          <div className="w-2 h-2 bg-ara-teal rounded-full animate-pulse"></div>
                          <span className="text-xs md:text-sm text-ara-teal font-medium">
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
                <div className="w-full md:ml-12 md:flex-1">
                  <div className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-6 md:p-8 border border-ara-blue">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto sm:mx-0">
                        <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 group-hover:text-ara-gold transition-colors duration-300">
                          Design Partners
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          Working with design partners to shape the product from
                          ground up.
                        </p>
                        <div className="mt-4 flex items-center justify-center sm:justify-start space-x-2">
                          <div className="w-2 h-2 bg-ara-teal rounded-full animate-pulse"></div>
                          <span className="text-xs md:text-sm text-ara-teal font-medium">
                            Active partnerships
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
