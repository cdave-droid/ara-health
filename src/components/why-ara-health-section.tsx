"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Heart, Users, Zap, CheckCircle } from "lucide-react";

export default function WhyAraHealthSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Section text animations - appears, holds, then scrolls up
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  // Card animations - fade in one by one
  const card1Opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.2, 0.3], [30, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.2, 0.3], [0.9, 1]);

  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.3, 0.4], [30, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.4], [0.9, 1]);

  const card3Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.4, 0.5], [30, 0]);
  const card3Scale = useTransform(scrollYProgress, [0.4, 0.5], [0.9, 1]);

  const card4Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const card4Y = useTransform(scrollYProgress, [0.5, 0.6], [30, 0]);
  const card4Scale = useTransform(scrollYProgress, [0.5, 0.6], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-32 relative min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-inter font-bold text-ara-navy mb-6 md:mb-12 leading-tight">
            Why <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">Ara Health</span>?
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 max-w-4xl md:max-w-6xl mx-auto leading-relaxed px-4">
            We're building the future of healthcare with patient values at the center.
          </p>
        </motion.div>

        {/* Cards Container - 2x2 grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 - Built on Open Standards */}
          <motion.div
            className="w-full"
            style={{
              opacity: card1Opacity,
              y: card1Y,
              scale: card1Scale,
            }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-ara-blue h-full flex flex-col">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 text-center">
                Built on Open Standards
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-grow">
                We're aligning with HL7 and SMART-on-FHIR so hospitals don't need custom interfaces.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Patient-First */}
          <motion.div
            className="w-full"
            style={{
              opacity: card2Opacity,
              y: card2Y,
              scale: card2Scale,
            }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-ara-blue h-full flex flex-col">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 text-center">
                Patient-First. Always.
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-grow">
                Patients and families keep a clear, shareable record of critical medical decisions through a patient's health care journey.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Clinician-Friendly */}
          <motion.div
            className="w-full"
            style={{
              opacity: card3Opacity,
              y: card3Y,
              scale: card3Scale,
            }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-ara-blue h-full flex flex-col">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 text-center">
                Clinician-Friendly
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-grow">
                Zero-click banner in the chart—information appears where and when care teams already look.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Enterprise Grade Security */}
          <motion.div
            className="w-full"
            style={{
              opacity: card4Opacity,
              y: card4Y,
              scale: card4Scale,
            }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-ara-blue h-full flex flex-col">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 text-center">
                Enterprise Grade Security
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-grow">
                HIPAA compliant, so your medical information is always secure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 