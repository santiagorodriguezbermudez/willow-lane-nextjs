import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Willow Lane Acquisition Corporation | Home',
  description: 'Willow Lane Acquisition Corporation is a blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[50vh] min-h-[400px]"> {/* Adjusted height */}
        <Image
          src="/hero-image.webp"
          alt="City skyline with park"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Willow Lane Acquisition Corporation</h1>
            <p className="text-xl md:text-2xl">
              Shaping the Future of Business
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-12 py-12">
        <section className="text-center bg-primary text-white py-16 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination.
          </p>
          </section>

        <section className="grid md:grid-cols-2 gap-8">
          <Link href="/team" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-2">Our Team</h2>
            <p className="text-gray-600">Meet the experienced professionals behind Willow Lane.</p>
          </Link>
          <Link href="/investor-relations" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-2">Investor Relations</h2>
            <p className="text-gray-600">Access important financial information and SEC filings.</p>
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-primary mb-6">Past Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['TECNOGLASS', 'LAZYDAYS', 'STRYVE', 'INSPIRE', 'BYOSCIENCE'].map((company) => (
              <div key={company} className="bg-secondary text-white p-4 rounded-lg text-center font-semibold">
                {company}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}