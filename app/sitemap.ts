import { apiUrl } from '@/constants'
import type { MetadataRoute } from 'next'
export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const reports = await fetch(apiUrl + '/reports').then((res) => res.json())
  const pressReleases = await fetch(apiUrl + '/press_release').then((res) => res.json())
  let filteredReports:any = []
  reports.data.filter((result: any, i: number) => {
    if (!result.url.includes('&')) {
      filteredReports.push({
        url: ('https://www.visionarymarketinsights.com/report/' + result.url),
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      })
    }
  });
  pressReleases.data.filter((pr: any, i: number) => {
    if (!pr.url.includes('&')) {
      filteredReports.push({
        url: ('https://www.visionarymarketinsights.com/press-release/' + pr.url),
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      })
    }
  });
  return [
    {
      url: 'https://www.visionarymarketinsights.com/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.visionarymarketinsights.com/press-releases/all-industries',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.visionarymarketinsights.com/offering',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.visionarymarketinsights.com/contact',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.visionarymarketinsights.com/about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.visionarymarketinsights.com/career',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...filteredReports,
  ]
}