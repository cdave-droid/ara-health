"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Award, Star, User } from "lucide-react";

export default function TeamSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Team text animations - appears, holds, then scrolls up (no fade out)
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  // Team cards animations - appear together
  const card1Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);

  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);

  return (
    <section ref={containerRef} className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Team Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-24"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-inter font-bold text-ara-navy mb-12 leading-tight">
            Meet the Team
          </h2>
        </motion.div>

        {/* Team Cards - Flip cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Founder and CEO Card */}
          <motion.div
            className="relative h-[600px]"
            style={{ opacity: card1Opacity, y: card1Y, scale: card1Scale }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg border border-ara-blue overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src="/ceo.avif"
                    alt="Dr. Chintan Dave"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-700 group-hover:from-black/80"></div>

                  {/* Front Text - Fades out on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-700 group-hover:opacity-0">
                    <h3 className="text-2xl font-bold mb-2">Founder and CEO</h3>
                    <p className="text-xl font-semibold">Dr. Chintan Dave</p>
                  </div>

                  {/* Back Text - Fades in on hover */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-8 flex flex-col justify-center transition-all duration-700 opacity-0 group-hover:opacity-100">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-ara-navy mb-2">
                        Founder and CEO
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/drchintandave/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-ara-blue hover:text-ara-blue-dark transition-colors duration-300"
                      >
                        <span className="text-xl font-bold">
                          Dr. Chintan Dave
                        </span>
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-ara-gold mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Dual-board certified in Internal Medicine and Critical
                          Care Medicine, with expertise in medical research
                          (cited &gt;475 times), AI (previous startup and
                          research experience), and medical education with over
                          &gt;85,000 followers across social media.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-ara-gold mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed text-sm">
                          The values I live by are integrity, compassion, and
                          growth. I am committed to building Ara Health based on
                          what is best for the patient.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <a
                        href="https://www.linkedin.com/in/drchintandave/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-ara-blue text-white px-6 py-3 rounded-lg hover:bg-ara-blue-dark transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chief Technical Officer Card */}
          <motion.div
            className="relative h-[600px]"
            style={{ opacity: card2Opacity, y: card2Y, scale: card2Scale }}
          >
            <div className="relative w-full h-full group">
              <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg border border-ara-blue overflow-hidden">
                <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center transition-all duration-700 group-hover:opacity-0">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-400 transition-all duration-700 group-hover:scale-110">
                      <User className="h-16 w-16 text-gray-500" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Photo Coming Soon
                    </p>
                  </div>

                  {/* Front Text - Fades out on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-sm transition-all duration-700 group-hover:opacity-0">
                    <h3 className="text-2xl font-bold text-ara-navy mb-2">
                      Chief Technical Officer
                    </h3>
                    <p className="text-xl font-semibold text-ara-blue">
                      Undisclosed for now
                    </p>
                  </div>

                  {/* Back Text - Fades in on hover */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-8 flex flex-col justify-center transition-all duration-700 opacity-0 group-hover:opacity-100">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-ara-navy mb-2">
                        Chief Technical Officer
                      </h3>
                      <p className="text-xl font-semibold text-ara-blue">
                        Undisclosed for now
                      </p>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-ara-teal mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Ex-Scale AI senior engineer with extensive experience
                          in building scalable AI systems and enterprise-grade
                          healthcare solutions.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-ara-teal mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Leading the technical vision and architecture for Ara
                          Health&apos;s AI platform, ensuring scalability,
                          security, and performance.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-gray-500 text-sm">
                        LinkedIn profile will be available soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
