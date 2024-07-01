import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GoogleTagManager, GoogleAnalytics  } from '@next/third-parties/google' 

export const metadata: Metadata = {
  title: 'Visionary Market Insights - Market Research and Consulting',
  description: 'Visionary Market Insights is an expert market research and consulting firm providing global market research reports, market share analysis, and research reports',
  keywords: 'Global Market Research Reports, Market Research, US Market Research Report, North America Market Research Trends, South Korea Business Market Research Report, Europe Industry Analysis, Industry Reports, Business Research Reports, Competitive Analysis, Industry Analysis, Market Research Trends, Industry Analysis Report, Market Research Analysis',
  alternates: {
    canonical: `https://www.visionarymarketinsights.com/`,
  },
  verification: {
    google: 'kUkeAveUD0oKGBcoByBimJ1qqos-vufLCM5Y7L64H7c',
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
      <GoogleTagManager gtmId="G-BQS4XEDWBW" />
      {/* <GoogleAnalytics gaId="GTM-PLCKML74" /> */}
    </html>
  )
}
