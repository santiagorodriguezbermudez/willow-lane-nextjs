'use client'

import { useState, useEffect } from 'react'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { HomeIcon, UserGroupIcon, ChartBarIcon, PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

// Animated Link Component
const AnimatedLink = ({ href, children, className }) => (
  <Link href={href}>
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  </Link>
)

// Navigation Items Component
const NavItems = () => (
  <>
    <li>
      <AnimatedLink 
        href="/" 
        className="flex items-center hover:text-accent transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        <span>Home</span>
      </AnimatedLink>
    </li>
    <li>
      <AnimatedLink 
        href="/team" 
        className="flex items-center hover:text-accent transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10"
      >
        <UserGroupIcon className="w-5 h-5 mr-2" />
        <span>Team</span>
      </AnimatedLink>
    </li>
    <li>
      <AnimatedLink 
        href="/investor-relations" 
        className="flex items-center hover:text-accent transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10"
      >
        <ChartBarIcon className="w-5 h-5 mr-2" />
        <span>Investor Relations</span>
      </AnimatedLink>
    </li>
  </>
)

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen font-haboro bg-gray-50">
        <motion.header
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled 
              ? 'bg-primary/95 backdrop-blur-lg shadow-lg' 
              : 'bg-primary/80 backdrop-blur-sm'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <nav className="container mx-auto px-4 pb-0 pt-1">
            <div className="flex justify-between items-center">
              <AnimatedLink href="/" className="relative z-10">
                <div className="relative w-[150px] h-[150px]">
                  <Image 
                    src="/logo.png" 
                    alt="WLAC Logo" 
                    fill
                    className="object-contain"
                    priority 
                  />
                </div>
              </AnimatedLink>

              <ul className="hidden md:flex items-center space-x-2 text-white">
                <NavItems />
              </ul>

              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative z-10 p-2 rounded-full hover:bg-white/10 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden absolute w-full bg-primary/95 backdrop-blur-lg"
              >
                <ul className="flex flex-col items-center space-y-4 py-6 text-white">
                  <NavItems />
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        <main className="flex-grow pt-[150px]">
          {children}
        </main>

        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <p>&copy; 2024 Willow Lane Acquisition Corporation. All rights reserved.</p>
              </div>
              <div className="text-center md:text-right">
                <p className="font-semibold mb-2">Contact Information:</p>
                <p className="flex items-center justify-center md:justify-end mb-1">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <span>(646) 565-3861</span>
                </p>
                <p className="flex items-center justify-center md:justify-end">
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  <a href="mailto:maya@willowac.com" className="hover:underline">maya@willowac.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}