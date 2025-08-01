"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, FileText, Zap, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Problem text animations - appears, holds, then scrolls up
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0.8]);

  // Card 1 animations - slides in from left and stays fixed
  const card1X = useTransform(scrollYProgress, [0.3, 0.5], [-300, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const card1Scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  // Card 2 animations - slides in from left and stays fixed
  const card2X = useTransform(scrollYProgress, [0.5, 0.7], [-300, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]);

  // Card 3 animations - slides in from left and stays fixed
  const card3X = useTransform(scrollYProgress, [0.7, 0.9], [-300, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.7, 0.9], [0.8, 1]);

  // All cards scroll up together ONLY after the third is fully visible
  const cardsGroupOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  // Individual cards should NOT move up until the group animation starts
  const card1Y = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, -200]); // No movement until 90%, then move up
  const card2Y = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, -200]); // No movement until 90%, then move up
  const card3Y = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, -200]); // No movement until 90%, then move up

  return (
    <section ref={containerRef} className="py-32 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-24"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-inter font-bold text-ara-navy mb-12 leading-tight">
            The Problem?
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Patient values and medical preferences are not captured effectively
            and often lost amongst the complexities and various siloes within
            the healthcare system.
          </p>
        </motion.div>

        {/* Horizontally Stacked Cards Container - Scrolls up as group */}
        <motion.div
          className="flex flex-row gap-8 overflow-hidden"
          style={{ opacity: cardsGroupOpacity }}
        >
          {/* Card 1 - The Critical Moment */}
          <motion.div
            className="flex-1 min-w-0"
            style={{
              x: card1X,
              y: card1Y,
              opacity: card1Opacity,
              scale: card1Scale,
            }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ara-navy mb-4 text-center">
                The Critical Moment
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                When a code blue (i.e. cardiac arrest) is called, clinicians
                have seconds to decide whether to resuscitate or not.
              </p>
              <div className="mt-6 p-4 bg-ara-navy/5 rounded-xl border border-ara-navy/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-ara-navy" />
                  <span className="text-ara-navy font-semibold text-sm">
                    Seconds to Decide
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Lost Directives */}
          <motion.div
            className="flex-1 min-w-0"
            style={{
              x: card2X,
              y: card2Y,
              opacity: card2Opacity,
              scale: card2Scale,
            }}
          >
            <div className="bg-[#18A0A0] rounded-2xl p-8 shadow-lg h-full">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg backdrop-blur-sm">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Lost Directives
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                Today, a legally signed advanced directive or a
                Do-Not-Resuscitate (DNR) form often sits in a filing cabinet, a
                family inbox, or lost in a patient-portal PDF that nobody can
                find at the bedside.
              </p>
              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold text-sm">
                    Document Chaos
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - The Cost of Delay */}
          <motion.div
            className="flex-1 min-w-0"
            style={{
              x: card3X,
              y: card3Y,
              opacity: card3Opacity,
              scale: card3Scale,
            }}
          >
            <div className="bg-[#F9EFE8] rounded-2xl p-8 shadow-lg border border-orange-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ara-navy mb-4 text-center">
                The Cost of Delay
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                The default is full resuscitation, even when the patient would
                have chosen otherwise. Each unnecessary resuscitation costs the
                system $30–50,000. Worse, the patient may die without dignity or
                respect for their choices, leaving families emotionally
                devastated.
              </p>
              <div className="mt-6 p-4 bg-orange-50/50 rounded-xl border border-orange-200/50">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <span className="text-orange-700 font-semibold text-sm">
                    💰 $30K - $50K per patient
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Current Reality Box - Appears after cards scroll up */}
        <motion.div
          className="w-full mt-16 transform hover:scale-[1.02] transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="relative bg-gradient-to-br from-white via-orange-50 to-red-50 border-0 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden p-12 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 via-orange-100/20 to-orange-200/30 rounded-3xl pointer-events-none z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative z-10">
              <h3 className="text-ara-navy text-3xl font-inter font-bold flex items-center gap-4 group-hover:text-red-800 transition-colors duration-300 mb-6">
                <div className="w-5 h-5 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
                Current Reality
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">
                    Patient preferences lost in siloes
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">
                    Critical decisions made without context
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">
                    Families suffer emotional trauma
                  </span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">
                    System costs skyrocket
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
