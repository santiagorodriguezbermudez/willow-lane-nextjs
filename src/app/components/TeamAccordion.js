'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const TeamMemberAccordion = ({ name, title, description, slug, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/50 text-white relative">
      <button
        className="w-full py-4 flex items-center justify-between hover:bg-white/10 transition-colors"
        onClick={onClick}
      >
        <div className="flex-1 flex items-center justify-start">
          <span className="font-haboro text-xl md:text-[24.7px] text-white uppercase text-left border-r border-secondary pr-8">{name}</span>
          <span className="font-thin text-lg md:text-[27.3px] text-white/80 md:text-white text-right md:text-left pl-8">{title}</span>
        </div>
        <ChevronDownIcon 
          className={`w-8 h-8 md:w-10 md:h-10 min-w-8 min-h-8 md:min-w-10 md:min-h-10 transform transition-transform duration-300 ease-in-out text-white/50 flex-shrink-0 ml-4 [stroke-width:1] ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div className={`active:ring-0 active:outline-none active:ring-offset-0 active:border-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 transition-all duration-300 ease-in-out bg-white ${isOpen ? 'absolute top-100 left-1/2 w-50 z-[1000] right-[18px] h-auto top-[60px]' : 'hidden'}`}>
        <div className="px-4 md:px-6 py-4">
          <div>
            <h6 className="text-primary text-2xl md:text-[24.7px] font-source-sans uppercase mb-1 font-thin">{name}</h6>
            <p className="text-gray-dark/50 text-base md:text-[20.8px] italic font-source-sans font-thin mb-1">{title}</p>
            <p className="h-1 border-b border-primary w-1/2 mb-4"></p>
            <p className="text-gray-dark/50 font-thin mb-8 font-source-sans text-base md:text-[20.8px]">{description}</p>
            <p className="h-1 border-b border-primary w-full mb-4"></p>
            <div className="flex justify-end">
              <Link 
                href={`/team/${slug}`}
                className="text-gray-dark hover:text-primary transition-colors font-source-sans text-right md:text-left group inline-flex items-center"
              >
                <span className="text-gray-dark/50 font-thin group-hover:text-primary transition-colors font-source-sans text-sm md:text-[23.4px]">
                  View Full Profile
                </span>
                <ChevronRightIcon className="ml-2 md:ml-3 w-8 h-8 [stroke-width:1] text-gray-dark/50 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeamAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const teamMembers = [
    {
      name: "Luke Weil",
      title: "Chief Executive Officer and Chairman of the Board",
      description: "Luke serves as our CEO and Chairman. He previously led Andina Acquisition Corporation I, II, and III, resulting in successful business combinations with Tecnoglass, Lazydays R.V, and Stryve Foods, respectively.",
      slug: "luke-weil"
    },
    {
      name: "George Peng",
      title: "Chief Financial Officer",
      description: "George serves as our CFO. Prior to this he served as CFO of Leisure Acquisition Corp. and as VP of Finance at Inspired Entertainment. He brings extensive experience in financial planning and analysis across various industries.",
      slug: "george-peng"
    },
    {
      name: "Maya Hernandez",
      title: "Treasurer and Director of Business Development",
      description: "Maya is our Treasurer and our Director of Business Development. She was an investor in Andina I and part of the successful Management Team of Andina II and III. She brings extensive experience in SPACs operations and macro-economic analysis.",
      slug: "maya-hernandez"
    },
    {
      name: "Mauricio Orellana",
      title: "Director",
      description: "Mauricio has extensive M&A experience across a variety of sectors and has served on multiple boards, including Stryve Foods. He served as CFO of Andina II and III.",
      slug: "mauricio-orellana"
    },
    {
      name: "Robert Stevens",
      title: "Director",
      description: "Bob brings decades of experience as a strategy and corporate development consultant across various industries, including gaming, leisure, and retail. He previously served as VP of Corporate Strategy at Scientific Games Corporation.",
      slug: "robert-stevens"
    },
    {
      name: "Rayne Steinberg",
      title: "Director",
      description: "Rayne is the CEO of Arca Capital Management LLC and brings extensive experience in asset management and entrepreneurship. He co-founded WisdomTree and has a strong background in securities structuring and risk management.",
      slug: "rayne-steinberg"
    },
    {
      name: "Lorne Weil",
      title: "Advisor",
      description: "Lorne serves as an advisor to the Company. Mr. Weil has served as the Executive Chairman of Inspired Entertainment, Inc. (“Inspired”) since the consummation of its business combination that created the current Inspired Entertainment, Inc. in December 2016. Mr. Weil was the co-sponsor and founder of Inspired's predecessor, Hydra Industries, and served as its Chairman and Chief Executive Officer since its formation in 2014.",
      slug: "lorne-weil"
    }
  ]

  return (
     <>
        {teamMembers.map((member, index) => (
          <TeamMemberAccordion
            key={member.slug}
            {...member}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
    </>
  )
} 