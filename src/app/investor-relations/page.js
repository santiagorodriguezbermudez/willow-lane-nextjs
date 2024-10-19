export const metadata = {
    title: 'Investor Relations | Willow Lane Acquisition Corporation',
    description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
  }

export default function InvestorRelations() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">Investor Relations</h1>
        <p className="mb-4">Access and review the company's SEC filings for more details about Willow Lane Acquisition Corporation and its recent activities:</p>
        <a 
          href="https://www.sec.gov/edgar/searchedgar/companysearch.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View SEC Filings
        </a>
      </main>
    )
  }