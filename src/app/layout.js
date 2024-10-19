'use client'

import { useState, useEffect } from 'react'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { HomeIcon, UserGroupIcon, ChartBarIcon, PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const NavItems = () => (
    <>
      <li>
        <Link href="/" className="flex items-center hover:text-secondary transition-colors">
          <HomeIcon className="w-5 h-5 mr-1" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/team" className="flex items-center hover:text-secondary transition-colors">
          <UserGroupIcon className="w-5 h-5 mr-1" />
          <span>Team</span>
        </Link>
      </li>
      <li>
        <Link href="/investor-relations" className="flex items-center hover:text-secondary transition-colors">
          <ChartBarIcon className="w-5 h-5 mr-1" />
          <span>Investor Relations</span>
        </Link>
      </li>
    </>
  )

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-primary text-white">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="WLAC Logo" width={150} height={150} />
            </Link>
            <ul className="hidden md:flex space-x-6">
              <NavItems />
            </ul>
            <button onClick={toggleMobileMenu} className="md:hidden">
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </nav>
          {isMounted && isMobileMenuOpen && (
            <div className="md:hidden">
              <ul className="flex flex-col items-center space-y-4 py-4">
                <NavItems />
              </ul>
            </div>
          )}
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