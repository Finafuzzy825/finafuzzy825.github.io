import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    host: new URL(SITE_URL).origin,
    rules: {
      allow: '/',
      disallow: ['/admin', '/api'],
      userAgent: '*',
    },
    sitemap: new URL('/sitemap.xml', SITE_URL).toString(),
  }
}
