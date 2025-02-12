'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TeamAccordion from './components/TeamAccordion'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const CompanyCard = ({ name, logo }) => (
  <div className="aspect-[3/2] relative flex w-full md:w-auto md:flex-1 items-center justify-center">
    <Image
      src={logo}
      alt={`${name} logo`}
      fill
      className="object-contain"
      priority
    />
  </div>
);

const companies = [
  {
    name: 'TECNOGLASS',
    logo: '/company-logos/tecnoglass-1.png'
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
    <section className="relative overflow-hidden">
      <div className='container mx-auto py-16'>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-haboro font-thin text-primary mb-4">PAST TRANSACTIONS</h2>
        </div>
        
        <div className="relative mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((company) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                logo={company.logo}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Add new component for governance documents
const GovernanceDocument = ({ title, pdfUrl }) => (
  <div className="text-white border-white border-b pb-4">
    <a 
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center"
    >
      <span className="text-2xl text-white font-thin uppercase">{title}</span>
      <ChevronDownIcon className="w-6 h-6 font-thin" />
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
      <section className="relative bg-primary">
        {/* Background Icon */}
        <div className='container mx-auto py-16'>
            <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
              <Image
                src="/logo_hero.png"
                alt="Decorative background"
                fill
                className="object-contain object-right"
                priority
              />
            </div>

            {/* Content */}
            <div className="container mx-auto relative z-10">
              <div className="w-full md:w-3/5 text-center md:text-left text-white space-y-6">
                <h1 className="text-3xl uppercase font-haboro">
                  Willow Lane Acquisition Corporation
                </h1>
                <p className="text-2xl font-light  !mt-0">
                  is a blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination with one or more businesses.
                </p>
                <p className="text-2xl font-light">
                  Our team has broad sector knowledge and brings a combination of operating, investing, financial and transactional experience. We have collectively identified and closed five SPAC business combinations, creating value for shareholders.
                </p>
                <p className="text-2xl font-light">
                  We intend to focus on businesses with valuations greater than $400 million, positive EBITDA, sustainable cash flow, and experienced management teams. While we will not be limited to a particular industry or sector, we plan to focus on consumer goods, gaming and leisure, industrial manufacturing, including domestic and international target company candidates, reflecting our collective transaction history.
                </p>
              </div>
            </div>

        </div>

      </section>

      <PastPerformanceSection />

      {/* Team Accordion Section */}
      <section id="team" className="relative bg-primary">
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-haboro mb-4">OUR TEAM</h2>
          </div>
          <TeamAccordion /> 
        </div>
      </section>

      {/* Investor Relations Section - Modernized */}
      <section className="bg-white">
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-haboro text-primary mb-4">INVESTOR RELATIONS</h2>
          </div>
          
          <Link 
            href="/investor-relations" 
          >
            <div className="flex flex-col md:flex-row justify-between items-center border-primary border-b pb-4">
              <div>
                <h3 className="text-3xl font-haboro text-gray-dark mb-2 uppercase">
                  Access Financial Information
                </h3>
                <p className="text-2xl text-gray-dark/80 font-thin">
                    View SEC fillings for WILLOW LANE ACQUISITION CORPORATION
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center text-gray-800 hover:text-primary transition-colors duration-200 font-medium">
                  <ChevronRightIcon className="w-8 h-8" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Governance Documents Section */}
      <section id="governance" className=" bg-primary text-white">
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-haboro text-white mb-4">GOVERNANCE DOCUMENTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
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