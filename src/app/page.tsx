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
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContactForm } from "@/components/contact-form";
import { SurveyForm } from "@/components/survey-form";
import { AraLogo } from "@/components/ara-logo";
import Orb from "@/components/orb";
import GlassyConnector from "@/components/GlassyConnector";
import VerticalGlassyConnector from "@/components/VerticalGlassyConnector";
import TiltedCard from "@/components/TiltedCard";
import { HeroSection } from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import TeamSection from "@/components/team-section";

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
      <HeroSection onVideoOpen={() => setIsVideoOpen(true)} />

      {/* The Problem Section  */}
      <ProblemSection />

      {/* The Solution Section  */}
      <SolutionSection />

      {/* The Team Section  */}
      <TeamSection />

      {/* Where We Are Today Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Where We Are Today
            </h2>
          </div>

          {/* Interactive Timeline Component */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ara-blue via-ara-teal to-ara-gold rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 - Early Prototypes */}
              <div className="relative group">
                <div className="flex items-center justify-center md:justify-start md:pr-8">
                  <div className="relative z-10">
                    {/* Timeline Dot */}
                    <div className="w-8 h-8 bg-ara-blue rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 relative">
                      <div className="absolute inset-0 bg-ara-blue rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-8 md:ml-12 flex-1">
                    <Card className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ara-blue to-ara-blue-dark rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <Smartphone className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-ara-navy mb-2 group-hover:text-ara-blue transition-colors duration-300">
                              Early Prototypes
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              Early prototypes and testing of the mobile app are
                              in progress. We&apos;re iterating on user
                              experience and core functionality to ensure
                              seamless integration with existing healthcare
                              workflows.
                            </p>
                            <div className="mt-4 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-ara-blue rounded-full animate-pulse"></div>
                              <span className="text-sm text-ara-blue font-medium">
                                In Development
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Item 2 - Exclusive Network */}
              <div className="relative group">
                <div className="flex items-center justify-center md:justify-end md:pl-8">
                  <div className="relative z-10 order-2 md:order-1">
                    {/* Timeline Dot */}
                    <div className="w-8 h-8 bg-ara-teal rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 relative">
                      <div className="absolute inset-0 bg-ara-teal rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="mr-8 md:mr-12 flex-1 order-1 md:order-2">
                    <Card className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ara-teal to-ara-teal-dark rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-ara-navy mb-2 group-hover:text-ara-teal transition-colors duration-300">
                              Exclusive Network
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              Building an exclusive network of clinics, hospital
                              systems, patients, and estate-planning attorneys
                              to refine workflows and medicolegal requirements
                              for seamless integration.
                            </p>
                            <div className="mt-4 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-ara-teal rounded-full animate-pulse"></div>
                              <span className="text-sm text-ara-teal font-medium">
                                Active Partnerships
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Item 3 - Design Partners */}
              <div className="relative group">
                <div className="flex items-center justify-center md:justify-start md:pr-8">
                  <div className="relative z-10">
                    {/* Timeline Dot */}
                    <div className="w-8 h-8 bg-ara-gold rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 relative">
                      <div className="absolute inset-0 bg-ara-gold rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-8 md:ml-12 flex-1">
                    <Card className="group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ara-gold to-ara-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <Heart className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-ara-navy mb-2 group-hover:text-ara-gold transition-colors duration-300">
                              Design Partners
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              Looking for design-partner hospitals,
                              long-term-care organisations, and patient
                              advocates who want to shape the product from day
                              one and help us build the future of healthcare.
                            </p>
                            <div className="mt-4 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-ara-gold rounded-full animate-pulse"></div>
                              <span className="text-sm text-ara-gold font-medium">
                                Seeking Partners
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Progress Indicator */}
            <div className="absolute top-0 right-0 md:right-8 transform translate-y-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-ara-navy mb-1">
                    25%
                  </div>
                  <div className="text-sm text-gray-600">Complete</div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-ara-blue via-ara-teal to-ara-gold rounded-full animate-pulse"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-ara-blue/10 to-ara-teal/10 rounded-full px-6 py-3 border border-ara-blue/20">
              <div className="w-2 h-2 bg-ara-blue rounded-full animate-pulse"></div>
              <span className="text-ara-navy font-medium">
                Ready to join our journey?
              </span>
            </div>
            <div className="mt-4">
              <Button
                className="bg-gradient-to-r from-ara-blue to-ara-teal hover:from-ara-blue-dark hover:to-ara-teal-dark text-white shadow-lg"
                onClick={() => setIsContactOpen(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ara Health Section */}
      {/* Why Ara Health Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Why Ara Health?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ara-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-ara-blue" />
                </div>
                <CardTitle className="text-ara-navy">
                  Built on Open Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We&apos;re aligning with HL7 and SMART-on-FHIR so hospitals
                  don&apos;t need custom interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ara-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-ara-teal" />
                </div>
                <CardTitle className="text-ara-navy">Patient-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Always. Patients and families keep a clear, shareable record
                  of critical medical decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ara-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-ara-gold" />
                </div>
                <CardTitle className="text-ara-navy">
                  Clinician-Friendly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Zero-click banner in the chart—information appears where and
                  when care teams already look.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-ara-navy">
                  Enterprise Grade Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  HIPAA compliant, so your medical information is always secure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-ara-navy via-ara-blue-dark to-ara-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-ara-white/90 leading-relaxed">
            To reduce patient suffering as much as possible and build a more
            effective healthcare system that prioritizes patient well-being.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Let&apos;s Build a New Medical System Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We&apos;re creating a healthcare ecosystem where patient values
              are at the center of every decision. Join us in transforming how
              care is delivered, experienced, and improved.
            </p>
          </div>

          {/* Enhanced Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Health System Card */}
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-ara-blue/5 to-ara-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-ara-navy">
                  Health System or Outpatient Clinic?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reach out to learn how we can save your clinic valuable
                  resources and improve patient outcomes and satisfaction.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue shadow-md"
                  onClick={() => setIsContactOpen(true)}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            {/* Clinician Card */}
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-ara-teal/5 to-ara-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-ara-navy mb-4">
                  Clinician?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help us test the one-click workflow and improve patient care
                  delivery.
                </p>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-ara-teal text-ara-teal hover:bg-ara-teal hover:text-white font-semibold py-3 h-12 text-base transition-all duration-300"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Join Beta Program
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Patient Card */}
            <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-center bg-white/80 backdrop-blur-sm relative overflow-hidden group h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-ara-gold/5 to-ara-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-ara-navy">
                  Patient or Caregiver?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join the beta and tell us what makes advance-care planning for
                  medical care easier.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsSurveyOpen(true)}
                >
                  Take Survey
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue text-white px-8 py-4 text-lg shadow-lg"
              onClick={() => setIsContactOpen(true)}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ara-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AraLogo width={48} height={48} />
              <span className="text-2xl font-inter font-semibold">
                Ara Health
              </span>
            </div>
            <p className="text-ara-white/90 mb-4">
              In active development—help us build a better last mile between
              patients&apos; wishes and bedside care.
            </p>
            <p className="text-ara-white/80">
              Email:{" "}
              <a
                href="mailto:chintan@arahealth.ai"
                className="text-ara-blue hover:underline"
              >
                chintan@arahealth.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
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
      </Dialog>

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
          <ContactForm />
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
          <SurveyForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
