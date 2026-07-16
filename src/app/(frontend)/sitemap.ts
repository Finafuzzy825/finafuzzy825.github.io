import type { MetadataRoute } from 'next'

import { getPublishedNews } from '@/content/news'
import { PUBLIC_STATIC_ROUTES, SITE_URL } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = PUBLIC_STATIC_ROUTES.map((route) => ({
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
    url: new URL(route, SITE_URL).toString(),
  }))

  const publishedNews: MetadataRoute.Sitemap = getPublishedNews().map((entry) => ({
    changeFrequency: 'never',
    lastModified: entry.date,
    priority: 0.6,
    url: new URL(`/news/${entry.slug}`, SITE_URL).toString(),
  }))

  return [...staticRoutes, ...publishedNews]
}
