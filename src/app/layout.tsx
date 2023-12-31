import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'
import { ThemeProvider } from '@/context/ThemeContext'
import FloatingComponents from '@/components/FloatingComponents'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathanael Ukpong',
  description: 'Full-Stack Web Developer with Expertise in User Experience (UX)',
  keywords: ["full stack web developer", "branding", "frontend development", "backend development", "accessibility", "SEO"]
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
      </body>
    </html>
  )
}
