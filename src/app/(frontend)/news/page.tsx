import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactElement } from 'react'

import { PageHero } from '@/components/site/page-hero'
import { getPublishedNews, NEWS_ENTRIES } from '@/content/news'
import type { NewsCategory, NewsEntry } from '@/types/content'

export const metadata: Metadata = {
  alternates: { canonical: '/news' },
  description: '查看联盟动态、活动通知、行业观察与阶段成果等已确认公开内容。',
  title: '新闻动态',
}

const NEWS_CATEGORY_LABELS: Readonly<Record<NewsCategory, string>> = {
  event: '活动',
  insight: '行业观察',
  news: '联盟动态',
  result: '阶段成果',
}

interface NewsListProps {
  entries: readonly NewsEntry[]
}

export function NewsList({ entries }: NewsListProps): ReactElement {
  const publishedEntries = getPublishedNews(entries)

  if (publishedEntries.length === 0) {
    return (
      <div className="surface-card px-6 py-12 text-center sm:px-10">
        <h2 className="text-2xl font-semibold text-[var(--alliance-text-title)]">
          最新动态即将发布
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--alliance-text-secondary)]">
          联盟正在整理经确认可公开的新闻、活动与阶段成果，正式内容发布后将在这里持续更新。
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {publishedEntries.map((entry) => (
        <article className="surface-card flex min-w-0 flex-col p-6 sm:p-8" key={entry.slug}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="font-semibold text-[var(--alliance-brand-primary)]">
              {NEWS_CATEGORY_LABELS[entry.category]}
            </span>
            <time className="text-[var(--alliance-text-secondary)]" dateTime={entry.date}>
              {entry.date}
            </time>
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--alliance-text-title)]">
            <Link className="hover:text-[var(--alliance-brand-primary)]" href={`/news/${entry.slug}`}>
              {entry.title}
            </Link>
          </h2>
          <p className="mt-4 flex-1 leading-8 text-[var(--alliance-text-secondary)]">
            {entry.description}
          </p>
          <Link
            aria-label={`阅读${entry.title}`}
            className="mt-7 font-semibold text-[var(--alliance-brand-primary)]"
            href={`/news/${entry.slug}`}
          >
            阅读详情
          </Link>
        </article>
      ))}
    </div>
  )
}

export default function NewsPage(): ReactElement {
  return (
    <main id="main-content">
      <PageHero
        description="发布经联盟确认的新闻、活动、行业观察与阶段成果，记录生态协作的真实进展。"
        eyebrow="NEWS & UPDATES"
        title="新闻动态"
      />
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <NewsList entries={NEWS_ENTRIES} />
      </div>
    </main>
  )
}
