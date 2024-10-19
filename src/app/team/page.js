import Link from 'next/link'

export const metadata = {
    title: 'Our Team | Willow Lane Acquisition Corporation',
    description: 'Meet the experienced professionals behind Willow Lane Acquisition Corporation.',
  }
  

export default function Team() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Luke Weil</h2>
          <p className="text-gray-600">Chief Executive Officer and Chairman of the Board</p>
          <Link href="/team/luke-weil" className="text-blue-500 hover:underline">Read More</Link>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">George Pang</h2>
          <p className="text-gray-600">Chief Financial Officer</p>
          <Link href="/team/george-pang" className="text-blue-500 hover:underline">Read More</Link>
        </div>
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Maya Hernandez</h2>
          <p className="text-gray-600">Treasurer and Director of Business Development</p>
          <Link href="/team/maya-hernandez" className="text-blue-500 hover:underline">Read More</Link>
        </div>
      </div>
    </main>
  )
}