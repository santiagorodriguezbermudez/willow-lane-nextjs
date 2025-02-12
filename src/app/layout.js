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
      path: '../fonts/SourceSans3-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-source-sans',
})

// Navigation Items Component
const NavItems = ({ mobile }) => (
  <>
    <li><Link href="/" className="whitespace-nowrap">HOME</Link></li>
    <li><Link href="/investor-relations" className="whitespace-nowrap">INVESTOR RELATIONS</Link></li>
    <li><Link href="/#governance" className="whitespace-nowrap">GOVERNANCE DOCUMENTS</Link></li>
    <li><Link href="/#team" className="whitespace-nowrap">OUR TEAM</Link></li>
  </>
)

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <html lang="en" className={`${haboroContrast.variable} ${sourceSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-white font-source-sans">
        <header className="w-full bg-white border-b border-primary">
          <nav className="container mx-auto py-2">
            <div className="flex justify-between md:justify-start px-2 md:px-0 gap-24 items-center h-48">
              {/* Logo */}
              <Link href="/" className="relative">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                  <Image 
                    src="/logo_sin_margenes.png" 
                    alt="Company Logo" 
                    fill
                    className="object-contain"
                    priority 
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex md:flex-wrap items-center gap-4 text-2xl w-full justify-between font-haboro text-primary">
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
                <ul className="flex flex-col py-4 px-4 font-haboro text-primary">
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
          <div className="container mx-auto py-16 flex items-center justify-between flex-col md:flex-row md:justify-between">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-right">
                <p className="font-haboro uppercase text-3xl mb-2">Contact Information:</p>
                <p className="flex flex-colitems-center justify-center md:justify-start mb-1 font-source-sans">
                  <span className="text-xl">(646) 565-3861</span>
                </p>
                <p className="flex items-center justify-center md:justify-start font-source-sans text-xl">
                  <a href="mailto:info@willowac.com" className="hover:underline">info@willowac.com</a>
                </p>
              </div>
            </div>
            <Image src="/logo_sin_margenes.png" alt="Company Logo" width={300} height={300} />
          </div>
        </footer>
      </body>
    </html>
  )
}