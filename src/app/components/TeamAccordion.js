'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const TeamMemberAccordion = ({ name, title, description, slug, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/20 text-white">
      <button
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-white/10 transition-colors"
        onClick={onClick}
      >
        <div className="flex justify-start gap-4 flex-col md:flex-row items-start md:items-center">
          <span className="font-bold text-lg text-white">{name}</span>
          <span className="text-white/50">|</span>
          <span className="text-sm text-left text-white/80 whitespace-wrap p-1">{title}</span>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 min-w-5 min-h-5 transform transition-transform duration-300 ease-in-out text-white ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-6 py-4 bg-white">
            <p className="text-gray-700 mb-4">{description}</p>
            <Link 
              href={`/team/${slug}`}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              View Full Profile
            </Link>
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
      name: "George Pang",
      title: "Chief Financial Officer",
      description: "George is CFO. Prior to this he served as CFO of Leisure Acquisition Corp. and as VP of Finance at Inspired Entertainment. He brings extensive experience in financial planning and analysis across various industries.",
      slug: "george-pang"
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
      name: "Rayn Steinberg",
      title: "Director",
      description: "Rayn is the CEO of Arca Capital Management LLC and brings extensive experience in asset management and entrepreneurship. He co-founded WisdomTree and has a strong background in securities structuring and risk management.",
      slug: "rayn-steinberg"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-lg overflow-hidden">
        {teamMembers.map((member, index) => (
          <TeamMemberAccordion
            key={member.slug}
            {...member}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
} 