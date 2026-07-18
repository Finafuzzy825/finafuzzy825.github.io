import type { ReactElement, ReactNode } from 'react'

import { dict } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/locales'
import { siteStructuredData } from '@/lib/structured-data'
import { JsonLd } from './json-ld'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

/**
 * 站点外壳：skip-link + 站级 JSON-LD + 页头 + 正文 + 页脚。
 * 中英两个根布局共用，仅传入的 `locale` 不同——chrome 文案与链接
 * 由各组件按 locale 从字典/路由映射派生，零逻辑重复。
 */
export function SiteChrome({
  children,
  locale,
}: {
  children: ReactNode
  locale: Locale
}): ReactElement {
  return (
    <>
      <JsonLd data={siteStructuredData(locale)} />
      <a className="skip-link" href="#main-content">
        {dict(locale).skipToContent}
      </a>
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </>
  )
}
