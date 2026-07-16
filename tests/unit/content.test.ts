import { CYBERSECURITY_ECOSYSTEM } from '@/content/cybersecurity'
import { getPublishedNews, NEWS_ENTRIES } from '@/content/news'
import { WORKING_GROUPS } from '@/content/working-groups'
import { describe, expect, it } from 'vitest'

describe('public website content', () => {
  it('keeps the cybersecurity ecosystem open to different foundation models', () => {
    expect(CYBERSECURITY_ECOSYSTEM.principles).toContain('厂商中立')
    expect(CYBERSECURITY_ECOSYSTEM.summary).toContain('不同基础模型')
  })

  it('links the cybersecurity initiative from the working group catalog', () => {
    expect(WORKING_GROUPS).toContainEqual(
      expect.objectContaining({ href: '/cybersecurity', id: 'cybersecurity-ecosystem' }),
    )
  })

  it('publishes only explicitly published news with unique slugs', () => {
    const publishedNews = getPublishedNews(NEWS_ENTRIES)
    const slugs = publishedNews.map(({ slug }) => slug)

    expect(publishedNews.every(({ published }) => published)).toBe(true)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})
