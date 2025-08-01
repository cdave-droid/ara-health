'use client'

import { useState, useEffect } from 'react'

import { AraLogo } from '@/components/ara-logo'
import { 
  Menu, 
  X
} from 'lucide-react'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Team', href: '#team' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
         <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
       isScrolled 
         ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-ara-blue/10' 
         : 'bg-white/95 backdrop-blur-sm'
     }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <AraLogo width={isScrolled ? 32 : 36} height={isScrolled ? 32 : 36} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span className={`font-inter font-semibold transition-all duration-300 ${
              isScrolled ? 'text-base sm:text-lg text-ara-navy' : 'text-lg sm:text-xl text-ara-navy'
            }`}>
              Ara Health
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-ara-blue transition-colors duration-200 font-medium relative group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ara-blue to-ara-teal transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}


          </div>

                                {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             onTouchEnd={(e) => {
               e.preventDefault()
               setIsMobileMenuOpen(!isMobileMenuOpen)
             }}
             className="md:hidden p-2 sm:p-3 rounded-xl hover:bg-gradient-to-r hover:from-ara-blue/10 hover:to-ara-teal/10 transition-all duration-300 cursor-pointer touch-manipulation border border-transparent hover:border-ara-blue/20"
           >
             {isMobileMenuOpen ? (
               <X className="h-5 w-5 sm:h-6 sm:w-6 text-ara-navy" />
             ) : (
               <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-ara-navy" />
             )}
           </button>
        </div>

                          {/* Mobile Menu */}
         <div className={`md:hidden transition-all duration-300 ease-in-out ${
           isMobileMenuOpen 
             ? 'max-h-[500px] opacity-100' 
             : 'max-h-0 opacity-0'
         } overflow-hidden bg-gradient-to-b from-white to-gray-50/30 shadow-xl border-t border-ara-blue/10 relative z-50`}>
           <div className="py-4 sm:py-6 space-y-2 sm:space-y-3">
             {navItems.map((item) => (
               <button
                 key={item.label}
                 onClick={() => {
                   scrollToSection(item.href)
                   setIsMobileMenuOpen(false)
                 }}
                 onTouchEnd={(e) => {
                   e.preventDefault()
                   scrollToSection(item.href)
                   setIsMobileMenuOpen(false)
                 }}
                 className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-ara-navy hover:text-ara-blue hover:bg-gradient-to-r hover:from-ara-blue/5 hover:to-ara-teal/5 rounded-xl transition-all duration-300 font-semibold text-base sm:text-lg bg-white/80 backdrop-blur-sm cursor-pointer touch-manipulation border border-transparent hover:border-ara-blue/20 shadow-sm hover:shadow-md"
               >
                 {item.label}
               </button>
             ))}
            
            

            
          </div>
        </div>
      </div>

             {/* Backdrop for mobile menu */}
       {isMobileMenuOpen && (
         <div 
           className="md:hidden fixed inset-0 bg-gradient-to-br from-ara-navy/20 via-ara-blue/10 to-ara-teal/10 backdrop-blur-sm z-30"
           onClick={() => setIsMobileMenuOpen(false)}
         />
       )}
    </nav>
  )
} 