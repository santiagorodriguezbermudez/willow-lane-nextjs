import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Team | Willow Lane Acquisition Corporation',
  description: 'Meet the experienced professionals behind Willow Lane Acquisition Corporation.',
}

const TeamMember = ({ name, title, description, link }) => (
  <Link href={link} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col">
    <div className="w-full h-64 relative">
      <Image
        src="/profile.webp"
        alt={name}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
      <p className="text-gray-600 font-medium mb-3">{title}</p>
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
      description: "Luke serves as our CEO and Chairman since July 2024. He has extensive experience in SPACs, having led Andina Acquisition Corporation III, II, and I, resulting in successful business combinations.",
      link: "/team/luke-weil"
    },
    {
      name: "George Pang",
      title: "Chief Financial Officer",
      description: "George has served as our CFO since July 2024. He brings valuable experience from his roles as CFO in previous SPACs and his background in finance at various companies.",
      link: "/team/george-pang"
    },
    {
      name: "Maya Hernandez",
      title: "Treasurer and Director of Business Development",
      description: "Maya has been our Treasurer and Director of Business Development since July 2024. She has a strong background in early-stage investments and currency strategy.",
      link: "/team/maya-hernandez"
    }
  ]

  const boardOfDirectors = [
    {
      name: "Mauricio Orellana",
      title: "Director",
      description: "Mauricio has been a Director since our formation. He has extensive experience as a financial consultant in Latin America and has served on multiple boards.",
      link: "/team/mauricio-orellana"
    },
    {
      name: "Robert Stevens",
      title: "Director",
      description: "Bob has been a Director since our formation. He brings decades of experience as a strategy and corporate development consultant across various industries.",
      link: "/team/robert-stevens"
    },
    {
      name: "Rayn Steinberg",
      title: "Director",
      description: "Rayn has been a Director since our formation. He is the CEO of Arca Capital Management LLC and has a strong background in asset management and entrepreneurship.",
      link: "/team/rayn-steinberg"
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