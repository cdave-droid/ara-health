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

  // Card 1 animations - appears and locks screen when it reaches center
  const card1X = useTransform(scrollYProgress, [0.15, 0.25], [-300, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const card1Scale = useTransform(scrollYProgress, [0.15, 0.25], [0.8, 1]);
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.9, 1],
    [0, 0, 0, -200]
  ); // Locked until 90%

  // Card 2 animations - appears as you scroll while screen is locked
  const card2X = useTransform(scrollYProgress, [0.25, 0.35], [-300, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.25, 0.35], [0.8, 1]);
  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.9, 1],
    [0, 0, 0, -200]
  ); // Locked until 90%

  // Card 3 animations - appears as you scroll while screen is locked
  const card3X = useTransform(scrollYProgress, [0.35, 0.45], [-300, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.35, 0.45], [0.8, 1]);
  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.9, 1],
    [0, 0, 0, -200]
  ); // Locked until 90%

  // All cards fade out together when they move up
  const cardsGroupOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section ref={containerRef} className="py-32 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-56"
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-ara-blue h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ara-navy mb-4 text-center">
                The Critical Moment
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg flex-grow">
                When a code blue (i.e. cardiac arrest) is called, clinicians
                have seconds to decide whether to resuscitate or not.
              </p>
              <div className="mt-6 p-4 bg-ara-teal/5 rounded-xl border border-ara-teal/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-ara-teal" />
                  <span className="text-ara-teal font-semibold text-sm">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-ara-blue h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ara-navy mb-4 text-center">
                Lost Directives
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg flex-grow">
                Today, a legally signed advanced directive or a
                Do-Not-Resuscitate (DNR) form often sits in a filing cabinet, a
                family inbox, or lost in a patient-portal PDF that nobody can
                find at the bedside.
              </p>
              <div className="mt-6 p-4 bg-ara-teal/5 rounded-xl border border-ara-teal/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-ara-teal" />
                  <span className="text-ara-teal font-semibold text-sm">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-ara-blue h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ara-navy mb-4 text-center">
                The Cost of Delay
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg flex-grow">
                The default is full resuscitation, even when the patient would
                have chosen otherwise. Each unnecessary resuscitation costs the
                system $30–50,000. Worse, the patient may die without dignity or
                respect for their choices, leaving families emotionally
                devastated.
              </p>
              <div className="mt-6 p-4 bg-ara-teal/5 rounded-xl border border-ara-teal/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-ara-teal" />
                  <span className="text-ara-teal font-semibold text-sm">
                    💰 $30K - $50K per patient
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
