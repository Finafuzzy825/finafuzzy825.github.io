import Link from 'next/link'
import type { ReactElement } from 'react'

import { SITE_NAME, SITE_NAVIGATION } from '@/config/site'

export function SiteFooter(): ReactElement {
  return (
    <footer className="site-footer">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.1fr_1fr]">
        <div className="max-w-xl">
          <p className="text-lg font-semibold text-[var(--alliance-text-inverse)]">{SITE_NAME}</p>
          <p className="mt-4 text-sm leading-7 text-[var(--alliance-text-inverse-muted)]">
            汇聚自主大模型产业创新力量，连接技术、场景、人才与生态资源。
          </p>
          <p className="mt-4 text-sm text-[var(--alliance-text-inverse-muted)]">
            联系信息将在正式发布前补充
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="footer-heading">网站导航</p>
            <div className="mt-4 grid gap-3">
              {SITE_NAVIGATION.slice(0, 3).map((item) => (
                <Link className="footer-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-heading">参与联盟</p>
            <div className="mt-4 grid gap-3">
              <Link className="footer-link" href="/join">
                生态共建
              </Link>
              <Link className="footer-link" href="/professionals">
                专业用户
              </Link>
              <Link className="footer-link" href="/members">
                成员伙伴
              </Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">相关信息</p>
            <div className="mt-4 grid gap-3">
              <Link className="footer-link" href="/news">
                新闻动态
              </Link>
              <Link className="footer-link" href="/privacy">
                隐私说明
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-[var(--alliance-text-inverse-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
          <p>备案信息将在正式发布前补充</p>
        </div>
      </div>
    </footer>
  )
}
