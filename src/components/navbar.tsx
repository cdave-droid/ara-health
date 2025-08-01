'use client'

import { useState, useEffect } from 'react'
import { AraLogo } from '@/components/ara-logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const NAVBAR_CUSTOM_PROPS = {
  '--navbar-height': '90px',
  '--navbar-height-shrunk': '70px',
  '--navbar-bg': 'rgba(255,255,255,0.65)',
  '--navbar-blur': '32px',
  '--navbar-border': '1px solid rgba(147,197,253,0.15)',
  '--navbar-shadow': '0 8px 32px rgba(59,130,246,0.06), 0 2px 8px rgba(59,130,246,0.04)',
  '--navbar-shadow-floating': '0 20px 40px rgba(59,130,246,0.08), 0 8px 16px rgba(59,130,246,0.06)',
} as React.CSSProperties

const navItems = [
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

  // --- Animated center transition for logo and button ---
  return (
    <nav
      style={NAVBAR_CUSTOM_PROPS}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700
        [background:var(--navbar-bg)]
        [backdrop-filter:blur(var(--navbar-blur))]
        [border-bottom:var(--navbar-border)]
        ${isScrolled 
          ? 'h-[var(--navbar-height-shrunk)] [box-shadow:var(--navbar-shadow-floating)] mx-auto w-1/2 rounded-2xl mt-4 px-8' 
          : 'h-[var(--navbar-height)] [box-shadow:var(--navbar-shadow)] w-full px-4 sm:px-6 lg:px-8'
        }
        flex items-center
      `}
    >
      <div className={`w-full flex items-center justify-between transition-all duration-700 h-full ${
        isScrolled ? 'max-w-2xl mx-auto' : 'max-w-7xl mx-auto'
      }`}>
        {/* Left: Logo and name */}
                <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Ara Health" 
            width={50} 
            height={50} 
            className={`rounded-full transition-all duration-700 ${isScrolled ? 'w-9 h-9 scale-90' : 'w-12 h-12 scale-100'}`}
          />
          {/* Site name only in full state */}
          <span
            className={`font-semibold text-foreground transition-all duration-700 ${
              isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 text-lg sm:text-xl ml-3'
            }`}
            style={{ transitionProperty: 'opacity, width' }}
          >
            
            ARA HEALTH
          </span>
        </div>

        {/* Center: Nav links (desktop, only in full state) */}
        <div
          className={`hidden md:flex items-center gap-8 lg:gap-12 transition-all duration-700 ${
            isScrolled ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 font-semibold hover:text-gray-900 font-medium text-base lg:text-lg transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-2">
          <Button
            size={isScrolled ? 'sm' : 'lg'}
            className={`transition-all duration-700 shadow-lg rounded-2xl px-8 font-semibold text-base sm:text-xl bg-blue-600 hover:bg-blue-700 text-white border border-blue-600/20 focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isScrolled ? 'py-2' : 'py-3'
            }`}
          >
            Join Waitlist
          </Button>

          {/* Hamburger menu (mobile, only in full state) */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`md:hidden ml-2 p-2 rounded-xl border border-blue-200/20 hover:border-blue-300/40 transition-all duration-300 bg-white/60 backdrop-blur-xl shadow-lg z-10
              ${isScrolled ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'}
            `}
            aria-label="Open navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (only in full state) */}
      <div
        className={`md:hidden fixed top-[var(--navbar-height)] left-0 right-0 z-40 transition-all duration-700 bg-white/75 backdrop-blur-2xl border-b border-blue-200/15 shadow-2xl overflow-hidden ${
          isMobileMenuOpen && !isScrolled ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        <div className="flex flex-col gap-1 py-4 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 font-medium text-lg py-3 px-3 rounded-xl hover:bg-blue-50/30 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && !isScrolled && (
        <div
          className="md:hidden fixed inset-0 bg-black/8 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  )
} 