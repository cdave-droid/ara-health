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

  // Problem text animations - appears, holds, then scrolls up (no fade out)
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  // Card animations - simplified for mobile, more complex for desktop
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.15, 0.25], [30, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.15, 0.25], [0.9, 1]);

  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.25, 0.35], [30, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.25, 0.35], [0.9, 1]);

  const card3Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.35, 0.45], [30, 0]);
  const card3Scale = useTransform(scrollYProgress, [0.35, 0.45], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-32 relative min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-16 md:mb-56"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-inter font-bold text-ara-navy mb-6 md:mb-12 leading-tight">
            The Problem?
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 max-w-4xl md:max-w-6xl mx-auto leading-relaxed px-4">
            Patient values and medical preferences are not captured effectively
            and often lost amongst the complexities and various siloes within
            the healthcare system.
          </p>
        </motion.div>

        {/* Cards Container - Vertical stack on mobile, horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 - The Critical Moment */}
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
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 text-center">
                The Critical Moment
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-grow">
                When a code blue (i.e. cardiac arrest) is called, clinicians
                have seconds to decide whether to resuscitate or not.
              </p>
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-ara-teal/5 rounded-xl border border-ara-teal/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-ara-teal" />
                  <span className="text-ara-teal font-semibold text-xs md:text-sm">
                    Seconds to Decide
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Lost Directives */}
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
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 text-center">
                Lost Directives
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-grow">
                Today, a legally signed advanced directive or a
                Do-Not-Resuscitate (DNR) form often sits in a filing cabinet, a
                family inbox, or lost in a patient-portal PDF that nobody can
                find at the bedside.
              </p>
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-ara-teal/5 rounded-xl border border-ara-teal/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-ara-teal" />
                  <span className="text-ara-teal font-semibold text-xs md:text-sm">
                    Document Chaos
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - The Cost of Delay */}
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
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ara-navy mb-3 md:mb-4 text-center">
                The Cost of Delay
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-grow">
                The default is full resuscitation, even when the patient would
                have chosen otherwise. Each unnecessary resuscitation costs the
                system $30–50,000. Worse, the patient may die without dignity or
                respect for their choices, leaving families emotionally
                devastated.
              </p>
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-ara-teal/5 rounded-xl border border-ara-teal/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-ara-teal" />
                  <span className="text-ara-teal font-semibold text-xs md:text-sm">
                    💰 $30K - $50K per patient
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
