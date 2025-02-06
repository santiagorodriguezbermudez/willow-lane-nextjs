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
        <header className="w-full bg-white border-b border-primary">
          <nav className="container mx-auto">
            <div className="flex justify-between items-center h-48">
              {/* Logo */}
              <Link href="/" className="relative">
                <div className="relative w-[200px] h-[200px] md:w-[450px] md:h-[350px]">
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

        <footer className="bg-white text-primary py-8 border-t border-primary">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-right">
                <p className="font-thin uppercase text-2xl mb-2">Contact Information:</p>
                <p className="flex flex-colitems-center justify-center md:justify-start mb-1">
                  <span>(646) 565-3861</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <a href="mailto:maya@willowac.com" className="hover:underline">info@willowac.com</a>
                </p>
              </div>
            </div>
            <Image src="/logo_completo.jpg" alt="Company Logo" width={200} height={200} />
          </div>
        </footer>
      </body>
    </html>
  )
}