import Link from 'next/link'
import type { ReactElement } from 'react'

export default function NotFound(): ReactElement {
  return (
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
  )
}
