"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  UserCheck,
  Users,
  Mail,
  FileText,
  ArrowRight,
  Send,
} from "lucide-react";

export default function CTASection() {
  const containerRef = useRef(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    query: "",
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Section text animations
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  // Cards animation
  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.2, 0.4], [30, 0]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your email
    // For now, we'll just close the dialog
    setIsContactOpen(false);
    setContactForm({ name: "", email: "", query: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-32 relative min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-bold text-ara-navy mb-6 md:mb-12 leading-tight">
            Let&apos;s Build a New{" "}
            <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">
              Medical System Together
            </span>
          </h2>
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          style={{ opacity: cardsOpacity, y: cardsY }}
        >
          {/* Health System or Outpatient Clinic */}
          <Card className="p-6 md:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-ara-blue/5 to-ara-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Building2 className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <CardTitle className="text-lg md:text-xl text-ara-navy mb-4">
                Health System or Outpatient Clinic?
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col flex-grow">
              <div className="flex-grow min-h-[80px] md:min-h-[100px] flex items-start">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Reach out to learn how we can save your clinic valuable
                  resources and improve patient outcomes and satisfaction.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue shadow-md text-sm md:text-base h-10 md:h-12"
                  onClick={() => setIsContactOpen(true)}
                >
                  <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Clinician */}
          <Card className="p-6 md:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-ara-teal/5 to-ara-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <UserCheck className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <CardTitle className="text-lg md:text-xl text-ara-navy mb-4">
                Clinician?
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col flex-grow">
              <div className="flex-grow min-h-[80px] md:min-h-[100px] flex items-start">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center w-full">
                  Help us test the one-click workflow and improve patient care
                  delivery.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue shadow-md text-sm md:text-base h-10 md:h-12"
                  onClick={() => setIsContactOpen(true)}
                >
                  <UserCheck className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Join Beta Program
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Patient or Caregiver */}
          <Card className="p-6 md:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-ara-gold/5 to-ara-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <CardTitle className="text-lg md:text-xl text-ara-navy mb-4">
                Patient or Caregiver?
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col flex-grow">
              <div className="flex-grow min-h-[80px] md:min-h-[100px] flex items-start">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center w-full">
                  Join the beta and tell us what makes advance-care planning for
                  medical care easier.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue shadow-md text-sm md:text-base h-10 md:h-12"
                  onClick={() => setIsSurveyOpen(true)}
                >
                  <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Take Survey
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Contact Button */}
        <motion.div
          className="text-center"
          style={{ opacity: cardsOpacity, y: cardsY }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-ara-blue via-ara-blue-dark to-ara-blue hover:from-ara-blue-dark hover:via-ara-blue hover:to-ara-blue text-white px-12 md:px-16 py-6 md:py-8 text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 rounded-3xl border-4 border-white/20 hover:border-white/30"
            onClick={() => setIsContactOpen(true)}
          >
            <Mail className="mr-6 h-8 w-8 md:h-10 md:w-10" />
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Ara Health</DialogTitle>
            <DialogDescription>
              Get in touch to learn more about how we can help your
              organization.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="query"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <Textarea
                id="query"
                value={contactForm.query}
                onChange={(e) =>
                  setContactForm({ ...contactForm, query: e.target.value })
                }
                required
                placeholder="Tell us about your needs..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Survey Dialog */}
      <Dialog open={isSurveyOpen} onOpenChange={setIsSurveyOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Help Us Improve</DialogTitle>
            <DialogDescription>
              Share your experience with advance-care planning to help us build
              better tools.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              We&apos;re currently developing our survey. Please contact us
              directly to share your feedback about advance-care planning.
            </p>
            <Button
              onClick={() => {
                setIsSurveyOpen(false);
                setIsContactOpen(true);
              }}
              className="w-full"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us Instead
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
