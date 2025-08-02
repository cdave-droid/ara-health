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
  Zap
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-ara-navy via-ara-navy to-ara-navy/95 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-ara-blue/5 via-transparent to-ara-teal/5"></div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-inter font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-ara-blue-light to-white bg-clip-text text-transparent">
                  ARA HEALTH
                </span>
              </h3>
                             <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                 Transforming healthcare through patient-first AI solutions. We're building a new medical system where patient values are at the center of every decision.
               </p>
               <div className="mt-4 p-3 bg-ara-teal/10 border border-ara-teal/20 rounded-lg">
                 <p className="text-ara-teal text-xs md:text-sm font-medium">
                   In active development—help us build a better last mile between patients' wishes and bedside care.
                 </p>
               </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-ara-teal" />
                <span className="text-gray-300 text-sm">contact@arahealth.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="h-4 w-4 text-ara-teal" />
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </div>
            </div>

                         {/* Social Links */}
             <div className="flex space-x-4">
               <Button
                 variant="ghost"
                 size="sm"
                 className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                 onClick={() => window.open('https://linkedin.com/company/ara-health', '_blank')}
               >
                 <Linkedin className="h-4 w-4" />
               </Button>
               <Button
                 variant="ghost"
                 size="sm"
                 className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                 onClick={() => window.open('https://twitter.com/arahealth', '_blank')}
               >
                 <Twitter className="h-4 w-4" />
               </Button>
               <Button
                 variant="ghost"
                 size="sm"
                 className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                 onClick={() => window.open('https://github.com/ara-health', '_blank')}
               >
                 <Github className="h-4 w-4" />
               </Button>
             </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
                         <h4 className="text-lg font-inter font-semibold mb-4 text-white">Solutions</h4>
             <ul className="space-y-3">
               <li>
                 <button 
                   onClick={() => scrollToSection('solution')}
                   className="text-gray-300 hover:text-white transition-colors text-sm flex items-center w-full text-left"
                 >
                   <Shield className="h-3 w-3 mr-2 text-ara-teal" />
                   Patient-First AI
                 </button>
               </li>
               <li>
                 <button 
                   onClick={() => scrollToSection('solution')}
                   className="text-gray-300 hover:text-white transition-colors text-sm flex items-center w-full text-left"
                 >
                   <Zap className="h-3 w-3 mr-2 text-ara-teal" />
                   One-Click Workflow
                 </button>
               </li>
               <li>
                 <button 
                   onClick={() => scrollToSection('solution')}
                   className="text-gray-300 hover:text-white transition-colors text-sm flex items-center w-full text-left"
                 >
                   <Users className="h-3 w-3 mr-2 text-ara-teal" />
                   Advance Care Planning
                 </button>
               </li>
               <li>
                 <button 
                   onClick={() => scrollToSection('solution')}
                   className="text-gray-300 hover:text-white transition-colors text-sm flex items-center w-full text-left"
                 >
                   <Building2 className="h-3 w-3 mr-2 text-ara-teal" />
                   Healthcare Systems
                 </button>
               </li>
             </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
                         <h4 className="text-lg font-inter font-semibold mb-4 text-white">Company</h4>
             <ul className="space-y-3">
               <li>
                 <button 
                   onClick={() => scrollToSection('mission')}
                   className="text-gray-300 hover:text-white transition-colors text-sm w-full text-left"
                 >
                   About Us
                 </button>
               </li>
               <li>
                 <button 
                   onClick={() => scrollToSection('mission')}
                   className="text-gray-300 hover:text-white transition-colors text-sm w-full text-left"
                 >
                   Our Mission
                 </button>
               </li>
               <li>
                 <button 
                   onClick={() => scrollToSection('team')}
                   className="text-gray-300 hover:text-white transition-colors text-sm w-full text-left"
                 >
                   Team
                 </button>
               </li>
               <li>
                 <a href="mailto:careers@arahealth.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                   Careers
                 </a>
               </li>
               <li>
                 <button 
                   onClick={() => scrollToSection('contact')}
                   className="text-gray-300 hover:text-white transition-colors text-sm w-full text-left"
                 >
                   Contact
                 </button>
               </li>
             </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© 2024 Ara Health. All rights reserved.</span>
            <Heart className="h-3 w-3 text-ara-teal" />
          </div>
          
                     <div className="flex items-center space-x-6">
             <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
               Privacy Policy
             </a>
             <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
               Terms of Service
             </a>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 