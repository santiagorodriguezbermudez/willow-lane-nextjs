'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const slideIn = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[70vh] min-h-[600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/hero-image.webp"
          alt="City skyline with park"
          fill
          className="brightness-75 object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary/50 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-4 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="font-haboro text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Welcome to Willow Lane Acquisition Corporation
            </h1>
            <p className="text-xl md:text-3xl font-light tracking-wide">
              Shaping the Future of Business
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 space-y-32 py-24">
        {/* About Section */}
        <motion.section 
          className="relative"
          {...fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl transform -skew-y-2"></div>
          <div className="relative p-12 text-center max-w-4xl mx-auto">
            <motion.h2 
              className="font-haboro text-4xl font-bold mb-8 text-primary inline-block"
              {...slideIn}
            >
              About Us
              <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary mt-2"></div>
            </motion.h2>
            <motion.div 
              className="space-y-6 text-gray-700"
              variants={{
                initial: { opacity: 0 },
                whileInView: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeIn} className="text-lg leading-relaxed">
              Willow Lane Acquisition Corporation is a U.S. publicly traded NASDAQ company (WLACU) formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination with one or more businesses. Our team has broad sector knowledge and brings a combination of operating, investing, financial and transactional experience. We have collectively identified and closed five SPAC business combinations, creating value for shareholders.
              In XXX, we raised $126.5 million in equity via an initial public offering (&quot;IPO&quot;). We intend to invest in one or more businesses with valuations below $1 billion, positive EBITDA, sustainable cash flow, and experienced management teams. We do not intend to acquire startup companies, companies with speculative business plans, or companies that are excessively leveraged.
              We seek to leverage on the broad sector expertise of our management team and look to invest in businesses in consumer goods, gaming and leisure, industrial manufacturing, including domestic and international candidates, reflecting our collective transaction history. However, we may invest in a business in any high growth industry.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl"></div>
          <div className="relative px-8 py-20 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <motion.h2 
                className="font-haboro text-4xl font-bold text-white mb-8"
                {...fadeIn}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-2xl text-white/90 leading-relaxed font-light"
                {...fadeIn}
              >
                A blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination.
              </motion.p>
            </div>
          </div>
        </motion.section>

        <PastPerformanceSection />

        {/* Links Section */}
        <motion.section 
          className="grid md:grid-cols-2 gap-8"
          variants={{
            initial: { opacity: 0 },
            whileInView: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            {
              href: "/team",
              title: "Our Team",
              description: "Meet the experienced professionals behind Willow Lane."
            },
            {
              href: "/investor-relations",
              title: "Investor Relations",
              description: "Access important financial information and SEC filings."
            }
          ].map((item, index) => (
            <motion.div
              key={item.href}
              variants={{
                initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                whileInView: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href={item.href} 
                className="group relative overflow-hidden bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 block"
              >
                <div className="absolute -left-4 -top-4 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 
                              rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <h2 className="font-haboro text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  )
}