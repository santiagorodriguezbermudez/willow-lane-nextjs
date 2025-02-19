import { DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Investor Relations | Willow Lane Acquisition Corporation',
  description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

export default function InvestorRelations() {
  return (
    <div className="container mx-auto py-16">
      <header className="mb-12 text-center">
        <h1 className="text-[29.9px] font-bold text-primary mb-4 font-haboro uppercase">Investor Relations</h1>
        <p className="text-[24.7px] text-gray-dark max-w-2xl mx-auto font-thin">
          Access and review the company&apos;s SEC filings for more details about WILLOW LANE ACQUISITION CORPORATION and its recent activities.
        </p>
      </header>

      <div className="text-center">
        <a 
          href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&owner=include&count=40" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-dark text-[24.7px] hover:text-primary font-bold py-3 px-6 transition-colors duration-200 font-haboro uppercase"
        >
          View SEC Filings
        </a>
      </div>
    </div>
  )
}