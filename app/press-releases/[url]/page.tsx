import React from 'react'
import AllPressRelease from '@/components/AllPressRelease';

export async function generateMetadata({ params }:any, parent:any) {
    const { url } = params
    const siteURL = 'https://www.visionarymarketinsights.com';
    return {
        title: 'Press Releases | Market Research | Latest Product Announcements',
        description: 'Browse all the recent published latest press release',
        keywords: 'Global Market Research Reports, Market Research, US Market Research Report, North America Market Research Trends, South Korea Business Market Research Report, Europe Industry Analysis, Industry Reports, Business Research Reports, Competitive Analysis, Industry Analysis, Market Research Trends, Industry Analysis Report, Market Research Analysis',
        alternates: {
            canonical: `${siteURL}/press-releases/${url}`,
        },
    }
}


export default function PressReleases(params:any) {

    return (
        <AllPressRelease url={params.params.url} />
    );
}
