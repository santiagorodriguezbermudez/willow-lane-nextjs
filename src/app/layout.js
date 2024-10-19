import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex flex-col min-h-screen font-haboro">
        <header className="bg-primary text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Willow Lane Logo" width={200} height={200} />
            </Link>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/team" className="hover:text-accent transition-colors">Team</Link></li>
              <li><Link href="/investor-relations" className="hover:text-accent transition-colors">Investor Relations</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-primary text-white p-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Willow Lane Acquisition Corporation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}