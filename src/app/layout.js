'use client'

import { useState } from 'react'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// Navigation Items Component
const NavItems = ({ mobile }) => (
  <>
    <li><Link href="/" className="text-primary font-regular">HOME</Link></li>
    {!mobile && <li className="h-4 w-px "></li>}
    <li><Link href="/investor-relations" className="text-primary font-regular">INVESTOR RELATIONS</Link></li>
    {!mobile && <li className="h-4 w-px "></li>}
    <li><Link href="/#governance" className="text-primary font-regular">GOVERNANCE DOCUMENTS</Link></li>
  </>
)

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white font-['Roboto',sans-serif]">
        <header className="w-full bg-white">
          <nav className="container mx-auto">
            <div className="flex justify-between items-center h-48">
              {/* Logo */}
              <Link href="/" className="relative">
                <div className="relative w-[450px] h-[350px]">
                  <Image 
                    src="/logo.png" 
                    alt="Company Logo" 
                    fill
                    className="object-contain"
                    priority 
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center space-x-6 text-3xl font-thin">
                <NavItems />
              </ul>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white border-t">
                <ul className="flex flex-col py-4 px-4">
                  <NavItems mobile={true} />
                </ul>
              </div>
            )}
          </nav>
        </header>

        <main className="flex-grow">
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
                  <a href="mailto:maya@willowac.com" className="hover:underline">info@willowac.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}