import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'
 

export const metadata: Metadata = {
  title: 'Congruence Market Insights - Market Research & Consulting',
  description: 'Congruence is your trusted partner in navigating emerging opportunities and challenges through high-quality, tailored market research reports.',
  keywords: 'Congruence Market Insights, CMI, Market Research, Industry Analysis, Market Analysis, Global Market Trends, Business Intelligence, Custom Market Research, Strategic Insights, Market Dynamics, Emerging Opportunities, Competitive Landscape, Data-driven Decision Making, Market Forecast, Industry Reports, Tailored Research Solutions, Market Intelligence Services',
  alternates: {
    canonical: `https://www.congruencemarketinsights.com/`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark custom-bg`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
      <GoogleTagManager gtmId="GTM-PLCKML74" />
    </html>
  )
}
