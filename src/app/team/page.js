import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Team | Willow Lane Acquisition Corporation',
  description: 'Meet the experienced professionals behind Willow Lane Acquisition Corporation.',
}

const TeamMember = ({ name, title, description, link, photo }) => (
  <Link href={link} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col">
    <div className="w-full h-[32rem] relative">
      <Image
        src={photo || '/profile.webp'}
        alt={name}
        fill
        className="object-cover object-top"
        priority
      />
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-3xl font-semibold text-primary mb-2">{name}</h3>
      <p className="text-gray-600 text-xl mb-3">{title}</p>
      <p className="text-gray-500 mb-4 line-clamp-3">{description}</p>
      <span className="text-secondary font-semibold hover:underline mt-auto">Read More</span>
    </div>
  </Link>
)
export default function Team() {
  const managementTeam = [
    {
      name: "Luke Weil",
      title: "Chief Executive Officer and Chairman of the Board",
      description: "Luke serves as our CEO and Chairman. He previously led Andina Acquisition Corporation I, II, and III, resulting in successful business combinations with Tecnoglass, Lazydays R.V, and Stryve Foods, respectively.",
      link: "/team/luke-weil",
      photo: "/team/Luke Weil Photo.jpg"
    },
    {
      name: "George Peng",
      title: "Chief Financial Officer",
      description: "George is CFO. Prior to this he served as CFO of Leisure Acquisition Corp. and as VP of Finance at Inspired Entertainment. He brings extensive experience in financial planning and analysis across various industries.",
      link: "/team/george-peng",
      photo: "/team/George Peng Photo.jpg"
    },
    {
      name: "Maya Hernandez",
      title: "Treasurer and Director of Business Development",
      description: "Maya is our Treasurer and our Director of Business Development. She was an investor in Andina I and part of the successful Management Team of Andina II and III. She brings extensive experience in SPACs operations and macro-economic analysis.",
      link: "/team/maya-hernandez",
      photo: "/team/Maya Hernandez Photo.jpg"
    }
  ]

  const boardOfDirectors = [
    {
      name: "Mauricio Orellana",
      title: "Director",
      description: "Mauricio has extensive M&A experience across a variety of sectors and has served on multiple boards, including Stryve Foods. He served as CFO of Andina II and III.",
      link: "/team/mauricio-orellana",
      photo: "/team/Mauricio Orellana Photo.jpg"
    },
    {
      name: "Robert Stevens",
      title: "Director",
      description: "Bob brings decades of experience as a strategy and corporate development consultant across various industries, including gaming, leisure, and retail. He previously served as VP of Corporate Strategy at Scientific Games Corporation.",
      link: "/team/robert-stevens",
      photo: "/team/Robert Stevens Photo.jpg"
    },
    {
      name: "Rayne Steinberg",
      title: "Director",
      description: "Rayn is the CEO of Arca Capital Management LLC and brings extensive experience in asset management and entrepreneurship. He co-founded WisdomTree and has a strong background in securities structuring and risk management.",
      link: "/team/rayn-steinberg",
      photo: "/team/Rayne Steinberg Photo.jpg"
    }
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">Our Team</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-secondary mb-8">Management Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-secondary mb-8">Board of Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardOfDirectors.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </section>
    </main>
  )
}