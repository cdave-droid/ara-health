"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  Heart,
  ArrowUp,
  Building2,
  Users,
  Shield,
  Zap,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ara-navy text-white pt-16 md:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-tt-firs-neue font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">
              ARA HEALTH
            </span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-white max-w-4xl mx-auto leading-relaxed mb-12">
            In active development—help us build a better last mile between
            patients&apos; wishes and bedside care.
          </p>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Ara Health. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
