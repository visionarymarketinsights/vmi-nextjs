import { MetadataRoute } from 'next'
export const dynamic = 'force-dynamic'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/buy-now/',],
    },
    sitemap: 'https://www.visionarymarketinsights.com/sitemap.xml',
  }
}