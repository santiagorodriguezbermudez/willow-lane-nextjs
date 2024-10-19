import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-primary text-white">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="WLAC Logo" width={150} height={150} />
            </Link>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/investor-relations">Investor Relations</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-primary text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Willow Lane Acquisition Corporation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}