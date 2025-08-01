'use client'

import { useState } from 'react'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-ara-blue-light/10 to-ara-teal-light/10">
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

      {/* The Problem Section */}
      <section id="problem" className="py-20 bg-white">
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

          {/* Problem Cards Row */}
          <div className="relative flex flex-col md:flex-row gap-8 mb-12 w-full">
            <GlassyConnector />
            {/* Problem 1: Code Blue Dilemma */}
            <div className="flex-1 min-w-0">
              <div className="relative group bg-gradient-to-br from-white via-red-50 to-red-100/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-red-200">
                <div className="absolute inset-0 bg-red-100/30 group-hover:bg-red-200/40 rounded-2xl pointer-events-none transition-colors duration-300 z-0" />
                <div className="relative flex flex-col items-start gap-4 z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-300 shadow-md">
                    <Heart className="h-8 w-8 text-red-500 drop-shadow-md" />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-1 tracking-tight font-inter">Code Blue Dilemma</h3>
                  <p className="text-gray-700 leading-relaxed font-medium text-base">
                    When a code blue (cardiac arrest) is called, clinicians have seconds to decide whether to resuscitate or not. Today, a legally signed advanced directive often sits in a filing cabinet or lost in a patient-portal PDF.
                  </p>
                </div>
              </div>
            </div>
            {/* Problem 2: Lost Documents */}
            <div className="flex-1 min-w-0 relative flex flex-col items-center">
              <div className="relative group bg-gradient-to-br from-white via-orange-50 to-orange-100/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-orange-200">
                <div className="absolute inset-0 bg-orange-100/30 group-hover:bg-orange-200/40 rounded-2xl pointer-events-none transition-colors duration-300 z-0" />
                <div className="relative flex flex-col items-start gap-4 z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-300 shadow-md">
                    <FileText className="h-8 w-8 text-orange-500 drop-shadow-md" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-600 mb-1 tracking-tight font-inter">Lost Documents</h3>
                  <p className="text-gray-700 leading-relaxed font-medium text-base">
                    Do-Not-Resuscitate (DNR) forms often sit in filing cabinets, family inboxes, or lost in patient-portal PDFs that nobody can find at the bedside.
                  </p>
                </div>
              </div>
              <VerticalGlassyConnector />
            </div>
            {/* Problem 3: High Costs */}
            <div className="flex-1 min-w-0">
              <div className="relative group bg-gradient-to-br from-white via-purple-50 to-purple-100/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-purple-200">
                <div className="absolute inset-0 bg-purple-100/30 group-hover:bg-purple-200/40 rounded-2xl pointer-events-none transition-colors duration-300 z-0" />
                <div className="relative flex flex-col items-start gap-4 z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-300 shadow-md">
                    <Zap className="h-8 w-8 text-purple-500 drop-shadow-md" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700 mb-1 tracking-tight font-inter">High Costs</h3>
                  <p className="text-gray-700 leading-relaxed font-medium text-base">
                    Each unnecessary resuscitation costs the system $30-50,000 per patient. Patients die without dignity and without respect towards their autonomous prior medical decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Current Reality Box Full Width */}
          <div className="w-full mt-32">
            <Card className="relative bg-gradient-to-br from-white via-orange-50 to-red-50 border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 via-orange-100/20 to-orange-200/30 rounded-2xl pointer-events-none z-0" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-ara-navy text-2xl font-inter font-bold flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  Current Reality
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4 mt-4">
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-lg">Patient preferences lost in siloes</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-lg">Critical decisions made without context</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-lg">Families suffer emotional trauma</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-lg">System costs skyrocket</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-br from-ara-blue-light/5 to-ara-teal-light/10">
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
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ara-blue/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-ara-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-inter font-semibold text-ara-navy mb-2">
                    Patient & Family App
                  </h3>
                  <p className="text-gray-600">
                    Securely capture advance-care choices, medical decisions, chronic condition treatment plans, 
                    and update medical documents.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ara-teal/10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-ara-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-inter font-semibold text-ara-navy mb-2">
                    One-Click SMART-on-FHIR
                  </h3>
                  <p className="text-gray-600">
                    Embedded view for any clinician who opens the patient's chart—no matter which EHR the clinic 
                    or hospital uses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ara-gold/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-ara-gold" />
                </div>
                <div>
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
              <Card className="p-8 bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-ara-navy text-2xl">Ara Health Platform</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Meet the Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-teal-50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-ara-blue rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-ara-navy text-2xl">Dr. Chintan Dave</CardTitle>
                    <CardDescription className="text-lg">Founder and CEO</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Dual-board certified in Internal Medicine and Critical Care Medicine, with expertise in medical research 
                  (cited {'>'}475 times), AI (previous startup and research experience), and medical education with over 
                  {'>'}85,000 followers across social media.
                </p>
                <p className="text-gray-600">
                  <strong>Values:</strong> Integrity, compassion, and growth. Committed to building Ara Health based on 
                  what is best for the patient.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://linkedin.com/in/chintandave" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-slate-50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-ara-navy text-2xl">Chief Technical Officer</CardTitle>
                    <CardDescription className="text-lg">Undisclosed for now</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ex-Scale AI senior engineer with extensive experience in building scalable AI systems and 
                  enterprise-grade healthcare solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where We Are Today Section */}
      <section className="py-20 bg-gradient-to-br from-ara-teal-light/5 to-ara-blue-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-ara-navy mb-6">
              Where We Are Today
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-ara-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-ara-blue" />
                </div>
                <CardTitle className="text-ara-navy">Early Prototypes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Early prototypes and testing of the mobile app are in progress.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-ara-teal/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-ara-teal" />
                </div>
                <CardTitle className="text-ara-navy">Exclusive Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exclusive network of clinics, hospital systems, patients, and estate-planning attorneys to 
                  refine workflows and medicolegal requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-ara-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-ara-gold" />
                </div>
                <CardTitle className="text-ara-navy">Design Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Looking for design-partner hospitals, long-term-care organisations, and patient advocates 
                  who want to shape the product from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Ara Health Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-white">
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
