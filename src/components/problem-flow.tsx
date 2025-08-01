"use client"

import { motion } from "framer-motion"
import { Heart, FileText, Zap, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProblemCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  delay: number
}

const ProblemCard = ({ title, description, icon, color, delay }: ProblemCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="relative"
  >
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${color} bg-opacity-10`}>
            <div className={`text-2xl ${color.replace('bg-', 'text-')}`}>
              {icon}
            </div>
          </div>
          <CardTitle className="text-lg font-semibold text-gray-800">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  </motion.div>
)



const CurrentRealityBox = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="relative"
  >
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-red-50/80 to-red-100/40 backdrop-blur-sm shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5" />
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-red-500/10">
            <AlertTriangle className="text-2xl text-red-600" />
          </div>
          <CardTitle className="text-xl font-bold text-red-800">
            Current Reality
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {[
            "Patient preferences lost in siloes",
            "Critical decisions made without context",
            "Families suffer emotional trauma",
            "System costs skyrocket"
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className="flex items-center gap-2 text-sm text-red-700"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

const SolutionArrow = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 1.5 }}
    className="flex flex-col items-center gap-4"
  >
    <div className="relative">
      {/* Glassy arrow connector */}
      <div className="w-1 h-16 bg-gradient-to-b from-white/60 via-white/80 to-white/60 rounded-full backdrop-blur-sm border border-white/30 shadow-inner" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-sm" />
      
      {/* Arrow head */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-white/80" />
      </div>
    </div>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.8 }}
      className="text-center"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Solution</h3>
      <p className="text-sm text-gray-600 max-w-md">
        Discover how we're connecting the dots to transform healthcare decision-making
      </p>
    </motion.div>
  </motion.div>
)

export default function ProblemFlow() {
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
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Problem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Patient values and medical preferences are not captured effectively and often lost amongst the complexities and various siloes within the healthcare system.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="flex flex-col space-y-8 mb-16">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>



        {/* Current Reality Box */}
        <div className="flex justify-center mb-16">
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