'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ContactForm } from '@/components/contact-form'
import { SurveyForm } from '@/components/survey-form'
import { AraLogo } from '@/components/ara-logo'
import { Navbar } from '@/components/navbar'
import Orb from '@/components/orb'
import GlassyConnector from "@/components/GlassyConnector";
import VerticalGlassyConnector from "@/components/VerticalGlassyConnector";
import TiltedCard from '@/components/TiltedCard'

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
  ChevronDown
} from 'lucide-react'

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isSurveyOpen, setIsSurveyOpen] = useState(false)

  // Card Stack Animation Effect
  useEffect(() => {
    const cards = [
      document.querySelector('[data-card="1"]'),
      document.querySelector('[data-card="2"]'),
      document.querySelector('[data-card="3"]'),
      document.querySelector('[data-card="4"]'),
    ];

    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = parseInt(entry.target.getAttribute('data-card') || '1') - 1;
        const progress = entry.intersectionRatio;
        
        if (progress > 0.1) {
          // Show current card
          gsap.to(entry.target, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });

          // Stack previous cards
          for (let i = 0; i < cardIndex; i++) {
            const prevCard = cards[i];
            if (prevCard) {
              gsap.to(prevCard, {
                y: -20 - (i * 10),
                scale: 0.95 - (i * 0.05),
                opacity: 0.8 - (i * 0.2),
                duration: 0.6,
                ease: "power2.out"
              });
            }
          }
        } else {
          // Hide cards that are out of view
          gsap.to(entry.target, {
            opacity: 0,
            scale: 0.95,
            y: 20,
            duration: 0.4,
            ease: "power2.in"
          });
        }
      });
    }, observerOptions);

    cards.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-ara-blue-light/10 to-ara-teal-light/10 -z-10"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden h-screen flex items-center">
        {/* Orb Background */}
        <div className="absolute inset-0 w-full h-screen select-none pointer-events-none">
          <Orb
            hoverIntensity={1}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
        
        {/* Hover Detection Layer - Only in empty areas */}
        <div className="absolute inset-0 w-full h-screen" id="orb-hover-layer" style={{ pointerEvents: 'auto' }}></div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="text-center">
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-ara-blue/15 text-ara-blue text-sm font-medium mb-8 border border-ara-blue/20 backdrop-blur-sm">
              <AraLogo width={20} height={20} className="mr-2" />
              Patient-First Healthcare AI
            </div> */}
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-ara-navy mb-6 leading-tight pointer-events-auto">
              Solving Values Misalignment in{' '}
              <span className="bg-gradient-to-r from-ara-blue via-ara-teal to-ara-blue-light bg-clip-text text-transparent">
                Healthcare
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed pointer-events-auto">
              We're building the only patient-first AI platform dedicated towards improving patient experience 
              and outcomes by ensuring alignment with patient values across the healthcare ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
              <button className="relative flex items-center px-8 py-4 overflow-hidden font-medium transition-all bg-ara-blue rounded-lg group text-lg shadow-lg">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-ara-blue-dark rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-ara-blue-dark rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-ara-blue-dark rounded-lg group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center">
                  Join the early-access list
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </button>
              
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="relative flex items-center px-8 py-4 overflow-hidden font-medium transition-all bg-transparent border-2 border-ara-blue/30 rounded-lg group text-lg backdrop-blur-sm"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-ara-blue/20 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-ara-blue"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-ara-blue/20 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-ara-blue"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-ara-blue/10 rounded-lg group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-ara-blue transition-colors duration-200 ease-in-out group-hover:text-ara-blue flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Founder Video
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Floating elements with backdrop blur */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-ara-blue/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-ara-teal/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-ara-blue-light/15 rounded-full blur-lg"></div>
      </section>

      {/* The Problem Section - Card Stack Animation */}
      <section id="problem" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              The Problem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Patient values and medical preferences are not captured effectively and often lost amongst the 
              complexities and various siloes within the healthcare system.
            </p>
          </div>

          {/* Card Stack Container */}
          <div className="relative h-[800px] flex items-center justify-center">
            {/* Problem Card 1 - The Problem */}
            <div data-card="1" className="absolute w-full max-w-2xl transform transition-all duration-1000 ease-out">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 animate-pulse">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-ara-blue to-ara-blue-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ara-navy mb-4">The Problem</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Patient values and medical preferences are not captured effectively and often lost amongst the 
                    complexities and various siloes within the healthcare system.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Card 2 - Code Blue Dilemma */}
            <div data-card="2" className="absolute w-full max-w-2xl transform transition-all duration-1000 ease-out opacity-0 scale-95 translate-y-20">
              <div className="bg-gradient-to-br from-white via-red-50 to-red-100/60 rounded-3xl p-8 shadow-2xl border border-red-200 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-100/30 rounded-full blur-xl animate-pulse"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                    <Heart className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">Code Blue Dilemma</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When a code blue (cardiac arrest) is called, clinicians have seconds to decide whether to resuscitate or not. 
                    Today, a legally signed advanced directive often sits in a filing cabinet or lost in a patient-portal PDF.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Card 3 - Lost Documents */}
            <div data-card="3" className="absolute w-full max-w-2xl transform transition-all duration-1000 ease-out opacity-0 scale-95 translate-y-20">
              <div className="bg-gradient-to-br from-white via-orange-50 to-orange-100/60 rounded-3xl p-8 shadow-2xl border border-orange-200 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 bg-orange-100/30 rounded-full blur-lg animate-bounce"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FileText className="h-8 w-8 text-white animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Lost Documents</h3>
                  <p className="text-gray-700 leading-relaxed">
                    DNR forms often sit in filing cabinets, family inboxes, or lost in patient-portal PDFs that nobody can find at the bedside.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Card 4 - High Costs */}
            <div data-card="4" className="absolute w-full max-w-2xl transform transition-all duration-1000 ease-out opacity-0 scale-95 translate-y-20">
              <div className="bg-gradient-to-br from-white via-purple-50 to-purple-100/60 rounded-3xl p-8 shadow-2xl border border-purple-200 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-100/30 rounded-full blur-xl animate-pulse"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Zap className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">High Costs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Each unnecessary resuscitation costs the system $30-50,000 per patient. Patients die without dignity 
                    and without respect towards their autonomous prior medical decisions.
                  </p>
                  <div className="mt-4 text-sm text-purple-600 font-semibold animate-pulse">
                    💰 $30,000 - $50,000 per patient
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Reality Box - Appears after all cards */}
          <div className="w-full mt-32 transform hover:scale-[1.02] transition-all duration-500">
            <Card className="relative bg-gradient-to-br from-white via-orange-50 to-red-50 border-0 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden p-12 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 via-orange-100/20 to-orange-200/30 rounded-3xl pointer-events-none z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-ara-navy text-3xl font-inter font-bold flex items-center gap-4 group-hover:text-red-800 transition-colors duration-300">
                  <div className="w-5 h-5 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
                  Current Reality
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6 mt-6">
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">Patient preferences lost in siloes</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">Critical decisions made without context</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">Families suffer emotional trauma</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
                  <span className="text-gray-800 font-semibold text-xl">System costs skyrocket</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section id="solution" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Ara Health provides a comprehensive AI platform that automates and aligns complex and scattered patient data systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/60 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-blue-300/40 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex-shrink-0 w-12 h-12 bg-ara-blue/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-ara-blue/20 relative z-10">
                  <Smartphone className="h-6 w-6 text-ara-blue" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-inter font-semibold text-ara-navy mb-2">
                    Patient & Family App
                  </h3>
                  <p className="text-gray-600">
                    Securely capture advance-care choices, medical decisions, chronic condition treatment plans, 
                    and update medical documents.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-teal-100/60 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-teal-300/40 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex-shrink-0 w-12 h-12 bg-ara-teal/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-ara-teal/20 relative z-10">
                  <Zap className="h-6 w-6 text-ara-teal" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-inter font-semibold text-ara-navy mb-2">
                    One-Click SMART-on-FHIR
                  </h3>
                  <p className="text-gray-600">
                    Embedded view for any clinician who opens the patient's chart—no matter which EHR the clinic 
                    or hospital uses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50/80 hover:to-amber-100/60 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-amber-300/40 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex-shrink-0 w-12 h-12 bg-ara-gold/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-ara-gold/20 relative z-10">
                  <Shield className="h-6 w-6 text-ara-gold" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-inter font-semibold text-ara-navy mb-2">
                    No More Guessing
                  </h3>
                  <p className="text-gray-600">
                    No more calling outpatient clinics for information, digging through scanned PDFs, 
                    or guessing at patient's wishes.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-white border-0 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-blue-50/60 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-ara-navy text-2xl">Ara Health Platform</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Patient-specific AI models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Integrated patient data systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Dual-sided app access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Real-time value alignment monitoring</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Meet the Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <a 
                href="https://linkedin.com/in/chintandave" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02] duration-300"
              >
                <div className="h-[650px] w-full">
                  <TiltedCard
                    imageSrc="/dr.jpg"
                    altText="Dr. Chintan Dave - Founder and CEO"
                    captionText="Dr. Chintan Dave"
                    containerHeight="650px"
                    containerWidth="100%"
                    imageHeight="650px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>
              </a>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-ara-navy mb-2">Dr. Chintan Dave</h3>
                <p className="text-lg text-gray-600">Founder and CEO</p>
                <p className="text-sm text-gray-500 mt-2">Click the photo to connect on LinkedIn</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-[650px] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Chief Technical Officer</h3>
                  <p className="text-gray-500">Photo coming soon</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-ara-navy mb-2">Chief Technical Officer</h3>
                <p className="text-lg text-gray-600">Undisclosed for now</p>
                <p className="text-gray-600 mt-2">
                  Ex-Scale AI senior engineer with extensive experience in building scalable AI systems and 
                  enterprise-grade healthcare solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                              Early prototypes and testing of the mobile app are in progress. We're iterating on user experience 
                              and core functionality to ensure seamless integration with existing healthcare workflows.
                            </p>
                            <div className="mt-4 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-ara-blue rounded-full animate-pulse"></div>
                              <span className="text-sm text-ara-blue font-medium">In Development</span>
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
                              Building an exclusive network of clinics, hospital systems, patients, and estate-planning attorneys 
                              to refine workflows and medicolegal requirements for seamless integration.
                            </p>
                            <div className="mt-4 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-ara-teal rounded-full animate-pulse"></div>
                              <span className="text-sm text-ara-teal font-medium">Active Partnerships</span>
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
                              Looking for design-partner hospitals, long-term-care organisations, and patient advocates 
                              who want to shape the product from day one and help us build the future of healthcare.
                            </p>
                            <div className="mt-4 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-ara-gold rounded-full animate-pulse"></div>
                              <span className="text-sm text-ara-gold font-medium">Seeking Partners</span>
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
                  <div className="text-2xl font-bold text-ara-navy mb-1">25%</div>
                  <div className="text-sm text-gray-600">Complete</div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-ara-blue via-ara-teal to-ara-gold rounded-full animate-pulse" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-ara-blue/10 to-ara-teal/10 rounded-full px-6 py-3 border border-ara-blue/20">
              <div className="w-2 h-2 bg-ara-blue rounded-full animate-pulse"></div>
              <span className="text-ara-navy font-medium">Ready to join our journey?</span>
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
                <CardTitle className="text-ara-navy">Built on Open Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're aligning with HL7 and SMART-on-FHIR so hospitals don't need custom interfaces.
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
                  Always. Patients and families keep a clear, shareable record of critical medical decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ara-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-ara-gold" />
                </div>
                <CardTitle className="text-ara-navy">Clinician-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Zero-click banner in the chart—information appears where and when care teams already look.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-ara-navy">Enterprise Grade Security</CardTitle>
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
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            To reduce patient suffering as much as possible and build a more effective healthcare 
            system that prioritizes patient well-being.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Let's Build a New Medical System Together
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ara-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-ara-blue" />
                </div>
                <CardTitle className="text-ara-navy">Health System or Outpatient Clinic?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reach out to learn how we can save your clinic valuable resources and improve patient outcomes and satisfaction.
                </p>
                <Button className="w-full bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue shadow-md" onClick={() => setIsContactOpen(true)}>
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ara-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-ara-teal" />
                </div>
                <CardTitle className="text-ara-navy">Clinician?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help us test the one-click workflow and improve patient care delivery.
                </p>
                <Button variant="outline" className="w-full">
                  Join Beta
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-ara-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-ara-gold" />
                </div>
                <CardTitle className="text-ara-navy">Patient or Caregiver?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join the beta and tell us what makes advance-care planning for medical care easier.
                </p>
                <Button variant="outline" className="w-full" onClick={() => setIsSurveyOpen(true)}>
                  Take Survey
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-ara-blue to-ara-blue-dark hover:from-ara-blue-dark hover:to-ara-blue text-white px-8 py-4 text-lg shadow-lg" onClick={() => setIsContactOpen(true)}>
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
              <span className="text-2xl font-inter font-semibold">Ara Health</span>
            </div>
            <p className="text-blue-100 mb-4">
              In active development—help us build a better last mile between patients' wishes and bedside care.
            </p>
            <p className="text-blue-200">
              Email: <a href="mailto:chintan@arahealth.ai" className="text-ara-blue hover:underline">chintan@arahealth.ai</a>
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
              <p className="text-gray-500">Video placeholder - upload your 60s founder video here</p>
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
              Get in touch to learn more about how we can help your organization.
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
              Share your experience with advance-care planning to help us build better tools.
            </DialogDescription>
          </DialogHeader>
          <SurveyForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
