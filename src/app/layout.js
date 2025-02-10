'use client'

import { useState } from 'react'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import localFont from 'next/font/local'

// Load Haboro Contrast font
const haboroContrast = localFont({
  src: '../fonts/HaboroContrast-ExtBk.woff2',
  variable: '--font-haboro',
})

// Load Source Sans Variable font
const sourceSans = localFont({
  src: [
    {
      path: '../fonts/SourceSans3-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/SourceSans3-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SourceSans3-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    }
  ],
  variable: '--font-source-sans',
})

// Navigation Items Component
const NavItems = ({ mobile }) => (
  <>
    <li><Link href="/" className="text-primary font-haboro">HOME</Link></li>
    <li><Link href="/investor-relations" className="text-primary font-haboro">INVESTOR RELATIONS</Link></li>
    <li><Link href="/#governance" className="text-primary font-haboro">GOVERNANCE DOCUMENTS</Link></li>
    <li><Link href="/#team" className="text-primary font-haboro">OUR TEAM</Link></li>
  </>
)

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <html lang="en" className={`${haboroContrast.variable} ${sourceSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-white font-source-sans">
        <header className="w-full bg-white border-b border-primary py-4">
          <nav className="container mx-auto">
            <div className="flex justify-between md:justify-start px-2 md:px-0 gap-4 items-center h-48">
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
              <ul className="hidden md:flex items-center gap-4 text-2xl w-full justify-between">
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

        <footer className="bg-white text-primary border-t border-primary">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-right">
                <p className="font-haboro uppercase text-2xl mb-2">Contact Information:</p>
                <p className="flex flex-colitems-center justify-center md:justify-start mb-1">
                  <span>(646) 565-3861</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <a href="mailto:maya@willowac.com" className="hover:underline">info@willowac.com</a>
                </p>
              </div>
            </div>
            <Image src="/logo_completo.jpg" alt="Company Logo" width={300} height={300} />
          </div>
        </footer>
      </body>
    </html>
  )
}