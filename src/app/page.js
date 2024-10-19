import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Willow Lane Acquisition Corporation | Home',
  description: 'Willow Lane Acquisition Corporation is a blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[50vh] min-h-[400px]">
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

      <div className="container mx-auto px-4 space-y-16 py-16">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Us</h2>
          <p className="text-lg mb-4">
            Willow Lane Acquisition Corporation is a U.S. publicly traded NASDAQ company (WLACU) formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination with one or more businesses. Our team has broad sector knowledge and brings a combination of operating, investing, financial and transactional experience. We have collectively identified and closed five SPAC business combinations, creating value for shareholders.
          </p>
          <p className="text-lg mb-4">
            In XXX, we raised $126.5 million in equity via an initial public offering (&quot;IPO&quot;). We intend to invest in one or more businesses with valuations below $1 billion, positive EBITDA, sustainable cash flow, and experienced management teams. We do not intend to acquire startup companies, companies with speculative business plans, or companies that are excessively leveraged.
          </p>
          <p className="text-lg">
            We seek to leverage on the broad sector expertise of our management team and look to invest in businesses in consumer goods, gaming and leisure, industrial manufacturing, including domestic and international candidates, reflecting our collective transaction history. However, we may invest in a business in any high growth industry.
          </p>
        </section>

        <section className="bg-primary text-white py-16 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Past Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['TECNOGLASS', 'LAZYDAYS', 'STRYVE', 'INSPIRE', 'BYOSCIENCE'].map((company) => (
              <div key={company} className="bg-secondary text-white p-6 rounded-lg text-center font-semibold shadow-lg">
                {company}
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <Link href="/team" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">Meet the experienced professionals behind Willow Lane.</p>
          </Link>
          <Link href="/investor-relations" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">Investor Relations</h2>
            <p className="text-gray-600 text-lg">Access important financial information and SEC filings.</p>
          </Link>
        </section>
      </div>
    </div>
  )
}