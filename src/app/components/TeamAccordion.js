'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const TeamMemberAccordion = ({ name, title, description, slug, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-gray-50"
        onClick={onClick}
      >
        <div className="flex justify-start gap-4 flex-col md:flex-row items-start md:items-center ">
          <span className="font-bold text-lg text-gray-900">{name}</span>
          <span className="text-sm text-left text-gray-600 whitespace-wrap p-1">{title}</span>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 min-w-5 min-h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-gray-700 mb-4">{description}</p>
          <Link 
            href={`/team/${slug}`}
            className="text-primary hover:underline font-medium"
          >
            View Full Profile
          </Link>
        </div>
      )}
    </div>
  )
}

export default function TeamAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const teamMembers = [
    {
      name: "Luke Weil",
      title: "Chief Executive Officer and Chairman of the Board",
      description: "Luke serves as our CEO and Chairman since July 2024. He previously led Andina Acquisition Corporation III, II, and I, resulting in successful business combinations with companies like Stryve Foods, Lazydays R.V., and Tecnoglass.",
      slug: "luke-weil"
    },
    {
      name: "George Pang",
      title: "Chief Financial Officer",
      description: "George has served as CFO since July 2024. He previously served as CFO of Leisure Acquisition Corp. and as VP of Finance at Inspired Entertainment. He brings extensive experience in financial planning and analysis across various industries.",
      slug: "george-pang"
    },
    {
      name: "Maya Hernandez",
      title: "Treasurer and Director of Business Development",
      description: "Maya brings valuable experience from her roles in early-stage investments and currency strategy. She previously served as Treasurer for Andina III and has extensive experience in macro-economic analysis.",
      slug: "maya-hernandez"
    },
    {
      name: "Mauricio Orellana",
      title: "Director",
      description: "Mauricio has extensive experience as a financial consultant in Latin America and has served on multiple boards, including Stryve Foods. He brings valuable expertise in media, infrastructure, and services sectors.",
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
      <div className="border-t border-gray-200 rounded-lg overflow-hidden">
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