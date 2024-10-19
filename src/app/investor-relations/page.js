import { DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Investor Relations | Willow Lane Acquisition Corporation',
  description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

export default function InvestorRelations() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Investor Relations</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access and review the company&apos;s SEC filings for more details about Willow Lane Acquisition Corporation and its recent activities.
        </p>
      </header>

      <div className="bg-gray-100 rounded-lg p-8 max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <DocumentTextIcon className="w-16 h-16 text-primary" />
        </div>
        <p className="text-center mb-8 text-lg">
          Stay informed about our financial performance and corporate actions by accessing our SEC filings.
        </p>
        <div className="text-center">
          <a 
            href="https://www.sec.gov/edgar/searchedgar/companysearch.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded transition-colors duration-200"
          >
            <DocumentTextIcon className="w-5 h-5 mr-2" />
            View SEC Filings
          </a>
        </div>
      </div>
    </div>
  )
}