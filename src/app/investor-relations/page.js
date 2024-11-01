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

      <div className="text-center">
        <a 
          href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&owner=include&count=40" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary font-bold py-3 px-6 transition-colors duration-200"
        >
          View SEC Filings
        </a>
      </div>
    </div>
  )
}