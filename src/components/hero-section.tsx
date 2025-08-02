"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Orb from "./orb";

interface HeroSectionProps {
  // Removed onVideoOpen prop as it's no longer needed
}

export function HeroSection({}: HeroSectionProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for scroll animations
  const orbOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -100]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden h-screen flex items-center"
    >
      {/* Orb Background */}
      <motion.div
        className="absolute inset-0 w-full h-screen select-none pointer-events-none"
        style={{ opacity: orbOpacity }}
      >
        <Orb
          hoverIntensity={1}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </motion.div>

      {/* Hover Detection Layer - Only in empty areas */}
      <div
        className="absolute inset-0 w-full h-screen"
        id="orb-hover-layer"
        style={{ pointerEvents: "auto" }}
      ></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none"
        style={{
          y: textY,
          opacity: textOpacity,
        }}
      >
        <div className="text-center">
          {/* Company Logo */}
          <motion.div
            className="mb-6 md:mb-8 pointer-events-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/logo.png"
              alt="Ara Health Logo"
              width={96}
              height={96}
              className="h-12 sm:h-16 md:h-20 lg:h-24 mx-auto rounded-full object-cover"
            />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-ara-navy mb-4 md:mb-6 leading-tight pointer-events-auto px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Solving Values Misalignment in{" "}
            <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">
              Healthcare
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl md:max-w-4xl mx-auto mb-6 md:mb-10 leading-relaxed pointer-events-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We&apos;re building the only patient-first AI platform dedicated
            towards improving patient experience and outcomes by ensuring
            alignment with patient values across the healthcare ecosystem.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pointer-events-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <button className="relative flex items-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium transition-all bg-ara-blue rounded-lg group text-base sm:text-lg shadow-lg w-full sm:w-auto">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-ara-blue-dark rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-ara-blue-dark rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-ara-blue-dark rounded-lg group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center justify-center sm:justify-start">
                Join the early-access list
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </button>

            <button className="relative flex items-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium transition-all bg-white text-ara-navy rounded-lg group text-base sm:text-lg shadow-lg w-full sm:w-auto hover:bg-gray-50">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-200 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-200 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-100 rounded-lg group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-ara-navy transition-colors duration-200 ease-in-out group-hover:text-ara-navy flex items-center justify-center sm:justify-start">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Floating elements with backdrop blur - Fixed Background */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-ara-blue/10 rounded-full blur-xl"></div>
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-ara-teal/10 rounded-full blur-xl"></div>
      <div className="fixed top-40 right-20 w-16 h-16 bg-ara-blue-light/15 rounded-full blur-lg"></div>
    </section>
  );
}
