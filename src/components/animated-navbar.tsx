"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WaitlistDialog } from "./waitlist-dialog";

interface NavLink {
  href: string;
  label: string;
  sectionId?: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home", sectionId: "home" },
  { href: "#problem", label: "Problem", sectionId: "problem" },
  { href: "#solution", label: "Solution", sectionId: "solution" },
  { href: "#team", label: "Team", sectionId: "team" },
  { href: "#mission", label: "Mission", sectionId: "mission" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

export function AnimatedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "px-6 py-4" : "px-0 py-0"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? "mx-auto max-w-2xl bg-[#0A1F3D] rounded-2xl shadow-2xl border border-white/10"
            : "w-full bg-[#0A1F3D]"
        }`}
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        }}
      >
        <div
          className={`flex items-center justify-between ${
            isScrolled ? "px-6 py-3" : "px-8 py-4"
          }`}
        >
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={scrollToTop}
          >
            <Image
              src="/logo.png"
              alt="ARA Health Logo"
              width={isScrolled ? 32 : 40}
              height={isScrolled ? 32 : 40}
              className="rounded-lg"
            />
            <motion.span
              className="font-inter font-semibold text-white whitespace-nowrap"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              ARA HEALTH
            </motion.span>
          </motion.div>

          {/* Desktop Navigation Links - Only visible when not scrolled */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                className="hidden md:flex items-center space-x-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {navLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    onClick={() =>
                      scrollToSection(
                        link.sectionId || link.href.replace("#", "")
                      )
                    }
                    className="text-white/90 hover:text-white font-inter font-medium transition-colors duration-200 relative group whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/60 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden md:block"
            >
              <motion.button
                className="px-3 py-1.5 md:px-4 md:py-2 font-inter font-semibold rounded-xl transition-all duration-200 text-xs md:text-sm whitespace-nowrap bg-white text-[#0A1F3D] hover:bg-white/90 shadow-lg hover:shadow-xl"
                layout
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWaitlistOpen(true)}
              >
                JOIN WAITLIST
              </motion.button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-[#0A1F3D] border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    onClick={() =>
                      scrollToSection(
                        link.sectionId || link.href.replace("#", "")
                      )
                    }
                    className="block text-white/90 hover:text-white font-inter font-medium transition-colors duration-200 py-2 border-b border-white/10 last:border-b-0 w-full text-left"
                    whileHover={{ x: 10 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => {
                    setIsWaitlistOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-white/90 hover:text-white font-inter font-medium transition-colors duration-200 py-2 border-b border-white/10 last:border-b-0 w-full text-left"
                  whileHover={{ x: 10 }}
                >
                  Join Waitlist
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Waitlist Dialog */}
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </motion.nav>
  );
}
