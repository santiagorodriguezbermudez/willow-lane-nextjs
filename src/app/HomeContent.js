'use client'

import Link from 'next/link'
import Image from 'next/image'
import TeamAccordion from './components/TeamAccordion'

const CompanyCard = ({ name, logo }) => (
  <div className="group relative">
    {/* Glass morphism card effect */}
    <div className="relative backdrop-blur-sm bg-white/90 rounded-2xl p-8 shadow-lg 
                    hover:shadow-2xl transition-all duration-500 ease-out
                    border border-gray-100 overflow-hidden">
      {/* Gradient orb effect */}
      <div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-secondary/20 
                      rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-l from-primary/20 to-secondary/20 
                      rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Logo container with hover effect */}
        <div className="w-full aspect-[3/2] relative flex items-center justify-center mb-6
                        before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/0 before:to-white/20 
                        before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            priority
          />
        </div>
        
        {/* Company name with animated underline */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 relative inline-block">
            {name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary
                           group-hover:w-full transition-all duration-500"></span>
          </h3>
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
    name: 'LAZYDAYS RV',
    logo: '/company-logos/lazydays.png'
  },
  {
    name: 'STRYVE',
    logo: '/company-logos/stryve.png'
  },
  {
    name: 'INSPIRED',
    logo: '/company-logos/inspired.png'
  },
  {
    name: 'ENSYSCE',
    logo: '/company-logos/ensysce.png'
  }
];

function PastPerformanceSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Performance</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Companies grid */}
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] md:mb-60 mb-[400px]">
        <Image
          src="/hero-image.webp"
          alt="City skyline with park"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#094B30]/90">
          {/* Content container */}
          <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-xl md:text-5xl font-bold mb-4">
              Welcome to Willow Lane Acquisition Corporation
            </h1>
            
            <p className="text-white text-xl mb-8">
              Shaping the Future of Business
            </p>
          </div>
        </div>

        {/* About Section - Overlapping Card */}
        <div className="absolute top-[135%] md:top-[115%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl">
          <div className="mx-4 bg-white rounded shadow-xl">
            <div className="px-4 md:px-8 py-8 md:py-12 text-center">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                Willow Lane Acquisition Corporation is a U.S. publicly traded NASDAQ company (WLACU) formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination with one or more businesses. Our team has broad sector knowledge and brings a combination of operating, investing, financial and transactional experience. We have collectively identified and closed five SPAC business combinations, creating value for shareholders. In XXX, we raised $126.5 million in equity via an initial public offering (&quot;IPO&quot;). We intend to invest in one or more businesses with valuations below $1 billion, positive EBITDA, sustainable cash flow, and experienced management teams. We do not intend to acquire startup companies, companies with speculative business plans, or companies that are excessively leveraged. We seek to leverage on the broad sector expertise of our management team and look to invest in businesses in consumer goods, gaming and leisure, industrial manufacturing, including domestic and international candidates, reflecting our collective transaction history. However, we may invest in a business in any high growth industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for About card overlap */}
      <div className="h-32 bg-white"></div>

      <PastPerformanceSection />

      {/* Mission Section - Simplified */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination.
          </p>
        </div>
      </section>

      {/* Team Accordion Section */}
      <section className="py-16 px-4">
        <TeamAccordion />
      </section>

      {/* Investor Relations Section - Modernized */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Investor Relations</h2>
          
          <Link 
            href="/investor-relations" 
            className="block bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Access Financial Information
                </h3>
                <p className="text-gray-600">
                  View our SEC filings, financial reports, and other important investor documents
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center text-primary font-medium">
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
    </div>
  )
}