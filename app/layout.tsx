import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'Developed by AmirReza Hammamian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-5`}>
        <Header />
        <main className='container mx-auto overflow-x-hidden px-2'>
          {children}
        </main>
      </body>
    </html>
  )
}
