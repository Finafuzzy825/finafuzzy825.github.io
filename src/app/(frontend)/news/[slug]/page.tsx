import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactElement } from 'react'

import { PageHero } from '@/components/site/page-hero'
import { getPublishedNews, getPublishedNewsBySlug, NEWS_ENTRIES } from '@/content/news'
import type { ContentBlock, NewsEntry } from '@/types/content'

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>
}

interface NewsArticleProps {
  entry: NewsEntry
}

export function createNewsStaticParams(
  entries: readonly NewsEntry[],
): { slug: string }[] {
  return getPublishedNews(entries).map((entry) => ({ slug: entry.slug }))
}

export function generateStaticParams(): { slug: string }[] {
  return createNewsStaticParams(NEWS_ENTRIES)
}

export function createNewsMetadata(entry: NewsEntry): Metadata {
  return {
    alternates: { canonical: `/news/${entry.slug}` },
    description: entry.description,
    openGraph: {
      description: entry.description,
      title: entry.title,
      type: 'article',
      url: `/news/${entry.slug}`,
    },
    title: entry.title,
  }
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = getPublishedNewsBySlug(slug)

  if (!entry) notFound()

  return createNewsMetadata(entry)
}

function ContentBlockView({ block }: { block: ContentBlock }): ReactElement {
  switch (block.type) {
    case 'heading':
      return (
        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-[var(--alliance-text-title)] first:mt-0 sm:text-3xl">
          {block.text}
        </h2>
      )
    case 'list':
      return (
        <ul className="my-6 list-disc space-y-3 pl-6 leading-8 text-[var(--alliance-text-primary)] marker:text-[var(--alliance-brand-primary)]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'paragraph':
      return (
        <p className="my-6 leading-8 text-[var(--alliance-text-primary)] sm:text-lg">
          {block.text}
        </p>
      )
  }
}

export function NewsArticle({ entry }: NewsArticleProps): ReactElement {
  return (
    <>
      <PageHero description={entry.description} eyebrow={entry.category} title={entry.title} />
      <article className="site-container max-w-4xl py-14 sm:py-18 lg:py-20">
        <div className="border-b border-[var(--alliance-border)] pb-6">
          <time className="text-sm text-[var(--alliance-text-secondary)]" dateTime={entry.date}>
            发布日期：{entry.date}
          </time>
        </div>
        <div className="py-10">
          {entry.body.map((block, index) => (
            <ContentBlockView block={block} key={`${block.type}-${index}`} />
          ))}
        </div>
        <div className="border-t border-[var(--alliance-border)] pt-8">
          <Link className="button-secondary" href="/news">
            返回新闻中心
          </Link>
        </div>
      </article>
    </>
  )
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps): Promise<ReactElement> {
  const { slug } = await params
  const entry = getPublishedNewsBySlug(slug)

  if (!entry) notFound()

  return (
    <main id="main-content">
      <NewsArticle entry={entry} />
    </main>
  )
}
