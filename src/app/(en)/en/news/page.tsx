import type { Metadata } from 'next'

import { metadata as zhMetadata } from '@/app/(frontend)/news/page'
import { buildAlternates } from '@/i18n/routing'

// 英文薄壳：复用中文页组件（正文本轮回退中文），仅覆写 hreflang/canonical 为 en。
export const metadata: Metadata = {
  ...zhMetadata,
  alternates: buildAlternates('/news', 'en'),
}

export { default } from '@/app/(frontend)/news/page'
