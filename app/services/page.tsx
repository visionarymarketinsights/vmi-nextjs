import React from 'react'
import ServicesPage from '../../components/ServicesPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Syndicate, Custom and Consulting Report Services from Visionary Market Insights',
    description: 'Unlock strategic advantages with Visionary Market Insights—your partner for syndicate reports, custom research, and consulting services.',
    keywords: 'Syndicate Reports, Custom Research, Consulting Services, Market Insights, Strategic Analysis, Tailored Solutions, Business Intelligence, Industry Trends, Data-driven Insights, Competitive Landscape, Emerging Markets, Comprehensive Research, Market Dynamics, Strategic Consulting, Customized Reports',
    alternates: {
        canonical: 'https://www.visionarymarketinsights.com/offering',
    },
}

export default function Offering() {

    return (
        <ServicesPage />
    )
}
