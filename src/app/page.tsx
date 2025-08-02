"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HeroSection } from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import TeamSection from "@/components/team-section";
import WhereWeAreSection from "@/components/where-we-are-section";
import WhyAraHealthSection from "@/components/why-ara-health-section";
import MissionSection from "@/components/mission-section";
import CTASection from "@/components/cta-section";

import {
  Heart,
  Shield,
  Users,
  Zap,
  FileText,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Play,
  Mail,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { AnimatedNavbar } from "@/components/animated-navbar";
import Footer from "@/components/footer";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  // Card Stack Animation Effect - FIXED VERSION
  useEffect(() => {
    const cards = [
      document.querySelector('[data-card="1"]'),
      document.querySelector('[data-card="2"]'),
      document.querySelector('[data-card="3"]'),
      document.querySelector('[data-card="4"]'),
    ];

    // Set initial state for all cards
    cards.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          scale: 0.9,
          y: 30,
        });
      }
    });

    const observerOptions = {
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      rootMargin: "-15% 0px -15% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex =
          parseInt(entry.target.getAttribute("data-card") || "1") - 1;
        const progress = entry.intersectionRatio;

        if (progress > 0.4) {
          // Show current card - NO Y MOVEMENT, just opacity and scale
          gsap.to(entry.target, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.3,
          });

          // Stack previous cards - FIXED POSITIONS
          for (let i = 0; i < cardIndex; i++) {
            const prevCard = cards[i];
            if (prevCard) {
              gsap.to(prevCard, {
                scale: 0.92 - i * 0.02,
                opacity: 0.85 - i * 0.15,
                duration: 1.2,
                ease: "power2.out",
                delay: 0.2 * (i + 1),
              });
            }
          }
        } else if (progress < 0.2) {
          // Reset card when out of view
          gsap.to(entry.target, {
            opacity: 0,
            scale: 0.9,
            y: 30,
            duration: 0.6,
            ease: "power2.in",
          });
        }
      });
    }, observerOptions);

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-ara-blue-light/10 to-ara-teal-light/10 -z-10"></div>

      {/* Navigation */}
      <AnimatedNavbar />
      {/* Hero Section */}
      <HeroSection />

      {/* The Problem Section  */}
      <ProblemSection />

      {/* The Solution Section  */}
      <div id="solution">
        <SolutionSection />
      </div>

      {/* The Team Section  */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Where We Are Today Section  */}
      <WhereWeAreSection />

      {/* Why Ara Health Section  */}
      <WhyAraHealthSection />

            {/* Mission Section */}
      <div id="mission">
        <MissionSection />
      </div>

      {/* CTA Section */}
      <div id="contact">
        <CTASection />
      </div>

      {/* Footer */}
      <Footer />
      {/*
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-inter font-bold text-ara-navy mb-4 md:mb-6">
              Let&apos;s Build a New Medical System Together
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              We&apos;re creating a healthcare ecosystem where patient values
              are at the center of every decision. Join us in transforming how
              care is delivered, experienced, and improved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="p-6 md:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-ara-blue/5 to-ara-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl text-ara-navy">
                  Health System or Outpatient Clinic?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Reach out to learn how we can save your clinic valuable
                  resources and improve patient outcomes and satisfaction.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue shadow-md text-sm md:text-base"
                  onClick={() => setIsContactOpen(true)}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-ara-teal/5 to-ara-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Heart className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold text-ara-navy mb-2 md:mb-4">
                  Clinician?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Help us test the one-click workflow and improve patient care
                  delivery.
                </p>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-ara-teal text-ara-teal hover:bg-ara-teal hover:text-white font-semibold py-2 md:py-3 h-10 md:h-12 text-sm md:text-base transition-all duration-300"
                  >
                    <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Join Beta Program
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-ara-gold/5 to-ara-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FileText className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl text-ara-navy">
                  Patient or Caregiver?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Join the beta and tell us what makes advance-care planning for
                  medical care easier.
                </p>
                <Button
                  variant="outline"
                  className="w-full text-sm md:text-base"
                  onClick={() => setIsSurveyOpen(true)}
                >
                  Take Survey
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg"
              onClick={() => setIsContactOpen(true)}
            >
              <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      {/* <footer className="bg-ara-navy text-white pt-8 bottom-0 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-inter font-bold tracking-widest relative mb-0 pb-0">
              <span className="absolute inset-0 bg-gradient-to-br text-white bg-clip-text text-transparent">
                ARA HEALTH
              </span>
              <span className="relative text-white/5">ARA HEALTH</span>
            </h1>
          </div>
        </div>
      </footer> */}

      {/* Video Dialog */}
      {/* <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Founder Video</DialogTitle>
            <DialogDescription>
              A short clip explaining the vision and inviting feedback
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                Video placeholder - upload your 60s founder video here
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog> */}

      {/* Contact Dialog */}
      {/* <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Ara Health</DialogTitle>
            <DialogDescription>
              Get in touch to learn more about how we can help your
              organization.
            </DialogDescription>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog> */}

      {/* Survey Dialog */}
      {/* <Dialog open={isSurveyOpen} onOpenChange={setIsSurveyOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Help Us Improve</DialogTitle>
            <DialogDescription>
              Share your experience with advance-care planning to help us build
              better tools.
            </DialogDescription>
          </DialogHeader>
          <SurveyForm />
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
