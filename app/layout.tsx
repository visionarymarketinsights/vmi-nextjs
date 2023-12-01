import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Congruence Market Insights',
  description: 'Congruence Market Insights is a leading market research company dedicated to providing unparalleled insights and strategic intelligence.'
  , keywords: 'Global Market Insights, US Market Research, Congruence Market Reports, Market Analysis and Trends, Strategic Insights, Industry Statistics, Market Forecasting, Business Strategy Reports, Market Size and Share Analysis, Competitive Intelligence, Industry Trends and Insights, Data-driven Market Research, Global Business Strategies, Sector-specific Research Reports, Market Intelligence Solutions'
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
    </html>
  )
}
