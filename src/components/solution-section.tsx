"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Zap, Shield, Users, CheckCircle } from "lucide-react";

export default function SolutionSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Solution text animations - appears, holds, then scrolls up (no fade out)
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  // Solution points animations - fade in one by one, fully opaque at center
  const point1Opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const point1Y = useTransform(scrollYProgress, [0.2, 0.3], [30, 0]);

  const point2Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const point2Y = useTransform(scrollYProgress, [0.3, 0.4], [30, 0]);

  const point3Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const point3Y = useTransform(scrollYProgress, [0.4, 0.5], [30, 0]);

  const point4Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const point4Y = useTransform(scrollYProgress, [0.5, 0.6], [30, 0]);

  const point5Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const point5Y = useTransform(scrollYProgress, [0.6, 0.7], [30, 0]);

  return (
    <section ref={containerRef} className="py-80 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-56"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-inter font-bold text-ara-navy mb-12 leading-tight">
            Our Solution
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Ara Health provides a comprehensive AI platform that automates and
            aligns complex and scattered patient data systems.
          </p>
        </motion.div>

        {/* Solution Points - Fade in one by one */}
        <div className="space-y-8">
          {/* Point 1 - Patient & Family App */}
          <motion.div
            className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-ara-blue shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ opacity: point1Opacity, y: point1Y }}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ara-navy mb-3">
                Patient & Family App
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Securely capture advance-care choices, medical decisions,
                chronic condition treatment plans, and update medical documents.
              </p>
            </div>
          </motion.div>

          {/* Point 2 - One-Click SMART-on-FHIR */}
          <motion.div
            className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-ara-blue shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ opacity: point2Opacity, y: point2Y }}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ara-navy mb-3">
                One-Click SMART-on-FHIR
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Embedded view for any clinician who opens the patient&apos;s
                chart—no matter which EHR the clinic or hospital uses.
              </p>
            </div>
          </motion.div>

          {/* Point 3 - No More Guessing */}
          <motion.div
            className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-ara-blue shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ opacity: point3Opacity, y: point3Y }}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ara-navy mb-3">
                No More Guessing
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                No more calling outpatient clinics for information, digging
                through scanned PDFs, or guessing at patient&apos;s wishes.
              </p>
            </div>
          </motion.div>

          {/* Point 4 - Patient-Specific AI Models */}
          <motion.div
            className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-ara-blue shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ opacity: point4Opacity, y: point4Y }}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ara-navy mb-3">
                Patient-Specific AI Models
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Advanced AI that learns from each patient&apos;s unique medical
                history and preferences to provide personalized care
                recommendations.
              </p>
            </div>
          </motion.div>

          {/* Point 5 - Real-Time Value Alignment */}
          <motion.div
            className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-ara-blue shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ opacity: point5Opacity, y: point5Y }}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ara-navy mb-3">
                Real-Time Value Alignment
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Continuous monitoring and alignment of patient values with care
                decisions, ensuring dignity and respect in every medical choice.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
