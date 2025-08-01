"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, FileText, Zap, AlertTriangle, ArrowDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

interface ProblemCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  delay: number
  index: number
}

const ProblemCard = ({ title, description, icon, color, delay, index }: ProblemCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
        {/* Glassy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
        
        {/* Animated border glow */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
        
        <CardHeader className="pb-3 relative z-10">
          <div className="flex items-center gap-3">
            <motion.div 
              className={`p-3 rounded-xl ${color} bg-opacity-10 backdrop-blur-sm`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`text-2xl ${color.replace('bg-', 'text-')}`}>
                {icon}
              </div>
            </motion.div>
            <CardTitle className="text-lg font-semibold text-gray-800">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const GlassyConnector = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div 
    className={`relative ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {/* Main glassy tube */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-sm" />
    <div className="relative h-full w-full bg-gradient-to-r from-white/60 via-white/90 to-white/60 rounded-full backdrop-blur-md border border-white/40 shadow-inner" />
    
    {/* Animated glow effect */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-md"
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Subtle pulse effect */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full"
      animate={{ 
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
)

const CurrentRealityBox = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative"
    >
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-red-50/90 to-red-100/70 backdrop-blur-md shadow-2xl">
        {/* Glassy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        
        {/* Animated border glow */}
        <motion.div 
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-red-600/20 blur-sm"
          animate={{ 
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-3 rounded-xl bg-red-500/15 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.2 }}
            >
              <AlertTriangle className="text-2xl text-red-600" />
            </motion.div>
            <CardTitle className="text-xl font-bold text-red-800">
              Current Reality
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <ul className="space-y-3">
            {[
              "Patient preferences lost in siloes",
              "Critical decisions made without context",
              "Families suffer emotional trauma",
              "System costs skyrocket"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                className="flex items-center gap-3 text-sm text-red-700 group"
              >
                <motion.div 
                  className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="group-hover:text-red-800 transition-colors duration-200">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const SolutionArrow = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 1.5 }}
    className="flex flex-col items-center gap-6"
  >
    <div className="relative">
      {/* Glassy arrow connector */}
      <div className="w-2 h-20 bg-gradient-to-b from-white/70 via-white/90 to-white/70 rounded-full backdrop-blur-md border border-white/40 shadow-inner" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-sm" />
      
      {/* Animated glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white/30 rounded-full"
        animate={{ 
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Arrow head */}
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-white/90"
          animate={{ 
            y: [0, -2, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.8 }}
      className="text-center"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Solution</h3>
      <p className="text-sm text-gray-600 max-w-md leading-relaxed">
        Discover how we're connecting the dots to transform healthcare decision-making
      </p>
      
      {/* Call to action button */}
      <motion.button
        className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  </motion.div>
)

export default function ProblemFlowEnhanced() {
  const problems = [
    {
      title: "Code Blue Dilemma",
      description: "Clinicians face critical decisions during cardiac arrest without access to patient preferences, often leading to unnecessary resuscitation.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-500",
      delay: 0.1
    },
    {
      title: "Lost Documents",
      description: "DNR forms and advance directives are frequently misplaced in filing cabinets, family inboxes, or buried in patient portals.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-orange-500",
      delay: 0.2
    },
    {
      title: "High Costs",
      description: "Each unnecessary resuscitation costs $30-50,000 per patient, leading to patients dying without dignity or respect for their wishes.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-purple-500",
      delay: 0.3
    }
  ]

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Patient values and medical preferences are not captured effectively and often lost amongst the complexities and various siloes within the healthcare system.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} index={index} />
          ))}
        </div>

        {/* Glassy Connectors */}
        <div className="relative hidden md:block">
          {/* Horizontal connectors from cards to central line */}
          <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2">
            <GlassyConnector className="w-20 h-1" delay={0.4} />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2">
            <GlassyConnector className="w-20 h-1" delay={0.5} />
          </div>
          <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2">
            <GlassyConnector className="w-20 h-1" delay={0.6} />
          </div>

          {/* Central vertical connector */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <GlassyConnector className="w-1 h-40" delay={0.7} />
          </div>
        </div>

        {/* Current Reality Box */}
        <div className="flex justify-center mb-20">
          <CurrentRealityBox />
        </div>

        {/* Solution Arrow */}
        <div className="flex justify-center">
          <SolutionArrow />
        </div>
      </div>
    </div>
  )
} 