import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-loading-skeleton/dist/skeleton.css'
import './globals.css'

//provider
import { ThemeProvider } from '@/context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'

//components
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'
import FloatingComponents from '@/components/FloatingComponents'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathanael Ukpong - Software Developer Architecting Digital Solutions',
  description: 'Explore user-centric digital experiences and products with Nathanael Ukpong. Let\'s collaborate on your next project.',
  keywords: ["full stack web developer", "Software Developer", "web development", "UX design", "Digital solutions", "coding", "programming", "technology", "branding", "front-end development", "backend development", "accessibility", "SEO"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <MainHeader/>
          {children}
          <MainFooter/>
          <FloatingComponents/>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  )
}
