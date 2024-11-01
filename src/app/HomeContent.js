'use client'

import Link from 'next/link'
import Image from 'next/image'
import TeamAccordion from './components/TeamAccordion'

const CompanyCard = ({ name, logo }) => (
  <div className="group relative">
    <div className="relative backdrop-blur-sm bg-white/90 rounded-2xl p-8 
                    shadow-lg hover:shadow-2xl transition-all duration-500 ease-out
                    border border-gray-100 hover:border-secondary overflow-hidden">
      <div className="relative z-10">
        <div className="w-full aspect-[3/2] relative flex items-center justify-center">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 rounded-lg"
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
    <section className="pt-12 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Past Performance</h2>
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
      <div className="relative h-[450px] md:mb-60 mb-[400px]">
        <Image
          src="/hero-image.webp"
          alt="City skyline with park"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/90">
          {/* Content container */}
          <div className="max-w-4xl mx-auto px-4 h-4/5 flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-xl md:text-5xl font-bold mb-4">
              WELCOME TO WILLOW LANE ACQUISITION CORPORATION
            </h1>
            
            <p className="text-white text-xl mb-8">
              Shaping the Future of Business
            </p>
          </div>
        </div>

        {/* About Section - Overlapping Card */}
        <div className="absolute top-[135%] md:top-[115%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl">
          <div className="mx-4 bg-white rounded-lg shadow-xl">
            <div className="px-4 md:px-8 py-8 md:py-12 text-center">
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

      {/* Team Accordion Section */}
      <section className="py-8 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <TeamAccordion />
      </section>

      {/* Investor Relations Section - Modernized */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Investor Relations</h2>
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
                <p className="text-gray-600">
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
    </div>
  )
}