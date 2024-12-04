'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TeamAccordion from './components/TeamAccordion'

const CompanyCard = ({ name, logo }) => (
  <div className="group relative px-10 py-0 md:p-0">
    <div className="relative backdrop-blur-sm bg-white/90 rounded-2xl p-4 md:p-8 
                  shadow-lg hover:shadow-2xl transition-all duration-500 ease-out
                  border border-gray-100 hover:border-secondary overflow-hidden">
      <div className="relative z-10">
        <div className="w-full aspect-[3/2] relative flex items-center justify-center">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 rounded-lg p-2 md:p-0"
            priority
          />
        </div>
      </div>
    </div>
  </div>
);

const companies = [
  {
    name: 'TECNOGLASS',
    logo: '/company-logos/tecnoglass.png'
  },
  {
    name: 'INSPIRED',
    logo: '/company-logos/inspired.png'
  },
  {
    name: 'LAZYDAYS RV',
    logo: '/company-logos/lazydays.png'
  },
  {
    name: 'STRYVE',
    logo: '/company-logos/stryve.png'
  },
  {
    name: 'ENSYSCE',
    logo: '/company-logos/ensysce.png'
  }
];

function PastPerformanceSection() {
  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">PAST TRANSACTIONS</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {companies.map((company) => (
            <CompanyCard
              key={company.name}
              name={company.name}
              logo={company.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add new component for governance documents
const GovernanceDocument = ({ title, pdfUrl }) => (
  <div className="bg-gray-50 hover:bg-gray-100 transition-colors p-6 rounded-lg mb-4">
    <a 
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center"
    >
      <span className="text-xl text-primary font-medium">{title}</span>
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  </div>
);

export default function Home() {
  // Add scroll handling for hash links
  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash === '#governance') {
      const element = document.getElementById('governance')
      if (element) {
        // Add a slight delay to ensure smooth scrolling after page load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[450px] md:mb-60 mb-[550px]">
        <Image
          src="/hero-image.webp"
          alt="City skyline with park"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/70">
          {/* Content container */}
          <div className="max-w-4xl mx-auto px-4 pt-12 h-4/5 flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-2xl md:text-5xl font-bold mb-6 md:mb-4 pb-4">
              WILLOW LANE <br />ACQUISITION CORPORATION
            </h1>
            
            <p className="text-white text-lg md:text-2xl mb-8 px-4 md:px-0">
              Willow Lane Acquisition Corporation is a blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination with one or more businesses.
            </p>
          </div>
        </div>

        {/* About Section - Overlapping Card */}
        <div className="absolute top-[150%] md:top-[115%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl">
          <div className="mx-4 bg-white rounded-lg shadow-xl">
            <div className="px-4 md:px-8 py-6 md:py-12 text-center">
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto space-y-4">
                <span className="block mb-4">
                  Our team has broad sector knowledge and brings a combination of operating, investing, financial and transactional experience. We have collectively identified and closed five SPAC business combinations, creating value for shareholders.
                </span>
                <span className="block">
                  We intend to focus on businesses with valuations above $400 million, positive EBITDA, sustainable cash flow, and experienced management teams. While we will not be limited to a particular industry or sector, we plan to focus on consumer goods, gaming and leisure, industrial manufacturing, including domestic and international target company candidates, reflecting our collective transaction history.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <PastPerformanceSection />

      {/* Team Accordion Section */}
      <section className="py-16 bg-gradient-to-b from-primary/95 to-primary text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">OUR TEAM</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-secondary mx-auto rounded-full"></div>
        </div>
        <TeamAccordion />
      </section>

      {/* Investor Relations Section - Modernized */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">INVESTOR RELATIONS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <Link 
            href="/investor-relations" 
            className="block bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Access Financial Information
                </h3>
                <p className="text-xl text-gray-600">
                    View SEC fillings for Willow Lane Acquisition Corporation
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-200 font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Governance Documents Section */}
      <section id="governance" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">GOVERNANCE DOCUMENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <GovernanceDocument 
              title="Regulation FD Policy" 
              pdfUrl="/documents/Willow Lane - Regulation FD Policy.pdf" 
            />
            <GovernanceDocument 
              title="Related Person Transactions Policy" 
              pdfUrl="/documents/Willow Lane - Related Person Transactions Policy.pdf" 
            />
            <GovernanceDocument 
              title="Clawback Compensation Policy" 
              pdfUrl="/documents/Willow Lane - Clawback Compensation Policy.pdf" 
            />
            <GovernanceDocument 
              title="Insider Trading Policy" 
              pdfUrl="/documents/Willow Lane - Insider Trading Policy.pdf" 
            />
            <GovernanceDocument 
              title="Code of Ethics" 
              pdfUrl="/documents/Willow Lane - Code of Ethics.pdf" 
            />
            <GovernanceDocument 
              title="Compensation Committee Charter" 
              pdfUrl="/documents/Willow Lane - Compensation Committee Charter.pdf" 
            />
            <GovernanceDocument 
              title="Audit Committee Charter" 
              pdfUrl="/documents/Willow Lane - Audit Committee Charter.pdf" 
            />
          </div>
        </div>
      </section>
    </div>
  )
}