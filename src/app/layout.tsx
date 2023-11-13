import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nate Soul',
  description: 'Full-Stack Web Developer with UX Expertise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <MainHeader/>
        {children}
        <MainFooter/>
      </body>
    </html>
  )
}
