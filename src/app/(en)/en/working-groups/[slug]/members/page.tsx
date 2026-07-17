import type { Metadata } from 'next'

import { generateMetadata as zhGenerateMetadata } from '@/app/(frontend)/working-groups/[slug]/members/page'
import { buildAlternates } from '@/i18n/routing'

interface EnPageProps {
  params: Promise<{ slug: string }>
}

// dynamicParams 为路由段配置值，须静态声明（不可 re-export）。
export const dynamicParams = false

export { default, generateStaticParams } from '@/app/(frontend)/working-groups/[slug]/members/page'

// 复用中文页元数据构建，仅把 canonical/hreflang 覆写为 en 对应 URL。
export async function generateMetadata(props: EnPageProps): Promise<Metadata> {
  const base = await zhGenerateMetadata(props)
  const { slug } = await props.params

  return {
    ...base,
    alternates: buildAlternates(`/working-groups/${slug}/members`, 'en'),
  }
}
