import type { NewsEntry } from '@/types/content'

// 只发布已经联盟确认的公开内容，不使用示例新闻填充正式页面。
export const NEWS_ENTRIES: readonly NewsEntry[] = []

export function getPublishedNews(entries: readonly NewsEntry[] = NEWS_ENTRIES): readonly NewsEntry[] {
  return entries
    .filter((entry) => entry.published)
    .sort((left: NewsEntry, right: NewsEntry) => right.date.localeCompare(left.date))
}

export function getPublishedNewsBySlug(slug: string): NewsEntry | undefined {
  return getPublishedNews().find((entry) => entry.slug === slug)
}
