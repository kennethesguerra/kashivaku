import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kashiv Aku',
  description: 'Kashiv Aku professional website to show her portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="brass-color text-xl font-semibold">Kashiv Aku</Link>
              </div>
              <div className="hidden sm:block">
                <div className="ml-4 flex space-x-4">
                  <Link href="/about" className="gray-metal-color hover:text-black px-3 py-2 rounded-md text-sm font-small">ABOUT</Link>
                  <Link href="/portfolio" className="gray-metal-color hover:text-black px-3 py-2 rounded-md text-sm font-small">PORTFOLIO</Link>
                  <Link href="/artworks" className="gray-metal-color hover:text-black px-3 py-2 rounded-md text-sm font-small">ARTWORKS</Link>
                  <Link href="/services" className="gray-metal-color hover:text-black px-3 py-2 rounded-md text-sm font-small">SERVICES</Link>
                  <Link href="/contact" className="gray-metal-color hover:text-black px-3 py-2 rounded-md text-sm font-small">CONTACT</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
