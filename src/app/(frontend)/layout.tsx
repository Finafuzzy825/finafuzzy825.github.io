import type { Metadata } from 'next'
import React from 'react'

import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/config/site'
import './styles.css'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description: SITE_DESCRIPTION,
    locale: 'zh_CN',
    siteName: SITE_NAME,
    title: SITE_NAME,
    type: 'website',
    url: '/',
  },
  title: {
    default: `${SITE_NAME}｜官方网站`,
    template: `%s｜${SITE_NAME}`,
  },
}

export default function RootLayout(props: { children: React.ReactNode }): React.ReactElement {
  const { children } = props

  return (
    <html data-scroll-behavior="smooth" lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
