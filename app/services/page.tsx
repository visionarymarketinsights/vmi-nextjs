import React from 'react'
import ServicesPage from '../../components/ServicesPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Consulting Services | Visionary Market Insights',
    description: 'Visionary Market Insights offers a suite of Consulting Services such as Market Intelligence, Competitive Benchmarking, Consulting Services, Market Research Reports, Syndicated Research, Customer Surveys, Procurement Services',
    keywords: 'Global Market Research Reports, Market Research, US Market Research Report, North America Market Research Trends, South Korea Business Market Research Report, Europe Industry Analysis, Industry Reports, Business Research Reports, Competitive Analysis, Industry Analysis, Market Research Trends, Industry Analysis Report, Market Research Analysis',
    alternates: {
        canonical: 'https://www.visionarymarketinsights.com/offering',
    },
}

export default function Offering() {

    return (
        <ServicesPage />
    )
}
