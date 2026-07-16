import Link from 'next/link'
import type { ReactElement } from 'react'

import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import './(frontend)/styles.css'

export default function GlobalNotFound(): ReactElement {
  return (
    <html data-scroll-behavior="smooth" lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <SiteHeader />
        <main
          className="site-container flex min-h-[60vh] max-w-3xl flex-col items-start justify-center py-24"
          id="main-content"
        >
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--alliance-text-title)] sm:text-5xl">
            页面未找到
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--alliance-text-secondary)]">
            抱歉，你访问的页面不存在、已移动，或暂未公开。
          </p>
          <Link className="button-primary mt-10" href="/">
            返回首页
          </Link>
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
