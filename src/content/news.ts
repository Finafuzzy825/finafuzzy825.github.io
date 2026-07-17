import type { NewsEntry } from '@/types/content'

// 只发布已经联盟确认的公开内容，不使用示例新闻填充正式页面。
export const NEWS_ENTRIES: readonly NewsEntry[] = [
  {
    body: [
      {
        text: '中关村自主大模型产业联盟官方网站正式上线。网站围绕联盟“汇聚自主大模型力量，共建开放、安全、协同的产业生态”的定位，集中呈现联盟介绍、工作组、网络安全生态、成员伙伴与最新动态等内容。',
        type: 'paragraph',
      },
      { text: '网站提供的内容', type: 'heading' },
      {
        items: [
          '联盟介绍与发展定位',
          '工作组与网络安全生态的重点方向',
          '面向机构的生态共建与合作入口',
          '联盟动态与阶段进展的持续发布',
        ],
        type: 'list',
      },
      {
        text: '联盟坚持只发布经确认可公开的信息，成员与阶段成果内容将在完成公开授权确认后陆续更新。',
        type: 'paragraph',
      },
      {
        text: '欢迎相关机构通过官网“机构合作申请”了解参与方式，与联盟共建自主大模型产业生态。',
        type: 'paragraph',
      },
    ],
    category: 'news',
    date: '2026-07-17',
    description:
      '中关村自主大模型产业联盟官方网站正式上线，集中呈现联盟定位、重点工作、网络安全生态与机构合作入口。',
    featured: true,
    published: true,
    slug: 'alliance-website-launch',
    title: '联盟官方网站正式上线',
  },
]

export function getPublishedNews(entries: readonly NewsEntry[] = NEWS_ENTRIES): readonly NewsEntry[] {
  return entries
    .filter((entry) => entry.published)
    .sort((left: NewsEntry, right: NewsEntry) => right.date.localeCompare(left.date))
}

export function getPublishedNewsBySlug(slug: string): NewsEntry | undefined {
  return getPublishedNews().find((entry) => entry.slug === slug)
}
